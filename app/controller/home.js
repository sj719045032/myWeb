'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '哈哈，可以自动更新了！！！！！！';
    }
  }
  return HomeController;
};
