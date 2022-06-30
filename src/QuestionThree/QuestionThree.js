import fetch from 'node-fetch';
async function thisIsSyncFunction() {
    //Code change, add await here so that function actually waits for fetch to be complete first before
    //Reassigning a new value to the result
    //Console.log happens BEFORE the promise is ran, so moving the value assignment OUTSIDE allows the reassignment to
    //happen BEFORE console.log is ran, since var assignment is not asynchronous, so the code is run top to bottom
    //The reassignment comes first so it is run first, that it triggers a promise is irrelevant, console.log will now wait
    //for that promise to complete
    let result = await fetch("https://codequiz.azurewebsites.net/", {
        method: "GET",
        headers: {
            Cookie: "hasCookie=true",
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            // console.log(JSON.stringify(res));
            return res.text();
        })
        .then((response) => {
            return response
        })
        .catch((error) => {
            throw new Error(error.message); // Throws new error so that we can let the outer block catch it instead
        });

    return result;
}

thisIsSyncFunction()
    .then((data) => {
        let newData = JSON.stringify(data);
        newData = newData.split("<td>")
        newData = newData.slice(1);
        newData.forEach((element,index) => {
            let tmp = element.replace("</td>","")
            tmp = tmp.replace("</tr><tr>", "");
            
            if(tmp.indexOf('</tr>') !== -1){
                tmp = tmp.slice(0, tmp.indexOf("</tr>"));
            }
            newData[index] = tmp;
        });
        const stockObject = {
            [newData[0]]: [...newData.slice(1,5)],
            [newData[5]]: newData.slice(6,10),
            [newData[10]]: newData.slice(11,15),
            [newData[15]]: newData.slice(16,20)
        }
        let userInput = process.argv[2].toUpperCase();
        console.log(stockObject[userInput][0]);
    })
    .catch((error) => {
        console.error(error.message);
    });
