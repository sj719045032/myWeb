'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '呵呵哒';
    }
  }
  return HomeController;
};
