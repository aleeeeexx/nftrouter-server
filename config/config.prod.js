/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
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
  config.keys = appInfo.name + '_1584231361040_3227';

  config.multipart = {
    mode: 'file',
    whitelist: () => true,
  };
  config.UPLOAD_DIR = path.resolve(__dirname, '..', 'app/public');
  // add your middleware config here
  config.middleware = [];

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
        url: 'mongodb://mongo:27017/alexnft',
        options: {},
      },
    },
    jwt: {
      secret: ':alex@nft!@123',
    },
  };
};
