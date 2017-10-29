'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '嘻嘻嘻嘻';
    }
  }
  return HomeController;
};
