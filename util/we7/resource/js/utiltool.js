import util from '@/util/we7/resource/js/util.js';
var utiltool = {};
//开发者模式 打印日志
utiltool.debug = true;

/**
 * 二次封装的log函数
 */
utiltool.mayiwoLog = function(info, title = '') {
	if (!this.debug) {
		return false;
	}
	var pages = getCurrentPages() //获取加载的页面
	var currentPage = pages.route; //获取当前页面的对象
	var url = pages.route //当前页面url
	var t = "当前页面【" + url + "】";
	if (title != "") {
		t += "[" + title + "]";
	}
	console.log(t);
	console.log(info);
},

/**
 * 时间戳转日期格式
 */
utiltool.form_timefunction = function(a) {
	var myDate = new Date(parseInt(a) * 1000);
	var datestr = "";
	datestr = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	datestr = datestr + "-" + ((myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)); //获取当前月份(0-11,0代表1月)
	datestr = datestr + "-" + (myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()); //获取当前日(1-31)
	return datestr;
},
/**
 * 时间戳转短日期格式
 */
utiltool.form_time_shortdata_function = function(a) {
	var myDate = new Date(parseInt(a) * 1000);
	var datestr = "";
	datestr = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	datestr = ((myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)); //获取当前月份(0-11,0代表1月
	datestr = datestr + "-" + (myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()); //获取当前日(1-31)
	datestr = datestr + " " + (myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()); //获取当前时
	datestr = datestr + ":" + (myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes()); //获取当前分
	return datestr;
},

/**
 * 解析url参数
 */
utiltool.getQuery = function(url) {
	var theRequest = [];
	if (url.indexOf("?") != -1) {
		var str = url.split('?')[1];
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			if (strs[i].split("=")[0] && unescape(strs[i].split("=")[1])) {
				theRequest[i] = {
					'name': strs[i].split("=")[0],
					'value': unescape(strs[i].split("=")[1])
				}
			}
		}
	}
	return theRequest;
}

/**
 * 二次封装的获取用户授权信息
 * cb 回调函数，接收请求结果的
 */
utiltool.getUserInfo = function(data, cb) {
	var that = this;
	util.getUserInfo(function(res) {
		//系统通用会员信息
		that.mayiwoLog(wx.getStorageSync("userInfo"), "系统通用会员信息");
		var newdata = new Object(); //res.memberInfo;
		newdata.from_id = 0;
		//如果存在推荐人的
		if (data.from_id) {
			that.mayiwoLog(data.from_id, "存在推荐人会员UID");
			newdata.from_id = data.from_id;
		} else {
			that.mayiwoLog(data.from_id, "不存在推荐人会员UID");
		}
		var api = "wxapi";
		newdata.model = "member";
		newdata.apiname = "member_info";
		that.mayiwoPost(api, newdata, function(res) {
			//存储的模块内真实的会员信息
			wx.setStorageSync("memberInfo", res.result.data);
			that.mayiwoLog(wx.getStorageSync("memberInfo"), "模块内真实会员信息");
			typeof cb == "function" && cb(res.result.data);
		});
	});
};
/**
 * 封装按钮获取用户信息同步到微擎用户粉丝
 * e 点击的按钮对象
 * cb 回调函数，接收处理结果
 */
utiltool.getUserInfoForButton = function(e, cb) {
	var that = this;
	//拿到用户数据时，通过app.util.getUserinfo将加密串传递给服务端
	//服务端会解密，并保存用户数据，生成sessionid返回
	util.getUserInfo(function(userInfo) {
		//这回userInfo为用户信息
		that.mayiwoLog(userInfo);
		typeof cb == "function" && cb(userInfo);
	}, e.detail);
},
/**
 * 二次封装的post ajax函数
 * api 需要请求的接口名称，对应到函数名
 * data post请求传递的参数
 * cb 回调函数，接收请求结果的
 */
utiltool.mayiwoPost = function(api, data, cb) {
	var that = this;
	data.m = "haojk_myw";
	that.mayiwoLog(data.apiname + ":" + utiltool.dateFormat("yyyy-MM-dd hh:mm:ss.S") + "开始请求接口");
	util.request({
		url: 'entry/wxapp/' + api,
		showLoading: false,
		data: data,
		method: 'post',
		success: function(res) {
			//只回调请求的结果
			var loginfo = {
				"POST API": api,
				"POST 参数": data,
				"POST 结果": res.data
			}
			that.mayiwoLog(loginfo);
			that.mayiwoLog(data.apiname + ":" + utiltool.dateFormat("yyyy-MM-dd hh:mm:ss.S") + "结束请求接口");
			typeof cb == "function" && cb(res.data);
		}
	});
},
utiltool.dateFormat = function(fmt) { // author: meizz
	var date = new Date();
	var o = {
		"M+": date.getMonth() + 1, // 月份
		"d+": date.getDate(), // 日
		"h+": date.getHours(), // 小时
		"m+": date.getMinutes(), // 分
		"s+": date.getSeconds(), // 秒
		"q+": Math.floor((date.getMonth() + 3) / 3), // 季度
		"S": date.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}

/**
 * 封装需要用户身份信息的接口请求
 * 如商品列表，需要计算约补约赚
 * data 查询商品时需要的参数
 * cb 回调函数，处理相应数据
 */
utiltool.getGoodList = function(data, cb) {
	var that = this;
	data.m = "haojk_myw";
	data.model = "apicloud";
	data.apiname = "api_listall";
	var api = "wxapi";
	var userInfo = wx.getStorageSync('userInfo') || {};
	if (true) {
		that.mayiwoPost(api, data, function(res) {
			//处理响应数据后在回调出去，计算显示补贴后
			var goodlist = res.result;
			//回调给调用的页面函数，直接展现到页面即可
			typeof cb == "function" && cb(res.result);
		});
	} else {
		//重新取用户信息后在查询商品列表
		that.getUserInfo(function() {
			that.getGoodList(data, cb);
		});
	}
},
module.exports = utiltool;
