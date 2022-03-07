// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package cloud_project

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	Heartbeat(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectRequest, error)
	Create(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	RollPrivateKey(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	GenerateAuthToken(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	ValidateAuthToken(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	UpdateInfo(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	Get(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	GetByOwner(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
	Delete(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) Heartbeat(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectRequest, error) {
	out := new(ProjectRequest)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/Heartbeat", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) Create(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) RollPrivateKey(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/RollPrivateKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GenerateAuthToken(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/GenerateAuthToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) ValidateAuthToken(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/ValidateAuthToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) UpdateInfo(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/UpdateInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) Get(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetByOwner(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/GetByOwner", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) Delete(ctx context.Context, in *ProjectRequest, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/CloudProject.Service/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations should embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	Heartbeat(context.Context, *ProjectRequest) (*ProjectRequest, error)
	Create(context.Context, *ProjectRequest) (*ProjectResponse, error)
	RollPrivateKey(context.Context, *ProjectRequest) (*ProjectResponse, error)
	GenerateAuthToken(context.Context, *ProjectRequest) (*ProjectResponse, error)
	ValidateAuthToken(context.Context, *ProjectRequest) (*ProjectResponse, error)
	UpdateInfo(context.Context, *ProjectRequest) (*ProjectResponse, error)
	Get(context.Context, *ProjectRequest) (*ProjectResponse, error)
	GetByOwner(context.Context, *ProjectRequest) (*ProjectResponse, error)
	Delete(context.Context, *ProjectRequest) (*ProjectResponse, error)
}

// UnimplementedServiceServer should be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) Heartbeat(context.Context, *ProjectRequest) (*ProjectRequest, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Heartbeat not implemented")
}
func (UnimplementedServiceServer) Create(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedServiceServer) RollPrivateKey(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RollPrivateKey not implemented")
}
func (UnimplementedServiceServer) GenerateAuthToken(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateAuthToken not implemented")
}
func (UnimplementedServiceServer) ValidateAuthToken(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateAuthToken not implemented")
}
func (UnimplementedServiceServer) UpdateInfo(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateInfo not implemented")
}
func (UnimplementedServiceServer) Get(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedServiceServer) GetByOwner(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByOwner not implemented")
}
func (UnimplementedServiceServer) Delete(context.Context, *ProjectRequest) (*ProjectResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_Heartbeat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Heartbeat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/Heartbeat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Heartbeat(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Create(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_RollPrivateKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).RollPrivateKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/RollPrivateKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).RollPrivateKey(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GenerateAuthToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GenerateAuthToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/GenerateAuthToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GenerateAuthToken(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_ValidateAuthToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).ValidateAuthToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/ValidateAuthToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).ValidateAuthToken(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_UpdateInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).UpdateInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/UpdateInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).UpdateInfo(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Get(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetByOwner_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetByOwner(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/GetByOwner",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetByOwner(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProjectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/CloudProject.Service/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Delete(ctx, req.(*ProjectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "CloudProject.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Heartbeat",
			Handler:    _Service_Heartbeat_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _Service_Create_Handler,
		},
		{
			MethodName: "RollPrivateKey",
			Handler:    _Service_RollPrivateKey_Handler,
		},
		{
			MethodName: "GenerateAuthToken",
			Handler:    _Service_GenerateAuthToken_Handler,
		},
		{
			MethodName: "ValidateAuthToken",
			Handler:    _Service_ValidateAuthToken_Handler,
		},
		{
			MethodName: "UpdateInfo",
			Handler:    _Service_UpdateInfo_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _Service_Get_Handler,
		},
		{
			MethodName: "GetByOwner",
			Handler:    _Service_GetByOwner_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _Service_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cloud_project.proto",
}
