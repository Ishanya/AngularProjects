const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video');


const db="mongodb://igh:Igh123@ds141633.mlab.com:41633/videoplayer";
mongoose.Promise=global.Promise;

mongoose.connect(db,function(err){
    if(err)
    {
        console.error("Error"+err);
    }
})

router.get('/',function(req,res){
   res.send("api works");
 });


router.get('/videos',function(req,res){
  console.log("get all data");
  Video.find({})
  .exec(function(err,videos){
        if(err)
        {
            console.log("error"+err);
        }
        else{
            res.json(videos);
        }
  });
});

router.get('/videos/:id',function(req,res){
    console.log("get single data");
    Video.findById(req.params.id)
    .exec(function(err,video){
          if(err)
          {
              console.log("error in single value: "+err);
          }
          else{
              res.json(video);
          }
    });
  });

  router.post('/video',function(req,res){
      console.log("insert video");
      var newVideo=new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.description=req.body.description;
    newVideo.save(function(err,insertedVideo){
        if(err)
        {
            console.log("error"+err);
        }
        else{
            res.json(insertedVideo);
        }
    });
  });

router.put('/video/:id',function(req,res){
    console.log("updating Video");
    Video.findByIdAndUpdate(req.params.id,{
        $set:{
            title:req.body.title,url:req.body.url,description:req.body.description
        }
    },
    {
        new:true
    },
    function(err,updatedVideo){
    if(err)
    {
        console.log("error updating"+err);
    }
    else{
        res.json(updatedVideo);
    }
    }
    );
   
});

router.delete('/video/:id',function(req,res){
console.log("deleting video");
Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
    if(err)
    {
        res.send("error deleting: "+err);
    }
    else{
        res.json(deletedVideo); 
    }
  });
});

module.exports=router;

