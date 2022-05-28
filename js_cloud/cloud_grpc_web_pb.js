/**
 * @fileoverview gRPC-Web generated client stub for CloudProject
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
proto.CloudProject = require('./cloud_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudProject.ProjectServiceClient =
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
proto.CloudProject.ProjectServicePromiseClient =
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
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_Create = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/Create',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/Create',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Create,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/Create',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_RollPrivateKey = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/RollPrivateKey',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.rollPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_ProjectService_RollPrivateKey,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.rollPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_ProjectService_RollPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_ValidateAccessToken = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/ValidateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.validateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_ProjectService_ValidateAccessToken,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.validateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_ProjectService_ValidateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_Update = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/Update',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/Update',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Update,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/Update',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_Get = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/Get',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/Get',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Get,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/Get',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_GetByOwner = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/GetByOwner',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.getByOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetByOwner,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.getByOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetByOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_ProjectService_Delete = new grpc.web.MethodDescriptor(
  '/CloudProject.ProjectService/Delete',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.ProjectRequest,
  proto.CloudProject.ProjectResponse,
  /**
   * @param {!proto.CloudProject.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ProjectServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.ProjectService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Delete,
      callback);
};


/**
 * @param {!proto.CloudProject.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ProjectServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.ProjectService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProjectService_Delete);
};


module.exports = proto.CloudProject;

