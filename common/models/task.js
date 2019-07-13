'use strict';

module.exports = function(Task) {
  // console.log(Task);
  // Task.find({}, (err, data)=>{

  // });
  Task.create = function() {
    console.log('hii');
  };
  Task.getProfile = function(name, cb) {
    console.log(name);
    // return  {data: 'req'};
    cb(null, {data: name});
  };

  Task.add = async function(body, cb) {
    console.log(body);
    console.log(cb);
    try{
      let data=await Task.create(body);
      // Task.create(body, function(err, res) {
      //   console.log(err);
      //   console.log(res);
      // });
      console.log(data);
      cb(null, data);
    }catch(err){
      console.log(err);
      let error={
        error:true,
        statusCode:500,
        message:'An eror occured!!'
      }
      cb(false,err)
    }
   
  };
};
