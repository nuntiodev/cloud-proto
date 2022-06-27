///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'cloud.pb.dart' as $0;
export 'cloud.pb.dart';

class CloudServiceClient extends $grpc.Client {
  static final _$heartbeat =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/Heartbeat',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$createOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/CreateOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getUserOrganizations =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetUserOrganizations',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$updateOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/UpdateOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$createProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/CreateProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$rollPrivateKey =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/RollPrivateKey',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$generateAccessToken =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GenerateAccessToken',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$publicKeys =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/PublicKeys',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$updateProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/UpdateProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getUserProjects =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetUserProjects',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getProjectsInOrganization =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetProjectsInOrganization',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$deleteProject =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/DeleteProject',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$createPartner =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/CreatePartner',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getPartner =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetPartner',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$getPartners =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/GetPartners',
          ($0.CloudRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.CloudResponse.fromBuffer(value));
  static final _$deletePartner =
      $grpc.ClientMethod<$0.CloudRequest, $0.CloudResponse>(
          '/Cloud.CloudService/DeletePartner',
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

  $grpc.ResponseFuture<$0.CloudResponse> getUserOrganizations(
      $0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserOrganizations, request, options: options);
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

  $grpc.ResponseFuture<$0.CloudResponse> publicKeys($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$publicKeys, request, options: options);
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

  $grpc.ResponseFuture<$0.CloudResponse> createPartner($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPartner, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getPartner($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getPartner, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> getPartners($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getPartners, request, options: options);
  }

  $grpc.ResponseFuture<$0.CloudResponse> deletePartner($0.CloudRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePartner, request, options: options);
  }
}

abstract class CloudServiceBase extends $grpc.Service {
  $core.String get $name => 'Cloud.CloudService';

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
        'GetUserOrganizations',
        getUserOrganizations_Pre,
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
        'PublicKeys',
        publicKeys_Pre,
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
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'CreatePartner',
        createPartner_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetPartner',
        getPartner_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'GetPartners',
        getPartners_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CloudRequest.fromBuffer(value),
        ($0.CloudResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CloudRequest, $0.CloudResponse>(
        'DeletePartner',
        deletePartner_Pre,
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

  $async.Future<$0.CloudResponse> getUserOrganizations_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getUserOrganizations(call, await request);
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

  $async.Future<$0.CloudResponse> publicKeys_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return publicKeys(call, await request);
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

  $async.Future<$0.CloudResponse> createPartner_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return createPartner(call, await request);
  }

  $async.Future<$0.CloudResponse> getPartner_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getPartner(call, await request);
  }

  $async.Future<$0.CloudResponse> getPartners_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return getPartners(call, await request);
  }

  $async.Future<$0.CloudResponse> deletePartner_Pre(
      $grpc.ServiceCall call, $async.Future<$0.CloudRequest> request) async {
    return deletePartner(call, await request);
  }

  $async.Future<$0.CloudResponse> heartbeat(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> createOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getUserOrganizations(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> updateOrganization(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> createProject(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> rollPrivateKey(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> generateAccessToken(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> publicKeys(
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
  $async.Future<$0.CloudResponse> createPartner(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getPartner(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> getPartners(
      $grpc.ServiceCall call, $0.CloudRequest request);
  $async.Future<$0.CloudResponse> deletePartner(
      $grpc.ServiceCall call, $0.CloudRequest request);
}
