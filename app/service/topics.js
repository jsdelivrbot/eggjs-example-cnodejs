const Service = require('egg').Service;

class TopicsService extends Service {
    async list() {
        // read config
        const { topicsUrl } = this.config.topics;
        console.log(topicsUrl,'===============')
        // use build-in http client to GET cnodejs.org api
        const { data: {data:topics} } = await this.ctx.curl(`${topicsUrl}/topics`,{
            dataType: 'json'
        });

        topics.forEach(item=>item.url = `${topicsUrl}/topic/${item.id}`)

        return topics
    }
}

module.exports = TopicsService;