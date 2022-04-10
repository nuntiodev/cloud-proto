///
//  Generated code. Do not modify.
//  source: cloud_project.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $1;

class Project extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Project', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecured')
    ..aOM<$1.Timestamp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeyGeneratedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecuredAt', subBuilder: $1.Timestamp.create)
    ..hasRequiredFields = false
  ;

  Project._() : super();
  factory Project({
    $core.String? id,
    $core.String? ownerId,
    $core.String? name,
    $core.String? privateKey,
    $core.bool? privateKeySecured,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $1.Timestamp? privateKeyGeneratedAt,
    $1.Timestamp? privateKeySecuredAt,
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
}

class ProjectRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProjectRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..aOM<Project>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'update', subBuilder: Project.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..hasRequiredFields = false
  ;

  ProjectRequest._() : super();
  factory ProjectRequest({
    Project? project,
    Project? update,
    $core.String? privateKey,
    $core.String? accessToken,
  }) {
    final _result = create();
    if (project != null) {
      _result.project = project;
    }
    if (update != null) {
      _result.update = update;
    }
    if (privateKey != null) {
      _result.privateKey = privateKey;
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    return _result;
  }
  factory ProjectRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProjectRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProjectRequest clone() => ProjectRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProjectRequest copyWith(void Function(ProjectRequest) updates) => super.copyWith((message) => updates(message as ProjectRequest)) as ProjectRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProjectRequest create() => ProjectRequest._();
  ProjectRequest createEmptyInstance() => create();
  static $pb.PbList<ProjectRequest> createRepeated() => $pb.PbList<ProjectRequest>();
  @$core.pragma('dart2js:noInline')
  static ProjectRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProjectRequest>(create);
  static ProjectRequest? _defaultInstance;

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
  Project get update => $_getN(1);
  @$pb.TagNumber(2)
  set update(Project v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUpdate() => $_has(1);
  @$pb.TagNumber(2)
  void clearUpdate() => clearField(2);
  @$pb.TagNumber(2)
  Project ensureUpdate() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get privateKey => $_getSZ(2);
  @$pb.TagNumber(3)
  set privateKey($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPrivateKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearPrivateKey() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get accessToken => $_getSZ(3);
  @$pb.TagNumber(4)
  set accessToken($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasAccessToken() => $_has(3);
  @$pb.TagNumber(4)
  void clearAccessToken() => clearField(4);
}

class ProjectResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProjectResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudProject'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..pc<Project>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'projects', $pb.PbFieldType.PM, subBuilder: Project.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..hasRequiredFields = false
  ;

  ProjectResponse._() : super();
  factory ProjectResponse({
    Project? project,
    $core.Iterable<Project>? projects,
    $core.String? accessToken,
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
    return _result;
  }
  factory ProjectResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProjectResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProjectResponse clone() => ProjectResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProjectResponse copyWith(void Function(ProjectResponse) updates) => super.copyWith((message) => updates(message as ProjectResponse)) as ProjectResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProjectResponse create() => ProjectResponse._();
  ProjectResponse createEmptyInstance() => create();
  static $pb.PbList<ProjectResponse> createRepeated() => $pb.PbList<ProjectResponse>();
  @$core.pragma('dart2js:noInline')
  static ProjectResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProjectResponse>(create);
  static ProjectResponse? _defaultInstance;

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
}

