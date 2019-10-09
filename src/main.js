import { strict } from 'assert';

const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')
var Style = require('sketch/dom').Style;

export function onStartup () {
  
    // Register methods to supply data.
    DataSupplier.registerDataSupplier('public.text', 'Western name', 'SupplyName');
    DataSupplier.registerDataSupplier('public.text', 'Group name', 'SupplyGroupName');
    DataSupplier.registerDataSupplier('public.text', 'Department name', 'SupplyDeptName');
    DataSupplier.registerDataSupplier('public.text', 'Job title', 'SupplyJobTitle');
    DataSupplier.registerDataSupplier('public.text', 'File name', 'SupplyFileName');
    DataSupplier.registerDataSupplier('public.text', 'News title', 'SupplyNewsTitle');
    DataSupplier.registerDataSupplier('public.text', 'Event title', 'SupplyEventTitle');
    DataSupplier.registerDataSupplier('public.text', 'Private message', 'SupplyPrivateMessage');
    DataSupplier.registerDataSupplier('public.text', 'Update / Short', 'SupplyUpdateShort');
    DataSupplier.registerDataSupplier('public.text', 'Update / Long', 'SupplyUpdateLong');
    DataSupplier.registerDataSupplier('public.text', 'FontAwesome icon name', 'SupplyIcon');
    DataSupplier.registerDataSupplier('public.text', 'Number', 'SupplyNumber');
    DataSupplier.registerDataSupplier('public.text', 'Email address', 'SupplyEmailAddress');
    DataSupplier.registerDataSupplier('public.text', 'Phone number', 'SupplyPhoneNumber');
    DataSupplier.registerDataSupplier('public.text', 'Timestamp / Minutes', 'SupplyTimestampMinutes');
    DataSupplier.registerDataSupplier('public.text', 'Timestamp / Full date', 'SupplyTimestampFullDate');
    DataSupplier.registerDataSupplier('public.image', 'Country flags', 'SupplyFlag');

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

export function onSupplyEventTitle (context) {
    retrieveData('event-titles', context);
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

export function onSupplyIcon (context) {
    retrieveData('font-awesome', context);
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
        DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
    }) 
}

export function onSupplyTimestampFullDate (context) {
    var dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative);

    var monthsArray = ["January", "February", "March", "April", "June", "July", "August", "September", "Oktober", "November", "December"]
    
    items.forEach((item, index) => {
        // Get random day
        const randomNumber = Math.floor(Math.random() * Math.floor(29));
        const randomMonth = monthsArray[Math.floor(Math.random() * monthsArray.length)];
        const timestamp = randomMonth + " " + randomNumber.toString() + ", 2019";
        DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
    }) 
}

export function onSupplyFlag (context) {
    const dataKey = context.data.key;
    const items = util.toArray(context.data.items).map(sketch.fromNative);
    
    var dataArray = require('./data/flags.json');

    // Iterate over selected shapes
    items.forEach((item, index) => {
        const randomKey = Math.floor(Math.random() * dataArray.length);
        const imagePath = 'https://static.staging.speakap.io/img/flags/' + dataArray[randomKey] + '.png';
        const image = fetchImage(imagePath);

        DataSupplier.supplyDataAtIndex(dataKey, imagePath, index);

        setImage(image, item);
    })

    // Fetch the flag image remotely
    function fetchImage(url,ingnoreCache) {
        var request = ingnoreCache ?NSURLRequest.requestWithURL_cachePolicy_timeoutInterval(NSURL.URLWithString(url),NSURLRequestReloadIgnoringLocalCacheData,60) : NSURLRequest.requestWithURL(NSURL.URLWithString(url));
        var responsePtr = MOPointer.alloc().init();
        var errorPtr = MOPointer.alloc().init();
    
        var data = NSURLConnection.sendSynchronousRequest_returningResponse_error(request, responsePtr, errorPtr);
        if(errorPtr.value() != null) {
            print(errorPtr.value());
            return null;
        }
    
        var response = responsePtr.value();
        if(response.statusCode() != 200) {
            return null;
        }
    
        var mimeType = response.allHeaderFields()["Content-Type"];
        if(!mimeType || !mimeType.hasPrefix("image/")) {
            return null;
        }
    
        return NSImage.alloc().initWithData(data);
    }

    // Set image as fill
    function setImage (image, layer) {

        if(image) {
            layer.style.fills = [{
                fillType: Style.FillType.Pattern,
                pattern: {
                    patternType: Style.PatternFillType.Fit,
                    image: MSImageData.alloc().initWithImage(image)
                }
            }]
        } else {
            console.log('No image loaded');
            return null;
        }
    }
}
