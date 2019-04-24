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
    selectedData.sort();

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
    selectedData.sort();
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

