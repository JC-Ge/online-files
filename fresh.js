var baseURL = "http://chain.ufile-inspur.ucloud.com.cn/fresh/"
var allOrgData = [{
	orgCode: "1234",
	topbg: baseURL + 'indexTop.png',
	orgLogo: baseURL + "dzxorg.jpg",
	orgName: "蟹状元大闸蟹股份有限公司",
	module: [{
			icon: baseURL + "qyzz.png",
			titlename: "企业资质",
			item: [
				baseURL + "dzxqyzz1.png",
				baseURL + "dzxqyzz2.png",
				baseURL + "dzxqyzz3.png",
				baseURL + "dzxqyzz4.png",
				baseURL + "dzxqyzz5.png"
			]
		},
		{
			icon: baseURL + "yzhgs.png",
			titlename: "养殖户故事",
			item: [
				baseURL + "dzxgs1.png",
				baseURL + "dzxgs2.png",
				baseURL + "dzxgs3.png",
				baseURL + "dzxgs4.png",
				baseURL + "dzxgs5.png",
				baseURL + "dzxgs6.png",
				baseURL + "dzxgs7.png",
				baseURL + "dzxgs8.png",
				baseURL + "dzxgs9.png",
				baseURL + "dzxgs10.png",
				baseURL + "dzxgs11.png",
				baseURL + "dzxgs12.png",
				baseURL + "dzxgs13.png",
				baseURL + "dzxgs14.png",
			]
		},
		{
			icon: baseURL + "szhj.png",
			titlename: "生长环境",
			item: [
				baseURL + "dzxszhj1.png",
				baseURL + "dzxszhj1.png",
			]
		},
		{
			icon: baseURL + "yzgc.png",
			titlename: "养殖过程",
			item: [
				baseURL + "dzxyz1.png",
				baseURL + "dzxyz2.png",
				baseURL + "dzxyz3.png",
				baseURL + "dzxyz4.png",
			]
		},
		{
			icon: baseURL + "hzqy.png",
			titlename: "合作企业",
			item: [{
					name: "苏州泉屋百货有限公司",
					logo: baseURL + "dzxszqw.png",
					desc: "苏州泉屋百货有限公司于2008年05月21日在苏州高新区（虎丘区）市场监督管理局登记成立。法定代表人四条晴也，公司经营范围包括批发、零售：预包装食品兼散装食品，乳制品（含婴幼儿配方乳粉）等。"
				},
				{
					name: "河南新康桥物业服务有限公司",
					logo: baseURL + "dzxhnkq.png",
					desc: "河南新康桥物业服务有限公司于2007年8月31日在郑州市工商行政管理局二七分局登记成立。法定代表人周巧红，公司经营范围包括物业经营与管理（凭资质证经营）；酒店管理等。"
				},
				{
					name: "浙江绿城物业园区生活服务有限公司",
					logo: baseURL + "dzxzjlc.png",
					desc: "浙江绿城物业园区生活服务有限公司于2009年04月22日在浙江省工商行政管理局登记成立。法定代表人陈浩，公司经营范围包括预包装食品、乳制品（不含婴幼儿配方乳粉）等。"
				},
			]
		},
	]
}, ]
function getSingleOrgData(orgCode){
	for(var i = 0;i < allOrgData.length;i++){
		if(allOrgData[i].orgCode == orgCode)
			return allOrgData[i];
	}
}


console.log(Vue);
console.log(getSingleOrgData('1234'));

module.exports = {
	allOrgData: allOrgData,
	getSingleOrgData:getSingleOrgData
}
