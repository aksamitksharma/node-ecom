const User = require("../db/models/User")

// creating user into mongo db users collection
exports.saveUser = async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  if(result){
    result = result.toObject()
    delete result.password
    let resJson = {"status":200, "data":result}
    res.send(resJson)
  }else{
    let resJson = {"status":400, "data":{}}
    res.send(resJson)
  }
}

exports.loginUser = async(req,res)=>{
  if(req.body.email && req.body.password){
    let result = await User.findOne(req.body).select("-password")
    if(result){
      let resJson = {"status":200, "message":"Logged in successfully", "data":result}
      res.send(resJson)
    }else{
      let resJson = {"status":400, "message":"No user found!", "data":{}}
      res.send(resJson)
    }
  }else{
      let resJson = {"status":400, "message":"No user found!", "data":{}}
      res.send(resJson)
  }
  
}