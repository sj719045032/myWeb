'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '啦啦啦啦啦啦啦啦啦啦啦啦啦啦';
    }
  }
  return HomeController;
};
