$ curl http://127.0.0.1:3000/todo
{"status":"Items found","items":[]}
$ curl http://127.0.0.1:3000/todo -H "content-type: application/json" -d
"{\"description\":\"test\"}"
{"status":"Item added","itemId":0}
$ curl http://127.0.0.1:3000/todo/0
{"status":"Item found","item":{"description":"test"}}
$ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[{"description":"test"}]}
$ curl http://127.0.0.1:3000/todo/ -X DELETE
{"status":"Items cleared"}
$ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[]}
$ curl http://127.0.0.1:3000/todo -X PUT -H "content-type: application/json" -d
"[{\"description\":\"test\"}]"
{"status":"Items replaced"}
$ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[{"description":"test"}]}
$ curl http://127.0.0.1:3000/todo/0 -X DELETE
{"status":"Not implemented"}
