type MockData = {
    id: number;
    firstName: string;
    lastName: string;
    portfolio: Stock[];
  }
  
  type Stock = {
    ticker: string;
    position: number;
    price: string;
  }
  
  const mockData = require('./mockData.json');
  // typeof mockData -> MockData[]


  /* mockdata
[{"id":1,"firstName":"Giacinta","lastName":"Dole","portfolio":[{"ticker":"CCRN","position":701,"price":"$43.49"},{"ticker":"KTWO","position":570,"price":"$26.79"},{"ticker":"SPE^B","position":489,"price":"$61.78"}]}]
[id, firstname, lastname, portfolio:[]]
type of portfolio = stock[]
*/
