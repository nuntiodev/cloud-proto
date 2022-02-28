// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
// source: block-proto/block_user.proto

package block_user

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

type Gender int32

const (
	Gender_INVALID_GENDER Gender = 0
	Gender_MALE           Gender = 1
	Gender_FEMALE         Gender = 2
	Gender_OTHER          Gender = 3
)

// Enum value maps for Gender.
var (
	Gender_name = map[int32]string{
		0: "INVALID_GENDER",
		1: "MALE",
		2: "FEMALE",
		3: "OTHER",
	}
	Gender_value = map[string]int32{
		"INVALID_GENDER": 0,
		"MALE":           1,
		"FEMALE":         2,
		"OTHER":          3,
	}
)

func (x Gender) Enum() *Gender {
	p := new(Gender)
	*p = x
	return p
}

func (x Gender) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Gender) Descriptor() protoreflect.EnumDescriptor {
	return file_block_proto_block_user_proto_enumTypes[0].Descriptor()
}

func (Gender) Type() protoreflect.EnumType {
	return &file_block_proto_block_user_proto_enumTypes[0]
}

func (x Gender) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Gender.Descriptor instead.
func (Gender) EnumDescriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{0}
}

type UserFilter_SortBy int32

const (
	UserFilter_CREATED_AT UserFilter_SortBy = 0
	UserFilter_UPDATE_AT  UserFilter_SortBy = 1
	UserFilter_BIRTHDATE  UserFilter_SortBy = 2
	UserFilter_NAME       UserFilter_SortBy = 3
	UserFilter_EMAIL      UserFilter_SortBy = 4
)

// Enum value maps for UserFilter_SortBy.
var (
	UserFilter_SortBy_name = map[int32]string{
		0: "CREATED_AT",
		1: "UPDATE_AT",
		2: "BIRTHDATE",
		3: "NAME",
		4: "EMAIL",
	}
	UserFilter_SortBy_value = map[string]int32{
		"CREATED_AT": 0,
		"UPDATE_AT":  1,
		"BIRTHDATE":  2,
		"NAME":       3,
		"EMAIL":      4,
	}
)

func (x UserFilter_SortBy) Enum() *UserFilter_SortBy {
	p := new(UserFilter_SortBy)
	*p = x
	return p
}

func (x UserFilter_SortBy) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (UserFilter_SortBy) Descriptor() protoreflect.EnumDescriptor {
	return file_block_proto_block_user_proto_enumTypes[1].Descriptor()
}

func (UserFilter_SortBy) Type() protoreflect.EnumType {
	return &file_block_proto_block_user_proto_enumTypes[1]
}

func (x UserFilter_SortBy) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use UserFilter_SortBy.Descriptor instead.
func (UserFilter_SortBy) EnumDescriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{2, 0}
}

type UserFilter_Order int32

const (
	UserFilter_INC UserFilter_Order = 0
	UserFilter_DEC UserFilter_Order = 1
)

// Enum value maps for UserFilter_Order.
var (
	UserFilter_Order_name = map[int32]string{
		0: "INC",
		1: "DEC",
	}
	UserFilter_Order_value = map[string]int32{
		"INC": 0,
		"DEC": 1,
	}
)

func (x UserFilter_Order) Enum() *UserFilter_Order {
	p := new(UserFilter_Order)
	*p = x
	return p
}

func (x UserFilter_Order) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (UserFilter_Order) Descriptor() protoreflect.EnumDescriptor {
	return file_block_proto_block_user_proto_enumTypes[2].Descriptor()
}

func (UserFilter_Order) Type() protoreflect.EnumType {
	return &file_block_proto_block_user_proto_enumTypes[2]
}

func (x UserFilter_Order) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use UserFilter_Order.Descriptor instead.
func (UserFilter_Order) EnumDescriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{2, 1}
}

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Namespace string                 `protobuf:"bytes,2,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Role      string                 `protobuf:"bytes,3,opt,name=role,proto3" json:"role,omitempty"`
	Name      string                 `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Email     string                 `protobuf:"bytes,5,opt,name=email,proto3" json:"email,omitempty"`
	Password  string                 `protobuf:"bytes,6,opt,name=password,proto3" json:"password,omitempty"`
	Gender    Gender                 `protobuf:"varint,7,opt,name=gender,proto3,enum=BlockUser.Gender" json:"gender,omitempty"`
	Country   string                 `protobuf:"bytes,8,opt,name=country,proto3" json:"country,omitempty"`
	Image     string                 `protobuf:"bytes,9,opt,name=image,proto3" json:"image,omitempty"`
	Blocked   bool                   `protobuf:"varint,10,opt,name=blocked,proto3" json:"blocked,omitempty"`
	Birthdate *timestamppb.Timestamp `protobuf:"bytes,11,opt,name=birthdate,proto3" json:"birthdate,omitempty"`
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,12,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
	UpdatedAt *timestamppb.Timestamp `protobuf:"bytes,13,opt,name=updatedAt,proto3" json:"updatedAt,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_block_proto_block_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{0}
}

func (x *User) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *User) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *User) GetRole() string {
	if x != nil {
		return x.Role
	}
	return ""
}

func (x *User) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *User) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *User) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *User) GetGender() Gender {
	if x != nil {
		return x.Gender
	}
	return Gender_INVALID_GENDER
}

func (x *User) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *User) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *User) GetBlocked() bool {
	if x != nil {
		return x.Blocked
	}
	return false
}

func (x *User) GetBirthdate() *timestamppb.Timestamp {
	if x != nil {
		return x.Birthdate
	}
	return nil
}

func (x *User) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *User) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

type UserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User      *User       `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
	Update    *User       `protobuf:"bytes,2,opt,name=update,proto3" json:"update,omitempty"`
	Filter    *UserFilter `protobuf:"bytes,3,opt,name=filter,proto3" json:"filter,omitempty"`
	Namespace string      `protobuf:"bytes,4,opt,name=namespace,proto3" json:"namespace,omitempty"`
}

func (x *UserRequest) Reset() {
	*x = UserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_block_proto_block_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserRequest) ProtoMessage() {}

func (x *UserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserRequest.ProtoReflect.Descriptor instead.
func (*UserRequest) Descriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{1}
}

func (x *UserRequest) GetUser() *User {
	if x != nil {
		return x.User
	}
	return nil
}

func (x *UserRequest) GetUpdate() *User {
	if x != nil {
		return x.Update
	}
	return nil
}

func (x *UserRequest) GetFilter() *UserFilter {
	if x != nil {
		return x.Filter
	}
	return nil
}

func (x *UserRequest) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

type UserFilter struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	From      int32             `protobuf:"varint,1,opt,name=from,proto3" json:"from,omitempty"`
	To        int32             `protobuf:"varint,2,opt,name=to,proto3" json:"to,omitempty"`
	Sort      UserFilter_SortBy `protobuf:"varint,3,opt,name=sort,proto3,enum=BlockUser.UserFilter_SortBy" json:"sort,omitempty"`
	Order     UserFilter_Order  `protobuf:"varint,4,opt,name=order,proto3,enum=BlockUser.UserFilter_Order" json:"order,omitempty"`
	Namespace string            `protobuf:"bytes,5,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Search    string            `protobuf:"bytes,6,opt,name=search,proto3" json:"search,omitempty"`
}

func (x *UserFilter) Reset() {
	*x = UserFilter{}
	if protoimpl.UnsafeEnabled {
		mi := &file_block_proto_block_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserFilter) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserFilter) ProtoMessage() {}

func (x *UserFilter) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserFilter.ProtoReflect.Descriptor instead.
func (*UserFilter) Descriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{2}
}

func (x *UserFilter) GetFrom() int32 {
	if x != nil {
		return x.From
	}
	return 0
}

func (x *UserFilter) GetTo() int32 {
	if x != nil {
		return x.To
	}
	return 0
}

func (x *UserFilter) GetSort() UserFilter_SortBy {
	if x != nil {
		return x.Sort
	}
	return UserFilter_CREATED_AT
}

func (x *UserFilter) GetOrder() UserFilter_Order {
	if x != nil {
		return x.Order
	}
	return UserFilter_INC
}

func (x *UserFilter) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *UserFilter) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

type UserResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User  *User   `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
	Users []*User `protobuf:"bytes,2,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *UserResponse) Reset() {
	*x = UserResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_block_proto_block_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserResponse) ProtoMessage() {}

func (x *UserResponse) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserResponse.ProtoReflect.Descriptor instead.
func (*UserResponse) Descriptor() ([]byte, []int) {
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{3}
}

func (x *UserResponse) GetUser() *User {
	if x != nil {
		return x.User
	}
	return nil
}

func (x *UserResponse) GetUsers() []*User {
	if x != nil {
		return x.Users
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
		mi := &file_block_proto_block_user_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[4]
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
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{4}
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
		mi := &file_block_proto_block_user_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_block_proto_block_user_proto_msgTypes[5]
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
	return file_block_proto_block_user_proto_rawDescGZIP(), []int{5}
}

func (x *Response) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

var File_block_proto_block_user_proto protoreflect.FileDescriptor

var file_block_proto_block_user_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb1, 0x03, 0x0a, 0x04, 0x55,
	0x73, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x72, 0x6f, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61,
	0x69, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12,
	0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x29, 0x0a, 0x06, 0x67,
	0x65, 0x6e, 0x64, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x52, 0x06,
	0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72,
	0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x14, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x65,
	0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x65, 0x64,
	0x12, 0x38, 0x0a, 0x09, 0x62, 0x69, 0x72, 0x74, 0x68, 0x64, 0x61, 0x74, 0x65, 0x18, 0x0b, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52,
	0x09, 0x62, 0x69, 0x72, 0x74, 0x68, 0x64, 0x61, 0x74, 0x65, 0x12, 0x38, 0x0a, 0x09, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x38, 0x0a, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0xa8,
	0x01, 0x0a, 0x0b, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23,
	0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x04, 0x75,
	0x73, 0x65, 0x72, 0x12, 0x27, 0x0a, 0x06, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x06, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x2d, 0x0a, 0x06,
	0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x46, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x1c, 0x0a, 0x09, 0x6e,
	0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x22, 0xb3, 0x02, 0x0a, 0x0a, 0x55, 0x73,
	0x65, 0x72, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x72, 0x6f, 0x6d,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x72, 0x6f, 0x6d, 0x12, 0x0e, 0x0a, 0x02,
	0x74, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x74, 0x6f, 0x12, 0x30, 0x0a, 0x04,
	0x73, 0x6f, 0x72, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x46, 0x69, 0x6c, 0x74, 0x65,
	0x72, 0x2e, 0x53, 0x6f, 0x72, 0x74, 0x42, 0x79, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x12, 0x31,
	0x0a, 0x05, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x46, 0x69,
	0x6c, 0x74, 0x65, 0x72, 0x2e, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x52, 0x05, 0x6f, 0x72, 0x64, 0x65,
	0x72, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x22, 0x4b, 0x0a, 0x06, 0x53, 0x6f, 0x72, 0x74, 0x42,
	0x79, 0x12, 0x0e, 0x0a, 0x0a, 0x43, 0x52, 0x45, 0x41, 0x54, 0x45, 0x44, 0x5f, 0x41, 0x54, 0x10,
	0x00, 0x12, 0x0d, 0x0a, 0x09, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x5f, 0x41, 0x54, 0x10, 0x01,
	0x12, 0x0d, 0x0a, 0x09, 0x42, 0x49, 0x52, 0x54, 0x48, 0x44, 0x41, 0x54, 0x45, 0x10, 0x02, 0x12,
	0x08, 0x0a, 0x04, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x03, 0x12, 0x09, 0x0a, 0x05, 0x45, 0x4d, 0x41,
	0x49, 0x4c, 0x10, 0x04, 0x22, 0x19, 0x0a, 0x05, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x07, 0x0a,
	0x03, 0x49, 0x4e, 0x43, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x44, 0x45, 0x43, 0x10, 0x01, 0x22,
	0x5a, 0x0a, 0x0c, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x23, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x04,
	0x75, 0x73, 0x65, 0x72, 0x12, 0x25, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18, 0x02, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0x09, 0x0a, 0x07, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x1c, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x6d, 0x73, 0x67, 0x2a, 0x3d, 0x0a, 0x06, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x12,
	0x0a, 0x0e, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x5f, 0x47, 0x45, 0x4e, 0x44, 0x45, 0x52,
	0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x4d, 0x41, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06,
	0x46, 0x45, 0x4d, 0x41, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x09, 0x0a, 0x05, 0x4f, 0x54, 0x48, 0x45,
	0x52, 0x10, 0x03, 0x32, 0xd3, 0x05, 0x0a, 0x07, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x36, 0x0a, 0x09, 0x48, 0x65, 0x61, 0x72, 0x74, 0x62, 0x65, 0x61, 0x74, 0x12, 0x12, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x13, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3b, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x0e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73,
	0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17,
	0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x0b, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65,
	0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x42, 0x0a, 0x0d, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x16, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72,
	0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x44, 0x0a, 0x0f, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x38, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72,
	0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x3b, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x48, 0x0a, 0x13,
	0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x43, 0x72, 0x65, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x61, 0x6c, 0x73, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3b, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65,
	0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x00, 0x12, 0x44, 0x0a, 0x0f, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4e, 0x61, 0x6d,
	0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x16, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73,
	0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17,
	0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x17, 0x5a, 0x15, 0x2e, 0x2f, 0x67,
	0x6f, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x75, 0x73,
	0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_block_proto_block_user_proto_rawDescOnce sync.Once
	file_block_proto_block_user_proto_rawDescData = file_block_proto_block_user_proto_rawDesc
)

func file_block_proto_block_user_proto_rawDescGZIP() []byte {
	file_block_proto_block_user_proto_rawDescOnce.Do(func() {
		file_block_proto_block_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_block_proto_block_user_proto_rawDescData)
	})
	return file_block_proto_block_user_proto_rawDescData
}

var file_block_proto_block_user_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_block_proto_block_user_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_block_proto_block_user_proto_goTypes = []interface{}{
	(Gender)(0),                   // 0: BlockUser.Gender
	(UserFilter_SortBy)(0),        // 1: BlockUser.UserFilter.SortBy
	(UserFilter_Order)(0),         // 2: BlockUser.UserFilter.Order
	(*User)(nil),                  // 3: BlockUser.User
	(*UserRequest)(nil),           // 4: BlockUser.UserRequest
	(*UserFilter)(nil),            // 5: BlockUser.UserFilter
	(*UserResponse)(nil),          // 6: BlockUser.UserResponse
	(*Request)(nil),               // 7: BlockUser.Request
	(*Response)(nil),              // 8: BlockUser.Response
	(*timestamppb.Timestamp)(nil), // 9: google.protobuf.Timestamp
}
var file_block_proto_block_user_proto_depIdxs = []int32{
	0,  // 0: BlockUser.User.gender:type_name -> BlockUser.Gender
	9,  // 1: BlockUser.User.birthdate:type_name -> google.protobuf.Timestamp
	9,  // 2: BlockUser.User.createdAt:type_name -> google.protobuf.Timestamp
	9,  // 3: BlockUser.User.updatedAt:type_name -> google.protobuf.Timestamp
	3,  // 4: BlockUser.UserRequest.user:type_name -> BlockUser.User
	3,  // 5: BlockUser.UserRequest.update:type_name -> BlockUser.User
	5,  // 6: BlockUser.UserRequest.filter:type_name -> BlockUser.UserFilter
	1,  // 7: BlockUser.UserFilter.sort:type_name -> BlockUser.UserFilter.SortBy
	2,  // 8: BlockUser.UserFilter.order:type_name -> BlockUser.UserFilter.Order
	3,  // 9: BlockUser.UserResponse.user:type_name -> BlockUser.User
	3,  // 10: BlockUser.UserResponse.users:type_name -> BlockUser.User
	7,  // 11: BlockUser.Service.Heartbeat:input_type -> BlockUser.Request
	4,  // 12: BlockUser.Service.Create:input_type -> BlockUser.UserRequest
	4,  // 13: BlockUser.Service.UpdatePassword:input_type -> BlockUser.UserRequest
	4,  // 14: BlockUser.Service.UpdateEmail:input_type -> BlockUser.UserRequest
	4,  // 15: BlockUser.Service.UpdateProfile:input_type -> BlockUser.UserRequest
	4,  // 16: BlockUser.Service.UpdateNamespace:input_type -> BlockUser.UserRequest
	4,  // 17: BlockUser.Service.Get:input_type -> BlockUser.UserRequest
	4,  // 18: BlockUser.Service.GetAll:input_type -> BlockUser.UserRequest
	4,  // 19: BlockUser.Service.ValidateCredentials:input_type -> BlockUser.UserRequest
	4,  // 20: BlockUser.Service.Delete:input_type -> BlockUser.UserRequest
	4,  // 21: BlockUser.Service.DeleteNamespace:input_type -> BlockUser.UserRequest
	8,  // 22: BlockUser.Service.Heartbeat:output_type -> BlockUser.Response
	6,  // 23: BlockUser.Service.Create:output_type -> BlockUser.UserResponse
	6,  // 24: BlockUser.Service.UpdatePassword:output_type -> BlockUser.UserResponse
	6,  // 25: BlockUser.Service.UpdateEmail:output_type -> BlockUser.UserResponse
	6,  // 26: BlockUser.Service.UpdateProfile:output_type -> BlockUser.UserResponse
	6,  // 27: BlockUser.Service.UpdateNamespace:output_type -> BlockUser.UserResponse
	6,  // 28: BlockUser.Service.Get:output_type -> BlockUser.UserResponse
	6,  // 29: BlockUser.Service.GetAll:output_type -> BlockUser.UserResponse
	6,  // 30: BlockUser.Service.ValidateCredentials:output_type -> BlockUser.UserResponse
	6,  // 31: BlockUser.Service.Delete:output_type -> BlockUser.UserResponse
	6,  // 32: BlockUser.Service.DeleteNamespace:output_type -> BlockUser.UserResponse
	22, // [22:33] is the sub-list for method output_type
	11, // [11:22] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_block_proto_block_user_proto_init() }
func file_block_proto_block_user_proto_init() {
	if File_block_proto_block_user_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_block_proto_block_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
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
		file_block_proto_block_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserRequest); i {
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
		file_block_proto_block_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserFilter); i {
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
		file_block_proto_block_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserResponse); i {
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
		file_block_proto_block_user_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
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
		file_block_proto_block_user_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
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
			RawDescriptor: file_block_proto_block_user_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_block_proto_block_user_proto_goTypes,
		DependencyIndexes: file_block_proto_block_user_proto_depIdxs,
		EnumInfos:         file_block_proto_block_user_proto_enumTypes,
		MessageInfos:      file_block_proto_block_user_proto_msgTypes,
	}.Build()
	File_block_proto_block_user_proto = out.File
	file_block_proto_block_user_proto_rawDesc = nil
	file_block_proto_block_user_proto_goTypes = nil
	file_block_proto_block_user_proto_depIdxs = nil
}
