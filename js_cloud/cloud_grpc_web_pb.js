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
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_Heartbeat = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
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
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
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
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetOrganization',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetOrganization,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetUserOrganizations = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetUserOrganizations',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getUserOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserOrganizations,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getUserOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_UpdateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/UpdateOrganization',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateOrganization,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_CreateProject = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/CreateProject',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateProject,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_RollPrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/RollPrivateKey',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.rollPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RollPrivateKey,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.rollPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RollPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
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
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
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
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_PublicKeys = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/PublicKeys',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.publicKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_CloudService_PublicKeys,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.publicKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_CloudService_PublicKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_UpdateProject = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/UpdateProject',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateProject,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.updateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetProject = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetProject',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProject,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetUserProjects = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetUserProjects',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getUserProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserProjects,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getUserProjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserProjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetProjectsInOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetProjectsInOrganization',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getProjectsInOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProjectsInOrganization,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getProjectsInOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProjectsInOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_DeleteProject = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/DeleteProject',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeleteProject,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeleteProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_CreatePartner = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/CreatePartner',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.createPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/CreatePartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreatePartner,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.createPartner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/CreatePartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreatePartner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetPartner = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetPartner',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetPartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPartner,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getPartner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetPartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPartner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_GetPartners = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/GetPartners',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.getPartners =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/GetPartners',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPartners,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.getPartners =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/GetPartners',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetPartners);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_CloudService_DeletePartner = new grpc.web.MethodDescriptor(
  '/Cloud.CloudService/DeletePartner',
  grpc.web.MethodType.UNARY,
  proto.Cloud.CloudRequest,
  proto.Cloud.CloudResponse,
  /**
   * @param {!proto.Cloud.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Cloud.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Cloud.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Cloud.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Cloud.CloudServiceClient.prototype.deletePartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.CloudService/DeletePartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeletePartner,
      callback);
};


/**
 * @param {!proto.Cloud.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Cloud.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.Cloud.CloudServicePromiseClient.prototype.deletePartner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.CloudService/DeletePartner',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeletePartner);
};


module.exports = proto.Cloud;

