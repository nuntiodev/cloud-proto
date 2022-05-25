// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
// source: cloud.proto

package go_cloud

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type AppType int32

const (
	AppType_INVALID_APP        AppType = 0
	AppType_USER_BLOCK_APP     AppType = 1
	AppType_NUNTIO_CONNECT_APP AppType = 2
)

// Enum value maps for AppType.
var (
	AppType_name = map[int32]string{
		0: "INVALID_APP",
		1: "USER_BLOCK_APP",
		2: "NUNTIO_CONNECT_APP",
	}
	AppType_value = map[string]int32{
		"INVALID_APP":        0,
		"USER_BLOCK_APP":     1,
		"NUNTIO_CONNECT_APP": 2,
	}
)

func (x AppType) Enum() *AppType {
	p := new(AppType)
	*p = x
	return p
}

func (x AppType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AppType) Descriptor() protoreflect.EnumDescriptor {
	return file_cloud_proto_enumTypes[0].Descriptor()
}

func (AppType) Type() protoreflect.EnumType {
	return &file_cloud_proto_enumTypes[0]
}

func (x AppType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AppType.Descriptor instead.
func (AppType) EnumDescriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{0}
}

type Organization struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OwnerId       string                 `protobuf:"bytes,2,opt,name=owner_id,json=ownerId,proto3" json:"owner_id,omitempty"`
	Name          string                 `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Logo          string                 `protobuf:"bytes,4,opt,name=logo,proto3" json:"logo,omitempty"`
	CreatedAt     *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt     *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	InstalledApps []*App                 `protobuf:"bytes,7,rep,name=installed_apps,json=installedApps,proto3" json:"installed_apps,omitempty"`
}

func (x *Organization) Reset() {
	*x = Organization{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Organization) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Organization) ProtoMessage() {}

func (x *Organization) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Organization.ProtoReflect.Descriptor instead.
func (*Organization) Descriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{0}
}

func (x *Organization) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Organization) GetOwnerId() string {
	if x != nil {
		return x.OwnerId
	}
	return ""
}

func (x *Organization) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Organization) GetLogo() string {
	if x != nil {
		return x.Logo
	}
	return ""
}

func (x *Organization) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Organization) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *Organization) GetInstalledApps() []*App {
	if x != nil {
		return x.InstalledApps
	}
	return nil
}

type App struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string  `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Logo        string  `protobuf:"bytes,4,opt,name=logo,proto3" json:"logo,omitempty"`
	AppType     AppType `protobuf:"varint,5,opt,name=app_type,json=appType,proto3,enum=Cloud.AppType" json:"app_type,omitempty"`
}

func (x *App) Reset() {
	*x = App{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *App) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*App) ProtoMessage() {}

func (x *App) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use App.ProtoReflect.Descriptor instead.
func (*App) Descriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{1}
}

func (x *App) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *App) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *App) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *App) GetLogo() string {
	if x != nil {
		return x.Logo
	}
	return ""
}

func (x *App) GetAppType() AppType {
	if x != nil {
		return x.AppType
	}
	return AppType_INVALID_APP
}

type PrivateKey struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId        string                 `protobuf:"bytes,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	Key                   string                 `protobuf:"bytes,3,opt,name=key,proto3" json:"key,omitempty"`
	PrivateKeyGeneratedAt *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=private_key_generated_at,json=privateKeyGeneratedAt,proto3" json:"private_key_generated_at,omitempty"`
	PrivateKeySecuredAt   *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=private_key_secured_at,json=privateKeySecuredAt,proto3" json:"private_key_secured_at,omitempty"`
	PrivateKeySecured     bool                   `protobuf:"varint,6,opt,name=private_key_secured,json=privateKeySecured,proto3" json:"private_key_secured,omitempty"`
	UserBlockIds          []string               `protobuf:"bytes,7,rep,name=user_block_ids,json=userBlockIds,proto3" json:"user_block_ids,omitempty"`
}

func (x *PrivateKey) Reset() {
	*x = PrivateKey{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PrivateKey) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PrivateKey) ProtoMessage() {}

func (x *PrivateKey) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PrivateKey.ProtoReflect.Descriptor instead.
func (*PrivateKey) Descriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{2}
}

func (x *PrivateKey) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PrivateKey) GetOrganizationId() string {
	if x != nil {
		return x.OrganizationId
	}
	return ""
}

func (x *PrivateKey) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *PrivateKey) GetPrivateKeyGeneratedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.PrivateKeyGeneratedAt
	}
	return nil
}

func (x *PrivateKey) GetPrivateKeySecuredAt() *timestamppb.Timestamp {
	if x != nil {
		return x.PrivateKeySecuredAt
	}
	return nil
}

func (x *PrivateKey) GetPrivateKeySecured() bool {
	if x != nil {
		return x.PrivateKeySecured
	}
	return false
}

func (x *PrivateKey) GetUserBlockIds() []string {
	if x != nil {
		return x.UserBlockIds
	}
	return nil
}

type OrganizationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Organization *Organization `protobuf:"bytes,1,opt,name=organization,proto3" json:"organization,omitempty"`
	Update       *Organization `protobuf:"bytes,2,opt,name=update,proto3" json:"update,omitempty"`
	AccessToken  string        `protobuf:"bytes,3,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	PrivateKey   *PrivateKey   `protobuf:"bytes,4,opt,name=private_key,json=privateKey,proto3" json:"private_key,omitempty"`
}

func (x *OrganizationRequest) Reset() {
	*x = OrganizationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OrganizationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OrganizationRequest) ProtoMessage() {}

func (x *OrganizationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OrganizationRequest.ProtoReflect.Descriptor instead.
func (*OrganizationRequest) Descriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{3}
}

func (x *OrganizationRequest) GetOrganization() *Organization {
	if x != nil {
		return x.Organization
	}
	return nil
}

func (x *OrganizationRequest) GetUpdate() *Organization {
	if x != nil {
		return x.Update
	}
	return nil
}

func (x *OrganizationRequest) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *OrganizationRequest) GetPrivateKey() *PrivateKey {
	if x != nil {
		return x.PrivateKey
	}
	return nil
}

type OrganizationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Organization  *Organization   `protobuf:"bytes,1,opt,name=organization,proto3" json:"organization,omitempty"`
	Organizations []*Organization `protobuf:"bytes,2,rep,name=organizations,proto3" json:"organizations,omitempty"`
	AccessToken   string          `protobuf:"bytes,3,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
}

func (x *OrganizationResponse) Reset() {
	*x = OrganizationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cloud_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OrganizationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OrganizationResponse) ProtoMessage() {}

func (x *OrganizationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_cloud_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OrganizationResponse.ProtoReflect.Descriptor instead.
func (*OrganizationResponse) Descriptor() ([]byte, []int) {
	return file_cloud_proto_rawDescGZIP(), []int{4}
}

func (x *OrganizationResponse) GetOrganization() *Organization {
	if x != nil {
		return x.Organization
	}
	return nil
}

func (x *OrganizationResponse) GetOrganizations() []*Organization {
	if x != nil {
		return x.Organizations
	}
	return nil
}

func (x *OrganizationResponse) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

var File_cloud_proto protoreflect.FileDescriptor

var file_cloud_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8a, 0x02, 0x0a, 0x0c, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x31, 0x0a, 0x0e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x65, 0x64, 0x5f, 0x61, 0x70, 0x70,
	0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x41, 0x70, 0x70, 0x52, 0x0d, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c, 0x65, 0x64, 0x41, 0x70,
	0x70, 0x73, 0x22, 0x8a, 0x01, 0x0a, 0x03, 0x41, 0x70, 0x70, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20,
	0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6c, 0x6f, 0x67, 0x6f, 0x12, 0x29, 0x0a, 0x08, 0x61, 0x70, 0x70, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0e, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x41,
	0x70, 0x70, 0x54, 0x79, 0x70, 0x65, 0x52, 0x07, 0x61, 0x70, 0x70, 0x54, 0x79, 0x70, 0x65, 0x22,
	0xd3, 0x02, 0x0a, 0x0a, 0x50, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x27,
	0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x53, 0x0a, 0x18, 0x70, 0x72, 0x69,
	0x76, 0x61, 0x74, 0x65, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x15, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65,
	0x4b, 0x65, 0x79, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x4f,
	0x0a, 0x16, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x73, 0x65,
	0x63, 0x75, 0x72, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x13, 0x70, 0x72, 0x69, 0x76,
	0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x53, 0x65, 0x63, 0x75, 0x72, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x2e, 0x0a, 0x13, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x73,
	0x65, 0x63, 0x75, 0x72, 0x65, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x11, 0x70, 0x72,
	0x69, 0x76, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x53, 0x65, 0x63, 0x75, 0x72, 0x65, 0x64, 0x12,
	0x24, 0x0a, 0x0e, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64,
	0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x49, 0x64, 0x73, 0x22, 0xd2, 0x01, 0x0a, 0x13, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x37, 0x0a,
	0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2b, 0x0a, 0x06, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f,
	0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x32, 0x0a, 0x0b, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74,
	0x65, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x50, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x52, 0x0a,
	0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x22, 0xad, 0x01, 0x0a, 0x14, 0x4f,
	0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x37, 0x0a, 0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x43, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x39, 0x0a, 0x0d,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0d, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x2a, 0x46, 0x0a, 0x07, 0x41, 0x70,
	0x70, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0f, 0x0a, 0x0b, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44,
	0x5f, 0x41, 0x50, 0x50, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x55, 0x53, 0x45, 0x52, 0x5f, 0x42,
	0x4c, 0x4f, 0x43, 0x4b, 0x5f, 0x41, 0x50, 0x50, 0x10, 0x01, 0x12, 0x16, 0x0a, 0x12, 0x4e, 0x55,
	0x4e, 0x54, 0x49, 0x4f, 0x5f, 0x43, 0x4f, 0x4e, 0x4e, 0x45, 0x43, 0x54, 0x5f, 0x41, 0x50, 0x50,
	0x10, 0x02, 0x32, 0x9f, 0x05, 0x0a, 0x0c, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x46, 0x0a, 0x09, 0x48, 0x65, 0x61, 0x72, 0x74, 0x62, 0x65, 0x61, 0x74,
	0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x06, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x4d, 0x0a, 0x10, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x69, 0x76, 0x61, 0x74,
	0x65, 0x4b, 0x65, 0x79, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x4d, 0x0a, 0x10, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65,
	0x4b, 0x65, 0x79, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4f,
	0x0a, 0x12, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x69, 0x76, 0x61, 0x74,
	0x65, 0x4b, 0x65, 0x79, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x43, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x1a, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x47, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x42, 0x79, 0x4f,
	0x77, 0x6e, 0x65, 0x72, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x43, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1a, 0x2e, 0x43, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x4f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x42, 0x0c, 0x5a, 0x0a, 0x2e, 0x2f, 0x67, 0x6f, 0x5f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_cloud_proto_rawDescOnce sync.Once
	file_cloud_proto_rawDescData = file_cloud_proto_rawDesc
)

func file_cloud_proto_rawDescGZIP() []byte {
	file_cloud_proto_rawDescOnce.Do(func() {
		file_cloud_proto_rawDescData = protoimpl.X.CompressGZIP(file_cloud_proto_rawDescData)
	})
	return file_cloud_proto_rawDescData
}

var file_cloud_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_cloud_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_cloud_proto_goTypes = []interface{}{
	(AppType)(0),                  // 0: Cloud.AppType
	(*Organization)(nil),          // 1: Cloud.Organization
	(*App)(nil),                   // 2: Cloud.App
	(*PrivateKey)(nil),            // 3: Cloud.PrivateKey
	(*OrganizationRequest)(nil),   // 4: Cloud.OrganizationRequest
	(*OrganizationResponse)(nil),  // 5: Cloud.OrganizationResponse
	(*timestamppb.Timestamp)(nil), // 6: google.protobuf.Timestamp
}
var file_cloud_proto_depIdxs = []int32{
	6,  // 0: Cloud.Organization.created_at:type_name -> google.protobuf.Timestamp
	6,  // 1: Cloud.Organization.updated_at:type_name -> google.protobuf.Timestamp
	2,  // 2: Cloud.Organization.installed_apps:type_name -> Cloud.App
	0,  // 3: Cloud.App.app_type:type_name -> Cloud.AppType
	6,  // 4: Cloud.PrivateKey.private_key_generated_at:type_name -> google.protobuf.Timestamp
	6,  // 5: Cloud.PrivateKey.private_key_secured_at:type_name -> google.protobuf.Timestamp
	1,  // 6: Cloud.OrganizationRequest.organization:type_name -> Cloud.Organization
	1,  // 7: Cloud.OrganizationRequest.update:type_name -> Cloud.Organization
	3,  // 8: Cloud.OrganizationRequest.private_key:type_name -> Cloud.PrivateKey
	1,  // 9: Cloud.OrganizationResponse.organization:type_name -> Cloud.Organization
	1,  // 10: Cloud.OrganizationResponse.organizations:type_name -> Cloud.Organization
	4,  // 11: Cloud.CloudService.Heartbeat:input_type -> Cloud.OrganizationRequest
	4,  // 12: Cloud.CloudService.Create:input_type -> Cloud.OrganizationRequest
	4,  // 13: Cloud.CloudService.CreatePrivateKey:input_type -> Cloud.OrganizationRequest
	4,  // 14: Cloud.CloudService.DeletePrivateKey:input_type -> Cloud.OrganizationRequest
	4,  // 15: Cloud.CloudService.ValidatePrivateKey:input_type -> Cloud.OrganizationRequest
	4,  // 16: Cloud.CloudService.Update:input_type -> Cloud.OrganizationRequest
	4,  // 17: Cloud.CloudService.Get:input_type -> Cloud.OrganizationRequest
	4,  // 18: Cloud.CloudService.GetByOwner:input_type -> Cloud.OrganizationRequest
	4,  // 19: Cloud.CloudService.Delete:input_type -> Cloud.OrganizationRequest
	5,  // 20: Cloud.CloudService.Heartbeat:output_type -> Cloud.OrganizationResponse
	5,  // 21: Cloud.CloudService.Create:output_type -> Cloud.OrganizationResponse
	5,  // 22: Cloud.CloudService.CreatePrivateKey:output_type -> Cloud.OrganizationResponse
	5,  // 23: Cloud.CloudService.DeletePrivateKey:output_type -> Cloud.OrganizationResponse
	5,  // 24: Cloud.CloudService.ValidatePrivateKey:output_type -> Cloud.OrganizationResponse
	5,  // 25: Cloud.CloudService.Update:output_type -> Cloud.OrganizationResponse
	5,  // 26: Cloud.CloudService.Get:output_type -> Cloud.OrganizationResponse
	5,  // 27: Cloud.CloudService.GetByOwner:output_type -> Cloud.OrganizationResponse
	5,  // 28: Cloud.CloudService.Delete:output_type -> Cloud.OrganizationResponse
	20, // [20:29] is the sub-list for method output_type
	11, // [11:20] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_cloud_proto_init() }
func file_cloud_proto_init() {
	if File_cloud_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_cloud_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Organization); i {
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
		file_cloud_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*App); i {
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
		file_cloud_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PrivateKey); i {
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
		file_cloud_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OrganizationRequest); i {
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
		file_cloud_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OrganizationResponse); i {
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
			RawDescriptor: file_cloud_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_cloud_proto_goTypes,
		DependencyIndexes: file_cloud_proto_depIdxs,
		EnumInfos:         file_cloud_proto_enumTypes,
		MessageInfos:      file_cloud_proto_msgTypes,
	}.Build()
	File_cloud_proto = out.File
	file_cloud_proto_rawDesc = nil
	file_cloud_proto_goTypes = nil
	file_cloud_proto_depIdxs = nil
}
