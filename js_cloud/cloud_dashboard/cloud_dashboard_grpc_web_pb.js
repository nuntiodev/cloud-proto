/**
 * @fileoverview gRPC-Web generated client stub for CloudDashboard
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
proto.CloudDashboard = require('./cloud_dashboard_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudDashboard.AdminServiceClient =
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
proto.CloudDashboard.AdminServicePromiseClient =
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
 *   !proto.CloudDashboard.Request,
 *   !proto.CloudDashboard.Response>}
 */
const methodDescriptor_AdminService_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudDashboard.AdminService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudDashboard.Request,
  proto.CloudDashboard.Response,
  /**
   * @param {!proto.CloudDashboard.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudDashboard.Response.deserializeBinary
);


/**
 * @param {!proto.CloudDashboard.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudDashboard.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudDashboard.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudDashboard.AdminServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudDashboard.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudDashboard.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudDashboard.Response>}
 *     Promise that resolves to the response
 */
proto.CloudDashboard.AdminServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudDashboard.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudDashboard.OrganizationRequest,
 *   !proto.CloudDashboard.OrganizationResponse>}
 */
const methodDescriptor_AdminService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/CloudDashboard.AdminService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudDashboard.OrganizationRequest,
  proto.CloudDashboard.OrganizationResponse,
  /**
   * @param {!proto.CloudDashboard.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudDashboard.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.CloudDashboard.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudDashboard.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudDashboard.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudDashboard.AdminServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudDashboard.AdminService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.CloudDashboard.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudDashboard.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.CloudDashboard.AdminServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudDashboard.AdminService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudDashboard.OrganizationRequest,
 *   !proto.CloudDashboard.OrganizationResponse>}
 */
const methodDescriptor_AdminService_GetOrganization = new grpc.web.MethodDescriptor(
  '/CloudDashboard.AdminService/GetOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudDashboard.OrganizationRequest,
  proto.CloudDashboard.OrganizationResponse,
  /**
   * @param {!proto.CloudDashboard.OrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudDashboard.OrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.CloudDashboard.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudDashboard.OrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudDashboard.OrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudDashboard.AdminServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudDashboard.AdminService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetOrganization,
      callback);
};


/**
 * @param {!proto.CloudDashboard.OrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudDashboard.OrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.CloudDashboard.AdminServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudDashboard.AdminService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudDashboard.ProjectRequest,
 *   !proto.CloudDashboard.ProjectResponse>}
 */
const methodDescriptor_AdminService_CreateProject = new grpc.web.MethodDescriptor(
  '/CloudDashboard.AdminService/CreateProject',
  grpc.web.MethodType.UNARY,
  proto.CloudDashboard.ProjectRequest,
  proto.CloudDashboard.ProjectResponse,
  /**
   * @param {!proto.CloudDashboard.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudDashboard.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudDashboard.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudDashboard.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudDashboard.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudDashboard.AdminServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudDashboard.AdminService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateProject,
      callback);
};


/**
 * @param {!proto.CloudDashboard.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudDashboard.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudDashboard.AdminServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudDashboard.AdminService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudDashboard.ProjectRequest,
 *   !proto.CloudDashboard.ProjectResponse>}
 */
const methodDescriptor_AdminService_GetProject = new grpc.web.MethodDescriptor(
  '/CloudDashboard.AdminService/GetProject',
  grpc.web.MethodType.UNARY,
  proto.CloudDashboard.ProjectRequest,
  proto.CloudDashboard.ProjectResponse,
  /**
   * @param {!proto.CloudDashboard.ProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudDashboard.ProjectResponse.deserializeBinary
);


/**
 * @param {!proto.CloudDashboard.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudDashboard.ProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudDashboard.ProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudDashboard.AdminServiceClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudDashboard.AdminService/GetProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProject,
      callback);
};


/**
 * @param {!proto.CloudDashboard.ProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudDashboard.ProjectResponse>}
 *     Promise that resolves to the response
 */
proto.CloudDashboard.AdminServicePromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudDashboard.AdminService/GetProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProject);
};


module.exports = proto.CloudDashboard;

