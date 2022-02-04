const csvtojson = require('csvtojson');
const csvfilepath = "XAGUSD60.csv";
const fs = require('fs');
csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json);
    fs.writeFileSync('datajson.json',JSON.stringify(json));
})