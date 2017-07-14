/*By Zhang Xingping on 20170714.keyArray item must be string*/

function except({object,keyArray}){
    let result={};
    for(var key in object){
        keyArray.indexOf(key)===-1?
            result[key]=object[key]:null
    }
    return result;
}

