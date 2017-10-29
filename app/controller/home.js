'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const data = {title:'嘻嘻嘻嘻'};
      yield this.ctx.render('index.tpl',data)
    }
  }
  return HomeController;
};
