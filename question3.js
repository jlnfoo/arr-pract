const mockData = require('./mockData.json');

//3. console log out the full names of all the people that has a stock with a position greater than 200


for (let j = 0; j <mockData.length; j++) {
    for(let k = 0; k<mockData[j].portfolio.length; k++){
        const portPosition = mockData[j].portfolio[k].position;

        let profilesArr  = [];
        if (portPosition > 200) {
            console.log(mockData[j].portfolio[k]);  //{}{}{}

            // const profiles = mockData[j]; //returns various objects - {}{}{}
            // profilesArr.push(profiles); 
            // console.log(profilesArr); // [{}][{}][{}] ?????????????

       //const fullName = mockData[j].firstName + " " + mockData[j].lastName;
       //console.log("Full name of person with portfolio position of more than 200 : " + fullName);
       }

    }
}