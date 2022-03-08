// source: cloud_api.proto
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
var block$proto_block_user_pb = require('./block-proto/block_user_pb.js');
goog.object.extend(proto, block$proto_block_user_pb);
var block$proto_block_network_pb = require('./block-proto/block_network_pb.js');
goog.object.extend(proto, block$proto_block_network_pb);
goog.exportSymbol('proto.CloudApi.ApiRequest', null, global);
goog.exportSymbol('proto.CloudApi.ApiResponse', null, global);
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
proto.CloudApi.ApiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudApi.ApiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudApi.ApiRequest.displayName = 'proto.CloudApi.ApiRequest';
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
proto.CloudApi.ApiResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudApi.ApiResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudApi.ApiResponse.displayName = 'proto.CloudApi.ApiResponse';
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
proto.CloudApi.ApiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudApi.ApiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudApi.ApiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.ApiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    privateKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userRequest: (f = msg.getUserRequest()) && block$proto_block_user_pb.UserRequest.toObject(includeInstance, f),
    networkRequest: (f = msg.getNetworkRequest()) && block$proto_block_network_pb.NetworkRequest.toObject(includeInstance, f)
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
 * @return {!proto.CloudApi.ApiRequest}
 */
proto.CloudApi.ApiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudApi.ApiRequest;
  return proto.CloudApi.ApiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudApi.ApiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudApi.ApiRequest}
 */
proto.CloudApi.ApiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 3:
      var value = new block$proto_block_user_pb.UserRequest;
      reader.readMessage(value,block$proto_block_user_pb.UserRequest.deserializeBinaryFromReader);
      msg.setUserRequest(value);
      break;
    case 4:
      var value = new block$proto_block_network_pb.NetworkRequest;
      reader.readMessage(value,block$proto_block_network_pb.NetworkRequest.deserializeBinaryFromReader);
      msg.setNetworkRequest(value);
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
proto.CloudApi.ApiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudApi.ApiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudApi.ApiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.ApiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      block$proto_block_user_pb.UserRequest.serializeBinaryToWriter
    );
  }
  f = message.getNetworkRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      block$proto_block_network_pb.NetworkRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string private_key = 1;
 * @return {string}
 */
proto.CloudApi.ApiRequest.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string auth_token = 2;
 * @return {string}
 */
proto.CloudApi.ApiRequest.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.setAuthToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BlockUser.UserRequest user_request = 3;
 * @return {?proto.BlockUser.UserRequest}
 */
proto.CloudApi.ApiRequest.prototype.getUserRequest = function() {
  return /** @type{?proto.BlockUser.UserRequest} */ (
    jspb.Message.getWrapperField(this, block$proto_block_user_pb.UserRequest, 3));
};


/**
 * @param {?proto.BlockUser.UserRequest|undefined} value
 * @return {!proto.CloudApi.ApiRequest} returns this
*/
proto.CloudApi.ApiRequest.prototype.setUserRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.clearUserRequest = function() {
  return this.setUserRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiRequest.prototype.hasUserRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BlockNetwork.NetworkRequest network_request = 4;
 * @return {?proto.BlockNetwork.NetworkRequest}
 */
proto.CloudApi.ApiRequest.prototype.getNetworkRequest = function() {
  return /** @type{?proto.BlockNetwork.NetworkRequest} */ (
    jspb.Message.getWrapperField(this, block$proto_block_network_pb.NetworkRequest, 4));
};


/**
 * @param {?proto.BlockNetwork.NetworkRequest|undefined} value
 * @return {!proto.CloudApi.ApiRequest} returns this
*/
proto.CloudApi.ApiRequest.prototype.setNetworkRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.clearNetworkRequest = function() {
  return this.setNetworkRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiRequest.prototype.hasNetworkRequest = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.CloudApi.ApiResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudApi.ApiResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudApi.ApiResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.ApiResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    authToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userResponse: (f = msg.getUserResponse()) && block$proto_block_user_pb.UserResponse.toObject(includeInstance, f),
    networkResponse: (f = msg.getNetworkResponse()) && block$proto_block_network_pb.NetworkResponse.toObject(includeInstance, f)
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
 * @return {!proto.CloudApi.ApiResponse}
 */
proto.CloudApi.ApiResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudApi.ApiResponse;
  return proto.CloudApi.ApiResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudApi.ApiResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudApi.ApiResponse}
 */
proto.CloudApi.ApiResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 2:
      var value = new block$proto_block_user_pb.UserResponse;
      reader.readMessage(value,block$proto_block_user_pb.UserResponse.deserializeBinaryFromReader);
      msg.setUserResponse(value);
      break;
    case 3:
      var value = new block$proto_block_network_pb.NetworkResponse;
      reader.readMessage(value,block$proto_block_network_pb.NetworkResponse.deserializeBinaryFromReader);
      msg.setNetworkResponse(value);
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
proto.CloudApi.ApiResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudApi.ApiResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudApi.ApiResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.ApiResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block$proto_block_user_pb.UserResponse.serializeBinaryToWriter
    );
  }
  f = message.getNetworkResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      block$proto_block_network_pb.NetworkResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string auth_token = 1;
 * @return {string}
 */
proto.CloudApi.ApiResponse.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudApi.ApiResponse} returns this
 */
proto.CloudApi.ApiResponse.prototype.setAuthToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BlockUser.UserResponse user_response = 2;
 * @return {?proto.BlockUser.UserResponse}
 */
proto.CloudApi.ApiResponse.prototype.getUserResponse = function() {
  return /** @type{?proto.BlockUser.UserResponse} */ (
    jspb.Message.getWrapperField(this, block$proto_block_user_pb.UserResponse, 2));
};


/**
 * @param {?proto.BlockUser.UserResponse|undefined} value
 * @return {!proto.CloudApi.ApiResponse} returns this
*/
proto.CloudApi.ApiResponse.prototype.setUserResponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiResponse} returns this
 */
proto.CloudApi.ApiResponse.prototype.clearUserResponse = function() {
  return this.setUserResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiResponse.prototype.hasUserResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BlockNetwork.NetworkResponse network_response = 3;
 * @return {?proto.BlockNetwork.NetworkResponse}
 */
proto.CloudApi.ApiResponse.prototype.getNetworkResponse = function() {
  return /** @type{?proto.BlockNetwork.NetworkResponse} */ (
    jspb.Message.getWrapperField(this, block$proto_block_network_pb.NetworkResponse, 3));
};


/**
 * @param {?proto.BlockNetwork.NetworkResponse|undefined} value
 * @return {!proto.CloudApi.ApiResponse} returns this
*/
proto.CloudApi.ApiResponse.prototype.setNetworkResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiResponse} returns this
 */
proto.CloudApi.ApiResponse.prototype.clearNetworkResponse = function() {
  return this.setNetworkResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiResponse.prototype.hasNetworkResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.CloudApi);