(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"08fd":function(e,t,n){"use strict";n.r(t);var r=n("7bb4"),u=n("7a35");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("cdbb");var a,i=n("f0c5"),s=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"0b7010c4",null,!1,r["a"],a);t["default"]=s.exports},"48e4":function(e,t,n){},"7a35":function(e,t,n){"use strict";n.r(t);var r=n("acd1"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=u.a},"7bb4":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"13c7"))}},u=function(){var e=this,t=e.$createElement;e._self._c},o=[]},a9d3:function(e,t,n){"use strict";(function(e){n("2804");r(n("66fd"));var t=r(n("08fd"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},acd1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,u,o,a){try{var i=e[o](a),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,u)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function i(e){o(a,r,u,i,s,"next",e)}function s(e){o(a,r,u,i,s,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("13c7"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{cross:"",ro:{username:!1,password:!1,yonghuName:!1,sexTypes:!1,yonghuIdNumber:!1,yonghuPhone:!1,yonghuPhoto:!1,createTime:!1},ruleForm:{username:"",password:"",yonghuName:"",sexTypes:"",sexValue:"",yonghuIdNumber:"",yonghuPhone:"",yonghuPhoto:"",createTime:""},user:{},sexTypesOptions:[],sexTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return a(r.default.mark((function u(){var o,a,i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={page:1,limit:100,dicCode:"sex_types"},r.next=3,n.$api.page("dictionary",o);case 3:if(a=r.sent,n.sexTypesOptions=a.data.list,!t.id){r.next=12;break}return n.ruleForm.id=t.id,r.next=9,n.$api.info("yonghu",n.ruleForm.id);case 9:i=r.sent,n.ruleForm=i.data,e.setStorageSync("YonghuState",!0);case 12:case"end":return r.stop()}}),u)})))()},methods:{sexTypesChange:function(e){this.sexTypesIndex=e.target.value,this.ruleForm.sexValue=this.sexTypesOptions[this.sexTypesIndex].indexName,this.ruleForm.sexTypes=this.sexTypesOptions[this.sexTypesIndex].codeIndex},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.username){t.next=3;break}return e.$utils.msg("账户不能为空"),t.abrupt("return");case 3:if(e.ruleForm.yonghuName){t.next=6;break}return e.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 6:if(e.ruleForm.sexTypes){t.next=9;break}return e.$utils.msg("性别不能为空"),t.abrupt("return");case 9:if(e.ruleForm.yonghuIdNumber||e.$validate.checkIdCard(e.ruleForm.yonghuIdNumber)){t.next=12;break}return e.$utils.msg("身份证号不能为空并且需要输入正确格式"),t.abrupt("return");case 12:if(e.ruleForm.yonghuPhone||e.$validate.isMobile(e.ruleForm.yonghuPhone)){t.next=15;break}return e.$utils.msg("手机号不能为空并且需要输入正确格式"),t.abrupt("return");case 15:if(e.ruleForm.yonghuPhoto){t.next=18;break}return e.$utils.msg("照片不能为空"),t.abrupt("return");case 18:if(!e.ruleForm.id){t.next=23;break}return t.next=21,e.$api.update("yonghu",e.ruleForm);case 21:t.next=25;break;case 23:return t.next=25,e.$api.save("yonghu",e.ruleForm);case 25:e.$utils.msgBack("提交成功");case 26:case"end":return t.stop()}}),t)})))()},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,u=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(n,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},cdbb:function(e,t,n){"use strict";var r=n("48e4"),u=n.n(r);u.a}},[["a9d3","common/runtime","common/vendor"]]]);