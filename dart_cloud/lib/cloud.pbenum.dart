///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class AppType extends $pb.ProtobufEnum {
  static const AppType INVALID_APP = AppType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_APP');
  static const AppType USER_BLOCK_APP = AppType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'USER_BLOCK_APP');
  static const AppType NUNTIO_CONNECT_APP = AppType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'NUNTIO_CONNECT_APP');

  static const $core.List<AppType> values = <AppType> [
    INVALID_APP,
    USER_BLOCK_APP,
    NUNTIO_CONNECT_APP,
  ];

  static final $core.Map<$core.int, AppType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AppType? valueOf($core.int value) => _byValue[value];

  const AppType._($core.int v, $core.String n) : super(v, n);
}

