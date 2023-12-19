 const jsonfile=require("../src/data/jsonfile.json")
 const jwt=require("jsonwebtoken")
const isValidEmail = function (value) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
exports.login=async(req,res)=>{
    try{
      const {email_id,password}=req.body
     
      if(!isValidEmail(email_id))
        {
         res.status(400).send("please enter valide email")
        }

       const emailexist= jsonfile.filter((item)=>item.email_id===email_id)
       
        if(emailexist.length==0){
            return res.status(200).json("helo")
        }
        if(emailexist[0].password!==password)
          {
            return res.status(400).send({message:"Please enter valide password"})
          }

        const token=jwt.sign({email:email_id},"this is my key",)
        return res.status(200).send({status:true,token})
    }catch(err){
        res.status(500).send({status:false,error:err.message})
    }

}
