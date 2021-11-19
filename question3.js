const mockData = require('./mockData.json');

//3. console log out the full names of all the people that has a stock with a position greater than 200

for (let j = 0; j <mockData.length; j++) {
    let fullName;
    let atLeastOne;

    const numOfStocks = mockData[j].portfolio.length; //displays num of obj in each portfolio array

            // to prevent "undefined" in final console log
            // if (numOfStocks >= 1) {
            //     atLeastOne = mockData[j].firstName + " " + mockData[j].lastName;
            //     //console.log(atLeastOne);
            // }

        for(let k = 0; k<mockData[j].portfolio.length; k++){
            const portPosition = mockData[j].portfolio[k].position;

            if ( numOfStocks >= 1 && portPosition > 200) {
                fullName = mockData[j].firstName + " " + mockData[j].lastName;
            }
        }

console.log("Full name of person with portfolio position of more than 200 : " + fullName);
}


/* BEFORE
// issue - displays duplicated names, if person A has 3 stocks of position more than 200, displayed three times

for (let j = 0; j <mockData.length; j++) {
    for(let k = 0; k<mockData[j].portfolio.length; k++){
        const portPosition = mockData[j].portfolio[k].position;

        if (portPosition > 200) {
       const fullName = mockData[j].firstName + " " + mockData[j].lastName;
       console.log("Full name of person with portfolio position of more than 200 : " + fullName);
       }

    }
}

*/