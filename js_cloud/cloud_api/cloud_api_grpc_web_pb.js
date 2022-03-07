/**
 * @fileoverview gRPC-Web generated client stub for CloudApi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var block$proto_block_user_pb = require('./block-proto/block_user_pb.js')

var block$proto_block_network_pb = require('./block-proto/block_network_pb.js')
const proto = {};
proto.CloudApi = require('./cloud_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudApi.AccessServiceClient =
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
proto.CloudApi.AccessServicePromiseClient =
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
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_AccessService_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudApi.AccessService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.AccessServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.AccessService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AccessService_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.AccessServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.AccessService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AccessService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_AccessService_GenerateAuthToken = new grpc.web.MethodDescriptor(
  '/CloudApi.AccessService/GenerateAuthToken',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.AccessServiceClient.prototype.generateAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.AccessService/GenerateAuthToken',
      request,
      metadata || {},
      methodDescriptor_AccessService_GenerateAuthToken,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.AccessServicePromiseClient.prototype.generateAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.AccessService/GenerateAuthToken',
      request,
      metadata || {},
      methodDescriptor_AccessService_GenerateAuthToken);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudApi.UserServiceClient =
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
proto.CloudApi.UserServicePromiseClient =
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
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_Heartbeat = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_UserService_Heartbeat,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_UserService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdatePassword = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdatePassword',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdateMetadata = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdateMetadata',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updateMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdateMetadata',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateMetadata,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updateMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdateMetadata',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdateImage = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdateImage',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updateImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdateImage',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateImage,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updateImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdateImage',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdateEmail = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdateEmail',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updateEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateEmail,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updateEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdateOptionalId = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdateOptionalId',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updateOptionalId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdateOptionalId',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateOptionalId,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updateOptionalId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdateOptionalId',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateOptionalId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_UpdateSecurity = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/UpdateSecurity',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.updateSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/UpdateSecurity',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateSecurity,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.updateSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/UpdateSecurity',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_Get = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/Get',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_GetAll = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/GetAll',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAll,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/GetAll',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_ValidateCredentials = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/ValidateCredentials',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.validateCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_UserService_ValidateCredentials,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.validateCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_UserService_ValidateCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/Delete',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_UserService_DeleteNamespace = new grpc.web.MethodDescriptor(
  '/CloudApi.UserService/DeleteNamespace',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.UserServiceClient.prototype.deleteNamespace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.UserService/DeleteNamespace',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteNamespace,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.UserServicePromiseClient.prototype.deleteNamespace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.UserService/DeleteNamespace',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteNamespace);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CloudApi.NetworkServiceClient =
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
proto.CloudApi.NetworkServicePromiseClient =
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
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_NetworkService_Invite = new grpc.web.MethodDescriptor(
  '/CloudApi.NetworkService/Invite',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.NetworkServiceClient.prototype.invite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.NetworkService/Invite',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Invite,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.NetworkServicePromiseClient.prototype.invite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.NetworkService/Invite',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Invite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_NetworkService_Accept = new grpc.web.MethodDescriptor(
  '/CloudApi.NetworkService/Accept',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.NetworkServiceClient.prototype.accept =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.NetworkService/Accept',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Accept,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.NetworkServicePromiseClient.prototype.accept =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.NetworkService/Accept',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Accept);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_NetworkService_GetConnections = new grpc.web.MethodDescriptor(
  '/CloudApi.NetworkService/GetConnections',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.NetworkServiceClient.prototype.getConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.NetworkService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_NetworkService_GetConnections,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.NetworkServicePromiseClient.prototype.getConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.NetworkService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_NetworkService_GetConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CloudApi.ApiRequest,
 *   !proto.CloudApi.ApiResponse>}
 */
const methodDescriptor_NetworkService_Remove = new grpc.web.MethodDescriptor(
  '/CloudApi.NetworkService/Remove',
  grpc.web.MethodType.UNARY,
  proto.CloudApi.ApiRequest,
  proto.CloudApi.ApiResponse,
  /**
   * @param {!proto.CloudApi.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CloudApi.ApiResponse.deserializeBinary
);


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CloudApi.ApiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CloudApi.ApiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CloudApi.NetworkServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CloudApi.NetworkService/Remove',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Remove,
      callback);
};


/**
 * @param {!proto.CloudApi.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CloudApi.ApiResponse>}
 *     Promise that resolves to the response
 */
proto.CloudApi.NetworkServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CloudApi.NetworkService/Remove',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Remove);
};


module.exports = proto.CloudApi;

