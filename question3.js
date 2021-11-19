const mockData = require('./mockData.json');

//3. console log out the full names of all the people that has a stock with a position greater than 200

for (let j = 0; j <mockData.length; j++) {
    let fullName;
    let atLeastOne;

    const numOfStocks = mockData[j].portfolio.length; 

    // skips over people with no stock
    // The continue statement "jumps over" one iteration in the loop
     if (!numOfStocks) {
        continue;
     } 
     else if (numOfStocks >= 1) {
        atLeastOne = mockData[j].portfolio.length; 
    }

        for(let k = 0; k < atLeastOne; k++){
            const portPosition = mockData[j].portfolio[k].position;

            if (portPosition > 200) {
            fullName = mockData[j].firstName + " " + mockData[j].lastName;
            }
        }

    console.log("Full name of person with portfolio position of more than 200 : " + fullName);
    }

