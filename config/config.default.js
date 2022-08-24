/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1661156955088_7540';

  // add your middleware config here
  config.middleware = [];

  config.cors = {
    origin: 'http://localhost:8080',
    allowMethods: 'GET,POST,PUT,HEAD',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    security: {
      csrf: {
        enable: false,
      },
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/alexnft',
        options: {},
      },
    },
    jwt: {
      secret: ':alex@nft!@123',
    },
  };
};
