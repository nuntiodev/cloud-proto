.PHONY: build-project-go-proto
build-project-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_project.proto
	
.PHONY: build-project-js-proto
build-project-js-proto:
	protoc -I. cloud_project.proto --js_out=import_style=commonjs:./js_cloud/cloud_project --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud/cloud_project

.PHONY: build-api-go-proto
build-api-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_api.proto
	
.PHONY: build-api-js-proto
build-api-js-proto:
	protoc -I. cloud_api.proto --js_out=import_style=commonjs:./js_cloud/cloud_api --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud/cloud_api

.PHONY: build-dashboard-go-proto
build-dashboard-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./cloud_dashboard.proto
	
.PHONY: build-dashboard-js-proto
build-dashboard-js-proto:
	protoc -I. cloud_dashboard.proto --js_out=import_style=commonjs:./js_cloud/cloud_dashboard --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_cloud/cloud_dashboard


.PHONY: build-proto
build-proto:
	make build-project-go-proto && \
	make build-project-js-proto && \
	make build-api-go-proto && \
	make build-api-js-proto
	