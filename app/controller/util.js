'use strict';

const Controller = require('egg').Controller;
class utilController extends Controller {
  async captcha() {
    const { ctx } = this;
    ctx.body = 'hi, captcha';
  }
}

module.exports = utilController;
