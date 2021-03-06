const fs = require('fs');

//Saving Data, Make sure the json is good before saving it.
function Validate(json){
    try {
        var save = JSON.stringify(json);
        var load = JSON.parse(save);
        return true;
    } catch (e){
        console.log("Invalid Data, will not save");
        console.log(e);
        return false;
    }
}

//SaveData
function SaveData(data){
    //SaveData here
    if(Validate(data)){
        fs.writeFile('.data/data.json', JSON.stringify(data,null,2), (err) =>{
            if (err) console.error(err);
        })
    }  
}

//Save the newly created items
function SaveItem(items){
    if(Validate(items)){
        fs.writeFile('.data/items.json', JSON.stringify(items,null,2), (err) =>{
            if (err) console.error(err);
        })
    } 
}

//Save the new spawn tables
function SaveTable(table){
    if(Validate(table)){
        fs.writeFile('.data/dataTable.json', JSON.stringify(table,null,2), (err) =>{
            if (err) console.error(err);
        })
    }  
}

//Save Depot
function SaveDepot(depot){
    if(Validate(depot)){
        fs.writeFile('.data/depot.json', JSON.stringify(depot,null,2), (err) =>{
            if (err) console.error(err);
        })
    }
}

module.exports.SaveData = SaveData;
module.exports.SaveDepot = SaveDepot;
module.exports.SaveTable = SaveTable;
module.exports.SaveItem = SaveItem;
module.exports.Validate = Validate;

