// 项目的中间件

let express = require('express');
let app = express();

app.all('*', function(req, res, next) {
	// 任何网址都可以访问
    res.header("Access-Control-Allow-Origin", "*");
    // 允许的请求方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // X-Requested-With，是普通请求，还是ajax请求
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/search',(req,res)=>{
	console.log( req.query.search_key );

	let _searchKey = req.query.search_key;

	// 临时商品，先把流程走通
	let _tempGoods = [{
		name:'好看的男装',
		price:99
	},{
		name:'美丽的女装',
		price:44
	},{
		name:'可爱的童装',
		price:55
	},{
		name:'干活的工作服',
		price:66
	}];

	// 过滤出结果
	let _filterGoods = _tempGoods.filter( n =>{
		return n.name.indexOf( _searchKey ) !== -1;
	});

	// 因为filter只返回结果为true的
	// 这里先写的简单一些，只返回一个结果
	let _resultObj = _filterGoods.length > 0
						? _filterGoods[0]
						: {msg:'没有找到结果'}

	res.send( _resultObj );
	// 本意，是要在这个中间件里去操作mysql的crud的，
	// 但是，现在我们还没有mysql，
	// 所以，我们在这里写一些假数据，
	// 用于模拟搜索过程，这只是一个思路，
	// 并不是真实生产开发环境中的搜索过程，

	// 因为真实的生产环境，它的后台的搜索功能，
	// 是由什么java、.net来负责的，
	// 咱们前端只负责传入参数，调用接口
});

app.listen(3344,()=>{
	console.log('高仿网易严选第二版，中间件，已经启动！')
});