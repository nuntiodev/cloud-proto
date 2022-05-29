///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class SubscriptionType extends $pb.ProtobufEnum {
  static const SubscriptionType INVALID_SUBSCRIPTION = SubscriptionType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_SUBSCRIPTION');
  static const SubscriptionType FREEMIUM = SubscriptionType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FREEMIUM');
  static const SubscriptionType STARTUP = SubscriptionType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STARTUP');
  static const SubscriptionType SCALEUP = SubscriptionType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SCALEUP');
  static const SubscriptionType ENTERPRISE = SubscriptionType._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ENTERPRISE');

  static const $core.List<SubscriptionType> values = <SubscriptionType> [
    INVALID_SUBSCRIPTION,
    FREEMIUM,
    STARTUP,
    SCALEUP,
    ENTERPRISE,
  ];

  static final $core.Map<$core.int, SubscriptionType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static SubscriptionType? valueOf($core.int value) => _byValue[value];

  const SubscriptionType._($core.int v, $core.String n) : super(v, n);
}

class MemberType extends $pb.ProtobufEnum {
  static const MemberType INVALID_MEMBER_TYPE = MemberType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_MEMBER_TYPE');
  static const MemberType OWNER = MemberType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OWNER');
  static const MemberType EDITOR = MemberType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'EDITOR');
  static const MemberType VIEWER = MemberType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'VIEWER');

  static const $core.List<MemberType> values = <MemberType> [
    INVALID_MEMBER_TYPE,
    OWNER,
    EDITOR,
    VIEWER,
  ];

  static final $core.Map<$core.int, MemberType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static MemberType? valueOf($core.int value) => _byValue[value];

  const MemberType._($core.int v, $core.String n) : super(v, n);
}

