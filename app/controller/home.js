'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi,jihong！切可闹';
    }
  }
  return HomeController;
};
