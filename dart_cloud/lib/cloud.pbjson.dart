///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use subscriptionTypeDescriptor instead')
const SubscriptionType$json = const {
  '1': 'SubscriptionType',
  '2': const [
    const {'1': 'INVALID_SUBSCRIPTION', '2': 0},
    const {'1': 'FREEMIUM', '2': 1},
    const {'1': 'STARTUP', '2': 2},
    const {'1': 'SCALEUP', '2': 3},
    const {'1': 'ENTERPRISE', '2': 4},
  ],
};

/// Descriptor for `SubscriptionType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List subscriptionTypeDescriptor = $convert.base64Decode('ChBTdWJzY3JpcHRpb25UeXBlEhgKFElOVkFMSURfU1VCU0NSSVBUSU9OEAASDAoIRlJFRU1JVU0QARILCgdTVEFSVFVQEAISCwoHU0NBTEVVUBADEg4KCkVOVEVSUFJJU0UQBA==');
@$core.Deprecated('Use memberTypeDescriptor instead')
const MemberType$json = const {
  '1': 'MemberType',
  '2': const [
    const {'1': 'INVALID_MEMBER_TYPE', '2': 0},
    const {'1': 'OWNER', '2': 1},
    const {'1': 'EDITOR', '2': 2},
    const {'1': 'VIEWER', '2': 3},
  ],
};

/// Descriptor for `MemberType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List memberTypeDescriptor = $convert.base64Decode('CgpNZW1iZXJUeXBlEhcKE0lOVkFMSURfTUVNQkVSX1RZUEUQABIJCgVPV05FUhABEgoKBkVESVRPUhACEgoKBlZJRVdFUhAD');
@$core.Deprecated('Use keyTypeDescriptor instead')
const KeyType$json = const {
  '1': 'KeyType',
  '2': const [
    const {'1': 'INVALID_TOKEN_TYPE', '2': 0},
    const {'1': 'PRIVATE_KEY', '2': 1},
    const {'1': 'PUBLIC_KEY', '2': 2},
    const {'1': 'ACCESS_KEY', '2': 3},
  ],
};

/// Descriptor for `KeyType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List keyTypeDescriptor = $convert.base64Decode('CgdLZXlUeXBlEhYKEklOVkFMSURfVE9LRU5fVFlQRRAAEg8KC1BSSVZBVEVfS0VZEAESDgoKUFVCTElDX0tFWRACEg4KCkFDQ0VTU19LRVkQAw==');
@$core.Deprecated('Use cloudLocationDescriptor instead')
const CloudLocation$json = const {
  '1': 'CloudLocation',
  '2': const [
    const {'1': 'INVALID_LOCATION', '2': 0},
    const {'1': 'DK_1', '2': 1},
  ],
};

/// Descriptor for `CloudLocation`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List cloudLocationDescriptor = $convert.base64Decode('Cg1DbG91ZExvY2F0aW9uEhQKEElOVkFMSURfTE9DQVRJT04QABIICgRES18xEAE=');
@$core.Deprecated('Use memberDescriptor instead')
const Member$json = const {
  '1': 'Member',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'project_id', '3': 2, '4': 1, '5': 9, '10': 'projectId'},
    const {'1': 'user_id', '3': 3, '4': 1, '5': 9, '10': 'userId'},
    const {'1': 'type', '3': 4, '4': 1, '5': 14, '6': '.Cloud.MemberType', '10': 'type'},
    const {'1': 'created_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'organization_id', '3': 7, '4': 1, '5': 9, '10': 'organizationId'},
  ],
};

/// Descriptor for `Member`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List memberDescriptor = $convert.base64Decode('CgZNZW1iZXISDgoCaWQYASABKAlSAmlkEh0KCnByb2plY3RfaWQYAiABKAlSCXByb2plY3RJZBIXCgd1c2VyX2lkGAMgASgJUgZ1c2VySWQSJQoEdHlwZRgEIAEoDjIRLkNsb3VkLk1lbWJlclR5cGVSBHR5cGUSOQoKY3JlYXRlZF9hdBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EicKD29yZ2FuaXphdGlvbl9pZBgHIAEoCVIOb3JnYW5pemF0aW9uSWQ=');
@$core.Deprecated('Use organizationDescriptor instead')
const Organization$json = const {
  '1': 'Organization',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'owner_user_id', '3': 3, '4': 1, '5': 9, '10': 'ownerUserId'},
    const {'1': 'created_at', '3': 4, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'viewers', '3': 6, '4': 3, '5': 9, '10': 'viewers'},
    const {'1': 'editors', '3': 7, '4': 3, '5': 9, '10': 'editors'},
    const {'1': 'subscription_type', '3': 8, '4': 1, '5': 14, '6': '.Cloud.SubscriptionType', '10': 'subscriptionType'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSIgoNb3duZXJfdXNlcl9pZBgDIAEoCVILb3duZXJVc2VySWQSOQoKY3JlYXRlZF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EhgKB3ZpZXdlcnMYBiADKAlSB3ZpZXdlcnMSGAoHZWRpdG9ycxgHIAMoCVIHZWRpdG9ycxJEChFzdWJzY3JpcHRpb25fdHlwZRgIIAEoDjIXLkNsb3VkLlN1YnNjcmlwdGlvblR5cGVSEHN1YnNjcmlwdGlvblR5cGU=');
@$core.Deprecated('Use customClaimsDescriptor instead')
const CustomClaims$json = const {
  '1': 'CustomClaims',
  '2': const [
    const {'1': 'projectId', '3': 1, '4': 1, '5': 9, '10': 'projectId'},
    const {'1': 'password', '3': 2, '4': 1, '5': 9, '10': 'password'},
    const {'1': 'type', '3': 3, '4': 1, '5': 14, '6': '.Cloud.KeyType', '10': 'type'},
  ],
};

/// Descriptor for `CustomClaims`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List customClaimsDescriptor = $convert.base64Decode('CgxDdXN0b21DbGFpbXMSHAoJcHJvamVjdElkGAEgASgJUglwcm9qZWN0SWQSGgoIcGFzc3dvcmQYAiABKAlSCHBhc3N3b3JkEiIKBHR5cGUYAyABKA4yDi5DbG91ZC5LZXlUeXBlUgR0eXBl');
@$core.Deprecated('Use projectDescriptor instead')
const Project$json = const {
  '1': 'Project',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'organization_id', '3': 2, '4': 1, '5': 9, '10': 'organizationId'},
    const {'1': 'owner_user_id', '3': 3, '4': 1, '5': 9, '10': 'ownerUserId'},
    const {'1': 'name', '3': 4, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'private_key', '3': 5, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'private_key_secured', '3': 6, '4': 1, '5': 8, '10': 'privateKeySecured'},
    const {'1': 'created_at', '3': 7, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 8, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'private_key_generated_at', '3': 9, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeyGeneratedAt'},
    const {'1': 'private_key_secured_at', '3': 10, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'privateKeySecuredAt'},
    const {'1': 'logo', '3': 11, '4': 1, '5': 9, '10': 'logo'},
    const {'1': 'public_key', '3': 12, '4': 1, '5': 9, '10': 'publicKey'},
    const {'1': 'location', '3': 13, '4': 1, '5': 14, '6': '.Cloud.CloudLocation', '10': 'location'},
    const {'1': 'organization_name', '3': 14, '4': 1, '5': 9, '10': 'organizationName'},
  ],
};

/// Descriptor for `Project`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectDescriptor = $convert.base64Decode('CgdQcm9qZWN0Eg4KAmlkGAEgASgJUgJpZBInCg9vcmdhbml6YXRpb25faWQYAiABKAlSDm9yZ2FuaXphdGlvbklkEiIKDW93bmVyX3VzZXJfaWQYAyABKAlSC293bmVyVXNlcklkEhIKBG5hbWUYBCABKAlSBG5hbWUSHwoLcHJpdmF0ZV9rZXkYBSABKAlSCnByaXZhdGVLZXkSLgoTcHJpdmF0ZV9rZXlfc2VjdXJlZBgGIAEoCFIRcHJpdmF0ZUtleVNlY3VyZWQSOQoKY3JlYXRlZF9hdBgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0ElMKGHByaXZhdGVfa2V5X2dlbmVyYXRlZF9hdBgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSFXByaXZhdGVLZXlHZW5lcmF0ZWRBdBJPChZwcml2YXRlX2tleV9zZWN1cmVkX2F0GAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFITcHJpdmF0ZUtleVNlY3VyZWRBdBISCgRsb2dvGAsgASgJUgRsb2dvEh0KCnB1YmxpY19rZXkYDCABKAlSCXB1YmxpY0tleRIwCghsb2NhdGlvbhgNIAEoDjIULkNsb3VkLkNsb3VkTG9jYXRpb25SCGxvY2F0aW9uEisKEW9yZ2FuaXphdGlvbl9uYW1lGA4gASgJUhBvcmdhbml6YXRpb25OYW1l');
@$core.Deprecated('Use cloudRequestDescriptor instead')
const CloudRequest$json = const {
  '1': 'CloudRequest',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.Cloud.Project', '10': 'project'},
    const {'1': 'private_key', '3': 2, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.Cloud.Organization', '10': 'organization'},
    const {'1': 'cloud_token', '3': 5, '4': 1, '5': 9, '10': 'cloudToken'},
    const {'1': 'member', '3': 6, '4': 1, '5': 11, '6': '.Cloud.Member', '10': 'member'},
    const {'1': 'members', '3': 7, '4': 3, '5': 11, '6': '.Cloud.Member', '10': 'members'},
  ],
};

/// Descriptor for `CloudRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudRequestDescriptor = $convert.base64Decode('CgxDbG91ZFJlcXVlc3QSKAoHcHJvamVjdBgBIAEoCzIOLkNsb3VkLlByb2plY3RSB3Byb2plY3QSHwoLcHJpdmF0ZV9rZXkYAiABKAlSCnByaXZhdGVLZXkSIQoMYWNjZXNzX3Rva2VuGAMgASgJUgthY2Nlc3NUb2tlbhI3Cgxvcmdhbml6YXRpb24YBCABKAsyEy5DbG91ZC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhIfCgtjbG91ZF90b2tlbhgFIAEoCVIKY2xvdWRUb2tlbhIlCgZtZW1iZXIYBiABKAsyDS5DbG91ZC5NZW1iZXJSBm1lbWJlchInCgdtZW1iZXJzGAcgAygLMg0uQ2xvdWQuTWVtYmVyUgdtZW1iZXJz');
@$core.Deprecated('Use cloudResponseDescriptor instead')
const CloudResponse$json = const {
  '1': 'CloudResponse',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.Cloud.Project', '10': 'project'},
    const {'1': 'projects', '3': 2, '4': 3, '5': 11, '6': '.Cloud.Project', '10': 'projects'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.Cloud.Organization', '10': 'organization'},
    const {'1': 'member', '3': 5, '4': 1, '5': 11, '6': '.Cloud.Member', '10': 'member'},
    const {'1': 'members', '3': 6, '4': 3, '5': 11, '6': '.Cloud.Member', '10': 'members'},
    const {'1': 'organizations', '3': 7, '4': 3, '5': 11, '6': '.Cloud.Organization', '10': 'organizations'},
  ],
};

/// Descriptor for `CloudResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudResponseDescriptor = $convert.base64Decode('Cg1DbG91ZFJlc3BvbnNlEigKB3Byb2plY3QYASABKAsyDi5DbG91ZC5Qcm9qZWN0Ugdwcm9qZWN0EioKCHByb2plY3RzGAIgAygLMg4uQ2xvdWQuUHJvamVjdFIIcHJvamVjdHMSIQoMYWNjZXNzX3Rva2VuGAMgASgJUgthY2Nlc3NUb2tlbhI3Cgxvcmdhbml6YXRpb24YBCABKAsyEy5DbG91ZC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhIlCgZtZW1iZXIYBSABKAsyDS5DbG91ZC5NZW1iZXJSBm1lbWJlchInCgdtZW1iZXJzGAYgAygLMg0uQ2xvdWQuTWVtYmVyUgdtZW1iZXJzEjkKDW9yZ2FuaXphdGlvbnMYByADKAsyEy5DbG91ZC5Pcmdhbml6YXRpb25SDW9yZ2FuaXphdGlvbnM=');
