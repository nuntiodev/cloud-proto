// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package go_cloud

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

// AdminServiceClient is the client API for AdminService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AdminServiceClient interface {
	Heartbeat(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	CreateOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetUserOrganizations(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	UpdateOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	CreateProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	RollPrivateKey(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GenerateAccessToken(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	UpdateProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetUserProjects(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetProjectsInOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	DeleteProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
}

type adminServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAdminServiceClient(cc grpc.ClientConnInterface) AdminServiceClient {
	return &adminServiceClient{cc}
}

func (c *adminServiceClient) Heartbeat(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/Heartbeat", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) CreateOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/CreateOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GetOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GetOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GetUserOrganizations(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GetUserOrganizations", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) UpdateOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/UpdateOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) CreateProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/CreateProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) RollPrivateKey(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/RollPrivateKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GenerateAccessToken(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GenerateAccessToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) UpdateProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/UpdateProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GetProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GetProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GetUserProjects(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GetUserProjects", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) GetProjectsInOrganization(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/GetProjectsInOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminServiceClient) DeleteProject(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.AdminService/DeleteProject", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AdminServiceServer is the server API for AdminService service.
// All implementations should embed UnimplementedAdminServiceServer
// for forward compatibility
type AdminServiceServer interface {
	Heartbeat(context.Context, *CloudRequest) (*CloudResponse, error)
	CreateOrganization(context.Context, *CloudRequest) (*CloudResponse, error)
	GetOrganization(context.Context, *CloudRequest) (*CloudResponse, error)
	GetUserOrganizations(context.Context, *CloudRequest) (*CloudResponse, error)
	UpdateOrganization(context.Context, *CloudRequest) (*CloudResponse, error)
	CreateProject(context.Context, *CloudRequest) (*CloudResponse, error)
	RollPrivateKey(context.Context, *CloudRequest) (*CloudResponse, error)
	GenerateAccessToken(context.Context, *CloudRequest) (*CloudResponse, error)
	UpdateProject(context.Context, *CloudRequest) (*CloudResponse, error)
	GetProject(context.Context, *CloudRequest) (*CloudResponse, error)
	GetUserProjects(context.Context, *CloudRequest) (*CloudResponse, error)
	GetProjectsInOrganization(context.Context, *CloudRequest) (*CloudResponse, error)
	DeleteProject(context.Context, *CloudRequest) (*CloudResponse, error)
}

// UnimplementedAdminServiceServer should be embedded to have forward compatible implementations.
type UnimplementedAdminServiceServer struct {
}

func (UnimplementedAdminServiceServer) Heartbeat(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Heartbeat not implemented")
}
func (UnimplementedAdminServiceServer) CreateOrganization(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateOrganization not implemented")
}
func (UnimplementedAdminServiceServer) GetOrganization(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrganization not implemented")
}
func (UnimplementedAdminServiceServer) GetUserOrganizations(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserOrganizations not implemented")
}
func (UnimplementedAdminServiceServer) UpdateOrganization(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateOrganization not implemented")
}
func (UnimplementedAdminServiceServer) CreateProject(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProject not implemented")
}
func (UnimplementedAdminServiceServer) RollPrivateKey(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RollPrivateKey not implemented")
}
func (UnimplementedAdminServiceServer) GenerateAccessToken(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateAccessToken not implemented")
}
func (UnimplementedAdminServiceServer) UpdateProject(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProject not implemented")
}
func (UnimplementedAdminServiceServer) GetProject(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProject not implemented")
}
func (UnimplementedAdminServiceServer) GetUserProjects(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserProjects not implemented")
}
func (UnimplementedAdminServiceServer) GetProjectsInOrganization(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProjectsInOrganization not implemented")
}
func (UnimplementedAdminServiceServer) DeleteProject(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProject not implemented")
}

// UnsafeAdminServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AdminServiceServer will
// result in compilation errors.
type UnsafeAdminServiceServer interface {
	mustEmbedUnimplementedAdminServiceServer()
}

func RegisterAdminServiceServer(s grpc.ServiceRegistrar, srv AdminServiceServer) {
	s.RegisterService(&AdminService_ServiceDesc, srv)
}

func _AdminService_Heartbeat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).Heartbeat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/Heartbeat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).Heartbeat(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_CreateOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).CreateOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/CreateOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).CreateOrganization(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GetOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GetOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GetOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GetOrganization(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GetUserOrganizations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GetUserOrganizations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GetUserOrganizations",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GetUserOrganizations(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_UpdateOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).UpdateOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/UpdateOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).UpdateOrganization(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_CreateProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).CreateProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/CreateProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).CreateProject(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_RollPrivateKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).RollPrivateKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/RollPrivateKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).RollPrivateKey(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GenerateAccessToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GenerateAccessToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GenerateAccessToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GenerateAccessToken(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_UpdateProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).UpdateProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/UpdateProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).UpdateProject(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GetProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GetProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GetProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GetProject(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GetUserProjects_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GetUserProjects(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GetUserProjects",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GetUserProjects(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_GetProjectsInOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).GetProjectsInOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/GetProjectsInOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).GetProjectsInOrganization(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AdminService_DeleteProject_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServiceServer).DeleteProject(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.AdminService/DeleteProject",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServiceServer).DeleteProject(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AdminService_ServiceDesc is the grpc.ServiceDesc for AdminService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AdminService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "Cloud.AdminService",
	HandlerType: (*AdminServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Heartbeat",
			Handler:    _AdminService_Heartbeat_Handler,
		},
		{
			MethodName: "CreateOrganization",
			Handler:    _AdminService_CreateOrganization_Handler,
		},
		{
			MethodName: "GetOrganization",
			Handler:    _AdminService_GetOrganization_Handler,
		},
		{
			MethodName: "GetUserOrganizations",
			Handler:    _AdminService_GetUserOrganizations_Handler,
		},
		{
			MethodName: "UpdateOrganization",
			Handler:    _AdminService_UpdateOrganization_Handler,
		},
		{
			MethodName: "CreateProject",
			Handler:    _AdminService_CreateProject_Handler,
		},
		{
			MethodName: "RollPrivateKey",
			Handler:    _AdminService_RollPrivateKey_Handler,
		},
		{
			MethodName: "GenerateAccessToken",
			Handler:    _AdminService_GenerateAccessToken_Handler,
		},
		{
			MethodName: "UpdateProject",
			Handler:    _AdminService_UpdateProject_Handler,
		},
		{
			MethodName: "GetProject",
			Handler:    _AdminService_GetProject_Handler,
		},
		{
			MethodName: "GetUserProjects",
			Handler:    _AdminService_GetUserProjects_Handler,
		},
		{
			MethodName: "GetProjectsInOrganization",
			Handler:    _AdminService_GetProjectsInOrganization_Handler,
		},
		{
			MethodName: "DeleteProject",
			Handler:    _AdminService_DeleteProject_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cloud.proto",
}

// PublicServiceClient is the client API for PublicService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PublicServiceClient interface {
	PublicKeys(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetMembers(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetPartner(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
	GetPartners(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error)
}

type publicServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPublicServiceClient(cc grpc.ClientConnInterface) PublicServiceClient {
	return &publicServiceClient{cc}
}

func (c *publicServiceClient) PublicKeys(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.PublicService/PublicKeys", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicServiceClient) GetMembers(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.PublicService/GetMembers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicServiceClient) GetPartner(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.PublicService/GetPartner", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicServiceClient) GetPartners(ctx context.Context, in *CloudRequest, opts ...grpc.CallOption) (*CloudResponse, error) {
	out := new(CloudResponse)
	err := c.cc.Invoke(ctx, "/Cloud.PublicService/GetPartners", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PublicServiceServer is the server API for PublicService service.
// All implementations should embed UnimplementedPublicServiceServer
// for forward compatibility
type PublicServiceServer interface {
	PublicKeys(context.Context, *CloudRequest) (*CloudResponse, error)
	GetMembers(context.Context, *CloudRequest) (*CloudResponse, error)
	GetPartner(context.Context, *CloudRequest) (*CloudResponse, error)
	GetPartners(context.Context, *CloudRequest) (*CloudResponse, error)
}

// UnimplementedPublicServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPublicServiceServer struct {
}

func (UnimplementedPublicServiceServer) PublicKeys(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicKeys not implemented")
}
func (UnimplementedPublicServiceServer) GetMembers(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMembers not implemented")
}
func (UnimplementedPublicServiceServer) GetPartner(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPartner not implemented")
}
func (UnimplementedPublicServiceServer) GetPartners(context.Context, *CloudRequest) (*CloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPartners not implemented")
}

// UnsafePublicServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PublicServiceServer will
// result in compilation errors.
type UnsafePublicServiceServer interface {
	mustEmbedUnimplementedPublicServiceServer()
}

func RegisterPublicServiceServer(s grpc.ServiceRegistrar, srv PublicServiceServer) {
	s.RegisterService(&PublicService_ServiceDesc, srv)
}

func _PublicService_PublicKeys_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicServiceServer).PublicKeys(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.PublicService/PublicKeys",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicServiceServer).PublicKeys(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicService_GetMembers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicServiceServer).GetMembers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.PublicService/GetMembers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicServiceServer).GetMembers(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicService_GetPartner_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicServiceServer).GetPartner(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.PublicService/GetPartner",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicServiceServer).GetPartner(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicService_GetPartners_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicServiceServer).GetPartners(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud.PublicService/GetPartners",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicServiceServer).GetPartners(ctx, req.(*CloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PublicService_ServiceDesc is the grpc.ServiceDesc for PublicService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PublicService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "Cloud.PublicService",
	HandlerType: (*PublicServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PublicKeys",
			Handler:    _PublicService_PublicKeys_Handler,
		},
		{
			MethodName: "GetMembers",
			Handler:    _PublicService_GetMembers_Handler,
		},
		{
			MethodName: "GetPartner",
			Handler:    _PublicService_GetPartner_Handler,
		},
		{
			MethodName: "GetPartners",
			Handler:    _PublicService_GetPartners_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cloud.proto",
}
