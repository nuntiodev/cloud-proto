.PHONY: build-project-go-proto
build-project-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_project.proto
	
.PHONY: build-project-js-proto
build-project-js-proto:
	protoc -I. cloud_project.proto --js_out=import_style=commonjs:./js_cloud --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud

.PHONY: build-api-go-proto
build-api-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_api.proto
	
.PHONY: build-api-js-proto
build-api-js-proto:
	protoc -I. cloud_api.proto --js_out=import_style=commonjs:./js_cloud --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud

.PHONY: build-proto
build-proto:
	make build-project-go-proto && \
	make build-project-js-proto && \
	make build-api-go-proto && \
	make build-api-js-proto
	