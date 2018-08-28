const Controller = require('egg').Controller;

class TopicsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const topicsList = await ctx.service.topics.list();
    await this.ctx.render('topics/list.tpl', {list:topicsList});
  }
  async detail(){
    const ctx = this.ctx;
    const topicsId = ctx.params.id;
    const detail = await ctx.service.topics.detail(topicsId);
    await this.ctx.render('topics/detail.tpl',{detail:detail});
  }
}

module.exports = TopicsController;