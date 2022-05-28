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

class ProjectServiceClient extends $grpc.Client {
  static final _$heartbeat =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/Heartbeat',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$create =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/Create',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$rollPrivateKey =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/RollPrivateKey',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$generateAccessToken =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/GenerateAccessToken',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$validateAccessToken =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/ValidateAccessToken',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$update =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/Update',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$get =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/Get',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$getByOwner =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/GetByOwner',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));
  static final _$delete =
      $grpc.ClientMethod<$0.ProjectRequest, $0.ProjectResponse>(
          '/CloudProject.ProjectService/Delete',
          ($0.ProjectRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ProjectResponse.fromBuffer(value));

  ProjectServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.ProjectResponse> heartbeat($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$heartbeat, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> create($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$create, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> rollPrivateKey(
      $0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$rollPrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> generateAccessToken(
      $0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$generateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> validateAccessToken(
      $0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> update($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$update, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> get($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$get, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> getByOwner($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getByOwner, request, options: options);
  }

  $grpc.ResponseFuture<$0.ProjectResponse> delete($0.ProjectRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$delete, request, options: options);
  }
}

abstract class ProjectServiceBase extends $grpc.Service {
  $core.String get $name => 'CloudProject.ProjectService';

  ProjectServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'Heartbeat',
        heartbeat_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'Create',
        create_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'RollPrivateKey',
        rollPrivateKey_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'GenerateAccessToken',
        generateAccessToken_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'ValidateAccessToken',
        validateAccessToken_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'Update',
        update_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'Get',
        get_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'GetByOwner',
        getByOwner_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ProjectRequest, $0.ProjectResponse>(
        'Delete',
        delete_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ProjectRequest.fromBuffer(value),
        ($0.ProjectResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.ProjectResponse> heartbeat_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return heartbeat(call, await request);
  }

  $async.Future<$0.ProjectResponse> create_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return create(call, await request);
  }

  $async.Future<$0.ProjectResponse> rollPrivateKey_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return rollPrivateKey(call, await request);
  }

  $async.Future<$0.ProjectResponse> generateAccessToken_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return generateAccessToken(call, await request);
  }

  $async.Future<$0.ProjectResponse> validateAccessToken_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return validateAccessToken(call, await request);
  }

  $async.Future<$0.ProjectResponse> update_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return update(call, await request);
  }

  $async.Future<$0.ProjectResponse> get_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return get(call, await request);
  }

  $async.Future<$0.ProjectResponse> getByOwner_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return getByOwner(call, await request);
  }

  $async.Future<$0.ProjectResponse> delete_Pre(
      $grpc.ServiceCall call, $async.Future<$0.ProjectRequest> request) async {
    return delete(call, await request);
  }

  $async.Future<$0.ProjectResponse> heartbeat(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> create(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> rollPrivateKey(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> generateAccessToken(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> validateAccessToken(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> update(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> get(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> getByOwner(
      $grpc.ServiceCall call, $0.ProjectRequest request);
  $async.Future<$0.ProjectResponse> delete(
      $grpc.ServiceCall call, $0.ProjectRequest request);
}

class OrganizationServiceClient extends $grpc.Client {
  static final _$heartbeat =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/CloudProject.OrganizationService/Heartbeat',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$create =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/CloudProject.OrganizationService/Create',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$get =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/CloudProject.OrganizationService/Get',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$update =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/CloudProject.OrganizationService/Update',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));

  OrganizationServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.OrganizationResponse> heartbeat(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$heartbeat, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> create(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$create, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> get(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$get, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> update(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$update, request, options: options);
  }
}

abstract class OrganizationServiceBase extends $grpc.Service {
  $core.String get $name => 'CloudProject.OrganizationService';

  OrganizationServiceBase() {
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'Heartbeat',
            heartbeat_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'Create',
            create_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'Get',
            get_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'Update',
            update_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.OrganizationResponse> heartbeat_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return heartbeat(call, await request);
  }

  $async.Future<$0.OrganizationResponse> create_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return create(call, await request);
  }

  $async.Future<$0.OrganizationResponse> get_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return get(call, await request);
  }

  $async.Future<$0.OrganizationResponse> update_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return update(call, await request);
  }

  $async.Future<$0.OrganizationResponse> heartbeat(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> create(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> get(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> update(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
}
