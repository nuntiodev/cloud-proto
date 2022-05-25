///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $1;

import 'cloud.pbenum.dart';

export 'cloud.pbenum.dart';

class Organization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Organization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logo')
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..hasRequiredFields = false
  ;

  Organization._() : super();
  factory Organization({
    $core.String? id,
    $core.String? ownerId,
    $core.String? name,
    $core.String? logo,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (ownerId != null) {
      _result.ownerId = ownerId;
    }
    if (name != null) {
      _result.name = name;
    }
    if (logo != null) {
      _result.logo = logo;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    return _result;
  }
  factory Organization.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Organization.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Organization clone() => Organization()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Organization copyWith(void Function(Organization) updates) => super.copyWith((message) => updates(message as Organization)) as Organization; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Organization create() => Organization._();
  Organization createEmptyInstance() => create();
  static $pb.PbList<Organization> createRepeated() => $pb.PbList<Organization>();
  @$core.pragma('dart2js:noInline')
  static Organization getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Organization>(create);
  static Organization? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get ownerId => $_getSZ(1);
  @$pb.TagNumber(2)
  set ownerId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOwnerId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOwnerId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get logo => $_getSZ(3);
  @$pb.TagNumber(4)
  set logo($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasLogo() => $_has(3);
  @$pb.TagNumber(4)
  void clearLogo() => clearField(4);

  @$pb.TagNumber(5)
  $1.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($1.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $1.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $1.Timestamp get updatedAt => $_getN(5);
  @$pb.TagNumber(6)
  set updatedAt($1.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $1.Timestamp ensureUpdatedAt() => $_ensure(5);
}

class App extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'App', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logo')
    ..e<AppType>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appType', $pb.PbFieldType.OE, defaultOrMaker: AppType.INVALID_APP, valueOf: AppType.valueOf, enumValues: AppType.values)
    ..hasRequiredFields = false
  ;

  App._() : super();
  factory App({
    $core.String? id,
    $core.String? organizationId,
    $core.String? name,
    $core.String? description,
    $core.String? logo,
    AppType? appType,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (name != null) {
      _result.name = name;
    }
    if (description != null) {
      _result.description = description;
    }
    if (logo != null) {
      _result.logo = logo;
    }
    if (appType != null) {
      _result.appType = appType;
    }
    return _result;
  }
  factory App.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory App.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  App clone() => App()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  App copyWith(void Function(App) updates) => super.copyWith((message) => updates(message as App)) as App; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static App create() => App._();
  App createEmptyInstance() => create();
  static $pb.PbList<App> createRepeated() => $pb.PbList<App>();
  @$core.pragma('dart2js:noInline')
  static App getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<App>(create);
  static App? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get organizationId => $_getSZ(1);
  @$pb.TagNumber(2)
  set organizationId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOrganizationId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOrganizationId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get description => $_getSZ(3);
  @$pb.TagNumber(4)
  set description($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDescription() => $_has(3);
  @$pb.TagNumber(4)
  void clearDescription() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get logo => $_getSZ(4);
  @$pb.TagNumber(5)
  set logo($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasLogo() => $_has(4);
  @$pb.TagNumber(5)
  void clearLogo() => clearField(5);

  @$pb.TagNumber(6)
  AppType get appType => $_getN(5);
  @$pb.TagNumber(6)
  set appType(AppType v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasAppType() => $_has(5);
  @$pb.TagNumber(6)
  void clearAppType() => clearField(6);
}

class PrivateKey extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PrivateKey', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key')
    ..aOM<$1.Timestamp>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeyGeneratedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecuredAt', subBuilder: $1.Timestamp.create)
    ..aOB(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecured')
    ..pPS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userBlockIds')
    ..hasRequiredFields = false
  ;

  PrivateKey._() : super();
  factory PrivateKey({
    $core.String? id,
    $core.String? organizationId,
    $core.String? key,
    $1.Timestamp? privateKeyGeneratedAt,
    $1.Timestamp? privateKeySecuredAt,
    $core.bool? privateKeySecured,
    $core.Iterable<$core.String>? userBlockIds,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (key != null) {
      _result.key = key;
    }
    if (privateKeyGeneratedAt != null) {
      _result.privateKeyGeneratedAt = privateKeyGeneratedAt;
    }
    if (privateKeySecuredAt != null) {
      _result.privateKeySecuredAt = privateKeySecuredAt;
    }
    if (privateKeySecured != null) {
      _result.privateKeySecured = privateKeySecured;
    }
    if (userBlockIds != null) {
      _result.userBlockIds.addAll(userBlockIds);
    }
    return _result;
  }
  factory PrivateKey.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PrivateKey.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PrivateKey clone() => PrivateKey()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PrivateKey copyWith(void Function(PrivateKey) updates) => super.copyWith((message) => updates(message as PrivateKey)) as PrivateKey; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PrivateKey create() => PrivateKey._();
  PrivateKey createEmptyInstance() => create();
  static $pb.PbList<PrivateKey> createRepeated() => $pb.PbList<PrivateKey>();
  @$core.pragma('dart2js:noInline')
  static PrivateKey getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PrivateKey>(create);
  static PrivateKey? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get organizationId => $_getSZ(1);
  @$pb.TagNumber(2)
  set organizationId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOrganizationId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOrganizationId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get key => $_getSZ(2);
  @$pb.TagNumber(3)
  set key($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearKey() => clearField(3);

  @$pb.TagNumber(4)
  $1.Timestamp get privateKeyGeneratedAt => $_getN(3);
  @$pb.TagNumber(4)
  set privateKeyGeneratedAt($1.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasPrivateKeyGeneratedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearPrivateKeyGeneratedAt() => clearField(4);
  @$pb.TagNumber(4)
  $1.Timestamp ensurePrivateKeyGeneratedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $1.Timestamp get privateKeySecuredAt => $_getN(4);
  @$pb.TagNumber(5)
  set privateKeySecuredAt($1.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasPrivateKeySecuredAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearPrivateKeySecuredAt() => clearField(5);
  @$pb.TagNumber(5)
  $1.Timestamp ensurePrivateKeySecuredAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.bool get privateKeySecured => $_getBF(5);
  @$pb.TagNumber(6)
  set privateKeySecured($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasPrivateKeySecured() => $_has(5);
  @$pb.TagNumber(6)
  void clearPrivateKeySecured() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<$core.String> get userBlockIds => $_getList(6);
}

class OrganizationRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'OrganizationRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOM<Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..aOM<Organization>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'update', subBuilder: Organization.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..aOM<PrivateKey>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey', subBuilder: PrivateKey.create)
    ..hasRequiredFields = false
  ;

  OrganizationRequest._() : super();
  factory OrganizationRequest({
    Organization? organization,
    Organization? update,
    $core.String? accessToken,
    PrivateKey? privateKey,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    if (update != null) {
      _result.update = update;
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    if (privateKey != null) {
      _result.privateKey = privateKey;
    }
    return _result;
  }
  factory OrganizationRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory OrganizationRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  OrganizationRequest clone() => OrganizationRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  OrganizationRequest copyWith(void Function(OrganizationRequest) updates) => super.copyWith((message) => updates(message as OrganizationRequest)) as OrganizationRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static OrganizationRequest create() => OrganizationRequest._();
  OrganizationRequest createEmptyInstance() => create();
  static $pb.PbList<OrganizationRequest> createRepeated() => $pb.PbList<OrganizationRequest>();
  @$core.pragma('dart2js:noInline')
  static OrganizationRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<OrganizationRequest>(create);
  static OrganizationRequest? _defaultInstance;

  @$pb.TagNumber(1)
  Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization(Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  Organization ensureOrganization() => $_ensure(0);

  @$pb.TagNumber(2)
  Organization get update => $_getN(1);
  @$pb.TagNumber(2)
  set update(Organization v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUpdate() => $_has(1);
  @$pb.TagNumber(2)
  void clearUpdate() => clearField(2);
  @$pb.TagNumber(2)
  Organization ensureUpdate() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get accessToken => $_getSZ(2);
  @$pb.TagNumber(3)
  set accessToken($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAccessToken() => $_has(2);
  @$pb.TagNumber(3)
  void clearAccessToken() => clearField(3);

  @$pb.TagNumber(4)
  PrivateKey get privateKey => $_getN(3);
  @$pb.TagNumber(4)
  set privateKey(PrivateKey v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasPrivateKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearPrivateKey() => clearField(4);
  @$pb.TagNumber(4)
  PrivateKey ensurePrivateKey() => $_ensure(3);
}

class OrganizationResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'OrganizationResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOM<Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..pc<Organization>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizations', $pb.PbFieldType.PM, subBuilder: Organization.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..hasRequiredFields = false
  ;

  OrganizationResponse._() : super();
  factory OrganizationResponse({
    Organization? organization,
    $core.Iterable<Organization>? organizations,
    $core.String? accessToken,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    if (organizations != null) {
      _result.organizations.addAll(organizations);
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    return _result;
  }
  factory OrganizationResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory OrganizationResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  OrganizationResponse clone() => OrganizationResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  OrganizationResponse copyWith(void Function(OrganizationResponse) updates) => super.copyWith((message) => updates(message as OrganizationResponse)) as OrganizationResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static OrganizationResponse create() => OrganizationResponse._();
  OrganizationResponse createEmptyInstance() => create();
  static $pb.PbList<OrganizationResponse> createRepeated() => $pb.PbList<OrganizationResponse>();
  @$core.pragma('dart2js:noInline')
  static OrganizationResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<OrganizationResponse>(create);
  static OrganizationResponse? _defaultInstance;

  @$pb.TagNumber(1)
  Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization(Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  Organization ensureOrganization() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<Organization> get organizations => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get accessToken => $_getSZ(2);
  @$pb.TagNumber(3)
  set accessToken($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAccessToken() => $_has(2);
  @$pb.TagNumber(3)
  void clearAccessToken() => clearField(3);
}

