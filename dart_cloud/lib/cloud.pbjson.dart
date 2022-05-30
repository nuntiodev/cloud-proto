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
@$core.Deprecated('Use memberDescriptor instead')
const Member$json = const {
  '1': 'Member',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'project_id', '3': 2, '4': 1, '5': 9, '10': 'projectId'},
    const {'1': 'user_id', '3': 3, '4': 1, '5': 9, '10': 'userId'},
    const {'1': 'type', '3': 4, '4': 1, '5': 14, '6': '.CloudProject.MemberType', '10': 'type'},
    const {'1': 'created_at', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updated_at', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
  ],
};

/// Descriptor for `Member`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List memberDescriptor = $convert.base64Decode('CgZNZW1iZXISDgoCaWQYASABKAlSAmlkEh0KCnByb2plY3RfaWQYAiABKAlSCXByb2plY3RJZBIXCgd1c2VyX2lkGAMgASgJUgZ1c2VySWQSLAoEdHlwZRgEIAEoDjIYLkNsb3VkUHJvamVjdC5NZW1iZXJUeXBlUgR0eXBlEjkKCmNyZWF0ZWRfYXQYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgljcmVhdGVkQXQSOQoKdXBkYXRlZF9hdBgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCXVwZGF0ZWRBdA==');
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
    const {'1': 'subscription_type', '3': 8, '4': 1, '5': 14, '6': '.CloudProject.SubscriptionType', '10': 'subscriptionType'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSIgoNb3duZXJfdXNlcl9pZBgDIAEoCVILb3duZXJVc2VySWQSOQoKY3JlYXRlZF9hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EhgKB3ZpZXdlcnMYBiADKAlSB3ZpZXdlcnMSGAoHZWRpdG9ycxgHIAMoCVIHZWRpdG9ycxJLChFzdWJzY3JpcHRpb25fdHlwZRgIIAEoDjIeLkNsb3VkUHJvamVjdC5TdWJzY3JpcHRpb25UeXBlUhBzdWJzY3JpcHRpb25UeXBl');
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
  ],
};

/// Descriptor for `Project`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List projectDescriptor = $convert.base64Decode('CgdQcm9qZWN0Eg4KAmlkGAEgASgJUgJpZBInCg9vcmdhbml6YXRpb25faWQYAiABKAlSDm9yZ2FuaXphdGlvbklkEiIKDW93bmVyX3VzZXJfaWQYAyABKAlSC293bmVyVXNlcklkEhIKBG5hbWUYBCABKAlSBG5hbWUSHwoLcHJpdmF0ZV9rZXkYBSABKAlSCnByaXZhdGVLZXkSLgoTcHJpdmF0ZV9rZXlfc2VjdXJlZBgGIAEoCFIRcHJpdmF0ZUtleVNlY3VyZWQSOQoKY3JlYXRlZF9hdBgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI5Cgp1cGRhdGVkX2F0GAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0ElMKGHByaXZhdGVfa2V5X2dlbmVyYXRlZF9hdBgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSFXByaXZhdGVLZXlHZW5lcmF0ZWRBdBJPChZwcml2YXRlX2tleV9zZWN1cmVkX2F0GAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFITcHJpdmF0ZUtleVNlY3VyZWRBdBISCgRsb2dvGAsgASgJUgRsb2dv');
@$core.Deprecated('Use cloudRequestDescriptor instead')
const CloudRequest$json = const {
  '1': 'CloudRequest',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'private_key', '3': 2, '4': 1, '5': 9, '10': 'privateKey'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.CloudProject.Organization', '10': 'organization'},
    const {'1': 'cloud_token', '3': 5, '4': 1, '5': 9, '10': 'cloudToken'},
    const {'1': 'member', '3': 6, '4': 1, '5': 11, '6': '.CloudProject.Member', '10': 'member'},
    const {'1': 'members', '3': 7, '4': 3, '5': 11, '6': '.CloudProject.Member', '10': 'members'},
  ],
};

/// Descriptor for `CloudRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudRequestDescriptor = $convert.base64Decode('CgxDbG91ZFJlcXVlc3QSLwoHcHJvamVjdBgBIAEoCzIVLkNsb3VkUHJvamVjdC5Qcm9qZWN0Ugdwcm9qZWN0Eh8KC3ByaXZhdGVfa2V5GAIgASgJUgpwcml2YXRlS2V5EiEKDGFjY2Vzc190b2tlbhgDIAEoCVILYWNjZXNzVG9rZW4SPgoMb3JnYW5pemF0aW9uGAQgASgLMhouQ2xvdWRQcm9qZWN0Lk9yZ2FuaXphdGlvblIMb3JnYW5pemF0aW9uEh8KC2Nsb3VkX3Rva2VuGAUgASgJUgpjbG91ZFRva2VuEiwKBm1lbWJlchgGIAEoCzIULkNsb3VkUHJvamVjdC5NZW1iZXJSBm1lbWJlchIuCgdtZW1iZXJzGAcgAygLMhQuQ2xvdWRQcm9qZWN0Lk1lbWJlclIHbWVtYmVycw==');
@$core.Deprecated('Use cloudResponseDescriptor instead')
const CloudResponse$json = const {
  '1': 'CloudResponse',
  '2': const [
    const {'1': 'project', '3': 1, '4': 1, '5': 11, '6': '.CloudProject.Project', '10': 'project'},
    const {'1': 'projects', '3': 2, '4': 3, '5': 11, '6': '.CloudProject.Project', '10': 'projects'},
    const {'1': 'access_token', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 4, '4': 1, '5': 11, '6': '.CloudProject.Organization', '10': 'organization'},
    const {'1': 'member', '3': 5, '4': 1, '5': 11, '6': '.CloudProject.Member', '10': 'member'},
    const {'1': 'members', '3': 6, '4': 3, '5': 11, '6': '.CloudProject.Member', '10': 'members'},
    const {'1': 'organizations', '3': 7, '4': 3, '5': 11, '6': '.CloudProject.Organization', '10': 'organizations'},
  ],
};

/// Descriptor for `CloudResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cloudResponseDescriptor = $convert.base64Decode('Cg1DbG91ZFJlc3BvbnNlEi8KB3Byb2plY3QYASABKAsyFS5DbG91ZFByb2plY3QuUHJvamVjdFIHcHJvamVjdBIxCghwcm9qZWN0cxgCIAMoCzIVLkNsb3VkUHJvamVjdC5Qcm9qZWN0Ughwcm9qZWN0cxIhCgxhY2Nlc3NfdG9rZW4YAyABKAlSC2FjY2Vzc1Rva2VuEj4KDG9yZ2FuaXphdGlvbhgEIAEoCzIaLkNsb3VkUHJvamVjdC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhIsCgZtZW1iZXIYBSABKAsyFC5DbG91ZFByb2plY3QuTWVtYmVyUgZtZW1iZXISLgoHbWVtYmVycxgGIAMoCzIULkNsb3VkUHJvamVjdC5NZW1iZXJSB21lbWJlcnMSQAoNb3JnYW5pemF0aW9ucxgHIAMoCzIaLkNsb3VkUHJvamVjdC5Pcmdhbml6YXRpb25SDW9yZ2FuaXphdGlvbnM=');
