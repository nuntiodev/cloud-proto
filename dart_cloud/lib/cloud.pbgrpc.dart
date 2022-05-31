///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'cloud.pb.dart' as $0;
export 'cloud.pb.dart';

class CloudServiceClient extends $grpc.Client {
  static final _$heartbeat =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/Heartbeat',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$createOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/CreateOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GetOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getUsersOrganizations =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GetUsersOrganizations',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$updateOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/UpdateOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$createProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/CreateProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$rollPrivateKey =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/RollPrivateKey',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$generateAccessToken =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GenerateAccessToken',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$validateAccessToken =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/ValidateAccessToken',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$updateProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/UpdateProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GetProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getUserProjects =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GetUserProjects',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getProjectsInOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/GetProjectsInOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$deleteProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/CloudProject.CloudService/DeleteProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));

  CloudServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.CloudResponse> heartbeat($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$heartbeat, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> createOrganization(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createOrganization, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getOrganization(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getOrganization, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getUsersOrganizations(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUsersOrganizations, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> updateOrganization(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateOrganization, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> createProject($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createProject, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> rollPrivateKey($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$rollPrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> generateAccessToken(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$generateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> validateAccessToken(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> updateProject($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateProject, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getProject($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getProject, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getUserProjects(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserProjects, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getProjectsInOrganization(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getProjectsInOrganization, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> deleteProject($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteProject, request, options: options);
  }
}

abstract class CloudServiceBase extends $grpc.Service {
  $core.String get $name => 'CloudProject.CloudService';

  CloudServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'Heartbeat',
        heartbeat_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'CreateOrganization',
        createOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetOrganization',
        getOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetUsersOrganizations',
        getUsersOrganizations_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'UpdateOrganization',
        updateOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'CreateProject',
        createProject_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'RollPrivateKey',
        rollPrivateKey_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GenerateAccessToken',
        generateAccessToken_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'ValidateAccessToken',
        validateAccessToken_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'UpdateProject',
        updateProject_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetProject',
        getProject_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetUserProjects',
        getUserProjects_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetProjectsInOrganization',
        getProjectsInOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'DeleteProject',
        deleteProject_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.CloudResponse> heartbeat_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return heartbeat(call, await request);
  }

  $async.Future<$0.CloudResponse> createOrganization_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return createOrganization(call, await request);
  }

  $async.Future<$0.CloudResponse> getOrganization_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getOrganization(call, await request);
  }

  $async.Future<$0.CloudResponse> getUsersOrganizations_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getUsersOrganizations(call, await request);
  }

  $async.Future<$0.CloudResponse> updateOrganization_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return updateOrganization(call, await request);
  }

  $async.Future<$0.CloudResponse> createProject_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return createProject(call, await request);
  }

  $async.Future<$0.CloudResponse> rollPrivateKey_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return rollPrivateKey(call, await request);
  }

  $async.Future<$0.CloudResponse> generateAccessToken_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return generateAccessToken(call, await request);
  }

  $async.Future<$0.CloudResponse> validateAccessToken_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return validateAccessToken(call, await request);
  }

  $async.Future<$0.CloudResponse> updateProject_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return updateProject(call, await request);
  }

  $async.Future<$0.CloudResponse> getProject_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getProject(call, await request);
  }

  $async.Future<$0.CloudResponse> getUserProjects_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getUserProjects(call, await request);
  }

  $async.Future<$0.CloudResponse> getProjectsInOrganization_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getProjectsInOrganization(call, await request);
  }

  $async.Future<$0.CloudResponse> deleteProject_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return deleteProject(call, await request);
  }

  $async.Future<$0.CloudResponse> heartbeat(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> createOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getUsersOrganizations(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> updateOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> createProject(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> rollPrivateKey(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> generateAccessToken(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> validateAccessToken(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> updateProject(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getProject(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getUserProjects(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getProjectsInOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> deleteProject(
      $grpc.ServiceCall call, $0.CloudRequest request);
}
