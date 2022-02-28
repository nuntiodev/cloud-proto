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
goog.exportSymbol('proto.CloudApi.Request', null, global);
goog.exportSymbol('proto.CloudApi.Response', null, global);
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
proto.CloudApi.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudApi.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudApi.Request.displayName = 'proto.CloudApi.Request';
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
proto.CloudApi.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CloudApi.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CloudApi.Response.displayName = 'proto.CloudApi.Response';
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
    apikey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userrequest: (f = msg.getUserrequest()) && block$proto_block_user_pb.UserRequest.toObject(includeInstance, f),
    networkrequest: (f = msg.getNetworkrequest()) && block$proto_block_network_pb.NetworkRequest.toObject(includeInstance, f)
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
      msg.setApikey(value);
      break;
    case 2:
      var value = new block$proto_block_user_pb.UserRequest;
      reader.readMessage(value,block$proto_block_user_pb.UserRequest.deserializeBinaryFromReader);
      msg.setUserrequest(value);
      break;
    case 3:
      var value = new block$proto_block_network_pb.NetworkRequest;
      reader.readMessage(value,block$proto_block_network_pb.NetworkRequest.deserializeBinaryFromReader);
      msg.setNetworkrequest(value);
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
  f = message.getApikey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserrequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block$proto_block_user_pb.UserRequest.serializeBinaryToWriter
    );
  }
  f = message.getNetworkrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      block$proto_block_network_pb.NetworkRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string apiKey = 1;
 * @return {string}
 */
proto.CloudApi.ApiRequest.prototype.getApikey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.setApikey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BlockUser.UserRequest userRequest = 2;
 * @return {?proto.BlockUser.UserRequest}
 */
proto.CloudApi.ApiRequest.prototype.getUserrequest = function() {
  return /** @type{?proto.BlockUser.UserRequest} */ (
    jspb.Message.getWrapperField(this, block$proto_block_user_pb.UserRequest, 2));
};


/**
 * @param {?proto.BlockUser.UserRequest|undefined} value
 * @return {!proto.CloudApi.ApiRequest} returns this
*/
proto.CloudApi.ApiRequest.prototype.setUserrequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.clearUserrequest = function() {
  return this.setUserrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiRequest.prototype.hasUserrequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BlockNetwork.NetworkRequest networkRequest = 3;
 * @return {?proto.BlockNetwork.NetworkRequest}
 */
proto.CloudApi.ApiRequest.prototype.getNetworkrequest = function() {
  return /** @type{?proto.BlockNetwork.NetworkRequest} */ (
    jspb.Message.getWrapperField(this, block$proto_block_network_pb.NetworkRequest, 3));
};


/**
 * @param {?proto.BlockNetwork.NetworkRequest|undefined} value
 * @return {!proto.CloudApi.ApiRequest} returns this
*/
proto.CloudApi.ApiRequest.prototype.setNetworkrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiRequest} returns this
 */
proto.CloudApi.ApiRequest.prototype.clearNetworkrequest = function() {
  return this.setNetworkrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiRequest.prototype.hasNetworkrequest = function() {
  return jspb.Message.getField(this, 3) != null;
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
    userresponse: (f = msg.getUserresponse()) && block$proto_block_user_pb.UserResponse.toObject(includeInstance, f),
    networkresponse: (f = msg.getNetworkresponse()) && block$proto_block_network_pb.NetworkResponse.toObject(includeInstance, f)
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
      var value = new block$proto_block_user_pb.UserResponse;
      reader.readMessage(value,block$proto_block_user_pb.UserResponse.deserializeBinaryFromReader);
      msg.setUserresponse(value);
      break;
    case 2:
      var value = new block$proto_block_network_pb.NetworkResponse;
      reader.readMessage(value,block$proto_block_network_pb.NetworkResponse.deserializeBinaryFromReader);
      msg.setNetworkresponse(value);
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
  f = message.getUserresponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      block$proto_block_user_pb.UserResponse.serializeBinaryToWriter
    );
  }
  f = message.getNetworkresponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      block$proto_block_network_pb.NetworkResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockUser.UserResponse userResponse = 1;
 * @return {?proto.BlockUser.UserResponse}
 */
proto.CloudApi.ApiResponse.prototype.getUserresponse = function() {
  return /** @type{?proto.BlockUser.UserResponse} */ (
    jspb.Message.getWrapperField(this, block$proto_block_user_pb.UserResponse, 1));
};


/**
 * @param {?proto.BlockUser.UserResponse|undefined} value
 * @return {!proto.CloudApi.ApiResponse} returns this
*/
proto.CloudApi.ApiResponse.prototype.setUserresponse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiResponse} returns this
 */
proto.CloudApi.ApiResponse.prototype.clearUserresponse = function() {
  return this.setUserresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiResponse.prototype.hasUserresponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockNetwork.NetworkResponse networkResponse = 2;
 * @return {?proto.BlockNetwork.NetworkResponse}
 */
proto.CloudApi.ApiResponse.prototype.getNetworkresponse = function() {
  return /** @type{?proto.BlockNetwork.NetworkResponse} */ (
    jspb.Message.getWrapperField(this, block$proto_block_network_pb.NetworkResponse, 2));
};


/**
 * @param {?proto.BlockNetwork.NetworkResponse|undefined} value
 * @return {!proto.CloudApi.ApiResponse} returns this
*/
proto.CloudApi.ApiResponse.prototype.setNetworkresponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CloudApi.ApiResponse} returns this
 */
proto.CloudApi.ApiResponse.prototype.clearNetworkresponse = function() {
  return this.setNetworkresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CloudApi.ApiResponse.prototype.hasNetworkresponse = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.CloudApi.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudApi.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudApi.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.Request.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.CloudApi.Request}
 */
proto.CloudApi.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudApi.Request;
  return proto.CloudApi.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudApi.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudApi.Request}
 */
proto.CloudApi.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.CloudApi.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudApi.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudApi.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.CloudApi.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.CloudApi.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CloudApi.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.CloudApi.Response}
 */
proto.CloudApi.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CloudApi.Response;
  return proto.CloudApi.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CloudApi.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CloudApi.Response}
 */
proto.CloudApi.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.CloudApi.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CloudApi.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CloudApi.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CloudApi.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.CloudApi.Response.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CloudApi.Response} returns this
 */
proto.CloudApi.Response.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.CloudApi);
