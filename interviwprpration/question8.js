const axios=require("axios")
axios.get("https://api.funtranslations.com/translate/minion.json").then((res)=>{
    console.log(res.status);
}).catch((err)=>{
    console.log(err.message);
})




