
// node -- r
// rserve
// rio

/*
* install.packages("Rserve")
* library(Rserve)
* npm install rio
*/

var rio = require("rio");

//exports.rio = function(req, res){
	options = {
		host : "127.0.0.1",
		port : 6311,
        callback: function (err, val) {
            if (!err) {
            	console.log("RETURN:"+val);
            	//return res.send({'success':true,'res':val});
            } else {
            	console.log("ERROR:Rserve call failed")
            	console.log({'success':false})
            }
        },
    }
    rio.enableDebug(false);//开启调试模式
    rio.evaluate("pi*1",options);//运行R代码
    rio.evaluate("rnorm(10)", options);
//};