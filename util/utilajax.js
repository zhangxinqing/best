var unirequest=function(url,data,callback){
	console.log("发送请求:"+url);
	console.log(JSON.stringify(data));
	uni.request({
	    url: url,
	    data: data,
		dataType:'json',
		method:data.method?data.method:'POST',
	    header: {},
	    success: (res) => {
			console.log("请求成功");
	        console.log(res.data);
	        callback(res);
	    },
		fail:(res)=>{
			console.log("请求失败");
			console.log(JSON.stringify(res));
		},
		complete:(res)=>{
			console.log("请求完成");
			console.log(JSON.stringify(res));
		}
	});
}
var geoUtil={
	/**
	 * 百度地图坐标转换地址
	 * @param {Object} lng
	 * @param {Object} lat
	 * @param {Object} callback
	 */
	getaddressBd:function(lng,lat,callback){
		let url="http://api.map.baidu.com/reverse_geocoding/v3/";
		let data=new Object();
		data.ak='KIiEl8rS7lg9b0zuEIjZh3g9YZxi9De3';
		data.output='json';
		data.coordtype='bd09ll';
		data.location=lat+","+lng;
		data.method='GET';
		unirequest(url,data,callback);
	
	
	}
}

module.exports = {
	unirequest: unirequest,
	geoUtil: geoUtil
}