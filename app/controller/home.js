'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '真棒';
    }
  }
  return HomeController;
};
