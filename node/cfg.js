// etcd

Etcd = require('node-etcd');
etcd = new Etcd();

console.log(Math.round(new Date().getTime()/1000))


//heartbeat
etcd.set("mi/heartbeat", Math.round(new Date().getTime()/1000));

//get config
etcd.get("mi/tag", function(val, val2){
    
    v = val2.node.value
    console.log(v)
    x = JSON.parse(v)
    console.log(x.name)
    console.log(x.value)
    
    }
);
    
    
//service url
    
    
console.log(Math.round(new Date().getTime()/1000))