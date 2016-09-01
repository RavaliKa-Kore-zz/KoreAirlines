var request = require('request-promise');
var Promise = require('bluebird');
function Finicity(){

}

Finicity.prototype.token = function(){
 // console.log('>>>>>>>>>>>>.>>>>>>>.>>>>>>>>');
	var options=
       {
       url: 'https://api.finicity.com/aggregation/v2/partners/authentication', //URL to hit
        //qs: {from: 'blog example', time: +new Date()}, //Query string data
        //simple:false,
        method: 'POST',
        headers: {
        'Finicity-App-Key' : '4d003c112e66263b9dec7a3dbfa9b5f5',
        'content-type': 'application/json',
        'Accept': 'application/json'
        },
        json : {
         partnerId: '2445581452065',
         partnerSecret: 'xwgcs4LEyu0LBnCOnQvo'
        }
    };	
return request(options).then(function(res){
 // console.log('>>>>>>>>>>>>.>>>>>>>.....................>>>>>>>>');
   console.log(res);
   return res;
}).catch(function(err){
console.log(err)
});
}

Finicity.prototype.finicity = function(options){
  return request(options).then(function(res2){
    console.log('Success Method');
    console.log(res2);
    return res2;
  }).catch(function(err){
   console.log('Error method');
  });
}

Finicity.prototype.getOptions = function(type, url, qs){
  console.log(type);
    if(type !== 'POST'){
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&',fromdate,'%%%%%%%%%%%%%',todate)
      /*if(fromdate && fromdate.trim() !== '')
         fullurl = url+'?fromDate='+ fromdate+'&toDate='+todate
        else
          fullurl = url;*/
     var options2 =
       {
        url:  fullurl,
        qs: qs,
        method: type,
        simple:false,
        headers: {
        'Finicity-App-Key' : '4d003c112e66263b9dec7a3dbfa9b5f5',
        'Finicity-App-Token': global.accessToken,
        'Accept': 'application/json',
        'Content-Type':'application/json'
        }
    };
  }else{
    var options2=
       {
        url: fullurl, 
        method: type,
        simple:false,
        headers: {
        'Finicity-App-Key' : '4d003c112e66263b9dec7a3dbfa9b5f5',
        'Finicity-App-Token': global.accessToken,
        'Accept': 'application/json',
        'Content-Type':'application/json' 
      },
     json:req.body
    };
    }
     return new Promise(function(resolve, reject){
      resolve();
    }).then(function(result){
      console.log('LLLL');
      return options2;
    });
}
module.exports = new Finicity();