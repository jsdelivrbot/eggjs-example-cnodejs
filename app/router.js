module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/topics',controller.topics.list)
};