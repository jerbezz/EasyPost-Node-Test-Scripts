require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// const trackArray = ['EZ2000000002', 'EZ7000000007']

const tracker1 = new api.Tracker({
  // tracking_code: trackArray[0],
  tracking_code: '0004089784600002858294105362000',
  carrier: 'USPS'
});


tracker1.save().then(console.log).catch(console.log);