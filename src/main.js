import { strict } from 'assert';

const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  
  // Register a method to supply a random western name.
  DataSupplier.registerDataSupplier('public.text', 'Western name', 'SupplyName');

  // Register a method to supply a random group name.
  DataSupplier.registerDataSupplier('public.text', 'Group name', 'SupplyGroupName');
  
  // Register a method to supply a random job title.
  DataSupplier.registerDataSupplier('public.text', 'Job title', 'SupplyJobTitle');

  // Register a method to supply a random file name.
  DataSupplier.registerDataSupplier('public.text', 'File name', 'SupplyFileName');

  // Register a method to supply a random news title.
  DataSupplier.registerDataSupplier('public.text', 'News title', 'SupplyNewsTitle');

  // Register a method to supply a random private message.
  DataSupplier.registerDataSupplier('public.text', 'Private message', 'SupplyPrivateMessage');

  // Register a method to supply a random update.
  DataSupplier.registerDataSupplier('public.text', 'Update', 'SupplyUpdate');

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

export function onSupplyName (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
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

export function onSupplyJobTitle (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/job-titles.json');
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyFileName (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/file-names.json');
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyGroupName (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/group-names.json');
    var selectedData = [];
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        selectedData.push(randomItem);
    })

    // Sort array alphabetically
    selectedData.sort().reverse();
    console.log(selectedData);

    items.forEach((item, index) => {
        DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
    })
}

export function onSupplyNewsTitle (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/news-titles.json');
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyPrivateMessage (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/private-messages.json');
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyUpdate (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    var dataArray = require('./data/updates.json');
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
        DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
    }) 
}

export function onSupplyNumber (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
    const items = util.toArray(context.data.items).map(sketch.fromNative)
    
    // Start the data to be provided at a random position in the array.
    items.forEach((item, index) => {
        var randomNumber = Math.floor(Math.random() * Math.floor(300));
        DataSupplier.supplyDataAtIndex(dataKey, randomNumber.toString(), index);
    }) 
}

export function onSupplyEmailAddress (context) {
    var dataKey = context.data.key;
    var dataCount = context.data.requestedCount;
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
    var dataCount = context.data.requestedCount;
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
    var dataCount = context.data.requestedCount;
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
    var dataCount = context.data.requestedCount;
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
