

# pip install python-etcd --no-deps
# pip install urllib3 --no-deps

import etcd

import json

def main():   
    
    client = etcd.Client()

    #client.write('/mi/tag', '{"name":"xtag","value":6226}')

    # http://127.0.0.1:4001/v2/keys/mi
    
    print client.read('/mi')

    print "--"*20

    print client.read('/mi/tag')

    val = client.read('/mi/tag').value



    x = json.loads(val)

    print x["value"]

    print x["name"]


if __name__ == "__main__":
    main()