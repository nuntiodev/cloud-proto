/**
 * @fileoverview gRPC-Web generated client stub for Cloud
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.Cloud = require('./cloud_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Cloud.CloudServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Cloud.CloudServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_Heartbeat = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_CloudService_Heartbeat,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_CloudService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_Create = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Create',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/Create',
      request,
      metadata || {},
      methodDescriptor_CloudService_Create,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/Create',
      request,
      metadata || {},
      methodDescriptor_CloudService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_RemovePrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/RemovePrivateKey',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.removePrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/RemovePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RemovePrivateKey,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.removePrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/RemovePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RemovePrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_ValidateAccessToken = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/ValidateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.validateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidateAccessToken,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.validateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_UpdateInfo = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/UpdateInfo',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.updateInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/UpdateInfo',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateInfo,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.updateInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/UpdateInfo',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_Get = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Get',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/Get',
      request,
      metadata || {},
      methodDescriptor_CloudService_Get,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/Get',
      request,
      metadata || {},
      methodDescriptor_CloudService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_GetByOwner = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetByOwner',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getByOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetByOwner,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getByOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetByOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_Delete = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Delete',
  grpc.web.MethodType.UNARY,
  proto.Cloud.OrganizationRequest,
  proto.Cloud.OrganizationResponse,
  /**
   * @param {!proto.Cloud.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/Delete',
      request,
      metadata || {},
      methodDescriptor_CloudService_Delete,
      callback);
};


/**
 * @param {!proto.Cloud.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/Delete',
      request,
      metadata || {},
      methodDescriptor_CloudService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.AppRequest,
 *   !proto.Cloud.AppResponse>}
 */
const methodDescriptor_CloudService_AvailableApps = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/AvailableApps',
  grpc.web.MethodType.UNARY,
  proto.Cloud.AppRequest,
  proto.Cloud.AppResponse,
  /**
   * @param {!proto.Cloud.AppRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.AppResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.AppRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.AppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.AppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.availableApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/AvailableApps',
      request,
      metadata || {},
      methodDescriptor_CloudService_AvailableApps,
      callback);
};


/**
 * @param {!proto.Cloud.AppRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.AppResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.availableApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/AvailableApps',
      request,
      metadata || {},
      methodDescriptor_CloudService_AvailableApps);
};


module.exports = proto.Cloud;

