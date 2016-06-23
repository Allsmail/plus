({
	appDir:"../js",
	baseUrl:'./',//要压缩的文件夹
	dir:'./main',//输出目录
	modules:[    //将被优化的模块
		{
			name:"index"
		}
	],
	fileExclusionRegExp:/^(r|config)\.js$/,
	optimizeCss:"standard",   //压缩CSS
	removeCombined:true,
	paths:{     //模块目录
		jquery:'jquery',
		cj:"cj",
		demo:"demo",
		demo2:"demo2",
		index:"index"
	},
	shim:{
		index:{
			deps:[
				'jquery','cj'     
			]
		}
	}

})