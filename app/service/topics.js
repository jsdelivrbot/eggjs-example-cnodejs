const Service = require('egg').Service;

class TopicsService extends Service {
    async list() {
        // read config
        const { baseUrl } = this.config.topics;
        console.log(baseUrl,'===============')
        // use build-in http client to GET cnodejs.org api
        const { data: {data:topics} } = await this.ctx.curl(`${baseUrl}/topics`,{
            dataType: 'json'
        });

        topics.forEach(item=>item.url = `${baseUrl}/topic/${item.id}`)

        return topics;
    }
    async detail(id){

        console.log('id========',id);
        const {baseUrl} = this.config.topics;

        // const data = await this.ctx.curl(`${baseUrl}/topic/${id}`,{
        //     dataType:'json'
        // });

        // console.log('data========',data);

        const {data:{data:detail}} = await this.ctx.curl(`${baseUrl}/topic/${id}`,{
            dataType:'json'
        });

        return detail;
    }
}

module.exports = TopicsService;