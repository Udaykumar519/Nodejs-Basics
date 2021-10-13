//Creating local module
var log={
    info:function(info){
        console.log(`info ${info}`)
    },
    warn:function(warn){
        console.log(`warn ${warn}`);
    },
    error:function(error){
        console.log(`error ${error}`);
    }
}
//exporting local modules
module.exports=log