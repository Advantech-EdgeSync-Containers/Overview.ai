module.exports = {
  flowFile: 'flows.json',
  userDir: '/data/',
  nodesDir: '/data/nodes/',

  // Security
  adminAuth: {
    type: 'credentials',
    users: [
      {
        username: 'admin',
        password: '$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.',
        permissions: '*',
      },
    ],
  },

  // HTTP settings
  httpAdminRoot: '/admin',
  httpNodeRoot: '/api',

  // Logging
  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false,
    },
  },

  // Export global context
  exportGlobalContextKeys: false,

  // Context storage
  contextStorage: {
    default: {
      module: 'localfilesystem',
    },
  },

  // Function global context
  functionGlobalContext: {
    // os:require('os'),
  },
};
