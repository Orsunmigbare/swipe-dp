const bcrypt = require('bcrypt');

const util = {
    hash_id : async (id)=>{
        let hashed_id;
       await bcrypt.hash(id,10)
       .then((hash)=>{hashed_id = hash})
       .catch((err)=>{console.log(err)})
      return hashed_id
    },
    compare_hash : async (id,hash)=>{
        let verified;
        await bcrypt.compare(id,hash)
        .then(()=>{verified = true})
        .catch((err)=>{verified = false})
        return verified
    },
    create_response: ({res,status,message,data})=>{
        let response;
        if(status=== 'failed'){
            res.status(500).json({status,message,data: ''})
            return
        }else{
            response = {status,message,data: data ?  data : '' }
        }
        return response;
    }
}

module.exports = util