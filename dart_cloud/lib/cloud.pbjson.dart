///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use organizationDescriptor instead')
const Organization$json = const {
  '1': 'Organization',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'owner_user_id', '3': 3, '4': 1, '5': 9, '10': 'ownerUserId'},
    const {'1': 'created_at', '3': 4, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSIgoNb3duZXJfdXNlcl9pZBgDIAEoCVILb3duZXJVc2VySWQSOQoKY3JlYXRlZF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0');
@$core.Deprecated('Use projectDescriptor instead')
const Project$json = const {
  '1': 'Project',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'organization_id', '3': 2, '4': 1, '5': 9, '10': 'organizationId'},
    const {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'private_key', '3': 4, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'private_key_secured', '3': 5, '4': 1, '5': 8, '10': 'privateKeySecured'},
    const {'1': 'created_at', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 7, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'private_key_generated_at', '3': 8, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeyGeneratedAt'},
    const {'1': 'private_key_secured_at', '3': 9, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeySecuredAt'},
    const {'1': 'logo', '3': 10, '4': 1, '5': 9, '10': 'logo'},
    const {'1': 'viewers', '3': 11, '4': 3, '5': 9, '10': 'viewers'},
    const {'1': 'editors', '3': 12, '4': 3, '5': 9, '10': 'editors'},
  ],
};

/// Descriptor for `Project`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectDescriptor = $convert.base64Decode('CgdQcm9qZWN0Eg4KAmlkGAEgASgJUgJpZBInCg9vcmdhbml6YXRpb25faWQYAiABKAlSDm9yZ2FuaXphdGlvbklkEhIKBG5hbWUYAyABKAlSBG5hbWUSHwoLcHJpdmF0ZV9rZXkYBCABKAlSCnByaXZhdGVLZXkSLgoTcHJpdmF0ZV9rZXlfc2VjdXJlZBgFIAEoCFIRcHJpdmF0ZUtleVNlY3VyZWQSOQoKY3JlYXRlZF9hdBgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAcgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0ElMKGHByaXZhdGVfa2V5X2dlbmVyYXRlZF9hdBgIIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSFXByaXZhdGVLZXlHZW5lcmF0ZWRBdBJPChZwcml2YXRlX2tleV9zZWN1cmVkX2F0GAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFITcHJpdmF0ZUtleVNlY3VyZWRBdBISCgRsb2dvGAogASgJUgRsb2dvEhgKB3ZpZXdlcnMYCyADKAlSB3ZpZXdlcnMSGAoHZWRpdG9ycxgMIAMoCVIHZWRpdG9ycw==');
@$core.Deprecated('Use cloudRequestDescriptor instead')
const CloudRequest$json = const {
  '1': 'CloudRequest',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'private_key', '3': 2, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.CloudProject.Organization', '10': 'organization'},
    const {'1': 'cloud_token', '3': 5, '4': 1, '5': 9, '10': 'cloudToken'},
  ],
};

/// Descriptor for `CloudRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudRequestDescriptor = $convert.base64Decode('CgxDbG91ZFJlcXVlc3QSLwoHcHJvamVjdBgBIAEoCzIVLkNsb3VkUHJvamVjdC5Qcm9qZWN0Ugdwcm9qZWN0Eh8KC3ByaXZhdGVfa2V5GAIgASgJUgpwcml2YXRlS2V5EiEKDGFjY2Vzc190b2tlbhgDIAEoCVILYWNjZXNzVG9rZW4SPgoMb3JnYW5pemF0aW9uGAQgASgLMhouQ2xvdWRQcm9qZWN0Lk9yZ2FuaXphdGlvblIMb3JnYW5pemF0aW9uEh8KC2Nsb3VkX3Rva2VuGAUgASgJUgpjbG91ZFRva2Vu');
@$core.Deprecated('Use cloudResponseDescriptor instead')
const CloudResponse$json = const {
  '1': 'CloudResponse',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'projects', '3': 2, '4': 3, '5': 11, '6': '.CloudProject.Project', '10': 'projects'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.CloudProject.Organization', '10': 'organization'},
  ],
};

/// Descriptor for `CloudResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudResponseDescriptor = $convert.base64Decode('Cg1DbG91ZFJlc3BvbnNlEi8KB3Byb2plY3QYASABKAsyFS5DbG91ZFByb2plY3QuUHJvamVjdFIHcHJvamVjdBIxCghwcm9qZWN0cxgCIAMoCzIVLkNsb3VkUHJvamVjdC5Qcm9qZWN0Ughwcm9qZWN0cxIhCgxhY2Nlc3NfdG9rZW4YAyABKAlSC2FjY2Vzc1Rva2VuEj4KDG9yZ2FuaXphdGlvbhgEIAEoCzIaLkNsb3VkUHJvamVjdC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbg==');
