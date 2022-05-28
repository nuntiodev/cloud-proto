///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use projectDescriptor instead')
const Project$json = const {
  '1': 'Project',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'owner_id', '3': 2, '4': 1, '5': 9, '10': 'ownerId'},
    const {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'private_key', '3': 4, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'private_key_secured', '3': 5, '4': 1, '5': 8, '10': 'privateKeySecured'},
    const {'1': 'created_at', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 7, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'private_key_generated_at', '3': 8, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeyGeneratedAt'},
    const {'1': 'private_key_secured_at', '3': 9, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeySecuredAt'},
  ],
};

/// Descriptor for `Project`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectDescriptor = $convert.base64Decode('CgdQcm9qZWN0Eg4KAmlkGAEgASgJUgJpZBIZCghvd25lcl9pZBgCIAEoCVIHb3duZXJJZBISCgRuYW1lGAMgASgJUgRuYW1lEh8KC3ByaXZhdGVfa2V5GAQgASgJUgpwcml2YXRlS2V5Ei4KE3ByaXZhdGVfa2V5X3NlY3VyZWQYBSABKAhSEXByaXZhdGVLZXlTZWN1cmVkEjkKCmNyZWF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgljcmVhdGVkQXQSOQoKdXBkYXRlZF9hdBgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCXVwZGF0ZWRBdBJTChhwcml2YXRlX2tleV9nZW5lcmF0ZWRfYXQYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUhVwcml2YXRlS2V5R2VuZXJhdGVkQXQSTwoWcHJpdmF0ZV9rZXlfc2VjdXJlZF9hdBgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSE3ByaXZhdGVLZXlTZWN1cmVkQXQ=');
@$core.Deprecated('Use projectRequestDescriptor instead')
const ProjectRequest$json = const {
  '1': 'ProjectRequest',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'update', '3': 2, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'update'},
    const {'1': 'private_key', '3': 3, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'access_token', '3': 4, '4': 1, '5': 9, '10': 'accessToken'},
  ],
};

/// Descriptor for `ProjectRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectRequestDescriptor = $convert.base64Decode('Cg5Qcm9qZWN0UmVxdWVzdBIvCgdwcm9qZWN0GAEgASgLMhUuQ2xvdWRQcm9qZWN0LlByb2plY3RSB3Byb2plY3QSLQoGdXBkYXRlGAIgASgLMhUuQ2xvdWRQcm9qZWN0LlByb2plY3RSBnVwZGF0ZRIfCgtwcml2YXRlX2tleRgDIAEoCVIKcHJpdmF0ZUtleRIhCgxhY2Nlc3NfdG9rZW4YBCABKAlSC2FjY2Vzc1Rva2Vu');
@$core.Deprecated('Use projectResponseDescriptor instead')
const ProjectResponse$json = const {
  '1': 'ProjectResponse',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'projects', '3': 2, '4': 3, '5': 11, '6': '.CloudProject.Project', '10': 'projects'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
  ],
};

/// Descriptor for `ProjectResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectResponseDescriptor = $convert.base64Decode('Cg9Qcm9qZWN0UmVzcG9uc2USLwoHcHJvamVjdBgBIAEoCzIVLkNsb3VkUHJvamVjdC5Qcm9qZWN0Ugdwcm9qZWN0EjEKCHByb2plY3RzGAIgAygLMhUuQ2xvdWRQcm9qZWN0LlByb2plY3RSCHByb2plY3RzEiEKDGFjY2Vzc190b2tlbhgDIAEoCVILYWNjZXNzVG9rZW4=');
