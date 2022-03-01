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
proto.CloudProject = require('./cloud_project_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudProject.ServiceClient =
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
proto.CloudProject.ServicePromiseClient =
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
 *   !proto.CloudProject.Request,
 *   !proto.CloudProject.Response>}
 */
const methodDescriptor_Service_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.Request,
  proto.CloudProject.Response,
  /**
   * @param {!proto.CloudProject.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.Response.deserializeBinary
);


/**
 * @param {!proto.CloudProject.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.ServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudProject.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.Response>}
 *     Promise that resolves to the response
 */
proto.CloudProject.ServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_Create = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/Create',
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
proto.CloudProject.ServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create,
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
proto.CloudProject.ServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_RollApiKey = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/RollApiKey',
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
proto.CloudProject.ServiceClient.prototype.rollApiKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/RollApiKey',
      request,
      metadata || {},
      methodDescriptor_Service_RollApiKey,
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
proto.CloudProject.ServicePromiseClient.prototype.rollApiKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/RollApiKey',
      request,
      metadata || {},
      methodDescriptor_Service_RollApiKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_GenerateAuthToken = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/GenerateAuthToken',
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
proto.CloudProject.ServiceClient.prototype.generateAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/GenerateAuthToken',
      request,
      metadata || {},
      methodDescriptor_Service_GenerateAuthToken,
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
proto.CloudProject.ServicePromiseClient.prototype.generateAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/GenerateAuthToken',
      request,
      metadata || {},
      methodDescriptor_Service_GenerateAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_ValidateAuthToken = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/ValidateAuthToken',
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
proto.CloudProject.ServiceClient.prototype.validateAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/ValidateAuthToken',
      request,
      metadata || {},
      methodDescriptor_Service_ValidateAuthToken,
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
proto.CloudProject.ServicePromiseClient.prototype.validateAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/ValidateAuthToken',
      request,
      metadata || {},
      methodDescriptor_Service_ValidateAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_UpdateInfo = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/UpdateInfo',
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
proto.CloudProject.ServiceClient.prototype.updateInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/UpdateInfo',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateInfo,
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
proto.CloudProject.ServicePromiseClient.prototype.updateInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/UpdateInfo',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_Get = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/Get',
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
proto.CloudProject.ServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get,
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
proto.CloudProject.ServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_GetByOwner = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/GetByOwner',
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
proto.CloudProject.ServiceClient.prototype.getByOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_Service_GetByOwner,
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
proto.CloudProject.ServicePromiseClient.prototype.getByOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/GetByOwner',
      request,
      metadata || {},
      methodDescriptor_Service_GetByOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.ProjectRequest,
 *   !proto.CloudProject.ProjectResponse>}
 */
const methodDescriptor_Service_Delete = new grpc.web.MethodDescriptor(
  '/CloudProject.Service/Delete',
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
proto.CloudProject.ServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete,
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
proto.CloudProject.ServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete);
};


module.exports = proto.CloudProject;

