require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  verify: ['delivery'],
  company: 'Utah State Tax Commission',
  name: 'Josh Quarnberg',
  street1: '150 E Center St',
  street2: 'Ste. 1300',
  city: 'Provo',
  state: 'UT',
  zip: '84606',
  country: 'US',
  phone: '8012972100',
  email: 'email@email.com'
});

const fromAddress = new api.Address({
  // company: "The UPS Store",
  name: 'Jeremy Bezzant',
  street1: '1901 W 550 N',
  // street2: '',
  city: 'Lehi',
  state: 'UT',
  zip: '84043',
  country: 'US',
  phone: '8011001234',
  email: 'testing@email.com'
});


// fromAddress.save().then(console.log).catch(console.log);

// toAddress.save().then(console.log).catch(console.log);

// This one shows errors
fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'Parcel',
  length: 12,
  width: 12,
  height: 18,
  weight: 36,
});


// parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
    options: {
      print_custom_1: 'Goods or Documents',
      // print_custom_2: 'Please Work',
      // print_custom_3: 'Why Me',
      // print_custom_1_code: 'BM',
      // print_custom_2_code: '9V',
      // print_custom_3_code: 'ON'
    },
    carrier_accounts: ['ca_d504e1e42a324bc0aede62289b1ea244']
});


shipment.save().then(console.log).catch(console.log);



//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);



// ============Buy Shipment by ID============
//  



//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'First')
//     .then(console.log).catch(console.log);
// }).catch(console.log);