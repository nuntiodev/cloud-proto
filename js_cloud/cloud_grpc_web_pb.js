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
const methodDescriptor_CloudService_GetPrivateKeys = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetPrivateKeys',
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
proto.Cloud.CloudServiceClient.prototype.getPrivateKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetPrivateKeys',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPrivateKeys,
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
proto.Cloud.CloudServicePromiseClient.prototype.getPrivateKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetPrivateKeys',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPrivateKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_CreatePrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/CreatePrivateKey',
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
proto.Cloud.CloudServiceClient.prototype.createPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/CreatePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreatePrivateKey,
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
proto.Cloud.CloudServicePromiseClient.prototype.createPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/CreatePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreatePrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_DeletePrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/DeletePrivateKey',
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
proto.Cloud.CloudServiceClient.prototype.deletePrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/DeletePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeletePrivateKey,
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
proto.Cloud.CloudServicePromiseClient.prototype.deletePrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/DeletePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeletePrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_ValidatePrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/ValidatePrivateKey',
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
proto.Cloud.CloudServiceClient.prototype.validatePrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/ValidatePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidatePrivateKey,
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
proto.Cloud.CloudServicePromiseClient.prototype.validatePrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/ValidatePrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidatePrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.OrganizationRequest,
 *   !proto.Cloud.OrganizationResponse>}
 */
const methodDescriptor_CloudService_Update = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Update',
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
proto.Cloud.CloudServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/Update',
      request,
      metadata || {},
      methodDescriptor_CloudService_Update,
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
proto.Cloud.CloudServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/Update',
      request,
      metadata || {},
      methodDescriptor_CloudService_Update);
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


module.exports = proto.Cloud;

