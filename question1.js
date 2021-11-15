const mockData = require('./mockData.json');

//1. console log out the full names of all the people in the data set
// your answer here:

for (let i = 0; i < mockData.length; i++) {
    const nameList = "Full name is: " + mockData[i].firstName + " " + mockData[i].lastName ;
    console.log(nameList);
}