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
proto.CloudProject.CloudServiceClient =
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
proto.CloudProject.CloudServicePromiseClient =
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
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_CloudService_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_CloudService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GetOrganization = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GetOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetOrganization,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GetUserOrganizations = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GetUserOrganizations',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.getUserOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserOrganizations,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.getUserOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_UpdateOrganization = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/UpdateOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateOrganization,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_CreateProject = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/CreateProject',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateProject,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_RollPrivateKey = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/RollPrivateKey',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.rollPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RollPrivateKey,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.rollPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_CloudService_RollPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_ValidateAccessToken = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/ValidateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.validateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidateAccessToken,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.validateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/ValidateAccessToken',
      request,
      metadata || {},
      methodDescriptor_CloudService_ValidateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_UpdateProject = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/UpdateProject',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateProject,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.updateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_UpdateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GetProject = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GetProject',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GetProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProject,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GetProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GetUserProjects = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GetUserProjects',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.getUserProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserProjects,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.getUserProjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetUserProjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_GetProjectsInOrganization = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/GetProjectsInOrganization',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.getProjectsInOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProjectsInOrganization,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.getProjectsInOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_CloudService_GetProjectsInOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudProject.CloudRequest,
 *   !proto.CloudProject.CloudResponse>}
 */
const methodDescriptor_CloudService_DeleteProject = new grpc.web.MethodDescriptor(
  '/CloudProject.CloudService/DeleteProject',
  grpc.web.MethodType.UNARY,
  proto.CloudProject.CloudRequest,
  proto.CloudProject.CloudResponse,
  /**
   * @param {!proto.CloudProject.CloudRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudProject.CloudResponse.deserializeBinary
);


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudProject.CloudResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudProject.CloudResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudProject.CloudServiceClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudProject.CloudService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeleteProject,
      callback);
};


/**
 * @param {!proto.CloudProject.CloudRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudProject.CloudResponse>}
 *     Promise that resolves to the response
 */
proto.CloudProject.CloudServicePromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudProject.CloudService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_CloudService_DeleteProject);
};


module.exports = proto.CloudProject;

