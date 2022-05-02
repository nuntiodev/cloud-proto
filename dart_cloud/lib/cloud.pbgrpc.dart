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
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/Heartbeat',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$create =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/Create',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$removePrivateKey =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/RemovePrivateKey',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$generateAccessToken =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/GenerateAccessToken',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$validateAccessToken =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/ValidateAccessToken',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$updateInfo =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/UpdateInfo',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$get =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/Get',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$getByOwner =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/GetByOwner',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$delete =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/Delete',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$availableApps =
      $grpc.ClientMethod<$0.AppRequest, $0.AppResponse>(
          '/Cloud.CloudService/AvailableApps',
          ($0.AppRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) => $0.AppResponse.fromBuffer(value));

  CloudServiceClient($grpc.ClientChannel channel,
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

  $grpc.ResponseFuture<$0.OrganizationResponse> removePrivateKey(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$removePrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> generateAccessToken(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$generateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> validateAccessToken(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateAccessToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> updateInfo(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateInfo, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> get(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$get, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> getByOwner(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getByOwner, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> delete(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$delete, request, options: options);
  }

  $grpc.ResponseFuture<$0.AppResponse> availableApps($0.AppRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$availableApps, request, options: options);
  }
}

abstract class CloudServiceBase extends $grpc.Service {
  $core.String get $name => 'Cloud.CloudService';

  CloudServiceBase() {
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
            'RemovePrivateKey',
            removePrivateKey_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'GenerateAccessToken',
            generateAccessToken_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'ValidateAccessToken',
            validateAccessToken_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'UpdateInfo',
            updateInfo_Pre,
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
            'GetByOwner',
            getByOwner_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'Delete',
            delete_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AppRequest, $0.AppResponse>(
        'AvailableApps',
        availableApps_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AppRequest.fromBuffer(value),
        ($0.AppResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.OrganizationResponse> heartbeat_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return heartbeat(call, await request);
  }

  $async.Future<$0.OrganizationResponse> create_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return create(call, await request);
  }

  $async.Future<$0.OrganizationResponse> removePrivateKey_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return removePrivateKey(call, await request);
  }

  $async.Future<$0.OrganizationResponse> generateAccessToken_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return generateAccessToken(call, await request);
  }

  $async.Future<$0.OrganizationResponse> validateAccessToken_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return validateAccessToken(call, await request);
  }

  $async.Future<$0.OrganizationResponse> updateInfo_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return updateInfo(call, await request);
  }

  $async.Future<$0.OrganizationResponse> get_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return get(call, await request);
  }

  $async.Future<$0.OrganizationResponse> getByOwner_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return getByOwner(call, await request);
  }

  $async.Future<$0.OrganizationResponse> delete_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return delete(call, await request);
  }

  $async.Future<$0.AppResponse> availableApps_Pre(
      $grpc.ServiceCall call, $async.Future<$0.AppRequest> request) async {
    return availableApps(call, await request);
  }

  $async.Future<$0.OrganizationResponse> heartbeat(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> create(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> removePrivateKey(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> generateAccessToken(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> validateAccessToken(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> updateInfo(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> get(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> getByOwner(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> delete(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.AppResponse> availableApps(
      $grpc.ServiceCall call, $0.AppRequest request);
}
