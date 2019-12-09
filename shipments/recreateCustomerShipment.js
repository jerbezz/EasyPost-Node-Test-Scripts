require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {
  "created_at": "2019-12-04T23:07:37Z",
  "is_return": false,
  "messages": [
    {
      "carrier": "DHLGlobalMail",
      "carrier_account_id": "ca_487a735510c247cbb437d04d2ff10cce",
      "type": "rate_error",
      "message": "DHLGlobalMail does not support international shipments."
    }
  ],
  "mode": "production",
  "options": {
    "incoterm": "DDP",
    "label_format": "PNG",
    "print_custom_3": "3856891",
    "label_date": "2019-12-04T23:07:34+00:00",
    "print_custom_1": "3856891",
    "print_custom_2": "1035 3856891",
    "currency": "USD",
    "delivered_duty_paid": true,
    "print_custom": [
      {
        "name": null,
        "value": "3856891",
        "barcode": null
      },
      {
        "name": null,
        "value": "1035 3856891",
        "barcode": null
      },
      {
        "name": null,
        "value": "3856891",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "date_advance": 0
  },
  "reference": "3856891",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2019-12-04T23:07:39Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_9fc775eb1c3e4ffea8f9088fa74c61e4",
    "object": "CustomsInfo",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "contents_explanation": "Gloves",
    "contents_type": "merchandise",
    "customs_certify": true,
    "customs_signer": "EI",
    "eel_pfc": "NOEEI 30.37(a)",
    "non_delivery_option": "return",
    "restriction_comments": null,
    "restriction_type": "none",
    "mode": "production",
    "declaration": null,
    "customs_items": [
      {
        "id": "cstitem_a9bfb83443394c3496fab618d6a86fe3",
        "object": "CustomsItem",
        "created_at": "2019-12-04T23:07:37Z",
        "updated_at": "2019-12-04T23:07:37Z",
        "description": "GLOVE",
        "hs_tariff_number": "611693",
        "origin_country": "CN",
        "quantity": 1,
        "value": "8.94",
        "weight": 0.1,
        "code": "S404A-L",
        "mode": "production",
        "manufacturer": null,
        "currency": null
      }
    ]
  },
  "from_address": {
    "id": "adr_eea336a0d3be4efa88a25e42b3250011",
    "object": "Address",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "name": "",
    "company": "Excelsior Integrated",
    "street1": "705 Pleasant St.",
    "street2": "",
    "city": "Lee",
    "state": "MA",
    "zip": "01238",
    "country": "US",
    "phone": "14136370600",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_24a7bbc7aa9745efb0260412ae9a4910",
    "object": "Parcel",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "length": 9,
    "width": 6,
    "height": 2,
    "predefined_package": null,
    "weight": 4,
    "mode": "production"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_6f41acb2f41f4f74855a9b32e9c123a1",
    "object": "Address",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "name": "DESIREE WINTERS",
    "company": "",
    "street1": "4415 32 AVE SW",
    "street2": "",
    "city": "CALGARY",
    "state": "AB",
    "zip": "T3E 0X1",
    "country": "CA",
    "phone": "5879681145",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": true,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_c737e5203dd945fd9b1a10fa806aacad",
    "object": "Address",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "name": "TRAILHEADS",
    "company": "",
    "street1": "17 Meadow Street",
    "street2": "",
    "city": "Kent",
    "state": "CT",
    "zip": "06757",
    "country": "US",
    "phone": "4136370600",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_6f41acb2f41f4f74855a9b32e9c123a1",
    "object": "Address",
    "created_at": "2019-12-04T23:07:37Z",
    "updated_at": "2019-12-04T23:07:37Z",
    "name": "DESIREE WINTERS",
    "company": "",
    "street1": "4415 32 AVE SW",
    "street2": "",
    "city": "CALGARY",
    "state": "AB",
    "zip": "T3E 0X1",
    "country": "CA",
    "phone": "5879681145",
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": true,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2019-12-04T23:07:39Z",
      "updated_at": "2019-12-04T23:07:39Z",
      "mode": "production",
      "service": "ExpressWorldwideNonDoc",
      "carrier": "DHLExpress",
      "rate": "30.58",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 1,
      "delivery_date": "2019-12-05T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 1,
      "shipment_id": "shp_81dcfbac5d91406ba6cd91a8609669a1",
      "carrier_account_id": "ca_7b758d06ebc6407a87cbc245e17e4037",
      "id": "rate_6b5746ebd42b4bf0a1465ad72e98d808"
    },
    {
      "object": "Rate",
      "created_at": "2019-12-04T23:07:39Z",
      "updated_at": "2019-12-04T23:07:39Z",
      "mode": "production",
      "service": "ExpressEasyNonDoc",
      "carrier": "DHLExpress",
      "rate": "0.01",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 1,
      "delivery_date": "2019-12-05T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 1,
      "shipment_id": "shp_81dcfbac5d91406ba6cd91a8609669a1",
      "carrier_account_id": "ca_7b758d06ebc6407a87cbc245e17e4037",
      "id": "rate_a1ed761be9f24f4982c959811ff082e3"
    },
    {
      "object": "Rate",
      "created_at": "2019-12-04T23:07:39Z",
      "updated_at": "2019-12-04T23:07:39Z",
      "mode": "production",
      "service": "MedicalExpressNonDoc",
      "carrier": "DHLExpress",
      "rate": "0.01",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 1,
      "delivery_date": "2019-12-05T00:00:00Z",
      "delivery_date_guaranteed": null,
      "est_delivery_days": 1,
      "shipment_id": "shp_81dcfbac5d91406ba6cd91a8609669a1",
      "carrier_account_id": "ca_7b758d06ebc6407a87cbc245e17e4037",
      "id": "rate_b311b1bacbfa43c1849c3d5fd9c66766"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_81dcfbac5d91406ba6cd91a8609669a1"
}



//=========================================================================================================================

delete ship.to_address.id
delete ship.to_address.mode
delete ship.to_address.updated_at
delete ship.to_address.created_at
delete ship.from_address.id
delete ship.from_address.created_at
delete ship.from_address.mode
delete ship.from_address.updated_at
delete ship.parcel.id
delete ship.parcel.created_at
delete ship.parcel.mode
delete ship.parcel.updated_at

if (ship.parcel.predefined_package === null) {
  delete ship.parcel.predefined_package
};

if (ship.customs_info) {
delete ship.customs_info.id
delete ship.customs_info.created_at
delete ship.customs_info.mode
delete ship.customs_info.updated_at
for (i = 0; i < ship.customs_info.customs_items.length; i++) {
  delete ship.customs_info.customs_items[i].id
  delete ship.customs_info.customs_items[i].created_at
  delete ship.customs_info.customs_items[i].mode
  delete ship.customs_info.customs_items[i].updated_at
  if(ship.customs_info.customs_items[i].currency === null) {
    delete ship.customs_info.customs_items[i].currency
  }
 }
}



const shipment = new api.Shipment({
    to_address: ship.to_address,
    from_address: ship.from_address,
    parcel: ship.parcel,
    customs_info: ship.customs_info,
    options: ship.options,
    carrier_accounts: ['ca_ddd5cfef5c39408c945124fcde5c7bb6'],
    // reference: 'blah'
    // is_return: true
})

shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'First')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_62f98549d87846538d6bdccb16c7e545').then(s => {
//   s.buy('rate_4c9d8fa4c64f4c9c9bbd964febd19a78').then(console.log).catch(console.log);
// }).catch(console.log);