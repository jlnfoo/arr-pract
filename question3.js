const mockData = require("./mockData.json");

//3. console log out the full names of all the people that has a stock with a position greater than 200

for (let i = 0; i < mockData.length; i++) {
  const fullName = `${mockData[i].firstName} ${mockData[i].lastName}`;

  let moreThan200 = false;

  for (let k = 0; k < mockData[i].portfolio.length; k++) {
    if (mockData[i].portfolio[k].position > 200) {
      moreThan200 = true;
    }
  }

  if (moreThan200) {
    console.log(
      "Full name of person with stock position of more than 200 : " + fullName
    );
  }
}
