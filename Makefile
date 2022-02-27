.PHONY: build-user-go-proto
build-user-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./block_user.proto
	
.PHONY: build-user-js-proto
build-user-js-proto:
	protoc -I. block_user.proto --js_out=import_style=commonjs:./js_block/block_user --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_block/block_user

.PHONY: build-project-go-proto
build-project-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_project.proto
	
.PHONY: build-project-js-proto
build-project-js-proto:
	protoc -I. cloud_project.proto --js_out=import_style=commonjs:./js_cloud/cloud_project --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud/cloud_project

.PHONY: build-proto
build-proto:
	make build-project-js-proto && \
	make build-project-js-proto
	