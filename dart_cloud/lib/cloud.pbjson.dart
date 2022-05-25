///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use appTypeDescriptor instead')
const AppType$json = const {
  '1': 'AppType',
  '2': const [
    const {'1': 'INVALID_APP', '2': 0},
    const {'1': 'USER_BLOCK_APP', '2': 1},
    const {'1': 'NUNTIO_CONNECT_APP', '2': 2},
  ],
};

/// Descriptor for `AppType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List appTypeDescriptor = $convert.base64Decode('CgdBcHBUeXBlEg8KC0lOVkFMSURfQVBQEAASEgoOVVNFUl9CTE9DS19BUFAQARIWChJOVU5USU9fQ09OTkVDVF9BUFAQAg==');
@$core.Deprecated('Use organizationDescriptor instead')
const Organization$json = const {
  '1': 'Organization',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'owner_id', '3': 2, '4': 1, '5': 9, '10': 'ownerId'},
    const {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'logo', '3': 4, '4': 1, '5': 9, '10': 'logo'},
    const {'1': 'created_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhkKCG93bmVyX2lkGAIgASgJUgdvd25lcklkEhIKBG5hbWUYAyABKAlSBG5hbWUSEgoEbG9nbxgEIAEoCVIEbG9nbxI5CgpjcmVhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJY3JlYXRlZEF0EjkKCnVwZGF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgl1cGRhdGVkQXQ=');
@$core.Deprecated('Use appDescriptor instead')
const App$json = const {
  '1': 'App',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'organization_id', '3': 2, '4': 1, '5': 9, '10': 'organizationId'},
    const {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'description', '3': 4, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'logo', '3': 5, '4': 1, '5': 9, '10': 'logo'},
    const {'1': 'app_type', '3': 6, '4': 1, '5': 14, '6': '.Cloud.AppType', '10': 'appType'},
  ],
};

/// Descriptor for `App`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List appDescriptor = $convert.base64Decode('CgNBcHASDgoCaWQYASABKAlSAmlkEicKD29yZ2FuaXphdGlvbl9pZBgCIAEoCVIOb3JnYW5pemF0aW9uSWQSEgoEbmFtZRgDIAEoCVIEbmFtZRIgCgtkZXNjcmlwdGlvbhgEIAEoCVILZGVzY3JpcHRpb24SEgoEbG9nbxgFIAEoCVIEbG9nbxIpCghhcHBfdHlwZRgGIAEoDjIOLkNsb3VkLkFwcFR5cGVSB2FwcFR5cGU=');
@$core.Deprecated('Use privateKeyDescriptor instead')
const PrivateKey$json = const {
  '1': 'PrivateKey',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'organization_id', '3': 2, '4': 1, '5': 9, '10': 'organizationId'},
    const {'1': 'key', '3': 3, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'private_key_generated_at', '3': 4, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeyGeneratedAt'},
    const {'1': 'private_key_secured_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeySecuredAt'},
    const {'1': 'private_key_secured', '3': 6, '4': 1, '5': 8, '10': 'privateKeySecured'},
    const {'1': 'user_block_ids', '3': 7, '4': 3, '5': 9, '10': 'userBlockIds'},
  ],
};

/// Descriptor for `PrivateKey`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List privateKeyDescriptor = $convert.base64Decode('CgpQcml2YXRlS2V5Eg4KAmlkGAEgASgJUgJpZBInCg9vcmdhbml6YXRpb25faWQYAiABKAlSDm9yZ2FuaXphdGlvbklkEhAKA2tleRgDIAEoCVIDa2V5ElMKGHByaXZhdGVfa2V5X2dlbmVyYXRlZF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSFXByaXZhdGVLZXlHZW5lcmF0ZWRBdBJPChZwcml2YXRlX2tleV9zZWN1cmVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFITcHJpdmF0ZUtleVNlY3VyZWRBdBIuChNwcml2YXRlX2tleV9zZWN1cmVkGAYgASgIUhFwcml2YXRlS2V5U2VjdXJlZBIkCg51c2VyX2Jsb2NrX2lkcxgHIAMoCVIMdXNlckJsb2NrSWRz');
@$core.Deprecated('Use organizationRequestDescriptor instead')
const OrganizationRequest$json = const {
  '1': 'OrganizationRequest',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.Cloud.Organization', '10': 'organization'},
    const {'1': 'update', '3': 2, '4': 1, '5': 11, '6': '.Cloud.Organization', '10': 'update'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'private_key', '3': 4, '4': 1, '5': 11, '6': '.Cloud.PrivateKey', '10': 'privateKey'},
  ],
};

/// Descriptor for `OrganizationRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationRequestDescriptor = $convert.base64Decode('ChNPcmdhbml6YXRpb25SZXF1ZXN0EjcKDG9yZ2FuaXphdGlvbhgBIAEoCzITLkNsb3VkLk9yZ2FuaXphdGlvblIMb3JnYW5pemF0aW9uEisKBnVwZGF0ZRgCIAEoCzITLkNsb3VkLk9yZ2FuaXphdGlvblIGdXBkYXRlEiEKDGFjY2Vzc190b2tlbhgDIAEoCVILYWNjZXNzVG9rZW4SMgoLcHJpdmF0ZV9rZXkYBCABKAsyES5DbG91ZC5Qcml2YXRlS2V5Ugpwcml2YXRlS2V5');
@$core.Deprecated('Use organizationResponseDescriptor instead')
const OrganizationResponse$json = const {
  '1': 'OrganizationResponse',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.Cloud.Organization', '10': 'organization'},
    const {'1': 'organizations', '3': 2, '4': 3, '5': 11, '6': '.Cloud.Organization', '10': 'organizations'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
  ],
};

/// Descriptor for `OrganizationResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationResponseDescriptor = $convert.base64Decode('ChRPcmdhbml6YXRpb25SZXNwb25zZRI3Cgxvcmdhbml6YXRpb24YASABKAsyEy5DbG91ZC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhI5Cg1vcmdhbml6YXRpb25zGAIgAygLMhMuQ2xvdWQuT3JnYW5pemF0aW9uUg1vcmdhbml6YXRpb25zEiEKDGFjY2Vzc190b2tlbhgDIAEoCVILYWNjZXNzVG9rZW4=');
