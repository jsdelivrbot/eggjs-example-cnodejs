const Controller = require('egg').Controller;

class TopicsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const topicsList = await ctx.service.topics.list();
    await this.ctx.render('topics/list.tpl', {list:topicsList});
  }
}

module.exports = TopicsController;