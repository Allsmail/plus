var cityObj,
	hotCityobj,
	strList = '',//城市列表
	strLetter = '',//首字母列表
	hotStrcity = '',
	cityLen,
	first_city;
first_city = $('.scity>p').html();
var dataid = $('.scity>p').attr('dataid');

$('.tit>span').html(first_city).attr('dataid',dataid);
var data = {'sys':$('#sys').val()}
// $.ajax({
//     type: "POST",
//     url: '/api/citylist',
//     dataType: "json",
//     data:data,
//     async:false,
//     cache:false,
//     success: function (json) {	//初始请求接口一次;数据缓存到cityObj;
//        cityObj = json.data.citylist;
//        hotCityobj = json.data.hotcitylist;
//        if(!cityObj) return;
//     }
// })
var json = {"data":{"citylist":{"A":[{"奥门":{"id":"193","name":"安庆市","letter":"A","first_letters":"AQS","citycode":"130","pinyin":"anqingshi"}},{"安庆市":{"id":"193","name":"安庆市","letter":"A","first_letters":"AQS","citycode":"130","pinyin":"anqingshi"}},{"鞍山市":{"id":"109","name":"鞍山市","letter":"A","first_letters":"ASS","citycode":"320","pinyin":"anshanshi"}}],"B":[{"北京市":{"id":"1","name":"北京市","letter":"B","first_letters":"BJS","citycode":"131","pinyin":"beijingshi"}},{"蚌埠市":{"id":"188","name":"蚌埠市","letter":"B","first_letters":"BBS","citycode":"126","pinyin":"bangbushi"}}],"C":[{"常州市":{"id":"165","name":"常州市","letter":"C","first_letters":"CZS","citycode":"348","pinyin":"changzhoushi"}},{"长沙市":{"id":"275","name":"长沙市","letter":"C","first_letters":"CSS","citycode":"158","pinyin":"changshashi"}},{"长春市":{"id":"121","name":"长春市","letter":"C","first_letters":"CCS","citycode":"53","pinyin":"changchunshi"}},{"沧州市":{"id":"83","name":"沧州市","letter":"C","first_letters":"CZS","citycode":"149","pinyin":"cangzhoushi"}},{"重庆市":{"id":"22","name":"重庆市","letter":"C","first_letters":"CQS","citycode":"132","pinyin":"chongqingshi"}},{"成都市":{"id":"385","name":"成都市","letter":"C","first_letters":"CDS","citycode":"75","pinyin":"chengdushi"}}],"D":[{"丹东市":{"id":"112","name":"丹东市","letter":"D","first_letters":"DDS","citycode":"282","pinyin":"dandongshi"}},{"大同市":{"id":"85","name":"大同市","letter":"D","first_letters":"DTS","citycode":"355","pinyin":"datongshi"}},{"德阳市":{"id":"389","name":"德阳市","letter":"D","first_letters":"DYS","citycode":"74","pinyin":"deyangshi"}},{"大连市":{"id":"108","name":"大连市","letter":"D","first_letters":"DLS","citycode":"167","pinyin":"dalianshi"}}],"F":[{"福州市":{"id":"203","name":"福州市","letter":"F","first_letters":"FZS","citycode":"300","pinyin":"fuzhoushi"}},{"佛山市":{"id":"294","name":"佛山市","letter":"F","first_letters":"FSS","citycode":"138","pinyin":"foshanshi"}}],"G":[{"广州市":{"id":"289","name":"广州市","letter":"G","first_letters":"GZS","citycode":"257","pinyin":"guangzhoushi"}},{"贵阳市":{"id":"406","name":"贵阳市","letter":"G","first_letters":"GYS","citycode":"146","pinyin":"guiyangshi"}}],"H":[{"韩国":{"id":"556","name":"韩国","letter":"H","first_letters":"HG","citycode":"1556","pinyin":"hanguo"}},{"海口市":{"id":"324","name":"海口市","letter":"H","first_letters":"HKS","citycode":"125","pinyin":"haikoushi"}},{"合肥市":{"id":"186","name":"合肥市","letter":"H","first_letters":"HFS","citycode":"127","pinyin":"hefeishi"}},{"杭州市":{"id":"175","name":"杭州市","letter":"H","first_letters":"HZS","citycode":"179","pinyin":"hangzhoushi"}},{"哈尔滨市":{"id":"130","name":"哈尔滨市","letter":"H","first_letters":"HEBS","citycode":"48","pinyin":"haerbinshi"}},{"呼和浩特市":{"id":"95","name":"呼和浩特市","letter":"H","first_letters":"HHHTS","citycode":"321","pinyin":"huhehaoteshi"}}],"J":[{"济南市":{"id":"223","name":"济南市","letter":"J","first_letters":"JNS","citycode":"288","pinyin":"jinanshi"}},{"焦作市":{"id":"247","name":"焦作市","letter":"J","first_letters":"JZS","citycode":"211","pinyin":"jiaozuoshi"}},{"晋城市":{"id":"88","name":"晋城市","letter":"J","first_letters":"JCS","citycode":"290","pinyin":"jinchengshi"}},{"金华市":{"id":"183","name":"金华市","letter":"J","first_letters":"JHS","citycode":"333","pinyin":"jinhuashi"}},{"嘉兴市":{"id":"178","name":"嘉兴市","letter":"J","first_letters":"JXS","citycode":"334","pinyin":"jiaxingshi"}}],"K":[{"昆明市":{"id":"415","name":"昆明市","letter":"K","first_letters":"KMS","citycode":"104","pinyin":"kunmingshi"}}],"L":[{"临沂市":{"id":"235","name":"临沂市","letter":"L","first_letters":"LYS","citycode":"234","pinyin":"linyishi"}},{"兰州市":{"id":"448","name":"兰州市","letter":"L","first_letters":"LZS","citycode":"36","pinyin":"lanzhoushi"}}],"N":[{"南充市":{"id":"395","name":"南充市","letter":"N","first_letters":"NCS","citycode":"291","pinyin":"nanchongshi"}},{"南昌市":{"id":"212","name":"南昌市","letter":"N","first_letters":"NCS","citycode":"163","pinyin":"nanchangshi"}},{"宁波市":{"id":"176","name":"宁波市","letter":"N","first_letters":"NBS","citycode":"180","pinyin":"ningboshi"}},{"南通市":{"id":"167","name":"南通市","letter":"N","first_letters":"NTS","citycode":"161","pinyin":"nantongshi"}},{"南宁市":{"id":"310","name":"南宁市","letter":"N","first_letters":"NNS","citycode":"261","pinyin":"nanningshi"}},{"南京市":{"id":"162","name":"南京市","letter":"N","first_letters":"NJS","citycode":"315","pinyin":"nanjingshi"}}],"P":[{"濮阳市":{"id":"248","name":"濮阳市","letter":"P","first_letters":"YS","citycode":"209","pinyin":"yangshi"}}],"Q":[{"青岛市":{"id":"224","name":"青岛市","letter":"Q","first_letters":"QDS","citycode":"236","pinyin":"qingdaoshi"}},{"曲靖市":{"id":"416","name":"曲靖市","letter":"Q","first_letters":"QJS","citycode":"249","pinyin":"qujingshi"}},{"潜江市":{"id":"272","name":"潜江市","letter":"Q","first_letters":"QJS","citycode":"1293","pinyin":"qianjiangshi"}}],"S":[{"上海市":{"id":"9","name":"上海市","letter":"S","first_letters":"SHS","citycode":"289","pinyin":"shanghaishi"}},{"三亚市":{"id":"325","name":"三亚市","letter":"S","first_letters":"SYS","citycode":"121","pinyin":"sanyashi"}},{"深圳市":{"id":"291","name":"深圳市","letter":"S","first_letters":"SZS","citycode":"340","pinyin":"shenzhenshi"}},{"绍兴市":{"id":"180","name":"绍兴市","letter":"S","first_letters":"SXS","citycode":"293","pinyin":"shaoxingshi"}},{"遂宁市":{"id":"392","name":"遂宁市","letter":"S","first_letters":"SNS","citycode":"330","pinyin":"suiningshi"}},{"沈阳市":{"id":"107","name":"沈阳市","letter":"S","first_letters":"SYS","citycode":"58","pinyin":"shenyangshi"}},{"苏州市":{"id":"166","name":"苏州市","letter":"S","first_letters":"SZS","citycode":"224","pinyin":"suzhoushi"}},{"石家庄市":{"id":"73","name":"石家庄市","letter":"S","first_letters":"SJZS","citycode":"150","pinyin":"shijiazhuangshi"}}],"T":[{"太原市":{"id":"84","name":"太原市","letter":"T","first_letters":"TYS","citycode":"176","pinyin":"taiyuanshi"}},{"天津市":{"id":"2","name":"天津市","letter":"T","first_letters":"TJS","citycode":"332","pinyin":"tianjinshi"}},{"唐山市":{"id":"74","name":"唐山市","letter":"T","first_letters":"TSS","citycode":"265","pinyin":"tangshanshi"}},{"台湾省":{"id":"32","name":"台湾省","letter":"T","first_letters":"TWS","citycode":"0","pinyin":"taiwansheng"}}],"W":[{"无锡市":{"id":"163","name":"无锡市","letter":"W","first_letters":"WXS","citycode":"317","pinyin":"wuxishi"}},{"乌鲁木齐市":{"id":"475","name":"乌鲁木齐市","letter":"W","first_letters":"WLMQS","citycode":"92","pinyin":"wulumuqishi"}},{"芜湖市":{"id":"187","name":"芜湖市","letter":"W","first_letters":"WHS","citycode":"129","pinyin":"wuhushi"}},{"潍坊市":{"id":"229","name":"潍坊市","letter":"W","first_letters":"WFS","citycode":"287","pinyin":"weifangshi"}},{"温州市":{"id":"177","name":"温州市","letter":"W","first_letters":"WZS","citycode":"178","pinyin":"wenzhoushi"}},{"武汉市":{"id":"258","name":"武汉市","letter":"W","first_letters":"WHS","citycode":"218","pinyin":"wuhanshi"}}],"X":[{"西安市":{"id":"438","name":"西安市","letter":"X","first_letters":"XAS","citycode":"233","pinyin":"xianshi"}},{"西宁市":{"id":"462","name":"西宁市","letter":"X","first_letters":"XNS","citycode":"66","pinyin":"xiningshi"}},{"厦门市":{"id":"204","name":"厦门市","letter":"X","first_letters":"XMS","citycode":"194","pinyin":"xiamenshi"}}],"Y":[{"宜昌市":{"id":"261","name":"宜昌市","letter":"Y","first_letters":"YCS","citycode":"270","pinyin":"yichangshi"}},{"烟台市":{"id":"228","name":"烟台市","letter":"Y","first_letters":"YTS","citycode":"326","pinyin":"yantaishi"}},{"扬州市":{"id":"171","name":"扬州市","letter":"Y","first_letters":"YZS","citycode":"346","pinyin":"yangzhoushi"}}],"Z":[{"郑州市":{"id":"240","name":"郑州市","letter":"Z","first_letters":"ZZS","citycode":"268","pinyin":"zhengzhoushi"}},{"中山市":{"id":"306","name":"中山市","letter":"Z","first_letters":"ZSS","citycode":"187","pinyin":"zhongshanshi"}},{"淄博市":{"id":"225","name":"淄博市","letter":"Z","first_letters":"ZBS","citycode":"354","pinyin":"ziboshi"}}]},"hotcitylist":[{"id":"1","name":"北京市","letter":"B","first_letters":"BJS","pinyin":"beijingshi"},{"id":"22","name":"重庆市","letter":"C","first_letters":"CQS","pinyin":"chongqingshi"},{"id":"385","name":"成都市","letter":"C","first_letters":"CDS","pinyin":"chengdushi"},{"id":"289","name":"广州市","letter":"G","first_letters":"GZS","pinyin":"guangzhoushi"},{"id":"175","name":"杭州市","letter":"H","first_letters":"HZS","pinyin":"hangzhoushi"},{"id":"223","name":"济南市","letter":"J","first_letters":"JNS","pinyin":"jinanshi"},{"id":"224","name":"青岛市","letter":"Q","first_letters":"QDS","pinyin":"qingdaoshi"},{"id":"9","name":"上海市","letter":"S","first_letters":"SHS","pinyin":"shanghaishi"},{"id":"291","name":"深圳市","letter":"S","first_letters":"SZS","pinyin":"shenzhenshi"}]},"status":"Y","msg":"成功","href":null}
cityObj = json.data.citylist;
hotCityobj = json.data.hotcitylist;
//取cookie
function getCookie(name){
    name += '=';
	var cookies = (document.cookie || '').split(';'),
		cookie,
		nameLength = name.length,
		i = cookies.length;
	while(i--){
		cookie = cookies[i].replace(/^\s+/,'');
		if(cookie.slice(0,nameLength)===name){
			return decodeURIComponent(cookie.slice(nameLength)).replace(/\s+$/,'');
		}
	}
	return '';
}

//存cookie
 function setCookie(name,value,hours,path,domain,secure){
      var cdata = name + "=" + value;
      if(hours){
          var d = new Date();
          d.setHours(d.getHours() + hours);
          cdata += "; expires=" + d.toGMTString();
      }
      cdata +=path ? ("; path=" + path) : "" ;
      cdata +=domain ? ("; domain=" + domain) : "" ;
      cdata +=secure ? ("; secure=" + secure) : "" ;
      document.cookie = cdata;
}

//取url值
function GetQueryString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}

$.each(hotCityobj,function(h,l){
	hotStrcity+='<span data-id='+l.id+' class="cityName">'+l.name.substr(0,2)+'</span>'
})

//取数据
console.log(cityObj)
$.each(cityObj,function(x,i){
	for(j in i[0]){
		cityLen = j;//取每个首字母的第一个城市
	}

	$.each(i,function(z,v){

		$.each(v,function(m,k){
			console.log(m)
			if(cityLen == m){//如果相等 增加分割线
				strList+='<span class="letterL">'+k.letter+'</span><p><span data-id='+k.id+' class="cityName">'+m+'</span></p>';
			}else{
				strList+='<p><span data-id='+k.id+' class="cityName">'+m+'</span></p>';
			}
		})
	})
	if(x === 'A'){
		strLetter+='<span class="hot">热门</span><span class="letter">'+x+'</span>';
	}else{
		strLetter+='<span class="letter">'+x+'</span>';
	}

})
$('.hotCitylist').append(hotStrcity)
$('.cs').append(strList);
$('.sx').append(strLetter);//城市列表以及首字母列表渲染到页面上

//$('.letterL').prev().children().css("border","none")

$('.letter').css("height",(($(window).height()-87)/23));

function cityArr(val){//输入框搜索内容以及首字母点选内容比对数组返回对应结果
	var resultCity,resultCity2;

	for (i in cityObj) {
		 if(val === i){
		 	resultCity = cityObj[i];//首字母点选返回值以及输入框首字母返回值
		 }

		for(x in cityObj[i]){
			console.log(cityObj[i][x])
			for(k in cityObj[i][x]){

				if(val === cityObj[i][x][k].first_letters.substr(0,2) || val === cityObj[i][x][k].first_letters){
					resultCity += JSON.stringify(cityObj[i][x][k])+'+';	//输入框城市首字母缩略全拼返回值
		 		}
		 		if(val === cityObj[i][x][k].name.substr(0,1) || val === cityObj[i][x][k].name.substr(0,2) || val === cityObj[i][x][k].name){
					resultCity += JSON.stringify(cityObj[i][x][k])+'+';	//输入框城市首字母缩略全拼返回值
		 		}
			}

		}
	};
	return resultCity;
}

$('.letter').on('click',function(){//右侧首字母点选操作
	var arrClass = $(this).html().toUpperCase();
	var reCity = cityArr(arrClass);

	var span = $('.cs').find('span'),kss=[];

	for(x in reCity){
		for(k in reCity[x]){
			kss.push(k);
		}
	}

	for (var i = 0; i<span.length;i++) {

		if(span[i].innerHTML==kss[0]){//返回值如果与
			window.scroll(0,i*44)
		}
	};

});
$('.hot').on('click',function(){
	window.scroll(0,0)
})

$('.cityName').on('click',function(){
	var city = $(this).html(),
		cityId = $(this).attr("data-id");
	$('.tit>span').html(city)
	//setCookie("cityId",encodeURIComponent(cityId),24 * 30);
	//setCookie("cityName",encodeURIComponent(city),24 * 30);
	$('.loading').show();

	window.location.replace('/wxmall/yuehui?ewsid='+EWSID + '&district_id=' + cityId + '&fx=' + FX);
})

$('.tit>span').on('click',function(){
	var city = $(this).html(),
		cityId = $(this).attr("dataid");
	//setCookie("cityId",encodeURIComponent(cityId),24 * 30);
	//setCookie("cityName",encodeURIComponent(city),24 * 30);
	$('.loading').show();
	window.location.replace('/wxmall/yuehui?ewsid='+EWSID + '&fx=' + FX);
})


var cityModel = '';//缓存城市信息
$("#search").on("focus",function(e){

	$('.seachBig').hide();
	$("#search").on("keyup",function(e){
		if($('#search').val()==''){
			$('.noCity').hide();
		}
	$('.seachCity').show();
		var val = $('#search').val().toUpperCase(),
			reCity = cityArr(val),
			str = '';
		console.log(reCity)
		function reFor(){

			if(typeof reCity === "object"){

				for (i in reCity) {
					for(x in reCity[i]){
						str += '<p><span data-id='+reCity[i][x].id+' class="cityName">'+x+'</span></p>';
					}
				};
			}else{

				 var reCity2 = reCity.split("undefined")[1];
				 var reCity3 = reCity2.split("+");

				 for (var i = 0; i < reCity3.length-1; i++) {

				 	str += '<p><span data-id='+JSON.parse(reCity3[i]).id+'>'+JSON.parse(reCity3[i]).name+'</span></p>'
				 };

			}
		}
		(!!reCity) && reFor()


		//console.log(val+'::::'+cityModel)
		if(val==cityModel){
			return;
		}

		cityModel=$('#search').val();

		$('.seachCity').empty();

		if(str==''){
			$('.noCity').show();
			$('.seachCity').hide();
			$('.noCity').html('抱歉，没有找到相关城市');
		}else{
			$('.seachCity').show();
			$('.noCity').hide();
			$('.seachCity').append(str);
		}

		$('.seachCity span').on('click',function(){
			var city = $(this).html(),
				cityId = $(this).attr("data-id");
			$('.tit>span').html(city);
			$('.seachCity').hide();
			$("#search").val('');
			$('.seachBig').show();
			//setCookie("cityId",encodeURIComponent(cityId),24 * 30);
			//setCookie("cityName",encodeURIComponent(city),24 * 30);
			$('.loading').show();
			window.location.replace('/wxmall/yuehui?ewsid='+EWSID + '&district_id=' + cityId + '&fx=' + FX);			
			
		})
	})
})

$("#search").on("blur",function(e){
	if($('.noCity').html()==='抱歉，没有找到相关城市' && $('#search').val()==''){
		$('.noCity').hide();
		$('.seachBig').show();
		$('.seachCity').hide();
	}

	if($('#search').val()==''){
		$('.noCity').hide();
		$('.seachBig').show();
		$('.seachCity').hide();
	}
})
//选择城市
$('.scity').on('click',function(){
	if(!flag) return;
	$('.wrap').show();
	$('.wz_wrap').hide();
	$('.loading').hide();
	$('.tit>span').html($(this).find('p').html());
});
//选择项目
var flag = true;
$('.slist').on('click',function(){
    if(!flag_a) return;
	if(flag){
		$('.slist>span').css({"background":"url('/images/mobile/wz/arrow-top.png')no-repeat right","color":"#408781","background-size":"18%"})
		$('.scity>p').addClass('black');
		$('.list-box').hide();
		$('.hot-list').hide();
		$('.project').show();
		flag = false;
	}else{
		$('.slist>span').css({"background":"url('/images/mobile/wz/arrow-btm.png')no-repeat right","color":"#000","background-size":"18%"})
		$('.scity>p').removeClass('black');
		$('.list-box').show();
		$('.hot-list').show();
		$('.project').hide();
		flag = true;
	}
})
var flag_a = true;
$('.sec .turn').on('click',function(){
    if(!flag) return;
	if(flag_a){
		$('.turn>span').css({"background":"url('/images/mobile/wz/arrow-top.png')no-repeat right","color":"#408781","background-size":"18%"})
		$('.scity>p').addClass('black');
		$('.list-box,.project,.hot-list').hide();
		$('.turn_time_list').show();
		flag_a = false;
	}else{
		$('.turn>span').css({"background":"url('/images/mobile/wz/arrow-btm.png')no-repeat right","color":"#000","background-size":"18%"})
		$('.scity>p').removeClass('black');
		$('.list-box,.hot-list').show();
		$('.turn_time_list').hide();
		flag_a = true;
	}
})
//选择项目名称
$('.project p').on('click',function(event){
	event.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parent().hide();
	$('.slist>span').html($(this).html());
	$('#load_more').hide();
	proId = $(this).attr('project-id');
	//setCookie("projectId",encodeURIComponent(proId),24 * 30);
	flag = true;
	//点击项目事件
	window.location.replace($(this).attr('project-url'));
})
/*
$('.project').on('click',function(){
	$(this).hide();
	$('.list-box').show();
	$('.hot-list').show();
	$('.slist>span').css({"background":"url('/images/mobile/wz/arrow-btm.png')no-repeat right","color":"#000","background-size":"18%"})
	$('.scity>p').removeClass('black');
	flag = true;
})
*/
//图片延迟加载。项目太多，太卡
function imgPreload(){
	var elems = $('img[img-src]'), item, src, img, count = 0;
    setTimeout(function(){
    	for (var i=0; i < elems.length; i++) {
		    item = $(elems[i]),
		    src = item.attr('img-src'),
		    img = new Image();

		    img.onload = img.onerror = img.onabord = function() {
		        if (++count >= 3) {
					//$('.load4').hide();
		        }
		    }
	      	item.attr('src', src);
	      	img.src = src;

	    }
    },100)
}
imgPreload();


