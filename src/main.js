import { strict } from 'assert';

const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  
  // Register a method to supply a random western name.
  DataSupplier.registerDataSupplier('public.text', 'Western name', 'SupplyName');

  // Register a method to supply a random group name.
  DataSupplier.registerDataSupplier('public.text', 'Group name', 'SupplyGroupName');

  // Register a method to supply a random department name.
  DataSupplier.registerDataSupplier('public.text', 'Department name', 'SupplyDeptName');
  
  // Register a method to supply a random job title.
  DataSupplier.registerDataSupplier('public.text', 'Job title', 'SupplyJobTitle');

  // Register a method to supply a random file name.
  DataSupplier.registerDataSupplier('public.text', 'File name', 'SupplyFileName');

  // Register a method to supply a random news title.
  DataSupplier.registerDataSupplier('public.text', 'News title', 'SupplyNewsTitle');

  // Register a method to supply a random private message.
  DataSupplier.registerDataSupplier('public.text', 'Private message', 'SupplyPrivateMessage');

  // Register a method to supply a random short update.
  DataSupplier.registerDataSupplier('public.text', 'Update / Short', 'SupplyUpdateShort');

  // Register a method to supply a random long update.
  DataSupplier.registerDataSupplier('public.text', 'Update / Long', 'SupplyUpdateLong');

  // Register a method to supply a random number.
  DataSupplier.registerDataSupplier('public.text', 'Number', 'SupplyNumber');

  // Register a method to supply a random email address.
  DataSupplier.registerDataSupplier('public.text', 'Email address', 'SupplyEmailAddress');

  // Register a method to supply a random phone number.
  DataSupplier.registerDataSupplier('public.text', 'Phone number', 'SupplyPhoneNumber');

  // Register a method to supply a random timestamp in minutes.
  DataSupplier.registerDataSupplier('public.text', 'Timestamp / Minutes', 'SupplyTimestampMinutes');

  // Register a method to supply a random timestamp in full date.
  DataSupplier.registerDataSupplier('public.text', 'Timestamp / Full date', 'SupplyTimestampFullDate');
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function retrieveData (filename, context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/' + filename + '.json');
    
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyJobTitle (context) {
    retrieveData('job-titles', context);
}

export function onSupplyFileName (context) {
    retrieveData('file-names', context);
}

export function onSupplyNewsTitle (context) {
    retrieveData('news-titles', context);
}

export function onSupplyPrivateMessage (context) {
    retrieveData('private-messages', context);
}

export function onSupplyUpdateShort (context) {
    retrieveData('updates-short', context);
}

export function onSupplyUpdateLong (context) {
    retrieveData('updates-long', context); 
}

export function onSupplyName (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/western-names.json');
    var selectedData = [];
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        let randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        selectedData.push(randomItem);
    })

    // Sort array alphabetically
    selectedData.sort().reverse();

    items.forEach((item, index) => {
        DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
    })
}

export function onSupplyGroupName (context) {
    const dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/group-names.json');
    var selectedData = [];
    var selectedKeys = [];
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {

        // Get random key
        var randomKey = Math.floor(Math.random() * dataArray.length);

        // Check if random key is already in selected keys
        var i = 0;
        while(selectedKeys.includes(randomKey) && i < dataArray.length) {
            i++;
            // If it's already in selected keys, generate a new one
            randomKey = Math.floor(Math.random() * dataArray.length);
            //console.log("Random key already in array", randomKey);
        }

        if(i >= dataArray.length) {
            selectedData.push("Out of data");
        } else {
            // Push new key into selected keys
            selectedKeys.push(randomKey);
            //console.log("Pushed new key into array", selectedKeys);

            // Grab new item and push it into selected data
            var randomItem = dataArray[randomKey];
            selectedData.push(randomItem);
            //console.log("Pushed new data into array", selectedData);
        }
    })

    // Sort array alphabetically
    selectedData.sort().reverse();

    items.forEach((item, index) => {
        DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
    })
}

export function onSupplyDeptName (context) {
    const dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/department-names.json');
    var selectedData = [];
    var selectedKeys = [];
    
    // Get data for all selected layers
    items.forEach((item, index) => {

        // Get random key
        var randomKey = Math.floor(Math.random() * dataArray.length);

        // Check if random key is already in selected keys
        var i = 0;
        while(selectedKeys.includes(randomKey) && i < dataArray.length) {
            i++;
            // If it's already in selected keys, generate a new one
            randomKey = Math.floor(Math.random() * dataArray.length);
        }

        if(i >= dataArray.length) {
            selectedData.push("Out of data");
        } else {
            // Push new key into selected keys
            selectedKeys.push(randomKey);

            // Grab new item and push it into selected data
            var randomItem = dataArray[randomKey];
            selectedData.push(randomItem);
        }
    })

    // Sort array alphabetically
    selectedData.sort().reverse();

    items.forEach((item, index) => {
        DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
    })
}

export function onSupplyNumber (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomNumber = Math.floor(Math.random() * Math.floor(300));
        DataSupplier.supplyDataAtIndex(dataKey, randomNumber.toString(), index);
    }) 
}

export function onSupplyEmailAddress (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/western-names.json');
    
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        randomItem = randomItem.toLowerCase().replace(" ", ".") + "@domain.com";
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    })
}

export function onSupplyPhoneNumber (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        let randomNumberOne = Math.floor(100 + Math.random() * 900);
        let randomNumberTwo = Math.floor(1000 + Math.random() * 9000);
        let phoneNumber = "1 415-" + randomNumberOne.toString() + "-" + randomNumberTwo.toString();
        DataSupplier.supplyDataAtIndex(dataKey, phoneNumber, index);
    }) 
}

export function onSupplyTimestampMinutes (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    items.forEach((item, index) => {
        // Get minute
        let randomNumber = Math.floor(Math.random() * Math.floor(45));
        let timestamp = randomNumber.toString() + " minutes ago";
        //console.log(timestamp);
        DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
    }) 
}

export function onSupplyTimestampFullDate (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative)

    var monthsArray = ["January", "February", "March", "April", "June", "July", "August", "September", "Oktober", "November", "December"]
    
    items.forEach((item, index) => {
        // Get random day
        const randomNumber = Math.floor(Math.random() * Math.floor(29));
        const randomMonth = monthsArray[Math.floor(Math.random() * monthsArray.length)];
        const timestamp = randomMonth + " " + randomNumber.toString() + ", 2019";
        console.log(timestamp);
        DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
    }) 
}
