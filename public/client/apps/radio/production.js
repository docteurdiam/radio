include.setPath('jmvc/plugins/jquery');
(function(){
var _1=this,_2,_3=_1.jQuery,_$=_1.$,_5=_1.jQuery=_1.$=function(_6,_7){
return new _5.fn.init(_6,_7);
},_8=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,_9=/^.[^:#\[\.,]*$/;
_5.fn=_5.prototype={init:function(_a,_b){
_a=_a||document;
if(_a.nodeType){
this[0]=_a;
this.length=1;
this.context=_a;
return this;
}
if(typeof _a==="string"){
var _c=_8.exec(_a);
if(_c&&(_c[1]||!_b)){
if(_c[1]){
_a=_5.clean([_c[1]],_b);
}else{
var _d=document.getElementById(_c[3]);
if(_d&&_d.id!=_c[3]){
return _5().find(_a);
}
var _e=_5(_d||[]);
_e.context=document;
_e.selector=_a;
return _e;
}
}else{
return _5(_b).find(_a);
}
}else{
if(_5.isFunction(_a)){
return _5(document).ready(_a);
}
}
if(_a.selector&&_a.context){
this.selector=_a.selector;
this.context=_a.context;
}
return this.setArray(_5.isArray(_a)?_a:_5.makeArray(_a));
},selector:"",jquery:"1.3.2",size:function(){
return this.length;
},get:function(_f){
return _f===_2?Array.prototype.slice.call(this):this[_f];
},pushStack:function(_10,_11,_12){
var ret=_5(_10);
ret.prevObject=this;
ret.context=this.context;
if(_11==="find"){
ret.selector=this.selector+(this.selector?" ":"")+_12;
}else{
if(_11){
ret.selector=this.selector+"."+_11+"("+_12+")";
}
}
return ret;
},setArray:function(_14){
this.length=0;
Array.prototype.push.apply(this,_14);
return this;
},each:function(_15,_16){
return _5.each(this,_15,_16);
},index:function(_17){
return _5.inArray(_17&&_17.jquery?_17[0]:_17,this);
},attr:function(_18,_19,_1a){
var _1b=_18;
if(typeof _18==="string"){
if(_19===_2){
return this[0]&&_5[_1a||"attr"](this[0],_18);
}else{
_1b={};
_1b[_18]=_19;
}
}
return this.each(function(i){
for(_18 in _1b){
_5.attr(_1a?this.style:this,_18,_5.prop(this,_1b[_18],_1a,i,_18));
}
});
},css:function(key,_1e){
if((key=="width"||key=="height")&&parseFloat(_1e)<0){
_1e=_2;
}
return this.attr(key,_1e,"curCSS");
},text:function(_1f){
if(typeof _1f!=="object"&&_1f!=null){
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(_1f));
}
var ret="";
_5.each(_1f||this,function(){
_5.each(this.childNodes,function(){
if(this.nodeType!=8){
ret+=this.nodeType!=1?this.nodeValue:_5.fn.text([this]);
}
});
});
return ret;
},wrapAll:function(_21){
if(this[0]){
var _22=_5(_21,this[0].ownerDocument).clone();
if(this[0].parentNode){
_22.insertBefore(this[0]);
}
_22.map(function(){
var _23=this;
while(_23.firstChild){
_23=_23.firstChild;
}
return _23;
}).append(this);
}
return this;
},wrapInner:function(_24){
return this.each(function(){
_5(this).contents().wrapAll(_24);
});
},wrap:function(_25){
return this.each(function(){
_5(this).wrapAll(_25);
});
},append:function(){
return this.domManip(arguments,true,function(_26){
if(this.nodeType==1){
this.appendChild(_26);
}
});
},prepend:function(){
return this.domManip(arguments,true,function(_27){
if(this.nodeType==1){
this.insertBefore(_27,this.firstChild);
}
});
},before:function(){
return this.domManip(arguments,false,function(_28){
this.parentNode.insertBefore(_28,this);
});
},after:function(){
return this.domManip(arguments,false,function(_29){
this.parentNode.insertBefore(_29,this.nextSibling);
});
},end:function(){
return this.prevObject||_5([]);
},push:[].push,sort:[].sort,splice:[].splice,find:function(_2a){
if(this.length===1){
var ret=this.pushStack([],"find",_2a);
ret.length=0;
_5.find(_2a,this[0],ret);
return ret;
}else{
return this.pushStack(_5.unique(_5.map(this,function(_2c){
return _5.find(_2a,_2c);
})),"find",_2a);
}
},clone:function(_2d){
var ret=this.map(function(){
if(!_5.support.noCloneEvent&&!_5.isXMLDoc(this)){
var _2f=this.outerHTML;
if(!_2f){
var div=this.ownerDocument.createElement("div");
div.appendChild(this.cloneNode(true));
_2f=div.innerHTML;
}
return _5.clean([_2f.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0];
}else{
return this.cloneNode(true);
}
});
if(_2d===true){
var _31=this.find("*").andSelf(),i=0;
ret.find("*").andSelf().each(function(){
if(this.nodeName!==_31[i].nodeName){
return;
}
var _33=_5.data(_31[i],"events");
for(var _34 in _33){
for(var _35 in _33[_34]){
_5.event.add(this,_34,_33[_34][_35],_33[_34][_35].data);
}
}
i++;
});
}
return ret;
},filter:function(_36){
return this.pushStack(_5.isFunction(_36)&&_5.grep(this,function(_37,i){
return _36.call(_37,i);
})||_5.multiFilter(_36,_5.grep(this,function(_39){
return _39.nodeType===1;
})),"filter",_36);
},closest:function(_3a){
var pos=_5.expr.match.POS.test(_3a)?_5(_3a):null,_3c=0;
return this.map(function(){
var cur=this;
while(cur&&cur.ownerDocument){
if(pos?pos.index(cur)>-1:_5(cur).is(_3a)){
_5.data(cur,"closest",_3c);
return cur;
}
cur=cur.parentNode;
_3c++;
}
});
},not:function(_3e){
if(typeof _3e==="string"){
if(_9.test(_3e)){
return this.pushStack(_5.multiFilter(_3e,this,true),"not",_3e);
}else{
_3e=_5.multiFilter(_3e,this);
}
}
var _3f=_3e.length&&_3e[_3e.length-1]!==_2&&!_3e.nodeType;
return this.filter(function(){
return _3f?_5.inArray(this,_3e)<0:this!=_3e;
});
},add:function(_40){
return this.pushStack(_5.unique(_5.merge(this.get(),typeof _40==="string"?_5(_40):_5.makeArray(_40))));
},is:function(_41){
return !!_41&&_5.multiFilter(_41,this).length>0;
},hasClass:function(_42){
return !!_42&&this.is("."+_42);
},val:function(_43){
if(_43===_2){
var _44=this[0];
if(_44){
if(_5.nodeName(_44,"option")){
return (_44.attributes.value||{}).specified?_44.value:_44.text;
}
if(_5.nodeName(_44,"select")){
var _45=_44.selectedIndex,_46=[],_47=_44.options,one=_44.type=="select-one";
if(_45<0){
return null;
}
for(var i=one?_45:0,max=one?_45+1:_47.length;i<max;i++){
var _4b=_47[i];
if(_4b.selected){
_43=_5(_4b).val();
if(one){
return _43;
}
_46.push(_43);
}
}
return _46;
}
return (_44.value||"").replace(/\r/g,"");
}
return _2;
}
if(typeof _43==="number"){
_43+="";
}
return this.each(function(){
if(this.nodeType!=1){
return;
}
if(_5.isArray(_43)&&/radio|checkbox/.test(this.type)){
this.checked=(_5.inArray(this.value,_43)>=0||_5.inArray(this.name,_43)>=0);
}else{
if(_5.nodeName(this,"select")){
var _4c=_5.makeArray(_43);
_5("option",this).each(function(){
this.selected=(_5.inArray(this.value,_4c)>=0||_5.inArray(this.text,_4c)>=0);
});
if(!_4c.length){
this.selectedIndex=-1;
}
}else{
this.value=_43;
}
}
});
},html:function(_4d){
return _4d===_2?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(_4d);
},replaceWith:function(_4e){
return this.after(_4e).remove();
},eq:function(i){
return this.slice(i,+i+1);
},slice:function(){
return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","));
},map:function(_50){
return this.pushStack(_5.map(this,function(_51,i){
return _50.call(_51,i,_51);
}));
},andSelf:function(){
return this.add(this.prevObject);
},domManip:function(_53,_54,_55){
if(this[0]){
var _56=(this[0].ownerDocument||this[0]).createDocumentFragment(),_57=_5.clean(_53,(this[0].ownerDocument||this[0]),_56),_58=_56.firstChild;
if(_58){
for(var i=0,l=this.length;i<l;i++){
_55.call(_5b(this[i],_58),this.length>1||i>0?_56.cloneNode(true):_56);
}
}
if(_57){
_5.each(_57,_5c);
}
}
return this;
function _5b(_5d,cur){
return _54&&_5.nodeName(_5d,"table")&&_5.nodeName(cur,"tr")?(_5d.getElementsByTagName("tbody")[0]||_5d.appendChild(_5d.ownerDocument.createElement("tbody"))):_5d;
};
}};
_5.fn.init.prototype=_5.fn;
function _5c(i,_60){
if(_60.src){
_5.ajax({url:_60.src,async:false,dataType:"script"});
}else{
_5.globalEval(_60.text||_60.textContent||_60.innerHTML||"");
}
if(_60.parentNode){
_60.parentNode.removeChild(_60);
}
};
function now(){
return +new Date;
};
_5.extend=_5.fn.extend=function(){
var _62=arguments[0]||{},i=1,_64=arguments.length,_65=false,_66;
if(typeof _62==="boolean"){
_65=_62;
_62=arguments[1]||{};
i=2;
}
if(typeof _62!=="object"&&!_5.isFunction(_62)){
_62={};
}
if(_64==i){
_62=this;
--i;
}
for(;i<_64;i++){
if((_66=arguments[i])!=null){
for(var _67 in _66){
var src=_62[_67],_69=_66[_67];
if(_62===_69){
continue;
}
if(_65&&_69&&typeof _69==="object"&&!_69.nodeType){
_62[_67]=_5.extend(_65,src||(_69.length!=null?[]:{}),_69);
}else{
if(_69!==_2){
_62[_67]=_69;
}
}
}
}
}
return _62;
};
var _6a=/z-?index|font-?weight|opacity|zoom|line-?height/i,_6b=document.defaultView||{},_6c=Object.prototype.toString;
_5.extend({noConflict:function(_6d){
_1.$=_$;
if(_6d){
_1.jQuery=_3;
}
return _5;
},isFunction:function(obj){
return _6c.call(obj)==="[object Function]";
},isArray:function(obj){
return _6c.call(obj)==="[object Array]";
},isXMLDoc:function(_70){
return _70.nodeType===9&&_70.documentElement.nodeName!=="HTML"||!!_70.ownerDocument&&_5.isXMLDoc(_70.ownerDocument);
},globalEval:function(_71){
if(_71&&/\S/.test(_71)){
var _72=document.getElementsByTagName("head")[0]||document.documentElement,_73=document.createElement("script");
_73.type="text/javascript";
if(_5.support.scriptEval){
_73.appendChild(document.createTextNode(_71));
}else{
_73.text=_71;
}
_72.insertBefore(_73,_72.firstChild);
_72.removeChild(_73);
}
},nodeName:function(_74,_75){
return _74.nodeName&&_74.nodeName.toUpperCase()==_75.toUpperCase();
},each:function(_76,_77,_78){
var _79,i=0,_7b=_76.length;
if(_78){
if(_7b===_2){
for(_79 in _76){
if(_77.apply(_76[_79],_78)===false){
break;
}
}
}else{
for(;i<_7b;){
if(_77.apply(_76[i++],_78)===false){
break;
}
}
}
}else{
if(_7b===_2){
for(_79 in _76){
if(_77.call(_76[_79],_79,_76[_79])===false){
break;
}
}
}else{
for(var _7c=_76[0];i<_7b&&_77.call(_7c,i,_7c)!==false;_7c=_76[++i]){
}
}
}
return _76;
},prop:function(_7d,_7e,_7f,i,_81){
if(_5.isFunction(_7e)){
_7e=_7e.call(_7d,i);
}
return typeof _7e==="number"&&_7f=="curCSS"&&!_6a.test(_81)?_7e+"px":_7e;
},className:{add:function(_82,_83){
_5.each((_83||"").split(/\s+/),function(i,_85){
if(_82.nodeType==1&&!_5.className.has(_82.className,_85)){
_82.className+=(_82.className?" ":"")+_85;
}
});
},remove:function(_86,_87){
if(_86.nodeType==1){
_86.className=_87!==_2?_5.grep(_86.className.split(/\s+/),function(_88){
return !_5.className.has(_87,_88);
}).join(" "):"";
}
},has:function(_89,_8a){
return _89&&_5.inArray(_8a,(_89.className||_89).toString().split(/\s+/))>-1;
}},swap:function(_8b,_8c,_8d){
var old={};
for(var _8f in _8c){
old[_8f]=_8b.style[_8f];
_8b.style[_8f]=_8c[_8f];
}
_8d.call(_8b);
for(var _8f in _8c){
_8b.style[_8f]=old[_8f];
}
},css:function(_90,_91,_92,_93){
if(_91=="width"||_91=="height"){
var val,_95={position:"absolute",visibility:"hidden",display:"block"},_96=_91=="width"?["Left","Right"]:["Top","Bottom"];
function _97(){
val=_91=="width"?_90.offsetWidth:_90.offsetHeight;
if(_93==="border"){
return;
}
_5.each(_96,function(){
if(!_93){
val-=parseFloat(_5.curCSS(_90,"padding"+this,true))||0;
}
if(_93==="margin"){
val+=parseFloat(_5.curCSS(_90,"margin"+this,true))||0;
}else{
val-=parseFloat(_5.curCSS(_90,"border"+this+"Width",true))||0;
}
});
};
if(_90.offsetWidth!==0||_90.nodeName.toLowerCase()=="script"){
_97();
}else{
_5.swap(_90,_95,_97);
}
return Math.max(0,Math.round(val));
}
return _5.curCSS(_90,_91,_92);
},curCSS:function(_98,_99,_9a){
var ret,_9c=_98.style;
if(_99=="opacity"&&!_5.support.opacity){
ret=_5.attr(_9c,"opacity");
return ret==""?"1":ret;
}
if(_99.match(/float/i)){
_99=_9d;
}
if(!_9a&&_9c&&_9c[_99]){
ret=_9c[_99];
}else{
if(_6b.getComputedStyle){
if(_99.match(/float/i)){
_99="float";
}
_99=_99.replace(/([A-Z])/g,"-$1").toLowerCase();
var _9e=_6b.getComputedStyle(_98,null);
if(_9e){
ret=_9e.getPropertyValue(_99);
}
if(_99=="opacity"&&ret==""){
ret="1";
}
}else{
if(_98.currentStyle){
var _9f=_99.replace(/\-(\w)/g,function(all,_a1){
return _a1.toUpperCase();
});
ret=_98.currentStyle[_99]||_98.currentStyle[_9f];
if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){
var _a2=_9c.left,_a3=_98.runtimeStyle.left;
_98.runtimeStyle.left=_98.currentStyle.left;
_9c.left=ret||0;
ret=_9c.pixelLeft+"px";
_9c.left=_a2;
_98.runtimeStyle.left=_a3;
}
}
}
}
return ret;
},clean:function(_a4,_a5,_a6){
_a5=_a5||document;
if(typeof _a5.createElement==="undefined"){
_a5=_a5.ownerDocument||_a5[0]&&_a5[0].ownerDocument||document;
}
if(!_a6&&_a4.length===1&&typeof _a4[0]==="string"){
var _a7=/^<(\w+)\s*\/?>$/.exec(_a4[0]);
if(_a7){
return [_a5.createElement(_a7[1])];
}
}
var ret=[],_a9=[],div=_a5.createElement("div");
_5.each(_a4,function(i,_ac){
if(typeof _ac==="number"){
_ac+="";
}
if(!_ac){
return;
}
if(typeof _ac==="string"){
_ac=_ac.replace(/(<(\w+)[^>]*?)\/>/g,function(all,_ae,tag){
return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:_ae+"></"+tag+">";
});
var _b0=_ac.replace(/^\s+/,"").substring(0,10).toLowerCase();
var _b1=!_b0.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!_b0.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||_b0.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!_b0.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!_b0.indexOf("<td")||!_b0.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!_b0.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!_5.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];
div.innerHTML=_b1[1]+_ac+_b1[2];
while(_b1[0]--){
div=div.lastChild;
}
if(!_5.support.tbody){
var _b2=/<tbody/i.test(_ac),_b3=!_b0.indexOf("<table")&&!_b2?div.firstChild&&div.firstChild.childNodes:_b1[1]=="<table>"&&!_b2?div.childNodes:[];
for(var j=_b3.length-1;j>=0;--j){
if(_5.nodeName(_b3[j],"tbody")&&!_b3[j].childNodes.length){
_b3[j].parentNode.removeChild(_b3[j]);
}
}
}
if(!_5.support.leadingWhitespace&&/^\s/.test(_ac)){
div.insertBefore(_a5.createTextNode(_ac.match(/^\s*/)[0]),div.firstChild);
}
_ac=_5.makeArray(div.childNodes);
}
if(_ac.nodeType){
ret.push(_ac);
}else{
ret=_5.merge(ret,_ac);
}
});
if(_a6){
for(var i=0;ret[i];i++){
if(_5.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){
_a9.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);
}else{
if(ret[i].nodeType===1){
ret.splice.apply(ret,[i+1,0].concat(_5.makeArray(ret[i].getElementsByTagName("script"))));
}
_a6.appendChild(ret[i]);
}
}
return _a9;
}
return ret;
},attr:function(_b6,_b7,_b8){
if(!_b6||_b6.nodeType==3||_b6.nodeType==8){
return _2;
}
var _b9=!_5.isXMLDoc(_b6),set=_b8!==_2;
_b7=_b9&&_5.props[_b7]||_b7;
if(_b6.tagName){
var _bb=/href|src|style/.test(_b7);
if(_b7=="selected"&&_b6.parentNode){
_b6.parentNode.selectedIndex;
}
if(_b7 in _b6&&_b9&&!_bb){
if(set){
if(_b7=="type"&&_5.nodeName(_b6,"input")&&_b6.parentNode){
throw "type property can't be changed";
}
_b6[_b7]=_b8;
}
if(_5.nodeName(_b6,"form")&&_b6.getAttributeNode(_b7)){
return _b6.getAttributeNode(_b7).nodeValue;
}
if(_b7=="tabIndex"){
var _bc=_b6.getAttributeNode("tabIndex");
return _bc&&_bc.specified?_bc.value:_b6.nodeName.match(/(button|input|object|select|textarea)/i)?0:_b6.nodeName.match(/^(a|area)$/i)&&_b6.href?0:_2;
}
return _b6[_b7];
}
if(!_5.support.style&&_b9&&_b7=="style"){
return _5.attr(_b6.style,"cssText",_b8);
}
if(set){
_b6.setAttribute(_b7,""+_b8);
}
var _bd=!_5.support.hrefNormalized&&_b9&&_bb?_b6.getAttribute(_b7,2):_b6.getAttribute(_b7);
return _bd===null?_2:_bd;
}
if(!_5.support.opacity&&_b7=="opacity"){
if(set){
_b6.zoom=1;
_b6.filter=(_b6.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(_b8)+""=="NaN"?"":"alpha(opacity="+_b8*100+")");
}
return _b6.filter&&_b6.filter.indexOf("opacity=")>=0?(parseFloat(_b6.filter.match(/opacity=([^)]*)/)[1])/100)+"":"";
}
_b7=_b7.replace(/-([a-z])/ig,function(all,_bf){
return _bf.toUpperCase();
});
if(set){
_b6[_b7]=_b8;
}
return _b6[_b7];
},trim:function(_c0){
return (_c0||"").replace(/^\s+|\s+$/g,"");
},makeArray:function(_c1){
var ret=[];
if(_c1!=null){
var i=_c1.length;
if(i==null||typeof _c1==="string"||_5.isFunction(_c1)||_c1.setInterval){
ret[0]=_c1;
}else{
while(i){
ret[--i]=_c1[i];
}
}
}
return ret;
},inArray:function(_c4,_c5){
for(var i=0,_c7=_c5.length;i<_c7;i++){
if(_c5[i]===_c4){
return i;
}
}
return -1;
},merge:function(_c8,_c9){
var i=0,_cb,pos=_c8.length;
if(!_5.support.getAll){
while((_cb=_c9[i++])!=null){
if(_cb.nodeType!=8){
_c8[pos++]=_cb;
}
}
}else{
while((_cb=_c9[i++])!=null){
_c8[pos++]=_cb;
}
}
return _c8;
},unique:function(_cd){
var ret=[],_cf={};
try{
for(var i=0,_d1=_cd.length;i<_d1;i++){
var id=_5.data(_cd[i]);
if(!_cf[id]){
_cf[id]=true;
ret.push(_cd[i]);
}
}
}
catch(e){
ret=_cd;
}
return ret;
},grep:function(_d3,_d4,inv){
var ret=[];
for(var i=0,_d8=_d3.length;i<_d8;i++){
if(!inv!=!_d4(_d3[i],i)){
ret.push(_d3[i]);
}
}
return ret;
},map:function(_d9,_da){
var ret=[];
for(var i=0,_dd=_d9.length;i<_dd;i++){
var _de=_da(_d9[i],i);
if(_de!=null){
ret[ret.length]=_de;
}
}
return ret.concat.apply([],ret);
}});
var _df=navigator.userAgent.toLowerCase();
_5.browser={version:(_df.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(_df),opera:/opera/.test(_df),msie:/msie/.test(_df)&&!/opera/.test(_df),mozilla:/mozilla/.test(_df)&&!/(compatible|webkit)/.test(_df),rhino:/rhino/.test(_df)};
_5.each({parent:function(_e0){
return _e0.parentNode;
},parents:function(_e1){
return _5.dir(_e1,"parentNode");
},next:function(_e2){
return _5.nth(_e2,2,"nextSibling");
},prev:function(_e3){
return _5.nth(_e3,2,"previousSibling");
},nextAll:function(_e4){
return _5.dir(_e4,"nextSibling");
},prevAll:function(_e5){
return _5.dir(_e5,"previousSibling");
},siblings:function(_e6){
return _5.sibling(_e6.parentNode.firstChild,_e6);
},children:function(_e7){
return _5.sibling(_e7.firstChild);
},contents:function(_e8){
return _5.nodeName(_e8,"iframe")?_e8.contentDocument||_e8.contentWindow.document:_5.makeArray(_e8.childNodes);
}},function(_e9,fn){
_5.fn[_e9]=function(_eb){
var ret=_5.map(this,fn);
if(_eb&&typeof _eb=="string"){
ret=_5.multiFilter(_eb,ret);
}
return this.pushStack(_5.unique(ret),_e9,_eb);
};
});
_5.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(_ed,_ee){
_5.fn[_ed]=function(_ef){
var ret=[],_f1=_5(_ef);
for(var i=0,l=_f1.length;i<l;i++){
var _f4=(i>0?this.clone(true):this).get();
_5.fn[_ee].apply(_5(_f1[i]),_f4);
ret=ret.concat(_f4);
}
return this.pushStack(ret,_ed,_ef);
};
});
_5.each({removeAttr:function(_f5){
_5.attr(this,_f5,"");
if(this.nodeType==1){
this.removeAttribute(_f5);
}
},addClass:function(_f6){
_5.className.add(this,_f6);
},removeClass:function(_f7){
_5.className.remove(this,_f7);
},toggleClass:function(_f8,_f9){
if(typeof _f9!=="boolean"){
_f9=!_5.className.has(this,_f8);
}
_5.className[_f9?"add":"remove"](this,_f8);
},remove:function(_fa){
if(!_fa||_5.filter(_fa,[this]).length){
_5("*",this).add([this]).each(function(){
_5.event.remove(this);
_5.removeData(this);
});
if(this.parentNode){
this.parentNode.removeChild(this);
}
}
},empty:function(){
_5(this).children().remove();
while(this.firstChild){
this.removeChild(this.firstChild);
}
}},function(_fb,fn){
_5.fn[_fb]=function(){
return this.each(fn,arguments);
};
});
function num(_fe,_ff){
return _fe[0]&&parseInt(_5.curCSS(_fe[0],_ff,true),10)||0;
};
var _100="jQuery"+now(),uuid=0,_102={};
_5.extend({cache:{},data:function(elem,name,data){
elem=elem==_1?_102:elem;
var id=elem[_100];
if(!id){
id=elem[_100]=++uuid;
}
if(name&&!_5.cache[id]){
_5.cache[id]={};
}
if(data!==_2){
_5.cache[id][name]=data;
}
return name?_5.cache[id][name]:id;
},removeData:function(elem,name){
elem=elem==_1?_102:elem;
var id=elem[_100];
if(name){
if(_5.cache[id]){
delete _5.cache[id][name];
name="";
for(name in _5.cache[id]){
break;
}
if(!name){
_5.removeData(elem);
}
}
}else{
try{
delete elem[_100];
}
catch(e){
if(elem.removeAttribute){
elem.removeAttribute(_100);
}
}
delete _5.cache[id];
}
},queue:function(elem,type,data){
if(elem){
type=(type||"fx")+"queue";
var q=_5.data(elem,type);
if(!q||_5.isArray(data)){
q=_5.data(elem,type,_5.makeArray(data));
}else{
if(data){
q.push(data);
}
}
}
return q;
},dequeue:function(elem,type){
var _110=_5.queue(elem,type),fn=_110.shift();
if(!type||type==="fx"){
fn=_110[0];
}
if(fn!==_2){
fn.call(elem);
}
}});
_5.data.expando=_100;
_5.fn.extend({data:function(key,_113){
var _114=key.split(".");
_114[1]=_114[1]?"."+_114[1]:"";
if(_113===_2){
var data=this.triggerHandler("getData"+_114[1]+"!",[_114[0]]);
if(data===_2&&this.length){
data=_5.data(this[0],key);
}
return data===_2&&_114[1]?this.data(_114[0]):data;
}else{
return this.trigger("setData"+_114[1]+"!",[_114[0],_113]).each(function(){
_5.data(this,key,_113);
});
}
},removeData:function(key){
return this.each(function(){
_5.removeData(this,key);
});
},queue:function(type,data){
if(typeof type!=="string"){
data=type;
type="fx";
}
if(data===_2){
return _5.queue(this[0],type);
}
return this.each(function(){
var _119=_5.queue(this,type,data);
if(type=="fx"&&_119.length==1){
_119[0].call(this);
}
});
},dequeue:function(type){
return this.each(function(){
_5.dequeue(this,type);
});
}});
(function(){
var _11b=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,done=0,_6c=Object.prototype.toString;
var _11d=function(_11e,_11f,_120,seed){
_120=_120||[];
_11f=_11f||document;
if(_11f.nodeType!==1&&_11f.nodeType!==9){
return [];
}
if(!_11e||typeof _11e!=="string"){
return _120;
}
var _122=[],m,set,_125,_126,mode,_128,_129=true;
_11b.lastIndex=0;
while((m=_11b.exec(_11e))!==null){
_122.push(m[1]);
if(m[2]){
_128=RegExp.rightContext;
break;
}
}
if(_122.length>1&&_12a.exec(_11e)){
if(_122.length===2&&Expr.relative[_122[0]]){
set=_12c(_122[0]+_122[1],_11f);
}else{
set=Expr.relative[_122[0]]?[_11f]:_11d(_122.shift(),_11f);
while(_122.length){
_11e=_122.shift();
if(Expr.relative[_11e]){
_11e+=_122.shift();
}
set=_12c(_11e,set);
}
}
}else{
var ret=seed?{expr:_122.pop(),set:_12e(seed)}:_11d.find(_122.pop(),_122.length===1&&_11f.parentNode?_11f.parentNode:_11f,_12f(_11f));
set=_11d.filter(ret.expr,ret.set);
if(_122.length>0){
_125=_12e(set);
}else{
_129=false;
}
while(_122.length){
var cur=_122.pop(),pop=cur;
if(!Expr.relative[cur]){
cur="";
}else{
pop=_122.pop();
}
if(pop==null){
pop=_11f;
}
Expr.relative[cur](_125,pop,_12f(_11f));
}
}
if(!_125){
_125=set;
}
if(!_125){
throw "Syntax error, unrecognized expression: "+(cur||_11e);
}
if(_6c.call(_125)==="[object Array]"){
if(!_129){
_120.push.apply(_120,_125);
}else{
if(_11f.nodeType===1){
for(var i=0;_125[i]!=null;i++){
if(_125[i]&&(_125[i]===true||_125[i].nodeType===1&&_133(_11f,_125[i]))){
_120.push(set[i]);
}
}
}else{
for(var i=0;_125[i]!=null;i++){
if(_125[i]&&_125[i].nodeType===1){
_120.push(set[i]);
}
}
}
}
}else{
_12e(_125,_120);
}
if(_128){
_11d(_128,_11f,_120,seed);
if(_134){
hasDuplicate=false;
_120.sort(_134);
if(hasDuplicate){
for(var i=1;i<_120.length;i++){
if(_120[i]===_120[i-1]){
_120.splice(i--,1);
}
}
}
}
}
return _120;
};
_11d.matches=function(expr,set){
return _11d(expr,null,null,set);
};
_11d.find=function(expr,_138,_139){
var set,_13b;
if(!expr){
return [];
}
for(var i=0,l=Expr.order.length;i<l;i++){
var type=Expr.order[i],_13b;
if((_13b=Expr.match[type].exec(expr))){
var left=RegExp.leftContext;
if(left.substr(left.length-1)!=="\\"){
_13b[1]=(_13b[1]||"").replace(/\\/g,"");
set=Expr.find[type](_13b,_138,_139);
if(set!=null){
expr=expr.replace(Expr.match[type],"");
break;
}
}
}
}
if(!set){
set=_138.getElementsByTagName("*");
}
return {set:set,expr:expr};
};
_11d.filter=function(expr,set,_142,not){
var old=expr,_145=[],_146=set,_147,_148,_149=set&&set[0]&&_12f(set[0]);
while(expr&&set.length){
for(var type in Expr.filter){
if((_147=Expr.match[type].exec(expr))!=null){
var _14b=Expr.filter[type],_14c,item;
_148=false;
if(_146==_145){
_145=[];
}
if(Expr.preFilter[type]){
_147=Expr.preFilter[type](_147,_146,_142,_145,not,_149);
if(!_147){
_148=_14c=true;
}else{
if(_147===true){
continue;
}
}
}
if(_147){
for(var i=0;(item=_146[i])!=null;i++){
if(item){
_14c=_14b(item,_147,i,_146);
var pass=not^!!_14c;
if(_142&&_14c!=null){
if(pass){
_148=true;
}else{
_146[i]=false;
}
}else{
if(pass){
_145.push(item);
_148=true;
}
}
}
}
}
if(_14c!==_2){
if(!_142){
_146=_145;
}
expr=expr.replace(Expr.match[type],"");
if(!_148){
return [];
}
break;
}
}
}
if(expr==old){
if(_148==null){
throw "Syntax error, unrecognized expression: "+expr;
}else{
break;
}
}
old=expr;
}
return _146;
};
var Expr=_11d.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){
return elem.getAttribute("href");
}},relative:{"+":function(_151,part,_153){
var _154=typeof part==="string",_155=_154&&!/\W/.test(part),_156=_154&&!_155;
if(_155&&!_153){
part=part.toUpperCase();
}
for(var i=0,l=_151.length,elem;i<l;i++){
if((elem=_151[i])){
while((elem=elem.previousSibling)&&elem.nodeType!==1){
}
_151[i]=_156||elem&&elem.nodeName===part?elem||false:elem===part;
}
}
if(_156){
_11d.filter(part,_151,true);
}
},">":function(_15a,part,_15c){
var _15d=typeof part==="string";
if(_15d&&!/\W/.test(part)){
part=_15c?part:part.toUpperCase();
for(var i=0,l=_15a.length;i<l;i++){
var elem=_15a[i];
if(elem){
var _161=elem.parentNode;
_15a[i]=_161.nodeName===part?_161:false;
}
}
}else{
for(var i=0,l=_15a.length;i<l;i++){
var elem=_15a[i];
if(elem){
_15a[i]=_15d?elem.parentNode:elem.parentNode===part;
}
}
if(_15d){
_11d.filter(part,_15a,true);
}
}
},"":function(_162,part,_164){
var _165=done++,_166=_167;
if(!part.match(/\W/)){
var _168=part=_164?part:part.toUpperCase();
_166=_169;
}
_166("parentNode",part,_165,_162,_168,_164);
},"~":function(_16a,part,_16c){
var _16d=done++,_16e=_167;
if(typeof part==="string"&&!part.match(/\W/)){
var _16f=part=_16c?part:part.toUpperCase();
_16e=_169;
}
_16e("previousSibling",part,_16d,_16a,_16f,_16c);
}},find:{ID:function(_170,_171,_172){
if(typeof _171.getElementById!=="undefined"&&!_172){
var m=_171.getElementById(_170[1]);
return m?[m]:[];
}
},NAME:function(_174,_175,_176){
if(typeof _175.getElementsByName!=="undefined"){
var ret=[],_178=_175.getElementsByName(_174[1]);
for(var i=0,l=_178.length;i<l;i++){
if(_178[i].getAttribute("name")===_174[1]){
ret.push(_178[i]);
}
}
return ret.length===0?null:ret;
}
},TAG:function(_17b,_17c){
return _17c.getElementsByTagName(_17b[1]);
}},preFilter:{CLASS:function(_17d,_17e,_17f,_180,not,_182){
_17d=" "+_17d[1].replace(/\\/g,"")+" ";
if(_182){
return _17d;
}
for(var i=0,elem;(elem=_17e[i])!=null;i++){
if(elem){
if(not^(elem.className&&(" "+elem.className+" ").indexOf(_17d)>=0)){
if(!_17f){
_180.push(elem);
}
}else{
if(_17f){
_17e[i]=false;
}
}
}
}
return false;
},ID:function(_185){
return _185[1].replace(/\\/g,"");
},TAG:function(_186,_187){
for(var i=0;_187[i]===false;i++){
}
return _187[i]&&_12f(_187[i])?_186[1]:_186[1].toUpperCase();
},CHILD:function(_189){
if(_189[1]=="nth"){
var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(_189[2]=="even"&&"2n"||_189[2]=="odd"&&"2n+1"||!/\D/.test(_189[2])&&"0n+"+_189[2]||_189[2]);
_189[2]=(test[1]+(test[2]||1))-0;
_189[3]=test[3]-0;
}
_189[0]=done++;
return _189;
},ATTR:function(_18b,_18c,_18d,_18e,not,_190){
var name=_18b[1].replace(/\\/g,"");
if(!_190&&Expr.attrMap[name]){
_18b[1]=Expr.attrMap[name];
}
if(_18b[2]==="~="){
_18b[4]=" "+_18b[4]+" ";
}
return _18b;
},PSEUDO:function(_192,_193,_194,_195,not){
if(_192[1]==="not"){
if(_192[3].match(_11b).length>1||/^\w/.test(_192[3])){
_192[3]=_11d(_192[3],null,null,_193);
}else{
var ret=_11d.filter(_192[3],_193,_194,true^not);
if(!_194){
_195.push.apply(_195,ret);
}
return false;
}
}else{
if(Expr.match.POS.test(_192[0])||Expr.match.CHILD.test(_192[0])){
return true;
}
}
return _192;
},POS:function(_198){
_198.unshift(true);
return _198;
}},filters:{enabled:function(elem){
return elem.disabled===false&&elem.type!=="hidden";
},disabled:function(elem){
return elem.disabled===true;
},checked:function(elem){
return elem.checked===true;
},selected:function(elem){
elem.parentNode.selectedIndex;
return elem.selected===true;
},parent:function(elem){
return !!elem.firstChild;
},empty:function(elem){
return !elem.firstChild;
},has:function(elem,i,_1a1){
return !!_11d(_1a1[3],elem).length;
},header:function(elem){
return /h\d/i.test(elem.nodeName);
},text:function(elem){
return "text"===elem.type;
},radio:function(elem){
return "radio"===elem.type;
},checkbox:function(elem){
return "checkbox"===elem.type;
},file:function(elem){
return "file"===elem.type;
},password:function(elem){
return "password"===elem.type;
},submit:function(elem){
return "submit"===elem.type;
},image:function(elem){
return "image"===elem.type;
},reset:function(elem){
return "reset"===elem.type;
},button:function(elem){
return "button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";
},input:function(elem){
return /input|select|textarea|button/i.test(elem.nodeName);
}},setFilters:{first:function(elem,i){
return i===0;
},last:function(elem,i,_1b1,_1b2){
return i===_1b2.length-1;
},even:function(elem,i){
return i%2===0;
},odd:function(elem,i){
return i%2===1;
},lt:function(elem,i,_1b9){
return i<_1b9[3]-0;
},gt:function(elem,i,_1bc){
return i>_1bc[3]-0;
},nth:function(elem,i,_1bf){
return _1bf[3]-0==i;
},eq:function(elem,i,_1c2){
return _1c2[3]-0==i;
}},filter:{PSEUDO:function(elem,_1c4,i,_1c6){
var name=_1c4[1],_1c8=Expr.filters[name];
if(_1c8){
return _1c8(elem,i,_1c4,_1c6);
}else{
if(name==="contains"){
return (elem.textContent||elem.innerText||"").indexOf(_1c4[3])>=0;
}else{
if(name==="not"){
var not=_1c4[3];
for(var i=0,l=not.length;i<l;i++){
if(not[i]===elem){
return false;
}
}
return true;
}
}
}
},CHILD:function(elem,_1cc){
var type=_1cc[1],node=elem;
switch(type){
case "only":
case "first":
while(node=node.previousSibling){
if(node.nodeType===1){
return false;
}
}
if(type=="first"){
return true;
}
node=elem;
case "last":
while(node=node.nextSibling){
if(node.nodeType===1){
return false;
}
}
return true;
case "nth":
var _1cf=_1cc[2],last=_1cc[3];
if(_1cf==1&&last==0){
return true;
}
var _1d1=_1cc[0],_1d2=elem.parentNode;
if(_1d2&&(_1d2.sizcache!==_1d1||!elem.nodeIndex)){
var _1d3=0;
for(node=_1d2.firstChild;node;node=node.nextSibling){
if(node.nodeType===1){
node.nodeIndex=++_1d3;
}
}
_1d2.sizcache=_1d1;
}
var diff=elem.nodeIndex-last;
if(_1cf==0){
return diff==0;
}else{
return (diff%_1cf==0&&diff/_1cf>=0);
}
}
},ID:function(elem,_1d6){
return elem.nodeType===1&&elem.getAttribute("id")===_1d6;
},TAG:function(elem,_1d8){
return (_1d8==="*"&&elem.nodeType===1)||elem.nodeName===_1d8;
},CLASS:function(elem,_1da){
return (" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(_1da)>-1;
},ATTR:function(elem,_1dc){
var name=_1dc[1],_1de=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),_1df=_1de+"",type=_1dc[2],_1e1=_1dc[4];
return _1de==null?type==="!=":type==="="?_1df===_1e1:type==="*="?_1df.indexOf(_1e1)>=0:type==="~="?(" "+_1df+" ").indexOf(_1e1)>=0:!_1e1?_1df&&_1de!==false:type==="!="?_1df!=_1e1:type==="^="?_1df.indexOf(_1e1)===0:type==="$="?_1df.substr(_1df.length-_1e1.length)===_1e1:type==="|="?_1df===_1e1||_1df.substr(0,_1e1.length+1)===_1e1+"-":false;
},POS:function(elem,_1e3,i,_1e5){
var name=_1e3[2],_1e7=Expr.setFilters[name];
if(_1e7){
return _1e7(elem,i,_1e3,_1e5);
}
}}};
var _12a=Expr.match.POS;
for(var type in Expr.match){
Expr.match[type]=RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);
}
var _12e=function(_1e9,_1ea){
_1e9=Array.prototype.slice.call(_1e9);
if(_1ea){
_1ea.push.apply(_1ea,_1e9);
return _1ea;
}
return _1e9;
};
try{
Array.prototype.slice.call(document.documentElement.childNodes);
}
catch(e){
_12e=function(_1eb,_1ec){
var ret=_1ec||[];
if(_6c.call(_1eb)==="[object Array]"){
Array.prototype.push.apply(ret,_1eb);
}else{
if(typeof _1eb.length==="number"){
for(var i=0,l=_1eb.length;i<l;i++){
ret.push(_1eb[i]);
}
}else{
for(var i=0;_1eb[i];i++){
ret.push(_1eb[i]);
}
}
}
return ret;
};
}
var _134;
if(document.documentElement.compareDocumentPosition){
_134=function(a,b){
var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
if(ret===0){
hasDuplicate=true;
}
return ret;
};
}else{
if("sourceIndex" in document.documentElement){
_134=function(a,b){
var ret=a.sourceIndex-b.sourceIndex;
if(ret===0){
hasDuplicate=true;
}
return ret;
};
}else{
if(document.createRange){
_134=function(a,b){
var _1f8=a.ownerDocument.createRange(),_1f9=b.ownerDocument.createRange();
_1f8.selectNode(a);
_1f8.collapse(true);
_1f9.selectNode(b);
_1f9.collapse(true);
var ret=_1f8.compareBoundaryPoints(Range.START_TO_END,_1f9);
if(ret===0){
hasDuplicate=true;
}
return ret;
};
}
}
}
(function(){
var form=document.createElement("form"),id="script"+(new Date).getTime();
form.innerHTML="<input name='"+id+"'/>";
var root=document.documentElement;
root.insertBefore(form,root.firstChild);
if(!!document.getElementById(id)){
Expr.find.ID=function(_1fe,_1ff,_200){
if(typeof _1ff.getElementById!=="undefined"&&!_200){
var m=_1ff.getElementById(_1fe[1]);
return m?m.id===_1fe[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===_1fe[1]?[m]:_2:[];
}
};
Expr.filter.ID=function(elem,_203){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===_203;
};
}
root.removeChild(form);
})();
(function(){
var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){
Expr.find.TAG=function(_206,_207){
var _208=_207.getElementsByTagName(_206[1]);
if(_206[1]==="*"){
var tmp=[];
for(var i=0;_208[i];i++){
if(_208[i].nodeType===1){
tmp.push(_208[i]);
}
}
_208=tmp;
}
return _208;
};
}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){
Expr.attrHandle.href=function(elem){
return elem.getAttribute("href",2);
};
}
})();
if(document.querySelectorAll){
(function(){
var _20c=_11d,div=document.createElement("div");
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return;
}
_11d=function(_20e,_20f,_210,seed){
_20f=_20f||document;
if(!seed&&_20f.nodeType===9&&!_12f(_20f)){
try{
return _12e(_20f.querySelectorAll(_20e),_210);
}
catch(e){
}
}
return _20c(_20e,_20f,_210,seed);
};
_11d.find=_20c.find;
_11d.filter=_20c.filter;
_11d.selectors=_20c.selectors;
_11d.matches=_20c.matches;
})();
}
if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){
(function(){
var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(div.getElementsByClassName("e").length===0){
return;
}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return;
}
Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(_213,_214,_215){
if(typeof _214.getElementsByClassName!=="undefined"&&!_215){
return _214.getElementsByClassName(_213[1]);
}
};
})();
}
function _169(dir,cur,_218,_219,_21a,_21b){
var _21c=dir=="previousSibling"&&!_21b;
for(var i=0,l=_219.length;i<l;i++){
var elem=_219[i];
if(elem){
if(_21c&&elem.nodeType===1){
elem.sizcache=_218;
elem.sizset=i;
}
elem=elem[dir];
var _220=false;
while(elem){
if(elem.sizcache===_218){
_220=_219[elem.sizset];
break;
}
if(elem.nodeType===1&&!_21b){
elem.sizcache=_218;
elem.sizset=i;
}
if(elem.nodeName===cur){
_220=elem;
break;
}
elem=elem[dir];
}
_219[i]=_220;
}
}
};
function _167(dir,cur,_223,_224,_225,_226){
var _227=dir=="previousSibling"&&!_226;
for(var i=0,l=_224.length;i<l;i++){
var elem=_224[i];
if(elem){
if(_227&&elem.nodeType===1){
elem.sizcache=_223;
elem.sizset=i;
}
elem=elem[dir];
var _22b=false;
while(elem){
if(elem.sizcache===_223){
_22b=_224[elem.sizset];
break;
}
if(elem.nodeType===1){
if(!_226){
elem.sizcache=_223;
elem.sizset=i;
}
if(typeof cur!=="string"){
if(elem===cur){
_22b=true;
break;
}
}else{
if(_11d.filter(cur,[elem]).length>0){
_22b=elem;
break;
}
}
}
elem=elem[dir];
}
_224[i]=_22b;
}
}
};
var _133=document.compareDocumentPosition?function(a,b){
return a.compareDocumentPosition(b)&16;
}:function(a,b){
return a!==b&&(a.contains?a.contains(b):true);
};
var _12f=function(elem){
return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&_12f(elem.ownerDocument);
};
var _12c=function(_231,_232){
var _233=[],_234="",_235,root=_232.nodeType?[_232]:_232;
while((_235=Expr.match.PSEUDO.exec(_231))){
_234+=_235[0];
_231=_231.replace(Expr.match.PSEUDO,"");
}
_231=Expr.relative[_231]?_231+"*":_231;
for(var i=0,l=root.length;i<l;i++){
_11d(_231,root[i],_233);
}
return _11d.filter(_234,_233);
};
_5.find=_11d;
_5.filter=_11d.filter;
_5.expr=_11d.selectors;
_5.expr[":"]=_5.expr.filters;
_11d.selectors.filters.hidden=function(elem){
return elem.offsetWidth===0||elem.offsetHeight===0;
};
_11d.selectors.filters.visible=function(elem){
return elem.offsetWidth>0||elem.offsetHeight>0;
};
_11d.selectors.filters.animated=function(elem){
return _5.grep(_5.timers,function(fn){
return elem===fn.elem;
}).length;
};
_5.multiFilter=function(expr,_23e,not){
if(not){
expr=":not("+expr+")";
}
return _11d.matches(expr,_23e);
};
_5.dir=function(elem,dir){
var _242=[],cur=elem[dir];
while(cur&&cur!=document){
if(cur.nodeType==1){
_242.push(cur);
}
cur=cur[dir];
}
return _242;
};
_5.nth=function(cur,_245,dir,elem){
_245=_245||1;
var num=0;
for(;cur;cur=cur[dir]){
if(cur.nodeType==1&&++num==_245){
break;
}
}
return cur;
};
_5.sibling=function(n,elem){
var r=[];
for(;n;n=n.nextSibling){
if(n.nodeType==1&&n!=elem){
r.push(n);
}
}
return r;
};
return;
_1.Sizzle=_11d;
})();
_5.event={add:function(elem,_24d,_24e,data,_250){
if(elem.nodeType==3||elem.nodeType==8){
return;
}
if(elem.setInterval&&elem!=_1){
elem=_1;
}
if(!_24e.guid){
_24e.guid=this.guid++;
}
if(data!==_2){
var fn=_24e;
_24e=this.proxy(fn);
_24e.data=data;
}
var _252=_5.data(elem,"events")||_5.data(elem,"events",{}),_253=_5.data(elem,"handle")||_5.data(elem,"handle",function(){
return typeof _5!=="undefined"&&!_5.event.triggered?_5.event.handle.apply(arguments.callee.elem,arguments):_2;
});
_253.elem=elem;
_5.each(_24d.split(/\s+/),function(_254,type){
var _256=type.split(".");
type=_256.shift();
_24e.type=_256.slice().sort().join(".");
var _257=_252[type];
if(_5.event.specialAll[type]){
_5.event.specialAll[type].setup.call(elem,data,_256);
}
if(!_257){
_257=_252[type]={};
if(!_5.event.special[type]||_5.event.special[type].setup.call(elem,data,_256)===false){
if(elem.addEventListener){
elem.addEventListener(type,_253,_250||false);
}else{
if(elem.attachEvent){
elem.attachEvent("on"+type,_253);
}
}
}
}
_257[_24e.guid]=_24e;
_5.event.global[type]=true;
});
elem=null;
},guid:1,global:{},remove:function(elem,_259,_25a){
if(elem.nodeType==3||elem.nodeType==8){
return;
}
var _25b=_5.data(elem,"events"),ret,_25d;
if(_25b){
if(_259===_2||(typeof _259==="string"&&_259.charAt(0)==".")){
for(var type in _25b){
this.remove(elem,type+(_259||""));
}
}else{
if(_259.type){
_25a=_259.handler;
_259=_259.type;
}
_5.each(_259.split(/\s+/),function(_25f,type){
var _261=type.split(".");
type=_261.shift();
var _262=RegExp("(^|\\.)"+_261.slice().sort().join(".*\\.")+"(\\.|$)");
if(_25b[type]){
if(_25a){
delete _25b[type][_25a.guid];
}else{
for(var _263 in _25b[type]){
if(_262.test(_25b[type][_263].type)){
delete _25b[type][_263];
}
}
}
if(_5.event.specialAll[type]){
_5.event.specialAll[type].teardown.call(elem,_261);
}
for(ret in _25b[type]){
break;
}
if(!ret){
if(!_5.event.special[type]||_5.event.special[type].teardown.call(elem,_261)===false){
if(elem.removeEventListener){
elem.removeEventListener(type,_5.data(elem,"handle"),false);
}else{
if(elem.detachEvent){
elem.detachEvent("on"+type,_5.data(elem,"handle"));
}
}
}
ret=null;
delete _25b[type];
}
}
});
}
for(ret in _25b){
break;
}
if(!ret){
var _264=_5.data(elem,"handle");
if(_264){
_264.elem=null;
}
_5.removeData(elem,"events");
_5.removeData(elem,"handle");
}
}
},trigger:function(_265,data,elem,_268){
var type=_265.type||_265;
if(!_268){
_265=typeof _265==="object"?_265[_100]?_265:_5.extend(_5.Event(type),_265):_5.Event(type);
if(type.indexOf("!")>=0){
_265.type=type=type.slice(0,-1);
_265.exclusive=true;
}
if(!elem){
_265.stopPropagation();
if(this.global[type]){
_5.each(_5.cache,function(){
if(this.events&&this.events[type]){
_5.event.trigger(_265,data,this.handle.elem);
}
});
}
}
if(!elem||elem.nodeType==3||elem.nodeType==8){
return _2;
}
_265.result=_2;
_265.target=elem;
data=_5.makeArray(data);
data.unshift(_265);
}
_265.currentTarget=elem;
var _26a=_5.data(elem,"handle");
if(_26a){
_26a.apply(elem,data);
}
if((!elem[type]||(_5.nodeName(elem,"a")&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false){
_265.result=false;
}
if(!_268&&elem[type]&&!_265.isDefaultPrevented()&&!(_5.nodeName(elem,"a")&&type=="click")){
this.triggered=true;
try{
elem[type]();
}
catch(e){
}
}
this.triggered=false;
if(!_265.isPropagationStopped()){
var _26b=elem.parentNode||elem.ownerDocument;
if(_26b){
_5.event.trigger(_265,data,_26b,true);
}
}
},handle:function(_26c){
var all,_26e;
_26c=arguments[0]=_5.event.fix(_26c||_1.event);
_26c.currentTarget=this;
var _26f=_26c.type.split(".");
_26c.type=_26f.shift();
all=!_26f.length&&!_26c.exclusive;
var _270=RegExp("(^|\\.)"+_26f.slice().sort().join(".*\\.")+"(\\.|$)");
_26e=(_5.data(this,"events")||{})[_26c.type];
for(var j in _26e){
var _272=_26e[j];
if(all||_270.test(_272.type)){
_26c.handler=_272;
_26c.data=_272.data;
var ret=_272.apply(this,arguments);
if(ret!==_2){
_26c.result=ret;
if(ret===false){
_26c.preventDefault();
_26c.stopPropagation();
}
}
if(_26c.isImmediatePropagationStopped()){
break;
}
}
}
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(_274){
if(_274[_100]){
return _274;
}
var _275=_274;
_274=_5.Event(_275);
for(var i=this.props.length,prop;i;){
prop=this.props[--i];
_274[prop]=_275[prop];
}
if(!_274.target){
_274.target=_274.srcElement||document;
}
if(_274.target.nodeType==3){
_274.target=_274.target.parentNode;
}
if(!_274.relatedTarget&&_274.fromElement){
_274.relatedTarget=_274.fromElement==_274.target?_274.toElement:_274.fromElement;
}
if(_274.pageX==null&&_274.clientX!=null){
var doc=document.documentElement,body=document.body;
_274.pageX=_274.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);
_274.pageY=_274.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);
}
if(!_274.which&&((_274.charCode||_274.charCode===0)?_274.charCode:_274.keyCode)){
_274.which=_274.charCode||_274.keyCode;
}
if(!_274.metaKey&&_274.ctrlKey){
_274.metaKey=_274.ctrlKey;
}
if(!_274.which&&_274.button){
_274.which=(_274.button&1?1:(_274.button&2?3:(_274.button&4?2:0)));
}
return _274;
},proxy:function(fn,_27b){
_27b=_27b||function(){
return fn.apply(this,arguments);
};
_27b.guid=fn.guid=fn.guid||_27b.guid||this.guid++;
return _27b;
},special:{ready:{setup:_27c,teardown:function(){
}}},specialAll:{live:{setup:function(_27d,_27e){
_5.event.add(this,_27e[0],_27f);
},teardown:function(_280){
if(_280.length){
var _281=0,name=RegExp("(^|\\.)"+_280[0]+"(\\.|$)");
_5.each((_5.data(this,"events").live||{}),function(){
if(name.test(this.type)){
_281++;
}
});
if(_281<1){
_5.event.remove(this,_280[0],_27f);
}
}
}}}};
_5.Event=function(src){
if(!this.preventDefault){
return new _5.Event(src);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
}else{
this.type=src;
}
this.timeStamp=now();
this[_100]=true;
};
function _284(){
return false;
};
function _285(){
return true;
};
_5.Event.prototype={preventDefault:function(){
this.isDefaultPrevented=_285;
var e=this.originalEvent;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}
e.returnValue=false;
},stopPropagation:function(){
this.isPropagationStopped=_285;
var e=this.originalEvent;
if(!e){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=_285;
this.stopPropagation();
},isDefaultPrevented:_284,isPropagationStopped:_284,isImmediatePropagationStopped:_284};
var _288=function(_289){
var _28a=_289.relatedTarget;
while(_28a&&_28a!=this){
try{
_28a=_28a.parentNode;
}
catch(e){
_28a=this;
}
}
if(_28a!=this){
_289.type=_289.data;
_5.event.handle.apply(this,arguments);
}
};
_5.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(orig,fix){
_5.event.special[fix]={setup:function(){
_5.event.add(this,orig,_288,fix);
},teardown:function(){
_5.event.remove(this,orig,_288);
}};
});
_5.fn.extend({bind:function(type,data,fn){
return type=="unload"?this.one(type,data,fn):this.each(function(){
_5.event.add(this,type,fn||data,fn&&data);
});
},one:function(type,data,fn){
var one=_5.event.proxy(fn||data,function(_294){
_5(this).unbind(_294,one);
return (fn||data).apply(this,arguments);
});
return this.each(function(){
_5.event.add(this,type,one,fn&&data);
});
},unbind:function(type,fn){
return this.each(function(){
_5.event.remove(this,type,fn);
});
},trigger:function(type,data){
return this.each(function(){
_5.event.trigger(type,data,this);
});
},triggerHandler:function(type,data){
if(this[0]){
var _29b=_5.Event(type);
_29b.preventDefault();
_29b.stopPropagation();
_5.event.trigger(_29b,data,this[0]);
return _29b.result;
}
},toggle:function(fn){
var args=arguments,i=1;
while(i<args.length){
_5.event.proxy(fn,args[i++]);
}
return this.click(_5.event.proxy(fn,function(_29f){
this.lastToggle=(this.lastToggle||0)%i;
_29f.preventDefault();
return args[this.lastToggle++].apply(this,arguments)||false;
}));
},hover:function(_2a0,_2a1){
return this.mouseenter(_2a0).mouseleave(_2a1);
},ready:function(fn){
_27c();
if(_5.isReady){
fn.call(document,_5);
}else{
_5.readyList.push(fn);
}
return this;
},live:function(type,fn){
var _2a5=_5.event.proxy(fn);
_2a5.guid+=this.selector+type;
_5(document).bind(_2a6(type,this.selector),this.selector,_2a5);
return this;
},die:function(type,fn){
_5(document).unbind(_2a6(type,this.selector),fn?{guid:fn.guid+this.selector+type}:null);
return this;
}});
function _27f(_2a9){
var _2aa=RegExp("(^|\\.)"+_2a9.type+"(\\.|$)"),stop=true,_2ac=[];
_5.each(_5.data(this,"events").live||[],function(i,fn){
if(_2aa.test(fn.type)){
var elem=_5(_2a9.target).closest(fn.data)[0];
if(elem){
_2ac.push({elem:elem,fn:fn});
}
}
});
_2ac.sort(function(a,b){
return _5.data(a.elem,"closest")-_5.data(b.elem,"closest");
});
_5.each(_2ac,function(){
if(this.fn.call(this.elem,_2a9,this.fn.data)===false){
return (stop=false);
}
});
return stop;
};
function _2a6(type,_2b3){
return ["live",type,_2b3.replace(/\./g,"`").replace(/ /g,"|")].join(".");
};
_5.extend({isReady:false,readyList:[],ready:function(){
if(!_5.isReady){
_5.isReady=true;
if(_5.readyList){
_5.each(_5.readyList,function(){
this.call(document,_5);
});
_5.readyList=null;
}
_5(document).triggerHandler("ready");
}
}});
var _2b4=false;
function _27c(){
if(_2b4){
return;
}
_2b4=true;
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",function(){
document.removeEventListener("DOMContentLoaded",arguments.callee,false);
_5.ready();
},false);
}else{
if(document.attachEvent){
document.attachEvent("onreadystatechange",function(){
if(document.readyState==="complete"){
document.detachEvent("onreadystatechange",arguments.callee);
_5.ready();
}
});
if(document.documentElement.doScroll&&_1==_1.top){
(function(){
if(_5.isReady){
return;
}
try{
document.documentElement.doScroll("left");
}
catch(error){
setTimeout(arguments.callee,0);
return;
}
_5.ready();
})();
}
}
}
_5.event.add(_1,"load",_5.ready);
};
_5.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,"+"change,select,submit,keydown,keypress,keyup,error").split(","),function(i,name){
_5.fn[name]=function(fn){
return fn?this.bind(name,fn):this.trigger(name);
};
});
_5(_1).bind("unload",function(){
for(var id in _5.cache){
if(id!=1&&_5.cache[id].handle){
_5.event.remove(_5.cache[id].handle.elem);
}
}
});
(function(){
_5.support={};
var root=document.documentElement,_2ba=document.createElement("script"),div=document.createElement("div"),id="script"+(new Date).getTime();
div.style.display="none";
div.innerHTML="   <link/><table></table><a href=\"/a\" style=\"color:red;float:left;opacity:.5;\">a</a><select><option>text</option></select><object><param/></object>";
var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];
if(!all||!all.length||!a){
return;
}
_5.support={leadingWhitespace:div.firstChild.nodeType==3,tbody:!div.getElementsByTagName("tbody").length,objectAll:!!div.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:a.style.opacity==="0.5",cssFloat:!!a.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};
_2ba.type="text/javascript";
try{
_2ba.appendChild(document.createTextNode("window."+id+"=1;"));
}
catch(e){
}
root.insertBefore(_2ba,root.firstChild);
if(_1[id]){
_5.support.scriptEval=true;
delete _1[id];
}
root.removeChild(_2ba);
if(div.attachEvent&&div.fireEvent){
div.attachEvent("onclick",function(){
_5.support.noCloneEvent=false;
div.detachEvent("onclick",arguments.callee);
});
div.cloneNode(true).fireEvent("onclick");
}
_5(function(){
var div=document.createElement("div");
div.style.width=div.style.paddingLeft="1px";
document.body.appendChild(div);
_5.boxModel=_5.support.boxModel=div.offsetWidth===2;
document.body.removeChild(div).style.display="none";
});
})();
var _9d=_5.support.cssFloat?"cssFloat":"styleFloat";
_5.props={"for":"htmlFor","class":"className","float":_9d,cssFloat:_9d,styleFloat:_9d,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};
_5.fn.extend({_load:_5.fn.load,load:function(url,_2c1,_2c2){
if(typeof url!=="string"){
return this._load(url);
}
var off=url.indexOf(" ");
if(off>=0){
var _2c4=url.slice(off,url.length);
url=url.slice(0,off);
}
var type="GET";
if(_2c1){
if(_5.isFunction(_2c1)){
_2c2=_2c1;
_2c1=null;
}else{
if(typeof _2c1==="object"){
_2c1=_5.param(_2c1);
type="POST";
}
}
}
var self=this;
_5.ajax({url:url,type:type,dataType:"html",data:_2c1,complete:function(res,_2c8){
if(_2c8=="success"||_2c8=="notmodified"){
self.html(_2c4?_5("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(_2c4):res.responseText);
}
if(_2c2){
self.each(_2c2,[res.responseText,_2c8,res]);
}
}});
return this;
},serialize:function(){
return _5.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
return this.elements?_5.makeArray(this.elements):this;
}).filter(function(){
return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type));
}).map(function(i,elem){
var val=_5(this).val();
return val==null?null:_5.isArray(val)?_5.map(val,function(val,i){
return {name:elem.name,value:val};
}):{name:elem.name,value:val};
}).get();
}});
_5.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){
_5.fn[o]=function(f){
return this.bind(o,f);
};
});
var jsc=now();
_5.extend({get:function(url,data,_2d4,type){
if(_5.isFunction(data)){
_2d4=data;
data=null;
}
return _5.ajax({type:"GET",url:url,data:data,success:_2d4,dataType:type});
},getScript:function(url,_2d7){
return _5.get(url,null,_2d7,"script");
},getJSON:function(url,data,_2da){
return _5.get(url,data,_2da,"json");
},post:function(url,data,_2dd,type){
if(_5.isFunction(data)){
_2dd=data;
data={};
}
return _5.ajax({type:"POST",url:url,data:data,success:_2dd,dataType:type});
},ajaxSetup:function(_2df){
_5.extend(_5.ajaxSettings,_2df);
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){
return _1.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){
s=_5.extend(true,s,_5.extend(true,{},_5.ajaxSettings,s));
var _2e1,jsre=/=\?(&|$)/g,_2e3,data,type=s.type.toUpperCase();
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=_5.param(s.data);
}
if(s.dataType=="jsonp"){
if(type=="GET"){
if(!s.url.match(jsre)){
s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";
}
}else{
if(!s.data||!s.data.match(jsre)){
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";
}
}
s.dataType="json";
}
if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){
_2e1="jsonp"+jsc++;
if(s.data){
s.data=(s.data+"").replace(jsre,"="+_2e1+"$1");
}
s.url=s.url.replace(jsre,"="+_2e1+"$1");
s.dataType="script";
_1[_2e1]=function(tmp){
data=tmp;
_2e7();
_2e8();
_1[_2e1]=_2;
try{
delete _1[_2e1];
}
catch(e){
}
if(head){
head.removeChild(_2ea);
}
};
}
if(s.dataType=="script"&&s.cache==null){
s.cache=false;
}
if(s.cache===false&&type=="GET"){
var ts=now();
var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");
s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");
}
if(s.data&&type=="GET"){
s.url+=(s.url.match(/\?/)?"&":"?")+s.data;
s.data=null;
}
if(s.global&&!_5.active++){
_5.event.trigger("ajaxStart");
}
var _2ed=/^(\w+:)?\/\/([^\/?#]+)/.exec(s.url);
if(s.dataType=="script"&&type=="GET"&&_2ed&&(_2ed[1]&&_2ed[1]!=location.protocol||_2ed[2]!=location.host)){
var head=document.getElementsByTagName("head")[0];
var _2ea=document.createElement("script");
_2ea.src=s.url;
if(s.scriptCharset){
_2ea.charset=s.scriptCharset;
}
if(!_2e1){
var done=false;
_2ea.onload=_2ea.onreadystatechange=function(){
if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
done=true;
_2e7();
_2e8();
_2ea.onload=_2ea.onreadystatechange=null;
head.removeChild(_2ea);
}
};
}
head.appendChild(_2ea);
return _2;
}
var _2ef=false;
var xhr=s.xhr();
if(s.username){
xhr.open(type,s.url,s.async,s.username,s.password);
}else{
xhr.open(type,s.url,s.async);
}
try{
if(s.data){
xhr.setRequestHeader("Content-Type",s.contentType);
}
if(s.ifModified){
xhr.setRequestHeader("If-Modified-Since",_5.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");
}
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);
}
catch(e){
}
if(s.beforeSend&&s.beforeSend(xhr,s)===false){
if(s.global&&!--_5.active){
_5.event.trigger("ajaxStop");
}
xhr.abort();
return false;
}
if(s.global){
_5.event.trigger("ajaxSend",[xhr,s]);
}
var _2f1=function(_2f2){
if(xhr.readyState==0){
if(ival){
clearInterval(ival);
ival=null;
if(s.global&&!--_5.active){
_5.event.trigger("ajaxStop");
}
}
}else{
if(!_2ef&&xhr&&(xhr.readyState==4||_2f2=="timeout")){
_2ef=true;
if(ival){
clearInterval(ival);
ival=null;
}
_2e3=_2f2=="timeout"?"timeout":!_5.httpSuccess(xhr)?"error":s.ifModified&&_5.httpNotModified(xhr,s.url)?"notmodified":"success";
if(_2e3=="success"){
try{
data=_5.httpData(xhr,s.dataType,s);
}
catch(e){
_2e3="parsererror";
}
}
if(_2e3=="success"){
var _2f4;
try{
_2f4=xhr.getResponseHeader("Last-Modified");
}
catch(e){
}
if(s.ifModified&&_2f4){
_5.lastModified[s.url]=_2f4;
}
if(!_2e1){
_2e7();
}
}else{
_5.handleError(s,xhr,_2e3);
}
_2e8();
if(_2f2){
xhr.abort();
}
if(s.async){
xhr=null;
}
}
}
};
if(s.async){
var ival=setInterval(_2f1,13);
if(s.timeout>0){
setTimeout(function(){
if(xhr&&!_2ef){
_2f1("timeout");
}
},s.timeout);
}
}
try{
xhr.send(s.data);
}
catch(e){
_5.handleError(s,xhr,null,e);
}
if(!s.async){
_2f1();
}
function _2e7(){
if(s.success){
s.success(data,_2e3);
}
if(s.global){
_5.event.trigger("ajaxSuccess",[xhr,s]);
}
};
function _2e8(){
if(s.complete){
s.complete(xhr,_2e3);
}
if(s.global){
_5.event.trigger("ajaxComplete",[xhr,s]);
}
if(s.global&&!--_5.active){
_5.event.trigger("ajaxStop");
}
};
return xhr;
},handleError:function(s,xhr,_2f7,e){
if(s.error){
s.error(xhr,_2f7,e);
}
if(s.global){
_5.event.trigger("ajaxError",[xhr,s,e]);
}
},active:0,httpSuccess:function(xhr){
try{
return !xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223;
}
catch(e){
}
return false;
},httpNotModified:function(xhr,url){
try{
var _2fc=xhr.getResponseHeader("Last-Modified");
return xhr.status==304||_2fc==_5.lastModified[url];
}
catch(e){
}
return false;
},httpData:function(xhr,type,s){
var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.tagName=="parsererror"){
throw "parsererror";
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==="string"){
if(type=="script"){
_5.globalEval(data);
}
if(type=="json"){
data=_1["eval"]("("+data+")");
}
}
return data;
},param:function(a){
var s=[];
function add(key,_307){
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(_307);
};
if(_5.isArray(a)||a.jquery){
_5.each(a,function(){
add(this.name,this.value);
});
}else{
for(var j in a){
if(_5.isArray(a[j])){
_5.each(a[j],function(){
add(j,this);
});
}else{
add(j,_5.isFunction(a[j])?a[j]():a[j]);
}
}
}
return s.join("&").replace(/%20/g,"+");
}});
var _309={},_30a,_30b=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
function _30c(type,num){
var obj={};
_5.each(_30b.concat.apply([],_30b.slice(0,num)),function(){
obj[this]=type;
});
return obj;
};
_5.fn.extend({show:function(_310,_311){
if(_310){
return this.animate(_30c("show",3),_310,_311);
}else{
for(var i=0,l=this.length;i<l;i++){
var old=_5.data(this[i],"olddisplay");
this[i].style.display=old||"";
if(_5.css(this[i],"display")==="none"){
var _315=this[i].tagName,_316;
if(_309[_315]){
_316=_309[_315];
}else{
var elem=_5("<"+_315+" />").appendTo("body");
_316=elem.css("display");
if(_316==="none"){
_316="block";
}
elem.remove();
_309[_315]=_316;
}
_5.data(this[i],"olddisplay",_316);
}
}
for(var i=0,l=this.length;i<l;i++){
this[i].style.display=_5.data(this[i],"olddisplay")||"";
}
return this;
}
},hide:function(_318,_319){
if(_318){
return this.animate(_30c("hide",3),_318,_319);
}else{
for(var i=0,l=this.length;i<l;i++){
var old=_5.data(this[i],"olddisplay");
if(!old&&old!=="none"){
_5.data(this[i],"olddisplay",_5.css(this[i],"display"));
}
}
for(var i=0,l=this.length;i<l;i++){
this[i].style.display="none";
}
return this;
}
},_toggle:_5.fn.toggle,toggle:function(fn,fn2){
var bool=typeof fn==="boolean";
return _5.isFunction(fn)&&_5.isFunction(fn2)?this._toggle.apply(this,arguments):fn==null||bool?this.each(function(){
var _320=bool?fn:_5(this).is(":hidden");
_5(this)[_320?"show":"hide"]();
}):this.animate(_30c("toggle",3),fn,fn2);
},fadeTo:function(_321,to,_323){
return this.animate({opacity:to},_321,_323);
},animate:function(prop,_325,_326,_327){
var _328=_5.speed(_325,_326,_327);
return this[_328.queue===false?"each":"queue"](function(){
var opt=_5.extend({},_328),p,_32b=this.nodeType==1&&_5(this).is(":hidden"),self=this;
for(p in prop){
if(prop[p]=="hide"&&_32b||prop[p]=="show"&&!_32b){
return opt.complete.call(this);
}
if((p=="height"||p=="width")&&this.style){
opt.display=_5.css(this,"display");
opt.overflow=this.style.overflow;
}
}
if(opt.overflow!=null){
this.style.overflow="hidden";
}
opt.curAnim=_5.extend({},prop);
_5.each(prop,function(name,val){
var e=new _5.fx(self,opt,name);
if(/toggle|show|hide/.test(val)){
e[val=="toggle"?_32b?"show":"hide":val](prop);
}else{
var _330=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),_331=e.cur(true)||0;
if(_330){
var end=parseFloat(_330[2]),unit=_330[3]||"px";
if(unit!="px"){
self.style[name]=(end||1)+unit;
_331=((end||1)/e.cur(true))*_331;
self.style[name]=_331+unit;
}
if(_330[1]){
end=((_330[1]=="-="?-1:1)*end)+_331;
}
e.custom(_331,end,unit);
}else{
e.custom(_331,val,"");
}
}
});
return true;
});
},stop:function(_334,_335){
var _336=_5.timers;
if(_334){
this.queue([]);
}
this.each(function(){
for(var i=_336.length-1;i>=0;i--){
if(_336[i].elem==this){
if(_335){
_336[i](true);
}
_336.splice(i,1);
}
}
});
if(!_335){
this.dequeue();
}
return this;
}});
_5.each({slideDown:_30c("show",1),slideUp:_30c("hide",1),slideToggle:_30c("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(name,_339){
_5.fn[name]=function(_33a,_33b){
return this.animate(_339,_33a,_33b);
};
});
_5.extend({speed:function(_33c,_33d,fn){
var opt=typeof _33c==="object"?_33c:{complete:fn||!fn&&_33d||_5.isFunction(_33c)&&_33c,duration:_33c,easing:fn&&_33d||_33d&&!_5.isFunction(_33d)&&_33d};
opt.duration=_5.fx.off?0:typeof opt.duration==="number"?opt.duration:_5.fx.speeds[opt.duration]||_5.fx.speeds._default;
opt.old=opt.complete;
opt.complete=function(){
if(opt.queue!==false){
_5(this).dequeue();
}
if(_5.isFunction(opt.old)){
opt.old.call(this);
}
};
return opt;
},easing:{linear:function(p,n,_342,diff){
return _342+diff*p;
},swing:function(p,n,_346,diff){
return ((-Math.cos(p*Math.PI)/2)+0.5)*diff+_346;
}},timers:[],fx:function(elem,_349,prop){
this.options=_349;
this.elem=elem;
this.prop=prop;
if(!_349.orig){
_349.orig={};
}
}});
_5.fx.prototype={update:function(){
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
(_5.fx.step[this.prop]||_5.fx.step._default)(this);
if((this.prop=="height"||this.prop=="width")&&this.elem.style){
this.elem.style.display="block";
}
},cur:function(_34b){
if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
return this.elem[this.prop];
}
var r=parseFloat(_5.css(this.elem,this.prop,_34b));
return r&&r>-10000?r:parseFloat(_5.curCSS(this.elem,this.prop))||0;
},custom:function(from,to,unit){
this.startTime=now();
this.start=from;
this.end=to;
this.unit=unit||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var self=this;
function t(_352){
return self.step(_352);
};
t.elem=this.elem;
if(t()&&_5.timers.push(t)&&!_30a){
_30a=setInterval(function(){
var _353=_5.timers;
for(var i=0;i<_353.length;i++){
if(!_353[i]()){
_353.splice(i--,1);
}
}
if(!_353.length){
clearInterval(_30a);
_30a=_2;
}
},13);
}
},show:function(){
this.options.orig[this.prop]=_5.attr(this.elem.style,this.prop);
this.options.show=true;
this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());
_5(this.elem).show();
},hide:function(){
this.options.orig[this.prop]=_5.attr(this.elem.style,this.prop);
this.options.hide=true;
this.custom(this.cur(),0);
},step:function(_355){
var t=now();
if(_355||t>=this.options.duration+this.startTime){
this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var done=true;
for(var i in this.options.curAnim){
if(this.options.curAnim[i]!==true){
done=false;
}
}
if(done){
if(this.options.display!=null){
this.elem.style.overflow=this.options.overflow;
this.elem.style.display=this.options.display;
if(_5.css(this.elem,"display")=="none"){
this.elem.style.display="block";
}
}
if(this.options.hide){
_5(this.elem).hide();
}
if(this.options.hide||this.options.show){
for(var p in this.options.curAnim){
_5.attr(this.elem.style,p,this.options.orig[p]);
}
}
this.options.complete.call(this.elem);
}
return false;
}else{
var n=t-this.startTime;
this.state=n/this.options.duration;
this.pos=_5.easing[this.options.easing||(_5.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update();
}
return true;
}};
_5.extend(_5.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){
_5.attr(fx.elem.style,"opacity",fx.now);
},_default:function(fx){
if(fx.elem.style&&fx.elem.style[fx.prop]!=null){
fx.elem.style[fx.prop]=fx.now+fx.unit;
}else{
fx.elem[fx.prop]=fx.now;
}
}}});
if(document.documentElement["getBoundingClientRect"]){
_5.fn.offset=function(){
if(!this[0]){
return {top:0,left:0};
}
if(this[0]===this[0].ownerDocument.body){
return _5.offset.bodyOffset(this[0]);
}
var box=this[0].getBoundingClientRect(),doc=this[0].ownerDocument,body=doc.body,_360=doc.documentElement,_361=_360.clientTop||body.clientTop||0,_362=_360.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||_5.boxModel&&_360.scrollTop||body.scrollTop)-_361,left=box.left+(self.pageXOffset||_5.boxModel&&_360.scrollLeft||body.scrollLeft)-_362;
return {top:top,left:left};
};
}else{
_5.fn.offset=function(){
if(!this[0]){
return {top:0,left:0};
}
if(this[0]===this[0].ownerDocument.body){
return _5.offset.bodyOffset(this[0]);
}
_5.offset.initialized||_5.offset.initialize();
var elem=this[0],_366=elem.offsetParent,_367=elem,doc=elem.ownerDocument,_369,_36a=doc.documentElement,body=doc.body,_6b=doc.defaultView,_36c=_6b.getComputedStyle(elem,null),top=elem.offsetTop,left=elem.offsetLeft;
while((elem=elem.parentNode)&&elem!==body&&elem!==_36a){
_369=_6b.getComputedStyle(elem,null);
top-=elem.scrollTop,left-=elem.scrollLeft;
if(elem===_366){
top+=elem.offsetTop,left+=elem.offsetLeft;
if(_5.offset.doesNotAddBorder&&!(_5.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.tagName))){
top+=parseInt(_369.borderTopWidth,10)||0,left+=parseInt(_369.borderLeftWidth,10)||0;
}
_367=_366,_366=elem.offsetParent;
}
if(_5.offset.subtractsBorderForOverflowNotVisible&&_369.overflow!=="visible"){
top+=parseInt(_369.borderTopWidth,10)||0,left+=parseInt(_369.borderLeftWidth,10)||0;
}
_36c=_369;
}
if(_36c.position==="relative"||_36c.position==="static"){
top+=body.offsetTop,left+=body.offsetLeft;
}
if(_36c.position==="fixed"){
top+=Math.max(_36a.scrollTop,body.scrollTop),left+=Math.max(_36a.scrollLeft,body.scrollLeft);
}
return {top:top,left:left};
};
}
_5.offset={initialize:function(){
if(this.initialized){
return;
}
var body=document.body,_370=document.createElement("div"),_371,_372,_373,td,_375,prop,_377=body.style.marginTop,html="<div style=\"position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;\"><div></div></div><table style=\"position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td></td></tr></table>";
_375={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};
for(prop in _375){
_370.style[prop]=_375[prop];
}
_370.innerHTML=html;
body.insertBefore(_370,body.firstChild);
_371=_370.firstChild,_372=_371.firstChild,td=_371.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(_372.offsetTop!==5);
this.doesAddBorderForTableAndCells=(td.offsetTop===5);
_371.style.overflow="hidden",_371.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(_372.offsetTop===-5);
body.style.marginTop="1px";
this.doesNotIncludeMarginInBodyOffset=(body.offsetTop===0);
body.style.marginTop=_377;
body.removeChild(_370);
this.initialized=true;
},bodyOffset:function(body){
_5.offset.initialized||_5.offset.initialize();
var top=body.offsetTop,left=body.offsetLeft;
if(_5.offset.doesNotIncludeMarginInBodyOffset){
top+=parseInt(_5.curCSS(body,"marginTop",true),10)||0,left+=parseInt(_5.curCSS(body,"marginLeft",true),10)||0;
}
return {top:top,left:left};
}};
_5.fn.extend({position:function(){
var left=0,top=0,_37e;
if(this[0]){
var _37f=this.offsetParent(),_380=this.offset(),_381=/^body|html$/i.test(_37f[0].tagName)?{top:0,left:0}:_37f.offset();
_380.top-=num(this,"marginTop");
_380.left-=num(this,"marginLeft");
_381.top+=num(_37f,"borderTopWidth");
_381.left+=num(_37f,"borderLeftWidth");
_37e={top:_380.top-_381.top,left:_380.left-_381.left};
}
return _37e;
},offsetParent:function(){
var _382=this[0].offsetParent||document.body;
while(_382&&(!/^body|html$/i.test(_382.tagName)&&_5.css(_382,"position")=="static")){
_382=_382.offsetParent;
}
return _5(_382);
}});
_5.each(["Left","Top"],function(i,name){
var _385="scroll"+name;
_5.fn[_385]=function(val){
if(!this[0]){
return null;
}
return val!==_2?this.each(function(){
this==_1||this==document?_1.scrollTo(!i?val:_5(_1).scrollLeft(),i?val:_5(_1).scrollTop()):this[_385]=val;
}):this[0]==_1||this[0]==document?self[i?"pageYOffset":"pageXOffset"]||_5.boxModel&&document.documentElement[_385]||document.body[_385]:this[0][_385];
};
});
_5.each(["Height","Width"],function(i,name){
var tl=i?"Left":"Top",br=i?"Right":"Bottom",_38b=name.toLowerCase();
_5.fn["inner"+name]=function(){
return this[0]?_5.css(this[0],_38b,false,"padding"):null;
};
_5.fn["outer"+name]=function(_38c){
return this[0]?_5.css(this[0],_38b,false,_38c?"margin":"border"):null;
};
var type=name.toLowerCase();
_5.fn[type]=function(size){
return this[0]==_1?document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(document.documentElement["client"+name],document.body["scroll"+name],document.documentElement["scroll"+name],document.body["offset"+name],document.documentElement["offset"+name]):size===_2?(this.length?_5.css(this[0],type):null):this.css(type,typeof size==="string"?size:size+"px");
};
});
})();
;
include.setPath('apps/gowane');
include.resources("bind","helpers","phrase_book","OpenLayers-2.8/OpenLayers.js","quickpager.jquery","jquery-ui-1.8rc3.custom.min","jquery.listnav.min-2.1");
include.plugins("controller","view","model");
include(function(){
include.models("route","feature","category");
include.controllers("canvas","dashboard","map","dashboard_routing","dashboard_feedback","dashboard_localization","dashboard_index","map_features","map_markers");
include.views();
});
;
include.setPath('resources');
(function(){
function _1(_2){
var _3=[];
for(var i=0;i<_2.length;i++){
_3.push(_2[i]);
}
return _3;
};
Function.prototype.bind=function(_5){
var _6=this;
var _7=_1(arguments).slice(1);
return function(){
var _8=_1(arguments);
return _6.apply(_5,_7.concat(_8));
};
};
Function.prototype.bindEventListener=function(_9){
var _a=this;
var _b=_1(arguments).slice(1);
return function(_c){
return _a.apply(_9,[_c||window.event].concat(_b));
};
};
})();
;
include.setPath('resources');
$.fn.assertExists=function(){
if(this.length==0){
throw new Error("Assertion failed: $('"+$(this).selector+"') did not return any elements");
}
return this;
};
$.fn.shorten=function(_1,_2){
if(_1.length<_2){
return _1;
}
return _1.substring(0,_2)+"...";
};
;
include.setPath('resources');
var PhraseBook={"MISSING_START_POINT_FOR_ROUTE":"No start point for the route has been selected","MISSING_END_POINT_FOR_ROUTE":"No end point for the route has been selected"};
;
include.setPath('resources/OpenLayers-2.8');
var OpenLayers={singleFile:true};
(function(){
var _1=(typeof OpenLayers=="object"&&OpenLayers.singleFile);
window.OpenLayers={_scriptName:(!_1)?"lib/OpenLayers.js":"OpenLayers.js",_getScriptLocation:function(){
var _2="";
var _3=new RegExp("(^|(.*?\\/))("+OpenLayers._scriptName+")(\\?|$)");
var _4=document.getElementsByTagName("script");
for(var i=0,_6=_4.length;i<_6;i++){
var _7=_4[i].getAttribute("src");
if(_7){
var _8=_7.match(_3);
if(_8){
_2=_8[1];
break;
}
}
}
return _2;
}};
if(!_1){
var _9=new Array("OpenLayers/Util.js","OpenLayers/BaseTypes.js","OpenLayers/BaseTypes/Class.js","OpenLayers/BaseTypes/Bounds.js","OpenLayers/BaseTypes/Element.js","OpenLayers/BaseTypes/LonLat.js","OpenLayers/BaseTypes/Pixel.js","OpenLayers/BaseTypes/Size.js","OpenLayers/Console.js","OpenLayers/Tween.js","Rico/Corner.js","Rico/Color.js","OpenLayers/Ajax.js","OpenLayers/Events.js","OpenLayers/Request.js","OpenLayers/Request/XMLHttpRequest.js","OpenLayers/Projection.js","OpenLayers/Map.js","OpenLayers/Layer.js","OpenLayers/Icon.js","OpenLayers/Marker.js","OpenLayers/Marker/Box.js","OpenLayers/Popup.js","OpenLayers/Tile.js","OpenLayers/Tile/Image.js","OpenLayers/Tile/WFS.js","OpenLayers/Layer/Image.js","OpenLayers/Layer/SphericalMercator.js","OpenLayers/Layer/EventPane.js","OpenLayers/Layer/FixedZoomLevels.js","OpenLayers/Layer/Google.js","OpenLayers/Layer/VirtualEarth.js","OpenLayers/Layer/Yahoo.js","OpenLayers/Layer/HTTPRequest.js","OpenLayers/Layer/Grid.js","OpenLayers/Layer/MapGuide.js","OpenLayers/Layer/MapServer.js","OpenLayers/Layer/MapServer/Untiled.js","OpenLayers/Layer/KaMap.js","OpenLayers/Layer/KaMapCache.js","OpenLayers/Layer/MultiMap.js","OpenLayers/Layer/Markers.js","OpenLayers/Layer/Text.js","OpenLayers/Layer/WorldWind.js","OpenLayers/Layer/ArcGIS93Rest.js","OpenLayers/Layer/WMS.js","OpenLayers/Layer/WMS/Untiled.js","OpenLayers/Layer/ArcIMS.js","OpenLayers/Layer/GeoRSS.js","OpenLayers/Layer/Boxes.js","OpenLayers/Layer/XYZ.js","OpenLayers/Layer/TMS.js","OpenLayers/Layer/TileCache.js","OpenLayers/Popup/Anchored.js","OpenLayers/Popup/AnchoredBubble.js","OpenLayers/Popup/Framed.js","OpenLayers/Popup/FramedCloud.js","OpenLayers/Feature.js","OpenLayers/Feature/Vector.js","OpenLayers/Feature/WFS.js","OpenLayers/Handler.js","OpenLayers/Handler/Click.js","OpenLayers/Handler/Hover.js","OpenLayers/Handler/Point.js","OpenLayers/Handler/Path.js","OpenLayers/Handler/Polygon.js","OpenLayers/Handler/Feature.js","OpenLayers/Handler/Drag.js","OpenLayers/Handler/RegularPolygon.js","OpenLayers/Handler/Box.js","OpenLayers/Handler/MouseWheel.js","OpenLayers/Handler/Keyboard.js","OpenLayers/Control.js","OpenLayers/Control/Attribution.js","OpenLayers/Control/Button.js","OpenLayers/Control/ZoomBox.js","OpenLayers/Control/ZoomToMaxExtent.js","OpenLayers/Control/DragPan.js","OpenLayers/Control/Navigation.js","OpenLayers/Control/MouseDefaults.js","OpenLayers/Control/MousePosition.js","OpenLayers/Control/OverviewMap.js","OpenLayers/Control/KeyboardDefaults.js","OpenLayers/Control/PanZoom.js","OpenLayers/Control/PanZoomBar.js","OpenLayers/Control/ArgParser.js","OpenLayers/Control/Permalink.js","OpenLayers/Control/Scale.js","OpenLayers/Control/ScaleLine.js","OpenLayers/Control/Snapping.js","OpenLayers/Control/Split.js","OpenLayers/Control/LayerSwitcher.js","OpenLayers/Control/DrawFeature.js","OpenLayers/Control/DragFeature.js","OpenLayers/Control/ModifyFeature.js","OpenLayers/Control/Panel.js","OpenLayers/Control/SelectFeature.js","OpenLayers/Control/NavigationHistory.js","OpenLayers/Control/Measure.js","OpenLayers/Control/WMSGetFeatureInfo.js","OpenLayers/Geometry.js","OpenLayers/Geometry/Rectangle.js","OpenLayers/Geometry/Collection.js","OpenLayers/Geometry/Point.js","OpenLayers/Geometry/MultiPoint.js","OpenLayers/Geometry/Curve.js","OpenLayers/Geometry/LineString.js","OpenLayers/Geometry/LinearRing.js","OpenLayers/Geometry/Polygon.js","OpenLayers/Geometry/MultiLineString.js","OpenLayers/Geometry/MultiPolygon.js","OpenLayers/Geometry/Surface.js","OpenLayers/Renderer.js","OpenLayers/Renderer/Elements.js","OpenLayers/Renderer/SVG.js","OpenLayers/Renderer/Canvas.js","OpenLayers/Renderer/VML.js","OpenLayers/Layer/Vector.js","OpenLayers/Layer/Vector/RootContainer.js","OpenLayers/Strategy.js","OpenLayers/Strategy/Fixed.js","OpenLayers/Strategy/Cluster.js","OpenLayers/Strategy/Paging.js","OpenLayers/Strategy/BBOX.js","OpenLayers/Strategy/Save.js","OpenLayers/Protocol.js","OpenLayers/Protocol/HTTP.js","OpenLayers/Protocol/SQL.js","OpenLayers/Protocol/SQL/Gears.js","OpenLayers/Protocol/WFS.js","OpenLayers/Protocol/WFS/v1.js","OpenLayers/Protocol/WFS/v1_0_0.js","OpenLayers/Protocol/WFS/v1_1_0.js","OpenLayers/Layer/PointTrack.js","OpenLayers/Layer/GML.js","OpenLayers/Style.js","OpenLayers/StyleMap.js","OpenLayers/Rule.js","OpenLayers/Filter.js","OpenLayers/Filter/FeatureId.js","OpenLayers/Filter/Logical.js","OpenLayers/Filter/Comparison.js","OpenLayers/Filter/Spatial.js","OpenLayers/Format.js","OpenLayers/Format/XML.js","OpenLayers/Format/ArcXML.js","OpenLayers/Format/ArcXML/Features.js","OpenLayers/Format/GML.js","OpenLayers/Format/GML/Base.js","OpenLayers/Format/GML/v2.js","OpenLayers/Format/GML/v3.js","OpenLayers/Format/KML.js","OpenLayers/Format/GeoRSS.js","OpenLayers/Format/WFS.js","OpenLayers/Format/WFSCapabilities.js","OpenLayers/Format/WFSCapabilities/v1.js","OpenLayers/Format/WFSCapabilities/v1_0_0.js","OpenLayers/Format/WFSCapabilities/v1_1_0.js","OpenLayers/Format/WFSDescribeFeatureType.js","OpenLayers/Format/WMSDescribeLayer.js","OpenLayers/Format/WMSDescribeLayer/v1_1.js","OpenLayers/Format/WKT.js","OpenLayers/Format/OSM.js","OpenLayers/Format/GPX.js","OpenLayers/Format/Filter.js","OpenLayers/Format/Filter/v1.js","OpenLayers/Format/Filter/v1_0_0.js","OpenLayers/Format/Filter/v1_1_0.js","OpenLayers/Format/SLD.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/SLD/v1_0_0.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/WFST.js","OpenLayers/Format/WFST/v1.js","OpenLayers/Format/WFST/v1_0_0.js","OpenLayers/Format/WFST/v1_1_0.js","OpenLayers/Format/Text.js","OpenLayers/Format/JSON.js","OpenLayers/Format/GeoJSON.js","OpenLayers/Format/WMC.js","OpenLayers/Format/WMC/v1.js","OpenLayers/Format/WMC/v1_0_0.js","OpenLayers/Format/WMC/v1_1_0.js","OpenLayers/Format/WMSCapabilities.js","OpenLayers/Format/WMSCapabilities/v1_1.js","OpenLayers/Format/WMSCapabilities/v1_1_0.js","OpenLayers/Format/WMSCapabilities/v1_1_1.js","OpenLayers/Format/WMSGetFeatureInfo.js","OpenLayers/Layer/WFS.js","OpenLayers/Control/GetFeature.js","OpenLayers/Control/MouseToolbar.js","OpenLayers/Control/NavToolbar.js","OpenLayers/Control/PanPanel.js","OpenLayers/Control/Pan.js","OpenLayers/Control/ZoomIn.js","OpenLayers/Control/ZoomOut.js","OpenLayers/Control/ZoomPanel.js","OpenLayers/Control/EditingToolbar.js","OpenLayers/Lang.js","OpenLayers/Lang/en.js");
var _a=navigator.userAgent;
var _b=(_a.match("MSIE")||_a.match("Safari"));
if(_b){
var _c=new Array(_9.length);
}
var _d=OpenLayers._getScriptLocation()+"lib/";
for(var i=0,_f=_9.length;i<_f;i++){
if(_b){
_c[i]="<script src='"+_d+_9[i]+"'></script>";
}else{
var s=document.createElement("script");
s.src=_d+_9[i];
var h=document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0]:document.body;
h.appendChild(s);
}
}
if(_b){
document.write(_c.join(""));
}
}
})();
OpenLayers.VERSION_NUMBER="OpenLayers 2.8 -- $Revision: 9492 $";
OpenLayers.String={startsWith:function(str,sub){
return (str.indexOf(sub)==0);
},contains:function(str,sub){
return (str.indexOf(sub)!=-1);
},trim:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
},camelize:function(str){
var _18=str.split("-");
var _19=_18[0];
for(var i=1,len=_18.length;i<len;i++){
var s=_18[i];
_19+=s.charAt(0).toUpperCase()+s.substring(1);
}
return _19;
},format:function(_1d,_1e,_1f){
if(!_1e){
_1e=window;
}
var _20=function(str,_22){
var _23;
var _24=_22.split(/\.+/);
for(var i=0;i<_24.length;i++){
if(i==0){
_23=_1e;
}
_23=_23[_24[i]];
}
if(typeof _23=="function"){
_23=_1f?_23.apply(null,_1f):_23();
}
if(typeof _23=="undefined"){
return "undefined";
}else{
return _23;
}
};
return _1d.replace(OpenLayers.String.tokenRegEx,_20);
},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(_26){
return OpenLayers.String.numberRegEx.test(_26);
},numericIf:function(_27){
return OpenLayers.String.isNumeric(_27)?parseFloat(_27):_27;
}};
if(!String.prototype.startsWith){
String.prototype.startsWith=function(_28){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.String.startsWith"}));
return OpenLayers.String.startsWith(this,_28);
};
}
if(!String.prototype.contains){
String.prototype.contains=function(str){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.String.contains"}));
return OpenLayers.String.contains(this,str);
};
}
if(!String.prototype.trim){
String.prototype.trim=function(){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.String.trim"}));
return OpenLayers.String.trim(this);
};
}
if(!String.prototype.camelize){
String.prototype.camelize=function(){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.String.camelize"}));
return OpenLayers.String.camelize(this);
};
}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){
var fig=0;
if(sig>0){
fig=parseFloat(num.toPrecision(sig));
}
return fig;
},format:function(num,dec,_2f,_30){
dec=(typeof dec!="undefined")?dec:0;
_2f=(typeof _2f!="undefined")?_2f:OpenLayers.Number.thousandsSeparator;
_30=(typeof _30!="undefined")?_30:OpenLayers.Number.decimalSeparator;
if(dec!=null){
num=parseFloat(num.toFixed(dec));
}
var _31=num.toString().split(".");
if(_31.length==1&&dec==null){
dec=0;
}
var _32=_31[0];
if(_2f){
var _33=/(-?[0-9]+)([0-9]{3})/;
while(_33.test(_32)){
_32=_32.replace(_33,"$1"+_2f+"$2");
}
}
var str;
if(dec==0){
str=_32;
}else{
var rem=_31.length>1?_31[1]:"0";
if(dec!=null){
rem=rem+new Array(dec-rem.length+1).join("0");
}
str=_32+_30+rem;
}
return str;
}};
if(!Number.prototype.limitSigDigs){
Number.prototype.limitSigDigs=function(sig){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.Number.limitSigDigs"}));
return OpenLayers.Number.limitSigDigs(this,sig);
};
}
OpenLayers.Function={bind:function(_37,_38){
var _39=Array.prototype.slice.apply(arguments,[2]);
return function(){
var _3a=_39.concat(Array.prototype.slice.apply(arguments,[0]));
return _37.apply(_38,_3a);
};
},bindAsEventListener:function(_3b,_3c){
return function(_3d){
return _3b.call(_3c,_3d||window.event);
};
}};
if(!Function.prototype.bind){
Function.prototype.bind=function(){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.Function.bind"}));
Array.prototype.unshift.apply(arguments,[this]);
return OpenLayers.Function.bind.apply(null,arguments);
};
}
if(!Function.prototype.bindAsEventListener){
Function.prototype.bindAsEventListener=function(_3e){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.Function.bindAsEventListener"}));
return OpenLayers.Function.bindAsEventListener(this,_3e);
};
}
OpenLayers.Array={filter:function(_3f,_40,_41){
var _42=[];
if(Array.prototype.filter){
_42=_3f.filter(_40,_41);
}else{
var len=_3f.length;
if(typeof _40!="function"){
throw new TypeError();
}
for(var i=0;i<len;i++){
if(i in _3f){
var val=_3f[i];
if(_40.call(_41,val,i,_3f)){
_42.push(val);
}
}
}
}
return _42;
}};
OpenLayers.Class=function(){
var _46=function(){
if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){
this.initialize.apply(this,arguments);
}
};
var _47={};
var _48,_49;
for(var i=0,len=arguments.length;i<len;++i){
if(typeof arguments[i]=="function"){
if(i==0&&len>1){
_49=arguments[i].prototype.initialize;
arguments[i].prototype.initialize=function(){
};
_47=new arguments[i];
if(_49===undefined){
delete arguments[i].prototype.initialize;
}else{
arguments[i].prototype.initialize=_49;
}
}
_48=arguments[i].prototype;
}else{
_48=arguments[i];
}
OpenLayers.Util.extend(_47,_48);
}
_46.prototype=_47;
return _46;
};
OpenLayers.Class.isPrototype=function(){
};
OpenLayers.Class.create=function(){
return function(){
if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){
this.initialize.apply(this,arguments);
}
};
};
OpenLayers.Class.inherit=function(){
var _4c=arguments[0];
var _4d=new _4c(OpenLayers.Class.isPrototype);
for(var i=1,len=arguments.length;i<len;i++){
if(typeof arguments[i]=="function"){
var _50=arguments[i];
arguments[i]=new _50(OpenLayers.Class.isPrototype);
}
OpenLayers.Util.extend(_4d,arguments[i]);
}
return _4d;
};
OpenLayers.Util={};
OpenLayers.Util.getElement=function(){
var _51=[];
for(var i=0,len=arguments.length;i<len;i++){
var _54=arguments[i];
if(typeof _54=="string"){
_54=document.getElementById(_54);
}
if(arguments.length==1){
return _54;
}
_51.push(_54);
}
return _51;
};
if(typeof window.$==="undefined"){
window.$=OpenLayers.Util.getElement;
}
OpenLayers.Util.extend=function(_55,_56){
_55=_55||{};
if(_56){
for(var _57 in _56){
var _58=_56[_57];
if(_58!==undefined){
_55[_57]=_58;
}
}
var _59=typeof window.Event=="function"&&_56 instanceof window.Event;
if(!_59&&_56.hasOwnProperty&&_56.hasOwnProperty("toString")){
_55.toString=_56.toString;
}
}
return _55;
};
OpenLayers.Util.removeItem=function(_5a,_5b){
for(var i=_5a.length-1;i>=0;i--){
if(_5a[i]==_5b){
_5a.splice(i,1);
}
}
return _5a;
};
OpenLayers.Util.clearArray=function(_5d){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"array = []"}));
_5d.length=0;
};
OpenLayers.Util.indexOf=function(_5e,obj){
for(var i=0,len=_5e.length;i<len;i++){
if(_5e[i]==obj){
return i;
}
}
return -1;
};
OpenLayers.Util.modifyDOMElement=function(_62,id,px,sz,_66,_67,_68,_69){
if(id){
_62.id=id;
}
if(px){
_62.style.left=px.x+"px";
_62.style.top=px.y+"px";
}
if(sz){
_62.style.width=sz.w+"px";
_62.style.height=sz.h+"px";
}
if(_66){
_62.style.position=_66;
}
if(_67){
_62.style.border=_67;
}
if(_68){
_62.style.overflow=_68;
}
if(parseFloat(_69)>=0&&parseFloat(_69)<1){
_62.style.filter="alpha(opacity="+(_69*100)+")";
_62.style.opacity=_69;
}else{
if(parseFloat(_69)==1){
_62.style.filter="";
_62.style.opacity="";
}
}
};
OpenLayers.Util.createDiv=function(id,px,sz,_6d,_6e,_6f,_70,_71){
var dom=document.createElement("div");
if(_6d){
dom.style.backgroundImage="url("+_6d+")";
}
if(!id){
id=OpenLayers.Util.createUniqueID("OpenLayersDiv");
}
if(!_6e){
_6e="absolute";
}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,_6e,_6f,_70,_71);
return dom;
};
OpenLayers.Util.createImage=function(id,px,sz,_76,_77,_78,_79,_7a){
var _7b=document.createElement("img");
if(!id){
id=OpenLayers.Util.createUniqueID("OpenLayersDiv");
}
if(!_77){
_77="relative";
}
OpenLayers.Util.modifyDOMElement(_7b,id,px,sz,_77,_78,null,_79);
if(_7a){
_7b.style.display="none";
OpenLayers.Event.observe(_7b,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,_7b));
OpenLayers.Event.observe(_7b,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,_7b));
}
_7b.style.alt=id;
_7b.galleryImg="no";
if(_76){
_7b.src=_76;
}
return _7b;
};
OpenLayers.Util.setOpacity=function(_7c,_7d){
OpenLayers.Util.modifyDOMElement(_7c,null,null,null,null,null,null,_7d);
};
OpenLayers.Util.onImageLoad=function(){
if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){
this.style.backgroundColor="transparent";
this.style.display="";
}
};
OpenLayers.Util.onImageLoadErrorColor="pink";
OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;
OpenLayers.Util.onImageLoadError=function(){
this._attempts=(this._attempts)?(this._attempts+1):1;
if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){
var _7e=this.urls;
if(_7e&&_7e instanceof Array&&_7e.length>1){
var src=this.src.toString();
var _80,k;
for(k=0;_80=_7e[k];k++){
if(src.indexOf(_80)!=-1){
break;
}
}
var _82=Math.floor(_7e.length*Math.random());
var _83=_7e[_82];
k=0;
while(_83==_80&&k++<4){
_82=Math.floor(_7e.length*Math.random());
_83=_7e[_82];
}
this.src=src.replace(_80,_83);
}else{
this.src=this.src;
}
}else{
this.style.backgroundColor=OpenLayers.Util.onImageLoadErrorColor;
}
this.style.display="";
};
OpenLayers.Util.alphaHackNeeded=null;
OpenLayers.Util.alphaHack=function(){
if(OpenLayers.Util.alphaHackNeeded==null){
var _84=navigator.appVersion.split("MSIE");
var _85=parseFloat(_84[1]);
var _86=false;
try{
_86=!!(document.body.filters);
}
catch(e){
}
OpenLayers.Util.alphaHackNeeded=(_86&&(_85>=5.5)&&(_85<7));
}
return OpenLayers.Util.alphaHackNeeded;
};
OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,_8b,_8c,_8d,_8e,_8f){
OpenLayers.Util.modifyDOMElement(div,id,px,sz,_8c,null,null,_8f);
var img=div.childNodes[0];
if(_8b){
img.src=_8b;
}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",_8d);
if(OpenLayers.Util.alphaHack()){
if(div.style.display!="none"){
div.style.display="inline-block";
}
if(_8e==null){
_8e="scale";
}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+_8e+"')";
if(parseFloat(div.style.opacity)>=0&&parseFloat(div.style.opacity)<1){
div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";
}
img.style.filter="alpha(opacity=0)";
}
};
OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,_94,_95,_96,_97,_98,_99){
var div=OpenLayers.Util.createDiv();
var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);
div.appendChild(img);
if(_99){
img.style.display="none";
OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));
OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));
}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,_94,_95,_96,_97,_98);
return div;
};
OpenLayers.Util.upperCaseObject=function(_9c){
var _9d={};
for(var key in _9c){
_9d[key.toUpperCase()]=_9c[key];
}
return _9d;
};
OpenLayers.Util.applyDefaults=function(to,_a0){
to=to||{};
var _a1=typeof window.Event=="function"&&_a0 instanceof window.Event;
for(var key in _a0){
if(to[key]===undefined||(!_a1&&_a0.hasOwnProperty&&_a0.hasOwnProperty(key)&&!to.hasOwnProperty(key))){
to[key]=_a0[key];
}
}
if(!_a1&&_a0&&_a0.hasOwnProperty&&_a0.hasOwnProperty("toString")&&!to.hasOwnProperty("toString")){
to.toString=_a0.toString;
}
return to;
};
OpenLayers.Util.getParameterString=function(_a3){
var _a4=[];
for(var key in _a3){
var _a6=_a3[key];
if((_a6!=null)&&(typeof _a6!="function")){
var _a7;
if(typeof _a6=="object"&&_a6.constructor==Array){
var _a8=[];
for(var _a9=0,len=_a6.length;_a9<len;_a9++){
_a8.push(encodeURIComponent(_a6[_a9]));
}
_a7=_a8.join(",");
}else{
_a7=encodeURIComponent(_a6);
}
_a4.push(encodeURIComponent(key)+"="+_a7);
}
}
return _a4.join("&");
};
OpenLayers.ImgPath="";
OpenLayers.Util.getImagesLocation=function(){
return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");
};
OpenLayers.Util.Try=function(){
var _ab=null;
for(var i=0,len=arguments.length;i<len;i++){
var _ae=arguments[i];
try{
_ab=_ae();
break;
}
catch(e){
}
}
return _ab;
};
OpenLayers.Util.getNodes=function(p,_b0){
var _b1=OpenLayers.Util.Try(function(){
return OpenLayers.Util._getNodes(p.documentElement.childNodes,_b0);
},function(){
return OpenLayers.Util._getNodes(p.childNodes,_b0);
});
return _b1;
};
OpenLayers.Util._getNodes=function(_b2,_b3){
var _b4=[];
for(var i=0,len=_b2.length;i<len;i++){
if(_b2[i].nodeName==_b3){
_b4.push(_b2[i]);
}
}
return _b4;
};
OpenLayers.Util.getTagText=function(_b7,_b8,_b9){
var _ba=OpenLayers.Util.getNodes(_b7,_b8);
if(_ba&&(_ba.length>0)){
if(!_b9){
_b9=0;
}
if(_ba[_b9].childNodes.length>1){
return _ba.childNodes[1].nodeValue;
}else{
if(_ba[_b9].childNodes.length==1){
return _ba[_b9].firstChild.nodeValue;
}
}
}else{
return "";
}
};
OpenLayers.Util.getXmlNodeValue=function(_bb){
var val=null;
OpenLayers.Util.Try(function(){
val=_bb.text;
if(!val){
val=_bb.textContent;
}
if(!val){
val=_bb.firstChild.nodeValue;
}
},function(){
val=_bb.textContent;
});
return val;
};
OpenLayers.Util.mouseLeft=function(evt,div){
var _bf=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;
while(_bf!=div&&_bf!=null){
_bf=_bf.parentNode;
}
return (_bf!=div);
};
OpenLayers.Util.DEFAULT_PRECISION=14;
OpenLayers.Util.toFloat=function(_c0,_c1){
if(_c1==null){
_c1=OpenLayers.Util.DEFAULT_PRECISION;
}
var _c0;
if(_c1==0){
_c0=parseFloat(_c0);
}else{
_c0=parseFloat(parseFloat(_c0).toPrecision(_c1));
}
return _c0;
};
OpenLayers.Util.rad=function(x){
return x*Math.PI/180;
};
OpenLayers.Util.distVincenty=function(p1,p2){
var a=6378137,b=6356752.3142,f=1/298.257223563;
var L=OpenLayers.Util.rad(p2.lon-p1.lon);
var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));
var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));
var _cb=Math.sin(U1),_cc=Math.cos(U1);
var _cd=Math.sin(U2),_ce=Math.cos(U2);
var _cf=L,_d0=2*Math.PI;
var _d1=20;
while(Math.abs(_cf-_d0)>1e-12&&--_d1>0){
var _d2=Math.sin(_cf),_d3=Math.cos(_cf);
var _d4=Math.sqrt((_ce*_d2)*(_ce*_d2)+(_cc*_cd-_cb*_ce*_d3)*(_cc*_cd-_cb*_ce*_d3));
if(_d4==0){
return 0;
}
var _d5=_cb*_cd+_cc*_ce*_d3;
var _d6=Math.atan2(_d4,_d5);
var _d7=Math.asin(_cc*_ce*_d2/_d4);
var _d8=Math.cos(_d7)*Math.cos(_d7);
var _d9=_d5-2*_cb*_cd/_d8;
var C=f/16*_d8*(4+f*(4-3*_d8));
_d0=_cf;
_cf=L+(1-C)*f*Math.sin(_d7)*(_d6+C*_d4*(_d9+C*_d5*(-1+2*_d9*_d9)));
}
if(_d1==0){
return NaN;
}
var uSq=_d8*(a*a-b*b)/(b*b);
var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));
var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));
var _de=B*_d4*(_d9+B/4*(_d5*(-1+2*_d9*_d9)-B/6*_d9*(-3+4*_d4*_d4)*(-3+4*_d9*_d9)));
var s=b*A*(_d6-_de);
var d=s.toFixed(3)/1000;
return d;
};
OpenLayers.Util.getParameters=function(url){
url=url||window.location.href;
var _e2="";
if(OpenLayers.String.contains(url,"?")){
var _e3=url.indexOf("?")+1;
var end=OpenLayers.String.contains(url,"#")?url.indexOf("#"):url.length;
_e2=url.substring(_e3,end);
}
var _e5={};
var _e6=_e2.split(/[&;]/);
for(var i=0,len=_e6.length;i<len;++i){
var _e9=_e6[i].split("=");
if(_e9[0]){
var key=decodeURIComponent(_e9[0]);
var _eb=_e9[1]||"";
_eb=_eb.split(",");
for(var j=0,_ed=_eb.length;j<_ed;j++){
_eb[j]=decodeURIComponent(_eb[j]);
}
if(_eb.length==1){
_eb=_eb[0];
}
_e5[key]=_eb;
}
}
return _e5;
};
OpenLayers.Util.getArgs=function(url){
OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{"newMethod":"OpenLayers.Util.getParameters"}));
return OpenLayers.Util.getParameters(url);
};
OpenLayers.Util.lastSeqID=0;
OpenLayers.Util.createUniqueID=function(_ef){
if(_ef==null){
_ef="id_";
}
OpenLayers.Util.lastSeqID+=1;
return _ef+OpenLayers.Util.lastSeqID;
};
OpenLayers.INCHES_PER_UNIT={"inches":1,"ft":12,"mi":63360,"m":39.3701,"km":39370.1,"dd":4374754,"yd":36};
OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;
OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;
OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;
OpenLayers.METERS_PER_INCH=0.0254000508001016;
OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"Inch":OpenLayers.INCHES_PER_UNIT.inches,"Meter":1/OpenLayers.METERS_PER_INCH,"Foot":0.3048006096012192/OpenLayers.METERS_PER_INCH,"IFoot":0.3048/OpenLayers.METERS_PER_INCH,"ClarkeFoot":0.3047972651151/OpenLayers.METERS_PER_INCH,"SearsFoot":0.30479947153867626/OpenLayers.METERS_PER_INCH,"GoldCoastFoot":0.3047997101815088/OpenLayers.METERS_PER_INCH,"IInch":0.0254/OpenLayers.METERS_PER_INCH,"MicroInch":0.0000254/OpenLayers.METERS_PER_INCH,"Mil":2.54e-8/OpenLayers.METERS_PER_INCH,"Centimeter":0.01/OpenLayers.METERS_PER_INCH,"Kilometer":1000/OpenLayers.METERS_PER_INCH,"Yard":0.9144018288036576/OpenLayers.METERS_PER_INCH,"SearsYard":0.914398414616029/OpenLayers.METERS_PER_INCH,"IndianYard":0.9143985307444408/OpenLayers.METERS_PER_INCH,"IndianYd37":0.91439523/OpenLayers.METERS_PER_INCH,"IndianYd62":0.9143988/OpenLayers.METERS_PER_INCH,"IndianYd75":0.9143985/OpenLayers.METERS_PER_INCH,"IndianFoot":0.30479951/OpenLayers.METERS_PER_INCH,"IndianFt37":0.30479841/OpenLayers.METERS_PER_INCH,"IndianFt62":0.3047996/OpenLayers.METERS_PER_INCH,"IndianFt75":0.3047995/OpenLayers.METERS_PER_INCH,"Mile":1609.3472186944373/OpenLayers.METERS_PER_INCH,"IYard":0.9144/OpenLayers.METERS_PER_INCH,"IMile":1609.344/OpenLayers.METERS_PER_INCH,"NautM":1852/OpenLayers.METERS_PER_INCH,"Lat-66":110943.31648893273/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872235/OpenLayers.METERS_PER_INCH,"Decimeter":0.1/OpenLayers.METERS_PER_INCH,"Millimeter":0.001/OpenLayers.METERS_PER_INCH,"Dekameter":10/OpenLayers.METERS_PER_INCH,"Decameter":10/OpenLayers.METERS_PER_INCH,"Hectometer":100/OpenLayers.METERS_PER_INCH,"GermanMeter":1.0000135965/OpenLayers.METERS_PER_INCH,"CaGrid":0.999738/OpenLayers.METERS_PER_INCH,"ClarkeChain":20.1166194976/OpenLayers.METERS_PER_INCH,"GunterChain":20.11684023368047/OpenLayers.METERS_PER_INCH,"BenoitChain":20.116782494375872/OpenLayers.METERS_PER_INCH,"SearsChain":20.11676512155/OpenLayers.METERS_PER_INCH,"ClarkeLink":0.201166194976/OpenLayers.METERS_PER_INCH,"GunterLink":0.2011684023368047/OpenLayers.METERS_PER_INCH,"BenoitLink":0.20116782494375873/OpenLayers.METERS_PER_INCH,"SearsLink":0.2011676512155/OpenLayers.METERS_PER_INCH,"Rod":5.02921005842012/OpenLayers.METERS_PER_INCH,"IntnlChain":20.1168/OpenLayers.METERS_PER_INCH,"IntnlLink":0.201168/OpenLayers.METERS_PER_INCH,"Perch":5.02921005842012/OpenLayers.METERS_PER_INCH,"Pole":5.02921005842012/OpenLayers.METERS_PER_INCH,"Furlong":201.1684023368046/OpenLayers.METERS_PER_INCH,"Rood":3.778266898/OpenLayers.METERS_PER_INCH,"CapeFoot":0.3047972615/OpenLayers.METERS_PER_INCH,"Brealey":375/OpenLayers.METERS_PER_INCH,"ModAmFt":0.304812252984506/OpenLayers.METERS_PER_INCH,"Fathom":1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":50000/OpenLayers.METERS_PER_INCH,"150kilometers":150000/OpenLayers.METERS_PER_INCH});
OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"mm":OpenLayers.INCHES_PER_UNIT["Meter"]/1000,"cm":OpenLayers.INCHES_PER_UNIT["Meter"]/100,"dm":OpenLayers.INCHES_PER_UNIT["Meter"]*100,"km":OpenLayers.INCHES_PER_UNIT["Meter"]*1000,"kmi":OpenLayers.INCHES_PER_UNIT["nmi"],"fath":OpenLayers.INCHES_PER_UNIT["Fathom"],"ch":OpenLayers.INCHES_PER_UNIT["IntnlChain"],"link":OpenLayers.INCHES_PER_UNIT["IntnlLink"],"us-in":OpenLayers.INCHES_PER_UNIT["inches"],"us-ft":OpenLayers.INCHES_PER_UNIT["Foot"],"us-yd":OpenLayers.INCHES_PER_UNIT["Yard"],"us-ch":OpenLayers.INCHES_PER_UNIT["GunterChain"],"us-mi":OpenLayers.INCHES_PER_UNIT["Mile"],"ind-yd":OpenLayers.INCHES_PER_UNIT["IndianYd37"],"ind-ft":OpenLayers.INCHES_PER_UNIT["IndianFt37"],"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH});
OpenLayers.DOTS_PER_INCH=72;
OpenLayers.Util.normalizeScale=function(_f0){
var _f1=(_f0>1)?(1/_f0):_f0;
return _f1;
};
OpenLayers.Util.getResolutionFromScale=function(_f2,_f3){
if(_f3==null){
_f3="degrees";
}
var _f4=OpenLayers.Util.normalizeScale(_f2);
var _f5=1/(_f4*OpenLayers.INCHES_PER_UNIT[_f3]*OpenLayers.DOTS_PER_INCH);
return _f5;
};
OpenLayers.Util.getScaleFromResolution=function(_f6,_f7){
if(_f7==null){
_f7="degrees";
}
var _f8=_f6*OpenLayers.INCHES_PER_UNIT[_f7]*OpenLayers.DOTS_PER_INCH;
return _f8;
};
OpenLayers.Util.safeStopPropagation=function(evt){
OpenLayers.Event.stop(evt,true);
};
OpenLayers.Util.pagePosition=function(_fa){
var _fb=0,_fc=0;
var _fd=_fa;
var _fe=_fa;
while(_fd){
if(_fd==document.body){
if(OpenLayers.Element.getStyle(_fe,"position")=="absolute"){
break;
}
}
_fb+=_fd.offsetTop||0;
_fc+=_fd.offsetLeft||0;
_fe=_fd;
try{
_fd=_fd.offsetParent;
}
catch(e){
OpenLayers.Console.error(OpenLayers.i18n("pagePositionFailed",{"elemId":_fd.id}));
break;
}
}
_fd=_fa;
while(_fd){
_fb-=_fd.scrollTop||0;
_fc-=_fd.scrollLeft||0;
_fd=_fd.parentNode;
}
return [_fc,_fb];
};
OpenLayers.Util.isEquivalentUrl=function(_ff,url2,_101){
_101=_101||{};
OpenLayers.Util.applyDefaults(_101,{ignoreCase:true,ignorePort80:true,ignoreHash:true});
var _102=OpenLayers.Util.createUrlObject(_ff,_101);
var _103=OpenLayers.Util.createUrlObject(url2,_101);
for(var key in _102){
if(key!=="args"){
if(_102[key]!=_103[key]){
return false;
}
}
}
for(var key in _102.args){
if(_102.args[key]!=_103.args[key]){
return false;
}
delete _103.args[key];
}
for(var key in _103.args){
return false;
}
return true;
};
OpenLayers.Util.createUrlObject=function(url,_106){
_106=_106||{};
if(!(/^\w+:\/\//).test(url)){
var loc=window.location;
var port=loc.port?":"+loc.port:"";
var _109=loc.protocol+"//"+loc.host.split(":").shift()+port;
if(url.indexOf("/")===0){
url=_109+url;
}else{
var _10a=loc.pathname.split("/");
_10a.pop();
url=_109+_10a.join("/")+"/"+url;
}
}
if(_106.ignoreCase){
url=url.toLowerCase();
}
var a=document.createElement("a");
a.href=url;
var _10c={};
_10c.host=a.host.split(":").shift();
_10c.protocol=a.protocol;
if(_106.ignorePort80){
_10c.port=(a.port=="80"||a.port=="0")?"":a.port;
}else{
_10c.port=(a.port==""||a.port=="0")?"80":a.port;
}
_10c.hash=(_106.ignoreHash||a.hash==="#")?"":a.hash;
var _10d=a.search;
if(!_10d){
var _10e=url.indexOf("?");
_10d=(_10e!=-1)?url.substr(_10e):"";
}
_10c.args=OpenLayers.Util.getParameters(_10d);
_10c.pathname=(a.pathname.charAt(0)=="/")?a.pathname:"/"+a.pathname;
return _10c;
};
OpenLayers.Util.removeTail=function(url){
var head=null;
var _111=url.indexOf("?");
var _112=url.indexOf("#");
if(_111==-1){
head=(_112!=-1)?url.substr(0,_112):url;
}else{
head=(_112!=-1)?url.substr(0,Math.min(_111,_112)):url.substr(0,_111);
}
return head;
};
OpenLayers.Util.getBrowserName=function(){
var _113="";
var ua=navigator.userAgent.toLowerCase();
if(ua.indexOf("opera")!=-1){
_113="opera";
}else{
if(ua.indexOf("msie")!=-1){
_113="msie";
}else{
if(ua.indexOf("safari")!=-1){
_113="safari";
}else{
if(ua.indexOf("mozilla")!=-1){
if(ua.indexOf("firefox")!=-1){
_113="firefox";
}else{
_113="mozilla";
}
}
}
}
}
return _113;
};
OpenLayers.Util.getRenderedDimensions=function(_115,size,_117){
var w,h;
var _11a=document.createElement("div");
_11a.style.visibility="hidden";
var _11b=(_117&&_117.containerElement)?_117.containerElement:document.body;
if(size){
if(size.w){
w=size.w;
_11a.style.width=w+"px";
}else{
if(size.h){
h=size.h;
_11a.style.height=h+"px";
}
}
}
if(_117&&_117.displayClass){
_11a.className=_117.displayClass;
}
var _11c=document.createElement("div");
_11c.innerHTML=_115;
_11c.style.overflow="visible";
if(_11c.childNodes){
for(var i=0,l=_11c.childNodes.length;i<l;i++){
if(!_11c.childNodes[i].style){
continue;
}
_11c.childNodes[i].style.overflow="visible";
}
}
_11a.appendChild(_11c);
_11b.appendChild(_11a);
var _11f=false;
var _120=_11a.parentNode;
while(_120&&_120.tagName.toLowerCase()!="body"){
var _121=OpenLayers.Element.getStyle(_120,"position");
if(_121=="absolute"){
_11f=true;
break;
}else{
if(_121&&_121!="static"){
break;
}
}
_120=_120.parentNode;
}
if(!_11f){
_11a.style.position="absolute";
}
if(!w){
w=parseInt(_11c.scrollWidth);
_11a.style.width=w+"px";
}
if(!h){
h=parseInt(_11c.scrollHeight);
}
_11a.removeChild(_11c);
_11b.removeChild(_11a);
return new OpenLayers.Size(w,h);
};
OpenLayers.Util.getScrollbarWidth=function(){
var _122=OpenLayers.Util._scrollbarWidth;
if(_122==null){
var scr=null;
var inn=null;
var _125=0;
var _126=0;
scr=document.createElement("div");
scr.style.position="absolute";
scr.style.top="-1000px";
scr.style.left="-1000px";
scr.style.width="100px";
scr.style.height="50px";
scr.style.overflow="hidden";
inn=document.createElement("div");
inn.style.width="100%";
inn.style.height="200px";
scr.appendChild(inn);
document.body.appendChild(scr);
_125=inn.offsetWidth;
scr.style.overflow="scroll";
_126=inn.offsetWidth;
document.body.removeChild(document.body.lastChild);
OpenLayers.Util._scrollbarWidth=(_125-_126);
_122=OpenLayers.Util._scrollbarWidth;
}
return _122;
};
OpenLayers.Rico=new Object();
OpenLayers.Rico.Corner={round:function(e,_128){
e=OpenLayers.Util.getElement(e);
this._setOptions(_128);
var _129=this.options.color;
if(this.options.color=="fromElement"){
_129=this._background(e);
}
var _12a=this.options.bgColor;
if(this.options.bgColor=="fromParent"){
_12a=this._background(e.offsetParent);
}
this._roundCornersImpl(e,_129,_12a);
},changeColor:function(_12b,_12c){
_12b.style.backgroundColor=_12c;
var _12d=_12b.parentNode.getElementsByTagName("span");
for(var _12e=0;_12e<_12d.length;_12e++){
_12d[_12e].style.backgroundColor=_12c;
}
},changeOpacity:function(_12f,_130){
var _131=_130;
var _132="alpha(opacity="+_130*100+")";
_12f.style.opacity=_131;
_12f.style.filter=_132;
var _133=_12f.parentNode.getElementsByTagName("span");
for(var _134=0;_134<_133.length;_134++){
_133[_134].style.opacity=_131;
_133[_134].style.filter=_132;
}
},reRound:function(_135,_136){
var _137=_135.parentNode.childNodes[0];
var _138=_135.parentNode.childNodes[2];
_135.parentNode.removeChild(_137);
_135.parentNode.removeChild(_138);
this.round(_135.parentNode,_136);
},_roundCornersImpl:function(e,_13a,_13b){
if(this.options.border){
this._renderBorder(e,_13b);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_13a,_13b);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_13a,_13b);
}
},_renderBorder:function(el,_13d){
var _13e="1px solid "+this._borderColor(_13d);
var _13f="border-left: "+_13e;
var _140="border-right: "+_13e;
var _141="style='"+_13f+";"+_140+"'";
el.innerHTML="<div "+_141+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_143,_144){
var _145=this._createCorner(_144);
for(var i=0;i<this.options.numSlices;i++){
_145.appendChild(this._createCornerSlice(_143,_144,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_145,el.firstChild);
},_roundBottomCorners:function(el,_148,_149){
var _14a=this._createCorner(_149);
for(var i=(this.options.numSlices-1);i>=0;i--){
_14a.appendChild(this._createCornerSlice(_148,_149,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_14a);
},_createCorner:function(_14c){
var _14d=document.createElement("div");
_14d.style.backgroundColor=(this._isTransparent()?"transparent":_14c);
return _14d;
},_createCornerSlice:function(_14e,_14f,n,_151){
var _152=document.createElement("span");
var _153=_152.style;
_153.backgroundColor=_14e;
_153.display="block";
_153.height="1px";
_153.overflow="hidden";
_153.fontSize="1px";
var _154=this._borderColor(_14e,_14f);
if(this.options.border&&n==0){
_153.borderTopStyle="solid";
_153.borderTopWidth="1px";
_153.borderLeftWidth="0px";
_153.borderRightWidth="0px";
_153.borderBottomWidth="0px";
_153.height="0px";
_153.borderColor=_154;
}else{
if(_154){
_153.borderColor=_154;
_153.borderStyle="solid";
_153.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_153.height="2px";
}
this._setMargin(_152,n,_151);
this._setBorder(_152,n,_151);
return _152;
},_setOptions:function(_155){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};
OpenLayers.Util.extend(this.options,_155||{});
this.options.numSlices=this.options.compact?2:4;
if(this._isTransparent()){
this.options.blend=false;
}
},_whichSideTop:function(){
if(this._hasString(this.options.corners,"all","top")){
return "";
}
if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){
return "";
}
if(this.options.corners.indexOf("tl")>=0){
return "left";
}else{
if(this.options.corners.indexOf("tr")>=0){
return "right";
}
}
return "";
},_whichSideBottom:function(){
if(this._hasString(this.options.corners,"all","bottom")){
return "";
}
if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){
return "";
}
if(this.options.corners.indexOf("bl")>=0){
return "left";
}else{
if(this.options.corners.indexOf("br")>=0){
return "right";
}
}
return "";
},_borderColor:function(_156,_157){
if(_156=="transparent"){
return _157;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return this._blend(_157,_156);
}else{
return "";
}
}
}
},_setMargin:function(el,n,_15a){
var _15b=this._marginSize(n);
var _15c=_15a=="top"?this._whichSideTop():this._whichSideBottom();
if(_15c=="left"){
el.style.marginLeft=_15b+"px";
el.style.marginRight="0px";
}else{
if(_15c=="right"){
el.style.marginRight=_15b+"px";
el.style.marginLeft="0px";
}else{
el.style.marginLeft=_15b+"px";
el.style.marginRight=_15b+"px";
}
}
},_setBorder:function(el,n,_15f){
var _160=this._borderSize(n);
var _161=_15f=="top"?this._whichSideTop():this._whichSideBottom();
if(_161=="left"){
el.style.borderLeftWidth=_160+"px";
el.style.borderRightWidth="0px";
}else{
if(_161=="right"){
el.style.borderRightWidth=_160+"px";
el.style.borderLeftWidth="0px";
}else{
el.style.borderLeftWidth=_160+"px";
el.style.borderRightWidth=_160+"px";
}
}
if(this.options.border!=false){
el.style.borderLeftWidth=_160+"px";
el.style.borderRightWidth=_160+"px";
}
},_marginSize:function(n){
if(this._isTransparent()){
return 0;
}
var _163=[5,3,2,1];
var _164=[3,2,1,0];
var _165=[2,1];
var _166=[1,0];
if(this.options.compact&&this.options.blend){
return _166[n];
}else{
if(this.options.compact){
return _165[n];
}else{
if(this.options.blend){
return _164[n];
}else{
return _163[n];
}
}
}
},_borderSize:function(n){
var _168=[5,3,2,1];
var _169=[2,1,1,1];
var _16a=[1,0];
var _16b=[0,2,0,0];
if(this.options.compact&&(this.options.blend||this._isTransparent())){
return 1;
}else{
if(this.options.compact){
return _16a[n];
}else{
if(this.options.blend){
return _169[n];
}else{
if(this.options.border){
return _16b[n];
}else{
if(this._isTransparent()){
return _168[n];
}
}
}
}
}
return 0;
},_hasString:function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])>=0){
return true;
}
}
return false;
},_blend:function(c1,c2){
var cc1=OpenLayers.Rico.Color.createFromHex(c1);
cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));
return cc1;
},_background:function(el){
try{
return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();
}
catch(err){
return "#ffffff";
}
},_isTransparent:function(){
return this.options.color=="transparent";
},_isTopRounded:function(){
return this._hasString(this.options.corners,"all","top","tl","tr");
},_isBottomRounded:function(){
return this._hasString(this.options.corners,"all","bottom","bl","br");
},_hasSingleTextChild:function(el){
return el.childNodes.length==1&&el.childNodes[0].nodeType==3;
}};
(function(){
if(window.google&&google.gears){
return;
}
var _173=null;
if(typeof GearsFactory!="undefined"){
_173=new GearsFactory();
}else{
try{
_173=new ActiveXObject("Gears.Factory");
if(_173.getBuildInfo().indexOf("ie_mobile")!=-1){
_173.privateSetGlobalObject(this);
}
}
catch(e){
if((typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes["application/x-googlegears"]){
_173=document.createElement("object");
_173.style.display="none";
_173.width=0;
_173.height=0;
_173.type="application/x-googlegears";
document.documentElement.appendChild(_173);
}
}
}
if(!_173){
return;
}
if(!window.google){
google={};
}
if(!google.gears){
google.gears={factory:_173};
}
})();
OpenLayers.Element={visible:function(_174){
return OpenLayers.Util.getElement(_174).style.display!="none";
},toggle:function(){
for(var i=0,len=arguments.length;i<len;i++){
var _177=OpenLayers.Util.getElement(arguments[i]);
var _178=OpenLayers.Element.visible(_177)?"hide":"show";
OpenLayers.Element[_178](_177);
}
},hide:function(){
for(var i=0,len=arguments.length;i<len;i++){
var _17b=OpenLayers.Util.getElement(arguments[i]);
_17b.style.display="none";
}
},show:function(){
for(var i=0,len=arguments.length;i<len;i++){
var _17e=OpenLayers.Util.getElement(arguments[i]);
_17e.style.display="";
}
},remove:function(_17f){
_17f=OpenLayers.Util.getElement(_17f);
_17f.parentNode.removeChild(_17f);
},getHeight:function(_180){
_180=OpenLayers.Util.getElement(_180);
return _180.offsetHeight;
},getDimensions:function(_181){
_181=OpenLayers.Util.getElement(_181);
if(OpenLayers.Element.getStyle(_181,"display")!="none"){
return {width:_181.offsetWidth,height:_181.offsetHeight};
}
var els=_181.style;
var _183=els.visibility;
var _184=els.position;
els.visibility="hidden";
els.position="absolute";
els.display="";
var _185=_181.clientWidth;
var _186=_181.clientHeight;
els.display="none";
els.position=_184;
els.visibility=_183;
return {width:_185,height:_186};
},hasClass:function(_187,name){
var _189=_187.className;
return (!!_189&&new RegExp("(^|\\s)"+name+"(\\s|$)").test(_189));
},addClass:function(_18a,name){
if(!OpenLayers.Element.hasClass(_18a,name)){
_18a.className+=(_18a.className?" ":"")+name;
}
return _18a;
},removeClass:function(_18c,name){
var _18e=_18c.className;
if(_18e){
_18c.className=OpenLayers.String.trim(_18e.replace(new RegExp("(^|\\s+)"+name+"(\\s+|$)")," "));
}
return _18c;
},toggleClass:function(_18f,name){
if(OpenLayers.Element.hasClass(_18f,name)){
OpenLayers.Element.removeClass(_18f,name);
}else{
OpenLayers.Element.addClass(_18f,name);
}
return _18f;
},getStyle:function(_191,_192){
_191=OpenLayers.Util.getElement(_191);
var _193=null;
if(_191&&_191.style){
_193=_191.style[OpenLayers.String.camelize(_192)];
if(!_193){
if(document.defaultView&&document.defaultView.getComputedStyle){
var css=document.defaultView.getComputedStyle(_191,null);
_193=css?css.getPropertyValue(_192):null;
}else{
if(_191.currentStyle){
_193=_191.currentStyle[OpenLayers.String.camelize(_192)];
}
}
}
var _195=["left","top","right","bottom"];
if(window.opera&&(OpenLayers.Util.indexOf(_195,_192)!=-1)&&(OpenLayers.Element.getStyle(_191,"position")=="static")){
_193="auto";
}
}
return _193=="auto"?null:_193;
}};
OpenLayers.Size=OpenLayers.Class({w:0,h:0,initialize:function(w,h){
this.w=parseFloat(w);
this.h=parseFloat(h);
},toString:function(){
return ("w="+this.w+",h="+this.h);
},clone:function(){
return new OpenLayers.Size(this.w,this.h);
},equals:function(sz){
var _199=false;
if(sz!=null){
_199=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));
}
return _199;
},CLASS_NAME:"OpenLayers.Size"});
OpenLayers.Console={log:function(){
},debug:function(){
},info:function(){
},warn:function(){
},error:function(){
},userError:function(_19a){
alert(_19a);
},assert:function(){
},dir:function(){
},dirxml:function(){
},trace:function(){
},group:function(){
},groupEnd:function(){
},time:function(){
},timeEnd:function(){
},profile:function(){
},profileEnd:function(){
},count:function(){
},CLASS_NAME:"OpenLayers.Console"};
(function(){
var _19b=document.getElementsByTagName("script");
for(var i=0,len=_19b.length;i<len;++i){
if(_19b[i].src.indexOf("firebug.js")!=-1){
if(console){
OpenLayers.Util.extend(OpenLayers.Console,console);
break;
}
}
}
})();
OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(url,size,_1a0,_1a1){
this.url=url;
this.size=(size)?size:new OpenLayers.Size(20,20);
this.offset=_1a0?_1a0:new OpenLayers.Pixel(-(this.size.w/2),-(this.size.h/2));
this.calculateOffset=_1a1;
var id=OpenLayers.Util.createUniqueID("OL_Icon_");
this.imageDiv=OpenLayers.Util.createAlphaImageDiv(id);
},destroy:function(){
this.erase();
OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);
this.imageDiv.innerHTML="";
this.imageDiv=null;
},clone:function(){
return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset);
},setSize:function(size){
if(size!=null){
this.size=size;
}
this.draw();
},setUrl:function(url){
if(url!=null){
this.url=url;
}
this.draw();
},draw:function(px){
OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");
this.moveTo(px);
return this.imageDiv;
},erase:function(){
if(this.imageDiv!=null&&this.imageDiv.parentNode!=null){
OpenLayers.Element.remove(this.imageDiv);
}
},setOpacity:function(_1a6){
OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,_1a6);
},moveTo:function(px){
if(px!=null){
this.px=px;
}
if(this.imageDiv!=null){
if(this.px==null){
this.display(false);
}else{
if(this.calculateOffset){
this.offset=this.calculateOffset(this.size);
}
var _1a8=this.px.offset(this.offset);
OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,_1a8);
}
}
},display:function(_1a9){
this.imageDiv.style.display=(_1a9)?"":"none";
},isDrawn:function(){
var _1aa=(this.imageDiv&&this.imageDiv.parentNode&&(this.imageDiv.parentNode.nodeType!=11));
return _1aa;
},CLASS_NAME:"OpenLayers.Icon"});
OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,contentSize:null,size:null,contentHTML:null,backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:false,minSize:null,maxSize:null,displayClass:"olPopup",contentDisplayClass:"olPopupContent",padding:0,disableFirefoxOverflowHack:false,fixPadding:function(){
if(typeof this.padding=="number"){
this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding);
}
},panMapIfOutOfView:false,keepInMap:false,closeOnMove:false,map:null,initialize:function(id,_1ac,_1ad,_1ae,_1af,_1b0){
if(id==null){
id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
}
this.id=id;
this.lonlat=_1ac;
this.contentSize=(_1ad!=null)?_1ad:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT);
if(_1ae!=null){
this.contentHTML=_1ae;
}
this.backgroundColor=OpenLayers.Popup.COLOR;
this.opacity=OpenLayers.Popup.OPACITY;
this.border=OpenLayers.Popup.BORDER;
this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden");
this.div.className=this.displayClass;
var _1b1=this.id+"_GroupDiv";
this.groupDiv=OpenLayers.Util.createDiv(_1b1,null,null,null,"relative",null,"hidden");
var id=this.div.id+"_contentDiv";
this.contentDiv=OpenLayers.Util.createDiv(id,null,this.contentSize.clone(),null,"relative");
this.contentDiv.className=this.contentDisplayClass;
this.groupDiv.appendChild(this.contentDiv);
this.div.appendChild(this.groupDiv);
if(_1af){
this.addCloseBox(_1b0);
}
this.registerEvents();
},destroy:function(){
this.id=null;
this.lonlat=null;
this.size=null;
this.contentHTML=null;
this.backgroundColor=null;
this.opacity=null;
this.border=null;
if(this.closeOnMove&&this.map){
this.map.events.unregister("movestart",this,this.hide);
}
this.events.destroy();
this.events=null;
if(this.closeDiv){
OpenLayers.Event.stopObservingElement(this.closeDiv);
this.groupDiv.removeChild(this.closeDiv);
}
this.closeDiv=null;
this.div.removeChild(this.groupDiv);
this.groupDiv=null;
if(this.map!=null){
this.map.removePopup(this);
}
this.map=null;
this.div=null;
this.autoSize=null;
this.minSize=null;
this.maxSize=null;
this.padding=null;
this.panMapIfOutOfView=null;
},draw:function(px){
if(px==null){
if((this.lonlat!=null)&&(this.map!=null)){
px=this.map.getLayerPxFromLonLat(this.lonlat);
}
}
if(this.closeOnMove){
this.map.events.register("movestart",this,this.hide);
}
if(!this.disableFirefoxOverflowHack&&OpenLayers.Util.getBrowserName()=="firefox"){
this.map.events.register("movestart",this,function(){
var _1b3=document.defaultView.getComputedStyle(this.contentDiv,null);
var _1b4=_1b3.getPropertyValue("overflow");
if(_1b4!="hidden"){
this.contentDiv._oldOverflow=_1b4;
this.contentDiv.style.overflow="hidden";
}
});
this.map.events.register("moveend",this,function(){
var _1b5=this.contentDiv._oldOverflow;
if(_1b5){
this.contentDiv.style.overflow=_1b5;
this.contentDiv._oldOverflow=null;
}
});
}
this.moveTo(px);
if(!this.autoSize&&!this.size){
this.setSize(this.contentSize);
}
this.setBackgroundColor();
this.setOpacity();
this.setBorder();
this.setContentHTML();
if(this.panMapIfOutOfView){
this.panIntoView();
}
return this.div;
},updatePosition:function(){
if((this.lonlat)&&(this.map)){
var px=this.map.getLayerPxFromLonLat(this.lonlat);
if(px){
this.moveTo(px);
}
}
},moveTo:function(px){
if((px!=null)&&(this.div!=null)){
this.div.style.left=px.x+"px";
this.div.style.top=px.y+"px";
}
},visible:function(){
return OpenLayers.Element.visible(this.div);
},toggle:function(){
if(this.visible()){
this.hide();
}else{
this.show();
}
},show:function(){
OpenLayers.Element.show(this.div);
if(this.panMapIfOutOfView){
this.panIntoView();
}
},hide:function(){
OpenLayers.Element.hide(this.div);
},setSize:function(_1b8){
this.size=_1b8.clone();
var _1b9=this.getContentDivPadding();
var _1ba=_1b9.left+_1b9.right;
var _1bb=_1b9.top+_1b9.bottom;
this.fixPadding();
_1ba+=this.padding.left+this.padding.right;
_1bb+=this.padding.top+this.padding.bottom;
if(this.closeDiv){
var _1bc=parseInt(this.closeDiv.style.width);
_1ba+=_1bc+_1b9.right;
}
this.size.w+=_1ba;
this.size.h+=_1bb;
if(OpenLayers.Util.getBrowserName()=="msie"){
this.contentSize.w+=_1b9.left+_1b9.right;
this.contentSize.h+=_1b9.bottom+_1b9.top;
}
if(this.div!=null){
this.div.style.width=this.size.w+"px";
this.div.style.height=this.size.h+"px";
}
if(this.contentDiv!=null){
this.contentDiv.style.width=_1b8.w+"px";
this.contentDiv.style.height=_1b8.h+"px";
}
},updateSize:function(){
var _1bd="<div class='"+this.contentDisplayClass+"'>"+this.contentDiv.innerHTML+"</div>";
var _1be=(this.map)?this.map.layerContainerDiv:document.body;
var _1bf=OpenLayers.Util.getRenderedDimensions(_1bd,null,{displayClass:this.displayClass,containerElement:_1be});
var _1c0=this.getSafeContentSize(_1bf);
var _1c1=null;
if(_1c0.equals(_1bf)){
_1c1=_1bf;
}else{
var _1c2=new OpenLayers.Size();
_1c2.w=(_1c0.w<_1bf.w)?_1c0.w:null;
_1c2.h=(_1c0.h<_1bf.h)?_1c0.h:null;
if(_1c2.w&&_1c2.h){
_1c1=_1c0;
}else{
var _1c3=OpenLayers.Util.getRenderedDimensions(_1bd,_1c2,{displayClass:this.contentDisplayClass,containerElement:_1be});
var _1c4=OpenLayers.Element.getStyle(this.contentDiv,"overflow");
if((_1c4!="hidden")&&(_1c3.equals(_1c0))){
var _1c5=OpenLayers.Util.getScrollbarWidth();
if(_1c2.w){
_1c3.h+=_1c5;
}else{
_1c3.w+=_1c5;
}
}
_1c1=this.getSafeContentSize(_1c3);
}
}
this.setSize(_1c1);
},setBackgroundColor:function(_1c6){
if(_1c6!=undefined){
this.backgroundColor=_1c6;
}
if(this.div!=null){
this.div.style.backgroundColor=this.backgroundColor;
}
},setOpacity:function(_1c7){
if(_1c7!=undefined){
this.opacity=_1c7;
}
if(this.div!=null){
this.div.style.opacity=this.opacity;
this.div.style.filter="alpha(opacity="+this.opacity*100+")";
}
},setBorder:function(_1c8){
if(_1c8!=undefined){
this.border=_1c8;
}
if(this.div!=null){
this.div.style.border=this.border;
}
},setContentHTML:function(_1c9){
if(_1c9!=null){
this.contentHTML=_1c9;
}
if((this.contentDiv!=null)&&(this.contentHTML!=null)&&(this.contentHTML!=this.contentDiv.innerHTML)){
this.contentDiv.innerHTML=this.contentHTML;
if(this.autoSize){
this.registerImageListeners();
this.updateSize();
}
}
},registerImageListeners:function(){
var _1ca=function(){
this.popup.updateSize();
if(this.popup.visible()&&this.popup.panMapIfOutOfView){
this.popup.panIntoView();
}
OpenLayers.Event.stopObserving(this.img,"load",this.img._onImageLoad);
};
var _1cb=this.contentDiv.getElementsByTagName("img");
for(var i=0,len=_1cb.length;i<len;i++){
var img=_1cb[i];
if(img.width==0||img.height==0){
var _1cf={"popup":this,"img":img};
img._onImgLoad=OpenLayers.Function.bind(_1ca,_1cf);
OpenLayers.Event.observe(img,"load",img._onImgLoad);
}
}
},getSafeContentSize:function(size){
var _1d1=size.clone();
var _1d2=this.getContentDivPadding();
var _1d3=_1d2.left+_1d2.right;
var _1d4=_1d2.top+_1d2.bottom;
this.fixPadding();
_1d3+=this.padding.left+this.padding.right;
_1d4+=this.padding.top+this.padding.bottom;
if(this.closeDiv){
var _1d5=parseInt(this.closeDiv.style.width);
_1d3+=_1d5+_1d2.right;
}
if(this.minSize){
_1d1.w=Math.max(_1d1.w,(this.minSize.w-_1d3));
_1d1.h=Math.max(_1d1.h,(this.minSize.h-_1d4));
}
if(this.maxSize){
_1d1.w=Math.min(_1d1.w,(this.maxSize.w-_1d3));
_1d1.h=Math.min(_1d1.h,(this.maxSize.h-_1d4));
}
if(this.map&&this.map.size){
var _1d6=0,_1d7=0;
if(this.keepInMap&&!this.panMapIfOutOfView){
var px=this.map.getPixelFromLonLat(this.lonlat);
switch(this.relativePosition){
case "tr":
_1d6=px.x;
_1d7=this.map.size.h-px.y;
break;
case "tl":
_1d6=this.map.size.w-px.x;
_1d7=this.map.size.h-px.y;
break;
case "bl":
_1d6=this.map.size.w-px.x;
_1d7=px.y;
break;
case "br":
_1d6=px.x;
_1d7=px.y;
break;
default:
_1d6=px.x;
_1d7=this.map.size.h-px.y;
break;
}
}
var maxY=this.map.size.h-this.map.paddingForPopups.top-this.map.paddingForPopups.bottom-_1d4-_1d7;
var maxX=this.map.size.w-this.map.paddingForPopups.left-this.map.paddingForPopups.right-_1d3-_1d6;
_1d1.w=Math.min(_1d1.w,maxX);
_1d1.h=Math.min(_1d1.h,maxY);
}
return _1d1;
},getContentDivPadding:function(){
var _1db=this._contentDivPadding;
if(!_1db){
if(this.div.parentNode==null){
this.div.style.display="none";
document.body.appendChild(this.div);
}
_1db=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top"));
this._contentDivPadding=_1db;
if(this.div.parentNode==document.body){
document.body.removeChild(this.div);
this.div.style.display="";
}
}
return _1db;
},addCloseBox:function(_1dc){
this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,new OpenLayers.Size(17,17));
this.closeDiv.className="olPopupCloseBox";
var _1dd=this.getContentDivPadding();
this.closeDiv.style.right=_1dd.right+"px";
this.closeDiv.style.top=_1dd.top+"px";
this.groupDiv.appendChild(this.closeDiv);
var _1de=_1dc||function(e){
this.hide();
OpenLayers.Event.stop(e);
};
OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(_1de,this));
},panIntoView:function(){
var _1e0=this.map.getSize();
var _1e1=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top)));
var _1e2=_1e1.clone();
if(_1e1.x<this.map.paddingForPopups.left){
_1e2.x=this.map.paddingForPopups.left;
}else{
if((_1e1.x+this.size.w)>(_1e0.w-this.map.paddingForPopups.right)){
_1e2.x=_1e0.w-this.map.paddingForPopups.right-this.size.w;
}
}
if(_1e1.y<this.map.paddingForPopups.top){
_1e2.y=this.map.paddingForPopups.top;
}else{
if((_1e1.y+this.size.h)>(_1e0.h-this.map.paddingForPopups.bottom)){
_1e2.y=_1e0.h-this.map.paddingForPopups.bottom-this.size.h;
}
}
var dx=_1e1.x-_1e2.x;
var dy=_1e1.y-_1e2.y;
this.map.pan(dx,dy);
},registerEvents:function(){
this.events=new OpenLayers.Events(this,this.div,null,true);
this.events.on({"mousedown":this.onmousedown,"mousemove":this.onmousemove,"mouseup":this.onmouseup,"click":this.onclick,"mouseout":this.onmouseout,"dblclick":this.ondblclick,scope:this});
},onmousedown:function(evt){
this.mousedown=true;
OpenLayers.Event.stop(evt,true);
},onmousemove:function(evt){
if(this.mousedown){
OpenLayers.Event.stop(evt,true);
}
},onmouseup:function(evt){
if(this.mousedown){
this.mousedown=false;
OpenLayers.Event.stop(evt,true);
}
},onclick:function(evt){
OpenLayers.Event.stop(evt,true);
},onmouseout:function(evt){
this.mousedown=false;
},ondblclick:function(evt){
OpenLayers.Event.stop(evt,true);
},CLASS_NAME:"OpenLayers.Popup"});
OpenLayers.Popup.WIDTH=200;
OpenLayers.Popup.HEIGHT=200;
OpenLayers.Popup.COLOR="white";
OpenLayers.Popup.OPACITY=1;
OpenLayers.Popup.BORDER="0px";
OpenLayers.Protocol=OpenLayers.Class({format:null,options:null,autoDestroy:true,initialize:function(_1eb){
_1eb=_1eb||{};
OpenLayers.Util.extend(this,_1eb);
this.options=_1eb;
},destroy:function(){
this.options=null;
this.format=null;
},read:function(){
},create:function(){
},update:function(){
},"delete":function(){
},commit:function(){
},abort:function(_1ec){
},CLASS_NAME:"OpenLayers.Protocol"});
OpenLayers.Protocol.Response=OpenLayers.Class({code:null,requestType:null,last:true,features:null,reqFeatures:null,priv:null,initialize:function(_1ed){
OpenLayers.Util.extend(this,_1ed);
},success:function(){
return this.code>0;
},CLASS_NAME:"OpenLayers.Protocol.Response"});
OpenLayers.Protocol.Response.SUCCESS=1;
OpenLayers.Protocol.Response.FAILURE=0;
OpenLayers.Renderer=OpenLayers.Class({container:null,root:null,extent:null,locked:false,size:null,resolution:null,map:null,initialize:function(_1ee,_1ef){
this.container=OpenLayers.Util.getElement(_1ee);
},destroy:function(){
this.container=null;
this.extent=null;
this.size=null;
this.resolution=null;
this.map=null;
},supported:function(){
return false;
},setExtent:function(_1f0,_1f1){
this.extent=_1f0.clone();
if(_1f1){
this.resolution=null;
}
},setSize:function(size){
this.size=size.clone();
this.resolution=null;
},getResolution:function(){
this.resolution=this.resolution||this.map.getResolution();
return this.resolution;
},drawFeature:function(_1f3,_1f4){
if(_1f4==null){
_1f4=_1f3.style;
}
if(_1f3.geometry){
var _1f5=_1f3.geometry.getBounds();
if(_1f5){
if(!_1f5.intersectsBounds(this.extent)){
_1f4={display:"none"};
}
var _1f6=this.drawGeometry(_1f3.geometry,_1f4,_1f3.id);
if(_1f4.display!="none"&&_1f4.label&&_1f6!==false){
this.drawText(_1f3.id,_1f4,_1f3.geometry.getCentroid());
}else{
this.removeText(_1f3.id);
}
return _1f6;
}
}
},drawGeometry:function(_1f7,_1f8,_1f9){
},drawText:function(_1fa,_1fb,_1fc){
},removeText:function(_1fd){
},clear:function(){
},getFeatureIdFromEvent:function(evt){
},eraseFeatures:function(_1ff){
if(!(_1ff instanceof Array)){
_1ff=[_1ff];
}
for(var i=0,len=_1ff.length;i<len;++i){
this.eraseGeometry(_1ff[i].geometry);
this.removeText(_1ff[i].id);
}
},eraseGeometry:function(_202){
},moveRoot:function(_203){
},getRenderLayerId:function(){
return this.container.id;
},CLASS_NAME:"OpenLayers.Renderer"});
OpenLayers.Strategy=OpenLayers.Class({layer:null,options:null,active:null,autoActivate:true,autoDestroy:true,initialize:function(_204){
OpenLayers.Util.extend(this,_204);
this.options=_204;
this.active=false;
},destroy:function(){
this.deactivate();
this.layer=null;
this.options=null;
},setLayer:function(_205){
this.layer=_205;
},activate:function(){
if(!this.active){
this.active=true;
return true;
}
return false;
},deactivate:function(){
if(this.active){
this.active=false;
return true;
}
return false;
},CLASS_NAME:"OpenLayers.Strategy"});
OpenLayers.Rico.Color=OpenLayers.Class({initialize:function(red,_207,blue){
this.rgb={r:red,g:_207,b:blue};
},setRed:function(r){
this.rgb.r=r;
},setGreen:function(g){
this.rgb.g=g;
},setBlue:function(b){
this.rgb.b=b;
},setHue:function(h){
var hsb=this.asHSB();
hsb.h=h;
this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);
},setSaturation:function(s){
var hsb=this.asHSB();
hsb.s=s;
this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);
},setBrightness:function(b){
var hsb=this.asHSB();
hsb.b=b;
this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);
},darken:function(_212){
var hsb=this.asHSB();
this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.max(hsb.b-_212,0));
},brighten:function(_214){
var hsb=this.asHSB();
this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.min(hsb.b+_214,1));
},blend:function(_216){
this.rgb.r=Math.floor((this.rgb.r+_216.rgb.r)/2);
this.rgb.g=Math.floor((this.rgb.g+_216.rgb.g)/2);
this.rgb.b=Math.floor((this.rgb.b+_216.rgb.b)/2);
},isBright:function(){
var hsb=this.asHSB();
return this.asHSB().b>0.5;
},isDark:function(){
return !this.isBright();
},asRGB:function(){
return "rgb("+this.rgb.r+","+this.rgb.g+","+this.rgb.b+")";
},asHex:function(){
return "#"+this.rgb.r.toColorPart()+this.rgb.g.toColorPart()+this.rgb.b.toColorPart();
},asHSB:function(){
return OpenLayers.Rico.Color.RGBtoHSB(this.rgb.r,this.rgb.g,this.rgb.b);
},toString:function(){
return this.asHex();
}});
OpenLayers.Rico.Color.createFromHex=function(_218){
if(_218.length==4){
var _219=_218;
var _218="#";
for(var i=1;i<4;i++){
_218+=(_219.charAt(i)+_219.charAt(i));
}
}
if(_218.indexOf("#")==0){
_218=_218.substring(1);
}
var red=_218.substring(0,2);
var _21c=_218.substring(2,4);
var blue=_218.substring(4,6);
return new OpenLayers.Rico.Color(parseInt(red,16),parseInt(_21c,16),parseInt(blue,16));
};
OpenLayers.Rico.Color.createColorFromBackground=function(elem){
var _21f=RicoUtil.getElementsComputedStyle(OpenLayers.Util.getElement(elem),"backgroundColor","background-color");
if(_21f=="transparent"&&elem.parentNode){
return OpenLayers.Rico.Color.createColorFromBackground(elem.parentNode);
}
if(_21f==null){
return new OpenLayers.Rico.Color(255,255,255);
}
if(_21f.indexOf("rgb(")==0){
var _220=_21f.substring(4,_21f.length-1);
var _221=_220.split(",");
return new OpenLayers.Rico.Color(parseInt(_221[0]),parseInt(_221[1]),parseInt(_221[2]));
}else{
if(_21f.indexOf("#")==0){
return OpenLayers.Rico.Color.createFromHex(_21f);
}else{
return new OpenLayers.Rico.Color(255,255,255);
}
}
};
OpenLayers.Rico.Color.HSBtoRGB=function(hue,_223,_224){
var red=0;
var _226=0;
var blue=0;
if(_223==0){
red=parseInt(_224*255+0.5);
_226=red;
blue=red;
}else{
var h=(hue-Math.floor(hue))*6;
var f=h-Math.floor(h);
var p=_224*(1-_223);
var q=_224*(1-_223*f);
var t=_224*(1-(_223*(1-f)));
switch(parseInt(h)){
case 0:
red=(_224*255+0.5);
_226=(t*255+0.5);
blue=(p*255+0.5);
break;
case 1:
red=(q*255+0.5);
_226=(_224*255+0.5);
blue=(p*255+0.5);
break;
case 2:
red=(p*255+0.5);
_226=(_224*255+0.5);
blue=(t*255+0.5);
break;
case 3:
red=(p*255+0.5);
_226=(q*255+0.5);
blue=(_224*255+0.5);
break;
case 4:
red=(t*255+0.5);
_226=(p*255+0.5);
blue=(_224*255+0.5);
break;
case 5:
red=(_224*255+0.5);
_226=(p*255+0.5);
blue=(q*255+0.5);
break;
}
}
return {r:parseInt(red),g:parseInt(_226),b:parseInt(blue)};
};
OpenLayers.Rico.Color.RGBtoHSB=function(r,g,b){
var hue;
var _231;
var _232;
var cmax=(r>g)?r:g;
if(b>cmax){
cmax=b;
}
var cmin=(r<g)?r:g;
if(b<cmin){
cmin=b;
}
_232=cmax/255;
if(cmax!=0){
_231=(cmax-cmin)/cmax;
}else{
_231=0;
}
if(_231==0){
hue=0;
}else{
var redc=(cmax-r)/(cmax-cmin);
var _236=(cmax-g)/(cmax-cmin);
var _237=(cmax-b)/(cmax-cmin);
if(r==cmax){
hue=_237-_236;
}else{
if(g==cmax){
hue=2+redc-_237;
}else{
hue=4+_236-redc;
}
}
hue=hue/6;
if(hue<0){
hue=hue+1;
}
}
return {h:hue,s:_231,b:_232};
};
OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(left,_239,_23a,top){
if(left!=null){
this.left=OpenLayers.Util.toFloat(left);
}
if(_239!=null){
this.bottom=OpenLayers.Util.toFloat(_239);
}
if(_23a!=null){
this.right=OpenLayers.Util.toFloat(_23a);
}
if(top!=null){
this.top=OpenLayers.Util.toFloat(top);
}
},clone:function(){
return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);
},equals:function(_23c){
var _23d=false;
if(_23c!=null){
_23d=((this.left==_23c.left)&&(this.right==_23c.right)&&(this.top==_23c.top)&&(this.bottom==_23c.bottom));
}
return _23d;
},toString:function(){
return ("left-bottom=("+this.left+","+this.bottom+")"+" right-top=("+this.right+","+this.top+")");
},toArray:function(){
return [this.left,this.bottom,this.right,this.top];
},toBBOX:function(_23e){
if(_23e==null){
_23e=6;
}
var mult=Math.pow(10,_23e);
var bbox=Math.round(this.left*mult)/mult+","+Math.round(this.bottom*mult)/mult+","+Math.round(this.right*mult)/mult+","+Math.round(this.top*mult)/mult;
return bbox;
},toGeometry:function(){
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);
},getWidth:function(){
return (this.right-this.left);
},getHeight:function(){
return (this.top-this.bottom);
},getSize:function(){
return new OpenLayers.Size(this.getWidth(),this.getHeight());
},getCenterPixel:function(){
return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);
},getCenterLonLat:function(){
if(!this.centerLonLat){
this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);
}
return this.centerLonLat;
},scale:function(_241,_242){
if(_242==null){
_242=this.getCenterLonLat();
}
var _243=[];
var _244,_245;
if(_242.CLASS_NAME=="OpenLayers.LonLat"){
_244=_242.lon;
_245=_242.lat;
}else{
_244=_242.x;
_245=_242.y;
}
var left=(this.left-_244)*_241+_244;
var _247=(this.bottom-_245)*_241+_245;
var _248=(this.right-_244)*_241+_244;
var top=(this.top-_245)*_241+_245;
return new OpenLayers.Bounds(left,_247,_248,top);
},add:function(x,y){
if((x==null)||(y==null)){
var msg=OpenLayers.i18n("boundsAddError");
OpenLayers.Console.error(msg);
return null;
}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);
},extend:function(_24d){
var _24e=null;
if(_24d){
switch(_24d.CLASS_NAME){
case "OpenLayers.LonLat":
_24e=new OpenLayers.Bounds(_24d.lon,_24d.lat,_24d.lon,_24d.lat);
break;
case "OpenLayers.Geometry.Point":
_24e=new OpenLayers.Bounds(_24d.x,_24d.y,_24d.x,_24d.y);
break;
case "OpenLayers.Bounds":
_24e=_24d;
break;
}
if(_24e){
this.centerLonLat=null;
if((this.left==null)||(_24e.left<this.left)){
this.left=_24e.left;
}
if((this.bottom==null)||(_24e.bottom<this.bottom)){
this.bottom=_24e.bottom;
}
if((this.right==null)||(_24e.right>this.right)){
this.right=_24e.right;
}
if((this.top==null)||(_24e.top>this.top)){
this.top=_24e.top;
}
}
}
},containsLonLat:function(ll,_250){
return this.contains(ll.lon,ll.lat,_250);
},containsPixel:function(px,_252){
return this.contains(px.x,px.y,_252);
},contains:function(x,y,_255){
if(_255==null){
_255=true;
}
if(x==null||y==null){
return false;
}
x=OpenLayers.Util.toFloat(x);
y=OpenLayers.Util.toFloat(y);
var _256=false;
if(_255){
_256=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));
}else{
_256=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));
}
return _256;
},intersectsBounds:function(_257,_258){
if(_258==null){
_258=true;
}
var _259=false;
var _25a=(this.left==_257.right||this.right==_257.left||this.top==_257.bottom||this.bottom==_257.top);
if(_258||!_25a){
var _25b=(((_257.bottom>=this.bottom)&&(_257.bottom<=this.top))||((this.bottom>=_257.bottom)&&(this.bottom<=_257.top)));
var _25c=(((_257.top>=this.bottom)&&(_257.top<=this.top))||((this.top>_257.bottom)&&(this.top<_257.top)));
var _25d=(((_257.left>=this.left)&&(_257.left<=this.right))||((this.left>=_257.left)&&(this.left<=_257.right)));
var _25e=(((_257.right>=this.left)&&(_257.right<=this.right))||((this.right>=_257.left)&&(this.right<=_257.right)));
_259=((_25b||_25c)&&(_25d||_25e));
}
return _259;
},containsBounds:function(_25f,_260,_261){
if(_260==null){
_260=false;
}
if(_261==null){
_261=true;
}
var _262=this.contains(_25f.left,_25f.bottom,_261);
var _263=this.contains(_25f.right,_25f.bottom,_261);
var _264=this.contains(_25f.left,_25f.top,_261);
var _265=this.contains(_25f.right,_25f.top,_261);
return (_260)?(_262||_263||_264||_265):(_262&&_263&&_264&&_265);
},determineQuadrant:function(_266){
var _267="";
var _268=this.getCenterLonLat();
_267+=(_266.lat<_268.lat)?"b":"t";
_267+=(_266.lon<_268.lon)?"l":"r";
return _267;
},transform:function(_269,dest){
this.centerLonLat=null;
var ll=OpenLayers.Projection.transform({"x":this.left,"y":this.bottom},_269,dest);
var lr=OpenLayers.Projection.transform({"x":this.right,"y":this.bottom},_269,dest);
var ul=OpenLayers.Projection.transform({"x":this.left,"y":this.top},_269,dest);
var ur=OpenLayers.Projection.transform({"x":this.right,"y":this.top},_269,dest);
this.left=Math.min(ll.x,ul.x);
this.bottom=Math.min(ll.y,lr.y);
this.right=Math.max(lr.x,ur.x);
this.top=Math.max(ul.y,ur.y);
return this;
},wrapDateLine:function(_26f,_270){
_270=_270||{};
var _271=_270.leftTolerance||0;
var _272=_270.rightTolerance||0;
var _273=this.clone();
if(_26f){
while(_273.left<_26f.left&&(_273.right-_272)<=_26f.left){
_273=_273.add(_26f.getWidth(),0);
}
while((_273.left+_271)>=_26f.right&&_273.right>_26f.right){
_273=_273.add(-_26f.getWidth(),0);
}
}
return _273;
},CLASS_NAME:"OpenLayers.Bounds"});
OpenLayers.Bounds.fromString=function(str){
var _275=str.split(",");
return OpenLayers.Bounds.fromArray(_275);
};
OpenLayers.Bounds.fromArray=function(bbox){
return new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));
};
OpenLayers.Bounds.fromSize=function(size){
return new OpenLayers.Bounds(0,size.h,size.w,0);
};
OpenLayers.Bounds.oppositeQuadrant=function(_278){
var opp="";
opp+=(_278.charAt(0)=="t")?"b":"t";
opp+=(_278.charAt(1)=="l")?"r":"l";
return opp;
};
OpenLayers.LonLat=OpenLayers.Class({lon:0,lat:0,initialize:function(lon,lat){
this.lon=OpenLayers.Util.toFloat(lon);
this.lat=OpenLayers.Util.toFloat(lat);
},toString:function(){
return ("lon="+this.lon+",lat="+this.lat);
},toShortString:function(){
return (this.lon+", "+this.lat);
},clone:function(){
return new OpenLayers.LonLat(this.lon,this.lat);
},add:function(lon,lat){
if((lon==null)||(lat==null)){
var msg=OpenLayers.i18n("lonlatAddError");
OpenLayers.Console.error(msg);
return null;
}
return new OpenLayers.LonLat(this.lon+lon,this.lat+lat);
},equals:function(ll){
var _280=false;
if(ll!=null){
_280=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));
}
return _280;
},transform:function(_281,dest){
var _283=OpenLayers.Projection.transform({"x":this.lon,"y":this.lat},_281,dest);
this.lon=_283.x;
this.lat=_283.y;
return this;
},wrapDateLine:function(_284){
var _285=this.clone();
if(_284){
while(_285.lon<_284.left){
_285.lon+=_284.getWidth();
}
while(_285.lon>_284.right){
_285.lon-=_284.getWidth();
}
}
return _285;
},CLASS_NAME:"OpenLayers.LonLat"});
OpenLayers.LonLat.fromString=function(str){
var pair=str.split(",");
return new OpenLayers.LonLat(parseFloat(pair[0]),parseFloat(pair[1]));
};
OpenLayers.Pixel=OpenLayers.Class({x:0,y:0,initialize:function(x,y){
this.x=parseFloat(x);
this.y=parseFloat(y);
},toString:function(){
return ("x="+this.x+",y="+this.y);
},clone:function(){
return new OpenLayers.Pixel(this.x,this.y);
},equals:function(px){
var _28b=false;
if(px!=null){
_28b=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));
}
return _28b;
},add:function(x,y){
if((x==null)||(y==null)){
var msg=OpenLayers.i18n("pixelAddError");
OpenLayers.Console.error(msg);
return null;
}
return new OpenLayers.Pixel(this.x+x,this.y+y);
},offset:function(px){
var _290=this.clone();
if(px){
_290=this.add(px.x,px.y);
}
return _290;
},CLASS_NAME:"OpenLayers.Pixel"});
OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:false,displayClass:"",title:"",active:null,handler:null,eventListeners:null,events:null,EVENT_TYPES:["activate","deactivate"],initialize:function(_291){
this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");
OpenLayers.Util.extend(this,_291);
this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);
if(this.eventListeners instanceof Object){
this.events.on(this.eventListeners);
}
if(this.id==null){
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
}
},destroy:function(){
if(this.events){
if(this.eventListeners){
this.events.un(this.eventListeners);
}
this.events.destroy();
this.events=null;
}
this.eventListeners=null;
if(this.handler){
this.handler.destroy();
this.handler=null;
}
if(this.handlers){
for(var key in this.handlers){
if(this.handlers.hasOwnProperty(key)&&typeof this.handlers[key].destroy=="function"){
this.handlers[key].destroy();
}
}
this.handlers=null;
}
if(this.map){
this.map.removeControl(this);
this.map=null;
}
},setMap:function(map){
this.map=map;
if(this.handler){
this.handler.setMap(map);
}
},draw:function(px){
if(this.div==null){
this.div=OpenLayers.Util.createDiv(this.id);
this.div.className=this.displayClass;
if(!this.allowSelection){
this.div.className+=" olControlNoSelect";
this.div.setAttribute("unselectable","on",0);
this.div.onselectstart=function(){
return (false);
};
}
if(this.title!=""){
this.div.title=this.title;
}
}
if(px!=null){
this.position=px.clone();
}
this.moveTo(this.position);
return this.div;
},moveTo:function(px){
if((px!=null)&&(this.div!=null)){
this.div.style.left=px.x+"px";
this.div.style.top=px.y+"px";
}
},activate:function(){
if(this.active){
return false;
}
if(this.handler){
this.handler.activate();
}
this.active=true;
if(this.map){
OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");
}
this.events.triggerEvent("activate");
return true;
},deactivate:function(){
if(this.active){
if(this.handler){
this.handler.deactivate();
}
this.active=false;
if(this.map){
OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");
}
this.events.triggerEvent("deactivate");
return true;
}
return false;
},CLASS_NAME:"OpenLayers.Control"});
OpenLayers.Control.TYPE_BUTTON=1;
OpenLayers.Control.TYPE_TOGGLE=2;
OpenLayers.Control.TYPE_TOOL=3;
OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){
if(!OpenLayers.Lang.code){
OpenLayers.Lang.setCode();
}
return OpenLayers.Lang.code;
},setCode:function(code){
var lang;
if(!code){
code=(OpenLayers.Util.getBrowserName()=="msie")?navigator.userLanguage:navigator.language;
}
var _298=code.split("-");
_298[0]=_298[0].toLowerCase();
if(typeof OpenLayers.Lang[_298[0]]=="object"){
lang=_298[0];
}
if(_298[1]){
var _299=_298[0]+"-"+_298[1].toUpperCase();
if(typeof OpenLayers.Lang[_299]=="object"){
lang=_299;
}
}
if(!lang){
OpenLayers.Console.warn("Failed to find OpenLayers.Lang."+_298.join("-")+" dictionary, falling back to default language");
lang=OpenLayers.Lang.defaultCode;
}
OpenLayers.Lang.code=lang;
},translate:function(key,_29b){
var _29c=OpenLayers.Lang[OpenLayers.Lang.getCode()];
var _29d=_29c[key];
if(!_29d){
_29d=key;
}
if(_29b){
_29d=OpenLayers.String.format(_29d,_29b);
}
return _29d;
}};
OpenLayers.i18n=OpenLayers.Lang.translate;
OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,keepInMap:true,anchor:null,initialize:function(id,_29f,_2a0,_2a1,_2a2,_2a3,_2a4){
var _2a5=[id,_29f,_2a0,_2a1,_2a3,_2a4];
OpenLayers.Popup.prototype.initialize.apply(this,_2a5);
this.anchor=(_2a2!=null)?_2a2:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)};
},destroy:function(){
this.anchor=null;
this.relativePosition=null;
OpenLayers.Popup.prototype.destroy.apply(this,arguments);
},show:function(){
this.updatePosition();
OpenLayers.Popup.prototype.show.apply(this,arguments);
},moveTo:function(px){
var _2a7=this.relativePosition;
this.relativePosition=this.calculateRelativePosition(px);
var _2a8=this.calculateNewPx(px);
var _2a9=new Array(_2a8);
OpenLayers.Popup.prototype.moveTo.apply(this,_2a9);
if(this.relativePosition!=_2a7){
this.updateRelativePosition();
}
},setSize:function(_2aa){
OpenLayers.Popup.prototype.setSize.apply(this,arguments);
if((this.lonlat)&&(this.map)){
var px=this.map.getLayerPxFromLonLat(this.lonlat);
this.moveTo(px);
}
},calculateRelativePosition:function(px){
var _2ad=this.map.getLonLatFromLayerPx(px);
var _2ae=this.map.getExtent();
var _2af=_2ae.determineQuadrant(_2ad);
return OpenLayers.Bounds.oppositeQuadrant(_2af);
},updateRelativePosition:function(){
},calculateNewPx:function(px){
var _2b1=px.offset(this.anchor.offset);
var size=this.size||this.contentSize;
var top=(this.relativePosition.charAt(0)=="t");
_2b1.y+=(top)?-size.h:this.anchor.size.h;
var left=(this.relativePosition.charAt(1)=="l");
_2b1.x+=(left)?-size.w:this.anchor.size.w;
return _2b1;
},CLASS_NAME:"OpenLayers.Popup.Anchored"});
OpenLayers.Protocol.SQL=OpenLayers.Class(OpenLayers.Protocol,{databaseName:"ol",tableName:"ol_vector_features",postReadFiltering:true,initialize:function(_2b5){
OpenLayers.Protocol.prototype.initialize.apply(this,[_2b5]);
},destroy:function(){
OpenLayers.Protocol.prototype.destroy.apply(this);
},supported:function(){
return false;
},evaluateFilter:function(_2b6,_2b7){
return _2b7&&this.postReadFiltering?_2b7.evaluate(_2b6):true;
},CLASS_NAME:"OpenLayers.Protocol.SQL"});
OpenLayers.Protocol.WFS=function(_2b8){
_2b8=OpenLayers.Util.applyDefaults(_2b8,OpenLayers.Protocol.WFS.DEFAULTS);
var cls=OpenLayers.Protocol.WFS["v"+_2b8.version.replace(/\./g,"_")];
if(!cls){
throw "Unsupported WFS version: "+_2b8.version;
}
return new cls(_2b8);
};
OpenLayers.Protocol.WFS.fromWMSLayer=function(_2ba,_2bb){
var _2bc,_2bd;
var _2be=_2ba.params["LAYERS"];
var _2bf=(_2be instanceof Array?_2be[0]:_2be).split(":");
if(_2bf.length>1){
_2bd=_2bf[0];
}
_2bc=_2bf.pop();
var _2c0={url:_2ba.url,featureType:_2bc,featurePrefix:_2bd,srsName:_2ba.projection&&_2ba.projection.getCode()||_2ba.map&&_2ba.map.getProjectionObject().getCode(),version:"1.1.0"};
return new OpenLayers.Protocol.WFS(OpenLayers.Util.applyDefaults(_2bb,_2c0));
};
OpenLayers.Protocol.WFS.DEFAULTS={"version":"1.0.0"};
OpenLayers.Renderer.Canvas=OpenLayers.Class(OpenLayers.Renderer,{canvas:null,features:null,geometryMap:null,initialize:function(_2c1){
OpenLayers.Renderer.prototype.initialize.apply(this,arguments);
this.root=document.createElement("canvas");
this.container.appendChild(this.root);
this.canvas=this.root.getContext("2d");
this.features={};
this.geometryMap={};
},eraseGeometry:function(_2c2){
this.eraseFeatures(this.features[this.geometryMap[_2c2.id]][0]);
},supported:function(){
var _2c3=document.createElement("canvas");
return !!_2c3.getContext;
},setExtent:function(_2c4){
this.extent=_2c4.clone();
this.resolution=null;
this.redraw();
},setSize:function(size){
this.size=size.clone();
this.root.style.width=size.w+"px";
this.root.style.height=size.h+"px";
this.root.width=size.w;
this.root.height=size.h;
this.resolution=null;
},drawFeature:function(_2c6,_2c7){
if(_2c7==null){
_2c7=_2c6.style;
}
_2c7=OpenLayers.Util.extend({"fillColor":"#000000","strokeColor":"#000000","strokeWidth":2,"fillOpacity":1,"strokeOpacity":1},_2c7);
this.features[_2c6.id]=[_2c6,_2c7];
if(_2c6.geometry){
this.geometryMap[_2c6.geometry.id]=_2c6.id;
}
this.redraw();
},drawGeometry:function(_2c8,_2c9){
var _2ca=_2c8.CLASS_NAME;
if((_2ca=="OpenLayers.Geometry.Collection")||(_2ca=="OpenLayers.Geometry.MultiPoint")||(_2ca=="OpenLayers.Geometry.MultiLineString")||(_2ca=="OpenLayers.Geometry.MultiPolygon")){
for(var i=0;i<_2c8.components.length;i++){
this.drawGeometry(_2c8.components[i],_2c9);
}
return;
}
switch(_2c8.CLASS_NAME){
case "OpenLayers.Geometry.Point":
this.drawPoint(_2c8,_2c9);
break;
case "OpenLayers.Geometry.LineString":
this.drawLineString(_2c8,_2c9);
break;
case "OpenLayers.Geometry.LinearRing":
this.drawLinearRing(_2c8,_2c9);
break;
case "OpenLayers.Geometry.Polygon":
this.drawPolygon(_2c8,_2c9);
break;
default:
break;
}
},drawExternalGraphic:function(pt,_2cd){
var img=new Image();
img.src=_2cd.externalGraphic;
if(_2cd.graphicTitle){
img.title=_2cd.graphicTitle;
}
var _2cf=_2cd.graphicWidth||_2cd.graphicHeight;
var _2d0=_2cd.graphicHeight||_2cd.graphicWidth;
_2cf=_2cf?_2cf:_2cd.pointRadius*2;
_2d0=_2d0?_2d0:_2cd.pointRadius*2;
var _2d1=(_2cd.graphicXOffset!=undefined)?_2cd.graphicXOffset:-(0.5*_2cf);
var _2d2=(_2cd.graphicYOffset!=undefined)?_2cd.graphicYOffset:-(0.5*_2d0);
var _2d3=_2cd.graphicOpacity||_2cd.fillOpacity;
var _2d4={img:img,x:(pt[0]+_2d1),y:(pt[1]+_2d2),width:_2cf,height:_2d0,canvas:this.canvas};
img.onload=OpenLayers.Function.bind(function(){
this.canvas.drawImage(this.img,this.x,this.y,this.width,this.height);
},_2d4);
},setCanvasStyle:function(type,_2d6){
if(type=="fill"){
this.canvas.globalAlpha=_2d6["fillOpacity"];
this.canvas.fillStyle=_2d6["fillColor"];
}else{
if(type=="stroke"){
this.canvas.globalAlpha=_2d6["strokeOpacity"];
this.canvas.strokeStyle=_2d6["strokeColor"];
this.canvas.lineWidth=_2d6["strokeWidth"];
}else{
this.canvas.globalAlpha=0;
this.canvas.lineWidth=1;
}
}
},drawPoint:function(_2d7,_2d8){
if(_2d8.graphic!==false){
var pt=this.getLocalXY(_2d7);
if(_2d8.externalGraphic){
this.drawExternalGraphic(pt,_2d8);
}else{
if(_2d8.fill!==false){
this.setCanvasStyle("fill",_2d8);
this.canvas.beginPath();
this.canvas.arc(pt[0],pt[1],6,0,Math.PI*2,true);
this.canvas.fill();
}
if(_2d8.stroke!==false){
this.setCanvasStyle("stroke",_2d8);
this.canvas.beginPath();
this.canvas.arc(pt[0],pt[1],6,0,Math.PI*2,true);
this.canvas.stroke();
this.setCanvasStyle("reset");
}
}
}
},drawLineString:function(_2da,_2db){
if(_2db.stroke!==false){
this.setCanvasStyle("stroke",_2db);
this.canvas.beginPath();
var _2dc=this.getLocalXY(_2da.components[0]);
this.canvas.moveTo(_2dc[0],_2dc[1]);
for(var i=1;i<_2da.components.length;i++){
var pt=this.getLocalXY(_2da.components[i]);
this.canvas.lineTo(pt[0],pt[1]);
}
this.canvas.stroke();
}
this.setCanvasStyle("reset");
},drawLinearRing:function(_2df,_2e0){
if(_2e0.fill!==false){
this.setCanvasStyle("fill",_2e0);
this.canvas.beginPath();
var _2e1=this.getLocalXY(_2df.components[0]);
this.canvas.moveTo(_2e1[0],_2e1[1]);
for(var i=1;i<_2df.components.length-1;i++){
var pt=this.getLocalXY(_2df.components[i]);
this.canvas.lineTo(pt[0],pt[1]);
}
this.canvas.fill();
}
if(_2e0.stroke!==false){
var _2e4=this.canvas.lineWidth;
this.setCanvasStyle("stroke",_2e0);
this.canvas.beginPath();
var _2e1=this.getLocalXY(_2df.components[0]);
this.canvas.moveTo(_2e1[0],_2e1[1]);
for(var i=1;i<_2df.components.length;i++){
var pt=this.getLocalXY(_2df.components[i]);
this.canvas.lineTo(pt[0],pt[1]);
}
this.canvas.stroke();
}
this.setCanvasStyle("reset");
},drawPolygon:function(_2e5,_2e6){
this.drawLinearRing(_2e5.components[0],_2e6);
for(var i=1;i<_2e5.components.length;i++){
this.drawLinearRing(_2e5.components[i],{fillOpacity:0,strokeWidth:0,strokeOpacity:0,strokeColor:"#000000",fillColor:"#000000"});
}
},drawText:function(_2e8,_2e9){
_2e9=OpenLayers.Util.extend({fontColor:"#000000",labelAlign:"cm"},_2e9);
var pt=this.getLocalXY(_2e8);
this.setCanvasStyle("reset");
this.canvas.fillStyle=_2e9.fontColor;
this.canvas.globalAlpha=1;
var _2eb=_2e9.fontWeight+" "+_2e9.fontSize+" "+_2e9.fontFamily;
if(this.canvas.fillText){
var _2ec=OpenLayers.Renderer.Canvas.LABEL_ALIGN[_2e9.labelAlign[0]]||"middle";
this.canvas.font=_2eb;
this.canvas.textAlign=_2ec;
this.canvas.fillText(_2e9.label,pt[0],pt[1]);
}else{
if(this.canvas.mozDrawText){
this.canvas.mozTextStyle=_2eb;
var len=this.canvas.mozMeasureText(_2e9.label);
switch(_2e9.labelAlign[0]){
case "l":
break;
case "r":
pt[0]-=len;
break;
case "c":
default:
pt[0]-=len/2;
}
this.canvas.translate(pt[0],pt[1]);
this.canvas.mozDrawText(_2e9.label);
this.canvas.translate(-1*pt[0],-1*pt[1]);
}
}
this.setCanvasStyle("reset");
},getLocalXY:function(_2ee){
var _2ef=this.getResolution();
var _2f0=this.extent;
var x=(_2ee.x/_2ef+(-_2f0.left/_2ef));
var y=((_2f0.top/_2ef)-_2ee.y/_2ef);
return [x,y];
},clear:function(){
this.canvas.clearRect(0,0,this.root.width,this.root.height);
},getFeatureIdFromEvent:function(evt){
var loc=this.map.getLonLatFromPixel(evt.xy);
var _2f5=this.getResolution();
var _2f6=new OpenLayers.Bounds(loc.lon-_2f5*5,loc.lat-_2f5*5,loc.lon+_2f5*5,loc.lat+_2f5*5);
var geom=_2f6.toGeometry();
for(var feat in this.features){
if(!this.features.hasOwnProperty(feat)){
continue;
}
if(this.features[feat][0].geometry.intersects(geom)){
return feat;
}
}
return null;
},eraseFeatures:function(_2f9){
if(!(_2f9 instanceof Array)){
_2f9=[_2f9];
}
for(var i=0;i<_2f9.length;++i){
delete this.features[_2f9[i].id];
}
this.redraw();
},redraw:function(){
if(!this.locked){
this.clear();
var _2fb=[];
var _2fc,_2fd;
for(var id in this.features){
if(!this.features.hasOwnProperty(id)){
continue;
}
_2fc=this.features[id][0];
_2fd=this.features[id][1];
if(!_2fc.geometry){
continue;
}
this.drawGeometry(_2fc.geometry,_2fd);
if(_2fd.label){
_2fb.push([_2fc,_2fd]);
}
}
var item;
for(var i=0;len=_2fb.length,i<len;++i){
item=_2fb[i];
this.drawText(item[0].geometry.getCentroid(),item[1]);
}
}
},CLASS_NAME:"OpenLayers.Renderer.Canvas"});
OpenLayers.Renderer.Canvas.LABEL_ALIGN={"l":"left","r":"right"};
OpenLayers.ElementsIndexer=OpenLayers.Class({maxZIndex:null,order:null,indices:null,compare:null,initialize:function(_301){
this.compare=_301?OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER:OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER;
this.order=[];
this.indices={};
this.maxZIndex=0;
},insert:function(_302){
if(this.exists(_302)){
this.remove(_302);
}
var _303=_302.id;
this.determineZIndex(_302);
var _304=-1;
var _305=this.order.length;
var _306;
while(_305-_304>1){
_306=parseInt((_304+_305)/2);
var _307=this.compare(this,_302,OpenLayers.Util.getElement(this.order[_306]));
if(_307>0){
_304=_306;
}else{
_305=_306;
}
}
this.order.splice(_305,0,_303);
this.indices[_303]=this.getZIndex(_302);
return this.getNextElement(_305);
},remove:function(node){
var _309=node.id;
var _30a=OpenLayers.Util.indexOf(this.order,_309);
if(_30a>=0){
this.order.splice(_30a,1);
delete this.indices[_309];
if(this.order.length>0){
var _30b=this.order[this.order.length-1];
this.maxZIndex=this.indices[_30b];
}else{
this.maxZIndex=0;
}
}
},clear:function(){
this.order=[];
this.indices={};
this.maxZIndex=0;
},exists:function(node){
return (this.indices[node.id]!=null);
},getZIndex:function(node){
return node._style.graphicZIndex;
},determineZIndex:function(node){
var _30f=node._style.graphicZIndex;
if(_30f==null){
_30f=this.maxZIndex;
node._style.graphicZIndex=_30f;
}else{
if(_30f>this.maxZIndex){
this.maxZIndex=_30f;
}
}
},getNextElement:function(_310){
var _311=_310+1;
if(_311<this.order.length){
var _312=OpenLayers.Util.getElement(this.order[_311]);
if(_312==undefined){
_312=this.getNextElement(_311);
}
return _312;
}else{
return null;
}
},CLASS_NAME:"OpenLayers.ElementsIndexer"});
OpenLayers.ElementsIndexer.IndexingMethods={Z_ORDER:function(_313,_314,_315){
var _316=_313.getZIndex(_314);
var _317=0;
if(_315){
var _318=_313.getZIndex(_315);
_317=_316-_318;
}
return _317;
},Z_ORDER_DRAWING_ORDER:function(_319,_31a,_31b){
var _31c=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(_319,_31a,_31b);
if(_31b&&_31c==0){
_31c=1;
}
return _31c;
},Z_ORDER_Y_ORDER:function(_31d,_31e,_31f){
var _320=OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(_31d,_31e,_31f);
if(_31f&&_320==0){
var _321=_31e._geometry.getBounds().bottom;
var _322=_31f._geometry.getBounds().bottom;
var _323=_322-_321;
_320=(_323==0)?1:_323;
}
return _320;
}};
OpenLayers.Renderer.Elements=OpenLayers.Class(OpenLayers.Renderer,{rendererRoot:null,root:null,vectorRoot:null,textRoot:null,xmlns:null,indexer:null,BACKGROUND_ID_SUFFIX:"_background",LABEL_ID_SUFFIX:"_label",minimumSymbolizer:{strokeLinecap:"round",strokeOpacity:1,strokeDashstyle:"solid",fillOpacity:1,pointRadius:0},initialize:function(_324,_325){
OpenLayers.Renderer.prototype.initialize.apply(this,arguments);
this.rendererRoot=this.createRenderRoot();
this.root=this.createRoot("_root");
this.vectorRoot=this.createRoot("_vroot");
this.textRoot=this.createRoot("_troot");
this.root.appendChild(this.vectorRoot);
this.root.appendChild(this.textRoot);
this.rendererRoot.appendChild(this.root);
this.container.appendChild(this.rendererRoot);
if(_325&&(_325.zIndexing||_325.yOrdering)){
this.indexer=new OpenLayers.ElementsIndexer(_325.yOrdering);
}
},destroy:function(){
this.clear();
this.rendererRoot=null;
this.root=null;
this.xmlns=null;
OpenLayers.Renderer.prototype.destroy.apply(this,arguments);
},clear:function(){
if(this.vectorRoot){
while(this.vectorRoot.childNodes.length>0){
this.vectorRoot.removeChild(this.vectorRoot.firstChild);
}
}
if(this.textRoot){
while(this.textRoot.childNodes.length>0){
this.textRoot.removeChild(this.textRoot.firstChild);
}
}
if(this.indexer){
this.indexer.clear();
}
},getNodeType:function(_326,_327){
},drawGeometry:function(_328,_329,_32a){
var _32b=_328.CLASS_NAME;
var _32c=true;
if((_32b=="OpenLayers.Geometry.Collection")||(_32b=="OpenLayers.Geometry.MultiPoint")||(_32b=="OpenLayers.Geometry.MultiLineString")||(_32b=="OpenLayers.Geometry.MultiPolygon")){
for(var i=0,len=_328.components.length;i<len;i++){
_32c=this.drawGeometry(_328.components[i],_329,_32a)&&_32c;
}
return _32c;
}
_32c=false;
if(_329.display!="none"){
if(_329.backgroundGraphic){
this.redrawBackgroundNode(_328.id,_328,_329,_32a);
}
_32c=this.redrawNode(_328.id,_328,_329,_32a);
}
if(_32c==false){
var node=document.getElementById(_328.id);
if(node){
if(node._style.backgroundGraphic){
node.parentNode.removeChild(document.getElementById(_328.id+this.BACKGROUND_ID_SUFFIX));
}
node.parentNode.removeChild(node);
}
}
return _32c;
},redrawNode:function(id,_331,_332,_333){
var node=this.nodeFactory(id,this.getNodeType(_331,_332));
node._featureId=_333;
node._geometry=_331;
node._geometryClass=_331.CLASS_NAME;
node._style=_332;
var _335=this.drawGeometryNode(node,_331,_332);
if(_335===false){
return false;
}
node=_335.node;
if(this.indexer){
var _336=this.indexer.insert(node);
if(_336){
this.vectorRoot.insertBefore(node,_336);
}else{
this.vectorRoot.appendChild(node);
}
}else{
if(node.parentNode!==this.vectorRoot){
this.vectorRoot.appendChild(node);
}
}
this.postDraw(node);
return _335.complete;
},redrawBackgroundNode:function(id,_338,_339,_33a){
var _33b=OpenLayers.Util.extend({},_339);
_33b.externalGraphic=_33b.backgroundGraphic;
_33b.graphicXOffset=_33b.backgroundXOffset;
_33b.graphicYOffset=_33b.backgroundYOffset;
_33b.graphicZIndex=_33b.backgroundGraphicZIndex;
_33b.graphicWidth=_33b.backgroundWidth||_33b.graphicWidth;
_33b.graphicHeight=_33b.backgroundHeight||_33b.graphicHeight;
_33b.backgroundGraphic=null;
_33b.backgroundXOffset=null;
_33b.backgroundYOffset=null;
_33b.backgroundGraphicZIndex=null;
return this.redrawNode(id+this.BACKGROUND_ID_SUFFIX,_338,_33b,null);
},drawGeometryNode:function(node,_33d,_33e){
_33e=_33e||node._style;
OpenLayers.Util.applyDefaults(_33e,this.minimumSymbolizer);
var _33f={"isFilled":_33e.fill===undefined?true:_33e.fill,"isStroked":_33e.stroke===undefined?!!_33e.strokeWidth:_33e.stroke};
var _340;
switch(_33d.CLASS_NAME){
case "OpenLayers.Geometry.Point":
if(_33e.graphic===false){
_33f.isFilled=false;
_33f.isStroked=false;
}
_340=this.drawPoint(node,_33d);
break;
case "OpenLayers.Geometry.LineString":
_33f.isFilled=false;
_340=this.drawLineString(node,_33d);
break;
case "OpenLayers.Geometry.LinearRing":
_340=this.drawLinearRing(node,_33d);
break;
case "OpenLayers.Geometry.Polygon":
_340=this.drawPolygon(node,_33d);
break;
case "OpenLayers.Geometry.Surface":
_340=this.drawSurface(node,_33d);
break;
case "OpenLayers.Geometry.Rectangle":
_340=this.drawRectangle(node,_33d);
break;
default:
break;
}
node._style=_33e;
node._options=_33f;
if(_340!=false){
return {node:this.setStyle(node,_33e,_33f,_33d),complete:_340};
}else{
return false;
}
},postDraw:function(node){
},drawPoint:function(node,_343){
},drawLineString:function(node,_345){
},drawLinearRing:function(node,_347){
},drawPolygon:function(node,_349){
},drawRectangle:function(node,_34b){
},drawCircle:function(node,_34d){
},drawSurface:function(node,_34f){
},removeText:function(_350){
var _351=document.getElementById(_350+this.LABEL_ID_SUFFIX);
if(_351){
this.textRoot.removeChild(_351);
}
},getFeatureIdFromEvent:function(evt){
var _353=evt.target;
var _354=_353&&_353.correspondingUseElement;
var node=_354?_354:(_353||evt.srcElement);
var _356=node._featureId;
return _356;
},eraseGeometry:function(_357){
if((_357.CLASS_NAME=="OpenLayers.Geometry.MultiPoint")||(_357.CLASS_NAME=="OpenLayers.Geometry.MultiLineString")||(_357.CLASS_NAME=="OpenLayers.Geometry.MultiPolygon")||(_357.CLASS_NAME=="OpenLayers.Geometry.Collection")){
for(var i=0,len=_357.components.length;i<len;i++){
this.eraseGeometry(_357.components[i]);
}
}else{
var _35a=OpenLayers.Util.getElement(_357.id);
if(_35a&&_35a.parentNode){
if(_35a.geometry){
_35a.geometry.destroy();
_35a.geometry=null;
}
_35a.parentNode.removeChild(_35a);
if(this.indexer){
this.indexer.remove(_35a);
}
if(_35a._style.backgroundGraphic){
var _35b=_357.id+this.BACKGROUND_ID_SUFFIX;
var _35c=OpenLayers.Util.getElement(_35b);
if(_35c&&_35c.parentNode){
_35c.parentNode.removeChild(_35c);
}
}
}
}
},nodeFactory:function(id,type){
var node=OpenLayers.Util.getElement(id);
if(node){
if(!this.nodeTypeCompare(node,type)){
node.parentNode.removeChild(node);
node=this.nodeFactory(id,type);
}
}else{
node=this.createNode(type,id);
}
return node;
},nodeTypeCompare:function(node,type){
},createNode:function(type,id){
},moveRoot:function(_364){
var root=this.root;
if(_364.root.parentNode==this.rendererRoot){
root=_364.root;
}
root.parentNode.removeChild(root);
_364.rendererRoot.appendChild(root);
},getRenderLayerId:function(){
return this.root.parentNode.parentNode.id;
},isComplexSymbol:function(_366){
return (_366!="circle")&&!!_366;
},CLASS_NAME:"OpenLayers.Renderer.Elements"});
OpenLayers.Renderer.symbol={"star":[350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161,350,75],"cross":[4,0,6,0,6,4,10,4,10,6,6,6,6,10,4,10,4,6,0,6,0,4,4,4,4,0],"x":[0,0,25,0,50,35,75,0,100,0,65,50,100,100,75,100,50,65,25,100,0,100,35,50,0,0],"square":[0,0,0,1,1,1,1,0,0,0],"triangle":[0,10,10,10,5,0,0,10]};
OpenLayers.Strategy.Cluster=OpenLayers.Class(OpenLayers.Strategy,{distance:20,threshold:null,features:null,clusters:null,clustering:false,resolution:null,initialize:function(_367){
OpenLayers.Strategy.prototype.initialize.apply(this,[_367]);
},activate:function(){
var _368=OpenLayers.Strategy.prototype.activate.call(this);
if(_368){
this.layer.events.on({"beforefeaturesadded":this.cacheFeatures,"moveend":this.cluster,scope:this});
}
return _368;
},deactivate:function(){
var _369=OpenLayers.Strategy.prototype.deactivate.call(this);
if(_369){
this.clearCache();
this.layer.events.un({"beforefeaturesadded":this.cacheFeatures,"moveend":this.cluster,scope:this});
}
return _369;
},cacheFeatures:function(_36a){
var _36b=true;
if(!this.clustering){
this.clearCache();
this.features=_36a.features;
this.cluster();
_36b=false;
}
return _36b;
},clearCache:function(){
this.features=null;
},cluster:function(_36c){
if((!_36c||_36c.zoomChanged)&&this.features){
var _36d=this.layer.map.getResolution();
if(_36d!=this.resolution||!this.clustersExist()){
this.resolution=_36d;
var _36e=[];
var _36f,_370,_371;
for(var i=0;i<this.features.length;++i){
_36f=this.features[i];
if(_36f.geometry){
_370=false;
for(var j=0;j<_36e.length;++j){
_371=_36e[j];
if(this.shouldCluster(_371,_36f)){
this.addToCluster(_371,_36f);
_370=true;
break;
}
}
if(!_370){
_36e.push(this.createCluster(this.features[i]));
}
}
}
this.layer.destroyFeatures();
if(_36e.length>0){
if(this.threshold>1){
var _374=_36e.slice();
_36e=[];
var _375;
for(var i=0,len=_374.length;i<len;++i){
_375=_374[i];
if(_375.attributes.count<this.threshold){
Array.prototype.push.apply(_36e,_375.cluster);
}else{
_36e.push(_375);
}
}
}
this.clustering=true;
this.layer.addFeatures(_36e);
this.clustering=false;
}
this.clusters=_36e;
}
}
},clustersExist:function(){
var _377=false;
if(this.clusters&&this.clusters.length>0&&this.clusters.length==this.layer.features.length){
_377=true;
for(var i=0;i<this.clusters.length;++i){
if(this.clusters[i]!=this.layer.features[i]){
_377=false;
break;
}
}
}
return _377;
},shouldCluster:function(_379,_37a){
var cc=_379.geometry.getBounds().getCenterLonLat();
var fc=_37a.geometry.getBounds().getCenterLonLat();
var _37d=(Math.sqrt(Math.pow((cc.lon-fc.lon),2)+Math.pow((cc.lat-fc.lat),2))/this.resolution);
return (_37d<=this.distance);
},addToCluster:function(_37e,_37f){
_37e.cluster.push(_37f);
_37e.attributes.count+=1;
},createCluster:function(_380){
var _381=_380.geometry.getBounds().getCenterLonLat();
var _382=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_381.lon,_381.lat),{count:1});
_382.cluster=[_380];
return _382;
},CLASS_NAME:"OpenLayers.Strategy.Cluster"});
OpenLayers.Strategy.Fixed=OpenLayers.Class(OpenLayers.Strategy,{preload:false,initialize:function(_383){
OpenLayers.Strategy.prototype.initialize.apply(this,[_383]);
},destroy:function(){
OpenLayers.Strategy.prototype.destroy.apply(this,arguments);
},activate:function(){
if(OpenLayers.Strategy.prototype.activate.apply(this,arguments)){
this.layer.events.on({"refresh":this.load,scope:this});
if(this.layer.visibility==true||this.preload){
this.load();
}else{
this.layer.events.on({"visibilitychanged":this.load,scope:this});
}
return true;
}
return false;
},deactivate:function(){
var _384=OpenLayers.Strategy.prototype.deactivate.call(this);
if(_384){
this.layer.events.un({"refresh":this.load,"visibilitychanged":this.load,scope:this});
}
return _384;
},load:function(_385){
this.layer.events.triggerEvent("loadstart");
this.layer.protocol.read(OpenLayers.Util.applyDefaults({callback:this.merge,scope:this},_385));
this.layer.events.un({"visibilitychanged":this.load,scope:this});
},merge:function(resp){
this.layer.destroyFeatures();
var _387=resp.features;
if(_387&&_387.length>0){
var _388=this.layer.projection;
var _389=this.layer.map.getProjectionObject();
if(!_389.equals(_388)){
var geom;
for(var i=0,len=_387.length;i<len;++i){
geom=_387[i].geometry;
if(geom){
geom.transform(_388,_389);
}
}
}
this.layer.addFeatures(_387);
}
this.layer.events.triggerEvent("loadend");
},CLASS_NAME:"OpenLayers.Strategy.Fixed"});
OpenLayers.Strategy.Paging=OpenLayers.Class(OpenLayers.Strategy,{features:null,length:10,num:null,paging:false,initialize:function(_38d){
OpenLayers.Strategy.prototype.initialize.apply(this,[_38d]);
},activate:function(){
var _38e=OpenLayers.Strategy.prototype.activate.call(this);
if(_38e){
this.layer.events.on({"beforefeaturesadded":this.cacheFeatures,scope:this});
}
return _38e;
},deactivate:function(){
var _38f=OpenLayers.Strategy.prototype.deactivate.call(this);
if(_38f){
this.clearCache();
this.layer.events.un({"beforefeaturesadded":this.cacheFeatures,scope:this});
}
return _38f;
},cacheFeatures:function(_390){
if(!this.paging){
this.clearCache();
this.features=_390.features;
this.pageNext(_390);
}
},clearCache:function(){
if(this.features){
for(var i=0;i<this.features.length;++i){
this.features[i].destroy();
}
}
this.features=null;
this.num=null;
},pageCount:function(){
var _392=this.features?this.features.length:0;
return Math.ceil(_392/this.length);
},pageNum:function(){
return this.num;
},pageLength:function(_393){
if(_393&&_393>0){
this.length=_393;
}
return this.length;
},pageNext:function(_394){
var _395=false;
if(this.features){
if(this.num===null){
this.num=-1;
}
var _396=(this.num+1)*this.length;
_395=this.page(_396,_394);
}
return _395;
},pagePrevious:function(){
var _397=false;
if(this.features){
if(this.num===null){
this.num=this.pageCount();
}
var _398=(this.num-1)*this.length;
_397=this.page(_398);
}
return _397;
},page:function(_399,_39a){
var _39b=false;
if(this.features){
if(_399>=0&&_399<this.features.length){
var num=Math.floor(_399/this.length);
if(num!=this.num){
this.paging=true;
var _39d=this.features.slice(_399,_399+this.length);
this.layer.removeFeatures(this.layer.features);
this.num=num;
if(_39a&&_39a.features){
_39a.features=_39d;
}else{
this.layer.addFeatures(_39d);
}
this.paging=false;
_39b=true;
}
}
}
return _39b;
},CLASS_NAME:"OpenLayers.Strategy.Paging"});
OpenLayers.Strategy.Save=OpenLayers.Class(OpenLayers.Strategy,{auto:false,timer:null,initialize:function(_39e){
OpenLayers.Strategy.prototype.initialize.apply(this,[_39e]);
},activate:function(){
var _39f=OpenLayers.Strategy.prototype.activate.call(this);
if(_39f){
if(this.auto){
if(typeof this.auto==="number"){
this.timer=window.setInterval(OpenLayers.Function.bind(this.save,this),this.auto*1000);
}else{
this.layer.events.on({"featureadded":this.triggerSave,"afterfeaturemodified":this.triggerSave,scope:this});
}
}
}
return _39f;
},deactivate:function(){
var _3a0=OpenLayers.Strategy.prototype.deactivate.call(this);
if(_3a0){
if(this.auto){
if(typeof this.auto==="number"){
window.clearInterval(this.timer);
}else{
this.layer.events.un({"featureadded":this.triggerSave,"afterfeaturemodified":this.triggerSave,scope:this});
}
}
}
return _3a0;
},triggerSave:function(_3a1){
var _3a2=_3a1.feature;
if(_3a2.state===OpenLayers.State.INSERT||_3a2.state===OpenLayers.State.UPDATE||_3a2.state===OpenLayers.State.DELETE){
this.save([_3a1.feature]);
}
},save:function(_3a3){
if(!_3a3){
_3a3=this.layer.features;
}
var _3a4=this.layer.projection;
var _3a5=this.layer.map.getProjectionObject();
if(!_3a5.equals(_3a4)){
var len=_3a3.length;
var _3a7=new Array(len);
var orig,_3a9;
for(var i=0;i<len;++i){
orig=_3a3[i];
_3a9=orig.clone();
_3a9.fid=orig.fid;
_3a9.state=orig.state;
_3a9._original=orig;
_3a9.geometry.transform(_3a5,_3a4);
_3a7[i]=_3a9;
}
_3a3=_3a7;
}
this.layer.protocol.commit(_3a3,{callback:this.onCommit,scope:this});
},onCommit:function(_3ab){
if(_3ab.success()){
var _3ac=_3ab.reqFeatures;
var _3ad,_3ae;
var _3af=[];
var _3b0=_3ab.insertIds||[];
var j=0;
for(var i=0,len=_3ac.length;i<len;++i){
_3ae=_3ac[i];
_3ae=_3ae._original||_3ae;
_3ad=_3ae.state;
if(_3ad){
if(_3ad==OpenLayers.State.DELETE){
_3af.push(_3ae);
}else{
if(_3ad==OpenLayers.State.INSERT){
_3ae.fid=_3b0[j];
++j;
}
}
_3ae.state=null;
}
}
if(_3af.length>0){
this.layer.destroyFeatures(_3af);
}
}
},CLASS_NAME:"OpenLayers.Strategy.Save"});
OpenLayers.Tween=OpenLayers.Class({INTERVAL:10,easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,interval:null,playing:false,initialize:function(_3b4){
this.easing=(_3b4)?_3b4:OpenLayers.Easing.Expo.easeOut;
},start:function(_3b5,_3b6,_3b7,_3b8){
this.playing=true;
this.begin=_3b5;
this.finish=_3b6;
this.duration=_3b7;
this.callbacks=_3b8.callbacks;
this.time=0;
if(this.interval){
window.clearInterval(this.interval);
this.interval=null;
}
if(this.callbacks&&this.callbacks.start){
this.callbacks.start.call(this,this.begin);
}
this.interval=window.setInterval(OpenLayers.Function.bind(this.play,this),this.INTERVAL);
},stop:function(){
if(!this.playing){
return;
}
if(this.callbacks&&this.callbacks.done){
this.callbacks.done.call(this,this.finish);
}
window.clearInterval(this.interval);
this.interval=null;
this.playing=false;
},play:function(){
var _3b9={};
for(var i in this.begin){
var b=this.begin[i];
var f=this.finish[i];
if(b==null||f==null||isNaN(b)||isNaN(f)){
OpenLayers.Console.error("invalid value for Tween");
}
var c=f-b;
_3b9[i]=this.easing.apply(this,[this.time,b,c,this.duration]);
}
this.time++;
if(this.callbacks&&this.callbacks.eachStep){
this.callbacks.eachStep.call(this,_3b9);
}
if(this.time>this.duration){
if(this.callbacks&&this.callbacks.done){
this.callbacks.done.call(this,this.finish);
this.playing=false;
}
window.clearInterval(this.interval);
this.interval=null;
}
},CLASS_NAME:"OpenLayers.Tween"});
OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};
OpenLayers.Easing.Linear={easeIn:function(t,b,c,d){
return c*t/d+b;
},easeOut:function(t,b,c,d){
return c*t/d+b;
},easeInOut:function(t,b,c,d){
return c*t/d+b;
},CLASS_NAME:"OpenLayers.Easing.Linear"};
OpenLayers.Easing.Expo={easeIn:function(t,b,c,d){
return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;
},easeOut:function(t,b,c,d){
return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
},easeInOut:function(t,b,c,d){
if(t==0){
return b;
}
if(t==d){
return b+c;
}
if((t/=d/2)<1){
return c/2*Math.pow(2,10*(t-1))+b;
}
return c/2*(-Math.pow(2,-10*--t)+2)+b;
},CLASS_NAME:"OpenLayers.Easing.Expo"};
OpenLayers.Easing.Quad={easeIn:function(t,b,c,d){
return c*(t/=d)*t+b;
},easeOut:function(t,b,c,d){
return -c*(t/=d)*(t-2)+b;
},easeInOut:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t+b;
}
return -c/2*((--t)*(t-2)-1)+b;
},CLASS_NAME:"OpenLayers.Easing.Quad"};
OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,initialize:function(_3e2){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},setMap:function(map){
OpenLayers.Control.prototype.setMap.apply(this,arguments);
for(var i=0,len=this.map.controls.length;i<len;i++){
var _3e6=this.map.controls[i];
if((_3e6!=this)&&(_3e6.CLASS_NAME=="OpenLayers.Control.ArgParser")){
if(_3e6.displayProjection!=this.displayProjection){
this.displayProjection=_3e6.displayProjection;
}
break;
}
}
if(i==this.map.controls.length){
var args=OpenLayers.Util.getParameters();
if(args.layers){
this.layers=args.layers;
this.map.events.register("addlayer",this,this.configureLayers);
this.configureLayers();
}
if(args.lat&&args.lon){
this.center=new OpenLayers.LonLat(parseFloat(args.lon),parseFloat(args.lat));
if(args.zoom){
this.zoom=parseInt(args.zoom);
}
this.map.events.register("changebaselayer",this,this.setCenter);
this.setCenter();
}
}
},setCenter:function(){
if(this.map.baseLayer){
this.map.events.unregister("changebaselayer",this,this.setCenter);
if(this.displayProjection){
this.center.transform(this.displayProjection,this.map.getProjectionObject());
}
this.map.setCenter(this.center,this.zoom);
}
},configureLayers:function(){
if(this.layers.length==this.map.layers.length){
this.map.events.unregister("addlayer",this,this.configureLayers);
for(var i=0,len=this.layers.length;i<len;i++){
var _3ea=this.map.layers[i];
var c=this.layers.charAt(i);
if(c=="B"){
this.map.setBaseLayer(_3ea);
}else{
if((c=="T")||(c=="F")){
_3ea.setVisibility(c=="T");
}
}
}
}
},CLASS_NAME:"OpenLayers.Control.ArgParser"});
OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",initialize:function(_3ec){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
this.map.events.un({"removelayer":this.updateAttribution,"addlayer":this.updateAttribution,"changelayer":this.updateAttribution,"changebaselayer":this.updateAttribution,scope:this});
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
this.map.events.on({"changebaselayer":this.updateAttribution,"changelayer":this.updateAttribution,"addlayer":this.updateAttribution,"removelayer":this.updateAttribution,scope:this});
this.updateAttribution();
return this.div;
},updateAttribution:function(){
var _3ed=[];
if(this.map&&this.map.layers){
for(var i=0,len=this.map.layers.length;i<len;i++){
var _3f0=this.map.layers[i];
if(_3f0.attribution&&_3f0.getVisibility()){
_3ed.push(_3f0.attribution);
}
}
this.div.innerHTML=_3ed.join(this.separator);
}
},CLASS_NAME:"OpenLayers.Control.Attribution"});
OpenLayers.Control.Button=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){
},CLASS_NAME:"OpenLayers.Control.Button"});
OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{activeColor:"darkblue",layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(_3f1){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
this.layerStates=[];
},destroy:function(){
OpenLayers.Event.stopObservingElement(this.div);
OpenLayers.Event.stopObservingElement(this.minimizeDiv);
OpenLayers.Event.stopObservingElement(this.maximizeDiv);
this.clearLayersArray("base");
this.clearLayersArray("data");
this.map.events.un({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},setMap:function(map){
OpenLayers.Control.prototype.setMap.apply(this,arguments);
this.map.events.on({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this);
this.loadContents();
if(!this.outsideViewport){
this.minimizeControl();
}
this.redraw();
return this.div;
},clearLayersArray:function(_3f3){
var _3f4=this[_3f3+"Layers"];
if(_3f4){
for(var i=0,len=_3f4.length;i<len;i++){
var _3f7=_3f4[i];
OpenLayers.Event.stopObservingElement(_3f7.inputElem);
OpenLayers.Event.stopObservingElement(_3f7.labelSpan);
}
}
this[_3f3+"LayersDiv"].innerHTML="";
this[_3f3+"Layers"]=[];
},checkRedraw:function(){
var _3f8=false;
if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){
_3f8=true;
}else{
for(var i=0,len=this.layerStates.length;i<len;i++){
var _3fb=this.layerStates[i];
var _3fc=this.map.layers[i];
if((_3fb.name!=_3fc.name)||(_3fb.inRange!=_3fc.inRange)||(_3fb.id!=_3fc.id)||(_3fb.visibility!=_3fc.visibility)){
_3f8=true;
break;
}
}
}
return _3f8;
},redraw:function(){
if(!this.checkRedraw()){
return this.div;
}
this.clearLayersArray("base");
this.clearLayersArray("data");
var _3fd=false;
var _3fe=false;
var len=this.map.layers.length;
this.layerStates=new Array(len);
for(var i=0;i<len;i++){
var _401=this.map.layers[i];
this.layerStates[i]={"name":_401.name,"visibility":_401.visibility,"inRange":_401.inRange,"id":_401.id};
}
var _402=this.map.layers.slice();
if(!this.ascending){
_402.reverse();
}
for(var i=0,len=_402.length;i<len;i++){
var _401=_402[i];
var _403=_401.isBaseLayer;
if(_401.displayInLayerSwitcher){
if(_403){
_3fe=true;
}else{
_3fd=true;
}
var _404=(_403)?(_401==this.map.baseLayer):_401.getVisibility();
var _405=document.createElement("input");
_405.id=this.id+"_input_"+_401.name;
_405.name=(_403)?"baseLayers":_401.name;
_405.type=(_403)?"radio":"checkbox";
_405.value=_401.name;
_405.checked=_404;
_405.defaultChecked=_404;
if(!_403&&!_401.inRange){
_405.disabled=true;
}
var _406={"inputElem":_405,"layer":_401,"layerSwitcher":this};
OpenLayers.Event.observe(_405,"mouseup",OpenLayers.Function.bindAsEventListener(this.onInputClick,_406));
var _407=document.createElement("span");
if(!_403&&!_401.inRange){
_407.style.color="gray";
}
_407.innerHTML=_401.name;
_407.style.verticalAlign=(_403)?"bottom":"baseline";
OpenLayers.Event.observe(_407,"click",OpenLayers.Function.bindAsEventListener(this.onInputClick,_406));
var br=document.createElement("br");
var _409=(_403)?this.baseLayers:this.dataLayers;
_409.push({"layer":_401,"inputElem":_405,"labelSpan":_407});
var _40a=(_403)?this.baseLayersDiv:this.dataLayersDiv;
_40a.appendChild(_405);
_40a.appendChild(_407);
_40a.appendChild(br);
}
}
this.dataLbl.style.display=(_3fd)?"":"none";
this.baseLbl.style.display=(_3fe)?"":"none";
return this.div;
},onInputClick:function(e){
if(!this.inputElem.disabled){
if(this.inputElem.type=="radio"){
this.inputElem.checked=true;
this.layer.map.setBaseLayer(this.layer);
}else{
this.inputElem.checked=!this.inputElem.checked;
this.layerSwitcher.updateMap();
}
}
OpenLayers.Event.stop(e);
},onLayerClick:function(e){
this.updateMap();
},updateMap:function(){
for(var i=0,len=this.baseLayers.length;i<len;i++){
var _40f=this.baseLayers[i];
if(_40f.inputElem.checked){
this.map.setBaseLayer(_40f.layer,false);
}
}
for(var i=0,len=this.dataLayers.length;i<len;i++){
var _40f=this.dataLayers[i];
_40f.layer.setVisibility(_40f.inputElem.checked);
}
},maximizeControl:function(e){
this.div.style.width="20em";
this.div.style.height="";
this.showControls(false);
if(e!=null){
OpenLayers.Event.stop(e);
}
},minimizeControl:function(e){
this.div.style.width="0px";
this.div.style.height="0px";
this.showControls(true);
if(e!=null){
OpenLayers.Event.stop(e);
}
},showControls:function(_412){
this.maximizeDiv.style.display=_412?"":"none";
this.minimizeDiv.style.display=_412?"none":"";
this.layersDiv.style.display=_412?"none":"";
},loadContents:function(){
this.div.style.position="absolute";
this.div.style.top="25px";
this.div.style.right="0px";
this.div.style.left="";
this.div.style.fontFamily="sans-serif";
this.div.style.fontWeight="bold";
this.div.style.marginTop="3px";
this.div.style.marginLeft="3px";
this.div.style.marginBottom="3px";
this.div.style.fontSize="smaller";
this.div.style.color="white";
this.div.style.backgroundColor="transparent";
OpenLayers.Event.observe(this.div,"mouseup",OpenLayers.Function.bindAsEventListener(this.mouseUp,this));
OpenLayers.Event.observe(this.div,"click",this.ignoreEvent);
OpenLayers.Event.observe(this.div,"mousedown",OpenLayers.Function.bindAsEventListener(this.mouseDown,this));
OpenLayers.Event.observe(this.div,"dblclick",this.ignoreEvent);
this.layersDiv=document.createElement("div");
this.layersDiv.id=this.id+"_layersDiv";
this.layersDiv.style.paddingTop="5px";
this.layersDiv.style.paddingLeft="10px";
this.layersDiv.style.paddingBottom="5px";
this.layersDiv.style.paddingRight="75px";
this.layersDiv.style.backgroundColor=this.activeColor;
this.layersDiv.style.width="100%";
this.layersDiv.style.height="100%";
this.baseLbl=document.createElement("div");
this.baseLbl.innerHTML=OpenLayers.i18n("baseLayer");
this.baseLbl.style.marginTop="3px";
this.baseLbl.style.marginLeft="3px";
this.baseLbl.style.marginBottom="3px";
this.baseLayersDiv=document.createElement("div");
this.baseLayersDiv.style.paddingLeft="10px";
this.dataLbl=document.createElement("div");
this.dataLbl.innerHTML=OpenLayers.i18n("overlays");
this.dataLbl.style.marginTop="3px";
this.dataLbl.style.marginLeft="3px";
this.dataLbl.style.marginBottom="3px";
this.dataLayersDiv=document.createElement("div");
this.dataLayersDiv.style.paddingLeft="10px";
if(this.ascending){
this.layersDiv.appendChild(this.baseLbl);
this.layersDiv.appendChild(this.baseLayersDiv);
this.layersDiv.appendChild(this.dataLbl);
this.layersDiv.appendChild(this.dataLayersDiv);
}else{
this.layersDiv.appendChild(this.dataLbl);
this.layersDiv.appendChild(this.dataLayersDiv);
this.layersDiv.appendChild(this.baseLbl);
this.layersDiv.appendChild(this.baseLayersDiv);
}
this.div.appendChild(this.layersDiv);
OpenLayers.Rico.Corner.round(this.div,{corners:"tl bl",bgColor:"transparent",color:this.activeColor,blend:false});
OpenLayers.Rico.Corner.changeOpacity(this.layersDiv,0.75);
var _413=OpenLayers.Util.getImagesLocation();
var sz=new OpenLayers.Size(18,18);
var img=_413+"layer-switcher-maximize.png";
this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,sz,img,"absolute");
this.maximizeDiv.style.top="5px";
this.maximizeDiv.style.right="0px";
this.maximizeDiv.style.left="";
this.maximizeDiv.style.display="none";
OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));
this.div.appendChild(this.maximizeDiv);
var img=_413+"layer-switcher-minimize.png";
var sz=new OpenLayers.Size(18,18);
this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,sz,img,"absolute");
this.minimizeDiv.style.top="5px";
this.minimizeDiv.style.right="0px";
this.minimizeDiv.style.left="";
this.minimizeDiv.style.display="none";
OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));
this.div.appendChild(this.minimizeDiv);
},ignoreEvent:function(evt){
OpenLayers.Event.stop(evt);
},mouseDown:function(evt){
this.isMouseDown=true;
this.ignoreEvent(evt);
},mouseUp:function(evt){
if(this.isMouseDown){
this.isMouseDown=false;
this.ignoreEvent(evt);
}
},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});
OpenLayers.Control.MouseDefaults=OpenLayers.Class(OpenLayers.Control,{performedDrag:false,wheelObserver:null,initialize:function(){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
if(this.handler){
this.handler.destroy();
}
this.handler=null;
this.map.events.un({"click":this.defaultClick,"dblclick":this.defaultDblClick,"mousedown":this.defaultMouseDown,"mouseup":this.defaultMouseUp,"mousemove":this.defaultMouseMove,"mouseout":this.defaultMouseOut,scope:this});
OpenLayers.Event.stopObserving(window,"DOMMouseScroll",this.wheelObserver);
OpenLayers.Event.stopObserving(window,"mousewheel",this.wheelObserver);
OpenLayers.Event.stopObserving(document,"mousewheel",this.wheelObserver);
this.wheelObserver=null;
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},draw:function(){
this.map.events.on({"click":this.defaultClick,"dblclick":this.defaultDblClick,"mousedown":this.defaultMouseDown,"mouseup":this.defaultMouseUp,"mousemove":this.defaultMouseMove,"mouseout":this.defaultMouseOut,scope:this});
this.registerWheelEvents();
},registerWheelEvents:function(){
this.wheelObserver=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);
OpenLayers.Event.observe(window,"DOMMouseScroll",this.wheelObserver);
OpenLayers.Event.observe(window,"mousewheel",this.wheelObserver);
OpenLayers.Event.observe(document,"mousewheel",this.wheelObserver);
},defaultClick:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
var _41a=!this.performedDrag;
this.performedDrag=false;
return _41a;
},defaultDblClick:function(evt){
var _41c=this.map.getLonLatFromViewPortPx(evt.xy);
this.map.setCenter(_41c,this.map.zoom+1);
OpenLayers.Event.stop(evt);
return false;
},defaultMouseDown:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
this.mouseDragStart=evt.xy.clone();
this.performedDrag=false;
if(evt.shiftKey){
this.map.div.style.cursor="crosshair";
this.zoomBox=OpenLayers.Util.createDiv("zoomBox",this.mouseDragStart,null,null,"absolute","2px solid red");
this.zoomBox.style.backgroundColor="white";
this.zoomBox.style.filter="alpha(opacity=50)";
this.zoomBox.style.opacity="0.50";
this.zoomBox.style.fontSize="1px";
this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.viewPortDiv.appendChild(this.zoomBox);
}
document.onselectstart=function(){
return false;
};
OpenLayers.Event.stop(evt);
},defaultMouseMove:function(evt){
this.mousePosition=evt.xy.clone();
if(this.mouseDragStart!=null){
if(this.zoomBox){
var _41f=Math.abs(this.mouseDragStart.x-evt.xy.x);
var _420=Math.abs(this.mouseDragStart.y-evt.xy.y);
this.zoomBox.style.width=Math.max(1,_41f)+"px";
this.zoomBox.style.height=Math.max(1,_420)+"px";
if(evt.xy.x<this.mouseDragStart.x){
this.zoomBox.style.left=evt.xy.x+"px";
}
if(evt.xy.y<this.mouseDragStart.y){
this.zoomBox.style.top=evt.xy.y+"px";
}
}else{
var _41f=this.mouseDragStart.x-evt.xy.x;
var _420=this.mouseDragStart.y-evt.xy.y;
var size=this.map.getSize();
var _422=new OpenLayers.Pixel(size.w/2+_41f,size.h/2+_420);
var _423=this.map.getLonLatFromViewPortPx(_422);
this.map.setCenter(_423,null,true);
this.mouseDragStart=evt.xy.clone();
this.map.div.style.cursor="move";
}
this.performedDrag=true;
}
},defaultMouseUp:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
if(this.zoomBox){
this.zoomBoxEnd(evt);
}else{
if(this.performedDrag){
this.map.setCenter(this.map.center);
}
}
document.onselectstart=null;
this.mouseDragStart=null;
this.map.div.style.cursor="";
},defaultMouseOut:function(evt){
if(this.mouseDragStart!=null&&OpenLayers.Util.mouseLeft(evt,this.map.div)){
if(this.zoomBox){
this.removeZoomBox();
}
this.mouseDragStart=null;
}
},defaultWheelUp:function(evt){
if(this.map.getZoom()<=this.map.getNumZoomLevels()){
this.map.setCenter(this.map.getLonLatFromPixel(evt.xy),this.map.getZoom()+1);
}
},defaultWheelDown:function(evt){
if(this.map.getZoom()>0){
this.map.setCenter(this.map.getLonLatFromPixel(evt.xy),this.map.getZoom()-1);
}
},zoomBoxEnd:function(evt){
if(this.mouseDragStart!=null){
if(Math.abs(this.mouseDragStart.x-evt.xy.x)>5||Math.abs(this.mouseDragStart.y-evt.xy.y)>5){
var _429=this.map.getLonLatFromViewPortPx(this.mouseDragStart);
var end=this.map.getLonLatFromViewPortPx(evt.xy);
var top=Math.max(_429.lat,end.lat);
var _42c=Math.min(_429.lat,end.lat);
var left=Math.min(_429.lon,end.lon);
var _42e=Math.max(_429.lon,end.lon);
var _42f=new OpenLayers.Bounds(left,_42c,_42e,top);
this.map.zoomToExtent(_42f);
}else{
var end=this.map.getLonLatFromViewPortPx(evt.xy);
this.map.setCenter(new OpenLayers.LonLat((end.lon),(end.lat)),this.map.getZoom()+1);
}
this.removeZoomBox();
}
},removeZoomBox:function(){
this.map.viewPortDiv.removeChild(this.zoomBox);
this.zoomBox=null;
},onWheelEvent:function(e){
var _431=false;
var elem=OpenLayers.Event.element(e);
while(elem!=null){
if(this.map&&elem==this.map.div){
_431=true;
break;
}
elem=elem.parentNode;
}
if(_431){
var _433=0;
if(!e){
e=window.event;
}
if(e.wheelDelta){
_433=e.wheelDelta/120;
if(window.opera&&window.opera.version()<9.2){
_433=-_433;
}
}else{
if(e.detail){
_433=-e.detail/3;
}
}
if(_433){
e.xy=this.mousePosition;
if(_433<0){
this.defaultWheelDown(e);
}else{
this.defaultWheelUp(e);
}
}
OpenLayers.Event.stop(e);
}
},CLASS_NAME:"OpenLayers.Control.MouseDefaults"});
OpenLayers.Control.MousePosition=OpenLayers.Class(OpenLayers.Control,{element:null,prefix:"",separator:", ",suffix:"",numDigits:5,granularity:10,lastXy:null,displayProjection:null,initialize:function(_434){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
if(this.map){
this.map.events.unregister("mousemove",this,this.redraw);
}
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
if(!this.element){
this.div.left="";
this.div.top="";
this.element=this.div;
}
this.redraw();
return this.div;
},redraw:function(evt){
var _436;
if(evt==null){
_436=new OpenLayers.LonLat(0,0);
}else{
if(this.lastXy==null||Math.abs(evt.xy.x-this.lastXy.x)>this.granularity||Math.abs(evt.xy.y-this.lastXy.y)>this.granularity){
this.lastXy=evt.xy;
return;
}
_436=this.map.getLonLatFromPixel(evt.xy);
if(!_436){
return;
}
if(this.displayProjection){
_436.transform(this.map.getProjectionObject(),this.displayProjection);
}
this.lastXy=evt.xy;
}
var _437=this.formatOutput(_436);
if(_437!=this.element.innerHTML){
this.element.innerHTML=_437;
}
},formatOutput:function(_438){
var _439=parseInt(this.numDigits);
var _43a=this.prefix+_438.lon.toFixed(_439)+this.separator+_438.lat.toFixed(_439)+this.suffix;
return _43a;
},setMap:function(){
OpenLayers.Control.prototype.setMap.apply(this,arguments);
this.map.events.register("mousemove",this,this.redraw);
},CLASS_NAME:"OpenLayers.Control.MousePosition"});
OpenLayers.Control.Pan=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,direction:null,type:OpenLayers.Control.TYPE_BUTTON,initialize:function(_43b,_43c){
this.direction=_43b;
this.CLASS_NAME+=this.direction;
OpenLayers.Control.prototype.initialize.apply(this,[_43c]);
},trigger:function(){
switch(this.direction){
case OpenLayers.Control.Pan.NORTH:
this.map.pan(0,-this.slideFactor);
break;
case OpenLayers.Control.Pan.SOUTH:
this.map.pan(0,this.slideFactor);
break;
case OpenLayers.Control.Pan.WEST:
this.map.pan(-this.slideFactor,0);
break;
case OpenLayers.Control.Pan.EAST:
this.map.pan(this.slideFactor,0);
break;
}
},CLASS_NAME:"OpenLayers.Control.Pan"});
OpenLayers.Control.Pan.NORTH="North";
OpenLayers.Control.Pan.SOUTH="South";
OpenLayers.Control.Pan.EAST="East";
OpenLayers.Control.Pan.WEST="West";
OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,slideRatio:null,buttons:null,position:null,initialize:function(_43d){
this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y);
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
OpenLayers.Control.prototype.destroy.apply(this,arguments);
this.removeButtons();
this.buttons=null;
this.position=null;
},draw:function(px){
OpenLayers.Control.prototype.draw.apply(this,arguments);
px=this.position;
this.buttons=[];
var sz=new OpenLayers.Size(18,18);
var _440=new OpenLayers.Pixel(px.x+sz.w/2,px.y);
this._addButton("panup","north-mini.png",_440,sz);
px.y=_440.y+sz.h;
this._addButton("panleft","west-mini.png",px,sz);
this._addButton("panright","east-mini.png",px.add(sz.w,0),sz);
this._addButton("pandown","south-mini.png",_440.add(0,sz.h*2),sz);
this._addButton("zoomin","zoom-plus-mini.png",_440.add(0,sz.h*3+5),sz);
this._addButton("zoomworld","zoom-world-mini.png",_440.add(0,sz.h*4+5),sz);
this._addButton("zoomout","zoom-minus-mini.png",_440.add(0,sz.h*5+5),sz);
return this.div;
},_addButton:function(id,img,xy,sz){
var _445=OpenLayers.Util.getImagesLocation()+img;
var btn=OpenLayers.Util.createAlphaImageDiv(this.id+"_"+id,xy,sz,_445,"absolute");
this.div.appendChild(btn);
OpenLayers.Event.observe(btn,"mousedown",OpenLayers.Function.bindAsEventListener(this.buttonDown,btn));
OpenLayers.Event.observe(btn,"dblclick",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));
OpenLayers.Event.observe(btn,"click",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));
btn.action=id;
btn.map=this.map;
if(!this.slideRatio){
var _447=this.slideFactor;
var _448=function(){
return _447;
};
}else{
var _449=this.slideRatio;
var _448=function(dim){
return this.map.getSize()[dim]*_449;
};
}
btn.getSlideFactor=_448;
this.buttons.push(btn);
return btn;
},_removeButton:function(btn){
OpenLayers.Event.stopObservingElement(btn);
btn.map=null;
this.div.removeChild(btn);
OpenLayers.Util.removeItem(this.buttons,btn);
},removeButtons:function(){
for(var i=this.buttons.length-1;i>=0;--i){
this._removeButton(this.buttons[i]);
}
},doubleClick:function(evt){
OpenLayers.Event.stop(evt);
return false;
},buttonDown:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
switch(this.action){
case "panup":
this.map.pan(0,-this.getSlideFactor("h"));
break;
case "pandown":
this.map.pan(0,this.getSlideFactor("h"));
break;
case "panleft":
this.map.pan(-this.getSlideFactor("w"),0);
break;
case "panright":
this.map.pan(this.getSlideFactor("w"),0);
break;
case "zoomin":
this.map.zoomIn();
break;
case "zoomout":
this.map.zoomOut();
break;
case "zoomworld":
this.map.zoomToMaxExtent();
break;
}
OpenLayers.Event.stop(evt);
},CLASS_NAME:"OpenLayers.Control.PanZoom"});
OpenLayers.Control.PanZoom.X=4;
OpenLayers.Control.PanZoom.Y=4;
OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,defaultControl:null,initialize:function(_44f){
OpenLayers.Control.prototype.initialize.apply(this,[_44f]);
this.controls=[];
},destroy:function(){
OpenLayers.Control.prototype.destroy.apply(this,arguments);
for(var i=this.controls.length-1;i>=0;i--){
if(this.controls[i].events){
this.controls[i].events.un({"activate":this.redraw,"deactivate":this.redraw,scope:this});
}
OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);
this.controls[i].panel_div=null;
}
},activate:function(){
if(OpenLayers.Control.prototype.activate.apply(this,arguments)){
for(var i=0,len=this.controls.length;i<len;i++){
if(this.controls[i]==this.defaultControl){
this.controls[i].activate();
}
}
this.redraw();
return true;
}else{
return false;
}
},deactivate:function(){
if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){
for(var i=0,len=this.controls.length;i<len;i++){
this.controls[i].deactivate();
}
return true;
}else{
return false;
}
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
for(var i=0,len=this.controls.length;i<len;i++){
this.map.addControl(this.controls[i]);
this.controls[i].deactivate();
this.controls[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});
}
this.activate();
return this.div;
},redraw:function(){
this.div.innerHTML="";
if(this.active){
for(var i=0,len=this.controls.length;i<len;i++){
var _459=this.controls[i].panel_div;
if(this.controls[i].active){
_459.className=this.controls[i].displayClass+"ItemActive";
}else{
_459.className=this.controls[i].displayClass+"ItemInactive";
}
this.div.appendChild(_459);
}
}
},activateControl:function(_45a){
if(!this.active){
return false;
}
if(_45a.type==OpenLayers.Control.TYPE_BUTTON){
_45a.trigger();
this.redraw();
return;
}
if(_45a.type==OpenLayers.Control.TYPE_TOGGLE){
if(_45a.active){
_45a.deactivate();
}else{
_45a.activate();
}
this.redraw();
return;
}
for(var i=0,len=this.controls.length;i<len;i++){
if(this.controls[i]!=_45a){
if(this.controls[i].type!=OpenLayers.Control.TYPE_TOGGLE){
this.controls[i].deactivate();
}
}
}
_45a.activate();
},addControls:function(_45d){
if(!(_45d instanceof Array)){
_45d=[_45d];
}
this.controls=this.controls.concat(_45d);
for(var i=0,len=_45d.length;i<len;i++){
var _460=document.createElement("div");
var _461=document.createTextNode(" ");
_45d[i].panel_div=_460;
if(_45d[i].title!=""){
_45d[i].panel_div.title=_45d[i].title;
}
OpenLayers.Event.observe(_45d[i].panel_div,"click",OpenLayers.Function.bind(this.onClick,this,_45d[i]));
OpenLayers.Event.observe(_45d[i].panel_div,"mousedown",OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));
}
if(this.map){
for(var i=0,len=_45d.length;i<len;i++){
this.map.addControl(_45d[i]);
_45d[i].deactivate();
_45d[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});
}
this.redraw();
}
},onClick:function(ctrl,evt){
OpenLayers.Event.stop(evt?evt:window.event);
this.activateControl(ctrl);
},getControlsBy:function(_464,_465){
var test=(typeof _465.test=="function");
var _467=OpenLayers.Array.filter(this.controls,function(item){
return item[_464]==_465||(test&&_465.test(item[_464]));
});
return _467;
},getControlsByName:function(_469){
return this.getControlsBy("name",_469);
},getControlsByClass:function(_46a){
return this.getControlsBy("CLASS_NAME",_46a);
},CLASS_NAME:"OpenLayers.Control.Panel"});
OpenLayers.Control.Scale=OpenLayers.Class(OpenLayers.Control,{element:null,initialize:function(_46b,_46c){
OpenLayers.Control.prototype.initialize.apply(this,[_46c]);
this.element=OpenLayers.Util.getElement(_46b);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
if(!this.element){
this.element=document.createElement("div");
this.div.appendChild(this.element);
}
this.map.events.register("moveend",this,this.updateScale);
this.updateScale();
return this.div;
},updateScale:function(){
var _46d=this.map.getScale();
if(!_46d){
return;
}
if(_46d>=9500&&_46d<=950000){
_46d=Math.round(_46d/1000)+"K";
}else{
if(_46d>=950000){
_46d=Math.round(_46d/1000000)+"M";
}else{
_46d=Math.round(_46d);
}
}
this.element.innerHTML=OpenLayers.i18n("scale",{"scaleDenom":_46d});
},CLASS_NAME:"OpenLayers.Control.Scale"});
OpenLayers.Control.ScaleLine=OpenLayers.Class(OpenLayers.Control,{maxWidth:100,topOutUnits:"km",topInUnits:"m",bottomOutUnits:"mi",bottomInUnits:"ft",eTop:null,eBottom:null,initialize:function(_46e){
OpenLayers.Control.prototype.initialize.apply(this,[_46e]);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
if(!this.eTop){
this.div.style.display="block";
this.div.style.position="absolute";
this.eTop=document.createElement("div");
this.eTop.className=this.displayClass+"Top";
var _46f=this.topInUnits.length;
this.div.appendChild(this.eTop);
if((this.topOutUnits=="")||(this.topInUnits=="")){
this.eTop.style.visibility="hidden";
}else{
this.eTop.style.visibility="visible";
}
this.eBottom=document.createElement("div");
this.eBottom.className=this.displayClass+"Bottom";
this.div.appendChild(this.eBottom);
if((this.bottomOutUnits=="")||(this.bottomInUnits=="")){
this.eBottom.style.visibility="hidden";
}else{
this.eBottom.style.visibility="visible";
}
}
this.map.events.register("moveend",this,this.update);
this.update();
return this.div;
},getBarLen:function(_470){
var _471=parseInt(Math.log(_470)/Math.log(10));
var _472=Math.pow(10,_471);
var _473=parseInt(_470/_472);
var _474;
if(_473>5){
_474=5;
}else{
if(_473>2){
_474=2;
}else{
_474=1;
}
}
return _474*_472;
},update:function(){
var res=this.map.getResolution();
if(!res){
return;
}
var _476=this.map.getUnits();
var _477=OpenLayers.INCHES_PER_UNIT;
var _478=this.maxWidth*res*_477[_476];
var _479;
var _47a;
if(_478>100000){
_479=this.topOutUnits;
_47a=this.bottomOutUnits;
}else{
_479=this.topInUnits;
_47a=this.bottomInUnits;
}
var _47b=_478/_477[_479];
var _47c=_478/_477[_47a];
var _47d=this.getBarLen(_47b);
var _47e=this.getBarLen(_47c);
_47b=_47d/_477[_476]*_477[_479];
_47c=_47e/_477[_476]*_477[_47a];
var _47f=_47b/res;
var _480=_47c/res;
if(this.eBottom.style.visibility=="visible"){
this.eBottom.style.width=Math.round(_480)+"px";
this.eBottom.innerHTML=_47e+" "+_47a;
}
if(this.eTop.style.visibility=="visible"){
this.eTop.style.width=Math.round(_47f)+"px";
this.eTop.innerHTML=_47d+" "+_479;
}
},CLASS_NAME:"OpenLayers.Control.ScaleLine"});
OpenLayers.Control.ZoomIn=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){
this.map.zoomIn();
},CLASS_NAME:"OpenLayers.Control.ZoomIn"});
OpenLayers.Control.ZoomOut=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){
this.map.zoomOut();
},CLASS_NAME:"OpenLayers.Control.ZoomOut"});
OpenLayers.Control.ZoomToMaxExtent=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_BUTTON,trigger:function(){
if(this.map){
this.map.zoomToMaxExtent();
}
},CLASS_NAME:"OpenLayers.Control.ZoomToMaxExtent"});
OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(_481){
return _481.target||_481.srcElement;
},isLeftClick:function(_482){
return (((_482.which)&&(_482.which==1))||((_482.button)&&(_482.button==1)));
},isRightClick:function(_483){
return (((_483.which)&&(_483.which==3))||((_483.button)&&(_483.button==2)));
},stop:function(_484,_485){
if(!_485){
if(_484.preventDefault){
_484.preventDefault();
}else{
_484.returnValue=false;
}
}
if(_484.stopPropagation){
_484.stopPropagation();
}else{
_484.cancelBubble=true;
}
},findElement:function(_486,_487){
var _488=OpenLayers.Event.element(_486);
while(_488.parentNode&&(!_488.tagName||(_488.tagName.toUpperCase()!=_487.toUpperCase()))){
_488=_488.parentNode;
}
return _488;
},observe:function(_489,name,_48b,_48c){
var _48d=OpenLayers.Util.getElement(_489);
_48c=_48c||false;
if(name=="keypress"&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||_48d.attachEvent)){
name="keydown";
}
if(!this.observers){
this.observers={};
}
if(!_48d._eventCacheID){
var _48e="eventCacheID_";
if(_48d.id){
_48e=_48d.id+"_"+_48e;
}
_48d._eventCacheID=OpenLayers.Util.createUniqueID(_48e);
}
var _48f=_48d._eventCacheID;
if(!this.observers[_48f]){
this.observers[_48f]=[];
}
this.observers[_48f].push({"element":_48d,"name":name,"observer":_48b,"useCapture":_48c});
if(_48d.addEventListener){
_48d.addEventListener(name,_48b,_48c);
}else{
if(_48d.attachEvent){
_48d.attachEvent("on"+name,_48b);
}
}
},stopObservingElement:function(_490){
var _491=OpenLayers.Util.getElement(_490);
var _492=_491._eventCacheID;
this._removeElementObservers(OpenLayers.Event.observers[_492]);
},_removeElementObservers:function(_493){
if(_493){
for(var i=_493.length-1;i>=0;i--){
var _495=_493[i];
var args=new Array(_495.element,_495.name,_495.observer,_495.useCapture);
var _497=OpenLayers.Event.stopObserving.apply(this,args);
}
}
},stopObserving:function(_498,name,_49a,_49b){
_49b=_49b||false;
var _49c=OpenLayers.Util.getElement(_498);
var _49d=_49c._eventCacheID;
if(name=="keypress"){
if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||_49c.detachEvent){
name="keydown";
}
}
var _49e=false;
var _49f=OpenLayers.Event.observers[_49d];
if(_49f){
var i=0;
while(!_49e&&i<_49f.length){
var _4a1=_49f[i];
if((_4a1.name==name)&&(_4a1.observer==_49a)&&(_4a1.useCapture==_49b)){
_49f.splice(i,1);
if(_49f.length==0){
delete OpenLayers.Event.observers[_49d];
}
_49e=true;
break;
}
i++;
}
}
if(_49e){
if(_49c.removeEventListener){
_49c.removeEventListener(name,_49a,_49b);
}else{
if(_49c&&_49c.detachEvent){
_49c.detachEvent("on"+name,_49a);
}
}
}
return _49e;
},unloadCache:function(){
if(OpenLayers.Event&&OpenLayers.Event.observers){
for(var _4a2 in OpenLayers.Event.observers){
var _4a3=OpenLayers.Event.observers[_4a2];
OpenLayers.Event._removeElementObservers.apply(this,[_4a3]);
}
OpenLayers.Event.observers=false;
}
},CLASS_NAME:"OpenLayers.Event"};
OpenLayers.Event.observe(window,"unload",OpenLayers.Event.unloadCache,false);
if(window.Event){
OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);
}else{
var Event=OpenLayers.Event;
}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:false,clearMouseListener:null,initialize:function(_4a4,_4a5,_4a6,_4a7,_4a8){
OpenLayers.Util.extend(this,_4a8);
this.object=_4a4;
this.fallThrough=_4a7;
this.listeners={};
this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);
this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this);
this.eventTypes=[];
if(_4a6!=null){
for(var i=0,len=_4a6.length;i<len;i++){
this.addEventType(_4a6[i]);
}
}
if(_4a5!=null){
this.attachToElement(_4a5);
}
},destroy:function(){
if(this.element){
OpenLayers.Event.stopObservingElement(this.element);
if(this.element.hasScrollEvent){
OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener);
}
}
this.element=null;
this.listeners=null;
this.object=null;
this.eventTypes=null;
this.fallThrough=null;
this.eventHandler=null;
},addEventType:function(_4ab){
if(!this.listeners[_4ab]){
this.eventTypes.push(_4ab);
this.listeners[_4ab]=[];
}
},attachToElement:function(_4ac){
if(this.element){
OpenLayers.Event.stopObservingElement(this.element);
}
this.element=_4ac;
for(var i=0,len=this.BROWSER_EVENTS.length;i<len;i++){
var _4af=this.BROWSER_EVENTS[i];
this.addEventType(_4af);
OpenLayers.Event.observe(_4ac,_4af,this.eventHandler);
}
OpenLayers.Event.observe(_4ac,"dragstart",OpenLayers.Event.stop);
},on:function(_4b0){
for(var type in _4b0){
if(type!="scope"){
this.register(type,_4b0.scope,_4b0[type]);
}
}
},register:function(type,obj,func){
if((func!=null)&&(OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)){
if(obj==null){
obj=this.object;
}
var _4b5=this.listeners[type];
_4b5.push({obj:obj,func:func});
}
},registerPriority:function(type,obj,func){
if(func!=null){
if(obj==null){
obj=this.object;
}
var _4b9=this.listeners[type];
if(_4b9!=null){
_4b9.unshift({obj:obj,func:func});
}
}
},un:function(_4ba){
for(var type in _4ba){
if(type!="scope"){
this.unregister(type,_4ba.scope,_4ba[type]);
}
}
},unregister:function(type,obj,func){
if(obj==null){
obj=this.object;
}
var _4bf=this.listeners[type];
if(_4bf!=null){
for(var i=0,len=_4bf.length;i<len;i++){
if(_4bf[i].obj==obj&&_4bf[i].func==func){
_4bf.splice(i,1);
break;
}
}
}
},remove:function(type){
if(this.listeners[type]!=null){
this.listeners[type]=[];
}
},triggerEvent:function(type,evt){
var _4c5=this.listeners[type];
if(!_4c5||_4c5.length==0){
return;
}
if(evt==null){
evt={};
}
evt.object=this.object;
evt.element=this.element;
if(!evt.type){
evt.type=type;
}
var _4c5=_4c5.slice(),_4c6;
for(var i=0,len=_4c5.length;i<len;i++){
var _4c9=_4c5[i];
_4c6=_4c9.func.apply(_4c9.obj,[evt]);
if((_4c6!=undefined)&&(_4c6==false)){
break;
}
}
if(!this.fallThrough){
OpenLayers.Event.stop(evt,true);
}
return _4c6;
},handleBrowserEvent:function(evt){
if(this.includeXY){
evt.xy=this.getMousePosition(evt);
}
this.triggerEvent(evt.type,evt);
},clearMouseCache:function(){
this.element.scrolls=null;
this.element.lefttop=null;
this.element.offsets=null;
},getMousePosition:function(evt){
if(!this.includeXY){
this.clearMouseCache();
}else{
if(!this.element.hasScrollEvent){
OpenLayers.Event.observe(window,"scroll",this.clearMouseListener);
this.element.hasScrollEvent=true;
}
}
if(!this.element.scrolls){
this.element.scrolls=[(document.documentElement.scrollLeft||document.body.scrollLeft),(document.documentElement.scrollTop||document.body.scrollTop)];
}
if(!this.element.lefttop){
this.element.lefttop=[(document.documentElement.clientLeft||0),(document.documentElement.clientTop||0)];
}
if(!this.element.offsets){
this.element.offsets=OpenLayers.Util.pagePosition(this.element);
this.element.offsets[0]+=this.element.scrolls[0];
this.element.offsets[1]+=this.element.scrolls[1];
}
return new OpenLayers.Pixel((evt.clientX+this.element.scrolls[0])-this.element.offsets[0]-this.element.lefttop[0],(evt.clientY+this.element.scrolls[1])-this.element.offsets[1]-this.element.lefttop[1]);
},CLASS_NAME:"OpenLayers.Events"});
OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,data:null,keepData:false,initialize:function(_4cc){
OpenLayers.Util.extend(this,_4cc);
this.options=_4cc;
},destroy:function(){
},read:function(data){
OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));
},write:function(_4ce){
OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));
},CLASS_NAME:"OpenLayers.Format"});
OpenLayers.Lang.en={"unhandledRequest":"Unhandled request return ${statusText}","permalink":"Permalink","overlays":"Overlays","baseLayer":"Base Layer","sameProjection":"The overview map only works when it is in the same projection as the main map","readNotImplemented":"Read not implemented.","writeNotImplemented":"Write not implemented.","noFID":"Can't update a feature for which there is no FID.","errorLoadingGML":"Error in loading GML file ${url}","browserNotSupported":"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}","componentShouldBe":"addFeatures : component should be an ${geomType}","getFeatureError":"getFeatureFromEvent called on layer with no renderer. This usually means you "+"destroyed a layer, but not some handler which is associated with it.","minZoomLevelError":"The minZoomLevel property is only intended for use "+"with the FixedZoomLevels-descendent layers. That this "+"wfs layer checks for minZoomLevel is a relic of the"+"past. We cannot, however, remove it without possibly "+"breaking OL based applications that may depend on it."+" Therefore we are deprecating it -- the minZoomLevel "+"check below will be removed at 3.0. Please instead "+"use min/max resolution setting as described here: "+"http://trac.openlayers.org/wiki/SettingZoomLevels","commitSuccess":"WFS Transaction: SUCCESS ${response}","commitFailed":"WFS Transaction: FAILED ${response}","googleWarning":"The Google Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the Google Maps library "+"script was either not included, or does not contain the "+"correct API key for your site.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>click here</a>","getLayerWarning":"The ${layerType} Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the ${layerLib} library "+"script was not correctly included.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>click here</a>","scale":"Scale = 1 : ${scaleDenom}","layerAlreadyAdded":"You tried to add the layer: ${layerName} to the map, but it has already been added","reprojectDeprecated":"You are using the 'reproject' option "+"on the ${layerName} layer. This option is deprecated: "+"its use was designed to support displaying data over commercial "+"basemaps, but that functionality should now be achieved by using "+"Spherical Mercator support. More information is available from "+"http://trac.openlayers.org/wiki/SphericalMercator.","methodDeprecated":"This method has been deprecated and will be removed in 3.0. "+"Please use ${newMethod} instead.","boundsAddError":"You must pass both x and y values to the add function.","lonlatAddError":"You must pass both lon and lat values to the add function.","pixelAddError":"You must pass both x and y values to the add function.","unsupportedGeometryType":"Unsupported geometry type: ${geomType}","pagePositionFailed":"OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.","end":"","filterEvaluateNotImplemented":"evaluate is not implemented for this filter type."};
OpenLayers.Popup.AnchoredBubble=OpenLayers.Class(OpenLayers.Popup.Anchored,{rounded:false,initialize:function(id,_4d0,_4d1,_4d2,_4d3,_4d4,_4d5){
this.padding=new OpenLayers.Bounds(0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE,0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);
OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);
},draw:function(px){
OpenLayers.Popup.Anchored.prototype.draw.apply(this,arguments);
this.setContentHTML();
this.setBackgroundColor();
this.setOpacity();
return this.div;
},updateRelativePosition:function(){
this.setRicoCorners();
},setSize:function(_4d7){
OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);
this.setRicoCorners();
},setBackgroundColor:function(_4d8){
if(_4d8!=undefined){
this.backgroundColor=_4d8;
}
if(this.div!=null){
if(this.contentDiv!=null){
this.div.style.background="transparent";
OpenLayers.Rico.Corner.changeColor(this.groupDiv,this.backgroundColor);
}
}
},setOpacity:function(_4d9){
OpenLayers.Popup.Anchored.prototype.setOpacity.call(this,_4d9);
if(this.div!=null){
if(this.groupDiv!=null){
OpenLayers.Rico.Corner.changeOpacity(this.groupDiv,this.opacity);
}
}
},setBorder:function(_4da){
this.border=0;
},setRicoCorners:function(){
var _4db=this.getCornersToRound(this.relativePosition);
var _4dc={corners:_4db,color:this.backgroundColor,bgColor:"transparent",blend:false};
if(!this.rounded){
OpenLayers.Rico.Corner.round(this.div,_4dc);
this.rounded=true;
}else{
OpenLayers.Rico.Corner.reRound(this.groupDiv,_4dc);
this.setBackgroundColor();
this.setOpacity();
}
},getCornersToRound:function(){
var _4dd=["tl","tr","bl","br"];
var _4de=OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);
OpenLayers.Util.removeItem(_4dd,_4de);
return _4dd.join(" ");
},CLASS_NAME:"OpenLayers.Popup.AnchoredBubble"});
OpenLayers.Popup.AnchoredBubble.CORNER_SIZE=5;
OpenLayers.Popup.Framed=OpenLayers.Class(OpenLayers.Popup.Anchored,{imageSrc:null,imageSize:null,isAlphaImage:false,positionBlocks:null,blocks:null,fixedRelativePosition:false,initialize:function(id,_4e0,_4e1,_4e2,_4e3,_4e4,_4e5){
OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);
if(this.fixedRelativePosition){
this.updateRelativePosition();
this.calculateRelativePosition=function(px){
return this.relativePosition;
};
}
this.contentDiv.style.position="absolute";
this.contentDiv.style.zIndex=1;
if(_4e4){
this.closeDiv.style.zIndex=1;
}
this.groupDiv.style.position="absolute";
this.groupDiv.style.top="0px";
this.groupDiv.style.left="0px";
this.groupDiv.style.height="100%";
this.groupDiv.style.width="100%";
},destroy:function(){
this.imageSrc=null;
this.imageSize=null;
this.isAlphaImage=null;
this.fixedRelativePosition=false;
this.positionBlocks=null;
for(var i=0;i<this.blocks.length;i++){
var _4e8=this.blocks[i];
if(_4e8.image){
_4e8.div.removeChild(_4e8.image);
}
_4e8.image=null;
if(_4e8.div){
this.groupDiv.removeChild(_4e8.div);
}
_4e8.div=null;
}
this.blocks=null;
OpenLayers.Popup.Anchored.prototype.destroy.apply(this,arguments);
},setBackgroundColor:function(_4e9){
},setBorder:function(){
},setOpacity:function(_4ea){
},setSize:function(_4eb){
OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);
this.updateBlocks();
},updateRelativePosition:function(){
this.padding=this.positionBlocks[this.relativePosition].padding;
if(this.closeDiv){
var _4ec=this.getContentDivPadding();
this.closeDiv.style.right=_4ec.right+this.padding.right+"px";
this.closeDiv.style.top=_4ec.top+this.padding.top+"px";
}
this.updateBlocks();
},calculateNewPx:function(px){
var _4ee=OpenLayers.Popup.Anchored.prototype.calculateNewPx.apply(this,arguments);
_4ee=_4ee.offset(this.positionBlocks[this.relativePosition].offset);
return _4ee;
},createBlocks:function(){
this.blocks=[];
var _4ef=null;
for(var key in this.positionBlocks){
_4ef=key;
break;
}
var _4f1=this.positionBlocks[_4ef];
for(var i=0;i<_4f1.blocks.length;i++){
var _4f3={};
this.blocks.push(_4f3);
var _4f4=this.id+"_FrameDecorationDiv_"+i;
_4f3.div=OpenLayers.Util.createDiv(_4f4,null,null,null,"absolute",null,"hidden",null);
var _4f5=this.id+"_FrameDecorationImg_"+i;
var _4f6=(this.isAlphaImage)?OpenLayers.Util.createAlphaImageDiv:OpenLayers.Util.createImage;
_4f3.image=_4f6(_4f5,null,this.imageSize,this.imageSrc,"absolute",null,null,null);
_4f3.div.appendChild(_4f3.image);
this.groupDiv.appendChild(_4f3.div);
}
},updateBlocks:function(){
if(!this.blocks){
this.createBlocks();
}
if(this.size&&this.relativePosition){
var _4f7=this.positionBlocks[this.relativePosition];
for(var i=0;i<_4f7.blocks.length;i++){
var _4f9=_4f7.blocks[i];
var _4fa=this.blocks[i];
var l=_4f9.anchor.left;
var b=_4f9.anchor.bottom;
var r=_4f9.anchor.right;
var t=_4f9.anchor.top;
var w=(isNaN(_4f9.size.w))?this.size.w-(r+l):_4f9.size.w;
var h=(isNaN(_4f9.size.h))?this.size.h-(b+t):_4f9.size.h;
_4fa.div.style.width=(w<0?0:w)+"px";
_4fa.div.style.height=(h<0?0:h)+"px";
_4fa.div.style.left=(l!=null)?l+"px":"";
_4fa.div.style.bottom=(b!=null)?b+"px":"";
_4fa.div.style.right=(r!=null)?r+"px":"";
_4fa.div.style.top=(t!=null)?t+"px":"";
_4fa.image.style.left=_4f9.position.x+"px";
_4fa.image.style.top=_4f9.position.y+"px";
}
this.contentDiv.style.left=this.padding.left+"px";
this.contentDiv.style.top=this.padding.top+"px";
}
},CLASS_NAME:"OpenLayers.Popup.Framed"});
OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,initialize:function(_501,_502){
OpenLayers.Util.extend(this,_502);
this.projCode=_501;
if(window.Proj4js){
this.proj=new Proj4js.Proj(_501);
}
},getCode:function(){
return this.proj?this.proj.srsCode:this.projCode;
},getUnits:function(){
return this.proj?this.proj.units:null;
},toString:function(){
return this.getCode();
},equals:function(_503){
if(_503&&_503.getCode){
return this.getCode()==_503.getCode();
}else{
return false;
}
},destroy:function(){
delete this.proj;
delete this.projCode;
},CLASS_NAME:"OpenLayers.Projection"});
OpenLayers.Projection.transforms={};
OpenLayers.Projection.addTransform=function(from,to,_506){
if(!OpenLayers.Projection.transforms[from]){
OpenLayers.Projection.transforms[from]={};
}
OpenLayers.Projection.transforms[from][to]=_506;
};
OpenLayers.Projection.transform=function(_507,_508,dest){
if(_508.proj&&dest.proj){
_507=Proj4js.transform(_508.proj,dest.proj,_507);
}else{
if(_508&&dest&&OpenLayers.Projection.transforms[_508.getCode()]&&OpenLayers.Projection.transforms[_508.getCode()][dest.getCode()]){
OpenLayers.Projection.transforms[_508.getCode()][dest.getCode()](_507);
}
}
return _507;
};
OpenLayers.Protocol.WFS.v1=OpenLayers.Class(OpenLayers.Protocol,{version:null,srsName:"EPSG:4326",featureType:null,featureNS:null,geometryName:"the_geom",schema:null,featurePrefix:"feature",formatOptions:null,initialize:function(_50a){
OpenLayers.Protocol.prototype.initialize.apply(this,[_50a]);
if(!_50a.format){
this.format=OpenLayers.Format.WFST(OpenLayers.Util.extend({version:this.version,featureType:this.featureType,featureNS:this.featureNS,featurePrefix:this.featurePrefix,geometryName:this.geometryName,srsName:this.srsName,schema:this.schema},this.formatOptions));
}
if(!this.featureNS){
var _50b=this.format.readNode;
this.format.readNode=function(node,obj){
if(!this.featureNS&&node.prefix==this.featurePrefix){
this.featureNS=node.namespaceURI;
this.setNamespace("feature",this.featureNS);
}
return _50b.apply(this,arguments);
};
}
},destroy:function(){
if(this.options&&!this.options.format){
this.format.destroy();
}
this.format=null;
OpenLayers.Protocol.prototype.destroy.apply(this);
},createCallback:function(_50e,_50f,_510){
return OpenLayers.Function.bind(function(){
_50e.apply(this,[_50f,_510]);
},this);
},read:function(_511){
_511=OpenLayers.Util.extend({},_511);
OpenLayers.Util.applyDefaults(_511,this.options||{});
var _512=new OpenLayers.Protocol.Response({requestType:"read"});
var data=OpenLayers.Format.XML.prototype.write.apply(this.format,[this.format.writeNode("wfs:GetFeature",_511)]);
_512.priv=OpenLayers.Request.POST({url:_511.url,callback:this.createCallback(this.handleRead,_512,_511),params:_511.params,headers:_511.headers,data:data});
return _512;
},handleRead:function(_514,_515){
if(_515.callback){
var _516=_514.priv;
if(_516.status>=200&&_516.status<300){
_514.features=this.parseFeatures(_516);
_514.code=OpenLayers.Protocol.Response.SUCCESS;
}else{
_514.code=OpenLayers.Protocol.Response.FAILURE;
}
_515.callback.call(_515.scope,_514);
}
},parseFeatures:function(_517){
var doc=_517.responseXML;
if(!doc||!doc.documentElement){
doc=_517.responseText;
}
if(!doc||doc.length<=0){
return null;
}
return this.format.read(doc);
},commit:function(_519,_51a){
_51a=OpenLayers.Util.extend({},_51a);
OpenLayers.Util.applyDefaults(_51a,this.options);
var _51b=new OpenLayers.Protocol.Response({requestType:"commit",reqFeatures:_519});
_51b.priv=OpenLayers.Request.POST({url:_51a.url,data:this.format.write(_519,_51a),callback:this.createCallback(this.handleCommit,_51b,_51a)});
return _51b;
},handleCommit:function(_51c,_51d){
if(_51d.callback){
var _51e=_51c.priv;
var data=_51e.responseXML;
if(!data||!data.documentElement){
data=_51e.responseText;
}
var obj=this.format.read(data)||{};
_51c.insertIds=obj.insertIds||[];
_51c.code=(obj.success)?OpenLayers.Protocol.Response.SUCCESS:OpenLayers.Protocol.Response.FAILURE;
_51d.callback.call(_51d.scope,_51c);
}
},filterDelete:function(_521,_522){
_522=OpenLayers.Util.extend({},_522);
OpenLayers.Util.applyDefaults(_522,this.options);
var _523=new OpenLayers.Protocol.Response({requestType:"commit"});
var root=this.format.createElementNSPlus("wfs:Transaction",{attributes:{service:"WFS",version:this.version}});
var _525=this.format.createElementNSPlus("wfs:Delete",{attributes:{typeName:(_522.featureNS?this.featurePrefix+":":"")+_522.featureType}});
if(_522.featureNS){
_525.setAttribute("xmlns:"+this.featurePrefix,_522.featureNS);
}
var _526=this.format.writeNode("ogc:Filter",_521);
_525.appendChild(_526);
root.appendChild(_525);
var data=OpenLayers.Format.XML.prototype.write.apply(this.format,[root]);
return OpenLayers.Request.POST({url:this.url,callback:_522.callback||function(){
},data:data});
},abort:function(_528){
if(_528){
_528.priv.abort();
}
},CLASS_NAME:"OpenLayers.Protocol.WFS.v1"});
OpenLayers.Renderer.SVG=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"http://www.w3.org/2000/svg",xlinkns:"http://www.w3.org/1999/xlink",MAX_PIXEL:15000,translationParameters:null,symbolSize:{},isGecko:null,initialize:function(_529){
if(!this.supported()){
return;
}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);
this.translationParameters={x:0,y:0};
this.isGecko=(navigator.userAgent.toLowerCase().indexOf("gecko/")!=-1);
},destroy:function(){
OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);
},supported:function(){
var _52a="http://www.w3.org/TR/SVG11/feature#";
return (document.implementation&&(document.implementation.hasFeature("org.w3c.svg","1.0")||document.implementation.hasFeature(_52a+"SVG","1.1")||document.implementation.hasFeature(_52a+"BasicStructure","1.1")));
},inValidRange:function(x,y,_52d){
var left=x+(_52d?0:this.translationParameters.x);
var top=y+(_52d?0:this.translationParameters.y);
return (left>=-this.MAX_PIXEL&&left<=this.MAX_PIXEL&&top>=-this.MAX_PIXEL&&top<=this.MAX_PIXEL);
},setExtent:function(_530,_531){
OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);
var _532=this.getResolution();
var left=-_530.left/_532;
var top=_530.top/_532;
if(_531){
this.left=left;
this.top=top;
var _535="0 0 "+this.size.w+" "+this.size.h;
this.rendererRoot.setAttributeNS(null,"viewBox",_535);
this.translate(0,0);
return true;
}else{
var _536=this.translate(left-this.left,top-this.top);
if(!_536){
this.setExtent(_530,true);
}
return _536;
}
},translate:function(x,y){
if(!this.inValidRange(x,y,true)){
return false;
}else{
var _539="";
if(x||y){
_539="translate("+x+","+y+")";
}
this.root.setAttributeNS(null,"transform",_539);
this.translationParameters={x:x,y:y};
return true;
}
},setSize:function(size){
OpenLayers.Renderer.prototype.setSize.apply(this,arguments);
this.rendererRoot.setAttributeNS(null,"width",this.size.w);
this.rendererRoot.setAttributeNS(null,"height",this.size.h);
},getNodeType:function(_53b,_53c){
var _53d=null;
switch(_53b.CLASS_NAME){
case "OpenLayers.Geometry.Point":
if(_53c.externalGraphic){
_53d="image";
}else{
if(this.isComplexSymbol(_53c.graphicName)){
_53d="use";
}else{
_53d="circle";
}
}
break;
case "OpenLayers.Geometry.Rectangle":
_53d="rect";
break;
case "OpenLayers.Geometry.LineString":
_53d="polyline";
break;
case "OpenLayers.Geometry.LinearRing":
_53d="polygon";
break;
case "OpenLayers.Geometry.Polygon":
case "OpenLayers.Geometry.Curve":
case "OpenLayers.Geometry.Surface":
_53d="path";
break;
default:
break;
}
return _53d;
},setStyle:function(node,_53f,_540){
_53f=_53f||node._style;
_540=_540||node._options;
var r=parseFloat(node.getAttributeNS(null,"r"));
var _542=1;
var pos;
if(node._geometryClass=="OpenLayers.Geometry.Point"&&r){
node.style.visibility="";
if(_53f.graphic===false){
node.style.visibility="hidden";
}else{
if(_53f.externalGraphic){
pos=this.getPosition(node);
if(_53f.graphicTitle){
node.setAttributeNS(null,"title",_53f.graphicTitle);
}
if(_53f.graphicWidth&&_53f.graphicHeight){
node.setAttributeNS(null,"preserveAspectRatio","none");
}
var _544=_53f.graphicWidth||_53f.graphicHeight;
var _545=_53f.graphicHeight||_53f.graphicWidth;
_544=_544?_544:_53f.pointRadius*2;
_545=_545?_545:_53f.pointRadius*2;
var _546=(_53f.graphicXOffset!=undefined)?_53f.graphicXOffset:-(0.5*_544);
var _547=(_53f.graphicYOffset!=undefined)?_53f.graphicYOffset:-(0.5*_545);
var _548=_53f.graphicOpacity||_53f.fillOpacity;
node.setAttributeNS(null,"x",(pos.x+_546).toFixed());
node.setAttributeNS(null,"y",(pos.y+_547).toFixed());
node.setAttributeNS(null,"width",_544);
node.setAttributeNS(null,"height",_545);
node.setAttributeNS(this.xlinkns,"href",_53f.externalGraphic);
node.setAttributeNS(null,"style","opacity: "+_548);
}else{
if(this.isComplexSymbol(_53f.graphicName)){
var _549=_53f.pointRadius*3;
var size=_549*2;
var id=this.importSymbol(_53f.graphicName);
var href="#"+id;
pos=this.getPosition(node);
_542=this.symbolSize[id]/size;
var _54d=node.parentNode;
var _54e=node.nextSibling;
if(_54d){
_54d.removeChild(node);
}
node.setAttributeNS(this.xlinkns,"href",href);
node.setAttributeNS(null,"width",size);
node.setAttributeNS(null,"height",size);
node.setAttributeNS(null,"x",pos.x-_549);
node.setAttributeNS(null,"y",pos.y-_549);
if(_54e){
_54d.insertBefore(node,_54e);
}else{
if(_54d){
_54d.appendChild(node);
}
}
}else{
node.setAttributeNS(null,"r",_53f.pointRadius);
}
}
}
if(typeof _53f.rotation!="undefined"&&pos){
var _54f=OpenLayers.String.format("rotate(${0} ${1} ${2})",[_53f.rotation,pos.x,pos.y]);
node.setAttributeNS(null,"transform",_54f);
}
}
if(_540.isFilled){
node.setAttributeNS(null,"fill",_53f.fillColor);
node.setAttributeNS(null,"fill-opacity",_53f.fillOpacity);
}else{
node.setAttributeNS(null,"fill","none");
}
if(_540.isStroked){
node.setAttributeNS(null,"stroke",_53f.strokeColor);
node.setAttributeNS(null,"stroke-opacity",_53f.strokeOpacity);
node.setAttributeNS(null,"stroke-width",_53f.strokeWidth*_542);
node.setAttributeNS(null,"stroke-linecap",_53f.strokeLinecap);
node.setAttributeNS(null,"stroke-linejoin","round");
node.setAttributeNS(null,"stroke-dasharray",this.dashStyle(_53f,_542));
}else{
node.setAttributeNS(null,"stroke","none");
}
if(_53f.pointerEvents){
node.setAttributeNS(null,"pointer-events",_53f.pointerEvents);
}
if(_53f.cursor!=null){
node.setAttributeNS(null,"cursor",_53f.cursor);
}
return node;
},dashStyle:function(_550,_551){
var w=_550.strokeWidth*_551;
switch(_550.strokeDashstyle){
case "solid":
return "none";
case "dot":
return [1,4*w].join();
case "dash":
return [4*w,4*w].join();
case "dashdot":
return [4*w,4*w,1,4*w].join();
case "longdash":
return [8*w,4*w].join();
case "longdashdot":
return [8*w,4*w,1,4*w].join();
default:
return _550.strokeDashstyle.replace(/ /g,",");
}
},createNode:function(type,id){
var node=document.createElementNS(this.xmlns,type);
if(id){
node.setAttributeNS(null,"id",id);
}
return node;
},nodeTypeCompare:function(node,type){
return (type==node.nodeName);
},createRenderRoot:function(){
return this.nodeFactory(this.container.id+"_svgRoot","svg");
},createRoot:function(_558){
return this.nodeFactory(this.container.id+_558,"g");
},createDefs:function(){
var defs=this.nodeFactory(this.container.id+"_defs","defs");
this.rendererRoot.appendChild(defs);
return defs;
},drawPoint:function(node,_55b){
return this.drawCircle(node,_55b,1);
},drawCircle:function(node,_55d,_55e){
var _55f=this.getResolution();
var x=(_55d.x/_55f+this.left);
var y=(this.top-_55d.y/_55f);
if(this.inValidRange(x,y)){
node.setAttributeNS(null,"cx",x);
node.setAttributeNS(null,"cy",y);
node.setAttributeNS(null,"r",_55e);
return node;
}else{
return false;
}
},drawLineString:function(node,_563){
var _564=this.getComponentsString(_563.components);
if(_564.path){
node.setAttributeNS(null,"points",_564.path);
return (_564.complete?node:null);
}else{
return false;
}
},drawLinearRing:function(node,_566){
var _567=this.getComponentsString(_566.components);
if(_567.path){
node.setAttributeNS(null,"points",_567.path);
return (_567.complete?node:null);
}else{
return false;
}
},drawPolygon:function(node,_569){
var d="";
var draw=true;
var _56c=true;
var _56d,path;
for(var j=0,len=_569.components.length;j<len;j++){
d+=" M";
_56d=this.getComponentsString(_569.components[j].components," ");
path=_56d.path;
if(path){
d+=" "+path;
_56c=_56d.complete&&_56c;
}else{
draw=false;
}
}
d+=" z";
if(draw){
node.setAttributeNS(null,"d",d);
node.setAttributeNS(null,"fill-rule","evenodd");
return _56c?node:null;
}else{
return false;
}
},drawRectangle:function(node,_572){
var _573=this.getResolution();
var x=(_572.x/_573+this.left);
var y=(this.top-_572.y/_573);
if(this.inValidRange(x,y)){
node.setAttributeNS(null,"x",x);
node.setAttributeNS(null,"y",y);
node.setAttributeNS(null,"width",_572.width/_573);
node.setAttributeNS(null,"height",_572.height/_573);
return node;
}else{
return false;
}
},drawSurface:function(node,_577){
var d=null;
var draw=true;
for(var i=0,len=_577.components.length;i<len;i++){
if((i%3)==0&&(i/3)==0){
var _57c=this.getShortString(_577.components[i]);
if(!_57c){
draw=false;
}
d="M "+_57c;
}else{
if((i%3)==1){
var _57c=this.getShortString(_577.components[i]);
if(!_57c){
draw=false;
}
d+=" C "+_57c;
}else{
var _57c=this.getShortString(_577.components[i]);
if(!_57c){
draw=false;
}
d+=" "+_57c;
}
}
}
d+=" Z";
if(draw){
node.setAttributeNS(null,"d",d);
return node;
}else{
return false;
}
},drawText:function(_57d,_57e,_57f){
var _580=this.getResolution();
var x=(_57f.x/_580+this.left);
var y=(_57f.y/_580-this.top);
var _583=this.nodeFactory(_57d+this.LABEL_ID_SUFFIX,"text");
var _584=this.nodeFactory(_57d+this.LABEL_ID_SUFFIX+"_tspan","tspan");
_583.setAttributeNS(null,"x",x);
_583.setAttributeNS(null,"y",-y);
_583.setAttributeNS(null,"pointer-events","none");
if(_57e.fontColor){
_583.setAttributeNS(null,"fill",_57e.fontColor);
}
if(_57e.fontFamily){
_583.setAttributeNS(null,"font-family",_57e.fontFamily);
}
if(_57e.fontSize){
_583.setAttributeNS(null,"font-size",_57e.fontSize);
}
if(_57e.fontWeight){
_583.setAttributeNS(null,"font-weight",_57e.fontWeight);
}
var _585=_57e.labelAlign||"cm";
_583.setAttributeNS(null,"text-anchor",OpenLayers.Renderer.SVG.LABEL_ALIGN[_585[0]]||"middle");
if(this.isGecko){
_583.setAttributeNS(null,"dominant-baseline",OpenLayers.Renderer.SVG.LABEL_ALIGN[_585[1]]||"central");
}else{
_584.setAttributeNS(null,"baseline-shift",OpenLayers.Renderer.SVG.LABEL_VSHIFT[_585[1]]||"-35%");
}
_584.textContent=_57e.label;
if(!_583.parentNode){
_583.appendChild(_584);
this.textRoot.appendChild(_583);
}
},getComponentsString:function(_586,_587){
var _588=[];
var _589=true;
var len=_586.length;
var _58b=[];
var str,_58d,j;
for(var i=0;i<len;i++){
_58d=_586[i];
_588.push(_58d);
str=this.getShortString(_58d);
if(str){
_58b.push(str);
}else{
if(i>0){
if(this.getShortString(_586[i-1])){
_58b.push(this.clipLine(_586[i],_586[i-1]));
}
}
if(i<len-1){
if(this.getShortString(_586[i+1])){
_58b.push(this.clipLine(_586[i],_586[i+1]));
}
}
_589=false;
}
}
return {path:_58b.join(_587||","),complete:_589};
},clipLine:function(_590,_591){
if(_591.equals(_590)){
return "";
}
var _592=this.getResolution();
var maxX=this.MAX_PIXEL-this.translationParameters.x;
var maxY=this.MAX_PIXEL-this.translationParameters.y;
var x1=_591.x/_592+this.left;
var y1=this.top-_591.y/_592;
var x2=_590.x/_592+this.left;
var y2=this.top-_590.y/_592;
var k;
if(x2<-maxX||x2>maxX){
k=(y2-y1)/(x2-x1);
x2=x2<0?-maxX:maxX;
y2=y1+(x2-x1)*k;
}
if(y2<-maxY||y2>maxY){
k=(x2-x1)/(y2-y1);
y2=y2<0?-maxY:maxY;
x2=x1+(y2-y1)*k;
}
return x2+","+y2;
},getShortString:function(_59a){
var _59b=this.getResolution();
var x=(_59a.x/_59b+this.left);
var y=(this.top-_59a.y/_59b);
if(this.inValidRange(x,y)){
return x+","+y;
}else{
return false;
}
},getPosition:function(node){
return ({x:parseFloat(node.getAttributeNS(null,"cx")),y:parseFloat(node.getAttributeNS(null,"cy"))});
},importSymbol:function(_59f){
if(!this.defs){
this.defs=this.createDefs();
}
var id=this.container.id+"-"+_59f;
if(document.getElementById(id)!=null){
return id;
}
var _5a1=OpenLayers.Renderer.symbol[_59f];
if(!_5a1){
throw new Error(_59f+" is not a valid symbol name");
return;
}
var _5a2=this.nodeFactory(id,"symbol");
var node=this.nodeFactory(null,"polygon");
_5a2.appendChild(node);
var _5a4=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);
var _5a5="";
var x,y;
for(var i=0;i<_5a1.length;i=i+2){
x=_5a1[i];
y=_5a1[i+1];
_5a4.left=Math.min(_5a4.left,x);
_5a4.bottom=Math.min(_5a4.bottom,y);
_5a4.right=Math.max(_5a4.right,x);
_5a4.top=Math.max(_5a4.top,y);
_5a5+=" "+x+","+y;
}
node.setAttributeNS(null,"points",_5a5);
var _5a9=_5a4.getWidth();
var _5aa=_5a4.getHeight();
var _5ab=[_5a4.left-_5a9,_5a4.bottom-_5aa,_5a9*3,_5aa*3];
_5a2.setAttributeNS(null,"viewBox",_5ab.join(" "));
this.symbolSize[id]=Math.max(_5a9,_5aa)*3;
this.defs.appendChild(_5a2);
return _5a2.id;
},CLASS_NAME:"OpenLayers.Renderer.SVG"});
OpenLayers.Renderer.SVG.LABEL_ALIGN={"l":"start","r":"end","b":"bottom","t":"hanging"};
OpenLayers.Renderer.SVG.LABEL_VSHIFT={"t":"-70%","b":"0"};
OpenLayers.Renderer.VML=OpenLayers.Class(OpenLayers.Renderer.Elements,{xmlns:"urn:schemas-microsoft-com:vml",symbolCache:{},offset:null,initialize:function(_5ac){
if(!this.supported()){
return;
}
if(!document.namespaces.olv){
document.namespaces.add("olv",this.xmlns);
var _5ad=document.createStyleSheet();
var _5ae=["shape","rect","oval","fill","stroke","imagedata","group","textbox"];
for(var i=0,len=_5ae.length;i<len;i++){
_5ad.addRule("olv\\:"+_5ae[i],"behavior: url(#default#VML); "+"position: absolute; display: inline-block;");
}
}
OpenLayers.Renderer.Elements.prototype.initialize.apply(this,arguments);
this.offset={x:0,y:0};
},destroy:function(){
OpenLayers.Renderer.Elements.prototype.destroy.apply(this,arguments);
},supported:function(){
return !!(document.namespaces);
},setExtent:function(_5b1,_5b2){
OpenLayers.Renderer.Elements.prototype.setExtent.apply(this,arguments);
var _5b3=this.getResolution();
var left=_5b1.left/_5b3;
var top=_5b1.top/_5b3-this.size.h;
if(_5b2){
this.offset={x:left,y:top};
left=0;
top=0;
}else{
left=left-this.offset.x;
top=top-this.offset.y;
}
var org=left+" "+top;
this.root.coordorigin=org;
var _5b7=[this.root,this.vectorRoot,this.textRoot];
var root;
for(var i=0,len=_5b7.length;i<len;++i){
root=_5b7[i];
var size=this.size.w+" "+this.size.h;
root.coordsize=size;
}
this.root.style.flip="y";
return true;
},setSize:function(size){
OpenLayers.Renderer.prototype.setSize.apply(this,arguments);
var _5bd=[this.rendererRoot,this.root,this.vectorRoot,this.textRoot];
var w=this.size.w+"px";
var h=this.size.h+"px";
var root;
for(var i=0,len=_5bd.length;i<len;++i){
root=_5bd[i];
root.style.width=w;
root.style.height=h;
}
},getNodeType:function(_5c3,_5c4){
var _5c5=null;
switch(_5c3.CLASS_NAME){
case "OpenLayers.Geometry.Point":
if(_5c4.externalGraphic){
_5c5="olv:rect";
}else{
if(this.isComplexSymbol(_5c4.graphicName)){
_5c5="olv:shape";
}else{
_5c5="olv:oval";
}
}
break;
case "OpenLayers.Geometry.Rectangle":
_5c5="olv:rect";
break;
case "OpenLayers.Geometry.LineString":
case "OpenLayers.Geometry.LinearRing":
case "OpenLayers.Geometry.Polygon":
case "OpenLayers.Geometry.Curve":
case "OpenLayers.Geometry.Surface":
_5c5="olv:shape";
break;
default:
break;
}
return _5c5;
},setStyle:function(node,_5c7,_5c8,_5c9){
_5c7=_5c7||node._style;
_5c8=_5c8||node._options;
var _5ca=1;
if(node._geometryClass=="OpenLayers.Geometry.Point"){
if(_5c7.externalGraphic){
if(_5c7.graphicTitle){
node.title=_5c7.graphicTitle;
}
var _5cb=_5c7.graphicWidth||_5c7.graphicHeight;
var _5cc=_5c7.graphicHeight||_5c7.graphicWidth;
_5cb=_5cb?_5cb:_5c7.pointRadius*2;
_5cc=_5cc?_5cc:_5c7.pointRadius*2;
var _5cd=this.getResolution();
var _5ce=(_5c7.graphicXOffset!=undefined)?_5c7.graphicXOffset:-(0.5*_5cb);
var _5cf=(_5c7.graphicYOffset!=undefined)?_5c7.graphicYOffset:-(0.5*_5cc);
node.style.left=((_5c9.x/_5cd-this.offset.x)+_5ce).toFixed();
node.style.top=((_5c9.y/_5cd-this.offset.y)-(_5cf+_5cc)).toFixed();
node.style.width=_5cb+"px";
node.style.height=_5cc+"px";
node.style.flip="y";
_5c7.fillColor="none";
_5c8.isStroked=false;
}else{
if(this.isComplexSymbol(_5c7.graphicName)){
var _5d0=this.importSymbol(_5c7.graphicName);
node.path=_5d0.path;
node.coordorigin=_5d0.left+","+_5d0.bottom;
var size=_5d0.size;
node.coordsize=size+","+size;
this.drawCircle(node,_5c9,_5c7.pointRadius);
node.style.flip="y";
}else{
this.drawCircle(node,_5c9,_5c7.pointRadius);
}
}
}
if(_5c8.isFilled){
node.fillcolor=_5c7.fillColor;
}else{
node.filled="false";
}
var _5d2=node.getElementsByTagName("fill");
var fill=(_5d2.length==0)?null:_5d2[0];
if(!_5c8.isFilled){
if(fill){
node.removeChild(fill);
}
}else{
if(!fill){
fill=this.createNode("olv:fill",node.id+"_fill");
}
fill.opacity=_5c7.fillOpacity;
if(node._geometryClass=="OpenLayers.Geometry.Point"&&_5c7.externalGraphic){
if(_5c7.graphicOpacity){
fill.opacity=_5c7.graphicOpacity;
}
fill.src=_5c7.externalGraphic;
fill.type="frame";
if(!(_5c7.graphicWidth&&_5c7.graphicHeight)){
fill.aspect="atmost";
}
}
if(fill.parentNode!=node){
node.appendChild(fill);
}
}
if(typeof _5c7.rotation!="undefined"){
if(_5c7.externalGraphic){
this.graphicRotate(node,_5ce,_5cf);
fill.opacity=0;
}else{
node.style.rotation=_5c7.rotation;
}
}
if(_5c8.isStroked){
node.strokecolor=_5c7.strokeColor;
node.strokeweight=_5c7.strokeWidth+"px";
}else{
node.stroked=false;
}
var _5d4=node.getElementsByTagName("stroke");
var _5d5=(_5d4.length==0)?null:_5d4[0];
if(!_5c8.isStroked){
if(_5d5){
node.removeChild(_5d5);
}
}else{
if(!_5d5){
_5d5=this.createNode("olv:stroke",node.id+"_stroke");
node.appendChild(_5d5);
}
_5d5.opacity=_5c7.strokeOpacity;
_5d5.endcap=!_5c7.strokeLinecap||_5c7.strokeLinecap=="butt"?"flat":_5c7.strokeLinecap;
_5d5.dashstyle=this.dashStyle(_5c7);
}
if(_5c7.cursor!="inherit"&&_5c7.cursor!=null){
node.style.cursor=_5c7.cursor;
}
return node;
},graphicRotate:function(node,_5d7,_5d8){
var _5d9=_5d9||node._style;
var _5da=node._options;
var _5db,size;
if(!(_5d9.graphicWidth&&_5d9.graphicHeight)){
var img=new Image();
img.onreadystatechange=OpenLayers.Function.bind(function(){
if(img.readyState=="complete"||img.readyState=="interactive"){
_5db=img.width/img.height;
size=Math.max(_5d9.pointRadius*2,_5d9.graphicWidth||0,_5d9.graphicHeight||0);
_5d7=_5d7*_5db;
_5d9.graphicWidth=size*_5db;
_5d9.graphicHeight=size;
this.graphicRotate(node,_5d7,_5d8);
}
},this);
img.src=_5d9.externalGraphic;
return;
}else{
size=Math.max(_5d9.graphicWidth,_5d9.graphicHeight);
_5db=_5d9.graphicWidth/_5d9.graphicHeight;
}
var _5de=Math.round(_5d9.graphicWidth||size*_5db);
var _5df=Math.round(_5d9.graphicHeight||size);
node.style.width=_5de+"px";
node.style.height=_5df+"px";
var _5e0=document.getElementById(node.id+"_image");
if(!_5e0){
_5e0=this.createNode("olv:imagedata",node.id+"_image");
node.appendChild(_5e0);
}
_5e0.style.width=_5de+"px";
_5e0.style.height=_5df+"px";
_5e0.src=_5d9.externalGraphic;
_5e0.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader("+"src='', sizingMethod='scale')";
var _5e1=_5d9.rotation*Math.PI/180;
var _5e2=Math.sin(_5e1);
var _5e3=Math.cos(_5e1);
var _5e4="progid:DXImageTransform.Microsoft.Matrix(M11="+_5e3+",M12="+(-_5e2)+",M21="+_5e2+",M22="+_5e3+",SizingMethod='auto expand')\n";
var _5e5=_5d9.graphicOpacity||_5d9.fillOpacity;
if(_5e5&&_5e5!=1){
_5e4+="progid:DXImageTransform.Microsoft.BasicImage(opacity="+_5e5+")\n";
}
node.style.filter=_5e4;
var _5e6=new OpenLayers.Geometry.Point(-_5d7,-_5d8);
var _5e7=new OpenLayers.Bounds(0,0,_5de,_5df).toGeometry();
_5e7.rotate(_5d9.rotation,_5e6);
var _5e8=_5e7.getBounds();
node.style.left=Math.round(parseInt(node.style.left)+_5e8.left)+"px";
node.style.top=Math.round(parseInt(node.style.top)-_5e8.bottom)+"px";
},postDraw:function(node){
var _5ea=node._style.fillColor;
var _5eb=node._style.strokeColor;
if(_5ea=="none"&&node.fillcolor!=_5ea){
node.fillcolor=_5ea;
}
if(_5eb=="none"&&node.strokecolor!=_5eb){
node.strokecolor=_5eb;
}
},setNodeDimension:function(node,_5ed){
var bbox=_5ed.getBounds();
if(bbox){
var _5ef=this.getResolution();
var _5f0=new OpenLayers.Bounds((bbox.left/_5ef-this.offset.x).toFixed(),(bbox.bottom/_5ef-this.offset.y).toFixed(),(bbox.right/_5ef-this.offset.x).toFixed(),(bbox.top/_5ef-this.offset.y).toFixed());
node.style.left=_5f0.left+"px";
node.style.top=_5f0.top+"px";
node.style.width=_5f0.getWidth()+"px";
node.style.height=_5f0.getHeight()+"px";
node.coordorigin=_5f0.left+" "+_5f0.top;
node.coordsize=_5f0.getWidth()+" "+_5f0.getHeight();
}
},dashStyle:function(_5f1){
var dash=_5f1.strokeDashstyle;
switch(dash){
case "solid":
case "dot":
case "dash":
case "dashdot":
case "longdash":
case "longdashdot":
return dash;
default:
var _5f3=dash.split(/[ ,]/);
if(_5f3.length==2){
if(1*_5f3[0]>=2*_5f3[1]){
return "longdash";
}
return (_5f3[0]==1||_5f3[1]==1)?"dot":"dash";
}else{
if(_5f3.length==4){
return (1*_5f3[0]>=2*_5f3[1])?"longdashdot":"dashdot";
}
}
return "solid";
}
},createNode:function(type,id){
var node=document.createElement(type);
if(id){
node.id=id;
}
node.unselectable="on";
node.onselectstart=function(){
return (false);
};
return node;
},nodeTypeCompare:function(node,type){
var _5f9=type;
var _5fa=_5f9.indexOf(":");
if(_5fa!=-1){
_5f9=_5f9.substr(_5fa+1);
}
var _5fb=node.nodeName;
_5fa=_5fb.indexOf(":");
if(_5fa!=-1){
_5fb=_5fb.substr(_5fa+1);
}
return (_5f9==_5fb);
},createRenderRoot:function(){
return this.nodeFactory(this.container.id+"_vmlRoot","div");
},createRoot:function(_5fc){
return this.nodeFactory(this.container.id+_5fc,"olv:group");
},drawPoint:function(node,_5fe){
return this.drawCircle(node,_5fe,1);
},drawCircle:function(node,_600,_601){
if(!isNaN(_600.x)&&!isNaN(_600.y)){
var _602=this.getResolution();
node.style.left=((_600.x/_602-this.offset.x).toFixed()-_601)+"px";
node.style.top=((_600.y/_602-this.offset.y).toFixed()-_601)+"px";
var _603=_601*2;
node.style.width=_603+"px";
node.style.height=_603+"px";
return node;
}
return false;
},drawLineString:function(node,_605){
return this.drawLine(node,_605,false);
},drawLinearRing:function(node,_607){
return this.drawLine(node,_607,true);
},drawLine:function(node,_609,_60a){
this.setNodeDimension(node,_609);
var _60b=this.getResolution();
var _60c=_609.components.length;
var _60d=new Array(_60c);
var comp,x,y;
for(var i=0;i<_60c;i++){
comp=_609.components[i];
x=(comp.x/_60b-this.offset.x);
y=(comp.y/_60b-this.offset.y);
_60d[i]=" "+x.toFixed()+","+y.toFixed()+" l ";
}
var end=(_60a)?" x e":" e";
node.path="m"+_60d.join("")+end;
return node;
},drawPolygon:function(node,_614){
this.setNodeDimension(node,_614);
var _615=this.getResolution();
var path=[];
var _617,i,j,len,ilen,comp,x,y;
for(j=0,len=_614.components.length;j<len;j++){
_617=_614.components[j];
path.push("m");
for(i=0,ilen=_617.components.length;i<ilen;i++){
comp=_617.components[i];
x=comp.x/_615-this.offset.x;
y=comp.y/_615-this.offset.y;
path.push(" "+x.toFixed()+","+y.toFixed());
if(i==0){
path.push(" l");
}
}
path.push(" x ");
}
path.push("e");
node.path=path.join("");
return node;
},drawRectangle:function(node,_620){
var _621=this.getResolution();
node.style.left=(_620.x/_621-this.offset.x)+"px";
node.style.top=(_620.y/_621-this.offset.y)+"px";
node.style.width=_620.width/_621+"px";
node.style.height=_620.height/_621+"px";
return node;
},drawText:function(_622,_623,_624){
var _625=this.nodeFactory(_622+this.LABEL_ID_SUFFIX,"olv:rect");
var _626=this.nodeFactory(_622+this.LABEL_ID_SUFFIX+"_textbox","olv:textbox");
var _627=this.getResolution();
_625.style.left=(_624.x/_627-this.offset.x).toFixed()+"px";
_625.style.top=(_624.y/_627-this.offset.y).toFixed()+"px";
_625.style.flip="y";
_626.innerText=_623.label;
if(_623.fillColor){
_626.style.color=_623.fontColor;
}
if(_623.fontFamily){
_626.style.fontFamily=_623.fontFamily;
}
if(_623.fontSize){
_626.style.fontSize=_623.fontSize;
}
if(_623.fontWeight){
_626.style.fontWeight=_623.fontWeight;
}
_626.style.whiteSpace="nowrap";
_626.inset="1px,0px,0px,0px";
if(!_625.parentNode){
_625.appendChild(_626);
this.textRoot.appendChild(_625);
}
var _628=_623.labelAlign||"cm";
var _629=_626.clientWidth*(OpenLayers.Renderer.VML.LABEL_SHIFT[_628.substr(0,1)]);
var _62a=_626.clientHeight*(OpenLayers.Renderer.VML.LABEL_SHIFT[_628.substr(1,1)]);
_625.style.left=parseInt(_625.style.left)-_629-1+"px";
_625.style.top=parseInt(_625.style.top)+_62a+"px";
},drawSurface:function(node,_62c){
this.setNodeDimension(node,_62c);
var _62d=this.getResolution();
var path=[];
var comp,x,y;
for(var i=0,len=_62c.components.length;i<len;i++){
comp=_62c.components[i];
x=comp.x/_62d-this.offset.x;
y=comp.y/_62d-this.offset.y;
if((i%3)==0&&(i/3)==0){
path.push("m");
}else{
if((i%3)==1){
path.push(" c");
}
}
path.push(" "+x+","+y);
}
path.push(" x e");
node.path=path.join("");
return node;
},moveRoot:function(_634){
var _635=this.map.getLayer(_634.container.id);
if(_635 instanceof OpenLayers.Layer.Vector.RootContainer){
_635=this.map.getLayer(this.container.id);
}
_635&&_635.renderer.clear();
OpenLayers.Renderer.Elements.prototype.moveRoot.apply(this,arguments);
_635&&_635.redraw();
},importSymbol:function(_636){
var id=this.container.id+"-"+_636;
var _638=this.symbolCache[id];
if(_638){
return _638;
}
var _639=OpenLayers.Renderer.symbol[_636];
if(!_639){
throw new Error(_636+" is not a valid symbol name");
return;
}
var _63a=new OpenLayers.Bounds(Number.MAX_VALUE,Number.MAX_VALUE,0,0);
var _63b=["m"];
for(var i=0;i<_639.length;i=i+2){
x=_639[i];
y=_639[i+1];
_63a.left=Math.min(_63a.left,x);
_63a.bottom=Math.min(_63a.bottom,y);
_63a.right=Math.max(_63a.right,x);
_63a.top=Math.max(_63a.top,y);
_63b.push(x);
_63b.push(y);
if(i==0){
_63b.push("l");
}
}
_63b.push("x e");
var path=_63b.join(" ");
var diff=(_63a.getWidth()-_63a.getHeight())/2;
if(diff>0){
_63a.bottom=_63a.bottom-diff;
_63a.top=_63a.top+diff;
}else{
_63a.left=_63a.left-diff;
_63a.right=_63a.right+diff;
}
_638={path:path,size:_63a.getWidth(),left:_63a.left,bottom:_63a.bottom};
this.symbolCache[id]=_638;
return _638;
},CLASS_NAME:"OpenLayers.Renderer.VML"});
OpenLayers.Renderer.VML.LABEL_SHIFT={"l":0,"c":0.5,"r":1,"t":0,"m":0.5,"b":1};
OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:false,initialize:function(_63f,_640,_641,url,size){
this.layer=_63f;
this.position=_640.clone();
this.bounds=_641.clone();
this.url=url;
this.size=size.clone();
this.id=OpenLayers.Util.createUniqueID("Tile_");
this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);
},unload:function(){
if(this.isLoading){
this.isLoading=false;
this.events.triggerEvent("unload");
}
},destroy:function(){
this.layer=null;
this.bounds=null;
this.size=null;
this.position=null;
this.events.destroy();
this.events=null;
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size);
}
OpenLayers.Util.applyDefaults(obj,this);
return obj;
},draw:function(){
var _645=this.layer.maxExtent;
var _646=(_645&&this.bounds.intersectsBounds(_645,false));
this.shouldDraw=(_646||this.layer.displayOutsideMaxExtent);
this.clear();
return this.shouldDraw;
},moveTo:function(_647,_648,_649){
if(_649==null){
_649=true;
}
this.bounds=_647.clone();
this.position=_648.clone();
if(_649){
this.draw();
}
},clear:function(){
},getBoundsFromBaseLayer:function(_64a){
var msg=OpenLayers.i18n("reprojectDeprecated",{"layerName":this.layer.name});
OpenLayers.Console.warn(msg);
var _64c=this.layer.map.getLonLatFromLayerPx(_64a);
var _64d=_64a.clone();
_64d.x+=this.size.w;
_64d.y+=this.size.h;
var _64e=this.layer.map.getLonLatFromLayerPx(_64d);
if(_64c.lon>_64e.lon){
if(_64c.lon<0){
_64c.lon=-180-(_64c.lon+180);
}else{
_64e.lon=180+_64e.lon+180;
}
}
var _64f=new OpenLayers.Bounds(_64c.lon,_64e.lat,_64e.lon,_64c.lat);
return _64f;
},showTile:function(){
if(this.shouldDraw){
this.show();
}
},show:function(){
},hide:function(){
},CLASS_NAME:"OpenLayers.Tile"});
OpenLayers.Control.MouseToolbar=OpenLayers.Class(OpenLayers.Control.MouseDefaults,{mode:null,buttons:null,direction:"vertical",buttonClicked:null,initialize:function(_650,_651){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
this.position=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,OpenLayers.Control.MouseToolbar.Y);
if(_650){
this.position=_650;
}
if(_651){
this.direction=_651;
}
this.measureDivs=[];
},destroy:function(){
for(var _652 in this.buttons){
var btn=this.buttons[_652];
btn.map=null;
btn.events.destroy();
}
OpenLayers.Control.MouseDefaults.prototype.destroy.apply(this,arguments);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
OpenLayers.Control.MouseDefaults.prototype.draw.apply(this,arguments);
this.buttons={};
var sz=new OpenLayers.Size(28,28);
var _655=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,0);
this._addButton("zoombox","drag-rectangle-off.png","drag-rectangle-on.png",_655,sz,"Shift->Drag to zoom to area");
_655=_655.add((this.direction=="vertical"?0:sz.w),(this.direction=="vertical"?sz.h:0));
this._addButton("pan","panning-hand-off.png","panning-hand-on.png",_655,sz,"Drag the map to pan.");
_655=_655.add((this.direction=="vertical"?0:sz.w),(this.direction=="vertical"?sz.h:0));
this.switchModeTo("pan");
return this.div;
},_addButton:function(id,img,_658,xy,sz,_65b){
var _65c=OpenLayers.Util.getImagesLocation()+img;
var _65d=OpenLayers.Util.getImagesLocation()+_658;
var btn=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MouseToolbar_"+id,xy,sz,_65c,"absolute");
this.div.appendChild(btn);
btn.imgLocation=_65c;
btn.activeImgLocation=_65d;
btn.events=new OpenLayers.Events(this,btn,null,true);
btn.events.on({"mousedown":this.buttonDown,"mouseup":this.buttonUp,"dblclick":OpenLayers.Event.stop,scope:this});
btn.action=id;
btn.title=_65b;
btn.alt=_65b;
btn.map=this.map;
this.buttons[id]=btn;
return btn;
},buttonDown:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
this.buttonClicked=evt.element.action;
OpenLayers.Event.stop(evt);
},buttonUp:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
if(this.buttonClicked!=null){
if(this.buttonClicked==evt.element.action){
this.switchModeTo(evt.element.action);
}
OpenLayers.Event.stop(evt);
this.buttonClicked=null;
}
},defaultDblClick:function(evt){
this.switchModeTo("pan");
this.performedDrag=false;
var _662=this.map.getLonLatFromViewPortPx(evt.xy);
this.map.setCenter(_662,this.map.zoom+1);
OpenLayers.Event.stop(evt);
return false;
},defaultMouseDown:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
this.mouseDragStart=evt.xy.clone();
this.performedDrag=false;
this.startViaKeyboard=false;
if(evt.shiftKey&&this.mode!="zoombox"){
this.switchModeTo("zoombox");
this.startViaKeyboard=true;
}else{
if(evt.altKey&&this.mode!="measure"){
this.switchModeTo("measure");
}else{
if(!this.mode){
this.switchModeTo("pan");
}
}
}
switch(this.mode){
case "zoombox":
this.map.div.style.cursor="crosshair";
this.zoomBox=OpenLayers.Util.createDiv("zoomBox",this.mouseDragStart,null,null,"absolute","2px solid red");
this.zoomBox.style.backgroundColor="white";
this.zoomBox.style.filter="alpha(opacity=50)";
this.zoomBox.style.opacity="0.50";
this.zoomBox.style.fontSize="1px";
this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.viewPortDiv.appendChild(this.zoomBox);
this.performedDrag=true;
break;
case "measure":
var _664="";
if(this.measureStart){
var _665=this.map.getLonLatFromViewPortPx(this.mouseDragStart);
_664=OpenLayers.Util.distVincenty(this.measureStart,_665);
_664=Math.round(_664*100)/100;
_664=_664+"km";
this.measureStartBox=this.measureBox;
}
this.measureStart=this.map.getLonLatFromViewPortPx(this.mouseDragStart);
this.measureBox=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),-2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute");
this.measureBox.style.width="4px";
this.measureBox.style.height="4px";
this.measureBox.style.fontSize="1px";
this.measureBox.style.backgroundColor="red";
this.measureBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.layerContainerDiv.appendChild(this.measureBox);
if(_664){
this.measureBoxDistance=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute");
this.measureBoxDistance.innerHTML=_664;
this.measureBoxDistance.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.layerContainerDiv.appendChild(this.measureBoxDistance);
this.measureDivs.push(this.measureBoxDistance);
}
this.measureBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.layerContainerDiv.appendChild(this.measureBox);
this.measureDivs.push(this.measureBox);
break;
default:
this.map.div.style.cursor="move";
break;
}
document.onselectstart=function(){
return false;
};
OpenLayers.Event.stop(evt);
},switchModeTo:function(mode){
if(mode!=this.mode){
if(this.mode&&this.buttons[this.mode]){
OpenLayers.Util.modifyAlphaImageDiv(this.buttons[this.mode],null,null,null,this.buttons[this.mode].imgLocation);
}
if(this.mode=="measure"&&mode!="measure"){
for(var i=0,len=this.measureDivs.length;i<len;i++){
if(this.measureDivs[i]){
this.map.layerContainerDiv.removeChild(this.measureDivs[i]);
}
}
this.measureDivs=[];
this.measureStart=null;
}
this.mode=mode;
if(this.buttons[mode]){
OpenLayers.Util.modifyAlphaImageDiv(this.buttons[mode],null,null,null,this.buttons[mode].activeImgLocation);
}
switch(this.mode){
case "zoombox":
this.map.div.style.cursor="crosshair";
break;
default:
this.map.div.style.cursor="";
break;
}
}
},leaveMode:function(){
this.switchModeTo("pan");
},defaultMouseMove:function(evt){
if(this.mouseDragStart!=null){
switch(this.mode){
case "zoombox":
var _66a=Math.abs(this.mouseDragStart.x-evt.xy.x);
var _66b=Math.abs(this.mouseDragStart.y-evt.xy.y);
this.zoomBox.style.width=Math.max(1,_66a)+"px";
this.zoomBox.style.height=Math.max(1,_66b)+"px";
if(evt.xy.x<this.mouseDragStart.x){
this.zoomBox.style.left=evt.xy.x+"px";
}
if(evt.xy.y<this.mouseDragStart.y){
this.zoomBox.style.top=evt.xy.y+"px";
}
break;
default:
var _66a=this.mouseDragStart.x-evt.xy.x;
var _66b=this.mouseDragStart.y-evt.xy.y;
var size=this.map.getSize();
var _66d=new OpenLayers.Pixel(size.w/2+_66a,size.h/2+_66b);
var _66e=this.map.getLonLatFromViewPortPx(_66d);
this.map.setCenter(_66e,null,true);
this.mouseDragStart=evt.xy.clone();
}
this.performedDrag=true;
}
},defaultMouseUp:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
switch(this.mode){
case "zoombox":
this.zoomBoxEnd(evt);
if(this.startViaKeyboard){
this.leaveMode();
}
break;
case "pan":
if(this.performedDrag){
this.map.setCenter(this.map.center);
}
}
document.onselectstart=null;
this.mouseDragStart=null;
this.map.div.style.cursor="default";
},defaultMouseOut:function(evt){
if(this.mouseDragStart!=null&&OpenLayers.Util.mouseLeft(evt,this.map.div)){
if(this.zoomBox){
this.removeZoomBox();
if(this.startViaKeyboard){
this.leaveMode();
}
}
this.mouseDragStart=null;
this.map.div.style.cursor="default";
}
},defaultClick:function(evt){
if(this.performedDrag){
this.performedDrag=false;
return false;
}
},CLASS_NAME:"OpenLayers.Control.MouseToolbar"});
OpenLayers.Control.MouseToolbar.X=6;
OpenLayers.Control.MouseToolbar.Y=300;
OpenLayers.Control.NavigationHistory=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOGGLE,previous:null,previousOptions:null,next:null,nextOptions:null,limit:50,activateOnDraw:true,clearOnDeactivate:false,registry:null,nextStack:null,previousStack:null,listeners:null,restoring:false,initialize:function(_672){
OpenLayers.Control.prototype.initialize.apply(this,[_672]);
this.registry=OpenLayers.Util.extend({"moveend":function(){
return {center:this.map.getCenter(),resolution:this.map.getResolution()};
}},this.registry);
this.clear();
var _673={trigger:OpenLayers.Function.bind(this.previousTrigger,this),displayClass:this.displayClass+" "+this.displayClass+"Previous"};
OpenLayers.Util.extend(_673,this.previousOptions);
this.previous=new OpenLayers.Control.Button(_673);
var _674={trigger:OpenLayers.Function.bind(this.nextTrigger,this),displayClass:this.displayClass+" "+this.displayClass+"Next"};
OpenLayers.Util.extend(_674,this.nextOptions);
this.next=new OpenLayers.Control.Button(_674);
},onPreviousChange:function(_675,_676){
if(_675&&!this.previous.active){
this.previous.activate();
}else{
if(!_675&&this.previous.active){
this.previous.deactivate();
}
}
},onNextChange:function(_677,_678){
if(_677&&!this.next.active){
this.next.activate();
}else{
if(!_677&&this.next.active){
this.next.deactivate();
}
}
},destroy:function(){
OpenLayers.Control.prototype.destroy.apply(this);
this.previous.destroy();
this.next.destroy();
this.deactivate();
for(var prop in this){
this[prop]=null;
}
},setMap:function(map){
this.map=map;
this.next.setMap(map);
this.previous.setMap(map);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
this.next.draw();
this.previous.draw();
if(this.activateOnDraw){
this.activate();
}
},previousTrigger:function(){
var _67b=this.previousStack.shift();
var _67c=this.previousStack.shift();
if(_67c!=undefined){
this.nextStack.unshift(_67b);
this.previousStack.unshift(_67c);
this.restoring=true;
this.restore(_67c);
this.restoring=false;
this.onNextChange(this.nextStack[0],this.nextStack.length);
this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);
}else{
this.previousStack.unshift(_67b);
}
return _67c;
},nextTrigger:function(){
var _67d=this.nextStack.shift();
if(_67d!=undefined){
this.previousStack.unshift(_67d);
this.restoring=true;
this.restore(_67d);
this.restoring=false;
this.onNextChange(this.nextStack[0],this.nextStack.length);
this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);
}
return _67d;
},clear:function(){
this.previousStack=[];
this.nextStack=[];
},restore:function(_67e){
var zoom=this.map.getZoomForResolution(_67e.resolution);
this.map.setCenter(_67e.center,zoom);
},setListeners:function(){
this.listeners={};
for(var type in this.registry){
this.listeners[type]=OpenLayers.Function.bind(function(){
if(!this.restoring){
var _681=this.registry[type].apply(this,arguments);
this.previousStack.unshift(_681);
if(this.previousStack.length>1){
this.onPreviousChange(this.previousStack[1],this.previousStack.length-1);
}
if(this.previousStack.length>(this.limit+1)){
this.previousStack.pop();
}
if(this.nextStack.length>0){
this.nextStack=[];
this.onNextChange(null,0);
}
}
return true;
},this);
}
},activate:function(){
var _682=false;
if(this.map){
if(OpenLayers.Control.prototype.activate.apply(this)){
if(this.listeners==null){
this.setListeners();
}
for(var type in this.listeners){
this.map.events.register(type,this,this.listeners[type]);
}
_682=true;
if(this.previousStack.length==0){
this.initStack();
}
}
}
return _682;
},initStack:function(){
if(this.map.getCenter()){
this.listeners.moveend();
}
},deactivate:function(){
var _684=false;
if(this.map){
if(OpenLayers.Control.prototype.deactivate.apply(this)){
for(var type in this.listeners){
this.map.events.unregister(type,this,this.listeners[type]);
}
if(this.clearOnDeactivate){
this.clear();
}
_684=true;
}
}
return _684;
},CLASS_NAME:"OpenLayers.Control.NavigationHistory"});
OpenLayers.Control.PanPanel=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(_686){
OpenLayers.Control.Panel.prototype.initialize.apply(this,[_686]);
this.addControls([new OpenLayers.Control.Pan(OpenLayers.Control.Pan.NORTH),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.SOUTH),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.EAST),new OpenLayers.Control.Pan(OpenLayers.Control.Pan.WEST)]);
},CLASS_NAME:"OpenLayers.Control.PanPanel"});
OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoomBarDiv:null,divEvents:null,zoomWorldIcon:false,initialize:function(){
OpenLayers.Control.PanZoom.prototype.initialize.apply(this,arguments);
},destroy:function(){
this._removeZoomBar();
this.map.events.un({"changebaselayer":this.redraw,scope:this});
OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments);
},setMap:function(map){
OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments);
this.map.events.register("changebaselayer",this,this.redraw);
},redraw:function(){
if(this.div!=null){
this.removeButtons();
this._removeZoomBar();
}
this.draw();
},draw:function(px){
OpenLayers.Control.prototype.draw.apply(this,arguments);
px=this.position.clone();
this.buttons=[];
var sz=new OpenLayers.Size(18,18);
var _68a=new OpenLayers.Pixel(px.x+sz.w/2,px.y);
var _68b=sz.w;
if(this.zoomWorldIcon){
_68a=new OpenLayers.Pixel(px.x+sz.w,px.y);
}
this._addButton("panup","north-mini.png",_68a,sz);
px.y=_68a.y+sz.h;
this._addButton("panleft","west-mini.png",px,sz);
if(this.zoomWorldIcon){
this._addButton("zoomworld","zoom-world-mini.png",px.add(sz.w,0),sz);
_68b*=2;
}
this._addButton("panright","east-mini.png",px.add(_68b,0),sz);
this._addButton("pandown","south-mini.png",_68a.add(0,sz.h*2),sz);
this._addButton("zoomin","zoom-plus-mini.png",_68a.add(0,sz.h*3+5),sz);
_68a=this._addZoomBar(_68a.add(0,sz.h*4+5));
this._addButton("zoomout","zoom-minus-mini.png",_68a,sz);
return this.div;
},_addZoomBar:function(_68c){
var _68d=OpenLayers.Util.getImagesLocation();
var id=this.id+"_"+this.map.id;
var _68f=this.map.getNumZoomLevels()-1-this.map.getZoom();
var _690=OpenLayers.Util.createAlphaImageDiv(id,_68c.add(-1,_68f*this.zoomStopHeight),new OpenLayers.Size(20,9),_68d+"slider.png","absolute");
this.slider=_690;
this.sliderEvents=new OpenLayers.Events(this,_690,null,true,{includeXY:true});
this.sliderEvents.on({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});
var sz=new OpenLayers.Size();
sz.h=this.zoomStopHeight*this.map.getNumZoomLevels();
sz.w=this.zoomStopWidth;
var div=null;
if(OpenLayers.Util.alphaHack()){
var id=this.id+"_"+this.map.id;
div=OpenLayers.Util.createAlphaImageDiv(id,_68c,new OpenLayers.Size(sz.w,this.zoomStopHeight),_68d+"zoombar.png","absolute",null,"crop");
div.style.height=sz.h+"px";
}else{
div=OpenLayers.Util.createDiv("OpenLayers_Control_PanZoomBar_Zoombar"+this.map.id,_68c,sz,_68d+"zoombar.png");
}
this.zoombarDiv=div;
this.divEvents=new OpenLayers.Events(this,div,null,true,{includeXY:true});
this.divEvents.on({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});
this.div.appendChild(div);
this.startTop=parseInt(div.style.top);
this.div.appendChild(_690);
this.map.events.register("zoomend",this,this.moveZoomBar);
_68c=_68c.add(0,this.zoomStopHeight*this.map.getNumZoomLevels());
return _68c;
},_removeZoomBar:function(){
this.sliderEvents.un({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});
this.sliderEvents.destroy();
this.divEvents.un({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});
this.divEvents.destroy();
this.div.removeChild(this.zoombarDiv);
this.zoombarDiv=null;
this.div.removeChild(this.slider);
this.slider=null;
this.map.events.unregister("zoomend",this,this.moveZoomBar);
},passEventToSlider:function(evt){
this.sliderEvents.handleBrowserEvent(evt);
},divClick:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
var y=evt.xy.y;
var top=OpenLayers.Util.pagePosition(evt.object)[1];
var _697=(y-top)/this.zoomStopHeight;
if(!this.map.fractionalZoom){
_697=Math.floor(_697);
}
var zoom=(this.map.getNumZoomLevels()-1)-_697;
zoom=Math.min(Math.max(zoom,0),this.map.getNumZoomLevels()-1);
this.map.zoomTo(zoom);
OpenLayers.Event.stop(evt);
},zoomBarDown:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
this.map.events.on({"mousemove":this.passEventToSlider,"mouseup":this.passEventToSlider,scope:this});
this.mouseDragStart=evt.xy.clone();
this.zoomStart=evt.xy.clone();
this.div.style.cursor="move";
this.zoombarDiv.offsets=null;
OpenLayers.Event.stop(evt);
},zoomBarDrag:function(evt){
if(this.mouseDragStart!=null){
var _69b=this.mouseDragStart.y-evt.xy.y;
var _69c=OpenLayers.Util.pagePosition(this.zoombarDiv);
if((evt.clientY-_69c[1])>0&&(evt.clientY-_69c[1])<parseInt(this.zoombarDiv.style.height)-2){
var _69d=parseInt(this.slider.style.top)-_69b;
this.slider.style.top=_69d+"px";
this.mouseDragStart=evt.xy.clone();
}
OpenLayers.Event.stop(evt);
}
},zoomBarUp:function(evt){
if(!OpenLayers.Event.isLeftClick(evt)){
return;
}
if(this.zoomStart){
this.div.style.cursor="";
this.map.events.un({"mouseup":this.passEventToSlider,"mousemove":this.passEventToSlider,scope:this});
var _69f=this.zoomStart.y-evt.xy.y;
var _6a0=this.map.zoom;
if(this.map.fractionalZoom){
_6a0+=_69f/this.zoomStopHeight;
_6a0=Math.min(Math.max(_6a0,0),this.map.getNumZoomLevels()-1);
}else{
_6a0+=Math.round(_69f/this.zoomStopHeight);
}
this.map.zoomTo(_6a0);
this.moveZoomBar();
this.mouseDragStart=null;
OpenLayers.Event.stop(evt);
}
},moveZoomBar:function(){
var _6a1=((this.map.getNumZoomLevels()-1)-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;
this.slider.style.top=_6a1+"px";
},CLASS_NAME:"OpenLayers.Control.PanZoomBar"});
OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{argParserClass:OpenLayers.Control.ArgParser,element:null,base:"",displayProjection:null,initialize:function(_6a2,base,_6a4){
OpenLayers.Control.prototype.initialize.apply(this,[_6a4]);
this.element=OpenLayers.Util.getElement(_6a2);
this.base=base||document.location.href;
},destroy:function(){
if(this.element.parentNode==this.div){
this.div.removeChild(this.element);
}
this.element=null;
this.map.events.unregister("moveend",this,this.updateLink);
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},setMap:function(map){
OpenLayers.Control.prototype.setMap.apply(this,arguments);
for(var i=0,len=this.map.controls.length;i<len;i++){
var _6a8=this.map.controls[i];
if(_6a8.CLASS_NAME==this.argParserClass.CLASS_NAME){
if(_6a8.displayProjection!=this.displayProjection){
this.displayProjection=_6a8.displayProjection;
}
break;
}
}
if(i==this.map.controls.length){
this.map.addControl(new this.argParserClass({"displayProjection":this.displayProjection}));
}
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
if(!this.element){
this.div.className=this.displayClass;
this.element=document.createElement("a");
this.element.innerHTML=OpenLayers.i18n("permalink");
this.element.href="";
this.div.appendChild(this.element);
}
this.map.events.on({"moveend":this.updateLink,"changelayer":this.updateLink,"changebaselayer":this.updateLink,scope:this});
this.updateLink();
return this.div;
},updateLink:function(){
var href=this.base;
if(href.indexOf("?")!=-1){
href=href.substring(0,href.indexOf("?"));
}
href+="?"+OpenLayers.Util.getParameterString(this.createParams());
this.element.href=href;
},createParams:function(_6aa,zoom,_6ac){
_6aa=_6aa||this.map.getCenter();
var _6ad=OpenLayers.Util.getParameters(this.base);
if(_6aa){
_6ad.zoom=zoom||this.map.getZoom();
var lat=_6aa.lat;
var lon=_6aa.lon;
if(this.displayProjection){
var _6b0=OpenLayers.Projection.transform({x:lon,y:lat},this.map.getProjectionObject(),this.displayProjection);
lon=_6b0.x;
lat=_6b0.y;
}
_6ad.lat=Math.round(lat*100000)/100000;
_6ad.lon=Math.round(lon*100000)/100000;
_6ac=_6ac||this.map.layers;
_6ad.layers="";
for(var i=0,len=_6ac.length;i<len;i++){
var _6b3=_6ac[i];
if(_6b3.isBaseLayer){
_6ad.layers+=(_6b3==this.map.baseLayer)?"B":"0";
}else{
_6ad.layers+=(_6b3.getVisibility())?"T":"F";
}
}
}
return _6ad;
},CLASS_NAME:"OpenLayers.Control.Permalink"});
OpenLayers.Control.ZoomPanel=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(_6b4){
OpenLayers.Control.Panel.prototype.initialize.apply(this,[_6b4]);
this.addControls([new OpenLayers.Control.ZoomIn(),new OpenLayers.Control.ZoomToMaxExtent(),new OpenLayers.Control.ZoomOut()]);
},CLASS_NAME:"OpenLayers.Control.ZoomPanel"});
OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:false,initialize:function(_6b5){
OpenLayers.Format.prototype.initialize.apply(this,[_6b5]);
},read:function(json,_6b7){
try{
if(/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
var _6b8=eval("("+json+")");
if(typeof _6b7==="function"){
function walk(k,v){
if(v&&typeof v==="object"){
for(var i in v){
if(v.hasOwnProperty(i)){
v[i]=walk(i,v[i]);
}
}
}
return _6b7(k,v);
};
_6b8=walk("",_6b8);
}
if(this.keepData){
this.data=_6b8;
}
return _6b8;
}
}
catch(e){
}
return null;
},write:function(_6bd,_6be){
this.pretty=!!_6be;
var json=null;
var type=typeof _6bd;
if(this.serialize[type]){
try{
json=this.serialize[type].apply(this,[_6bd]);
}
catch(err){
OpenLayers.Console.error("Trouble serializing: "+err);
}
}
return json;
},writeIndent:function(){
var _6c1=[];
if(this.pretty){
for(var i=0;i<this.level;++i){
_6c1.push(this.indent);
}
}
return _6c1.join("");
},writeNewline:function(){
return (this.pretty)?this.newline:"";
},writeSpace:function(){
return (this.pretty)?this.space:"";
},serialize:{"object":function(_6c3){
if(_6c3==null){
return "null";
}
if(_6c3.constructor==Date){
return this.serialize.date.apply(this,[_6c3]);
}
if(_6c3.constructor==Array){
return this.serialize.array.apply(this,[_6c3]);
}
var _6c4=["{"];
this.level+=1;
var key,_6c6,_6c7;
var _6c8=false;
for(key in _6c3){
if(_6c3.hasOwnProperty(key)){
_6c6=OpenLayers.Format.JSON.prototype.write.apply(this,[key,this.pretty]);
_6c7=OpenLayers.Format.JSON.prototype.write.apply(this,[_6c3[key],this.pretty]);
if(_6c6!=null&&_6c7!=null){
if(_6c8){
_6c4.push(",");
}
_6c4.push(this.writeNewline(),this.writeIndent(),_6c6,":",this.writeSpace(),_6c7);
_6c8=true;
}
}
}
this.level-=1;
_6c4.push(this.writeNewline(),this.writeIndent(),"}");
return _6c4.join("");
},"array":function(_6c9){
var json;
var _6cb=["["];
this.level+=1;
for(var i=0,len=_6c9.length;i<len;++i){
json=OpenLayers.Format.JSON.prototype.write.apply(this,[_6c9[i],this.pretty]);
if(json!=null){
if(i>0){
_6cb.push(",");
}
_6cb.push(this.writeNewline(),this.writeIndent(),json);
}
}
this.level-=1;
_6cb.push(this.writeNewline(),this.writeIndent(),"]");
return _6cb.join("");
},"string":function(_6ce){
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};
if(/["\\\x00-\x1f]/.test(_6ce)){
return "\""+_6ce.replace(/([\x00-\x1f\\"])/g,function(a,b){
var c=m[b];
if(c){
return c;
}
c=b.charCodeAt();
return "\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);
})+"\"";
}
return "\""+_6ce+"\"";
},"number":function(_6d3){
return isFinite(_6d3)?String(_6d3):"null";
},"boolean":function(bool){
return String(bool);
},"date":function(date){
function _6d6(_6d7){
return (_6d7<10)?"0"+_6d7:_6d7;
};
return "\""+date.getFullYear()+"-"+_6d6(date.getMonth()+1)+"-"+_6d6(date.getDate())+"T"+_6d6(date.getHours())+":"+_6d6(date.getMinutes())+":"+_6d6(date.getSeconds())+"\"";
}},CLASS_NAME:"OpenLayers.Format.JSON"});
OpenLayers.Format.WFST=function(_6d8){
_6d8=OpenLayers.Util.applyDefaults(_6d8,OpenLayers.Format.WFST.DEFAULTS);
var cls=OpenLayers.Format.WFST["v"+_6d8.version.replace(/\./g,"_")];
if(!cls){
throw "Unsupported WFST version: "+_6d8.version;
}
return new cls(_6d8);
};
OpenLayers.Format.WFST.DEFAULTS={"version":"1.0.0"};
OpenLayers.Format.WMSCapabilities=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.1.1",version:null,parser:null,initialize:function(_6da){
OpenLayers.Format.prototype.initialize.apply(this,[_6da]);
this.options=_6da;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _6dd=this.version||root.getAttribute("version")||this.defaultVersion;
if(!this.parser||this.parser.version!==_6dd){
var _6de=OpenLayers.Format.WMSCapabilities["v"+_6dd.replace(/\./g,"_")];
if(!_6de){
throw "Can't find a WMS capabilities parser for version "+_6dd;
}
var _6df=new _6de(this.options);
}
var _6e0=_6df.read(data);
_6e0.version=_6dd;
return _6e0;
},CLASS_NAME:"OpenLayers.Format.WMSCapabilities"});
OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{namespaces:null,namespaceAlias:null,defaultPrefix:null,readers:{},writers:{},xmldom:null,initialize:function(_6e1){
if(window.ActiveXObject){
this.xmldom=new ActiveXObject("Microsoft.XMLDOM");
}
OpenLayers.Format.prototype.initialize.apply(this,[_6e1]);
this.namespaces=OpenLayers.Util.extend({},this.namespaces);
this.namespaceAlias={};
for(var _6e2 in this.namespaces){
this.namespaceAlias[this.namespaces[_6e2]]=_6e2;
}
},destroy:function(){
this.xmldom=null;
OpenLayers.Format.prototype.destroy.apply(this,arguments);
},setNamespace:function(_6e3,uri){
this.namespaces[_6e3]=uri;
this.namespaceAlias[uri]=_6e3;
},read:function(text){
var _6e6=text.indexOf("<");
if(_6e6>0){
text=text.substring(_6e6);
}
var node=OpenLayers.Util.Try(OpenLayers.Function.bind((function(){
var _6e8;
if(window.ActiveXObject&&!this.xmldom){
_6e8=new ActiveXObject("Microsoft.XMLDOM");
}else{
_6e8=this.xmldom;
}
_6e8.loadXML(text);
return _6e8;
}),this),function(){
return new DOMParser().parseFromString(text,"text/xml");
},function(){
var req=new XMLHttpRequest();
req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);
if(req.overrideMimeType){
req.overrideMimeType("text/xml");
}
req.send(null);
return req.responseXML;
});
if(this.keepData){
this.data=node;
}
return node;
},write:function(node){
var data;
if(this.xmldom){
data=node.xml;
}else{
var _6ec=new XMLSerializer();
if(node.nodeType==1){
var doc=document.implementation.createDocument("","",null);
if(doc.importNode){
node=doc.importNode(node,true);
}
doc.appendChild(node);
data=_6ec.serializeToString(doc);
}else{
data=_6ec.serializeToString(node);
}
}
return data;
},createElementNS:function(uri,name){
var _6f0;
if(this.xmldom){
if(typeof uri=="string"){
_6f0=this.xmldom.createNode(1,name,uri);
}else{
_6f0=this.xmldom.createNode(1,name,"");
}
}else{
_6f0=document.createElementNS(uri,name);
}
return _6f0;
},createTextNode:function(text){
var node;
if(this.xmldom){
node=this.xmldom.createTextNode(text);
}else{
node=document.createTextNode(text);
}
return node;
},getElementsByTagNameNS:function(node,uri,name){
var _6f6=[];
if(node.getElementsByTagNameNS){
_6f6=node.getElementsByTagNameNS(uri,name);
}else{
var _6f7=node.getElementsByTagName("*");
var _6f8,_6f9;
for(var i=0,len=_6f7.length;i<len;++i){
_6f8=_6f7[i];
_6f9=(_6f8.prefix)?(_6f8.prefix+":"+name):name;
if((name=="*")||(_6f9==_6f8.nodeName)){
if((uri=="*")||(uri==_6f8.namespaceURI)){
_6f6.push(_6f8);
}
}
}
}
return _6f6;
},getAttributeNodeNS:function(node,uri,name){
var _6ff=null;
if(node.getAttributeNodeNS){
_6ff=node.getAttributeNodeNS(uri,name);
}else{
var _700=node.attributes;
var _701,_702;
for(var i=0,len=_700.length;i<len;++i){
_701=_700[i];
if(_701.namespaceURI==uri){
_702=(_701.prefix)?(_701.prefix+":"+name):name;
if(_702==_701.nodeName){
_6ff=_701;
break;
}
}
}
}
return _6ff;
},getAttributeNS:function(node,uri,name){
var _708="";
if(node.getAttributeNS){
_708=node.getAttributeNS(uri,name)||"";
}else{
var _709=this.getAttributeNodeNS(node,uri,name);
if(_709){
_708=_709.nodeValue;
}
}
return _708;
},getChildValue:function(node,def){
var _70c=def||"";
if(node){
for(var _70d=node.firstChild;_70d;_70d=_70d.nextSibling){
switch(_70d.nodeType){
case 3:
case 4:
_70c+=_70d.nodeValue;
}
}
}
return _70c;
},concatChildValues:function(node,def){
var _710="";
var _711=node.firstChild;
var _712;
while(_711){
_712=_711.nodeValue;
if(_712){
_710+=_712;
}
_711=_711.nextSibling;
}
if(_710==""&&def!=undefined){
_710=def;
}
return _710;
},isSimpleContent:function(node){
var _714=true;
for(var _715=node.firstChild;_715;_715=_715.nextSibling){
if(_715.nodeType===1){
_714=false;
break;
}
}
return _714;
},contentType:function(node){
var _717=false,_718=false;
var type=OpenLayers.Format.XML.CONTENT_TYPE.EMPTY;
for(var _71a=node.firstChild;_71a;_71a=_71a.nextSibling){
switch(_71a.nodeType){
case 1:
_718=true;
break;
case 8:
break;
default:
_717=true;
}
if(_718&&_717){
break;
}
}
if(_718&&_717){
type=OpenLayers.Format.XML.CONTENT_TYPE.MIXED;
}else{
if(_718){
return OpenLayers.Format.XML.CONTENT_TYPE.COMPLEX;
}else{
if(_717){
return OpenLayers.Format.XML.CONTENT_TYPE.SIMPLE;
}
}
}
return type;
},hasAttributeNS:function(node,uri,name){
var _71e=false;
if(node.hasAttributeNS){
_71e=node.hasAttributeNS(uri,name);
}else{
_71e=!!this.getAttributeNodeNS(node,uri,name);
}
return _71e;
},setAttributeNS:function(node,uri,name,_722){
if(node.setAttributeNS){
node.setAttributeNS(uri,name,_722);
}else{
if(this.xmldom){
if(uri){
var _723=node.ownerDocument.createNode(2,name,uri);
_723.nodeValue=_722;
node.setAttributeNode(_723);
}else{
node.setAttribute(name,_722);
}
}else{
throw "setAttributeNS not implemented";
}
}
},createElementNSPlus:function(name,_725){
_725=_725||{};
var uri=_725.uri||this.namespaces[_725.prefix];
if(!uri){
var loc=name.indexOf(":");
uri=this.namespaces[name.substring(0,loc)];
}
if(!uri){
uri=this.namespaces[this.defaultPrefix];
}
var node=this.createElementNS(uri,name);
if(_725.attributes){
this.setAttributes(node,_725.attributes);
}
var _729=_725.value;
if(_729!=null){
if(typeof _729=="boolean"){
_729=String(_729);
}
node.appendChild(this.createTextNode(_729));
}
return node;
},setAttributes:function(node,obj){
var _72c,uri;
for(var name in obj){
if(obj[name]!=null&&obj[name].toString){
_72c=obj[name].toString();
uri=this.namespaces[name.substring(0,name.indexOf(":"))]||null;
this.setAttributeNS(node,uri,name,_72c);
}
}
},readNode:function(node,obj){
if(!obj){
obj={};
}
var _731=this.readers[this.namespaceAlias[node.namespaceURI]];
if(_731){
var _732=node.localName||node.nodeName.split(":").pop();
var _733=_731[_732]||_731["*"];
if(_733){
_733.apply(this,[node,obj]);
}
}
return obj;
},readChildNodes:function(node,obj){
if(!obj){
obj={};
}
var _736=node.childNodes;
var _737;
for(var i=0,len=_736.length;i<len;++i){
_737=_736[i];
if(_737.nodeType==1){
this.readNode(_737,obj);
}
}
return obj;
},writeNode:function(name,obj,_73c){
var _73d,_73e;
var _73f=name.indexOf(":");
if(_73f>0){
_73d=name.substring(0,_73f);
_73e=name.substring(_73f+1);
}else{
if(_73c){
_73d=this.namespaceAlias[_73c.namespaceURI];
}else{
_73d=this.defaultPrefix;
}
_73e=name;
}
var _740=this.writers[_73d][_73e].apply(this,[obj]);
if(_73c){
_73c.appendChild(_740);
}
return _740;
},getChildEl:function(node,name,uri){
return node&&this.getThisOrNextEl(node.firstChild,name,uri);
},getNextEl:function(node,name,uri){
return node&&this.getThisOrNextEl(node.nextSibling,name,uri);
},getThisOrNextEl:function(node,name,uri){
outer:
for(var _74a=node;_74a;_74a=_74a.nextSibling){
switch(_74a.nodeType){
case 1:
if((!name||name===(_74a.localName||_74a.nodeName.split(":").pop()))&&(!uri||uri===_74a.namespaceURI)){
break outer;
}
_74a=null;
break outer;
case 3:
if(/^\s*$/.test(_74a.nodeValue)){
break;
}
case 4:
case 6:
case 12:
case 10:
case 11:
_74a=null;
break outer;
}
}
return _74a||null;
},lookupNamespaceURI:function(node,_74c){
var uri=null;
if(node){
if(node.lookupNamespaceURI){
uri=node.lookupNamespaceURI(_74c);
}else{
outer:
switch(node.nodeType){
case 1:
if(node.namespaceURI!==null&&node.prefix===_74c){
uri=node.namespaceURI;
break outer;
}
var len=node.attributes.length;
if(len){
var attr;
for(var i=0;i<len;++i){
attr=node.attributes[i];
if(attr.prefix==="xmlns"&&attr.name==="xmlns:"+_74c){
uri=attr.value||null;
break outer;
}else{
if(attr.name==="xmlns"&&_74c===null){
uri=attr.value||null;
break outer;
}
}
}
}
uri=this.lookupNamespaceURI(node.parentNode,_74c);
break outer;
case 2:
uri=this.lookupNamespaceURI(node.ownerElement,_74c);
break outer;
case 9:
uri=this.lookupNamespaceURI(node.documentElement,_74c);
break outer;
case 6:
case 12:
case 10:
case 11:
break outer;
default:
uri=this.lookupNamespaceURI(node.parentNode,_74c);
break outer;
}
}
}
return uri;
},CLASS_NAME:"OpenLayers.Format.XML"});
OpenLayers.Format.XML.CONTENT_TYPE={EMPTY:0,SIMPLE:1,COMPLEX:2,MIXED:3};
OpenLayers.Format.XML.lookupNamespaceURI=OpenLayers.Function.bind(OpenLayers.Format.XML.prototype.lookupNamespaceURI,OpenLayers.Format.XML.prototype);
OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:false,evt:null,initialize:function(_751,_752,_753){
OpenLayers.Util.extend(this,_753);
this.control=_751;
this.callbacks=_752;
if(_751.map){
this.setMap(_751.map);
}
OpenLayers.Util.extend(this,_753);
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
},setMap:function(map){
this.map=map;
},checkModifiers:function(evt){
if(this.keyMask==null){
return true;
}
var _756=(evt.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(evt.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(evt.altKey?OpenLayers.Handler.MOD_ALT:0);
return (_756==this.keyMask);
},activate:function(){
if(this.active){
return false;
}
var _757=OpenLayers.Events.prototype.BROWSER_EVENTS;
for(var i=0,len=_757.length;i<len;i++){
if(this[_757[i]]){
this.register(_757[i],this[_757[i]]);
}
}
this.active=true;
return true;
},deactivate:function(){
if(!this.active){
return false;
}
var _75a=OpenLayers.Events.prototype.BROWSER_EVENTS;
for(var i=0,len=_75a.length;i<len;i++){
if(this[_75a[i]]){
this.unregister(_75a[i],this[_75a[i]]);
}
}
this.active=false;
return true;
},callback:function(name,args){
if(name&&this.callbacks[name]){
this.callbacks[name].apply(this.control,args);
}
},register:function(name,_760){
this.map.events.registerPriority(name,this,_760);
this.map.events.registerPriority(name,this,this.setEvent);
},unregister:function(name,_762){
this.map.events.unregister(name,this,_762);
this.map.events.unregister(name,this,this.setEvent);
},setEvent:function(evt){
this.evt=evt;
return true;
},destroy:function(){
this.deactivate();
this.control=this.map=null;
},CLASS_NAME:"OpenLayers.Handler"});
OpenLayers.Handler.MOD_NONE=0;
OpenLayers.Handler.MOD_SHIFT=1;
OpenLayers.Handler.MOD_CTRL=2;
OpenLayers.Handler.MOD_ALT=4;
OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1000},EVENT_TYPES:["preaddlayer","addlayer","removelayer","changelayer","movestart","move","moveend","zoomend","popupopen","popupclose","addmarker","removemarker","clearmarkers","mouseover","mouseout","mousemove","dragstart","drag","dragend","changebaselayer"],id:null,fractionalZoom:false,events:null,allOverlays:false,div:null,dragging:false,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,viewRequestID:0,tileSize:null,projection:"EPSG:4326",units:"degrees",resolutions:null,maxResolution:1.40625,minResolution:null,maxScale:null,minScale:null,maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:true,panTween:null,eventListeners:null,panMethod:OpenLayers.Easing.Expo.easeOut,panDuration:50,paddingForPopups:null,initialize:function(div,_765){
if(arguments.length===1&&typeof div==="object"){
_765=div;
div=_765&&_765.div;
}
this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT);
this.maxExtent=new OpenLayers.Bounds(-180,-90,180,90);
this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15);
this.theme=OpenLayers._getScriptLocation()+"theme/default/style.css";
OpenLayers.Util.extend(this,_765);
this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_");
this.div=OpenLayers.Util.getElement(div);
if(!this.div){
this.div=document.createElement("div");
this.div.style.height="1px";
this.div.style.width="1px";
}
OpenLayers.Element.addClass(this.div,"olMap");
var id=this.div.id+"_OpenLayers_ViewPort";
this.viewPortDiv=OpenLayers.Util.createDiv(id,null,null,null,"relative",null,"hidden");
this.viewPortDiv.style.width="100%";
this.viewPortDiv.style.height="100%";
this.viewPortDiv.className="olMapViewport";
this.div.appendChild(this.viewPortDiv);
id=this.div.id+"_OpenLayers_Container";
this.layerContainerDiv=OpenLayers.Util.createDiv(id);
this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE["Popup"]-1;
this.viewPortDiv.appendChild(this.layerContainerDiv);
this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES,this.fallThrough,{includeXY:true});
this.updateSize();
if(this.eventListeners instanceof Object){
this.events.on(this.eventListeners);
}
this.events.register("movestart",this,this.updateSize);
if(OpenLayers.String.contains(navigator.appName,"Microsoft")){
this.events.register("resize",this,this.updateSize);
}else{
this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this);
OpenLayers.Event.observe(window,"resize",this.updateSizeDestroy);
}
if(this.theme){
var _767=true;
var _768=document.getElementsByTagName("link");
for(var i=0,len=_768.length;i<len;++i){
if(OpenLayers.Util.isEquivalentUrl(_768.item(i).href,this.theme)){
_767=false;
break;
}
}
if(_767){
var _76b=document.createElement("link");
_76b.setAttribute("rel","stylesheet");
_76b.setAttribute("type","text/css");
_76b.setAttribute("href",this.theme);
document.getElementsByTagName("head")[0].appendChild(_76b);
}
}
this.layers=[];
if(this.controls==null){
if(OpenLayers.Control!=null){
this.controls=[new OpenLayers.Control.Navigation(),new OpenLayers.Control.PanZoom(),new OpenLayers.Control.ArgParser(),new OpenLayers.Control.Attribution()];
}else{
this.controls=[];
}
}
for(var i=0,len=this.controls.length;i<len;i++){
this.addControlToMap(this.controls[i]);
}
this.popups=[];
this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this);
OpenLayers.Event.observe(window,"unload",this.unloadDestroy);
},render:function(div){
this.div=OpenLayers.Util.getElement(div);
OpenLayers.Element.addClass(this.div,"olMap");
this.events.attachToElement(this.div);
this.viewPortDiv.parentNode.removeChild(this.viewPortDiv);
this.div.appendChild(this.viewPortDiv);
this.updateSize();
},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){
if(!this.unloadDestroy){
return false;
}
OpenLayers.Event.stopObserving(window,"unload",this.unloadDestroy);
this.unloadDestroy=null;
if(this.updateSizeDestroy){
OpenLayers.Event.stopObserving(window,"resize",this.updateSizeDestroy);
}else{
this.events.unregister("resize",this,this.updateSize);
}
this.paddingForPopups=null;
if(this.controls!=null){
for(var i=this.controls.length-1;i>=0;--i){
this.controls[i].destroy();
}
this.controls=null;
}
if(this.layers!=null){
for(var i=this.layers.length-1;i>=0;--i){
this.layers[i].destroy(false);
}
this.layers=null;
}
if(this.viewPortDiv){
this.div.removeChild(this.viewPortDiv);
}
this.viewPortDiv=null;
if(this.eventListeners){
this.events.un(this.eventListeners);
this.eventListeners=null;
}
this.events.destroy();
this.events=null;
},setOptions:function(_76e){
OpenLayers.Util.extend(this,_76e);
},getTileSize:function(){
return this.tileSize;
},getBy:function(_76f,_770,_771){
var test=(typeof _771.test=="function");
var _773=OpenLayers.Array.filter(this[_76f],function(item){
return item[_770]==_771||(test&&_771.test(item[_770]));
});
return _773;
},getLayersBy:function(_775,_776){
return this.getBy("layers",_775,_776);
},getLayersByName:function(_777){
return this.getLayersBy("name",_777);
},getLayersByClass:function(_778){
return this.getLayersBy("CLASS_NAME",_778);
},getControlsBy:function(_779,_77a){
return this.getBy("controls",_779,_77a);
},getControlsByClass:function(_77b){
return this.getControlsBy("CLASS_NAME",_77b);
},getLayer:function(id){
var _77d=null;
for(var i=0,len=this.layers.length;i<len;i++){
var _780=this.layers[i];
if(_780.id==id){
_77d=_780;
break;
}
}
return _77d;
},setLayerZIndex:function(_781,zIdx){
_781.setZIndex(this.Z_INDEX_BASE[_781.isBaseLayer?"BaseLayer":"Overlay"]+zIdx*5);
},resetLayersZIndex:function(){
for(var i=0,len=this.layers.length;i<len;i++){
var _785=this.layers[i];
this.setLayerZIndex(_785,i);
}
},addLayer:function(_786){
for(var i=0,len=this.layers.length;i<len;i++){
if(this.layers[i]==_786){
var msg=OpenLayers.i18n("layerAlreadyAdded",{"layerName":_786.name});
OpenLayers.Console.warn(msg);
return false;
}
}
if(this.allOverlays){
_786.isBaseLayer=false;
}
this.events.triggerEvent("preaddlayer",{layer:_786});
_786.div.className="olLayerDiv";
_786.div.style.overflow="";
this.setLayerZIndex(_786,this.layers.length);
if(_786.isFixed){
this.viewPortDiv.appendChild(_786.div);
}else{
this.layerContainerDiv.appendChild(_786.div);
}
this.layers.push(_786);
_786.setMap(this);
if(_786.isBaseLayer||(this.allOverlays&&!this.baseLayer)){
if(this.baseLayer==null){
this.setBaseLayer(_786);
}else{
_786.setVisibility(false);
}
}else{
_786.redraw();
}
this.events.triggerEvent("addlayer",{layer:_786});
_786.afterAdd();
},addLayers:function(_78a){
for(var i=0,len=_78a.length;i<len;i++){
this.addLayer(_78a[i]);
}
},removeLayer:function(_78d,_78e){
if(_78e==null){
_78e=true;
}
if(_78d.isFixed){
this.viewPortDiv.removeChild(_78d.div);
}else{
this.layerContainerDiv.removeChild(_78d.div);
}
OpenLayers.Util.removeItem(this.layers,_78d);
_78d.removeMap(this);
_78d.map=null;
if(this.baseLayer==_78d){
this.baseLayer=null;
if(_78e){
for(var i=0,len=this.layers.length;i<len;i++){
var _791=this.layers[i];
if(_791.isBaseLayer||this.allOverlays){
this.setBaseLayer(_791);
break;
}
}
}
}
this.resetLayersZIndex();
this.events.triggerEvent("removelayer",{layer:_78d});
},getNumLayers:function(){
return this.layers.length;
},getLayerIndex:function(_792){
return OpenLayers.Util.indexOf(this.layers,_792);
},setLayerIndex:function(_793,idx){
var base=this.getLayerIndex(_793);
if(idx<0){
idx=0;
}else{
if(idx>this.layers.length){
idx=this.layers.length;
}
}
if(base!=idx){
this.layers.splice(base,1);
this.layers.splice(idx,0,_793);
for(var i=0,len=this.layers.length;i<len;i++){
this.setLayerZIndex(this.layers[i],i);
}
this.events.triggerEvent("changelayer",{layer:_793,property:"order"});
if(this.allOverlays){
if(idx===0){
this.setBaseLayer(_793);
}else{
if(this.baseLayer!==this.layers[0]){
this.setBaseLayer(this.layers[0]);
}
}
}
}
},raiseLayer:function(_798,_799){
var idx=this.getLayerIndex(_798)+_799;
this.setLayerIndex(_798,idx);
},setBaseLayer:function(_79b){
var _79c=null;
if(this.baseLayer){
_79c=this.baseLayer.getExtent();
}
if(_79b!=this.baseLayer){
if(OpenLayers.Util.indexOf(this.layers,_79b)!=-1){
if(this.baseLayer!=null&&!this.allOverlays){
this.baseLayer.setVisibility(false);
}
this.baseLayer=_79b;
this.viewRequestID++;
if(!this.allOverlays){
this.baseLayer.visibility=true;
}
var _79d=this.getCenter();
if(_79d!=null){
var _79e=(_79c)?_79c.getCenterLonLat():_79d;
var _79f=(_79c)?this.getZoomForExtent(_79c,true):this.getZoomForResolution(this.resolution,true);
this.setCenter(_79e,_79f,false,true);
}
this.events.triggerEvent("changebaselayer",{layer:this.baseLayer});
}
}
},addControl:function(_7a0,px){
this.controls.push(_7a0);
this.addControlToMap(_7a0,px);
},addControlToMap:function(_7a2,px){
_7a2.outsideViewport=(_7a2.div!=null);
if(this.displayProjection&&!_7a2.displayProjection){
_7a2.displayProjection=this.displayProjection;
}
_7a2.setMap(this);
var div=_7a2.draw(px);
if(div){
if(!_7a2.outsideViewport){
div.style.zIndex=this.Z_INDEX_BASE["Control"]+this.controls.length;
this.viewPortDiv.appendChild(div);
}
}
},getControl:function(id){
var _7a6=null;
for(var i=0,len=this.controls.length;i<len;i++){
var _7a9=this.controls[i];
if(_7a9.id==id){
_7a6=_7a9;
break;
}
}
return _7a6;
},removeControl:function(_7aa){
if((_7aa)&&(_7aa==this.getControl(_7aa.id))){
if(_7aa.div&&(_7aa.div.parentNode==this.viewPortDiv)){
this.viewPortDiv.removeChild(_7aa.div);
}
OpenLayers.Util.removeItem(this.controls,_7aa);
}
},addPopup:function(_7ab,_7ac){
if(_7ac){
for(var i=this.popups.length-1;i>=0;--i){
this.removePopup(this.popups[i]);
}
}
_7ab.map=this;
this.popups.push(_7ab);
var _7ae=_7ab.draw();
if(_7ae){
_7ae.style.zIndex=this.Z_INDEX_BASE["Popup"]+this.popups.length;
this.layerContainerDiv.appendChild(_7ae);
}
},removePopup:function(_7af){
OpenLayers.Util.removeItem(this.popups,_7af);
if(_7af.div){
try{
this.layerContainerDiv.removeChild(_7af.div);
}
catch(e){
}
}
_7af.map=null;
},getSize:function(){
var size=null;
if(this.size!=null){
size=this.size.clone();
}
return size;
},updateSize:function(){
this.events.clearMouseCache();
var _7b1=this.getCurrentSize();
var _7b2=this.getSize();
if(_7b2==null){
this.size=_7b2=_7b1;
}
if(!_7b1.equals(_7b2)){
this.size=_7b1;
for(var i=0,len=this.layers.length;i<len;i++){
this.layers[i].onMapResize();
}
if(this.baseLayer!=null){
var _7b5=new OpenLayers.Pixel(_7b1.w/2,_7b1.h/2);
var _7b6=this.getLonLatFromViewPortPx(_7b5);
var zoom=this.getZoom();
this.zoom=null;
this.setCenter(this.getCenter(),zoom);
}
}
},getCurrentSize:function(){
var size=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);
if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){
var dim=OpenLayers.Element.getDimensions(this.div);
size.w=dim.width;
size.h=dim.height;
}
if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){
size.w=parseInt(this.div.style.width);
size.h=parseInt(this.div.style.height);
}
return size;
},calculateBounds:function(_7ba,_7bb){
var _7bc=null;
if(_7ba==null){
_7ba=this.getCenter();
}
if(_7bb==null){
_7bb=this.getResolution();
}
if((_7ba!=null)&&(_7bb!=null)){
var size=this.getSize();
var _7be=size.w*_7bb;
var _7bf=size.h*_7bb;
_7bc=new OpenLayers.Bounds(_7ba.lon-_7be/2,_7ba.lat-_7bf/2,_7ba.lon+_7be/2,_7ba.lat+_7bf/2);
}
return _7bc;
},getCenter:function(){
var _7c0=null;
if(this.center){
_7c0=this.center.clone();
}
return _7c0;
},getZoom:function(){
return this.zoom;
},pan:function(dx,dy,_7c3){
_7c3=OpenLayers.Util.applyDefaults(_7c3,{animate:true,dragging:false});
var _7c4=this.getViewPortPxFromLonLat(this.getCenter());
var _7c5=_7c4.add(dx,dy);
if(!_7c3.dragging||!_7c5.equals(_7c4)){
var _7c6=this.getLonLatFromViewPortPx(_7c5);
if(_7c3.animate){
this.panTo(_7c6);
}else{
this.setCenter(_7c6,null,_7c3.dragging);
}
}
},panTo:function(_7c7){
if(this.panMethod&&this.getExtent().scale(this.panRatio).containsLonLat(_7c7)){
if(!this.panTween){
this.panTween=new OpenLayers.Tween(this.panMethod);
}
var _7c8=this.getCenter();
if(_7c7.lon==_7c8.lon&&_7c7.lat==_7c8.lat){
return;
}
var from={lon:_7c8.lon,lat:_7c8.lat};
var to={lon:_7c7.lon,lat:_7c7.lat};
this.panTween.start(from,to,this.panDuration,{callbacks:{start:OpenLayers.Function.bind(function(_7cb){
this.events.triggerEvent("movestart");
},this),eachStep:OpenLayers.Function.bind(function(_7cc){
_7cc=new OpenLayers.LonLat(_7cc.lon,_7cc.lat);
this.moveTo(_7cc,this.zoom,{"dragging":true,"noEvent":true});
},this),done:OpenLayers.Function.bind(function(_7cd){
_7cd=new OpenLayers.LonLat(_7cd.lon,_7cd.lat);
this.moveTo(_7cd,this.zoom,{"noEvent":true});
this.events.triggerEvent("moveend");
},this)}});
}else{
this.setCenter(_7c7);
}
},setCenter:function(_7ce,zoom,_7d0,_7d1){
this.moveTo(_7ce,zoom,{"dragging":_7d0,"forceZoomChange":_7d1,"caller":"setCenter"});
},moveTo:function(_7d2,zoom,_7d4){
if(!_7d4){
_7d4={};
}
var _7d5=_7d4.dragging;
var _7d6=_7d4.forceZoomChange;
var _7d7=_7d4.noEvent;
if(this.panTween&&_7d4.caller=="setCenter"){
this.panTween.stop();
}
if(!this.center&&!this.isValidLonLat(_7d2)){
_7d2=this.maxExtent.getCenterLonLat();
}
if(this.restrictedExtent!=null){
if(_7d2==null){
_7d2=this.getCenter();
}
if(zoom==null){
zoom=this.getZoom();
}
var _7d8=this.getResolutionForZoom(zoom);
var _7d9=this.calculateBounds(_7d2,_7d8);
if(!this.restrictedExtent.containsBounds(_7d9)){
var _7da=this.restrictedExtent.getCenterLonLat();
if(_7d9.getWidth()>this.restrictedExtent.getWidth()){
_7d2=new OpenLayers.LonLat(_7da.lon,_7d2.lat);
}else{
if(_7d9.left<this.restrictedExtent.left){
_7d2=_7d2.add(this.restrictedExtent.left-_7d9.left,0);
}else{
if(_7d9.right>this.restrictedExtent.right){
_7d2=_7d2.add(this.restrictedExtent.right-_7d9.right,0);
}
}
}
if(_7d9.getHeight()>this.restrictedExtent.getHeight()){
_7d2=new OpenLayers.LonLat(_7d2.lon,_7da.lat);
}else{
if(_7d9.bottom<this.restrictedExtent.bottom){
_7d2=_7d2.add(0,this.restrictedExtent.bottom-_7d9.bottom);
}else{
if(_7d9.top>this.restrictedExtent.top){
_7d2=_7d2.add(0,this.restrictedExtent.top-_7d9.top);
}
}
}
}
}
var _7db=_7d6||((this.isValidZoomLevel(zoom))&&(zoom!=this.getZoom()));
var _7dc=(this.isValidLonLat(_7d2))&&(!_7d2.equals(this.center));
if(_7db||_7dc||!_7d5){
if(!this.dragging&&!_7d7){
this.events.triggerEvent("movestart");
}
if(_7dc){
if((!_7db)&&(this.center)){
this.centerLayerContainer(_7d2);
}
this.center=_7d2.clone();
}
if((_7db)||(this.layerContainerOrigin==null)){
this.layerContainerOrigin=this.center.clone();
this.layerContainerDiv.style.left="0px";
this.layerContainerDiv.style.top="0px";
}
if(_7db){
this.zoom=zoom;
this.resolution=this.getResolutionForZoom(zoom);
this.viewRequestID++;
}
var _7dd=this.getExtent();
if(this.baseLayer.visibility){
this.baseLayer.moveTo(_7dd,_7db,_7d5);
if(_7d5){
this.baseLayer.events.triggerEvent("move");
}else{
this.baseLayer.events.triggerEvent("moveend",{"zoomChanged":_7db});
}
}
_7dd=this.baseLayer.getExtent();
for(var i=0,len=this.layers.length;i<len;i++){
var _7e0=this.layers[i];
if(_7e0!==this.baseLayer&&!_7e0.isBaseLayer){
var _7e1=_7e0.calculateInRange();
if(_7e0.inRange!=_7e1){
_7e0.inRange=_7e1;
if(!_7e1){
_7e0.display(false);
}
this.events.triggerEvent("changelayer",{layer:_7e0,property:"visibility"});
}
if(_7e1&&_7e0.visibility){
_7e0.moveTo(_7dd,_7db,_7d5);
if(_7d5){
_7e0.events.triggerEvent("move");
}else{
_7e0.events.triggerEvent("moveend",{"zoomChanged":_7db});
}
}
}
}
if(_7db){
for(var i=0,len=this.popups.length;i<len;i++){
this.popups[i].updatePosition();
}
}
this.events.triggerEvent("move");
if(_7db){
this.events.triggerEvent("zoomend");
}
}
if(!_7d5&&!_7d7){
this.events.triggerEvent("moveend");
}
this.dragging=!!_7d5;
},centerLayerContainer:function(_7e2){
var _7e3=this.getViewPortPxFromLonLat(this.layerContainerOrigin);
var _7e4=this.getViewPortPxFromLonLat(_7e2);
if((_7e3!=null)&&(_7e4!=null)){
this.layerContainerDiv.style.left=Math.round(_7e3.x-_7e4.x)+"px";
this.layerContainerDiv.style.top=Math.round(_7e3.y-_7e4.y)+"px";
}
},isValidZoomLevel:function(_7e5){
return ((_7e5!=null)&&(_7e5>=0)&&(_7e5<this.getNumZoomLevels()));
},isValidLonLat:function(_7e6){
var _7e7=false;
if(_7e6!=null){
var _7e8=this.getMaxExtent();
_7e7=_7e8.containsLonLat(_7e6);
}
return _7e7;
},getProjection:function(){
var _7e9=this.getProjectionObject();
return _7e9?_7e9.getCode():null;
},getProjectionObject:function(){
var _7ea=null;
if(this.baseLayer!=null){
_7ea=this.baseLayer.projection;
}
return _7ea;
},getMaxResolution:function(){
var _7eb=null;
if(this.baseLayer!=null){
_7eb=this.baseLayer.maxResolution;
}
return _7eb;
},getMaxExtent:function(_7ec){
var _7ed=null;
if(_7ec&&_7ec.restricted&&this.restrictedExtent){
_7ed=this.restrictedExtent;
}else{
if(this.baseLayer!=null){
_7ed=this.baseLayer.maxExtent;
}
}
return _7ed;
},getNumZoomLevels:function(){
var _7ee=null;
if(this.baseLayer!=null){
_7ee=this.baseLayer.numZoomLevels;
}
return _7ee;
},getExtent:function(){
var _7ef=null;
if(this.baseLayer!=null){
_7ef=this.baseLayer.getExtent();
}
return _7ef;
},getResolution:function(){
var _7f0=null;
if(this.baseLayer!=null){
_7f0=this.baseLayer.getResolution();
}
return _7f0;
},getUnits:function(){
var _7f1=null;
if(this.baseLayer!=null){
_7f1=this.baseLayer.units;
}
return _7f1;
},getScale:function(){
var _7f2=null;
if(this.baseLayer!=null){
var res=this.getResolution();
var _7f4=this.baseLayer.units;
_7f2=OpenLayers.Util.getScaleFromResolution(res,_7f4);
}
return _7f2;
},getZoomForExtent:function(_7f5,_7f6){
var zoom=null;
if(this.baseLayer!=null){
zoom=this.baseLayer.getZoomForExtent(_7f5,_7f6);
}
return zoom;
},getResolutionForZoom:function(zoom){
var _7f9=null;
if(this.baseLayer){
_7f9=this.baseLayer.getResolutionForZoom(zoom);
}
return _7f9;
},getZoomForResolution:function(_7fa,_7fb){
var zoom=null;
if(this.baseLayer!=null){
zoom=this.baseLayer.getZoomForResolution(_7fa,_7fb);
}
return zoom;
},zoomTo:function(zoom){
if(this.isValidZoomLevel(zoom)){
this.setCenter(null,zoom);
}
},zoomIn:function(){
this.zoomTo(this.getZoom()+1);
},zoomOut:function(){
this.zoomTo(this.getZoom()-1);
},zoomToExtent:function(_7fe,_7ff){
var _800=_7fe.getCenterLonLat();
if(this.baseLayer.wrapDateLine){
var _801=this.getMaxExtent();
_7fe=_7fe.clone();
while(_7fe.right<_7fe.left){
_7fe.right+=_801.getWidth();
}
_800=_7fe.getCenterLonLat().wrapDateLine(_801);
}
this.setCenter(_800,this.getZoomForExtent(_7fe,_7ff));
},zoomToMaxExtent:function(_802){
var _803=(_802)?_802.restricted:true;
var _804=this.getMaxExtent({"restricted":_803});
this.zoomToExtent(_804);
},zoomToScale:function(_805,_806){
var res=OpenLayers.Util.getResolutionFromScale(_805,this.baseLayer.units);
var size=this.getSize();
var _809=size.w*res;
var _80a=size.h*res;
var _80b=this.getCenter();
var _80c=new OpenLayers.Bounds(_80b.lon-_809/2,_80b.lat-_80a/2,_80b.lon+_809/2,_80b.lat+_80a/2);
this.zoomToExtent(_80c,_806);
},getLonLatFromViewPortPx:function(_80d){
var _80e=null;
if(this.baseLayer!=null){
_80e=this.baseLayer.getLonLatFromViewPortPx(_80d);
}
return _80e;
},getViewPortPxFromLonLat:function(_80f){
var px=null;
if(this.baseLayer!=null){
px=this.baseLayer.getViewPortPxFromLonLat(_80f);
}
return px;
},getLonLatFromPixel:function(px){
return this.getLonLatFromViewPortPx(px);
},getPixelFromLonLat:function(_812){
var px=this.getViewPortPxFromLonLat(_812);
px.x=Math.round(px.x);
px.y=Math.round(px.y);
return px;
},getViewPortPxFromLayerPx:function(_814){
var _815=null;
if(_814!=null){
var dX=parseInt(this.layerContainerDiv.style.left);
var dY=parseInt(this.layerContainerDiv.style.top);
_815=_814.add(dX,dY);
}
return _815;
},getLayerPxFromViewPortPx:function(_818){
var _819=null;
if(_818!=null){
var dX=-parseInt(this.layerContainerDiv.style.left);
var dY=-parseInt(this.layerContainerDiv.style.top);
_819=_818.add(dX,dY);
if(isNaN(_819.x)||isNaN(_819.y)){
_819=null;
}
}
return _819;
},getLonLatFromLayerPx:function(px){
px=this.getViewPortPxFromLayerPx(px);
return this.getLonLatFromViewPortPx(px);
},getLayerPxFromLonLat:function(_81d){
var px=this.getPixelFromLonLat(_81d);
return this.getLayerPxFromViewPortPx(px);
},CLASS_NAME:"OpenLayers.Map"});
OpenLayers.Map.TILE_WIDTH=256;
OpenLayers.Map.TILE_HEIGHT=256;
OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(_81f,icon){
this.lonlat=_81f;
var _821=(icon)?icon:OpenLayers.Marker.defaultIcon();
if(this.icon==null){
this.icon=_821;
}else{
this.icon.url=_821.url;
this.icon.size=_821.size;
this.icon.offset=_821.offset;
this.icon.calculateOffset=_821.calculateOffset;
}
this.events=new OpenLayers.Events(this,this.icon.imageDiv,null);
},destroy:function(){
this.erase();
this.map=null;
this.events.destroy();
this.events=null;
if(this.icon!=null){
this.icon.destroy();
this.icon=null;
}
},draw:function(px){
return this.icon.draw(px);
},erase:function(){
if(this.icon!=null){
this.icon.erase();
}
},moveTo:function(px){
if((px!=null)&&(this.icon!=null)){
this.icon.moveTo(px);
}
this.lonlat=this.map.getLonLatFromLayerPx(px);
},isDrawn:function(){
var _824=(this.icon&&this.icon.isDrawn());
return _824;
},onScreen:function(){
var _825=false;
if(this.map){
var _826=this.map.getExtent();
_825=_826.containsLonLat(this.lonlat);
}
return _825;
},inflate:function(_827){
if(this.icon){
var _828=new OpenLayers.Size(this.icon.size.w*_827,this.icon.size.h*_827);
this.icon.setSize(_828);
}
},setOpacity:function(_829){
this.icon.setOpacity(_829);
},setUrl:function(url){
this.icon.setUrl(url);
},display:function(_82b){
this.icon.display(_82b);
},CLASS_NAME:"OpenLayers.Marker"});
OpenLayers.Marker.defaultIcon=function(){
var url=OpenLayers.Util.getImagesLocation()+"marker.png";
var size=new OpenLayers.Size(21,25);
var _82e=function(size){
return new OpenLayers.Pixel(-(size.w/2),-size.h);
};
return new OpenLayers.Icon(url,size,null,_82e);
};
OpenLayers.Popup.FramedCloud=OpenLayers.Class(OpenLayers.Popup.Framed,{contentDisplayClass:"olFramedCloudPopupContent",autoSize:true,panMapIfOutOfView:true,imageSize:new OpenLayers.Size(676,736),isAlphaImage:false,fixedRelativePosition:false,positionBlocks:{"tl":{"offset":new OpenLayers.Pixel(44,0),"padding":new OpenLayers.Bounds(8,40,8,9),"blocks":[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size("auto",19),anchor:new OpenLayers.Bounds(0,32,22,null),position:new OpenLayers.Pixel(0,-631)},{size:new OpenLayers.Size(22,18),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-638,-632)},{size:new OpenLayers.Size(81,35),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(0,-688)}]},"tr":{"offset":new OpenLayers.Pixel(-45,0),"padding":new OpenLayers.Bounds(8,40,8,9),"blocks":[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,51,22,0),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,50,0,0),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size("auto",19),anchor:new OpenLayers.Bounds(0,32,22,null),position:new OpenLayers.Pixel(0,-631)},{size:new OpenLayers.Size(22,19),anchor:new OpenLayers.Bounds(null,32,0,null),position:new OpenLayers.Pixel(-638,-631)},{size:new OpenLayers.Size(81,35),anchor:new OpenLayers.Bounds(0,0,null,null),position:new OpenLayers.Pixel(-215,-687)}]},"bl":{"offset":new OpenLayers.Pixel(45,0),"padding":new OpenLayers.Bounds(8,9,8,40),"blocks":[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size("auto",21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,33),anchor:new OpenLayers.Bounds(null,null,0,0),position:new OpenLayers.Pixel(-101,-674)}]},"br":{"offset":new OpenLayers.Pixel(-44,0),"padding":new OpenLayers.Bounds(8,9,8,40),"blocks":[{size:new OpenLayers.Size("auto","auto"),anchor:new OpenLayers.Bounds(0,21,22,32),position:new OpenLayers.Pixel(0,0)},{size:new OpenLayers.Size(22,"auto"),anchor:new OpenLayers.Bounds(null,21,0,32),position:new OpenLayers.Pixel(-638,0)},{size:new OpenLayers.Size("auto",21),anchor:new OpenLayers.Bounds(0,0,22,null),position:new OpenLayers.Pixel(0,-629)},{size:new OpenLayers.Size(22,21),anchor:new OpenLayers.Bounds(null,0,0,null),position:new OpenLayers.Pixel(-638,-629)},{size:new OpenLayers.Size(81,33),anchor:new OpenLayers.Bounds(0,null,null,0),position:new OpenLayers.Pixel(-311,-674)}]}},minSize:new OpenLayers.Size(105,10),maxSize:new OpenLayers.Size(600,660),initialize:function(id,_831,_832,_833,_834,_835,_836){
this.imageSrc=OpenLayers.Util.getImagesLocation()+"cloud-popup-relative.png";
OpenLayers.Popup.Framed.prototype.initialize.apply(this,arguments);
this.contentDiv.className=this.contentDisplayClass;
},destroy:function(){
OpenLayers.Popup.Framed.prototype.destroy.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Popup.FramedCloud"});
OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:true,user:undefined,password:undefined,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){
},success:null,failure:null,scope:null},events:new OpenLayers.Events(this,null,["complete","success","failure"]),issue:function(_837){
var _838=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});
_837=OpenLayers.Util.applyDefaults(_837,_838);
var _839=new OpenLayers.Request.XMLHttpRequest();
var url=_837.url;
if(_837.params){
var _83b=OpenLayers.Util.getParameterString(_837.params);
if(_83b.length>0){
var _83c=(url.indexOf("?")>-1)?"&":"?";
url+=_83c+_83b;
}
}
if(_837.proxy&&(url.indexOf("http")==0)){
url=_837.proxy+encodeURIComponent(url);
}
_839.open(_837.method,url,_837.async,_837.user,_837.password);
for(var _83d in _837.headers){
_839.setRequestHeader(_83d,_837.headers[_83d]);
}
var _83e=(_837.scope)?OpenLayers.Function.bind(_837.callback,_837.scope):_837.callback;
var _83f;
if(_837.success){
_83f=(_837.scope)?OpenLayers.Function.bind(_837.success,_837.scope):_837.success;
}
var _840;
if(_837.failure){
_840=(_837.scope)?OpenLayers.Function.bind(_837.failure,_837.scope):_837.failure;
}
var _841=this.events;
_839.onreadystatechange=function(){
if(_839.readyState==OpenLayers.Request.XMLHttpRequest.DONE){
var _842=_841.triggerEvent("complete",{request:_839,config:_837,requestUrl:url});
if(_842!==false){
_83e(_839);
if(!_839.status||(_839.status>=200&&_839.status<300)){
_841.triggerEvent("success",{request:_839,config:_837,requestUrl:url});
if(_83f){
_83f(_839);
}
}
if(_839.status&&(_839.status<200||_839.status>=300)){
_841.triggerEvent("failure",{request:_839,config:_837,requestUrl:url});
if(_840){
_840(_839);
}
}
}
}
};
if(_837.async===false){
_839.send(_837.data);
}else{
window.setTimeout(function(){
_839.send(_837.data);
},0);
}
return _839;
},GET:function(_843){
_843=OpenLayers.Util.extend(_843,{method:"GET"});
return OpenLayers.Request.issue(_843);
},POST:function(_844){
_844=OpenLayers.Util.extend(_844,{method:"POST"});
_844.headers=_844.headers?_844.headers:{};
if(!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(_844.headers))){
_844.headers["Content-Type"]="application/xml";
}
return OpenLayers.Request.issue(_844);
},PUT:function(_845){
_845=OpenLayers.Util.extend(_845,{method:"PUT"});
_845.headers=_845.headers?_845.headers:{};
if(!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(_845.headers))){
_845.headers["Content-Type"]="application/xml";
}
return OpenLayers.Request.issue(_845);
},DELETE:function(_846){
_846=OpenLayers.Util.extend(_846,{method:"DELETE"});
return OpenLayers.Request.issue(_846);
},HEAD:function(_847){
_847=OpenLayers.Util.extend(_847,{method:"HEAD"});
return OpenLayers.Request.issue(_847);
},OPTIONS:function(_848){
_848=OpenLayers.Util.extend(_848,{method:"OPTIONS"});
return OpenLayers.Request.issue(_848);
}};
OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,layerAlphaHack:null,isBackBuffer:false,lastRatio:1,isFirstDraw:true,backBufferTile:null,initialize:function(_849,_84a,_84b,url,size){
OpenLayers.Tile.prototype.initialize.apply(this,arguments);
this.url=url;
this.frame=document.createElement("div");
this.frame.style.overflow="hidden";
this.frame.style.position="absolute";
this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();
},destroy:function(){
if(this.imgDiv!=null){
if(this.layerAlphaHack){
OpenLayers.Event.stopObservingElement(this.imgDiv.childNodes[0].id);
}
OpenLayers.Event.stopObservingElement(this.imgDiv.id);
if(this.imgDiv.parentNode==this.frame){
this.frame.removeChild(this.imgDiv);
this.imgDiv.map=null;
}
this.imgDiv.urls=null;
this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";
}
this.imgDiv=null;
if((this.frame!=null)&&(this.frame.parentNode==this.layer.div)){
this.layer.div.removeChild(this.frame);
}
this.frame=null;
if(this.backBufferTile){
this.backBufferTile.destroy();
this.backBufferTile=null;
}
this.layer.events.unregister("loadend",this,this.resetBackBuffer);
OpenLayers.Tile.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Tile.Image(this.layer,this.position,this.bounds,this.url,this.size);
}
obj=OpenLayers.Tile.prototype.clone.apply(this,[obj]);
obj.imgDiv=null;
return obj;
},draw:function(){
if(this.layer!=this.layer.map.baseLayer&&this.layer.reproject){
this.bounds=this.getBoundsFromBaseLayer(this.position);
}
var _84f=OpenLayers.Tile.prototype.draw.apply(this,arguments);
if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){
if(_84f){
if(!this.backBufferTile){
this.backBufferTile=this.clone();
this.backBufferTile.hide();
this.backBufferTile.isBackBuffer=true;
this.events.register("loadend",this,this.resetBackBuffer);
this.layer.events.register("loadend",this,this.resetBackBuffer);
}
this.startTransition();
}else{
if(this.backBufferTile){
this.backBufferTile.clear();
}
}
}else{
if(_84f&&this.isFirstDraw){
this.events.register("loadend",this,this.showTile);
this.isFirstDraw=false;
}
}
if(!_84f){
return false;
}
if(this.isLoading){
this.events.triggerEvent("reload");
}else{
this.isLoading=true;
this.events.triggerEvent("loadstart");
}
return this.renderTile();
},resetBackBuffer:function(){
this.showTile();
if(this.backBufferTile&&(this.isFirstDraw||!this.layer.numLoadingTiles)){
this.isFirstDraw=false;
var _850=this.layer.maxExtent;
var _851=(_850&&this.bounds.intersectsBounds(_850,false));
if(_851){
this.backBufferTile.position=this.position;
this.backBufferTile.bounds=this.bounds;
this.backBufferTile.size=this.size;
this.backBufferTile.imageSize=this.layer.imageSize||this.size;
this.backBufferTile.imageOffset=this.layer.imageOffset;
this.backBufferTile.resolution=this.layer.getResolution();
this.backBufferTile.renderTile();
}
this.backBufferTile.hide();
}
},renderTile:function(){
if(this.imgDiv==null){
this.initImgDiv();
}
this.imgDiv.viewRequestID=this.layer.map.viewRequestID;
if(this.layer.async){
this.layer.getURLasync(this.bounds,this,"url",this.positionImage);
}else{
if(this.layer.url instanceof Array){
this.imgDiv.urls=this.layer.url.slice();
}
this.url=this.layer.getURL(this.bounds);
this.positionImage();
}
return true;
},positionImage:function(){
if(this.layer==null){
return;
}
OpenLayers.Util.modifyDOMElement(this.frame,null,this.position,this.size);
var _852=this.layer.getImageSize();
if(this.layerAlphaHack){
OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv,null,null,_852,this.url);
}else{
OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,_852);
this.imgDiv.src=this.url;
}
},clear:function(){
if(this.imgDiv){
this.hide();
if(OpenLayers.Tile.Image.useBlankTile){
this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";
}
}
},initImgDiv:function(){
var _853=this.layer.imageOffset;
var size=this.layer.getImageSize();
if(this.layerAlphaHack){
this.imgDiv=OpenLayers.Util.createAlphaImageDiv(null,_853,size,null,"relative",null,null,null,true);
}else{
this.imgDiv=OpenLayers.Util.createImage(null,_853,size,null,"relative",null,null,true);
}
this.imgDiv.className="olTileImage";
this.frame.style.zIndex=this.isBackBuffer?0:1;
this.frame.appendChild(this.imgDiv);
this.layer.div.appendChild(this.frame);
if(this.layer.opacity!=null){
OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,null,null,null,null,this.layer.opacity);
}
this.imgDiv.map=this.layer.map;
var _855=function(){
if(this.isLoading){
this.isLoading=false;
this.events.triggerEvent("loadend");
}
};
if(this.layerAlphaHack){
OpenLayers.Event.observe(this.imgDiv.childNodes[0],"load",OpenLayers.Function.bind(_855,this));
}else{
OpenLayers.Event.observe(this.imgDiv,"load",OpenLayers.Function.bind(_855,this));
}
var _856=function(){
if(this.imgDiv._attempts>OpenLayers.IMAGE_RELOAD_ATTEMPTS){
_855.call(this);
}
};
OpenLayers.Event.observe(this.imgDiv,"error",OpenLayers.Function.bind(_856,this));
},checkImgURL:function(){
if(this.layer){
var _857=this.layerAlphaHack?this.imgDiv.firstChild.src:this.imgDiv.src;
if(!OpenLayers.Util.isEquivalentUrl(_857,this.url)){
this.hide();
}
}
},startTransition:function(){
if(!this.backBufferTile||!this.backBufferTile.imgDiv){
return;
}
var _858=1;
if(this.backBufferTile.resolution){
_858=this.backBufferTile.resolution/this.layer.getResolution();
}
if(_858!=this.lastRatio){
if(this.layer.transitionEffect=="resize"){
var _859=new OpenLayers.LonLat(this.backBufferTile.bounds.left,this.backBufferTile.bounds.top);
var size=new OpenLayers.Size(this.backBufferTile.size.w*_858,this.backBufferTile.size.h*_858);
var px=this.layer.map.getLayerPxFromLonLat(_859);
OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame,null,px,size);
var _85c=this.backBufferTile.imageSize;
_85c=new OpenLayers.Size(_85c.w*_858,_85c.h*_858);
var _85d=this.backBufferTile.imageOffset;
if(_85d){
_85d=new OpenLayers.Pixel(_85d.x*_858,_85d.y*_858);
}
OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv,null,_85d,_85c);
this.backBufferTile.show();
}
}else{
if(this.layer.singleTile){
this.backBufferTile.show();
}else{
this.backBufferTile.hide();
}
}
this.lastRatio=_858;
},show:function(){
this.frame.style.display="";
if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){
if(navigator.userAgent.toLowerCase().indexOf("gecko")!=-1){
this.frame.scrollLeft=this.frame.scrollLeft;
}
}
},hide:function(){
this.frame.style.display="none";
},CLASS_NAME:"OpenLayers.Tile.Image"});
OpenLayers.Tile.Image.useBlankTile=(OpenLayers.Util.getBrowserName()=="safari"||OpenLayers.Util.getBrowserName()=="opera");
OpenLayers.Control.OverviewMap=OpenLayers.Class(OpenLayers.Control,{element:null,ovmap:null,size:new OpenLayers.Size(180,90),layers:null,minRectSize:15,minRectDisplayClass:"RectReplacement",minRatio:8,maxRatio:32,mapOptions:null,autoPan:false,handlers:null,resolutionFactor:1,initialize:function(_85e){
this.layers=[];
this.handlers={};
OpenLayers.Control.prototype.initialize.apply(this,[_85e]);
},destroy:function(){
if(!this.mapDiv){
return;
}
this.handlers.click.destroy();
this.mapDiv.removeChild(this.extentRectangle);
this.extentRectangle=null;
this.rectEvents.destroy();
this.rectEvents=null;
this.ovmap.destroy();
this.ovmap=null;
this.element.removeChild(this.mapDiv);
this.mapDiv=null;
this.div.removeChild(this.element);
this.element=null;
if(this.maximizeDiv){
OpenLayers.Event.stopObservingElement(this.maximizeDiv);
this.div.removeChild(this.maximizeDiv);
this.maximizeDiv=null;
}
if(this.minimizeDiv){
OpenLayers.Event.stopObservingElement(this.minimizeDiv);
this.div.removeChild(this.minimizeDiv);
this.minimizeDiv=null;
}
this.map.events.un({"moveend":this.update,"changebaselayer":this.baseLayerDraw,scope:this});
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},draw:function(){
OpenLayers.Control.prototype.draw.apply(this,arguments);
if(!(this.layers.length>0)){
if(this.map.baseLayer){
var _85f=this.map.baseLayer.clone();
this.layers=[_85f];
}else{
this.map.events.register("changebaselayer",this,this.baseLayerDraw);
return this.div;
}
}
this.element=document.createElement("div");
this.element.className=this.displayClass+"Element";
this.element.style.display="none";
this.mapDiv=document.createElement("div");
this.mapDiv.style.width=this.size.w+"px";
this.mapDiv.style.height=this.size.h+"px";
this.mapDiv.style.position="relative";
this.mapDiv.style.overflow="hidden";
this.mapDiv.id=OpenLayers.Util.createUniqueID("overviewMap");
this.extentRectangle=document.createElement("div");
this.extentRectangle.style.position="absolute";
this.extentRectangle.style.zIndex=1000;
this.extentRectangle.className=this.displayClass+"ExtentRectangle";
this.mapDiv.appendChild(this.extentRectangle);
this.element.appendChild(this.mapDiv);
this.div.appendChild(this.element);
if(!this.outsideViewport){
this.div.className+=" "+this.displayClass+"Container";
var _860=OpenLayers.Util.getImagesLocation();
var img=_860+"layer-switcher-maximize.png";
this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv(this.displayClass+"MaximizeButton",null,new OpenLayers.Size(18,18),img,"absolute");
this.maximizeDiv.style.display="none";
this.maximizeDiv.className=this.displayClass+"MaximizeButton";
OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));
this.div.appendChild(this.maximizeDiv);
var img=_860+"layer-switcher-minimize.png";
this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_minimizeDiv",null,new OpenLayers.Size(18,18),img,"absolute");
this.minimizeDiv.style.display="none";
this.minimizeDiv.className=this.displayClass+"MinimizeButton";
OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));
this.div.appendChild(this.minimizeDiv);
var _862=["dblclick","mousedown"];
for(var i=0,len=_862.length;i<len;i++){
OpenLayers.Event.observe(this.maximizeDiv,_862[i],OpenLayers.Event.stop);
OpenLayers.Event.observe(this.minimizeDiv,_862[i],OpenLayers.Event.stop);
}
this.minimizeControl();
}else{
this.element.style.display="";
}
if(this.map.getExtent()){
this.update();
}
this.map.events.register("moveend",this,this.update);
return this.div;
},baseLayerDraw:function(){
this.draw();
this.map.events.unregister("changebaselayer",this,this.baseLayerDraw);
},rectDrag:function(px){
var _866=this.handlers.drag.last.x-px.x;
var _867=this.handlers.drag.last.y-px.y;
if(_866!=0||_867!=0){
var _868=this.rectPxBounds.top;
var _869=this.rectPxBounds.left;
var _86a=Math.abs(this.rectPxBounds.getHeight());
var _86b=this.rectPxBounds.getWidth();
var _86c=Math.max(0,(_868-_867));
_86c=Math.min(_86c,this.ovmap.size.h-this.hComp-_86a);
var _86d=Math.max(0,(_869-_866));
_86d=Math.min(_86d,this.ovmap.size.w-this.wComp-_86b);
this.setRectPxBounds(new OpenLayers.Bounds(_86d,_86c+_86a,_86d+_86b,_86c));
}
},mapDivClick:function(evt){
var _86f=this.rectPxBounds.getCenterPixel();
var _870=evt.xy.x-_86f.x;
var _871=evt.xy.y-_86f.y;
var top=this.rectPxBounds.top;
var left=this.rectPxBounds.left;
var _874=Math.abs(this.rectPxBounds.getHeight());
var _875=this.rectPxBounds.getWidth();
var _876=Math.max(0,(top+_871));
_876=Math.min(_876,this.ovmap.size.h-_874);
var _877=Math.max(0,(left+_870));
_877=Math.min(_877,this.ovmap.size.w-_875);
this.setRectPxBounds(new OpenLayers.Bounds(_877,_876+_874,_877+_875,_876));
this.updateMapToRect();
},maximizeControl:function(e){
this.element.style.display="";
this.showToggle(false);
if(e!=null){
OpenLayers.Event.stop(e);
}
},minimizeControl:function(e){
this.element.style.display="none";
this.showToggle(true);
if(e!=null){
OpenLayers.Event.stop(e);
}
},showToggle:function(_87a){
this.maximizeDiv.style.display=_87a?"":"none";
this.minimizeDiv.style.display=_87a?"none":"";
},update:function(){
if(this.ovmap==null){
this.createMap();
}
if(this.autoPan||!this.isSuitableOverview()){
this.updateOverview();
}
this.updateRectToMap();
},isSuitableOverview:function(){
var _87b=this.map.getExtent();
var _87c=this.map.maxExtent;
var _87d=new OpenLayers.Bounds(Math.max(_87b.left,_87c.left),Math.max(_87b.bottom,_87c.bottom),Math.min(_87b.right,_87c.right),Math.min(_87b.top,_87c.top));
if(this.ovmap.getProjection()!=this.map.getProjection()){
_87d=_87d.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());
}
var _87e=this.ovmap.getResolution()/this.map.getResolution();
return ((_87e>this.minRatio)&&(_87e<=this.maxRatio)&&(this.ovmap.getExtent().containsBounds(_87d)));
},updateOverview:function(){
var _87f=this.map.getResolution();
var _880=this.ovmap.getResolution();
var _881=_880/_87f;
if(_881>this.maxRatio){
_880=this.minRatio*_87f;
}else{
if(_881<=this.minRatio){
_880=this.maxRatio*_87f;
}
}
var _882;
if(this.ovmap.getProjection()!=this.map.getProjection()){
_882=this.map.center.clone();
_882.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());
}else{
_882=this.map.center;
}
this.ovmap.setCenter(_882,this.ovmap.getZoomForResolution(_880*this.resolutionFactor));
this.updateRectToMap();
},createMap:function(){
var _883=OpenLayers.Util.extend({controls:[],maxResolution:"auto",fallThrough:false},this.mapOptions);
this.ovmap=new OpenLayers.Map(this.mapDiv,_883);
OpenLayers.Event.stopObserving(window,"unload",this.ovmap.unloadDestroy);
this.ovmap.addLayers(this.layers);
this.ovmap.zoomToMaxExtent();
this.wComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-right-width"));
this.wComp=(this.wComp)?this.wComp:2;
this.hComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.extentRectangle,"border-bottom-width"));
this.hComp=(this.hComp)?this.hComp:2;
this.handlers.drag=new OpenLayers.Handler.Drag(this,{move:this.rectDrag,done:this.updateMapToRect},{map:this.ovmap});
this.handlers.click=new OpenLayers.Handler.Click(this,{"click":this.mapDivClick},{"single":true,"double":false,"stopSingle":true,"stopDouble":true,"pixelTolerance":1,map:this.ovmap});
this.handlers.click.activate();
this.rectEvents=new OpenLayers.Events(this,this.extentRectangle,null,true);
this.rectEvents.register("mouseover",this,function(e){
if(!this.handlers.drag.active&&!this.map.dragging){
this.handlers.drag.activate();
}
});
this.rectEvents.register("mouseout",this,function(e){
if(!this.handlers.drag.dragging){
this.handlers.drag.deactivate();
}
});
if(this.ovmap.getProjection()!=this.map.getProjection()){
var _886=this.map.getProjectionObject().getUnits()||this.map.units||this.map.baseLayer.units;
var _887=this.ovmap.getProjectionObject().getUnits()||this.ovmap.units||this.ovmap.baseLayer.units;
this.resolutionFactor=_886&&_887?OpenLayers.INCHES_PER_UNIT[_886]/OpenLayers.INCHES_PER_UNIT[_887]:1;
}
},updateRectToMap:function(){
var _888;
if(this.ovmap.getProjection()!=this.map.getProjection()){
_888=this.map.getExtent().transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());
}else{
_888=this.map.getExtent();
}
var _889=this.getRectBoundsFromMapBounds(_888);
if(_889){
this.setRectPxBounds(_889);
}
},updateMapToRect:function(){
var _88a=this.getMapBoundsFromRectBounds(this.rectPxBounds);
if(this.ovmap.getProjection()!=this.map.getProjection()){
_88a=_88a.transform(this.ovmap.getProjectionObject(),this.map.getProjectionObject());
}
this.map.panTo(_88a.getCenterLonLat());
},setRectPxBounds:function(_88b){
var top=Math.max(_88b.top,0);
var left=Math.max(_88b.left,0);
var _88e=Math.min(_88b.top+Math.abs(_88b.getHeight()),this.ovmap.size.h-this.hComp);
var _88f=Math.min(_88b.left+_88b.getWidth(),this.ovmap.size.w-this.wComp);
var _890=Math.max(_88f-left,0);
var _891=Math.max(_88e-top,0);
if(_890<this.minRectSize||_891<this.minRectSize){
this.extentRectangle.className=this.displayClass+this.minRectDisplayClass;
var _892=left+(_890/2)-(this.minRectSize/2);
var rTop=top+(_891/2)-(this.minRectSize/2);
this.extentRectangle.style.top=Math.round(rTop)+"px";
this.extentRectangle.style.left=Math.round(_892)+"px";
this.extentRectangle.style.height=this.minRectSize+"px";
this.extentRectangle.style.width=this.minRectSize+"px";
}else{
this.extentRectangle.className=this.displayClass+"ExtentRectangle";
this.extentRectangle.style.top=Math.round(top)+"px";
this.extentRectangle.style.left=Math.round(left)+"px";
this.extentRectangle.style.height=Math.round(_891)+"px";
this.extentRectangle.style.width=Math.round(_890)+"px";
}
this.rectPxBounds=new OpenLayers.Bounds(Math.round(left),Math.round(_88e),Math.round(_88f),Math.round(top));
},getRectBoundsFromMapBounds:function(_894){
var _895=new OpenLayers.LonLat(_894.left,_894.bottom);
var _896=new OpenLayers.LonLat(_894.right,_894.top);
var _897=this.getOverviewPxFromLonLat(_895);
var _898=this.getOverviewPxFromLonLat(_896);
var _899=null;
if(_897&&_898){
_899=new OpenLayers.Bounds(_897.x,_897.y,_898.x,_898.y);
}
return _899;
},getMapBoundsFromRectBounds:function(_89a){
var _89b=new OpenLayers.Pixel(_89a.left,_89a.bottom);
var _89c=new OpenLayers.Pixel(_89a.right,_89a.top);
var _89d=this.getLonLatFromOverviewPx(_89b);
var _89e=this.getLonLatFromOverviewPx(_89c);
return new OpenLayers.Bounds(_89d.lon,_89d.lat,_89e.lon,_89e.lat);
},getLonLatFromOverviewPx:function(_89f){
var size=this.ovmap.size;
var res=this.ovmap.getResolution();
var _8a2=this.ovmap.getExtent().getCenterLonLat();
var _8a3=_89f.x-(size.w/2);
var _8a4=_89f.y-(size.h/2);
return new OpenLayers.LonLat(_8a2.lon+_8a3*res,_8a2.lat-_8a4*res);
},getOverviewPxFromLonLat:function(_8a5){
var res=this.ovmap.getResolution();
var _8a7=this.ovmap.getExtent();
var px=null;
if(_8a7){
px=new OpenLayers.Pixel(Math.round(1/res*(_8a5.lon-_8a7.left)),Math.round(1/res*(_8a7.top-_8a5.lat)));
}
return px;
},CLASS_NAME:"OpenLayers.Control.OverviewMap"});
OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:OpenLayers.Popup.AnchoredBubble,popup:null,initialize:function(_8a9,_8aa,data){
this.layer=_8a9;
this.lonlat=_8aa;
this.data=(data!=null)?data:{};
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
},destroy:function(){
if((this.layer!=null)&&(this.layer.map!=null)){
if(this.popup!=null){
this.layer.map.removePopup(this.popup);
}
}
this.layer=null;
this.id=null;
this.lonlat=null;
this.data=null;
if(this.marker!=null){
this.destroyMarker(this.marker);
this.marker=null;
}
if(this.popup!=null){
this.destroyPopup(this.popup);
this.popup=null;
}
},onScreen:function(){
var _8ac=false;
if((this.layer!=null)&&(this.layer.map!=null)){
var _8ad=this.layer.map.getExtent();
_8ac=_8ad.containsLonLat(this.lonlat);
}
return _8ac;
},createMarker:function(){
if(this.lonlat!=null){
this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon);
}
return this.marker;
},destroyMarker:function(){
this.marker.destroy();
},createPopup:function(_8ae){
if(this.lonlat!=null){
var id=this.id+"_popup";
var _8b0=(this.marker)?this.marker.icon:null;
if(!this.popup){
this.popup=new this.popupClass(id,this.lonlat,this.data.popupSize,this.data.popupContentHTML,_8b0,_8ae);
}
if(this.data.overflow!=null){
this.popup.contentDiv.style.overflow=this.data.overflow;
}
this.popup.feature=this;
}
return this.popup;
},destroyPopup:function(){
if(this.popup){
this.popup.feature=null;
this.popup.destroy();
this.popup=null;
}
},CLASS_NAME:"OpenLayers.Feature"});
OpenLayers.Format.WFSCapabilities=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.1.0",version:null,initialize:function(_8b1){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_8b1]);
this.options=_8b1;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _8b4=this.version;
if(!_8b4){
_8b4=root.getAttribute("version");
if(!_8b4){
_8b4=this.defaultVersion;
}
}
var _8b5=OpenLayers.Format.WFSCapabilities["v"+_8b4.replace(/\./g,"_")];
if(!_8b5){
throw "Can't find a WFS capabilities parser for version "+_8b4;
}
var _8b6=new _8b5(this.options);
var _8b7=_8b6.read(data);
_8b7.version=_8b4;
return _8b7;
},CLASS_NAME:"OpenLayers.Format.WFSCapabilities"});
OpenLayers.Format.WFSDescribeFeatureType=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{xsd:"http://www.w3.org/2001/XMLSchema"},initialize:function(_8b8){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_8b8]);
},readers:{"xsd":{"schema":function(node,obj){
var _8bb=[];
var _8bc={};
var _8bd={complexTypes:_8bb,customTypes:_8bc};
this.readChildNodes(node,_8bd);
var _8be=node.attributes;
var attr,name;
for(var i=0,len=_8be.length;i<len;++i){
attr=_8be[i];
name=attr.name;
if(name.indexOf("xmlns")==0){
this.setNamespace(name.split(":")[1]||"",attr.value);
}else{
obj[name]=attr.value;
}
}
obj.featureTypes=_8bb;
obj.targetPrefix=this.namespaceAlias[obj.targetNamespace];
var _8c3,_8c4;
for(var i=0,len=_8bb.length;i<len;++i){
_8c3=_8bb[i];
_8c4=_8bc[_8c3.typeName];
if(_8bc[_8c3.typeName]){
_8c3.typeName=_8c4.name;
}
}
},"complexType":function(node,obj){
var _8c7={"typeName":node.getAttribute("name")};
this.readChildNodes(node,_8c7);
obj.complexTypes.push(_8c7);
},"complexContent":function(node,obj){
this.readChildNodes(node,obj);
},"extension":function(node,obj){
this.readChildNodes(node,obj);
},"sequence":function(node,obj){
var _8ce={elements:[]};
this.readChildNodes(node,_8ce);
obj.properties=_8ce.elements;
},"element":function(node,obj){
if(obj.elements){
var _8d1={};
var _8d2=node.attributes;
var attr;
for(var i=0,len=_8d2.length;i<len;++i){
attr=_8d2[i];
_8d1[attr.name]=attr.value;
}
var type=_8d1.type;
if(!type){
type={};
this.readChildNodes(node,type);
_8d1.restriction=type;
_8d1.type=type.base;
}
var _8d7=type.base||type;
_8d1.localType=_8d7.split(":").pop();
obj.elements.push(_8d1);
}
if(obj.complexTypes){
var type=node.getAttribute("type");
var _8d8=type.split(":").pop();
obj.customTypes[_8d8]={"name":node.getAttribute("name"),"type":type};
}
},"simpleType":function(node,obj){
this.readChildNodes(node,obj);
},"restriction":function(node,obj){
obj.base=node.getAttribute("base");
this.readRestriction(node,obj);
}}},readRestriction:function(node,obj){
var _8df=node.childNodes;
var _8e0,_8e1,_8e2;
for(var i=0,len=_8df.length;i<len;++i){
_8e0=_8df[i];
if(_8e0.nodeType==1){
_8e1=_8e0.nodeName.split(":").pop();
_8e2=_8e0.getAttribute("value");
if(!obj[_8e1]){
obj[_8e1]=_8e2;
}else{
if(typeof obj[_8e1]=="string"){
obj[_8e1]=[obj[_8e1]];
}
obj[_8e1].push(_8e2);
}
}
}
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
if(data&&data.nodeType==9){
data=data.documentElement;
}
var _8e6={};
this.readNode(data,_8e6);
return _8e6;
},CLASS_NAME:"OpenLayers.Format.WFSDescribeFeatureType"});
OpenLayers.Format.WFST.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs",gml:"http://www.opengis.net/gml",ogc:"http://www.opengis.net/ogc"},defaultPrefix:"wfs",version:null,schemaLocations:null,srsName:null,extractAttributes:true,xy:true,stateName:null,initialize:function(_8e7){
this.stateName={};
this.stateName[OpenLayers.State.INSERT]="wfs:Insert";
this.stateName[OpenLayers.State.UPDATE]="wfs:Update";
this.stateName[OpenLayers.State.DELETE]="wfs:Delete";
OpenLayers.Format.XML.prototype.initialize.apply(this,[_8e7]);
},getSrsName:function(_8e8,_8e9){
var _8ea=_8e9&&_8e9.srsName;
if(!_8ea){
if(_8e8&&_8e8.layer){
_8ea=_8e8.layer.projection.getCode();
}else{
_8ea=this.srsName;
}
}
return _8ea;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
if(data&&data.nodeType==9){
data=data.documentElement;
}
var obj={};
this.readNode(data,obj);
if(obj.features){
obj=obj.features;
}
return obj;
},readers:{"wfs":{"FeatureCollection":function(node,obj){
obj.features=[];
this.readChildNodes(node,obj);
}}},write:function(_8ef){
var node=this.writeNode("wfs:Transaction",_8ef);
var _8f1=this.schemaLocationAttr();
if(_8f1){
this.setAttributeNS(node,this.namespaces["xsi"],"xsi:schemaLocation",_8f1);
}
return OpenLayers.Format.XML.prototype.write.apply(this,[node]);
},writers:{"wfs":{"GetFeature":function(_8f2){
var node=this.createElementNSPlus("wfs:GetFeature",{attributes:{service:"WFS",version:this.version,maxFeatures:_8f2&&_8f2.maxFeatures,"xsi:schemaLocation":this.schemaLocationAttr(_8f2)}});
this.writeNode("Query",_8f2,node);
return node;
},"Query":function(_8f4){
_8f4=OpenLayers.Util.extend({featureNS:this.featureNS,featurePrefix:this.featurePrefix,featureType:this.featureType,srsName:this.srsName},_8f4);
var node=this.createElementNSPlus("wfs:Query",{attributes:{typeName:(_8f4.featureNS?_8f4.featurePrefix+":":"")+_8f4.featureType,srsName:_8f4.srsName}});
if(_8f4.featureNS){
node.setAttribute("xmlns:"+_8f4.featurePrefix,_8f4.featureNS);
}
if(_8f4.filter){
this.setFilterProperty(_8f4.filter);
this.writeNode("ogc:Filter",_8f4.filter,node);
}
return node;
},"Transaction":function(_8f6){
var node=this.createElementNSPlus("wfs:Transaction",{attributes:{service:"WFS",version:this.version}});
if(_8f6){
var name,_8f9;
for(var i=0,len=_8f6.length;i<len;++i){
_8f9=_8f6[i];
name=this.stateName[_8f9.state];
if(name){
this.writeNode(name,_8f9,node);
}
}
}
return node;
},"Insert":function(_8fc){
var node=this.createElementNSPlus("wfs:Insert");
this.srsName=this.getSrsName(_8fc);
this.writeNode("feature:_typeName",_8fc,node);
return node;
},"Update":function(_8fe){
var node=this.createElementNSPlus("wfs:Update",{attributes:{typeName:(this.featureNS?this.featurePrefix+":":"")+this.featureType}});
if(this.featureNS){
node.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
}
this.writeNode("Property",{name:this.geometryName,value:_8fe},node);
for(var key in _8fe.attributes){
this.writeNode("Property",{name:key,value:_8fe.attributes[key]},node);
}
this.writeNode("ogc:Filter",new OpenLayers.Filter.FeatureId({fids:[_8fe.fid]}),node);
return node;
},"Property":function(obj){
var node=this.createElementNSPlus("wfs:Property");
this.writeNode("Name",obj.name,node);
this.writeNode("Value",obj.value,node);
return node;
},"Name":function(name){
return this.createElementNSPlus("wfs:Name",{value:name});
},"Value":function(obj){
var node;
if(obj instanceof OpenLayers.Feature.Vector){
node=this.createElementNSPlus("wfs:Value");
this.srsName=this.getSrsName(obj);
var geom=this.writeNode("feature:_geometry",obj.geometry).firstChild;
node.appendChild(geom);
}else{
node=this.createElementNSPlus("wfs:Value",{value:obj});
}
return node;
},"Delete":function(_907){
var node=this.createElementNSPlus("wfs:Delete",{attributes:{typeName:(this.featureNS?this.featurePrefix+":":"")+this.featureType}});
if(this.featureNS){
node.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
}
this.writeNode("ogc:Filter",new OpenLayers.Filter.FeatureId({fids:[_907.fid]}),node);
return node;
}}},schemaLocationAttr:function(_909){
_909=OpenLayers.Util.extend({featurePrefix:this.featurePrefix,schema:this.schema},_909);
var _90a=OpenLayers.Util.extend({},this.schemaLocations);
if(_909.schema){
_90a[_909.featurePrefix]=_909.schema;
}
var _90b=[];
var uri;
for(var key in _90a){
uri=this.namespaces[key];
if(uri){
_90b.push(uri+" "+_90a[key]);
}
}
var _90e=_90b.join(" ")||undefined;
return _90e;
},setFilterProperty:function(_90f){
if(_90f.filters){
for(var i=0,len=_90f.filters.length;i<len;++i){
this.setFilterProperty(_90f.filters[i]);
}
}else{
if(_90f instanceof OpenLayers.Filter.Spatial){
_90f.property=this.geometryName;
}
}
},CLASS_NAME:"OpenLayers.Format.WFST.v1"});
OpenLayers.Format.WMC=OpenLayers.Class({defaultVersion:"1.1.0",version:null,layerOptions:null,layerParams:null,parser:null,initialize:function(_912){
OpenLayers.Util.extend(this,_912);
this.options=_912;
},read:function(data,_914){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _916=this.version;
if(!_916){
_916=root.getAttribute("version");
if(!_916){
_916=this.defaultVersion;
}
}
if(!this.parser||this.parser.VERSION!=_916){
var _917=OpenLayers.Format.WMC["v"+_916.replace(/\./g,"_")];
if(!_917){
throw "Can't find a WMC parser for version "+_916;
}
this.parser=new _917(this.options);
}
var _918=this.parser.read(data,_914);
var map;
if(_914.map){
this.context=_918;
if(_914.map instanceof OpenLayers.Map){
map=this.mergeContextToMap(_918,_914.map);
}else{
map=this.contextToMap(_918,_914.map);
}
}else{
map=_918;
}
return map;
},contextToMap:function(_91a,id){
var map=new OpenLayers.Map(id,{maxExtent:_91a.maxExtent,projection:_91a.projection});
map.addLayers(_91a.layers);
map.setCenter(_91a.bounds.getCenterLonLat(),map.getZoomForExtent(_91a.bounds,true));
return map;
},mergeContextToMap:function(_91d,map){
map.addLayers(_91d.layers);
return map;
},write:function(obj,_920){
if(obj.CLASS_NAME=="OpenLayers.Map"){
obj=this.mapToContext(obj);
}
var _921=(_920&&_920.version)||this.version||this.defaultVersion;
if(!this.parser||this.parser.VERSION!=_921){
var _922=OpenLayers.Format.WMC["v"+_921.replace(/\./g,"_")];
if(!_922){
throw "Can't find a WMS capabilities parser for version "+_921;
}
this.parser=new _922(this.options);
}
var wmc=this.parser.write(obj,_920);
return wmc;
},mapToContext:function(map){
var _925={bounds:map.getExtent(),maxExtent:map.maxExtent,projection:map.projection,layers:map.layers,size:map.getSize()};
return _925;
},CLASS_NAME:"OpenLayers.Format.WMC"});
OpenLayers.Format.WMSCapabilities.v1_1=OpenLayers.Class(OpenLayers.Format.XML,{initialize:function(_926){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_926]);
this.options=_926;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var _928={};
var root=data.documentElement;
this.runChildNodes(_928,root);
return _928;
},runChildNodes:function(obj,node){
var _92c=node.childNodes;
var _92d,_92e;
for(var i=0;i<_92c.length;++i){
_92d=_92c[i];
if(_92d.nodeType==1){
_92e=this["read_cap_"+_92d.nodeName];
if(_92e){
_92e.apply(this,[obj,_92d]);
}
}
}
},read_cap_Capability:function(_930,node){
var _932={layers:[]};
this.runChildNodes(_932,node);
_930.capability=_932;
},read_cap_Request:function(obj,node){
var _935={};
this.runChildNodes(_935,node);
obj.request=_935;
},read_cap_GetMap:function(_936,node){
var _938={formats:[]};
this.runChildNodes(_938,node);
_936.getmap=_938;
},read_cap_Format:function(obj,node){
if(obj.formats){
obj.formats.push(this.getChildValue(node));
}
},read_cap_DCPType:function(obj,node){
var _93d=node.getElementsByTagName("OnlineResource");
if(_93d.length>0){
this.read_cap_OnlineResource(obj,_93d[0]);
}
},read_cap_Service:function(_93e,node){
var _940={};
this.runChildNodes(_940,node);
_93e.service=_940;
},read_cap_Layer:function(_941,node,_943){
var _944={formats:_941.request.getmap.formats||[],styles:[],queryable:(node.getAttribute("queryable")==="1"||node.getAttribute("queryable")==="true")};
if(_943){
_944.styles=_944.styles.concat(_943.styles);
_944.llbbox=_943.llbbox;
_944.minScale=_943.minScale;
_944.maxScale=_943.maxScale;
}
var _945=node.childNodes;
var _946,_947,_948;
for(var i=0;i<_945.length;++i){
_946=_945[i];
_947=_946.nodeName;
_948=this["read_cap_"+_946.nodeName];
if(_948){
if(_947=="Layer"){
_948.apply(this,[_941,_946,_944]);
}else{
_948.apply(this,[_944,_946]);
}
}
}
if(_944.name){
var _94a=_944.name.indexOf(":");
if(_94a>0){
_944.prefix=_944.name.substring(0,_94a);
}
_941.layers.push(_944);
}
},read_cap_ScaleHint:function(_94b,node){
var min=node.getAttribute("min");
var max=node.getAttribute("max");
var rad2=Math.pow(2,0.5);
var ipm=OpenLayers.INCHES_PER_UNIT["m"];
_94b.maxScale=parseFloat(((rad2*min)*ipm*OpenLayers.DOTS_PER_INCH).toPrecision(13));
_94b.minScale=parseFloat(((rad2*max)*ipm*OpenLayers.DOTS_PER_INCH).toPrecision(13));
},read_cap_Name:function(obj,node){
var name=this.getChildValue(node);
if(name){
obj.name=name;
}
},read_cap_Title:function(obj,node){
var _956=this.getChildValue(node);
if(_956){
obj.title=_956;
}
},read_cap_Abstract:function(obj,node){
var abst=this.getChildValue(node);
if(abst){
obj["abstract"]=abst;
}
},read_cap_LatLonBoundingBox:function(_95a,node){
_95a.llbbox=[parseFloat(node.getAttribute("minx")),parseFloat(node.getAttribute("miny")),parseFloat(node.getAttribute("maxx")),parseFloat(node.getAttribute("maxy"))];
},read_cap_Style:function(_95c,node){
var _95e={};
this.runChildNodes(_95e,node);
_95c.styles.push(_95e);
},read_cap_LegendURL:function(_95f,node){
var _961={width:node.getAttribute("width"),height:node.getAttribute("height")};
var _962=node.getElementsByTagName("OnlineResource");
if(_962.length>0){
this.read_cap_OnlineResource(_961,_962[0]);
}
_95f.legend=_961;
},read_cap_OnlineResource:function(obj,node){
obj.href=this.getAttributeNS(node,"http://www.w3.org/1999/xlink","href");
},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1"});
OpenLayers.Format.WMSDescribeLayer=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.1.1",version:null,initialize:function(_965){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_965]);
this.options=_965;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _968=this.version;
if(!_968){
_968=root.getAttribute("version");
if(!_968){
_968=this.defaultVersion;
}
}
if(_968=="1.1.1"||_968=="1.1.0"){
_968="1.1";
}
var _969=OpenLayers.Format.WMSDescribeLayer["v"+_968.replace(/\./g,"_")];
if(!_969){
throw "Can't find a WMS DescribeLayer parser for version "+_968;
}
var _96a=new _969(this.options);
var _96b=_96a.read(data);
_96b.version=_968;
return _96b;
},CLASS_NAME:"OpenLayers.Format.WMSDescribeLayer"});
OpenLayers.Format.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Format.XML,{layerIdentifier:"_layer",featureIdentifier:"_feature",regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},gmlFormat:null,initialize:function(_96c){
OpenLayers.Format.XML.prototype.initialize.apply(this,arguments);
OpenLayers.Util.extend(this,_96c);
this.options=_96c;
},read:function(data){
var _96e;
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
if(root){
var _970=this;
var read=this["read_"+root.nodeName];
if(read){
_96e=read.call(this,root);
}else{
_96e=new OpenLayers.Format.GML((this.options?this.options:{})).read(data);
}
}else{
_96e=data;
}
return _96e;
},read_msGMLOutput:function(data){
var _973=[];
var _974=this.getSiblingNodesByTagCriteria(data,this.layerIdentifier);
if(_974){
for(var i=0,len=_974.length;i<len;++i){
var node=_974[i];
var _978=node.nodeName;
if(node.prefix){
_978=_978.split(":")[1];
}
var _978=_978.replace(this.layerIdentifier,"");
var _979=this.getSiblingNodesByTagCriteria(node,this.featureIdentifier);
if(_979){
for(var j=0;j<_979.length;j++){
var _97b=_979[j];
var geom=this.parseGeometry(_97b);
var _97d=this.parseAttributes(_97b);
var _97e=new OpenLayers.Feature.Vector(geom,_97d,null);
_97e.type=_978;
_973.push(_97e);
}
}
}
}
return _973;
},read_FeatureInfoResponse:function(data){
var _980=[];
var _981=this.getElementsByTagNameNS(data,"*","FIELDS");
for(var i=0,len=_981.length;i<len;i++){
var _984=_981[i];
var geom=null;
var _986={};
for(var j=0,jlen=_984.attributes.length;j<jlen;j++){
var _989=_984.attributes[j];
_986[_989.nodeName]=_989.nodeValue;
}
_980.push(new OpenLayers.Feature.Vector(geom,_986,null));
}
return _980;
},getSiblingNodesByTagCriteria:function(node,_98b){
var _98c=[];
var _98d,_98e,n,_990,_991;
if(node&&node.hasChildNodes()){
_98d=node.childNodes;
n=_98d.length;
for(var k=0;k<n;k++){
_991=_98d[k];
while(_991&&_991.nodeType!=1){
_991=_991.nextSibling;
k++;
}
_98e=(_991?_991.nodeName:"");
if(_98e.length>0&&_98e.indexOf(_98b)>-1){
_98c.push(_991);
}else{
_990=this.getSiblingNodesByTagCriteria(_991,_98b);
if(_990.length>0){
(_98c.length==0)?_98c=_990:_98c.push(_990);
}
}
}
}
return _98c;
},parseAttributes:function(node){
var _994={};
if(node.nodeType==1){
var _995=node.childNodes;
n=_995.length;
for(var i=0;i<n;++i){
var _997=_995[i];
if(_997.nodeType==1){
var _998=_997.childNodes;
if(_998.length==1){
var _999=_998[0];
if(_999.nodeType==3||_999.nodeType==4){
var name=(_997.prefix)?_997.nodeName.split(":")[1]:_997.nodeName;
var _99b=_999.nodeValue.replace(this.regExes.trimSpace,"");
_994[name]=_99b;
}
}
}
}
}
return _994;
},parseGeometry:function(node){
if(!this.gmlFormat){
this.gmlFormat=new OpenLayers.Format.GML();
}
var _99d=this.gmlFormat.parseFeature(node);
var _99e=null;
if(_99d&&_99d.geometry){
_99e=_99d.geometry.clone();
_99d.destroy();
}
return _99e;
},CLASS_NAME:"OpenLayers.Format.WMSGetFeatureInfo"});
OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:true,"double":false,pixelTolerance:0,stopSingle:false,stopDouble:false,timerId:null,down:null,rightclickTimerId:null,initialize:function(_99f,_9a0,_9a1){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
if(this.pixelTolerance!=null){
this.mousedown=function(evt){
this.down=evt.xy;
return true;
};
}
},mousedown:null,mouseup:function(evt){
var _9a4=true;
if(this.checkModifiers(evt)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(evt)){
_9a4=this.rightclick(evt);
}
return _9a4;
},rightclick:function(evt){
if(this.passesTolerance(evt)){
if(this.rightclickTimerId!=null){
this.clearTimer();
this.callback("dblrightclick",[evt]);
return !this.stopDouble;
}else{
var _9a6=this["double"]?OpenLayers.Util.extend({},evt):this.callback("rightclick",[evt]);
var _9a7=OpenLayers.Function.bind(this.delayedRightCall,this,_9a6);
this.rightclickTimerId=window.setTimeout(_9a7,this.delay);
}
}
return !this.stopSingle;
},delayedRightCall:function(evt){
this.rightclickTimerId=null;
if(evt){
this.callback("rightclick",[evt]);
}
return !this.stopSingle;
},dblclick:function(evt){
if(this.passesTolerance(evt)){
if(this["double"]){
this.callback("dblclick",[evt]);
}
this.clearTimer();
}
return !this.stopDouble;
},click:function(evt){
if(this.passesTolerance(evt)){
if(this.timerId!=null){
this.clearTimer();
}else{
var _9ab=this.single?OpenLayers.Util.extend({},evt):null;
this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,_9ab),this.delay);
}
}
return !this.stopSingle;
},passesTolerance:function(evt){
var _9ad=true;
if(this.pixelTolerance!=null&&this.down){
var dpx=Math.sqrt(Math.pow(this.down.x-evt.xy.x,2)+Math.pow(this.down.y-evt.xy.y,2));
if(dpx>this.pixelTolerance){
_9ad=false;
}
}
return _9ad;
},clearTimer:function(){
if(this.timerId!=null){
window.clearTimeout(this.timerId);
this.timerId=null;
}
if(this.rightclickTimerId!=null){
window.clearTimeout(this.rightclickTimerId);
this.rightclickTimerId=null;
}
},delayedCall:function(evt){
this.timerId=null;
if(evt){
this.callback("click",[evt]);
}
},deactivate:function(){
var _9b0=false;
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
this.clearTimer();
this.down=null;
_9b0=true;
}
return _9b0;
},CLASS_NAME:"OpenLayers.Handler.Click"});
OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:false,stopDown:true,dragging:false,last:null,start:null,oldOnselectstart:null,interval:0,timeoutId:null,initialize:function(_9b1,_9b2,_9b3){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
},down:function(evt){
},move:function(evt){
},up:function(evt){
},out:function(evt){
},mousedown:function(evt){
var _9b9=true;
this.dragging=false;
if(this.checkModifiers(evt)&&OpenLayers.Event.isLeftClick(evt)){
this.started=true;
this.start=evt.xy;
this.last=evt.xy;
OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown");
this.down(evt);
this.callback("down",[evt.xy]);
OpenLayers.Event.stop(evt);
if(!this.oldOnselectstart){
this.oldOnselectstart=(document.onselectstart)?document.onselectstart:function(){
return true;
};
document.onselectstart=function(){
return false;
};
}
_9b9=!this.stopDown;
}else{
this.started=false;
this.start=null;
this.last=null;
}
return _9b9;
},mousemove:function(evt){
if(this.started&&!this.timeoutId&&(evt.xy.x!=this.last.x||evt.xy.y!=this.last.y)){
if(this.interval>0){
this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval);
}
this.dragging=true;
this.move(evt);
this.callback("move",[evt.xy]);
if(!this.oldOnselectstart){
this.oldOnselectstart=document.onselectstart;
document.onselectstart=function(){
return false;
};
}
this.last=this.evt.xy;
}
return true;
},removeTimeout:function(){
this.timeoutId=null;
},mouseup:function(evt){
if(this.started){
var _9bc=(this.start!=this.last);
this.started=false;
this.dragging=false;
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");
this.up(evt);
this.callback("up",[evt.xy]);
if(_9bc){
this.callback("done",[evt.xy]);
}
document.onselectstart=this.oldOnselectstart;
}
return true;
},mouseout:function(evt){
if(this.started&&OpenLayers.Util.mouseLeft(evt,this.map.div)){
var _9be=(this.start!=this.last);
this.started=false;
this.dragging=false;
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");
this.out(evt);
this.callback("out",[]);
if(_9be){
this.callback("done",[evt.xy]);
}
if(document.onselectstart){
document.onselectstart=this.oldOnselectstart;
}
}
return true;
},click:function(evt){
return (this.start==this.last);
},activate:function(){
var _9c0=false;
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
this.dragging=false;
_9c0=true;
}
return _9c0;
},deactivate:function(){
var _9c1=false;
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
this.started=false;
this.dragging=false;
this.start=null;
this.last=null;
_9c1=true;
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");
}
return _9c1;
},CLASS_NAME:"OpenLayers.Handler.Drag"});
OpenLayers.Handler.Feature=OpenLayers.Class(OpenLayers.Handler,{EVENTMAP:{"click":{"in":"click","out":"clickout"},"mousemove":{"in":"over","out":"out"},"dblclick":{"in":"dblclick","out":null},"mousedown":{"in":null,"out":null},"mouseup":{"in":null,"out":null}},feature:null,lastFeature:null,down:null,up:null,clickTolerance:4,geometryTypes:null,stopClick:true,stopDown:true,stopUp:false,initialize:function(_9c2,_9c3,_9c4,_9c5){
OpenLayers.Handler.prototype.initialize.apply(this,[_9c2,_9c4,_9c5]);
this.layer=_9c3;
},mousedown:function(evt){
this.down=evt.xy;
return this.handle(evt)?!this.stopDown:true;
},mouseup:function(evt){
this.up=evt.xy;
return this.handle(evt)?!this.stopUp:true;
},click:function(evt){
return this.handle(evt)?!this.stopClick:true;
},mousemove:function(evt){
if(!this.callbacks["over"]&&!this.callbacks["out"]){
return true;
}
this.handle(evt);
return true;
},dblclick:function(evt){
return !this.handle(evt);
},geometryTypeMatches:function(_9cb){
return this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,_9cb.geometry.CLASS_NAME)>-1;
},handle:function(evt){
if(this.feature&&!this.feature.layer){
this.feature=null;
}
var type=evt.type;
var _9ce=false;
var _9cf=!!(this.feature);
var _9d0=(type=="click"||type=="dblclick");
this.feature=this.layer.getFeatureFromEvent(evt);
if(this.feature&&!this.feature.layer){
this.feature=null;
}
if(this.lastFeature&&!this.lastFeature.layer){
this.lastFeature=null;
}
if(this.feature){
var _9d1=(this.feature!=this.lastFeature);
if(this.geometryTypeMatches(this.feature)){
if(_9cf&&_9d1){
if(this.lastFeature){
this.triggerCallback(type,"out",[this.lastFeature]);
}
this.triggerCallback(type,"in",[this.feature]);
}else{
if(!_9cf||_9d0){
this.triggerCallback(type,"in",[this.feature]);
}
}
this.lastFeature=this.feature;
_9ce=true;
}else{
if(this.lastFeature&&(_9cf&&_9d1||_9d0)){
this.triggerCallback(type,"out",[this.lastFeature]);
}
this.feature=null;
}
}else{
if(this.lastFeature&&(_9cf||_9d0)){
this.triggerCallback(type,"out",[this.lastFeature]);
}
}
return _9ce;
},triggerCallback:function(type,mode,args){
var key=this.EVENTMAP[type][mode];
if(key){
if(type=="click"&&this.up&&this.down){
var dpx=Math.sqrt(Math.pow(this.up.x-this.down.x,2)+Math.pow(this.up.y-this.down.y,2));
if(dpx<=this.clickTolerance){
this.callback(key,args);
}
}else{
this.callback(key,args);
}
}
},activate:function(){
var _9d7=false;
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
this.moveLayerToTop();
this.map.events.on({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});
_9d7=true;
}
return _9d7;
},deactivate:function(){
var _9d8=false;
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
this.moveLayerBack();
this.feature=null;
this.lastFeature=null;
this.down=null;
this.up=null;
this.map.events.un({"removelayer":this.handleMapEvents,"changelayer":this.handleMapEvents,scope:this});
_9d8=true;
}
return _9d8;
},handleMapEvents:function(evt){
if(!evt.property||evt.property=="order"){
this.moveLayerToTop();
}
},moveLayerToTop:function(){
var _9da=Math.max(this.map.Z_INDEX_BASE["Feature"]-1,this.layer.getZIndex())+1;
this.layer.setZIndex(_9da);
},moveLayerBack:function(){
var _9db=this.layer.getZIndex()-1;
if(_9db>=this.map.Z_INDEX_BASE["Feature"]){
this.layer.setZIndex(_9db);
}else{
this.map.setLayerZIndex(this.layer,this.map.getLayerIndex(this.layer));
}
},CLASS_NAME:"OpenLayers.Handler.Feature"});
OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:false,px:null,timerId:null,initialize:function(_9dc,_9dd,_9de){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
},mousemove:function(evt){
if(this.passesTolerance(evt.xy)){
this.clearTimer();
this.callback("move",[evt]);
this.px=evt.xy;
evt=OpenLayers.Util.extend({},evt);
this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,evt),this.delay);
}
return !this.stopMove;
},mouseout:function(evt){
if(OpenLayers.Util.mouseLeft(evt,this.map.div)){
this.clearTimer();
this.callback("move",[evt]);
}
return true;
},passesTolerance:function(px){
var _9e2=true;
if(this.pixelTolerance&&this.px){
var dpx=Math.sqrt(Math.pow(this.px.x-px.x,2)+Math.pow(this.px.y-px.y,2));
if(dpx<this.pixelTolerance){
_9e2=false;
}
}
return _9e2;
},clearTimer:function(){
if(this.timerId!=null){
window.clearTimeout(this.timerId);
this.timerId=null;
}
},delayedCall:function(evt){
this.callback("pause",[evt]);
},deactivate:function(){
var _9e5=false;
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
this.clearTimer();
_9e5=true;
}
return _9e5;
},CLASS_NAME:"OpenLayers.Handler.Hover"});
OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keyup"],eventListener:null,initialize:function(_9e6,_9e7,_9e8){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this);
},destroy:function(){
this.deactivate();
this.eventListener=null;
OpenLayers.Handler.prototype.destroy.apply(this,arguments);
},activate:function(){
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){
OpenLayers.Event.observe(document,this.KEY_EVENTS[i],this.eventListener);
}
return true;
}else{
return false;
}
},deactivate:function(){
var _9eb=false;
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
for(var i=0,len=this.KEY_EVENTS.length;i<len;i++){
OpenLayers.Event.stopObserving(document,this.KEY_EVENTS[i],this.eventListener);
}
_9eb=true;
}
return _9eb;
},handleKeyEvent:function(evt){
if(this.checkModifiers(evt)){
this.callback(evt.type,[evt]);
}
},CLASS_NAME:"OpenLayers.Handler.Keyboard"});
OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,initialize:function(_9ef,_9f0,_9f1){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);
},destroy:function(){
OpenLayers.Handler.prototype.destroy.apply(this,arguments);
this.wheelListener=null;
},onWheelEvent:function(e){
if(!this.map||!this.checkModifiers(e)){
return;
}
var _9f3=false;
var _9f4=false;
var _9f5=false;
var elem=OpenLayers.Event.element(e);
while((elem!=null)&&!_9f5&&!_9f3){
if(!_9f3){
try{
if(elem.currentStyle){
_9f7=elem.currentStyle["overflow"];
}else{
var _9f8=document.defaultView.getComputedStyle(elem,null);
var _9f7=_9f8.getPropertyValue("overflow");
}
_9f3=(_9f7&&(_9f7=="auto")||(_9f7=="scroll"));
}
catch(err){
}
}
if(!_9f4){
for(var i=0,len=this.map.layers.length;i<len;i++){
if(elem==this.map.layers[i].div||elem==this.map.layers[i].pane){
_9f4=true;
break;
}
}
}
_9f5=(elem==this.map.div);
elem=elem.parentNode;
}
if(!_9f3&&_9f5){
if(_9f4){
this.wheelZoom(e);
}
OpenLayers.Event.stop(e);
}
},wheelZoom:function(e){
var _9fc=0;
if(!e){
e=window.event;
}
if(e.wheelDelta){
_9fc=e.wheelDelta/120;
if(window.opera&&window.opera.version()<9.2){
_9fc=-_9fc;
}
}else{
if(e.detail){
_9fc=-e.detail/3;
}
}
if(_9fc){
if(this.mousePosition){
e.xy=this.mousePosition;
}
if(!e.xy){
e.xy=this.map.getPixelFromLonLat(this.map.getCenter());
}
if(_9fc<0){
this.callback("down",[e,_9fc]);
}else{
this.callback("up",[e,_9fc]);
}
}
},mousemove:function(evt){
this.mousePosition=evt.xy;
},activate:function(evt){
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
var _9ff=this.wheelListener;
OpenLayers.Event.observe(window,"DOMMouseScroll",_9ff);
OpenLayers.Event.observe(window,"mousewheel",_9ff);
OpenLayers.Event.observe(document,"mousewheel",_9ff);
return true;
}else{
return false;
}
},deactivate:function(evt){
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
var _a01=this.wheelListener;
OpenLayers.Event.stopObserving(window,"DOMMouseScroll",_a01);
OpenLayers.Event.stopObserving(window,"mousewheel",_a01);
OpenLayers.Event.stopObserving(document,"mousewheel",_a01);
return true;
}else{
return false;
}
},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});
OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:null,alwaysInRange:null,EVENT_TYPES:["loadstart","loadend","loadcancel","visibilitychanged","move","moveend"],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,imageOffset:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,transitionEffect:null,SUPPORTED_TRANSITIONS:["resize"],initialize:function(name,_a03){
this.addOptions(_a03);
this.name=name;
if(this.id==null){
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
this.div=OpenLayers.Util.createDiv(this.id);
this.div.style.width="100%";
this.div.style.height="100%";
this.div.dir="ltr";
this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES);
if(this.eventListeners instanceof Object){
this.events.on(this.eventListeners);
}
}
if(this.wrapDateLine){
this.displayOutsideMaxExtent=true;
}
},destroy:function(_a04){
if(_a04==null){
_a04=true;
}
if(this.map!=null){
this.map.removeLayer(this,_a04);
}
this.projection=null;
this.map=null;
this.name=null;
this.div=null;
this.options=null;
if(this.events){
if(this.eventListeners){
this.events.un(this.eventListeners);
}
this.events.destroy();
}
this.eventListeners=null;
this.events=null;
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer(this.name,this.options);
}
OpenLayers.Util.applyDefaults(obj,this);
obj.map=null;
return obj;
},setName:function(_a06){
if(_a06!=this.name){
this.name=_a06;
if(this.map!=null){
this.map.events.triggerEvent("changelayer",{layer:this,property:"name"});
}
}
},addOptions:function(_a07){
if(this.options==null){
this.options={};
}
OpenLayers.Util.extend(this.options,_a07);
OpenLayers.Util.extend(this,_a07);
},onMapResize:function(){
},redraw:function(){
var _a08=false;
if(this.map){
this.inRange=this.calculateInRange();
var _a09=this.getExtent();
if(_a09&&this.inRange&&this.visibility){
var _a0a=true;
this.moveTo(_a09,_a0a,false);
this.events.triggerEvent("moveend",{"zoomChanged":_a0a});
_a08=true;
}
}
return _a08;
},moveTo:function(_a0b,_a0c,_a0d){
var _a0e=this.visibility;
if(!this.isBaseLayer){
_a0e=_a0e&&this.inRange;
}
this.display(_a0e);
},setMap:function(map){
if(this.map==null){
this.map=map;
this.maxExtent=this.maxExtent||this.map.maxExtent;
this.projection=this.projection||this.map.projection;
if(this.projection&&typeof this.projection=="string"){
this.projection=new OpenLayers.Projection(this.projection);
}
this.units=this.projection.getUnits()||this.units||this.map.units;
this.initResolutions();
if(!this.isBaseLayer){
this.inRange=this.calculateInRange();
var show=((this.visibility)&&(this.inRange));
this.div.style.display=show?"":"none";
}
this.setTileSize();
}
},afterAdd:function(){
},removeMap:function(map){
},getImageSize:function(){
return (this.imageSize||this.tileSize);
},setTileSize:function(size){
var _a13=(size)?size:((this.tileSize)?this.tileSize:this.map.getTileSize());
this.tileSize=_a13;
if(this.gutter){
this.imageOffset=new OpenLayers.Pixel(-this.gutter,-this.gutter);
this.imageSize=new OpenLayers.Size(_a13.w+(2*this.gutter),_a13.h+(2*this.gutter));
}
},getVisibility:function(){
return this.visibility;
},setVisibility:function(_a14){
if(_a14!=this.visibility){
this.visibility=_a14;
this.display(_a14);
this.redraw();
if(this.map!=null){
this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"});
}
this.events.triggerEvent("visibilitychanged");
}
},display:function(_a15){
var _a16=this.calculateInRange();
if(_a15!=(this.div.style.display!="none")){
this.div.style.display=(_a15&&_a16)?"block":"none";
}
},calculateInRange:function(){
var _a17=false;
if(this.alwaysInRange){
_a17=true;
}else{
if(this.map){
var _a18=this.map.getResolution();
_a17=((_a18>=this.minResolution)&&(_a18<=this.maxResolution));
}
}
return _a17;
},setIsBaseLayer:function(_a19){
if(_a19!=this.isBaseLayer){
this.isBaseLayer=_a19;
if(this.map!=null){
this.map.events.triggerEvent("changebaselayer",{layer:this});
}
}
},initResolutions:function(){
var _a1a=new Array("projection","units","scales","resolutions","maxScale","minScale","maxResolution","minResolution","minExtent","maxExtent","numZoomLevels","maxZoomLevel");
var _a1b=["projection","units"];
var _a1c=false;
var _a1d={};
for(var i=0,len=_a1a.length;i<len;i++){
var _a20=_a1a[i];
if(this.options[_a20]&&OpenLayers.Util.indexOf(_a1b,_a20)==-1){
_a1c=true;
}
_a1d[_a20]=this.options[_a20]||this.map[_a20];
}
if(this.alwaysInRange==null){
this.alwaysInRange=!_a1c;
}
if((this.options.minScale!=null||this.options.maxScale!=null)&&this.options.scales==null){
_a1d.scales=null;
}
if((this.options.minResolution!=null||this.options.maxResolution!=null)&&this.options.resolutions==null){
_a1d.resolutions=null;
}
if((!_a1d.numZoomLevels)&&(_a1d.maxZoomLevel)){
_a1d.numZoomLevels=_a1d.maxZoomLevel+1;
}
if((_a1d.scales!=null)||(_a1d.resolutions!=null)){
if(_a1d.scales!=null){
_a1d.resolutions=[];
for(var i=0,len=_a1d.scales.length;i<len;i++){
var _a21=_a1d.scales[i];
_a1d.resolutions[i]=OpenLayers.Util.getResolutionFromScale(_a21,_a1d.units);
}
}
_a1d.numZoomLevels=_a1d.resolutions.length;
}else{
if(_a1d.minScale){
_a1d.maxResolution=OpenLayers.Util.getResolutionFromScale(_a1d.minScale,_a1d.units);
}else{
if(_a1d.maxResolution=="auto"){
var _a22=this.map.getSize();
var wRes=_a1d.maxExtent.getWidth()/_a22.w;
var hRes=_a1d.maxExtent.getHeight()/_a22.h;
_a1d.maxResolution=Math.max(wRes,hRes);
}
}
if(_a1d.maxScale!=null){
_a1d.minResolution=OpenLayers.Util.getResolutionFromScale(_a1d.maxScale,_a1d.units);
}else{
if((_a1d.minResolution=="auto")&&(_a1d.minExtent!=null)){
var _a22=this.map.getSize();
var wRes=_a1d.minExtent.getWidth()/_a22.w;
var hRes=_a1d.minExtent.getHeight()/_a22.h;
_a1d.minResolution=Math.max(wRes,hRes);
}
}
if(_a1d.minResolution!=null&&this.options.numZoomLevels==undefined){
var _a25=_a1d.maxResolution/_a1d.minResolution;
_a1d.numZoomLevels=Math.floor(Math.log(_a25)/Math.log(2))+1;
}
_a1d.resolutions=new Array(_a1d.numZoomLevels);
var base=2;
if(typeof _a1d.minResolution=="number"&&_a1d.numZoomLevels>1){
base=Math.pow((_a1d.maxResolution/_a1d.minResolution),(1/(_a1d.numZoomLevels-1)));
}
for(var i=0;i<_a1d.numZoomLevels;i++){
var res=_a1d.maxResolution/Math.pow(base,i);
_a1d.resolutions[i]=res;
}
}
_a1d.resolutions.sort(function(a,b){
return (b-a);
});
this.resolutions=_a1d.resolutions;
this.maxResolution=_a1d.resolutions[0];
var _a2a=_a1d.resolutions.length-1;
this.minResolution=_a1d.resolutions[_a2a];
this.scales=[];
for(var i=0,len=_a1d.resolutions.length;i<len;i++){
this.scales[i]=OpenLayers.Util.getScaleFromResolution(_a1d.resolutions[i],_a1d.units);
}
this.minScale=this.scales[0];
this.maxScale=this.scales[this.scales.length-1];
this.numZoomLevels=_a1d.numZoomLevels;
},getResolution:function(){
var zoom=this.map.getZoom();
return this.getResolutionForZoom(zoom);
},getExtent:function(){
return this.map.calculateBounds();
},getZoomForExtent:function(_a2c,_a2d){
var _a2e=this.map.getSize();
var _a2f=Math.max(_a2c.getWidth()/_a2e.w,_a2c.getHeight()/_a2e.h);
return this.getZoomForResolution(_a2f,_a2d);
},getDataExtent:function(){
},getResolutionForZoom:function(zoom){
zoom=Math.max(0,Math.min(zoom,this.resolutions.length-1));
var _a31;
if(this.map.fractionalZoom){
var low=Math.floor(zoom);
var high=Math.ceil(zoom);
_a31=this.resolutions[low]-((zoom-low)*(this.resolutions[low]-this.resolutions[high]));
}else{
_a31=this.resolutions[Math.round(zoom)];
}
return _a31;
},getZoomForResolution:function(_a34,_a35){
var zoom;
if(this.map.fractionalZoom){
var _a37=0;
var _a38=this.resolutions.length-1;
var _a39=this.resolutions[_a37];
var _a3a=this.resolutions[_a38];
var res;
for(var i=0,len=this.resolutions.length;i<len;++i){
res=this.resolutions[i];
if(res>=_a34){
_a39=res;
_a37=i;
}
if(res<=_a34){
_a3a=res;
_a38=i;
break;
}
}
var dRes=_a39-_a3a;
if(dRes>0){
zoom=_a37+((_a39-_a34)/dRes);
}else{
zoom=_a37;
}
}else{
var diff;
var _a40=Number.POSITIVE_INFINITY;
for(var i=0,len=this.resolutions.length;i<len;i++){
if(_a35){
diff=Math.abs(this.resolutions[i]-_a34);
if(diff>_a40){
break;
}
_a40=diff;
}else{
if(this.resolutions[i]<_a34){
break;
}
}
}
zoom=Math.max(0,i-1);
}
return zoom;
},getLonLatFromViewPortPx:function(_a41){
var _a42=null;
if(_a41!=null){
var size=this.map.getSize();
var _a44=this.map.getCenter();
if(_a44){
var res=this.map.getResolution();
var _a46=_a41.x-(size.w/2);
var _a47=_a41.y-(size.h/2);
_a42=new OpenLayers.LonLat(_a44.lon+_a46*res,_a44.lat-_a47*res);
if(this.wrapDateLine){
_a42=_a42.wrapDateLine(this.maxExtent);
}
}
}
return _a42;
},getViewPortPxFromLonLat:function(_a48){
var px=null;
if(_a48!=null){
var _a4a=this.map.getResolution();
var _a4b=this.map.getExtent();
px=new OpenLayers.Pixel((1/_a4a*(_a48.lon-_a4b.left)),(1/_a4a*(_a4b.top-_a48.lat)));
}
return px;
},setOpacity:function(_a4c){
if(_a4c!=this.opacity){
this.opacity=_a4c;
for(var i=0,len=this.div.childNodes.length;i<len;++i){
var _a4f=this.div.childNodes[i].firstChild;
OpenLayers.Util.modifyDOMElement(_a4f,null,null,null,null,null,null,_a4c);
}
}
},getZIndex:function(){
return this.div.style.zIndex;
},setZIndex:function(_a50){
this.div.style.zIndex=_a50;
},adjustBounds:function(_a51){
if(this.gutter){
var _a52=this.gutter*this.map.getResolution();
_a51=new OpenLayers.Bounds(_a51.left-_a52,_a51.bottom-_a52,_a51.right+_a52,_a51.top+_a52);
}
if(this.wrapDateLine){
var _a53={"rightTolerance":this.getResolution()};
_a51=_a51.wrapDateLine(this.maxExtent,_a53);
}
return _a51;
},CLASS_NAME:"OpenLayers.Layer"});
OpenLayers.Marker.Box=OpenLayers.Class(OpenLayers.Marker,{bounds:null,div:null,initialize:function(_a54,_a55,_a56){
this.bounds=_a54;
this.div=OpenLayers.Util.createDiv();
this.div.style.overflow="hidden";
this.events=new OpenLayers.Events(this,this.div,null);
this.setBorder(_a55,_a56);
},destroy:function(){
this.bounds=null;
this.div=null;
OpenLayers.Marker.prototype.destroy.apply(this,arguments);
},setBorder:function(_a57,_a58){
if(!_a57){
_a57="red";
}
if(!_a58){
_a58=2;
}
this.div.style.border=_a58+"px solid "+_a57;
},draw:function(px,sz){
OpenLayers.Util.modifyDOMElement(this.div,null,px,sz);
return this.div;
},onScreen:function(){
var _a5b=false;
if(this.map){
var _a5c=this.map.getExtent();
_a5b=_a5c.containsBounds(this.bounds,true,true);
}
return _a5b;
},display:function(_a5d){
this.div.style.display=(_a5d)?"":"none";
},CLASS_NAME:"OpenLayers.Marker.Box"});
(function(){
var _a5e=window.XMLHttpRequest;
var _a5f=!!window.controllers,bIE=window.document.all&&!window.opera;
function _a61(){
this._object=_a5e?new _a5e:new window.ActiveXObject("Microsoft.XMLHTTP");
};
if(_a5f&&_a5e.wrapped){
_a61.wrapped=_a5e.wrapped;
}
_a61.UNSENT=0;
_a61.OPENED=1;
_a61.HEADERS_RECEIVED=2;
_a61.LOADING=3;
_a61.DONE=4;
_a61.prototype.readyState=_a61.UNSENT;
_a61.prototype.responseText="";
_a61.prototype.responseXML=null;
_a61.prototype.status=0;
_a61.prototype.statusText="";
_a61.prototype.onreadystatechange=null;
_a61.onreadystatechange=null;
_a61.onopen=null;
_a61.onsend=null;
_a61.onabort=null;
_a61.prototype.open=function(_a62,sUrl,_a64,_a65,_a66){
this._async=_a64;
var _a67=this,_a68=this.readyState;
if(bIE){
var _a69=function(){
if(_a67._object.readyState!=_a61.DONE){
fCleanTransport(_a67);
}
};
if(_a64){
window.attachEvent("onunload",_a69);
}
}
this._object.onreadystatechange=function(){
if(_a5f&&!_a64){
return;
}
_a67.readyState=_a67._object.readyState;
_a6a(_a67);
if(_a67._aborted){
_a67.readyState=_a61.UNSENT;
return;
}
if(_a67.readyState==_a61.DONE){
_a6b(_a67);
if(bIE&&_a64){
window.detachEvent("onunload",_a69);
}
}
if(_a68!=_a67.readyState){
_a6c(_a67);
}
_a68=_a67.readyState;
};
if(_a61.onopen){
_a61.onopen.apply(this,arguments);
}
this._object.open(_a62,sUrl,_a64,_a65,_a66);
if(!_a64&&_a5f){
this.readyState=_a61.OPENED;
_a6c(this);
}
};
_a61.prototype.send=function(_a6d){
if(_a61.onsend){
_a61.onsend.apply(this,arguments);
}
if(_a6d&&_a6d.nodeType){
_a6d=window.XMLSerializer?new window.XMLSerializer().serializeToString(_a6d):_a6d.xml;
if(!this._headers["Content-Type"]){
this._object.setRequestHeader("Content-Type","application/xml");
}
}
this._object.send(_a6d);
if(_a5f&&!this._async){
this.readyState=_a61.OPENED;
_a6a(this);
while(this.readyState<_a61.DONE){
this.readyState++;
_a6c(this);
if(this._aborted){
return;
}
}
}
};
_a61.prototype.abort=function(){
if(_a61.onabort){
_a61.onabort.apply(this,arguments);
}
if(this.readyState>_a61.UNSENT){
this._aborted=true;
}
this._object.abort();
_a6b(this);
};
_a61.prototype.getAllResponseHeaders=function(){
return this._object.getAllResponseHeaders();
};
_a61.prototype.getResponseHeader=function(_a6e){
return this._object.getResponseHeader(_a6e);
};
_a61.prototype.setRequestHeader=function(_a6f,_a70){
if(!this._headers){
this._headers={};
}
this._headers[_a6f]=_a70;
return this._object.setRequestHeader(_a6f,_a70);
};
_a61.prototype.toString=function(){
return "["+"object"+" "+"XMLHttpRequest"+"]";
};
_a61.toString=function(){
return "["+"XMLHttpRequest"+"]";
};
function _a6c(_a71){
if(_a71.onreadystatechange){
_a71.onreadystatechange.apply(_a71);
}
if(_a61.onreadystatechange){
_a61.onreadystatechange.apply(_a71);
}
};
function _a72(_a73){
var _a74=_a73.responseXML;
if(bIE&&_a74&&!_a74.documentElement&&_a73.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){
_a74=new ActiveXObject("Microsoft.XMLDOM");
_a74.loadXML(_a73.responseText);
}
if(_a74){
if((bIE&&_a74.parseError!=0)||(_a74.documentElement&&_a74.documentElement.tagName=="parsererror")){
return null;
}
}
return _a74;
};
function _a6a(_a75){
try{
_a75.responseText=_a75._object.responseText;
}
catch(e){
}
try{
_a75.responseXML=_a72(_a75._object);
}
catch(e){
}
try{
_a75.status=_a75._object.status;
}
catch(e){
}
try{
_a75.statusText=_a75._object.statusText;
}
catch(e){
}
};
function _a6b(_a76){
_a76._object.onreadystatechange=new window.Function;
delete _a76._headers;
};
if(!window.Function.prototype.apply){
window.Function.prototype.apply=function(_a77,_a78){
if(!_a78){
_a78=[];
}
_a77.__func=this;
_a77.__func(_a78[0],_a78[1],_a78[2],_a78[3],_a78[4]);
delete _a77.__func;
};
}
OpenLayers.Request.XMLHttpRequest=_a61;
})();
OpenLayers.ProxyHost="";
OpenLayers.nullHandler=function(_a79){
OpenLayers.Console.userError(OpenLayers.i18n("unhandledRequest",{"statusText":_a79.statusText}));
};
OpenLayers.loadURL=function(uri,_a7b,_a7c,_a7d,_a7e){
if(typeof _a7b=="string"){
_a7b=OpenLayers.Util.getParameters(_a7b);
}
var _a7f=(_a7d)?_a7d:OpenLayers.nullHandler;
var _a80=(_a7e)?_a7e:OpenLayers.nullHandler;
return OpenLayers.Request.GET({url:uri,params:_a7b,success:_a7f,failure:_a80,scope:_a7c});
};
OpenLayers.parseXMLString=function(text){
var _a82=text.indexOf("<");
if(_a82>0){
text=text.substring(_a82);
}
var _a83=OpenLayers.Util.Try(function(){
var _a84=new ActiveXObject("Microsoft.XMLDOM");
_a84.loadXML(text);
return _a84;
},function(){
return new DOMParser().parseFromString(text,"text/xml");
},function(){
var req=new XMLHttpRequest();
req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);
if(req.overrideMimeType){
req.overrideMimeType("text/xml");
}
req.send(null);
return req.responseXML;
});
return _a83;
};
OpenLayers.Ajax={emptyFunction:function(){
},getTransport:function(){
return OpenLayers.Util.Try(function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
})||false;
},activeRequestCount:0};
OpenLayers.Ajax.Responders={responders:[],register:function(_a86){
for(var i=0;i<this.responders.length;i++){
if(_a86==this.responders[i]){
return;
}
}
this.responders.push(_a86);
},unregister:function(_a88){
OpenLayers.Util.removeItem(this.reponders,_a88);
},dispatch:function(_a89,_a8a,_a8b){
var _a8c;
for(var i=0;i<this.responders.length;i++){
_a8c=this.responders[i];
if(_a8c[_a89]&&typeof _a8c[_a89]=="function"){
try{
_a8c[_a89].apply(_a8c,[_a8a,_a8b]);
}
catch(e){
}
}
}
}};
OpenLayers.Ajax.Responders.register({onCreate:function(){
OpenLayers.Ajax.activeRequestCount++;
},onComplete:function(){
OpenLayers.Ajax.activeRequestCount--;
}});
OpenLayers.Ajax.Base=OpenLayers.Class({initialize:function(_a8e){
this.options={method:"post",asynchronous:true,contentType:"application/xml",parameters:""};
OpenLayers.Util.extend(this.options,_a8e||{});
this.options.method=this.options.method.toLowerCase();
if(typeof this.options.parameters=="string"){
this.options.parameters=OpenLayers.Util.getParameters(this.options.parameters);
}
}});
OpenLayers.Ajax.Request=OpenLayers.Class(OpenLayers.Ajax.Base,{_complete:false,initialize:function(url,_a90){
OpenLayers.Ajax.Base.prototype.initialize.apply(this,[_a90]);
if(OpenLayers.ProxyHost&&OpenLayers.String.startsWith(url,"http")){
url=OpenLayers.ProxyHost+encodeURIComponent(url);
}
this.transport=OpenLayers.Ajax.getTransport();
this.request(url);
},request:function(url){
this.url=url;
this.method=this.options.method;
var _a92=OpenLayers.Util.extend({},this.options.parameters);
if(this.method!="get"&&this.method!="post"){
_a92["_method"]=this.method;
this.method="post";
}
this.parameters=_a92;
if(_a92=OpenLayers.Util.getParameterString(_a92)){
if(this.method=="get"){
this.url+=((this.url.indexOf("?")>-1)?"&":"?")+_a92;
}else{
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){
_a92+="&_=";
}
}
}
try{
var _a93=new OpenLayers.Ajax.Response(this);
if(this.options.onCreate){
this.options.onCreate(_a93);
}
OpenLayers.Ajax.Responders.dispatch("onCreate",this,_a93);
this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);
if(this.options.asynchronous){
window.setTimeout(OpenLayers.Function.bind(this.respondToReadyState,this,1),10);
}
this.transport.onreadystatechange=OpenLayers.Function.bind(this.onStateChange,this);
this.setRequestHeaders();
this.body=this.method=="post"?(this.options.postBody||_a92):null;
this.transport.send(this.body);
if(!this.options.asynchronous&&this.transport.overrideMimeType){
this.onStateChange();
}
}
catch(e){
this.dispatchException(e);
}
},onStateChange:function(){
var _a94=this.transport.readyState;
if(_a94>1&&!((_a94==4)&&this._complete)){
this.respondToReadyState(this.transport.readyState);
}
},setRequestHeaders:function(){
var _a95={"X-Requested-With":"XMLHttpRequest","Accept":"text/javascript, text/html, application/xml, text/xml, */*","OpenLayers":true};
if(this.method=="post"){
_a95["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");
if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){
_a95["Connection"]="close";
}
}
if(typeof this.options.requestHeaders=="object"){
var _a96=this.options.requestHeaders;
if(typeof _a96.push=="function"){
for(var i=0,_a98=_a96.length;i<_a98;i+=2){
_a95[_a96[i]]=_a96[i+1];
}
}else{
for(var i in _a96){
_a95[i]=_a96[i];
}
}
}
for(var name in _a95){
this.transport.setRequestHeader(name,_a95[name]);
}
},success:function(){
var _a9a=this.getStatus();
return !_a9a||(_a9a>=200&&_a9a<300);
},getStatus:function(){
try{
return this.transport.status||0;
}
catch(e){
return 0;
}
},respondToReadyState:function(_a9b){
var _a9c=OpenLayers.Ajax.Request.Events[_a9b];
var _a9d=new OpenLayers.Ajax.Response(this);
if(_a9c=="Complete"){
try{
this._complete=true;
(this.options["on"+_a9d.status]||this.options["on"+(this.success()?"Success":"Failure")]||OpenLayers.Ajax.emptyFunction)(_a9d);
}
catch(e){
this.dispatchException(e);
}
var _a9e=_a9d.getHeader("Content-type");
}
try{
(this.options["on"+_a9c]||OpenLayers.Ajax.emptyFunction)(_a9d);
OpenLayers.Ajax.Responders.dispatch("on"+_a9c,this,_a9d);
}
catch(e){
this.dispatchException(e);
}
if(_a9c=="Complete"){
this.transport.onreadystatechange=OpenLayers.Ajax.emptyFunction;
}
},getHeader:function(name){
try{
return this.transport.getResponseHeader(name);
}
catch(e){
return null;
}
},dispatchException:function(_aa0){
var _aa1=this.options.onException;
if(_aa1){
_aa1(this,_aa0);
OpenLayers.Ajax.Responders.dispatch("onException",this,_aa0);
}else{
var _aa2=false;
var _aa3=OpenLayers.Ajax.Responders.responders;
for(var i=0;i<_aa3.length;i++){
if(_aa3[i].onException){
_aa2=true;
break;
}
}
if(_aa2){
OpenLayers.Ajax.Responders.dispatch("onException",this,_aa0);
}else{
throw _aa0;
}
}
}});
OpenLayers.Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];
OpenLayers.Ajax.Response=OpenLayers.Class({status:0,statusText:"",initialize:function(_aa5){
this.request=_aa5;
var _aa6=this.transport=_aa5.transport,_aa7=this.readyState=_aa6.readyState;
if((_aa7>2&&!(!!(window.attachEvent&&!window.opera)))||_aa7==4){
this.status=this.getStatus();
this.statusText=this.getStatusText();
this.responseText=_aa6.responseText==null?"":String(_aa6.responseText);
}
if(_aa7==4){
var xml=_aa6.responseXML;
this.responseXML=xml===undefined?null:xml;
}
},getStatus:OpenLayers.Ajax.Request.prototype.getStatus,getStatusText:function(){
try{
return this.transport.statusText||"";
}
catch(e){
return "";
}
},getHeader:OpenLayers.Ajax.Request.prototype.getHeader,getResponseHeader:function(name){
return this.transport.getResponseHeader(name);
}});
OpenLayers.Ajax.getElementsByTagNameNS=function(_aaa,_aab,_aac,_aad){
var elem=null;
if(_aaa.getElementsByTagNameNS){
elem=_aaa.getElementsByTagNameNS(_aab,_aad);
}else{
elem=_aaa.getElementsByTagName(_aac+":"+_aad);
}
return elem;
};
OpenLayers.Ajax.serializeXMLToString=function(_aaf){
var _ab0=new XMLSerializer();
var data=_ab0.serializeToString(_aaf);
return data;
};
OpenLayers.Control.DragFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,onStart:function(_ab2,_ab3){
},onDrag:function(_ab4,_ab5){
},onComplete:function(_ab6,_ab7){
},layer:null,feature:null,dragCallbacks:{},featureCallbacks:{},lastPixel:null,initialize:function(_ab8,_ab9){
OpenLayers.Control.prototype.initialize.apply(this,[_ab9]);
this.layer=_ab8;
this.handlers={drag:new OpenLayers.Handler.Drag(this,OpenLayers.Util.extend({down:this.downFeature,move:this.moveFeature,up:this.upFeature,out:this.cancel,done:this.doneDragging},this.dragCallbacks)),feature:new OpenLayers.Handler.Feature(this,this.layer,OpenLayers.Util.extend({over:this.overFeature,out:this.outFeature},this.featureCallbacks),{geometryTypes:this.geometryTypes})};
},destroy:function(){
this.layer=null;
OpenLayers.Control.prototype.destroy.apply(this,[]);
},activate:function(){
return (this.handlers.feature.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments));
},deactivate:function(){
this.handlers.drag.deactivate();
this.handlers.feature.deactivate();
this.feature=null;
this.dragging=false;
this.lastPixel=null;
OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass+"Over");
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);
},overFeature:function(_aba){
if(!this.handlers.drag.dragging){
this.feature=_aba;
this.handlers.drag.activate();
this.over=true;
OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass+"Over");
}else{
if(this.feature.id==_aba.id){
this.over=true;
}else{
this.over=false;
}
}
},downFeature:function(_abb){
this.lastPixel=_abb;
this.onStart(this.feature,_abb);
},moveFeature:function(_abc){
var res=this.map.getResolution();
this.feature.geometry.move(res*(_abc.x-this.lastPixel.x),res*(this.lastPixel.y-_abc.y));
this.layer.drawFeature(this.feature);
this.lastPixel=_abc;
this.onDrag(this.feature,_abc);
},upFeature:function(_abe){
if(!this.over){
this.handlers.drag.deactivate();
}
},doneDragging:function(_abf){
this.onComplete(this.feature,_abf);
},outFeature:function(_ac0){
if(!this.handlers.drag.dragging){
this.over=false;
this.handlers.drag.deactivate();
OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass+"Over");
this.feature=null;
}else{
if(this.feature.id==_ac0.id){
this.over=false;
}
}
},cancel:function(){
this.handlers.drag.deactivate();
this.over=false;
},setMap:function(map){
this.handlers.drag.setMap(map);
this.handlers.feature.setMap(map);
OpenLayers.Control.prototype.setMap.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Control.DragFeature"});
OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,interval:25,draw:function(){
this.handler=new OpenLayers.Handler.Drag(this,{"move":this.panMap,"done":this.panMapDone},{interval:this.interval});
},panMap:function(xy){
this.panned=true;
this.map.pan(this.handler.last.x-xy.x,this.handler.last.y-xy.y,{dragging:this.handler.dragging,animate:false});
},panMapDone:function(xy){
if(this.panned){
this.panMap(xy);
this.panned=false;
}
},CLASS_NAME:"OpenLayers.Control.DragPan"});
OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{slideFactor:75,initialize:function(){
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
if(this.handler){
this.handler.destroy();
}
this.handler=null;
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},draw:function(){
this.handler=new OpenLayers.Handler.Keyboard(this,{"keydown":this.defaultKeyPress});
this.activate();
},defaultKeyPress:function(evt){
switch(evt.keyCode){
case OpenLayers.Event.KEY_LEFT:
this.map.pan(-this.slideFactor,0);
break;
case OpenLayers.Event.KEY_RIGHT:
this.map.pan(this.slideFactor,0);
break;
case OpenLayers.Event.KEY_UP:
this.map.pan(0,-this.slideFactor);
break;
case OpenLayers.Event.KEY_DOWN:
this.map.pan(0,this.slideFactor);
break;
case 33:
var size=this.map.getSize();
this.map.pan(0,-0.75*size.h);
break;
case 34:
var size=this.map.getSize();
this.map.pan(0,0.75*size.h);
break;
case 35:
var size=this.map.getSize();
this.map.pan(0.75*size.w,0);
break;
case 36:
var size=this.map.getSize();
this.map.pan(-0.75*size.w,0);
break;
case 43:
case 61:
case 187:
case 107:
this.map.zoomIn();
break;
case 45:
case 109:
case 189:
case 95:
this.map.zoomOut();
break;
}
},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"});
OpenLayers.Control.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Control,{hover:false,maxFeatures:10,layers:null,queryVisible:false,url:null,layerUrls:null,infoFormat:"text/html",vendorParams:{},format:null,formatOptions:null,handlerOptions:null,handler:null,hoverRequest:null,EVENT_TYPES:["getfeatureinfo"],initialize:function(_ac6){
this.EVENT_TYPES=OpenLayers.Control.WMSGetFeatureInfo.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
_ac6=_ac6||{};
_ac6.handlerOptions=_ac6.handlerOptions||{};
OpenLayers.Control.prototype.initialize.apply(this,[_ac6]);
if(!this.format){
this.format=new OpenLayers.Format.WMSGetFeatureInfo(_ac6.formatOptions);
}
if(this.hover){
this.handler=new OpenLayers.Handler.Hover(this,{"move":this.cancelHover,"pause":this.getInfoForHover},OpenLayers.Util.extend(this.handlerOptions.hover||{},{"delay":250}));
}else{
this.handler=new OpenLayers.Handler.Click(this,{click:this.getInfoForClick},this.handlerOptions.click||{});
}
},activate:function(){
if(!this.active){
this.handler.activate();
}
return OpenLayers.Control.prototype.activate.apply(this,arguments);
},deactivate:function(){
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);
},getInfoForClick:function(evt){
OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait");
this.request(evt.xy,{});
},getInfoForHover:function(evt){
this.request(evt.xy,{hover:true});
},cancelHover:function(){
if(this.hoverRequest){
this.hoverRequest.abort();
this.hoverRequest=null;
}
},findLayers:function(){
var _ac9=[];
var _aca=this.layers||this.map.layers;
var _acb,url;
for(var i=0,len=_aca.length;i<len;++i){
_acb=_aca[i];
if(_acb instanceof OpenLayers.Layer.WMS&&(!this.queryVisible||_acb.getVisibility())){
url=_acb.url instanceof Array?_acb.url[0]:_acb.url;
if(!this.url){
this.url=url;
}
if(this.urlMatches(url)){
_ac9.push(_acb);
}
}
}
return _ac9;
},urlMatches:function(url){
var _ad0=OpenLayers.Util.isEquivalentUrl(this.url,url);
if(!_ad0&&this.layerUrls){
for(var i=0,len=this.layerUrls.length;i<len;++i){
if(OpenLayers.Util.isEquivalentUrl(this.layerUrls[i],url)){
_ad0=true;
break;
}
}
}
return _ad0;
},request:function(_ad3,_ad4){
_ad4=_ad4||{};
var _ad5=[];
var _ad6=[];
var _ad7=this.findLayers();
if(_ad7.length>0){
for(var i=0,len=_ad7.length;i<len;i++){
_ad5=_ad5.concat(_ad7[i].params.LAYERS);
if(_ad7[i].params.STYLES){
_ad6=_ad6.concat(_ad7[i].params.STYLES);
}else{
if(_ad7[i].params.LAYERS instanceof Array){
_ad6=_ad6.concat(new Array(_ad7[i].params.LAYERS.length));
}else{
_ad6=_ad6.concat(_ad7[i].params.LAYERS.replace(/[^,]/g,""));
}
}
}
var _ada={url:this.url,params:OpenLayers.Util.applyDefaults({service:"WMS",version:"1.1.0",request:"GetFeatureInfo",layers:_ad5,query_layers:_ad5,styles:_ad6,bbox:this.map.getExtent().toBBOX(),srs:this.map.getProjection(),feature_count:this.maxFeatures,x:_ad3.x,y:_ad3.y,height:this.map.getSize().h,width:this.map.getSize().w,info_format:this.infoFormat},this.vendorParams),callback:function(_adb){
this.handleResponse(_ad3,_adb);
},scope:this};
var _adc=OpenLayers.Request.GET(_ada);
if(_ad4.hover===true){
this.hoverRequest=_adc.priv;
}
}else{
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait");
}
},handleResponse:function(xy,_ade){
var doc=_ade.responseXML;
if(!doc||!doc.documentElement){
doc=_ade.responseText;
}
var _ae0=this.format.read(doc);
this.events.triggerEvent("getfeatureinfo",{text:_ade.responseText,features:_ae0,request:_ade,xy:xy});
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait");
},setMap:function(map){
this.handler.setMap(map);
OpenLayers.Control.prototype.setMap.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Control.WMSGetFeatureInfo"});
OpenLayers.State={UNKNOWN:"Unknown",INSERT:"Insert",UPDATE:"Update",DELETE:"Delete"};
OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,bounds:null,state:null,style:null,renderIntent:"default",initialize:function(_ae2,_ae3,_ae4){
OpenLayers.Feature.prototype.initialize.apply(this,[null,null,_ae3]);
this.lonlat=null;
this.geometry=_ae2?_ae2:null;
this.state=null;
this.attributes={};
if(_ae3){
this.attributes=OpenLayers.Util.extend(this.attributes,_ae3);
}
this.style=_ae4?_ae4:null;
},destroy:function(){
if(this.layer){
this.layer.removeFeatures(this);
this.layer=null;
}
this.geometry=null;
OpenLayers.Feature.prototype.destroy.apply(this,arguments);
},clone:function(){
return new OpenLayers.Feature.Vector(this.geometry?this.geometry.clone():null,this.attributes,this.style);
},onScreen:function(_ae5){
var _ae6=false;
if(this.layer&&this.layer.map){
var _ae7=this.layer.map.getExtent();
if(_ae5){
var _ae8=this.geometry.getBounds();
_ae6=_ae7.intersectsBounds(_ae8);
}else{
var _ae9=_ae7.toGeometry();
_ae6=_ae9.intersects(this.geometry);
}
}
return _ae6;
},createMarker:function(){
return null;
},destroyMarker:function(){
},createPopup:function(){
return null;
},atPoint:function(_aea,_aeb,_aec){
var _aed=false;
if(this.geometry){
_aed=this.geometry.atPoint(_aea,_aeb,_aec);
}
return _aed;
},destroyPopup:function(){
},move:function(_aee){
if(!this.layer||!this.geometry.move){
return;
}
var _aef;
if(_aee.CLASS_NAME=="OpenLayers.LonLat"){
_aef=this.layer.getViewPortPxFromLonLat(_aee);
}else{
_aef=_aee;
}
var _af0=this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());
var res=this.layer.map.getResolution();
this.geometry.move(res*(_aef.x-_af0.x),res*(_af0.y-_aef.y));
this.layer.drawFeature(this);
return _af0;
},toState:function(_af2){
if(_af2==OpenLayers.State.UPDATE){
switch(this.state){
case OpenLayers.State.UNKNOWN:
case OpenLayers.State.DELETE:
this.state=_af2;
break;
case OpenLayers.State.UPDATE:
case OpenLayers.State.INSERT:
break;
}
}else{
if(_af2==OpenLayers.State.INSERT){
switch(this.state){
case OpenLayers.State.UNKNOWN:
break;
default:
this.state=_af2;
break;
}
}else{
if(_af2==OpenLayers.State.DELETE){
switch(this.state){
case OpenLayers.State.INSERT:
break;
case OpenLayers.State.DELETE:
break;
case OpenLayers.State.UNKNOWN:
case OpenLayers.State.UPDATE:
this.state=_af2;
break;
}
}else{
if(_af2==OpenLayers.State.UNKNOWN){
this.state=_af2;
}
}
}
}
},CLASS_NAME:"OpenLayers.Feature.Vector"});
OpenLayers.Feature.Vector.style={"default":{fillColor:"#ee9900",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},"select":{fillColor:"blue",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer"},"temporary":{fillColor:"#66cccc",fillOpacity:0.2,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#66cccc",strokeOpacity:1,strokeLinecap:"round",strokeWidth:2,strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},"delete":{display:"none"}};
OpenLayers.Feature.WFS=OpenLayers.Class(OpenLayers.Feature,{initialize:function(_af3,_af4){
var _af5=arguments;
var data=this.processXMLNode(_af4);
_af5=new Array(_af3,data.lonlat,data);
OpenLayers.Feature.prototype.initialize.apply(this,_af5);
this.createMarker();
this.layer.addMarker(this.marker);
},destroy:function(){
if(this.marker!=null){
this.layer.removeMarker(this.marker);
}
OpenLayers.Feature.prototype.destroy.apply(this,arguments);
},processXMLNode:function(_af7){
var _af8=OpenLayers.Ajax.getElementsByTagNameNS(_af7,"http://www.opengis.net/gml","gml","Point");
var text=OpenLayers.Util.getXmlNodeValue(OpenLayers.Ajax.getElementsByTagNameNS(_af8[0],"http://www.opengis.net/gml","gml","coordinates")[0]);
var _afa=text.split(",");
return {lonlat:new OpenLayers.LonLat(parseFloat(_afa[0]),parseFloat(_afa[1])),id:null};
},CLASS_NAME:"OpenLayers.Feature.WFS"});
OpenLayers.Format.WFSCapabilities.v1=OpenLayers.Class(OpenLayers.Format.WFSCapabilities,{initialize:function(_afb){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_afb]);
this.options=_afb;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var _afd={};
var root=data.documentElement;
this.runChildNodes(_afd,root);
return _afd;
},runChildNodes:function(obj,node){
var _b01=node.childNodes;
var _b02,_b03;
for(var i=0;i<_b01.length;++i){
_b02=_b01[i];
if(_b02.nodeType==1){
_b03=this["read_cap_"+_b02.nodeName];
if(_b03){
_b03.apply(this,[obj,_b02]);
}
}
}
},read_cap_FeatureTypeList:function(_b05,node){
var _b07={featureTypes:[]};
this.runChildNodes(_b07,node);
_b05.featureTypeList=_b07;
},read_cap_FeatureType:function(_b08,node,_b0a){
var _b0b={};
this.runChildNodes(_b0b,node);
_b08.featureTypes.push(_b0b);
},read_cap_Name:function(obj,node){
var name=this.getChildValue(node);
if(name){
obj.name=name;
}
},read_cap_Title:function(obj,node){
var _b11=this.getChildValue(node);
if(_b11){
obj.title=_b11;
}
},read_cap_Abstract:function(obj,node){
var abst=this.getChildValue(node);
if(abst){
obj["abstract"]=abst;
}
},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1"});
OpenLayers.Format.WMC.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ol:"http://openlayers.org/context",wmc:"http://www.opengis.net/context",sld:"http://www.opengis.net/sld",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"",getNamespacePrefix:function(uri){
var _b16=null;
if(uri==null){
_b16=this.namespaces[this.defaultPrefix];
}else{
for(_b16 in this.namespaces){
if(this.namespaces[_b16]==uri){
break;
}
}
}
return _b16;
},defaultPrefix:"wmc",rootPrefix:null,defaultStyleName:"",defaultStyleTitle:"Default",initialize:function(_b17){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_b17]);
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
this.rootPrefix=root.prefix;
var _b1a={version:root.getAttribute("version")};
this.runChildNodes(_b1a,root);
return _b1a;
},runChildNodes:function(obj,node){
var _b1d=node.childNodes;
var _b1e,_b1f,_b20,_b21;
for(var i=0,len=_b1d.length;i<len;++i){
_b1e=_b1d[i];
if(_b1e.nodeType==1){
_b20=this.getNamespacePrefix(_b1e.namespaceURI);
_b21=_b1e.nodeName.split(":").pop();
_b1f=this["read_"+_b20+"_"+_b21];
if(_b1f){
_b1f.apply(this,[obj,_b1e]);
}
}
}
},read_wmc_General:function(_b24,node){
this.runChildNodes(_b24,node);
},read_wmc_BoundingBox:function(_b26,node){
_b26.projection=node.getAttribute("SRS");
_b26.bounds=new OpenLayers.Bounds(parseFloat(node.getAttribute("minx")),parseFloat(node.getAttribute("miny")),parseFloat(node.getAttribute("maxx")),parseFloat(node.getAttribute("maxy")));
},read_wmc_LayerList:function(_b28,node){
_b28.layers=[];
this.runChildNodes(_b28,node);
},read_wmc_Layer:function(_b2a,node){
var _b2c={params:this.layerParams||{},options:{visibility:(node.getAttribute("hidden")!="1"),queryable:(node.getAttribute("queryable")=="1")},formats:[],styles:[]};
this.runChildNodes(_b2c,node);
_b2c.params.layers=_b2c.name;
_b2c.options.maxExtent=_b2c.maxExtent;
var _b2d=this.getLayerFromInfo(_b2c);
_b2a.layers.push(_b2d);
},getLayerFromInfo:function(_b2e){
var _b2f=_b2e.options;
if(this.layerOptions){
OpenLayers.Util.applyDefaults(_b2f,this.layerOptions);
}
var _b30=new OpenLayers.Layer.WMS(_b2e.title,_b2e.href,_b2e.params,_b2f);
return _b30;
},read_wmc_Extension:function(obj,node){
this.runChildNodes(obj,node);
},read_ol_units:function(_b33,node){
_b33.options.units=this.getChildValue(node);
},read_ol_maxExtent:function(obj,node){
var _b37=new OpenLayers.Bounds(node.getAttribute("minx"),node.getAttribute("miny"),node.getAttribute("maxx"),node.getAttribute("maxy"));
obj.maxExtent=_b37;
},read_ol_transparent:function(_b38,node){
_b38.params.transparent=this.getChildValue(node);
},read_ol_numZoomLevels:function(_b3a,node){
_b3a.options.numZoomLevels=parseInt(this.getChildValue(node));
},read_ol_opacity:function(_b3c,node){
_b3c.options.opacity=parseFloat(this.getChildValue(node));
},read_ol_singleTile:function(_b3e,node){
_b3e.options.singleTile=(this.getChildValue(node)=="true");
},read_ol_isBaseLayer:function(_b40,node){
_b40.options.isBaseLayer=(this.getChildValue(node)=="true");
},read_ol_displayInLayerSwitcher:function(_b42,node){
_b42.options.displayInLayerSwitcher=(this.getChildValue(node)=="true");
},read_wmc_Server:function(_b44,node){
_b44.params.version=node.getAttribute("version");
this.runChildNodes(_b44,node);
},read_wmc_FormatList:function(_b46,node){
this.runChildNodes(_b46,node);
},read_wmc_Format:function(_b48,node){
var _b4a=this.getChildValue(node);
_b48.formats.push(_b4a);
if(node.getAttribute("current")=="1"){
_b48.params.format=_b4a;
}
},read_wmc_StyleList:function(_b4b,node){
this.runChildNodes(_b4b,node);
},read_wmc_Style:function(_b4d,node){
var _b4f={};
this.runChildNodes(_b4f,node);
if(node.getAttribute("current")=="1"){
if(_b4f.href){
_b4d.params.sld=_b4f.href;
}else{
if(_b4f.body){
_b4d.params.sld_body=_b4f.body;
}else{
_b4d.params.styles=_b4f.name;
}
}
}
_b4d.styles.push(_b4f);
},read_wmc_SLD:function(_b50,node){
this.runChildNodes(_b50,node);
},read_sld_StyledLayerDescriptor:function(sld,node){
var xml=OpenLayers.Format.XML.prototype.write.apply(this,[node]);
sld.body=xml;
},read_wmc_OnlineResource:function(obj,node){
obj.href=this.getAttributeNS(node,this.namespaces.xlink,"href");
},read_wmc_Name:function(obj,node){
var name=this.getChildValue(node);
if(name){
obj.name=name;
}
},read_wmc_Title:function(obj,node){
var _b5c=this.getChildValue(node);
if(_b5c){
obj.title=_b5c;
}
},read_wmc_MetadataURL:function(_b5d,node){
var _b5f={};
var _b60=node.getElementsByTagName("OnlineResource");
if(_b60.length>0){
this.read_wmc_OnlineResource(_b5f,_b60[0]);
}
_b5d.options.metadataURL=_b5f.href;
},read_wmc_Abstract:function(obj,node){
var abst=this.getChildValue(node);
if(abst){
obj["abstract"]=abst;
}
},read_wmc_LatLonBoundingBox:function(_b64,node){
_b64.llbbox=[parseFloat(node.getAttribute("minx")),parseFloat(node.getAttribute("miny")),parseFloat(node.getAttribute("maxx")),parseFloat(node.getAttribute("maxy"))];
},read_wmc_LegendURL:function(_b66,node){
var _b68={width:node.getAttribute("width"),height:node.getAttribute("height")};
var _b69=node.getElementsByTagName("OnlineResource");
if(_b69.length>0){
this.read_wmc_OnlineResource(_b68,_b69[0]);
}
_b66.legend=_b68;
},write:function(_b6a,_b6b){
var root=this.createElementDefaultNS("ViewContext");
this.setAttributes(root,{version:this.VERSION,id:(_b6b&&typeof _b6b.id=="string")?_b6b.id:OpenLayers.Util.createUniqueID("OpenLayers_Context_")});
this.setAttributeNS(root,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation);
root.appendChild(this.write_wmc_General(_b6a));
root.appendChild(this.write_wmc_LayerList(_b6a));
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},createElementDefaultNS:function(name,_b6e,_b6f){
var node=this.createElementNS(this.namespaces[this.defaultPrefix],name);
if(_b6e){
node.appendChild(this.createTextNode(_b6e));
}
if(_b6f){
this.setAttributes(node,_b6f);
}
return node;
},setAttributes:function(node,obj){
var _b73;
for(var name in obj){
_b73=obj[name].toString();
if(_b73.match(/[A-Z]/)){
this.setAttributeNS(node,null,name,_b73);
}else{
node.setAttribute(name,_b73);
}
}
},write_wmc_General:function(_b75){
var node=this.createElementDefaultNS("General");
if(_b75.size){
node.appendChild(this.createElementDefaultNS("Window",null,{width:_b75.size.w,height:_b75.size.h}));
}
var _b77=_b75.bounds;
node.appendChild(this.createElementDefaultNS("BoundingBox",null,{minx:_b77.left.toPrecision(10),miny:_b77.bottom.toPrecision(10),maxx:_b77.right.toPrecision(10),maxy:_b77.top.toPrecision(10),SRS:_b75.projection}));
node.appendChild(this.createElementDefaultNS("Title",_b75.title));
node.appendChild(this.write_ol_MapExtension(_b75));
return node;
},write_ol_MapExtension:function(_b78){
var node=this.createElementDefaultNS("Extension");
var _b7a=_b78.maxExtent;
if(_b7a){
var _b7b=this.createElementNS(this.namespaces.ol,"ol:maxExtent");
this.setAttributes(_b7b,{minx:_b7a.left.toPrecision(10),miny:_b7a.bottom.toPrecision(10),maxx:_b7a.right.toPrecision(10),maxy:_b7a.top.toPrecision(10)});
node.appendChild(_b7b);
}
return node;
},write_wmc_LayerList:function(_b7c){
var list=this.createElementDefaultNS("LayerList");
var _b7e;
for(var i=0,len=_b7c.layers.length;i<len;++i){
_b7e=_b7c.layers[i];
if(_b7e instanceof OpenLayers.Layer.WMS){
list.appendChild(this.write_wmc_Layer(_b7e));
}
}
return list;
},write_wmc_Layer:function(_b81){
var node=this.createElementDefaultNS("Layer",null,{queryable:_b81.queryable?"1":"0",hidden:_b81.visibility?"0":"1"});
node.appendChild(this.write_wmc_Server(_b81));
node.appendChild(this.createElementDefaultNS("Name",_b81.params["LAYERS"]));
node.appendChild(this.createElementDefaultNS("Title",_b81.name));
if(_b81.metadataURL){
node.appendChild(this.write_wmc_MetadataURL(_b81));
}
node.appendChild(this.write_wmc_FormatList(_b81));
node.appendChild(this.write_wmc_StyleList(_b81));
node.appendChild(this.write_wmc_LayerExtension(_b81));
return node;
},write_wmc_LayerExtension:function(_b83){
var node=this.createElementDefaultNS("Extension");
var _b85=_b83.maxExtent;
var _b86=this.createElementNS(this.namespaces.ol,"ol:maxExtent");
this.setAttributes(_b86,{minx:_b85.left.toPrecision(10),miny:_b85.bottom.toPrecision(10),maxx:_b85.right.toPrecision(10),maxy:_b85.top.toPrecision(10)});
node.appendChild(_b86);
var _b87=_b83.params["TRANSPARENT"];
if(_b87){
var _b88=this.createElementNS(this.namespaces.ol,"ol:transparent");
_b88.appendChild(this.createTextNode(_b87));
node.appendChild(_b88);
}
var _b89=["numZoomLevels","units","isBaseLayer","opacity","displayInLayerSwitcher","singleTile"];
var _b8a;
for(var i=0,len=_b89.length;i<len;++i){
_b8a=this.createOLPropertyNode(_b83,_b89[i]);
if(_b8a){
node.appendChild(_b8a);
}
}
return node;
},createOLPropertyNode:function(obj,prop){
var node=null;
if(obj[prop]!=null){
node=this.createElementNS(this.namespaces.ol,"ol:"+prop);
node.appendChild(this.createTextNode(obj[prop].toString()));
}
return node;
},write_wmc_Server:function(_b90){
var node=this.createElementDefaultNS("Server");
this.setAttributes(node,{service:"OGC:WMS",version:_b90.params["VERSION"]});
node.appendChild(this.write_wmc_OnlineResource(_b90.url));
return node;
},write_wmc_MetadataURL:function(_b92){
var node=this.createElementDefaultNS("MetadataURL");
node.appendChild(this.write_wmc_OnlineResource(_b92.metadataURL));
return node;
},write_wmc_FormatList:function(_b94){
var node=this.createElementDefaultNS("FormatList");
node.appendChild(this.createElementDefaultNS("Format",_b94.params["FORMAT"],{current:"1"}));
return node;
},write_wmc_StyleList:function(_b96){
var node=this.createElementDefaultNS("StyleList");
var _b98=this.createElementDefaultNS("Style",null,{current:"1"});
if(_b96.params["SLD"]){
var sld=this.createElementDefaultNS("SLD");
var link=this.write_wmc_OnlineResource(_b96.params["SLD"]);
sld.appendChild(link);
_b98.appendChild(sld);
}else{
if(_b96.params["SLD_BODY"]){
var sld=this.createElementDefaultNS("SLD");
var body=_b96.params["SLD_BODY"];
var doc=OpenLayers.Format.XML.prototype.read.apply(this,[body]);
var _b9d=doc.documentElement;
if(sld.ownerDocument&&sld.ownerDocument.importNode){
_b9d=sld.ownerDocument.importNode(_b9d,true);
}
sld.appendChild(_b9d);
_b98.appendChild(sld);
}else{
var name=_b96.params["STYLES"]?_b96.params["STYLES"]:this.defaultStyleName;
_b98.appendChild(this.createElementDefaultNS("Name",name));
_b98.appendChild(this.createElementDefaultNS("Title",this.defaultStyleTitle));
}
}
node.appendChild(_b98);
return node;
},write_wmc_OnlineResource:function(href){
var node=this.createElementDefaultNS("OnlineResource");
this.setAttributeNS(node,this.namespaces.xlink,"xlink:type","simple");
this.setAttributeNS(node,this.namespaces.xlink,"xlink:href",href);
return node;
},CLASS_NAME:"OpenLayers.Format.WMC.v1"});
OpenLayers.Format.WMSCapabilities.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1,{version:"1.1.0",initialize:function(_ba1){
OpenLayers.Format.WMSCapabilities.v1_1.prototype.initialize.apply(this,[_ba1]);
},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_0"});
OpenLayers.Format.WMSCapabilities.v1_1_1=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1,{version:"1.1.1",initialize:function(_ba2){
OpenLayers.Format.WMSCapabilities.v1_1.prototype.initialize.apply(this,[_ba2]);
},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_1"});
OpenLayers.Format.WMSDescribeLayer.v1_1=OpenLayers.Class(OpenLayers.Format.WMSDescribeLayer,{initialize:function(_ba3){
OpenLayers.Format.WMSDescribeLayer.prototype.initialize.apply(this,[_ba3]);
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _ba6=root.childNodes;
var _ba7=[];
for(var i=0;i<_ba6.length;++i){
childNode=_ba6[i];
nodeName=childNode.nodeName;
if(nodeName=="LayerDescription"){
var _ba9="";
var _baa="";
var _bab="";
if(childNode.getAttribute("owsType")){
_ba9=childNode.getAttribute("owsType");
_baa=childNode.getAttribute("owsURL");
}else{
if(childNode.getAttribute("wfs")!=""){
_ba9="WFS";
_baa=childNode.getAttribute("wfs");
}else{
if(childNode.getAttribute("wcs")!=""){
_ba9="WCS";
_baa=childNode.getAttribute("wcs");
}
}
}
query=childNode.getElementsByTagName("Query");
if(query.length>0){
_bab=query[0].getAttribute("typeName");
if(!_bab){
_bab=query[0].getAttribute("typename");
}
}
_ba7.push({owsType:_ba9,owsURL:_baa,typeName:_bab});
}
}
return _ba7;
},CLASS_NAME:"OpenLayers.Format.WMSDescribeLayer.v1_1"});
OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:"olHandlerBoxZoomBox",boxCharacteristics:null,initialize:function(_bac,_bad,_bae){
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
var _bad={"down":this.startBox,"move":this.moveBox,"out":this.removeBox,"up":this.endBox};
this.dragHandler=new OpenLayers.Handler.Drag(this,_bad,{keyMask:this.keyMask});
},setMap:function(map){
OpenLayers.Handler.prototype.setMap.apply(this,arguments);
if(this.dragHandler){
this.dragHandler.setMap(map);
}
},startBox:function(xy){
this.zoomBox=OpenLayers.Util.createDiv("zoomBox",this.dragHandler.start);
this.zoomBox.className=this.boxDivClassName;
this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;
this.map.viewPortDiv.appendChild(this.zoomBox);
OpenLayers.Element.addClass(this.map.viewPortDiv,"olDrawBox");
},moveBox:function(xy){
var _bb2=this.dragHandler.start.x;
var _bb3=this.dragHandler.start.y;
var _bb4=Math.abs(_bb2-xy.x);
var _bb5=Math.abs(_bb3-xy.y);
this.zoomBox.style.width=Math.max(1,_bb4)+"px";
this.zoomBox.style.height=Math.max(1,_bb5)+"px";
this.zoomBox.style.left=xy.x<_bb2?xy.x+"px":_bb2+"px";
this.zoomBox.style.top=xy.y<_bb3?xy.y+"px":_bb3+"px";
var box=this.getBoxCharacteristics();
if(box.newBoxModel){
if(xy.x>_bb2){
this.zoomBox.style.width=Math.max(1,_bb4-box.xOffset)+"px";
}
if(xy.y>_bb3){
this.zoomBox.style.height=Math.max(1,_bb5-box.yOffset)+"px";
}
}
},endBox:function(end){
var _bb8;
if(Math.abs(this.dragHandler.start.x-end.x)>5||Math.abs(this.dragHandler.start.y-end.y)>5){
var _bb9=this.dragHandler.start;
var top=Math.min(_bb9.y,end.y);
var _bbb=Math.max(_bb9.y,end.y);
var left=Math.min(_bb9.x,end.x);
var _bbd=Math.max(_bb9.x,end.x);
_bb8=new OpenLayers.Bounds(left,_bbb,_bbd,top);
}else{
_bb8=this.dragHandler.start.clone();
}
this.removeBox();
this.callback("done",[_bb8]);
},removeBox:function(){
this.map.viewPortDiv.removeChild(this.zoomBox);
this.zoomBox=null;
this.boxCharacteristics=null;
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDrawBox");
},activate:function(){
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
this.dragHandler.activate();
return true;
}else{
return false;
}
},deactivate:function(){
if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
this.dragHandler.deactivate();
return true;
}else{
return false;
}
},getBoxCharacteristics:function(){
if(!this.boxCharacteristics){
var _bbe=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width"))+1;
var _bbf=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"))+1;
var _bc0=OpenLayers.Util.getBrowserName()=="msie"?document.compatMode!="BackCompat":true;
this.boxCharacteristics={xOffset:_bbe,yOffset:_bbf,newBoxModel:_bc0};
}
return this.boxCharacteristics;
},CLASS_NAME:"OpenLayers.Handler.Box"});
OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:"shiftKey",persist:false,irregular:false,angle:null,fixedRadius:false,feature:null,layer:null,origin:null,initialize:function(_bc1,_bc2,_bc3){
this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style["default"],{});
OpenLayers.Handler.prototype.initialize.apply(this,[_bc1,_bc2,_bc3]);
this.options=(_bc3)?_bc3:new Object();
},setOptions:function(_bc4){
OpenLayers.Util.extend(this.options,_bc4);
OpenLayers.Util.extend(this,_bc4);
},activate:function(){
var _bc5=false;
if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){
var _bc6={displayInLayerSwitcher:false,calculateInRange:function(){
return true;
}};
this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,_bc6);
this.map.addLayer(this.layer);
_bc5=true;
}
return _bc5;
},deactivate:function(){
var _bc7=false;
if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)){
if(this.dragging){
this.cancel();
}
if(this.layer.map!=null){
this.layer.destroy(false);
if(this.feature){
this.feature.destroy();
}
}
this.layer=null;
this.feature=null;
_bc7=true;
}
return _bc7;
},down:function(evt){
this.fixedRadius=!!(this.radius);
var _bc9=this.map.getLonLatFromPixel(evt.xy);
this.origin=new OpenLayers.Geometry.Point(_bc9.lon,_bc9.lat);
if(!this.fixedRadius||this.irregular){
this.radius=this.map.getResolution();
}
if(this.persist){
this.clear();
}
this.feature=new OpenLayers.Feature.Vector();
this.createGeometry();
this.callback("create",[this.origin,this.feature]);
this.layer.addFeatures([this.feature],{silent:true});
this.layer.drawFeature(this.feature,this.style);
},move:function(evt){
var _bcb=this.map.getLonLatFromPixel(evt.xy);
var _bcc=new OpenLayers.Geometry.Point(_bcb.lon,_bcb.lat);
if(this.irregular){
var ry=Math.sqrt(2)*Math.abs(_bcc.y-this.origin.y)/2;
this.radius=Math.max(this.map.getResolution()/2,ry);
}else{
if(this.fixedRadius){
this.origin=_bcc;
}else{
this.calculateAngle(_bcc,evt);
this.radius=Math.max(this.map.getResolution()/2,_bcc.distanceTo(this.origin));
}
}
this.modifyGeometry();
if(this.irregular){
var dx=_bcc.x-this.origin.x;
var dy=_bcc.y-this.origin.y;
var _bd0;
if(dy==0){
_bd0=dx/(this.radius*Math.sqrt(2));
}else{
_bd0=dx/dy;
}
this.feature.geometry.resize(1,this.origin,_bd0);
this.feature.geometry.move(dx/2,dy/2);
}
this.layer.drawFeature(this.feature,this.style);
},up:function(evt){
this.finalize();
if(this.start==this.last){
this.callback("done",[evt.xy]);
}
},out:function(evt){
this.finalize();
},createGeometry:function(){
this.angle=Math.PI*((1/this.sides)-(1/2));
if(this.snapAngle){
this.angle+=this.snapAngle*(Math.PI/180);
}
this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle);
},modifyGeometry:function(){
var _bd3,dx,dy,_bd6;
var ring=this.feature.geometry.components[0];
if(ring.components.length!=(this.sides+1)){
this.createGeometry();
ring=this.feature.geometry.components[0];
}
for(var i=0;i<this.sides;++i){
_bd6=ring.components[i];
_bd3=this.angle+(i*2*Math.PI/this.sides);
_bd6.x=this.origin.x+(this.radius*Math.cos(_bd3));
_bd6.y=this.origin.y+(this.radius*Math.sin(_bd3));
_bd6.clearBounds();
}
},calculateAngle:function(_bd9,evt){
var _bdb=Math.atan2(_bd9.y-this.origin.y,_bd9.x-this.origin.x);
if(this.snapAngle&&(this.snapToggle&&!evt[this.snapToggle])){
var _bdc=(Math.PI/180)*this.snapAngle;
this.angle=Math.round(_bdb/_bdc)*_bdc;
}else{
this.angle=_bdb;
}
},cancel:function(){
this.callback("cancel",null);
this.finalize();
},finalize:function(){
this.origin=null;
this.radius=this.options.radius;
},clear:function(){
this.layer.renderer.clear();
this.layer.destroyFeatures();
},callback:function(name,args){
if(this.callbacks[name]){
this.callbacks[name].apply(this.control,[this.feature.geometry.clone()]);
}
if(!this.persist&&(name=="done"||name=="cancel")){
this.clear();
}
},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"});
OpenLayers.Layer.EventPane=OpenLayers.Class(OpenLayers.Layer,{smoothDragPan:true,isBaseLayer:true,isFixed:true,pane:null,mapObject:null,initialize:function(name,_be0){
OpenLayers.Layer.prototype.initialize.apply(this,arguments);
if(this.pane==null){
this.pane=OpenLayers.Util.createDiv(this.div.id+"_EventPane");
}
},destroy:function(){
this.mapObject=null;
OpenLayers.Layer.prototype.destroy.apply(this,arguments);
},setMap:function(map){
OpenLayers.Layer.prototype.setMap.apply(this,arguments);
this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1;
this.pane.style.display=this.div.style.display;
this.pane.style.width="100%";
this.pane.style.height="100%";
if(OpenLayers.Util.getBrowserName()=="msie"){
this.pane.style.background="url("+OpenLayers.Util.getImagesLocation()+"blank.gif)";
}
if(this.isFixed){
this.map.viewPortDiv.appendChild(this.pane);
}else{
this.map.layerContainerDiv.appendChild(this.pane);
}
this.loadMapObject();
if(this.mapObject==null){
this.loadWarningMessage();
}
},removeMap:function(map){
if(this.pane&&this.pane.parentNode){
this.pane.parentNode.removeChild(this.pane);
this.pane=null;
}
OpenLayers.Layer.prototype.removeMap.apply(this,arguments);
},loadWarningMessage:function(){
this.div.style.backgroundColor="darkblue";
var _be3=this.map.getSize();
var msgW=Math.min(_be3.w,300);
var msgH=Math.min(_be3.h,200);
var size=new OpenLayers.Size(msgW,msgH);
var _be7=new OpenLayers.Pixel(_be3.w/2,_be3.h/2);
var _be8=_be7.add(-size.w/2,-size.h/2);
var div=OpenLayers.Util.createDiv(this.name+"_warning",_be8,size,null,null,null,"auto");
div.style.padding="7px";
div.style.backgroundColor="yellow";
div.innerHTML=this.getWarningHTML();
this.div.appendChild(div);
},getWarningHTML:function(){
return "";
},display:function(_bea){
OpenLayers.Layer.prototype.display.apply(this,arguments);
this.pane.style.display=this.div.style.display;
},setZIndex:function(_beb){
OpenLayers.Layer.prototype.setZIndex.apply(this,arguments);
this.pane.style.zIndex=parseInt(this.div.style.zIndex)+1;
},moveTo:function(_bec,_bed,_bee){
OpenLayers.Layer.prototype.moveTo.apply(this,arguments);
if(this.mapObject!=null){
var _bef=this.map.getCenter();
var _bf0=this.map.getZoom();
if(_bef!=null){
var _bf1=this.getMapObjectCenter();
var _bf2=this.getOLLonLatFromMapObjectLonLat(_bf1);
var _bf3=this.getMapObjectZoom();
var _bf4=this.getOLZoomFromMapObjectZoom(_bf3);
if(!(_bef.equals(_bf2))||!(_bf0==_bf4)){
if(_bee&&this.dragPanMapObject&&this.smoothDragPan){
var _bf5=this.map.getViewPortPxFromLonLat(_bf2);
var _bf6=this.map.getViewPortPxFromLonLat(_bef);
this.dragPanMapObject(_bf6.x-_bf5.x,_bf5.y-_bf6.y);
}else{
var _bf7=this.getMapObjectLonLatFromOLLonLat(_bef);
var zoom=this.getMapObjectZoomFromOLZoom(_bf0);
this.setMapObjectCenter(_bf7,zoom,_bee);
}
}
}
}
},getLonLatFromViewPortPx:function(_bf9){
var _bfa=null;
if((this.mapObject!=null)&&(this.getMapObjectCenter()!=null)){
var _bfb=this.getMapObjectPixelFromOLPixel(_bf9);
var _bfc=this.getMapObjectLonLatFromMapObjectPixel(_bfb);
_bfa=this.getOLLonLatFromMapObjectLonLat(_bfc);
}
return _bfa;
},getViewPortPxFromLonLat:function(_bfd){
var _bfe=null;
if((this.mapObject!=null)&&(this.getMapObjectCenter()!=null)){
var _bff=this.getMapObjectLonLatFromOLLonLat(_bfd);
var _c00=this.getMapObjectPixelFromMapObjectLonLat(_bff);
_bfe=this.getOLPixelFromMapObjectPixel(_c00);
}
return _bfe;
},getOLLonLatFromMapObjectLonLat:function(_c01){
var _c02=null;
if(_c01!=null){
var lon=this.getLongitudeFromMapObjectLonLat(_c01);
var lat=this.getLatitudeFromMapObjectLonLat(_c01);
_c02=new OpenLayers.LonLat(lon,lat);
}
return _c02;
},getMapObjectLonLatFromOLLonLat:function(_c05){
var _c06=null;
if(_c05!=null){
_c06=this.getMapObjectLonLatFromLonLat(_c05.lon,_c05.lat);
}
return _c06;
},getOLPixelFromMapObjectPixel:function(_c07){
var _c08=null;
if(_c07!=null){
var x=this.getXFromMapObjectPixel(_c07);
var y=this.getYFromMapObjectPixel(_c07);
_c08=new OpenLayers.Pixel(x,y);
}
return _c08;
},getMapObjectPixelFromOLPixel:function(_c0b){
var _c0c=null;
if(_c0b!=null){
_c0c=this.getMapObjectPixelFromXY(_c0b.x,_c0b.y);
}
return _c0c;
},CLASS_NAME:"OpenLayers.Layer.EventPane"});
OpenLayers.Layer.FixedZoomLevels=OpenLayers.Class({initialize:function(){
},initResolutions:function(){
var _c0d=new Array("minZoomLevel","maxZoomLevel","numZoomLevels");
for(var i=0,len=_c0d.length;i<len;i++){
var _c10=_c0d[i];
this[_c10]=(this.options[_c10]!=null)?this.options[_c10]:this.map[_c10];
}
if((this.minZoomLevel==null)||(this.minZoomLevel<this.MIN_ZOOM_LEVEL)){
this.minZoomLevel=this.MIN_ZOOM_LEVEL;
}
var _c11;
var _c12=this.MAX_ZOOM_LEVEL-this.minZoomLevel+1;
if(((this.options.numZoomLevels==null)&&(this.options.maxZoomLevel!=null))||((this.numZoomLevels==null)&&(this.maxZoomLevel!=null))){
_c11=this.maxZoomLevel-this.minZoomLevel+1;
}else{
_c11=this.numZoomLevels;
}
if(_c11!=null){
this.numZoomLevels=Math.min(_c11,_c12);
}else{
this.numZoomLevels=_c12;
}
this.maxZoomLevel=this.minZoomLevel+this.numZoomLevels-1;
if(this.RESOLUTIONS!=null){
var _c13=0;
this.resolutions=[];
for(var i=this.minZoomLevel;i<=this.maxZoomLevel;i++){
this.resolutions[_c13++]=this.RESOLUTIONS[i];
}
this.maxResolution=this.resolutions[0];
this.minResolution=this.resolutions[this.resolutions.length-1];
}
},getResolution:function(){
if(this.resolutions!=null){
return OpenLayers.Layer.prototype.getResolution.apply(this,arguments);
}else{
var _c14=null;
var _c15=this.map.getSize();
var _c16=this.getExtent();
if((_c15!=null)&&(_c16!=null)){
_c14=Math.max(_c16.getWidth()/_c15.w,_c16.getHeight()/_c15.h);
}
return _c14;
}
},getExtent:function(){
var _c17=null;
var size=this.map.getSize();
var tlPx=new OpenLayers.Pixel(0,0);
var tlLL=this.getLonLatFromViewPortPx(tlPx);
var brPx=new OpenLayers.Pixel(size.w,size.h);
var brLL=this.getLonLatFromViewPortPx(brPx);
if((tlLL!=null)&&(brLL!=null)){
_c17=new OpenLayers.Bounds(tlLL.lon,brLL.lat,brLL.lon,tlLL.lat);
}
return _c17;
},getZoomForResolution:function(_c1d){
if(this.resolutions!=null){
return OpenLayers.Layer.prototype.getZoomForResolution.apply(this,arguments);
}else{
var _c1e=OpenLayers.Layer.prototype.getExtent.apply(this,[]);
return this.getZoomForExtent(_c1e);
}
},getOLZoomFromMapObjectZoom:function(_c1f){
var zoom=null;
if(_c1f!=null){
zoom=_c1f-this.minZoomLevel;
}
return zoom;
},getMapObjectZoomFromOLZoom:function(_c21){
var zoom=null;
if(_c21!=null){
zoom=_c21+this.minZoomLevel;
}
return zoom;
},CLASS_NAME:"OpenLayers.Layer.FixedZoomLevels"});
OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:false,initialize:function(name,url,_c25,_c26){
var _c27=arguments;
_c27=[name,_c26];
OpenLayers.Layer.prototype.initialize.apply(this,_c27);
this.url=url;
this.params=OpenLayers.Util.extend({},_c25);
},destroy:function(){
this.url=null;
this.params=null;
OpenLayers.Layer.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);
return obj;
},setUrl:function(_c29){
this.url=_c29;
},mergeNewParams:function(_c2a){
this.params=OpenLayers.Util.extend(this.params,_c2a);
return this.redraw();
},redraw:function(_c2b){
if(_c2b){
return this.mergeNewParams({"_olSalt":Math.random()});
}else{
return OpenLayers.Layer.prototype.redraw.apply(this,[]);
}
},selectUrl:function(_c2c,urls){
var _c2e=1;
for(var i=0,len=_c2c.length;i<len;i++){
_c2e*=_c2c.charCodeAt(i)*this.URL_HASH_FACTOR;
_c2e-=Math.floor(_c2e);
}
return urls[Math.floor(_c2e*urls.length)];
},getFullRequestString:function(_c31,_c32){
var url=_c32||this.url;
var _c34=OpenLayers.Util.extend({},this.params);
_c34=OpenLayers.Util.extend(_c34,_c31);
var _c35=OpenLayers.Util.getParameterString(_c34);
if(url instanceof Array){
url=this.selectUrl(_c35,url);
}
var _c36=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));
for(var key in _c34){
if(key.toUpperCase() in _c36){
delete _c34[key];
}
}
_c35=OpenLayers.Util.getParameterString(_c34);
var _c38=url;
if(_c35!=""){
var _c39=url.charAt(url.length-1);
if((_c39=="&")||(_c39=="?")){
_c38+=_c35;
}else{
if(url.indexOf("?")==-1){
_c38+="?"+_c35;
}else{
_c38+="&"+_c35;
}
}
}
return _c38;
},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});
OpenLayers.Layer.Image=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:true,url:null,extent:null,size:null,tile:null,aspectRatio:null,initialize:function(name,url,_c3c,size,_c3e){
this.url=url;
this.extent=_c3c;
this.maxExtent=_c3c;
this.size=size;
OpenLayers.Layer.prototype.initialize.apply(this,[name,_c3e]);
this.aspectRatio=(this.extent.getHeight()/this.size.h)/(this.extent.getWidth()/this.size.w);
},destroy:function(){
if(this.tile){
this.removeTileMonitoringHooks(this.tile);
this.tile.destroy();
this.tile=null;
}
OpenLayers.Layer.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.Image(this.name,this.url,this.extent,this.size,this.options);
}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);
return obj;
},setMap:function(map){
if(this.options.maxResolution==null){
this.options.maxResolution=this.aspectRatio*this.extent.getWidth()/this.size.w;
}
OpenLayers.Layer.prototype.setMap.apply(this,arguments);
},moveTo:function(_c41,_c42,_c43){
OpenLayers.Layer.prototype.moveTo.apply(this,arguments);
var _c44=(this.tile==null);
if(_c42||_c44){
this.setTileSize();
var ul=new OpenLayers.LonLat(this.extent.left,this.extent.top);
var ulPx=this.map.getLayerPxFromLonLat(ul);
if(_c44){
this.tile=new OpenLayers.Tile.Image(this,ulPx,this.extent,null,this.tileSize);
this.addTileMonitoringHooks(this.tile);
}else{
this.tile.size=this.tileSize.clone();
this.tile.position=ulPx.clone();
}
this.tile.draw();
}
},setTileSize:function(){
var _c47=this.extent.getWidth()/this.map.getResolution();
var _c48=this.extent.getHeight()/this.map.getResolution();
this.tileSize=new OpenLayers.Size(_c47,_c48);
},addTileMonitoringHooks:function(tile){
tile.onLoadStart=function(){
this.events.triggerEvent("loadstart");
};
tile.events.register("loadstart",this,tile.onLoadStart);
tile.onLoadEnd=function(){
this.events.triggerEvent("loadend");
};
tile.events.register("loadend",this,tile.onLoadEnd);
tile.events.register("unload",this,tile.onLoadEnd);
},removeTileMonitoringHooks:function(tile){
tile.unload();
tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});
},setUrl:function(_c4b){
this.url=_c4b;
this.tile.draw();
},getURL:function(_c4c){
return this.url;
},CLASS_NAME:"OpenLayers.Layer.Image"});
OpenLayers.Layer.Markers=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:false,markers:null,drawn:false,initialize:function(name,_c4e){
OpenLayers.Layer.prototype.initialize.apply(this,arguments);
this.markers=[];
},destroy:function(){
this.clearMarkers();
this.markers=null;
OpenLayers.Layer.prototype.destroy.apply(this,arguments);
},setOpacity:function(_c4f){
if(_c4f!=this.opacity){
this.opacity=_c4f;
for(var i=0,len=this.markers.length;i<len;i++){
this.markers[i].setOpacity(this.opacity);
}
}
},moveTo:function(_c52,_c53,_c54){
OpenLayers.Layer.prototype.moveTo.apply(this,arguments);
if(_c53||!this.drawn){
for(var i=0,len=this.markers.length;i<len;i++){
this.drawMarker(this.markers[i]);
}
this.drawn=true;
}
},addMarker:function(_c57){
this.markers.push(_c57);
if(this.opacity!=null){
_c57.setOpacity(this.opacity);
}
if(this.map&&this.map.getExtent()){
_c57.map=this.map;
this.drawMarker(_c57);
}
},removeMarker:function(_c58){
if(this.markers&&this.markers.length){
OpenLayers.Util.removeItem(this.markers,_c58);
_c58.erase();
}
},clearMarkers:function(){
if(this.markers!=null){
while(this.markers.length>0){
this.removeMarker(this.markers[0]);
}
}
},drawMarker:function(_c59){
var px=this.map.getLayerPxFromLonLat(_c59.lonlat);
if(px==null){
_c59.display(false);
}else{
if(!_c59.isDrawn()){
var _c5b=_c59.draw(px);
this.div.appendChild(_c5b);
}else{
if(_c59.icon){
_c59.icon.moveTo(px);
}
}
}
},getDataExtent:function(){
var _c5c=null;
if(this.markers&&(this.markers.length>0)){
var _c5c=new OpenLayers.Bounds();
for(var i=0,len=this.markers.length;i<len;i++){
var _c5f=this.markers[i];
_c5c.extend(_c5f.lonlat);
}
}
return _c5c;
},CLASS_NAME:"OpenLayers.Layer.Markers"});
OpenLayers.Layer.SphericalMercator={getExtent:function(){
var _c60=null;
if(this.sphericalMercator){
_c60=this.map.calculateBounds();
}else{
_c60=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);
}
return _c60;
},initMercatorParameters:function(){
this.RESOLUTIONS=[];
var _c61=156543.0339;
for(var zoom=0;zoom<=this.MAX_ZOOM_LEVEL;++zoom){
this.RESOLUTIONS[zoom]=_c61/Math.pow(2,zoom);
}
this.units="m";
this.projection="EPSG:900913";
},forwardMercator:function(lon,lat){
var x=lon*20037508.34/180;
var y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);
y=y*20037508.34/180;
return new OpenLayers.LonLat(x,y);
},inverseMercator:function(x,y){
var lon=(x/20037508.34)*180;
var lat=(y/20037508.34)*180;
lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);
return new OpenLayers.LonLat(lon,lat);
},projectForward:function(_c6b){
var _c6c=OpenLayers.Layer.SphericalMercator.forwardMercator(_c6b.x,_c6b.y);
_c6b.x=_c6c.lon;
_c6b.y=_c6c.lat;
return _c6b;
},projectInverse:function(_c6d){
var _c6e=OpenLayers.Layer.SphericalMercator.inverseMercator(_c6d.x,_c6d.y);
_c6d.x=_c6e.lon;
_c6d.y=_c6e.lat;
return _c6d;
}};
OpenLayers.Projection.addTransform("EPSG:4326","EPSG:900913",OpenLayers.Layer.SphericalMercator.projectForward);
OpenLayers.Projection.addTransform("EPSG:900913","EPSG:4326",OpenLayers.Layer.SphericalMercator.projectInverse);
OpenLayers.Tile.WFS=OpenLayers.Class(OpenLayers.Tile,{features:null,url:null,request:null,initialize:function(_c6f,_c70,_c71,url,size){
OpenLayers.Tile.prototype.initialize.apply(this,arguments);
this.url=url;
this.features=[];
},destroy:function(){
OpenLayers.Tile.prototype.destroy.apply(this,arguments);
this.destroyAllFeatures();
this.features=null;
this.url=null;
if(this.request){
this.request.abort();
this.request=null;
}
},clear:function(){
this.destroyAllFeatures();
},draw:function(){
if(OpenLayers.Tile.prototype.draw.apply(this,arguments)){
if(this.isLoading){
this.events.triggerEvent("reload");
}else{
this.isLoading=true;
this.events.triggerEvent("loadstart");
}
this.loadFeaturesForRegion(this.requestSuccess);
}
},loadFeaturesForRegion:function(_c74,_c75){
if(this.request){
this.request.abort();
}
this.request=OpenLayers.Request.GET({url:this.url,success:_c74,failure:_c75,scope:this});
},requestSuccess:function(_c76){
if(this.features){
var doc=_c76.responseXML;
if(!doc||!doc.documentElement){
doc=_c76.responseText;
}
if(this.layer.vectorMode){
this.layer.addFeatures(this.layer.formatObject.read(doc));
}else{
var xml=new OpenLayers.Format.XML();
if(typeof doc=="string"){
doc=xml.read(doc);
}
var _c79=xml.getElementsByTagNameNS(doc,"http://www.opengis.net/gml","featureMember");
this.addResults(_c79);
}
}
if(this.events){
this.events.triggerEvent("loadend");
}
this.request=null;
},addResults:function(_c7a){
for(var i=0;i<_c7a.length;i++){
var _c7c=new this.layer.featureClass(this.layer,_c7a[i]);
this.features.push(_c7c);
}
},destroyAllFeatures:function(){
while(this.features.length>0){
var _c7d=this.features.shift();
_c7d.destroy();
}
},CLASS_NAME:"OpenLayers.Tile.WFS"});
OpenLayers.Control.DrawFeature=OpenLayers.Class(OpenLayers.Control,{layer:null,callbacks:null,EVENT_TYPES:["featureadded"],featureAdded:function(){
},handlerOptions:null,initialize:function(_c7e,_c7f,_c80){
this.EVENT_TYPES=OpenLayers.Control.DrawFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
OpenLayers.Control.prototype.initialize.apply(this,[_c80]);
this.callbacks=OpenLayers.Util.extend({done:this.drawFeature,modify:function(_c81,_c82){
this.layer.events.triggerEvent("sketchmodified",{vertex:_c81,feature:_c82});
},create:function(_c83,_c84){
this.layer.events.triggerEvent("sketchstarted",{vertex:_c83,feature:_c84});
}},this.callbacks);
this.layer=_c7e;
var _c85=this.layer.styleMap&&this.layer.styleMap.styles.temporary;
if(_c85){
this.handlerOptions=this.handlerOptions||{};
this.handlerOptions.layerOptions=OpenLayers.Util.applyDefaults(this.handlerOptions.layerOptions,{styleMap:new OpenLayers.StyleMap({"default":_c85})});
}
this.handler=new _c7f(this,this.callbacks,this.handlerOptions);
},drawFeature:function(_c86){
var _c87=new OpenLayers.Feature.Vector(_c86);
var _c88=this.layer.events.triggerEvent("sketchcomplete",{feature:_c87});
if(_c88!==false){
_c87.state=OpenLayers.State.INSERT;
this.layer.addFeatures([_c87]);
this.featureAdded(_c87);
this.events.triggerEvent("featureadded",{feature:_c87});
}
},CLASS_NAME:"OpenLayers.Control.DrawFeature"});
OpenLayers.Control.Measure=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["measure","measurepartial"],handlerOptions:null,callbacks:null,displaySystem:"metric",geodesic:false,displaySystemUnits:{geographic:["dd"],english:["mi","ft","in"],metric:["km","m"]},partialDelay:300,delayedTrigger:null,persist:false,initialize:function(_c89,_c8a){
this.EVENT_TYPES=OpenLayers.Control.Measure.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
OpenLayers.Control.prototype.initialize.apply(this,[_c8a]);
this.callbacks=OpenLayers.Util.extend({done:this.measureComplete,point:this.measurePartial},this.callbacks);
this.handlerOptions=OpenLayers.Util.extend({persist:this.persist},this.handlerOptions);
this.handler=new _c89(this,this.callbacks,this.handlerOptions);
},cancel:function(){
this.handler.cancel();
},updateHandler:function(_c8b,_c8c){
var _c8d=this.active;
if(_c8d){
this.deactivate();
}
this.handler=new _c8b(this,this.callbacks,_c8c);
if(_c8d){
this.activate();
}
},measureComplete:function(_c8e){
if(this.delayedTrigger){
window.clearTimeout(this.delayedTrigger);
}
this.measure(_c8e,"measure");
},measurePartial:function(_c8f,_c90){
this.delayedTrigger=window.setTimeout(OpenLayers.Function.bind(function(){
this.measure(_c90,"measurepartial");
},this),this.partialDelay);
},measure:function(_c91,_c92){
var stat,_c94;
if(_c91.CLASS_NAME.indexOf("LineString")>-1){
stat=this.getBestLength(_c91);
_c94=1;
}else{
stat=this.getBestArea(_c91);
_c94=2;
}
this.events.triggerEvent(_c92,{measure:stat[0],units:stat[1],order:_c94,geometry:_c91});
},getBestArea:function(_c95){
var _c96=this.displaySystemUnits[this.displaySystem];
var unit,area;
for(var i=0,len=_c96.length;i<len;++i){
unit=_c96[i];
area=this.getArea(_c95,unit);
if(area>1){
break;
}
}
return [area,unit];
},getArea:function(_c9b,_c9c){
var area,_c9e;
if(this.geodesic){
area=_c9b.getGeodesicArea(this.map.getProjectionObject());
_c9e="m";
}else{
area=_c9b.getArea();
_c9e=this.map.getUnits();
}
var _c9f=OpenLayers.INCHES_PER_UNIT[_c9c];
if(_c9f){
var _ca0=OpenLayers.INCHES_PER_UNIT[_c9e];
area*=Math.pow((_ca0/_c9f),2);
}
return area;
},getBestLength:function(_ca1){
var _ca2=this.displaySystemUnits[this.displaySystem];
var unit,_ca4;
for(var i=0,len=_ca2.length;i<len;++i){
unit=_ca2[i];
_ca4=this.getLength(_ca1,unit);
if(_ca4>1){
break;
}
}
return [_ca4,unit];
},getLength:function(_ca7,_ca8){
var _ca9,_caa;
if(this.geodesic){
_ca9=_ca7.getGeodesicLength(this.map.getProjectionObject());
_caa="m";
}else{
_ca9=_ca7.getLength();
_caa=this.map.getUnits();
}
var _cab=OpenLayers.INCHES_PER_UNIT[_ca8];
if(_cab){
var _cac=OpenLayers.INCHES_PER_UNIT[_caa];
_ca9*=(_cac/_cab);
}
return _ca9;
},CLASS_NAME:"OpenLayers.Control.Measure"});
OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:false,alwaysZoom:false,draw:function(){
this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask});
},zoomBox:function(_cad){
if(_cad instanceof OpenLayers.Bounds){
if(!this.out){
var _cae=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_cad.left,_cad.bottom));
var _caf=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_cad.right,_cad.top));
var _cb0=new OpenLayers.Bounds(_cae.lon,_cae.lat,_caf.lon,_caf.lat);
}else{
var _cb1=Math.abs(_cad.right-_cad.left);
var _cb2=Math.abs(_cad.top-_cad.bottom);
var _cb3=Math.min((this.map.size.h/_cb2),(this.map.size.w/_cb1));
var _cb4=this.map.getExtent();
var _cb5=this.map.getLonLatFromPixel(_cad.getCenterPixel());
var xmin=_cb5.lon-(_cb4.getWidth()/2)*_cb3;
var xmax=_cb5.lon+(_cb4.getWidth()/2)*_cb3;
var ymin=_cb5.lat-(_cb4.getHeight()/2)*_cb3;
var ymax=_cb5.lat+(_cb4.getHeight()/2)*_cb3;
var _cb0=new OpenLayers.Bounds(xmin,ymin,xmax,ymax);
}
var _cba=this.map.getZoom();
this.map.zoomToExtent(_cb0);
if(_cba==this.map.getZoom()&&this.alwaysZoom==true){
this.map.zoomTo(_cba+(this.out?-1:1));
}
}else{
if(!this.out){
this.map.setCenter(this.map.getLonLatFromPixel(_cad),this.map.getZoom()+1);
}else{
this.map.setCenter(this.map.getLonLatFromPixel(_cad),this.map.getZoom()-1);
}
}
},CLASS_NAME:"OpenLayers.Control.ZoomBox"});
OpenLayers.Format.WFSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1,{initialize:function(_cbb){
OpenLayers.Format.WFSCapabilities.v1.prototype.initialize.apply(this,[_cbb]);
},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1_0_0"});
OpenLayers.Format.WFSCapabilities.v1_1_0=OpenLayers.Class(OpenLayers.Format.WFSCapabilities.v1,{initialize:function(_cbc){
OpenLayers.Format.WFSCapabilities.v1.prototype.initialize.apply(this,[_cbc]);
},CLASS_NAME:"OpenLayers.Format.WFSCapabilities.v1_1_0"});
OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(_cbd){
this.regExes={"typeStr":/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,"spaces":/\s+/,"parenComma":/\)\s*,\s*\(/,"doubleParenComma":/\)\s*\)\s*,\s*\(\s*\(/,"trimParens":/^\s*\(?(.*?)\)?\s*$/};
OpenLayers.Format.prototype.initialize.apply(this,[_cbd]);
},read:function(wkt){
var _cbf,type,str;
var _cc2=this.regExes.typeStr.exec(wkt);
if(_cc2){
type=_cc2[1].toLowerCase();
str=_cc2[2];
if(this.parse[type]){
_cbf=this.parse[type].apply(this,[str]);
}
if(this.internalProjection&&this.externalProjection){
if(_cbf&&_cbf.CLASS_NAME=="OpenLayers.Feature.Vector"){
_cbf.geometry.transform(this.externalProjection,this.internalProjection);
}else{
if(_cbf&&type!="geometrycollection"&&typeof _cbf=="object"){
for(var i=0,len=_cbf.length;i<len;i++){
var _cc5=_cbf[i];
_cc5.geometry.transform(this.externalProjection,this.internalProjection);
}
}
}
}
}
return _cbf;
},write:function(_cc6){
var _cc7,_cc8,type,data,_ccb;
if(_cc6.constructor==Array){
_cc7=_cc6;
_ccb=true;
}else{
_cc7=[_cc6];
_ccb=false;
}
var _ccc=[];
if(_ccb){
_ccc.push("GEOMETRYCOLLECTION(");
}
for(var i=0,len=_cc7.length;i<len;++i){
if(_ccb&&i>0){
_ccc.push(",");
}
_cc8=_cc7[i].geometry;
type=_cc8.CLASS_NAME.split(".")[2].toLowerCase();
if(!this.extract[type]){
return null;
}
if(this.internalProjection&&this.externalProjection){
_cc8=_cc8.clone();
_cc8.transform(this.internalProjection,this.externalProjection);
}
data=this.extract[type].apply(this,[_cc8]);
_ccc.push(type.toUpperCase()+"("+data+")");
}
if(_ccb){
_ccc.push(")");
}
return _ccc.join("");
},extract:{"point":function(_ccf){
return _ccf.x+" "+_ccf.y;
},"multipoint":function(_cd0){
var _cd1=[];
for(var i=0,len=_cd0.components.length;i<len;++i){
_cd1.push(this.extract.point.apply(this,[_cd0.components[i]]));
}
return _cd1.join(",");
},"linestring":function(_cd4){
var _cd5=[];
for(var i=0,len=_cd4.components.length;i<len;++i){
_cd5.push(this.extract.point.apply(this,[_cd4.components[i]]));
}
return _cd5.join(",");
},"multilinestring":function(_cd8){
var _cd9=[];
for(var i=0,len=_cd8.components.length;i<len;++i){
_cd9.push("("+this.extract.linestring.apply(this,[_cd8.components[i]])+")");
}
return _cd9.join(",");
},"polygon":function(_cdc){
var _cdd=[];
for(var i=0,len=_cdc.components.length;i<len;++i){
_cdd.push("("+this.extract.linestring.apply(this,[_cdc.components[i]])+")");
}
return _cdd.join(",");
},"multipolygon":function(_ce0){
var _ce1=[];
for(var i=0,len=_ce0.components.length;i<len;++i){
_ce1.push("("+this.extract.polygon.apply(this,[_ce0.components[i]])+")");
}
return _ce1.join(",");
}},parse:{"point":function(str){
var _ce5=OpenLayers.String.trim(str).split(this.regExes.spaces);
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_ce5[0],_ce5[1]));
},"multipoint":function(str){
var _ce7=OpenLayers.String.trim(str).split(",");
var _ce8=[];
for(var i=0,len=_ce7.length;i<len;++i){
_ce8.push(this.parse.point.apply(this,[_ce7[i]]).geometry);
}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(_ce8));
},"linestring":function(str){
var _cec=OpenLayers.String.trim(str).split(",");
var _ced=[];
for(var i=0,len=_cec.length;i<len;++i){
_ced.push(this.parse.point.apply(this,[_cec[i]]).geometry);
}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(_ced));
},"multilinestring":function(str){
var line;
var _cf2=OpenLayers.String.trim(str).split(this.regExes.parenComma);
var _cf3=[];
for(var i=0,len=_cf2.length;i<len;++i){
line=_cf2[i].replace(this.regExes.trimParens,"$1");
_cf3.push(this.parse.linestring.apply(this,[line]).geometry);
}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(_cf3));
},"polygon":function(str){
var ring,_cf8,_cf9;
var _cfa=OpenLayers.String.trim(str).split(this.regExes.parenComma);
var _cfb=[];
for(var i=0,len=_cfa.length;i<len;++i){
ring=_cfa[i].replace(this.regExes.trimParens,"$1");
_cf8=this.parse.linestring.apply(this,[ring]).geometry;
_cf9=new OpenLayers.Geometry.LinearRing(_cf8.components);
_cfb.push(_cf9);
}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(_cfb));
},"multipolygon":function(str){
var _cff;
var _d00=OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);
var _d01=[];
for(var i=0,len=_d00.length;i<len;++i){
_cff=_d00[i].replace(this.regExes.trimParens,"$1");
_d01.push(this.parse.polygon.apply(this,[_cff]).geometry);
}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(_d01));
},"geometrycollection":function(str){
str=str.replace(/,\s*([A-Za-z])/g,"|$1");
var _d05=OpenLayers.String.trim(str).split("|");
var _d06=[];
for(var i=0,len=_d05.length;i<len;++i){
_d06.push(OpenLayers.Format.WKT.prototype.read.apply(this,[_d05[i]]));
}
return _d06;
}},CLASS_NAME:"OpenLayers.Format.WKT"});
OpenLayers.Format.WMC.v1_0_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.0.0/context.xsd",initialize:function(_d09){
OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[_d09]);
},CLASS_NAME:"OpenLayers.Format.WMC.v1_0_0"});
OpenLayers.Format.WMC.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",initialize:function(_d0a){
OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[_d0a]);
},read_sld_MinScaleDenominator:function(_d0b,node){
_d0b.options.maxScale=this.getChildValue(node);
},read_sld_MaxScaleDenominator:function(_d0d,node){
_d0d.options.minScale=this.getChildValue(node);
},write_wmc_Layer:function(_d0f){
var node=OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this,[_d0f]);
if(_d0f.options.resolutions||_d0f.options.scales||_d0f.options.minResolution||_d0f.options.maxScale){
var _d11=this.createElementNS(this.namespaces.sld,"sld:MinScaleDenominator");
_d11.appendChild(this.createTextNode(_d0f.maxScale.toPrecision(10)));
node.insertBefore(_d11,node.childNodes[3]);
}
if(_d0f.options.resolutions||_d0f.options.scales||_d0f.options.maxResolution||_d0f.options.minScale){
var _d12=this.createElementNS(this.namespaces.sld,"sld:MaxScaleDenominator");
_d12.appendChild(this.createTextNode(_d0f.minScale.toPrecision(10)));
node.insertBefore(_d12,node.childNodes[4]);
}
return node;
},CLASS_NAME:"OpenLayers.Format.WMC.v1_1_0"});
OpenLayers.Layer.Boxes=OpenLayers.Class(OpenLayers.Layer.Markers,{initialize:function(name,_d14){
OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments);
},drawMarker:function(_d15){
var _d16=_d15.bounds;
var _d17=this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(_d16.left,_d16.top));
var _d18=this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(_d16.right,_d16.bottom));
if(_d18==null||_d17==null){
_d15.display(false);
}else{
var sz=new OpenLayers.Size(Math.max(1,_d18.x-_d17.x),Math.max(1,_d18.y-_d17.y));
var _d1a=_d15.draw(_d17,sz);
if(!_d15.drawn){
this.div.appendChild(_d1a);
_d15.drawn=true;
}
}
},removeMarker:function(_d1b){
OpenLayers.Util.removeItem(this.markers,_d1b);
if((_d1b.div!=null)&&(_d1b.div.parentNode==this.div)){
this.div.removeChild(_d1b.div);
}
},CLASS_NAME:"OpenLayers.Layer.Boxes"});
OpenLayers.Layer.GeoRSS=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,icon:null,popupSize:null,useFeedTitle:true,initialize:function(name,_d1d,_d1e){
OpenLayers.Layer.Markers.prototype.initialize.apply(this,[name,_d1e]);
this.location=_d1d;
this.features=[];
},destroy:function(){
OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);
this.clearFeatures();
this.features=null;
},loadRSS:function(){
if(!this.loaded){
this.events.triggerEvent("loadstart");
OpenLayers.Request.GET({url:this.location,success:this.parseData,scope:this});
this.loaded=true;
}
},moveTo:function(_d1f,_d20,_d21){
OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);
if(this.visibility&&!this.loaded){
this.loadRSS();
}
},parseData:function(_d22){
var doc=_d22.responseXML;
if(!doc||!doc.documentElement){
doc=OpenLayers.Format.XML.prototype.read(_d22.responseText);
}
if(this.useFeedTitle){
var name=null;
try{
name=doc.getElementsByTagNameNS("*","title")[0].firstChild.nodeValue;
}
catch(e){
name=doc.getElementsByTagName("title")[0].firstChild.nodeValue;
}
if(name){
this.setName(name);
}
}
var _d25={};
OpenLayers.Util.extend(_d25,this.formatOptions);
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
_d25.externalProjection=this.projection;
_d25.internalProjection=this.map.getProjectionObject();
}
var _d26=new OpenLayers.Format.GeoRSS(_d25);
var _d27=_d26.read(doc);
for(var i=0,len=_d27.length;i<len;i++){
var data={};
var _d2b=_d27[i];
if(!_d2b.geometry){
continue;
}
var _d2c=_d2b.attributes.title?_d2b.attributes.title:"Untitled";
var _d2d=_d2b.attributes.description?_d2b.attributes.description:"No description.";
var link=_d2b.attributes.link?_d2b.attributes.link:"";
var _d2f=_d2b.geometry.getBounds().getCenterLonLat();
data.icon=this.icon==null?OpenLayers.Marker.defaultIcon():this.icon.clone();
data.popupSize=this.popupSize?this.popupSize.clone():new OpenLayers.Size(250,120);
if(_d2c||_d2d){
data.title=_d2c;
data.description=_d2d;
var _d30="<div class=\"olLayerGeoRSSClose\">[x]</div>";
_d30+="<div class=\"olLayerGeoRSSTitle\">";
if(link){
_d30+="<a class=\"link\" href=\""+link+"\" target=\"_blank\">";
}
_d30+=_d2c;
if(link){
_d30+="</a>";
}
_d30+="</div>";
_d30+="<div style=\"\" class=\"olLayerGeoRSSDescription\">";
_d30+=_d2d;
_d30+="</div>";
data["popupContentHTML"]=_d30;
}
var _d2b=new OpenLayers.Feature(this,_d2f,data);
this.features.push(_d2b);
var _d31=_d2b.createMarker();
_d31.events.register("click",_d2b,this.markerClick);
this.addMarker(_d31);
}
this.events.triggerEvent("loadend");
},markerClick:function(evt){
var _d33=(this==this.layer.selectedFeature);
this.layer.selectedFeature=(!_d33)?this:null;
for(var i=0,len=this.layer.map.popups.length;i<len;i++){
this.layer.map.removePopup(this.layer.map.popups[i]);
}
if(!_d33){
var _d36=this.createPopup();
OpenLayers.Event.observe(_d36.div,"click",OpenLayers.Function.bind(function(){
for(var i=0,len=this.layer.map.popups.length;i<len;i++){
this.layer.map.removePopup(this.layer.map.popups[i]);
}
},this));
this.layer.map.addPopup(_d36);
}
OpenLayers.Event.stop(evt);
},clearFeatures:function(){
if(this.features!=null){
while(this.features.length>0){
var _d38=this.features[0];
OpenLayers.Util.removeItem(this.features,_d38);
_d38.destroy();
}
}
},CLASS_NAME:"OpenLayers.Layer.GeoRSS"});
OpenLayers.Layer.Google=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:19,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125,0.00002145767211914062,0.00001072883605957031,0.00000536441802978515,0.00000268220901489257],type:null,sphericalMercator:false,dragObject:null,termsOfUse:null,poweredBy:null,initialize:function(name,_d3a){
OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);
OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);
this.addContainerPxFunction();
if(this.sphericalMercator){
OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);
this.initMercatorParameters();
}
},loadMapObject:function(){
try{
this.mapObject=new GMap2(this.div);
if(typeof this.mapObject.getDragObject=="function"){
this.dragObject=this.mapObject.getDragObject();
}else{
this.dragPanMapObject=null;
}
this.termsOfUse=this.div.lastChild;
this.div.removeChild(this.termsOfUse);
if(this.isFixed){
this.map.viewPortDiv.appendChild(this.termsOfUse);
}else{
this.map.layerContainerDiv.appendChild(this.termsOfUse);
}
this.termsOfUse.style.zIndex="1100";
this.termsOfUse.style.display=this.div.style.display;
this.termsOfUse.style.right="";
this.termsOfUse.style.bottom="";
this.termsOfUse.className="olLayerGoogleCopyright";
this.poweredBy=this.div.lastChild;
this.div.removeChild(this.poweredBy);
if(this.isFixed){
this.map.viewPortDiv.appendChild(this.poweredBy);
}else{
this.map.layerContainerDiv.appendChild(this.poweredBy);
}
this.poweredBy.style.zIndex="1100";
this.poweredBy.style.display=this.div.style.display;
this.poweredBy.style.right="";
this.poweredBy.style.bottom="";
this.poweredBy.className="olLayerGooglePoweredBy gmnoprint";
}
catch(e){
OpenLayers.Console.error(e);
}
},setMap:function(map){
OpenLayers.Layer.EventPane.prototype.setMap.apply(this,arguments);
if(this.type!=null){
this.map.events.register("moveend",this,this.setMapType);
}
},setMapType:function(){
if(this.mapObject.getCenter()!=null){
if(OpenLayers.Util.indexOf(this.mapObject.getMapTypes(),this.type)==-1){
this.mapObject.addMapType(this.type);
}
this.mapObject.setMapType(this.type);
this.map.events.unregister("moveend",this,this.setMapType);
}
},onMapResize:function(){
if(this.visibility&&this.mapObject.isLoaded()){
this.mapObject.checkResize();
}else{
if(!this._resized){
var _d3c=this;
var _d3d=GEvent.addListener(this.mapObject,"load",function(){
GEvent.removeListener(_d3d);
delete _d3c._resized;
_d3c.mapObject.checkResize();
_d3c.moveTo(_d3c.map.getCenter(),_d3c.map.getZoom());
});
}
this._resized=true;
}
},display:function(_d3e){
OpenLayers.Layer.EventPane.prototype.display.apply(this,arguments);
this.termsOfUse.style.display=this.div.style.display;
this.poweredBy.style.display=this.div.style.display;
},removeMap:function(map){
if(this.termsOfUse&&this.termsOfUse.parentNode){
this.termsOfUse.parentNode.removeChild(this.termsOfUse);
this.termsOfUse=null;
}
if(this.poweredBy&&this.poweredBy.parentNode){
this.poweredBy.parentNode.removeChild(this.poweredBy);
this.poweredBy=null;
}
OpenLayers.Layer.EventPane.prototype.removeMap.apply(this,arguments);
},getOLBoundsFromMapObjectBounds:function(_d40){
var _d41=null;
if(_d40!=null){
var sw=_d40.getSouthWest();
var ne=_d40.getNorthEast();
if(this.sphericalMercator){
sw=this.forwardMercator(sw.lng(),sw.lat());
ne=this.forwardMercator(ne.lng(),ne.lat());
}else{
sw=new OpenLayers.LonLat(sw.lng(),sw.lat());
ne=new OpenLayers.LonLat(ne.lng(),ne.lat());
}
_d41=new OpenLayers.Bounds(sw.lon,sw.lat,ne.lon,ne.lat);
}
return _d41;
},getMapObjectBoundsFromOLBounds:function(_d44){
var _d45=null;
if(_d44!=null){
var sw=this.sphericalMercator?this.inverseMercator(_d44.bottom,_d44.left):new OpenLayers.LonLat(_d44.bottom,_d44.left);
var ne=this.sphericalMercator?this.inverseMercator(_d44.top,_d44.right):new OpenLayers.LonLat(_d44.top,_d44.right);
_d45=new GLatLngBounds(new GLatLng(sw.lat,sw.lon),new GLatLng(ne.lat,ne.lon));
}
return _d45;
},addContainerPxFunction:function(){
if((typeof GMap2!="undefined")&&!GMap2.prototype.fromLatLngToContainerPixel){
GMap2.prototype.fromLatLngToContainerPixel=function(_d48){
var _d49=this.fromLatLngToDivPixel(_d48);
var div=this.getContainer().firstChild.firstChild;
_d49.x+=div.offsetLeft;
_d49.y+=div.offsetTop;
return _d49;
};
}
},getWarningHTML:function(){
return OpenLayers.i18n("googleWarning");
},setMapObjectCenter:function(_d4b,zoom){
this.mapObject.setCenter(_d4b,zoom);
},dragPanMapObject:function(dX,dY){
this.dragObject.moveBy(new GSize(-dX,dY));
},getMapObjectCenter:function(){
return this.mapObject.getCenter();
},getMapObjectZoom:function(){
return this.mapObject.getZoom();
},getMapObjectLonLatFromMapObjectPixel:function(_d4f){
return this.mapObject.fromContainerPixelToLatLng(_d4f);
},getMapObjectPixelFromMapObjectLonLat:function(_d50){
return this.mapObject.fromLatLngToContainerPixel(_d50);
},getMapObjectZoomFromMapObjectBounds:function(_d51){
return this.mapObject.getBoundsZoomLevel(_d51);
},getLongitudeFromMapObjectLonLat:function(_d52){
return this.sphericalMercator?this.forwardMercator(_d52.lng(),_d52.lat()).lon:_d52.lng();
},getLatitudeFromMapObjectLonLat:function(_d53){
var lat=this.sphericalMercator?this.forwardMercator(_d53.lng(),_d53.lat()).lat:_d53.lat();
return lat;
},getMapObjectLonLatFromLonLat:function(lon,lat){
var _d57;
if(this.sphericalMercator){
var _d58=this.inverseMercator(lon,lat);
_d57=new GLatLng(_d58.lat,_d58.lon);
}else{
_d57=new GLatLng(lat,lon);
}
return _d57;
},getXFromMapObjectPixel:function(_d59){
return _d59.x;
},getYFromMapObjectPixel:function(_d5a){
return _d5a.y;
},getMapObjectPixelFromXY:function(x,y){
return new GPoint(x,y);
},CLASS_NAME:"OpenLayers.Layer.Google"});
OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,grid:null,singleTile:false,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(name,url,_d5f,_d60){
OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);
this.events.addEventType("tileloaded");
this.grid=[];
},destroy:function(){
this.clearGrid();
this.grid=null;
this.tileSize=null;
OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments);
},clearGrid:function(){
if(this.grid){
for(var iRow=0,len=this.grid.length;iRow<len;iRow++){
var row=this.grid[iRow];
for(var iCol=0,clen=row.length;iCol<clen;iCol++){
var tile=row[iCol];
this.removeTileMonitoringHooks(tile);
tile.destroy();
}
}
this.grid=[];
}
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);
if(this.tileSize!=null){
obj.tileSize=this.tileSize.clone();
}
obj.grid=[];
return obj;
},moveTo:function(_d68,_d69,_d6a){
OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);
_d68=_d68||this.map.getExtent();
if(_d68!=null){
var _d6b=!this.grid.length||_d69;
var _d6c=this.getTilesBounds();
if(this.singleTile){
if(_d6b||(!_d6a&&!_d6c.containsBounds(_d68))){
this.initSingleTile(_d68);
}
}else{
if(_d6b||!_d6c.containsBounds(_d68,true)){
this.initGriddedTiles(_d68);
}else{
this.moveGriddedTiles(_d68);
}
}
}
},setTileSize:function(size){
if(this.singleTile){
size=this.map.getSize().clone();
size.h=parseInt(size.h*this.ratio);
size.w=parseInt(size.w*this.ratio);
}
OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[size]);
},getGridBounds:function(){
var msg="The getGridBounds() function is deprecated. It will be "+"removed in 3.0. Please use getTilesBounds() instead.";
OpenLayers.Console.warn(msg);
return this.getTilesBounds();
},getTilesBounds:function(){
var _d6f=null;
if(this.grid.length){
var _d70=this.grid.length-1;
var _d71=this.grid[_d70][0];
var _d72=this.grid[0].length-1;
var _d73=this.grid[0][_d72];
_d6f=new OpenLayers.Bounds(_d71.bounds.left,_d71.bounds.bottom,_d73.bounds.right,_d73.bounds.top);
}
return _d6f;
},initSingleTile:function(_d74){
var _d75=_d74.getCenterLonLat();
var _d76=_d74.getWidth()*this.ratio;
var _d77=_d74.getHeight()*this.ratio;
var _d78=new OpenLayers.Bounds(_d75.lon-(_d76/2),_d75.lat-(_d77/2),_d75.lon+(_d76/2),_d75.lat+(_d77/2));
var ul=new OpenLayers.LonLat(_d78.left,_d78.top);
var px=this.map.getLayerPxFromLonLat(ul);
if(!this.grid.length){
this.grid[0]=[];
}
var tile=this.grid[0][0];
if(!tile){
tile=this.addTile(_d78,px);
this.addTileMonitoringHooks(tile);
tile.draw();
this.grid[0][0]=tile;
}else{
tile.moveTo(_d78,px);
}
this.removeExcessTiles(1,1);
},calculateGridLayout:function(_d7c,_d7d,_d7e){
var _d7f=_d7e*this.tileSize.w;
var _d80=_d7e*this.tileSize.h;
var _d81=_d7c.left-_d7d.left;
var _d82=Math.floor(_d81/_d7f)-this.buffer;
var _d83=_d81/_d7f-_d82;
var _d84=-_d83*this.tileSize.w;
var _d85=_d7d.left+_d82*_d7f;
var _d86=_d7c.top-(_d7d.bottom+_d80);
var _d87=Math.ceil(_d86/_d80)+this.buffer;
var _d88=_d87-_d86/_d80;
var _d89=-_d88*this.tileSize.h;
var _d8a=_d7d.bottom+_d87*_d80;
return {tilelon:_d7f,tilelat:_d80,tileoffsetlon:_d85,tileoffsetlat:_d8a,tileoffsetx:_d84,tileoffsety:_d89};
},initGriddedTiles:function(_d8b){
var _d8c=this.map.getSize();
var _d8d=Math.ceil(_d8c.h/this.tileSize.h)+Math.max(1,2*this.buffer);
var _d8e=Math.ceil(_d8c.w/this.tileSize.w)+Math.max(1,2*this.buffer);
var _d8f=this.maxExtent;
var _d90=this.map.getResolution();
var _d91=this.calculateGridLayout(_d8b,_d8f,_d90);
var _d92=Math.round(_d91.tileoffsetx);
var _d93=Math.round(_d91.tileoffsety);
var _d94=_d91.tileoffsetlon;
var _d95=_d91.tileoffsetlat;
var _d96=_d91.tilelon;
var _d97=_d91.tilelat;
this.origin=new OpenLayers.Pixel(_d92,_d93);
var _d98=_d92;
var _d99=_d94;
var _d9a=0;
var _d9b=parseInt(this.map.layerContainerDiv.style.left);
var _d9c=parseInt(this.map.layerContainerDiv.style.top);
do{
var row=this.grid[_d9a++];
if(!row){
row=[];
this.grid.push(row);
}
_d94=_d99;
_d92=_d98;
var _d9e=0;
do{
var _d9f=new OpenLayers.Bounds(_d94,_d95,_d94+_d96,_d95+_d97);
var x=_d92;
x-=_d9b;
var y=_d93;
y-=_d9c;
var px=new OpenLayers.Pixel(x,y);
var tile=row[_d9e++];
if(!tile){
tile=this.addTile(_d9f,px);
this.addTileMonitoringHooks(tile);
row.push(tile);
}else{
tile.moveTo(_d9f,px,false);
}
_d94+=_d96;
_d92+=this.tileSize.w;
}while((_d94<=_d8b.right+_d96*this.buffer)||_d9e<_d8e);
_d95-=_d97;
_d93+=this.tileSize.h;
}while((_d95>=_d8b.bottom-_d97*this.buffer)||_d9a<_d8d);
this.removeExcessTiles(_d9a,_d9e);
this.spiralTileLoad();
},spiralTileLoad:function(){
var _da4=[];
var _da5=["right","down","left","up"];
var iRow=0;
var _da7=-1;
var _da8=OpenLayers.Util.indexOf(_da5,"right");
var _da9=0;
while(_da9<_da5.length){
var _daa=iRow;
var _dab=_da7;
switch(_da5[_da8]){
case "right":
_dab++;
break;
case "down":
_daa++;
break;
case "left":
_dab--;
break;
case "up":
_daa--;
break;
}
var tile=null;
if((_daa<this.grid.length)&&(_daa>=0)&&(_dab<this.grid[0].length)&&(_dab>=0)){
tile=this.grid[_daa][_dab];
}
if((tile!=null)&&(!tile.queued)){
_da4.unshift(tile);
tile.queued=true;
_da9=0;
iRow=_daa;
_da7=_dab;
}else{
_da8=(_da8+1)%4;
_da9++;
}
}
for(var i=0,len=_da4.length;i<len;i++){
var tile=_da4[i];
tile.draw();
tile.queued=false;
}
},addTile:function(_daf,_db0){
},addTileMonitoringHooks:function(tile){
tile.onLoadStart=function(){
if(this.numLoadingTiles==0){
this.events.triggerEvent("loadstart");
}
this.numLoadingTiles++;
};
tile.events.register("loadstart",this,tile.onLoadStart);
tile.onLoadEnd=function(){
this.numLoadingTiles--;
this.events.triggerEvent("tileloaded");
if(this.numLoadingTiles==0){
this.events.triggerEvent("loadend");
}
};
tile.events.register("loadend",this,tile.onLoadEnd);
tile.events.register("unload",this,tile.onLoadEnd);
},removeTileMonitoringHooks:function(tile){
tile.unload();
tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});
},moveGriddedTiles:function(_db3){
var _db4=this.buffer||1;
while(true){
var _db5=this.grid[0][0].position;
var _db6=this.map.getViewPortPxFromLayerPx(_db5);
if(_db6.x>-this.tileSize.w*(_db4-1)){
this.shiftColumn(true);
}else{
if(_db6.x<-this.tileSize.w*_db4){
this.shiftColumn(false);
}else{
if(_db6.y>-this.tileSize.h*(_db4-1)){
this.shiftRow(true);
}else{
if(_db6.y<-this.tileSize.h*_db4){
this.shiftRow(false);
}else{
break;
}
}
}
}
}
},shiftRow:function(_db7){
var _db8=(_db7)?0:(this.grid.length-1);
var grid=this.grid;
var _dba=grid[_db8];
var _dbb=this.map.getResolution();
var _dbc=(_db7)?-this.tileSize.h:this.tileSize.h;
var _dbd=_dbb*-_dbc;
var row=(_db7)?grid.pop():grid.shift();
for(var i=0,len=_dba.length;i<len;i++){
var _dc1=_dba[i];
var _dc2=_dc1.bounds.clone();
var _dc3=_dc1.position.clone();
_dc2.bottom=_dc2.bottom+_dbd;
_dc2.top=_dc2.top+_dbd;
_dc3.y=_dc3.y+_dbc;
row[i].moveTo(_dc2,_dc3);
}
if(_db7){
grid.unshift(row);
}else{
grid.push(row);
}
},shiftColumn:function(_dc4){
var _dc5=(_dc4)?-this.tileSize.w:this.tileSize.w;
var _dc6=this.map.getResolution();
var _dc7=_dc6*_dc5;
for(var i=0,len=this.grid.length;i<len;i++){
var row=this.grid[i];
var _dcb=(_dc4)?0:(row.length-1);
var _dcc=row[_dcb];
var _dcd=_dcc.bounds.clone();
var _dce=_dcc.position.clone();
_dcd.left=_dcd.left+_dc7;
_dcd.right=_dcd.right+_dc7;
_dce.x=_dce.x+_dc5;
var tile=_dc4?this.grid[i].pop():this.grid[i].shift();
tile.moveTo(_dcd,_dce);
if(_dc4){
row.unshift(tile);
}else{
row.push(tile);
}
}
},removeExcessTiles:function(rows,_dd1){
while(this.grid.length>rows){
var row=this.grid.pop();
for(var i=0,l=row.length;i<l;i++){
var tile=row[i];
this.removeTileMonitoringHooks(tile);
tile.destroy();
}
}
while(this.grid[0].length>_dd1){
for(var i=0,l=this.grid.length;i<l;i++){
var row=this.grid[i];
var tile=row.pop();
this.removeTileMonitoringHooks(tile);
tile.destroy();
}
}
},onMapResize:function(){
if(this.singleTile){
this.clearGrid();
this.setTileSize();
}
},getTileBounds:function(_dd6){
var _dd7=this.maxExtent;
var _dd8=this.getResolution();
var _dd9=_dd8*this.tileSize.w;
var _dda=_dd8*this.tileSize.h;
var _ddb=this.getLonLatFromViewPortPx(_dd6);
var _ddc=_dd7.left+(_dd9*Math.floor((_ddb.lon-_dd7.left)/_dd9));
var _ddd=_dd7.bottom+(_dda*Math.floor((_ddb.lat-_dd7.bottom)/_dda));
return new OpenLayers.Bounds(_ddc,_ddd,_ddc+_dd9,_ddd+_dda);
},CLASS_NAME:"OpenLayers.Layer.Grid"});
OpenLayers.Layer.MultiMap=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:1,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[9,1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125],type:null,initialize:function(name,_ddf){
OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);
OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);
if(this.sphericalMercator){
OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);
this.initMercatorParameters();
this.RESOLUTIONS.unshift(10);
}
},loadMapObject:function(){
try{
this.mapObject=new MultimapViewer(this.div);
}
catch(e){
}
},getWarningHTML:function(){
return OpenLayers.i18n("getLayerWarning",{"layerType":"MM","layerLib":"MultiMap"});
},setMapObjectCenter:function(_de0,zoom){
this.mapObject.goToPosition(_de0,zoom);
},getMapObjectCenter:function(){
return this.mapObject.getCurrentPosition();
},getMapObjectZoom:function(){
return this.mapObject.getZoomFactor();
},getMapObjectLonLatFromMapObjectPixel:function(_de2){
_de2.x=_de2.x-(this.map.getSize().w/2);
_de2.y=_de2.y-(this.map.getSize().h/2);
return this.mapObject.getMapPositionAt(_de2);
},getMapObjectPixelFromMapObjectLonLat:function(_de3){
return this.mapObject.geoPosToContainerPixels(_de3);
},getLongitudeFromMapObjectLonLat:function(_de4){
return this.sphericalMercator?this.forwardMercator(_de4.lon,_de4.lat).lon:_de4.lon;
},getLatitudeFromMapObjectLonLat:function(_de5){
return this.sphericalMercator?this.forwardMercator(_de5.lon,_de5.lat).lat:_de5.lat;
},getMapObjectLonLatFromLonLat:function(lon,lat){
var _de8;
if(this.sphericalMercator){
var _de9=this.inverseMercator(lon,lat);
_de8=new MMLatLon(_de9.lat,_de9.lon);
}else{
_de8=new MMLatLon(lat,lon);
}
return _de8;
},getXFromMapObjectPixel:function(_dea){
return _dea.x;
},getYFromMapObjectPixel:function(_deb){
return _deb.y;
},getMapObjectPixelFromXY:function(x,y){
return new MMPoint(x,y);
},CLASS_NAME:"OpenLayers.Layer.MultiMap"});
OpenLayers.Layer.Text=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,initialize:function(name,_def){
OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments);
this.features=new Array();
},destroy:function(){
OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);
this.clearFeatures();
this.features=null;
},loadText:function(){
if(!this.loaded){
if(this.location!=null){
var _df0=function(e){
this.events.triggerEvent("loadend");
};
this.events.triggerEvent("loadstart");
OpenLayers.Request.GET({url:this.location,success:this.parseData,failure:_df0,scope:this});
this.loaded=true;
}
}
},moveTo:function(_df2,_df3,_df4){
OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);
if(this.visibility&&!this.loaded){
this.loadText();
}
},parseData:function(_df5){
var text=_df5.responseText;
var _df7={};
OpenLayers.Util.extend(_df7,this.formatOptions);
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
_df7.externalProjection=this.projection;
_df7.internalProjection=this.map.getProjectionObject();
}
var _df8=new OpenLayers.Format.Text(_df7);
var _df9=_df8.read(text);
for(var i=0,len=_df9.length;i<len;i++){
var data={};
var _dfd=_df9[i];
var _dfe;
var _dff,_e00;
_dfe=new OpenLayers.LonLat(_dfd.geometry.x,_dfd.geometry.y);
if(_dfd.style.graphicWidth&&_dfd.style.graphicHeight){
_dff=new OpenLayers.Size(_dfd.style.graphicWidth,_dfd.style.graphicHeight);
}
if(_dfd.style.graphicXOffset!==undefined&&_dfd.style.graphicYOffset!==undefined){
_e00=new OpenLayers.Pixel(_dfd.style.graphicXOffset,_dfd.style.graphicYOffset);
}
if(_dfd.style.externalGraphic!=null){
data.icon=new OpenLayers.Icon(_dfd.style.externalGraphic,_dff,_e00);
}else{
data.icon=OpenLayers.Marker.defaultIcon();
if(_dff!=null){
data.icon.setSize(_dff);
}
}
if((_dfd.attributes.title!=null)&&(_dfd.attributes.description!=null)){
data["popupContentHTML"]="<h2>"+_dfd.attributes.title+"</h2>"+"<p>"+_dfd.attributes.description+"</p>";
}
data["overflow"]=_dfd.attributes.overflow||"auto";
var _e01=new OpenLayers.Feature(this,_dfe,data);
this.features.push(_e01);
var _e02=_e01.createMarker();
if((_dfd.attributes.title!=null)&&(_dfd.attributes.description!=null)){
_e02.events.register("click",_e01,this.markerClick);
}
this.addMarker(_e02);
}
this.events.triggerEvent("loadend");
},markerClick:function(evt){
var _e04=(this==this.layer.selectedFeature);
this.layer.selectedFeature=(!_e04)?this:null;
for(var i=0,len=this.layer.map.popups.length;i<len;i++){
this.layer.map.removePopup(this.layer.map.popups[i]);
}
if(!_e04){
this.layer.map.addPopup(this.createPopup());
}
OpenLayers.Event.stop(evt);
},clearFeatures:function(){
if(this.features!=null){
while(this.features.length>0){
var _e07=this.features[0];
OpenLayers.Util.removeItem(this.features,_e07);
_e07.destroy();
}
}
},CLASS_NAME:"OpenLayers.Layer.Text"});
OpenLayers.Layer.VirtualEarth=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:1,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125,0.00002145767211914062],type:null,sphericalMercator:false,initialize:function(name,_e09){
OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);
OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);
if(this.sphericalMercator){
OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);
this.initMercatorParameters();
}
},loadMapObject:function(){
var _e0a=OpenLayers.Util.createDiv(this.name);
var sz=this.map.getSize();
_e0a.style.width=sz.w+"px";
_e0a.style.height=sz.h+"px";
this.div.appendChild(_e0a);
try{
this.mapObject=new VEMap(this.name);
}
catch(e){
}
if(this.mapObject!=null){
try{
this.mapObject.LoadMap(null,null,this.type,true);
this.mapObject.AttachEvent("onmousedown",function(){
return true;
});
}
catch(e){
}
this.mapObject.HideDashboard();
}
if(!this.mapObject||!this.mapObject.vemapcontrol||!this.mapObject.vemapcontrol.PanMap||(typeof this.mapObject.vemapcontrol.PanMap!="function")){
this.dragPanMapObject=null;
}
},getWarningHTML:function(){
return OpenLayers.i18n("getLayerWarning",{"layerType":"VE","layerLib":"VirtualEarth"});
},setMapObjectCenter:function(_e0c,zoom){
this.mapObject.SetCenterAndZoom(_e0c,zoom);
},getMapObjectCenter:function(){
return this.mapObject.GetCenter();
},dragPanMapObject:function(dX,dY){
this.mapObject.vemapcontrol.PanMap(dX,-dY);
},getMapObjectZoom:function(){
return this.mapObject.GetZoomLevel();
},getMapObjectLonLatFromMapObjectPixel:function(_e10){
return (typeof VEPixel!="undefined")?this.mapObject.PixelToLatLong(_e10):this.mapObject.PixelToLatLong(_e10.x,_e10.y);
},getMapObjectPixelFromMapObjectLonLat:function(_e11){
return this.mapObject.LatLongToPixel(_e11);
},getLongitudeFromMapObjectLonLat:function(_e12){
return this.sphericalMercator?this.forwardMercator(_e12.Longitude,_e12.Latitude).lon:_e12.Longitude;
},getLatitudeFromMapObjectLonLat:function(_e13){
return this.sphericalMercator?this.forwardMercator(_e13.Longitude,_e13.Latitude).lat:_e13.Latitude;
},getMapObjectLonLatFromLonLat:function(lon,lat){
var _e16;
if(this.sphericalMercator){
var _e17=this.inverseMercator(lon,lat);
_e16=new VELatLong(_e17.lat,_e17.lon);
}else{
_e16=new VELatLong(lat,lon);
}
return _e16;
},getXFromMapObjectPixel:function(_e18){
return _e18.x;
},getYFromMapObjectPixel:function(_e19){
return _e19.y;
},getMapObjectPixelFromXY:function(x,y){
return (typeof VEPixel!="undefined")?new VEPixel(x,y):new Msn.VE.Pixel(x,y);
},CLASS_NAME:"OpenLayers.Layer.VirtualEarth"});
OpenLayers.Layer.Yahoo=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[1.40625,0.703125,0.3515625,0.17578125,0.087890625,0.0439453125,0.02197265625,0.010986328125,0.0054931640625,0.00274658203125,0.001373291015625,0.0006866455078125,0.00034332275390625,0.000171661376953125,0.0000858306884765625,0.00004291534423828125,0.00002145767211914062,0.00001072883605957031],type:null,sphericalMercator:false,initialize:function(name,_e1d){
OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments);
OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments);
if(this.sphericalMercator){
OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator);
this.initMercatorParameters();
}
},loadMapObject:function(){
try{
var size=this.getMapObjectSizeFromOLSize(this.map.getSize());
this.mapObject=new YMap(this.div,this.type,size);
this.mapObject.disableKeyControls();
this.mapObject.disableDragMap();
if(!this.mapObject.moveByXY||(typeof this.mapObject.moveByXY!="function")){
this.dragPanMapObject=null;
}
}
catch(e){
}
},onMapResize:function(){
try{
var size=this.getMapObjectSizeFromOLSize(this.map.getSize());
this.mapObject.resizeTo(size);
}
catch(e){
}
},setMap:function(map){
OpenLayers.Layer.EventPane.prototype.setMap.apply(this,arguments);
this.map.events.register("moveend",this,this.fixYahooEventPane);
},fixYahooEventPane:function(){
var _e21=OpenLayers.Util.getElement("ygddfdiv");
if(_e21!=null){
if(_e21.parentNode!=null){
_e21.parentNode.removeChild(_e21);
}
this.map.events.unregister("moveend",this,this.fixYahooEventPane);
}
},getWarningHTML:function(){
return OpenLayers.i18n("getLayerWarning",{"layerType":"Yahoo","layerLib":"Yahoo"});
},getOLZoomFromMapObjectZoom:function(_e22){
var zoom=null;
if(_e22!=null){
zoom=OpenLayers.Layer.FixedZoomLevels.prototype.getOLZoomFromMapObjectZoom.apply(this,[_e22]);
zoom=18-zoom;
}
return zoom;
},getMapObjectZoomFromOLZoom:function(_e24){
var zoom=null;
if(_e24!=null){
zoom=OpenLayers.Layer.FixedZoomLevels.prototype.getMapObjectZoomFromOLZoom.apply(this,[_e24]);
zoom=18-zoom;
}
return zoom;
},setMapObjectCenter:function(_e26,zoom){
this.mapObject.drawZoomAndCenter(_e26,zoom);
},getMapObjectCenter:function(){
return this.mapObject.getCenterLatLon();
},dragPanMapObject:function(dX,dY){
this.mapObject.moveByXY({"x":-dX,"y":dY});
},getMapObjectZoom:function(){
return this.mapObject.getZoomLevel();
},getMapObjectLonLatFromMapObjectPixel:function(_e2a){
return this.mapObject.convertXYLatLon(_e2a);
},getMapObjectPixelFromMapObjectLonLat:function(_e2b){
return this.mapObject.convertLatLonXY(_e2b);
},getLongitudeFromMapObjectLonLat:function(_e2c){
return this.sphericalMercator?this.forwardMercator(_e2c.Lon,_e2c.Lat).lon:_e2c.Lon;
},getLatitudeFromMapObjectLonLat:function(_e2d){
return this.sphericalMercator?this.forwardMercator(_e2d.Lon,_e2d.Lat).lat:_e2d.Lat;
},getMapObjectLonLatFromLonLat:function(lon,lat){
var _e30;
if(this.sphericalMercator){
var _e31=this.inverseMercator(lon,lat);
_e30=new YGeoPoint(_e31.lat,_e31.lon);
}else{
_e30=new YGeoPoint(lat,lon);
}
return _e30;
},getXFromMapObjectPixel:function(_e32){
return _e32.x;
},getYFromMapObjectPixel:function(_e33){
return _e33.y;
},getMapObjectPixelFromXY:function(x,y){
return new YCoordPoint(x,y);
},getMapObjectSizeFromOLSize:function(_e36){
return new YSize(_e36.w,_e36.h);
},CLASS_NAME:"OpenLayers.Layer.Yahoo"});
OpenLayers.Protocol.HTTP=OpenLayers.Class(OpenLayers.Protocol,{url:null,headers:null,params:null,callback:null,scope:null,readWithPOST:false,initialize:function(_e37){
this.params={};
this.headers={};
OpenLayers.Protocol.prototype.initialize.apply(this,arguments);
},destroy:function(){
this.params=null;
this.headers=null;
OpenLayers.Protocol.prototype.destroy.apply(this);
},createCallback:function(_e38,_e39,_e3a){
return OpenLayers.Function.bind(function(){
_e38.apply(this,[_e39,_e3a]);
},this);
},read:function(_e3b){
_e3b=OpenLayers.Util.applyDefaults(_e3b,this.options);
var _e3c=(_e3b.readWithPOST!==undefined)?_e3b.readWithPOST:this.readWithPOST;
var resp=new OpenLayers.Protocol.Response({requestType:"read"});
if(_e3b.filter&&_e3b.filter instanceof OpenLayers.Filter.Spatial){
if(_e3b.filter.type==OpenLayers.Filter.Spatial.BBOX){
_e3b.params=OpenLayers.Util.extend(_e3b.params,{bbox:_e3b.filter.value.toArray()});
}
}
if(_e3c){
resp.priv=OpenLayers.Request.POST({url:_e3b.url,callback:this.createCallback(this.handleRead,resp,_e3b),data:OpenLayers.Util.getParameterString(_e3b.params),headers:{"Content-Type":"application/x-www-form-urlencoded"}});
}else{
resp.priv=OpenLayers.Request.GET({url:_e3b.url,callback:this.createCallback(this.handleRead,resp,_e3b),params:_e3b.params,headers:_e3b.headers});
}
return resp;
},handleRead:function(resp,_e3f){
this.handleResponse(resp,_e3f);
},create:function(_e40,_e41){
_e41=OpenLayers.Util.applyDefaults(_e41,this.options);
var resp=new OpenLayers.Protocol.Response({reqFeatures:_e40,requestType:"create"});
resp.priv=OpenLayers.Request.POST({url:_e41.url,callback:this.createCallback(this.handleCreate,resp,_e41),headers:_e41.headers,data:this.format.write(_e40)});
return resp;
},handleCreate:function(resp,_e44){
this.handleResponse(resp,_e44);
},update:function(_e45,_e46){
var url=_e46.url||_e45.url||this.options.url;
_e46=OpenLayers.Util.applyDefaults(_e46,this.options);
var resp=new OpenLayers.Protocol.Response({reqFeatures:_e45,requestType:"update"});
resp.priv=OpenLayers.Request.PUT({url:url,callback:this.createCallback(this.handleUpdate,resp,_e46),headers:_e46.headers,data:this.format.write(_e45)});
return resp;
},handleUpdate:function(resp,_e4a){
this.handleResponse(resp,_e4a);
},"delete":function(_e4b,_e4c){
var url=_e4c.url||_e4b.url||this.options.url;
_e4c=OpenLayers.Util.applyDefaults(_e4c,this.options);
var resp=new OpenLayers.Protocol.Response({reqFeatures:_e4b,requestType:"delete"});
resp.priv=OpenLayers.Request.DELETE({url:url,callback:this.createCallback(this.handleDelete,resp,_e4c),headers:_e4c.headers});
return resp;
},handleDelete:function(resp,_e50){
this.handleResponse(resp,_e50);
},handleResponse:function(resp,_e52){
var _e53=resp.priv;
if(_e52.callback){
if(_e53.status>=200&&_e53.status<300){
if(resp.requestType!="delete"){
resp.features=this.parseFeatures(_e53);
}
resp.code=OpenLayers.Protocol.Response.SUCCESS;
}else{
resp.code=OpenLayers.Protocol.Response.FAILURE;
}
_e52.callback.call(_e52.scope,resp);
}
},parseFeatures:function(_e54){
var doc=_e54.responseXML;
if(!doc||!doc.documentElement){
doc=_e54.responseText;
}
if(!doc||doc.length<=0){
return null;
}
return this.format.read(doc);
},commit:function(_e56,_e57){
_e57=OpenLayers.Util.applyDefaults(_e57,this.options);
var resp=[],_e59=0;
var _e5a={};
_e5a[OpenLayers.State.INSERT]=[];
_e5a[OpenLayers.State.UPDATE]=[];
_e5a[OpenLayers.State.DELETE]=[];
var _e5b,list,_e5d=[];
for(var i=0,len=_e56.length;i<len;++i){
_e5b=_e56[i];
list=_e5a[_e5b.state];
if(list){
list.push(_e5b);
_e5d.push(_e5b);
}
}
var _e60=(_e5a[OpenLayers.State.INSERT].length>0?1:0)+_e5a[OpenLayers.State.UPDATE].length+_e5a[OpenLayers.State.DELETE].length;
var _e61=true;
var _e62=new OpenLayers.Protocol.Response({reqFeatures:_e5d});
function _e63(_e64){
var len=_e64.features?_e64.features.length:0;
var fids=new Array(len);
for(var i=0;i<len;++i){
fids[i]=_e64.features[i].fid;
}
_e62.insertIds=fids;
_e68.apply(this,[_e64]);
};
function _e68(_e69){
this.callUserCallback(_e69,_e57);
_e61=_e61&&_e69.success();
_e59++;
if(_e59>=_e60){
if(_e57.callback){
_e62.code=_e61?OpenLayers.Protocol.Response.SUCCESS:OpenLayers.Protocol.Response.FAILURE;
_e57.callback.apply(_e57.scope,[_e62]);
}
}
};
var _e6a=_e5a[OpenLayers.State.INSERT];
if(_e6a.length>0){
resp.push(this.create(_e6a,OpenLayers.Util.applyDefaults({callback:_e63,scope:this},_e57.create)));
}
_e6a=_e5a[OpenLayers.State.UPDATE];
for(var i=_e6a.length-1;i>=0;--i){
resp.push(this.update(_e6a[i],OpenLayers.Util.applyDefaults({callback:_e68,scope:this},_e57.update)));
}
_e6a=_e5a[OpenLayers.State.DELETE];
for(var i=_e6a.length-1;i>=0;--i){
resp.push(this["delete"](_e6a[i],OpenLayers.Util.applyDefaults({callback:_e68,scope:this},_e57["delete"])));
}
return resp;
},abort:function(_e6b){
if(_e6b){
_e6b.priv.abort();
}
},callUserCallback:function(resp,_e6d){
var opt=_e6d[resp.requestType];
if(opt&&opt.callback){
opt.callback.call(opt.scope,resp);
}
},CLASS_NAME:"OpenLayers.Protocol.HTTP"});
OpenLayers.Style=OpenLayers.Class({name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,defaultsPerSymbolizer:false,propertyStyles:null,initialize:function(_e6f,_e70){
OpenLayers.Util.extend(this,_e70);
this.rules=[];
if(_e70&&_e70.rules){
this.addRules(_e70.rules);
}
this.setDefaultStyle(_e6f||OpenLayers.Feature.Vector.style["default"]);
},destroy:function(){
for(var i=0,len=this.rules.length;i<len;i++){
this.rules[i].destroy();
this.rules[i]=null;
}
this.rules=null;
this.defaultStyle=null;
},createSymbolizer:function(_e73){
var _e74=this.defaultsPerSymbolizer?{}:this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),_e73);
var _e75=this.rules;
var rule,_e77;
var _e78=[];
var _e79=false;
for(var i=0,len=_e75.length;i<len;i++){
rule=_e75[i];
var _e7c=rule.evaluate(_e73);
if(_e7c){
if(rule instanceof OpenLayers.Rule&&rule.elseFilter){
_e78.push(rule);
}else{
_e79=true;
this.applySymbolizer(rule,_e74,_e73);
}
}
}
if(_e79==false&&_e78.length>0){
_e79=true;
for(var i=0,len=_e78.length;i<len;i++){
this.applySymbolizer(_e78[i],_e74,_e73);
}
}
if(_e75.length>0&&_e79==false){
_e74.display="none";
}
return _e74;
},applySymbolizer:function(rule,_e7e,_e7f){
var _e80=_e7f.geometry?this.getSymbolizerPrefix(_e7f.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];
var _e81=rule.symbolizer[_e80]||rule.symbolizer;
if(this.defaultsPerSymbolizer===true){
var _e82=this.defaultStyle;
OpenLayers.Util.applyDefaults(_e81,{pointRadius:_e82.pointRadius});
if(_e81.stroke===true||_e81.graphic===true){
OpenLayers.Util.applyDefaults(_e81,{strokeWidth:_e82.strokeWidth,strokeColor:_e82.strokeColor,strokeOpacity:_e82.strokeOpacity,strokeDashstyle:_e82.strokeDashstyle,strokeLinecap:_e82.strokeLinecap});
}
if(_e81.fill===true||_e81.graphic===true){
OpenLayers.Util.applyDefaults(_e81,{fillColor:_e82.fillColor,fillOpacity:_e82.fillOpacity});
}
if(_e81.graphic===true){
OpenLayers.Util.applyDefaults(_e81,{pointRadius:this.defaultStyle.pointRadius,externalGraphic:this.defaultStyle.externalGraphic,graphicName:this.defaultStyle.graphicName,graphicOpacity:this.defaultStyle.graphicOpacity,graphicWidth:this.defaultStyle.graphicWidth,graphicHeight:this.defaultStyle.graphicHeight,graphicXOffset:this.defaultStyle.graphicXOffset,graphicYOffset:this.defaultStyle.graphicYOffset});
}
}
return this.createLiterals(OpenLayers.Util.extend(_e7e,_e81),_e7f);
},createLiterals:function(_e83,_e84){
var _e85=this.context||_e84.attributes||_e84.data;
for(var i in this.propertyStyles){
_e83[i]=OpenLayers.Style.createLiteral(_e83[i],_e85,_e84);
}
return _e83;
},findPropertyStyles:function(){
var _e87={};
var _e88=this.defaultStyle;
this.addPropertyStyles(_e87,_e88);
var _e89=this.rules;
var _e8a,_e8b;
for(var i=0,len=_e89.length;i<len;i++){
_e8a=_e89[i].symbolizer;
for(var key in _e8a){
_e8b=_e8a[key];
if(typeof _e8b=="object"){
this.addPropertyStyles(_e87,_e8b);
}else{
this.addPropertyStyles(_e87,_e8a);
break;
}
}
}
return _e87;
},addPropertyStyles:function(_e8f,_e90){
var _e91;
for(var key in _e90){
_e91=_e90[key];
if(typeof _e91=="string"&&_e91.match(/\$\{\w+\}/)){
_e8f[key]=true;
}
}
return _e8f;
},addRules:function(_e93){
this.rules=this.rules.concat(_e93);
this.propertyStyles=this.findPropertyStyles();
},setDefaultStyle:function(_e94){
this.defaultStyle=_e94;
this.propertyStyles=this.findPropertyStyles();
},getSymbolizerPrefix:function(_e95){
var _e96=OpenLayers.Style.SYMBOLIZER_PREFIXES;
for(var i=0,len=_e96.length;i<len;i++){
if(_e95.CLASS_NAME.indexOf(_e96[i])!=-1){
return _e96[i];
}
}
},CLASS_NAME:"OpenLayers.Style"});
OpenLayers.Style.createLiteral=function(_e99,_e9a,_e9b){
if(typeof _e99=="string"&&_e99.indexOf("${")!=-1){
_e99=OpenLayers.String.format(_e99,_e9a,[_e9b]);
_e99=(isNaN(_e99)||!_e99)?_e99:parseFloat(_e99);
}
return _e99;
};
OpenLayers.Style.SYMBOLIZER_PREFIXES=["Point","Line","Polygon","Text"];
OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,zoomBox:null,zoomWheelEnabled:true,handleRightClicks:false,zoomBoxKeyMask:OpenLayers.Handler.MOD_SHIFT,initialize:function(_e9c){
this.handlers={};
OpenLayers.Control.prototype.initialize.apply(this,arguments);
},destroy:function(){
this.deactivate();
if(this.dragPan){
this.dragPan.destroy();
}
this.dragPan=null;
if(this.zoomBox){
this.zoomBox.destroy();
}
this.zoomBox=null;
OpenLayers.Control.prototype.destroy.apply(this,arguments);
},activate:function(){
this.dragPan.activate();
if(this.zoomWheelEnabled){
this.handlers.wheel.activate();
}
this.handlers.click.activate();
this.zoomBox.activate();
return OpenLayers.Control.prototype.activate.apply(this,arguments);
},deactivate:function(){
this.zoomBox.deactivate();
this.dragPan.deactivate();
this.handlers.click.deactivate();
this.handlers.wheel.deactivate();
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);
},draw:function(){
if(this.handleRightClicks){
this.map.viewPortDiv.oncontextmenu=function(){
return false;
};
}
var _e9d={"dblclick":this.defaultDblClick,"dblrightclick":this.defaultDblRightClick};
var _e9e={"double":true,"stopDouble":true};
this.handlers.click=new OpenLayers.Handler.Click(this,_e9d,_e9e);
this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map},this.dragPanOptions));
this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:this.zoomBoxKeyMask});
this.dragPan.draw();
this.zoomBox.draw();
this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{"up":this.wheelUp,"down":this.wheelDown});
this.activate();
},defaultDblClick:function(evt){
var _ea0=this.map.getLonLatFromViewPortPx(evt.xy);
this.map.setCenter(_ea0,this.map.zoom+1);
},defaultDblRightClick:function(evt){
var _ea2=this.map.getLonLatFromViewPortPx(evt.xy);
this.map.setCenter(_ea2,this.map.zoom-1);
},wheelChange:function(evt,_ea4){
var _ea5=this.map.getZoom()+_ea4;
if(!this.map.isValidZoomLevel(_ea5)){
return;
}
var size=this.map.getSize();
var _ea7=size.w/2-evt.xy.x;
var _ea8=evt.xy.y-size.h/2;
var _ea9=this.map.baseLayer.getResolutionForZoom(_ea5);
var _eaa=this.map.getLonLatFromPixel(evt.xy);
var _eab=new OpenLayers.LonLat(_eaa.lon+_ea7*_ea9,_eaa.lat+_ea8*_ea9);
this.map.setCenter(_eab,_ea5);
},wheelUp:function(evt){
this.wheelChange(evt,1);
},wheelDown:function(evt){
this.wheelChange(evt,-1);
},disableZoomWheel:function(){
this.zoomWheelEnabled=false;
this.handlers.wheel.deactivate();
},enableZoomWheel:function(){
this.zoomWheelEnabled=true;
if(this.active){
this.handlers.wheel.activate();
}
},CLASS_NAME:"OpenLayers.Control.Navigation"});
OpenLayers.Filter=OpenLayers.Class({initialize:function(_eae){
OpenLayers.Util.extend(this,_eae);
},destroy:function(){
},evaluate:function(_eaf){
return true;
},clone:function(){
return null;
},CLASS_NAME:"OpenLayers.Filter"});
OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
},destroy:function(){
this.id=null;
this.bounds=null;
},clone:function(){
return new OpenLayers.Geometry();
},setBounds:function(_eb0){
if(_eb0){
this.bounds=_eb0.clone();
}
},clearBounds:function(){
this.bounds=null;
if(this.parent){
this.parent.clearBounds();
}
},extendBounds:function(_eb1){
var _eb2=this.getBounds();
if(!_eb2){
this.setBounds(_eb1);
}else{
this.bounds.extend(_eb1);
}
},getBounds:function(){
if(this.bounds==null){
this.calculateBounds();
}
return this.bounds;
},calculateBounds:function(){
},distanceTo:function(_eb3,_eb4){
},getVertices:function(_eb5){
},atPoint:function(_eb6,_eb7,_eb8){
var _eb9=false;
var _eba=this.getBounds();
if((_eba!=null)&&(_eb6!=null)){
var dX=(_eb7!=null)?_eb7:0;
var dY=(_eb8!=null)?_eb8:0;
var _ebd=new OpenLayers.Bounds(this.bounds.left-dX,this.bounds.bottom-dY,this.bounds.right+dX,this.bounds.top+dY);
_eb9=_ebd.containsLonLat(_eb6);
}
return _eb9;
},getLength:function(){
return 0;
},getArea:function(){
return 0;
},getCentroid:function(){
return null;
},toString:function(){
return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));
},CLASS_NAME:"OpenLayers.Geometry"});
OpenLayers.Geometry.fromWKT=function(wkt){
var _ebf=arguments.callee.format;
if(!_ebf){
_ebf=new OpenLayers.Format.WKT();
arguments.callee.format=_ebf;
}
var geom;
var _ec1=_ebf.read(wkt);
if(_ec1 instanceof OpenLayers.Feature.Vector){
geom=_ec1.geometry;
}else{
if(_ec1 instanceof Array){
var len=_ec1.length;
var _ec3=new Array(len);
for(var i=0;i<len;++i){
_ec3[i]=_ec1[i].geometry;
}
geom=new OpenLayers.Geometry.Collection(_ec3);
}
}
return geom;
};
OpenLayers.Geometry.segmentsIntersect=function(seg1,seg2,_ec7){
var _ec8=_ec7&&_ec7.point;
var _ec9=_ec7&&_ec7.tolerance;
var _eca=false;
var _ecb=seg1.x1-seg2.x1;
var _ecc=seg1.y1-seg2.y1;
var _ecd=seg1.x2-seg1.x1;
var _ece=seg1.y2-seg1.y1;
var _ecf=seg2.y2-seg2.y1;
var _ed0=seg2.x2-seg2.x1;
var d=(_ecf*_ecd)-(_ed0*_ece);
var n1=(_ed0*_ecc)-(_ecf*_ecb);
var n2=(_ecd*_ecc)-(_ece*_ecb);
if(d==0){
if(n1==0&&n2==0){
_eca=true;
}
}else{
var _ed4=n1/d;
var _ed5=n2/d;
if(_ed4>=0&&_ed4<=1&&_ed5>=0&&_ed5<=1){
if(!_ec8){
_eca=true;
}else{
var x=seg1.x1+(_ed4*_ecd);
var y=seg1.y1+(_ed4*_ece);
_eca=new OpenLayers.Geometry.Point(x,y);
}
}
}
if(_ec9){
var dist;
if(_eca){
if(_ec8){
var segs=[seg1,seg2];
var seg,x,y;
outer:
for(var i=0;i<2;++i){
seg=segs[i];
for(var j=1;j<3;++j){
x=seg["x"+j];
y=seg["y"+j];
dist=Math.sqrt(Math.pow(x-_eca.x,2)+Math.pow(y-_eca.y,2));
if(dist<_ec9){
_eca.x=x;
_eca.y=y;
break outer;
}
}
}
}
}else{
var segs=[seg1,seg2];
var _edd,_ede,x,y,p,_ee0;
outer:
for(var i=0;i<2;++i){
_edd=segs[i];
_ede=segs[(i+1)%2];
for(var j=1;j<3;++j){
p={x:_edd["x"+j],y:_edd["y"+j]};
_ee0=OpenLayers.Geometry.distanceToSegment(p,_ede);
if(_ee0.distance<_ec9){
if(_ec8){
_eca=new OpenLayers.Geometry.Point(p.x,p.y);
}else{
_eca=true;
}
break outer;
}
}
}
}
}
return _eca;
};
OpenLayers.Geometry.distanceToSegment=function(_ee1,_ee2){
var x0=_ee1.x;
var y0=_ee1.y;
var x1=_ee2.x1;
var y1=_ee2.y1;
var x2=_ee2.x2;
var y2=_ee2.y2;
var dx=x2-x1;
var dy=y2-y1;
var _eeb=((dx*(x0-x1))+(dy*(y0-y1)))/(Math.pow(dx,2)+Math.pow(dy,2));
var x,y;
if(_eeb<=0){
x=x1;
y=y1;
}else{
if(_eeb>=1){
x=x2;
y=y2;
}else{
x=x1+_eeb*dx;
y=y1+_eeb*dy;
}
}
return {distance:Math.sqrt(Math.pow(x-x0,2)+Math.pow(y-y0,2)),x:x,y:y};
};
OpenLayers.Layer.ArcGIS93Rest=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{format:"png"},isBaseLayer:true,initialize:function(name,url,_ef0,_ef1){
var _ef2=[];
_ef0=OpenLayers.Util.upperCaseObject(_ef0);
_ef2.push(name,url,_ef0,_ef1);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_ef2);
OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
if(this.params.TRANSPARENT&&this.params.TRANSPARENT.toString().toLowerCase()=="true"){
if((_ef1==null)||(!_ef1.isBaseLayer)){
this.isBaseLayer=false;
}
if(this.params.FORMAT=="jpg"){
this.params.FORMAT=OpenLayers.Util.alphaHack()?"gif":"png";
}
}
},destroy:function(){
OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.ArcGIS93Rest(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},getURL:function(_ef4){
_ef4=this.adjustBounds(_ef4);
var _ef5=this.projection.getCode().split(":");
var srid=_ef5[_ef5.length-1];
var _ef7=this.getImageSize();
var _ef8={"BBOX":_ef4.toBBOX(),"SIZE":_ef7.w+","+_ef7.h,"F":"image","BBOXSR":srid,"IMAGESR":srid};
if(this.layerDefs){
var _ef9=[];
var _efa;
for(_efa in this.layerDefs){
if(this.layerDefs.hasOwnProperty(_efa)){
if(this.layerDefs[_efa]){
_ef9.push(_efa);
_ef9.push(":");
_ef9.push(this.layerDefs[_efa]);
_ef9.push(";");
}
}
}
if(_ef9.length>0){
_ef8["LAYERDEFS"]=_ef9.join("");
}
}
var _efb=this.getFullRequestString(_ef8);
return _efb;
},setLayerFilter:function(id,_efd){
if(!this.layerDefs){
this.layerDefs={};
}
if(_efd){
this.layerDefs[id]=_efd;
}else{
delete this.layerDefs[id];
}
},clearLayerFilter:function(id){
if(id){
delete this.layerDefs[id];
}else{
delete this.layerDefs;
}
},mergeNewParams:function(_eff){
var _f00=OpenLayers.Util.upperCaseObject(_eff);
var _f01=[_f00];
return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,_f01);
},addTile:function(_f02,_f03){
return new OpenLayers.Tile.Image(this,_f03,_f02,null,this.tileSize);
},CLASS_NAME:"OpenLayers.Layer.ArcGIS93Rest"});
OpenLayers.Layer.KaMap=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,units:null,resolution:OpenLayers.DOTS_PER_INCH,DEFAULT_PARAMS:{i:"jpeg",map:""},initialize:function(name,url,_f06,_f07){
var _f08=[];
_f08.push(name,url,_f06,_f07);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_f08);
this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);
},getURL:function(_f09){
_f09=this.adjustBounds(_f09);
var _f0a=this.map.getResolution();
var _f0b=Math.round((this.map.getScale()*10000))/10000;
var pX=Math.round(_f09.left/_f0a);
var pY=-Math.round(_f09.top/_f0a);
return this.getFullRequestString({t:pY,l:pX,s:_f0b});
},addTile:function(_f0e,_f0f){
var url=this.getURL(_f0e);
return new OpenLayers.Tile.Image(this,_f0f,_f0e,url,this.tileSize);
},calculateGridLayout:function(_f11,_f12,_f13){
var _f14=_f13*this.tileSize.w;
var _f15=_f13*this.tileSize.h;
var _f16=_f11.left;
var _f17=Math.floor(_f16/_f14)-this.buffer;
var _f18=_f16/_f14-_f17;
var _f19=-_f18*this.tileSize.w;
var _f1a=_f17*_f14;
var _f1b=_f11.top;
var _f1c=Math.ceil(_f1b/_f15)+this.buffer;
var _f1d=_f1c-_f1b/_f15;
var _f1e=-(_f1d+1)*this.tileSize.h;
var _f1f=_f1c*_f15;
return {tilelon:_f14,tilelat:_f15,tileoffsetlon:_f1a,tileoffsetlat:_f1f,tileoffsetx:_f19,tileoffsety:_f1e};
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.KaMap(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
if(this.tileSize!=null){
obj.tileSize=this.tileSize.clone();
}
obj.grid=[];
return obj;
},getTileBounds:function(_f21){
var _f22=this.getResolution();
var _f23=_f22*this.tileSize.w;
var _f24=_f22*this.tileSize.h;
var _f25=this.getLonLatFromViewPortPx(_f21);
var _f26=_f23*Math.floor(_f25.lon/_f23);
var _f27=_f24*Math.floor(_f25.lat/_f24);
return new OpenLayers.Bounds(_f26,_f27,_f26+_f23,_f27+_f24);
},CLASS_NAME:"OpenLayers.Layer.KaMap"});
OpenLayers.Layer.MapGuide=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,useHttpTile:false,singleTile:false,useOverlay:false,useAsyncOverlay:true,TILE_PARAMS:{operation:"GETTILEIMAGE",version:"1.2.0"},SINGLE_TILE_PARAMS:{operation:"GETMAPIMAGE",format:"PNG",locale:"en",clip:"1",version:"1.0.0"},OVERLAY_PARAMS:{operation:"GETDYNAMICMAPOVERLAYIMAGE",format:"PNG",locale:"en",clip:"1",version:"2.0.0"},FOLDER_PARAMS:{tileColumnsPerFolder:30,tileRowsPerFolder:30,format:"png",querystring:null},defaultSize:new OpenLayers.Size(300,300),initialize:function(name,url,_f2a,_f2b){
OpenLayers.Layer.Grid.prototype.initialize.apply(this,arguments);
if(_f2b==null||_f2b.isBaseLayer==null){
this.isBaseLayer=((this.transparent!="true")&&(this.transparent!=true));
}
if(_f2b&&_f2b.useOverlay!=null){
this.useOverlay=_f2b.useOverlay;
}
if(this.singleTile){
if(this.useOverlay){
OpenLayers.Util.applyDefaults(this.params,this.OVERLAY_PARAMS);
if(!this.useAsyncOverlay){
this.params.version="1.0.0";
}
}else{
OpenLayers.Util.applyDefaults(this.params,this.SINGLE_TILE_PARAMS);
}
}else{
if(this.useHttpTile){
OpenLayers.Util.applyDefaults(this.params,this.FOLDER_PARAMS);
}else{
OpenLayers.Util.applyDefaults(this.params,this.TILE_PARAMS);
}
this.setTileSize(this.defaultSize);
}
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.MapGuide(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},addTile:function(_f2d,_f2e){
return new OpenLayers.Tile.Image(this,_f2e,_f2d,null,this.tileSize);
},getURL:function(_f2f){
var url;
var _f31=_f2f.getCenterLonLat();
var _f32=this.map.getCurrentSize();
if(this.singleTile){
var _f33={setdisplaydpi:OpenLayers.DOTS_PER_INCH,setdisplayheight:_f32.h*this.ratio,setdisplaywidth:_f32.w*this.ratio,setviewcenterx:_f31.lon,setviewcentery:_f31.lat,setviewscale:this.map.getScale()};
if(this.useOverlay&&!this.useAsyncOverlay){
var _f34={};
_f34=OpenLayers.Util.extend(_f34,_f33);
_f34.operation="GETVISIBLEMAPEXTENT";
_f34.version="1.0.0";
_f34.session=this.params.session;
_f34.mapName=this.params.mapName;
_f34.format="text/xml";
url=this.getFullRequestString(_f34);
OpenLayers.Request.GET({url:url,async:false});
}
url=this.getFullRequestString(_f33);
}else{
var _f35=this.map.getResolution();
var _f36=Math.floor((_f2f.left-this.maxExtent.left)/_f35);
_f36=Math.round(_f36/this.tileSize.w);
var _f37=Math.floor((this.maxExtent.top-_f2f.top)/_f35);
_f37=Math.round(_f37/this.tileSize.h);
if(this.useHttpTile){
url=this.getImageFilePath({tilecol:_f36,tilerow:_f37,scaleindex:this.resolutions.length-this.map.zoom-1});
}else{
url=this.getFullRequestString({tilecol:_f36,tilerow:_f37,scaleindex:this.resolutions.length-this.map.zoom-1});
}
}
return url;
},getFullRequestString:function(_f38,_f39){
var url=(_f39==null)?this.url:_f39;
if(typeof url=="object"){
url=url[Math.floor(Math.random()*url.length)];
}
var _f3b=url;
var _f3c=OpenLayers.Util.extend({},this.params);
_f3c=OpenLayers.Util.extend(_f3c,_f38);
var _f3d=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getArgs(url));
for(var key in _f3c){
if(key.toUpperCase() in _f3d){
delete _f3c[key];
}
}
var _f3f=OpenLayers.Util.getParameterString(_f3c);
_f3f=_f3f.replace(/,/g,"+");
if(_f3f!=""){
var _f40=url.charAt(url.length-1);
if((_f40=="&")||(_f40=="?")){
_f3b+=_f3f;
}else{
if(url.indexOf("?")==-1){
_f3b+="?"+_f3f;
}else{
_f3b+="&"+_f3f;
}
}
}
return _f3b;
},getImageFilePath:function(_f41,_f42){
var url=(_f42==null)?this.url:_f42;
if(typeof url=="object"){
url=url[Math.floor(Math.random()*url.length)];
}
var _f44=url;
var _f45="";
var _f46="";
if(_f41.tilerow<0){
_f45="-";
}
if(_f41.tilerow==0){
_f45+="0";
}else{
_f45+=Math.floor(Math.abs(_f41.tilerow/this.params.tileRowsPerFolder))*this.params.tileRowsPerFolder;
}
if(_f41.tilecol<0){
_f46="-";
}
if(_f41.tilecol==0){
_f46+="0";
}else{
_f46+=Math.floor(Math.abs(_f41.tilecol/this.params.tileColumnsPerFolder))*this.params.tileColumnsPerFolder;
}
var _f47="/S"+Math.floor(_f41.scaleindex)+"/"+this.params.basemaplayergroupname+"/R"+_f45+"/C"+_f46+"/"+(_f41.tilerow%this.params.tileRowsPerFolder)+"_"+(_f41.tilecol%this.params.tileColumnsPerFolder)+"."+this.params.format;
if(this.params.querystring){
_f47+="?"+this.params.querystring;
}
_f44+=_f47;
return _f44;
},calculateGridLayout:function(_f48,_f49,_f4a){
var _f4b=_f4a*this.tileSize.w;
var _f4c=_f4a*this.tileSize.h;
var _f4d=_f48.left-_f49.left;
var _f4e=Math.floor(_f4d/_f4b)-this.buffer;
var _f4f=_f4d/_f4b-_f4e;
var _f50=-_f4f*this.tileSize.w;
var _f51=_f49.left+_f4e*_f4b;
var _f52=_f49.top-_f48.top+_f4c;
var _f53=Math.floor(_f52/_f4c)-this.buffer;
var _f54=_f53-_f52/_f4c;
var _f55=_f54*this.tileSize.h;
var _f56=_f49.top-_f4c*_f53;
return {tilelon:_f4b,tilelat:_f4c,tileoffsetlon:_f51,tileoffsetlat:_f56,tileoffsetx:_f50,tileoffsety:_f55};
},CLASS_NAME:"OpenLayers.Layer.MapGuide"});
OpenLayers.Layer.MapServer=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{mode:"map",map_imagetype:"png"},initialize:function(name,url,_f59,_f5a){
var _f5b=[];
_f5b.push(name,url,_f59,_f5a);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_f5b);
this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);
if(_f5a==null||_f5a.isBaseLayer==null){
this.isBaseLayer=((this.params.transparent!="true")&&(this.params.transparent!=true));
}
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.MapServer(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},addTile:function(_f5d,_f5e){
return new OpenLayers.Tile.Image(this,_f5e,_f5d,null,this.tileSize);
},getURL:function(_f5f){
_f5f=this.adjustBounds(_f5f);
var _f60=[_f5f.left,_f5f.bottom,_f5f.right,_f5f.top];
var _f61=this.getImageSize();
var url=this.getFullRequestString({mapext:_f60,imgext:_f60,map_size:[_f61.w,_f61.h],imgx:_f61.w/2,imgy:_f61.h/2,imgxy:[_f61.w,_f61.h]});
return url;
},getFullRequestString:function(_f63,_f64){
var url=(_f64==null)?this.url:_f64;
var _f66=OpenLayers.Util.extend({},this.params);
_f66=OpenLayers.Util.extend(_f66,_f63);
var _f67=OpenLayers.Util.getParameterString(_f66);
if(url instanceof Array){
url=this.selectUrl(_f67,url);
}
var _f68=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));
for(var key in _f66){
if(key.toUpperCase() in _f68){
delete _f66[key];
}
}
_f67=OpenLayers.Util.getParameterString(_f66);
var _f6a=url;
_f67=_f67.replace(/,/g,"+");
if(_f67!=""){
var _f6b=url.charAt(url.length-1);
if((_f6b=="&")||(_f6b=="?")){
_f6a+=_f67;
}else{
if(url.indexOf("?")==-1){
_f6a+="?"+_f67;
}else{
_f6a+="&"+_f67;
}
}
}
return _f6a;
},CLASS_NAME:"OpenLayers.Layer.MapServer"});
OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",isBaseLayer:true,tileOrigin:null,serverResolutions:null,initialize:function(name,url,_f6e){
var _f6f=[];
_f6f.push(name,url,{},_f6e);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_f6f);
},destroy:function(){
OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.TMS(this.name,this.url,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},getURL:function(_f71){
_f71=this.adjustBounds(_f71);
var res=this.map.getResolution();
var x=Math.round((_f71.left-this.tileOrigin.lon)/(res*this.tileSize.w));
var y=Math.round((_f71.bottom-this.tileOrigin.lat)/(res*this.tileSize.h));
var z=this.serverResolutions!=null?OpenLayers.Util.indexOf(this.serverResolutions,res):this.map.getZoom();
var path=this.serviceVersion+"/"+this.layername+"/"+z+"/"+x+"/"+y+"."+this.type;
var url=this.url;
if(url instanceof Array){
url=this.selectUrl(path,url);
}
return url+path;
},addTile:function(_f78,_f79){
return new OpenLayers.Tile.Image(this,_f79,_f78,null,this.tileSize);
},setMap:function(map){
OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);
if(!this.tileOrigin){
this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);
}
},CLASS_NAME:"OpenLayers.Layer.TMS"});
OpenLayers.Layer.TileCache=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,format:"image/png",serverResolutions:null,initialize:function(name,url,_f7d,_f7e){
this.layername=_f7d;
OpenLayers.Layer.Grid.prototype.initialize.apply(this,[name,url,{},_f7e]);
this.extension=this.format.split("/")[1].toLowerCase();
this.extension=(this.extension=="jpg")?"jpeg":this.extension;
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.TileCache(this.name,this.url,this.layername,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},getURL:function(_f80){
var res=this.map.getResolution();
var bbox=this.maxExtent;
var size=this.tileSize;
var _f84=Math.round((_f80.left-bbox.left)/(res*size.w));
var _f85=Math.round((_f80.bottom-bbox.bottom)/(res*size.h));
var _f86=this.serverResolutions!=null?OpenLayers.Util.indexOf(this.serverResolutions,res):this.map.getZoom();
function _f87(_f88,_f89){
_f88=String(_f88);
var _f8a=[];
for(var i=0;i<_f89;++i){
_f8a.push("0");
}
return _f8a.join("").substring(0,_f89-_f88.length)+_f88;
};
var _f8c=[this.layername,_f87(_f86,2),_f87(parseInt(_f84/1000000),3),_f87((parseInt(_f84/1000)%1000),3),_f87((parseInt(_f84)%1000),3),_f87(parseInt(_f85/1000000),3),_f87((parseInt(_f85/1000)%1000),3),_f87((parseInt(_f85)%1000),3)+"."+this.extension];
var path=_f8c.join("/");
var url=this.url;
if(url instanceof Array){
url=this.selectUrl(path,url);
}
url=(url.charAt(url.length-1)=="/")?url:url+"/";
return url+path;
},addTile:function(_f8f,_f90){
var url=this.getURL(_f8f);
return new OpenLayers.Tile.Image(this,_f90,_f8f,url,this.tileSize);
},CLASS_NAME:"OpenLayers.Layer.TileCache"});
OpenLayers.Layer.WMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{service:"WMS",version:"1.1.1",request:"GetMap",styles:"",exceptions:"application/vnd.ogc.se_inimage",format:"image/jpeg"},reproject:false,isBaseLayer:true,encodeBBOX:false,noMagic:false,initialize:function(name,url,_f94,_f95){
var _f96=[];
_f94=OpenLayers.Util.upperCaseObject(_f94);
_f96.push(name,url,_f94,_f95);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_f96);
OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
if(!this.noMagic&&this.params.TRANSPARENT&&this.params.TRANSPARENT.toString().toLowerCase()=="true"){
if((_f95==null)||(!_f95.isBaseLayer)){
this.isBaseLayer=false;
}
if(this.params.FORMAT=="image/jpeg"){
this.params.FORMAT=OpenLayers.Util.alphaHack()?"image/gif":"image/png";
}
}
},destroy:function(){
OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.WMS(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);
return obj;
},getURL:function(_f98){
_f98=this.adjustBounds(_f98);
var _f99=this.getImageSize();
var _f9a={"BBOX":this.encodeBBOX?_f98.toBBOX():_f98.toArray(),"WIDTH":_f99.w,"HEIGHT":_f99.h};
var _f9b=this.getFullRequestString(_f9a);
return _f9b;
},addTile:function(_f9c,_f9d){
return new OpenLayers.Tile.Image(this,_f9d,_f9c,null,this.tileSize);
},mergeNewParams:function(_f9e){
var _f9f=OpenLayers.Util.upperCaseObject(_f9e);
var _fa0=[_f9f];
return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,_fa0);
},getFullRequestString:function(_fa1,_fa2){
var _fa3=this.map.getProjection();
this.params.SRS=(_fa3=="none")?null:_fa3;
return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Layer.WMS"});
OpenLayers.Layer.WorldWind=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{},isBaseLayer:true,lzd:null,zoomLevels:null,initialize:function(name,url,lzd,_fa7,_fa8,_fa9){
this.lzd=lzd;
this.zoomLevels=_fa7;
var _faa=[];
_faa.push(name,url,_fa8,_fa9);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_faa);
this.params=OpenLayers.Util.applyDefaults(this.params,this.DEFAULT_PARAMS);
},addTile:function(_fab,_fac){
return new OpenLayers.Tile.Image(this,_fac,_fab,null,this.tileSize);
},getZoom:function(){
var zoom=this.map.getZoom();
var _fae=this.map.getMaxExtent();
zoom=zoom-Math.log(this.maxResolution/(this.lzd/512))/Math.log(2);
return zoom;
},getURL:function(_faf){
_faf=this.adjustBounds(_faf);
var zoom=this.getZoom();
var _fb1=this.map.getMaxExtent();
var deg=this.lzd/Math.pow(2,this.getZoom());
var x=Math.floor((_faf.left-_fb1.left)/deg);
var y=Math.floor((_faf.bottom-_fb1.bottom)/deg);
if(this.map.getResolution()<=(this.lzd/512)&&this.getZoom()<=this.zoomLevels){
return this.getFullRequestString({L:zoom,X:x,Y:y});
}else{
return OpenLayers.Util.getImagesLocation()+"blank.gif";
}
},CLASS_NAME:"OpenLayers.Layer.WorldWind"});
OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:true,sphericalMercator:false,initialize:function(name,url,_fb7){
if(_fb7&&_fb7.sphericalMercator||this.sphericalMercator){
_fb7=OpenLayers.Util.extend({maxExtent:new OpenLayers.Bounds(-128*156543.0339,-128*156543.0339,128*156543.0339,128*156543.0339),maxResolution:156543.0339,numZoomLevels:19,units:"m",projection:"EPSG:900913"},_fb7);
}
url=url||this.url;
name=name||this.name;
var _fb8=[name,url,{},_fb7];
OpenLayers.Layer.Grid.prototype.initialize.apply(this,_fb8);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.XYZ(this.name,this.url,this.options);
}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);
if(this.tileSize!=null){
obj.tileSize=this.tileSize.clone();
}
obj.grid=[];
return obj;
},getURL:function(_fba){
var res=this.map.getResolution();
var x=Math.round((_fba.left-this.maxExtent.left)/(res*this.tileSize.w));
var y=Math.round((this.maxExtent.top-_fba.top)/(res*this.tileSize.h));
var z=this.map.getZoom();
var _fbf=Math.pow(2,z);
var url=this.url;
var s=""+x+y+z;
if(url instanceof Array){
url=this.selectUrl(s,url);
}
var path=OpenLayers.String.format(url,{"x":x,"y":y,"z":z});
return path;
},addTile:function(_fc3,_fc4){
return new OpenLayers.Tile.Image(this,_fc4,_fc3,null,this.tileSize);
},setMap:function(map){
OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);
if(!this.tileOrigin){
this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom);
}
},CLASS_NAME:"OpenLayers.Layer.XYZ"});
OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",attribution:"Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",sphericalMercator:true,url:"http://tile.openstreetmap.org/${z}/${x}/${y}.png",CLASS_NAME:"OpenLayers.Layer.OSM"});
OpenLayers.Protocol.SQL.Gears=OpenLayers.Class(OpenLayers.Protocol.SQL,{FID_PREFIX:"__gears_fid__",NULL_GEOMETRY:"__gears_null_geometry__",NULL_FEATURE_STATE:"__gears_null_feature_state__",jsonParser:null,wktParser:null,fidRegExp:null,saveFeatureState:true,typeOfFid:"string",db:null,initialize:function(_fc6){
if(!this.supported()){
return;
}
OpenLayers.Protocol.SQL.prototype.initialize.apply(this,[_fc6]);
this.jsonParser=new OpenLayers.Format.JSON();
this.wktParser=new OpenLayers.Format.WKT();
this.fidRegExp=new RegExp("^"+this.FID_PREFIX);
this.initializeDatabase();
},initializeDatabase:function(){
this.db=google.gears.factory.create("beta.database");
this.db.open(this.databaseName);
this.db.execute("CREATE TABLE IF NOT EXISTS "+this.tableName+" (fid TEXT UNIQUE, geometry TEXT, properties TEXT,"+"  state TEXT)");
},destroy:function(){
this.db.close();
this.db=null;
this.jsonParser=null;
this.wktParser=null;
OpenLayers.Protocol.SQL.prototype.destroy.apply(this);
},supported:function(){
return !!(window.google&&google.gears);
},read:function(_fc7){
_fc7=OpenLayers.Util.applyDefaults(_fc7,this.options);
var _fc8,_fc9=[];
var rs=this.db.execute("SELECT * FROM "+this.tableName);
while(rs.isValidRow()){
_fc8=this.unfreezeFeature(rs);
if(this.evaluateFilter(_fc8,_fc7.filter)){
if(!_fc7.noFeatureStateReset){
_fc8.state=null;
}
_fc9.push(_fc8);
}
rs.next();
}
rs.close();
var resp=new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,requestType:"read",features:_fc9});
if(_fc7&&_fc7.callback){
_fc7.callback.call(_fc7.scope,resp);
}
return resp;
},unfreezeFeature:function(row){
var _fcd;
var wkt=row.fieldByName("geometry");
if(wkt==this.NULL_GEOMETRY){
_fcd=new OpenLayers.Feature.Vector();
}else{
_fcd=this.wktParser.read(wkt);
}
_fcd.attributes=this.jsonParser.read(row.fieldByName("properties"));
_fcd.fid=this.extractFidFromField(row.fieldByName("fid"));
var _fcf=row.fieldByName("state");
if(_fcf==this.NULL_FEATURE_STATE){
_fcf=null;
}
_fcd.state=_fcf;
return _fcd;
},extractFidFromField:function(_fd0){
if(!_fd0.match(this.fidRegExp)&&this.typeOfFid=="number"){
_fd0=parseFloat(_fd0);
}
return _fd0;
},create:function(_fd1,_fd2){
_fd2=OpenLayers.Util.applyDefaults(_fd2,this.options);
var resp=this.createOrUpdate(_fd1);
resp.requestType="create";
if(_fd2&&_fd2.callback){
_fd2.callback.call(_fd2.scope,resp);
}
return resp;
},update:function(_fd4,_fd5){
_fd5=OpenLayers.Util.applyDefaults(_fd5,this.options);
var resp=this.createOrUpdate(_fd4);
resp.requestType="update";
if(_fd5&&_fd5.callback){
_fd5.callback.call(_fd5.scope,resp);
}
return resp;
},createOrUpdate:function(_fd7){
if(!(_fd7 instanceof Array)){
_fd7=[_fd7];
}
var i,len=_fd7.length,_fda;
var _fdb=new Array(len);
for(i=0;i<len;i++){
_fda=_fd7[i];
var _fdc=this.freezeFeature(_fda);
this.db.execute("REPLACE INTO "+this.tableName+" (fid, geometry, properties, state)"+" VALUES (?, ?, ?, ?)",_fdc);
var _fdd=_fda.clone();
_fdd.fid=this.extractFidFromField(_fdc[0]);
_fdb[i]=_fdd;
}
return new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,features:_fdb,reqFeatures:_fd7});
},freezeFeature:function(_fde){
_fde.fid=_fde.fid!=null?""+_fde.fid:OpenLayers.Util.createUniqueID(this.FID_PREFIX);
var _fdf=_fde.geometry!=null?_fde.geometry.toString():this.NULL_GEOMETRY;
var _fe0=this.jsonParser.write(_fde.attributes);
var _fe1=this.getFeatureStateForFreeze(_fde);
return [_fde.fid,_fdf,_fe0,_fe1];
},getFeatureStateForFreeze:function(_fe2){
var _fe3;
if(!this.saveFeatureState){
_fe3=this.NULL_FEATURE_STATE;
}else{
if(this.createdOffline(_fe2)){
_fe3=OpenLayers.State.INSERT;
}else{
_fe3=_fe2.state;
}
}
return _fe3;
},"delete":function(_fe4,_fe5){
if(!(_fe4 instanceof Array)){
_fe4=[_fe4];
}
_fe5=OpenLayers.Util.applyDefaults(_fe5,this.options);
var i,len,_fe8;
for(i=0,len=_fe4.length;i<len;i++){
_fe8=_fe4[i];
if(this.saveFeatureState&&!this.createdOffline(_fe8)){
var _fe9=_fe8.clone();
_fe9.fid=_fe8.fid;
if(_fe9.geometry){
_fe9.geometry.destroy();
_fe9.geometry=null;
}
_fe9.state=_fe8.state;
this.createOrUpdate(_fe9);
}else{
this.db.execute("DELETE FROM "+this.tableName+" WHERE fid = ?",[_fe8.fid]);
}
}
var resp=new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,requestType:"delete",reqFeatures:_fe4});
if(_fe5&&_fe5.callback){
_fe5.callback.call(_fe5.scope,resp);
}
return resp;
},createdOffline:function(_feb){
return (typeof _feb.fid=="string"&&!!(_feb.fid.match(this.fidRegExp)));
},commit:function(_fec,_fed){
var opt,resp=[],_ff0=0,_ff1=0;
function _ff2(resp){
if(++_ff1<_ff0){
resp.last=false;
}
this.callUserCallback(_fed,resp);
};
var _ff4,_ff5=[],_ff6=[],_ff7=[];
for(var i=_fec.length-1;i>=0;i--){
_ff4=_fec[i];
switch(_ff4.state){
case OpenLayers.State.INSERT:
_ff5.push(_ff4);
break;
case OpenLayers.State.UPDATE:
_ff6.push(_ff4);
break;
case OpenLayers.State.DELETE:
_ff7.push(_ff4);
break;
}
}
if(_ff5.length>0){
_ff0++;
opt=OpenLayers.Util.applyDefaults({"callback":_ff2,"scope":this},_fed.create);
resp.push(this.create(_ff5,opt));
}
if(_ff6.length>0){
_ff0++;
opt=OpenLayers.Util.applyDefaults({"callback":_ff2,"scope":this},_fed.update);
resp.push(this.update(_ff6,opt));
}
if(_ff7.length>0){
_ff0++;
opt=OpenLayers.Util.applyDefaults({"callback":_ff2,"scope":this},_fed["delete"]);
resp.push(this["delete"](_ff7,opt));
}
return resp;
},clear:function(){
this.db.execute("DELETE FROM "+this.tableName);
},callUserCallback:function(_ff9,resp){
var opt=_ff9[resp.requestType];
if(opt&&opt.callback){
opt.callback.call(opt.scope,resp);
}
if(resp.last&&_ff9.callback){
_ff9.callback.call(_ff9.scope);
}
},CLASS_NAME:"OpenLayers.Protocol.SQL.Gears"});
OpenLayers.Rule=OpenLayers.Class({id:null,name:"default",title:null,description:null,context:null,filter:null,elseFilter:false,symbolizer:null,minScaleDenominator:null,maxScaleDenominator:null,initialize:function(_ffc){
this.symbolizer={};
OpenLayers.Util.extend(this,_ffc);
this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");
},destroy:function(){
for(var i in this.symbolizer){
this.symbolizer[i]=null;
}
this.symbolizer=null;
},evaluate:function(_ffe){
var _fff=this.getContext(_ffe);
var _1000=true;
if(this.minScaleDenominator||this.maxScaleDenominator){
var scale=_ffe.layer.map.getScale();
}
if(this.minScaleDenominator){
_1000=scale>=OpenLayers.Style.createLiteral(this.minScaleDenominator,_fff);
}
if(_1000&&this.maxScaleDenominator){
_1000=scale<OpenLayers.Style.createLiteral(this.maxScaleDenominator,_fff);
}
if(_1000&&this.filter){
if(this.filter.CLASS_NAME=="OpenLayers.Filter.FeatureId"){
_1000=this.filter.evaluate(_ffe);
}else{
_1000=this.filter.evaluate(_fff);
}
}
return _1000;
},getContext:function(_1002){
var _1003=this.context;
if(!_1003){
_1003=_1002.attributes||_1002.data;
}
if(typeof this.context=="function"){
_1003=this.context(_1002);
}
return _1003;
},clone:function(){
var _1004=OpenLayers.Util.extend({},this);
_1004.symbolizer={};
for(var key in this.symbolizer){
value=this.symbolizer[key];
type=typeof value;
if(type==="object"){
_1004.symbolizer[key]=OpenLayers.Util.extend({},value);
}else{
if(type==="string"){
_1004.symbolizer[key]=value;
}
}
}
_1004.filter=this.filter&&this.filter.clone();
_1004.context=this.context&&OpenLayers.Util.extend({},this.context);
return new OpenLayers.Rule(_1004);
},CLASS_NAME:"OpenLayers.Rule"});
OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:true,initialize:function(style,_1007){
this.styles={"default":new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]),"select":new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]),"temporary":new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"]),"delete":new OpenLayers.Style(OpenLayers.Feature.Vector.style["delete"])};
if(style instanceof OpenLayers.Style){
this.styles["default"]=style;
this.styles["select"]=style;
this.styles["temporary"]=style;
this.styles["delete"]=style;
}else{
if(typeof style=="object"){
for(var key in style){
if(style[key] instanceof OpenLayers.Style){
this.styles[key]=style[key];
}else{
if(typeof style[key]=="object"){
this.styles[key]=new OpenLayers.Style(style[key]);
}else{
this.styles["default"]=new OpenLayers.Style(style);
this.styles["select"]=new OpenLayers.Style(style);
this.styles["temporary"]=new OpenLayers.Style(style);
this.styles["delete"]=new OpenLayers.Style(style);
break;
}
}
}
}
}
OpenLayers.Util.extend(this,_1007);
},destroy:function(){
for(var key in this.styles){
this.styles[key].destroy();
}
this.styles=null;
},createSymbolizer:function(_100a,_100b){
if(!_100a){
_100a=new OpenLayers.Feature.Vector();
}
if(!this.styles[_100b]){
_100b="default";
}
_100a.renderIntent=_100b;
var _100c={};
if(this.extendDefault&&_100b!="default"){
_100c=this.styles["default"].createSymbolizer(_100a);
}
return OpenLayers.Util.extend(_100c,this.styles[_100b].createSymbolizer(_100a));
},addUniqueValueRules:function(_100d,_100e,_100f,_1010){
var rules=[];
for(var value in _100f){
rules.push(new OpenLayers.Rule({symbolizer:_100f[value],context:_1010,filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:_100e,value:value})}));
}
this.styles[_100d].addRules(rules);
},CLASS_NAME:"OpenLayers.StyleMap"});
OpenLayers.Control.NavToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(_1013){
OpenLayers.Control.Panel.prototype.initialize.apply(this,[_1013]);
this.addControls([new OpenLayers.Control.Navigation(),new OpenLayers.Control.ZoomBox()]);
},draw:function(){
var div=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);
this.activateControl(this.controls[0]);
return div;
},CLASS_NAME:"OpenLayers.Control.NavToolbar"});
OpenLayers.Filter.Comparison=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,matchCase:true,lowerBoundary:null,upperBoundary:null,initialize:function(_1015){
OpenLayers.Filter.prototype.initialize.apply(this,[_1015]);
},evaluate:function(_1016){
var _1017=false;
switch(this.type){
case OpenLayers.Filter.Comparison.EQUAL_TO:
var got=_1016[this.property];
var exp=this.value;
if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){
_1017=(got.toUpperCase()==exp.toUpperCase());
}else{
_1017=(got==exp);
}
break;
case OpenLayers.Filter.Comparison.NOT_EQUAL_TO:
var got=_1016[this.property];
var exp=this.value;
if(!this.matchCase&&typeof got=="string"&&typeof exp=="string"){
_1017=(got.toUpperCase()!=exp.toUpperCase());
}else{
_1017=(got!=exp);
}
break;
case OpenLayers.Filter.Comparison.LESS_THAN:
_1017=_1016[this.property]<this.value;
break;
case OpenLayers.Filter.Comparison.GREATER_THAN:
_1017=_1016[this.property]>this.value;
break;
case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO:
_1017=_1016[this.property]<=this.value;
break;
case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO:
_1017=_1016[this.property]>=this.value;
break;
case OpenLayers.Filter.Comparison.BETWEEN:
_1017=(_1016[this.property]>=this.lowerBoundary)&&(_1016[this.property]<=this.upperBoundary);
break;
case OpenLayers.Filter.Comparison.LIKE:
var _101a=new RegExp(this.value,"gi");
_1017=_101a.test(_1016[this.property]);
break;
}
return _1017;
},value2regex:function(_101b,_101c,_101d){
if(_101b=="."){
var msg="'.' is an unsupported wildCard character for "+"OpenLayers.Filter.Comparison";
OpenLayers.Console.error(msg);
return null;
}
_101b=_101b?_101b:"*";
_101c=_101c?_101c:".";
_101d=_101d?_101d:"!";
this.value=this.value.replace(new RegExp("\\"+_101d+"(.|$)","g"),"\\$1");
this.value=this.value.replace(new RegExp("\\"+_101c,"g"),".");
this.value=this.value.replace(new RegExp("\\"+_101b,"g"),".*");
this.value=this.value.replace(new RegExp("\\\\.\\*","g"),"\\"+_101b);
this.value=this.value.replace(new RegExp("\\\\\\.","g"),"\\"+_101c);
return this.value;
},regex2value:function(){
var value=this.value;
value=value.replace(/!/g,"!!");
value=value.replace(/(\\)?\\\./g,function($0,$1){
return $1?$0:"!.";
});
value=value.replace(/(\\)?\\\*/g,function($0,$1){
return $1?$0:"!*";
});
value=value.replace(/\\\\/g,"\\");
value=value.replace(/\.\*/g,"*");
return value;
},clone:function(){
return OpenLayers.Util.extend(new OpenLayers.Filter.Comparison(),this);
},CLASS_NAME:"OpenLayers.Filter.Comparison"});
OpenLayers.Filter.Comparison.EQUAL_TO="==";
OpenLayers.Filter.Comparison.NOT_EQUAL_TO="!=";
OpenLayers.Filter.Comparison.LESS_THAN="<";
OpenLayers.Filter.Comparison.GREATER_THAN=">";
OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO="<=";
OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO=">=";
OpenLayers.Filter.Comparison.BETWEEN="..";
OpenLayers.Filter.Comparison.LIKE="~";
OpenLayers.Filter.FeatureId=OpenLayers.Class(OpenLayers.Filter,{fids:null,initialize:function(_1024){
this.fids=[];
OpenLayers.Filter.prototype.initialize.apply(this,[_1024]);
},evaluate:function(_1025){
for(var i=0,len=this.fids.length;i<len;i++){
var fid=_1025.fid||_1025.id;
if(fid==this.fids[i]){
return true;
}
}
return false;
},clone:function(){
var _1029=new OpenLayers.Filter.FeatureId();
OpenLayers.Util.extend(_1029,this);
_1029.fids=this.fids.slice();
return _1029;
},CLASS_NAME:"OpenLayers.Filter.FeatureId"});
OpenLayers.Filter.Logical=OpenLayers.Class(OpenLayers.Filter,{filters:null,type:null,initialize:function(_102a){
this.filters=[];
OpenLayers.Filter.prototype.initialize.apply(this,[_102a]);
},destroy:function(){
this.filters=null;
OpenLayers.Filter.prototype.destroy.apply(this);
},evaluate:function(_102b){
switch(this.type){
case OpenLayers.Filter.Logical.AND:
for(var i=0,len=this.filters.length;i<len;i++){
if(this.filters[i].evaluate(_102b)==false){
return false;
}
}
return true;
case OpenLayers.Filter.Logical.OR:
for(var i=0,len=this.filters.length;i<len;i++){
if(this.filters[i].evaluate(_102b)==true){
return true;
}
}
return false;
case OpenLayers.Filter.Logical.NOT:
return (!this.filters[0].evaluate(_102b));
}
},clone:function(){
var _102e=[];
for(var i=0,len=this.filters.length;i<len;++i){
_102e.push(this.filters[i].clone());
}
return new OpenLayers.Filter.Logical({type:this.type,filters:_102e});
},CLASS_NAME:"OpenLayers.Filter.Logical"});
OpenLayers.Filter.Logical.AND="&&";
OpenLayers.Filter.Logical.OR="||";
OpenLayers.Filter.Logical.NOT="!";
OpenLayers.Filter.Spatial=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,distance:null,distanceUnits:null,initialize:function(_1031){
OpenLayers.Filter.prototype.initialize.apply(this,[_1031]);
},evaluate:function(_1032){
var _1033=false;
switch(this.type){
case OpenLayers.Filter.Spatial.BBOX:
case OpenLayers.Filter.Spatial.INTERSECTS:
if(_1032.geometry){
var geom=this.value;
if(this.value.CLASS_NAME=="OpenLayers.Bounds"){
geom=this.value.toGeometry();
}
if(_1032.geometry.intersects(geom)){
_1033=true;
}
}
break;
default:
OpenLayers.Console.error(OpenLayers.i18n("filterEvaluateNotImplemented"));
break;
}
return _1033;
},clone:function(){
var _1035=OpenLayers.Util.applyDefaults({value:this.value&&this.value.clone&&this.value.clone()},this);
return new OpenLayers.Filter.Spatial(_1035);
},CLASS_NAME:"OpenLayers.Filter.Spatial"});
OpenLayers.Filter.Spatial.BBOX="BBOX";
OpenLayers.Filter.Spatial.INTERSECTS="INTERSECTS";
OpenLayers.Filter.Spatial.DWITHIN="DWITHIN";
OpenLayers.Filter.Spatial.WITHIN="WITHIN";
OpenLayers.Filter.Spatial.CONTAINS="CONTAINS";
OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(_1036){
OpenLayers.Geometry.prototype.initialize.apply(this,arguments);
this.components=[];
if(_1036!=null){
this.addComponents(_1036);
}
},destroy:function(){
this.components.length=0;
this.components=null;
},clone:function(){
var _1037=eval("new "+this.CLASS_NAME+"()");
for(var i=0,len=this.components.length;i<len;i++){
_1037.addComponent(this.components[i].clone());
}
OpenLayers.Util.applyDefaults(_1037,this);
return _1037;
},getComponentsString:function(){
var _103a=[];
for(var i=0,len=this.components.length;i<len;i++){
_103a.push(this.components[i].toShortString());
}
return _103a.join(",");
},calculateBounds:function(){
this.bounds=null;
if(this.components&&this.components.length>0){
this.setBounds(this.components[0].getBounds());
for(var i=1,len=this.components.length;i<len;i++){
this.extendBounds(this.components[i].getBounds());
}
}
},addComponents:function(_103f){
if(!(_103f instanceof Array)){
_103f=[_103f];
}
for(var i=0,len=_103f.length;i<len;i++){
this.addComponent(_103f[i]);
}
},addComponent:function(_1042,index){
var added=false;
if(_1042){
if(this.componentTypes==null||(OpenLayers.Util.indexOf(this.componentTypes,_1042.CLASS_NAME)>-1)){
if(index!=null&&(index<this.components.length)){
var _1045=this.components.slice(0,index);
var _1046=this.components.slice(index,this.components.length);
_1045.push(_1042);
this.components=_1045.concat(_1046);
}else{
this.components.push(_1042);
}
_1042.parent=this;
this.clearBounds();
added=true;
}
}
return added;
},removeComponents:function(_1047){
if(!(_1047 instanceof Array)){
_1047=[_1047];
}
for(var i=_1047.length-1;i>=0;--i){
this.removeComponent(_1047[i]);
}
},removeComponent:function(_1049){
OpenLayers.Util.removeItem(this.components,_1049);
this.clearBounds();
},getLength:function(){
var _104a=0;
for(var i=0,len=this.components.length;i<len;i++){
_104a+=this.components[i].getLength();
}
return _104a;
},getArea:function(){
var area=0;
for(var i=0,len=this.components.length;i<len;i++){
area+=this.components[i].getArea();
}
return area;
},getGeodesicArea:function(_1050){
var area=0;
for(var i=0,len=this.components.length;i<len;i++){
area+=this.components[i].getGeodesicArea(_1050);
}
return area;
},getCentroid:function(){
return this.components.length&&this.components[0].getCentroid();
},getGeodesicLength:function(_1054){
var _1055=0;
for(var i=0,len=this.components.length;i<len;i++){
_1055+=this.components[i].getGeodesicLength(_1054);
}
return _1055;
},move:function(x,y){
for(var i=0,len=this.components.length;i<len;i++){
this.components[i].move(x,y);
}
},rotate:function(angle,_105d){
for(var i=0,len=this.components.length;i<len;++i){
this.components[i].rotate(angle,_105d);
}
},resize:function(scale,_1061,ratio){
for(var i=0;i<this.components.length;++i){
this.components[i].resize(scale,_1061,ratio);
}
return this;
},distanceTo:function(_1064,_1065){
var edge=!(_1065&&_1065.edge===false);
var _1067=edge&&_1065&&_1065.details;
var _1068,best;
var min=Number.POSITIVE_INFINITY;
for(var i=0,len=this.components.length;i<len;++i){
_1068=this.components[i].distanceTo(_1064,_1065);
distance=_1067?_1068.distance:_1068;
if(distance<min){
min=distance;
best=_1068;
if(min==0){
break;
}
}
}
return best;
},equals:function(_106d){
var _106e=true;
if(!_106d||!_106d.CLASS_NAME||(this.CLASS_NAME!=_106d.CLASS_NAME)){
_106e=false;
}else{
if(!(_106d.components instanceof Array)||(_106d.components.length!=this.components.length)){
_106e=false;
}else{
for(var i=0,len=this.components.length;i<len;++i){
if(!this.components[i].equals(_106d.components[i])){
_106e=false;
break;
}
}
}
}
return _106e;
},transform:function(_1071,dest){
if(_1071&&dest){
for(var i=0,len=this.components.length;i<len;i++){
var _1075=this.components[i];
_1075.transform(_1071,dest);
}
this.bounds=null;
}
return this;
},intersects:function(_1076){
var _1077=false;
for(var i=0,len=this.components.length;i<len;++i){
_1077=_1076.intersects(this.components[i]);
if(_1077){
break;
}
}
return _1077;
},getVertices:function(nodes){
var _107b=[];
for(var i=0,len=this.components.length;i<len;++i){
Array.prototype.push.apply(_107b,this.components[i].getVertices(nodes));
}
return _107b;
},CLASS_NAME:"OpenLayers.Geometry.Collection"});
OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(x,y){
OpenLayers.Geometry.prototype.initialize.apply(this,arguments);
this.x=parseFloat(x);
this.y=parseFloat(y);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Geometry.Point(this.x,this.y);
}
OpenLayers.Util.applyDefaults(obj,this);
return obj;
},calculateBounds:function(){
this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y);
},distanceTo:function(_1081,_1082){
var edge=!(_1082&&_1082.edge===false);
var _1084=edge&&_1082&&_1082.details;
var _1085,x0,y0,x1,y1,_108a;
if(_1081 instanceof OpenLayers.Geometry.Point){
x0=this.x;
y0=this.y;
x1=_1081.x;
y1=_1081.y;
_1085=Math.sqrt(Math.pow(x0-x1,2)+Math.pow(y0-y1,2));
_108a=!_1084?_1085:{x0:x0,y0:y0,x1:x1,y1:y1,distance:_1085};
}else{
_108a=_1081.distanceTo(this,_1082);
if(_1084){
_108a={x0:_108a.x1,y0:_108a.y1,x1:_108a.x0,y1:_108a.y0,distance:_108a.distance};
}
}
return _108a;
},equals:function(geom){
var _108c=false;
if(geom!=null){
_108c=((this.x==geom.x&&this.y==geom.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(geom.x)&&isNaN(geom.y)));
}
return _108c;
},toShortString:function(){
return (this.x+", "+this.y);
},move:function(x,y){
this.x=this.x+x;
this.y=this.y+y;
this.clearBounds();
},rotate:function(angle,_1090){
angle*=Math.PI/180;
var _1091=this.distanceTo(_1090);
var theta=angle+Math.atan2(this.y-_1090.y,this.x-_1090.x);
this.x=_1090.x+(_1091*Math.cos(theta));
this.y=_1090.y+(_1091*Math.sin(theta));
this.clearBounds();
},getCentroid:function(){
return new OpenLayers.Geometry.Point(this.x,this.y);
},resize:function(scale,_1094,ratio){
ratio=(ratio==undefined)?1:ratio;
this.x=_1094.x+(scale*ratio*(this.x-_1094.x));
this.y=_1094.y+(scale*(this.y-_1094.y));
this.clearBounds();
return this;
},intersects:function(_1096){
var _1097=false;
if(_1096.CLASS_NAME=="OpenLayers.Geometry.Point"){
_1097=this.equals(_1096);
}else{
_1097=_1096.intersects(this);
}
return _1097;
},transform:function(_1098,dest){
if((_1098&&dest)){
OpenLayers.Projection.transform(this,_1098,dest);
this.bounds=null;
}
return this;
},getVertices:function(nodes){
return [this];
},CLASS_NAME:"OpenLayers.Geometry.Point"});
OpenLayers.Geometry.Rectangle=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,width:null,height:null,initialize:function(x,y,width,_109e){
OpenLayers.Geometry.prototype.initialize.apply(this,arguments);
this.x=x;
this.y=y;
this.width=width;
this.height=_109e;
},calculateBounds:function(){
this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x+this.width,this.y+this.height);
},getLength:function(){
var _109f=(2*this.width)+(2*this.height);
return _109f;
},getArea:function(){
var area=this.width*this.height;
return area;
},CLASS_NAME:"OpenLayers.Geometry.Rectangle"});
OpenLayers.Geometry.Surface=OpenLayers.Class(OpenLayers.Geometry,{initialize:function(){
OpenLayers.Geometry.prototype.initialize.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Geometry.Surface"});
OpenLayers.Layer.KaMapCache=OpenLayers.Class(OpenLayers.Layer.KaMap,{IMAGE_EXTENSIONS:{"jpeg":"jpg","gif":"gif","png":"png","png8":"png","png24":"png","dithered":"png"},DEFAULT_FORMAT:"jpeg",initialize:function(name,url,_10a3,_10a4){
OpenLayers.Layer.KaMap.prototype.initialize.apply(this,arguments);
this.extension=this.IMAGE_EXTENSIONS[this.params.i.toLowerCase()||DEFAULT_FORMAT];
},getURL:function(_10a5){
_10a5=this.adjustBounds(_10a5);
var _10a6=this.map.getResolution();
var scale=Math.round((this.map.getScale()*10000))/10000;
var pX=Math.round(_10a5.left/_10a6);
var pY=-Math.round(_10a5.top/_10a6);
var metaX=Math.floor(pX/this.tileSize.w/this.params.metaTileSize.w)*this.tileSize.w*this.params.metaTileSize.w;
var metaY=Math.floor(pY/this.tileSize.h/this.params.metaTileSize.h)*this.tileSize.h*this.params.metaTileSize.h;
var url=this.url;
if(url instanceof Array){
url=this.selectUrl(paramsString,url);
}
var _10ad=[url,"/",this.params.map,"/",scale,"/",this.params.g.replace(/\s/g,"_"),"/def/t",metaY,"/l",metaX,"/t",pY,"l",pX,".",this.extension];
return _10ad.join("");
},CLASS_NAME:"OpenLayers.Layer.KaMapCache"});
OpenLayers.Layer.MapServer.Untiled=OpenLayers.Class(OpenLayers.Layer.MapServer,{singleTile:true,initialize:function(name,url,_10b0,_10b1){
OpenLayers.Layer.MapServer.prototype.initialize.apply(this,arguments);
var msg="The OpenLayers.Layer.MapServer.Untiled class is deprecated and "+"will be removed in 3.0. Instead, you should use the "+"normal OpenLayers.Layer.MapServer class, passing it the option "+"'singleTile' as true.";
OpenLayers.Console.warn(msg);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.MapServer.Untiled(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.MapServer.prototype.clone.apply(this,[obj]);
return obj;
},CLASS_NAME:"OpenLayers.Layer.MapServer.Untiled"});
OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{EVENT_TYPES:["beforefeatureadded","beforefeaturesadded","featureadded","featuresadded","beforefeatureremoved","featureremoved","featuresremoved","beforefeatureselected","featureselected","featureunselected","beforefeaturemodified","featuremodified","afterfeaturemodified","vertexmodified","sketchstarted","sketchmodified","sketchcomplete","refresh"],isBaseLayer:false,isFixed:false,isVector:true,features:null,selectedFeatures:null,unrenderedFeatures:null,reportError:true,style:null,styleMap:null,strategies:null,protocol:null,renderers:["SVG","VML","Canvas"],renderer:null,rendererOptions:null,geometryType:null,drawn:false,initialize:function(name,_10b5){
this.EVENT_TYPES=OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);
OpenLayers.Layer.prototype.initialize.apply(this,arguments);
if(!this.renderer||!this.renderer.supported()){
this.assignRenderer();
}
if(!this.renderer||!this.renderer.supported()){
this.renderer=null;
this.displayError();
}
if(!this.styleMap){
this.styleMap=new OpenLayers.StyleMap();
}
this.features=[];
this.selectedFeatures=[];
this.unrenderedFeatures={};
if(this.strategies){
for(var i=0,len=this.strategies.length;i<len;i++){
this.strategies[i].setLayer(this);
}
}
},destroy:function(){
if(this.strategies){
var _10b8,i,len;
for(i=0,len=this.strategies.length;i<len;i++){
_10b8=this.strategies[i];
if(_10b8.autoDestroy){
_10b8.destroy();
}
}
this.strategies=null;
}
if(this.protocol){
if(this.protocol.autoDestroy){
this.protocol.destroy();
}
this.protocol=null;
}
this.destroyFeatures();
this.features=null;
this.selectedFeatures=null;
this.unrenderedFeatures=null;
if(this.renderer){
this.renderer.destroy();
}
this.renderer=null;
this.geometryType=null;
this.drawn=null;
OpenLayers.Layer.prototype.destroy.apply(this,arguments);
},refresh:function(obj){
if(this.calculateInRange()&&this.visibility){
this.events.triggerEvent("refresh",obj);
}
},assignRenderer:function(){
for(var i=0,len=this.renderers.length;i<len;i++){
var _10be=OpenLayers.Renderer[this.renderers[i]];
if(_10be&&_10be.prototype.supported()){
this.renderer=new _10be(this.div,this.rendererOptions);
break;
}
}
},displayError:function(){
if(this.reportError){
OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported",{"renderers":this.renderers.join("\n")}));
}
},setMap:function(map){
OpenLayers.Layer.prototype.setMap.apply(this,arguments);
if(!this.renderer){
this.map.removeLayer(this);
}else{
this.renderer.map=this.map;
this.renderer.setSize(this.map.getSize());
}
},afterAdd:function(){
if(this.strategies){
var _10c0,i,len;
for(i=0,len=this.strategies.length;i<len;i++){
_10c0=this.strategies[i];
if(_10c0.autoActivate){
_10c0.activate();
}
}
}
},removeMap:function(map){
if(this.strategies){
var _10c4,i,len;
for(i=0,len=this.strategies.length;i<len;i++){
_10c4=this.strategies[i];
if(_10c4.autoActivate){
_10c4.deactivate();
}
}
}
},onMapResize:function(){
OpenLayers.Layer.prototype.onMapResize.apply(this,arguments);
this.renderer.setSize(this.map.getSize());
},moveTo:function(_10c7,_10c8,_10c9){
OpenLayers.Layer.prototype.moveTo.apply(this,arguments);
var _10ca=true;
if(!_10c9){
this.renderer.root.style.visibility="hidden";
this.div.style.left=-parseInt(this.map.layerContainerDiv.style.left)+"px";
this.div.style.top=-parseInt(this.map.layerContainerDiv.style.top)+"px";
var _10cb=this.map.getExtent();
_10ca=this.renderer.setExtent(_10cb,_10c8);
this.renderer.root.style.visibility="visible";
if(navigator.userAgent.toLowerCase().indexOf("gecko")!=-1){
this.div.scrollLeft=this.div.scrollLeft;
}
if(!_10c8&&_10ca){
for(var i in this.unrenderedFeatures){
var _10cd=this.unrenderedFeatures[i];
this.drawFeature(_10cd);
}
}
}
if(!this.drawn||_10c8||!_10ca){
this.drawn=true;
var _10cd;
for(var i=0,len=this.features.length;i<len;i++){
this.renderer.locked=(i!==(len-1));
_10cd=this.features[i];
this.drawFeature(_10cd);
}
}
},display:function(_10cf){
OpenLayers.Layer.prototype.display.apply(this,arguments);
var _10d0=this.div.style.display;
if(_10d0!=this.renderer.root.style.display){
this.renderer.root.style.display=_10d0;
}
},addFeatures:function(_10d1,_10d2){
if(!(_10d1 instanceof Array)){
_10d1=[_10d1];
}
var _10d3=!_10d2||!_10d2.silent;
if(_10d3){
var event={features:_10d1};
var ret=this.events.triggerEvent("beforefeaturesadded",event);
if(ret===false){
return;
}
_10d1=event.features;
}
for(var i=0,len=_10d1.length;i<len;i++){
if(i!=(_10d1.length-1)){
this.renderer.locked=true;
}else{
this.renderer.locked=false;
}
var _10d8=_10d1[i];
if(this.geometryType&&!(_10d8.geometry instanceof this.geometryType)){
var _10d9=OpenLayers.i18n("componentShouldBe",{"geomType":this.geometryType.prototype.CLASS_NAME});
throw _10d9;
}
this.features.push(_10d8);
_10d8.layer=this;
if(!_10d8.style&&this.style){
_10d8.style=OpenLayers.Util.extend({},this.style);
}
if(_10d3){
if(this.events.triggerEvent("beforefeatureadded",{feature:_10d8})===false){
continue;
}
this.preFeatureInsert(_10d8);
}
this.drawFeature(_10d8);
if(_10d3){
this.events.triggerEvent("featureadded",{feature:_10d8});
this.onFeatureInsert(_10d8);
}
}
if(_10d3){
this.events.triggerEvent("featuresadded",{features:_10d1});
}
},removeFeatures:function(_10da,_10db){
if(!_10da||_10da.length===0){
return;
}
if(!(_10da instanceof Array)){
_10da=[_10da];
}
if(_10da===this.features){
_10da=_10da.slice();
}
var _10dc=!_10db||!_10db.silent;
for(var i=_10da.length-1;i>=0;i--){
if(i!=0&&_10da[i-1].geometry){
this.renderer.locked=true;
}else{
this.renderer.locked=false;
}
var _10de=_10da[i];
delete this.unrenderedFeatures[_10de.id];
if(_10dc){
this.events.triggerEvent("beforefeatureremoved",{feature:_10de});
}
this.features=OpenLayers.Util.removeItem(this.features,_10de);
_10de.layer=null;
if(_10de.geometry){
this.renderer.eraseFeatures(_10de);
}
if(OpenLayers.Util.indexOf(this.selectedFeatures,_10de)!=-1){
OpenLayers.Util.removeItem(this.selectedFeatures,_10de);
}
if(_10dc){
this.events.triggerEvent("featureremoved",{feature:_10de});
}
}
if(_10dc){
this.events.triggerEvent("featuresremoved",{features:_10da});
}
},destroyFeatures:function(_10df,_10e0){
var all=(_10df==undefined);
if(all){
_10df=this.features;
}
if(_10df){
this.removeFeatures(_10df,_10e0);
for(var i=_10df.length-1;i>=0;i--){
_10df[i].destroy();
}
}
},drawFeature:function(_10e3,style){
if(!this.drawn){
return;
}
if(typeof style!="object"){
if(!style&&_10e3.state===OpenLayers.State.DELETE){
style="delete";
}
var _10e5=style||_10e3.renderIntent;
style=_10e3.style||this.style;
if(!style){
style=this.styleMap.createSymbolizer(_10e3,_10e5);
}
}
if(!this.renderer.drawFeature(_10e3,style)){
this.unrenderedFeatures[_10e3.id]=_10e3;
}else{
delete this.unrenderedFeatures[_10e3.id];
}
},eraseFeatures:function(_10e6){
this.renderer.eraseFeatures(_10e6);
},getFeatureFromEvent:function(evt){
if(!this.renderer){
OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));
return null;
}
var _10e8=this.renderer.getFeatureIdFromEvent(evt);
return this.getFeatureById(_10e8);
},getFeatureById:function(_10e9){
var _10ea=null;
for(var i=0,len=this.features.length;i<len;++i){
if(this.features[i].id==_10e9){
_10ea=this.features[i];
break;
}
}
return _10ea;
},onFeatureInsert:function(_10ed){
},preFeatureInsert:function(_10ee){
},getDataExtent:function(){
var _10ef=null;
if(this.features&&(this.features.length>0)){
_10ef=new OpenLayers.Bounds();
for(var i=0,len=this.features.length;i<len;i++){
_10ef.extend(this.features[i].geometry.getBounds());
}
}
return _10ef;
},CLASS_NAME:"OpenLayers.Layer.Vector"});
OpenLayers.Layer.WMS.Untiled=OpenLayers.Class(OpenLayers.Layer.WMS,{singleTile:true,initialize:function(name,url,_10f4,_10f5){
OpenLayers.Layer.WMS.prototype.initialize.apply(this,arguments);
var msg="The OpenLayers.Layer.WMS.Untiled class is deprecated and "+"will be removed in 3.0. Instead, you should use the "+"normal OpenLayers.Layer.WMS class, passing it the option "+"'singleTile' as true.";
OpenLayers.Console.warn(msg);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.WMS.Untiled(this.name,this.url,this.params,this.options);
}
obj=OpenLayers.Layer.WMS.prototype.clone.apply(this,[obj]);
return obj;
},CLASS_NAME:"OpenLayers.Layer.WMS.Untiled"});
OpenLayers.Control.GetFeature=OpenLayers.Class(OpenLayers.Control,{protocol:null,multipleKey:null,toggleKey:null,modifiers:null,multiple:false,click:true,clickout:true,toggle:false,clickTolerance:5,hover:false,box:false,maxFeatures:10,features:null,hoverFeature:null,handlerOptions:null,handlers:null,hoverResponse:null,EVENT_TYPES:["featureselected","featureunselected","clickout","beforefeatureselected","hoverfeature","outfeature"],initialize:function(_10f8){
this.EVENT_TYPES=OpenLayers.Control.GetFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
_10f8.handlerOptions=_10f8.handlerOptions||{};
OpenLayers.Control.prototype.initialize.apply(this,[_10f8]);
this.features={};
this.handlers={};
if(this.click){
this.handlers.click=new OpenLayers.Handler.Click(this,{click:this.selectSingle},this.handlerOptions.click||{});
}
if(this.box){
this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},OpenLayers.Util.extend(this.handlerOptions.box,{boxDivClassName:"olHandlerBoxSelectFeature"}));
}
if(this.hover){
this.handlers.hover=new OpenLayers.Handler.Hover(this,{"move":this.cancelHover,"pause":this.selectHover},OpenLayers.Util.extend(this.handlerOptions.hover,{"delay":250}));
}
},activate:function(){
if(!this.active){
for(var i in this.handlers){
this.handlers[i].activate();
}
}
return OpenLayers.Control.prototype.activate.apply(this,arguments);
},deactivate:function(){
if(this.active){
for(var i in this.handlers){
this.handlers[i].deactivate();
}
}
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);
},unselectAll:function(_10fb){
var _10fc;
for(var i=this.features.length-1;i>=0;--i){
_10fc=this.features[i];
if(!_10fb||_10fb.except!=_10fc){
this.unselect(_10fc);
}
}
},selectSingle:function(evt){
OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait");
var _10ff=this.pixelToBounds(evt.xy);
this.setModifiers(evt);
this.request(_10ff,{single:true});
},selectBox:function(_1100){
if(_1100 instanceof OpenLayers.Bounds){
var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_1100.left,_1100.bottom));
var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_1100.right,_1100.top));
var _1103=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);
this.setModifiers(this.handlers.box.dragHandler.evt);
this.request(_1103);
}
},selectHover:function(evt){
var _1105=this.pixelToBounds(evt.xy);
this.request(_1105,{single:true,hover:true});
},cancelHover:function(){
if(this.hoverResponse){
this.protocol.abort(this.hoverResponse);
this.hoverResponse=null;
}
},request:function(_1106,_1107){
_1107=_1107||{};
var _1108=new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,value:_1106});
var _1109=this.protocol.read({maxFeatures:_1107.single==true?this.maxFeatures:undefined,filter:_1108,callback:function(_110a){
if(_110a.code==1){
if(_110a.features.length){
if(_1107.single==true){
this.selectBestFeature(_110a.features,_1106.getCenterLonLat(),_1107);
}else{
this.select(_110a.features);
}
}else{
if(_1107.hover){
this.hoverSelect();
}else{
this.events.triggerEvent("clickout");
if(this.clickout){
this.unselectAll();
}
}
}
}
OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait");
},scope:this});
if(_1107.hover==true){
this.hoverResponse=_1109;
}
},selectBestFeature:function(_110b,_110c,_110d){
_110d=_110d||{};
if(_110b.length){
var point=new OpenLayers.Geometry.Point(_110c.lon,_110c.lat);
var _110f,_1110,dist;
var _1112=Number.MAX_VALUE;
for(var i=0;i<_110b.length;++i){
_110f=_110b[i];
if(_110f.geometry){
dist=point.distanceTo(_110f.geometry,{edge:false});
if(dist<_1112){
_1112=dist;
_1110=_110f;
if(_1112==0){
break;
}
}
}
}
if(_110d.hover==true){
this.hoverSelect(_1110);
}else{
this.select(_1110||_110b);
}
}
},setModifiers:function(evt){
this.modifiers={multiple:this.multiple||(this.multipleKey&&evt[this.multipleKey]),toggle:this.toggle||(this.toggleKey&&evt[this.toggleKey])};
},select:function(_1115){
if(!this.modifiers.multiple&&!this.modifiers.toggle){
this.unselectAll();
}
if(!(_1115 instanceof Array)){
_1115=[_1115];
}
var _1116;
for(var i=0,len=_1115.length;i<len;++i){
_1116=_1115[i];
if(this.features[_1116.fid||_1116.id]){
if(this.modifiers.toggle){
this.unselect(this.features[_1116.fid||_1116.id]);
}
}else{
cont=this.events.triggerEvent("beforefeatureselected",{feature:_1116});
if(cont!==false){
this.features[_1116.fid||_1116.id]=_1116;
this.events.triggerEvent("featureselected",{feature:_1116});
}
}
}
},hoverSelect:function(_1119){
var fid=_1119?_1119.fid||_1119.id:null;
var hfid=this.hoverFeature?this.hoverFeature.fid||this.hoverFeature.id:null;
if(hfid&&hfid!=fid){
this.events.triggerEvent("outfeature",{feature:this.hoverFeature});
this.hoverFeature=null;
}
if(fid&&fid!=hfid){
this.events.triggerEvent("hoverfeature",{feature:_1119});
this.hoverFeature=_1119;
}
},unselect:function(_111c){
delete this.features[_111c.fid||_111c.id];
this.events.triggerEvent("featureunselected",{feature:_111c});
},unselectAll:function(){
for(var fid in this.features){
this.unselect(this.features[fid]);
}
},setMap:function(map){
for(var i in this.handlers){
this.handlers[i].setMap(map);
}
OpenLayers.Control.prototype.setMap.apply(this,arguments);
},pixelToBounds:function(pixel){
var llPx=pixel.add(-this.clickTolerance/2,this.clickTolerance/2);
var urPx=pixel.add(this.clickTolerance/2,-this.clickTolerance/2);
var ll=this.map.getLonLatFromPixel(llPx);
var ur=this.map.getLonLatFromPixel(urPx);
return new OpenLayers.Bounds(ll.lon,ll.lat,ur.lon,ur.lat);
},CLASS_NAME:"OpenLayers.Control.GetFeature"});
OpenLayers.Control.Snapping=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforesnap","snap","unsnap"],DEFAULTS:{tolerance:10,node:true,edge:true,vertex:true},greedy:true,precedence:["node","vertex","edge"],resolution:null,geoToleranceCache:null,layer:null,feature:null,point:null,initialize:function(_1125){
Array.prototype.push.apply(this.EVENT_TYPES,OpenLayers.Control.prototype.EVENT_TYPES);
OpenLayers.Control.prototype.initialize.apply(this,[_1125]);
this.options=_1125||{};
if(this.options.layer){
this.setLayer(this.options.layer);
}
var _1126=OpenLayers.Util.extend({},this.options.defaults);
this.defaults=OpenLayers.Util.applyDefaults(_1126,this.DEFAULTS);
this.setTargets(this.options.targets);
if(this.targets.length===0&&this.layer){
this.addTargetLayer(this.layer);
}
this.geoToleranceCache={};
},setLayer:function(layer){
if(this.active){
this.deactivate();
this.layer=layer;
this.activate();
}else{
this.layer=layer;
}
},setTargets:function(_1128){
this.targets=[];
if(_1128&&_1128.length){
var _1129;
for(var i=0,len=_1128.length;i<len;++i){
_1129=_1128[i];
if(_1129 instanceof OpenLayers.Layer.Vector){
this.addTargetLayer(_1129);
}else{
this.addTarget(_1129);
}
}
}
},addTargetLayer:function(layer){
this.addTarget({layer:layer});
},addTarget:function(_112d){
_112d=OpenLayers.Util.applyDefaults(_112d,this.defaults);
_112d.nodeTolerance=_112d.nodeTolerance||_112d.tolerance;
_112d.vertexTolerance=_112d.vertexTolerance||_112d.tolerance;
_112d.edgeTolerance=_112d.edgeTolerance||_112d.tolerance;
this.targets.push(_112d);
},removeTargetLayer:function(layer){
var _112f;
for(var i=this.targets.length-1;i>=0;--i){
_112f=this.targets[i];
if(_112f.layer===layer){
this.removeTarget(_112f);
}
}
},removeTarget:function(_1131){
return OpenLayers.Util.removeItem(this.targets,_1131);
},activate:function(){
var _1132=OpenLayers.Control.prototype.activate.call(this);
if(_1132){
if(this.layer&&this.layer.events){
this.layer.events.on({sketchstarted:this.onSketchModified,sketchmodified:this.onSketchModified,vertexmodified:this.onVertexModified,scope:this});
}
}
return _1132;
},deactivate:function(){
var _1133=OpenLayers.Control.prototype.deactivate.call(this);
if(_1133){
if(this.layer&&this.layer.events){
this.layer.events.un({sketchstarted:this.onSketchModified,sketchmodified:this.onSketchModified,vertexmodified:this.onVertexModified,scope:this});
}
}
this.feature=null;
this.point=null;
return _1133;
},onSketchModified:function(event){
this.feature=event.feature;
this.considerSnapping(event.vertex,event.vertex);
},onVertexModified:function(event){
this.feature=event.feature;
var loc=this.layer.map.getLonLatFromViewPortPx(event.pixel);
this.considerSnapping(event.vertex,new OpenLayers.Geometry.Point(loc.lon,loc.lat));
},considerSnapping:function(point,loc){
var best={rank:Number.POSITIVE_INFINITY,dist:Number.POSITIVE_INFINITY,x:null,y:null};
var _113a=false;
var _113b,_113c;
for(var i=0,len=this.targets.length;i<len;++i){
_113c=this.targets[i];
_113b=this.testTarget(_113c,loc);
if(_113b){
if(this.greedy){
best=_113b;
best.target=_113c;
_113a=true;
break;
}else{
if((_113b.rank<best.rank)||(_113b.rank===best.rank&&_113b.dist<best.dist)){
best=_113b;
best.target=_113c;
_113a=true;
}
}
}
}
if(_113a){
var _113f=this.events.triggerEvent("beforesnap",{point:point,x:best.x,y:best.y,distance:best.dist,layer:best.target.layer,snapType:this.precedence[best.rank]});
if(_113f!==false){
point.x=best.x;
point.y=best.y;
this.point=point;
this.events.triggerEvent("snap",{point:point,snapType:this.precedence[best.rank],layer:best.target.layer,distance:best.dist});
}else{
_113a=false;
}
}
if(this.point&&!_113a){
point.x=loc.x;
point.y=loc.y;
this.point=null;
this.events.triggerEvent("unsnap",{point:point});
}
},testTarget:function(_1140,loc){
var _1142={node:this.getGeoTolerance(_1140.nodeTolerance),vertex:this.getGeoTolerance(_1140.vertexTolerance),edge:this.getGeoTolerance(_1140.edgeTolerance)};
var _1143=Math.max(_1142.node,_1142.vertex,_1142.edge);
var _1144={rank:Number.POSITIVE_INFINITY,dist:Number.POSITIVE_INFINITY};
var _1145=false;
var _1146=_1140.layer.features;
var _1147,type,_1149,_114a,_114b,dist,found;
var _114e=this.precedence.length;
var ll=new OpenLayers.LonLat(loc.x,loc.y);
for(var i=0,len=_1146.length;i<len;++i){
_1147=_1146[i];
if(_1147!==this.feature&&!_1147._sketch&&_1147.state!==OpenLayers.State.DELETE&&(!_1140.filter||_1140.filter.evaluate(_1147.attributes))){
if(_1147.atPoint(ll,_1143,_1143)){
for(var j=0,stop=Math.min(_1144.rank+1,_114e);j<stop;++j){
type=this.precedence[j];
if(_1140[type]){
if(type==="edge"){
_114b=_1147.geometry.distanceTo(loc,{details:true});
dist=_114b.distance;
if(dist<=_1142[type]&&dist<_1144.dist){
_1144={rank:j,dist:dist,x:_114b.x0,y:_114b.y0};
_1145=true;
break;
}
}else{
_1149=_1147.geometry.getVertices(type==="node");
found=false;
for(var k=0,klen=_1149.length;k<klen;++k){
_114a=_1149[k];
dist=_114a.distanceTo(loc);
if(dist<=_1142[type]&&(j<_1144.rank||(j===_1144.rank&&dist<_1144.dist))){
_1144={rank:j,dist:dist,x:_114a.x,y:_114a.y};
_1145=true;
found=true;
}
}
if(found){
break;
}
}
}
}
}
}
}
return _1145?_1144:null;
},getGeoTolerance:function(_1156){
var _1157=this.layer.map.getResolution();
if(_1157!==this.resolution){
this.resolution=_1157;
this.geoToleranceCache={};
}
var _1158=this.geoToleranceCache[_1156];
if(_1158===undefined){
_1158=_1156*_1157;
this.geoToleranceCache[_1156]=_1158;
}
return _1158;
},destroy:function(){
if(this.active){
this.deactivate();
}
delete this.layer;
delete this.targets;
OpenLayers.Control.prototype.destroy.call(this);
},CLASS_NAME:"OpenLayers.Control.Snapping"});
OpenLayers.Format.Filter=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.0.0",version:null,parser:null,initialize:function(_1159){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1159]);
},write:function(_115a,_115b){
var _115c=(_115b&&_115b.version)||this.version||this.defaultVersion;
if(!this.parser||this.parser.VERSION!=_115c){
var _115d=OpenLayers.Format.Filter["v"+_115c.replace(/\./g,"_")];
if(!_115d){
throw "Can't find a Filter parser for version "+_115c;
}
this.parser=new _115d(this.options);
}
return this.parser.write(_115a);
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var _115f=this.version;
if(!_115f){
_115f=this.defaultVersion;
}
if(!this.parser||this.parser.VERSION!=_115f){
var _1160=OpenLayers.Format.Filter["v"+_115f.replace(/\./g,"_")];
if(!_1160){
throw "Can't find a Filter parser for version "+_115f;
}
this.parser=new _1160(this.options);
}
var _1161=this.parser.read(data);
return _1161;
},CLASS_NAME:"OpenLayers.Format.Filter"});
OpenLayers.Format.SLD=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.0.0",version:null,namedLayersAsArray:false,parser:null,initialize:function(_1162){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1162]);
},write:function(sld,_1164){
var _1165=(_1164&&_1164.version)||this.version||this.defaultVersion;
if(!this.parser||this.parser.VERSION!=_1165){
var _1166=OpenLayers.Format.SLD["v"+_1165.replace(/\./g,"_")];
if(!_1166){
throw "Can't find a SLD parser for version "+_1165;
}
this.parser=new _1166(this.options);
}
var root=this.parser.write(sld);
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},read:function(data,_1169){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var root=data.documentElement;
var _116b=this.version;
if(!_116b){
_116b=root.getAttribute("version");
if(!_116b){
_116b=this.defaultVersion;
}
}
if(!this.parser||this.parser.VERSION!=_116b){
var _116c=OpenLayers.Format.SLD["v"+_116b.replace(/\./g,"_")];
if(!_116c){
throw "Can't find a SLD parser for version "+_116b;
}
this.parser=new _116c(this.options);
}
var sld=this.parser.read(data,_1169);
return sld;
},CLASS_NAME:"OpenLayers.Format.SLD"});
OpenLayers.Format.Text=OpenLayers.Class(OpenLayers.Format,{defaultStyle:null,extractStyles:true,initialize:function(_116e){
_116e=_116e||{};
if(_116e.extractStyles!==false){
_116e.defaultStyle={"externalGraphic":OpenLayers.Util.getImagesLocation()+"marker.png","graphicWidth":21,"graphicHeight":25,"graphicXOffset":-10.5,"graphicYOffset":-12.5};
}
OpenLayers.Format.prototype.initialize.apply(this,[_116e]);
},read:function(text){
var lines=text.split("\n");
var _1171;
var _1172=[];
for(var lcv=0;lcv<(lines.length-1);lcv++){
var _1174=lines[lcv].replace(/^\s*/,"").replace(/\s*$/,"");
if(_1174.charAt(0)!="#"){
if(!_1171){
_1171=_1174.split("\t");
}else{
var vals=_1174.split("\t");
var _1176=new OpenLayers.Geometry.Point(0,0);
var _1177={};
var style=this.defaultStyle?OpenLayers.Util.applyDefaults({},this.defaultStyle):null;
var icon,_117a,_117b,_117c;
var set=false;
for(var _117e=0;_117e<vals.length;_117e++){
if(vals[_117e]){
if(_1171[_117e]=="point"){
var _117f=vals[_117e].split(",");
_1176.y=parseFloat(_117f[0]);
_1176.x=parseFloat(_117f[1]);
set=true;
}else{
if(_1171[_117e]=="lat"){
_1176.y=parseFloat(vals[_117e]);
set=true;
}else{
if(_1171[_117e]=="lon"){
_1176.x=parseFloat(vals[_117e]);
set=true;
}else{
if(_1171[_117e]=="title"){
_1177["title"]=vals[_117e];
}else{
if(_1171[_117e]=="image"||_1171[_117e]=="icon"&&style){
style["externalGraphic"]=vals[_117e];
}else{
if(_1171[_117e]=="iconSize"&&style){
var size=vals[_117e].split(",");
style["graphicWidth"]=parseFloat(size[0]);
style["graphicHeight"]=parseFloat(size[1]);
}else{
if(_1171[_117e]=="iconOffset"&&style){
var _1181=vals[_117e].split(",");
style["graphicXOffset"]=parseFloat(_1181[0]);
style["graphicYOffset"]=parseFloat(_1181[1]);
}else{
if(_1171[_117e]=="description"){
_1177["description"]=vals[_117e];
}else{
if(_1171[_117e]=="overflow"){
_1177["overflow"]=vals[_117e];
}else{
_1177[_1171[_117e]]=vals[_117e];
}
}
}
}
}
}
}
}
}
}
}
if(set){
if(this.internalProjection&&this.externalProjection){
_1176.transform(this.externalProjection,this.internalProjection);
}
var _1182=new OpenLayers.Feature.Vector(_1176,_1177,style);
_1172.push(_1182);
}
}
}
}
return _1172;
},CLASS_NAME:"OpenLayers.Format.Text"});
OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(_1183){
OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);
},addPoint:function(point,index){
this.addComponent(point,index);
},removePoint:function(point){
this.removeComponent(point);
},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"});
OpenLayers.Handler.Point=OpenLayers.Class(OpenLayers.Handler,{point:null,layer:null,multi:false,drawing:false,mouseDown:false,lastDown:null,lastUp:null,persist:false,layerOptions:null,initialize:function(_1187,_1188,_1189){
if(!(_1189&&_1189.layerOptions&&_1189.layerOptions.styleMap)){
this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style["default"],{});
}
OpenLayers.Handler.prototype.initialize.apply(this,arguments);
},activate:function(){
if(!OpenLayers.Handler.prototype.activate.apply(this,arguments)){
return false;
}
var _118a=OpenLayers.Util.extend({displayInLayerSwitcher:false,calculateInRange:function(){
return true;
}},this.layerOptions);
this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,_118a);
this.map.addLayer(this.layer);
return true;
},createFeature:function(pixel){
var _118c=this.map.getLonLatFromPixel(pixel);
this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_118c.lon,_118c.lat));
this.callback("create",[this.point.geometry,this.point]);
this.point.geometry.clearBounds();
this.layer.addFeatures([this.point],{silent:true});
},deactivate:function(){
if(!OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){
return false;
}
if(this.drawing){
this.cancel();
}
this.destroyFeature();
if(this.layer.map!=null){
this.layer.destroy(false);
}
this.layer=null;
return true;
},destroyFeature:function(){
if(this.layer){
this.layer.destroyFeatures();
}
this.point=null;
},finalize:function(_118d){
var key=_118d?"cancel":"done";
this.drawing=false;
this.mouseDown=false;
this.lastDown=null;
this.lastUp=null;
this.callback(key,[this.geometryClone()]);
if(_118d||!this.persist){
this.destroyFeature();
}
},cancel:function(){
this.finalize(true);
},click:function(evt){
OpenLayers.Event.stop(evt);
return false;
},dblclick:function(evt){
OpenLayers.Event.stop(evt);
return false;
},modifyFeature:function(pixel){
var _1192=this.map.getLonLatFromPixel(pixel);
this.point.geometry.x=_1192.lon;
this.point.geometry.y=_1192.lat;
this.callback("modify",[this.point.geometry,this.point]);
this.point.geometry.clearBounds();
this.drawFeature();
},drawFeature:function(){
this.layer.drawFeature(this.point,this.style);
},getGeometry:function(){
var _1193=this.point&&this.point.geometry;
if(_1193&&this.multi){
_1193=new OpenLayers.Geometry.MultiPoint([_1193]);
}
return _1193;
},geometryClone:function(){
var geom=this.getGeometry();
return geom&&geom.clone();
},mousedown:function(evt){
if(!this.checkModifiers(evt)){
return true;
}
if(this.lastDown&&this.lastDown.equals(evt.xy)){
return true;
}
this.drawing=true;
if(this.lastDown==null){
if(this.persist){
this.destroyFeature();
}
this.createFeature(evt.xy);
}else{
this.modifyFeature(evt.xy);
}
this.lastDown=evt.xy;
return false;
},mousemove:function(evt){
if(this.drawing){
this.modifyFeature(evt.xy);
}
return true;
},mouseup:function(evt){
if(this.drawing){
this.finalize();
return false;
}else{
return true;
}
},CLASS_NAME:"OpenLayers.Handler.Point"});
OpenLayers.Layer.GML=OpenLayers.Class(OpenLayers.Layer.Vector,{loaded:false,format:null,formatOptions:null,initialize:function(name,url,_119a){
var _119b=[];
_119b.push(name,_119a);
OpenLayers.Layer.Vector.prototype.initialize.apply(this,_119b);
this.url=url;
},setVisibility:function(_119c,_119d){
OpenLayers.Layer.Vector.prototype.setVisibility.apply(this,arguments);
if(this.visibility&&!this.loaded){
this.loadGML();
}
},moveTo:function(_119e,_119f,minor){
OpenLayers.Layer.Vector.prototype.moveTo.apply(this,arguments);
if(this.visibility&&!this.loaded){
this.loadGML();
}
},loadGML:function(){
if(!this.loaded){
this.events.triggerEvent("loadstart");
OpenLayers.Request.GET({url:this.url,success:this.requestSuccess,failure:this.requestFailure,scope:this});
this.loaded=true;
}
},setUrl:function(url){
this.url=url;
this.destroyFeatures();
this.loaded=false;
this.loadGML();
},requestSuccess:function(_11a2){
var doc=_11a2.responseXML;
if(!doc||!doc.documentElement){
doc=_11a2.responseText;
}
var _11a4={};
OpenLayers.Util.extend(_11a4,this.formatOptions);
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
_11a4.externalProjection=this.projection;
_11a4.internalProjection=this.map.getProjectionObject();
}
var gml=this.format?new this.format(_11a4):new OpenLayers.Format.GML(_11a4);
this.addFeatures(gml.read(doc));
this.events.triggerEvent("loadend");
},requestFailure:function(_11a6){
OpenLayers.Console.userError(OpenLayers.i18n("errorLoadingGML",{"url":this.url}));
this.events.triggerEvent("loadend");
},CLASS_NAME:"OpenLayers.Layer.GML"});
OpenLayers.Layer.PointTrack=OpenLayers.Class(OpenLayers.Layer.Vector,{dataFrom:null,initialize:function(name,_11a8){
OpenLayers.Layer.Vector.prototype.initialize.apply(this,arguments);
},addNodes:function(_11a9){
if(_11a9.length<2){
OpenLayers.Console.error("At least two point features have to be added to create"+"a line from");
return;
}
var lines=new Array(_11a9.length-1);
var _11ab,_11ac,_11ad;
for(var i=0,len=_11a9.length;i<len;i++){
_11ab=_11a9[i];
_11ad=_11ab.geometry;
if(!_11ad){
var _11b0=_11ab.lonlat;
_11ad=new OpenLayers.Geometry.Point(_11b0.lon,_11b0.lat);
}else{
if(_11ad.CLASS_NAME!="OpenLayers.Geometry.Point"){
OpenLayers.Console.error("Only features with point geometries are supported.");
return;
}
}
if(i>0){
var _11b1=(this.dataFrom!=null)?(_11a9[i+this.dataFrom].data||_11a9[i+this.dataFrom].attributes):null;
var line=new OpenLayers.Geometry.LineString([_11ac,_11ad]);
lines[i-1]=new OpenLayers.Feature.Vector(line,_11b1);
}
_11ac=_11ad;
}
this.addFeatures(lines);
},CLASS_NAME:"OpenLayers.Layer.PointTrack"});
OpenLayers.Layer.PointTrack.dataFrom={"SOURCE_NODE":-1,"TARGET_NODE":0};
OpenLayers.Layer.Vector.RootContainer=OpenLayers.Class(OpenLayers.Layer.Vector,{displayInLayerSwitcher:false,layers:null,initialize:function(name,_11b4){
OpenLayers.Layer.Vector.prototype.initialize.apply(this,arguments);
},display:function(){
},getFeatureFromEvent:function(evt){
var _11b6=this.layers;
var _11b7;
for(var i=0;i<_11b6.length;i++){
_11b7=_11b6[i].getFeatureFromEvent(evt);
if(_11b7){
return _11b7;
}
}
},setMap:function(map){
OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments);
this.collectRoots();
map.events.register("changelayer",this,this.handleChangeLayer);
},removeMap:function(map){
map.events.unregister("changelayer",this,this.handleChangeLayer);
this.resetRoots();
OpenLayers.Layer.Vector.prototype.removeMap.apply(this,arguments);
},collectRoots:function(){
var layer;
for(var i=0;i<this.map.layers.length;++i){
layer=this.map.layers[i];
if(OpenLayers.Util.indexOf(this.layers,layer)!=-1){
layer.renderer.moveRoot(this.renderer);
}
}
},resetRoots:function(){
var layer;
for(var i=0;i<this.layers.length;++i){
layer=this.layers[i];
if(this.renderer&&layer.renderer.getRenderLayerId()==this.id){
this.renderer.moveRoot(layer.renderer);
}
}
},handleChangeLayer:function(evt){
var layer=evt.layer;
if(evt.property=="order"&&OpenLayers.Util.indexOf(this.layers,layer)!=-1){
this.resetRoots();
this.collectRoots();
}
},CLASS_NAME:"OpenLayers.Layer.Vector.RootContainer"});
OpenLayers.Layer.WFS=OpenLayers.Class(OpenLayers.Layer.Vector,OpenLayers.Layer.Markers,{isBaseLayer:false,tile:null,ratio:2,DEFAULT_PARAMS:{service:"WFS",version:"1.0.0",request:"GetFeature"},featureClass:null,format:null,formatObject:null,formatOptions:null,vectorMode:true,encodeBBOX:false,extractAttributes:false,initialize:function(name,url,_11c3,_11c4){
if(_11c4==undefined){
_11c4={};
}
if(_11c4.featureClass||!OpenLayers.Layer.Vector||!OpenLayers.Feature.Vector){
this.vectorMode=false;
}
OpenLayers.Util.extend(_11c4,{"reportError":false});
var _11c5=[];
_11c5.push(name,_11c4);
OpenLayers.Layer.Vector.prototype.initialize.apply(this,_11c5);
if(!this.renderer||!this.vectorMode){
this.vectorMode=false;
if(!_11c4.featureClass){
_11c4.featureClass=OpenLayers.Feature.WFS;
}
OpenLayers.Layer.Markers.prototype.initialize.apply(this,_11c5);
}
if(this.params&&this.params.typename&&!this.options.typename){
this.options.typename=this.params.typename;
}
if(!this.options.geometry_column){
this.options.geometry_column="the_geom";
}
this.params=OpenLayers.Util.applyDefaults(_11c3,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
this.url=url;
},destroy:function(){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.destroy.apply(this,arguments);
}else{
OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);
}
if(this.tile){
this.tile.destroy();
}
this.tile=null;
this.ratio=null;
this.featureClass=null;
this.format=null;
if(this.formatObject&&this.formatObject.destroy){
this.formatObject.destroy();
}
this.formatObject=null;
this.formatOptions=null;
this.vectorMode=null;
this.encodeBBOX=null;
this.extractAttributes=null;
},setMap:function(map){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.setMap.apply(this,arguments);
var _11c7={"extractAttributes":this.extractAttributes};
OpenLayers.Util.extend(_11c7,this.formatOptions);
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
_11c7.externalProjection=this.projection;
_11c7.internalProjection=this.map.getProjectionObject();
}
this.formatObject=this.format?new this.format(_11c7):new OpenLayers.Format.GML(_11c7);
}else{
OpenLayers.Layer.Markers.prototype.setMap.apply(this,arguments);
}
},moveTo:function(_11c8,_11c9,_11ca){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.moveTo.apply(this,arguments);
}else{
OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);
}
if(_11ca){
return false;
}
if(_11c9){
if(this.vectorMode){
this.renderer.clear();
}
}
if(this.options.minZoomLevel){
OpenLayers.Console.warn(OpenLayers.i18n("minZoomLevelError"));
if(this.map.getZoom()<this.options.minZoomLevel){
return null;
}
}
if(_11c8==null){
_11c8=this.map.getExtent();
}
var _11cb=(this.tile==null);
var _11cc=(!_11cb&&!this.tile.bounds.containsBounds(_11c8));
if(_11c9||_11cb||(!_11ca&&_11cc)){
var _11cd=_11c8.getCenterLonLat();
var _11ce=_11c8.getWidth()*this.ratio;
var _11cf=_11c8.getHeight()*this.ratio;
var _11d0=new OpenLayers.Bounds(_11cd.lon-(_11ce/2),_11cd.lat-(_11cf/2),_11cd.lon+(_11ce/2),_11cd.lat+(_11cf/2));
var _11d1=this.map.getSize();
_11d1.w=_11d1.w*this.ratio;
_11d1.h=_11d1.h*this.ratio;
var ul=new OpenLayers.LonLat(_11d0.left,_11d0.top);
var pos=this.map.getLayerPxFromLonLat(ul);
var url=this.getFullRequestString();
var _11d5=null;
var _11d6=this.params.filter||this.params.FILTER;
if(_11d6){
_11d5={FILTER:_11d6};
}else{
_11d5={BBOX:this.encodeBBOX?_11d0.toBBOX():_11d0.toArray()};
}
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
var _11d7=_11d0.clone();
_11d7.transform(this.map.getProjectionObject(),this.projection);
if(!_11d6){
_11d5.BBOX=this.encodeBBOX?_11d7.toBBOX():_11d7.toArray();
}
}
url+="&"+OpenLayers.Util.getParameterString(_11d5);
if(!this.tile){
this.tile=new OpenLayers.Tile.WFS(this,pos,_11d0,url,_11d1);
this.addTileMonitoringHooks(this.tile);
this.tile.draw();
}else{
if(this.vectorMode){
this.destroyFeatures();
this.renderer.clear();
}else{
this.clearMarkers();
}
this.removeTileMonitoringHooks(this.tile);
this.tile.destroy();
this.tile=null;
this.tile=new OpenLayers.Tile.WFS(this,pos,_11d0,url,_11d1);
this.addTileMonitoringHooks(this.tile);
this.tile.draw();
}
}
},addTileMonitoringHooks:function(tile){
tile.onLoadStart=function(){
if(this==this.layer.tile){
this.layer.events.triggerEvent("loadstart");
}
};
tile.events.register("loadstart",tile,tile.onLoadStart);
tile.onLoadEnd=function(){
if(this==this.layer.tile){
this.layer.events.triggerEvent("tileloaded");
this.layer.events.triggerEvent("loadend");
}
};
tile.events.register("loadend",tile,tile.onLoadEnd);
tile.events.register("unload",tile,tile.onLoadEnd);
},removeTileMonitoringHooks:function(tile){
tile.unload();
tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:tile});
},onMapResize:function(){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.onMapResize.apply(this,arguments);
}else{
OpenLayers.Layer.Markers.prototype.onMapResize.apply(this,arguments);
}
},display:function(){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.display.apply(this,arguments);
}else{
OpenLayers.Layer.Markers.prototype.display.apply(this,arguments);
}
},mergeNewParams:function(_11da){
var _11db=OpenLayers.Util.upperCaseObject(_11da);
var _11dc=[_11db];
return OpenLayers.Layer.HTTPRequest.prototype.mergeNewParams.apply(this,_11dc);
},clone:function(obj){
if(obj==null){
obj=new OpenLayers.Layer.WFS(this.name,this.url,this.params,this.options);
}
if(this.vectorMode){
obj=OpenLayers.Layer.Vector.prototype.clone.apply(this,[obj]);
}else{
obj=OpenLayers.Layer.Markers.prototype.clone.apply(this,[obj]);
}
return obj;
},getFullRequestString:function(_11de,_11df){
var _11e0=this.projection.getCode()||this.map.getProjection();
this.params.SRS=(_11e0=="none")?null:_11e0;
return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments);
},commit:function(){
if(!this.writer){
var _11e1={};
if(this.map&&!this.projection.equals(this.map.getProjectionObject())){
_11e1.externalProjection=this.projection;
_11e1.internalProjection=this.map.getProjectionObject();
}
this.writer=new OpenLayers.Format.WFS(_11e1,this);
}
var data=this.writer.write(this.features);
OpenLayers.Request.POST({url:this.url,data:data,success:this.commitSuccess,failure:this.commitFailure,scope:this});
},commitSuccess:function(_11e3){
var _11e4=_11e3.responseText;
if(_11e4.indexOf("SUCCESS")!=-1){
this.commitReport(OpenLayers.i18n("commitSuccess",{"response":_11e4}));
for(var i=0;i<this.features.length;i++){
this.features[i].state=null;
}
}else{
if(_11e4.indexOf("FAILED")!=-1||_11e4.indexOf("Exception")!=-1){
this.commitReport(OpenLayers.i18n("commitFailed",{"response":_11e4}));
}
}
},commitFailure:function(_11e6){
},commitReport:function(_11e7,_11e8){
OpenLayers.Console.userError(_11e7);
},refresh:function(){
if(this.tile){
if(this.vectorMode){
this.renderer.clear();
this.features.length=0;
}else{
this.clearMarkers();
this.markers.length=0;
}
this.tile.draw();
}
},getDataExtent:function(){
var _11e9;
if(this.vectorMode){
_11e9=OpenLayers.Layer.Vector.prototype.getDataExtent.apply(this);
}else{
_11e9=OpenLayers.Layer.Markers.prototype.getDataExtent.apply(this);
}
return _11e9;
},setOpacity:function(_11ea){
if(this.vectorMode){
OpenLayers.Layer.Vector.prototype.setOpacity.apply(this,[_11ea]);
}else{
OpenLayers.Layer.Markers.prototype.setOpacity.apply(this,[_11ea]);
}
},CLASS_NAME:"OpenLayers.Layer.WFS"});
OpenLayers.Strategy.BBOX=OpenLayers.Class(OpenLayers.Strategy,{bounds:null,resolution:null,ratio:2,resFactor:null,response:null,initialize:function(_11eb){
OpenLayers.Strategy.prototype.initialize.apply(this,[_11eb]);
},activate:function(){
var _11ec=OpenLayers.Strategy.prototype.activate.call(this);
if(_11ec){
this.layer.events.on({"moveend":this.update,scope:this});
this.layer.events.on({"refresh":this.update,scope:this});
}
return _11ec;
},deactivate:function(){
var _11ed=OpenLayers.Strategy.prototype.deactivate.call(this);
if(_11ed){
this.layer.events.un({"moveend":this.update,scope:this});
this.layer.events.un({"refresh":this.update,scope:this});
}
return _11ed;
},update:function(_11ee){
var _11ef=this.getMapBounds();
if((_11ee&&_11ee.force)||this.invalidBounds(_11ef)){
this.calculateBounds(_11ef);
this.resolution=this.layer.map.getResolution();
this.triggerRead();
}
},getMapBounds:function(){
var _11f0=this.layer.map.getExtent();
if(!this.layer.projection.equals(this.layer.map.getProjectionObject())){
_11f0=_11f0.clone().transform(this.layer.map.getProjectionObject(),this.layer.projection);
}
return _11f0;
},invalidBounds:function(_11f1){
if(!_11f1){
_11f1=this.getMapBounds();
}
var _11f2=!this.bounds||!this.bounds.containsBounds(_11f1);
if(!_11f2&&this.resFactor){
var ratio=this.resolution/this.layer.map.getResolution();
_11f2=(ratio>=this.resFactor||ratio<=(1/this.resFactor));
}
return _11f2;
},calculateBounds:function(_11f4){
if(!_11f4){
_11f4=this.getMapBounds();
}
var _11f5=_11f4.getCenterLonLat();
var _11f6=_11f4.getWidth()*this.ratio;
var _11f7=_11f4.getHeight()*this.ratio;
this.bounds=new OpenLayers.Bounds(_11f5.lon-(_11f6/2),_11f5.lat-(_11f7/2),_11f5.lon+(_11f6/2),_11f5.lat+(_11f7/2));
},triggerRead:function(){
this.layer.protocol.abort(this.response);
this.layer.events.triggerEvent("loadstart");
this.response=this.layer.protocol.read({filter:this.createFilter(),callback:this.merge,scope:this});
},createFilter:function(){
var _11f8=new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,value:this.bounds,projection:this.layer.projection});
if(this.layer.filter){
_11f8=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND,filters:[this.layer.filter,_11f8]});
}
return _11f8;
},merge:function(resp){
this.layer.destroyFeatures();
var _11fa=resp.features;
if(_11fa&&_11fa.length>0){
var _11fb=this.layer.projection;
var local=this.layer.map.getProjectionObject();
if(!local.equals(_11fb)){
var geom;
for(var i=0,len=_11fa.length;i<len;++i){
geom=_11fa[i].geometry;
if(geom){
geom.transform(_11fb,local);
}
}
}
this.layer.addFeatures(_11fa);
}
this.layer.events.triggerEvent("loadend");
},CLASS_NAME:"OpenLayers.Strategy.BBOX"});
OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforefeaturehighlighted","featurehighlighted","featureunhighlighted"],multipleKey:null,toggleKey:null,multiple:false,clickout:true,toggle:false,hover:false,highlightOnly:false,box:false,onBeforeSelect:function(){
},onSelect:function(){
},onUnselect:function(){
},scope:null,geometryTypes:null,layer:null,layers:null,callbacks:null,selectStyle:null,renderIntent:"select",handlers:null,initialize:function(_1200,_1201){
this.EVENT_TYPES=OpenLayers.Control.SelectFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
OpenLayers.Control.prototype.initialize.apply(this,[_1201]);
if(this.scope===null){
this.scope=this;
}
if(_1200 instanceof Array){
this.layers=_1200;
this.layer=new OpenLayers.Layer.Vector.RootContainer(this.id+"_container",{layers:_1200});
}else{
this.layer=_1200;
}
var _1202={click:this.clickFeature,clickout:this.clickoutFeature};
if(this.hover){
_1202.over=this.overFeature;
_1202.out=this.outFeature;
}
this.callbacks=OpenLayers.Util.extend(_1202,this.callbacks);
this.handlers={feature:new OpenLayers.Handler.Feature(this,this.layer,this.callbacks,{geometryTypes:this.geometryTypes})};
if(this.box){
this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},{boxDivClassName:"olHandlerBoxSelectFeature"});
}
},destroy:function(){
OpenLayers.Control.prototype.destroy.apply(this,arguments);
if(this.layers){
this.layer.destroy();
}
},activate:function(){
if(!this.active){
if(this.layers){
this.map.addLayer(this.layer);
}
this.handlers.feature.activate();
if(this.box&&this.handlers.box){
this.handlers.box.activate();
}
}
return OpenLayers.Control.prototype.activate.apply(this,arguments);
},deactivate:function(){
if(this.active){
this.handlers.feature.deactivate();
if(this.handlers.box){
this.handlers.box.deactivate();
}
if(this.layers){
this.map.removeLayer(this.layer);
}
}
return OpenLayers.Control.prototype.deactivate.apply(this,arguments);
},unselectAll:function(_1203){
var _1204=this.layers||[this.layer];
var layer,_1206;
for(var l=0;l<_1204.length;++l){
layer=_1204[l];
for(var i=layer.selectedFeatures.length-1;i>=0;--i){
_1206=layer.selectedFeatures[i];
if(!_1203||_1203.except!=_1206){
this.unselect(_1206);
}
}
}
},clickFeature:function(_1209){
if(!this.hover){
var _120a=(OpenLayers.Util.indexOf(_1209.layer.selectedFeatures,_1209)>-1);
if(_120a){
if(this.toggleSelect()){
this.unselect(_1209);
}else{
if(!this.multipleSelect()){
this.unselectAll({except:_1209});
}
}
}else{
if(!this.multipleSelect()){
this.unselectAll({except:_1209});
}
this.select(_1209);
}
}
},multipleSelect:function(){
return this.multiple||(this.handlers.feature.evt&&this.handlers.feature.evt[this.multipleKey]);
},toggleSelect:function(){
return this.toggle||(this.handlers.feature.evt&&this.handlers.feature.evt[this.toggleKey]);
},clickoutFeature:function(_120b){
if(!this.hover&&this.clickout){
this.unselectAll();
}
},overFeature:function(_120c){
var layer=_120c.layer;
if(this.hover){
if(this.highlightOnly){
this.highlight(_120c);
}else{
if(OpenLayers.Util.indexOf(layer.selectedFeatures,_120c)==-1){
this.select(_120c);
}
}
}
},outFeature:function(_120e){
if(this.hover){
if(this.highlightOnly){
if(_120e._lastHighlighter==this.id){
if(_120e._prevHighlighter&&_120e._prevHighlighter!=this.id){
delete _120e._lastHighlighter;
var _120f=this.map.getControl(_120e._prevHighlighter);
if(_120f){
_120f.highlight(_120e);
}
}else{
this.unhighlight(_120e);
}
}
}else{
this.unselect(_120e);
}
}
},highlight:function(_1210){
var layer=_1210.layer;
var cont=this.events.triggerEvent("beforefeaturehighlighted",{feature:_1210});
if(cont!==false){
_1210._prevHighlighter=_1210._lastHighlighter;
_1210._lastHighlighter=this.id;
var style=this.selectStyle||this.renderIntent;
layer.drawFeature(_1210,style);
this.events.triggerEvent("featurehighlighted",{feature:_1210});
}
},unhighlight:function(_1214){
var layer=_1214.layer;
_1214._lastHighlighter=_1214._prevHighlighter;
delete _1214._prevHighlighter;
layer.drawFeature(_1214,_1214.style||_1214.layer.style||"default");
this.events.triggerEvent("featureunhighlighted",{feature:_1214});
},select:function(_1216){
var cont=this.onBeforeSelect.call(this.scope,_1216);
var layer=_1216.layer;
if(cont!==false){
cont=layer.events.triggerEvent("beforefeatureselected",{feature:_1216});
if(cont!==false){
layer.selectedFeatures.push(_1216);
this.highlight(_1216);
layer.events.triggerEvent("featureselected",{feature:_1216});
this.onSelect.call(this.scope,_1216);
}
}
},unselect:function(_1219){
var layer=_1219.layer;
this.unhighlight(_1219);
OpenLayers.Util.removeItem(layer.selectedFeatures,_1219);
layer.events.triggerEvent("featureunselected",{feature:_1219});
this.onUnselect.call(this.scope,_1219);
},selectBox:function(_121b){
if(_121b instanceof OpenLayers.Bounds){
var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_121b.left,_121b.bottom));
var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(_121b.right,_121b.top));
var _121e=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);
if(!this.multipleSelect()){
this.unselectAll();
}
var _121f=this.multiple;
this.multiple=true;
var _1220=this.layers||[this.layer];
var layer;
for(var l=0;l<_1220.length;++l){
layer=_1220[l];
for(var i=0,len=layer.features.length;i<len;++i){
var _1225=layer.features[i];
if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,_1225.geometry.CLASS_NAME)>-1){
if(_121e.toGeometry().intersects(_1225.geometry)){
if(OpenLayers.Util.indexOf(layer.selectedFeatures,_1225)==-1){
this.select(_1225);
}
}
}
}
}
this.multiple=_121f;
}
},setMap:function(map){
this.handlers.feature.setMap(map);
if(this.box){
this.handlers.box.setMap(map);
}
OpenLayers.Control.prototype.setMap.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Control.SelectFeature"});
OpenLayers.Format.Filter.v1=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ogc:"http://www.opengis.net/ogc",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"ogc",schemaLocation:null,initialize:function(_1227){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1227]);
},read:function(data){
var obj={};
this.readers.ogc["Filter"].apply(this,[data,obj]);
return obj.filter;
},readers:{"ogc":{"Filter":function(node,_122b){
var obj={fids:[],filters:[]};
this.readChildNodes(node,obj);
if(obj.fids.length>0){
_122b.filter=new OpenLayers.Filter.FeatureId({fids:obj.fids});
}else{
if(obj.filters.length>0){
_122b.filter=obj.filters[0];
}
}
},"FeatureId":function(node,obj){
var fid=node.getAttribute("fid");
if(fid){
obj.fids.push(fid);
}
},"And":function(node,obj){
var _1232=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND});
this.readChildNodes(node,_1232);
obj.filters.push(_1232);
},"Or":function(node,obj){
var _1235=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.OR});
this.readChildNodes(node,_1235);
obj.filters.push(_1235);
},"Not":function(node,obj){
var _1238=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.NOT});
this.readChildNodes(node,_1238);
obj.filters.push(_1238);
},"PropertyIsLessThan":function(node,obj){
var _123b=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN});
this.readChildNodes(node,_123b);
obj.filters.push(_123b);
},"PropertyIsGreaterThan":function(node,obj){
var _123e=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN});
this.readChildNodes(node,_123e);
obj.filters.push(_123e);
},"PropertyIsLessThanOrEqualTo":function(node,obj){
var _1241=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO});
this.readChildNodes(node,_1241);
obj.filters.push(_1241);
},"PropertyIsGreaterThanOrEqualTo":function(node,obj){
var _1244=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO});
this.readChildNodes(node,_1244);
obj.filters.push(_1244);
},"PropertyIsBetween":function(node,obj){
var _1247=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.BETWEEN});
this.readChildNodes(node,_1247);
obj.filters.push(_1247);
},"PropertyIsLike":function(node,obj){
var _124a=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LIKE});
this.readChildNodes(node,_124a);
var _124b=node.getAttribute("wildCard");
var _124c=node.getAttribute("singleChar");
var esc=node.getAttribute("escape");
_124a.value2regex(_124b,_124c,esc);
obj.filters.push(_124a);
},"Literal":function(node,obj){
obj.value=OpenLayers.String.numericIf(this.getChildValue(node));
},"PropertyName":function(node,_1251){
_1251.property=this.getChildValue(node);
},"LowerBoundary":function(node,_1253){
_1253.lowerBoundary=OpenLayers.String.numericIf(this.readOgcExpression(node));
},"UpperBoundary":function(node,_1255){
_1255.upperBoundary=OpenLayers.String.numericIf(this.readOgcExpression(node));
},"Intersects":function(node,obj){
this.readSpatial(node,obj,OpenLayers.Filter.Spatial.INTERSECTS);
},"Within":function(node,obj){
this.readSpatial(node,obj,OpenLayers.Filter.Spatial.WITHIN);
},"Contains":function(node,obj){
this.readSpatial(node,obj,OpenLayers.Filter.Spatial.CONTAINS);
},"DWithin":function(node,obj){
this.readSpatial(node,obj,OpenLayers.Filter.Spatial.DWITHIN);
},"Distance":function(node,obj){
obj.distance=parseInt(this.getChildValue(node));
obj.distanceUnits=node.getAttribute("units");
}}},readSpatial:function(node,obj,type){
var _1263=new OpenLayers.Filter.Spatial({type:type});
this.readChildNodes(node,_1263);
_1263.value=_1263.components[0];
delete _1263.components;
obj.filters.push(_1263);
},readOgcExpression:function(node){
var obj={};
this.readChildNodes(node,obj);
var value=obj.value;
if(!value){
value=this.getChildValue(node);
}
return value;
},write:function(_1267){
return this.writers.ogc["Filter"].apply(this,[_1267]);
},writers:{"ogc":{"Filter":function(_1268){
var node=this.createElementNSPlus("ogc:Filter");
var sub=_1268.CLASS_NAME.split(".").pop();
if(sub=="FeatureId"){
for(var i=0;i<_1268.fids.length;++i){
this.writeNode("FeatureId",_1268.fids[i],node);
}
}else{
this.writeNode(this.getFilterType(_1268),_1268,node);
}
return node;
},"FeatureId":function(fid){
return this.createElementNSPlus("ogc:FeatureId",{attributes:{fid:fid}});
},"And":function(_126d){
var node=this.createElementNSPlus("ogc:And");
var _126f;
for(var i=0;i<_126d.filters.length;++i){
_126f=_126d.filters[i];
this.writeNode(this.getFilterType(_126f),_126f,node);
}
return node;
},"Or":function(_1271){
var node=this.createElementNSPlus("ogc:Or");
var _1273;
for(var i=0;i<_1271.filters.length;++i){
_1273=_1271.filters[i];
this.writeNode(this.getFilterType(_1273),_1273,node);
}
return node;
},"Not":function(_1275){
var node=this.createElementNSPlus("ogc:Not");
var _1277=_1275.filters[0];
this.writeNode(this.getFilterType(_1277),_1277,node);
return node;
},"PropertyIsLessThan":function(_1278){
var node=this.createElementNSPlus("ogc:PropertyIsLessThan");
this.writeNode("PropertyName",_1278,node);
this.writeNode("Literal",_1278.value,node);
return node;
},"PropertyIsGreaterThan":function(_127a){
var node=this.createElementNSPlus("ogc:PropertyIsGreaterThan");
this.writeNode("PropertyName",_127a,node);
this.writeNode("Literal",_127a.value,node);
return node;
},"PropertyIsLessThanOrEqualTo":function(_127c){
var node=this.createElementNSPlus("ogc:PropertyIsLessThanOrEqualTo");
this.writeNode("PropertyName",_127c,node);
this.writeNode("Literal",_127c.value,node);
return node;
},"PropertyIsGreaterThanOrEqualTo":function(_127e){
var node=this.createElementNSPlus("ogc:PropertyIsGreaterThanOrEqualTo");
this.writeNode("PropertyName",_127e,node);
this.writeNode("Literal",_127e.value,node);
return node;
},"PropertyIsBetween":function(_1280){
var node=this.createElementNSPlus("ogc:PropertyIsBetween");
this.writeNode("PropertyName",_1280,node);
this.writeNode("LowerBoundary",_1280,node);
this.writeNode("UpperBoundary",_1280,node);
return node;
},"PropertyIsLike":function(_1282){
var node=this.createElementNSPlus("ogc:PropertyIsLike",{attributes:{wildCard:"*",singleChar:".",escape:"!"}});
this.writeNode("PropertyName",_1282,node);
this.writeNode("Literal",_1282.regex2value(),node);
return node;
},"PropertyName":function(_1284){
return this.createElementNSPlus("ogc:PropertyName",{value:_1284.property});
},"Literal":function(value){
return this.createElementNSPlus("ogc:Literal",{value:value});
},"LowerBoundary":function(_1286){
var node=this.createElementNSPlus("ogc:LowerBoundary");
this.writeNode("Literal",_1286.lowerBoundary,node);
return node;
},"UpperBoundary":function(_1288){
var node=this.createElementNSPlus("ogc:UpperBoundary");
this.writeNode("Literal",_1288.upperBoundary,node);
return node;
},"INTERSECTS":function(_128a){
return this.writeSpatial(_128a,"Intersects");
},"WITHIN":function(_128b){
return this.writeSpatial(_128b,"Within");
},"CONTAINS":function(_128c){
return this.writeSpatial(_128c,"Contains");
},"DWITHIN":function(_128d){
var node=this.writeSpatial(_128d,"DWithin");
this.writeNode("Distance",_128d,node);
return node;
},"Distance":function(_128f){
return this.createElementNSPlus("ogc:Distance",{attributes:{units:_128f.distanceUnits},value:_128f.distance});
}}},getFilterType:function(_1290){
var _1291=this.filterMap[_1290.type];
if(!_1291){
throw "Filter writing not supported for rule type: "+_1290.type;
}
return _1291;
},filterMap:{"&&":"And","||":"Or","!":"Not","==":"PropertyIsEqualTo","!=":"PropertyIsNotEqualTo","<":"PropertyIsLessThan",">":"PropertyIsGreaterThan","<=":"PropertyIsLessThanOrEqualTo",">=":"PropertyIsGreaterThanOrEqualTo","..":"PropertyIsBetween","~":"PropertyIsLike","BBOX":"BBOX","DWITHIN":"DWITHIN","WITHIN":"WITHIN","CONTAINS":"CONTAINS","INTERSECTS":"INTERSECTS"},CLASS_NAME:"OpenLayers.Format.Filter.v1"});
OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(_1292){
OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this,arguments);
},getLength:function(){
var _1293=0;
if(this.components&&(this.components.length>1)){
for(var i=1,len=this.components.length;i<len;i++){
_1293+=this.components[i-1].distanceTo(this.components[i]);
}
}
return _1293;
},getGeodesicLength:function(_1296){
var geom=this;
if(_1296){
var gg=new OpenLayers.Projection("EPSG:4326");
if(!gg.equals(_1296)){
geom=this.clone().transform(_1296,gg);
}
}
var _1299=0;
if(geom.components&&(geom.components.length>1)){
var p1,p2;
for(var i=1,len=geom.components.length;i<len;i++){
p1=geom.components[i-1];
p2=geom.components[i];
_1299+=OpenLayers.Util.distVincenty({lon:p1.x,lat:p1.y},{lon:p2.x,lat:p2.y});
}
}
return _1299*1000;
},CLASS_NAME:"OpenLayers.Geometry.Curve"});
OpenLayers.Control.ModifyFeature=OpenLayers.Class(OpenLayers.Control,{geometryTypes:null,clickout:true,toggle:true,layer:null,feature:null,vertices:null,virtualVertices:null,selectControl:null,dragControl:null,handlers:null,deleteCodes:null,virtualStyle:null,mode:null,modified:false,radiusHandle:null,dragHandle:null,onModificationStart:function(){
},onModification:function(){
},onModificationEnd:function(){
},initialize:function(layer,_129f){
this.layer=layer;
this.vertices=[];
this.virtualVertices=[];
this.virtualStyle=OpenLayers.Util.extend({},this.layer.style||this.layer.styleMap.createSymbolizer());
this.virtualStyle.fillOpacity=0.3;
this.virtualStyle.strokeOpacity=0.3;
this.deleteCodes=[46,68];
this.mode=OpenLayers.Control.ModifyFeature.RESHAPE;
OpenLayers.Control.prototype.initialize.apply(this,[_129f]);
if(!(this.deleteCodes instanceof Array)){
this.deleteCodes=[this.deleteCodes];
}
var _12a0=this;
var _12a1={geometryTypes:this.geometryTypes,clickout:this.clickout,toggle:this.toggle,onBeforeSelect:this.beforeSelectFeature,onSelect:this.selectFeature,onUnselect:this.unselectFeature,scope:this};
this.selectControl=new OpenLayers.Control.SelectFeature(layer,_12a1);
var _12a2={geometryTypes:["OpenLayers.Geometry.Point"],snappingOptions:this.snappingOptions,onStart:function(_12a3,pixel){
_12a0.dragStart.apply(_12a0,[_12a3,pixel]);
},onDrag:function(_12a5,pixel){
_12a0.dragVertex.apply(_12a0,[_12a5,pixel]);
},onComplete:function(_12a7){
_12a0.dragComplete.apply(_12a0,[_12a7]);
}};
this.dragControl=new OpenLayers.Control.DragFeature(layer,_12a2);
var _12a8={keydown:this.handleKeypress};
this.handlers={keyboard:new OpenLayers.Handler.Keyboard(this,_12a8)};
},destroy:function(){
this.layer=null;
this.selectControl.destroy();
this.dragControl.destroy();
OpenLayers.Control.prototype.destroy.apply(this,[]);
},activate:function(){
return (this.selectControl.activate()&&this.handlers.keyboard.activate()&&OpenLayers.Control.prototype.activate.apply(this,arguments));
},deactivate:function(){
var _12a9=false;
if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){
this.layer.removeFeatures(this.vertices,{silent:true});
this.layer.removeFeatures(this.virtualVertices,{silent:true});
this.vertices=[];
this.dragControl.deactivate();
if(this.feature&&this.feature.geometry&&this.feature.layer){
this.selectControl.unselect.apply(this.selectControl,[this.feature]);
}
this.selectControl.deactivate();
this.handlers.keyboard.deactivate();
_12a9=true;
}
return _12a9;
},beforeSelectFeature:function(_12aa){
return this.layer.events.triggerEvent("beforefeaturemodified",{feature:_12aa});
},selectFeature:function(_12ab){
this.feature=_12ab;
this.modified=false;
this.resetVertices();
this.dragControl.activate();
this.onModificationStart(this.feature);
},unselectFeature:function(_12ac){
this.layer.removeFeatures(this.vertices,{silent:true});
this.vertices=[];
this.layer.destroyFeatures(this.virtualVertices,{silent:true});
this.virtualVertices=[];
if(this.dragHandle){
this.layer.destroyFeatures([this.dragHandle],{silent:true});
delete this.dragHandle;
}
if(this.radiusHandle){
this.layer.destroyFeatures([this.radiusHandle],{silent:true});
delete this.radiusHandle;
}
this.feature=null;
this.dragControl.deactivate();
this.onModificationEnd(_12ac);
this.layer.events.triggerEvent("afterfeaturemodified",{feature:_12ac,modified:this.modified});
this.modified=false;
},dragStart:function(_12ad,pixel){
if(_12ad!=this.feature&&!_12ad.geometry.parent&&_12ad!=this.dragHandle&&_12ad!=this.radiusHandle){
if(this.feature){
this.selectControl.clickFeature.apply(this.selectControl,[this.feature]);
}
if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,_12ad.geometry.CLASS_NAME)!=-1){
this.selectControl.clickFeature.apply(this.selectControl,[_12ad]);
this.dragControl.overFeature.apply(this.dragControl,[_12ad]);
this.dragControl.lastPixel=pixel;
this.dragControl.handlers.drag.started=true;
this.dragControl.handlers.drag.start=pixel;
this.dragControl.handlers.drag.last=pixel;
}
}
},dragVertex:function(_12af,pixel){
this.modified=true;
if(this.feature.geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){
if(this.feature!=_12af){
this.feature=_12af;
}
this.layer.events.triggerEvent("vertexmodified",{vertex:_12af.geometry,feature:this.feature,pixel:pixel});
}else{
if(_12af._index){
_12af.geometry.parent.addComponent(_12af.geometry,_12af._index);
delete _12af._index;
OpenLayers.Util.removeItem(this.virtualVertices,_12af);
this.vertices.push(_12af);
}else{
if(_12af==this.dragHandle){
this.layer.removeFeatures(this.vertices,{silent:true});
this.vertices=[];
if(this.radiusHandle){
this.layer.destroyFeatures([this.radiusHandle],{silent:true});
this.radiusHandle=null;
}
}else{
if(_12af!==this.radiusHandle){
this.layer.events.triggerEvent("vertexmodified",{vertex:_12af.geometry,feature:this.feature,pixel:pixel});
}
}
}
if(this.virtualVertices.length>0){
this.layer.destroyFeatures(this.virtualVertices,{silent:true});
this.virtualVertices=[];
}
this.layer.drawFeature(this.feature,this.selectControl.renderIntent);
}
this.layer.drawFeature(_12af);
},dragComplete:function(_12b1){
this.resetVertices();
this.setFeatureState();
this.onModification(this.feature);
this.layer.events.triggerEvent("featuremodified",{feature:this.feature});
},setFeatureState:function(){
if(this.feature.state!=OpenLayers.State.INSERT&&this.feature.state!=OpenLayers.State.DELETE){
this.feature.state=OpenLayers.State.UPDATE;
}
},resetVertices:function(){
if(this.dragControl.feature){
this.dragControl.outFeature(this.dragControl.feature);
}
if(this.vertices.length>0){
this.layer.removeFeatures(this.vertices,{silent:true});
this.vertices=[];
}
if(this.virtualVertices.length>0){
this.layer.removeFeatures(this.virtualVertices,{silent:true});
this.virtualVertices=[];
}
if(this.dragHandle){
this.layer.destroyFeatures([this.dragHandle],{silent:true});
this.dragHandle=null;
}
if(this.radiusHandle){
this.layer.destroyFeatures([this.radiusHandle],{silent:true});
this.radiusHandle=null;
}
if(this.feature&&this.feature.geometry.CLASS_NAME!="OpenLayers.Geometry.Point"){
if((this.mode&OpenLayers.Control.ModifyFeature.DRAG)){
this.collectDragHandle();
}
if((this.mode&(OpenLayers.Control.ModifyFeature.ROTATE|OpenLayers.Control.ModifyFeature.RESIZE))){
this.collectRadiusHandle();
}
if(this.mode&OpenLayers.Control.ModifyFeature.RESHAPE){
if(!(this.mode&OpenLayers.Control.ModifyFeature.RESIZE)){
this.collectVertices();
}
}
}
},handleKeypress:function(evt){
var code=evt.keyCode;
if(this.feature&&OpenLayers.Util.indexOf(this.deleteCodes,code)!=-1){
var _12b4=this.dragControl.feature;
if(_12b4&&OpenLayers.Util.indexOf(this.vertices,_12b4)!=-1&&!this.dragControl.handlers.drag.dragging&&_12b4.geometry.parent){
_12b4.geometry.parent.removeComponent(_12b4.geometry);
this.layer.drawFeature(this.feature,this.selectControl.renderIntent);
this.resetVertices();
this.setFeatureState();
this.onModification(this.feature);
this.layer.events.triggerEvent("featuremodified",{feature:this.feature});
}
}
},collectVertices:function(){
this.vertices=[];
this.virtualVertices=[];
var _12b5=this;
function _12b6(_12b7){
var i,_12b9,_12ba,len;
if(_12b7.CLASS_NAME=="OpenLayers.Geometry.Point"){
_12b9=new OpenLayers.Feature.Vector(_12b7);
_12b9._sketch=true;
_12b5.vertices.push(_12b9);
}else{
var _12bc=_12b7.components.length;
if(_12b7.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){
_12bc-=1;
}
for(i=0;i<_12bc;++i){
_12ba=_12b7.components[i];
if(_12ba.CLASS_NAME=="OpenLayers.Geometry.Point"){
_12b9=new OpenLayers.Feature.Vector(_12ba);
_12b9._sketch=true;
_12b5.vertices.push(_12b9);
}else{
_12b6(_12ba);
}
}
if(_12b7.CLASS_NAME!="OpenLayers.Geometry.MultiPoint"){
for(i=0,len=_12b7.components.length;i<len-1;++i){
var _12bd=_12b7.components[i];
var _12be=_12b7.components[i+1];
if(_12bd.CLASS_NAME=="OpenLayers.Geometry.Point"&&_12be.CLASS_NAME=="OpenLayers.Geometry.Point"){
var x=(_12bd.x+_12be.x)/2;
var y=(_12bd.y+_12be.y)/2;
var point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(x,y),null,_12b5.virtualStyle);
point.geometry.parent=_12b7;
point._index=i+1;
point._sketch=true;
_12b5.virtualVertices.push(point);
}
}
}
}
};
_12b6.call(this,this.feature.geometry);
this.layer.addFeatures(this.virtualVertices,{silent:true});
this.layer.addFeatures(this.vertices,{silent:true});
},collectDragHandle:function(){
var _12c2=this.feature.geometry;
var _12c3=_12c2.getBounds().getCenterLonLat();
var _12c4=new OpenLayers.Geometry.Point(_12c3.lon,_12c3.lat);
var _12c5=new OpenLayers.Feature.Vector(_12c4);
_12c4.move=function(x,y){
OpenLayers.Geometry.Point.prototype.move.call(this,x,y);
_12c2.move(x,y);
};
_12c5._sketch=true;
this.dragHandle=_12c5;
this.layer.addFeatures([this.dragHandle],{silent:true});
},collectRadiusHandle:function(){
var _12c8=this.feature.geometry;
var _12c9=_12c8.getBounds();
var _12ca=_12c9.getCenterLonLat();
var _12cb=new OpenLayers.Geometry.Point(_12ca.lon,_12ca.lat);
var _12cc=new OpenLayers.Geometry.Point(_12c9.right,_12c9.bottom);
var _12cd=new OpenLayers.Feature.Vector(_12cc);
var _12ce=(this.mode&OpenLayers.Control.ModifyFeature.RESIZE);
var _12cf=(this.mode&OpenLayers.Control.ModifyFeature.RESHAPE);
var _12d0=(this.mode&OpenLayers.Control.ModifyFeature.ROTATE);
_12cc.move=function(x,y){
OpenLayers.Geometry.Point.prototype.move.call(this,x,y);
var dx1=this.x-_12cb.x;
var dy1=this.y-_12cb.y;
var dx0=dx1-x;
var dy0=dy1-y;
if(_12d0){
var a0=Math.atan2(dy0,dx0);
var a1=Math.atan2(dy1,dx1);
var angle=a1-a0;
angle*=180/Math.PI;
_12c8.rotate(angle,_12cb);
}
if(_12ce){
var scale,ratio;
if(_12cf){
scale=dy1/dy0;
ratio=(dx1/dx0)/scale;
}else{
var l0=Math.sqrt((dx0*dx0)+(dy0*dy0));
var l1=Math.sqrt((dx1*dx1)+(dy1*dy1));
scale=l1/l0;
}
_12c8.resize(scale,_12cb,ratio);
}
};
_12cd._sketch=true;
this.radiusHandle=_12cd;
this.layer.addFeatures([this.radiusHandle],{silent:true});
},setMap:function(map){
this.selectControl.setMap(map);
this.dragControl.setMap(map);
OpenLayers.Control.prototype.setMap.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Control.ModifyFeature"});
OpenLayers.Control.ModifyFeature.RESHAPE=1;
OpenLayers.Control.ModifyFeature.RESIZE=2;
OpenLayers.Control.ModifyFeature.ROTATE=4;
OpenLayers.Control.ModifyFeature.DRAG=8;
OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{initialize:function(_12df){
OpenLayers.Geometry.Curve.prototype.initialize.apply(this,arguments);
},removeComponent:function(point){
if(this.components&&(this.components.length>2)){
OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);
}
},intersects:function(_12e1){
var _12e2=false;
var type=_12e1.CLASS_NAME;
if(type=="OpenLayers.Geometry.LineString"||type=="OpenLayers.Geometry.LinearRing"||type=="OpenLayers.Geometry.Point"){
var segs1=this.getSortedSegments();
var segs2;
if(type=="OpenLayers.Geometry.Point"){
segs2=[{x1:_12e1.x,y1:_12e1.y,x2:_12e1.x,y2:_12e1.y}];
}else{
segs2=_12e1.getSortedSegments();
}
var seg1,_12e7,_12e8,_12e9,_12ea,seg2,_12ec,_12ed;
outer:
for(var i=0,len=segs1.length;i<len;++i){
seg1=segs1[i];
_12e7=seg1.x1;
_12e8=seg1.x2;
_12e9=seg1.y1;
_12ea=seg1.y2;
inner:
for(var j=0,jlen=segs2.length;j<jlen;++j){
seg2=segs2[j];
if(seg2.x1>_12e8){
break;
}
if(seg2.x2<_12e7){
continue;
}
_12ec=seg2.y1;
_12ed=seg2.y2;
if(Math.min(_12ec,_12ed)>Math.max(_12e9,_12ea)){
continue;
}
if(Math.max(_12ec,_12ed)<Math.min(_12e9,_12ea)){
continue;
}
if(OpenLayers.Geometry.segmentsIntersect(seg1,seg2)){
_12e2=true;
break outer;
}
}
}
}else{
_12e2=_12e1.intersects(this);
}
return _12e2;
},getSortedSegments:function(){
var _12f2=this.components.length-1;
var _12f3=new Array(_12f2);
for(var i=0;i<_12f2;++i){
point1=this.components[i];
point2=this.components[i+1];
if(point1.x<point2.x){
_12f3[i]={x1:point1.x,y1:point1.y,x2:point2.x,y2:point2.y};
}else{
_12f3[i]={x1:point2.x,y1:point2.y,x2:point1.x,y2:point1.y};
}
}
function byX1(seg1,seg2){
return seg1.x1-seg2.x1;
};
return _12f3.sort(byX1);
},splitWithSegment:function(seg,_12f9){
var edge=!(_12f9&&_12f9.edge===false);
var _12fb=_12f9&&_12f9.tolerance;
var lines=[];
var verts=this.getVertices();
var _12fe=[];
var _12ff=[];
var split=false;
var vert1,vert2,point;
var node,_1305,_1306;
var _1307={point:true,tolerance:_12fb};
var _1308=null;
for(var i=0,stop=verts.length-2;i<=stop;++i){
vert1=verts[i];
_12fe.push(vert1.clone());
vert2=verts[i+1];
_1306={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};
point=OpenLayers.Geometry.segmentsIntersect(seg,_1306,_1307);
if(point instanceof OpenLayers.Geometry.Point){
if((point.x===seg.x1&&point.y===seg.y1)||(point.x===seg.x2&&point.y===seg.y2)||point.equals(vert1)||point.equals(vert2)){
_1305=true;
}else{
_1305=false;
}
if(_1305||edge){
if(!point.equals(_12ff[_12ff.length-1])){
_12ff.push(point.clone());
}
if(i===0){
if(point.equals(vert1)){
continue;
}
}
if(point.equals(vert2)){
continue;
}
split=true;
if(!point.equals(vert1)){
_12fe.push(point);
}
lines.push(new OpenLayers.Geometry.LineString(_12fe));
_12fe=[point.clone()];
}
}
}
if(split){
_12fe.push(vert2.clone());
lines.push(new OpenLayers.Geometry.LineString(_12fe));
}
if(_12ff.length>0){
var xDir=seg.x1<seg.x2?1:-1;
var yDir=seg.y1<seg.y2?1:-1;
_1308={lines:lines,points:_12ff.sort(function(p1,p2){
return (xDir*p1.x-xDir*p2.x)||(yDir*p1.y-yDir*p2.y);
})};
}
return _1308;
},split:function(_130f,_1310){
var _1311=null;
var _1312=_1310&&_1310.mutual;
var _1313,_1314,_1315,_1316;
if(_130f instanceof OpenLayers.Geometry.LineString){
var verts=this.getVertices();
var vert1,vert2,seg,_131b,lines,point;
var _131e=[];
_1315=[];
for(var i=0,stop=verts.length-2;i<=stop;++i){
vert1=verts[i];
vert2=verts[i+1];
seg={x1:vert1.x,y1:vert1.y,x2:vert2.x,y2:vert2.y};
_1316=_1316||[_130f];
if(_1312){
_131e.push(vert1.clone());
}
for(var j=0;j<_1316.length;++j){
_131b=_1316[j].splitWithSegment(seg,_1310);
if(_131b){
lines=_131b.lines;
if(lines.length>0){
lines.unshift(j,1);
Array.prototype.splice.apply(_1316,lines);
j+=lines.length-2;
}
if(_1312){
for(var k=0,len=_131b.points.length;k<len;++k){
point=_131b.points[k];
if(!point.equals(vert1)){
_131e.push(point);
_1315.push(new OpenLayers.Geometry.LineString(_131e));
if(point.equals(vert2)){
_131e=[];
}else{
_131e=[point.clone()];
}
}
}
}
}
}
}
if(_1312&&_1315.length>0&&_131e.length>0){
_131e.push(vert2.clone());
_1315.push(new OpenLayers.Geometry.LineString(_131e));
}
}else{
_1311=_130f.splitWith(this,_1310);
}
if(_1316&&_1316.length>1){
_1314=true;
}else{
_1316=[];
}
if(_1315&&_1315.length>1){
_1313=true;
}else{
_1315=[];
}
if(_1314||_1313){
if(_1312){
_1311=[_1315,_1316];
}else{
_1311=_1316;
}
}
return _1311;
},splitWith:function(_1324,_1325){
return _1324.split(this,_1325);
},getVertices:function(nodes){
var _1327;
if(nodes===true){
_1327=[this.components[0],this.components[this.components.length-1]];
}else{
if(nodes===false){
_1327=this.components.slice(1,this.components.length-1);
}else{
_1327=this.components.slice();
}
}
return _1327;
},distanceTo:function(_1328,_1329){
var edge=!(_1329&&_1329.edge===false);
var _132b=edge&&_1329&&_1329.details;
var _132c,best={};
var min=Number.POSITIVE_INFINITY;
if(_1328 instanceof OpenLayers.Geometry.Point){
var segs=this.getSortedSegments();
var x=_1328.x;
var y=_1328.y;
var seg;
for(var i=0,len=segs.length;i<len;++i){
seg=segs[i];
_132c=OpenLayers.Geometry.distanceToSegment(_1328,seg);
if(_132c.distance<min){
min=_132c.distance;
best=_132c;
if(min===0){
break;
}
}else{
if(seg.x2>x&&((y>seg.y1&&y<seg.y2)||(y<seg.y1&&y>seg.y2))){
break;
}
}
}
if(_132b){
best={distance:best.distance,x0:best.x,y0:best.y,x1:x,y1:y};
}else{
best=best.distance;
}
}else{
if(_1328 instanceof OpenLayers.Geometry.LineString){
var segs0=this.getSortedSegments();
var segs1=_1328.getSortedSegments();
var seg0,seg1,_1339,x0,y0;
var len1=segs1.length;
var _133d={point:true};
outer:
for(var i=0,len=segs0.length;i<len;++i){
seg0=segs0[i];
x0=seg0.x1;
y0=seg0.y1;
for(var j=0;j<len1;++j){
seg1=segs1[j];
_1339=OpenLayers.Geometry.segmentsIntersect(seg0,seg1,_133d);
if(_1339){
min=0;
best={distance:0,x0:_1339.x,y0:_1339.y,x1:_1339.x,y1:_1339.y};
break outer;
}else{
_132c=OpenLayers.Geometry.distanceToSegment({x:x0,y:y0},seg1);
if(_132c.distance<min){
min=_132c.distance;
best={distance:min,x0:x0,y0:y0,x1:_132c.x,y1:_132c.y};
}
}
}
}
if(!_132b){
best=best.distance;
}
if(min!==0){
if(seg0){
_132c=_1328.distanceTo(new OpenLayers.Geometry.Point(seg0.x2,seg0.y2),_1329);
var dist=_132b?_132c.distance:_132c;
if(dist<min){
if(_132b){
best={distance:min,x0:_132c.x1,y0:_132c.y1,x1:_132c.x0,y1:_132c.y0};
}else{
best=dist;
}
}
}
}
}else{
best=_1328.distanceTo(this,_1329);
if(_132b){
best={distance:best.distance,x0:best.x1,y0:best.y1,x1:best.x0,y1:best.y0};
}
}
}
return best;
},CLASS_NAME:"OpenLayers.Geometry.LineString"});
OpenLayers.Format.GPX=OpenLayers.Class(OpenLayers.Format.XML,{extractWaypoints:true,extractTracks:true,extractRoutes:true,extractAttributes:true,initialize:function(_1340){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1340]);
},read:function(doc){
if(typeof doc=="string"){
doc=OpenLayers.Format.XML.prototype.read.apply(this,[doc]);
}
var _1342=[];
if(this.extractTracks){
var _1343=doc.getElementsByTagName("trk");
for(var i=0,len=_1343.length;i<len;i++){
var attrs={};
if(this.extractAttributes){
attrs=this.parseAttributes(_1343[i]);
}
var segs=this.getElementsByTagNameNS(_1343[i],_1343[i].namespaceURI,"trkseg");
for(var j=0,_1349=segs.length;j<_1349;j++){
var track=this.extractSegment(segs[j],"trkpt");
_1342.push(new OpenLayers.Feature.Vector(track,attrs));
}
}
}
if(this.extractRoutes){
var _134b=doc.getElementsByTagName("rte");
for(var k=0,klen=_134b.length;k<klen;k++){
var attrs={};
if(this.extractAttributes){
attrs=this.parseAttributes(_134b[k]);
}
var route=this.extractSegment(_134b[k],"rtept");
_1342.push(new OpenLayers.Feature.Vector(route,attrs));
}
}
if(this.extractWaypoints){
var _134f=doc.getElementsByTagName("wpt");
for(var l=0,len=_134f.length;l<len;l++){
var attrs={};
if(this.extractAttributes){
attrs=this.parseAttributes(_134f[l]);
}
var wpt=new OpenLayers.Geometry.Point(_134f[l].getAttribute("lon"),_134f[l].getAttribute("lat"));
_1342.push(new OpenLayers.Feature.Vector(wpt,attrs));
}
}
if(this.internalProjection&&this.externalProjection){
for(var g=0,_1353=_1342.length;g<_1353;g++){
_1342[g].geometry.transform(this.externalProjection,this.internalProjection);
}
}
return _1342;
},extractSegment:function(_1354,_1355){
var _1356=this.getElementsByTagNameNS(_1354,_1354.namespaceURI,_1355);
var _1357=[];
for(var i=0,len=_1356.length;i<len;i++){
_1357.push(new OpenLayers.Geometry.Point(_1356[i].getAttribute("lon"),_1356[i].getAttribute("lat")));
}
return new OpenLayers.Geometry.LineString(_1357);
},parseAttributes:function(node){
var _135b={};
var _135c=node.firstChild;
while(_135c){
if(_135c.nodeType==1){
var value=_135c.firstChild;
if(value.nodeType==3||value.nodeType==4){
name=(_135c.prefix)?_135c.nodeName.split(":")[1]:_135c.nodeName;
if(name!="trkseg"&&name!="rtept"){
_135b[name]=value.nodeValue;
}
}
}
_135c=_135c.nextSibling;
}
return _135b;
},CLASS_NAME:"OpenLayers.Format.GPX"});
OpenLayers.Geometry.LinearRing=OpenLayers.Class(OpenLayers.Geometry.LineString,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(_135e){
OpenLayers.Geometry.LineString.prototype.initialize.apply(this,arguments);
},addComponent:function(point,index){
var added=false;
var _1362=this.components.pop();
if(index!=null||!point.equals(_1362)){
added=OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,arguments);
}
var _1363=this.components[0];
OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[_1363]);
return added;
},removeComponent:function(point){
if(this.components.length>4){
this.components.pop();
OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);
var _1365=this.components[0];
OpenLayers.Geometry.Collection.prototype.addComponent.apply(this,[_1365]);
}
},move:function(x,y){
for(var i=0,len=this.components.length;i<len-1;i++){
this.components[i].move(x,y);
}
},rotate:function(angle,_136b){
for(var i=0,len=this.components.length;i<len-1;++i){
this.components[i].rotate(angle,_136b);
}
},resize:function(scale,_136f,ratio){
for(var i=0,len=this.components.length;i<len-1;++i){
this.components[i].resize(scale,_136f,ratio);
}
return this;
},transform:function(_1373,dest){
if(_1373&&dest){
for(var i=0,len=this.components.length;i<len-1;i++){
var _1377=this.components[i];
_1377.transform(_1373,dest);
}
this.bounds=null;
}
return this;
},getCentroid:function(){
if(this.components&&(this.components.length>2)){
var sumX=0;
var sumY=0;
for(var i=0;i<this.components.length-1;i++){
var b=this.components[i];
var c=this.components[i+1];
sumX+=(b.x+c.x)*(b.x*c.y-c.x*b.y);
sumY+=(b.y+c.y)*(b.x*c.y-c.x*b.y);
}
var area=-1*this.getArea();
var x=sumX/(6*area);
var y=sumY/(6*area);
}
return new OpenLayers.Geometry.Point(x,y);
},getArea:function(){
var area=0;
if(this.components&&(this.components.length>2)){
var sum=0;
for(var i=0,len=this.components.length;i<len-1;i++){
var b=this.components[i];
var c=this.components[i+1];
sum+=(b.x+c.x)*(c.y-b.y);
}
area=-sum/2;
}
return area;
},getGeodesicArea:function(_1386){
var ring=this;
if(_1386){
var gg=new OpenLayers.Projection("EPSG:4326");
if(!gg.equals(_1386)){
ring=this.clone().transform(_1386,gg);
}
}
var area=0;
var len=ring.components&&ring.components.length;
if(len>2){
var p1,p2;
for(var i=0;i<len-1;i++){
p1=ring.components[i];
p2=ring.components[i+1];
area+=OpenLayers.Util.rad(p2.x-p1.x)*(2+Math.sin(OpenLayers.Util.rad(p1.y))+Math.sin(OpenLayers.Util.rad(p2.y)));
}
area=area*6378137*6378137/2;
}
return area;
},containsPoint:function(point){
var _138f=OpenLayers.Number.limitSigDigs;
var digs=14;
var px=_138f(point.x,digs);
var py=_138f(point.y,digs);
function getX(y,x1,y1,x2,y2){
return (((x1-x2)*y)+((x2*y1)-(x1*y2)))/(y1-y2);
};
var _1399=this.components.length-1;
var start,end,x1,y1,x2,y2,cx,cy;
var _13a2=0;
for(var i=0;i<_1399;++i){
start=this.components[i];
x1=_138f(start.x,digs);
y1=_138f(start.y,digs);
end=this.components[i+1];
x2=_138f(end.x,digs);
y2=_138f(end.y,digs);
if(y1==y2){
if(py==y1){
if(x1<=x2&&(px>=x1&&px<=x2)||x1>=x2&&(px<=x1&&px>=x2)){
_13a2=-1;
break;
}
}
continue;
}
cx=_138f(getX(py,x1,y1,x2,y2),digs);
if(cx==px){
if(y1<y2&&(py>=y1&&py<=y2)||y1>y2&&(py<=y1&&py>=y2)){
_13a2=-1;
break;
}
}
if(cx<=px){
continue;
}
if(x1!=x2&&(cx<Math.min(x1,x2)||cx>Math.max(x1,x2))){
continue;
}
if(y1<y2&&(py>=y1&&py<y2)||y1>y2&&(py<y1&&py>=y2)){
++_13a2;
}
}
var _13a4=(_13a2==-1)?1:!!(_13a2&1);
return _13a4;
},intersects:function(_13a5){
var _13a6=false;
if(_13a5.CLASS_NAME=="OpenLayers.Geometry.Point"){
_13a6=this.containsPoint(_13a5);
}else{
if(_13a5.CLASS_NAME=="OpenLayers.Geometry.LineString"){
_13a6=_13a5.intersects(this);
}else{
if(_13a5.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){
_13a6=OpenLayers.Geometry.LineString.prototype.intersects.apply(this,[_13a5]);
}else{
for(var i=0,len=_13a5.components.length;i<len;++i){
_13a6=_13a5.components[i].intersects(this);
if(_13a6){
break;
}
}
}
}
}
return _13a6;
},getVertices:function(nodes){
return (nodes===true)?[]:this.components.slice(0,this.components.length-1);
},CLASS_NAME:"OpenLayers.Geometry.LinearRing"});
OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(_13aa){
OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);
},split:function(_13ab,_13ac){
var _13ad=null;
var _13ae=_13ac&&_13ac.mutual;
var _13af,_13b0,_13b1,_13b2,_13b3;
var _13b4=[];
var _13b5=[_13ab];
for(var i=0,len=this.components.length;i<len;++i){
_13b0=this.components[i];
_13b2=false;
for(var j=0;j<_13b5.length;++j){
_13af=_13b0.split(_13b5[j],_13ac);
if(_13af){
if(_13ae){
_13b1=_13af[0];
for(var k=0,klen=_13b1.length;k<klen;++k){
if(k===0&&_13b4.length){
_13b4[_13b4.length-1].addComponent(_13b1[k]);
}else{
_13b4.push(new OpenLayers.Geometry.MultiLineString([_13b1[k]]));
}
}
_13b2=true;
_13af=_13af[1];
}
if(_13af.length){
_13af.unshift(j,1);
Array.prototype.splice.apply(_13b5,_13af);
break;
}
}
}
if(!_13b2){
if(_13b4.length){
_13b4[_13b4.length-1].addComponent(_13b0.clone());
}else{
_13b4=[new OpenLayers.Geometry.MultiLineString(_13b0.clone())];
}
}
}
if(_13b4&&_13b4.length>1){
_13b2=true;
}else{
_13b4=[];
}
if(_13b5&&_13b5.length>1){
_13b3=true;
}else{
_13b5=[];
}
if(_13b2||_13b3){
if(_13ae){
_13ad=[_13b4,_13b5];
}else{
_13ad=_13b5;
}
}
return _13ad;
},splitWith:function(_13bb,_13bc){
var _13bd=null;
var _13be=_13bc&&_13bc.mutual;
var _13bf,_13c0,_13c1,_13c2,_13c3,_13c4,_13c5;
if(_13bb instanceof OpenLayers.Geometry.LineString){
_13c5=[];
_13c4=[_13bb];
for(var i=0,len=this.components.length;i<len;++i){
_13c3=false;
_13c0=this.components[i];
for(var j=0;j<_13c4.length;++j){
_13bf=_13c4[j].split(_13c0,_13bc);
if(_13bf){
if(_13be){
_13c1=_13bf[0];
if(_13c1.length){
_13c1.unshift(j,1);
Array.prototype.splice.apply(_13c4,_13c1);
j+=_13c1.length-2;
}
_13bf=_13bf[1];
if(_13bf.length===0){
_13bf=[_13c0.clone()];
}
}
for(var k=0,klen=_13bf.length;k<klen;++k){
if(k===0&&_13c5.length){
_13c5[_13c5.length-1].addComponent(_13bf[k]);
}else{
_13c5.push(new OpenLayers.Geometry.MultiLineString([_13bf[k]]));
}
}
_13c3=true;
}
}
if(!_13c3){
if(_13c5.length){
_13c5[_13c5.length-1].addComponent(_13c0.clone());
}else{
_13c5=[new OpenLayers.Geometry.MultiLineString([_13c0.clone()])];
}
}
}
}else{
_13bd=_13bb.split(this);
}
if(_13c4&&_13c4.length>1){
_13c2=true;
}else{
_13c4=[];
}
if(_13c5&&_13c5.length>1){
_13c3=true;
}else{
_13c5=[];
}
if(_13c2||_13c3){
if(_13be){
_13bd=[_13c4,_13c5];
}else{
_13bd=_13c5;
}
}
return _13bd;
},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});
OpenLayers.Handler.Path=OpenLayers.Class(OpenLayers.Handler.Point,{line:null,freehand:false,freehandToggle:"shiftKey",initialize:function(_13cb,_13cc,_13cd){
OpenLayers.Handler.Point.prototype.initialize.apply(this,arguments);
},createFeature:function(pixel){
var _13cf=this.control.map.getLonLatFromPixel(pixel);
this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_13cf.lon,_13cf.lat));
this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([this.point.geometry]));
this.callback("create",[this.point.geometry,this.getSketch()]);
this.point.geometry.clearBounds();
this.layer.addFeatures([this.line,this.point],{silent:true});
},destroyFeature:function(){
OpenLayers.Handler.Point.prototype.destroyFeature.apply(this);
this.line=null;
},removePoint:function(){
if(this.point){
this.layer.removeFeatures([this.point]);
}
},addPoint:function(pixel){
this.layer.removeFeatures([this.point]);
var _13d1=this.control.map.getLonLatFromPixel(pixel);
this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_13d1.lon,_13d1.lat));
this.line.geometry.addComponent(this.point.geometry,this.line.geometry.components.length);
this.callback("point",[this.point.geometry,this.getGeometry()]);
this.callback("modify",[this.point.geometry,this.getSketch()]);
this.drawFeature();
},freehandMode:function(evt){
return (this.freehandToggle&&evt[this.freehandToggle])?!this.freehand:this.freehand;
},modifyFeature:function(pixel){
var _13d4=this.control.map.getLonLatFromPixel(pixel);
this.point.geometry.x=_13d4.lon;
this.point.geometry.y=_13d4.lat;
this.callback("modify",[this.point.geometry,this.getSketch()]);
this.point.geometry.clearBounds();
this.drawFeature();
},drawFeature:function(){
this.layer.drawFeature(this.line,this.style);
this.layer.drawFeature(this.point,this.style);
},getSketch:function(){
return this.line;
},getGeometry:function(){
var _13d5=this.line&&this.line.geometry;
if(_13d5&&this.multi){
_13d5=new OpenLayers.Geometry.MultiLineString([_13d5]);
}
return _13d5;
},mousedown:function(evt){
if(this.lastDown&&this.lastDown.equals(evt.xy)){
return false;
}
if(this.lastDown==null){
if(this.persist){
this.destroyFeature();
}
this.createFeature(evt.xy);
}else{
if((this.lastUp==null)||!this.lastUp.equals(evt.xy)){
this.addPoint(evt.xy);
}
}
this.mouseDown=true;
this.lastDown=evt.xy;
this.drawing=true;
return false;
},mousemove:function(evt){
if(this.drawing){
if(this.mouseDown&&this.freehandMode(evt)){
this.addPoint(evt.xy);
}else{
this.modifyFeature(evt.xy);
}
}
return true;
},mouseup:function(evt){
this.mouseDown=false;
if(this.drawing){
if(this.freehandMode(evt)){
this.removePoint();
this.finalize();
}else{
if(this.lastUp==null){
this.addPoint(evt.xy);
}
this.lastUp=evt.xy;
}
return false;
}
return true;
},dblclick:function(evt){
if(!this.freehandMode(evt)){
var index=this.line.geometry.components.length-1;
this.line.geometry.removeComponent(this.line.geometry.components[index]);
this.removePoint();
this.finalize();
}
return false;
},CLASS_NAME:"OpenLayers.Handler.Path"});
OpenLayers.Control.Split=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforesplit","split","aftersplit"],layer:null,source:null,sourceOptions:null,tolerance:null,edge:true,deferDelete:false,mutual:true,targetFilter:null,sourceFilter:null,handler:null,initialize:function(_13db){
Array.prototype.push.apply(this.EVENT_TYPES,OpenLayers.Control.prototype.EVENT_TYPES);
OpenLayers.Control.prototype.initialize.apply(this,[_13db]);
this.options=_13db||{};
if(this.options.source){
this.setSource(this.options.source);
}
},setSource:function(layer){
if(this.active){
this.deactivate();
if(this.handler){
this.handler.destroy();
delete this.handler;
}
this.source=layer;
this.activate();
}else{
this.source=layer;
}
},activate:function(){
var _13dd=OpenLayers.Control.prototype.activate.call(this);
if(_13dd){
if(!this.source){
if(!this.handler){
this.handler=new OpenLayers.Handler.Path(this,{done:function(_13de){
this.onSketchComplete({feature:new OpenLayers.Feature.Vector(_13de)});
}},{layerOptions:this.sourceOptions});
}
this.handler.activate();
}else{
if(this.source.events){
this.source.events.on({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this});
}
}
}
return _13dd;
},deactivate:function(){
var _13df=OpenLayers.Control.prototype.deactivate.call(this);
if(_13df){
if(this.source&&this.source.events){
this.layer.events.un({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this});
}
}
return _13df;
},onSketchComplete:function(event){
this.feature=null;
return !this.considerSplit(event.feature);
},afterFeatureModified:function(event){
if(event.modified){
var _13e2=event.feature;
if(_13e2.geometry instanceof OpenLayers.Geometry.LineString||_13e2.geometry instanceof OpenLayers.Geometry.MultiLineString){
this.feature=event.feature;
this.considerSplit(event.feature);
}
}
},removeByGeometry:function(_13e3,_13e4){
for(var i=0,len=_13e3.length;i<len;++i){
if(_13e3[i].geometry===_13e4){
_13e3.splice(i,1);
break;
}
}
},isEligible:function(_13e7){
return (_13e7.state!==OpenLayers.State.DELETE)&&(_13e7.geometry instanceof OpenLayers.Geometry.LineString||_13e7.geometry instanceof OpenLayers.Geometry.MultiLineString)&&(this.feature!==_13e7)&&(!this.targetFilter||this.targetFilter.evaluate(_13e7.attributes));
},considerSplit:function(_13e8){
sourceSplit=false;
targetSplit=false;
if(!this.sourceFilter||this.sourceFilter.evaluate(_13e8.attributes)){
var _13e9=this.layer&&this.layer.features||[];
var _13ea,_13eb,_13ec,_13ed;
var _13ee=[],_13ef=[];
var _13f0=(this.layer===this.source)&&this.mutual;
var _13f1={edge:this.edge,tolerance:this.tolerance,mutual:_13f0};
var _13f2=[_13e8.geometry];
var _13f3,_13f4;
var _13f5,parts;
for(var i=0,len=_13e9.length;i<len;++i){
_13f3=_13e9[i];
if(this.isEligible(_13f3)){
_13f4=[_13f3.geometry];
for(var j=0;j<_13f2.length;++j){
_13f5=_13f2[j];
for(var k=0;k<_13f4.length;++k){
_13ea=_13f4[k];
if(_13f5.getBounds().intersectsBounds(_13ea.getBounds())){
_13eb=_13f5.split(_13ea,_13f1);
if(_13eb){
_13ed=this.events.triggerEvent("beforesplit",{source:_13e8,target:_13f3});
if(_13ed!==false){
if(_13f0){
parts=_13eb[0];
if(parts.length>1){
parts.unshift(j,1);
Array.prototype.splice.apply(_13f2,parts);
j+=parts.length-3;
}
_13eb=_13eb[1];
}
if(_13eb.length>1){
_13eb.unshift(k,1);
Array.prototype.splice.apply(_13f4,_13eb);
k+=_13eb.length-3;
}
}
}
}
}
}
if(_13f4&&_13f4.length>1){
this.geomsToFeatures(_13f3,_13f4);
this.events.triggerEvent("split",{original:_13f3,features:_13f4});
Array.prototype.push.apply(_13ee,_13f4);
_13ef.push(_13f3);
targetSplit=true;
}
}
}
if(_13f2&&_13f2.length>1){
this.geomsToFeatures(_13e8,_13f2);
this.events.triggerEvent("split",{original:_13e8,features:_13f2});
Array.prototype.push.apply(_13ee,_13f2);
_13ef.push(_13e8);
sourceSplit=true;
}
if(sourceSplit||targetSplit){
if(this.deferDelete){
var feat,_13fc=[];
for(var i=0,len=_13ef.length;i<len;++i){
feat=_13ef[i];
if(feat.state===OpenLayers.State.INSERT){
_13fc.push(feat);
}else{
feat.state=OpenLayers.State.DELETE;
this.layer.drawFeature(feat);
}
}
this.layer.destroyFeatures(_13fc,{silent:true});
for(var i=0,len=_13ee.length;i<len;++i){
_13ee[i].state=OpenLayers.State.INSERT;
}
}else{
this.layer.destroyFeatures(_13ef,{silent:true});
}
this.layer.addFeatures(_13ee,{silent:true});
this.events.triggerEvent("aftersplit",{source:_13e8,features:_13ee});
}
}
return sourceSplit;
},geomsToFeatures:function(_13fd,geoms){
var clone=_13fd.clone();
delete clone.geometry;
var _1400;
for(var i=0,len=geoms.length;i<len;++i){
_1400=clone.clone();
_1400.geometry=geoms[i];
_1400.state=OpenLayers.State.INSERT;
geoms[i]=_1400;
}
},destroy:function(){
if(this.active){
this.deactivate();
}
OpenLayers.Control.prototype.destroy.call(this);
},CLASS_NAME:"OpenLayers.Control.Split"});
OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],initialize:function(_1403){
OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);
},getArea:function(){
var area=0;
if(this.components&&(this.components.length>0)){
area+=Math.abs(this.components[0].getArea());
for(var i=1,len=this.components.length;i<len;i++){
area-=Math.abs(this.components[i].getArea());
}
}
return area;
},getGeodesicArea:function(_1407){
var area=0;
if(this.components&&(this.components.length>0)){
area+=Math.abs(this.components[0].getGeodesicArea(_1407));
for(var i=1,len=this.components.length;i<len;i++){
area-=Math.abs(this.components[i].getGeodesicArea(_1407));
}
}
return area;
},containsPoint:function(point){
var _140c=this.components.length;
var _140d=false;
if(_140c>0){
_140d=this.components[0].containsPoint(point);
if(_140d!==1){
if(_140d&&_140c>1){
var hole;
for(var i=1;i<_140c;++i){
hole=this.components[i].containsPoint(point);
if(hole){
if(hole===1){
_140d=1;
}else{
_140d=false;
}
break;
}
}
}
}
}
return _140d;
},intersects:function(_1410){
var _1411=false;
var i,len;
if(_1410.CLASS_NAME=="OpenLayers.Geometry.Point"){
_1411=this.containsPoint(_1410);
}else{
if(_1410.CLASS_NAME=="OpenLayers.Geometry.LineString"||_1410.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){
for(i=0,len=this.components.length;i<len;++i){
_1411=_1410.intersects(this.components[i]);
if(_1411){
break;
}
}
if(!_1411){
for(i=0,len=_1410.components.length;i<len;++i){
_1411=this.containsPoint(_1410.components[i]);
if(_1411){
break;
}
}
}
}else{
for(i=0,len=_1410.components.length;i<len;++i){
_1411=this.intersects(_1410.components[i]);
if(_1411){
break;
}
}
}
}
if(!_1411&&_1410.CLASS_NAME=="OpenLayers.Geometry.Polygon"){
var ring=this.components[0];
for(i=0,len=ring.components.length;i<len;++i){
_1411=_1410.containsPoint(ring.components[i]);
if(_1411){
break;
}
}
}
return _1411;
},distanceTo:function(_1415,_1416){
var edge=!(_1416&&_1416.edge===false);
var _1418;
if(!edge&&this.intersects(_1415)){
_1418=0;
}else{
_1418=OpenLayers.Geometry.Collection.prototype.distanceTo.apply(this,[_1415,_1416]);
}
return _1418;
},CLASS_NAME:"OpenLayers.Geometry.Polygon"});
OpenLayers.Geometry.Polygon.createRegularPolygon=function(_1419,_141a,sides,_141c){
var angle=Math.PI*((1/sides)-(1/2));
if(_141c){
angle+=(_141c/180)*Math.PI;
}
var _141e,x,y;
var _1421=[];
for(var i=0;i<sides;++i){
_141e=angle+(i*2*Math.PI/sides);
x=_1419.x+(_141a*Math.cos(_141e));
y=_1419.y+(_141a*Math.sin(_141e));
_1421.push(new OpenLayers.Geometry.Point(x,y));
}
var ring=new OpenLayers.Geometry.LinearRing(_1421);
return new OpenLayers.Geometry.Polygon([ring]);
};
OpenLayers.Format.GeoRSS=OpenLayers.Class(OpenLayers.Format.XML,{rssns:"http://backend.userland.com/rss2",featureNS:"http://mapserver.gis.umn.edu/mapserver",georssns:"http://www.georss.org/georss",geons:"http://www.w3.org/2003/01/geo/wgs84_pos#",featureTitle:"Untitled",featureDescription:"No Description",gmlParser:null,xy:false,initialize:function(_1424){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1424]);
},createGeometryFromItem:function(item){
var point=this.getElementsByTagNameNS(item,this.georssns,"point");
var lat=this.getElementsByTagNameNS(item,this.geons,"lat");
var lon=this.getElementsByTagNameNS(item,this.geons,"long");
var line=this.getElementsByTagNameNS(item,this.georssns,"line");
var _142a=this.getElementsByTagNameNS(item,this.georssns,"polygon");
var where=this.getElementsByTagNameNS(item,this.georssns,"where");
var box=this.getElementsByTagNameNS(item,this.georssns,"box");
if(point.length>0||(lat.length>0&&lon.length>0)){
var _142d;
if(point.length>0){
_142d=OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s+/);
if(_142d.length!=2){
_142d=OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s*,\s*/);
}
}else{
_142d=[parseFloat(lat[0].firstChild.nodeValue),parseFloat(lon[0].firstChild.nodeValue)];
}
var _142e=new OpenLayers.Geometry.Point(parseFloat(_142d[1]),parseFloat(_142d[0]));
}else{
if(line.length>0){
var _142f=OpenLayers.String.trim(this.concatChildValues(line[0])).split(/\s+/);
var _1430=[];
var point;
for(var i=0,len=_142f.length;i<len;i+=2){
point=new OpenLayers.Geometry.Point(parseFloat(_142f[i+1]),parseFloat(_142f[i]));
_1430.push(point);
}
_142e=new OpenLayers.Geometry.LineString(_1430);
}else{
if(_142a.length>0){
var _142f=OpenLayers.String.trim(this.concatChildValues(_142a[0])).split(/\s+/);
var _1430=[];
var point;
for(var i=0,len=_142f.length;i<len;i+=2){
point=new OpenLayers.Geometry.Point(parseFloat(_142f[i+1]),parseFloat(_142f[i]));
_1430.push(point);
}
_142e=new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(_1430)]);
}else{
if(where.length>0){
if(!this.gmlParser){
this.gmlParser=new OpenLayers.Format.GML({"xy":this.xy});
}
var _1433=this.gmlParser.parseFeature(where[0]);
_142e=_1433.geometry;
}else{
if(box.length>0){
var _142f=OpenLayers.String.trim(box[0].firstChild.nodeValue).split(/\s+/);
var _1430=[];
var point;
if(_142f.length>3){
point=new OpenLayers.Geometry.Point(parseFloat(_142f[1]),parseFloat(_142f[0]));
_1430.push(point);
point=new OpenLayers.Geometry.Point(parseFloat(_142f[1]),parseFloat(_142f[2]));
_1430.push(point);
point=new OpenLayers.Geometry.Point(parseFloat(_142f[3]),parseFloat(_142f[2]));
_1430.push(point);
point=new OpenLayers.Geometry.Point(parseFloat(_142f[3]),parseFloat(_142f[0]));
_1430.push(point);
point=new OpenLayers.Geometry.Point(parseFloat(_142f[1]),parseFloat(_142f[0]));
_1430.push(point);
}
_142e=new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(_1430)]);
}
}
}
}
}
if(_142e&&this.internalProjection&&this.externalProjection){
_142e.transform(this.externalProjection,this.internalProjection);
}
return _142e;
},createFeatureFromItem:function(item){
var _1435=this.createGeometryFromItem(item);
var title=this.getChildValue(item,"*","title",this.featureTitle);
var _1437=this.getChildValue(item,"*","description",this.getChildValue(item,"*","content",this.getChildValue(item,"*","summary",this.featureDescription)));
var link=this.getChildValue(item,"*","link");
if(!link){
try{
link=this.getElementsByTagNameNS(item,"*","link")[0].getAttribute("href");
}
catch(e){
link=null;
}
}
var id=this.getChildValue(item,"*","id",null);
var data={"title":title,"description":_1437,"link":link};
var _143b=new OpenLayers.Feature.Vector(_1435,data);
_143b.fid=id;
return _143b;
},getChildValue:function(node,nsuri,name,def){
var value;
var eles=this.getElementsByTagNameNS(node,nsuri,name);
if(eles&&eles[0]&&eles[0].firstChild&&eles[0].firstChild.nodeValue){
value=eles[0].firstChild.nodeValue;
}else{
value=(def==undefined)?"":def;
}
return value;
},read:function(doc){
if(typeof doc=="string"){
doc=OpenLayers.Format.XML.prototype.read.apply(this,[doc]);
}
var _1443=null;
_1443=this.getElementsByTagNameNS(doc,"*","item");
if(_1443.length==0){
_1443=this.getElementsByTagNameNS(doc,"*","entry");
}
var _1444=_1443.length;
var _1445=new Array(_1444);
for(var i=0;i<_1444;i++){
_1445[i]=this.createFeatureFromItem(_1443[i]);
}
return _1445;
},write:function(_1447){
var _1448;
if(_1447 instanceof Array){
_1448=this.createElementNS(this.rssns,"rss");
for(var i=0,len=_1447.length;i<len;i++){
_1448.appendChild(this.createFeatureXML(_1447[i]));
}
}else{
_1448=this.createFeatureXML(_1447);
}
return OpenLayers.Format.XML.prototype.write.apply(this,[_1448]);
},createFeatureXML:function(_144b){
var _144c=this.buildGeometryNode(_144b.geometry);
var _144d=this.createElementNS(this.rssns,"item");
var _144e=this.createElementNS(this.rssns,"title");
_144e.appendChild(this.createTextNode(_144b.attributes.title?_144b.attributes.title:""));
var _144f=this.createElementNS(this.rssns,"description");
_144f.appendChild(this.createTextNode(_144b.attributes.description?_144b.attributes.description:""));
_144d.appendChild(_144e);
_144d.appendChild(_144f);
if(_144b.attributes.link){
var _1450=this.createElementNS(this.rssns,"link");
_1450.appendChild(this.createTextNode(_144b.attributes.link));
_144d.appendChild(_1450);
}
for(var attr in _144b.attributes){
if(attr=="link"||attr=="title"||attr=="description"){
continue;
}
var _1452=this.createTextNode(_144b.attributes[attr]);
var _1453=attr;
if(attr.search(":")!=-1){
_1453=attr.split(":")[1];
}
var _1454=this.createElementNS(this.featureNS,"feature:"+_1453);
_1454.appendChild(_1452);
_144d.appendChild(_1454);
}
_144d.appendChild(_144c);
return _144d;
},buildGeometryNode:function(_1455){
if(this.internalProjection&&this.externalProjection){
_1455=_1455.clone();
_1455.transform(this.internalProjection,this.externalProjection);
}
var node;
if(_1455.CLASS_NAME=="OpenLayers.Geometry.Polygon"){
node=this.createElementNS(this.georssns,"georss:polygon");
node.appendChild(this.buildCoordinatesNode(_1455.components[0]));
}else{
if(_1455.CLASS_NAME=="OpenLayers.Geometry.LineString"){
node=this.createElementNS(this.georssns,"georss:line");
node.appendChild(this.buildCoordinatesNode(_1455));
}else{
if(_1455.CLASS_NAME=="OpenLayers.Geometry.Point"){
node=this.createElementNS(this.georssns,"georss:point");
node.appendChild(this.buildCoordinatesNode(_1455));
}else{
throw "Couldn't parse "+_1455.CLASS_NAME;
}
}
}
return node;
},buildCoordinatesNode:function(_1457){
var _1458=null;
if(_1457.components){
_1458=_1457.components;
}
var path;
if(_1458){
var _145a=_1458.length;
var parts=new Array(_145a);
for(var i=0;i<_145a;i++){
parts[i]=_1458[i].y+" "+_1458[i].x;
}
path=parts.join(" ");
}else{
path=_1457.y+" "+_1457.x;
}
return this.createTextNode(path);
},CLASS_NAME:"OpenLayers.Format.GeoRSS"});
OpenLayers.Format.KML=OpenLayers.Class(OpenLayers.Format.XML,{kmlns:"http://earth.google.com/kml/2.0",placemarksDesc:"No description available",foldersName:"OpenLayers export",foldersDesc:"Exported on "+new Date(),extractAttributes:true,extractStyles:false,internalns:null,features:null,styles:null,styleBaseUrl:"",fetched:null,maxDepth:0,initialize:function(_145d){
this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g),kmlColor:(/(\w{2})(\w{2})(\w{2})(\w{2})/),kmlIconPalette:(/root:\/\/icons\/palette-(\d+)(\.\w+)/),straightBracket:(/\$\[(.*?)\]/g)};
OpenLayers.Format.XML.prototype.initialize.apply(this,[_145d]);
},read:function(data){
this.features=[];
this.styles={};
this.fetched={};
var _145f={depth:0,styleBaseUrl:this.styleBaseUrl};
return this.parseData(data,_145f);
},parseData:function(data,_1461){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var types=["Link","NetworkLink","Style","StyleMap","Placemark"];
for(var i=0,len=types.length;i<len;++i){
var type=types[i];
var nodes=this.getElementsByTagNameNS(data,"*",type);
if(nodes.length==0){
continue;
}
switch(type.toLowerCase()){
case "link":
case "networklink":
this.parseLinks(nodes,_1461);
break;
case "style":
if(this.extractStyles){
this.parseStyles(nodes,_1461);
}
break;
case "stylemap":
if(this.extractStyles){
this.parseStyleMaps(nodes,_1461);
}
break;
case "placemark":
this.parseFeatures(nodes,_1461);
break;
}
}
return this.features;
},parseLinks:function(nodes,_1468){
if(_1468.depth>=this.maxDepth){
return false;
}
var _1469=OpenLayers.Util.extend({},_1468);
_1469.depth++;
for(var i=0,len=nodes.length;i<len;i++){
var href=this.parseProperty(nodes[i],"*","href");
if(href&&!this.fetched[href]){
this.fetched[href]=true;
var data=this.fetchLink(href);
if(data){
this.parseData(data,_1469);
}
}
}
},fetchLink:function(href){
var _146f=OpenLayers.Request.GET({url:href,async:false});
if(_146f){
return _146f.responseText;
}
},parseStyles:function(nodes,_1471){
for(var i=0,len=nodes.length;i<len;i++){
var style=this.parseStyle(nodes[i]);
if(style){
styleName=(_1471.styleBaseUrl||"")+"#"+style.id;
this.styles[styleName]=style;
}
}
},parseStyle:function(node){
var style={};
var types=["LineStyle","PolyStyle","IconStyle","BalloonStyle"];
var type,_1479,_147a,_147b;
for(var i=0,len=types.length;i<len;++i){
type=types[i];
styleTypeNode=this.getElementsByTagNameNS(node,"*",type)[0];
if(!styleTypeNode){
continue;
}
switch(type.toLowerCase()){
case "linestyle":
var color=this.parseProperty(styleTypeNode,"*","color");
if(color){
var _147f=(color.toString()).match(this.regExes.kmlColor);
var alpha=_147f[1];
style["strokeOpacity"]=parseInt(alpha,16)/255;
var b=_147f[2];
var g=_147f[3];
var r=_147f[4];
style["strokeColor"]="#"+r+g+b;
}
var width=this.parseProperty(styleTypeNode,"*","width");
if(width){
style["strokeWidth"]=width;
}
case "polystyle":
var color=this.parseProperty(styleTypeNode,"*","color");
if(color){
var _147f=(color.toString()).match(this.regExes.kmlColor);
var alpha=_147f[1];
style["fillOpacity"]=parseInt(alpha,16)/255;
var b=_147f[2];
var g=_147f[3];
var r=_147f[4];
style["fillColor"]="#"+r+g+b;
}
var fill=this.parseProperty(styleTypeNode,"*","fill");
if(fill=="0"){
style["fillColor"]="none";
}
break;
case "iconstyle":
var scale=parseFloat(this.parseProperty(styleTypeNode,"*","scale")||1);
var width=32*scale;
var _1487=32*scale;
var _1488=this.getElementsByTagNameNS(styleTypeNode,"*","Icon")[0];
if(_1488){
var href=this.parseProperty(_1488,"*","href");
if(href){
var w=this.parseProperty(_1488,"*","w");
var h=this.parseProperty(_1488,"*","h");
var _148c="http://maps.google.com/mapfiles/kml";
if(OpenLayers.String.startsWith(href,_148c)&&!w&&!h){
w=64;
h=64;
scale=scale/2;
}
w=w||h;
h=h||w;
if(w){
width=parseInt(w)*scale;
}
if(h){
_1487=parseInt(h)*scale;
}
var _147f=href.match(this.regExes.kmlIconPalette);
if(_147f){
var _148d=_147f[1];
var _148e=_147f[2];
var x=this.parseProperty(_1488,"*","x");
var y=this.parseProperty(_1488,"*","y");
var posX=x?x/32:0;
var posY=y?(7-y/32):7;
var pos=posY*8+posX;
href="http://maps.google.com/mapfiles/kml/pal"+_148d+"/icon"+pos+_148e;
}
style["graphicOpacity"]=1;
style["externalGraphic"]=href;
}
}
var _1494=this.getElementsByTagNameNS(styleTypeNode,"*","hotSpot")[0];
if(_1494){
var x=parseFloat(_1494.getAttribute("x"));
var y=parseFloat(_1494.getAttribute("y"));
var _1495=_1494.getAttribute("xunits");
if(_1495=="pixels"){
style["graphicXOffset"]=-x*scale;
}else{
if(_1495=="insetPixels"){
style["graphicXOffset"]=-width+(x*scale);
}else{
if(_1495=="fraction"){
style["graphicXOffset"]=-width*x;
}
}
}
var _1496=_1494.getAttribute("yunits");
if(_1496=="pixels"){
style["graphicYOffset"]=-_1487+(y*scale)+1;
}else{
if(_1496=="insetPixels"){
style["graphicYOffset"]=-(y*scale)+1;
}else{
if(_1496=="fraction"){
style["graphicYOffset"]=-_1487*(1-y)+1;
}
}
}
}
style["graphicWidth"]=width;
style["graphicHeight"]=_1487;
break;
case "balloonstyle":
var _1497=OpenLayers.Util.getXmlNodeValue(styleTypeNode);
if(_1497){
style["balloonStyle"]=_1497.replace(this.regExes.straightBracket,"${$1}");
}
break;
default:
}
}
if(!style["strokeColor"]&&style["fillColor"]){
style["strokeColor"]=style["fillColor"];
}
var id=node.getAttribute("id");
if(id&&style){
style.id=id;
}
return style;
},parseStyleMaps:function(nodes,_149a){
for(var i=0,len=nodes.length;i<len;i++){
var node=nodes[i];
var pairs=this.getElementsByTagNameNS(node,"*","Pair");
var id=node.getAttribute("id");
for(var j=0,jlen=pairs.length;j<jlen;j++){
var pair=pairs[j];
var key=this.parseProperty(pair,"*","key");
var _14a4=this.parseProperty(pair,"*","styleUrl");
if(_14a4&&key=="normal"){
this.styles[(_149a.styleBaseUrl||"")+"#"+id]=this.styles[(_149a.styleBaseUrl||"")+_14a4];
}
if(_14a4&&key=="highlight"){
}
}
}
},parseFeatures:function(nodes,_14a6){
var _14a7=new Array(nodes.length);
for(var i=0,len=nodes.length;i<len;i++){
var _14aa=nodes[i];
var _14ab=this.parseFeature.apply(this,[_14aa]);
if(_14ab){
if(this.extractStyles&&_14ab.attributes&&_14ab.attributes.styleUrl){
_14ab.style=this.getStyle(_14ab.attributes.styleUrl,_14a6);
}
if(this.extractStyles){
var _14ac=this.getElementsByTagNameNS(_14aa,"*","Style")[0];
if(_14ac){
var _14ad=this.parseStyle(_14ac);
if(_14ad){
_14ab.style=OpenLayers.Util.extend(_14ab.style,_14ad);
}
}
}
_14a7[i]=_14ab;
}else{
throw "Bad Placemark: "+i;
}
}
this.features=this.features.concat(_14a7);
},parseFeature:function(node){
var order=["MultiGeometry","Polygon","LineString","Point"];
var type,_14b1,_14b2,_14b3;
for(var i=0,len=order.length;i<len;++i){
type=order[i];
this.internalns=node.namespaceURI?node.namespaceURI:this.kmlns;
_14b1=this.getElementsByTagNameNS(node,this.internalns,type);
if(_14b1.length>0){
var _14b3=this.parseGeometry[type.toLowerCase()];
if(_14b3){
_14b2=_14b3.apply(this,[_14b1[0]]);
if(this.internalProjection&&this.externalProjection){
_14b2.transform(this.externalProjection,this.internalProjection);
}
}else{
OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{"geomType":type}));
}
break;
}
}
var _14b6;
if(this.extractAttributes){
_14b6=this.parseAttributes(node);
}
var _14b7=new OpenLayers.Feature.Vector(_14b2,_14b6);
var fid=node.getAttribute("id")||node.getAttribute("name");
if(fid!=null){
_14b7.fid=fid;
}
return _14b7;
},getStyle:function(_14b9,_14ba){
var _14bb=OpenLayers.Util.removeTail(_14b9);
var _14bc=OpenLayers.Util.extend({},_14ba);
_14bc.depth++;
_14bc.styleBaseUrl=_14bb;
if(!this.styles[_14b9]&&!OpenLayers.String.startsWith(_14b9,"#")&&_14bc.depth<=this.maxDepth&&!this.fetched[_14bb]){
var data=this.fetchLink(_14bb);
if(data){
this.parseData(data,_14bc);
}
}
var style=OpenLayers.Util.extend({},this.styles[_14b9]);
return style;
},parseGeometry:{point:function(node){
var _14c0=this.getElementsByTagNameNS(node,this.internalns,"coordinates");
var _14c1=[];
if(_14c0.length>0){
var _14c2=_14c0[0].firstChild.nodeValue;
_14c2=_14c2.replace(this.regExes.removeSpace,"");
_14c1=_14c2.split(",");
}
var point=null;
if(_14c1.length>1){
if(_14c1.length==2){
_14c1[2]=null;
}
point=new OpenLayers.Geometry.Point(_14c1[0],_14c1[1],_14c1[2]);
}else{
throw "Bad coordinate string: "+_14c2;
}
return point;
},linestring:function(node,ring){
var _14c6=this.getElementsByTagNameNS(node,this.internalns,"coordinates");
var line=null;
if(_14c6.length>0){
var _14c8=this.getChildValue(_14c6[0]);
_14c8=_14c8.replace(this.regExes.trimSpace,"");
_14c8=_14c8.replace(this.regExes.trimComma,",");
var _14c9=_14c8.split(this.regExes.splitSpace);
var _14ca=_14c9.length;
var _14cb=new Array(_14ca);
var _14cc,_14cd;
for(var i=0;i<_14ca;++i){
_14cc=_14c9[i].split(",");
_14cd=_14cc.length;
if(_14cd>1){
if(_14cc.length==2){
_14cc[2]=null;
}
_14cb[i]=new OpenLayers.Geometry.Point(_14cc[0],_14cc[1],_14cc[2]);
}else{
throw "Bad LineString point coordinates: "+_14c9[i];
}
}
if(_14ca){
if(ring){
line=new OpenLayers.Geometry.LinearRing(_14cb);
}else{
line=new OpenLayers.Geometry.LineString(_14cb);
}
}else{
throw "Bad LineString coordinates: "+_14c8;
}
}
return line;
},polygon:function(node){
var _14d0=this.getElementsByTagNameNS(node,this.internalns,"LinearRing");
var _14d1=_14d0.length;
var _14d2=new Array(_14d1);
if(_14d1>0){
var ring;
for(var i=0,len=_14d0.length;i<len;++i){
ring=this.parseGeometry.linestring.apply(this,[_14d0[i],true]);
if(ring){
_14d2[i]=ring;
}else{
throw "Bad LinearRing geometry: "+i;
}
}
}
return new OpenLayers.Geometry.Polygon(_14d2);
},multigeometry:function(node){
var child,_14d8;
var parts=[];
var _14da=node.childNodes;
for(var i=0,len=_14da.length;i<len;++i){
child=_14da[i];
if(child.nodeType==1){
var type=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;
var _14d8=this.parseGeometry[type.toLowerCase()];
if(_14d8){
parts.push(_14d8.apply(this,[child]));
}
}
}
return new OpenLayers.Geometry.Collection(parts);
}},parseAttributes:function(node){
var _14df={};
var _14e0=node.getElementsByTagName("ExtendedData");
if(_14e0.length){
_14df=this.parseExtendedData(_14e0[0]);
}
var child,_14e2,_14e3;
var _14e4=node.childNodes;
for(var i=0,len=_14e4.length;i<len;++i){
child=_14e4[i];
if(child.nodeType==1){
_14e2=child.childNodes;
if(_14e2.length==1||_14e2.length==3){
var _14e3;
switch(_14e2.length){
case 1:
_14e3=_14e2[0];
break;
case 3:
default:
_14e3=_14e2[1];
break;
}
if(_14e3.nodeType==3||_14e3.nodeType==4){
var name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;
var value=OpenLayers.Util.getXmlNodeValue(_14e3);
if(value){
value=value.replace(this.regExes.trimSpace,"");
_14df[name]=value;
}
}
}
}
}
return _14df;
},parseExtendedData:function(node){
var _14ea={};
var _14eb=node.getElementsByTagName("Data");
for(var i=0,len=_14eb.length;i<len;i++){
var data=_14eb[i];
var key=data.getAttribute("name");
var ed={};
var _14f1=data.getElementsByTagName("value");
if(_14f1.length){
ed["value"]=this.getChildValue(_14f1[0]);
}
var _14f2=data.getElementsByTagName("displayName");
if(_14f2.length){
ed["displayName"]=this.getChildValue(_14f2[0]);
}
_14ea[key]=ed;
}
return _14ea;
},parseProperty:function(_14f3,_14f4,_14f5){
var value;
var _14f7=this.getElementsByTagNameNS(_14f3,_14f4,_14f5);
try{
value=OpenLayers.Util.getXmlNodeValue(_14f7[0]);
}
catch(e){
value=null;
}
return value;
},write:function(_14f8){
if(!(_14f8 instanceof Array)){
_14f8=[_14f8];
}
var kml=this.createElementNS(this.kmlns,"kml");
var _14fa=this.createFolderXML();
for(var i=0,len=_14f8.length;i<len;++i){
_14fa.appendChild(this.createPlacemarkXML(_14f8[i]));
}
kml.appendChild(_14fa);
return OpenLayers.Format.XML.prototype.write.apply(this,[kml]);
},createFolderXML:function(){
var _14fd=this.createElementNS(this.kmlns,"name");
var _14fe=this.createTextNode(this.foldersName);
_14fd.appendChild(_14fe);
var _14ff=this.createElementNS(this.kmlns,"description");
var _1500=this.createTextNode(this.foldersDesc);
_14ff.appendChild(_1500);
var _1501=this.createElementNS(this.kmlns,"Folder");
_1501.appendChild(_14fd);
_1501.appendChild(_14ff);
return _1501;
},createPlacemarkXML:function(_1502){
var _1503=this.createElementNS(this.kmlns,"name");
var name=(_1502.attributes.name)?_1502.attributes.name:_1502.id;
_1503.appendChild(this.createTextNode(name));
var _1505=this.createElementNS(this.kmlns,"description");
var desc=(_1502.attributes.description)?_1502.attributes.description:this.placemarksDesc;
_1505.appendChild(this.createTextNode(desc));
var _1507=this.createElementNS(this.kmlns,"Placemark");
if(_1502.fid!=null){
_1507.setAttribute("id",_1502.fid);
}
_1507.appendChild(_1503);
_1507.appendChild(_1505);
var _1508=this.buildGeometryNode(_1502.geometry);
_1507.appendChild(_1508);
return _1507;
},buildGeometryNode:function(_1509){
if(this.internalProjection&&this.externalProjection){
_1509=_1509.clone();
_1509.transform(this.internalProjection,this.externalProjection);
}
var _150a=_1509.CLASS_NAME;
var type=_150a.substring(_150a.lastIndexOf(".")+1);
var _150c=this.buildGeometry[type.toLowerCase()];
var node=null;
if(_150c){
node=_150c.apply(this,[_1509]);
}
return node;
},buildGeometry:{point:function(_150e){
var kml=this.createElementNS(this.kmlns,"Point");
kml.appendChild(this.buildCoordinatesNode(_150e));
return kml;
},multipoint:function(_1510){
return this.buildGeometry.collection.apply(this,[_1510]);
},linestring:function(_1511){
var kml=this.createElementNS(this.kmlns,"LineString");
kml.appendChild(this.buildCoordinatesNode(_1511));
return kml;
},multilinestring:function(_1513){
return this.buildGeometry.collection.apply(this,[_1513]);
},linearring:function(_1514){
var kml=this.createElementNS(this.kmlns,"LinearRing");
kml.appendChild(this.buildCoordinatesNode(_1514));
return kml;
},polygon:function(_1516){
var kml=this.createElementNS(this.kmlns,"Polygon");
var rings=_1516.components;
var _1519,_151a,type;
for(var i=0,len=rings.length;i<len;++i){
type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";
_1519=this.createElementNS(this.kmlns,type);
_151a=this.buildGeometry.linearring.apply(this,[rings[i]]);
_1519.appendChild(_151a);
kml.appendChild(_1519);
}
return kml;
},multipolygon:function(_151e){
return this.buildGeometry.collection.apply(this,[_151e]);
},collection:function(_151f){
var kml=this.createElementNS(this.kmlns,"MultiGeometry");
var child;
for(var i=0,len=_151f.components.length;i<len;++i){
child=this.buildGeometryNode.apply(this,[_151f.components[i]]);
if(child){
kml.appendChild(child);
}
}
return kml;
}},buildCoordinatesNode:function(_1524){
var _1525=this.createElementNS(this.kmlns,"coordinates");
var path;
var _1527=_1524.components;
if(_1527){
var point;
var _1529=_1527.length;
var parts=new Array(_1529);
for(var i=0;i<_1529;++i){
point=_1527[i];
parts[i]=point.x+","+point.y;
}
path=parts.join(" ");
}else{
path=_1524.x+","+_1524.y;
}
var _152c=this.createTextNode(path);
_1525.appendChild(_152c);
return _1525;
},CLASS_NAME:"OpenLayers.Format.KML"});
OpenLayers.Format.OSM=OpenLayers.Class(OpenLayers.Format.XML,{checkTags:false,interestingTagsExclude:null,areaTags:null,initialize:function(_152d){
var _152e={"interestingTagsExclude":["source","source_ref","source:ref","history","attribution","created_by"],"areaTags":["area","building","leisure","tourism","ruins","historic","landuse","military","natural","sport"]};
_152e=OpenLayers.Util.extend(_152e,_152d);
var _152f={};
for(var i=0;i<_152e.interestingTagsExclude.length;i++){
_152f[_152e.interestingTagsExclude[i]]=true;
}
_152e.interestingTagsExclude=_152f;
var area={};
for(var i=0;i<_152e.areaTags.length;i++){
area[_152e.areaTags[i]]=true;
}
_152e.areaTags=area;
OpenLayers.Format.XML.prototype.initialize.apply(this,[_152e]);
},read:function(doc){
if(typeof doc=="string"){
doc=OpenLayers.Format.XML.prototype.read.apply(this,[doc]);
}
var nodes=this.getNodes(doc);
var ways=this.getWays(doc);
var _1535=new Array(ways.length);
for(var i=0;i<ways.length;i++){
var _1537=new Array(ways[i].nodes.length);
var poly=this.isWayArea(ways[i])?1:0;
for(var j=0;j<ways[i].nodes.length;j++){
var node=nodes[ways[i].nodes[j]];
var point=new OpenLayers.Geometry.Point(node.lon,node.lat);
point.osm_id=parseInt(ways[i].nodes[j]);
_1537[j]=point;
node.used=true;
}
var _153c=null;
if(poly){
_153c=new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(_1537));
}else{
_153c=new OpenLayers.Geometry.LineString(_1537);
}
if(this.internalProjection&&this.externalProjection){
_153c.transform(this.externalProjection,this.internalProjection);
}
var feat=new OpenLayers.Feature.Vector(_153c,ways[i].tags);
feat.osm_id=parseInt(ways[i].id);
feat.fid="way."+feat.osm_id;
_1535[i]=feat;
}
for(var _153e in nodes){
var node=nodes[_153e];
if(!node.used||this.checkTags){
var tags=null;
if(this.checkTags){
var _1540=this.getTags(node.node,true);
if(node.used&&!_1540[1]){
continue;
}
tags=_1540[0];
}else{
tags=this.getTags(node.node);
}
var feat=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(node["lon"],node["lat"]),tags);
if(this.internalProjection&&this.externalProjection){
feat.geometry.transform(this.externalProjection,this.internalProjection);
}
feat.osm_id=parseInt(_153e);
feat.fid="node."+feat.osm_id;
_1535.push(feat);
}
node.node=null;
}
return _1535;
},getNodes:function(doc){
var _1542=doc.getElementsByTagName("node");
var nodes={};
for(var i=0;i<_1542.length;i++){
var node=_1542[i];
var id=node.getAttribute("id");
nodes[id]={"lat":node.getAttribute("lat"),"lon":node.getAttribute("lon"),"node":node};
}
return nodes;
},getWays:function(doc){
var _1548=doc.getElementsByTagName("way");
var _1549=[];
for(var i=0;i<_1548.length;i++){
var way=_1548[i];
var _154c={id:way.getAttribute("id")};
_154c.tags=this.getTags(way);
var _154d=way.getElementsByTagName("nd");
_154c.nodes=new Array(_154d.length);
for(var j=0;j<_154d.length;j++){
_154c.nodes[j]=_154d[j].getAttribute("ref");
}
_1549.push(_154c);
}
return _1549;
},getTags:function(_154f,_1550){
var _1551=_154f.getElementsByTagName("tag");
var tags={};
var _1553=false;
for(var j=0;j<_1551.length;j++){
var key=_1551[j].getAttribute("k");
tags[key]=_1551[j].getAttribute("v");
if(_1550){
if(!this.interestingTagsExclude[key]){
_1553=true;
}
}
}
return _1550?[tags,_1553]:tags;
},isWayArea:function(way){
var _1557=false;
var _1558=false;
if(way.nodes[0]==way.nodes[way.nodes.length-1]){
_1557=true;
}
if(this.checkTags){
for(var key in way.tags){
if(this.areaTags[key]){
_1558=true;
break;
}
}
}
return _1557&&(this.checkTags?_1558:true);
},write:function(_155a){
if(!(_155a instanceof Array)){
_155a=[_155a];
}
this.osm_id=1;
this.created_nodes={};
var _155b=this.createElementNS(null,"osm");
_155b.setAttribute("version","0.5");
_155b.setAttribute("generator","OpenLayers "+OpenLayers.VERSION_NUMBER);
for(var i=_155a.length-1;i>=0;i--){
var nodes=this.createFeatureNodes(_155a[i]);
for(var j=0;j<nodes.length;j++){
_155b.appendChild(nodes[j]);
}
}
return OpenLayers.Format.XML.prototype.write.apply(this,[_155b]);
},createFeatureNodes:function(_155f){
var nodes=[];
var _1561=_155f.geometry.CLASS_NAME;
var type=_1561.substring(_1561.lastIndexOf(".")+1);
type=type.toLowerCase();
var _1563=this.createXML[type];
if(_1563){
nodes=_1563.apply(this,[_155f]);
}
return nodes;
},createXML:{"point":function(point){
var id=null;
var _1566=point.geometry?point.geometry:point;
var _1567=false;
if(point.osm_id){
id=point.osm_id;
if(this.created_nodes[id]){
_1567=true;
}
}else{
id=-this.osm_id;
this.osm_id++;
}
if(_1567){
node=this.created_nodes[id];
}else{
var node=this.createElementNS(null,"node");
}
this.created_nodes[id]=node;
node.setAttribute("id",id);
node.setAttribute("lon",_1566.x);
node.setAttribute("lat",_1566.y);
if(point.attributes){
this.serializeTags(point,node);
}
this.setState(point,node);
return _1567?[]:[node];
},linestring:function(_1569){
var nodes=[];
var _156b=_1569.geometry;
if(_1569.osm_id){
id=_1569.osm_id;
}else{
id=-this.osm_id;
this.osm_id++;
}
var way=this.createElementNS(null,"way");
way.setAttribute("id",id);
for(var i=0;i<_156b.components.length;i++){
var node=this.createXML["point"].apply(this,[_156b.components[i]]);
if(node.length){
node=node[0];
var _156f=node.getAttribute("id");
nodes.push(node);
}else{
_156f=_156b.components[i].osm_id;
node=this.created_nodes[_156f];
}
this.setState(_1569,node);
var _1570=this.createElementNS(null,"nd");
_1570.setAttribute("ref",_156f);
way.appendChild(_1570);
}
this.serializeTags(_1569,way);
nodes.push(way);
return nodes;
},polygon:function(_1571){
var attrs=OpenLayers.Util.extend({"area":"yes"},_1571.attributes);
var feat=new OpenLayers.Feature.Vector(_1571.geometry.components[0],attrs);
feat.osm_id=_1571.osm_id;
return this.createXML["linestring"].apply(this,[feat]);
}},serializeTags:function(_1574,node){
for(var key in _1574.attributes){
var tag=this.createElementNS(null,"tag");
tag.setAttribute("k",key);
tag.setAttribute("v",_1574.attributes[key]);
node.appendChild(tag);
}
},setState:function(_1578,node){
if(_1578.state){
var state=null;
switch(_1578.state){
case OpenLayers.State.UPDATE:
state="modify";
case OpenLayers.State.DELETE:
state="delete";
}
if(state){
node.setAttribute("action",state);
}
}
},CLASS_NAME:"OpenLayers.Format.OSM"});
OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],initialize:function(_157b){
OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);
},CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"});
OpenLayers.Handler.Polygon=OpenLayers.Class(OpenLayers.Handler.Path,{polygon:null,initialize:function(_157c,_157d,_157e){
OpenLayers.Handler.Path.prototype.initialize.apply(this,arguments);
},createFeature:function(pixel){
var _1580=this.control.map.getLonLatFromPixel(pixel);
this.point=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(_1580.lon,_1580.lat));
this.line=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LinearRing([this.point.geometry]));
this.polygon=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon([this.line.geometry]));
this.callback("create",[this.point.geometry,this.getSketch()]);
this.point.geometry.clearBounds();
this.layer.addFeatures([this.polygon,this.point],{silent:true});
},destroyFeature:function(){
OpenLayers.Handler.Path.prototype.destroyFeature.apply(this);
this.polygon=null;
},drawFeature:function(){
this.layer.drawFeature(this.polygon,this.style);
this.layer.drawFeature(this.point,this.style);
},getSketch:function(){
return this.polygon;
},getGeometry:function(){
var _1581=this.polygon&&this.polygon.geometry;
if(_1581&&this.multi){
_1581=new OpenLayers.Geometry.MultiPolygon([_1581]);
}
return _1581;
},dblclick:function(evt){
if(!this.freehandMode(evt)){
var index=this.line.geometry.components.length-2;
this.line.geometry.removeComponent(this.line.geometry.components[index]);
this.removePoint();
this.finalize();
}
return false;
},CLASS_NAME:"OpenLayers.Handler.Polygon"});
OpenLayers.Control.EditingToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(layer,_1585){
OpenLayers.Control.Panel.prototype.initialize.apply(this,[_1585]);
this.addControls([new OpenLayers.Control.Navigation()]);
var _1586=[new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Point,{"displayClass":"olControlDrawFeaturePoint"}),new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Path,{"displayClass":"olControlDrawFeaturePath"}),new OpenLayers.Control.DrawFeature(layer,OpenLayers.Handler.Polygon,{"displayClass":"olControlDrawFeaturePolygon"})];
this.addControls(_1586);
},draw:function(){
var div=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);
this.activateControl(this.controls[0]);
return div;
},CLASS_NAME:"OpenLayers.Control.EditingToolbar"});
OpenLayers.Format.ArcXML=OpenLayers.Class(OpenLayers.Format.XML,{fontStyleKeys:["antialiasing","blockout","font","fontcolor","fontsize","fontstyle","glowing","interval","outline","printmode","shadow","transparency"],request:null,response:null,initialize:function(_1588){
this.request=new OpenLayers.Format.ArcXML.Request();
this.response=new OpenLayers.Format.ArcXML.Response();
if(_1588){
if(_1588.requesttype=="feature"){
this.request.get_image=null;
var qry=this.request.get_feature.query;
this.addCoordSys(qry.featurecoordsys,_1588.featureCoordSys);
this.addCoordSys(qry.filtercoordsys,_1588.filterCoordSys);
if(_1588.polygon){
qry.isspatial=true;
qry.spatialfilter.polygon=_1588.polygon;
}else{
if(_1588.envelope){
qry.isspatial=true;
qry.spatialfilter.envelope={minx:0,miny:0,maxx:0,maxy:0};
this.parseEnvelope(qry.spatialfilter.envelope,_1588.envelope);
}
}
}else{
if(_1588.requesttype=="image"){
this.request.get_feature=null;
var props=this.request.get_image.properties;
this.parseEnvelope(props.envelope,_1588.envelope);
this.addLayers(props.layerlist,_1588.layers);
this.addImageSize(props.imagesize,_1588.tileSize);
this.addCoordSys(props.featurecoordsys,_1588.featureCoordSys);
this.addCoordSys(props.filtercoordsys,_1588.filterCoordSys);
}else{
this.request=null;
}
}
}
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1588]);
},parseEnvelope:function(env,arr){
if(arr&&arr.length==4){
env.minx=arr[0];
env.miny=arr[1];
env.maxx=arr[2];
env.maxy=arr[3];
}
},addLayers:function(ll,lyrs){
for(var lind=0,len=lyrs.length;lind<len;lind++){
ll.push(lyrs[lind]);
}
},addImageSize:function(_1591,_1592){
if(_1592!==null){
_1591.width=_1592.w;
_1591.height=_1592.h;
_1591.printwidth=_1592.w;
_1591.printheight=_1592.h;
}
},addCoordSys:function(_1593,fsys){
if(typeof fsys=="string"){
_1593.id=parseInt(fsys);
_1593.string=fsys;
}else{
if(typeof fsys=="object"&&fsys.proj!==null){
_1593.id=fsys.proj.srsProjNumber;
_1593.string=fsys.proj.srsCode;
}else{
_1593=fsys;
}
}
},iserror:function(data){
var ret=null;
if(!data){
ret=(this.response.error!=="");
}else{
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
var _1597=data.documentElement.getElementsByTagName("ERROR");
ret=(_1597!==null&&_1597.length>0);
}
return ret;
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var _1599=null;
if(data&&data.documentElement){
if(data.documentElement.nodeName=="ARCXML"){
_1599=data.documentElement;
}else{
_1599=data.documentElement.getElementsByTagName("ARCXML")[0];
}
}
if(!_1599){
var error,_159b;
try{
error=data.firstChild.nodeValue;
_159b=data.firstChild.childNodes[1].firstChild.nodeValue;
}
catch(err){
}
throw {message:"Error parsing the ArcXML request",error:error,source:_159b};
}
var _159c=this.parseResponse(_1599);
return _159c;
},write:function(_159d){
if(!_159d){
_159d=this.request;
}
var root=this.createElementNS("","ARCXML");
root.setAttribute("version","1.1");
var _159f=this.createElementNS("","REQUEST");
if(_159d.get_image!=null){
var _15a0=this.createElementNS("","GET_IMAGE");
_159f.appendChild(_15a0);
var _15a1=this.createElementNS("","PROPERTIES");
_15a0.appendChild(_15a1);
var props=_159d.get_image.properties;
if(props.featurecoordsys!=null){
var feat=this.createElementNS("","FEATURECOORDSYS");
_15a1.appendChild(feat);
if(props.featurecoordsys.id===0){
feat.setAttribute("string",props.featurecoordsys["string"]);
}else{
feat.setAttribute("id",props.featurecoordsys.id);
}
}
if(props.filtercoordsys!=null){
var filt=this.createElementNS("","FILTERCOORDSYS");
_15a1.appendChild(filt);
if(props.filtercoordsys.id===0){
filt.setAttribute("string",props.filtercoordsys.string);
}else{
filt.setAttribute("id",props.filtercoordsys.id);
}
}
if(props.envelope!=null){
var env=this.createElementNS("","ENVELOPE");
_15a1.appendChild(env);
env.setAttribute("minx",props.envelope.minx);
env.setAttribute("miny",props.envelope.miny);
env.setAttribute("maxx",props.envelope.maxx);
env.setAttribute("maxy",props.envelope.maxy);
}
var _15a6=this.createElementNS("","IMAGESIZE");
_15a1.appendChild(_15a6);
_15a6.setAttribute("height",props.imagesize.height);
_15a6.setAttribute("width",props.imagesize.width);
if(props.imagesize.height!=props.imagesize.printheight||props.imagesize.width!=props.imagesize.printwidth){
_15a6.setAttribute("printheight",props.imagesize.printheight);
_15a6.setArrtibute("printwidth",props.imagesize.printwidth);
}
if(props.background!=null){
var _15a7=this.createElementNS("","BACKGROUND");
_15a1.appendChild(_15a7);
_15a7.setAttribute("color",props.background.color.r+","+props.background.color.g+","+props.background.color.b);
if(props.background.transcolor!==null){
_15a7.setAttribute("transcolor",props.background.transcolor.r+","+props.background.transcolor.g+","+props.background.transcolor.b);
}
}
if(props.layerlist!=null&&props.layerlist.length>0){
var _15a8=this.createElementNS("","LAYERLIST");
_15a1.appendChild(_15a8);
for(var ld=0;ld<props.layerlist.length;ld++){
var ldef=this.createElementNS("","LAYERDEF");
_15a8.appendChild(ldef);
ldef.setAttribute("id",props.layerlist[ld].id);
ldef.setAttribute("visible",props.layerlist[ld].visible);
if(typeof props.layerlist[ld].query=="object"){
var query=props.layerlist[ld].query;
if(query.where.length<0){
continue;
}
var _15ac=null;
if(typeof query.spatialfilter=="boolean"&&query.spatialfilter){
_15ac=this.createElementNS("","SPATIALQUERY");
}else{
_15ac=this.createElementNS("","QUERY");
}
_15ac.setAttribute("where",query.where);
if(typeof query.accuracy=="number"&&query.accuracy>0){
_15ac.setAttribute("accuracy",query.accuracy);
}
if(typeof query.featurelimit=="number"&&query.featurelimit<2000){
_15ac.setAttribute("featurelimit",query.featurelimit);
}
if(typeof query.subfields=="string"&&query.subfields!="#ALL#"){
_15ac.setAttribute("subfields",query.subfields);
}
if(typeof query.joinexpression=="string"&&query.joinexpression.length>0){
_15ac.setAttribute("joinexpression",query.joinexpression);
}
if(typeof query.jointables=="string"&&query.jointables.length>0){
_15ac.setAttribute("jointables",query.jointables);
}
ldef.appendChild(_15ac);
}
if(typeof props.layerlist[ld].renderer=="object"){
this.addRenderer(ldef,props.layerlist[ld].renderer);
}
}
}
}else{
if(_159d.get_feature!=null){
var _15a0=this.createElementNS("","GET_FEATURES");
_15a0.setAttribute("outputmode","newxml");
_15a0.setAttribute("checkesc","true");
if(_159d.get_feature.geometry){
_15a0.setAttribute("geometry",_159d.get_feature.geometry);
}else{
_15a0.setAttribute("geometry","false");
}
if(_159d.get_feature.compact){
_15a0.setAttribute("compact",_159d.get_feature.compact);
}
if(_159d.get_feature.featurelimit=="number"){
_15a0.setAttribute("featurelimit",_159d.get_feature.featurelimit);
}
_15a0.setAttribute("globalenvelope","true");
_159f.appendChild(_15a0);
if(_159d.get_feature.layer!=null&&_159d.get_feature.layer.length>0){
var _15ad=this.createElementNS("","LAYER");
_15ad.setAttribute("id",_159d.get_feature.layer);
_15a0.appendChild(_15ad);
}
var _15ae=_159d.get_feature.query;
if(_15ae!=null){
var qElem=null;
if(_15ae.isspatial){
qElem=this.createElementNS("","SPATIALQUERY");
}else{
qElem=this.createElementNS("","QUERY");
}
_15a0.appendChild(qElem);
if(typeof _15ae.accuracy=="number"){
qElem.setAttribute("accuracy",_15ae.accuracy);
}
if(_15ae.featurecoordsys!=null){
var _15b0=this.createElementNS("","FEATURECOORDSYS");
if(_15ae.featurecoordsys.id==0){
_15b0.setAttribute("string",_15ae.featurecoordsys.string);
}else{
_15b0.setAttribute("id",_15ae.featurecoordsys.id);
}
qElem.appendChild(_15b0);
}
if(_15ae.filtercoordsys!=null){
var _15b1=this.createElementNS("","FILTERCOORDSYS");
if(_15ae.filtercoordsys.id===0){
_15b1.setAttribute("string",_15ae.filtercoordsys.string);
}else{
_15b1.setAttribute("id",_15ae.filtercoordsys.id);
}
qElem.appendChild(_15b1);
}
if(_15ae.buffer>0){
var _15b2=this.createElementNS("","BUFFER");
_15b2.setAttribute("distance",_15ae.buffer);
qElem.appendChild(_15b2);
}
if(_15ae.isspatial){
var _15b3=this.createElementNS("","SPATIALFILTER");
_15b3.setAttribute("relation",_15ae.spatialfilter.relation);
qElem.appendChild(_15b3);
if(_15ae.spatialfilter.envelope){
var _15b4=this.createElementNS("","ENVELOPE");
_15b4.setAttribute("minx",_15ae.spatialfilter.envelope.minx);
_15b4.setAttribute("miny",_15ae.spatialfilter.envelope.miny);
_15b4.setAttribute("maxx",_15ae.spatialfilter.envelope.maxx);
_15b4.setAttribute("maxy",_15ae.spatialfilter.envelope.maxy);
_15b3.appendChild(_15b4);
}else{
if(typeof _15ae.spatialfilter.polygon=="object"){
_15b3.appendChild(this.writePolygonGeometry(_15ae.spatialfilter.polygon));
}
}
}
if(_15ae.where!=null&&_15ae.where.length>0){
qElem.setAttribute("where",_15ae.where);
}
}
}
}
root.appendChild(_159f);
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},addGroupRenderer:function(ldef,_15b6){
var _15b7=this.createElementNS("","GROUPRENDERER");
ldef.appendChild(_15b7);
for(var rind=0;rind<_15b6.length;rind++){
var _15b9=_15b6[rind];
this.addRenderer(_15b7,_15b9);
}
},addRenderer:function(_15ba,_15bb){
if(_15bb instanceof Array){
this.addGroupRenderer(_15ba,_15bb);
}else{
var _15bc=this.createElementNS("",_15bb.type.toUpperCase()+"RENDERER");
_15ba.appendChild(_15bc);
if(_15bc.tagName=="VALUEMAPRENDERER"){
this.addValueMapRenderer(_15bc,_15bb);
}else{
if(_15bc.tagName=="VALUEMAPLABELRENDERER"){
this.addValueMapLabelRenderer(_15bc,_15bb);
}else{
if(_15bc.tagName=="SIMPLELABELRENDERER"){
this.addSimpleLabelRenderer(_15bc,_15bb);
}else{
if(_15bc.tagName=="SCALEDEPENDENTRENDERER"){
this.addScaleDependentRenderer(_15bc,_15bb);
}
}
}
}
}
},addScaleDependentRenderer:function(_15bd,_15be){
if(typeof _15be.lower=="string"||typeof _15be.lower=="number"){
_15bd.setAttribute("lower",_15be.lower);
}
if(typeof _15be.upper=="string"||typeof _15be.upper=="number"){
_15bd.setAttribute("upper",_15be.upper);
}
this.addRenderer(_15bd,_15be.renderer);
},addValueMapLabelRenderer:function(_15bf,_15c0){
_15bf.setAttribute("lookupfield",_15c0.lookupfield);
_15bf.setAttribute("labelfield",_15c0.labelfield);
if(typeof _15c0.exacts=="object"){
for(var ext=0,_15c2=_15c0.exacts.length;ext<_15c2;ext++){
var exact=_15c0.exacts[ext];
var eelem=this.createElementNS("","EXACT");
if(typeof exact.value=="string"){
eelem.setAttribute("value",exact.value);
}
if(typeof exact.label=="string"){
eelem.setAttribute("label",exact.label);
}
if(typeof exact.method=="string"){
eelem.setAttribute("method",exact.method);
}
_15bf.appendChild(eelem);
if(typeof exact.symbol=="object"){
var selem=null;
if(exact.symbol.type=="text"){
selem=this.createElementNS("","TEXTSYMBOL");
}
if(selem!=null){
var keys=this.fontStyleKeys;
for(var i=0,len=keys.length;i<len;i++){
var key=keys[i];
if(exact.symbol[key]){
selem.setAttribute(key,exact.symbol[key]);
}
}
eelem.appendChild(selem);
}
}
}
}
},addValueMapRenderer:function(_15ca,_15cb){
_15ca.setAttribute("lookupfield",_15cb.lookupfield);
if(typeof _15cb.ranges=="object"){
for(var rng=0,_15cd=_15cb.ranges.length;rng<_15cd;rng++){
var range=_15cb.ranges[rng];
var relem=this.createElementNS("","RANGE");
relem.setAttribute("lower",range.lower);
relem.setAttribute("upper",range.upper);
_15ca.appendChild(relem);
if(typeof range.symbol=="object"){
var selem=null;
if(range.symbol.type=="simplepolygon"){
selem=this.createElementNS("","SIMPLEPOLYGONSYMBOL");
}
if(selem!=null){
if(typeof range.symbol.boundarycolor=="string"){
selem.setAttribute("boundarycolor",range.symbol.boundarycolor);
}
if(typeof range.symbol.fillcolor=="string"){
selem.setAttribute("fillcolor",range.symbol.fillcolor);
}
if(typeof range.symbol.filltransparency=="number"){
selem.setAttribute("filltransparency",range.symbol.filltransparency);
}
relem.appendChild(selem);
}
}
}
}else{
if(typeof _15cb.exacts=="object"){
for(var ext=0,_15d2=_15cb.exacts.length;ext<_15d2;ext++){
var exact=_15cb.exacts[ext];
var eelem=this.createElementNS("","EXACT");
if(typeof exact.value=="string"){
eelem.setAttribute("value",exact.value);
}
if(typeof exact.label=="string"){
eelem.setAttribute("label",exact.label);
}
if(typeof exact.method=="string"){
eelem.setAttribute("method",exact.method);
}
_15ca.appendChild(eelem);
if(typeof exact.symbol=="object"){
var selem=null;
if(exact.symbol.type=="simplemarker"){
selem=this.createElementNS("","SIMPLEMARKERSYMBOL");
}
if(selem!=null){
if(typeof exact.symbol.antialiasing=="string"){
selem.setAttribute("antialiasing",exact.symbol.antialiasing);
}
if(typeof exact.symbol.color=="string"){
selem.setAttribute("color",exact.symbol.color);
}
if(typeof exact.symbol.outline=="string"){
selem.setAttribute("outline",exact.symbol.outline);
}
if(typeof exact.symbol.overlap=="string"){
selem.setAttribute("overlap",exact.symbol.overlap);
}
if(typeof exact.symbol.shadow=="string"){
selem.setAttribute("shadow",exact.symbol.shadow);
}
if(typeof exact.symbol.transparency=="number"){
selem.setAttribute("transparency",exact.symbol.transparency);
}
if(typeof exact.symbol.usecentroid=="string"){
selem.setAttribute("usecentroid",exact.symbol.usecentroid);
}
if(typeof exact.symbol.width=="number"){
selem.setAttribute("width",exact.symbol.width);
}
eelem.appendChild(selem);
}
}
}
}
}
},addSimpleLabelRenderer:function(_15d5,_15d6){
_15d5.setAttribute("field",_15d6.field);
var keys=["featureweight","howmanylabels","labelbufferratio","labelpriorities","labelweight","linelabelposition","rotationalangles"];
for(var i=0,len=keys.length;i<len;i++){
var key=keys[i];
if(_15d6[key]){
_15d5.setAttribute(key,_15d6[key]);
}
}
if(_15d6.symbol.type=="text"){
var _15db=_15d6.symbol;
var selem=this.createElementNS("","TEXTSYMBOL");
_15d5.appendChild(selem);
var keys=this.fontStyleKeys;
for(var i=0,len=keys.length;i<len;i++){
var key=keys[i];
if(_15db[key]){
selem.setAttribute(key,_15d6[key]);
}
}
}
},writePolygonGeometry:function(_15dd){
if(!(_15dd instanceof OpenLayers.Geometry.Polygon)){
throw {message:"Cannot write polygon geometry to ArcXML with an "+_15dd.CLASS_NAME+" object.",geometry:_15dd};
}
var _15de=this.createElementNS("","POLYGON");
for(var ln=0,lnlen=_15dd.components.length;ln<lnlen;ln++){
var ring=_15dd.components[ln];
var _15e2=this.createElementNS("","RING");
for(var rn=0,rnlen=ring.components.length;rn<rnlen;rn++){
var point=ring.components[rn];
var _15e6=this.createElementNS("","POINT");
_15e6.setAttribute("x",point.x);
_15e6.setAttribute("y",point.y);
_15e2.appendChild(_15e6);
}
_15de.appendChild(_15e2);
}
return _15de;
},parseResponse:function(data){
if(typeof data=="string"){
var _15e8=new OpenLayers.Format.XML();
data=_15e8.read(data);
}
var _15e9=new OpenLayers.Format.ArcXML.Response();
var _15ea=data.getElementsByTagName("ERROR");
if(_15ea!=null&&_15ea.length>0){
_15e9.error=this.getChildValue(_15ea,"Unknown error.");
}else{
var _15eb=data.getElementsByTagName("RESPONSE");
if(_15eb==null||_15eb.length==0){
_15e9.error="No RESPONSE tag found in ArcXML response.";
return _15e9;
}
var rtype=_15eb[0].firstChild.nodeName;
if(rtype=="#text"){
rtype=_15eb[0].firstChild.nextSibling.nodeName;
}
if(rtype=="IMAGE"){
var _15ed=data.getElementsByTagName("ENVELOPE");
var _15ee=data.getElementsByTagName("OUTPUT");
if(_15ed==null||_15ed.length==0){
_15e9.error="No ENVELOPE tag found in ArcXML response.";
}else{
if(_15ee==null||_15ee.length==0){
_15e9.error="No OUTPUT tag found in ArcXML response.";
}else{
var _15ef=this.parseAttributes(_15ed[0]);
var _15f0=this.parseAttributes(_15ee[0]);
if(typeof _15f0.type=="string"){
_15e9.image={envelope:_15ef,output:{type:_15f0.type,data:this.getChildValue(_15ee[0])}};
}else{
_15e9.image={envelope:_15ef,output:_15f0};
}
}
}
}else{
if(rtype=="FEATURES"){
var _15f1=_15eb[0].getElementsByTagName("FEATURES");
var _15f2=_15f1[0].getElementsByTagName("FEATURECOUNT");
_15e9.features.featurecount=_15f2[0].getAttribute("count");
if(_15e9.features.featurecount>0){
var _15f3=_15f1[0].getElementsByTagName("ENVELOPE");
_15e9.features.envelope=this.parseAttributes(_15f3[0],typeof (0));
var _15f4=_15f1[0].getElementsByTagName("FEATURE");
for(var fn=0;fn<_15f4.length;fn++){
var _15f6=new OpenLayers.Feature.Vector();
var _15f7=_15f4[fn].getElementsByTagName("FIELD");
for(var fdn=0;fdn<_15f7.length;fdn++){
var _15f9=_15f7[fdn].getAttribute("name");
var _15fa=_15f7[fdn].getAttribute("value");
_15f6.attributes[_15f9]=_15fa;
}
var geom=_15f4[fn].getElementsByTagName("POLYGON");
if(geom.length>0){
var ring=geom[0].getElementsByTagName("RING");
var polys=[];
for(var rn=0;rn<ring.length;rn++){
var _15ff=[];
_15ff.push(this.parsePointGeometry(ring[rn]));
var holes=ring[rn].getElementsByTagName("HOLE");
for(var hn=0;hn<holes.length;hn++){
_15ff.push(this.parsePointGeometry(holes[hn]));
}
holes=null;
polys.push(new OpenLayers.Geometry.Polygon(_15ff));
_15ff=null;
}
ring=null;
if(polys.length==1){
_15f6.geometry=polys[0];
}else{
_15f6.geometry=new OpenLayers.Geometry.MultiPolygon(polys);
}
}
_15e9.features.feature.push(_15f6);
}
}
}else{
_15e9.error="Unidentified response type.";
}
}
}
return _15e9;
},parseAttributes:function(node,type){
var _1604={};
for(var attr=0;attr<node.attributes.length;attr++){
if(type=="number"){
_1604[node.attributes[attr].nodeName]=parseFloat(node.attributes[attr].nodeValue);
}else{
_1604[node.attributes[attr].nodeName]=node.attributes[attr].nodeValue;
}
}
return _1604;
},parsePointGeometry:function(node){
var _1607=[];
var _1608=node.getElementsByTagName("COORDS");
if(_1608.length>0){
var _1609=this.getChildValue(_1608[0]);
_1609=_1609.split(/;/);
for(var cn=0;cn<_1609.length;cn++){
var _160b=_1609[cn].split(/ /);
_1607.push(new OpenLayers.Geometry.Point(parseFloat(_160b[0]),parseFloat(_160b[1])));
}
_1608=null;
}else{
var point=node.getElementsByTagName("POINT");
if(point.length>0){
for(var pn=0;pn<point.length;pn++){
_1607.push(new OpenLayers.Geometry.Point(parseFloat(point[pn].getAttribute("x")),parseFloat(point[pn].getAttribute("y"))));
}
}
point=null;
}
return new OpenLayers.Geometry.LinearRing(_1607);
},CLASS_NAME:"OpenLayers.Format.ArcXML"});
OpenLayers.Format.ArcXML.Request=OpenLayers.Class({initialize:function(_160e){
var _160f={get_image:{properties:{background:null,draw:true,envelope:{minx:0,miny:0,maxx:0,maxy:0},featurecoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},filtercoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},imagesize:{height:0,width:0,dpi:96,printheight:0,printwidth:0,scalesymbols:false},layerlist:[],output:{baseurl:"",legendbaseurl:"",legendname:"",legendpath:"",legendurl:"",name:"",path:"",type:"jpg",url:""}}},get_feature:{layer:"",query:{isspatial:false,featurecoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},filtercoordsys:{id:0,string:"",datumtransformid:0,datumtransformstring:""},buffer:0,where:"",spatialfilter:{relation:"envelope_intersection",envelope:null}}},environment:{separators:{cs:" ",ts:";"}},layer:[],workspaces:[]};
return OpenLayers.Util.extend(this,_160f);
},CLASS_NAME:"OpenLayers.Format.ArcXML.Request"});
OpenLayers.Format.ArcXML.Response=OpenLayers.Class({initialize:function(_1610){
var _1611={image:{envelope:null,output:""},features:{featurecount:0,envelope:null,feature:[]},error:""};
return OpenLayers.Util.extend(this,_1611);
},CLASS_NAME:"OpenLayers.Format.ArcXML.Response"});
OpenLayers.Format.GML=OpenLayers.Class(OpenLayers.Format.XML,{featureNS:"http://mapserver.gis.umn.edu/mapserver",featurePrefix:"feature",featureName:"featureMember",layerName:"features",geometryName:"geometry",collectionName:"FeatureCollection",gmlns:"http://www.opengis.net/gml",extractAttributes:true,xy:true,initialize:function(_1612){
this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)};
OpenLayers.Format.XML.prototype.initialize.apply(this,[_1612]);
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
var _1614=this.getElementsByTagNameNS(data.documentElement,this.gmlns,this.featureName);
var _1615=[];
for(var i=0;i<_1614.length;i++){
var _1617=this.parseFeature(_1614[i]);
if(_1617){
_1615.push(_1617);
}
}
return _1615;
},parseFeature:function(node){
var order=["MultiPolygon","Polygon","MultiLineString","LineString","MultiPoint","Point","Envelope","Box"];
var type,_161b,_161c,_161d;
for(var i=0;i<order.length;++i){
type=order[i];
_161b=this.getElementsByTagNameNS(node,this.gmlns,type);
if(_161b.length>0){
var _161d=this.parseGeometry[type.toLowerCase()];
if(_161d){
_161c=_161d.apply(this,[_161b[0]]);
if(this.internalProjection&&this.externalProjection){
_161c.transform(this.externalProjection,this.internalProjection);
}
}else{
OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{"geomType":type}));
}
break;
}
}
var _161f;
if(this.extractAttributes){
_161f=this.parseAttributes(node);
}
var _1620=new OpenLayers.Feature.Vector(_161c,_161f);
_1620.gml={featureType:node.firstChild.nodeName.split(":")[1],featureNS:node.firstChild.namespaceURI,featureNSPrefix:node.firstChild.prefix};
var _1621=node.firstChild;
var fid;
while(_1621){
if(_1621.nodeType==1){
fid=_1621.getAttribute("fid")||_1621.getAttribute("id");
if(fid){
break;
}
}
_1621=_1621.nextSibling;
}
_1620.fid=fid;
return _1620;
},parseGeometry:{point:function(node){
var _1624,_1625;
var _1626=[];
var _1624=this.getElementsByTagNameNS(node,this.gmlns,"pos");
if(_1624.length>0){
_1625=_1624[0].firstChild.nodeValue;
_1625=_1625.replace(this.regExes.trimSpace,"");
_1626=_1625.split(this.regExes.splitSpace);
}
if(_1626.length==0){
_1624=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");
if(_1624.length>0){
_1625=_1624[0].firstChild.nodeValue;
_1625=_1625.replace(this.regExes.removeSpace,"");
_1626=_1625.split(",");
}
}
if(_1626.length==0){
_1624=this.getElementsByTagNameNS(node,this.gmlns,"coord");
if(_1624.length>0){
var xList=this.getElementsByTagNameNS(_1624[0],this.gmlns,"X");
var yList=this.getElementsByTagNameNS(_1624[0],this.gmlns,"Y");
if(xList.length>0&&yList.length>0){
_1626=[xList[0].firstChild.nodeValue,yList[0].firstChild.nodeValue];
}
}
}
if(_1626.length==2){
_1626[2]=null;
}
if(this.xy){
return new OpenLayers.Geometry.Point(_1626[0],_1626[1],_1626[2]);
}else{
return new OpenLayers.Geometry.Point(_1626[1],_1626[0],_1626[2]);
}
},multipoint:function(node){
var _162a=this.getElementsByTagNameNS(node,this.gmlns,"Point");
var _162b=[];
if(_162a.length>0){
var point;
for(var i=0;i<_162a.length;++i){
point=this.parseGeometry.point.apply(this,[_162a[i]]);
if(point){
_162b.push(point);
}
}
}
return new OpenLayers.Geometry.MultiPoint(_162b);
},linestring:function(node,ring){
var _1630,_1631;
var _1632=[];
var _1633=[];
_1630=this.getElementsByTagNameNS(node,this.gmlns,"posList");
if(_1630.length>0){
_1631=this.getChildValue(_1630[0]);
_1631=_1631.replace(this.regExes.trimSpace,"");
_1632=_1631.split(this.regExes.splitSpace);
var dim=parseInt(_1630[0].getAttribute("dimension"));
var j,x,y,z;
for(var i=0;i<_1632.length/dim;++i){
j=i*dim;
x=_1632[j];
y=_1632[j+1];
z=(dim==2)?null:_1632[j+2];
if(this.xy){
_1633.push(new OpenLayers.Geometry.Point(x,y,z));
}else{
_1633.push(new OpenLayers.Geometry.Point(y,x,z));
}
}
}
if(_1632.length==0){
_1630=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");
if(_1630.length>0){
_1631=this.getChildValue(_1630[0]);
_1631=_1631.replace(this.regExes.trimSpace,"");
_1631=_1631.replace(this.regExes.trimComma,",");
var _163a=_1631.split(this.regExes.splitSpace);
for(var i=0;i<_163a.length;++i){
_1632=_163a[i].split(",");
if(_1632.length==2){
_1632[2]=null;
}
if(this.xy){
_1633.push(new OpenLayers.Geometry.Point(_1632[0],_1632[1],_1632[2]));
}else{
_1633.push(new OpenLayers.Geometry.Point(_1632[1],_1632[0],_1632[2]));
}
}
}
}
var line=null;
if(_1633.length!=0){
if(ring){
line=new OpenLayers.Geometry.LinearRing(_1633);
}else{
line=new OpenLayers.Geometry.LineString(_1633);
}
}
return line;
},multilinestring:function(node){
var _163d=this.getElementsByTagNameNS(node,this.gmlns,"LineString");
var _163e=[];
if(_163d.length>0){
var line;
for(var i=0;i<_163d.length;++i){
line=this.parseGeometry.linestring.apply(this,[_163d[i]]);
if(line){
_163e.push(line);
}
}
}
return new OpenLayers.Geometry.MultiLineString(_163e);
},polygon:function(node){
var _1642=this.getElementsByTagNameNS(node,this.gmlns,"LinearRing");
var _1643=[];
if(_1642.length>0){
var ring;
for(var i=0;i<_1642.length;++i){
ring=this.parseGeometry.linestring.apply(this,[_1642[i],true]);
if(ring){
_1643.push(ring);
}
}
}
return new OpenLayers.Geometry.Polygon(_1643);
},multipolygon:function(node){
var _1647=this.getElementsByTagNameNS(node,this.gmlns,"Polygon");
var _1648=[];
if(_1647.length>0){
var _1649;
for(var i=0;i<_1647.length;++i){
_1649=this.parseGeometry.polygon.apply(this,[_1647[i]]);
if(_1649){
_1648.push(_1649);
}
}
}
return new OpenLayers.Geometry.MultiPolygon(_1648);
},envelope:function(node){
var _164c=[];
var _164d;
var _164e;
var _164f=this.getElementsByTagNameNS(node,this.gmlns,"lowerCorner");
if(_164f.length>0){
var _1650=[];
if(_164f.length>0){
_164d=_164f[0].firstChild.nodeValue;
_164d=_164d.replace(this.regExes.trimSpace,"");
_1650=_164d.split(this.regExes.splitSpace);
}
if(_1650.length==2){
_1650[2]=null;
}
if(this.xy){
var _1651=new OpenLayers.Geometry.Point(_1650[0],_1650[1],_1650[2]);
}else{
var _1651=new OpenLayers.Geometry.Point(_1650[1],_1650[0],_1650[2]);
}
}
var _1652=this.getElementsByTagNameNS(node,this.gmlns,"upperCorner");
if(_1652.length>0){
var _1650=[];
if(_1652.length>0){
_164d=_1652[0].firstChild.nodeValue;
_164d=_164d.replace(this.regExes.trimSpace,"");
_1650=_164d.split(this.regExes.splitSpace);
}
if(_1650.length==2){
_1650[2]=null;
}
if(this.xy){
var _1653=new OpenLayers.Geometry.Point(_1650[0],_1650[1],_1650[2]);
}else{
var _1653=new OpenLayers.Geometry.Point(_1650[1],_1650[0],_1650[2]);
}
}
if(_1651&&_1653){
_164c.push(new OpenLayers.Geometry.Point(_1651.x,_1651.y));
_164c.push(new OpenLayers.Geometry.Point(_1653.x,_1651.y));
_164c.push(new OpenLayers.Geometry.Point(_1653.x,_1653.y));
_164c.push(new OpenLayers.Geometry.Point(_1651.x,_1653.y));
_164c.push(new OpenLayers.Geometry.Point(_1651.x,_1651.y));
var ring=new OpenLayers.Geometry.LinearRing(_164c);
_164e=new OpenLayers.Geometry.Polygon([ring]);
}
return _164e;
}},parseAttributes:function(node){
var _1656={};
var _1657=node.firstChild;
var _1658,i,child,_165b,_165c,name,value;
while(_1657){
if(_1657.nodeType==1){
_1658=_1657.childNodes;
for(i=0;i<_1658.length;++i){
child=_1658[i];
if(child.nodeType==1){
_165b=child.childNodes;
if(_165b.length==1){
_165c=_165b[0];
if(_165c.nodeType==3||_165c.nodeType==4){
name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;
value=_165c.nodeValue.replace(this.regExes.trimSpace,"");
_1656[name]=value;
}
}else{
_1656[child.nodeName.split(":").pop()]=null;
}
}
}
break;
}
_1657=_1657.nextSibling;
}
return _1656;
},write:function(_165f){
if(!(_165f instanceof Array)){
_165f=[_165f];
}
var gml=this.createElementNS("http://www.opengis.net/wfs","wfs:"+this.collectionName);
for(var i=0;i<_165f.length;i++){
gml.appendChild(this.createFeatureXML(_165f[i]));
}
return OpenLayers.Format.XML.prototype.write.apply(this,[gml]);
},createFeatureXML:function(_1662){
var _1663=_1662.geometry;
var _1664=this.buildGeometryNode(_1663);
var _1665=this.createElementNS(this.featureNS,this.featurePrefix+":"+this.geometryName);
_1665.appendChild(_1664);
var _1666=this.createElementNS(this.gmlns,"gml:"+this.featureName);
var _1667=this.createElementNS(this.featureNS,this.featurePrefix+":"+this.layerName);
var fid=_1662.fid||_1662.id;
_1667.setAttribute("fid",fid);
_1667.appendChild(_1665);
for(var attr in _1662.attributes){
var _166a=this.createTextNode(_1662.attributes[attr]);
var _166b=attr.substring(attr.lastIndexOf(":")+1);
var _166c=this.createElementNS(this.featureNS,this.featurePrefix+":"+_166b);
_166c.appendChild(_166a);
_1667.appendChild(_166c);
}
_1666.appendChild(_1667);
return _1666;
},buildGeometryNode:function(_166d){
if(this.externalProjection&&this.internalProjection){
_166d=_166d.clone();
_166d.transform(this.internalProjection,this.externalProjection);
}
var _166e=_166d.CLASS_NAME;
var type=_166e.substring(_166e.lastIndexOf(".")+1);
var _1670=this.buildGeometry[type.toLowerCase()];
return _1670.apply(this,[_166d]);
},buildGeometry:{point:function(_1671){
var gml=this.createElementNS(this.gmlns,"gml:Point");
gml.appendChild(this.buildCoordinatesNode(_1671));
return gml;
},multipoint:function(_1673){
var gml=this.createElementNS(this.gmlns,"gml:MultiPoint");
var _1675=_1673.components;
var _1676,_1677;
for(var i=0;i<_1675.length;i++){
_1676=this.createElementNS(this.gmlns,"gml:pointMember");
_1677=this.buildGeometry.point.apply(this,[_1675[i]]);
_1676.appendChild(_1677);
gml.appendChild(_1676);
}
return gml;
},linestring:function(_1679){
var gml=this.createElementNS(this.gmlns,"gml:LineString");
gml.appendChild(this.buildCoordinatesNode(_1679));
return gml;
},multilinestring:function(_167b){
var gml=this.createElementNS(this.gmlns,"gml:MultiLineString");
var lines=_167b.components;
var _167e,_167f;
for(var i=0;i<lines.length;++i){
_167e=this.createElementNS(this.gmlns,"gml:lineStringMember");
_167f=this.buildGeometry.linestring.apply(this,[lines[i]]);
_167e.appendChild(_167f);
gml.appendChild(_167e);
}
return gml;
},linearring:function(_1681){
var gml=this.createElementNS(this.gmlns,"gml:LinearRing");
gml.appendChild(this.buildCoordinatesNode(_1681));
return gml;
},polygon:function(_1683){
var gml=this.createElementNS(this.gmlns,"gml:Polygon");
var rings=_1683.components;
var _1686,_1687,type;
for(var i=0;i<rings.length;++i){
type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";
_1686=this.createElementNS(this.gmlns,"gml:"+type);
_1687=this.buildGeometry.linearring.apply(this,[rings[i]]);
_1686.appendChild(_1687);
gml.appendChild(_1686);
}
return gml;
},multipolygon:function(_168a){
var gml=this.createElementNS(this.gmlns,"gml:MultiPolygon");
var polys=_168a.components;
var _168d,_168e;
for(var i=0;i<polys.length;++i){
_168d=this.createElementNS(this.gmlns,"gml:polygonMember");
_168e=this.buildGeometry.polygon.apply(this,[polys[i]]);
_168d.appendChild(_168e);
gml.appendChild(_168d);
}
return gml;
},bounds:function(_1690){
var gml=this.createElementNS(this.gmlns,"gml:Box");
gml.appendChild(this.buildCoordinatesNode(_1690));
return gml;
}},buildCoordinatesNode:function(_1692){
var _1693=this.createElementNS(this.gmlns,"gml:coordinates");
_1693.setAttribute("decimal",".");
_1693.setAttribute("cs",",");
_1693.setAttribute("ts"," ");
var parts=[];
if(_1692 instanceof OpenLayers.Bounds){
parts.push(_1692.left+","+_1692.bottom);
parts.push(_1692.right+","+_1692.top);
}else{
var _1695=(_1692.components)?_1692.components:[_1692];
for(var i=0;i<_1695.length;i++){
parts.push(_1695[i].x+","+_1695[i].y);
}
}
var _1697=this.createTextNode(parts.join(" "));
_1693.appendChild(_1697);
return _1693;
},CLASS_NAME:"OpenLayers.Format.GML"});
OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{initialize:function(_1698){
OpenLayers.Format.JSON.prototype.initialize.apply(this,[_1698]);
},read:function(json,type,_169b){
type=(type)?type:"FeatureCollection";
var _169c=null;
var obj=null;
if(typeof json=="string"){
obj=OpenLayers.Format.JSON.prototype.read.apply(this,[json,_169b]);
}else{
obj=json;
}
if(!obj){
OpenLayers.Console.error("Bad JSON: "+json);
}else{
if(typeof (obj.type)!="string"){
OpenLayers.Console.error("Bad GeoJSON - no type: "+json);
}else{
if(this.isValidType(obj,type)){
switch(type){
case "Geometry":
try{
_169c=this.parseGeometry(obj);
}
catch(err){
OpenLayers.Console.error(err);
}
break;
case "Feature":
try{
_169c=this.parseFeature(obj);
_169c.type="Feature";
}
catch(err){
OpenLayers.Console.error(err);
}
break;
case "FeatureCollection":
_169c=[];
switch(obj.type){
case "Feature":
try{
_169c.push(this.parseFeature(obj));
}
catch(err){
_169c=null;
OpenLayers.Console.error(err);
}
break;
case "FeatureCollection":
for(var i=0,len=obj.features.length;i<len;++i){
try{
_169c.push(this.parseFeature(obj.features[i]));
}
catch(err){
_169c=null;
OpenLayers.Console.error(err);
}
}
break;
default:
try{
var geom=this.parseGeometry(obj);
_169c.push(new OpenLayers.Feature.Vector(geom));
}
catch(err){
_169c=null;
OpenLayers.Console.error(err);
}
}
break;
}
}
}
}
return _169c;
},isValidType:function(obj,type){
var valid=false;
switch(type){
case "Geometry":
if(OpenLayers.Util.indexOf(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","Box","GeometryCollection"],obj.type)==-1){
OpenLayers.Console.error("Unsupported geometry type: "+obj.type);
}else{
valid=true;
}
break;
case "FeatureCollection":
valid=true;
break;
default:
if(obj.type==type){
valid=true;
}else{
OpenLayers.Console.error("Cannot convert types from "+obj.type+" to "+type);
}
}
return valid;
},parseFeature:function(obj){
var _16a5,_16a6,_16a7,bbox;
_16a7=(obj.properties)?obj.properties:{};
bbox=(obj.geometry&&obj.geometry.bbox)||obj.bbox;
try{
_16a6=this.parseGeometry(obj.geometry);
}
catch(err){
throw err;
}
_16a5=new OpenLayers.Feature.Vector(_16a6,_16a7);
if(bbox){
_16a5.bounds=OpenLayers.Bounds.fromArray(bbox);
}
if(obj.id){
_16a5.fid=obj.id;
}
return _16a5;
},parseGeometry:function(obj){
if(obj==null){
return null;
}
var _16aa,_16ab=false;
if(obj.type=="GeometryCollection"){
if(!(obj.geometries instanceof Array)){
throw "GeometryCollection must have geometries array: "+obj;
}
var _16ac=obj.geometries.length;
var _16ad=new Array(_16ac);
for(var i=0;i<_16ac;++i){
_16ad[i]=this.parseGeometry.apply(this,[obj.geometries[i]]);
}
_16aa=new OpenLayers.Geometry.Collection(_16ad);
_16ab=true;
}else{
if(!(obj.coordinates instanceof Array)){
throw "Geometry must have coordinates array: "+obj;
}
if(!this.parseCoords[obj.type.toLowerCase()]){
throw "Unsupported geometry type: "+obj.type;
}
try{
_16aa=this.parseCoords[obj.type.toLowerCase()].apply(this,[obj.coordinates]);
}
catch(err){
throw err;
}
}
if(this.internalProjection&&this.externalProjection&&!_16ab){
_16aa.transform(this.externalProjection,this.internalProjection);
}
return _16aa;
},parseCoords:{"point":function(array){
if(array.length!=2){
throw "Only 2D points are supported: "+array;
}
return new OpenLayers.Geometry.Point(array[0],array[1]);
},"multipoint":function(array){
var _16b1=[];
var p=null;
for(var i=0,len=array.length;i<len;++i){
try{
p=this.parseCoords["point"].apply(this,[array[i]]);
}
catch(err){
throw err;
}
_16b1.push(p);
}
return new OpenLayers.Geometry.MultiPoint(_16b1);
},"linestring":function(array){
var _16b6=[];
var p=null;
for(var i=0,len=array.length;i<len;++i){
try{
p=this.parseCoords["point"].apply(this,[array[i]]);
}
catch(err){
throw err;
}
_16b6.push(p);
}
return new OpenLayers.Geometry.LineString(_16b6);
},"multilinestring":function(array){
var lines=[];
var l=null;
for(var i=0,len=array.length;i<len;++i){
try{
l=this.parseCoords["linestring"].apply(this,[array[i]]);
}
catch(err){
throw err;
}
lines.push(l);
}
return new OpenLayers.Geometry.MultiLineString(lines);
},"polygon":function(array){
var rings=[];
var r,l;
for(var i=0,len=array.length;i<len;++i){
try{
l=this.parseCoords["linestring"].apply(this,[array[i]]);
}
catch(err){
throw err;
}
r=new OpenLayers.Geometry.LinearRing(l.components);
rings.push(r);
}
return new OpenLayers.Geometry.Polygon(rings);
},"multipolygon":function(array){
var polys=[];
var p=null;
for(var i=0,len=array.length;i<len;++i){
try{
p=this.parseCoords["polygon"].apply(this,[array[i]]);
}
catch(err){
throw err;
}
polys.push(p);
}
return new OpenLayers.Geometry.MultiPolygon(polys);
},"box":function(array){
if(array.length!=2){
throw "GeoJSON box coordinates must have 2 elements";
}
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[0][1])])]);
}},write:function(obj,_16cc){
var _16cd={"type":null};
if(obj instanceof Array){
_16cd.type="FeatureCollection";
var _16ce=obj.length;
_16cd.features=new Array(_16ce);
for(var i=0;i<_16ce;++i){
var _16d0=obj[i];
if(!_16d0 instanceof OpenLayers.Feature.Vector){
var msg="FeatureCollection only supports collections "+"of features: "+_16d0;
throw msg;
}
_16cd.features[i]=this.extract.feature.apply(this,[_16d0]);
}
}else{
if(obj.CLASS_NAME.indexOf("OpenLayers.Geometry")==0){
_16cd=this.extract.geometry.apply(this,[obj]);
}else{
if(obj instanceof OpenLayers.Feature.Vector){
_16cd=this.extract.feature.apply(this,[obj]);
if(obj.layer&&obj.layer.projection){
_16cd.crs=this.createCRSObject(obj);
}
}
}
}
return OpenLayers.Format.JSON.prototype.write.apply(this,[_16cd,_16cc]);
},createCRSObject:function(_16d2){
var proj=_16d2.layer.projection.toString();
var crs={};
if(proj.match(/epsg:/i)){
var code=parseInt(proj.substring(proj.indexOf(":")+1));
if(code==4326){
crs={"type":"OGC","properties":{"urn":"urn:ogc:def:crs:OGC:1.3:CRS84"}};
}else{
crs={"type":"EPSG","properties":{"code":code}};
}
}
return crs;
},extract:{"feature":function(_16d6){
var geom=this.extract.geometry.apply(this,[_16d6.geometry]);
return {"type":"Feature","id":_16d6.fid==null?_16d6.id:_16d6.fid,"properties":_16d6.attributes,"geometry":geom};
},"geometry":function(_16d8){
if(_16d8==null){
return null;
}
if(this.internalProjection&&this.externalProjection){
_16d8=_16d8.clone();
_16d8.transform(this.internalProjection,this.externalProjection);
}
var _16d9=_16d8.CLASS_NAME.split(".")[2];
var data=this.extract[_16d9.toLowerCase()].apply(this,[_16d8]);
var json;
if(_16d9=="Collection"){
json={"type":"GeometryCollection","geometries":data};
}else{
json={"type":_16d9,"coordinates":data};
}
return json;
},"point":function(point){
return [point.x,point.y];
},"multipoint":function(_16dd){
var array=[];
for(var i=0,len=_16dd.components.length;i<len;++i){
array.push(this.extract.point.apply(this,[_16dd.components[i]]));
}
return array;
},"linestring":function(_16e1){
var array=[];
for(var i=0,len=_16e1.components.length;i<len;++i){
array.push(this.extract.point.apply(this,[_16e1.components[i]]));
}
return array;
},"multilinestring":function(_16e5){
var array=[];
for(var i=0,len=_16e5.components.length;i<len;++i){
array.push(this.extract.linestring.apply(this,[_16e5.components[i]]));
}
return array;
},"polygon":function(_16e9){
var array=[];
for(var i=0,len=_16e9.components.length;i<len;++i){
array.push(this.extract.linestring.apply(this,[_16e9.components[i]]));
}
return array;
},"multipolygon":function(_16ed){
var array=[];
for(var i=0,len=_16ed.components.length;i<len;++i){
array.push(this.extract.polygon.apply(this,[_16ed.components[i]]));
}
return array;
},"collection":function(_16f1){
var len=_16f1.components.length;
var array=new Array(len);
for(var i=0;i<len;++i){
array[i]=this.extract.geometry.apply(this,[_16f1.components[i]]);
}
return array;
}},CLASS_NAME:"OpenLayers.Format.GeoJSON"});
OpenLayers.Format.ArcXML.Features=OpenLayers.Class(OpenLayers.Format.XML,{initialize:function(_16f5){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_16f5]);
},read:function(data){
var axl=new OpenLayers.Format.ArcXML();
var _16f8=axl.read(data);
return _16f8.features.feature;
}});
if(!OpenLayers.Format.GML){
OpenLayers.Format.GML={};
}
OpenLayers.Format.GML.Base=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs"},defaultPrefix:"gml",schemaLocation:null,featureType:null,featureNS:null,geometryName:"geometry",extractAttributes:true,srsName:null,xy:true,geometryTypes:null,singleFeatureType:null,regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},initialize:function(_16f9){
OpenLayers.Format.XML.prototype.initialize.apply(this,[_16f9]);
this.setGeometryTypes();
if(_16f9&&_16f9.featureNS){
this.setNamespace("feature",_16f9.featureNS);
}
this.singleFeatureType=!_16f9||(typeof _16f9.featureType==="string");
},read:function(data){
if(typeof data=="string"){
data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);
}
if(data&&data.nodeType==9){
data=data.documentElement;
}
var _16fb=[];
this.readNode(data,{features:_16fb});
if(_16fb.length==0){
var _16fc=this.getElementsByTagNameNS(data,this.namespaces.gml,"featureMember");
if(_16fc.length){
for(var i=0,len=_16fc.length;i<len;++i){
this.readNode(_16fc[i],{features:_16fb});
}
}else{
var _16fc=this.getElementsByTagNameNS(data,this.namespaces.gml,"featureMembers");
if(_16fc.length){
this.readNode(_16fc[0],{features:_16fb});
}
}
}
return _16fb;
},readers:{"gml":{"featureMember":function(node,obj){
this.readChildNodes(node,obj);
},"featureMembers":function(node,obj){
this.readChildNodes(node,obj);
},"name":function(node,obj){
obj.name=this.getChildValue(node);
},"boundedBy":function(node,obj){
var _1707={};
this.readChildNodes(node,_1707);
if(_1707.components&&_1707.components.length>0){
obj.bounds=_1707.components[0];
}
},"Point":function(node,_1709){
var obj={points:[]};
this.readChildNodes(node,obj);
if(!_1709.components){
_1709.components=[];
}
_1709.components.push(obj.points[0]);
},"coordinates":function(node,obj){
var str=this.getChildValue(node).replace(this.regExes.trimSpace,"");
str=str.replace(this.regExes.trimComma,",");
var _170e=str.split(this.regExes.splitSpace);
var _170f;
var _1710=_170e.length;
var _1711=new Array(_1710);
for(var i=0;i<_1710;++i){
_170f=_170e[i].split(",");
if(this.xy){
_1711[i]=new OpenLayers.Geometry.Point(_170f[0],_170f[1],_170f[2]);
}else{
_1711[i]=new OpenLayers.Geometry.Point(_170f[1],_170f[0],_170f[2]);
}
}
obj.points=_1711;
},"coord":function(node,obj){
var coord={};
this.readChildNodes(node,coord);
if(!obj.points){
obj.points=[];
}
obj.points.push(new OpenLayers.Geometry.Point(coord.x,coord.y,coord.z));
},"X":function(node,coord){
coord.x=this.getChildValue(node);
},"Y":function(node,coord){
coord.y=this.getChildValue(node);
},"Z":function(node,coord){
coord.z=this.getChildValue(node);
},"MultiPoint":function(node,_171d){
var obj={components:[]};
this.readChildNodes(node,obj);
_171d.components=[new OpenLayers.Geometry.MultiPoint(obj.components)];
},"pointMember":function(node,obj){
this.readChildNodes(node,obj);
},"LineString":function(node,_1722){
var obj={};
this.readChildNodes(node,obj);
if(!_1722.components){
_1722.components=[];
}
_1722.components.push(new OpenLayers.Geometry.LineString(obj.points));
},"MultiLineString":function(node,_1725){
var obj={components:[]};
this.readChildNodes(node,obj);
_1725.components=[new OpenLayers.Geometry.MultiLineString(obj.components)];
},"lineStringMember":function(node,obj){
this.readChildNodes(node,obj);
},"Polygon":function(node,_172a){
var obj={outer:null,inner:[]};
this.readChildNodes(node,obj);
obj.inner.unshift(obj.outer);
if(!_172a.components){
_172a.components=[];
}
_172a.components.push(new OpenLayers.Geometry.Polygon(obj.inner));
},"LinearRing":function(node,obj){
var _172e={};
this.readChildNodes(node,_172e);
obj.components=[new OpenLayers.Geometry.LinearRing(_172e.points)];
},"MultiPolygon":function(node,_1730){
var obj={components:[]};
this.readChildNodes(node,obj);
_1730.components=[new OpenLayers.Geometry.MultiPolygon(obj.components)];
},"polygonMember":function(node,obj){
this.readChildNodes(node,obj);
},"GeometryCollection":function(node,_1735){
var obj={components:[]};
this.readChildNodes(node,obj);
_1735.components=[new OpenLayers.Geometry.Collection(obj.components)];
},"geometryMember":function(node,obj){
this.readChildNodes(node,obj);
}},"feature":{"*":function(node,obj){
var name;
var local=node.localName||node.nodeName.split(":").pop();
if(!this.singleFeatureType&&(OpenLayers.Util.indexOf(this.featureType,local)!=-1)){
name="_typeName";
}else{
if(local==this.featureType){
name="_typeName";
}else{
if(node.childNodes.length==0||(node.childNodes.length==1&&node.firstChild.nodeType==3)){
if(this.extractAttributes){
name="_attribute";
}
}else{
name="_geometry";
}
}
}
if(name){
this.readers.feature[name].apply(this,[node,obj]);
}
},"_typeName":function(node,obj){
var _173f={components:[],attributes:{}};
this.readChildNodes(node,_173f);
if(_173f.name){
_173f.attributes.name=_173f.name;
}
var _1740=new OpenLayers.Feature.Vector(_173f.components[0],_173f.attributes);
if(!this.singleFeatureType){
_1740.type=node.nodeName.split(":").pop();
_1740.namespace=node.namespaceURI;
}
var fid=node.getAttribute("fid")||this.getAttributeNS(node,this.namespaces["gml"],"id");
if(fid){
_1740.fid=fid;
}
if(this.internalProjection&&this.externalProjection&&_1740.geometry){
_1740.geometry.transform(this.externalProjection,this.internalProjection);
}
if(_173f.bounds){
_1740.geometry.bounds=_173f.bounds;
}
obj.features.push(_1740);
},"_geometry":function(node,obj){
this.readChildNodes(node,obj);
},"_attribute":function(node,obj){
var local=node.localName||node.nodeName.split(":").pop();
var value=this.getChildValue(node);
obj.attributes[local]=value;
}},"wfs":{"FeatureCollection":function(node,obj){
this.readChildNodes(node,obj);
}}},write:function(_174a){
var name;
if(_174a instanceof Array){
name="featureMembers";
}else{
name="featureMember";
}
var root=this.writeNode("gml:"+name,_174a);
this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},writers:{"gml":{"featureMember":function(_174d){
var node=this.createElementNSPlus("gml:featureMember");
this.writeNode("feature:_typeName",_174d,node);
return node;
},"MultiPoint":function(_174f){
var node=this.createElementNSPlus("gml:MultiPoint");
for(var i=0;i<_174f.components.length;++i){
this.writeNode("pointMember",_174f.components[i],node);
}
return node;
},"pointMember":function(_1752){
var node=this.createElementNSPlus("gml:pointMember");
this.writeNode("Point",_1752,node);
return node;
},"MultiLineString":function(_1754){
var node=this.createElementNSPlus("gml:MultiLineString");
for(var i=0;i<_1754.components.length;++i){
this.writeNode("lineStringMember",_1754.components[i],node);
}
return node;
},"lineStringMember":function(_1757){
var node=this.createElementNSPlus("gml:lineStringMember");
this.writeNode("LineString",_1757,node);
return node;
},"MultiPolygon":function(_1759){
var node=this.createElementNSPlus("gml:MultiPolygon");
for(var i=0;i<_1759.components.length;++i){
this.writeNode("polygonMember",_1759.components[i],node);
}
return node;
},"polygonMember":function(_175c){
var node=this.createElementNSPlus("gml:polygonMember");
this.writeNode("Polygon",_175c,node);
return node;
},"GeometryCollection":function(_175e){
var node=this.createElementNSPlus("gml:GeometryCollection");
for(var i=0,len=_175e.components.length;i<len;++i){
this.writeNode("geometryMember",_175e.components[i],node);
}
return node;
},"geometryMember":function(_1762){
var node=this.createElementNSPlus("gml:geometryMember");
var child=this.writeNode("feature:_geometry",_1762);
node.appendChild(child.firstChild);
return node;
}},"feature":{"_typeName":function(_1765){
var node=this.createElementNSPlus("feature:"+this.featureType,{attributes:{fid:_1765.fid}});
if(_1765.geometry){
this.writeNode("feature:_geometry",_1765.geometry,node);
}
for(var name in _1765.attributes){
var value=_1765.attributes[name];
if(value!=null){
this.writeNode("feature:_attribute",{name:name,value:value},node);
}
}
return node;
},"_geometry":function(_1769){
if(this.externalProjection&&this.internalProjection){
_1769=_1769.clone().transform(this.internalProjection,this.externalProjection);
}
var node=this.createElementNSPlus("feature:"+this.geometryName);
var type=this.geometryTypes[_1769.CLASS_NAME];
var child=this.writeNode("gml:"+type,_1769,node);
if(this.srsName){
child.setAttribute("srsName",this.srsName);
}
return node;
},"_attribute":function(obj){
return this.createElementNSPlus("feature:"+obj.name,{value:obj.value});
}},"wfs":{"FeatureCollection":function(_176e){
var node=this.createElementNSPlus("wfs:FeatureCollection");
for(var i=0,len=_176e.length;i<len;++i){
this.writeNode("gml:featureMember",_176e[i],node);
}
return node;
}}},setGeometryTypes:function(){
this.geometryTypes={"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":"LineString","OpenLayers.Geometry.MultiLineString":"MultiLineString","OpenLayers.Geometry.Polygon":"Polygon","OpenLayers.Geometry.MultiPolygon":"MultiPolygon","OpenLayers.Geometry.Collection":"GeometryCollection"};
},CLASS_NAME:"OpenLayers.Format.GML.Base"});
OpenLayers.Format.WFS=OpenLayers.Class(OpenLayers.Format.GML,{layer:null,wfsns:"http://www.opengis.net/wfs",ogcns:"http://www.opengis.net/ogc",initialize:function(_1772,layer){
OpenLayers.Format.GML.prototype.initialize.apply(this,[_1772]);
this.layer=layer;
if(this.layer.featureNS){
this.featureNS=this.layer.featureNS;
}
if(this.layer.options.geometry_column){
this.geometryName=this.layer.options.geometry_column;
}
if(this.layer.options.typename){
this.featureName=this.layer.options.typename;
}
},write:function(_1774){
var _1775=this.createElementNS(this.wfsns,"wfs:Transaction");
_1775.setAttribute("version","1.0.0");
_1775.setAttribute("service","WFS");
for(var i=0;i<_1774.length;i++){
switch(_1774[i].state){
case OpenLayers.State.INSERT:
_1775.appendChild(this.insert(_1774[i]));
break;
case OpenLayers.State.UPDATE:
_1775.appendChild(this.update(_1774[i]));
break;
case OpenLayers.State.DELETE:
_1775.appendChild(this.remove(_1774[i]));
break;
}
}
return OpenLayers.Format.XML.prototype.write.apply(this,[_1775]);
},createFeatureXML:function(_1777){
var _1778=this.buildGeometryNode(_1777.geometry);
var _1779=this.createElementNS(this.featureNS,"feature:"+this.geometryName);
_1779.appendChild(_1778);
var _177a=this.createElementNS(this.featureNS,"feature:"+this.featureName);
_177a.appendChild(_1779);
for(var attr in _1777.attributes){
var _177c=this.createTextNode(_1777.attributes[attr]);
var _177d=attr;
if(attr.search(":")!=-1){
_177d=attr.split(":")[1];
}
var _177e=this.createElementNS(this.featureNS,"feature:"+_177d);
_177e.appendChild(_177c);
_177a.appendChild(_177e);
}
return _177a;
},insert:function(_177f){
var _1780=this.createElementNS(this.wfsns,"wfs:Insert");
_1780.appendChild(this.createFeatureXML(_177f));
return _1780;
},update:function(_1781){
if(!_1781.fid){
OpenLayers.Console.userError(OpenLayers.i18n("noFID"));
}
var _1782=this.createElementNS(this.wfsns,"wfs:Update");
_1782.setAttribute("typeName",this.featurePrefix+":"+this.featureName);
_1782.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
var _1783=this.createElementNS(this.wfsns,"wfs:Property");
var _1784=this.createElementNS(this.wfsns,"wfs:Name");
var _1785=this.createTextNode(this.geometryName);
_1784.appendChild(_1785);
_1783.appendChild(_1784);
var _1786=this.createElementNS(this.wfsns,"wfs:Value");
var _1787=this.buildGeometryNode(_1781.geometry);
if(_1781.layer){
_1787.setAttribute("srsName",_1781.layer.projection.getCode());
}
_1786.appendChild(_1787);
_1783.appendChild(_1786);
_1782.appendChild(_1783);
for(var _1788 in _1781.attributes){
_1783=this.createElementNS(this.wfsns,"wfs:Property");
_1784=this.createElementNS(this.wfsns,"wfs:Name");
_1784.appendChild(this.createTextNode(_1788));
_1783.appendChild(_1784);
_1786=this.createElementNS(this.wfsns,"wfs:Value");
_1786.appendChild(this.createTextNode(_1781.attributes[_1788]));
_1783.appendChild(_1786);
_1782.appendChild(_1783);
}
var _1789=this.createElementNS(this.ogcns,"ogc:Filter");
var _178a=this.createElementNS(this.ogcns,"ogc:FeatureId");
_178a.setAttribute("fid",_1781.fid);
_1789.appendChild(_178a);
_1782.appendChild(_1789);
return _1782;
},remove:function(_178b){
if(!_178b.fid){
OpenLayers.Console.userError(OpenLayers.i18n("noFID"));
return false;
}
var _178c=this.createElementNS(this.wfsns,"wfs:Delete");
_178c.setAttribute("typeName",this.featurePrefix+":"+this.featureName);
_178c.setAttribute("xmlns:"+this.featurePrefix,this.featureNS);
var _178d=this.createElementNS(this.ogcns,"ogc:Filter");
var _178e=this.createElementNS(this.ogcns,"ogc:FeatureId");
_178e.setAttribute("fid",_178b.fid);
_178d.appendChild(_178e);
_178c.appendChild(_178d);
return _178c;
},destroy:function(){
this.layer=null;
},CLASS_NAME:"OpenLayers.Format.WFS"});
OpenLayers.Layer.ArcIMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{ClientVersion:"9.2",ServiceName:""},tileSize:null,featureCoordSys:"4326",filterCoordSys:"4326",layers:null,async:true,name:"ArcIMS",isBaseLayer:true,DEFAULT_OPTIONS:{tileSize:new OpenLayers.Size(512,512),featureCoordSys:"4326",filterCoordSys:"4326",layers:null,isBaseLayer:true,async:true,name:"ArcIMS"},initialize:function(name,url,_1791){
this.tileSize=new OpenLayers.Size(512,512);
this.params=OpenLayers.Util.applyDefaults({ServiceName:_1791.serviceName},this.DEFAULT_PARAMS);
this.options=OpenLayers.Util.applyDefaults(_1791,this.DEFAULT_OPTIONS);
OpenLayers.Layer.Grid.prototype.initialize.apply(this,[name,url,this.params,_1791]);
if(this.transparent){
if(!this.isBaseLayer){
this.isBaseLayer=false;
}
if(this.format=="image/jpeg"){
this.format=OpenLayers.Util.alphaHack()?"image/gif":"image/png";
}
}
if(this.options.layers===null){
this.options.layers=[];
}
},destroy:function(){
OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);
},getURL:function(_1792){
var url="";
_1792=this.adjustBounds(_1792);
var _1794=new OpenLayers.Format.ArcXML(OpenLayers.Util.extend(this.options,{requesttype:"image",envelope:_1792.toArray(),tileSize:this.tileSize}));
var req=new OpenLayers.Request.POST({url:this.getFullRequestString(),data:_1794.write(),async:false});
if(req!=null){
var doc=req.responseXML;
if(!doc||!doc.documentElement){
doc=req.responseText;
}
var _1797=new OpenLayers.Format.ArcXML();
var _1798=_1797.read(doc);
url=this.getUrlOrImage(_1798.image.output);
}
return url;
},getURLasync:function(_1799,scope,prop,_179c){
_1799=this.adjustBounds(_1799);
var _179d=new OpenLayers.Format.ArcXML(OpenLayers.Util.extend(this.options,{requesttype:"image",envelope:_1799.toArray(),tileSize:this.tileSize}));
OpenLayers.Request.POST({url:this.getFullRequestString(),async:true,data:_179d.write(),callback:function(req){
var doc=req.responseXML;
if(!doc||!doc.documentElement){
doc=req.responseText;
}
var _17a0=new OpenLayers.Format.ArcXML();
var _17a1=_17a0.read(doc);
scope[prop]=this.getUrlOrImage(_17a1.image.output);
_179c.apply(scope);
},scope:this});
},getUrlOrImage:function(_17a2){
var ret="";
if(_17a2.url){
ret=_17a2.url;
}else{
if(_17a2.data){
ret="data:image/"+_17a2.type+";base64,"+_17a2.data;
}
}
return ret;
},setLayerQuery:function(id,_17a5){
for(var lyr=0;lyr<this.options.layers.length;lyr++){
if(id==this.options.layers[lyr].id){
this.options.layers[lyr].query=_17a5;
return;
}
}
this.options.layers.push({id:id,visible:true,query:_17a5});
},getFeatureInfo:function(_17a7,layer,_17a9){
var _17aa=_17a9.buffer||1;
var _17ab=_17a9.callback||function(){
};
var scope=_17a9.scope||window;
var _17ad={};
OpenLayers.Util.extend(_17ad,this.options);
_17ad.requesttype="feature";
if(_17a7 instanceof OpenLayers.LonLat){
_17ad.polygon=null;
_17ad.envelope=[_17a7.lon-_17aa,_17a7.lat-_17aa,_17a7.lon+_17aa,_17a7.lat+_17aa];
}else{
if(_17a7 instanceof OpenLayers.Geometry.Polygon){
_17ad.envelope=null;
_17ad.polygon=_17a7;
}
}
var _17ae=new OpenLayers.Format.ArcXML(_17ad);
OpenLayers.Util.extend(_17ae.request.get_feature,_17a9);
_17ae.request.get_feature.layer=layer.id;
if(typeof layer.query.accuracy=="number"){
_17ae.request.get_feature.query.accuracy=layer.query.accuracy;
}else{
var _17af=this.map.getCenter();
var _17b0=this.map.getViewPortPxFromLonLat(_17af);
_17b0.x++;
var _17b1=this.map.getLonLatFromPixel(_17b0);
_17ae.request.get_feature.query.accuracy=_17b1.lon-_17af.lon;
}
_17ae.request.get_feature.query.where=layer.query.where;
_17ae.request.get_feature.query.spatialfilter.relation="area_intersection";
OpenLayers.Request.POST({url:this.getFullRequestString({"CustomService":"Query"}),data:_17ae.write(),callback:function(_17b2){
var _17b3=_17ae.parseResponse(_17b2.responseText);
if(!_17ae.iserror()){
_17ab.call(scope,_17b3.features);
}else{
_17ab.call(scope,null);
}
}});
},addTile:function(_17b4,_17b5){
return new OpenLayers.Tile.Image(this,_17b5,_17b4,null,this.tileSize);
},CLASS_NAME:"OpenLayers.Layer.ArcIMS"});
OpenLayers.Format.GML.v2=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd",initialize:function(_17b6){
OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[_17b6]);
},readers:{"gml":OpenLayers.Util.applyDefaults({"outerBoundaryIs":function(node,_17b8){
var obj={};
this.readChildNodes(node,obj);
_17b8.outer=obj.components[0];
},"innerBoundaryIs":function(node,_17bb){
var obj={};
this.readChildNodes(node,obj);
_17bb.inner.push(obj.components[0]);
},"Box":function(node,_17be){
var obj={};
this.readChildNodes(node,obj);
if(!_17be.components){
_17be.components=[];
}
var min=obj.points[0];
var max=obj.points[1];
_17be.components.push(new OpenLayers.Bounds(min.x,min.y,max.x,max.y));
}},OpenLayers.Format.GML.Base.prototype.readers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.readers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.readers["wfs"]},write:function(_17c2){
var name;
if(_17c2 instanceof Array){
name="wfs:FeatureCollection";
}else{
name="gml:featureMember";
}
var root=this.writeNode(name,_17c2);
this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},writers:{"gml":OpenLayers.Util.applyDefaults({"Point":function(_17c5){
var node=this.createElementNSPlus("gml:Point");
this.writeNode("coordinates",[_17c5],node);
return node;
},"coordinates":function(_17c7){
var _17c8=_17c7.length;
var parts=new Array(_17c8);
var point;
for(var i=0;i<_17c8;++i){
point=_17c7[i];
if(this.xy){
parts[i]=point.x+","+point.y;
}else{
parts[i]=point.y+","+point.x;
}
if(point.z!=undefined){
parts[i]+=","+point.z;
}
}
return this.createElementNSPlus("gml:coordinates",{attributes:{decimal:".",cs:",",ts:" "},value:(_17c8==1)?parts[0]:parts.join(" ")});
},"LineString":function(_17cc){
var node=this.createElementNSPlus("gml:LineString");
this.writeNode("coordinates",_17cc.components,node);
return node;
},"Polygon":function(_17ce){
var node=this.createElementNSPlus("gml:Polygon");
this.writeNode("outerBoundaryIs",_17ce.components[0],node);
for(var i=1;i<_17ce.components.length;++i){
this.writeNode("innerBoundaryIs",_17ce.components[i],node);
}
return node;
},"outerBoundaryIs":function(ring){
var node=this.createElementNSPlus("gml:outerBoundaryIs");
this.writeNode("LinearRing",ring,node);
return node;
},"innerBoundaryIs":function(ring){
var node=this.createElementNSPlus("gml:innerBoundaryIs");
this.writeNode("LinearRing",ring,node);
return node;
},"LinearRing":function(ring){
var node=this.createElementNSPlus("gml:LinearRing");
this.writeNode("coordinates",ring.components,node);
return node;
},"Box":function(_17d7){
var node=this.createElementNSPlus("gml:Box");
this.writeNode("coordinates",[{x:_17d7.left,y:_17d7.bottom},{x:_17d7.right,y:_17d7.top}],node);
if(this.srsName){
node.setAttribute("srsName",this.srsName);
}
return node;
}},OpenLayers.Format.GML.Base.prototype.writers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.writers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.writers["wfs"]},CLASS_NAME:"OpenLayers.Format.GML.v2"});
OpenLayers.Format.GML.v3=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",curve:false,multiCurve:true,surface:false,multiSurface:true,initialize:function(_17d9){
OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[_17d9]);
},readers:{"gml":OpenLayers.Util.applyDefaults({"featureMembers":function(node,obj){
this.readChildNodes(node,obj);
},"Curve":function(node,_17dd){
var obj={points:[]};
this.readChildNodes(node,obj);
if(!_17dd.components){
_17dd.components=[];
}
_17dd.components.push(new OpenLayers.Geometry.LineString(obj.points));
},"segments":function(node,obj){
this.readChildNodes(node,obj);
},"LineStringSegment":function(node,_17e2){
var obj={};
this.readChildNodes(node,obj);
if(obj.points){
Array.prototype.push.apply(_17e2.points,obj.points);
}
},"pos":function(node,obj){
var str=this.getChildValue(node).replace(this.regExes.trimSpace,"");
var _17e7=str.split(this.regExes.splitSpace);
var point;
if(this.xy){
point=new OpenLayers.Geometry.Point(_17e7[0],_17e7[1],_17e7[2]);
}else{
point=new OpenLayers.Geometry.Point(_17e7[1],_17e7[0],_17e7[2]);
}
obj.points=[point];
},"posList":function(node,obj){
var str=this.getChildValue(node).replace(this.regExes.trimSpace,"");
var _17ec=str.split(this.regExes.splitSpace);
var dim=parseInt(node.getAttribute("dimension"))||2;
var j,x,y,z;
var _17f2=_17ec.length/dim;
var _17f3=new Array(_17f2);
for(var i=0,len=_17ec.length;i<len;i+=dim){
x=_17ec[i];
y=_17ec[i+1];
z=(dim==2)?undefined:_17ec[i+2];
if(this.xy){
_17f3[i/dim]=new OpenLayers.Geometry.Point(x,y,z);
}else{
_17f3[i/dim]=new OpenLayers.Geometry.Point(y,x,z);
}
}
obj.points=_17f3;
},"Surface":function(node,obj){
this.readChildNodes(node,obj);
},"patches":function(node,obj){
this.readChildNodes(node,obj);
},"PolygonPatch":function(node,obj){
this.readers.gml.Polygon.apply(this,[node,obj]);
},"exterior":function(node,_17fd){
var obj={};
this.readChildNodes(node,obj);
_17fd.outer=obj.components[0];
},"interior":function(node,_1800){
var obj={};
this.readChildNodes(node,obj);
_1800.inner.push(obj.components[0]);
},"MultiCurve":function(node,_1803){
var obj={components:[]};
this.readChildNodes(node,obj);
if(obj.components.length>0){
_1803.components=[new OpenLayers.Geometry.MultiLineString(obj.components)];
}
},"curveMember":function(node,obj){
this.readChildNodes(node,obj);
},"MultiSurface":function(node,_1808){
var obj={components:[]};
this.readChildNodes(node,obj);
if(obj.components.length>0){
_1808.components=[new OpenLayers.Geometry.MultiPolygon(obj.components)];
}
},"surfaceMember":function(node,obj){
this.readChildNodes(node,obj);
},"surfaceMembers":function(node,obj){
this.readChildNodes(node,obj);
},"pointMembers":function(node,obj){
this.readChildNodes(node,obj);
},"lineStringMembers":function(node,obj){
this.readChildNodes(node,obj);
},"polygonMembers":function(node,obj){
this.readChildNodes(node,obj);
},"geometryMembers":function(node,obj){
this.readChildNodes(node,obj);
},"Envelope":function(node,_1817){
var obj={points:new Array(2)};
this.readChildNodes(node,obj);
if(!_1817.components){
_1817.components=[];
}
var min=obj.points[0];
var max=obj.points[1];
_1817.components.push(new OpenLayers.Bounds(min.x,min.y,max.x,max.y));
},"lowerCorner":function(node,_181c){
var obj={};
this.readers.gml.pos.apply(this,[node,obj]);
_181c.points[0]=obj.points[0];
},"upperCorner":function(node,_181f){
var obj={};
this.readers.gml.pos.apply(this,[node,obj]);
_181f.points[1]=obj.points[0];
}},OpenLayers.Format.GML.Base.prototype.readers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.readers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.readers["wfs"]},write:function(_1821){
var name;
if(_1821 instanceof Array){
name="featureMembers";
}else{
name="featureMember";
}
var root=this.writeNode("gml:"+name,_1821);
this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);
return OpenLayers.Format.XML.prototype.write.apply(this,[root]);
},writers:{"gml":OpenLayers.Util.applyDefaults({"featureMembers":function(_1824){
var node=this.createElementNSPlus("gml:featureMembers");
for(var i=0,len=_1824.length;i<len;++i){
this.writeNode("feature:_typeName",_1824[i],node);
}
return node;
},"Point":function(_1828){
var node=this.createElementNSPlus("gml:Point");
this.writeNode("pos",_1828,node);
return node;
},"pos":function(point){
var pos=(this.xy)?(point.x+" "+point.y):(point.y+" "+point.x);
return this.createElementNSPlus("gml:pos",{value:pos});
},"LineString":function(_182c){
var node=this.createElementNSPlus("gml:LineString");
this.writeNode("posList",_182c.components,node);
return node;
},"Curve":function(_182e){
var node=this.createElementNSPlus("gml:Curve");
this.writeNode("segments",_182e,node);
return node;
},"segments":function(_1830){
var node=this.createElementNSPlus("gml:segments");
this.writeNode("LineStringSegment",_1830,node);
return node;
},"LineStringSegment":function(_1832){
var node=this.createElementNSPlus("gml:LineStringSegment");
this.writeNode("posList",_1832.components,node);
return node;
},"posList":function(_1834){
var len=_1834.length;
var parts=new Array(len);
var point;
for(var i=0;i<len;++i){
point=_1834[i];
if(this.xy){
parts[i]=point.x+" "+point.y;
}else{
parts[i]=point.y+" "+point.x;
}
}
return this.createElementNSPlus("gml:posList",{value:parts.join(" ")});
},"Surface":function(_1839){
var node=this.createElementNSPlus("gml:Surface");
this.writeNode("patches",_1839,node);
return node;
},"patches":function(_183b){
var node=this.createElementNSPlus("gml:patches");
this.writeNode("PolygonPatch",_183b,node);
return node;
},"PolygonPatch":function(_183d){
var node=this.createElementNSPlus("gml:PolygonPatch",{attributes:{interpolation:"planar"}});
this.writeNode("exterior",_183d.components[0],node);
for(var i=1,len=_183d.components.length;i<len;++i){
this.writeNode("interior",_183d.components[i],node);
}
return node;
},"Polygon":function(_1841){
var node=this.createElementNSPlus("gml:Polygon");
this.writeNode("exterior",_1841.components[0],node);
for(var i=1,len=_1841.components.length;i<len;++i){
this.writeNode("interior",_1841.components[i],node);
}
return node;
},"exterior":function(ring){
var node=this.createElementNSPlus("gml:exterior");
this.writeNode("LinearRing",ring,node);
return node;
},"interior":function(ring){
var node=this.createElementNSPlus("gml:interior");
this.writeNode("LinearRing",ring,node);
return node;
},"LinearRing":function(ring){
var node=this.createElementNSPlus("gml:LinearRing");
this.writeNode("posList",ring.components,node);
return node;
},"MultiCurve":function(_184b){
var node=this.createElementNSPlus("gml:MultiCurve");
for(var i=0,len=_184b.components.length;i<len;++i){
this.writeNode("curveMember",_184b.components[i],node);
}
return node;
},"curveMember":function(_184f){
var node=this.createElementNSPlus("gml:curveMember");
if(this.curve){
this.writeNode("Curve",_184f,node);
}else{
this.writeNode("LineString",_184f,node);
}
return node;
},"MultiSurface":function(_1851){
var node=this.createElementNSPlus("gml:MultiSurface");
for(var i=0,len=_1851.components.length;i<len;++i){
this.writeNode("surfaceMember",_1851.components[i],node);
}
return node;
},"surfaceMember":function(_1855){
var node=this.createElementNSPlus("gml:surfaceMember");
if(this.surface){
this.writeNode("Surface",_1855,node);
}else{
this.writeNode("Polygon",_1855,node);
}
return node;
},"Envelope":function(_1857){
var node=this.createElementNSPlus("gml:Envelope");
this.writeNode("lowerCorner",_1857,node);
this.writeNode("upperCorner",_1857,node);
if(this.srsName){
node.setAttribute("srsName",this.srsName);
}
return node;
},"lowerCorner":function(_1859){
var pos=(this.xy)?(_1859.left+" "+_1859.bottom):(_1859.bottom+" "+_1859.left);
return this.createElementNSPlus("gml:lowerCorner",{value:pos});
},"upperCorner":function(_185b){
var pos=(this.xy)?(_185b.right+" "+_185b.top):(_185b.top+" "+_185b.right);
return this.createElementNSPlus("gml:upperCorner",{value:pos});
}},OpenLayers.Format.GML.Base.prototype.writers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.writers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.writers["wfs"]},setGeometryTypes:function(){
this.geometryTypes={"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":(this.curve===true)?"Curve":"LineString","OpenLayers.Geometry.MultiLineString":(this.multiCurve===false)?"MultiLineString":"MultiCurve","OpenLayers.Geometry.Polygon":(this.surface===true)?"Surface":"Polygon","OpenLayers.Geometry.MultiPolygon":(this.multiSurface===false)?"MultiPolygon":"MultiSurface","OpenLayers.Geometry.Collection":"GeometryCollection"};
},CLASS_NAME:"OpenLayers.Format.GML.v3"});
OpenLayers.Format.Filter.v1_0_0=OpenLayers.Class(OpenLayers.Format.GML.v2,OpenLayers.Format.Filter.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/ogc/filter/1.0.0/filter.xsd",initialize:function(_185d){
OpenLayers.Format.GML.v2.prototype.initialize.apply(this,[_185d]);
},readers:{"ogc":OpenLayers.Util.applyDefaults({"PropertyIsEqualTo":function(node,obj){
var _1860=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO});
this.readChildNodes(node,_1860);
obj.filters.push(_1860);
},"PropertyIsNotEqualTo":function(node,obj){
var _1863=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO});
this.readChildNodes(node,_1863);
obj.filters.push(_1863);
}},OpenLayers.Format.Filter.v1.prototype.readers["ogc"]),"gml":OpenLayers.Format.GML.v2.prototype.readers["gml"],"feature":OpenLayers.Format.GML.v2.prototype.readers["feature"]},writers:{"ogc":OpenLayers.Util.applyDefaults({"PropertyIsEqualTo":function(_1864){
var node=this.createElementNSPlus("ogc:PropertyIsEqualTo");
this.writeNode("PropertyName",_1864,node);
this.writeNode("Literal",_1864.value,node);
return node;
},"PropertyIsNotEqualTo":function(_1866){
var node=this.createElementNSPlus("ogc:PropertyIsNotEqualTo");
this.writeNode("PropertyName",_1866,node);
this.writeNode("Literal",_1866.value,node);
return node;
},"BBOX":function(_1868){
var node=this.createElementNSPlus("ogc:BBOX");
this.writeNode("PropertyName",_1868,node);
var box=this.writeNode("gml:Box",_1868.value,node);
if(_1868.projection){
box.setAttribute("srsName",_1868.projection);
}
return node;
}},OpenLayers.Format.Filter.v1.prototype.writers["ogc"]),"gml":OpenLayers.Format.GML.v2.prototype.writers["gml"],"feature":OpenLayers.Format.GML.v2.prototype.writers["feature"]},writeSpatial:function(_186b,name){
var node=this.createElementNSPlus("ogc:"+name);
this.writeNode("PropertyName",_186b,node);
var child;
if(_186b.value instanceof OpenLayers.Geometry){
child=this.writeNode("feature:_geometry",_186b.value).firstChild;
}else{
child=this.writeNode("gml:Box",_186b.value);
}
if(_186b.projection){
child.setAttribute("srsName",_186b.projection);
}
node.appendChild(child);
return node;
},CLASS_NAME:"OpenLayers.Format.Filter.v1_0_0"});
OpenLayers.Format.Filter.v1_1_0=OpenLayers.Class(OpenLayers.Format.GML.v3,OpenLayers.Format.Filter.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/ogc/filter/1.1.0/filter.xsd",initialize:function(_186f){
OpenLayers.Format.GML.v3.prototype.initialize.apply(this,[_186f]);
},readers:{"ogc":OpenLayers.Util.applyDefaults({"PropertyIsEqualTo":function(node,obj){
var _1872=node.getAttribute("matchCase");
var _1873=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,matchCase:!(_1872==="false"||_1872==="0")});
this.readChildNodes(node,_1873);
obj.filters.push(_1873);
},"PropertyIsNotEqualTo":function(node,obj){
var _1876=node.getAttribute("matchCase");
var _1877=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO,matchCase:!(_1876==="false"||_1876==="0")});
this.readChildNodes(node,_1877);
obj.filters.push(_1877);
}},OpenLayers.Format.Filter.v1.prototype.readers["ogc"]),"gml":OpenLayers.Format.GML.v3.prototype.readers["gml"],"feature":OpenLayers.Format.GML.v3.prototype.readers["feature"]},writers:{"ogc":OpenLayers.Util.applyDefaults({"PropertyIsEqualTo":function(_1878){
var node=this.createElementNSPlus("ogc:PropertyIsEqualTo",{attributes:{matchCase:_1878.matchCase}});
this.writeNode("PropertyName",_1878,node);
this.writeNode("Literal",_1878.value,node);
return node;
},"PropertyIsNotEqualTo":function(_187a){
var node=this.createElementNSPlus("ogc:PropertyIsNotEqualTo",{attributes:{matchCase:_187a.matchCase}});
this.writeNode("PropertyName",_187a,node);
this.writeNode("Literal",_187a.value,node);
return node;
},"BBOX":function(_187c){
var node=this.createElementNSPlus("ogc:BBOX");
this.writeNode("PropertyName",_187c,node);
var box=this.writeNode("gml:Envelope",_187c.value);
if(_187c.projection){
box.setAttribute("srsName",_187c.projection);
}
node.appendChild(box);
return node;
}},OpenLayers.Format.Filter.v1.prototype.writers["ogc"]),"gml":OpenLayers.Format.GML.v3.prototype.writers["gml"],"feature":OpenLayers.Format.GML.v3.prototype.writers["feature"]},writeSpatial:function(_187f,name){
var node=this.createElementNSPlus("ogc:"+name);
this.writeNode("PropertyName",_187f,node);
var child;
if(_187f.value instanceof OpenLayers.Geometry){
child=this.writeNode("feature:_geometry",_187f.value).firstChild;
}else{
child=this.writeNode("gml:Envelope",_187f.value);
}
if(_187f.projection){
child.setAttribute("srsName",_187f.projection);
}
node.appendChild(child);
return node;
},CLASS_NAME:"OpenLayers.Format.Filter.v1_1_0"});
OpenLayers.Format.SLD.v1=OpenLayers.Class(OpenLayers.Format.Filter.v1_0_0,{namespaces:{sld:"http://www.opengis.net/sld",ogc:"http://www.opengis.net/ogc",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"sld",schemaLocation:null,defaultSymbolizer:{fillColor:"#808080",fillOpacity:1,strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,strokeDashstyle:"solid",pointRadius:3,graphicName:"square"},initialize:function(_1883){
OpenLayers.Format.Filter.v1_0_0.prototype.initialize.apply(this,[_1883]);
},read:function(data,_1885){
_1885=OpenLayers.Util.applyDefaults(_1885,this.options);
var sld={namedLayers:_1885.namedLayersAsArray===true?[]:{}};
this.readChildNodes(data,sld);
return sld;
},readers:OpenLayers.Util.applyDefaults({"sld":{"StyledLayerDescriptor":function(node,sld){
sld.version=node.getAttribute("version");
this.readChildNodes(node,sld);
},"Name":function(node,obj){
obj.name=this.getChildValue(node);
},"Title":function(node,obj){
obj.title=this.getChildValue(node);
},"Abstract":function(node,obj){
obj.description=this.getChildValue(node);
},"NamedLayer":function(node,sld){
var layer={userStyles:[],namedStyles:[]};
this.readChildNodes(node,layer);
for(var i=0,len=layer.userStyles.length;i<len;++i){
layer.userStyles[i].layerName=layer.name;
}
if(sld.namedLayers instanceof Array){
sld.namedLayers.push(layer);
}else{
sld.namedLayers[layer.name]=layer;
}
},"NamedStyle":function(node,layer){
layer.namedStyles.push(this.getChildName(node.firstChild));
},"UserStyle":function(node,layer){
var obj={defaultsPerSymbolizer:true,rules:[]};
this.readChildNodes(node,obj);
var style=new OpenLayers.Style(this.defaultSymbolizer,obj);
layer.userStyles.push(style);
},"IsDefault":function(node,style){
if(this.getChildValue(node)=="1"){
style.isDefault=true;
}
},"FeatureTypeStyle":function(node,style){
var obj={rules:[]};
this.readChildNodes(node,obj);
style.rules=obj.rules;
},"Rule":function(node,obj){
var rule=new OpenLayers.Rule();
this.readChildNodes(node,rule);
obj.rules.push(rule);
},"ElseFilter":function(node,rule){
rule.elseFilter=true;
},"MinScaleDenominator":function(node,rule){
rule.minScaleDenominator=parseFloat(this.getChildValue(node));
},"MaxScaleDenominator":function(node,rule){
rule.maxScaleDenominator=parseFloat(this.getChildValue(node));
},"TextSymbolizer":function(node,rule){
var _18aa=rule.symbolizer["Text"]||{};
this.readChildNodes(node,_18aa);
rule.symbolizer["Text"]=_18aa;
},"Label":function(node,_18ac){
var obj={};
this.readChildNodes(node,obj);
if(obj.property){
_18ac.label="${"+obj.property+"}";
}else{
var value=this.readOgcExpression(node);
if(value){
_18ac.label=value;
}
}
},"Font":function(node,_18b0){
this.readChildNodes(node,_18b0);
},"Halo":function(node,_18b2){
var obj={};
this.readChildNodes(node,obj);
_18b2.haloRadius=obj.haloRadius;
_18b2.haloColor=obj.fillColor;
_18b2.haloOpacity=obj.fillOpacity;
},"Radius":function(node,_18b5){
var _18b6=this.readOgcExpression(node);
if(_18b6!=null){
_18b5.haloRadius=_18b6;
}
},"LineSymbolizer":function(node,rule){
var _18b9=rule.symbolizer["Line"]||{};
this.readChildNodes(node,_18b9);
rule.symbolizer["Line"]=_18b9;
},"PolygonSymbolizer":function(node,rule){
var _18bc=rule.symbolizer["Polygon"]||{};
this.readChildNodes(node,_18bc);
rule.symbolizer["Polygon"]=_18bc;
},"PointSymbolizer":function(node,rule){
var _18bf=rule.symbolizer["Point"]||{};
this.readChildNodes(node,_18bf);
rule.symbolizer["Point"]=_18bf;
},"Stroke":function(node,_18c1){
_18c1.stroke=true;
this.readChildNodes(node,_18c1);
},"Fill":function(node,_18c3){
_18c3.fill=true;
this.readChildNodes(node,_18c3);
},"CssParameter":function(node,_18c5){
var _18c6=node.getAttribute("name");
var _18c7=this.cssMap[_18c6];
if(_18c7){
var value=this.readOgcExpression(node);
if(value){
_18c5[_18c7]=value;
}
}
},"Graphic":function(node,_18ca){
_18ca.graphic=true;
var _18cb={};
this.readChildNodes(node,_18cb);
var _18cc=["strokeColor","strokeWidth","strokeOpacity","strokeLinecap","fillColor","fillOpacity","graphicName","rotation","graphicFormat"];
var prop,value;
for(var i=0,len=_18cc.length;i<len;++i){
prop=_18cc[i];
value=_18cb[prop];
if(value!=undefined){
_18ca[prop]=value;
}
}
if(_18cb.opacity!=undefined){
_18ca.graphicOpacity=_18cb.opacity;
}
if(_18cb.size!=undefined){
_18ca.pointRadius=_18cb.size/2;
}
if(_18cb.href!=undefined){
_18ca.externalGraphic=_18cb.href;
}
if(_18cb.rotation!=undefined){
_18ca.rotation=_18cb.rotation;
}
},"ExternalGraphic":function(node,_18d2){
this.readChildNodes(node,_18d2);
},"Mark":function(node,_18d4){
this.readChildNodes(node,_18d4);
},"WellKnownName":function(node,_18d6){
_18d6.graphicName=this.getChildValue(node);
},"Opacity":function(node,obj){
var _18d9=this.readOgcExpression(node);
if(_18d9){
obj.opacity=_18d9;
}
},"Size":function(node,obj){
var size=this.readOgcExpression(node);
if(size){
obj.size=size;
}
},"Rotation":function(node,obj){
var _18df=this.readOgcExpression(node);
if(_18df){
obj.rotation=_18df;
}
},"OnlineResource":function(node,obj){
obj.href=this.getAttributeNS(node,this.namespaces.xlink,"href");
},"Format":function(node,_18e3){
_18e3.graphicFormat=this.getChildValue(node);
}}},OpenLayers.Format.Filter.v1_0_0.prototype.readers),cssMap:{"stroke":"strokeColor","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-dasharray":"strokeDashstyle","fill":"fillColor","fill-opacity":"fillOpacity","font-family":"fontFamily","font-size":"fontSize","font-weight":"fontWeight","font-style":"fontStyle"},getCssProperty:function(sym){
var css=null;
for(var prop in this.cssMap){
if(this.cssMap[prop]==sym){
css=prop;
break;
}
}
return css;
},getGraphicFormat:function(href){
var _18e8,regex;
for(var key in this.graphicFormats){
if(this.graphicFormats[key].test(href)){
_18e8=key;
break;
}
}
return _18e8||this.defautlGraphicFormat;
},defaultGraphicFormat:"image/png",graphicFormats:{"image/jpeg":/\.jpe?g$/i,"image/gif":/\.gif$/i,"image/png":/\.png$/i},write:function(sld){
return this.writers.sld.StyledLayerDescriptor.apply(this,[sld]);
},writers:OpenLayers.Util.applyDefaults({"sld":{"StyledLayerDescriptor":function(sld){
var root=this.createElementNSPlus("StyledLayerDescriptor",{attributes:{"version":this.VERSION,"xsi:schemaLocation":this.schemaLocation}});
if(sld.name){
this.writeNode("Name",sld.name,root);
}
if(sld.title){
this.writeNode("Title",sld.title,root);
}
if(sld.description){
this.writeNode("Abstract",sld.description,root);
}
if(sld.namedLayers instanceof Array){
for(var i=0,len=sld.namedLayers.length;i<len;++i){
this.writeNode("NamedLayer",sld.namedLayers[i],root);
}
}else{
for(var name in sld.namedLayers){
this.writeNode("NamedLayer",sld.namedLayers[name],root);
}
}
return root;
},"Name":function(name){
return this.createElementNSPlus("Name",{value:name});
},"Title":function(title){
return this.createElementNSPlus("Title",{value:title});
},"Abstract":function(_18f3){
return this.createElementNSPlus("Abstract",{value:_18f3});
},"NamedLayer":function(layer){
var node=this.createElementNSPlus("NamedLayer");
this.writeNode("Name",layer.name,node);
if(layer.namedStyles){
for(var i=0,len=layer.namedStyles.length;i<len;++i){
this.writeNode("NamedStyle",layer.namedStyles[i],node);
}
}
if(layer.userStyles){
for(var i=0,len=layer.userStyles.length;i<len;++i){
this.writeNode("UserStyle",layer.userStyles[i],node);
}
}
return node;
},"NamedStyle":function(name){
var node=this.createElementNSPlus("NamedStyle");
this.writeNode("Name",name,node);
return node;
},"UserStyle":function(style){
var node=this.createElementNSPlus("UserStyle");
if(style.name){
this.writeNode("Name",style.name,node);
}
if(style.title){
this.writeNode("Title",style.title,node);
}
if(style.description){
this.writeNode("Abstract",style.description,node);
}
if(style.isDefault){
this.writeNode("IsDefault",style.isDefault,node);
}
this.writeNode("FeatureTypeStyle",style,node);
return node;
},"IsDefault":function(bool){
return this.createElementNSPlus("IsDefault",{value:(bool)?"1":"0"});
},"FeatureTypeStyle":function(style){
var node=this.createElementNSPlus("FeatureTypeStyle");
for(var i=0,len=style.rules.length;i<len;++i){
this.writeNode("Rule",style.rules[i],node);
}
return node;
},"Rule":function(rule){
var node=this.createElementNSPlus("Rule");
if(rule.name){
this.writeNode("Name",rule.name,node);
}
if(rule.title){
this.writeNode("Title",rule.title,node);
}
if(rule.description){
this.writeNode("Abstract",rule.description,node);
}
if(rule.elseFilter){
this.writeNode("ElseFilter",null,node);
}else{
if(rule.filter){
this.writeNode("ogc:Filter",rule.filter,node);
}
}
if(rule.minScaleDenominator!=undefined){
this.writeNode("MinScaleDenominator",rule.minScaleDenominator,node);
}
if(rule.maxScaleDenominator!=undefined){
this.writeNode("MaxScaleDenominator",rule.maxScaleDenominator,node);
}
var types=OpenLayers.Style.SYMBOLIZER_PREFIXES;
var type,_1905;
for(var i=0,len=types.length;i<len;++i){
type=types[i];
_1905=rule.symbolizer[type];
if(_1905){
this.writeNode(type+"Symbolizer",_1905,node);
}
}
return node;
},"ElseFilter":function(){
return this.createElementNSPlus("ElseFilter");
},"MinScaleDenominator":function(scale){
return this.createElementNSPlus("MinScaleDenominator",{value:scale});
},"MaxScaleDenominator":function(scale){
return this.createElementNSPlus("MaxScaleDenominator",{value:scale});
},"LineSymbolizer":function(_190a){
var node=this.createElementNSPlus("LineSymbolizer");
this.writeNode("Stroke",_190a,node);
return node;
},"Stroke":function(_190c){
var node=this.createElementNSPlus("Stroke");
if(_190c.strokeColor!=undefined){
this.writeNode("CssParameter",{symbolizer:_190c,key:"strokeColor"},node);
}
if(_190c.strokeOpacity!=undefined){
this.writeNode("CssParameter",{symbolizer:_190c,key:"strokeOpacity"},node);
}
if(_190c.strokeWidth!=undefined){
this.writeNode("CssParameter",{symbolizer:_190c,key:"strokeWidth"},node);
}
return node;
},"CssParameter":function(obj){
return this.createElementNSPlus("CssParameter",{attributes:{name:this.getCssProperty(obj.key)},value:obj.symbolizer[obj.key]});
},"TextSymbolizer":function(_190f){
var node=this.createElementNSPlus("TextSymbolizer");
if(_190f.label!=null){
this.writeNode("Label",_190f.label,node);
}
if(_190f.fontFamily!=null||_190f.fontSize!=null||_190f.fontWeight!=null||_190f.fontStyle!=null){
this.writeNode("Font",_190f,node);
}
if(_190f.haloRadius!=null||_190f.haloColor!=null||_190f.haloOpacity!=null){
this.writeNode("Halo",_190f,node);
}
if(_190f.fillColor!=null||_190f.fillOpacity!=null){
this.writeNode("Fill",_190f,node);
}
return node;
},"Font":function(_1911){
var node=this.createElementNSPlus("Font");
if(_1911.fontFamily){
this.writeNode("CssParameter",{symbolizer:_1911,key:"fontFamily"},node);
}
if(_1911.fontSize){
this.writeNode("CssParameter",{symbolizer:_1911,key:"fontSize"},node);
}
if(_1911.fontWeight){
this.writeNode("CssParameter",{symbolizer:_1911,key:"fontWeight"},node);
}
if(_1911.fontStyle){
this.writeNode("CssParameter",{symbolizer:_1911,key:"fontStyle"},node);
}
return node;
},"Label":function(label){
var node=this.createElementNSPlus("Label");
var _1915=label.split("${");
node.appendChild(this.createTextNode(_1915[0]));
var item,last;
for(var i=1,len=_1915.length;i<len;i++){
item=_1915[i];
last=item.indexOf("}");
if(last>0){
this.writeNode("ogc:PropertyName",{property:item.substring(0,last)},node);
node.appendChild(this.createTextNode(item.substring(++last)));
}else{
node.appendChild(this.createTextNode("${"+item));
}
}
return node;
},"Halo":function(_191a){
var node=this.createElementNSPlus("Halo");
if(_191a.haloRadius){
this.writeNode("Radius",_191a.haloRadius,node);
}
if(_191a.haloColor||_191a.haloOpacity){
this.writeNode("Fill",{fillColor:_191a.haloColor,fillOpacity:_191a.haloOpacity},node);
}
return node;
},"Radius":function(value){
return node=this.createElementNSPlus("Radius",{value:value});
},"PolygonSymbolizer":function(_191d){
var node=this.createElementNSPlus("PolygonSymbolizer");
if(_191d.fillColor!=undefined||_191d.fillOpacity!=undefined){
this.writeNode("Fill",_191d,node);
}
if(_191d.strokeWidth!=undefined||_191d.strokeColor!=undefined||_191d.strokeOpacity!=undefined||_191d.strokeDashstyle!=undefined){
this.writeNode("Stroke",_191d,node);
}
return node;
},"Fill":function(_191f){
var node=this.createElementNSPlus("Fill");
if(_191f.fillColor){
this.writeNode("CssParameter",{symbolizer:_191f,key:"fillColor"},node);
}
if(_191f.fillOpacity!=null){
this.writeNode("CssParameter",{symbolizer:_191f,key:"fillOpacity"},node);
}
return node;
},"PointSymbolizer":function(_1921){
var node=this.createElementNSPlus("PointSymbolizer");
this.writeNode("Graphic",_1921,node);
return node;
},"Graphic":function(_1923){
var node=this.createElementNSPlus("Graphic");
if(_1923.externalGraphic!=undefined){
this.writeNode("ExternalGraphic",_1923,node);
}else{
this.writeNode("Mark",_1923,node);
}
if(_1923.graphicOpacity!=undefined){
this.writeNode("Opacity",_1923.graphicOpacity,node);
}
if(_1923.pointRadius!=undefined){
this.writeNode("Size",_1923.pointRadius*2,node);
}
if(_1923.rotation!=undefined){
this.writeNode("Rotation",_1923.rotation,node);
}
return node;
},"ExternalGraphic":function(_1925){
var node=this.createElementNSPlus("ExternalGraphic");
this.writeNode("OnlineResource",_1925.externalGraphic,node);
var _1927=_1925.graphicFormat||this.getGraphicFormat(_1925.externalGraphic);
this.writeNode("Format",_1927,node);
return node;
},"Mark":function(_1928){
var node=this.createElementNSPlus("Mark");
if(_1928.graphicName){
this.writeNode("WellKnownName",_1928.graphicName,node);
}
this.writeNode("Fill",_1928,node);
this.writeNode("Stroke",_1928,node);
return node;
},"WellKnownName":function(name){
return this.createElementNSPlus("WellKnownName",{value:name});
},"Opacity":function(value){
return this.createElementNSPlus("Opacity",{value:value});
},"Size":function(value){
return this.createElementNSPlus("Size",{value:value});
},"Rotation":function(value){
return this.createElementNSPlus("Rotation",{value:value});
},"OnlineResource":function(href){
return this.createElementNSPlus("OnlineResource",{attributes:{"xlink:type":"simple","xlink:href":href}});
},"Format":function(_192f){
return this.createElementNSPlus("Format",{value:_192f});
}}},OpenLayers.Format.Filter.v1_0_0.prototype.writers),CLASS_NAME:"OpenLayers.Format.SLD.v1"});
OpenLayers.Format.WFST.v1_0_0=OpenLayers.Class(OpenLayers.Format.Filter.v1_0_0,OpenLayers.Format.WFST.v1,{version:"1.0.0",schemaLocations:{"wfs":"http://schemas.opengis.net/wfs/1.0.0/WFS-transaction.xsd"},initialize:function(_1930){
OpenLayers.Format.Filter.v1_0_0.prototype.initialize.apply(this,[_1930]);
OpenLayers.Format.WFST.v1.prototype.initialize.apply(this,[_1930]);
},readers:{"wfs":OpenLayers.Util.applyDefaults({"WFS_TransactionResponse":function(node,obj){
obj.insertIds=[];
obj.success=false;
this.readChildNodes(node,obj);
},"InsertResult":function(node,_1934){
var obj={fids:[]};
this.readChildNodes(node,obj);
_1934.insertIds.push(obj.fids[0]);
},"TransactionResult":function(node,obj){
this.readChildNodes(node,obj);
},"Status":function(node,obj){
this.readChildNodes(node,obj);
},"SUCCESS":function(node,obj){
obj.success=true;
}},OpenLayers.Format.WFST.v1.prototype.readers["wfs"]),"gml":OpenLayers.Format.GML.v2.prototype.readers["gml"],"feature":OpenLayers.Format.GML.v2.prototype.readers["feature"],"ogc":OpenLayers.Format.Filter.v1_0_0.prototype.readers["ogc"]},writers:{"wfs":OpenLayers.Util.applyDefaults({"Query":function(_193c){
_193c=OpenLayers.Util.extend({featureNS:this.featureNS,featurePrefix:this.featurePrefix,featureType:this.featureType,srsName:this.srsName},_193c);
var node=this.createElementNSPlus("wfs:Query",{attributes:{typeName:(_193c.featureNS?_193c.featurePrefix+":":"")+_193c.featureType}});
if(_193c.featureNS){
node.setAttribute("xmlns:"+_193c.featurePrefix,_193c.featureNS);
}
if(_193c.propertyNames){
for(var i=0,len=_193c.propertyNames.length;i<len;i++){
this.writeNode("ogc:PropertyName",{property:_193c.propertyNames[i]},node);
}
}
if(_193c.filter){
this.setFilterProperty(_193c.filter);
this.writeNode("ogc:Filter",_193c.filter,node);
}
return node;
}},OpenLayers.Format.WFST.v1.prototype.writers["wfs"]),"gml":OpenLayers.Format.GML.v2.prototype.writers["gml"],"feature":OpenLayers.Format.GML.v2.prototype.writers["feature"],"ogc":OpenLayers.Format.Filter.v1_0_0.prototype.writers["ogc"]},CLASS_NAME:"OpenLayers.Format.WFST.v1_0_0"});
OpenLayers.Format.WFST.v1_1_0=OpenLayers.Class(OpenLayers.Format.Filter.v1_1_0,OpenLayers.Format.WFST.v1,{version:"1.1.0",schemaLocations:{"wfs":"http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"},initialize:function(_1940){
OpenLayers.Format.Filter.v1_1_0.prototype.initialize.apply(this,[_1940]);
OpenLayers.Format.WFST.v1.prototype.initialize.apply(this,[_1940]);
},readers:{"wfs":OpenLayers.Util.applyDefaults({"TransactionResponse":function(node,obj){
obj.insertIds=[];
obj.success=false;
this.readChildNodes(node,obj);
},"TransactionSummary":function(node,obj){
obj.success=true;
},"InsertResults":function(node,obj){
this.readChildNodes(node,obj);
},"Feature":function(node,_1948){
var obj={fids:[]};
this.readChildNodes(node,obj);
_1948.insertIds.push(obj.fids[0]);
}},OpenLayers.Format.WFST.v1.prototype.readers["wfs"]),"gml":OpenLayers.Format.GML.v3.prototype.readers["gml"],"feature":OpenLayers.Format.GML.v3.prototype.readers["feature"],"ogc":OpenLayers.Format.Filter.v1_1_0.prototype.readers["ogc"]},writers:{"wfs":OpenLayers.Util.applyDefaults({"Query":function(_194a){
_194a=OpenLayers.Util.extend({featureNS:this.featureNS,featurePrefix:this.featurePrefix,featureType:this.featureType,srsName:this.srsName},_194a);
var node=this.createElementNSPlus("wfs:Query",{attributes:{typeName:(_194a.featureNS?_194a.featurePrefix+":":"")+_194a.featureType,srsName:_194a.srsName}});
if(_194a.featureNS){
node.setAttribute("xmlns:"+_194a.featurePrefix,_194a.featureNS);
}
if(_194a.propertyNames){
for(var i=0,len=_194a.propertyNames.length;i<len;i++){
this.writeNode("wfs:PropertyName",{property:_194a.propertyNames[i]},node);
}
}
if(_194a.filter){
this.setFilterProperty(_194a.filter);
this.writeNode("ogc:Filter",_194a.filter,node);
}
return node;
},"PropertyName":function(obj){
return this.createElementNSPlus("wfs:PropertyName",{value:obj.property});
}},OpenLayers.Format.WFST.v1.prototype.writers["wfs"]),"gml":OpenLayers.Format.GML.v3.prototype.writers["gml"],"feature":OpenLayers.Format.GML.v3.prototype.writers["feature"],"ogc":OpenLayers.Format.Filter.v1_1_0.prototype.writers["ogc"]},CLASS_NAME:"OpenLayers.Format.WFST.v1_1_0"});
OpenLayers.Format.SLD.v1_0_0=OpenLayers.Class(OpenLayers.Format.SLD.v1,{VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd",initialize:function(_194f){
OpenLayers.Format.SLD.v1.prototype.initialize.apply(this,[_194f]);
},CLASS_NAME:"OpenLayers.Format.SLD.v1_0_0"});
OpenLayers.Protocol.WFS.v1_0_0=OpenLayers.Class(OpenLayers.Protocol.WFS.v1,{version:"1.0.0",CLASS_NAME:"OpenLayers.Protocol.WFS.v1_0_0"});
OpenLayers.Protocol.WFS.v1_1_0=OpenLayers.Class(OpenLayers.Protocol.WFS.v1,{version:"1.1.0",CLASS_NAME:"OpenLayers.Protocol.WFS.v1_1_0"});
;
include.setPath('resources');
(function($){
$.fn.quickPager=function(_2){
var _3={pageSize:10,currentPage:1,holder:null,pagerLocation:"after"};
var _2=$.extend(_3,_2);
return this.each(function(){
var _4=$(this);
var _5=1;
_4.wrap("<div class='simplePagerContainer'></div>");
_4.children().each(function(i){
if(i<_5*_2.pageSize&&i>=(_5-1)*_2.pageSize){
$(this).addClass("simplePagerPage"+_5);
}else{
$(this).addClass("simplePagerPage"+(_5+1));
_5++;
}
});
_4.children().hide();
_4.children(".simplePagerPage"+_2.currentPage).show();
if(_5<=1){
return;
}
var _7="<ul class='simplePagerNav'>";
for(i=1;i<=_5;i++){
if(i==_2.currentPage){
_7+="<li class='currentPage simplePageNav"+i+"'><a rel='"+i+"' href='#'>"+i+"</a></li>";
}else{
_7+="<li class='simplePageNav"+i+"'><a rel='"+i+"' href='#'>"+i+"</a></li>";
}
}
_7+="</ul>";
if(!_2.holder){
switch(_2.pagerLocation){
case "before":
_4.before(_7);
break;
case "both":
_4.before(_7);
_4.after(_7);
break;
default:
_4.after(_7);
}
}else{
$(_2.holder).append(_7);
}
_4.parent().find(".simplePagerNav a").click(function(){
var _8=$(this).attr("rel");
_2.currentPage=_8;
if(_2.holder){
$(this).parent("li").parent("ul").parent(_2.holder).find("li.currentPage").removeClass("currentPage");
$(this).parent("li").parent("ul").parent(_2.holder).find("a[rel='"+_8+"']").parent("li").addClass("currentPage");
}else{
$(this).parent("li").parent("ul").parent(".simplePagerContainer").find("li.currentPage").removeClass("currentPage");
$(this).parent("li").parent("ul").parent(".simplePagerContainer").find("a[rel='"+_8+"']").parent("li").addClass("currentPage");
}
_4.children().hide();
_4.find(".simplePagerPage"+_8).show();
return false;
});
});
};
})(jQuery);
;
include.setPath('resources');
jQuery.ui||(function(b){
var a=b.browser.mozilla&&(parseFloat(b.browser.version)<1.9);
b.ui={version:"1.8rc3",plugin:{add:function(d,e,g){
var f=b.ui[d].prototype;
for(var c in g){
f.plugins[c]=f.plugins[c]||[];
f.plugins[c].push([e,g[c]]);
}
},call:function(c,e,d){
var g=c.plugins[e];
if(!g||!c.element[0].parentNode){
return;
}
for(var f=0;f<g.length;f++){
if(c.options[g[f][0]]){
g[f][1].apply(c.element,d);
}
}
}},contains:function(d,c){
return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c);
},hasScroll:function(f,d){
if(b(f).css("overflow")=="hidden"){
return false;
}
var c=(d&&d=="left")?"scrollLeft":"scrollTop",e=false;
if(f[c]>0){
return true;
}
f[c]=1;
e=(f[c]>0);
f[c]=0;
return e;
},isOverAxis:function(d,c,e){
return (d>c)&&(d<(c+e));
},isOver:function(h,d,g,f,c,e){
return b.ui.isOverAxis(h,g,c)&&b.ui.isOverAxis(d,f,e);
},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};
b.fn.extend({_focus:b.fn.focus,focus:function(c,d){
return typeof c==="number"?this.each(function(){
var e=this;
setTimeout(function(){
b(e).focus();
(d&&d.call(e));
},c);
}):this._focus.apply(this,arguments);
},enableSelection:function(){
return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui");
},disableSelection:function(){
return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){
return false;
});
},scrollParent:function(){
var c;
if((b.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){
c=this.parents().filter(function(){
return (/(relative|absolute|fixed)/).test(b.curCSS(this,"position",1))&&(/(auto|scroll)/).test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1));
}).eq(0);
}else{
c=this.parents().filter(function(){
return (/(auto|scroll)/).test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1));
}).eq(0);
}
return (/fixed/).test(this.css("position"))||!c.length?b(document):c;
},zIndex:function(f){
if(f!==undefined){
return this.css("zIndex",f);
}
if(this.length){
var d=b(this[0]),c,e;
while(d.length&&d[0]!==document){
c=d.css("position");
if(c=="absolute"||c=="relative"||c=="fixed"){
e=parseInt(d.css("zIndex"));
if(!isNaN(e)&&e!=0){
return e;
}
}
d=d.parent();
}
}
return 0;
}});
b.extend(b.expr[":"],{data:function(e,d,c){
return !!b.data(e,c[3]);
},focusable:function(d){
var e=d.nodeName.toLowerCase(),c=b.attr(d,"tabindex");
return (/input|select|textarea|button|object/.test(e)?!d.disabled:"a"==e||"area"==e?d.href||!isNaN(c):!isNaN(c))&&!b(d)["area"==e?"parents":"closest"](":hidden").length;
},tabbable:function(d){
var c=b.attr(d,"tabindex");
return (isNaN(c)||c>=0)&&b(d).is(":focusable");
}});
})(jQuery);
(function(b){
var a=b.fn.remove;
b.fn.remove=function(c,d){
return this.each(function(){
if(!d){
if(!c||b.filter(c,[this]).length){
b("*",this).add(this).each(function(){
b(this).triggerHandler("remove");
});
}
}
return a.call(b(this),c,d);
});
};
b.widget=function(d,f,c){
var e=d.split(".")[0],h;
d=d.split(".")[1];
h=e+"-"+d;
if(!c){
c=f;
f=b.Widget;
}
b.expr[":"][h]=function(i){
return !!b.data(i,d);
};
b[e]=b[e]||{};
b[e][d]=function(i,j){
if(arguments.length){
this._createWidget(i,j);
}
};
var g=new f();
g.options=b.extend({},g.options);
b[e][d].prototype=b.extend(true,g,{namespace:e,widgetName:d,widgetEventPrefix:b[e][d].prototype.widgetEventPrefix||d,widgetBaseClass:h},c);
b.widget.bridge(d,b[e][d]);
};
b.widget.bridge=function(d,c){
b.fn[d]=function(g){
var e=typeof g==="string",f=Array.prototype.slice.call(arguments,1),h=this;
g=!e&&f.length?b.extend.apply(null,[true,g].concat(f)):g;
if(e&&g.substring(0,1)==="_"){
return h;
}
if(e){
this.each(function(){
var i=b.data(this,d),j=i&&b.isFunction(i[g])?i[g].apply(i,f):i;
if(j!==i&&j!==undefined){
h=j;
return false;
}
});
}else{
this.each(function(){
var i=b.data(this,d);
if(i){
if(g){
i.option(g);
}
i._init();
}else{
b.data(this,d,new c(g,this));
}
});
}
return h;
};
};
b.Widget=function(c,d){
if(arguments.length){
this._createWidget(c,d);
}
};
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,e){
this.element=b(e).data(this.widgetName,this);
this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(e)[this.widgetName],d);
var c=this;
this.element.bind("remove."+this.widgetName,function(){
c.destroy();
});
this._create();
this._init();
},_create:function(){
},_init:function(){
},destroy:function(){
this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled");
},widget:function(){
return this.element;
},option:function(e,f){
var d=e,c=this;
if(arguments.length===0){
return b.extend({},c.options);
}
if(typeof e==="string"){
if(f===undefined){
return this.options[e];
}
d={};
d[e]=f;
}
b.each(d,function(g,h){
c._setOption(g,h);
});
return c;
},_setOption:function(c,d){
this.options[c]=d;
if(c==="disabled"){
this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d);
}
return this;
},enable:function(){
return this._setOption("disabled",false);
},disable:function(){
return this._setOption("disabled",true);
},_trigger:function(d,e,f){
var h=this.options[d];
e=b.Event(e);
e.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();
f=f||{};
if(e.originalEvent){
for(var c=b.event.props.length,g;c;){
g=b.event.props[--c];
e[g]=e.originalEvent[g];
}
}
this.element.trigger(e,f);
return !(b.isFunction(h)&&h.call(this.element[0],e,f)===false||e.isDefaultPrevented());
}};
})(jQuery);
(function(f){
f.ui=f.ui||{};
var c=/left|center|right/,e="center",d=/top|center|bottom/,g="center",a=f.fn.position;
f.fn.position=function(i){
if(!i||!i.of){
return a.apply(this,arguments);
}
i=f.extend({},i);
var l=f(i.of),n=(i.collision||"flip").split(" "),m=i.offset?i.offset.split(" "):[0,0],k,h,j;
if(i.of.nodeType===9){
k=l.width();
h=l.height();
j={top:0,left:0};
}else{
if(i.of.scrollTo&&i.of.document){
k=l.width();
h=l.height();
j={top:l.scrollTop(),left:l.scrollLeft()};
}else{
if(i.of.preventDefault){
i.at="left top";
k=h=0;
j={top:i.of.pageY,left:i.of.pageX};
}else{
k=l.outerWidth();
h=l.outerHeight();
j=l.offset();
}
}
}
f.each(["my","at"],function(){
var o=(i[this]||"").split(" ");
if(o.length===1){
o=c.test(o[0])?o.concat([g]):d.test(o[0])?[e].concat(o):[e,g];
}
o[0]=c.test(o[0])?o[0]:e;
o[1]=d.test(o[1])?o[1]:g;
i[this]=o;
});
if(n.length===1){
n[1]=n[0];
}
m[0]=parseInt(m[0],10)||0;
if(m.length===1){
m[1]=m[0];
}
m[1]=parseInt(m[1],10)||0;
if(i.at[0]==="right"){
j.left+=k;
}else{
if(i.at[0]===e){
j.left+=k/2;
}
}
if(i.at[1]==="bottom"){
j.top+=h;
}else{
if(i.at[1]===g){
j.top+=h/2;
}
}
j.left+=m[0];
j.top+=m[1];
return this.each(function(){
var t=f(this),s=t.outerWidth(),r=t.outerHeight(),p=f.extend({},j),u,o,q;
if(i.my[0]==="right"){
p.left-=s;
}else{
if(i.my[0]===e){
p.left-=s/2;
}
}
if(i.my[1]==="bottom"){
p.top-=r;
}else{
if(i.my[1]===g){
p.top-=r/2;
}
}
f.each(["left","top"],function(w,v){
if(f.ui.position[n[w]]){
f.ui.position[n[w]][v](p,{targetWidth:k,targetHeight:h,elemWidth:s,elemHeight:r,offset:m,my:i.my,at:i.at});
}
});
if(f.fn.bgiframe){
t.bgiframe();
}
t.offset(f.extend(p,{using:i.using}));
});
};
f.ui.position={fit:{left:function(h,i){
var k=f(window),j=h.left+i.elemWidth-k.width()-k.scrollLeft();
h.left=j>0?h.left-j:Math.max(0,h.left);
},top:function(h,i){
var k=f(window),j=h.top+i.elemHeight-k.height()-k.scrollTop();
h.top=j>0?h.top-j:Math.max(0,h.top);
}},flip:{left:function(i,j){
if(j.at[0]==="center"){
return;
}
var l=f(window),k=i.left+j.elemWidth-l.width()-l.scrollLeft(),h=j.my[0]==="left"?-j.elemWidth:j.my[0]==="right"?j.elemWidth:0,m=-2*j.offset[0];
i.left+=i.left<0?h+j.targetWidth+m:k>0?h-j.targetWidth+m:0;
},top:function(i,k){
if(k.at[1]==="center"){
return;
}
var m=f(window),l=i.top+k.elemHeight-m.height()-m.scrollTop(),h=k.my[1]==="top"?-k.elemHeight:k.my[1]==="bottom"?k.elemHeight:0,j=k.at[1]==="top"?k.targetHeight:-k.targetHeight,n=-2*k.offset[1];
i.top+=i.top<0?h+k.targetHeight+n:l>0?h+j+n:0;
}}};
if(!f.offset.setOffset){
f.offset.setOffset=function(l,i){
if(/static/.test(jQuery.curCSS(l,"position"))){
l.style.position="relative";
}
var k=jQuery(l),n=k.offset(),h=parseInt(jQuery.curCSS(l,"top",true),10)||0,m=parseInt(jQuery.curCSS(l,"left",true),10)||0,j={top:(i.top-n.top)+h,left:(i.left-n.left)+m};
if("using" in i){
i.using.call(l,j);
}else{
k.css(j);
}
};
var b=f.fn.offset;
f.fn.offset=function(h){
var i=this[0];
if(!i||!i.ownerDocument){
return null;
}
if(h){
return this.each(function(){
f.offset.setOffset(this,h);
});
}
return b.call(this);
};
}
})(jQuery);
(function(a){
a.widget("ui.autocomplete",{options:{minLength:1,delay:300},_create:function(){
var b=this;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){
var d=a.ui.keyCode;
switch(c.keyCode){
case d.PAGE_UP:
b._move("previousPage",c);
break;
case d.PAGE_DOWN:
b._move("nextPage",c);
break;
case d.UP:
b._move("previous",c);
c.preventDefault();
break;
case d.DOWN:
b._move("next",c);
c.preventDefault();
break;
case d.ENTER:
if(b.menu.active){
c.preventDefault();
}
case d.TAB:
if(!b.menu.active){
return;
}
b.menu.select();
break;
case d.ESCAPE:
b.element.val(b.term);
b.close(c);
break;
case 16:
case 17:
case 18:
break;
default:
clearTimeout(b.searching);
b.searching=setTimeout(function(){
b.search(null,c);
},b.options.delay);
break;
}
}).bind("focus.autocomplete",function(){
b.previous=b.element.val();
}).bind("blur.autocomplete",function(c){
clearTimeout(b.searching);
b.closing=setTimeout(function(){
b.close(c);
},150);
});
this._initSource();
this.response=function(){
return b._response.apply(b,arguments);
};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(this.element.parent()).menu({focus:function(d,e){
var c=e.item.data("item.autocomplete");
if(false!==b._trigger("focus",null,{item:c})){
b.element.val(c.value);
}
},selected:function(d,e){
var c=e.item.data("item.autocomplete");
if(false!==b._trigger("select",d,{item:c})){
b.element.val(c.value);
}
b.close(d);
b.previous=b.element.val();
if(b.element[0]!=document.activeElement){
b.element.focus();
}
}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
if(a.fn.bgiframe){
this.menu.element.bgiframe();
}
},destroy:function(){
this.element.removeClass("ui-autocomplete-input ui-widget ui-widget-content").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
a.Widget.prototype.destroy.call(this);
},_setOption:function(b){
a.Widget.prototype._setOption.apply(this,arguments);
if(b=="source"){
this._initSource();
}
},_initSource:function(){
if(a.isArray(this.options.source)){
var c=this.options.source;
this.source=function(e,d){
var f=new RegExp(a.ui.autocomplete.escapeRegex(e.term),"i");
d(a.grep(c,function(g){
return f.test(g.value||g.label||g);
}));
};
}else{
if(typeof this.options.source=="string"){
var b=this.options.source;
this.source=function(e,d){
a.getJSON(b,e,d);
};
}else{
this.source=this.options.source;
}
}
},search:function(c,b){
c=c!=null?c:this.element.val();
if(c.length<this.options.minLength){
return this.close(b);
}
clearTimeout(this.closing);
if(this._trigger("search")===false){
return;
}
return this._search(c);
},_search:function(b){
this.term=this.element.addClass("ui-autocomplete-loading").val();
this.source({term:b},this.response);
},_response:function(b){
if(b.length){
b=this._normalize(b);
this._trigger("open");
this._suggest(b);
}else{
this.close();
}
this.element.removeClass("ui-autocomplete-loading");
},close:function(b){
clearTimeout(this.closing);
if(this.menu.element.is(":visible")){
this._trigger("close",b);
this.menu.element.hide();
this.menu.deactivate();
}
if(this.previous!=this.element.val()){
this._trigger("change",b);
}
},_normalize:function(b){
if(b.length&&b[0].label&&b[0].value){
return b;
}
return a.map(b,function(c){
if(typeof c=="string"){
return {label:c,value:c};
}
return a.extend({label:c.label||c.value,value:c.value||c.label},c);
});
},_suggest:function(c){
var b=this,d=this.menu.element.empty();
this._renderMenu(d,c);
this.menu.deactivate();
this.menu.refresh();
this.menu.element.show().position({my:"left top",at:"left bottom",of:this.element,collision:"none"});
if(d.width()<=this.element.width()){
d.width(this.element.width());
}
},_renderMenu:function(d,c){
var b=this;
a.each(c,function(e,f){
b._renderItem(d,f);
});
},_renderItem:function(b,c){
return a("<li></li>").data("item.autocomplete",c).append("<a>"+c.label+"</a>").appendTo(b);
},_move:function(c,b){
if(!this.menu.element.is(":visible")){
this.search(null,b);
return;
}
if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){
this.element.val(this.term);
this.menu.deactivate();
return;
}
this.menu[c]();
},widget:function(){
return this.menu.element;
}});
a.extend(a.ui.autocomplete,{escapeRegex:function(b){
return b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1");
}});
})(jQuery);
(function(a){
a.widget("ui.menu",{_create:function(){
var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"menu","aria-activedescendant":"ui-active-menuitem"}).click(function(c){
c.preventDefault();
b.select();
});
this.refresh();
},refresh:function(){
var c=this;
var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(){
c.activate(a(this).parent());
});
},activate:function(d){
this.deactivate();
this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",null,{item:d});
if(this.hasScroll()){
var e=d.offset().top-this.element.offset().top,b=this.element.attr("scrollTop"),c=this.element.height();
if(e<0){
this.element.attr("scrollTop",b+e);
}else{
if(e>c){
this.element.attr("scrollTop",b+e-c+d.height());
}
}
}
},deactivate:function(){
if(!this.active){
return;
}
this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this.active=null;
},next:function(){
this.move("next","li:first");
},previous:function(){
this.move("prev","li:last");
},first:function(){
return this.active&&!this.active.prev().length;
},last:function(){
return this.active&&!this.active.next().length;
},move:function(d,c){
if(!this.active){
this.activate(this.element.children(c));
return;
}
var b=this.active[d]();
if(b.length){
this.activate(b);
}else{
this.activate(this.element.children(c));
}
},nextPage:function(){
if(this.hasScroll()){
if(!this.active||this.last()){
this.activate(this.element.children(":first"));
return;
}
var d=this.active.offset().top,c=this.element.height(),b=this.element.children("li").filter(function(){
var e=a(this).offset().top-d-c+a(this).height();
return e<10&&e>-10;
});
if(!b.length){
b=this.element.children(":last");
}
this.activate(b);
}else{
this.activate(this.element.children(!this.active||this.last()?":first":":last"));
}
},previousPage:function(){
if(this.hasScroll()){
if(!this.active||this.first()){
this.activate(this.element.children(":last"));
return;
}
var c=this.active.offset().top,b=this.element.height();
result=this.element.children("li").filter(function(){
var d=a(this).offset().top-c+b-a(this).height();
return d<10&&d>-10;
});
if(!result.length){
result=this.element.children(":first");
}
this.activate(result);
}else{
this.activate(this.element.children(!this.active||this.first()?":last":":first"));
}
},hasScroll:function(){
return this.element.height()<this.element.attr("scrollHeight");
},select:function(){
this._trigger("selected",null,{item:this.active});
}});
})(jQuery);
(function(d){
var c,b="ui-button ui-widget ui-state-default ui-corner-all",a="ui-state-hover ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon ui-button-text-only";
d.widget("ui.button",{options:{text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){
this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var e=this,g=this.options,h=this.type==="checkbox"||this.type==="radio",i="ui-state-hover"+(!h?" ui-state-active":""),f="ui-state-focus";
if(g.label===null){
g.label=this.buttonElement.html();
}
this.buttonElement.addClass(b).attr("role","button").bind("mouseenter.button",function(){
if(g.disabled){
return;
}
d(this).addClass("ui-state-hover");
if(this===c){
d(this).addClass("ui-state-active");
}
}).bind("mouseleave.button",function(){
if(g.disabled){
return;
}
d(this).removeClass(i);
}).bind("focus.button",function(){
d(this).addClass(f);
}).bind("blur.button",function(){
d(this).removeClass(f);
});
if(this.type==="checkbox"){
this.buttonElement.bind("click.button",function(){
if(g.disabled){
return;
}
d(this).toggleClass("ui-state-active");
e.buttonElement.attr("aria-pressed",e.element[0].checked);
});
}else{
if(this.type==="radio"){
this.buttonElement.bind("click.button",function(){
if(g.disabled){
return;
}
d(this).addClass("ui-state-active");
e.buttonElement.attr("aria-pressed",true);
var k=e.element[0],j=k.name,l=k.form,m;
if(j){
if(l){
m=d(l).find("[name="+j+"]");
}else{
m=d("[name="+j+"]",k.ownerDocument).filter(function(){
return !this.form;
});
}
m.not(k).map(function(){
return d(this).button("widget")[0];
}).removeClass("ui-state-active").attr("aria-pressed",false);
}
});
}else{
this.buttonElement.bind("mousedown.button",function(){
if(g.disabled){
return;
}
d(this).addClass("ui-state-active");
c=this;
d(document).one("mouseup",function(){
c=null;
});
}).bind("mouseup.button",function(){
if(g.disabled){
return;
}
d(this).removeClass("ui-state-active");
}).bind("keydown.button",function(j){
if(j.keyCode==d.ui.keyCode.SPACE||j.keyCode==d.ui.keyCode.ENTER){
d(this).addClass("ui-state-active");
}
}).bind("keyup.button",function(){
d(this).removeClass("ui-state-active");
});
if(this.buttonElement.is("a")){
this.buttonElement.keyup(function(j){
if(j.keyCode==d.ui.keyCode.SPACE){
d(this).trigger("click");
}
});
}
}
}
this._resetButton();
},_determineButtonType:function(){
this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";
if(this.type==="checkbox"||this.type==="radio"){
this.buttonElement=d("[for="+this.element.attr("id")+"]");
this.element.hide();
var e=this.element.is(":checked");
if(e){
this.buttonElement.addClass("ui-state-active");
}
this.buttonElement.attr("aria-pressed",e);
}else{
this.buttonElement=this.element;
}
},widget:function(){
return this.buttonElement;
},destroy:function(){
this.buttonElement.removeClass(b+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){
this.buttonElement.removeAttr("title");
}
if(this.type==="checkbox"||this.type==="radio"){
this.element.show();
}
d.Widget.prototype.destroy.call(this);
},_setOption:function(e,f){
d.Widget.prototype._setOption.apply(this,arguments);
this._resetButton();
},_resetButton:function(){
if(this.type==="input"){
if(this.options.label){
this.element.val(this.options.label);
}
return;
}
var h=this.buttonElement,g=d("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(h.empty()).text();
var f=this.options.icons,e=f.primary&&f.secondary;
if(f.primary||f.secondary){
h.addClass("ui-button-text-icon"+(e?"s":""));
if(f.primary){
h.prepend("<span class='ui-button-icon-primary ui-icon "+f.primary+"'></span>");
}
if(f.secondary){
h.append("<span class='ui-button-icon-secondary ui-icon "+f.secondary+"'></span>");
}
if(!this.options.text){
h.addClass(e?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon");
if(!this.hasTitle){
h.attr("title",g);
}
}
}else{
h.addClass("ui-button-text-only");
}
}});
d.widget("ui.buttonset",{_create:function(){
this.element.addClass("ui-button-set");
this.buttons=this.element.find(":button, :submit, :reset, :checkbox, :radio, a, .ui-button").button().map(function(){
return d(this).button("widget")[0];
}).removeClass("ui-corner-all").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end();
},_setOption:function(e,f){
if(e==="disabled"){
this.buttons.button("option",e,f);
}
d.Widget.prototype._setOption.apply(this,arguments);
},destroy:function(){
this.element.removeClass("ui-button-set");
this.buttons.button("destroy").removeClass("ui-corner-left ui-corner-right");
d.Widget.prototype.destroy.call(this);
}});
})(jQuery);
(function(b){
var a="ui-dialog ui-widget ui-widget-content ui-corner-all ";
b.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){
this.originalTitle=this.element.attr("title");
var k=this,l=k.options,i=l.title||k.originalTitle||"&#160;",d=b.ui.dialog.getTitleId(k.element),j=(k.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass(a+l.dialogClass).css({zIndex:l.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(m){
if(l.closeOnEscape&&m.keyCode&&m.keyCode==b.ui.keyCode.ESCAPE){
k.close(m);
m.preventDefault();
}
}).attr({role:"dialog","aria-labelledby":d}).mousedown(function(m){
k.moveToTop(false,m);
}),f=k.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j),e=(k.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),h=b("<a href=\"#\"></a>").addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){
h.addClass("ui-state-hover");
},function(){
h.removeClass("ui-state-hover");
}).focus(function(){
h.addClass("ui-state-focus");
}).blur(function(){
h.removeClass("ui-state-focus");
}).click(function(m){
k.close(m);
return false;
}).appendTo(e),g=(k.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(h),c=b("<span></span>").addClass("ui-dialog-title").attr("id",d).html(i).prependTo(e);
if(b.isFunction(l.beforeclose)&&!b.isFunction(l.beforeClose)){
l.beforeClose=l.beforeclose;
}
e.find("*").add(e).disableSelection();
(l.draggable&&b.fn.draggable&&k._makeDraggable());
(l.resizable&&b.fn.resizable&&k._makeResizable());
k._createButtons(l.buttons);
k._isOpen=false;
(b.fn.bgiframe&&j.bgiframe());
},_init:function(){
if(this.options.autoOpen){
this.open();
}
},destroy:function(){
var c=this;
(c.overlay&&c.overlay.destroy());
c.uiDialog.hide();
c.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
c.uiDialog.remove();
(c.originalTitle&&c.element.attr("title",c.originalTitle));
return c;
},widget:function(){
return this.uiDialog;
},close:function(e){
var c=this;
if(false===c._trigger("beforeClose",e)){
return;
}
(c.overlay&&c.overlay.destroy());
c.uiDialog.unbind("keypress.ui-dialog");
c._isOpen=false;
(c.options.hide?c.uiDialog.hide(c.options.hide,function(){
c._trigger("close",e);
}):c.uiDialog.hide()&&c._trigger("close",e));
b.ui.dialog.overlay.resize();
if(c.options.modal){
var d=0;
b(".ui-dialog").each(function(){
if(this!=c.uiDialog[0]){
d=Math.max(d,b(this).css("z-index"));
}
});
b.ui.dialog.maxZ=d;
}
return c;
},isOpen:function(){
return this._isOpen;
},moveToTop:function(g,f){
var c=this,e=c.options;
if((e.modal&&!g)||(!e.stack&&!e.modal)){
return c._trigger("focus",f);
}
if(e.zIndex>b.ui.dialog.maxZ){
b.ui.dialog.maxZ=e.zIndex;
}
(c.overlay&&c.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=++b.ui.dialog.maxZ));
var d={scrollTop:c.element.attr("scrollTop"),scrollLeft:c.element.attr("scrollLeft")};
c.uiDialog.css("z-index",++b.ui.dialog.maxZ);
c.element.attr(d);
c._trigger("focus",f);
return c;
},open:function(){
if(this._isOpen){
return;
}
var d=this,e=d.options,c=d.uiDialog;
d.overlay=e.modal?new b.ui.dialog.overlay(d):null;
(c.next().length&&c.appendTo("body"));
d._size();
d._position(e.position);
c.show(e.show);
d.moveToTop(true);
(e.modal&&c.bind("keypress.ui-dialog",function(h){
if(h.keyCode!=b.ui.keyCode.TAB){
return;
}
var g=b(":tabbable",this),i=g.filter(":first"),f=g.filter(":last");
if(h.target==f[0]&&!h.shiftKey){
i.focus(1);
return false;
}else{
if(h.target==i[0]&&h.shiftKey){
f.focus(1);
return false;
}
}
}));
b([]).add(c.find(".ui-dialog-content :tabbable:first")).add(c.find(".ui-dialog-buttonpane :tabbable:first")).add(c).filter(":first").focus();
d._trigger("open");
d._isOpen=true;
return d;
},_createButtons:function(f){
var e=this,c=false,d=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
e.uiDialog.find(".ui-dialog-buttonpane").remove();
(typeof f=="object"&&f!==null&&b.each(f,function(){
return !(c=true);
}));
if(c){
b.each(f,function(g,i){
var h=b("<button type=\"button\"></button>").text(g).click(function(){
i.apply(e.element[0],arguments);
}).appendTo(d);
(b.fn.button&&h.button());
});
d.appendTo(e.uiDialog);
}
},_makeDraggable:function(){
var c=this,e=c.options,f=b(document),d;
c.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(g){
d=e.height==="auto"?"auto":b(this).height();
b(this).height(b(this).height()).addClass("ui-dialog-dragging");
c._trigger("dragStart",g);
},drag:function(g){
c._trigger("drag",g);
},stop:function(g,h){
e.position=[h.position.left-f.scrollLeft(),h.position.top-f.scrollTop()];
b(this).removeClass("ui-dialog-dragging").height(d);
c._trigger("dragStop",g);
b.ui.dialog.overlay.resize();
}});
},_makeResizable:function(g){
g=(g===undefined?this.options.resizable:g);
var d=this,f=d.options,c=d.uiDialog.css("position"),e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";
d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:d._minHeight(),handles:e,start:function(h){
b(this).addClass("ui-dialog-resizing");
d._trigger("resizeStart",h);
},resize:function(h){
d._trigger("resize",h);
},stop:function(h){
b(this).removeClass("ui-dialog-resizing");
f.height=b(this).height();
f.width=b(this).width();
d._trigger("resizeStop",h);
b.ui.dialog.overlay.resize();
}}).css("position",c).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
},_minHeight:function(){
var c=this.options;
return (c.height=="auto"?c.minHeight:Math.min(c.minHeight,c.height));
},_position:function(d){
var e=[],f=[0,0];
d=d||b.ui.dialog.prototype.options.position;
if(typeof d=="string"||(typeof d=="object"&&"0" in d)){
e=d.split?d.split(" "):[d[0],d[1]];
if(e.length==1){
e[1]=e[0];
}
b.each(["left","top"],function(h,g){
if(+e[h]==e[h]){
f[h]=e[h];
e[h]=g;
}
});
}else{
if(typeof d=="object"){
if("left" in d){
e[0]="left";
f[0]=d.left;
}else{
if("right" in d){
e[0]="right";
f[0]=-d.right;
}
}
if("top" in d){
e[1]="top";
f[1]=d.top;
}else{
if("bottom" in d){
e[1]="bottom";
f[1]=-d.bottom;
}
}
}
}
var c=this.uiDialog.is(":visible");
if(!c){
this.uiDialog.show();
}
this.uiDialog.css({top:0,left:0}).position({my:e.join(" "),at:e.join(" "),offset:f.join(" "),of:window,collision:"fit",using:function(h){
var g=b(this).css(h).offset().top;
if(g<0){
b(this).css("top",h.top-g);
}
}});
if(!c){
this.uiDialog.hide();
}
},_setOption:function(f,g){
var d=this,c=d.uiDialog,h=c.is(":data(resizable)"),e=false;
switch(f){
case "beforeclose":
f="beforeClose";
break;
case "buttons":
d._createButtons(g);
break;
case "closeText":
d.uiDialogTitlebarCloseText.text(""+g);
break;
case "dialogClass":
c.removeClass(d.options.dialogClass).addClass(a+g);
break;
case "disabled":
(g?c.addClass("ui-dialog-disabled"):c.removeClass("ui-dialog-disabled"));
break;
case "draggable":
(g?d._makeDraggable():c.draggable("destroy"));
break;
case "height":
e=true;
break;
case "maxHeight":
(h&&c.resizable("option","maxHeight",g));
e=true;
break;
case "maxWidth":
(h&&c.resizable("option","maxWidth",g));
e=true;
break;
case "minHeight":
(h&&c.resizable("option","minHeight",g));
e=true;
break;
case "minWidth":
(h&&c.resizable("option","minWidth",g));
e=true;
break;
case "position":
d._position(g);
break;
case "resizable":
(h&&!g&&c.resizable("destroy"));
(h&&typeof g=="string"&&c.resizable("option","handles",g));
(h||(g!==false&&d._makeResizable(g)));
break;
case "title":
b(".ui-dialog-title",d.uiDialogTitlebar).html(""+(g||"&#160;"));
break;
case "width":
e=true;
break;
}
b.Widget.prototype._setOption.apply(d,arguments);
(e&&d._size());
},_size:function(){
var d=this.options;
this.element.css("width","auto").hide();
var c=this.uiDialog.css({height:"auto",width:d.width}).height();
this.element.css(d.height=="auto"?{minHeight:Math.max(d.minHeight-c,0),height:"auto"}:{minHeight:0,height:Math.max(d.height-c,0)}).show();
(this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight()));
}});
b.extend(b.ui.dialog,{version:"1.8rc3",uuid:0,maxZ:0,getTitleId:function(c){
return "ui-dialog-title-"+(c.attr("id")||++this.uuid);
},overlay:function(c){
this.$el=b.ui.dialog.overlay.create(c);
}});
b.extend(b.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(c){
return c+".dialog-overlay";
}).join(" "),create:function(d){
if(this.instances.length===0){
setTimeout(function(){
if(b.ui.dialog.overlay.instances.length){
b(document).bind(b.ui.dialog.overlay.events,function(e){
return (b(e.target).zIndex()>=b.ui.dialog.overlay.maxZ);
});
}
},1);
b(document).bind("keydown.dialog-overlay",function(e){
if(d.options.closeOnEscape&&e.keyCode&&e.keyCode==b.ui.keyCode.ESCAPE){
d.close(e);
e.preventDefault();
}
});
b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize);
}
var c=(this.oldInstances.length?this.oldInstances.splice(0,1)[0]:b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
(b.fn.bgiframe&&c.bgiframe());
this.instances.push(c);
return c;
},destroy:function(c){
this.oldInstances.push(this.instances.splice(b.inArray(this.instances,c),1)[0]);
if(this.instances.length===0){
b([document,window]).unbind(".dialog-overlay");
}
c.remove();
var d=0;
b.each(this.instances,function(){
d=Math.max(d,this.css("z-index"));
});
this.maxZ=d;
},height:function(){
if(b.browser.msie&&b.browser.version<7){
var d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
var c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(d<c){
return b(window).height()+"px";
}else{
return d+"px";
}
}else{
return b(document).height()+"px";
}
},width:function(){
if(b.browser.msie&&b.browser.version<7){
var c=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
var d=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(c<d){
return b(window).width()+"px";
}else{
return c+"px";
}
}else{
return b(document).width()+"px";
}
},resize:function(){
var c=b([]);
b.each(b.ui.dialog.overlay.instances,function(){
c=c.add(this);
});
c.css({width:0,height:0}).css({width:b.ui.dialog.overlay.width(),height:b.ui.dialog.overlay.height()});
}});
b.extend(b.ui.dialog.overlay.prototype,{destroy:function(){
b.ui.dialog.overlay.destroy(this.$el);
}});
})(jQuery);
(function(b){
var a=0;
b.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href=\"#{href}\"><span>#{label}</span></a></li>"},_create:function(){
this._tabify(true);
},_setOption:function(c,d){
if(c=="selected"){
if(this.options.collapsible&&d==this.options.selected){
return;
}
this.select(d);
}else{
this.options[c]=d;
this._tabify();
}
},_tabId:function(c){
return c.title&&c.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+(++a);
},_sanitizeSelector:function(c){
return c.replace(/:/g,"\\:");
},_cookie:function(){
var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+b.data(this.list[0]));
return b.cookie.apply(null,[c].concat(b.makeArray(arguments)));
},_ui:function(d,c){
return {tab:d,panel:c,index:this.anchors.index(d)};
},_cleanup:function(){
this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){
var c=b(this);
c.html(c.data("label.tabs")).removeData("label.tabs");
});
},_tabify:function(p){
this.list=this.element.find("ol,ul").eq(0);
this.lis=b("li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){
return b("a",this)[0];
});
this.panels=b([]);
var q=this,e=this.options;
var d=/^#.+/;
this.anchors.each(function(s,o){
var r=b(o).attr("href");
var u=r.split("#")[0],v;
if(u&&(u===location.toString().split("#")[0]||(v=b("base")[0])&&u===v.href)){
r=o.hash;
o.href=r;
}
if(d.test(r)){
q.panels=q.panels.add(q._sanitizeSelector(r));
}else{
if(r!="#"){
b.data(o,"href.tabs",r);
b.data(o,"load.tabs",r.replace(/#.*$/,""));
var x=q._tabId(o);
o.href="#"+x;
var w=b("#"+x);
if(!w.length){
w=b(e.panelTemplate).attr("id",x).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(q.panels[s-1]||q.list);
w.data("destroy.tabs",true);
}
q.panels=q.panels.add(w);
}else{
e.disabled.push(s);
}
}
});
if(p){
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(e.selected===undefined){
if(location.hash){
this.anchors.each(function(r,o){
if(o.hash==location.hash){
e.selected=r;
return false;
}
});
}
if(typeof e.selected!="number"&&e.cookie){
e.selected=parseInt(q._cookie(),10);
}
if(typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){
e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
e.selected=e.selected||(this.lis.length?0:-1);
}else{
if(e.selected===null){
e.selected=-1;
}
}
e.selected=((e.selected>=0&&this.anchors[e.selected])||e.selected<0)?e.selected:0;
e.disabled=b.unique(e.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r,o){
return q.lis.index(r);
}))).sort();
if(b.inArray(e.selected,e.disabled)!=-1){
e.disabled.splice(b.inArray(e.selected,e.disabled),1);
}
this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(e.selected>=0&&this.anchors.length){
this.panels.eq(e.selected).removeClass("ui-tabs-hide");
this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active");
q.element.queue("tabs",function(){
q._trigger("show",null,q._ui(q.anchors[e.selected],q.panels[e.selected]));
});
this.load(e.selected);
}
b(window).bind("unload",function(){
q.lis.add(q.anchors).unbind(".tabs");
q.lis=q.anchors=q.panels=null;
});
}else{
e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(e.cookie){
this._cookie(e.selected,e.cookie);
}
for(var h=0,n;(n=this.lis[h]);h++){
b(n)[b.inArray(h,e.disabled)!=-1&&!b(n).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");
}
if(e.cache===false){
this.anchors.removeData("cache.tabs");
}
this.lis.add(this.anchors).unbind(".tabs");
if(e.event!="mouseover"){
var g=function(o,i){
if(i.is(":not(.ui-state-disabled)")){
i.addClass("ui-state-"+o);
}
};
var k=function(o,i){
i.removeClass("ui-state-"+o);
};
this.lis.bind("mouseover.tabs",function(){
g("hover",b(this));
});
this.lis.bind("mouseout.tabs",function(){
k("hover",b(this));
});
this.anchors.bind("focus.tabs",function(){
g("focus",b(this).closest("li"));
});
this.anchors.bind("blur.tabs",function(){
k("focus",b(this).closest("li"));
});
}
var c,j;
if(e.fx){
if(b.isArray(e.fx)){
c=e.fx[0];
j=e.fx[1];
}else{
c=j=e.fx;
}
}
function f(i,o){
i.css({display:""});
if(!b.support.opacity&&o.opacity){
i[0].style.removeAttribute("filter");
}
};
var l=j?function(i,o){
b(i).closest("li").addClass("ui-tabs-selected ui-state-active");
o.hide().removeClass("ui-tabs-hide").animate(j,j.duration||"normal",function(){
f(o,j);
q._trigger("show",null,q._ui(i,o[0]));
});
}:function(i,o){
b(i).closest("li").addClass("ui-tabs-selected ui-state-active");
o.removeClass("ui-tabs-hide");
q._trigger("show",null,q._ui(i,o[0]));
};
var m=c?function(o,i){
i.animate(c,c.duration||"normal",function(){
q.lis.removeClass("ui-tabs-selected ui-state-active");
i.addClass("ui-tabs-hide");
f(i,c);
q.element.dequeue("tabs");
});
}:function(o,i,r){
q.lis.removeClass("ui-tabs-selected ui-state-active");
i.addClass("ui-tabs-hide");
q.element.dequeue("tabs");
};
this.anchors.bind(e.event+".tabs",function(){
var o=this,s=b(this).closest("li"),i=q.panels.filter(":not(.ui-tabs-hide)"),r=b(q._sanitizeSelector(this.hash));
if((s.hasClass("ui-tabs-selected")&&!e.collapsible)||s.hasClass("ui-state-disabled")||s.hasClass("ui-state-processing")||q._trigger("select",null,q._ui(this,r[0]))===false){
this.blur();
return false;
}
e.selected=q.anchors.index(this);
q.abort();
if(e.collapsible){
if(s.hasClass("ui-tabs-selected")){
e.selected=-1;
if(e.cookie){
q._cookie(e.selected,e.cookie);
}
q.element.queue("tabs",function(){
m(o,i);
}).dequeue("tabs");
this.blur();
return false;
}else{
if(!i.length){
if(e.cookie){
q._cookie(e.selected,e.cookie);
}
q.element.queue("tabs",function(){
l(o,r);
});
q.load(q.anchors.index(this));
this.blur();
return false;
}
}
}
if(e.cookie){
q._cookie(e.selected,e.cookie);
}
if(r.length){
if(i.length){
q.element.queue("tabs",function(){
m(o,i);
});
}
q.element.queue("tabs",function(){
l(o,r);
});
q.load(q.anchors.index(this));
}else{
throw "jQuery UI Tabs: Mismatching fragment identifier.";
}
if(b.browser.msie){
this.blur();
}
});
this.anchors.bind("click.tabs",function(){
return false;
});
},destroy:function(){
var c=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){
var d=b.data(this,"href.tabs");
if(d){
this.href=d;
}
var e=b(this).unbind(".tabs");
b.each(["href","load","cache"],function(f,g){
e.removeData(g+".tabs");
});
});
this.lis.unbind(".tabs").add(this.panels).each(function(){
if(b.data(this,"destroy.tabs")){
b(this).remove();
}else{
b(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "));
}
});
if(c.cookie){
this._cookie(null,c.cookie);
}
return this;
},add:function(f,e,d){
if(d===undefined){
d=this.anchors.length;
}
var c=this,h=this.options,j=b(h.tabTemplate.replace(/#\{href\}/g,f).replace(/#\{label\}/g,e)),i=!f.indexOf("#")?f.replace("#",""):this._tabId(b("a",j)[0]);
j.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var g=b("#"+i);
if(!g.length){
g=b(h.panelTemplate).attr("id",i).data("destroy.tabs",true);
}
g.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(d>=this.lis.length){
j.appendTo(this.list);
g.appendTo(this.list[0].parentNode);
}else{
j.insertBefore(this.lis[d]);
g.insertBefore(this.panels[d]);
}
h.disabled=b.map(h.disabled,function(l,k){
return l>=d?++l:l;
});
this._tabify();
if(this.anchors.length==1){
h.selected=0;
j.addClass("ui-tabs-selected ui-state-active");
g.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){
c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]));
});
this.load(0);
}
this._trigger("add",null,this._ui(this.anchors[d],this.panels[d]));
return this;
},remove:function(c){
var e=this.options,f=this.lis.eq(c).remove(),d=this.panels.eq(c).remove();
if(f.hasClass("ui-tabs-selected")&&this.anchors.length>1){
this.select(c+(c+1<this.anchors.length?1:-1));
}
e.disabled=b.map(b.grep(e.disabled,function(h,g){
return h!=c;
}),function(h,g){
return h>=c?--h:h;
});
this._tabify();
this._trigger("remove",null,this._ui(f.find("a")[0],d[0]));
return this;
},enable:function(c){
var d=this.options;
if(b.inArray(c,d.disabled)==-1){
return;
}
this.lis.eq(c).removeClass("ui-state-disabled");
d.disabled=b.grep(d.disabled,function(f,e){
return f!=c;
});
this._trigger("enable",null,this._ui(this.anchors[c],this.panels[c]));
return this;
},disable:function(d){
var c=this,e=this.options;
if(d!=e.selected){
this.lis.eq(d).addClass("ui-state-disabled");
e.disabled.push(d);
e.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[d],this.panels[d]));
}
return this;
},select:function(c){
if(typeof c=="string"){
c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));
}else{
if(c===null){
c=-1;
}
}
if(c==-1&&this.options.collapsible){
c=this.options.selected;
}
this.anchors.eq(c).trigger(this.options.event+".tabs");
return this;
},load:function(f){
var d=this,h=this.options,c=this.anchors.eq(f)[0],e=b.data(c,"load.tabs");
this.abort();
if(!e||this.element.queue("tabs").length!==0&&b.data(c,"cache.tabs")){
this.element.dequeue("tabs");
return;
}
this.lis.eq(f).addClass("ui-state-processing");
if(h.spinner){
var g=b("span",c);
g.data("label.tabs",g.html()).html(h.spinner);
}
this.xhr=b.ajax(b.extend({},h.ajaxOptions,{url:e,success:function(j,i){
b(d._sanitizeSelector(c.hash)).html(j);
d._cleanup();
if(h.cache){
b.data(c,"cache.tabs",true);
}
d._trigger("load",null,d._ui(d.anchors[f],d.panels[f]));
try{
h.ajaxOptions.success(j,i);
}
catch(k){
}
},error:function(k,i,j){
d._cleanup();
d._trigger("load",null,d._ui(d.anchors[f],d.panels[f]));
try{
h.ajaxOptions.error(k,i,f,c);
}
catch(j){
}
}}));
d.element.dequeue("tabs");
return this;
},abort:function(){
this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){
this.xhr.abort();
delete this.xhr;
}
this._cleanup();
return this;
},url:function(d,c){
this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",c);
return this;
},length:function(){
return this.anchors.length;
}});
b.extend(b.ui.tabs,{version:"1.8rc3"});
b.extend(b.ui.tabs.prototype,{rotation:null,rotate:function(e,g){
var c=this,h=this.options;
var d=c._rotate||(c._rotate=function(i){
clearTimeout(c.rotation);
c.rotation=setTimeout(function(){
var j=h.selected;
c.select(++j<c.anchors.length?j:0);
},e);
if(i){
i.stopPropagation();
}
});
var f=c._unrotate||(c._unrotate=!g?function(i){
if(i.clientX){
c.rotate(null);
}
}:function(i){
t=h.selected;
d();
});
if(e){
this.element.bind("tabsshow",d);
this.anchors.bind(h.event+".tabs",f);
d();
}else{
clearTimeout(c.rotation);
this.element.unbind("tabsshow",d);
this.anchors.unbind(h.event+".tabs",f);
delete this._rotate;
delete this._unrotate;
}
return this;
}});
})(jQuery);
(function(a){
a.widget("ui.progressbar",{options:{value:0},_create:function(){
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue();
},destroy:function(){
this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
a.Widget.prototype.destroy.apply(this,arguments);
},value:function(b){
if(b===undefined){
return this._value();
}
this._setOption("value",b);
return this;
},_setOption:function(b,c){
switch(b){
case "value":
this.options.value=c;
this._refreshValue();
this._trigger("change");
break;
}
a.Widget.prototype._setOption.apply(this,arguments);
},_value:function(){
var b=this.options.value;
if(typeof b!=="number"){
b=0;
}
if(b<this._valueMin()){
b=this._valueMin();
}
if(b>this._valueMax()){
b=this._valueMax();
}
return b;
},_valueMin:function(){
return 0;
},_valueMax:function(){
return 100;
},_refreshValue:function(){
var b=this.value();
this.valueDiv[b===this._valueMax()?"addClass":"removeClass"]("ui-corner-right").width(b+"%");
this.element.attr("aria-valuenow",b);
}});
a.extend(a.ui.progressbar,{version:"1.8rc3"});
})(jQuery);
;
include.setPath('resources');
(function($){
$.fn.listnav=function(_2){
var _3=$.extend({},$.fn.listnav.defaults,_2);
var _4=["_","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];
var _5=false;
_3.prefixes=$.map(_3.prefixes,function(n){
return n.toLowerCase();
});
return this.each(function(){
var _7,_8,_9,_a,_b,id;
id=this.id;
_7=$("#"+id+"-nav");
_9=$(this);
var _d={},_e=0,_f=true,_10=0,_11="";
function _12(){
_7.append(_13());
_a=$(".ln-letters",_7).slice(0,1);
if(_3.showCounts){
_b=$(".ln-letter-count",_7).slice(0,1);
}
_14();
_15();
if(_3.flagDisabled){
_16();
}
_17();
if(!_3.includeAll){
_9.show();
}
if(!_3.includeAll){
$(".all",_a).remove();
}
if(!_3.includeNums){
$("._",_a).remove();
}
if(!_3.includeOther){
$(".-",_a).remove();
}
$(":last",_a).addClass("ln-last");
if($.cookie&&(_3.cookieName!=null)){
var _18=$.cookie(_3.cookieName);
if(_18!=null){
_3.initLetter=_18;
}
}
if(_3.initLetter!=""){
_5=true;
$("."+_3.initLetter.toLowerCase(),_a).slice(0,1).click();
}else{
if(_3.includeAll){
$(".all",_a).addClass("ln-selected");
}else{
for(var i=((_3.includeNums)?0:1);i<_4.length;i++){
if(_d[_4[i]]>0){
_5=true;
$("."+_4[i],_a).slice(0,1).click();
break;
}
}
}
}
};
function _1a(){
_b.css({top:$(".a",_a).slice(0,1).offset({margin:false,border:true}).top-_b.outerHeight({margin:true})});
};
function _14(){
var str,_1c,_1d,spl,_1f,_20=(_3.prefixes.length>0);
$(_9).children().each(function(){
_1f=$(this),_1c="",str=$.trim(_1f.text()).toLowerCase();
if(str!=""){
if(_20){
spl=str.split(" ");
if((spl.length>1)&&($.inArray(spl[0],_3.prefixes)>-1)){
_1c=spl[1].charAt(0);
_21(_1c,_1f,true);
}
}
_1c=str.charAt(0);
_21(_1c,_1f);
}
});
};
function _21(_22,$el,_24){
if(/\W/.test(_22)){
_22="-";
}
if(!isNaN(_22)){
_22="_";
}
$el.addClass("ln-"+_22);
if(_d[_22]==undefined){
_d[_22]=0;
}
_d[_22]++;
if(!_24){
_e++;
}
};
function _16(){
for(var i=0;i<_4.length;i++){
if(_d[_4[i]]==undefined){
$("."+_4[i],_a).addClass("ln-disabled");
}
}
};
function _15(){
_9.append("<li class=\"ln-no-match\" style=\"display:none\">"+_3.noMatchText+"</li>");
};
function _26(el){
if($(el).hasClass("all")){
return _e;
}else{
var _28=_d[$(el).attr("class").split(" ")[0]];
return (_28!=undefined)?_28:0;
}
};
function _17(){
if(_3.showCounts){
_7.mouseover(function(){
_1a();
});
}
if(_3.showCounts){
$("a",_a).mouseover(function(){
var _29=$(this).position().left;
var _2a=($(this).outerWidth({margin:true})-1)+"px";
var _2b=_26(this);
_b.css({left:_29,width:_2a}).text(_2b).show();
});
$("a",_a).mouseout(function(){
_b.hide();
});
}
$("a",_a).click(function(){
$("a.ln-selected",_a).removeClass("ln-selected");
var _2c=$(this).attr("class").split(" ")[0];
if(_2c=="all"){
_9.children().show();
_9.children(".ln-no-match").hide();
_f=true;
}else{
if(_f){
_9.children().hide();
_f=false;
}else{
if(_11!=""){
_9.children(".ln-"+_11).hide();
}
}
var _2d=_26(this);
if(_2d>0){
_9.children(".ln-no-match").hide();
_9.children(".ln-"+_2c).show();
}else{
_9.children(".ln-no-match").show();
}
_11=_2c;
}
if($.cookie&&(_3.cookieName!=null)){
$.cookie(_3.cookieName,_2c);
}
$(this).addClass("ln-selected");
$(this).blur();
if(!_5&&(_3.onClick!=null)){
_3.onClick(_2c);
}else{
_5=false;
}
return false;
});
};
function _13(){
var _2e=[];
for(var i=1;i<_4.length;i++){
if(_2e.length==0){
_2e.push("<a class=\"all\" href=\"#\">ALL</a><a class=\"_\" href=\"#\">0-9</a>");
}
_2e.push("<a class=\""+_4[i]+"\" href=\"#\">"+((_4[i]=="-")?"...":_4[i].toUpperCase())+"</a>");
}
return "<div class=\"ln-letters\">"+_2e.join("")+"</div>"+((_3.showCounts)?"<div class=\"ln-letter-count\" style=\"display:none; position:absolute; top:0; left:0; width:20px;\">0</div>":"");
};
_12();
});
};
$.fn.listnav.defaults={initLetter:"",includeAll:true,incudeOther:false,includeNums:true,flagDisabled:true,noMatchText:"No matching entries",showCounts:true,cookieName:null,onClick:null,prefixes:[]};
})(jQuery);
;
include.setPath('jmvc/plugins/controller');
include.plugins("lang","lang/class","lang/openajax","lang/inflector","dom/delegate");
include("controller");
if(jQuery.View){
include.plugins("controller/view");
}
if(jQuery.History){
include.plugins("controller/history");
}
;
include.setPath('jmvc/plugins/lang');
jQuery.String={};
jQuery.String.strip=function(_1){
return _1.replace(/^\s+/,"").replace(/\s+$/,"");
};
jQuery.Function={};
jQuery.Function.params=function(_2){
var ps=_2.toString().match(/^[\s\(]*function[^(]*\((.*?)\)/)[1].split(",");
if(ps.length==1&&!ps[0]){
return [];
}
for(var i=0;i<ps.length;i++){
ps[i]=jQuery.String.strip(ps[i]);
}
return ps;
};
jQuery.Native={};
jQuery.Native.extend=function(_5,_6){
if(!jQuery[_5]){
jQuery[_5]={};
}
var _7=jQuery[_5];
for(var _8 in _6){
_7[_8]=_6[_8];
if(jQuery.conflict){
window[_5][_8]=_6[_8];
if(typeof _6[_8]=="function"){
var _9=jQuery.Function.params(_6[_8]);
if(_9.length==0){
continue;
}
jQuery.Native.set_prototype(_5,_8,_6[_8]);
}
}
}
};
jQuery.Native.set_prototype=function(_a,_b,_c){
if(!_c){
_c=jQuery[_a][_b];
}
window[_a].prototype[_b]=function(){
var _d=[this];
for(var i=0,_f=arguments.length;i<_f;i++){
_d.push(arguments[i]);
}
return _c.apply(this,_d);
};
};
jQuery.Native.extend("String",{capitalize:function(s){
return s.charAt(0).toUpperCase()+s.substr(1).toLowerCase();
},include:function(s,_12){
return s.indexOf(_12)>-1;
},ends_with:function(s,_14){
var d=s.length-_14.length;
return d>=0&&s.lastIndexOf(_14)===d;
},camelize:function(s){
var _17=s.split(/_|-/);
for(var i=1;i<_17.length;i++){
_17[i]=jQuery.String.capitalize(_17[i]);
}
return _17.join("");
},classize:function(s){
var _1a=s.split(/_|-/);
for(var i=0;i<_1a.length;i++){
_1a[i]=jQuery.String.capitalize(_1a[i]);
}
return _1a.join("");
},niceName:function(s){
var _1d=s.split(/_|-/);
for(var i=0;i<_1d.length;i++){
_1d[i]=jQuery.String.capitalize(_1d[i]);
}
return _1d.join(" ");
},strip:jQuery.String.strip,underscore:function(s){
return s.replace(/::/,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase();
}});
jQuery.Native.extend("Array",{include:function(a,_21){
for(var i=0;i<a.length;i++){
if(a[i]==_21){
return true;
}
}
return false;
}});
jQuery.Array.from=function(_23){
if(!_23){
return [];
}
var _24=[];
for(var i=0,_26=_23.length;i<_26;i++){
_24.push(_23[i]);
}
return _24;
};
jQuery.Array.is=function(_27){
return Object.prototype.toString.call(a)==="[object Array]";
};
jQuery.Native.extend("Function",{bind:function(f,obj){
var _2a=jQuery.Array.from(arguments);
_2a.shift();
_2a.shift();
var _2b=f,_2c=arguments[1];
return function(){
return _2b.apply(_2c,_2a.concat(jQuery.Array.from(arguments)));
};
},params:jQuery.Function.params});
jQuery.Native.extend("Number",{to_padded_string:function(n,len,_2f){
var _30=n.toString(_2f||10);
var ret="",_32=len-_30.length;
for(var i=0;i<_32;i++){
ret+="0";
}
return ret+_30;
}});
jQuery.Native.Array=jQuery.Array;
jQuery.Native.Function=jQuery.Function;
jQuery.Native.Number=jQuery.Number;
jQuery.Native.String=jQuery.String;
;
include.setPath('jmvc/plugins/lang/class');
(function(){
var _1=false,_2=/xyz/.test(function(){
xyz;
})?/\b_super\b/:/.*/,_3=function(_4){
var _5=jQuery.makeArray(arguments),f,_7;
_4=_5.shift();
if(!jQuery.isArray(_4)){
_4=[_4];
}
_7=this;
return function(){
var _8=_5.concat(jQuery.makeArray(arguments)),_9;
for(f=0;f<_4.length;f++){
if(!_4[f]){
continue;
}
_9=typeof _4[f]=="string";
if(_9&&_7._set_called){
_7.called=_4[f];
}
_8=(_9?_7[_4[f]]:_4[f]).apply(_7,_8);
if(!_8){
_8=[];
}else{
if(!jQuery.isArray(_8)||_8._use_call){
_8=[_8];
}
}
}
return _8;
};
};
jQuery.Class=function(){
};
jQuery.Class.callback=_3;
jQuery.Class.extend=function(_a,_b,_c){
if(typeof _a!="string"){
_c=_b;
_b=_a;
_a=null;
}
if(!_c){
_c=_b;
_b=null;
}
_c=_c||{};
var _d=this;
var _e=this.prototype;
_1=true;
var _f=new this();
_1=false;
for(var _10 in _c){
_f[_10]=typeof _c[_10]=="function"&&typeof _e[_10]=="function"&&_2.test(_c[_10])?(function(_11,fn){
return function(){
var tmp=this._super;
this._super=_e[_11];
var ret=fn.apply(this,arguments);
this._super=tmp;
return ret;
};
})(_10,_c[_10]):_c[_10];
}
function _15(){
if(!_1&&this.init){
this.init.apply(this,arguments);
}
};
_15.prototype=_f;
_15.prototype.Class=_15;
_15.constructor=_15;
for(var _10 in this){
if(this.hasOwnProperty(_10)&&_10!="prototype"){
_15[_10]=this[_10];
}
}
for(var _10 in _b){
_15[_10]=typeof _b[_10]=="function"&&typeof _15[_10]=="function"&&_2.test(_b[_10])?(function(_16,fn){
return function(){
var tmp=this._super;
this._super=_d[_16];
var ret=fn.apply(this,arguments);
this._super=tmp;
return ret;
};
})(_10,_b[_10]):_b[_10];
}
_15.newInstance=function(){
_1=true;
var _1a=new _15();
_1=false;
if(_1a.init){
_1a.init.apply(_1a,arguments);
}
return _1a;
};
_15.extend=arguments.callee;
if(_a){
var _1b=window;
var _1c=_a.split(/\./);
for(var i=0;i<_1c.length-1;i++){
_1b=_1b[_1c[i]]||(_1b[_1c[i]]={});
}
_1b[_1c[_1c.length-1]]=_15;
_15.className=_1c[_1c.length-1];
_15.fullName=_a;
}
if(_15.init){
_15.init(_15);
}
if(_d.extended){
_d.extended(_15);
}
return _15;
};
jQuery.Class.prototype={callback:_3};
})();
;
include.setPath('jmvc/plugins/lang/openajax');
if(!window["OpenAjax"]){
OpenAjax=new function(){
var t=true;
var f=false;
var g=window;
var _4="org.openajax.hub.";
var h={};
this.hub=h;
h.implementer="http://openajax.org";
h.implVersion="1.0";
h.specVersion="1.0";
h.implExtraData={};
var _6={};
h.libraries=_6;
h.registerLibrary=function(_7,_8,_9,_a){
_6[_7]={prefix:_7,namespaceURI:_8,version:_9,extraData:_a};
this.publish(_4+"registerLibrary",_6[_7]);
};
h.unregisterLibrary=function(_b){
this.publish(_4+"unregisterLibrary",_6[_b]);
delete _6[_b];
};
h._subscriptions={c:{},s:[]};
h._cleanup=[];
h._subIndex=0;
h._pubDepth=0;
h.subscribe=function(_c,_d,_e,_f,_10){
if(!_e){
_e=window;
}
var _11=_c+"."+this._subIndex;
var sub={scope:_e,cb:_d,fcb:_10,data:_f,sid:this._subIndex++,hdl:_11};
var _13=_c.split(".");
this._subscribe(this._subscriptions,_13,0,sub);
return _11;
};
h.publish=function(_14,_15){
var _16=_14.split(".");
this._pubDepth++;
this._publish(this._subscriptions,_16,0,_14,_15);
this._pubDepth--;
if((this._cleanup.length>0)&&(this._pubDepth==0)){
for(var i=0;i<this._cleanup.length;i++){
this.unsubscribe(this._cleanup[i].hdl);
}
delete (this._cleanup);
this._cleanup=[];
}
};
h.unsubscribe=function(sub){
var _19=sub.split(".");
var sid=_19.pop();
this._unsubscribe(this._subscriptions,_19,0,sid);
};
h._subscribe=function(_1b,_1c,_1d,sub){
var _1f=_1c[_1d];
if(_1d==_1c.length){
_1b.s.push(sub);
}else{
if(typeof _1b.c=="undefined"){
_1b.c={};
}
if(typeof _1b.c[_1f]=="undefined"){
_1b.c[_1f]={c:{},s:[]};
this._subscribe(_1b.c[_1f],_1c,_1d+1,sub);
}else{
this._subscribe(_1b.c[_1f],_1c,_1d+1,sub);
}
}
};
h._publish=function(_20,_21,_22,_23,msg,pcb,_26){
if(typeof _20!="undefined"){
var _27;
if(_22==_21.length){
_27=_20;
}else{
this._publish(_20.c[_21[_22]],_21,_22+1,_23,msg,pcb,_26);
this._publish(_20.c["*"],_21,_22+1,_23,msg,pcb,_26);
_27=_20.c["**"];
}
if(typeof _27!="undefined"){
var _28=_27.s;
var max=_28.length;
for(var i=0;i<max;i++){
if(_28[i].cb){
var sc=_28[i].scope;
var cb=_28[i].cb;
var fcb=_28[i].fcb;
var d=_28[i].data;
var sid=_28[i].sid;
var _30=_28[i].cid;
if(typeof cb=="string"){
cb=sc[cb];
}
if(typeof fcb=="string"){
fcb=sc[fcb];
}
if((!fcb)||(fcb.call(sc,_23,msg,d))){
if((!pcb)||(pcb(_23,msg,_26,_30))){
cb.call(sc,_23,msg,d,sid);
}
}
}
}
}
}
};
h._unsubscribe=function(_31,_32,_33,sid){
if(typeof _31!="undefined"){
if(_33<_32.length){
var _35=_31.c[_32[_33]];
this._unsubscribe(_35,_32,_33+1,sid);
if(_35.s.length==0){
for(var x in _35.c){
return;
}
delete _31.c[_32[_33]];
}
return;
}else{
var _37=_31.s;
var max=_37.length;
for(var i=0;i<max;i++){
if(sid==_37[i].sid){
if(this._pubDepth>0){
_37[i].cb=null;
this._cleanup.push(_37[i]);
}else{
_37.splice(i,1);
}
return;
}
}
}
}
};
h.reinit=function(){
for(var lib in OpenAjax.hub.libraries){
delete OpenAjax.hub.libraries[lib];
}
OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","1.0",{});
delete OpenAjax._subscriptions;
OpenAjax._subscriptions={c:{},s:[]};
delete OpenAjax._cleanup;
OpenAjax._cleanup=[];
OpenAjax._subIndex=0;
OpenAjax._pubDepth=0;
};
};
OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","1.0",{});
}
OpenAjax.hub.registerLibrary("JavaScriptMVC","http://JavaScriptMVC.com","1.5",{});
;
include.setPath('jmvc/plugins/lang/inflector');
include.plugins("lang");
include("inflector");
;
include.setPath('jmvc/plugins/lang/inflector');
jQuery.Inflector={Inflections:{plural:[[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)ix|ex$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"],[/$/,"s"]],singular:[[/(quiz)zes$/i,"$1"],[/(matr)ices$/i,"$1ix"],[/(vert|ind)ices$/i,"$1ex"],[/^(ox)en/i,"$1"],[/(alias|status)es$/i,"$1"],[/(octop|vir)i$/i,"$1us"],[/(cris|ax|test)es$/i,"$1is"],[/(shoe)s$/i,"$1"],[/(o)es$/i,"$1"],[/(bus)es$/i,"$1"],[/([m|l])ice$/i,"$1ouse"],[/(x|ch|ss|sh)es$/i,"$1"],[/(m)ovies$/i,"$1ovie"],[/(s)eries$/i,"$1eries"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/([lr])ves$/i,"$1f"],[/(tive)s$/i,"$1"],[/(hive)s$/i,"$1"],[/([^f])ves$/i,"$1fe"],[/(^analy)ses$/i,"$1sis"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1$2sis"],[/([ti])a$/i,"$1um"],[/(n)ews$/i,"$1ews"],[/s$/i,""]],irregular:[["move","moves"],["sex","sexes"],["child","children"],["man","men"],["woman","women"],["foreman","foremen"],["person","people"]],uncountable:["sheep","fish","series","species","money","rice","information","equipment"]},pluralize:function(_1){
for(var i=0;i<jQuery.Inflector.Inflections.uncountable.length;i++){
var _3=jQuery.Inflector.Inflections.uncountable[i];
if(_1.toLowerCase()==_3){
return _3;
}
}
for(var i=0;i<jQuery.Inflector.Inflections.irregular.length;i++){
var _4=jQuery.Inflector.Inflections.irregular[i][0];
var _5=jQuery.Inflector.Inflections.irregular[i][1];
if((_1.toLowerCase()==_4)||(_1==_5)){
return _1.substring(0,1)+_5.substring(1);
}
}
for(var i=0;i<jQuery.Inflector.Inflections.plural.length;i++){
var _6=jQuery.Inflector.Inflections.plural[i][0];
var _7=jQuery.Inflector.Inflections.plural[i][1];
if(_6.test(_1)){
return _1.replace(_6,_7);
}
}
},singularize:function(_8){
for(var i=0;i<jQuery.Inflector.Inflections.uncountable.length;i++){
var _a=jQuery.Inflector.Inflections.uncountable[i];
if(_8.toLowerCase()==_a){
return _a;
}
}
for(var i=0;i<jQuery.Inflector.Inflections.irregular.length;i++){
var _b=jQuery.Inflector.Inflections.irregular[i][0];
var _c=jQuery.Inflector.Inflections.irregular[i][1];
if((_8.toLowerCase()==_b)||(_8.toLowerCase()==_c)){
return _8.substring(0,1)+_b.substring(1);
}
}
for(var i=0;i<jQuery.Inflector.Inflections.singular.length;i++){
var _d=jQuery.Inflector.Inflections.singular[i][0];
var _e=jQuery.Inflector.Inflections.singular[i][1];
if(_d.test(_8)){
return _8.replace(_d,_e);
}
}
return _8;
}};
jQuery.Native.extend("String",{pluralize:function(_f,_10,_11){
if(typeof _10=="undefined"){
return jQuery.Inflector.pluralize(_f);
}else{
return _10+" "+(1==parseInt(_10)?_f:_11||jQuery.Inflector.pluralize(_f));
}
},singularize:function(_12,_13){
if(typeof _13=="undefined"){
return jQuery.Inflector.singularize(_12);
}else{
return _13+" "+jQuery.Inflector.singularize(_12);
}
},isSingular:function(_14){
if(jQuery.String.singularize(_14)==_14&&_14){
return true;
}
return false;
}});
;
include.setPath('jmvc/plugins/dom/delegate');
include("delegate");
;
include.setPath('jmvc/plugins/dom/delegate');
jQuery.fn.delegate=function(_1,_2,_3){
return this.each(function(){
new jQuery.Delegator(_1,_2,_3,document?document.documentElement:this);
});
};
jQuery.fn.kill=function(_4,_5,_6){
return this.each(function(){
var _7=jQuery.data(document?document.documentElement:this,"delegates")[_5];
var i=0;
while(i<_7.length){
if(_7[i]._func==_6){
_7[i].destroy();
_7.splice(i,1);
}else{
i++;
}
}
});
};
jQuery.Delegator=function(_9,_a,f,_c){
this._event=_a;
this._selector=_9;
this.computeOrder();
this._func=f;
this.element=_c||document.documentElement;
if(!jQuery.data(this.element,"delegateEvents")){
jQuery.data(this.element,"delegateEvents",{});
}
var b=jQuery.browser;
if(_a=="contextmenu"&&b.opera){
this.context_for_opera();
}else{
if(_a=="submit"&&b.msie){
this.submit_for_ie();
}else{
if(_a=="change"&&b.msie){
this.change_for_ie();
}else{
if(_a=="change"&&b.safari){
this.change_for_webkit();
}else{
this.add_to_delegator();
}
}
}
}
var _e=jQuery.data(this.element,"delegates")||jQuery.data(this.element,"delegates",{});
if(!_e[_a]){
_e[_a]=[];
}
_e[_a].push(this);
};
$(window).load(function(){
jQuery.Delegator.onload_called=true;
});
jQuery.extend(jQuery.Delegator,{sortByDepth:function(a,b){
var _11=parseInt(b.depth)-parseInt(a.depth);
if(_11==0){
var ae=a._event,be=b._event;
if(ae=="click"&&be=="change"){
return 1;
}
if(be=="click"&&ae=="change"){
return -1;
}
}
return _11;
},events:{},onload_called:false,fastHasClass:function(s,f){
return s.indexOf(f)==-1?false:(s.length==f.length||s.indexOf(f+" ")==0||s.indexOf(" "+f)==s.length-f.length-1||s.indexOf(" "+f+" ")!=-1);
}});
jQuery.extend(jQuery.Delegator.prototype,{event:function(){
if(jQuery.browser.msie){
if(this._event=="focus"){
return "activate";
}else{
if(this._event=="blur"){
return "deactivate";
}
}
}
return this._event;
},capture:function(){
return jQuery.Array.include(["focus","blur"],this._event);
},add_to_delegator:function(_16,_17,_18){
var s=_16||this._selector;
var e=_17||this.event();
var f=_18||this._func;
var _1c=jQuery.data(this.element,"delegateEvents");
if(!_1c[e]||_1c[e].length==0){
var _1d=jQuery.Function.bind(this.dispatch_event,this);
jQuery.event.add(this.element,e,_1d,null,this.capture());
_1c[e]=[];
_1c[e]._bind_function=_1d;
}
_1c[e].push(this);
},_remove_from_delegator:function(_1e){
var _1f=_1e||this.event();
var _20=jQuery.data(this.element,"delegateEvents")[_1f];
for(var i=0;i<_20.length;i++){
if(_20[i]==this){
_20.splice(i,1);
break;
}
}
if(_20.length==0){
jQuery.event.remove(this.element,_1f,_20._bind_function,this.capture());
}
},submit_for_ie:function(){
this.add_to_delegator(null,"click");
this.add_to_delegator(null,"keypress");
this.filters={click:function(el,_23,_24){
if((el.nodeName.toUpperCase()=="INPUT"&&el.type.toLowerCase()=="submit")||(el.nodeName.toUpperCase()=="BUTTON"&&el.type.toLowerCase()=="submit")){
for(var e=0;e<_24.length;e++){
if(_24[e].tag=="FORM"){
return true;
}
}
}
return false;
},keypress:function(el,_27,_28){
if(el.nodeName.toUpperCase()!="INPUT"){
return false;
}
var res=_27.keyCode==13;
if(res){
for(var e=0;e<_28.length;e++){
if(_28[e].tag=="FORM"){
return true;
}
}
}
return false;
}};
},change_for_ie:function(){
this.add_to_delegator(null,"click");
this.add_to_delegator(null,"keyup");
this.add_to_delegator(null,"beforeactivate");
if(include.options.env=="test"){
this.add_to_delegator(null,"change");
}
this.end_filters={change:function(){
return true;
},click:function(el,_2c){
switch(el.nodeName.toLowerCase()){
case "select":
if(typeof el.selectedIndex=="undefined"){
return false;
}
var _2d=jQuery.data(el,"_change_data",jQuery.data(el,"_change_data")||{});
if(_2d._change_old_value==null){
_2d._change_old_value=el.selectedIndex.toString();
return false;
}else{
if(_2d._change_old_value==el.selectedIndex.toString()){
return false;
}
_2d._change_old_value=el.selectedIndex.toString();
return true;
}
case "input":
if(el.type.toLowerCase()=="checkbox"){
return true;
}
return false;
}
return false;
},keyup:function(el,_2f){
if(el.nodeName.toLowerCase()!="select"){
return false;
}
if(typeof el.selectedIndex=="undefined"){
return false;
}
var _30=jQuery.data(el,"_change_data",jQuery.data(el,"_change_data")||{});
if(_30._change_old_value==null){
_30._change_old_value=el.selectedIndex.toString();
return false;
}else{
if(_30._change_old_value==el.selectedIndex.toString()){
return false;
}
_30._change_old_value=el.selectedIndex.toString();
return true;
}
},beforeactivate:function(el,_32){
return el.nodeName.toLowerCase()=="input"&&el.type.toLowerCase()=="radio"&&!el.checked&&jQuery.Delegator.onload_called;
}};
},change_for_webkit:function(){
this.add_to_delegator(null,"change");
this.end_filters={change:function(el,_34){
if(el.nodeName.toLowerCase()=="input"){
return true;
}
if(typeof el.value=="undefined"){
return false;
}
var old=el.getAttribute("_old_value");
el.setAttribute("_old_value",el.value);
return el.value!=old;
}};
},context_for_opera:function(){
this.add_to_delegator(null,"click");
this.end_filters={click:function(el,_37){
return _37.shiftKey;
}};
},regexp_patterns:{tag:/^\s*(\*|[\w\-]+)(\b|$)?/,id:/^#([\w\-\*]+)(\b|$)/,className:/^\.([\w\-\*]+)(\b|$)/},computeOrder:function(){
var _38=this._selector.split(/\s+/),_39=this.regexp_patterns;
var _3a=[];
if(this._selector){
for(var i=0;i<_38.length;i++){
var v={},r,p=_38[i];
for(var _3f in _39){
if(_39.hasOwnProperty(_3f)){
if((r=p.match(_39[_3f]))){
if(_3f=="tag"){
v[_3f]=r[1].toUpperCase();
}else{
v[_3f]=r[1];
}
p=p.replace(r[0],"");
}
}
}
_3a.push(v);
}
}
this.order=_3a;
},match:function(el,_41,_42){
if(this.filters&&!this.filters[_41.type](el,_41,_42)){
return null;
}
var _43=this.order;
if(_43.length==0){
return {node:_42[0].element,depth:0,delegation_event:this};
}
var _44=0,n=0,_46,_47,_48=_42.length,_49,_4a,_4b=jQuery.Delegator.fastHasClass,_4c;
for(;n<_48;n++){
_47=_42[n];
_49=_43[_44];
_4a=true;
for(_46 in _49){
if(_46=="className"&&_47.className){
if(!_4b(_47.className,_49[_46])){
_4a=false;
}
}else{
if(_47[_46]!=_49[_46]){
_4a=false;
}
}
}
if(_4a){
_44++;
if(_44>=_43.length){
if(this.end_filters&&!this.end_filters[_41.type](el,_41)){
return null;
}
return {node:_47.element,depth:n,delegation_event:this};
}
}
}
return null;
},dispatch_event:function(_4d){
var _4e=_4d.target,_4f=false,_50=true,_51=[],_52,_53,i,_55;
var _56=jQuery.data(this.element,"delegateEvents")[_4d.type];
var _57=this.node_path(_4e);
_53=_56.length;
for(i=0;i<_53;i++){
_52=_56[i].match(_4e,_4d,_57);
if(_52){
_51.push(_52);
}
}
if(_51.length==0){
return true;
}
_51.sort(jQuery.Delegator.sortByDepth);
_53=_51.length;
for(i=0;i<_53;i++){
_55=_51[i];
_50=_55.delegation_event._func.apply(_55.node,arguments);
if(_4d.isDelegationStopped()){
return _50;
}
}
},node_path:function(el){
var _59=this.element,_5a=[],_5b=el;
if(_5b==_59){
return [{tag:_5b.nodeName,className:_5b.className,id:_5b.id,element:_5b}];
}
do{
_5a.unshift({tag:_5b.nodeName,className:_5b.className,id:_5b.id,element:_5b});
}while(((_5b=_5b.parentNode)!=_59)&&_5b);
if(_5b){
_5a.unshift({tag:_5b.nodeName,className:_5b.className,id:_5b.id,element:_5b});
}
return _5a;
},destroy:function(){
if(this._event=="contextmenu"&&jQuery.browser.opera){
return this._remove_from_delegator("click");
}
if(this._event=="submit"&&jQuery.browser.msie){
this._remove_from_delegator("keypress");
return this._remove_from_delegator("click");
}
if(this._event=="change"&&jQuery.browser.msie){
this._remove_from_delegator("keyup");
this._remove_from_delegator("beforeactivate");
return this._remove_from_delegator("click");
}
this._remove_from_delegator();
}});
(function(){
var tru=function(){
return true;
};
var fal=function(){
return false;
};
jQuery.extend(jQuery.Event.prototype,{stopDelegation:function(){
this.isDelegationStopped=tru;
},isDelegationStopped:fal,stopAll:function(){
this.stopDelegation();
this.stopPropagation();
this.preventDefault();
}});
}());
;
include.setPath('jmvc/plugins/controller');
jQuery.Class.extend("jQuery.Controller",{init:function(){
if(!this.className){
return;
}
this.underscoreName=jQuery.String.underscore(this.className.replace(/controllers?/i,""));
this.underscoreControllerName=jQuery.String.underscore(this.fullName.replace(/\./g,"_"));
var _1,_2;
if(!this.modelName){
this.modelName=jQuery.String.isSingular(this.underscoreName)?this.underscoreName:jQuery.String.singularize(this.underscoreName);
}
if(include.getPath().match(/(.*?)controllers/)){
this._path=include.getPath().match(/(.*?)controllers/)[1]+"controllers";
}else{
this._path=include.getPath()+"/";
}
var _3=this;
if(this.onDocument){
new this(document.documentElement);
}else{
jQuery.fn[this.underscoreControllerName]=function(){
var _4=[];
for(var i=0;i<this.length;i++){
var _6=jQuery.makeArray(arguments);
_6.unshift(this[i]);
var _7=(jQuery.data(this[i],"controllers")||{})[_3.fullName];
_4.push(_7?_7:_3.newInstance.apply(_3,_6));
_6.shift();
}
return _4;
};
}
},actions:[]},{init:function(_8){
var _9,_a,a,_c;
_8=_8.jquery?_8[0]:_8;
jQuery.className.add(_8,this.Class.underscoreControllerName);
this._actions=[];
for(_9 in this){
_a=this[_9];
if(typeof _a=="function"&&_9!="Class"){
for(a=0;a<jQuery.Controller.actions.length;a++){
_c=jQuery.Controller.actions[a];
if(_c.matches(_9)){
this._actions.push(new _c(_9,this.callback(_9),this.Class.underscoreName,_8,this));
}
}
}
}
this.called="init";
this.element=jQuery(_8);
(jQuery.data(_8,"controllers")||jQuery.data(_8,"controllers",{}))[this.Class.fullName]=this;
},destroy:function(){
if(this._destroyed){
throw this.Class.className+" controller instance has already been deleted";
}
for(var i=0;i<this._actions.length;i++){
this._actions[i].destroy(this.element[0]);
}
delete this._actions;
this._destroyed=true;
var _e=this.element.data("controllers");
if(_e&&_e[this.Class.fullName]){
delete _e[this.Class.fullName];
}
this.element=null;
},find:function(_f){
return this.element.find(_f);
},publish:function(){
OpenAjax.hub.publish.apply(OpenAjax.hub,arguments);
},_set_called:true});
jQuery.fn.controllers=function(){
var _10=jQuery.Array.from(arguments),_11=[],_12,_13;
this.each(function(){
_12=jQuery.data(this,"controllers");
if(!_12){
return;
}
for(var _14 in _12){
_11.push(_12[_14]);
}
});
return _11;
};
jQuery.fn.controller=function(){
return this.controllers.apply(this,arguments)[0];
};
(function(){
var rd=jQuery.removeData;
jQuery.removeData=function(_16,_17){
_16=_16==window?windowData:_16;
var id=_16[jQuery.data.expando],_19,_1a;
if(id&&(!_17||_17=="controllers")){
_19=(jQuery.cache[id].controllers||{});
for(_1a in _19){
_19[_1a].destroy();
}
}
rd.apply(this,arguments);
};
})();
jQuery.Class.extend("jQuery.Controller.Action",{matches:function(_1b){
if(!this.match){
return null;
}
return this.match.test(_1b);
},init:function(){
if(this.matches){
jQuery.Controller.actions.push(this);
}
}},{init:function(_1c,_1d,_1e,_1f,_20){
this.action=_1c;
this.callback=_1d;
this.underscoreName=_1e;
this.controller=_20;
},destroy:function(){
},css_and_event:function(){
this.parts=this.action.match(this.Class.match);
this.css=this.parts[1]||"";
this.event_type=this.parts[2];
},selector:function(_21){
if(this.underscoreName.toLowerCase()=="main"){
return this.css;
}else{
if(_21==document.documentElement||_21==document){
return "#"+this.underscoreName+(this.css?" "+this.css:"");
}else{
return (this.css==""?"":this.css);
}
}
},delegates:function(_22){
return jQuery.data(_22,"delegates")||jQuery.data(_22,"delegates",{});
}});
jQuery.Controller.Action.extend("jQuery.Controller.Action.Subscribe",{match:new RegExp("(opener|parent|window)?(~)?(.*?)\\s?(subscribe)$")},{init:function(_23,_24,_25,_26,_27){
this._super(_23,_24,_25,_26,_27);
this.message();
this.subscription=this.who.OpenAjax.hub.subscribe(this.message_name,function(id,msg){
_24.call(_27,id,msg);
});
},message:function(){
var _2a=this.action.match(this.Class.match);
this.message_name=_2a[3];
this.who=_2a[1]?window[_2a[1]]:window;
},destroy:function(){
OpenAjax.hub.unsubscribe(this.subscription);
this._super();
}});
jQuery.Controller.Action.extend("jQuery.Controller.Action.Event",{match:new RegExp("^(?:(.*?)\\s)?(change|click|contextmenu|dblclick|keydown|keyup|keypress|mousedown|mousemove|mouseout|mouseover|mouseup|reset|windowresize|resize|windowscroll|scroll|select|submit|dblclick|focus|blur|load|unload|ready|hashchange)$")},{init:function(_2b,_2c,_2d,_2e,_2f){
this._super(_2b,_2c,_2d,_2e,_2f);
this.css_and_event();
var _30=this.selector(_2e);
if(_30!=null){
this.delegator=new jQuery.Delegator(_30,this.event_type,this.get_callback(_2c),_2e);
}
},get_callback:function(cb){
return function(_32){
cb.call(null,jQuery(this),_32);
};
},main_controller:function(){
if(!this.css&&jQuery.Array.include(["blur","focus"],this.event_type)){
var _33=this;
jQuery.event.add(window,this.event_type,function(_34){
_33.callback(jQuery(window),_34);
});
return;
}
return this.css;
},selector:function(_35){
if(jQuery.Array.include(["load","unload","windowresize","windowscroll","ready"],this.event_type)){
this.attach_window_event_handler(this.event_type.replace("window",""));
return;
}
return this._super(_35);
},attach_window_event_handler:function(_36){
var _37=this;
jQuery.event.add(_36=="ready"?document:window,_36,function(_38){
_37.callback(jQuery(window),_38);
});
},destroy:function(){
if(this.delegator){
this.delegator.destroy();
}
this._super();
}});
;
include.setPath('jmvc/plugins/view');
include.plugins("lang");
include("view");
if(jQuery.Controller){
include.plugins("controller/view");
}
;
include.setPath('jmvc/plugins/view');
(function(_1){
_1.View=function(_2){
_2=typeof _2=="string"?{view:_2}:_2;
this.set_options(_2);
if(_2.precompiled){
this.template={};
this.template.process=_2.precompiled;
_1.View.update(this.name,this);
return;
}
if(_2.view||_2.absolute_url||_2.view_url){
_2.view=_1.View.endExt(_2.view,this.extMatch);
_2.view_url=_1.View.endExt(_2.view_url,this.extMatch);
this.name=this.name?this.name:_2.view||_2.absolute_url||"views/"+_2.view_url;
var _3=_2.absolute_url||(_2.view?include.root.join(_2.view):include.root.join("views/"+_2.view_url));
var _4=_1.View.get(this.name,this.cache);
if(_4){
return _4;
}
if(_4==_1.View.INVALID_PATH){
return null;
}
try{
this.text=include.request(_3+(this.cache||_1.browser.rhino?"":"?"+Math.random()));
}
catch(e){
}
if(this.text==null){
if(_1.browser.rhino){
print("Exception: "+"There is no template at "+_3);
}
throw ({type:"JMVC",message:"There is no template at "+_3});
}
}
var _4=new _1.View.Compiler(this.text,this.type);
_4.compile(_2,this.name);
_1.View.update(this.name,this);
this.template=_4;
};
_1.View.prototype={render:function(_5,_6){
_5=_5||{};
this._extra_helpers=_6;
var v=new _1.View.Helpers(_5,_6||{});
return this.template.process.call(_5,_5,v);
},out:function(){
return this.template.out;
},set_options:function(_8){
this.type=_8.type||_1.View.type;
this.cache=_8.cache!=null?_8.cache:_1.View.cache;
this.text=_8.text||null;
this.name=_8.name||null;
this.ext=_8.ext||_1.View.ext;
this.extMatch=new RegExp(this.ext.replace(/\./,"."));
}};
_1.View.endExt=function(_9,_a){
if(!_9){
return null;
}
_a.lastIndex=0;
return _9+(_a.test(_9)?"":this.ext);
};
_1.View.Scanner=function(_b,_c,_d){
_1.extend(this,{left_delimiter:_c+"%",right_delimiter:"%"+_d,double_left:_c+"%%",double_right:"%%"+_d,left_equal:_c+"%=",left_comment:_c+"%#"});
this.SplitRegexp=_c=="["?/(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/:new RegExp("("+this.double_left+")|(%%"+this.double_right+")|("+this.left_equal+")|("+this.left_comment+")|("+this.left_delimiter+")|("+this.right_delimiter+"\n)|("+this.right_delimiter+")|(\n)");
this.source=_b;
this.stag=null;
this.lines=0;
};
_1.View.Scanner.to_text=function(_e){
if(_e==null||_e===undefined){
return "";
}
if(_e instanceof Date){
return _e.toDateString();
}
if(_e.toString){
return _e.toString();
}
return "";
};
_1.View.Scanner.prototype={scan:function(_f){
scanline=this.scanline;
regex=this.SplitRegexp;
if(!this.source==""){
var _10=_1.String.rsplit(this.source,/\n/);
for(var i=0;i<_10.length;i++){
var _12=_10[i];
this.scanline(_12,regex,_f);
}
}
},scanline:function(_13,_14,_15){
this.lines++;
var _16=_1.String.rsplit(_13,_14);
for(var i=0;i<_16.length;i++){
var _18=_16[i];
if(_18!=null){
try{
_15(_18,this);
}
catch(e){
throw {type:"jQuery.View.Scanner",line:this.lines};
}
}
}
}};
_1.View.Buffer=function(_19,_1a){
this.line=new Array();
this.script="";
this.pre_cmd=_19;
this.post_cmd=_1a;
for(var i=0;i<this.pre_cmd.length;i++){
this.push(_19[i]);
}
};
_1.View.Buffer.prototype={push:function(cmd){
this.line.push(cmd);
},cr:function(){
this.script=this.script+this.line.join("; ");
this.line=new Array();
this.script=this.script+"\n";
},close:function(){
if(this.line.length>0){
for(var i=0;i<this.post_cmd.length;i++){
this.push(pre_cmd[i]);
}
this.script=this.script+this.line.join("; ");
line=null;
}
}};
_1.View.Compiler=function(_1e,_1f){
this.pre_cmd=["var ___ViewO = [];"];
this.post_cmd=new Array();
this.source=" ";
if(_1e!=null){
if(typeof _1e=="string"){
_1e=_1e.replace(/\r\n/g,"\n");
_1e=_1e.replace(/\r/g,"\n");
this.source=_1e;
}else{
if(_1e.innerHTML){
this.source=_1e.innerHTML;
}
}
if(typeof this.source!="string"){
this.source="";
}
}
_1f=_1f||"<";
var _20=">";
switch(_1f){
case "[":
_20="]";
break;
case "<":
break;
default:
throw _1f+" is not a supported deliminator";
break;
}
this.scanner=new _1.View.Scanner(this.source,_1f,_20);
this.out="";
};
_1.View.Compiler.prototype={compile:function(_21,_22){
_21=_21||{};
this.out="";
var _23="___ViewO.push(";
var _24=_23;
var _25=new _1.View.Buffer(this.pre_cmd,this.post_cmd);
var _26="";
var _27=function(_28){
_28=_28.replace(/\\/g,"\\\\");
_28=_28.replace(/\n/g,"\\n");
_28=_28.replace(/"/g,"\\\"");
return _28;
};
this.scanner.scan(function(_29,_2a){
if(_2a.stag==null){
switch(_29){
case "\n":
_26=_26+"\n";
_25.push(_23+"\""+_27(_26)+"\");");
_25.cr();
_26="";
break;
case _2a.left_delimiter:
case _2a.left_equal:
case _2a.left_comment:
_2a.stag=_29;
if(_26.length>0){
_25.push(_23+"\""+_27(_26)+"\")");
}
_26="";
break;
case _2a.double_left:
_26=_26+_2a.left_delimiter;
break;
default:
_26=_26+_29;
break;
}
}else{
switch(_29){
case _2a.right_delimiter:
switch(_2a.stag){
case _2a.left_delimiter:
if(_26[_26.length-1]=="\n"){
_26=_1.String.chop(_26);
_25.push(_26);
_25.cr();
}else{
_25.push(_26);
}
break;
case _2a.left_equal:
_25.push(_24+"(jQuery.View.Scanner.to_text("+_26+")))");
break;
}
_2a.stag=null;
_26="";
break;
case _2a.double_right:
_26=_26+_2a.right_delimiter;
break;
default:
_26=_26+_29;
break;
}
}
});
if(_26.length>0){
_25.push(_23+"\""+_27(_26)+"\")");
}
_25.close();
this.out=_25.script+";";
var _2b="/*"+_22+"*/this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {"+this.out+" return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};";
try{
eval(_2b);
}
catch(e){
if(typeof JSLINT!="undefined"){
JSLINT(this.out);
for(var i=0;i<JSLINT.errors.length;i++){
var _2e=JSLINT.errors[i];
if(_2e.reason!="Unnecessary semicolon."){
_2e.line++;
var e=new Error();
e.lineNumber=_2e.line;
e.message=_2e.reason;
if(_21.view){
e.fileName=_21.view;
}
throw e;
}
}
}else{
throw e;
}
}
}};
_1.View.config=function(_2f){
_1.View.cache=_2f.cache!=null?_2f.cache:_1.View.cache;
_1.View.type=_2f.type!=null?_2f.type:_1.View.type;
_1.View.ext=_2f.ext!=null?_2f.ext:_1.View.ext;
var _30={};
_1.View.templates_directory=_30;
_1.View.get=function(_31,_32){
if(_32==false){
return null;
}
if(_30[_31]){
return _30[_31];
}
return null;
};
_1.View.update=function(_33,_34){
if(_33==null){
return;
}
_30[_33]=_34;
};
_1.View.INVALID_PATH=-1;
};
_1.View.config({cache:include.options.env=="production",type:"<",ext:".ejs"});
_1.View.PreCompiledFunction=function(_35,_36,f){
new _1.View({name:_36,precompiled:f});
};
_1.View.Helpers=function(_38,_39){
this._data=_38;
this._extras=_39;
_1.extend(this,_39);
};
_1.View.Helpers.prototype={view:function(_3a,_3b,_3c){
if(!_3c){
_3c=this._extras;
}
if(!_3b){
_3b=this._data;
}
return new _1.View(_3a).render(_3b,_3c);
},to_text:function(_3d,_3e){
if(_3d==null||_3d===undefined){
return _3e||"";
}
if(_3d instanceof Date){
return _3d.toDateString();
}
if(_3d.toString){
return _3d.toString().replace(/\n/g,"<br />").replace(/''/g,"'");
}
return "";
}};
include.view=function(_3f){
if((include.options.env=="development"||include.options.env=="test")&&_1.View.cache){
new _1.View({view:new include.File("../../"+_3f).join_current()});
}else{
if(include.options.env=="compress"){
include({path:"../../"+_3f,process:_1.View.processInclude,skipInsert:true});
new _1.View({view:new include.File("../../"+_3f).join_current()});
}else{
}
}
};
include.views=function(){
for(var i=0;i<arguments.length;i++){
include.view(arguments[i]+_1.View.ext);
}
};
_1.View.processInclude=function(_41){
var _42=new _1.View({text:_41.src});
return "(function($){jQuery.View.PreCompiledFunction(\""+_41.originalPath+"\", \""+_41.path+"\",function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {"+_42.out()+" return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}})})(jQuery)";
};
_1.Native.extend("String",{rsplit:function(_43,_44){
var _45=_44.exec(_43),_46=new Array(),_47,_48,_49;
while(_45!=null){
_47=_45.index;
_48=_44.lastIndex;
if((_47)!=0){
_49=_43.substring(0,_47);
_46.push(_43.substring(0,_47));
_43=_43.slice(_47);
}
_46.push(_45[0]);
_43=_43.slice(_45[0].length);
_45=_44.exec(_43);
}
if(!_43==""){
_46.push(_43);
}
return _46;
},chop:function(_4a){
return _4a.substr(0,_4a.length-1);
}});
var _4b=["prepend","append","after","before","replace","text","html"];
var _4c=function(_4d){
var old=_1.fn[_4d];
_1.fn[_4d]=function(){
var _4f=arguments;
if(arguments.length>1&&typeof arguments[0]=="string"&&(typeof arguments[1]=="object"||typeof arguments[1]=="function")&&!arguments[1].nodeType&&!arguments[1].jquery){
_4f=[new _1.View(arguments[0]).render(arguments[1],arguments[2])];
}
return old.apply(this,_4f);
};
};
for(var i=0;i<_4b.length;i++){
_4c(_4b[i]);
}
})(jQuery);
;
include.setPath('jmvc/plugins/controller/view');
include.plugins("view","controller");
include("controller_view");
;
include.setPath('jmvc/plugins/controller/view');
jQuery.Controller.prototype.view=function(_1,_2,_3){
if(typeof _1!="string"&&!_3){
_3=_2;
_2=_1;
_1=null;
}
var _4=this.Class.underscoreName,_5=this.called;
if(typeof _1=="string"){
if(_1.substr(0,2)=="//"){
_1=_1.substr(2);
}else{
_1=new include.File("../views/"+(jQuery.String.include(_1,"/")?_1:_4+"/"+_1)).joinFrom(this.Class._path)+jQuery.View.ext;
}
}else{
if(!_1){
_1=new include.File("../views/"+_4+"/"+_5.replace(/\.|#/g,"").replace(/ /g,"_")).joinFrom(this.Class._path)+jQuery.View.ext;
}
}
_2=_2||this;
var _6={};
if(_3){
if(jQuery.isArray(_3)){
for(var h=0;h<_3.length;h++){
jQuery.extend(_6,_3[h]);
}
}else{
jQuery.extend(_6,_3);
}
}else{
if(this._default_helpers){
_6=this._default_helpers;
}
var _8=window;
var _9=this.Class.fullName.split(/\./);
for(var i=0;i<_9.length;i++){
if(typeof _8.Helpers=="object"){
jQuery.extend(_6,_8.Helpers);
}
_8=_8[_9[i]];
}
if(typeof _8.Helpers=="object"){
jQuery.extend(_6,_8.Helpers);
}
this._default_helpers=_6;
}
return new jQuery.View(_1).render(_2,_6);
};
;
include.setPath('jmvc/plugins/model');
include.plugins("lang/class","lang");
include("simple_store","model");
;
include.setPath('jmvc/plugins/model');
jQuery.Class.extend("jQuery.Store",{init:function(_1){
this._data={};
this.storing_class=_1;
},findOne:function(id){
return id?this._data[id]:null;
},create:function(_3){
var id=_3[_3.Class.id];
this._data[id]=_3;
},destroy:function(id){
delete this._data[id];
},find:function(f){
var _7=[];
for(var id in this._data){
var _9=this._data[id];
if(!f||f(_9)){
_7.push(_9);
}
}
return _7;
},clear:function(){
this._data={};
},isEmpty:function(){
return !this.find().length;
}});
;
include.setPath('jmvc/plugins/model');
jQuery.Class.extend("jQuery.Model",{storeType:jQuery.Store,init:function(){
this.validations=[];
this.attributes={};
this.defaultAttributes={};
this._associations=[];
if(!this.className){
return;
}
jQuery.Model.models[jQuery.String.underscore(this.fullName.replace(".","_"))]=this;
this.store=new this.storeType(this);
},find:function(id,_2,_3,_4){
if(!_2){
_2={};
}
if(typeof _2=="function"){
_4=_3;
_3=_2;
_2={};
}
if(id=="all"){
return this.wrapMany(this.findAll(_2,_3,_4));
}else{
if((typeof _2[this.id]=="undefined")&&id!="first"){
_2[this.id]=id;
}
return this.wrap(this.findOne(id=="first"?null:_2,_3,_4));
}
},wrap:function(_5){
if(!_5){
return null;
}
if(_5.attributes){
_5=_5.attributes;
}
var _6=new this(_5);
return _6;
},wrapMany:function(_7){
if(!_7){
return null;
}
var _8=[];
_8._use_call=true;
for(var i=0;i<_7.length;i++){
_8.push(this.wrap(_7[i]));
}
return _8;
},id:"id",hasMany:function(){
this._associations.push(["hasMany"].concat(arguments));
},belongTo:function(){
this._associations.push(["hasMany"].concat(arguments));
},addAttr:function(_a,_b){
if(!this.attributes[_a]){
this.attributes[_a]=_b;
}
if(!this.defaultAttributes[_a]){
this.defaultAttributes[_a]=null;
}
},models:{},publish:function(_c,_d){
OpenAjax.hub.publish(jQuery.String.underscore(this.fullName)+"."+_c,_d);
},guessType:function(_e){
if(typeof _e!="string"){
if(_e==null){
return typeof _e;
}
if(_e.constructor==Date){
return "date";
}
if(_e.constructor==Array){
return "array";
}
return typeof _e;
}
if(_e=="true"||_e=="false"){
return "boolean";
}
if(!isNaN(_e)){
return "number";
}
return typeof _e;
},create:function(_f,_10,_11){
throw "Implement Create";
},update:function(id,_13,_14,_15){
throw "JMVC--! You Must Implement "+this.fullName+"'s \"update\" Function !--";
},destroy:function(id,_17,_18){
throw "JMVC--! You Must Implement "+this.fullName+"'s \"destroy\" Function !--";
}},{init:function(_19){
this.attrs(this.Class.defaultAttributes||{});
this.attrs(_19);
this.errors={};
},update:function(_1a,_1b,_1c){
this.attrs(_1a);
return this.save(_1b,_1c);
},valid:function(){
for(var _1d in this.errors){
if(this.errors.hasOwnProperty(_1d)){
return false;
}
}
return true;
},validate:function(){
this.errors={};
var _1e=this;
if(this.Class.validations){
jQuery.each(this.Class.validations,function(i,_20){
_20.call(_1e);
});
}
},attr:function(_21,_22){
if(typeof _22!="undefined"){
this._setProperty(_21,_22);
}
return this[_21];
},_setProperty:function(_23,_24){
if(this["set"+jQuery.String.capitalize(_23)]&&!this["set"+jQuery.String.capitalize(_23)](_24)){
return;
}
var old=this[_23];
this[_23]=_23=="created_at"||_23=="updated_at"?MVC.Date.parse(_24):_24;
if(_23==this.Class.id&&this[_23]){
if(this.Class.store){
if(!old){
this.Class.store.create(this);
}else{
if(old!=this[_23]){
this.Class.store.destroy(old);
this.Class.store.create(this);
}
}
}
}
this.Class.addAttr(_23,this.Class.guessType(_24));
},_setAssociation:function(_26,_27){
this[_26]=function(){
if(!MVC.String.isSingular(_26)){
_26=MVC.String.singularize(_26);
}
var _28=window[MVC.String.classize(_26)];
if(!_28){
return _27;
}
return _28.createManyAsExisting(_27);
};
},attrs:function(_29){
if(!_29){
_29={};
var cas=this.Class.attributes;
for(var _2b in cas){
if(cas.hasOwnProperty(_2b)){
_29[_2b]=this[_2b];
}
}
}else{
for(var key in _29){
if(_29.hasOwnProperty(key)){
this.attr(key,_29[key]);
}
}
}
return _29;
},isNew:function(){
return this[this.Class.id]==null;
},save:function(_2d,_2e){
var _2f;
this.validate();
if(!this.valid()){
return false;
}
_2f=this.isNew()?this.Class.create(this.attrs(),this.callback(["created",_2d]),_2e):this.Class.update(this[this.Class.id],this.attrs(),this.callback(["updated",_2d]),_2e);
return true;
},created:function(_30){
this.attrs(_30);
this.publish("created",this);
return [this].concat(arguments);
},updated:function(_31){
this.publish("updated",this);
return [this].concat(arguments);
},destroy:function(_32,_33){
this.Class.destroy(this[this.Class.id],this.callback(["destroyed",_32]),_33);
},destroyed:function(){
this.Class.store.destroy(this[this.Class.id]);
this.publish("destroyed",this);
return [this];
},_resetAttrs:function(_34){
this._clear();
},_clear:function(){
var cas=this.Class.defaultAttributes;
for(var _36 in cas){
if(cas.hasOwnProperty(_36)){
this[_36]=null;
}
}
},identity:function(){
return jQuery.String.underscore(this.Class.fullName.replace(".","_"))+"_"+this[this.Class.id];
},elements:function(_37){
return typeof _37=="string"?jQuery(_37+" ."+this.identity()):jQuery("."+this.identity(),_37);
},publish:function(_38,_39){
this.Class.publish(_38,_39||this);
}});
jQuery.fn.models=function(){
var _3a=[],n,m;
if(arguments.length){
_3a=jQuery.makeArray(arguments);
}else{
for(n in jQuery.Model.models){
_3a.push(jQuery.Model.models[n]);
}
}
for(m=0;m<_3a.length;m++){
_3a[m]=jQuery.String.underscore(_3a[m].fullName.replace(".","_"));
}
var reg=new RegExp("("+_3a.join("|")+")_([^ ]+)","g");
var ret=[];
this.each(function(){
var _3f;
while(_3f=reg.exec(this.className)){
var m=jQuery.Model.models[_3f[1]];
if(m){
var _41=m.store.findOne(_3f[2]);
if(_41){
ret.push(_41);
}
}
}
reg.lastIndex=0;
});
return jQuery.unique(ret);
};
jQuery.fn.model=function(){
return this.models.apply(this,arguments)[0];
};
;
include.next_function();
include.setPath('models');
var Route=function(_1,_2){
this.source=_1;
this.target=_2;
this.errors=[];
};
Route.prototype.isValid=function(){
if(!this.source||this.source==""){
this.errors.push(PhraseBook["MISSING_START_POINT_FOR_ROUTE"]);
}
if(!this.target||this.target==""){
this.errors.push(PhraseBook["MISSING_END_POINT_FOR_ROUTE"]);
}
return this.errors.length<1;
};
Route.prototype.calculate=function(_3){
$.getJSON("/routes/find?source="+encodeURIComponent(this.source)+"&target="+encodeURIComponent(this.target),function(_4){
this.populate(_4,_3);
}.bind(this));
};
Route.prototype.populate=function(_5,_6){
this.directions=eval(_5.directions);
this.segments=_5.segments;
this.source=_5.source;
this.target=_5.target;
_6(this);
};
;
include.setPath('models');
$.Model.extend("Feature",{wrapPagedMany:function(_1){
return [_1.categories,_1.total_entries];
},findByCategoryId:function(_2,_3){
$.get("/categories/show",_2,this.callback(["wrapPagedMany",_3]),"json");
},findByLocation:function(_4,_5){
$.get("/features/find",_4,this.callback(["wrapMany",_5]),"json");
}},{});
;
include.setPath('models');
$.Model.extend("Category",{findAll:function(_1,_2){
$.get("/categories/index",_1,this.callback(["wrapMany",_2]),"json");
}},{});
;
include.setPath('controllers');
$.Controller.extend("CanvasController",{"gowane.dashboard.category-selected subscribe":function(_1,_2){
var _3={features:_2.features,total_entries:_2.total_entries};
this.element.html(this.view("canvas/features",_3));
this.element.find("ul").quickPager({pageSize:10});
},"gowane.dashboard.route-calculated subscribe":function(_4,_5){
if(_5){
this.element.html(this.view("canvas/route",_5));
$("#canvas ul").quickPager({pageSize:11});
}
},"gowane.feedback-marker-positioned subscribe":function(_6,_7){
this.user_name=_7.name;
this.user_email=_7.email;
this.location=_7.location;
this.element.html(this.view("canvas/feedback"));
},"gowane.feedback-marker-moved subscribe":function(_8,_9){
var _a=_9[0];
this.longitude=_a.geometry.getCentroid().x;
this.latitude=_a.geometry.getCentroid().y;
},"gowane.feature-selected subscribe":function(_b,_c){
var _d=_c[0];
this.element.html(this.view("canvas/localization",{feature:_d}));
},"gowane.dashboard.tab-changed subscribe":function(_e,_f){
this.element.empty();
},"input.submit click":function(el,ev){
alert("submit");
},"input.cancel click":function(el,ev){
alert("cancel");
},"a.zoom click":function(el,ev){
var lon=el.parent().attr("lon");
var lat=el.parent().attr("lat");
this.publish("gowane.feature-zoom-requested",{lon:lon,lat:lat});
},"a.info click":function(el,ev){
this.publish("gowane.feature-info-requested");
$("#info").addClass("visible-overlay");
$("#info").html(this.view("info/feature"));
$("#info .close").click(function(){
$("#info").removeClass("visible-overlay");
$("#info").html("");
});
}});
;
include.setPath('controllers');
$.Controller.extend("DashboardController",{init:function(el){
this._super(el);
this.element.html(this.view("dashboard/tabs"));
this.element.find("#panel-index").dashboard_index_controller();
this.element.find("#panel-routing").dashboard_routing_controller();
this.element.find("#panel-localization").dashboard_localization_controller();
this.element.find("#panel-feedback").dashboard_feedback_controller();
this.element.tabs();
this.element.bind("tabsselect",function(_2,ui){
this.publish("gowane.dashboard.tab-changed");
}.bind(this));
}});
;
include.setPath('controllers');
$.Controller.extend("MapController",{ICON_PATH:"/images/google/",URLS:["http://geoserver1.codeifier.com/tilecache/tilecache.py?","http://geoserver2.codeifier.com/tilecache/tilecache.py?","http://geoserver3.codeifier.com/tilecache/tilecache.py?"],RESOLUTIONS:[0.0125,0.00625,0.003125,0.0015625,0.00078125,0.000390625,0.0001953125,0.00009765625,0.000048828125,0.0000244140625,0.00001220703125,0.00000610351563],MAP_OPTIONS:{maxExtent:new OpenLayers.Bounds(-13,2,-1,15),restrictedExtent:new OpenLayers.Bounds(-9,4,-2,11)},TILE_SIZE:new OpenLayers.Size(512,512),FORMAT:"aggpng24",IMAGE_TYPE:"png",IS_TRANSPARENT:"true",MAPSERVER_LAYERS:"land-basemap,water-basemap,road-labels,"+"water-linestring,land-polygon,building-polygon,"+"manmade-polygon,sport-polygon,roads-far,roads-close,"+"railways,cities,borders",TILECACHE_LAYER:"kubudum",ROAD_STYLE:{fill:true,stroke:true,fillColor:"#850EFA",strokeOpacity:0.7,pointRadius:4,strokeColor:"#850EFA",strokeWidth:5}},{init:function(el){
this._super(el);
OpenLayers.ImgPath="/images/OpenLayers/";
OpenLayers.IMAGE_RELOAD_ATTEMPTS=3;
OpenLayers.Map.TILE_WIDTH=256;
OpenLayers.Map.TILE_HEIGHT=256;
this.map=new OpenLayers.Map("map",this.Class.MAP_OPTIONS);
this.createBaseLayer("Roads");
this.setupControls();
this.element.map_features_controller(this.map,this.Class.ICON_PATH);
this.element.map_markers_controller(this.map);
this.map.events.on({"zoomend":this.raiseZoomChanged,scope:this});
this.showFullExtent();
this.raiseZoomChanged();
},raiseZoomChanged:function(){
this.publish("gowane.zoom-changed",this.map.getExtent());
},setupControls:function(){
this.map.removeControl(this.map.getControlsByClass("OpenLayers.Control.PanZoom")[0]);
this.map.addControl(new OpenLayers.Control.ScaleLine());
this.map.addControl(new OpenLayers.Control.PanZoomBar());
},getFeatureLayer:function(){
return this.map.layers[2];
},createBaseLayer:function(_2){
var _3={resolutions:this.Class.RESOLUTIONS,isBaseLayer:true};
var _4=this.setRenderingOptions();
this.map.addLayer(new OpenLayers.Layer.WMS(_2,this.Class.URLS,_4,_3));
},setRenderingOptions:function(){
var _5={map_imagetype:this.Class.IMAGE_TYPE,format:this.Class.FORMAT,transparent:this.Class.IS_TRANSPARENT,tileSize:this.Class.TILE_SIZE,buffer:0};
_5.layers=this.Class.TILECACHE_LAYER;
return _5;
},showFullExtent:function(){
this.map.setCenter(new OpenLayers.LonLat(-4.02054977,5.32823992),0,false,false);
this.map.zoomToMaxExtent();
}});
;
include.setPath('controllers');
$.Controller.extend("DashboardRoutingController",{init:function(el){
this._super(el);
this.element.html(this.view("dashboard/route"));
this.element.find(".ui-input").autocomplete({source:"/features/search",minLength:1,delay:300,focus:function(_2,ui){
return false;
}});
},".submit click":function(el,ev){
var _6=this.element.find(".start").val();
var _7=this.element.find(".end").val();
this.submitRoute(_6,_7);
},submitRoute:function(_8,_9){
var _a=new Route(_8,_9);
if(_a.isValid()){
_a.calculate(function(){
this.publish("gowane.dashboard.route-calculated",_a);
}.bind(this));
}else{
this.showRoutingErrors(_a.errors);
}
},showRoutingErrors:function(_b){
var _c="";
for(i=0;i<_b.length;i++){
_c="<p>"+_b[i]+"</p>";
}
$("#panel-routing").find(".error-messages").html(_c);
}});
;
include.setPath('controllers');
$.Controller.extend("DashboardFeedbackController",{init:function(el){
this._super(el);
this.element.html(this.view("dashboard/feedback"));
this.element.find(".ui-input").autocomplete({source:"/features/search",minLength:1,delay:300,focus:function(_2,ui){
return false;
}});
},"#feedback-step1 .submit click":function(el,ev){
this.element.find("#feedback-step1").hide();
this.element.find("#feedback-step2").show();
},"#feedback-step2 .submit click":function(el,ev){
Feature.findByLocation({location:this.element.find("#feedback-step2 .location").val()},this.callback("raiseFeedbackMarker"));
},raiseFeedbackMarker:function(_8){
var _9=this.element.find(".name").val();
var _a=this.element.find(".email").val();
var _b=this.element.find(".location").val();
this.publish("gowane.feedback-marker-positioned",{location:_b,feature:_8,name:_9,email:_a});
}});
;
include.setPath('controllers');
$.Controller.extend("DashboardLocalizationController",{init:function(el){
this._super(el);
this.element.html(this.view("dashboard/localization"));
this.element.find(".ui-input").autocomplete({source:"/features/search",minLength:3,delay:300,focus:function(_2,ui){
return false;
}});
},".submit click":function(el,ev){
var _6=this.element.find(".ui-input").val();
Feature.findByLocation({location:_6},this.callback("showLocation"));
},showLocation:function(_7){
this.publish("gowane.feature-selected",_7);
}});
;
include.setPath('controllers');
$.Controller.extend("DashboardIndexController",{init:function(el){
this._super(el);
this.element.html(this.view("dashboard/index"));
var _2=Category.findAll({},this.callback("displayAll"));
this.mapExtent=null;
},"gowane.zoom-changed subscribe":function(_3,_4){
this.mapExtent=_4;
},getMapBoundingBox:function(){
var _5=[];
if(this.mapExtent){
_5=this.mapExtent.toArray();
}
return _5;
},displayAll:function(_6){
var _7=$("#panel-index ul");
_7.html(this.view("dashboard/categories",{categories:_6}));
var _8=this;
_7.find("a").click(function(){
var id=$(this).attr("href").substring(1);
Feature.findByCategoryId({id:id,"bounds[]":_8.getMapBoundingBox()},_8.callback("raiseCategorySelected"));
});
this.element.find("#category-list").listnav({initLetter:"a",includeAll:false,includeOther:true,flagDisabled:true,noMatchText:"Nothing matched your filter, please click another letter.",showCounts:true,cookieName:"localization-list"});
},raiseCategorySelected:function(_a,_b){
this.publish("gowane.dashboard.category-selected",{features:_a,total_entries:_b});
}});
;
include.setPath('controllers');
$.Controller.extend("MapFeaturesController",{ROAD_STYLE:{fill:true,stroke:true,fillColor:"#2356d9",strokeOpacity:0.7,pointRadius:4,strokeColor:"#2356d9",strokeWidth:5}},{init:function(el,_2,_3){
this._super(el);
this.icon_path=_3;
this.map=_2;
this.features=this.addFeatureLayer();
},"gowane.feature-selected subscribe":function(_4,_5){
this.insertFeatures(_5,true,null);
this.zoomToFeatures();
},"gowane.dashboard.tab-changed subscribe":function(_6,_7){
this.features.destroyFeatures();
},"gowane.dashboard.category-selected subscribe":function(_8,_9){
this.insertFeatures(_9.features,true,null);
},"gowane.feature-zoom-requested subscribe":function(_a,_b){
this.map.panTo(new OpenLayers.LonLat(_b.lat,_b.lon));
this.map.zoomTo(8);
},insertRouteFeature:function(_c,_d,_e){
if(_d){
this.features.destroyFeatures();
}
var _f=OpenLayers.Geometry.fromWKT(_c.geometry);
var _10=new OpenLayers.Feature.Vector(_f,_c,MapFeaturesController.ROAD_STYLE);
this.features.addFeatures([_10],{silent:false});
if(_e){
_e();
}
},addFeatureLayer:function(){
var _11=new OpenLayers.Layer.Vector("Features",{"reportError":true});
this.map.addLayer(_11);
var _12=new OpenLayers.Control.SelectFeature(_11,{multiple:false,hover:true});
this.map.addControl(_12);
_12.activate();
var _13=this;
_11.events.on({"featureselected":function(evt){
_13.onFeatureSelect(evt.feature,_13.map,_13.popupContainer);
},"featureunselected":function(evt){
_13.onFeatureUnselect(evt.feature,_13.map,_13.popupContainer);
}});
return _11;
},onFeatureSelect:function(_16,map){
var _18=_16.attributes;
if(!_18.label){
return;
}
var _19=_16.geometry.getBounds().getCenterLonLat();
var _1a=map.getResolution();
var _1b=new OpenLayers.LonLat(_19.lon+_1a*-75,_19.lat+_1a*70);
var _1c=new OpenLayers.Size(200,20);
var _1d=_18.label;
var _1e="<b>"+_1d+"</b>";
if(_18.category&&_18.commune){
_1e=_1e+"<br/>"+_18.category+", "+_18.commune;
}
_16.popup=new OpenLayers.Popup(_1d,_1b,_1c,_1e);
_16.popup.feature=_16;
map.addPopup(_16.popup);
_16.popup.updateSize();
},onFeatureUnselect:function(_1f,map){
if(_1f.popup){
_1f.popup.feature=null;
map.removePopup(_1f.popup);
_1f.popup.destroy();
_1f.popup=null;
}
},"gowane.dashboard.route-calculated subscribe":function(_21,_22){
this.features.destroyFeatures();
segments=eval(_22.segments);
for(var i=0;i<segments.length;i++){
this.insertRouteFeature({geometry:OpenLayers.Geometry.fromWKT(segments[i])},false);
}
this.zoomToFeatures();
},insertFeatures:function(_24,_25,_26){
if(_25){
this.features.destroyFeatures();
}
var _27=[];
for(var i=0;i<_24.length;i++){
var _29=_24[i];
_27.push(this.createFeature(_29));
}
this.features.addFeatures(_27,{silent:false});
if(_26){
_26();
}
},zoomToFeatures:function(){
var _2a=this.features.getDataExtent();
if(_2a){
this.map.zoomToExtent(_2a);
}
},createFeature:function(_2b){
if(_2b.shape.startsWith("POINT")){
var _2c=new OpenLayers.Geometry.Point(_2b.latitude,_2b.longitude);
var _2d=this.icon_path+_2b.icon;
var _2e=12;
if(_2b.size){
_2e=_2b.size;
}
var _2f={externalGraphic:_2d,pointRadius:_2e,graphicYOffset:-_2e};
return new OpenLayers.Feature.Vector(_2c,_2b,_2f);
}else{
var _2c=OpenLayers.Geometry.fromWKT(_2b.shape);
return new OpenLayers.Feature.Vector(_2c,_2b,MapFeaturesController.ROAD_STYLE);
}
}});
;
include.setPath('controllers');
$.Controller.extend("MapMarkersController",{init:function(el,_2){
this._super(el);
this.map=_2;
this.markers=new OpenLayers.Layer.Vector("Markers");
this.map.addLayer(this.markers);
var _3=new OpenLayers.Control.DragFeature(this.markers,{onComplete:this.onDragComplete.bind(this)});
this.map.addControl(_3);
_3.activate();
},"gowane.dashboard.tab-changed subscribe":function(_4,_5){
this.clearMarkers();
},"gowane.feedback-marker-positioned subscribe":function(_6,_7){
var _8=_7.feature[0];
_8.icon="/images/icon40.png";
var _9=this.createMarker(_8);
this.markers.addFeatures([_9],{silent:false});
this.zoomToFeatures();
},onDragComplete:function(_a,_b){
this.publish("gowane.feedback-marker-moved",[_a]);
},clearMarkers:function(_c){
this.markers.destroyFeatures();
},createMarker:function(_d){
var _e=new OpenLayers.Geometry.Point(_d.latitude,_d.longitude);
var _f=12;
if(_d.size){
_f=_d.size;
}
var _10={externalGraphic:_d.icon,pointRadius:_f,graphicYOffset:-_f};
return new OpenLayers.Feature.Vector(_e,_d,_10);
},zoomToFeatures:function(){
var _11=this.markers.getDataExtent();
if(_11){
this.map.zoomToExtent(_11);
}
}});
;
include.end_of_production();