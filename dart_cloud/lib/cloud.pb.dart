///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $1;

class Organization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Organization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerUserId')
    ..hasRequiredFields = false
  ;

  Organization._() : super();
  factory Organization({
    $core.String? id,
    $core.String? name,
    $core.String? ownerUserId,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (ownerUserId != null) {
      _result.ownerUserId = ownerUserId;
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
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get ownerUserId => $_getSZ(2);
  @$pb.TagNumber(3)
  set ownerUserId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasOwnerUserId() => $_has(2);
  @$pb.TagNumber(3)
  void clearOwnerUserId() => clearField(3);
}

class Project extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Project', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecured')
    ..aOM<$1.Timestamp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeyGeneratedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecuredAt', subBuilder: $1.Timestamp.create)
    ..aOS(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logo')
    ..hasRequiredFields = false
  ;

  Project._() : super();
  factory Project({
    $core.String? id,
    $core.String? organizationId,
    $core.String? name,
    $core.String? privateKey,
    $core.bool? privateKeySecured,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $1.Timestamp? privateKeyGeneratedAt,
    $1.Timestamp? privateKeySecuredAt,
    $core.String? logo,
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
    if (privateKey != null) {
      _result.privateKey = privateKey;
    }
    if (privateKeySecured != null) {
      _result.privateKeySecured = privateKeySecured;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (privateKeyGeneratedAt != null) {
      _result.privateKeyGeneratedAt = privateKeyGeneratedAt;
    }
    if (privateKeySecuredAt != null) {
      _result.privateKeySecuredAt = privateKeySecuredAt;
    }
    if (logo != null) {
      _result.logo = logo;
    }
    return _result;
  }
  factory Project.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Project.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Project clone() => Project()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Project copyWith(void Function(Project) updates) => super.copyWith((message) => updates(message as Project)) as Project; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Project create() => Project._();
  Project createEmptyInstance() => create();
  static $pb.PbList<Project> createRepeated() => $pb.PbList<Project>();
  @$core.pragma('dart2js:noInline')
  static Project getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Project>(create);
  static Project? _defaultInstance;

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
  $core.String get privateKey => $_getSZ(3);
  @$pb.TagNumber(4)
  set privateKey($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasPrivateKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearPrivateKey() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get privateKeySecured => $_getBF(4);
  @$pb.TagNumber(5)
  set privateKeySecured($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasPrivateKeySecured() => $_has(4);
  @$pb.TagNumber(5)
  void clearPrivateKeySecured() => clearField(5);

  @$pb.TagNumber(6)
  $1.Timestamp get createdAt => $_getN(5);
  @$pb.TagNumber(6)
  set createdAt($1.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCreatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearCreatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $1.Timestamp ensureCreatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $1.Timestamp get updatedAt => $_getN(6);
  @$pb.TagNumber(7)
  set updatedAt($1.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasUpdatedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearUpdatedAt() => clearField(7);
  @$pb.TagNumber(7)
  $1.Timestamp ensureUpdatedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  $1.Timestamp get privateKeyGeneratedAt => $_getN(7);
  @$pb.TagNumber(8)
  set privateKeyGeneratedAt($1.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPrivateKeyGeneratedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearPrivateKeyGeneratedAt() => clearField(8);
  @$pb.TagNumber(8)
  $1.Timestamp ensurePrivateKeyGeneratedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $1.Timestamp get privateKeySecuredAt => $_getN(8);
  @$pb.TagNumber(9)
  set privateKeySecuredAt($1.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasPrivateKeySecuredAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearPrivateKeySecuredAt() => clearField(9);
  @$pb.TagNumber(9)
  $1.Timestamp ensurePrivateKeySecuredAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get logo => $_getSZ(9);
  @$pb.TagNumber(10)
  set logo($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasLogo() => $_has(9);
  @$pb.TagNumber(10)
  void clearLogo() => clearField(10);
}

class CloudRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..aOM<Organization>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..hasRequiredFields = false
  ;

  CloudRequest._() : super();
  factory CloudRequest({
    Project? project,
    $core.String? privateKey,
    $core.String? accessToken,
    Organization? organization,
  }) {
    final _result = create();
    if (project != null) {
      _result.project = project;
    }
    if (privateKey != null) {
      _result.privateKey = privateKey;
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    if (organization != null) {
      _result.organization = organization;
    }
    return _result;
  }
  factory CloudRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CloudRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CloudRequest clone() => CloudRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CloudRequest copyWith(void Function(CloudRequest) updates) => super.copyWith((message) => updates(message as CloudRequest)) as CloudRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CloudRequest create() => CloudRequest._();
  CloudRequest createEmptyInstance() => create();
  static $pb.PbList<CloudRequest> createRepeated() => $pb.PbList<CloudRequest>();
  @$core.pragma('dart2js:noInline')
  static CloudRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CloudRequest>(create);
  static CloudRequest? _defaultInstance;

  @$pb.TagNumber(1)
  Project get project => $_getN(0);
  @$pb.TagNumber(1)
  set project(Project v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasProject() => $_has(0);
  @$pb.TagNumber(1)
  void clearProject() => clearField(1);
  @$pb.TagNumber(1)
  Project ensureProject() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.String get privateKey => $_getSZ(1);
  @$pb.TagNumber(2)
  set privateKey($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPrivateKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearPrivateKey() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get accessToken => $_getSZ(2);
  @$pb.TagNumber(3)
  set accessToken($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAccessToken() => $_has(2);
  @$pb.TagNumber(3)
  void clearAccessToken() => clearField(3);

  @$pb.TagNumber(4)
  Organization get organization => $_getN(3);
  @$pb.TagNumber(4)
  set organization(Organization v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasOrganization() => $_has(3);
  @$pb.TagNumber(4)
  void clearOrganization() => clearField(4);
  @$pb.TagNumber(4)
  Organization ensureOrganization() => $_ensure(3);
}

class CloudResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..pc<Project>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'projects', $pb.PbFieldType.PM, subBuilder: Project.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..aOM<Organization>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..hasRequiredFields = false
  ;

  CloudResponse._() : super();
  factory CloudResponse({
    Project? project,
    $core.Iterable<Project>? projects,
    $core.String? accessToken,
    Organization? organization,
  }) {
    final _result = create();
    if (project != null) {
      _result.project = project;
    }
    if (projects != null) {
      _result.projects.addAll(projects);
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    if (organization != null) {
      _result.organization = organization;
    }
    return _result;
  }
  factory CloudResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CloudResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CloudResponse clone() => CloudResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CloudResponse copyWith(void Function(CloudResponse) updates) => super.copyWith((message) => updates(message as CloudResponse)) as CloudResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CloudResponse create() => CloudResponse._();
  CloudResponse createEmptyInstance() => create();
  static $pb.PbList<CloudResponse> createRepeated() => $pb.PbList<CloudResponse>();
  @$core.pragma('dart2js:noInline')
  static CloudResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CloudResponse>(create);
  static CloudResponse? _defaultInstance;

  @$pb.TagNumber(1)
  Project get project => $_getN(0);
  @$pb.TagNumber(1)
  set project(Project v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasProject() => $_has(0);
  @$pb.TagNumber(1)
  void clearProject() => clearField(1);
  @$pb.TagNumber(1)
  Project ensureProject() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<Project> get projects => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get accessToken => $_getSZ(2);
  @$pb.TagNumber(3)
  set accessToken($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAccessToken() => $_has(2);
  @$pb.TagNumber(3)
  void clearAccessToken() => clearField(3);

  @$pb.TagNumber(4)
  Organization get organization => $_getN(3);
  @$pb.TagNumber(4)
  set organization(Organization v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasOrganization() => $_has(3);
  @$pb.TagNumber(4)
  void clearOrganization() => clearField(4);
  @$pb.TagNumber(4)
  Organization ensureOrganization() => $_ensure(3);
}

