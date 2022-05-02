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
    const {'1': 'created_at', '3': 4, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'installed_apps', '3': 6, '4': 3, '5': 11, '6': '.Cloud.App', '10': 'installedApps'},
    const {'1': 'private_keys', '3': 7, '4': 3, '5': 11, '6': '.Cloud.PrivateKey', '10': 'privateKeys'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhkKCG93bmVyX2lkGAIgASgJUgdvd25lcklkEhIKBG5hbWUYAyABKAlSBG5hbWUSOQoKY3JlYXRlZF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EjEKDmluc3RhbGxlZF9hcHBzGAYgAygLMgouQ2xvdWQuQXBwUg1pbnN0YWxsZWRBcHBzEjQKDHByaXZhdGVfa2V5cxgHIAMoCzIRLkNsb3VkLlByaXZhdGVLZXlSC3ByaXZhdGVLZXlz');
@$core.Deprecated('Use appDescriptor instead')
const App$json = const {
  '1': 'App',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'description', '3': 3, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'logo', '3': 4, '4': 1, '5': 9, '10': 'logo'},
    const {'1': 'app_type', '3': 5, '4': 1, '5': 14, '6': '.Cloud.AppType', '10': 'appType'},
  ],
};

/// Descriptor for `App`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List appDescriptor = $convert.base64Decode('CgNBcHASDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSIAoLZGVzY3JpcHRpb24YAyABKAlSC2Rlc2NyaXB0aW9uEhIKBGxvZ28YBCABKAlSBGxvZ28SKQoIYXBwX3R5cGUYBSABKA4yDi5DbG91ZC5BcHBUeXBlUgdhcHBUeXBl');
@$core.Deprecated('Use privateKeyDescriptor instead')
const PrivateKey$json = const {
  '1': 'PrivateKey',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'private_key_generated_at', '3': 2, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeyGeneratedAt'},
    const {'1': 'private_key_secured_at', '3': 3, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeySecuredAt'},
    const {'1': 'private_key_secured', '3': 4, '4': 1, '5': 8, '10': 'privateKeySecured'},
    const {'1': 'block_user_apps', '3': 5, '4': 3, '5': 9, '10': 'blockUserApps'},
  ],
};

/// Descriptor for `PrivateKey`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List privateKeyDescriptor = $convert.base64Decode('CgpQcml2YXRlS2V5EhAKA2tleRgBIAEoCVIDa2V5ElMKGHByaXZhdGVfa2V5X2dlbmVyYXRlZF9hdBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSFXByaXZhdGVLZXlHZW5lcmF0ZWRBdBJPChZwcml2YXRlX2tleV9zZWN1cmVkX2F0GAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFITcHJpdmF0ZUtleVNlY3VyZWRBdBIuChNwcml2YXRlX2tleV9zZWN1cmVkGAQgASgIUhFwcml2YXRlS2V5U2VjdXJlZBImCg9ibG9ja191c2VyX2FwcHMYBSADKAlSDWJsb2NrVXNlckFwcHM=');
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
@$core.Deprecated('Use appRequestDescriptor instead')
const AppRequest$json = const {
  '1': 'AppRequest',
  '2': const [
    const {'1': 'app', '3': 1, '4': 1, '5': 11, '6': '.Cloud.App', '10': 'app'},
  ],
};

/// Descriptor for `AppRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List appRequestDescriptor = $convert.base64Decode('CgpBcHBSZXF1ZXN0EhwKA2FwcBgBIAEoCzIKLkNsb3VkLkFwcFIDYXBw');
@$core.Deprecated('Use appResponseDescriptor instead')
const AppResponse$json = const {
  '1': 'AppResponse',
  '2': const [
    const {'1': 'app', '3': 1, '4': 1, '5': 11, '6': '.Cloud.App', '10': 'app'},
    const {'1': 'apps', '3': 2, '4': 3, '5': 11, '6': '.Cloud.App', '10': 'apps'},
  ],
};

/// Descriptor for `AppResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List appResponseDescriptor = $convert.base64Decode('CgtBcHBSZXNwb25zZRIcCgNhcHAYASABKAsyCi5DbG91ZC5BcHBSA2FwcBIeCgRhcHBzGAIgAygLMgouQ2xvdWQuQXBwUgRhcHBz');
