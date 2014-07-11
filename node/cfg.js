// etcd

Etcd = require('node-etcd');
etcd = new Etcd();
//etcd.set("keys", "value");
etcd.get("mi/tag", function(val, val2){
    
    v = val2.node.value
    console.log(v)
    x = JSON.parse(v)
    console.log(x.name)
    console.log(x.value)
    
    }
);