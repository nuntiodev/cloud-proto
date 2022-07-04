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
proto.Cloud.AdminClient =
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
proto.Cloud.AdminPromiseClient =
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
const methodDescriptor_Admin_Heartbeat = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/Heartbeat',
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
proto.Cloud.AdminClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Admin_Heartbeat,
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
proto.Cloud.AdminPromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Admin_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_CreateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/CreateOrganization',
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
proto.Cloud.AdminClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateOrganization,
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
proto.Cloud.AdminPromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetOrganization',
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
proto.Cloud.AdminClient.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_GetOrganization,
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
proto.Cloud.AdminPromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetUserOrganizations = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetUserOrganizations',
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
proto.Cloud.AdminClient.prototype.getUserOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_Admin_GetUserOrganizations,
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
proto.Cloud.AdminPromiseClient.prototype.getUserOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetUserOrganizations',
      request,
      metadata || {},
      methodDescriptor_Admin_GetUserOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_UpdateOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/UpdateOrganization',
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
proto.Cloud.AdminClient.prototype.updateOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateOrganization,
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
proto.Cloud.AdminPromiseClient.prototype.updateOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/UpdateOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_CreateProject = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/CreateProject',
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
proto.Cloud.AdminClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/CreateProject',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateProject,
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
proto.Cloud.AdminPromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/CreateProject',
      request,
      metadata || {},
      methodDescriptor_Admin_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_RollPrivateKey = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/RollPrivateKey',
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
proto.Cloud.AdminClient.prototype.rollPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_Admin_RollPrivateKey,
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
proto.Cloud.AdminPromiseClient.prototype.rollPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/RollPrivateKey',
      request,
      metadata || {},
      methodDescriptor_Admin_RollPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_UpdateProject = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/UpdateProject',
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
proto.Cloud.AdminClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateProject,
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
proto.Cloud.AdminPromiseClient.prototype.updateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/UpdateProject',
      request,
      metadata || {},
      methodDescriptor_Admin_UpdateProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetProject = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetProject',
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
proto.Cloud.AdminClient.prototype.getProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetProject',
      request,
      metadata || {},
      methodDescriptor_Admin_GetProject,
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
proto.Cloud.AdminPromiseClient.prototype.getProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetProject',
      request,
      metadata || {},
      methodDescriptor_Admin_GetProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_InitializeCloud = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/InitializeCloud',
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
proto.Cloud.AdminClient.prototype.initializeCloud =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/InitializeCloud',
      request,
      metadata || {},
      methodDescriptor_Admin_InitializeCloud,
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
proto.Cloud.AdminPromiseClient.prototype.initializeCloud =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/InitializeCloud',
      request,
      metadata || {},
      methodDescriptor_Admin_InitializeCloud);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetProjectsInOrganization = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetProjectsInOrganization',
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
proto.Cloud.AdminClient.prototype.getProjectsInOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_GetProjectsInOrganization,
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
proto.Cloud.AdminPromiseClient.prototype.getProjectsInOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetProjectsInOrganization',
      request,
      metadata || {},
      methodDescriptor_Admin_GetProjectsInOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_DeleteProject = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/DeleteProject',
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
proto.Cloud.AdminClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_Admin_DeleteProject,
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
proto.Cloud.AdminPromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/DeleteProject',
      request,
      metadata || {},
      methodDescriptor_Admin_DeleteProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetPartner = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetPartner',
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
proto.Cloud.AdminClient.prototype.getPartner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetPartner',
      request,
      metadata || {},
      methodDescriptor_Admin_GetPartner,
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
proto.Cloud.AdminPromiseClient.prototype.getPartner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetPartner',
      request,
      metadata || {},
      methodDescriptor_Admin_GetPartner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Admin_GetPartners = new grpc.web.MethodDescriptor(
  '/Cloud.Admin/GetPartners',
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
proto.Cloud.AdminClient.prototype.getPartners =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Admin/GetPartners',
      request,
      metadata || {},
      methodDescriptor_Admin_GetPartners,
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
proto.Cloud.AdminPromiseClient.prototype.getPartners =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Admin/GetPartners',
      request,
      metadata || {},
      methodDescriptor_Admin_GetPartners);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Cloud.PublicClient =
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
proto.Cloud.PublicPromiseClient =
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
const methodDescriptor_Public_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/Cloud.Public/GenerateAccessToken',
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
proto.Cloud.PublicClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Public/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_Public_GenerateAccessToken,
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
proto.Cloud.PublicPromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Public/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_Public_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Public_ValidateAccess = new grpc.web.MethodDescriptor(
  '/Cloud.Public/ValidateAccess',
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
proto.Cloud.PublicClient.prototype.validateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Public/ValidateAccess',
      request,
      metadata || {},
      methodDescriptor_Public_ValidateAccess,
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
proto.Cloud.PublicPromiseClient.prototype.validateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Public/ValidateAccess',
      request,
      metadata || {},
      methodDescriptor_Public_ValidateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Cloud.CloudRequest,
 *   !proto.Cloud.CloudResponse>}
 */
const methodDescriptor_Public_PublicKeys = new grpc.web.MethodDescriptor(
  '/Cloud.Public/PublicKeys',
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
proto.Cloud.PublicClient.prototype.publicKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cloud.Public/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_Public_PublicKeys,
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
proto.Cloud.PublicPromiseClient.prototype.publicKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cloud.Public/PublicKeys',
      request,
      metadata || {},
      methodDescriptor_Public_PublicKeys);
};


module.exports = proto.Cloud;

