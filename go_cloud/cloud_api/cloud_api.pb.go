// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
// source: cloud_api.proto

package cloud_api

import (
	block_network "./go_block/block_network"
	block_user "./go_block/block_user"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ApiRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApiKey         string                        `protobuf:"bytes,1,opt,name=apiKey,proto3" json:"apiKey,omitempty"`
	UserRequest    *block_user.UserRequest       `protobuf:"bytes,2,opt,name=userRequest,proto3" json:"userRequest,omitempty"`
	NetworkRequest *block_network.NetworkRequest `protobuf:"bytes,3,opt,name=networkRequest,proto3" json:"networkRequest,omitempty"`
}

func (x *ApiRequest) Reset() {
	*x = ApiRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiRequest) ProtoMessage() {}

func (x *ApiRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiRequest.ProtoReflect.Descriptor instead.
func (*ApiRequest) Descriptor() ([]byte, []int) {
	return file_cloud_api_proto_rawDescGZIP(), []int{0}
}

func (x *ApiRequest) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *ApiRequest) GetUserRequest() *block_user.UserRequest {
	if x != nil {
		return x.UserRequest
	}
	return nil
}

func (x *ApiRequest) GetNetworkRequest() *block_network.NetworkRequest {
	if x != nil {
		return x.NetworkRequest
	}
	return nil
}

type ApiResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserResponse    *block_user.UserResponse       `protobuf:"bytes,1,opt,name=userResponse,proto3" json:"userResponse,omitempty"`
	NetworkResponse *block_network.NetworkResponse `protobuf:"bytes,2,opt,name=networkResponse,proto3" json:"networkResponse,omitempty"`
}

func (x *ApiResponse) Reset() {
	*x = ApiResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiResponse) ProtoMessage() {}

func (x *ApiResponse) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiResponse.ProtoReflect.Descriptor instead.
func (*ApiResponse) Descriptor() ([]byte, []int) {
	return file_cloud_api_proto_rawDescGZIP(), []int{1}
}

func (x *ApiResponse) GetUserResponse() *block_user.UserResponse {
	if x != nil {
		return x.UserResponse
	}
	return nil
}

func (x *ApiResponse) GetNetworkResponse() *block_network.NetworkResponse {
	if x != nil {
		return x.NetworkResponse
	}
	return nil
}

type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_cloud_api_proto_rawDescGZIP(), []int{2}
}

type Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
}

func (x *Response) Reset() {
	*x = Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Response.ProtoReflect.Descriptor instead.
func (*Response) Descriptor() ([]byte, []int) {
	return file_cloud_api_proto_rawDescGZIP(), []int{3}
}

func (x *Response) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

var File_cloud_api_proto protoreflect.FileDescriptor

var file_cloud_api_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x08, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x1a, 0x1f, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f,
	0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x6e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4, 0x01, 0x0a, 0x0a,
	0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x70,
	0x69, 0x4b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x70, 0x69, 0x4b,
	0x65, 0x79, 0x12, 0x38, 0x0a, 0x0b, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55,
	0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52,
	0x0b, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x44, 0x0a, 0x0e,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x4e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x52, 0x0e, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x22, 0x93, 0x01, 0x0a, 0x0b, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x3b, 0x0a, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x47, 0x0a, 0x0f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x0f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x09, 0x0a, 0x07, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x22, 0x1c, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73,
	0x67, 0x32, 0xf7, 0x04, 0x0a, 0x0b, 0x55, 0x73, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x37, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3f, 0x0a, 0x0e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x14, 0x2e, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70,
	0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3c, 0x0a, 0x0b, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f,
	0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3e, 0x0a, 0x0d, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f,
	0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x0f, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x14, 0x2e, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70,
	0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x34, 0x0a, 0x03, 0x47,
	0x65, 0x74, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70,
	0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64,
	0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x37, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x12, 0x14, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x44, 0x0a, 0x13, 0x56, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c,
	0x73, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41,
	0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x37, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f,
	0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x0f, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x14, 0x2e, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70,
	0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x32, 0xb2, 0x02, 0x0a, 0x0e,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x34,
	0x0a, 0x09, 0x48, 0x65, 0x61, 0x72, 0x74, 0x62, 0x65, 0x61, 0x74, 0x12, 0x11, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x12,
	0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x06, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x12, 0x14,
	0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e,
	0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a,
	0x06, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41,
	0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e,
	0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3f, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64,
	0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15,
	0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x06, 0x52, 0x65, 0x6d, 0x6f, 0x76,
	0x65, 0x12, 0x14, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x41,
	0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x42, 0x14, 0x5a, 0x12, 0x67, 0x6f, 0x5f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x5f, 0x61, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_cloud_api_proto_rawDescOnce sync.Once
	file_cloud_api_proto_rawDescData = file_cloud_api_proto_rawDesc
)

func file_cloud_api_proto_rawDescGZIP() []byte {
	file_cloud_api_proto_rawDescOnce.Do(func() {
		file_cloud_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_cloud_api_proto_rawDescData)
	})
	return file_cloud_api_proto_rawDescData
}

var file_cloud_api_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_cloud_api_proto_goTypes = []interface{}{
	(*ApiRequest)(nil),                    // 0: CloudApi.ApiRequest
	(*ApiResponse)(nil),                   // 1: CloudApi.ApiResponse
	(*Request)(nil),                       // 2: CloudApi.Request
	(*Response)(nil),                      // 3: CloudApi.Response
	(*block_user.UserRequest)(nil),        // 4: BlockUser.UserRequest
	(*block_network.NetworkRequest)(nil),  // 5: BlockNetwork.NetworkRequest
	(*block_user.UserResponse)(nil),       // 6: BlockUser.UserResponse
	(*block_network.NetworkResponse)(nil), // 7: BlockNetwork.NetworkResponse
}
var file_cloud_api_proto_depIdxs = []int32{
	4,  // 0: CloudApi.ApiRequest.userRequest:type_name -> BlockUser.UserRequest
	5,  // 1: CloudApi.ApiRequest.networkRequest:type_name -> BlockNetwork.NetworkRequest
	6,  // 2: CloudApi.ApiResponse.userResponse:type_name -> BlockUser.UserResponse
	7,  // 3: CloudApi.ApiResponse.networkResponse:type_name -> BlockNetwork.NetworkResponse
	0,  // 4: CloudApi.UserService.Create:input_type -> CloudApi.ApiRequest
	0,  // 5: CloudApi.UserService.UpdatePassword:input_type -> CloudApi.ApiRequest
	0,  // 6: CloudApi.UserService.UpdateEmail:input_type -> CloudApi.ApiRequest
	0,  // 7: CloudApi.UserService.UpdateProfile:input_type -> CloudApi.ApiRequest
	0,  // 8: CloudApi.UserService.UpdateNamespace:input_type -> CloudApi.ApiRequest
	0,  // 9: CloudApi.UserService.Get:input_type -> CloudApi.ApiRequest
	0,  // 10: CloudApi.UserService.GetAll:input_type -> CloudApi.ApiRequest
	0,  // 11: CloudApi.UserService.ValidateCredentials:input_type -> CloudApi.ApiRequest
	0,  // 12: CloudApi.UserService.Delete:input_type -> CloudApi.ApiRequest
	0,  // 13: CloudApi.UserService.DeleteNamespace:input_type -> CloudApi.ApiRequest
	2,  // 14: CloudApi.NetworkService.Heartbeat:input_type -> CloudApi.Request
	0,  // 15: CloudApi.NetworkService.Invite:input_type -> CloudApi.ApiRequest
	0,  // 16: CloudApi.NetworkService.Accept:input_type -> CloudApi.ApiRequest
	0,  // 17: CloudApi.NetworkService.GetConnections:input_type -> CloudApi.ApiRequest
	0,  // 18: CloudApi.NetworkService.Remove:input_type -> CloudApi.ApiRequest
	1,  // 19: CloudApi.UserService.Create:output_type -> CloudApi.ApiResponse
	1,  // 20: CloudApi.UserService.UpdatePassword:output_type -> CloudApi.ApiResponse
	1,  // 21: CloudApi.UserService.UpdateEmail:output_type -> CloudApi.ApiResponse
	1,  // 22: CloudApi.UserService.UpdateProfile:output_type -> CloudApi.ApiResponse
	1,  // 23: CloudApi.UserService.UpdateNamespace:output_type -> CloudApi.ApiResponse
	1,  // 24: CloudApi.UserService.Get:output_type -> CloudApi.ApiResponse
	1,  // 25: CloudApi.UserService.GetAll:output_type -> CloudApi.ApiResponse
	1,  // 26: CloudApi.UserService.ValidateCredentials:output_type -> CloudApi.ApiResponse
	1,  // 27: CloudApi.UserService.Delete:output_type -> CloudApi.ApiResponse
	1,  // 28: CloudApi.UserService.DeleteNamespace:output_type -> CloudApi.ApiResponse
	3,  // 29: CloudApi.NetworkService.Heartbeat:output_type -> CloudApi.Response
	1,  // 30: CloudApi.NetworkService.Invite:output_type -> CloudApi.ApiResponse
	1,  // 31: CloudApi.NetworkService.Accept:output_type -> CloudApi.ApiResponse
	1,  // 32: CloudApi.NetworkService.GetConnections:output_type -> CloudApi.ApiResponse
	1,  // 33: CloudApi.NetworkService.Remove:output_type -> CloudApi.ApiResponse
	19, // [19:34] is the sub-list for method output_type
	4,  // [4:19] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_cloud_api_proto_init() }
func file_cloud_api_proto_init() {
	if File_cloud_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_cloud_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cloud_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cloud_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cloud_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_cloud_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_cloud_api_proto_goTypes,
		DependencyIndexes: file_cloud_api_proto_depIdxs,
		MessageInfos:      file_cloud_api_proto_msgTypes,
	}.Build()
	File_cloud_api_proto = out.File
	file_cloud_api_proto_rawDesc = nil
	file_cloud_api_proto_goTypes = nil
	file_cloud_api_proto_depIdxs = nil
}
