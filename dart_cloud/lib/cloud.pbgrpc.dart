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
  static final _$createPrivateKey =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/CreatePrivateKey',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$deletePrivateKey =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/DeletePrivateKey',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$validatePrivateKey =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/ValidatePrivateKey',
          ($0.OrganizationRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.OrganizationResponse.fromBuffer(value));
  static final _$update =
      $grpc.ClientMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
          '/Cloud.CloudService/Update',
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

  $grpc.ResponseFuture<$0.OrganizationResponse> createPrivateKey(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> deletePrivateKey(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> validatePrivateKey(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validatePrivateKey, request, options: options);
  }

  $grpc.ResponseFuture<$0.OrganizationResponse> update(
      $0.OrganizationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$update, request, options: options);
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
            'CreatePrivateKey',
            createPrivateKey_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'DeletePrivateKey',
            deletePrivateKey_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.OrganizationRequest.fromBuffer(value),
            ($0.OrganizationResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.OrganizationRequest, $0.OrganizationResponse>(
            'ValidatePrivateKey',
            validatePrivateKey_Pre,
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
  }

  $async.Future<$0.OrganizationResponse> heartbeat_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return heartbeat(call, await request);
  }

  $async.Future<$0.OrganizationResponse> create_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return create(call, await request);
  }

  $async.Future<$0.OrganizationResponse> createPrivateKey_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return createPrivateKey(call, await request);
  }

  $async.Future<$0.OrganizationResponse> deletePrivateKey_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return deletePrivateKey(call, await request);
  }

  $async.Future<$0.OrganizationResponse> validatePrivateKey_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return validatePrivateKey(call, await request);
  }

  $async.Future<$0.OrganizationResponse> update_Pre($grpc.ServiceCall call,
      $async.Future<$0.OrganizationRequest> request) async {
    return update(call, await request);
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

  $async.Future<$0.OrganizationResponse> heartbeat(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> create(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> createPrivateKey(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> deletePrivateKey(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> validatePrivateKey(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> update(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> get(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> getByOwner(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
  $async.Future<$0.OrganizationResponse> delete(
      $grpc.ServiceCall call, $0.OrganizationRequest request);
}
