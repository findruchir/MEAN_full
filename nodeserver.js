var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bp = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');

app.use(cors({
    origin:'http://localhost:4200',
    optionsSuccessStatus:200
}));

app.use(bp.urlencoded({
    extended : false
}));

app.use(bp.json());

mongoose.connect('mongodb://localhost/users');

var mydata_schema = mongoose.Schema({
        firstName:String,
        lastName:String,
        UserName:String,
        password:String,
        phonenumber: Number,
        location:String
    });


    app.listen(3000,function(){
        console.log("connectd on 3000 and server started ");
    })

    var model_copy = mongoose.model('users', mydata_schema);
    
    model_copy.find(function(err,resp){
        // console.log(resp);
    });


    //Registration
    app.post('/loginauth',function(req,resp){
        console.log(req.body);
        model_copy.find({UserName: req.body.userName}, '', function(error, result){
            console.log(result.length);
            if(result.length>0){            
                console.log("Data in database...please login");
                var token = jwt.sign({UserName: req.body.userName},'marlabs-secret-key');
                console.log(token);
                resp.send({
                    isLoggedIn: false,
                    token: token,
                    message: "User exist, please login...",
                    // dualmessage : "bhai bhai "
                });
                
            }
            else{
                var x = new model_copy({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    UserName:req.body.userName,
                    password:req.body.password,
                    phonenumber: req.body.phoneNumber,
                    location:req.body.location
            
                });
            
                x.save(function(error){
                    if(!error){
                        console.log("Data saved");
                        resp.send({
                            isLoggedIn: true,
                            token: "token",
                            message: "Welcome to website"
                        })
                    }
                    else{
                        console.log(error);
                    }
                });
            }
        });
   // console.log(req.body);   
    })

        //login
    app.post('/loginCheck',function(req,resp){
    console.log(req.body);
    model_copy.find({UserName: req.body.username}, '', function(error, result){
        //console.log(result);
        if(result.length>0){            
            var token = jwt.sign({UserName: req.body.userName},'marlabs-secret-key');
            console.log(token);
            console.log("Data found in database...Valid User..");
            console.log(result[0]);
            resp.send({
                isLoggedIn: true,
                token: token,
                message: "Valid User ....Go on buddy!...",
            });
        }
        else{
            console.log("Not a valid user");
            resp.send({
                isLoggedIn: false,
                token: "token",
                message: "Not a valid user",
            });
        }
    })
})


//Create and Save Posts
var postData_schema = mongoose.Schema({
    postId: Number,
    title : String,
    body:String,
    UserName: String,
});

var model_copy_posts = mongoose.model('posts', postData_schema);

model_copy_posts.find(function(err,resp){
        //  console.log(resp);
});


app.post('/createPost',function(req,resp){
    //console.log(req.body);

    jwt.verify(req.body.z,'marlabs-secret-key',function(error,result){
                if(error){
                    console.log("error occureds");
                }
                else{
                    console.log(result);

                    var y = new model_copy_posts({
                        postId: req.body.postId,
                        title :req.body.title,
                        body : req.body.description,
                        UserName:req.body.userName,
                    });
                    
                    y.save(function(error){
                        if(!error){
                            console.log("post saved");
                            resp.send({
                                token: "token",
                                message: "post saved in database"
                            })
                        }
                        else{
                            console.log(error);
                        }
                    });
                }
    });
    
   
});


// List of posts 
app.get('/listPosts',function(req,resp){
    model_copy_posts.find(function(error, result){
        if(!error){
            resp.send({
                    respdata : result
            })
        }
});
});