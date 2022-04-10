.PHONY: build-project-go-proto
build-project-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_project.proto
	
.PHONY: build-project-js-proto
build-project-js-proto:
	protoc -I. cloud_project.proto --js_out=import_style=commonjs:./js_cloud --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud

.PHONY: build-dart-project-proto
build-dart-project-proto:
	protoc -I. --dart_out=grpc:./dart_cloud/lib/ ./cloud_project.proto google/protobuf/timestamp.proto

.PHONY: build-proto
build-proto:
	make build-project-go-proto && \
	make build-project-js-proto && \
	make build-dart-project-proto
	