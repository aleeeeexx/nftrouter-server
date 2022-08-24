// 定制规范

const { Controller } = require('egg');
class BaseController extends Controller {
  success(result) {
    this.ctx.body = {
      code: 0,
      result,
    };
  }
  message(message) {
    this.ctx.body = {
      code: 0,
      message,
    };
  }
  error(message, code = -1, errors = {}) {
    this.ctx.body = {
      code,
      message,
      errors,
    };
  }
}

module.exports = BaseController;
