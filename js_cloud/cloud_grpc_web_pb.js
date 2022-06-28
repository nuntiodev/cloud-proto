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
proto.Cloud.AdminServiceClient =
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
proto.Cloud.AdminServicePromiseClient =
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
const methodDescriptor_AdminService_Heartbeat = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/Heartbeat',
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
proto.Cloud.AdminServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat,
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
proto.Cloud.AdminServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/CreateOrganization',
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
proto.Cloud.AdminServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateOrganization,
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
proto.Cloud.AdminServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GetOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GetOrganization',
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
proto.Cloud.AdminServiceClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetOrganization,
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
proto.Cloud.AdminServicePromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GetUserOrganizations = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GetUserOrganizations',
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
proto.Cloud.AdminServiceClient.prototype.getUserOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetUserOrganizations,
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
proto.Cloud.AdminServicePromiseClient.prototype.getUserOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetUserOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_UpdateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/UpdateOrganization',
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
proto.Cloud.AdminServiceClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateOrganization,
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
proto.Cloud.AdminServicePromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_CreateProject = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/CreateProject',
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
proto.Cloud.AdminServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateProject,
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
proto.Cloud.AdminServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_RollPrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/RollPrivateKey',
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
proto.Cloud.AdminServiceClient.prototype.rollPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_AdminService_RollPrivateKey,
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
proto.Cloud.AdminServicePromiseClient.prototype.rollPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_AdminService_RollPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GenerateAccessToken',
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
proto.Cloud.AdminServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_AdminService_GenerateAccessToken,
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
proto.Cloud.AdminServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_AdminService_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_UpdateProject = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/UpdateProject',
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
proto.Cloud.AdminServiceClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateProject,
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
proto.Cloud.AdminServicePromiseClient.prototype.updateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GetProject = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GetProject',
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
proto.Cloud.AdminServiceClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GetProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProject,
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
proto.Cloud.AdminServicePromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GetProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GetUserProjects = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GetUserProjects',
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
proto.Cloud.AdminServiceClient.prototype.getUserProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetUserProjects,
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
proto.Cloud.AdminServicePromiseClient.prototype.getUserProjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GetUserProjects',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetUserProjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_GetProjectsInOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/GetProjectsInOrganization',
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
proto.Cloud.AdminServiceClient.prototype.getProjectsInOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProjectsInOrganization,
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
proto.Cloud.AdminServicePromiseClient.prototype.getProjectsInOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetProjectsInOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_AdminService_DeleteProject = new grpc.web.MethodDescriptor(
  '/Cloud.AdminService/DeleteProject',
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
proto.Cloud.AdminServiceClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.AdminService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_DeleteProject,
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
proto.Cloud.AdminServicePromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.AdminService/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_AdminService_DeleteProject);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Cloud.PublicServiceClient =
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
proto.Cloud.PublicServicePromiseClient =
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
const methodDescriptor_PublicService_PublicKeys = new grpc.web.MethodDescriptor(
  '/Cloud.PublicService/PublicKeys',
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
proto.Cloud.PublicServiceClient.prototype.publicKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.PublicService/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_PublicService_PublicKeys,
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
proto.Cloud.PublicServicePromiseClient.prototype.publicKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.PublicService/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_PublicService_PublicKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_PublicService_GetMembers = new grpc.web.MethodDescriptor(
  '/Cloud.PublicService/GetMembers',
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
proto.Cloud.PublicServiceClient.prototype.getMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.PublicService/GetMembers',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetMembers,
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
proto.Cloud.PublicServicePromiseClient.prototype.getMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.PublicService/GetMembers',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_PublicService_GetPartner = new grpc.web.MethodDescriptor(
  '/Cloud.PublicService/GetPartner',
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
proto.Cloud.PublicServiceClient.prototype.getPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.PublicService/GetPartner',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetPartner,
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
proto.Cloud.PublicServicePromiseClient.prototype.getPartner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.PublicService/GetPartner',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetPartner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_PublicService_GetPartners = new grpc.web.MethodDescriptor(
  '/Cloud.PublicService/GetPartners',
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
proto.Cloud.PublicServiceClient.prototype.getPartners =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.PublicService/GetPartners',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetPartners,
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
proto.Cloud.PublicServicePromiseClient.prototype.getPartners =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.PublicService/GetPartners',
      request,
      metadata || {},
      methodDescriptor_PublicService_GetPartners);
};


module.exports = proto.Cloud;

