// source: cloud.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.CloudProject.Project', null, global);
goog.exportSymbol('proto.CloudProject.ProjectRequest', null, global);
goog.exportSymbol('proto.CloudProject.ProjectResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CloudProject.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudProject.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudProject.Project.displayName = 'proto.CloudProject.Project';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CloudProject.ProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudProject.ProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudProject.ProjectRequest.displayName = 'proto.CloudProject.ProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CloudProject.ProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CloudProject.ProjectResponse.repeatedFields_, null);
};
goog.inherits(proto.CloudProject.ProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudProject.ProjectResponse.displayName = 'proto.CloudProject.ProjectResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CloudProject.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudProject.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudProject.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ownerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    privateKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    privateKeySecured: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    privateKeyGeneratedAt: (f = msg.getPrivateKeyGeneratedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    privateKeySecuredAt: (f = msg.getPrivateKeySecuredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CloudProject.Project}
 */
proto.CloudProject.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudProject.Project;
  return proto.CloudProject.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudProject.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudProject.Project}
 */
proto.CloudProject.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrivateKeySecured(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPrivateKeyGeneratedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPrivateKeySecuredAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CloudProject.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudProject.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudProject.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrivateKeySecured();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPrivateKeyGeneratedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPrivateKeySecuredAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.CloudProject.Project.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner_id = 2;
 * @return {string}
 */
proto.CloudProject.Project.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.CloudProject.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string private_key = 4;
 * @return {string}
 */
proto.CloudProject.Project.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool private_key_secured = 5;
 * @return {boolean}
 */
proto.CloudProject.Project.prototype.getPrivateKeySecured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.setPrivateKeySecured = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.CloudProject.Project.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.CloudProject.Project} returns this
*/
proto.CloudProject.Project.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.Project.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.CloudProject.Project.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.CloudProject.Project} returns this
*/
proto.CloudProject.Project.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.Project.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp private_key_generated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.CloudProject.Project.prototype.getPrivateKeyGeneratedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.CloudProject.Project} returns this
*/
proto.CloudProject.Project.prototype.setPrivateKeyGeneratedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.clearPrivateKeyGeneratedAt = function() {
  return this.setPrivateKeyGeneratedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.Project.prototype.hasPrivateKeyGeneratedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp private_key_secured_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.CloudProject.Project.prototype.getPrivateKeySecuredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.CloudProject.Project} returns this
*/
proto.CloudProject.Project.prototype.setPrivateKeySecuredAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.Project} returns this
 */
proto.CloudProject.Project.prototype.clearPrivateKeySecuredAt = function() {
  return this.setPrivateKeySecuredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.Project.prototype.hasPrivateKeySecuredAt = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CloudProject.ProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudProject.ProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudProject.ProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.ProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.CloudProject.Project.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.CloudProject.Project.toObject(includeInstance, f),
    privateKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accessToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CloudProject.ProjectRequest}
 */
proto.CloudProject.ProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudProject.ProjectRequest;
  return proto.CloudProject.ProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudProject.ProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudProject.ProjectRequest}
 */
proto.CloudProject.ProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.CloudProject.Project;
      reader.readMessage(value,proto.CloudProject.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = new proto.CloudProject.Project;
      reader.readMessage(value,proto.CloudProject.Project.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CloudProject.ProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudProject.ProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudProject.ProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.ProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.CloudProject.Project.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.CloudProject.Project.serializeBinaryToWriter
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.CloudProject.Project}
 */
proto.CloudProject.ProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.CloudProject.Project} */ (
    jspb.Message.getWrapperField(this, proto.CloudProject.Project, 1));
};


/**
 * @param {?proto.CloudProject.Project|undefined} value
 * @return {!proto.CloudProject.ProjectRequest} returns this
*/
proto.CloudProject.ProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.ProjectRequest} returns this
 */
proto.CloudProject.ProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.ProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Project update = 2;
 * @return {?proto.CloudProject.Project}
 */
proto.CloudProject.ProjectRequest.prototype.getUpdate = function() {
  return /** @type{?proto.CloudProject.Project} */ (
    jspb.Message.getWrapperField(this, proto.CloudProject.Project, 2));
};


/**
 * @param {?proto.CloudProject.Project|undefined} value
 * @return {!proto.CloudProject.ProjectRequest} returns this
*/
proto.CloudProject.ProjectRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.ProjectRequest} returns this
 */
proto.CloudProject.ProjectRequest.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.ProjectRequest.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string private_key = 3;
 * @return {string}
 */
proto.CloudProject.ProjectRequest.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.ProjectRequest} returns this
 */
proto.CloudProject.ProjectRequest.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string access_token = 4;
 * @return {string}
 */
proto.CloudProject.ProjectRequest.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.ProjectRequest} returns this
 */
proto.CloudProject.ProjectRequest.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CloudProject.ProjectResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CloudProject.ProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudProject.ProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudProject.ProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.ProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.CloudProject.Project.toObject(includeInstance, f),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.CloudProject.Project.toObject, includeInstance),
    accessToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CloudProject.ProjectResponse}
 */
proto.CloudProject.ProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudProject.ProjectResponse;
  return proto.CloudProject.ProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudProject.ProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudProject.ProjectResponse}
 */
proto.CloudProject.ProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.CloudProject.Project;
      reader.readMessage(value,proto.CloudProject.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = new proto.CloudProject.Project;
      reader.readMessage(value,proto.CloudProject.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CloudProject.ProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudProject.ProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudProject.ProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudProject.ProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.CloudProject.Project.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.CloudProject.Project.serializeBinaryToWriter
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.CloudProject.Project}
 */
proto.CloudProject.ProjectResponse.prototype.getProject = function() {
  return /** @type{?proto.CloudProject.Project} */ (
    jspb.Message.getWrapperField(this, proto.CloudProject.Project, 1));
};


/**
 * @param {?proto.CloudProject.Project|undefined} value
 * @return {!proto.CloudProject.ProjectResponse} returns this
*/
proto.CloudProject.ProjectResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudProject.ProjectResponse} returns this
 */
proto.CloudProject.ProjectResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudProject.ProjectResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.CloudProject.Project>}
 */
proto.CloudProject.ProjectResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.CloudProject.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CloudProject.Project, 2));
};


/**
 * @param {!Array<!proto.CloudProject.Project>} value
 * @return {!proto.CloudProject.ProjectResponse} returns this
*/
proto.CloudProject.ProjectResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.CloudProject.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CloudProject.Project}
 */
proto.CloudProject.ProjectResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.CloudProject.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CloudProject.ProjectResponse} returns this
 */
proto.CloudProject.ProjectResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional string access_token = 3;
 * @return {string}
 */
proto.CloudProject.ProjectResponse.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudProject.ProjectResponse} returns this
 */
proto.CloudProject.ProjectResponse.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.CloudProject);
