 makeRequest = (location)=>{
    console.log(location);
    return new Promise((resolve,reject)=>{
        console.log('u r making request for',location);
        if(location=='Goggle')
            resolve('found the correct location');
        else
            reject('didnt match your location!!')
        });
        
    }


// makeRequest('Goggle').then(response=>{
//     console.log('Response received!!')
//     console.log(response);
    
// }).catch(err=>{
//     console.log(err);
// })


async function doWork(){
    try{
   var response = await makeRequest('fb');
   console.log('response received!!');
   console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

doWork();


