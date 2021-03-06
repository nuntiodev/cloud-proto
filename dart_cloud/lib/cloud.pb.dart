///
//  Generated code. Do not modify.
//  source: cloud.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $1;

import 'cloud.pbenum.dart';

export 'cloud.pbenum.dart';

class Member extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Member', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'projectId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userId')
    ..e<MemberType>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: MemberType.INVALID_MEMBER_TYPE, valueOf: MemberType.valueOf, enumValues: MemberType.values)
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId')
    ..aOS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'email')
    ..hasRequiredFields = false
  ;

  Member._() : super();
  factory Member({
    $core.String? id,
    $core.String? projectId,
    $core.String? userId,
    MemberType? type,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.String? organizationId,
    $core.String? email,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (projectId != null) {
      _result.projectId = projectId;
    }
    if (userId != null) {
      _result.userId = userId;
    }
    if (type != null) {
      _result.type = type;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (email != null) {
      _result.email = email;
    }
    return _result;
  }
  factory Member.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Member.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Member clone() => Member()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Member copyWith(void Function(Member) updates) => super.copyWith((message) => updates(message as Member)) as Member; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Member create() => Member._();
  Member createEmptyInstance() => create();
  static $pb.PbList<Member> createRepeated() => $pb.PbList<Member>();
  @$core.pragma('dart2js:noInline')
  static Member getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Member>(create);
  static Member? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get projectId => $_getSZ(1);
  @$pb.TagNumber(2)
  set projectId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProjectId() => $_has(1);
  @$pb.TagNumber(2)
  void clearProjectId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get userId => $_getSZ(2);
  @$pb.TagNumber(3)
  set userId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUserId() => $_has(2);
  @$pb.TagNumber(3)
  void clearUserId() => clearField(3);

  @$pb.TagNumber(4)
  MemberType get type => $_getN(3);
  @$pb.TagNumber(4)
  set type(MemberType v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasType() => $_has(3);
  @$pb.TagNumber(4)
  void clearType() => clearField(4);

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

  @$pb.TagNumber(7)
  $core.String get organizationId => $_getSZ(6);
  @$pb.TagNumber(7)
  set organizationId($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasOrganizationId() => $_has(6);
  @$pb.TagNumber(7)
  void clearOrganizationId() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get email => $_getSZ(7);
  @$pb.TagNumber(8)
  set email($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasEmail() => $_has(7);
  @$pb.TagNumber(8)
  void clearEmail() => clearField(8);
}

class Organization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Organization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerUserId')
    ..aOM<$1.Timestamp>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..pPS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'viewers')
    ..pPS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'editors')
    ..e<SubscriptionType>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'subscriptionType', $pb.PbFieldType.OE, defaultOrMaker: SubscriptionType.INVALID_SUBSCRIPTION, valueOf: SubscriptionType.valueOf, enumValues: SubscriptionType.values)
    ..hasRequiredFields = false
  ;

  Organization._() : super();
  factory Organization({
    $core.String? id,
    $core.String? name,
    $core.String? ownerUserId,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.Iterable<$core.String>? viewers,
    $core.Iterable<$core.String>? editors,
    SubscriptionType? subscriptionType,
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
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (viewers != null) {
      _result.viewers.addAll(viewers);
    }
    if (editors != null) {
      _result.editors.addAll(editors);
    }
    if (subscriptionType != null) {
      _result.subscriptionType = subscriptionType;
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

  @$pb.TagNumber(4)
  $1.Timestamp get createdAt => $_getN(3);
  @$pb.TagNumber(4)
  set createdAt($1.Timestamp v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedAt() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedAt() => clearField(4);
  @$pb.TagNumber(4)
  $1.Timestamp ensureCreatedAt() => $_ensure(3);

  @$pb.TagNumber(5)
  $1.Timestamp get updatedAt => $_getN(4);
  @$pb.TagNumber(5)
  set updatedAt($1.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasUpdatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearUpdatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $1.Timestamp ensureUpdatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.List<$core.String> get viewers => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<$core.String> get editors => $_getList(6);

  @$pb.TagNumber(8)
  SubscriptionType get subscriptionType => $_getN(7);
  @$pb.TagNumber(8)
  set subscriptionType(SubscriptionType v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasSubscriptionType() => $_has(7);
  @$pb.TagNumber(8)
  void clearSubscriptionType() => clearField(8);
}

class Access extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Access', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'OnlyOwner', protoName: 'OnlyOwner')
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'AllowViewer', protoName: 'AllowViewer')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'AllowEditor', protoName: 'AllowEditor')
    ..hasRequiredFields = false
  ;

  Access._() : super();
  factory Access({
    $core.bool? onlyOwner,
    $core.bool? allowViewer,
    $core.bool? allowEditor,
  }) {
    final _result = create();
    if (onlyOwner != null) {
      _result.onlyOwner = onlyOwner;
    }
    if (allowViewer != null) {
      _result.allowViewer = allowViewer;
    }
    if (allowEditor != null) {
      _result.allowEditor = allowEditor;
    }
    return _result;
  }
  factory Access.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Access.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Access clone() => Access()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Access copyWith(void Function(Access) updates) => super.copyWith((message) => updates(message as Access)) as Access; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Access create() => Access._();
  Access createEmptyInstance() => create();
  static $pb.PbList<Access> createRepeated() => $pb.PbList<Access>();
  @$core.pragma('dart2js:noInline')
  static Access getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Access>(create);
  static Access? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get onlyOwner => $_getBF(0);
  @$pb.TagNumber(1)
  set onlyOwner($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOnlyOwner() => $_has(0);
  @$pb.TagNumber(1)
  void clearOnlyOwner() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get allowViewer => $_getBF(1);
  @$pb.TagNumber(2)
  set allowViewer($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAllowViewer() => $_has(1);
  @$pb.TagNumber(2)
  void clearAllowViewer() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get allowEditor => $_getBF(2);
  @$pb.TagNumber(3)
  set allowEditor($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAllowEditor() => $_has(2);
  @$pb.TagNumber(3)
  void clearAllowEditor() => clearField(3);
}

class Partner extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Partner', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..e<Country>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'country', $pb.PbFieldType.OE, defaultOrMaker: Country.DK, valueOf: Country.valueOf, enumValues: Country.values)
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'apiUrl')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logo')
    ..aOB(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nuntio')
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dedicated')
    ..aOM<$1.Timestamp>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOS(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'website')
    ..hasRequiredFields = false
  ;

  Partner._() : super();
  factory Partner({
    $core.String? id,
    $core.String? name,
    Country? country,
    $core.String? apiUrl,
    $core.String? logo,
    $core.bool? nuntio,
    $core.bool? dedicated,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.String? website,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (country != null) {
      _result.country = country;
    }
    if (apiUrl != null) {
      _result.apiUrl = apiUrl;
    }
    if (logo != null) {
      _result.logo = logo;
    }
    if (nuntio != null) {
      _result.nuntio = nuntio;
    }
    if (dedicated != null) {
      _result.dedicated = dedicated;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (website != null) {
      _result.website = website;
    }
    return _result;
  }
  factory Partner.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Partner.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Partner clone() => Partner()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Partner copyWith(void Function(Partner) updates) => super.copyWith((message) => updates(message as Partner)) as Partner; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Partner create() => Partner._();
  Partner createEmptyInstance() => create();
  static $pb.PbList<Partner> createRepeated() => $pb.PbList<Partner>();
  @$core.pragma('dart2js:noInline')
  static Partner getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Partner>(create);
  static Partner? _defaultInstance;

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
  Country get country => $_getN(2);
  @$pb.TagNumber(3)
  set country(Country v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCountry() => $_has(2);
  @$pb.TagNumber(3)
  void clearCountry() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get apiUrl => $_getSZ(3);
  @$pb.TagNumber(4)
  set apiUrl($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasApiUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearApiUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get logo => $_getSZ(4);
  @$pb.TagNumber(5)
  set logo($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasLogo() => $_has(4);
  @$pb.TagNumber(5)
  void clearLogo() => clearField(5);

  @$pb.TagNumber(6)
  $core.bool get nuntio => $_getBF(5);
  @$pb.TagNumber(6)
  set nuntio($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasNuntio() => $_has(5);
  @$pb.TagNumber(6)
  void clearNuntio() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get dedicated => $_getBF(6);
  @$pb.TagNumber(7)
  set dedicated($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasDedicated() => $_has(6);
  @$pb.TagNumber(7)
  void clearDedicated() => clearField(7);

  @$pb.TagNumber(8)
  $1.Timestamp get createdAt => $_getN(7);
  @$pb.TagNumber(8)
  set createdAt($1.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasCreatedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearCreatedAt() => clearField(8);
  @$pb.TagNumber(8)
  $1.Timestamp ensureCreatedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $1.Timestamp get updatedAt => $_getN(8);
  @$pb.TagNumber(9)
  set updatedAt($1.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUpdatedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearUpdatedAt() => clearField(9);
  @$pb.TagNumber(9)
  $1.Timestamp ensureUpdatedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get website => $_getSZ(9);
  @$pb.TagNumber(10)
  set website($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasWebsite() => $_has(9);
  @$pb.TagNumber(10)
  void clearWebsite() => clearField(10);
}

class Project extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Project', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerUserId')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeyId')
    ..aOM<$1.Timestamp>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeyGeneratedAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKeySecuredAt', subBuilder: $1.Timestamp.create)
    ..aOS(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logo')
    ..aOS(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publicKey')
    ..aOS(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationName')
    ..aOS(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'partnerId')
    ..hasRequiredFields = false
  ;

  Project._() : super();
  factory Project({
    $core.String? id,
    $core.String? organizationId,
    $core.String? ownerUserId,
    $core.String? name,
    $core.String? privateKey,
    $core.String? privateKeyId,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $1.Timestamp? privateKeyGeneratedAt,
    $1.Timestamp? privateKeySecuredAt,
    $core.String? logo,
    $core.String? publicKey,
    $core.String? organizationName,
    $core.String? partnerId,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (ownerUserId != null) {
      _result.ownerUserId = ownerUserId;
    }
    if (name != null) {
      _result.name = name;
    }
    if (privateKey != null) {
      _result.privateKey = privateKey;
    }
    if (privateKeyId != null) {
      _result.privateKeyId = privateKeyId;
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
    if (publicKey != null) {
      _result.publicKey = publicKey;
    }
    if (organizationName != null) {
      _result.organizationName = organizationName;
    }
    if (partnerId != null) {
      _result.partnerId = partnerId;
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
  $core.String get ownerUserId => $_getSZ(2);
  @$pb.TagNumber(3)
  set ownerUserId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasOwnerUserId() => $_has(2);
  @$pb.TagNumber(3)
  void clearOwnerUserId() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get privateKey => $_getSZ(4);
  @$pb.TagNumber(5)
  set privateKey($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasPrivateKey() => $_has(4);
  @$pb.TagNumber(5)
  void clearPrivateKey() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get privateKeyId => $_getSZ(5);
  @$pb.TagNumber(6)
  set privateKeyId($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasPrivateKeyId() => $_has(5);
  @$pb.TagNumber(6)
  void clearPrivateKeyId() => clearField(6);

  @$pb.TagNumber(7)
  $1.Timestamp get createdAt => $_getN(6);
  @$pb.TagNumber(7)
  set createdAt($1.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasCreatedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearCreatedAt() => clearField(7);
  @$pb.TagNumber(7)
  $1.Timestamp ensureCreatedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  $1.Timestamp get updatedAt => $_getN(7);
  @$pb.TagNumber(8)
  set updatedAt($1.Timestamp v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasUpdatedAt() => $_has(7);
  @$pb.TagNumber(8)
  void clearUpdatedAt() => clearField(8);
  @$pb.TagNumber(8)
  $1.Timestamp ensureUpdatedAt() => $_ensure(7);

  @$pb.TagNumber(9)
  $1.Timestamp get privateKeyGeneratedAt => $_getN(8);
  @$pb.TagNumber(9)
  set privateKeyGeneratedAt($1.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasPrivateKeyGeneratedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearPrivateKeyGeneratedAt() => clearField(9);
  @$pb.TagNumber(9)
  $1.Timestamp ensurePrivateKeyGeneratedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $1.Timestamp get privateKeySecuredAt => $_getN(9);
  @$pb.TagNumber(10)
  set privateKeySecuredAt($1.Timestamp v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasPrivateKeySecuredAt() => $_has(9);
  @$pb.TagNumber(10)
  void clearPrivateKeySecuredAt() => clearField(10);
  @$pb.TagNumber(10)
  $1.Timestamp ensurePrivateKeySecuredAt() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.String get logo => $_getSZ(10);
  @$pb.TagNumber(11)
  set logo($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasLogo() => $_has(10);
  @$pb.TagNumber(11)
  void clearLogo() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get publicKey => $_getSZ(11);
  @$pb.TagNumber(12)
  set publicKey($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasPublicKey() => $_has(11);
  @$pb.TagNumber(12)
  void clearPublicKey() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get organizationName => $_getSZ(12);
  @$pb.TagNumber(13)
  set organizationName($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasOrganizationName() => $_has(12);
  @$pb.TagNumber(13)
  void clearOrganizationName() => clearField(13);

  @$pb.TagNumber(14)
  $core.String get partnerId => $_getSZ(13);
  @$pb.TagNumber(14)
  set partnerId($core.String v) { $_setString(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasPartnerId() => $_has(13);
  @$pb.TagNumber(14)
  void clearPartnerId() => clearField(14);
}

class CloudRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privateKey')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..aOM<Organization>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cloudToken')
    ..aOM<Member>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'member', subBuilder: Member.create)
    ..pc<Member>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'members', $pb.PbFieldType.PM, subBuilder: Member.create)
    ..aOM<Partner>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'partner', subBuilder: Partner.create)
    ..aOS(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'currentUserId')
    ..aOM<Access>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'access', subBuilder: Access.create)
    ..hasRequiredFields = false
  ;

  CloudRequest._() : super();
  factory CloudRequest({
    Project? project,
    $core.String? privateKey,
    $core.String? accessToken,
    Organization? organization,
    $core.String? cloudToken,
    Member? member,
    $core.Iterable<Member>? members,
    Partner? partner,
    $core.String? currentUserId,
    Access? access,
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
    if (cloudToken != null) {
      _result.cloudToken = cloudToken;
    }
    if (member != null) {
      _result.member = member;
    }
    if (members != null) {
      _result.members.addAll(members);
    }
    if (partner != null) {
      _result.partner = partner;
    }
    if (currentUserId != null) {
      _result.currentUserId = currentUserId;
    }
    if (access != null) {
      _result.access = access;
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

  @$pb.TagNumber(5)
  $core.String get cloudToken => $_getSZ(4);
  @$pb.TagNumber(5)
  set cloudToken($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCloudToken() => $_has(4);
  @$pb.TagNumber(5)
  void clearCloudToken() => clearField(5);

  @$pb.TagNumber(6)
  Member get member => $_getN(5);
  @$pb.TagNumber(6)
  set member(Member v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasMember() => $_has(5);
  @$pb.TagNumber(6)
  void clearMember() => clearField(6);
  @$pb.TagNumber(6)
  Member ensureMember() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.List<Member> get members => $_getList(6);

  @$pb.TagNumber(8)
  Partner get partner => $_getN(7);
  @$pb.TagNumber(8)
  set partner(Partner v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPartner() => $_has(7);
  @$pb.TagNumber(8)
  void clearPartner() => clearField(8);
  @$pb.TagNumber(8)
  Partner ensurePartner() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get currentUserId => $_getSZ(8);
  @$pb.TagNumber(9)
  set currentUserId($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasCurrentUserId() => $_has(8);
  @$pb.TagNumber(9)
  void clearCurrentUserId() => clearField(9);

  @$pb.TagNumber(10)
  Access get access => $_getN(9);
  @$pb.TagNumber(10)
  set access(Access v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasAccess() => $_has(9);
  @$pb.TagNumber(10)
  void clearAccess() => clearField(10);
  @$pb.TagNumber(10)
  Access ensureAccess() => $_ensure(9);
}

class CloudResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CloudResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Cloud'), createEmptyInstance: create)
    ..aOM<Project>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'project', subBuilder: Project.create)
    ..pc<Project>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'projects', $pb.PbFieldType.PM, subBuilder: Project.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken')
    ..aOM<Organization>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..aOM<Member>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'member', subBuilder: Member.create)
    ..pc<Member>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'members', $pb.PbFieldType.PM, subBuilder: Member.create)
    ..pc<Organization>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizations', $pb.PbFieldType.PM, subBuilder: Organization.create)
    ..aOM<Partner>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'partner', subBuilder: Partner.create)
    ..pc<Partner>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'partners', $pb.PbFieldType.PM, subBuilder: Partner.create)
    ..m<$core.String, $core.String>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publicKeys', entryClassName: 'CloudResponse.PublicKeysEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('Cloud'))
    ..hasRequiredFields = false
  ;

  CloudResponse._() : super();
  factory CloudResponse({
    Project? project,
    $core.Iterable<Project>? projects,
    $core.String? accessToken,
    Organization? organization,
    Member? member,
    $core.Iterable<Member>? members,
    $core.Iterable<Organization>? organizations,
    Partner? partner,
    $core.Iterable<Partner>? partners,
    $core.Map<$core.String, $core.String>? publicKeys,
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
    if (member != null) {
      _result.member = member;
    }
    if (members != null) {
      _result.members.addAll(members);
    }
    if (organizations != null) {
      _result.organizations.addAll(organizations);
    }
    if (partner != null) {
      _result.partner = partner;
    }
    if (partners != null) {
      _result.partners.addAll(partners);
    }
    if (publicKeys != null) {
      _result.publicKeys.addAll(publicKeys);
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

  @$pb.TagNumber(5)
  Member get member => $_getN(4);
  @$pb.TagNumber(5)
  set member(Member v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasMember() => $_has(4);
  @$pb.TagNumber(5)
  void clearMember() => clearField(5);
  @$pb.TagNumber(5)
  Member ensureMember() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.List<Member> get members => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<Organization> get organizations => $_getList(6);

  @$pb.TagNumber(8)
  Partner get partner => $_getN(7);
  @$pb.TagNumber(8)
  set partner(Partner v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPartner() => $_has(7);
  @$pb.TagNumber(8)
  void clearPartner() => clearField(8);
  @$pb.TagNumber(8)
  Partner ensurePartner() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.List<Partner> get partners => $_getList(8);

  @$pb.TagNumber(10)
  $core.Map<$core.String, $core.String> get publicKeys => $_getMap(9);
}

