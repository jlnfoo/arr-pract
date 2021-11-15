const mockData = require('./mockData.json');

//2. console log out the full names of all the people that has at least 3 stocks in their portfolio


for (let j = 0; j <mockData.length; j++) {
    const numOfStocks = mockData[j].portfolio.length; //displays num of obj in each portfolio array
    
        if (numOfStocks >= 3) {
            const fullName = mockData[j].firstName + " " + mockData[j].lastName;
            console.log("Full name of person with 3 or more stocks : " + fullName);
        }
    }

    


