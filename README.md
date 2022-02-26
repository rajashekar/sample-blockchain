# Simple block chain

A simple block chain to store stars. 

## Run
In terminal, 
- git clone sample-blockchain
- cd sample-blockchain
- npm install
- node app.js

## Examples
### To access gensis block 
curl http://localhost:8000/block/height/0 
```
{
  "hash": "29ce66d3eb964400218cec8ffdd8e08d7bf7000ed99857477c0ccc851ee2c1f8",
  "height": 0,
  "body": "7b2264617461223a2247656e6573697320426c6f636b227d",
  "time": 1645816961,
  "previousBlockHash": null
}
```
### To do request valdiation
```
curl http://localhost:8000/requestValidation -H 'content-type:application/json' \
-d '{"address": "cUowfrzjUJRXaP2YZbeGs9N2AJkeHa55H7duX5nGXQDtMK83Qxr7"}'
```
output - 
```
"cUowfrzjUJRXaP2YZbeGs9N2AJkeHa55H7duX5nGXQDtMK83Qxr7:1645839076:starRegistry"
```
### To submit star payload
```
curl http://localhost:8000/submitStar -H 'content-type:application/json' \
-d '{
      "address": "1BZ7XgmpoMgUkN5TWykGa3wb8t73WwRXZL",
      "signature": "H99/bm1fCSStnVQOypPojH+fVSB9NnVENIsM72JXvbJ9QWHYLZFNKWqZNNhW745knIkkZVZryaiLl7qvQylNUvE=",
      "message": "cUowfrzjUJRXaP2YZbeGs9N2AJkeHa55H7duX5nGXQDtMK83Qxr7:1645814491:starRegistry",
      "star": {
         "dec": "68 52 56.9",
         "ra": "16h 29m 1.0s",
         "story": "Test story"
      }
   }'
```
output - 
```
{
    "body": "7b2261646472657373223a2231425a3758676d706f4d67556b4e355457796b476133776238743733577752585a4c222c2273746172223a7b22646563223a2236382035322035362e39222c227261223a223136682032396d20312e3073222c2273746f7279223a22546573742073746f7279227d7d",
    "hash": "ee02728cbd9d1fb25ae63a083bb70e3ebf28c4ca54a0a99480c5f1c910b6b8f9",
    "height": 2,
    "previousBlockHash": "3279b40f709e66d1d7b36b6ee34689ab91a4849502f8f26b2efdf2dffdd36aef",
    "time": 1645839173
}
```
### To get star payload using hash
```
curl http://localhost:8000/block/hash/3279b40f709e66d1d7b36b6ee34689ab91a4849502f8f26b2efdf2dffdd36aef
```
output - 
```
{
    "body": "7b2261646472657373223a2231425a3758676d706f4d67556b4e355457796b476133776238743733577752585a4c222c2273746172223a7b22646563223a2236382035322035362e39222c227261223a223136682032396d20312e3073222c2273746f7279223a22546573742073746f7279227d7d",
    "hash": "3279b40f709e66d1d7b36b6ee34689ab91a4849502f8f26b2efdf2dffdd36aef",
    "height": 1,
    "previousBlockHash": "29ce66d3eb964400218cec8ffdd8e08d7bf7000ed99857477c0ccc851ee2c1f8",
    "time": 1645816968
}
```
### To get stars by wallet address
```
curl http://localhost:8000/blocks/1BZ7XgmpoMgUkN5TWykGa3wb8t73WwRXZL
``` 
output - 
```
[
    {
        "dec": "68 52 56.9",
        "ra": "16h 29m 1.0s",
        "story": "Test story"
    }
]
```