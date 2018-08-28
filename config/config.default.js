exports.keys = "cookies"
// 添加 view 配置
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
};

exports.topics = {
	baseUrl:'https://cnodejs.org/api/v1'
}

exports.middleware = [
	'robot'
]

exports.robot = {
	ua:[
		/Baiduspider/i
	]
}