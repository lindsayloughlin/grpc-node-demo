# generate the grpc messages
protoc -I=proto web-tutorial.proto --js_out=import_style=commonjs:outproto
# generate the grpc-web output javascript
protoc -I=proto web-tutorial.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:outproto
