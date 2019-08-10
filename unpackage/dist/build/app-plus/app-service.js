var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'<'],[[7],[3,'index']],[1,12]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[7],[3,'color']])
Z([[7],[3,'border']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[7])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cuIcon']])
Z(z[5])
Z([[6],[[7],[3,'item']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,0]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,1]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'backText']],[1,'content']],[1,'right']]])
Z([[7],[3,'loadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'padding-sm flex flex-wrap'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[6])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'black']]],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'page']],[[2,'?:'],[[2,'!='],[[7],[3,'modalName']],[1,null]],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'modalName']],[1,null]])
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cuIconList']])
Z(z[7])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'cu-modal bottom-modal']],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'ChooseModal']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideModal']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'cu-dialog'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'checkbox']])
Z(z[11])
Z(z[5])
Z([[4],[[5],[[5],[1,'cu-btn orange lg block']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'bg-orange'],[1,'line-orange']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ChooseCheckbox']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'hot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([1,10])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z(z[2])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[1,'card-swiper']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'cardSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[2])
Z([3,'5000'])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z([3,'swiper-item'])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[12])
Z(z[12])
Z([3,'tower-swiper'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'TowerMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'TowerStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'TowerEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z(z[25])
Z(z[9])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'PageCur']],[1,'basics']])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'component']])
Z(z[1])
Z([3,'2'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'plugin']])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'PageCur']],[1,'homepage']])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'aboutpage']])
Z(z[1])
Z([3,'2'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'searchpage']])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'postpage']])
Z(z[1])
Z([3,'4'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'mypage']])
Z(z[1])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([1,true])
Z([3,'__e'])
Z(z[5])
Z([[4],[[5],[[5],[1,'card-swiper']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'cardSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[5])
Z([3,'5000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[15])
Z([3,'swiper-item'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z(z[15])
Z(z[16])
Z([[7],[3,'cuIconList']])
Z(z[15])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z(z[6])
Z([3,'cu-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toHomelist']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'__e'])
Z([3,'swiper-box'])
Z([[7],[3,'tabIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'ontabchange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper-boxcontent'])
Z([[7],[3,'contentstyle']])
Z([3,'index1'])
Z([3,'tab'])
Z([[7],[3,'newsList']])
Z(z[12])
Z(z[5])
Z([3,'scroll-v list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([[4],[[5],[[2,'+'],[1,'scrollviewitem'],[[7],[3,'index1']]]]])
Z([3,'index2'])
Z([3,'newsitem'])
Z([[6],[[7],[3,'tab']],[3,'data']])
Z([3,'id'])
Z(z[1])
Z(z[5])
Z(z[5])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[[5],[[7],[3,'index1']]],[[7],[3,'index2']]]]]]]]]]],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'newsList']],[1,'']],[[7],[3,'index1']]]]],[[4],[[5],[[5],[[5],[1,'data']],[1,'id']],[[6],[[7],[3,'newsitem']],[3,'id']]]]]]]]]]]]]]]])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index1']]],[1,'-']],[[7],[3,'index2']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'options']],[3,'title']])
Z([3,'__e'])
Z([3,'cu-item shadow'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'click']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'content'])
Z([[6],[[7],[3,'options']],[3,'image_url']])
Z([3,'i'])
Z([3,'source'])
Z([[6],[[7],[3,'options']],[3,'image_list']])
Z(z[6])
Z(z[8])
Z([[2,'!'],[[6],[[7],[3,'options']],[3,'image_list']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-shadeTop text-white'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./colorui/components/wm-poster/wm-poster.wxml','./colorui/components/yq-avatar/yq-avatar.wxml','./pages/basics/avatar.wxml','./pages/basics/background.wxml','./pages/basics/button.wxml','./pages/basics/design.wxml','./pages/basics/home.wxml','./pages/basics/icon.wxml','./pages/basics/layout.wxml','./pages/basics/loading.wxml','./pages/basics/progress.wxml','./pages/basics/shadow.wxml','./pages/basics/tag.wxml','./pages/basics/text.wxml','./pages/component/bar.wxml','./pages/component/card.wxml','./pages/component/chat.wxml','./pages/component/form.wxml','./pages/component/home.wxml','./pages/component/list.wxml','./pages/component/modal.wxml','./pages/component/nav.wxml','./pages/component/steps.wxml','./pages/component/swiper.wxml','./pages/component/timeline.wxml','./pages/index/index.wxml','./pages/main/home.wxml','./pages/main_page/about/about.wxml','./pages/main_page/home/home.wxml','./pages/main_page/homelist/detail/detail.wxml','./pages/main_page/homelist/homelist.wxml','./pages/main_page/homelist/news-item.wxml','./pages/main_page/my/my.wxml','./pages/main_page/myset/myset.wxml','./pages/main_page/post/post.wxml','./pages/main_page/video/index.wxml','./pages/plugin/animation.wxml','./pages/plugin/drawer.wxml','./pages/plugin/home.wxml','./pages/plugin/indexes.wxml','./pages/plugin/verticalnav.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,lK)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var tM=_n('view')
var eN=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(tM,eN)
var bO=_v()
_(tM,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_v()
_(fS,hU)
if(_oz(z,9,oR,xQ,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
return fS
}
bO.wxXCkey=2
_2z(z,7,oP,e,s,gg,bO,'item','index','index')
_(r,tM)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cW=_n('view')
var oX=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(cW,oX)
var lY=_v()
_(cW,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_v()
_(b3,x5)
if(_oz(z,9,e2,t1,gg)){x5.wxVkey=1
}
x5.wxXCkey=1
return b3
}
lY.wxXCkey=2
_2z(z,7,aZ,e,s,gg,lY,'item','index','index')
_(r,cW)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var f7=_n('view')
var o0=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(f7,o0)
var c8=_v()
_(f7,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,6,e,s,gg)){h9.wxVkey=1
}
var cAB=_v()
_(f7,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,11,aDB,lCB,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,9,oBB,e,s,gg,cAB,'item','index','index')
c8.wxXCkey=1
h9.wxXCkey=1
_(r,f7)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oJB=_n('view')
var fKB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oJB,fKB)
var cLB=_v()
_(oJB,cLB)
var hMB=function(cOB,oNB,oPB,gg){
var aRB=_v()
_(oPB,aRB)
if(_oz(z,9,cOB,oNB,gg)){aRB.wxVkey=1
}
aRB.wxXCkey=1
return oPB
}
cLB.wxXCkey=2
_2z(z,7,hMB,e,s,gg,cLB,'item','index','index')
_(r,oJB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eTB=_n('view')
var oXB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(eTB,oXB)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,5,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(eTB,oVB)
if(_oz(z,6,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(eTB,xWB)
if(_oz(z,7,e,s,gg)){xWB.wxVkey=1
}
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
_(r,eTB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cZB=_n('view')
var o2B=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(cZB,o2B)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,5,e,s,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
_(r,cZB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o4B=_n('view')
var l5B=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(o4B,l5B)
var a6B=_v()
_(o4B,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_v()
_(o0B,oBC)
if(_oz(z,9,b9B,e8B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
return o0B
}
a6B.wxXCkey=2
_2z(z,7,t7B,e,s,gg,a6B,'item','index','index')
_(r,o4B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var cDC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,cDC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oFC=_n('view')
var cGC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oFC,cGC)
var oHC=_n('view')
_rz(z,oHC,'class',5,e,s,gg)
var lIC=_v()
_(oHC,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_v()
_(bMC,xOC)
if(_oz(z,10,eLC,tKC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
return bMC
}
lIC.wxXCkey=2
_2z(z,8,aJC,e,s,gg,lIC,'item','index','index')
var oPC=_v()
_(oHC,oPC)
var fQC=function(hSC,cRC,oTC,gg){
var oVC=_v()
_(oTC,oVC)
if(_oz(z,15,hSC,cRC,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
return oTC
}
oPC.wxXCkey=2
_2z(z,13,fQC,e,s,gg,oPC,'item','index','index')
_(oFC,oHC)
var lWC=_v()
_(oFC,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_v()
_(b1C,x3C)
if(_oz(z,20,eZC,tYC,gg)){x3C.wxVkey=1
}
x3C.wxXCkey=1
return b1C
}
lWC.wxXCkey=2
_2z(z,18,aXC,e,s,gg,lWC,'item','index','index')
_(r,oFC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var f5C=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,f5C)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var h7C=_n('view')
var c9C=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(h7C,c9C)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,5,e,s,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
_(r,h7C)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lAD=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,lAD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var tCD=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,tCD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bED=_n('view')
var xGD=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(bED,xGD)
var oFD=_v()
_(bED,oFD)
if(_oz(z,5,e,s,gg)){oFD.wxVkey=1
}
oFD.wxXCkey=1
_(r,bED)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cJD=_mz(z,'scroll-view',['class',0,'scrollY',1],[],e,s,gg)
var hKD=_mz(z,'cu-custom',['bgColor',2,'bind:__l',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(cJD,hKD)
var oLD=_v()
_(cJD,oLD)
var cMD=function(lOD,oND,aPD,gg){
var eRD=_v()
_(aPD,eRD)
if(_oz(z,11,lOD,oND,gg)){eRD.wxVkey=1
var bSD=_v()
_(eRD,bSD)
if(_oz(z,12,lOD,oND,gg)){bSD.wxVkey=1
var oTD=_v()
_(bSD,oTD)
if(_oz(z,13,lOD,oND,gg)){oTD.wxVkey=1
}
oTD.wxXCkey=1
}
bSD.wxXCkey=1
}
eRD.wxXCkey=1
return aPD
}
oLD.wxXCkey=2
_2z(z,9,cMD,e,s,gg,oLD,'item','index','index')
_(r,cJD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oVD=_n('view')
var fWD=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oVD,fWD)
var cXD=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var hYD=_mz(z,'view',['catchtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var oZD=_v()
_(hYD,oZD)
var c1D=function(l3D,o2D,a4D,gg){
var e6D=_mz(z,'button',['bindtap',15,'class',1,'data-event-opts',2,'data-value',3],[],l3D,o2D,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,19,l3D,o2D,gg)){b7D.wxVkey=1
}
b7D.wxXCkey=1
_(a4D,e6D)
return a4D
}
oZD.wxXCkey=2
_2z(z,13,c1D,e,s,gg,oZD,'item','index','index')
_(cXD,hYD)
_(oVD,cXD)
_(r,oVD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var x9D=_n('view')
var o0D=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(x9D,o0D)
var fAE=_v()
_(x9D,fAE)
var cBE=function(oDE,hCE,cEE,gg){
var lGE=_v()
_(cEE,lGE)
if(_oz(z,9,oDE,hCE,gg)){lGE.wxVkey=1
}
lGE.wxXCkey=1
return cEE
}
fAE.wxXCkey=2
_2z(z,7,cBE,e,s,gg,fAE,'item','index','index')
_(r,x9D)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var tIE=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,tIE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var bKE=_n('view')
var oLE=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(bKE,oLE)
var xME=_v()
_(bKE,xME)
var oNE=function(cPE,fOE,hQE,gg){
var cSE=_n('swiper-item')
var oTE=_v()
_(cSE,oTE)
if(_oz(z,9,cPE,fOE,gg)){oTE.wxVkey=1
}
var lUE=_v()
_(cSE,lUE)
if(_oz(z,10,cPE,fOE,gg)){lUE.wxVkey=1
}
oTE.wxXCkey=1
lUE.wxXCkey=1
_(hQE,cSE)
return hQE
}
xME.wxXCkey=2
_2z(z,7,oNE,e,s,gg,xME,'item','index','index')
var aVE=_mz(z,'swiper',['autoplay',11,'bindchange',1,'circular',2,'class',3,'data-event-opts',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9],[],e,s,gg)
var tWE=_v()
_(aVE,tWE)
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_n('view')
_rz(z,f3E,'class',25,oZE,bYE,gg)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,26,oZE,bYE,gg)){c4E.wxVkey=1
}
var h5E=_v()
_(f3E,h5E)
if(_oz(z,27,oZE,bYE,gg)){h5E.wxVkey=1
}
c4E.wxXCkey=1
h5E.wxXCkey=1
_(x1E,f3E)
return x1E
}
tWE.wxXCkey=2
_2z(z,23,eXE,e,s,gg,tWE,'item','index','index')
_(bKE,aVE)
var o6E=_mz(z,'view',['bindtouchend',28,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4],[],e,s,gg)
var c7E=_v()
_(o6E,c7E)
var o8E=function(a0E,l9E,tAF,gg){
var bCF=_n('view')
_rz(z,bCF,'class',37,a0E,l9E,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,38,a0E,l9E,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,39,a0E,l9E,gg)){xEF.wxVkey=1
}
oDF.wxXCkey=1
xEF.wxXCkey=1
_(tAF,bCF)
return tAF
}
c7E.wxXCkey=2
_2z(z,35,o8E,e,s,gg,c7E,'item','index','index')
_(bKE,o6E)
_(r,bKE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var fGF=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,fGF)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var hIF=_n('view')
var oJF=_v()
_(hIF,oJF)
if(_oz(z,0,e,s,gg)){oJF.wxVkey=1
var lMF=_mz(z,'basics',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oJF,lMF)
}
var cKF=_v()
_(hIF,cKF)
if(_oz(z,3,e,s,gg)){cKF.wxVkey=1
var aNF=_mz(z,'components',['bind:__l',4,'vueId',1],[],e,s,gg)
_(cKF,aNF)
}
var oLF=_v()
_(hIF,oLF)
if(_oz(z,6,e,s,gg)){oLF.wxVkey=1
var tOF=_mz(z,'plugin',['bind:__l',7,'vueId',1],[],e,s,gg)
_(oLF,tOF)
}
oJF.wxXCkey=1
oJF.wxXCkey=3
cKF.wxXCkey=1
cKF.wxXCkey=3
oLF.wxXCkey=1
oLF.wxXCkey=3
_(r,hIF)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var bQF=_n('view')
var oRF=_v()
_(bQF,oRF)
if(_oz(z,0,e,s,gg)){oRF.wxVkey=1
var hWF=_mz(z,'ctmainpage',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oRF,hWF)
}
var xSF=_v()
_(bQF,xSF)
if(_oz(z,3,e,s,gg)){xSF.wxVkey=1
var oXF=_mz(z,'ctaboutpage',['bind:__l',4,'vueId',1],[],e,s,gg)
_(xSF,oXF)
}
var oTF=_v()
_(bQF,oTF)
if(_oz(z,6,e,s,gg)){oTF.wxVkey=1
}
var fUF=_v()
_(bQF,fUF)
if(_oz(z,7,e,s,gg)){fUF.wxVkey=1
var cYF=_mz(z,'ctpost',['bind:__l',8,'vueId',1],[],e,s,gg)
_(fUF,cYF)
}
var cVF=_v()
_(bQF,cVF)
if(_oz(z,10,e,s,gg)){cVF.wxVkey=1
var oZF=_mz(z,'ctmy',['bind:__l',11,'vueId',1],[],e,s,gg)
_(cVF,oZF)
}
oRF.wxXCkey=1
oRF.wxXCkey=3
xSF.wxXCkey=1
xSF.wxXCkey=3
oTF.wxXCkey=1
fUF.wxXCkey=1
fUF.wxXCkey=3
cVF.wxXCkey=1
cVF.wxXCkey=3
_(r,bQF)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var t3F=_n('view')
var e4F=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(t3F,e4F)
var b5F=_mz(z,'swiper',['autoplay',5,'bindchange',1,'circular',2,'class',3,'data-event-opts',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9],[],e,s,gg)
var o6F=_v()
_(b5F,o6F)
var x7F=function(f9F,o8F,c0F,gg){
var oBG=_n('view')
_rz(z,oBG,'class',19,f9F,o8F,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,20,f9F,o8F,gg)){cCG.wxVkey=1
}
var oDG=_v()
_(oBG,oDG)
if(_oz(z,21,f9F,o8F,gg)){oDG.wxVkey=1
}
cCG.wxXCkey=1
oDG.wxXCkey=1
_(c0F,oBG)
return c0F
}
o6F.wxXCkey=2
_2z(z,17,x7F,e,s,gg,o6F,'item','index','index')
_(t3F,b5F)
var lEG=_v()
_(t3F,lEG)
var aFG=function(eHG,tGG,bIG,gg){
var xKG=_v()
_(bIG,xKG)
if(_oz(z,26,eHG,tGG,gg)){xKG.wxVkey=1
var oLG=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],eHG,tGG,gg)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,30,eHG,tGG,gg)){fMG.wxVkey=1
var cNG=_v()
_(fMG,cNG)
if(_oz(z,31,eHG,tGG,gg)){cNG.wxVkey=1
}
cNG.wxXCkey=1
}
fMG.wxXCkey=1
_(xKG,oLG)
}
xKG.wxXCkey=1
return bIG
}
lEG.wxXCkey=2
_2z(z,24,aFG,e,s,gg,lEG,'item','index','index')
_(r,t3F)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cQG=_n('view')
var oRG=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(cQG,oRG)
var lSG=_mz(z,'swiper',['bindchange',5,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5,'style',6],[],e,s,gg)
var aTG=_v()
_(lSG,aTG)
var tUG=function(bWG,eVG,oXG,gg){
var oZG=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',16,'class',1,'data-event-opts',2,'id',3],[],bWG,eVG,gg)
var f1G=_v()
_(oZG,f1G)
var c2G=function(o4G,h3G,c5G,gg){
var l7G=_mz(z,'media-item',['bind:__l',24,'bind:click',1,'bind:close',2,'data-event-opts',3,'options',4,'vueId',5],[],o4G,h3G,gg)
_(c5G,l7G)
return c5G
}
f1G.wxXCkey=4
_2z(z,22,c2G,bWG,eVG,gg,f1G,'newsitem','index2','id')
_(oXG,oZG)
return oXG
}
aTG.wxXCkey=4
_2z(z,14,tUG,e,s,gg,aTG,'tab','index1','index1')
_(cQG,lSG)
_(r,cQG)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var t9G=_v()
_(r,t9G)
if(_oz(z,0,e,s,gg)){t9G.wxVkey=1
var e0G=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var bAH=_n('view')
_rz(z,bAH,'class',4,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,5,e,s,gg)){oBH.wxVkey=1
}
var oDH=_v()
_(bAH,oDH)
var fEH=function(hGH,cFH,oHH,gg){
var oJH=_v()
_(oHH,oJH)
if(_oz(z,10,hGH,cFH,gg)){oJH.wxVkey=1
}
oJH.wxXCkey=1
return oHH
}
oDH.wxXCkey=2
_2z(z,8,fEH,e,s,gg,oDH,'source','i','i')
var xCH=_v()
_(bAH,xCH)
if(_oz(z,11,e,s,gg)){xCH.wxVkey=1
}
oBH.wxXCkey=1
xCH.wxXCkey=1
_(e0G,bAH)
_(t9G,e0G)
}
t9G.wxXCkey=1
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var aLH=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,aLH)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var eNH=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,eNH)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var oPH=_n('view')
var oRH=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oPH,oRH)
var xQH=_v()
_(oPH,xQH)
if(_oz(z,5,e,s,gg)){xQH.wxVkey=1
}
xQH.wxXCkey=1
_(r,oPH)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var hUH=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,hUH)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cWH=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,cWH)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var lYH=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,lYH)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var t1H=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,t1H)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var b3H=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,b3H)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/main/home","pages/main_page/home/home","pages/main_page/about/about","pages/main_page/post/post","pages/main_page/my/my","pages/main_page/myset/myset","pages/main_page/homelist/homelist","pages/main_page/homelist/detail/detail","pages/main_page/video/index","pages/index/index","pages/basics/layout","pages/basics/background","pages/basics/text","pages/basics/icon","pages/basics/button","pages/basics/design","pages/basics/tag","pages/basics/avatar","pages/basics/progress","pages/basics/shadow","pages/basics/loading","pages/component/bar","pages/component/nav","pages/component/list","pages/component/card","pages/component/form","pages/component/timeline","pages/component/chat","pages/component/swiper","pages/component/modal","pages/component/steps","pages/plugin/indexes","pages/plugin/animation","pages/plugin/drawer","pages/plugin/verticalnav"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"ColorUi for UniApp","navigationStyle":"custom","navigationBarTextStyle":"white"},"tabBar":{"color":"#ffffff","selectedColor":"#f37b1d","borderStyle":"black","backgroundColor":"#333333","list":[{"pagePath":"pages/main_page/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_cur.png","text":"首页"},{"pagePath":"pages/main_page/post/post","iconPath":"static/tabbar/post.png","selectedIconPath":"static/tabbar/post.png","text":"发布"},{"pagePath":"pages/main_page/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my_cur.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"best","compilerVersion":"2.1.6","usingComponents":{"ctmainpage":"/pages/main_page/home/home","ctaboutpage":"/pages/main_page/about/about","ctpost":"/pages/main_page/post/post","ctmy":"/pages/main_page/my/my","basics":"/pages/basics/home","components":"/pages/component/home","plugin":"/pages/plugin/home","cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['colorui/components/wm-poster/wm-poster.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/wm-poster/wm-poster.wxml']=$gwx('./colorui/components/wm-poster/wm-poster.wxml');

__wxAppCode__['colorui/components/yq-avatar/yq-avatar.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/yq-avatar/yq-avatar.wxml']=$gwx('./colorui/components/yq-avatar/yq-avatar.wxml');

__wxAppCode__['pages/basics/avatar.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/avatar.wxml']=$gwx('./pages/basics/avatar.wxml');

__wxAppCode__['pages/basics/background.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/background.wxml']=$gwx('./pages/basics/background.wxml');

__wxAppCode__['pages/basics/button.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/button.wxml']=$gwx('./pages/basics/button.wxml');

__wxAppCode__['pages/basics/design.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/design.wxml']=$gwx('./pages/basics/design.wxml');

__wxAppCode__['pages/basics/home.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/basics/home.wxml']=$gwx('./pages/basics/home.wxml');

__wxAppCode__['pages/basics/icon.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/icon.wxml']=$gwx('./pages/basics/icon.wxml');

__wxAppCode__['pages/basics/layout.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/layout.wxml']=$gwx('./pages/basics/layout.wxml');

__wxAppCode__['pages/basics/loading.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/loading.wxml']=$gwx('./pages/basics/loading.wxml');

__wxAppCode__['pages/basics/progress.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/progress.wxml']=$gwx('./pages/basics/progress.wxml');

__wxAppCode__['pages/basics/shadow.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/shadow.wxml']=$gwx('./pages/basics/shadow.wxml');

__wxAppCode__['pages/basics/tag.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/tag.wxml']=$gwx('./pages/basics/tag.wxml');

__wxAppCode__['pages/basics/text.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/basics/text.wxml']=$gwx('./pages/basics/text.wxml');

__wxAppCode__['pages/component/bar.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/bar.wxml']=$gwx('./pages/component/bar.wxml');

__wxAppCode__['pages/component/card.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/card.wxml']=$gwx('./pages/component/card.wxml');

__wxAppCode__['pages/component/chat.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/chat.wxml']=$gwx('./pages/component/chat.wxml');

__wxAppCode__['pages/component/form.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/form.wxml']=$gwx('./pages/component/form.wxml');

__wxAppCode__['pages/component/home.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/component/home.wxml']=$gwx('./pages/component/home.wxml');

__wxAppCode__['pages/component/list.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/list.wxml']=$gwx('./pages/component/list.wxml');

__wxAppCode__['pages/component/modal.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/modal.wxml']=$gwx('./pages/component/modal.wxml');

__wxAppCode__['pages/component/nav.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/nav.wxml']=$gwx('./pages/component/nav.wxml');

__wxAppCode__['pages/component/steps.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/steps.wxml']=$gwx('./pages/component/steps.wxml');

__wxAppCode__['pages/component/swiper.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/swiper.wxml']=$gwx('./pages/component/swiper.wxml');

__wxAppCode__['pages/component/timeline.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/component/timeline.wxml']=$gwx('./pages/component/timeline.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{"basics":"/pages/basics/home","components":"/pages/component/home","plugin":"/pages/plugin/home"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/main_page/about/about.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/about/about.wxml']=$gwx('./pages/main_page/about/about.wxml');

__wxAppCode__['pages/main_page/home/home.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/main_page/home/home.wxml']=$gwx('./pages/main_page/home/home.wxml');

__wxAppCode__['pages/main_page/homelist/detail/detail.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/homelist/detail/detail.wxml']=$gwx('./pages/main_page/homelist/detail/detail.wxml');

__wxAppCode__['pages/main_page/homelist/homelist.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom","media-item":"/pages/main_page/homelist/news-item"}};
__wxAppCode__['pages/main_page/homelist/homelist.wxml']=$gwx('./pages/main_page/homelist/homelist.wxml');

__wxAppCode__['pages/main_page/homelist/news-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/main_page/homelist/news-item.wxml']=$gwx('./pages/main_page/homelist/news-item.wxml');

__wxAppCode__['pages/main_page/my/my.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/main_page/my/my.wxml']=$gwx('./pages/main_page/my/my.wxml');

__wxAppCode__['pages/main_page/myset/myset.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom","wm-poster":"/colorui/components/wm-poster/wm-poster"}};
__wxAppCode__['pages/main_page/myset/myset.wxml']=$gwx('./pages/main_page/myset/myset.wxml');

__wxAppCode__['pages/main_page/post/post.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/main_page/post/post.wxml']=$gwx('./pages/main_page/post/post.wxml');

__wxAppCode__['pages/main_page/video/index.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/video/index.wxml']=$gwx('./pages/main_page/video/index.wxml');

__wxAppCode__['pages/main/home.json']={"usingComponents":{"ctmainpage":"/pages/main_page/home/home","ctaboutpage":"/pages/main_page/about/about","ctpost":"/pages/main_page/post/post","ctmy":"/pages/main_page/my/my"}};
__wxAppCode__['pages/main/home.wxml']=$gwx('./pages/main/home.wxml');

__wxAppCode__['pages/plugin/animation.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/plugin/animation.wxml']=$gwx('./pages/plugin/animation.wxml');

__wxAppCode__['pages/plugin/drawer.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/plugin/drawer.wxml']=$gwx('./pages/plugin/drawer.wxml');

__wxAppCode__['pages/plugin/home.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"},"component":true};
__wxAppCode__['pages/plugin/home.wxml']=$gwx('./pages/plugin/home.wxml');

__wxAppCode__['pages/plugin/indexes.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/plugin/indexes.wxml']=$gwx('./pages/plugin/indexes.wxml');

__wxAppCode__['pages/plugin/verticalnav.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/plugin/verticalnav.wxml']=$gwx('./pages/plugin/verticalnav.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main","pages/main_page/about/about","pages/main_page/home/home","pages/main_page/my/my","pages/main_page/post/post"],{"02e2":function(t,e,i){"use strict";i.r(e);var n=i("b4f6"),a=i("1386");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},"0676":function(t,e,i){"use strict";i.r(e);var n=i("e4e6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},1386:function(t,e,i){"use strict";i.r(e);var n=i("7d92"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"232c":function(t,e,i){"use strict";i.r(e);var n=i("60c4"),a=i("0676");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},3002:function(t,e,i){"use strict";var n=i("9439"),a=i.n(n);a.a},"3d86":function(t,e,i){"use strict";i.r(e);var n=i("a033");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("e194");var o,r,l=i("2877"),s=Object(l["a"])(n["default"],o,r,!1,null,null,null);e["default"]=s.exports},"4d31":function(t,e,i){"use strict";i.r(e);var n=i("b2b4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"51b9":function(t,e,i){},"5c26":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"60c4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},7275:function(t,e,i){"use strict";i.r(e);var n=i("f507"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"7c58":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("66fd")),o=r(i("271e"));function r(t){return t&&t.__esModule?t:{default:t}}var l={onLaunch:function(){t.getSystemInfo({success:function(t){a.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?a.default.prototype.CustomBar=t.statusBarHeight+50:a.default.prototype.CustomBar=t.statusBarHeight+45,a.default.prototype.Defaulttheam={headcls:"bg-gradual-orange",btncls:"bg-grey",textcls:"text-orange"}}}),a.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){o.default.mayiwoLog("util tool mayiwoLog"),console.log(n("App Show"," at App.vue:119"))},onHide:function(){console.log(n("App Hide"," at App.vue:122"))}};e.default=l}).call(this,i("6e42")["default"],i("0de9")["default"])},"7d92":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{}};e.default=n},9439:function(t,e,i){},"94da":function(t,e,i){"use strict";i.r(e);var n=i("5c26"),a=i("7275");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("3002");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},a033:function(t,e,i){"use strict";i.r(e);var n=i("7c58"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},a1e7:function(t,e,i){"use strict";i.r(e);var n=i("a8d3"),a=i("4d31");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("adec");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},a8d3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},adec:function(t,e,i){"use strict";var n=i("ec23"),a=i.n(n);a.a},b2b4:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imgList:[],modalName:null,textareaAValue:""}},methods:{ChooseImage:function(){var e=this;t.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var i=this;t.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&i.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value}}};e.default=i}).call(this,i("6e42")["default"])},b4f6:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e194:function(t,e,i){"use strict";var n=i("51b9"),a=i.n(n);a.a},e4e6:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isCard:!0,loadProgress:0,CustomBar:this.CustomBar,cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:"",cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:5,gridBorder:!1}},methods:{IsCard:function(t){this.isCard=t.detail.value},DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var e=this[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);this.swiperList=e},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var e=this.direction,i=this.swiperList;if("right"==e){for(var n=i[0].mLeft,a=i[0].zIndex,o=1;o<this.swiperList.length;o++)this.swiperList[o-1].mLeft=this.swiperList[o].mLeft,this.swiperList[o-1].zIndex=this.swiperList[o].zIndex;this.swiperList[i.length-1].mLeft=n,this.swiperList[i.length-1].zIndex=a}else{for(var r=i[i.length-1].mLeft,l=i[i.length-1].zIndex,s=this.swiperList.length-1;s>0;s--)this.swiperList[s].mLeft=this.swiperList[s-1].mLeft,this.swiperList[s].zIndex=this.swiperList[s-1].zIndex;this.swiperList[0].mLeft=r,this.swiperList[0].zIndex=l}this.direction="",this.swiperList=this.swiperList},LoadProgress:function(){var t=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){t.LoadProgress()},100):this.loadProgress=0},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},toHomelist:function(e){t.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},tovideo:function(e){t.navigateTo({url:"/pages/main_page/video/index",animationType:"pop-in",animationDuration:200})},tovideo2:function(e){t.navigateTo({url:"/pages/main_page/homelist/detail/detail?title=凡真正的恩典因不完整而美丽"})}},onLoad:function(){console.log(i("页面加载事件"," at pages\\main_page\\home\\home.vue:367")),this.LoadProgress(),this.TowerSwiper("swiperList")}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},ec23:function(t,e,i){},f507:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isCard:!0,TabCur:0,animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(t){var e=this,i=t.currentTarget.dataset.class;this.animation=i,setTimeout(function(){e.animation=""},1e3)},ToggleDelay:function(){var t=this;this.toggleDelay=!0,setTimeout(function(){t.toggleDelay=!1},1e3)},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},myset:function(e){t.navigateTo({url:"/pages/main_page/myset/myset",animationType:"pop-in",animationDuration:200})}}};e.default=i}).call(this,i("6e42")["default"])}},[["a850","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, i = t[0], s = t[1], c = t[2], l = 0, p = []; l < i.length; l++) {
      o = i[l], a[o] && p.push(a[o][0]), a[o] = 0;
    }

    for (r in s) {
      Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }

    m && m(t);

    while (p.length) {
      p.shift()();
    }

    return u.push.apply(u, c || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== a[i] && (r = !1);
      }

      r && (u.splice(t--, 1), e = s(s.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function i(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.e = function (e) {
    var t = [],
        n = {
      "pages/basics/home": 1,
      "pages/component/home": 1,
      "pages/plugin/home": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "pages/basics/home": "pages/basics/home",
        "pages/component/home": "pages/component/home",
        "pages/plugin/home": "pages/plugin/home",
        "colorui/components/wm-poster/wm-poster": "colorui/components/wm-poster/wm-poster",
        "pages/main_page/homelist/news-item": "pages/main_page/homelist/news-item"
      }[e] || e) + ".wxss", a = s.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var c = u[i],
            l = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (l === r || l === a)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (i = 0; i < p.length; i++) {
        c = p[i], l = c.getAttribute("data-href");
        if (l === r || l === a) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var r = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], m.parentNode.removeChild(m), n(u);
      }, m.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push(r[2] = u);
      var c,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e), c = function c(t) {
        l.onerror = l.onload = null, clearTimeout(p);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        c({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = c, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, s.m = e, s.c = r, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      s.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var p = 0; p < c.length; p++) {
    t(c[p]);
  }

  var m = l;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{0:function(t,e){},"0141":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("d03f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"07b3":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("0339"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0960":function(t,e,n){t.exports=n("b19a")},"0de9":function(t,e,n){"use strict";function r(t){const e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(...t){const e=t.map(t=>{const e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(n){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{const e=r(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t});let n="";if(e.length>1){const t=e.pop();n=e.join("---COMMA---"),0===t.indexOf(" at ")?n+=t:n+="---COMMA---"+t}else n=e[0];return n}n.r(e),n.d(e,"default",function(){return i})},1:function(t,e){},"1bc3":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("8aa7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1fb5":function(t,e,n){"use strict";e.byteLength=f,e.toByteArray=h,e.fromByteArray=v;for(var r=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=a.length;u<s;++u)r[u]=a[u],i[a.charCodeAt(u)]=u;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function f(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r}function l(t,e,n){return 3*(e+n)/4-n}function h(t){for(var e,n=c(t),r=n[0],a=n[1],u=new o(l(t,r,a)),s=0,f=a>0?r-4:r,h=0;h<f;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],u[s++]=e>>16&255,u[s++]=e>>8&255,u[s++]=255&e;return 2===a&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,u[s++]=255&e),1===a&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,u[s++]=e>>8&255,u[s++]=255&e),u}function p(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function d(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(p(r));return i.join("")}function v(t){for(var e,n=t.length,i=n%3,o=[],a=16383,u=0,s=n-i;u<s;u+=a)o.push(d(t,u,u+a>s?s:u+a));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"205e":function(t,e,n){"use strict";(function(e){function n(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function r(t,e){return t<<e|t>>>32-e}function i(t,e,i,o,a,u){return n(r(n(n(e,t),n(o,u)),a),i)}function o(t,e,n,r,o,a,u){return i(e&n|~e&r,t,e,o,a,u)}function a(t,e,n,r,o,a,u){return i(e&r|n&~r,t,e,o,a,u)}function u(t,e,n,r,o,a,u){return i(e^n^r,t,e,o,a,u)}function s(t,e,n,r,o,a,u){return i(n^(e|~r),t,e,o,a,u)}function c(t,e){var r,i,c,f,l;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var h=1732584193,p=-271733879,d=-1732584194,v=271733878;for(r=0;r<t.length;r+=16)i=h,c=p,f=d,l=v,h=o(h,p,d,v,t[r],7,-680876936),v=o(v,h,p,d,t[r+1],12,-389564586),d=o(d,v,h,p,t[r+2],17,606105819),p=o(p,d,v,h,t[r+3],22,-1044525330),h=o(h,p,d,v,t[r+4],7,-176418897),v=o(v,h,p,d,t[r+5],12,1200080426),d=o(d,v,h,p,t[r+6],17,-1473231341),p=o(p,d,v,h,t[r+7],22,-45705983),h=o(h,p,d,v,t[r+8],7,1770035416),v=o(v,h,p,d,t[r+9],12,-1958414417),d=o(d,v,h,p,t[r+10],17,-42063),p=o(p,d,v,h,t[r+11],22,-1990404162),h=o(h,p,d,v,t[r+12],7,1804603682),v=o(v,h,p,d,t[r+13],12,-40341101),d=o(d,v,h,p,t[r+14],17,-1502002290),p=o(p,d,v,h,t[r+15],22,1236535329),h=a(h,p,d,v,t[r+1],5,-165796510),v=a(v,h,p,d,t[r+6],9,-1069501632),d=a(d,v,h,p,t[r+11],14,643717713),p=a(p,d,v,h,t[r],20,-373897302),h=a(h,p,d,v,t[r+5],5,-701558691),v=a(v,h,p,d,t[r+10],9,38016083),d=a(d,v,h,p,t[r+15],14,-660478335),p=a(p,d,v,h,t[r+4],20,-405537848),h=a(h,p,d,v,t[r+9],5,568446438),v=a(v,h,p,d,t[r+14],9,-1019803690),d=a(d,v,h,p,t[r+3],14,-187363961),p=a(p,d,v,h,t[r+8],20,1163531501),h=a(h,p,d,v,t[r+13],5,-1444681467),v=a(v,h,p,d,t[r+2],9,-51403784),d=a(d,v,h,p,t[r+7],14,1735328473),p=a(p,d,v,h,t[r+12],20,-1926607734),h=u(h,p,d,v,t[r+5],4,-378558),v=u(v,h,p,d,t[r+8],11,-2022574463),d=u(d,v,h,p,t[r+11],16,1839030562),p=u(p,d,v,h,t[r+14],23,-35309556),h=u(h,p,d,v,t[r+1],4,-1530992060),v=u(v,h,p,d,t[r+4],11,1272893353),d=u(d,v,h,p,t[r+7],16,-155497632),p=u(p,d,v,h,t[r+10],23,-1094730640),h=u(h,p,d,v,t[r+13],4,681279174),v=u(v,h,p,d,t[r],11,-358537222),d=u(d,v,h,p,t[r+3],16,-722521979),p=u(p,d,v,h,t[r+6],23,76029189),h=u(h,p,d,v,t[r+9],4,-640364487),v=u(v,h,p,d,t[r+12],11,-421815835),d=u(d,v,h,p,t[r+15],16,530742520),p=u(p,d,v,h,t[r+2],23,-995338651),h=s(h,p,d,v,t[r],6,-198630844),v=s(v,h,p,d,t[r+7],10,1126891415),d=s(d,v,h,p,t[r+14],15,-1416354905),p=s(p,d,v,h,t[r+5],21,-57434055),h=s(h,p,d,v,t[r+12],6,1700485571),v=s(v,h,p,d,t[r+3],10,-1894986606),d=s(d,v,h,p,t[r+10],15,-1051523),p=s(p,d,v,h,t[r+1],21,-2054922799),h=s(h,p,d,v,t[r+8],6,1873313359),v=s(v,h,p,d,t[r+15],10,-30611744),d=s(d,v,h,p,t[r+6],15,-1560198380),p=s(p,d,v,h,t[r+13],21,1309151649),h=s(h,p,d,v,t[r+4],6,-145523070),v=s(v,h,p,d,t[r+11],10,-1120210379),d=s(d,v,h,p,t[r+2],15,718787259),p=s(p,d,v,h,t[r+9],21,-343485551),h=n(h,i),p=n(p,c),d=n(d,f),v=n(v,l);return[h,p,d,v]}function f(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function l(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function h(t){return f(c(l(t),8*t.length))}function p(t,e){var n,r,i=l(t),o=[],a=[];for(o[15]=a[15]=void 0,i.length>16&&(i=c(i,8*t.length)),n=0;n<16;n+=1)o[n]=909522486^i[n],a[n]=1549556828^i[n];return r=c(o.concat(l(e)),512+8*e.length),f(c(a.concat(r),640))}function d(t){var e,n,r="0123456789abcdef",i="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),i+=r.charAt(e>>>4&15)+r.charAt(15&e);return i}function v(t){return unescape(encodeURIComponent(t))}function g(t){return h(v(t))}function y(t){return d(g(t))}function _(t,e){return p(v(t),v(e))}function m(t,e){return d(_(t,e))}function b(t,e,n){return e?n?_(e,t):m(e,t):n?g(t):y(t)}t.exports=b})()},2095:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("e3d8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"271e":function(t,e,n){"use strict";(function(e){var r=i(n("677c"));function i(t){return t&&t.__esModule?t:{default:t}}var o={debug:!0,mayiwoLog:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!this.debug)return!1;var r=getCurrentPages(),i=(r.route,r.route),o="当前页面【"+i+"】";""!=n&&(o+="["+n+"]"),console.log(e(o," at util\\we7\\resource\\js\\utiltool.js:20")),console.log(e(t," at util\\we7\\resource\\js\\utiltool.js:21"))},form_timefunction:function(t){var e=new Date(1e3*parseInt(t)),n="";return n=e.getFullYear(),n=n+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1),n=n+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate()),n},form_time_shortdata_function:function(t){var e=new Date(1e3*parseInt(t)),n="";return n=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=n+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate()),n=n+" "+(e.getHours()<10?"0"+e.getHours():e.getHours()),n=n+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()),n},getQuery:function(t){var e=[];if(-1!=t.indexOf("?"))for(var n=t.split("?")[1],r=n.split("&"),i=0;i<r.length;i++)r[i].split("=")[0]&&unescape(r[i].split("=")[1])&&(e[i]={name:r[i].split("=")[0],value:unescape(r[i].split("=")[1])});return e},getUserInfo:function(t,e){var n=this;r.default.getUserInfo(function(r){n.mayiwoLog(wx.getStorageSync("userInfo"),"系统通用会员信息");var i=new Object;i.from_id=0,t.from_id?(n.mayiwoLog(t.from_id,"存在推荐人会员UID"),i.from_id=t.from_id):n.mayiwoLog(t.from_id,"不存在推荐人会员UID");var o="wxapi";i.model="member",i.apiname="member_info",n.mayiwoPost(o,i,function(t){wx.setStorageSync("memberInfo",t.result.data),n.mayiwoLog(wx.getStorageSync("memberInfo"),"模块内真实会员信息"),"function"==typeof e&&e(t.result.data)})})},getUserInfoForButton:function(t,e){var n=this;r.default.getUserInfo(function(t){n.mayiwoLog(t),"function"==typeof e&&e(t)},t.detail)},mayiwoPost:function(t,e,n){var i=this;e.m="haojk_myw",i.mayiwoLog(e.apiname+":"+o.dateFormat("yyyy-MM-dd hh:mm:ss.S")+"开始请求接口"),r.default.request({url:"entry/wxapp/"+t,showLoading:!1,data:e,method:"post",success:function(r){var a={"POST API":t,"POST 参数":e,"POST 结果":r.data};i.mayiwoLog(a),i.mayiwoLog(e.apiname+":"+o.dateFormat("yyyy-MM-dd hh:mm:ss.S")+"结束请求接口"),"function"==typeof n&&n(r.data)}})},dateFormat:function(t){var e=new Date,n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},getGoodList:function(t,e){var n=this;t.m="haojk_myw",t.model="apicloud",t.apiname="api_listall";var r="wxapi";wx.getStorageSync("userInfo");n.mayiwoPost(r,t,function(t){t.result;"function"==typeof e&&e(t.result)})}};t.exports=o}).call(this,n("0de9")["default"])},"27bf":function(t,e,n){"use strict";t.exports=a;var r=n("b19a"),i=n("3a7c");function o(t,e){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(!r)return this.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!=e&&this.push(e),r(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function a(t){if(!(this instanceof a))return new a(t);r.call(this,t),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"===typeof t.transform&&(this._transform=t.transform),"function"===typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",u)}function u(){var t=this;"function"===typeof this._flush?this._flush(function(e,n){s(t,e,n)}):s(this,null,null)}function s(t,e,n){if(e)return t.emit("error",e);if(null!=n&&t.push(n),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}i.inherits=n("3fb5"),i.inherits(a,r),a.prototype.push=function(t,e){return this._transformState.needTransform=!1,r.prototype.push.call(this,t,e)},a.prototype._transform=function(t,e,n){throw new Error("_transform() is not implemented")},a.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},a.prototype._destroy=function(t,e){var n=this;r.prototype._destroy.call(this,t,function(t){e(t),n.emit("close")})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,u){var s,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2c63":function(t,e,n){t.exports=n("dc14")},"2c85":function(t,e,n){"use strict";(function(){var e=Array.prototype,n=Object.prototype,r=Function.prototype,i=e.push,o=e.slice,a=n.toString,u=n.hasOwnProperty,s=Array.isArray,c=Object.keys,f=r.bind,l=Object.create,h=function(){},p=function t(e){return e instanceof t?e:this instanceof t?void(this._wrapped=e):new t(e)};t.exports=p,p.VERSION="1.8.2";var d=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return function(){return t.apply(e,arguments)}},v=function(t,e,n){return null==t?p.identity:p.isFunction(t)?d(t,e,n):p.isObject(t)?p.matcher(t):p.property(t)};p.iteratee=function(t,e){return v(t,e,1/0)};var g=function(t,e){return function(n){var r=arguments.length;if(r<2||null==n)return n;for(var i=1;i<r;i++)for(var o=arguments[i],a=t(o),u=a.length,s=0;s<u;s++){var c=a[s];e&&void 0!==n[c]||(n[c]=o[c])}return n}},y=function(t){if(!p.isObject(t))return{};if(l)return l(t);h.prototype=t;var e=new h;return h.prototype=null,e},_=Math.pow(2,53)-1,m=function(t){var e=null!=t&&t.length;return"number"==typeof e&&e>=0&&e<=_};function b(t){function e(e,n,r,i,o,a){for(;o>=0&&o<a;o+=t){var u=i?i[o]:o;r=n(r,e[u],u,e)}return r}return function(n,r,i,o){r=d(r,o,4);var a=!m(n)&&p.keys(n),u=(a||n).length,s=t>0?0:u-1;return arguments.length<3&&(i=n[a?a[s]:s],s+=t),e(n,r,i,a,s,u)}}p.each=p.forEach=function(t,e,n){var r,i;if(e=d(e,n),m(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=p.keys(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t},p.map=p.collect=function(t,e,n){e=v(e,n);for(var r=!m(t)&&p.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=e(t[u],u,t)}return o},p.reduce=p.foldl=p.inject=b(1),p.reduceRight=p.foldr=b(-1),p.find=p.detect=function(t,e,n){var r;if(r=m(t)?p.findIndex(t,e,n):p.findKey(t,e,n),void 0!==r&&-1!==r)return t[r]},p.filter=p.select=function(t,e,n){var r=[];return e=v(e,n),p.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r},p.reject=function(t,e,n){return p.filter(t,p.negate(v(e)),n)},p.every=p.all=function(t,e,n){e=v(e,n);for(var r=!m(t)&&p.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},p.some=p.any=function(t,e,n){e=v(e,n);for(var r=!m(t)&&p.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},p.contains=p.includes=p.include=function(t,e,n){return m(t)||(t=p.values(t)),p.indexOf(t,e,"number"==typeof n&&n)>=0},p.invoke=function(t,e){var n=o.call(arguments,2),r=p.isFunction(e);return p.map(t,function(t){var i=r?e:t[e];return null==i?i:i.apply(t,n)})},p.pluck=function(t,e){return p.map(t,p.property(e))},p.where=function(t,e){return p.filter(t,p.matcher(e))},p.findWhere=function(t,e){return p.find(t,p.matcher(e))},p.max=function(t,e,n){var r,i,o=-1/0,a=-1/0;if(null==e&&null!=t){t=m(t)?t:p.values(t);for(var u=0,s=t.length;u<s;u++)r=t[u],r>o&&(o=r)}else e=v(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i>a||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},p.min=function(t,e,n){var r,i,o=1/0,a=1/0;if(null==e&&null!=t){t=m(t)?t:p.values(t);for(var u=0,s=t.length;u<s;u++)r=t[u],r<o&&(o=r)}else e=v(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},p.shuffle=function(t){for(var e,n=m(t)?t:p.values(t),r=n.length,i=Array(r),o=0;o<r;o++)e=p.random(0,o),e!==o&&(i[o]=i[e]),i[e]=n[o];return i},p.sample=function(t,e,n){return null==e||n?(m(t)||(t=p.values(t)),t[p.random(t.length-1)]):p.shuffle(t).slice(0,Math.max(0,e))},p.sortBy=function(t,e,n){return e=v(e,n),p.pluck(p.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};var w=function(t){return function(e,n,r){var i={};return n=v(n,r),p.each(e,function(r,o){var a=n(r,o,e);t(i,r,a)}),i}};p.groupBy=w(function(t,e,n){p.has(t,n)?t[n].push(e):t[n]=[e]}),p.indexBy=w(function(t,e,n){t[n]=e}),p.countBy=w(function(t,e,n){p.has(t,n)?t[n]++:t[n]=1}),p.toArray=function(t){return t?p.isArray(t)?o.call(t):m(t)?p.map(t,p.identity):p.values(t):[]},p.size=function(t){return null==t?0:m(t)?t.length:p.keys(t).length},p.partition=function(t,e,n){e=v(e,n);var r=[],i=[];return p.each(t,function(t,n,o){(e(t,n,o)?r:i).push(t)}),[r,i]},p.first=p.head=p.take=function(t,e,n){if(null!=t)return null==e||n?t[0]:p.initial(t,t.length-e)},p.initial=function(t,e,n){return o.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},p.last=function(t,e,n){if(null!=t)return null==e||n?t[t.length-1]:p.rest(t,Math.max(0,t.length-e))},p.rest=p.tail=p.drop=function(t,e,n){return o.call(t,null==e||n?1:e)},p.compact=function(t){return p.filter(t,p.identity)};var x=function t(e,n,r,i){for(var o=[],a=0,u=i||0,s=e&&e.length;u<s;u++){var c=e[u];if(m(c)&&(p.isArray(c)||p.isArguments(c))){n||(c=t(c,n,r));var f=0,l=c.length;o.length+=l;while(f<l)o[a++]=c[f++]}else r||(o[a++]=c)}return o};function S(t){return function(e,n,r){n=v(n,r);for(var i=null!=e&&e.length,o=t>0?0:i-1;o>=0&&o<i;o+=t)if(n(e[o],o,e))return o;return-1}}p.flatten=function(t,e){return x(t,e,!1)},p.without=function(t){return p.difference(t,o.call(arguments,1))},p.uniq=p.unique=function(t,e,n,r){if(null==t)return[];p.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=v(n,r));for(var i=[],o=[],a=0,u=t.length;a<u;a++){var s=t[a],c=n?n(s,a,t):s;e?(a&&o===c||i.push(s),o=c):n?p.contains(o,c)||(o.push(c),i.push(s)):p.contains(i,s)||i.push(s)}return i},p.union=function(){return p.uniq(x(arguments,!0,!0))},p.intersection=function(t){if(null==t)return[];for(var e=[],n=arguments.length,r=0,i=t.length;r<i;r++){var o=t[r];if(!p.contains(e,o)){for(var a=1;a<n;a++)if(!p.contains(arguments[a],o))break;a===n&&e.push(o)}}return e},p.difference=function(t){var e=x(arguments,!0,!0,1);return p.filter(t,function(t){return!p.contains(e,t)})},p.zip=function(){return p.unzip(arguments)},p.unzip=function(t){for(var e=t&&p.max(t,"length").length||0,n=Array(e),r=0;r<e;r++)n[r]=p.pluck(t,r);return n},p.object=function(t,e){for(var n={},r=0,i=t&&t.length;r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},p.indexOf=function(t,e,n){var r=0,i=t&&t.length;if("number"==typeof n)r=n<0?Math.max(0,i+n):n;else if(n&&i)return r=p.sortedIndex(t,e),t[r]===e?r:-1;if(e!==e)return p.findIndex(o.call(t,r),p.isNaN);for(;r<i;r++)if(t[r]===e)return r;return-1},p.lastIndexOf=function(t,e,n){var r=t?t.length:0;if("number"==typeof n&&(r=n<0?r+n+1:Math.min(r,n+1)),e!==e)return p.findLastIndex(o.call(t,0,r),p.isNaN);while(--r>=0)if(t[r]===e)return r;return-1},p.findIndex=S(1),p.findLastIndex=S(-1),p.sortedIndex=function(t,e,n,r){n=v(n,r,1);var i=n(e),o=0,a=t.length;while(o<a){var u=Math.floor((o+a)/2);n(t[u])<i?o=u+1:a=u}return o},p.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i};var A=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=y(t.prototype),a=t.apply(o,i);return p.isObject(a)?a:o};p.bind=function(t,e){if(f&&t.bind===f)return f.apply(t,o.call(arguments,1));if(!p.isFunction(t))throw new TypeError("Bind must be called on a function");var n=o.call(arguments,2),r=function r(){return A(t,r,e,this,n.concat(o.call(arguments)))};return r},p.partial=function(t){var e=o.call(arguments,1),n=function n(){for(var r=0,i=e.length,o=Array(i),a=0;a<i;a++)o[a]=e[a]===p?arguments[r++]:e[a];while(r<arguments.length)o.push(arguments[r++]);return A(t,n,this,this,o)};return n},p.bindAll=function(t){var e,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(e=1;e<r;e++)n=arguments[e],t[n]=p.bind(t[n],t);return t},p.memoize=function(t,e){var n=function n(r){var i=n.cache,o=""+(e?e.apply(this,arguments):r);return p.has(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return n.cache={},n},p.delay=function(t,e){var n=o.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},p.defer=p.partial(p.delay,p,1),p.throttle=function(t,e,n){var r,i,o,a=null,u=0;n||(n={});var s=function(){u=!1===n.leading?0:p.now(),a=null,o=t.apply(r,i),a||(r=i=null)};return function(){var c=p.now();u||!1!==n.leading||(u=c);var f=e-(c-u);return r=this,i=arguments,f<=0||f>e?(a&&(clearTimeout(a),a=null),u=c,o=t.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(s,f)),o}},p.debounce=function(t,e,n){var r,i,o,a,u,s=function s(){var c=p.now()-a;c<e&&c>=0?r=setTimeout(s,e-c):(r=null,n||(u=t.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=p.now();var c=n&&!r;return r||(r=setTimeout(s,e)),c&&(u=t.apply(o,i),o=i=null),u}},p.wrap=function(t,e){return p.partial(e,t)},p.negate=function(t){return function(){return!t.apply(this,arguments)}},p.compose=function(){var t=arguments,e=t.length-1;return function(){var n=e,r=t[e].apply(this,arguments);while(n--)r=t[n].call(this,r);return r}},p.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},p.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},p.once=p.partial(p.before,2);var O=!{toString:null}.propertyIsEnumerable("toString"),k=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function E(t,e){var r=k.length,i=t.constructor,o=p.isFunction(i)&&i.prototype||n,a="constructor";p.has(t,a)&&!p.contains(e,a)&&e.push(a);while(r--)a=k[r],a in t&&t[a]!==o[a]&&!p.contains(e,a)&&e.push(a)}p.keys=function(t){if(!p.isObject(t))return[];if(c)return c(t);var e=[];for(var n in t)p.has(t,n)&&e.push(n);return O&&E(t,e),e},p.allKeys=function(t){if(!p.isObject(t))return[];var e=[];for(var n in t)e.push(n);return O&&E(t,e),e},p.values=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},p.mapObject=function(t,e,n){e=v(e,n);for(var r,i=p.keys(t),o=i.length,a={},u=0;u<o;u++)r=i[u],a[r]=e(t[r],r,t);return a},p.pairs=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},p.invert=function(t){for(var e={},n=p.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},p.functions=p.methods=function(t){var e=[];for(var n in t)p.isFunction(t[n])&&e.push(n);return e.sort()},p.extend=g(p.allKeys),p.extendOwn=p.assign=g(p.keys),p.findKey=function(t,e,n){e=v(e,n);for(var r,i=p.keys(t),o=0,a=i.length;o<a;o++)if(r=i[o],e(t[r],r,t))return r},p.pick=function(t,e,n){var r,i,o={},a=t;if(null==a)return o;p.isFunction(e)?(i=p.allKeys(a),r=d(e,n)):(i=x(arguments,!1,!1,1),r=function(t,e,n){return e in n},a=Object(a));for(var u=0,s=i.length;u<s;u++){var c=i[u],f=a[c];r(f,c,a)&&(o[c]=f)}return o},p.omit=function(t,e,n){if(p.isFunction(e))e=p.negate(e);else{var r=p.map(x(arguments,!1,!1,1),String);e=function(t,e){return!p.contains(r,e)}}return p.pick(t,e,n)},p.defaults=g(p.allKeys,!0),p.create=function(t,e){var n=y(t);return e&&p.extendOwn(n,e),n},p.clone=function(t){return p.isObject(t)?p.isArray(t)?t.slice():p.extend({},t):t},p.tap=function(t,e){return e(t),t},p.isMatch=function(t,e){var n=p.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0};var j=function t(e,n,r,i){if(e===n)return 0!==e||1/e===1/n;if(null==e||null==n)return e===n;e instanceof p&&(e=e._wrapped),n instanceof p&&(n=n._wrapped);var o=a.call(e);if(o!==a.call(n))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e===""+n;case"[object Number]":return+e!==+e?+n!==+n:0===+e?1/+e===1/n:+e===+n;case"[object Date]":case"[object Boolean]":return+e===+n}var u="[object Array]"===o;if(!u){if("object"!=typeof e||"object"!=typeof n)return!1;var s=e.constructor,c=n.constructor;if(s!==c&&!(p.isFunction(s)&&s instanceof s&&p.isFunction(c)&&c instanceof c)&&"constructor"in e&&"constructor"in n)return!1}r=r||[],i=i||[];var f=r.length;while(f--)if(r[f]===e)return i[f]===n;if(r.push(e),i.push(n),u){if(f=e.length,f!==n.length)return!1;while(f--)if(!t(e[f],n[f],r,i))return!1}else{var l,h=p.keys(e);if(f=h.length,p.keys(n).length!==f)return!1;while(f--)if(l=h[f],!p.has(n,l)||!t(e[l],n[l],r,i))return!1}return r.pop(),i.pop(),!0};p.isEqual=function(t,e){return j(t,e)},p.isEmpty=function(t){return null==t||(m(t)&&(p.isArray(t)||p.isString(t)||p.isArguments(t))?0===t.length:0===p.keys(t).length)},p.isElement=function(t){return!(!t||1!==t.nodeType)},p.isArray=s||function(t){return"[object Array]"===a.call(t)},p.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},p.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){p["is"+t]=function(e){return a.call(e)==="[object "+t+"]"}}),p.isArguments(arguments)||(p.isArguments=function(t){return p.has(t,"callee")}),"object"!=typeof Int8Array&&(p.isFunction=function(t){return"function"==typeof t||!1}),p.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},p.isNaN=function(t){return p.isNumber(t)&&t!==+t},p.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===a.call(t)},p.isNull=function(t){return null===t},p.isUndefined=function(t){return void 0===t},p.has=function(t,e){return null!=t&&u.call(t,e)},p.noConflict=function(){return root._=previousUnderscore,this},p.identity=function(t){return t},p.constant=function(t){return function(){return t}},p.noop=function(){},p.property=function(t){return function(e){return null==e?void 0:e[t]}},p.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},p.matcher=p.matches=function(t){return t=p.extendOwn({},t),function(e){return p.isMatch(e,t)}},p.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},p.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},p.now=Date.now||function(){return(new Date).getTime()};var P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$=p.invert(P),M=function(t){var e=function(e){return t[e]},n="(?:"+p.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};p.escape=M(P),p.unescape=M($),p.result=function(t,e,n){var r=null==t?void 0:t[e];return void 0===r&&(r=n),p.isFunction(r)?r.call(t):r};var T=0;p.uniqueId=function(t){var e=++T+"";return t?t+e:e},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\u2028|\u2029/g,D=function(t){return"\\"+C[t]};p.template=function(t,e,n){!e&&n&&(e=n),e=p.defaults({},e,p.templateSettings);var r=RegExp([(e.escape||R).source,(e.interpolate||R).source,(e.evaluate||R).source].join("|")+"|$","g"),i=0,o="__p+='";t.replace(r,function(e,n,r,a,u){return o+=t.slice(i,u).replace(L,D),i=u+e.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),e}),o+="';\n",e.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(e.variable||"obj","_",o)}catch(c){throw c.source=o,c}var u=function(t){return a.call(this,t,p)},s=e.variable||"obj";return u.source="function("+s+"){\n"+o+"}",u},p.chain=function(t){var e=p(t);return e._chain=!0,e};var I=function(t,e){return t._chain?p(e).chain():e};p.mixin=function(t){p.each(p.functions(t),function(e){var n=p[e]=t[e];p.prototype[e]=function(){var t=[this._wrapped];return i.apply(t,arguments),I(this,n.apply(p,t))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=e[t];p.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],I(this,e)}}),p.each(["concat","join","slice"],function(t){var n=e[t];p.prototype[t]=function(){return I(this,n.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},p.prototype.valueOf=p.prototype.toJSON=p.prototype.value,p.prototype.toString=function(){return""+this._wrapped}}).call(void 0)},"3a7c":function(t,e,n){(function(t){function n(t){return Array.isArray?Array.isArray(t):"[object Array]"===g(t)}function r(t){return"boolean"===typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"===typeof t}function u(t){return"string"===typeof t}function s(t){return"symbol"===typeof t}function c(t){return void 0===t}function f(t){return"[object RegExp]"===g(t)}function l(t){return"object"===typeof t&&null!==t}function h(t){return"[object Date]"===g(t)}function p(t){return"[object Error]"===g(t)||t instanceof Error}function d(t){return"function"===typeof t}function v(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function g(t){return Object.prototype.toString.call(t)}e.isArray=n,e.isBoolean=r,e.isNull=i,e.isNullOrUndefined=o,e.isNumber=a,e.isString=u,e.isSymbol=s,e.isUndefined=c,e.isRegExp=f,e.isObject=l,e.isDate=h,e.isError=p,e.isFunction=d,e.isPrimitive=v,e.isBuffer=t.isBuffer}).call(this,n("b639").Buffer)},"3c48":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("f3ea"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3c60":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("278b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"429b":function(t,e,n){t.exports=n("faa1").EventEmitter},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},4681:function(t,e,n){"use strict";var r=n("966d");function i(t,e){var n=this,i=this._readableState&&this._readableState.destroyed,o=this._writableState&&this._writableState.destroyed;return i||o?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||r.nextTick(a,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?(r.nextTick(a,n,t),n._writableState&&(n._writableState.errorEmitted=!0)):e&&e(t)}),this)}function o(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function a(t,e){t.emit("error",e)}t.exports={destroy:i,undestroy:o}},"50d3":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("6129"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"50e4":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("abf4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5285:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("94da"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5e1a":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n("8707").Buffer,o=n(1);function a(t,e,n){t.copy(e,n)}t.exports=function(){function t(){r(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";var e=this.head,n=""+e.data;while(e=e.next)n+=t+e.data;return n},t.prototype.concat=function(t){if(0===this.length)return i.alloc(0);if(1===this.length)return this.head.data;var e=i.allocUnsafe(t>>>0),n=this.head,r=0;while(n)a(n.data,e,r),r+=n.data.length,n=n.next;return e},t}(),o&&o.inspect&&o.inspect.custom&&(t.exports.prototype[o.inspect.custom]=function(){var t=o.inspect({length:this.length});return this.constructor.name+" "+t})},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function s(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,S=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),A=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/\B([A-Z])/g,k=w(function(t){return t.replace(O,"-$1").toLowerCase()});function E(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){return t.bind(e)}var P=Function.prototype.bind?j:E;function $(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function M(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function R(t,e,n){}var C=function(t,e,n){return!1},L=function(t){return t};function D(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return D(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),u=Object.keys(e);return a.length===u.length&&a.every(function(n){return D(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:C,async:!0,_lifecycleHooks:N},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Y(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+q.source+".$_\\d]");function H(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z,G="__proto__"in{},K="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ni){}var it=function(){return void 0===z&&(z=!K&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),z},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var ut,st="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);ut="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){_(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var ht=[];function pt(t){ht.push(t),lt.target=t}function dt(){ht.pop(),lt.target=ht[ht.length-1]}var vt=function(t,e,n,r,i,o,a,u){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function _t(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,wt=Object.create(bt),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach(function(t){var e=bt[t];V(wt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(wt),At=!0;function Ot(t){At=t}var kt=function(t){this.value=t,this.dep=new lt,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(G?Et(t,wt):jt(t,wt,St),this.observeArray(t)):this.walk(t)};function Et(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];V(t,o,e[o])}}function Pt(t,e){var n;if(s(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:At&&!it()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,i){var o=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var u=a&&a.get,s=a&&a.set;u&&!s||2!==arguments.length||(n=t[e]);var c=!i&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return lt.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Rt(e))),e},set:function(e){var r=u?u.call(t):n;e===r||e!==e&&r!==r||u&&!s||(s?s.call(t,e):n=e,c=!i&&Pt(e),o.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Tt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Rt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Rt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var Ct=F.optionMergeStrategies;function Lt(t,e){if(!e)return t;for(var n,r,i,o=st?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&f(r)&&f(i)&&Lt(r,i):Mt(t,n,i));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Lt(r,i):i}:e?t?function(){return Lt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ut(n):n}function Ut(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?M(i,e):i}Ct.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},N.forEach(function(t){Ct[t]=It}),B.forEach(function(t){Ct[t+"s"]=Bt}),Ct.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in M(i,t),e){var a=i[o],u=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(u):Array.isArray(u)?u:[u]}return i},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return M(i,t),e&&M(i,e),i},Ct.provide=Dt;var Nt=function(t,e){return void 0===e?t:e};function Ft(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=S(i),a[o]={type:null})}else if(f(n))for(var u in n)i=n[u],o=S(u),a[o]=f(i)?i:{type:i};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?M({from:o},a):{from:a}}else 0}}function Yt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Ft(e,n),qt(e,n),Yt(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Vt(t,e.mixins[r],n);var o,a={};for(o in t)u(o);for(o in e)b(t,o)||u(o);function u(r){var i=Ct[r]||Nt;a[r]=i(t[r],e[r],n,r)}return a}function Wt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=S(n);if(b(i,o))return i[o];var a=A(o);if(b(i,a))return i[a];var u=i[n]||i[o]||i[a];return u}}function Ht(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],u=Jt(Boolean,i.type);if(u>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===k(t)){var s=Jt(String,i.type);(s<0||u<s)&&(a=!0)}if(void 0===a){a=zt(r,i,t);var c=At;Ot(!0),Pt(a),Ot(c)}return a}function zt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Gt(e.type)?r.call(t):r}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Kt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Kt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Kt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ni){Zt(ni,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{dt()}}function Qt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(t){return Xt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ni){Xt(ni,r,i)}return o}function Zt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(ni){ni!==t&&te(ni,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!K&&!J||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function ie(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();ee=function(){oe.then(ie),et&&setTimeout(R)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,ue=new MutationObserver(ie),se=document.createTextNode(String(ae));ue.observe(se,{characterData:!0}),ee=function(){ae=(ae+1)%2,se.data=String(ae)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(ni){Xt(ni,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new ut;function le(t){he(t,fe),fe.clear()}function he(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!s(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Qt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,i,a,u){var s,c,f,l;for(s in t)c=t[s],f=e[s],l=pe(s),r(c)||(r(f)?(r(c.fns)&&(c=t[s]=de(c,u)),o(l.once)&&(c=t[s]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[s]=f));for(s in e)r(t[s])&&(l=pe(s),i(l.name,e[s],l.capture))}function ge(t,e,n){var o=e.options.props;if(!r(o)){var a={},u=t.attrs,s=t.props;if(i(u)||i(s))for(var c in o){var f=k(c);ye(a,s,c,f,!0)||ye(a,u,c,f,!1)}return a}}function ye(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return u(t)?[_t(t)]:Array.isArray(t)?we(t):void 0}function be(t){return i(t)&&i(t.text)&&a(t.isComment)}function we(t,e){var n,a,s,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(s=f.length-1,c=f[s],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(f[s]=_t(c.text+a[0].text),a.shift()),f.push.apply(f,a)):u(a)?be(c)?f[s]=_t(c.text+a):""!==a&&f.push(_t(a)):be(a)&&be(c)?f[s]=_t(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function xe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Ae(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach(function(n){$t(t,n,e[n])}),Ot(!0))}function Ae(t,e){if(t){for(var n=Object.create(null),r=st?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,u=e;while(u){if(u._provided&&b(u._provided,a)){n[o]=u._provided[a];break}u=u.$parent}if(!u)if("default"in t[o]){var s=t[o].default;n[o]="function"===typeof s?s.call(e):s}else 0}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var u=a.slot,s=n[u]||(n[u]=[]);"template"===o.tag?s.push.apply(s,o.children||[]):s.push(o)}}for(var c in n)n[c].every(ke)&&delete n[c];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ee(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,u=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&u===r.$key&&!o&&!r.$hasNormal)return r;for(var s in i={},t)t[s]&&"$"!==s[0]&&(i[s]=je(e,s,t[s]))}else i={};for(var c in e)c in i||(i[c]=Pe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),V(i,"$stable",a),V(i,"$key",u),V(i,"$hasNormal",o),i}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Pe(t,e){return function(){return t[e]}}function $e(t,e){var n,r,o,a,u;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(s(t))if(st&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)u=a[r],n[r]=e(t[u],u,r);return i(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=M(M({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Te(t){return Wt(this.$options,"filters",t,!0)||L}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,n,r,i){var o=F.keyCodes[e]||n;return i&&r&&!F.keyCodes[e]?Re(i,r):o?Re(o,t):r?k(r)!==e:void 0}function Le(t,e,n,r,i){if(n)if(s(n)){var o;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var u=t.attrs&&t.attrs.type;o=r||F.mustUseProp(e,u,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var s=S(a),c=k(a);if(!(s in o)&&!(c in o)&&(o[a]=n[a],i)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var u in n)a(u)}else;return t}function De(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ue(r,"__static__"+t,!1),r)}function Ie(t,e,n){return Ue(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ue(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Be(t[r],e+"_"+r,n);else Be(t,e,n)}function Be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ne(t,e){if(e)if(f(e)){var n=t.on=t.on?M({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Fe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Fe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Ve(t){t._o=Ie,t._n=v,t._s=d,t._l=$e,t._t=Me,t._q=D,t._i=I,t._m=De,t._f=Te,t._k=Ce,t._b=Le,t._v=_t,t._e=yt,t._u=Fe,t._g=Ne,t._d=qe,t._p=Ye}function We(t,e,r,i,a){var u,s=this,c=a.options;b(i,"_uid")?(u=Object.create(i),u._original=i):(u=i,i=i._original);var f=o(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ae(c.inject,i),this.slots=function(){return s.$slots||Ee(t.scopedSlots,s.$slots=Oe(r,i)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ee(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var o=on(u,t,e,n,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return on(u,t,e,n,r,l)}}function He(t,e,r,o,a){var u=t.options,s={},c=u.props;if(i(c))for(var f in c)s[f]=Ht(f,c,e||n);else i(r.attrs)&&Ge(s,r.attrs),i(r.props)&&Ge(s,r.props);var l=new We(r,s,a,o,t),h=u.render.call(null,l._c,l);if(h instanceof vt)return ze(h,r,l.parent,u,l);if(Array.isArray(h)){for(var p=me(h)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=ze(p[v],r,l.parent,u,l);return d}}function ze(t,e,n,r,i){var o=mt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ge(t,e){for(var n in e)t[S(n)]=e[n]}Ve(We.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,An);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Tn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Vn(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Je=Object.keys(Ke);function Xe(t,e,n,a,u){if(!r(t)){var c=n.$options._base;if(s(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return dn(f,e,n,a,u);e=e||{},pr(t),i(e.model)&&en(t.options,e);var l=ge(e,t,u);if(o(t.options.functional))return He(t,l,e,n,a);var h=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var d=t.options.name||u,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:h,tag:u,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],i=e[r],o=Ke[r];i===o||i&&i._merged||(e[r]=i?tn(o,i):o)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],u=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(o[r]=[u].concat(a)):o[r]=u}var nn=1,rn=2;function on(t,e,n,r,i,a){return(Array.isArray(n)||u(n))&&(i=r,r=n,n=void 0),o(a)&&(i=rn),an(t,e,n,r,i)}function an(t,e,n,r,o){if(i(n)&&i(n.__ob__))return yt();if(i(n)&&i(n.is)&&(e=n.is),!e)return yt();var a,u,s;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===rn?r=me(r):o===nn&&(r=_e(r)),"string"===typeof e)?(u=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new vt(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(s=Wt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Xe(s,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(u)&&un(a,u),i(n)&&sn(n),a):yt()}function un(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,u=t.children.length;a<u;a++){var s=t.children[a];i(s.tag)&&(r(s.ns)||o(n)&&"svg"!==s.tag)&&un(s,e,n)}}function sn(t){s(t.style)&&le(t.style),s(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Oe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return on(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return on(t,e,n,r,i,!0)};var o=r&&r.data;$t(t,"$attrs",o&&o.attrs||n,null,!0),$t(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function hn(t){Ve(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Ee(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ni){Xt(ni,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=i,t}}function pn(t,e){return(t.__esModule||st&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function dn(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function vn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],u=!0,c=null,f=null;n.$on("hook:destroyed",function(){return _(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},h=U(function(n){t.resolved=pn(n,e),u?a.length=0:l(!0)}),d=U(function(e){i(t.errorComp)&&(t.error=!0,l(!0))}),v=t(h,d);return s(v)&&(p(v)?r(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),i(v.error)&&(t.errorComp=pn(v.error,e)),i(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),i(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),u=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||gn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&xn(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function wn(t,e){var n=fn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function xn(t,e,n){fn=t,ve(e,n||{},mn,bn,wn,t),fn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var u=a.length;while(u--)if(o=a[u],o===e||o.fn===e){a.splice(u,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?$(n):n;for(var r=$(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Qt(n[o],e,r,e,i)}return e}}var An=null;function On(t){var e=An;return An=t,function(){An=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function En(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=On(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Tn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Tn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,i,o){var a=i.data.scopedSlots,u=t.$scopedSlots,s=!!(a&&!a.$stable||u!==n&&!u.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||s);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var f=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var p=l[h],d=t.$options.props;f[p]=Ht(p,d,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,xn(t,r,v),c&&(t.$slots=Oe(o,i.context),t.$forceUpdate())}function Pn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,Pn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Tn(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!Pn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Tn(t,"deactivated")}}function Tn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Qt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Rn=[],Cn=[],Ln={},Dn=!1,In=!1,Un=0;function Bn(){Un=Rn.length=Cn.length=0,Ln={},Dn=In=!1}var Nn=Date.now;if(K&&!Z){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&Nn()>document.createEvent("Event").timeStamp&&(Nn=function(){return Fn.now()})}function qn(){var t,e;for(Nn(),In=!0,Rn.sort(function(t,e){return t.id-e.id}),Un=0;Un<Rn.length;Un++)t=Rn[Un],t.before&&t.before(),e=t.id,Ln[e]=null,t.run();var n=Cn.slice(),r=Rn.slice();Bn(),Wn(n),Yn(r),ot&&F.devtools&&ot.emit("flush")}function Yn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Tn(r,"updated")}}function Vn(t){t._inactive=!1,Cn.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function Hn(t){var e=t.id;if(null==Ln[e]){if(Ln[e]=!0,In){var n=Rn.length-1;while(n>Un&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Dn||(Dn=!0,ce(qn))}}var zn=0,Gn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="","function"===typeof e?this.getter=e:(this.getter=H(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ni){if(!this.user)throw ni;Xt(ni,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Hn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ni){Xt(ni,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:R,set:R};function Jn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):Pt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&ur(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||Ot(!1);var a=function(o){i.push(o);var a=Ht(o,e,n,t);$t(r,o,a),o in t||Jn(t,"_props",o)};for(var u in e)a(u);Ot(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||Y(o)||Jn(t,"_data",o)}Pt(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(ni){return Xt(ni,e,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Gn(t,a||R,R,er)),i in t||rr(t,i,o)}}function rr(t,e,n){var r=!it();"function"===typeof n?(Kn.get=r?ir(e):or(n),Kn.set=R):(Kn.get=n.get?r&&!1!==n.cache?ir(e):or(n.get):R,Kn.set=n.set||R),Object.defineProperty(t,e,Kn)}function ir(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:P(e[n],t)}function ur(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Tt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Xt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=Vt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),_n(e),cn(e),Tn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Xn(e),"mp-toutiao"!==e.mpHost&&xe(e),"mp-toutiao"!==e.mpHost&&Tn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=dr(t);i&&M(t.extendOptions,i),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function vr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=$(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Vt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),i[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function xr(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Ar(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var u=xr(a.componentOptions);u&&!e(u)&&Or(n,o,r,i)}}}function Or(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}lr(vr),cr(vr),Sn(vr),En(vr),hn(vr);var kr=[String,RegExp,Array],Er={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Or(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Ar(t,function(t){return Sr(e,t)})}),this.$watch("exclude",function(e){Ar(t,function(t){return!Sr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=xr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Sr(o,r))||a&&r&&Sr(a,r))return e;var u=this,s=u.cache,c=u.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;s[f]?(e.componentInstance=s[f].componentInstance,_(c,f),c.push(f)):(s[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Or(s,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Er};function Pr(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:Vt,defineReactive:$t},t.set=Mt,t.delete=Tt,t.nextTick=ce,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,jr),gr(t),yr(t),_r(t),wr(t)}Pr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:it}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:We}),vr.version="2.6.10";var $r="[object Array]",Mr="[object Object]";function Tr(t,e){var n={};return Rr(t,e),Cr(t,e,"",n),n}function Rr(t,e){if(t!==e){var n=Dr(t),r=Dr(e);if(n==Mr&&r==Mr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Rr(o,e[i])}}else n==$r&&r==$r&&t.length>=e.length&&e.forEach(function(e,n){Rr(t[n],e)})}}function Cr(t,e,n,r){if(t!==e){var i=Dr(t),o=Dr(e);if(i==Mr)if(o!=Mr||Object.keys(t).length<Object.keys(e).length)Lr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],u=Dr(o),s=Dr(a);if(u!=$r&&u!=Mr)o!=e[i]&&Lr(r,(""==n?"":n+".")+i,o);else if(u==$r)s!=$r?Lr(r,(""==n?"":n+".")+i,o):o.length<a.length?Lr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Cr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(u==Mr)if(s!=Mr||Object.keys(o).length<Object.keys(a).length)Lr(r,(""==n?"":n+".")+i,o);else for(var c in o)Cr(o[c],a[c],(""==n?"":n+".")+i+"."+c,r)};for(var u in t)a(u)}else i==$r?o!=$r?Lr(r,n,t):t.length<e.length?Lr(r,n,t):t.forEach(function(t,i){Cr(t,e[i],n+"["+i+"]",r)}):Lr(r,n,t)}}function Lr(t,e,n){t[e]=n}function Dr(t){return Object.prototype.toString.call(t)}function Ir(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Ur(t){return Rn.find(function(e){return t._watcher===e})}function Br(t,e){if(!t.__next_tick_pending&&!Ur(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ni){Xt(ni,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Nr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Fr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Nr(this)}catch(u){console.error(u)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Tr(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Ir(n)})):Ir(this)}};function qr(){}function Yr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Tn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Tn(t,"beforeUpdate")}},!0),n=!1,t}function Vr(t,e){return i(t)||i(e)?Wr(t,Hr(e)):""}function Wr(t,e){return t?e?t+" "+e:t:e||""}function Hr(t){return Array.isArray(t)?zr(t):s(t)?Gr(t):"string"===typeof t?t:""}function zr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Hr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?T(t):"string"===typeof t?Kr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Br(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=xe,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,u=i.length;a<u;a++)r=Qt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Vr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?M(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(s(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var ti=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ei(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==ti.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;ti.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=ti}vr.prototype.__patch__=Fr,vr.prototype.$mount=function(t,e){return Yr(this,t,e)},ei(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"671f":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("13fb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"677c":function(module,exports,__webpack_require__){"use strict";(function(__f__){var _base=__webpack_require__("9873"),_md=_interopRequireDefault(__webpack_require__("205e")),_siteinfo=_interopRequireDefault(__webpack_require__("d1ce")),_request=_interopRequireDefault(__webpack_require__("e1e2"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var util={};function getQuery(t){var e=[];if(-1!=t.indexOf("?"))for(var n=t.split("?")[1],r=n.split("&"),i=0;i<r.length;i++)r[i].split("=")[0]&&unescape(r[i].split("=")[1])&&(e[i]={name:r[i].split("=")[0],value:unescape(r[i].split("=")[1])});return e}function getUrlParam(t,e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t.split("?")[1].match(n);return null!=r?unescape(r[2]):null}function getSign(t,e,n){var r=__webpack_require__("2c85"),i=__webpack_require__("205e"),o="",a=getUrlParam(t,"sign");if(a||e&&e.sign)return!1;if(t&&(o=getQuery(t)),e){var u=[];for(var s in e)s&&e[s]&&(u=u.concat({name:s,value:e[s]}));o=o.concat(u)}o=r.sortBy(o,"name"),o=r.uniq(o,!0,"name");for(var c="",f=0;f<o.length;f++)o[f]&&o[f].name&&o[f].value&&(c+=o[f].name+"="+o[f].value,f<o.length-1&&(c+="&"));return n=n||_siteinfo.default.token,a=i(c+n),a}util.base64Encode=function(t){return(0,_base.base64_encode)(t)},util.base64Decode=function(t){return(0,_base.base64_decode)(t)},util.md5=function(t){return(0,_md.default)(t)},util.url=function(t,e){getApp();var n=_siteinfo.default.siteroot+"?i="+_siteinfo.default.uniacid+"&t="+_siteinfo.default.multiid+"&v="+_siteinfo.default.version+"&from=wxapp&";if(t&&(t=t.split("/"),t[0]&&(n+="c="+t[0]+"&"),t[1]&&(n+="a="+t[1]+"&"),t[2]&&(n+="do="+t[2]+"&")),e&&"object"===typeof e)for(var r in e)r&&e.hasOwnProperty(r)&&e[r]&&(n+=r+"="+e[r]+"&");return n},util.getSign=function(t,e,n){return getSign(t,e,n)},util.request_old=function(t){var e=new _request.default;e.setConfig(function(t){return t.baseUrl="http://www.aaa.cn",t.header={a:1,b:2},t}),e.interceptor.request(function(t,e){return t.header=_objectSpread({},t.header,{a:1}),t}),e.interceptor.response(function(t){return t}),e.get("/user/login",{userName:"name",password:"123456"},{header:{},dataType:"json",responseType:"text"}).then(function(t){}).catch(function(t){})},util.request=function(t){__webpack_require__("2c85");var e,n=__webpack_require__("205e"),r=getApp();t=t||{};t.cachetime=t.cachetime?t.cachetime:0,t.showLoading="undefined"==typeof t.showLoading||t.showLoading;var i=wx.getStorageSync("userInfo").sessionid,o=t.url;-1==o.indexOf("http://")&&-1==o.indexOf("https://")&&(o=util.url(o));var a=getUrlParam(o,"state");if(a||t.data&&t.data.state||!i||(o=o+"&state=we7sid-"+i),!t.data||!t.data.m){var u=getCurrentPages();u.length&&(u=u[getCurrentPages().length-1],u&&u.__route__&&(o=o+"&m="+u.__route__.split("/")[0]))}var s=getSign(o,t.data);if(s&&(o=o+"&sign="+s),!o)return!1;if(wx.showNavigationBarLoading(),t.showLoading&&util.showLoading(),t.cachetime){var c=n(o),f=wx.getStorageSync(c),l=Date.parse(new Date);if(f&&f.data){if(f.expire>l)return t.complete&&"function"==typeof t.complete&&t.complete(f),t.success&&"function"==typeof t.success&&t.success(f),console.log(__f__("cache:"+o," at util\\we7\\resource\\js\\util.js:230")),wx.hideLoading(),wx.hideNavigationBarLoading(),!0;wx.removeStorageSync(c)}}wx.request((e={url:o,data:t.data?t.data:{},async:!1,header:t.header?t.header:{},method:t.method?t.method:"GET"},_defineProperty(e,"header",{"content-type":"application/x-www-form-urlencoded"}),_defineProperty(e,"success",function(e){if(wx.hideNavigationBarLoading(),wx.hideLoading(),e.data.errno){if("41009"==e.data.errno)return wx.setStorageSync("userInfo",""),void util.getUserInfo(function(){util.request(t)});if(t.fail&&"function"==typeof t.fail)t.fail(e);else if(e.data.message){if(null!=e.data.data&&e.data.data.redirect)var n=e.data.data.redirect;else n="";r.util.message(e.data.message,n,"error")}}else if(t.success&&"function"==typeof t.success&&t.success(e),t.cachetime){var i={data:e.data,expire:l+1e3*t.cachetime};wx.setStorageSync(c,i)}}),_defineProperty(e,"fail",function(e){wx.hideNavigationBarLoading(),wx.hideLoading();var n=__webpack_require__("f576"),r=n(o),i=wx.getStorageSync(r);if(i&&i.data)return t.success&&"function"==typeof t.success&&t.success(i),console.log(__f__("failreadcache:"+o," at util\\we7\\resource\\js\\util.js:296")),!0;t.fail&&"function"==typeof t.fail&&t.fail(e)}),_defineProperty(e,"complete",function(e){t.complete&&"function"==typeof t.complete&&t.complete(e)}),e))},util.getWe7User=function(t,e){var n=wx.getStorageSync("userInfo")||{};util.request({url:"auth/session/openid",data:{code:e||""},cachetime:0,showLoading:!1,success:function(e){e.data.errno||(n.sessionid=e.data.data.sessionid,n.memberInfo=e.data.data.userinfo,wx.setStorageSync("userInfo",n)),"function"==typeof t&&t(n)}})},util.upadteUser=function(t,e){var n=wx.getStorageSync("userInfo");if(!t)return"function"==typeof e&&e(n);n.wxInfo=t.userInfo,util.request({url:"auth/session/userinfo",data:{signature:t.signature,rawData:t.rawData,iv:t.iv,encryptedData:t.encryptedData},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},cachetime:0,success:function(t){t.data.errno||(n.memberInfo=t.data.data,wx.setStorageSync("userInfo",n)),"function"==typeof e&&e(n)}})},util.checkSession=function(t){util.request({url:"auth/session/check",method:"POST",cachetime:0,showLoading:!1,success:function(e){e.data.errno?"function"==typeof t.fail&&t.fail():"function"==typeof t.success&&t.success()},fail:function(){"function"==typeof t.fail&&t.fail()}})},util.getUserInfo=function(t,e){var n=function(){console.log(__f__("start login"," at util\\we7\\resource\\js\\util.js:383"));wx.login({success:function(n){util.getWe7User(function(n){e?util.upadteUser(e,function(e){"function"==typeof t&&t(e)}):wx.canIUse("getUserInfo")?wx.getUserInfo({withCredentials:!0,success:function(e){util.upadteUser(e,function(e){"function"==typeof t&&t(e)})},fail:function(){"function"==typeof t&&t(n)}}):"function"==typeof t&&t(n)},n.code)},fail:function(){wx.showModal({title:"获取信息失败",content:"请允许授权以便为您提供给服务",success:function(t){t.confirm&&util.getUserInfo()}})}})},r=wx.getStorageSync("userInfo")||{};r.sessionid?util.checkSession({success:function(){e?util.upadteUser(e,function(e){"function"==typeof t&&t(e)}):"function"==typeof t&&t(r)},fail:function(){r.sessionid="",console.log(__f__("relogin"," at util\\we7\\resource\\js\\util.js:444")),wx.removeStorageSync("userInfo"),n()}}):n()},util.navigateBack=function(t){var e=t.delta?t.delta:1;if(t.data){var n=getCurrentPages(),r=n[n.length-(e+1)];r.pageForResult?r.pageForResult(t.data):r.setData(t.data)}wx.navigateBack({delta:e,success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(){"function"==typeof t.complete&&t.complete()}})},util.footer=function(t){var e=getApp(),n=t,r=e.tabBar;for(var i in r["list"])r["list"][i]["pageUrl"]=r["list"][i]["pagePath"].replace(/(\?|#)[^"]*/g,"");n.setData({tabBar:r,"tabBar.thisurl":n.__route__})},util.message=function(t,e,n){if(!t)return!0;if("object"==typeof t&&(e=t.redirect,n=t.type,t=t.title),e){var r=e.substring(0,9),i="",o="";"navigate:"==r?(o="navigateTo",i=e.substring(9)):"redirect:"==r?(o="redirectTo",i=e.substring(9)):(i=e,o="redirectTo")}console.log(__f__(i," at util\\we7\\resource\\js\\util.js:524")),n||(n="success"),"success"==n?wx.showToast({title:t,icon:"success",duration:2e3,mask:!!i,complete:function(){i&&setTimeout(function(){wx[o]({url:i})},1800)}}):"error"==n&&wx.showModal({title:"系统信息",content:t,showCancel:!1,complete:function(){i&&wx[o]({url:i})}})},util.user=util.getUserInfo,util.showLoading=function(){var t=wx.getStorageSync("isShowLoading");t&&(wx.hideLoading(),wx.setStorageSync("isShowLoading",!1)),wx.showLoading({title:"加载中",complete:function(){wx.setStorageSync("isShowLoading",!0)},fail:function(){wx.setStorageSync("isShowLoading",!1)}})},util.showImage=function(t){var e=t?t.currentTarget.dataset.preview:"";if(!e)return!1;wx.previewImage({urls:[e]})},util.parseContent=function(t){if(!t)return t;var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"],n=t.match(new RegExp(e.join("|"),"g"));if(n)for(var r in n)t=t.replace(n[r],"[U+"+n[r].codePointAt(0).toString(16).toUpperCase()+"]");return t},util.date=function(){this.isLeapYear=function(t){return 0==t.getYear()%4&&(t.getYear()%100!=0||t.getYear()%400==0)},this.dateToStr=function(t,e){t=arguments[0]||"yyyy-MM-dd HH:mm:ss",e=arguments[1]||new Date;var n=t,r=["日","一","二","三","四","五","六"];return n=n.replace(/yyyy|YYYY/,e.getFullYear()),n=n.replace(/yy|YY/,e.getYear()%100>9?(e.getYear()%100).toString():"0"+e.getYear()%100),n=n.replace(/MM/,e.getMonth()>9?e.getMonth()+1:"0"+(e.getMonth()+1)),n=n.replace(/M/g,e.getMonth()),n=n.replace(/w|W/g,r[e.getDay()]),n=n.replace(/dd|DD/,e.getDate()>9?e.getDate().toString():"0"+e.getDate()),n=n.replace(/d|D/g,e.getDate()),n=n.replace(/hh|HH/,e.getHours()>9?e.getHours().toString():"0"+e.getHours()),n=n.replace(/h|H/g,e.getHours()),n=n.replace(/mm/,e.getMinutes()>9?e.getMinutes().toString():"0"+e.getMinutes()),n=n.replace(/m/g,e.getMinutes()),n=n.replace(/ss|SS/,e.getSeconds()>9?e.getSeconds().toString():"0"+e.getSeconds()),n=n.replace(/s|S/g,e.getSeconds()),n},this.dateAdd=function(t,e,n){switch(n=arguments[2]||new Date,t){case"s":return new Date(n.getTime()+1e3*e);case"n":return new Date(n.getTime()+6e4*e);case"h":return new Date(n.getTime()+36e5*e);case"d":return new Date(n.getTime()+864e5*e);case"w":return new Date(n.getTime()+6048e5*e);case"m":return new Date(n.getFullYear(),n.getMonth()+e,n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());case"y":return new Date(n.getFullYear()+e,n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds())}},this.dateDiff=function(t,e,n){switch(t){case"s":return parseInt((n-e)/1e3);case"n":return parseInt((n-e)/6e4);case"h":return parseInt((n-e)/36e5);case"d":return parseInt((n-e)/864e5);case"w":return parseInt((n-e)/6048e5);case"m":return n.getMonth()+1+12*(n.getFullYear()-e.getFullYear())-(e.getMonth()+1);case"y":return n.getFullYear()-e.getFullYear()}},this.strToDate=function(dateStr){var data=dateStr,reCat=/(\d{1,4})/gm,t=data.match(reCat);return t[1]=t[1]-1,eval("var d = new Date("+t.join(",")+");"),d},this.strFormatToDate=function(t,e){var n=0,r=-1,i=e.length;(r=t.indexOf("yyyy"))>-1&&r<i&&(n=e.substr(r,4));var o=0;(r=t.indexOf("MM"))>-1&&r<i&&(o=parseInt(e.substr(r,2))-1);var a=0;(r=t.indexOf("dd"))>-1&&r<i&&(a=parseInt(e.substr(r,2)));var u=0;((r=t.indexOf("HH"))>-1||(r=t.indexOf("hh"))>1)&&r<i&&(u=parseInt(e.substr(r,2)));var s=0;(r=t.indexOf("mm"))>-1&&r<i&&(s=e.substr(r,2));var c=0;return(r=t.indexOf("ss"))>-1&&r<i&&(c=e.substr(r,2)),new Date(n,o,a,u,s,c)},this.dateToLong=function(t){return t.getTime()},this.longToDate=function(t){return new Date(t)},this.isDate=function(t,e){null==e&&(e="yyyyMMdd");var n=e.indexOf("yyyy");if(-1==n)return!1;var r=t.substring(n,n+4),i=e.indexOf("MM");if(-1==i)return!1;var o=t.substring(i,i+2),a=e.indexOf("dd");if(-1==a)return!1;var u=t.substring(a,a+2);return!(!isNumber(r)||r>"2100"||r<"1900")&&(!(!isNumber(o)||o>"12"||o<"01")&&!(u>getMaxDay(r,o)||u<"01"))},this.getMaxDay=function(t,e){return 4==e||6==e||9==e||11==e?"30":2==e?t%4==0&&t%100!=0||t%400==0?"29":"28":"31"},this.isNumber=function(t){var e=/^\d+$/g;return e.test(t)},this.toArray=function(t){t=arguments[0]||new Date;var e=Array();return e[0]=t.getFullYear(),e[1]=t.getMonth(),e[2]=t.getDate(),e[3]=t.getHours(),e[4]=t.getMinutes(),e[5]=t.getSeconds(),e},this.datePart=function(t,e){e=arguments[1]||new Date;var n="",r=["日","一","二","三","四","五","六"];switch(t){case"y":n=e.getFullYear();break;case"M":n=e.getMonth()+1;break;case"d":n=e.getDate();break;case"w":n=r[e.getDay()];break;case"ww":n=e.WeekNumOfYear();break;case"h":n=e.getHours();break;case"m":n=e.getMinutes();break;case"s":n=e.getSeconds();break}return n},this.maxDayOfDate=function(t){t=arguments[0]||new Date,t.setDate(1),t.setMonth(t.getMonth()+1);var e=t.getTime()-864e5,n=new Date(e);return n.getDate()}},module.exports=util}).call(this,__webpack_require__("0de9")["default"])},"67f6":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("e705"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"68d1":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("0df1"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6a0e":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("42a7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Se,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return s(t)||u(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(s){i=!0,o=s}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw o}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return p(t)||h(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,S=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],O={},k={};function E(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?j(n):n}function j(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function P(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function $(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=E(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&P(t[n],e[n])})}function T(t,e){"string"===typeof t&&_(e)?$(k[t]||(k[t]={}),e):_(t)&&$(O,t)}function R(t,e){"string"===typeof t?_(e)?M(k[t],e):delete k[t]:_(t)&&M(O,t)}function C(t){return function(e){return t(e)||e}}function L(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function D(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(C(i));else{var o=i(e);if(L(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){D(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,f(O.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=B(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var u=D(a.invoke,n);return u.then(function(t){return e.apply(void 0,[I(a,t)].concat(i))})}return e.apply(void 0,[I(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var F={returnValue:function(t){return L(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},q=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,Y=/^create|Manager$/,V=/^on/;function W(t){return Y.test(t)}function H(t){return q.test(t)}function z(t){return V.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(W(t)||H(t)||z(t))}function J(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?U(t,N.apply(void 0,[t,e,n].concat(i))):U(t,G(new Promise(function(r,o){N.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Z?.5:1:t<0?-n:n}var it={promiseInterceptor:F},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:T,removeInterceptor:R}),at={},ut=[],st=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(ht(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var o=!0===i?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var u=n[a];g(u)&&(u=u(e[a],e,o)),u?y(u)?o[u]=e[a]:_(u)&&(o[u.name?u.name:a]=u.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ft(t,e[a],r):i||(o[a]=e[a]);return o}return g(e)&&(e=ft(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function pt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=lt(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return H(t)?ht(t,a,i.returnValue,W(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function xt(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:xt});function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,o=t.hide,a=t.close,u=function(){r.setStyle({mask:n})},s=function(){r.setStyle({mask:"none"})};t.show=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){s(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function Ot(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Et=Object.freeze({requireNativePlugin:kt,getSubNVueById:Ot}),jt=Page,Pt=Component,$t=/:/g,Mt=w(function(t){return S(t.replace($t,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Mt(n)].concat(i))}}}function Rt(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),jt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Pt(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Lt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Dt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Dt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Dt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ft(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var qt=[String,Number,Boolean,Object,Array,null];function Yt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Ht(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Ht(t.props,!0)}))}),a}function Wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Yt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var i=r["default"];g(i)&&(i=i()),r.type=Wt(e,r.type),n[e]={type:-1!==qt.indexOf(r.type)?r.type:null,value:i,observer:Yt(e)}}else{var o=Wt(e,r);n[e]={type:-1!==qt.indexOf(o)?o:null,observer:Yt(e)}}}),n}function zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],u=r?t.__get_value(r,n):n;Number.isInteger(u)?n=i:o?Array.isArray(u)?n=u.find(function(e){return t.__get_value(o,e)===i}):_(u)?n=Object.keys(u).find(function(e){return t.__get_value(o,u[e])===i}):console.error("v-for 暂不支持循环数据：",u):n=u[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Gt(t,e)}),r}function Jt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var u=Kt(t,r,e),s=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?s.push(e.detail.__args__[0]):s.push(e):s.push(e.target.value):Array.isArray(t)&&"o"===t[0]?s.push(Jt(t)):"string"===typeof t&&m(u,t)?s.push(u[t]):s.push(t)}),s}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],u=r.charAt(0)===Zt;r=u?r.slice(1):r;var s=r.charAt(0)===Qt;r=s?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(a.once)return;a.once=!0}o.push(a.apply(i,Xt(e.$vm,t,n[1],n[2],u,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Lt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},It(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function ue(){return!!this.route}function se(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function le(t){return re(t,{mocks:ie,initRefs:ce})}var he=["onUniNViewMessage"];function pe(t){var e=le(t);return It(e,he),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Ut(r.default,t),u=o(a,2),s=u[0],c=u[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ft(c,r.default.prototype),behaviors:Vt(c,ae),properties:Ht(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new s(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return n?f:[f,s]}function ge(t){return ve(t,{isPage:ue,initRelation:se})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:ue,initRelation:se})}_e.push.apply(_e,Ct);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function xe(t){var e=be(t);return It(e.methods,we),e}function Se(t){return Component(xe(t))}function Ae(t){return Component(ye(t))}ut.forEach(function(t){at[t]=!1}),st.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Oe={};Object.keys(ot).forEach(function(t){Oe[t]=ot[t]}),Object.keys(St).forEach(function(t){Oe[t]=St[t]}),Object.keys(Et).forEach(function(t){Oe[t]=J(t,Et[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Oe[t]=J(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Ae;var ke=Oe,Ee=ke;e.default=Ee}).call(this,n("c8ba"))},"72c9":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("4bb7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7624:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("e87c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"780f":function(t,e,n){"use strict";t.exports=o;var r=n("27bf"),i=n("3a7c");function o(t){if(!(this instanceof o))return new o(t);r.call(this,t)}i.inherits=n("3fb5"),i.inherits(o,r),o.prototype._transform=function(t,e,n){n(null,t)}},"7d72":function(t,e,n){"use strict";var r=n("8707").Buffer,i=r.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){if(!t)return"utf8";var e;while(1)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function a(t){var e=o(t);if("string"!==typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}function u(t){var e;switch(this.encoding=a(t),this.encoding){case"utf16le":this.text=d,this.end=v,e=4;break;case"utf8":this.fillLast=l,e=4;break;case"base64":this.text=g,this.end=y,e=3;break;default:return this.write=_,void(this.end=m)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function s(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function c(t,e,n){var r=e.length-1;if(r<n)return 0;var i=s(e[r]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--r<n||-2===i?0:(i=s(e[r]),i>=0?(i>0&&(t.lastNeed=i-2),i):--r<n||-2===i?0:(i=s(e[r]),i>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0))}function f(t,e,n){if(128!==(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!==(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!==(192&e[2]))return t.lastNeed=2,"�"}}function l(t){var e=this.lastTotal-this.lastNeed,n=f(this,t,e);return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function h(t,e){var n=c(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=n;var r=t.length-(n-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)}function p(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function d(t,e){if((t.length-e)%2===0){var n=t.toString("utf16le",e);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function v(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,n)}return e}function g(t,e){var n=(t.length-e)%3;return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function y(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function _(t){return t.toString(this.encoding)}function m(t){return t&&t.length?this.write(t):""}e.StringDecoder=u,u.prototype.write=function(t){if(0===t.length)return"";var e,n;if(this.lastNeed){if(e=this.fillLast(t),void 0===e)return"";n=this.lastNeed,this.lastNeed=0}else n=0;return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},u.prototype.end=p,u.prototype.text=h,u.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},"7eb8":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("f0d0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"81c3":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("3409"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"83bc":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("9077"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8707:function(t,e,n){var r=n("b639"),i=r.Buffer;function o(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=a),o(i,a),a.from=function(t,e,n){if("number"===typeof t)throw new TypeError("Argument must not be a number");return i(t,e,n)},a.alloc=function(t,e,n){if("number"!==typeof t)throw new TypeError("Argument must be a number");var r=i(t);return void 0!==e?"string"===typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return i(t)},a.allocUnsafeSlow=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},"8d0b":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("9f2f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9152:function(t,e){e.read=function(t,e,n,r,i){var o,a,u=8*i-r-1,s=(1<<u)-1,c=s>>1,f=-7,l=n?i-1:0,h=n?-1:1,p=t[e+l];for(l+=h,o=p&(1<<-f)-1,p>>=-f,f+=u;f>0;o=256*o+t[e+l],l+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=r;f>0;a=256*a+t[e+l],l+=h,f-=8);if(0===o)o=1-c;else{if(o===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,r),o-=c}return(p?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,u,s,c=8*o-i-1,f=(1<<c)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,v=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-a))<1&&(a--,s*=2),e+=a+l>=1?h/s:h*Math.pow(2,1-l),e*s>=2&&(a++,s/=2),a+l>=f?(u=0,a=f):a+l>=1?(u=(e*s-1)*Math.pow(2,i),a+=l):(u=e*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;t[n+p]=255&u,p+=d,u/=256,i-=8);for(a=a<<i|u,c+=i;c>0;t[n+p]=255&a,p+=d,a/=256,c-=8);t[n+p-d]|=128*v}},"93e6":function(t,e,n){"use strict";var r=n("8707").Buffer,i=n("d485").Transform,o=n("3fb5");function a(t,e){if(!r.isBuffer(t)&&"string"!==typeof t)throw new TypeError(e+" must be a string or a buffer")}function u(t){i.call(this),this._block=r.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}o(u,i),u.prototype._transform=function(t,e,n){var r=null;try{this.update(t,e)}catch(i){r=i}n(r)},u.prototype._flush=function(t){var e=null;try{this.push(this.digest())}catch(n){e=n}t(e)},u.prototype.update=function(t,e){if(a(t,"Data"),this._finalized)throw new Error("Digest already called");r.isBuffer(t)||(t=r.from(t,e));var n=this._block,i=0;while(this._blockOffset+t.length-i>=this._blockSize){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=t[i++];this._update(),this._blockOffset=0}while(i<t.length)n[this._blockOffset++]=t[i++];for(var u=0,s=8*t.length;s>0;++u)this._length[u]+=s,s=this._length[u]/4294967296|0,s>0&&(this._length[u]-=4294967296*s);return this},u.prototype._update=function(){throw new Error("_update is not implemented")},u.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var e=this._digest();void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;for(var n=0;n<4;++n)this._length[n]=0;return e},u.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=u},"95cb":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("4e50"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"966d":function(t,e,n){"use strict";(function(e){function n(t,n,r,i){if("function"!==typeof t)throw new TypeError('"callback" argument must be a function');var o,a,u=arguments.length;switch(u){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick(function(){t.call(null,n)});case 3:return e.nextTick(function(){t.call(null,n,r)});case 4:return e.nextTick(function(){t.call(null,n,r,i)});default:o=new Array(u-1),a=0;while(a<o.length)o[a++]=arguments[a];return e.nextTick(function(){t.apply(null,o)})}}!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:n}:t.exports=e}).call(this,n("4362"))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(T([])));_&&_!==r&&i.call(_,a)&&(g=_);var m=A.prototype=x.prototype=Object.create(g);S.prototype=m.constructor=A,A.constructor=S,A[s]=S.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[u]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,n,r){var i=new k(b(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=E(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function S(){}function A(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,o,a){var u=w(t[n],t,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,a)})}a(u.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function E(t,e,n){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var u=j(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=w(t,e,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9827:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("2d97"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9873:function(t,e,n){"use strict";function r(t){var e,n,r,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=t.length,u="";while(o<a){if(e=255&t.charCodeAt(o++),o==a){u+=i.charAt(e>>2),u+=i.charAt((3&e)<<4),u+="==";break}if(n=t.charCodeAt(o++),o==a){u+=i.charAt(e>>2),u+=i.charAt((3&e)<<4|(240&n)>>4),u+=i.charAt((15&n)<<2),u+="=";break}r=t.charCodeAt(o++),u+=i.charAt(e>>2),u+=i.charAt((3&e)<<4|(240&n)>>4),u+=i.charAt((15&n)<<2|(192&r)>>6),u+=i.charAt(63&r)}return u}function i(t){var e,n,r,i,o=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),a=0,u=t.length,s="";while(a<u){do{e=o[255&t.charCodeAt(a++)]}while(a<u&&-1==e);if(-1==e)break;do{n=o[255&t.charCodeAt(a++)]}while(a<u&&-1==n);if(-1==n)break;s+=String.fromCharCode(e<<2|(48&n)>>4);do{if(r=255&t.charCodeAt(a++),61==r)return s;r=o[r]}while(a<u&&-1==r);if(-1==r)break;s+=String.fromCharCode((15&n)<<4|(60&r)>>2);do{if(i=255&t.charCodeAt(a++),61==i)return s;i=o[i]}while(a<u&&-1==i);if(-1==i)break;s+=String.fromCharCode((3&r)<<6|i)}return s}t.exports={base64_encode:r,base64_decode:i}},"9a20":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("0135"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9d39":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("8100"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9e4f":function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("f224"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a0fc:function(t,e,n){},a34a:function(t,e,n){t.exports=n("bbdd")},a850:function(t,e,n){"use strict";(function(t){n("a0fc");var e=s(n("66fd")),r=s(n("3d86")),i=s(n("232c")),o=s(n("02e2")),a=s(n("a1e7")),u=s(n("94da"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.component("ctmainpage",i.default),e.default.component("ctaboutpage",o.default),e.default.component("ctpost",a.default),e.default.component("ctmy",u.default);var l=function(){return n.e("pages/basics/home").then(n.bind(null,"5279"))};e.default.component("basics",l);var h=function(){return n.e("pages/component/home").then(n.bind(null,"d548"))};e.default.component("components",h);var p=function(){return n.e("pages/plugin/home").then(n.bind(null,"e3e1"))};e.default.component("plugin",p);var d=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"d6ef"))};e.default.component("cu-custom",d),e.default.config.productionTip=!1,r.default.mpType="app";var v=new e.default(c({},r.default));t(v).$mount()}).call(this,n("6e42")["createApp"])},ad71:function(t,e,n){"use strict";(function(e,r){var i=n("966d");t.exports=x;var o,a=n("e3db");x.ReadableState=w;n("faa1").EventEmitter;var u=function(t,e){return t.listeners(e).length},s=n("429b"),c=n("8707").Buffer,f=e.Uint8Array||function(){};function l(t){return c.from(t)}function h(t){return c.isBuffer(t)||t instanceof f}var p=n("3a7c");p.inherits=n("3fb5");var d=n(0),v=void 0;v=d&&d.debuglog?d.debuglog("stream"):function(){};var g,y=n("5e1a"),_=n("4681");p.inherits(x,s);var m=["error","close","destroy","pause","resume"];function b(t,e,n){if("function"===typeof t.prependListener)return t.prependListener(e,n);t._events&&t._events[e]?a(t._events[e])?t._events[e].unshift(n):t._events[e]=[n,t._events[e]]:t.on(e,n)}function w(t,e){o=o||n("b19a"),t=t||{};var r=e instanceof o;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var i=t.highWaterMark,a=t.readableHighWaterMark,u=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(a||0===a)?a:u,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(g||(g=n("7d72").StringDecoder),this.decoder=new g(t.encoding),this.encoding=t.encoding)}function x(t){if(o=o||n("b19a"),!(this instanceof x))return new x(t);this._readableState=new w(t,this),this.readable=!0,t&&("function"===typeof t.read&&(this._read=t.read),"function"===typeof t.destroy&&(this._destroy=t.destroy)),s.call(this)}function S(t,e,n,r,i){var o,a=t._readableState;null===e?(a.reading=!1,$(t,a)):(i||(o=O(a,e)),o?t.emit("error",o):a.objectMode||e&&e.length>0?("string"===typeof e||a.objectMode||Object.getPrototypeOf(e)===c.prototype||(e=l(e)),r?a.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):A(t,a,e,!0):a.ended?t.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!n?(e=a.decoder.write(e),a.objectMode||0!==e.length?A(t,a,e,!1):R(t,a)):A(t,a,e,!1))):r||(a.reading=!1));return k(a)}function A(t,e,n,r){e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,r?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&M(t)),R(t,e)}function O(t,e){var n;return h(e)||"string"===typeof e||void 0===e||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function k(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}Object.defineProperty(x.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),x.prototype.destroy=_.destroy,x.prototype._undestroy=_.undestroy,x.prototype._destroy=function(t,e){this.push(null),e(t)},x.prototype.push=function(t,e){var n,r=this._readableState;return r.objectMode?n=!0:"string"===typeof t&&(e=e||r.defaultEncoding,e!==r.encoding&&(t=c.from(t,e),e=""),n=!0),S(this,t,e,!1,n)},x.prototype.unshift=function(t){return S(this,t,null,!0,!1)},x.prototype.isPaused=function(){return!1===this._readableState.flowing},x.prototype.setEncoding=function(t){return g||(g=n("7d72").StringDecoder),this._readableState.decoder=new g(t),this._readableState.encoding=t,this};var E=8388608;function j(t){return t>=E?t=E:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}function P(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!==t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=j(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function $(t,e){if(!e.ended){if(e.decoder){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,M(t)}}function M(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(v("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?i.nextTick(T,t):T(t))}function T(t){v("emit readable"),t.emit("readable"),B(t)}function R(t,e){e.readingMore||(e.readingMore=!0,i.nextTick(C,t,e))}function C(t,e){var n=e.length;while(!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark){if(v("maybeReadMore read 0"),t.read(0),n===e.length)break;n=e.length}e.readingMore=!1}function L(t){return function(){var e=t._readableState;v("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&u(t,"data")&&(e.flowing=!0,B(t))}}function D(t){v("readable nexttick read 0"),t.read(0)}function I(t,e){e.resumeScheduled||(e.resumeScheduled=!0,i.nextTick(U,t,e))}function U(t,e){e.reading||(v("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),B(t),e.flowing&&!e.reading&&t.read(0)}function B(t){var e=t._readableState;v("flow",e.flowing);while(e.flowing&&null!==t.read());}function N(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):n=F(t,e.buffer,e.decoder),n);var n}function F(t,e,n){var r;return t<e.head.data.length?(r=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):r=t===e.head.data.length?e.shift():n?q(t,e):Y(t,e),r}function q(t,e){var n=e.head,r=1,i=n.data;t-=i.length;while(n=n.next){var o=n.data,a=t>o.length?o.length:t;if(a===o.length?i+=o:i+=o.slice(0,t),t-=a,0===t){a===o.length?(++r,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(a));break}++r}return e.length-=r,i}function Y(t,e){var n=c.allocUnsafe(t),r=e.head,i=1;r.data.copy(n),t-=r.data.length;while(r=r.next){var o=r.data,a=t>o.length?o.length:t;if(o.copy(n,n.length-t,0,a),t-=a,0===t){a===o.length?(++i,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(a));break}++i}return e.length-=i,n}function V(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,i.nextTick(W,e,t))}function W(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function H(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}x.prototype.read=function(t){v("read",t),t=parseInt(t,10);var e=this._readableState,n=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return v("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?V(this):M(this),null;if(t=P(t,e),0===t&&e.ended)return 0===e.length&&V(this),null;var r,i=e.needReadable;return v("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&(i=!0,v("length less than watermark",i)),e.ended||e.reading?(i=!1,v("reading or ended",i)):i&&(v("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=P(n,e))),r=t>0?N(t,e):null,null===r?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&V(this)),null!==r&&this.emit("data",r),r},x.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},x.prototype.pipe=function(t,e){var n=this,o=this._readableState;switch(o.pipesCount){case 0:o.pipes=t;break;case 1:o.pipes=[o.pipes,t];break;default:o.pipes.push(t);break}o.pipesCount+=1,v("pipe count=%d opts=%j",o.pipesCount,e);var a=(!e||!1!==e.end)&&t!==r.stdout&&t!==r.stderr,s=a?f:w;function c(t,e){v("onunpipe"),t===n&&e&&!1===e.hasUnpiped&&(e.hasUnpiped=!0,p())}function f(){v("onend"),t.end()}o.endEmitted?i.nextTick(s):n.once("end",s),t.on("unpipe",c);var l=L(n);t.on("drain",l);var h=!1;function p(){v("cleanup"),t.removeListener("close",_),t.removeListener("finish",m),t.removeListener("drain",l),t.removeListener("error",y),t.removeListener("unpipe",c),n.removeListener("end",f),n.removeListener("end",w),n.removeListener("data",g),h=!0,!o.awaitDrain||t._writableState&&!t._writableState.needDrain||l()}var d=!1;function g(e){v("ondata"),d=!1;var r=t.write(e);!1!==r||d||((1===o.pipesCount&&o.pipes===t||o.pipesCount>1&&-1!==H(o.pipes,t))&&!h&&(v("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,d=!0),n.pause())}function y(e){v("onerror",e),w(),t.removeListener("error",y),0===u(t,"error")&&t.emit("error",e)}function _(){t.removeListener("finish",m),w()}function m(){v("onfinish"),t.removeListener("close",_),w()}function w(){v("unpipe"),n.unpipe(t)}return n.on("data",g),b(t,"error",y),t.once("close",_),t.once("finish",m),t.emit("pipe",n),o.flowing||(v("pipe resume"),n.resume()),t},x.prototype.unpipe=function(t){var e=this._readableState,n={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,n),this);if(!t){var r=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)r[o].emit("unpipe",this,n);return this}var a=H(e.pipes,t);return-1===a?this:(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,n),this)},x.prototype.on=function(t,e){var n=s.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var r=this._readableState;r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&M(this):i.nextTick(D,this))}return n},x.prototype.addListener=x.prototype.on,x.prototype.resume=function(){var t=this._readableState;return t.flowing||(v("resume"),t.flowing=!0,I(this,t)),this},x.prototype.pause=function(){return v("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(v("pause"),this._readableState.flowing=!1,this.emit("pause")),this},x.prototype.wrap=function(t){var e=this,n=this._readableState,r=!1;for(var i in t.on("end",function(){if(v("wrapped end"),n.decoder&&!n.ended){var t=n.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(i){if(v("wrapped data"),n.decoder&&(i=n.decoder.write(i)),(!n.objectMode||null!==i&&void 0!==i)&&(n.objectMode||i&&i.length)){var o=e.push(i);o||(r=!0,t.pause())}}),t)void 0===this[i]&&"function"===typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));for(var o=0;o<m.length;o++)t.on(m[o],this.emit.bind(this,m[o]));return this._read=function(e){v("wrapped _read",e),r&&(r=!1,t.resume())},this},Object.defineProperty(x.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),x._fromList=N}).call(this,n("c8ba"),n("4362"))},b19a:function(t,e,n){"use strict";var r=n("966d"),i=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e};t.exports=l;var o=n("3a7c");o.inherits=n("3fb5");var a=n("ad71"),u=n("dc14");o.inherits(l,a);for(var s=i(u.prototype),c=0;c<s.length;c++){var f=s[c];l.prototype[f]||(l.prototype[f]=u.prototype[f])}function l(t){if(!(this instanceof l))return new l(t);a.call(this,t),u.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",h)}function h(){this.allowHalfOpen||this._writableState.ended||r.nextTick(p,this)}function p(t){t.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),l.prototype._destroy=function(t,e){this.push(null),this.end(),r.nextTick(e,t)}},b5d5:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("a98c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b639:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),i=n("9152"),o=n("e3db");function a(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function u(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=c.prototype):(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c))return new c(t,e,n);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return f(this,t,e,n)}function f(t,e,n,r){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?g(t,e,n,r):"string"===typeof e?d(t,e,n):y(t,e)}function l(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e,n,r){return l(e),e<=0?s(t,e):void 0!==n?"string"===typeof r?s(t,e).fill(n,r):s(t,e).fill(n):s(t,e)}function p(t,e){if(l(e),t=s(t,e<0?0:0|_(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e,n){if("string"===typeof n&&""!==n||(n="utf8"),!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|b(e,n);t=s(t,r);var i=t.write(e,n);return i!==r&&(t=t.slice(0,i)),t}function v(t,e){var n=e.length<0?0:0|_(e.length);t=s(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function g(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),c.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=c.prototype):t=v(t,e),t}function y(t,e){if(c.isBuffer(e)){var n=0|_(e.length);return t=s(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?s(t,0):v(t,e);if("Buffer"===e.type&&o(e.data))return v(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function _(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function m(t){return+t!=t&&(t=0),c.alloc(+t)}function b(t,e){if(c.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(t).length;default:if(r)return J(t).length;e=(""+e).toLowerCase(),r=!0}}function w(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return I(this,e,n);case"utf8":case"utf-8":return T(this,e,n);case"ascii":return L(this,e,n);case"latin1":case"binary":return D(this,e,n);case"base64":return M(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function x(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function S(t,e,n,r,i){if(0===t.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:A(t,e,n,r,i);if("number"===typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):A(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function A(t,e,n,r,i){var o,a=1,u=t.length,s=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,u/=2,s/=2,n/=2}function c(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){var f=-1;for(o=n;o<u;o++)if(c(t,o)===c(e,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===s)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(n+s>u&&(n=u-s),o=n;o>=0;o--){for(var l=!0,h=0;h<s;h++)if(c(t,o+h)!==c(e,h)){l=!1;break}if(l)return o}return-1}function O(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;a<r;++a){var u=parseInt(e.substr(2*a,2),16);if(isNaN(u))return a;t[n+a]=u}return a}function k(t,e,n,r){return tt(J(e,t.length-n),t,n,r)}function E(t,e,n,r){return tt(X(e),t,n,r)}function j(t,e,n,r){return E(t,e,n,r)}function P(t,e,n,r){return tt(Z(e),t,n,r)}function $(t,e,n,r){return tt(Q(e,t.length-n),t,n,r)}function M(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function T(t,e,n){n=Math.min(t.length,n);var r=[],i=e;while(i<n){var o,a,u,s,c=t[i],f=null,l=c>239?4:c>223?3:c>191?2:1;if(i+l<=n)switch(l){case 1:c<128&&(f=c);break;case 2:o=t[i+1],128===(192&o)&&(s=(31&c)<<6|63&o,s>127&&(f=s));break;case 3:o=t[i+1],a=t[i+2],128===(192&o)&&128===(192&a)&&(s=(15&c)<<12|(63&o)<<6|63&a,s>2047&&(s<55296||s>57343)&&(f=s));break;case 4:o=t[i+1],a=t[i+2],u=t[i+3],128===(192&o)&&128===(192&a)&&128===(192&u)&&(s=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&u,s>65535&&s<1114112&&(f=s))}null===f?(f=65533,l=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return C(r)}e.Buffer=c,e.SlowBuffer=m,e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:a(),e.kMaxLength=u(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return f(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return h(null,t,e,n)},c.allocUnsafe=function(t){return p(null,t)},c.allocUnsafeSlow=function(t){return p(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var a=t[n];if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r,i),i+=a.length}return r},c.byteLength=b,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)x(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)x(this,e,e+3),x(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)x(this,e,e+7),x(this,e+1,e+6),x(this,e+2,e+5),x(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):w.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,i){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,a=n-e,u=Math.min(o,a),s=this.slice(r,i),f=t.slice(e,n),l=0;l<u;++l)if(s[l]!==f[l]){o=s[l],a=f[l];break}return o<a?-1:a<o?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return S(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return S(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"===typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return O(this,t,e,n);case"utf8":case"utf-8":return k(this,t,e,n);case"ascii":return E(this,t,e,n);case"latin1":case"binary":return j(this,t,e,n);case"base64":return P(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function C(t){var e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);var n="",r=0;while(r<e)n+=String.fromCharCode.apply(String,t.slice(r,r+=R));return n}function L(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function D(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function I(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=K(t[o]);return i}function U(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function B(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function N(t,e,n,r,i,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function F(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function q(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function Y(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function V(t,e,n,r,o){return o||Y(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),i.write(t,e,n,r,23,4),n+4}function W(t,e,n,r,o){return o||Y(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),i.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=c.prototype;else{var i=e-t;n=new c(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);var r=this[t+--e],i=1;while(e>0&&(i*=256))r+=this[t+--e]*i;return r},c.prototype.readUInt8=function(t,e){return e||B(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||B(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||B(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);var r=e,i=1,o=this[t+--r];while(r>0&&(i*=256))o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},c.prototype.readInt8=function(t,e){return e||B(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||B(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||B(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||B(t,4,this.length),i.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||B(t,4,this.length),i.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||B(t,8,this.length),i.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||B(t,8,this.length),i.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;N(this,t,e,n,i,0)}var o=1,a=0;this[e]=255&t;while(++a<n&&(o*=256))this[e+a]=t/o&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;N(this,t,e,n,i,0)}var o=n-1,a=1;this[e+o]=255&t;while(--o>=0&&(a*=256))this[e+o]=t/a&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):F(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):F(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):q(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);N(this,t,e,n,i-1,-i)}var o=0,a=1,u=0;this[e]=255&t;while(++o<n&&(a*=256))t<0&&0===u&&0!==this[e+o-1]&&(u=1),this[e+o]=(t/a>>0)-u&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);N(this,t,e,n,i-1,-i)}var o=n-1,a=1,u=0;this[e+o]=255&t;while(--o>=0&&(a*=256))t<0&&0===u&&0!==this[e+o+1]&&(u=1),this[e+o]=(t/a>>0)-u&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):F(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):F(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):q(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return V(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return V(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return W(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return W(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},c.prototype.fill=function(t,e,n,r){if("string"===typeof t){if("string"===typeof e?(r=e,e=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(o=e;o<n;++o)this[o]=t;else{var a=c.isBuffer(t)?t:J(new c(t,r).toString()),u=a.length;for(o=0;o<n-e;++o)this[o+e]=a[o%u]}return this};var H=/[^+\/0-9A-Za-z-_]/g;function z(t){if(t=G(t).replace(H,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function G(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function K(t){return t<16?"0"+t.toString(16):t.toString(16)}function J(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],a=0;a<r;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function X(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function Q(t,e){for(var n,r,i,o=[],a=0;a<t.length;++a){if((e-=2)<0)break;n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)}return o}function Z(t){return r.toByteArray(z(t))}function tt(t,e,n,r){for(var i=0;i<r;++i){if(i+n>=e.length||i>=t.length)break;e[i+n]=t[i]}return i}function et(t){return t!==t}}).call(this,n("c8ba"))},b7d1:function(t,e,n){(function(e){function n(t,e){if(r("noDeprecation"))return t;var n=!1;function i(){if(!n){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}return i}function r(t){try{if(!e.localStorage)return!1}catch(r){return!1}var n=e.localStorage[t];return null!=n&&"true"===String(n).toLowerCase()}t.exports=n}).call(this,n("c8ba"))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},be71:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("9148"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c204:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("f067"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c2ae:function(t,e,n){t.exports=n("e372").PassThrough},c7b0:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("02e2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca2c:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("eb9f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d17b:function(t,e,n){t.exports=n("e372").Transform},d1ce:function(t,e,n){"use strict";var r={uniacid:"70",acid:"70",multiid:"10000",version:"1.0.0",siteroot:"https://www.91jdj.cn/app/index.php",token:12312};t.exports=r},d485:function(t,e,n){t.exports=o;var r=n("faa1").EventEmitter,i=n("3fb5");function o(){r.call(this)}i(o,r),o.Readable=n("e372"),o.Writable=n("2c63"),o.Duplex=n("0960"),o.Transform=n("d17b"),o.PassThrough=n("c2ae"),o.Stream=o,o.prototype.pipe=function(t,e){var n=this;function i(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",u),n.on("close",s));var a=!1;function u(){a||(a=!0,t.end())}function s(){a||(a=!0,"function"===typeof t.destroy&&t.destroy())}function c(t){if(f(),0===r.listenerCount(this,"error"))throw t}function f(){n.removeListener("data",i),t.removeListener("drain",o),n.removeListener("end",u),n.removeListener("close",s),n.removeListener("error",c),t.removeListener("error",c),n.removeListener("end",f),n.removeListener("close",f),t.removeListener("close",f)}return n.on("error",c),t.on("error",c),n.on("end",f),n.on("close",f),t.on("close",f),t.emit("pipe",n),t}},dc14:function(t,e,n){"use strict";(function(e,r){var i=n("966d");function o(t){var e=this;this.next=null,this.entry=null,this.finish=function(){D(e,t)}}t.exports=m;var a,u=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?setImmediate:i.nextTick;m.WritableState=_;var s=n("3a7c");s.inherits=n("3fb5");var c={deprecate:n("b7d1")},f=n("429b"),l=n("8707").Buffer,h=r.Uint8Array||function(){};function p(t){return l.from(t)}function d(t){return l.isBuffer(t)||t instanceof h}var v,g=n("4681");function y(){}function _(t,e){a=a||n("b19a"),t=t||{};var r=e instanceof a;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var i=t.highWaterMark,u=t.writableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(u||0===u)?u:s,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var c=!1===t.decodeStrings;this.decodeStrings=!c,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){E(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function m(t){if(a=a||n("b19a"),!v.call(m,this)&&!(this instanceof a))return new m(t);this._writableState=new _(t,this),this.writable=!0,t&&("function"===typeof t.write&&(this._write=t.write),"function"===typeof t.writev&&(this._writev=t.writev),"function"===typeof t.destroy&&(this._destroy=t.destroy),"function"===typeof t.final&&(this._final=t.final)),f.call(this)}function b(t,e){var n=new Error("write after end");t.emit("error",n),i.nextTick(e,n)}function w(t,e,n,r){var o=!0,a=!1;return null===n?a=new TypeError("May not write null values to stream"):"string"===typeof n||void 0===n||e.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(t.emit("error",a),i.nextTick(r,a),o=!1),o}function x(t,e,n){return t.objectMode||!1===t.decodeStrings||"string"!==typeof e||(e=l.from(e,n)),e}function S(t,e,n,r,i,o){if(!n){var a=x(e,r,i);r!==a&&(n=!0,i="buffer",r=a)}var u=e.objectMode?1:r.length;e.length+=u;var s=e.length<e.highWaterMark;if(s||(e.needDrain=!0),e.writing||e.corked){var c=e.lastBufferedRequest;e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},c?c.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else A(t,e,!1,u,r,i,o);return s}function A(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function O(t,e,n,r,o){--e.pendingcb,n?(i.nextTick(o,r),i.nextTick(C,t,e),t._writableState.errorEmitted=!0,t.emit("error",r)):(o(r),t._writableState.errorEmitted=!0,t.emit("error",r),C(t,e))}function k(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function E(t,e){var n=t._writableState,r=n.sync,i=n.writecb;if(k(n),e)O(t,n,r,e,i);else{var o=M(n);o||n.corked||n.bufferProcessing||!n.bufferedRequest||$(t,n),r?u(j,t,n,o,i):j(t,n,o,i)}}function j(t,e,n,r){n||P(t,e),e.pendingcb--,r(),C(t,e)}function P(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function $(t,e){e.bufferProcessing=!0;var n=e.bufferedRequest;if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,i=new Array(r),a=e.corkedRequestsFree;a.entry=n;var u=0,s=!0;while(n)i[u]=n,n.isBuf||(s=!1),n=n.next,u+=1;i.allBuffers=s,A(t,e,!0,e.length,i,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new o(e),e.bufferedRequestCount=0}else{while(n){var c=n.chunk,f=n.encoding,l=n.callback,h=e.objectMode?1:c.length;if(A(t,e,!1,h,c,f,l),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function M(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function T(t,e){t._final(function(n){e.pendingcb--,n&&t.emit("error",n),e.prefinished=!0,t.emit("prefinish"),C(t,e)})}function R(t,e){e.prefinished||e.finalCalled||("function"===typeof t._final?(e.pendingcb++,e.finalCalled=!0,i.nextTick(T,t,e)):(e.prefinished=!0,t.emit("prefinish")))}function C(t,e){var n=M(e);return n&&(R(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),n}function L(t,e,n){e.ending=!0,C(t,e),n&&(e.finished?i.nextTick(n):t.once("finish",n)),e.ended=!0,t.writable=!1}function D(t,e,n){var r=t.entry;t.entry=null;while(r){var i=r.callback;e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}s.inherits(m,f),_.prototype.getBuffer=function(){var t=this.bufferedRequest,e=[];while(t)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(_.prototype,"buffer",{get:c.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"===typeof Symbol&&Symbol.hasInstance&&"function"===typeof Function.prototype[Symbol.hasInstance]?(v=Function.prototype[Symbol.hasInstance],Object.defineProperty(m,Symbol.hasInstance,{value:function(t){return!!v.call(this,t)||this===m&&(t&&t._writableState instanceof _)}})):v=function(t){return t instanceof this},m.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},m.prototype.write=function(t,e,n){var r=this._writableState,i=!1,o=!r.objectMode&&d(t);return o&&!l.isBuffer(t)&&(t=p(t)),"function"===typeof e&&(n=e,e=null),o?e="buffer":e||(e=r.defaultEncoding),"function"!==typeof n&&(n=y),r.ended?b(this,n):(o||w(this,r,t,n))&&(r.pendingcb++,i=S(this,r,o,t,e,n)),i},m.prototype.cork=function(){var t=this._writableState;t.corked++},m.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||$(this,t))},m.prototype.setDefaultEncoding=function(t){if("string"===typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(m.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),m.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},m.prototype._writev=null,m.prototype.end=function(t,e,n){var r=this._writableState;"function"===typeof t?(n=t,t=null,e=null):"function"===typeof e&&(n=e,e=null),null!==t&&void 0!==t&&this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||L(this,r,n)},Object.defineProperty(m.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),m.prototype.destroy=g.destroy,m.prototype._undestroy=g.undestroy,m.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,n("4362"),n("c8ba"))},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return r.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(o(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===a(t,-1);return t=n(o(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),u=a,s=0;s<a;s++)if(i[s]!==o[s]){u=s;break}var c=[];for(s=u;s<i.length;s++)c.push("..");return c=c.concat(o.slice(u)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e1e2:function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){function e(){var t=this;r(this,e),a(this,"config",{baseUrl:"https://www.91jdj.cn",header:{"Content-Type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text"}),a(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e){e&&(t.requestComFun=e)}})}return o(e,[{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var r=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.baseUrl=this.config.baseUrl,i.dataType=i.dataType||this.config.dataType,i.responseType=i.responseType||this.config.responseType,i.url=e.posUrl(i.url)?i.url:i.baseUrl+i.url,i.data=i.data||{},i.header=i.header||this.config.header,i.method=i.method||this.config.method,new Promise(function(e,o){var a=!0,u=null;i.complete=function(t){var n=t.statusCode;t.config=u,t=r.requestComFun(t),200===n?e(t):o(t)};var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n={errMsg:t,config:e};o(n),a=!1};u=n({},r.requestBeforeFun(i,s)),a&&t.request(u)})}},{key:"get",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"GET"},r))}},{key:"post",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"POST"},r))}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}}]),e}();e.default=u}).call(this,n("6e42")["default"])},e372:function(t,e,n){e=t.exports=n("ad71"),e.Stream=e,e.Readable=e,e.Writable=n("dc14"),e.Duplex=n("b19a"),e.Transform=n("27bf"),e.PassThrough=n("780f")},e3db:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},e996:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("16c4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e9aa:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("232c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},eb80:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("f02a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f576:function(t,e,n){"use strict";var r=n("3fb5"),i=n("93e6"),o=n("8707").Buffer,a=new Array(16);function u(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function s(t,e){return t<<e|t>>>32-e}function c(t,e,n,r,i,o,a){return s(t+(e&n|~e&r)+i+o|0,a)+e|0}function f(t,e,n,r,i,o,a){return s(t+(e&r|n&~r)+i+o|0,a)+e|0}function l(t,e,n,r,i,o,a){return s(t+(e^n^r)+i+o|0,a)+e|0}function h(t,e,n,r,i,o,a){return s(t+(n^(e|~r))+i+o|0,a)+e|0}r(u,i),u.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);var n=this._a,r=this._b,i=this._c,o=this._d;n=c(n,r,i,o,t[0],3614090360,7),o=c(o,n,r,i,t[1],3905402710,12),i=c(i,o,n,r,t[2],606105819,17),r=c(r,i,o,n,t[3],3250441966,22),n=c(n,r,i,o,t[4],4118548399,7),o=c(o,n,r,i,t[5],1200080426,12),i=c(i,o,n,r,t[6],2821735955,17),r=c(r,i,o,n,t[7],4249261313,22),n=c(n,r,i,o,t[8],1770035416,7),o=c(o,n,r,i,t[9],2336552879,12),i=c(i,o,n,r,t[10],4294925233,17),r=c(r,i,o,n,t[11],2304563134,22),n=c(n,r,i,o,t[12],1804603682,7),o=c(o,n,r,i,t[13],4254626195,12),i=c(i,o,n,r,t[14],2792965006,17),r=c(r,i,o,n,t[15],1236535329,22),n=f(n,r,i,o,t[1],4129170786,5),o=f(o,n,r,i,t[6],3225465664,9),i=f(i,o,n,r,t[11],643717713,14),r=f(r,i,o,n,t[0],3921069994,20),n=f(n,r,i,o,t[5],3593408605,5),o=f(o,n,r,i,t[10],38016083,9),i=f(i,o,n,r,t[15],3634488961,14),r=f(r,i,o,n,t[4],3889429448,20),n=f(n,r,i,o,t[9],568446438,5),o=f(o,n,r,i,t[14],3275163606,9),i=f(i,o,n,r,t[3],4107603335,14),r=f(r,i,o,n,t[8],1163531501,20),n=f(n,r,i,o,t[13],2850285829,5),o=f(o,n,r,i,t[2],4243563512,9),i=f(i,o,n,r,t[7],1735328473,14),r=f(r,i,o,n,t[12],2368359562,20),n=l(n,r,i,o,t[5],4294588738,4),o=l(o,n,r,i,t[8],2272392833,11),i=l(i,o,n,r,t[11],1839030562,16),r=l(r,i,o,n,t[14],4259657740,23),n=l(n,r,i,o,t[1],2763975236,4),o=l(o,n,r,i,t[4],1272893353,11),i=l(i,o,n,r,t[7],4139469664,16),r=l(r,i,o,n,t[10],3200236656,23),n=l(n,r,i,o,t[13],681279174,4),o=l(o,n,r,i,t[0],3936430074,11),i=l(i,o,n,r,t[3],3572445317,16),r=l(r,i,o,n,t[6],76029189,23),n=l(n,r,i,o,t[9],3654602809,4),o=l(o,n,r,i,t[12],3873151461,11),i=l(i,o,n,r,t[15],530742520,16),r=l(r,i,o,n,t[2],3299628645,23),n=h(n,r,i,o,t[0],4096336452,6),o=h(o,n,r,i,t[7],1126891415,10),i=h(i,o,n,r,t[14],2878612391,15),r=h(r,i,o,n,t[5],4237533241,21),n=h(n,r,i,o,t[12],1700485571,6),o=h(o,n,r,i,t[3],2399980690,10),i=h(i,o,n,r,t[10],4293915773,15),r=h(r,i,o,n,t[1],2240044497,21),n=h(n,r,i,o,t[8],1873313359,6),o=h(o,n,r,i,t[15],4264355552,10),i=h(i,o,n,r,t[6],2734768916,15),r=h(r,i,o,n,t[13],1309151649,21),n=h(n,r,i,o,t[4],4149444226,6),o=h(o,n,r,i,t[11],3174756917,10),i=h(i,o,n,r,t[2],718787259,15),r=h(r,i,o,n,t[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+r|0,this._c=this._c+i|0,this._d=this._d+o|0},u.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=o.allocUnsafe(16);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=u},faa1:function(t,e,n){"use strict";var r,i="object"===typeof Reflect?Reflect:null,o=i&&"function"===typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};function a(t){console&&console.warn&&console.warn(t)}r=i&&"function"===typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var u=Number.isNaN||function(t){return t!==t};function s(){s.init.call(this)}t.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function f(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var i,o,u;if("function"!==typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(o=t._events,void 0===o?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),u=o[e]),void 0===u)u=o[e]=n,++t._eventsCount;else if("function"===typeof u?u=o[e]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),i=f(t),i>0&&u.length>i&&!u.warned){u.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=u.length,a(s)}return t}function h(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}function p(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=h.bind(r);return i.listener=n,r.wrapFn=i,i}function d(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?_(i):g(i,i.length)}function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function y(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function _(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!==typeof t||t<0||u(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||u(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return f(this)},s.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var s=i[t];if(void 0===s)return!1;if("function"===typeof s)o(s,this,e);else{var c=s.length,f=g(s,c);for(n=0;n<c;++n)o(f[n],this,e)}return!0},s.prototype.addListener=function(t,e){return l(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return l(this,t,e,!0)},s.prototype.once=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,p(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,p(this,t,e)),this},s.prototype.removeListener=function(t,e){var n,r,i,o,a;if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(r=this._events,void 0===r)return this;if(n=r[t],void 0===n)return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():y(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,n,r;if(n=this._events,void 0===n)return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)i=o[r],"removeListener"!==i&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=n[t],"function"===typeof e)this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},s.prototype.listeners=function(t){return d(this,t,!0)},s.prototype.rawListeners=function(t){return d(this,t,!1)},s.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},s.prototype.listenerCount=v,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},fbb1:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("04f3"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fd88:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("a1e7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fee8:function(t,e,n){"use strict";(function(t){n("a0fc");r(n("66fd"));var e=r(n("54f7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  "0b53": function b53(t, a, n) {
    "use strict";

    var e = function e() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(a, "a", function () {
      return e;
    }), n.d(a, "b", function () {
      return u;
    });
  },
  "1d3a": function d3a(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("be80"),
        u = n.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(o);
    }

    a["default"] = u.a;
  },
  be80: function be80(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                a = this.CustomBar,
                n = this.bgImage,
                e = "height:".concat(a, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (e = "".concat(e, "background-image:url(").concat(n, ");")), e;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  },
  d6ef: function d6ef(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("0b53"),
        u = n("1d3a");

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(o);
    }

    var r = n("2877"),
        c = Object(r["a"])(u["default"], e["a"], e["b"], !1, null, null, null);
    a["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d6ef"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'colorui/components/wm-poster/wm-poster';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/wm-poster/wm-poster.js';

define('colorui/components/wm-poster/wm-poster.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/wm-poster/wm-poster"], {
  "1a47": function a47(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("2661"),
        a = n("ca1f");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    var c = n("2877"),
        l = Object(c["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  2661: function _(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  ca1f: function ca1f(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("d5fa"),
        a = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  d5fa: function d5fa(t, e, n) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a,
          i = c(n("a34a"));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function l(t, e, n, r, a, i, c) {
        try {
          var l = t[i](c),
              u = l.value;
        } catch (o) {
          return void n(o);
        }

        l.done ? e(u) : Promise.resolve(u).then(r, a);
      }

      function u(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, a) {
            var i = t.apply(e, n);

            function c(t) {
              l(i, r, a, c, u, "next", t);
            }

            function u(t) {
              l(i, r, a, c, u, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var o = {
        name: "wm-poster",
        props: {
          CanvasID: {
            Type: String,
            default: "PosterCanvas"
          },
          imgSrc: {
            Type: String,
            default: ""
          },
          QrSrc: {
            Type: String,
            default: ""
          },
          Title: {
            Type: String,
            default: ""
          },
          TitleColor: {
            Type: String,
            default: "#333333"
          },
          LineType: {
            Type: [String, Boolean],
            default: !0
          },
          PriceTxt: {
            Type: String,
            default: "99.99"
          },
          PriceColor: {
            Type: String,
            default: "#e31d1a"
          },
          OriginalTxt: {
            Type: String,
            default: "199.99"
          },
          OriginalColor: {
            Type: String,
            default: "#b8b8b8"
          },
          Width: {
            Type: String,
            default: 750
          },
          CanvasBg: {
            Type: String,
            default: "#ffffff"
          },
          Referrer: {
            Type: String,
            default: "quitter推荐给你"
          },
          ViewDetails: {
            Type: String,
            default: "长按或扫描识别二维码"
          }
        },
        data: function data() {
          return {
            canvasW: 0,
            canvasH: 0,
            canvasImgSrc: "",
            ctx: null
          };
        },
        methods: {
          OnCanvas: function () {
            var e = u(i.default.mark(function e() {
              var n, r, c, l, u, o, s, f, x, p, d, g, T;
              return i.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return a.ctx = t.createCanvasContext(a.CanvasID, this), n = t.upx2px(a.Width), r = t.upx2px(30), c = t.upx2px(150), l = 0, e.next = 5, a.getImageInfo({
                        imgSrc: a.imgSrc
                      });

                    case 5:
                      return u = e.sent, e.next = 8, a.getImageInfo({
                        imgSrc: a.QrSrc
                      });

                    case 8:
                      o = e.sent, s = [u.width, u.height], f = [o.width, o.height], x = n - 2 * r, s[0] != x && (s[1] = Math.floor(x / s[0] * s[1]), s[0] = x), f[0] != c && (f[1] = Math.floor(c / f[0] * f[1]), f[0] = c), a.canvasW = n, a.canvasH = s[1] + f[1] + 128, a.ctx.setFillStyle(a.CanvasBg), a.ctx.fillRect(0, 0, n, a.canvasH), a.ctx.drawImage(u.path, r, r, s[0], s[1]), a.ctx.setFontSize(t.upx2px(28)), a.ctx.setFillStyle(a.TitleColor), p = 0, d = s[1] + 2 * r + 10, g = 1, T = 0;

                    case 25:
                      if (!(T < a.Title.length)) {
                        e.next = 47;
                        break;
                      }

                      if (l += a.ctx.measureText(a.Title[T]).width, !(l > s[0])) {
                        e.next = 43;
                        break;
                      }

                      if (2 != g || !a.LineType) {
                        e.next = 36;
                        break;
                      }

                      return a.ctx.fillText(a.Title.substring(p, T - 8) + "...", r, d), l = 0, p = T, g++, e.abrupt("break", 47);

                    case 36:
                      a.ctx.fillText(a.Title.substring(p, T), r, d), l = 0, d += 20, p = T, g++;

                    case 41:
                      e.next = 44;
                      break;

                    case 43:
                      T == a.Title.length - 1 && (a.ctx.fillText(a.Title.substring(p, T + 1), r, d), l = 0);

                    case 44:
                      T++, e.next = 25;
                      break;

                    case 47:
                      l = r, d += t.upx2px(60), 1 == g && (d += 20), "" != a.PriceTxt && (a.ctx.setFillStyle(a.PriceColor), a.ctx.setFontSize(t.upx2px(38)), a.ctx.fillText(a.PriceTxt, l, d), l += a.ctx.measureText(a.PriceTxt).width + t.upx2px(10)), "" != a.PriceTxt && "" != a.OriginalTxt && (a.ctx.setFillStyle(a.OriginalColor), a.ctx.setFontSize(t.upx2px(24)), a.ctx.fillText(a.OriginalTxt, l, d)), a.ctx.strokeStyle = a.OriginalColor, a.ctx.moveTo(l, d - t.upx2px(10)), a.ctx.lineTo(l + a.ctx.measureText(a.OriginalTxt).width, d - t.upx2px(10)), a.ctx.stroke(), d += t.upx2px(20), a.ctx.drawImage(o.path, s[0] - f[0] + r, d, f[0], f[1]), a.ctx.setFillStyle(a.TitleColor), a.ctx.setFontSize(t.upx2px(30)), a.ctx.fillText(a.Referrer, r, d + f[1] / 2), a.ctx.setFillStyle(a.OriginalColor), a.ctx.setFontSize(t.upx2px(24)), a.ctx.fillText(a.ViewDetails, r, d + f[1] / 2 + 20), setTimeout(function () {
                        a.ctx.draw(!0, function (t) {
                          a.getNewImage();
                        });
                      }, 600);

                    case 65:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getImageInfo: function () {
            var e = u(i.default.mark(function e(n) {
              var r;
              return i.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return r = n.imgSrc, e.abrupt("return", new Promise(function (e, n) {
                        t.getImageInfo({
                          src: r,
                          success: function success(t) {
                            e(t);
                          },
                          fail: function fail(t) {
                            n(t);
                          }
                        });
                      }));

                    case 2:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getNewImage: function getNewImage() {
            t.canvasToTempFilePath({
              canvasId: a.CanvasID,
              quality: 1,
              complete: function complete(t) {
                console.log(r(t.tempFilePath, " at colorui\\components\\wm-poster\\wm-poster.vue:214")), a.$emit("success", t);
              }
            }, this);
          }
        },
        mounted: function mounted() {
          a = this, a.OnCanvas();
        }
      };
      e.default = o;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/wm-poster/wm-poster-create-component', {
  'colorui/components/wm-poster/wm-poster-create-component': function coloruiComponentsWmPosterWmPosterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1a47"));
  }
}, [['colorui/components/wm-poster/wm-poster-create-component']]]);
});
require('colorui/components/wm-poster/wm-poster.js');
__wxRoute = 'colorui/components/yq-avatar/yq-avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/yq-avatar/yq-avatar.js';

define('colorui/components/yq-avatar/yq-avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Component({});
});
require('colorui/components/yq-avatar/yq-avatar.js');
__wxRoute = 'pages/basics/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/home.js';

define('pages/basics/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/basics/home"], {
  3579: function _(n, e, o) {
    "use strict";

    var t = o("6881"),
        c = o.n(t);
    c.a;
  },
  5279: function _(n, e, o) {
    "use strict";

    o.r(e);
    var t = o("7434"),
        c = o("feb5");

    for (var a in c) {
      "default" !== a && function (n) {
        o.d(e, n, function () {
          return c[n];
        });
      }(a);
    }

    o("3579");
    var l = o("2877"),
        u = Object(l["a"])(c["default"], t["a"], t["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  6092: function _(n, e, o) {
    "use strict";

    (function (n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "basics",
        data: function data() {
          return {
            elements: [{
              title: "布局",
              name: "layout",
              color: "cyan",
              cuIcon: "newsfill"
            }, {
              title: "背景",
              name: "background",
              color: "blue",
              cuIcon: "colorlens"
            }, {
              title: "文本",
              name: "text",
              color: "purple",
              cuIcon: "font"
            }, {
              title: "图标 ",
              name: "icon",
              color: "mauve",
              cuIcon: "cuIcon"
            }, {
              title: "按钮",
              name: "button",
              color: "pink",
              cuIcon: "btn"
            }, {
              title: "标签",
              name: "tag",
              color: "brown",
              cuIcon: "tagfill"
            }, {
              title: "头像",
              name: "avatar",
              color: "red",
              cuIcon: "myfill"
            }, {
              title: "进度条",
              name: "progress",
              color: "orange",
              cuIcon: "icloading"
            }, {
              title: "边框阴影",
              name: "shadow",
              color: "olive",
              cuIcon: "copy"
            }, {
              title: "加载",
              name: "loading",
              color: "green",
              cuIcon: "loading2"
            }]
          };
        },
        onShow: function onShow() {
          console.log(n("success", " at pages\\basics\\home.vue:88"));
        }
      };
      e.default = o;
    }).call(this, o("0de9")["default"]);
  },
  6881: function _(n, e, o) {},
  7434: function _(n, e, o) {
    "use strict";

    var t = function t() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        c = [];

    o.d(e, "a", function () {
      return t;
    }), o.d(e, "b", function () {
      return c;
    });
  },
  feb5: function feb5(n, e, o) {
    "use strict";

    o.r(e);
    var t = o("6092"),
        c = o.n(t);

    for (var a in t) {
      "default" !== a && function (n) {
        o.d(e, n, function () {
          return t[n];
        });
      }(a);
    }

    e["default"] = c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/basics/home-create-component', {
  'pages/basics/home-create-component': function pagesBasicsHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5279"));
  }
}, [['pages/basics/home-create-component']]]);
});
require('pages/basics/home.js');
__wxRoute = 'pages/component/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/home.js';

define('pages/component/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/home"], {
  13869: function _(e, n, t) {
    "use strict";

    t.r(n);
    var c = t("5f3d"),
        o = t.n(c);

    for (var l in c) {
      "default" !== l && function (e) {
        t.d(n, e, function () {
          return c[e];
        });
      }(l);
    }

    n["default"] = o.a;
  },
  "511c": function c(e, n, t) {},
  "5f3d": function f3d(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = {
      data: function data() {
        return {
          elements: [{
            title: "操作条",
            name: "bar",
            color: "purple",
            cuIcon: "vipcard"
          }, {
            title: "导航栏 ",
            name: "nav",
            color: "mauve",
            cuIcon: "formfill"
          }, {
            title: "列表",
            name: "list",
            color: "pink",
            cuIcon: "list"
          }, {
            title: "卡片",
            name: "card",
            color: "brown",
            cuIcon: "newsfill"
          }, {
            title: "表单",
            name: "form",
            color: "red",
            cuIcon: "formfill"
          }, {
            title: "时间轴",
            name: "timeline",
            color: "orange",
            cuIcon: "timefill"
          }, {
            title: "聊天",
            name: "chat",
            color: "green",
            cuIcon: "messagefill"
          }, {
            title: "轮播",
            name: "swiper",
            color: "olive",
            cuIcon: "album"
          }, {
            title: "模态框",
            name: "modal",
            color: "grey",
            cuIcon: "squarecheckfill"
          }, {
            title: "步骤条",
            name: "steps",
            color: "cyan",
            cuIcon: "roundcheckfill"
          }]
        };
      }
    };
    n.default = c;
  },
  9213: function _(e, n, t) {
    "use strict";

    var c = function c() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        o = [];

    t.d(n, "a", function () {
      return c;
    }), t.d(n, "b", function () {
      return o;
    });
  },
  b658: function b658(e, n, t) {
    "use strict";

    var c = t("511c"),
        o = t.n(c);
    o.a;
  },
  d548: function d548(e, n, t) {
    "use strict";

    t.r(n);
    var c = t("9213"),
        o = t("13869");

    for (var l in o) {
      "default" !== l && function (e) {
        t.d(n, e, function () {
          return o[e];
        });
      }(l);
    }

    t("b658");
    var r = t("2877"),
        a = Object(r["a"])(o["default"], c["a"], c["b"], !1, null, null, null);
    n["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/component/home-create-component', {
  'pages/component/home-create-component': function pagesComponentHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d548"));
  }
}, [['pages/component/home-create-component']]]);
});
require('pages/component/home.js');
__wxRoute = 'pages/main_page/homelist/news-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/homelist/news-item.js';

define('pages/main_page/homelist/news-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main_page/homelist/news-item"], {
  "65b5": function b5(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return c;
    });
  },
  "690c": function c(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      props: {
        options: {
          type: Object,
          default: function _default(t) {
            return {};
          }
        }
      },
      methods: {
        click: function click() {
          this.$emit("click");
        },
        close: function close(t) {
          this.$emit("close");
        }
      }
    };
    e.default = u;
  },
  ce72: function ce72(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("65b5"),
        c = n("f1fd");

    for (var i in c) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return c[t];
        });
      }(i);
    }

    var o = n("2877"),
        r = Object(o["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  f1fd: function f1fd(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("690c"),
        c = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/main_page/homelist/news-item-create-component', {
  'pages/main_page/homelist/news-item-create-component': function pagesMain_pageHomelistNewsItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ce72"));
  }
}, [['pages/main_page/homelist/news-item-create-component']]]);
});
require('pages/main_page/homelist/news-item.js');
__wxRoute = 'pages/plugin/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/home.js';

define('pages/plugin/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/plugin/home"], {
  "0070": function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "components",
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar,
            list: [{
              title: "索引列表",
              img: "https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",
              url: "../plugin/indexes"
            }, {
              title: "微动画",
              img: "https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",
              url: "../plugin/animation"
            }, {
              title: "全屏抽屉",
              img: "https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",
              url: "../plugin/drawer"
            }, {
              title: "垂直导航",
              img: "https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",
              url: "../plugin/verticalnav"
            }]
          };
        },
        methods: {
          toChild: function toChild(n) {
            t.navigateTo({
              url: n.currentTarget.dataset.url
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "0953": function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("0070"),
        u = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "15dc": function dc(t, n, e) {
    "use strict";

    var i = e("e94a"),
        u = e.n(i);
    u.a;
  },
  6796: function _(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  e3e1: function e3e1(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("6796"),
        u = e("0953");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("15dc");
    var l = e("2877"),
        r = Object(l["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  e94a: function e94a(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/plugin/home-create-component', {
  'pages/plugin/home-create-component': function pagesPluginHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e3e1"));
  }
}, [['pages/plugin/home-create-component']]]);
});
require('pages/plugin/home.js');

__wxRoute = 'pages/main/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/home.js';

define('pages/main/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/home"],{"1eb2":function(t,e,n){"use strict";n.r(e);var u=n("37bb"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"2bb1":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"37bb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("271e"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{PageCur:"homepage"}},methods:{NavChange:function(t){u.default.mayiwoLog(t.currentTarget.dataset.cur),this.PageCur=t.currentTarget.dataset.cur}},onLoad:function(){u.default.getGoodList({},function(t){u.default.mayiwoLog(t)})}};e.default=r},f067:function(t,e,n){"use strict";n.r(e);var u=n("2bb1"),a=n("1eb2");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports}},[["c204","common/runtime","common/vendor"]]]);
});
require('pages/main/home.js');
__wxRoute = 'pages/main_page/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/home/home.js';

define('pages/main_page/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/home/home"],{"0676":function(e,i,t){"use strict";t.r(i);var o=t("e4e6"),s=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(i,e,function(){return o[e]})}(n);i["default"]=s.a},"232c":function(e,i,t){"use strict";t.r(i);var o=t("60c4"),s=t("0676");for(var n in s)"default"!==n&&function(e){t.d(i,e,function(){return s[e]})}(n);var a=t("2877"),r=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);i["default"]=r.exports},"60c4":function(e,i,t){"use strict";var o=function(){var e=this,i=e.$createElement;e._self._c},s=[];t.d(i,"a",function(){return o}),t.d(i,"b",function(){return s})},e4e6:function(e,i,t){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{isCard:!0,loadProgress:0,CustomBar:this.CustomBar,cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:"",cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:5,gridBorder:!1}},methods:{IsCard:function(e){this.isCard=e.detail.value},DotStyle:function(e){this.dotStyle=e.detail.value},cardSwiper:function(e){this.cardCur=e.detail.current},TowerSwiper:function(e){for(var i=this[e],t=0;t<i.length;t++)i[t].zIndex=parseInt(i.length/2)+1-Math.abs(t-parseInt(i.length/2)),i[t].mLeft=t-parseInt(i.length/2);this.swiperList=i},TowerStart:function(e){this.towerStart=e.touches[0].pageX},TowerMove:function(e){this.direction=e.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(e){var i=this.direction,t=this.swiperList;if("right"==i){for(var o=t[0].mLeft,s=t[0].zIndex,n=1;n<this.swiperList.length;n++)this.swiperList[n-1].mLeft=this.swiperList[n].mLeft,this.swiperList[n-1].zIndex=this.swiperList[n].zIndex;this.swiperList[t.length-1].mLeft=o,this.swiperList[t.length-1].zIndex=s}else{for(var a=t[t.length-1].mLeft,r=t[t.length-1].zIndex,l=this.swiperList.length-1;l>0;l--)this.swiperList[l].mLeft=this.swiperList[l-1].mLeft,this.swiperList[l].zIndex=this.swiperList[l-1].zIndex;this.swiperList[0].mLeft=a,this.swiperList[0].zIndex=r}this.direction="",this.swiperList=this.swiperList},LoadProgress:function(){var e=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){e.LoadProgress()},100):this.loadProgress=0},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},Gridchange:function(e){this.gridCol=e.detail.value},toHomelist:function(i){e.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},tovideo:function(i){e.navigateTo({url:"/pages/main_page/video/index",animationType:"pop-in",animationDuration:200})},tovideo2:function(i){e.navigateTo({url:"/pages/main_page/homelist/detail/detail?title=凡真正的恩典因不完整而美丽"})}},onLoad:function(){console.log(t("页面加载事件"," at pages\\main_page\\home\\home.vue:367")),this.LoadProgress(),this.TowerSwiper("swiperList")}};i.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["e9aa","common/runtime","common/vendor"]]]);
});
require('pages/main_page/home/home.js');
__wxRoute = 'pages/main_page/about/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/about/about.js';

define('pages/main_page/about/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/about/about"],{"02e2":function(n,t,e){"use strict";e.r(t);var u=e("b4f6"),a=e("1386");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);var o=e("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},1386:function(n,t,e){"use strict";e.r(t);var u=e("7d92"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},"7d92":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},b4f6:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})}},[["c7b0","common/runtime","common/vendor"]]]);
});
require('pages/main_page/about/about.js');
__wxRoute = 'pages/main_page/post/post';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/post/post.js';

define('pages/main_page/post/post.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/post/post"],{"4d31":function(t,e,n){"use strict";n.r(e);var a=n("b2b4"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},a1e7:function(t,e,n){"use strict";n.r(e);var a=n("a8d3"),i=n("4d31");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("adec");var c=n("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},a8d3:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},adec:function(t,e,n){"use strict";var a=n("ec23"),i=n.n(a);i.a},b2b4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgList:[],modalName:null,textareaAValue:""}},methods:{ChooseImage:function(){var e=this;t.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var n=this;t.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value}}};e.default=n}).call(this,n("6e42")["default"])},ec23:function(t,e,n){}},[["fd88","common/runtime","common/vendor"]]]);
});
require('pages/main_page/post/post.js');
__wxRoute = 'pages/main_page/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/my/my.js';

define('pages/main_page/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/my/my"],{3002:function(e,t,n){"use strict";var a=n("9439"),o=n.n(a);o.a},"5c26":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},7275:function(e,t,n){"use strict";n.r(t);var a=n("f507"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},9439:function(e,t,n){},"94da":function(e,t,n){"use strict";n.r(t);var a=n("5c26"),o=n("7275");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("3002");var r=n("2877"),u=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},f507:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isCard:!0,TabCur:0,animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(e){var t=this,n=e.currentTarget.dataset.class;this.animation=n,setTimeout(function(){t.animation=""},1e3)},ToggleDelay:function(){var e=this;this.toggleDelay=!0,setTimeout(function(){e.toggleDelay=!1},1e3)},tabSelect:function(e){this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1)},myset:function(t){e.navigateTo({url:"/pages/main_page/myset/myset",animationType:"pop-in",animationDuration:200})}}};t.default=n}).call(this,n("6e42")["default"])}},[["5285","common/runtime","common/vendor"]]]);
});
require('pages/main_page/my/my.js');
__wxRoute = 'pages/main_page/myset/myset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/myset/myset.js';

define('pages/main_page/myset/myset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/myset/myset"],{"0bf5":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__get_style([t.imgStyle]));t.$mp.data=Object.assign({},{$root:{s0:e}})},h=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return h})},"105f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=h(e("9383"));function h(t){return t&&t.__esModule?t:{default:t}}function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var n=function(){return Promise.all([e.e("common/vendor"),e.e("colorui/components/wm-poster/wm-poster")]).then(e.bind(null,"1a47"))},r=a({components:{wmPoster:n},data:function(){return{shadow:!1,url:"../../../static/logo.png"}},methods:{myUpload:function(t){this.url=t.path},SetShadow:function(t){this.shadow=t.detail.value}}},"components",{avatar:s.default});i.default=r},"295a":function(t,i,e){},"498a":function(t,i,e){"use strict";var s=e("295a"),h=e.n(s);h.a},"5f30":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},h=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return h})},"62ad":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=h(e("a34a"));function h(t){return t&&t.__esModule?t:{default:t}}function a(t,i,e,s,h,a,n){try{var r=t[a](n),o=r.value}catch(l){return void e(l)}r.done?i(o):Promise.resolve(o).then(s,h)}function n(t){return function(){var i=this,e=arguments;return new Promise(function(s,h){var n=t.apply(i,e);function r(t){a(n,s,h,r,o,"next",t)}function o(t){a(n,s,h,r,o,"throw",t)}r(void 0)})}}var r=50,o={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var i=this;this.ctxCanvas=t.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=t.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=t.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):t.showTabBar({complete:function(t){i.moreHeight="showTabBar:ok"===t.errMsg?50:0,i.fWindowResize()}})},methods:{fWindowResize:function(){var i=t.getSystemInfoSync();this.platform=i.platform,this.pixelRatio=i.pixelRatio,this.windowWidth=i.windowWidth,"android"===this.platform?(this.windowHeight=i.screenHeight+i.statusBarHeight,this.cvsStyleHeight=this.windowHeight-r+"px"):(this.windowHeight=i.windowHeight+this.moreHeight,this.cvsStyleHeight=this.windowHeight-r+6+"px"),this.pxRatio=this.windowWidth/750;var e=this.avatarStyle;if(e&&!0!==e&&(e=e.trim())){e=e.split(";");var s={},h=!0,a=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(h=(o=l.next()).done);h=!0){var c=o.value;if(c){if(c=c.trim().split(":"),c[1].indexOf("upx")>=0){var d=c[1].trim().split(" ");for(var p in d)d[p]&&d[p].indexOf("upx")>=0&&(d[p]=parseFloat(d[p])*this.pxRatio+"px");c[1]=d.join(" ")}s[c[0].trim()]=c[1].trim()}}}catch(u){a=!0,n=u}finally{try{h||null==l.return||l.return()}finally{if(a)throw n}}this.imgStyle=s}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var i=this;this.fSelecting||(this.fSelecting=!0,setTimeout(function(){i.fSelecting=!1},500),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.showLoading({mask:!0});var s=i.imgPath=e.tempFilePaths[0];t.getImageInfo({src:s,success:function(e){if(i.imgWidth=e.width,i.imgHeight=e.height,i.path=s,!i.hasSel){var h=i.selStyle||{};if(!i.selWidth||!i.selHeight)return void t.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var a=i.selWidth.indexOf("upx")>=0?parseInt(i.selWidth)*i.pxRatio:parseInt(i.selWidth),n=i.selHeight.indexOf("upx")>=0?parseInt(i.selHeight)*i.pxRatio:parseInt(i.selHeight);h.width=a+"px",h.height=n+"px",h.top=(i.windowHeight-n-r)/2+"px",h.left=(i.windowWidth-a)/2+"px",i.selStyle=h}i.noBar?i.fDrawInit(!0):t.hideTabBar({complete:function(){i.fDrawInit(!0)}})},fail:function(){t.showToast({title:"error3",duration:2e3})},complete:function(){t.hideLoading()}})}}))},fUpload:function(){var i=this;if(!this.fUploading){this.fUploading=!0,setTimeout(function(){i.fUploading=!1},1e3);var e=this.selStyle,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height),r=this.exportWidth||a,o=this.exportHeight||n;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn})},fail:function(i){t.showToast({title:"error1",duration:2e3})},complete:function(){t.hideLoading(),i.noBar||t.showTabBar()}},this)}},fPrvUpload:function(){var i=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout(function(){i.fPrvUploading=!1},1e3);var e=this.selStyle,s=(parseInt(e.width),parseInt(e.height),this.prvX),h=this.prvY,a=this.prvWidth,n=this.prvHeight,r=this.exportWidth||a,o=this.exportHeight||n;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn})},fail:function(){t.showToast({title:"error_prv",duration:2e3})},complete:function(){t.hideLoading(),i.noBar||t.showTabBar()}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.windowWidth,s=this.windowHeight,h=this.imgWidth,a=this.imgHeight,n=h/a,o=e-40,l=s-r-80,c=(this.pixelRatio,parseInt(this.selStyle.width)),d=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":n>1?this.fixWidth=1:this.fixHeight=1;break;case"short":n>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":c>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":c>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":n>1?this.lckWidth=1:this.lckHeight=1;break;case"short":n>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":c>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":c>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(o=c,l=o/n):this.fixHeight?(l=d,o=l*n):n<1?a<l?(o=h,l=a):(l=l,o=l*n):h<o?(o=h,l=a):(o=o,l=o/n),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,o<c&&(o=c,l=o/n,this.lckHeight=0),l<d&&(l=d,o=l*n,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-o)/2,this.posHeight=(s-l-r)/2,this.useWidth=o,this.useHeight=l;var p=this.selStyle,u=parseInt(p.left),f=parseInt(p.top),g=parseInt(p.width),v=parseInt(p.height),x=(this.canvas,this.canvasOper,this.ctxCanvas),m=this.ctxCanvasOper;m.setLineWidth(3),m.setStrokeStyle("grey"),m.setGlobalAlpha(.4),m.setFillStyle("black"),m.strokeRect(u,f,g,v),m.fillRect(0,0,this.windowWidth,f),m.fillRect(0,f,u,v),m.fillRect(0,f+v,this.windowWidth,this.windowHeight-v-f-r),m.fillRect(u+g,f,this.windowWidth-g-u,v),m.setStrokeStyle("red"),m.moveTo(u+20,f),m.lineTo(u,f),m.lineTo(u,f+20),m.moveTo(u+g-20,f),m.lineTo(u+g,f),m.lineTo(u+g,f+20),m.moveTo(u+20,f+v),m.lineTo(u,f+v),m.lineTo(u,f+v-20),m.moveTo(u+g-20,f+v),m.lineTo(u+g,f+v),m.lineTo(u+g,f+v-20),m.stroke(),m.draw(!1,function(){i&&(t.styleDisplay="flex",t.styleTop="0",x.setFillStyle("black"),t.fDrawImage())}),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.ctxCanvas;i.fillRect(0,0,this.windowWidth,this.windowHeight-r),i.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),i.scale(this.scaleSize,this.scaleSize),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),i.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||t.showTabBar()},fPreview:function(){var i=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout(function(){i.fPreviewing=!1},1e3);var e=this.selStyle,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height);t.showLoading({mask:!0}),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){i.prvImgTmp=t=t.tempFilePath;var e=i.ctxCanvasPrv,s=i.windowWidth,h=parseInt(i.cvsStyleHeight),a=parseInt(i.selStyle.width),n=parseInt(i.selStyle.height),r=s-40,o=h-80,l=r/a,c=n*l;c<o?(a=r,n=c):(l=o/n,a*=l,n=o),e.setFillStyle("black"),e.fillRect(0,0,s,h),i.prvX=s=(s-a)/2,i.prvY=h=(h-n)/2,i.prvWidth=a,i.prvHeight=n,e.drawImage(t,s,h,a,n),e.draw(!1),"android"!=i.platform&&(i.showOper=!1),i.prvTop="0"},fail:function(){t.showToast({title:"error2",duration:2e3})},complete:function(){t.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var s=i.selWidth,h=i.selHeight,a=i.expWidth,n=i.expHeight,o=i.quality,l=i.canRotate,c=i.canScale,d=i.minScale,p=i.maxScale,u=i.stretch,f=i.inner,g=i.lock;a&&(this.exportWidth=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a)),n&&(this.exportHeight=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),this.letRotate="false"===l?0:1,this.letScale="false"===c?0:1,this.qlty=parseInt(o)||.9,this.mnScale=d||.3,this.mxScale=p||4,this.stc=u,this.isin="true"===f?1:0,this.lck=g,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),s&&h&&(s=s.indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),h=h.indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h),this.selStyle.width=s+"px",this.selStyle.height=h+"px",this.selStyle.top=(this.windowHeight-h-r)/2+"px",this.selStyle.left=(this.windowWidth-s)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){var t=this;if("android"===this.platform){if(this.fRotateing)return;this.fRotateing=!0,setTimeout(function(){t.fRotateing=!1},500)}this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],s=i[1];if(this.touch0=e,this.touch1=s,s){var h=s.x-e.x,a=s.y-e.y;this.fgDistance=Math.sqrt(h*h+a*a)}},fMove:function(t){var i=t.touches,e=i[0],s=i[1];if(s){var h=s.x-e.x,a=s.y-e.y,n=Math.sqrt(h*h+a*a),r=.005*(n-this.fgDistance),o=this.scaleSize+r;do{if(!this.letScale)break;if(o<this.mnScale)break;if(o>this.mxScale)break;if(this.isin){var l=this.useWidth*o,c=this.useHeight*o,d=this.posWidth+this.useWidth/2,p=this.posHeight+this.useHeight/2,u=d-l/2,f=p-c/2,g=u+l,v=f+c,x=parseInt(this.selStyle.left),m=parseInt(this.selStyle.top),w=parseInt(this.selStyle.width),y=parseInt(this.selStyle.height);if(x<u||x+w>g||m<f||m+y>v)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=o}while(0);this.fgDistance=n,s.x!==e.x&&this.letRotate&&(h=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),a=(s.y-e.y)/(s.x-e.x),this.rotateDeg+=180*Math.atan((a-h)/(1+h*a))/Math.PI,this.touch0=e,this.touch1=s),this.fDrawImage()}else if(this.touch0){var S=e.x-this.touch0.x,H=e.y-this.touch0.y,I=this.posWidth+S,W=this.posHeight+H;if(this.isin){var b=this.useWidth*this.scaleSize,k=this.useHeight*this.scaleSize,T=I+this.useWidth/2,R=W+this.useHeight/2,D=T-b/2,P=R-k/2,C=D+b,O=P+k,M=parseInt(this.selStyle.left),_=parseInt(this.selStyle.top),q=parseInt(this.selStyle.width),B=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(S)<100&&(M>=D&&M+q<=C?this.posWidth=I:M<D?this.posWidth=M-this.scaleWidth:M+q>C&&(this.posWidth=M-(b-q)-this.scaleWidth)),!this.lckHeight&&Math.abs(H)<100&&(_>=P&&_+B<=O?this.posHeight=W:_<P?this.posHeight=_-this.scaleHeight:_+B>O&&(this.posHeight=_-(k-B)-this.scaleHeight))}else Math.abs(S)<100&&!this.lckWidth&&(this.posWidth=I),Math.abs(H)<100&&!this.lckHeight&&(this.posHeight=W);this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var i=this;return new Promise(function(e,s){var h=i.prvX,a=i.prvY,n=i.prvWidth,r=i.prvHeight;h*=i.pixelRatio,a*=i.pixelRatio,n*=i.pixelRatio,r*=i.pixelRatio,t.canvasGetImageData({canvasId:"prv-canvas",x:h,y:a,width:n,height:r,success:function(t){e(t.data)},fail:function(t){s(t)}},i)})},fColorChange:function(){var i=n(s.default.mark(function i(e){var h,a,n,r,o,l,c,d,p,u,f,g,v,x,m,w,y,S,H,I,W,b,k,T,R,D,P;return s.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:if(h=Date.now(),!(h-this.prvTm<100)){i.next=3;break}return i.abrupt("return");case 3:if(this.prvTm=h,t.showLoading({mask:!0}),this.prvImgData){i.next=11;break}return i.next=8,this.fGetImgData().catch(function(i){t.showToast({title:"error_read",duration:2e3})});case 8:if(this.prvImgData=i.sent){i.next=10;break}return i.abrupt("return");case 10:this.target=new Uint8ClampedArray(this.prvImgData.length);case 11:if(a=this.prvImgData,n=this.target,r=e.detail.value,0===r)n=a;else for(r=(r+100)/200,r<.005&&(r=0),r>.995&&(r=1),W=a.length-1;W>=0;W-=4)o=a[W-3]/255,l=a[W-2]/255,c=a[W-1]/255,w=Math.max(o,l,c),m=Math.min(o,l,c),g=w-m,w===m?p=0:w===o&&l>=c?p=(l-c)/g*60:w===o&&l<c?p=(l-c)/g*60+360:w===l?p=(c-o)/g*60+120:w===c&&(p=(o-l)/g*60+240),f=(w+m)/2,0===f||w===m?u=0:0<f&&f<=.5?u=g/(2*f):f>.5&&(u=g/(2-2*f)),a[W]&&(d=a[W]),r<.5?u=u*r/.5:r>.5&&(u=2*u+2*r-u*r/.5-1),0===u?o=l=c=Math.round(255*f):(f<.5?x=f*(1+u):f>=.5&&(x=f+u-f*u),v=2*f-x,y=p/360,S=y+1/3,H=y,I=y-1/3,b=function(t){return t<0?t+1:t>1?t-1:t},k=function(t){return t<1/6?v+6*(x-v)*t:t>=1/6&&t<.5?x:t>=.5&&t<2/3?v+6*(x-v)*(2/3-t):v},o=S=Math.round(255*k(b(S))),l=H=Math.round(255*k(b(H))),c=I=Math.round(255*k(b(I)))),d&&(n[W]=d),n[W-3]=o,n[W-2]=l,n[W-1]=c;T=this.prvX,R=this.prvY,D=this.prvWidth,P=this.prvHeight,this.ctxCanvasPrv.setFillStyle("black"),this.ctxCanvasPrv.fillRect(T,R,D,P),this.ctxCanvasPrv.draw(!0),T*=this.pixelRatio,R*=this.pixelRatio,D*=this.pixelRatio,P*=this.pixelRatio,t.canvasPutImageData({canvasId:"prv-canvas",x:T,y:R,width:D,height:P,data:n,fail:function(){t.showToast({title:"error_put",duration:2e3})},complete:function(){t.hideLoading()}},this);case 22:case"end":return i.stop()}},i,this)}));function e(t){return i.apply(this,arguments)}return e}(),btop:function(t){return new Promise(function(i,e){var s=t.split(","),h=s[0].match(/:(.*?);/)[1],a=atob(s[1]),n=a.length,r=new Uint8Array(n);while(n--)r[n]=a.charCodeAt(n);return i((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:h})))})}}};i.default=o}).call(this,e("6e42")["default"])},9383:function(t,i,e){"use strict";e.r(i);var s=e("0bf5"),h=e("ae5a");for(var a in h)"default"!==a&&function(t){e.d(i,t,function(){return h[t]})}(a);e("498a");var n=e("2877"),r=Object(n["a"])(h["default"],s["a"],s["b"],!1,null,null,null);i["default"]=r.exports},ae5a:function(t,i,e){"use strict";e.r(i);var s=e("62ad"),h=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);i["default"]=h.a},ee86:function(t,i,e){"use strict";e.r(i);var s=e("105f"),h=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);i["default"]=h.a},f3ea:function(t,i,e){"use strict";e.r(i);var s=e("5f30"),h=e("ee86");for(var a in h)"default"!==a&&function(t){e.d(i,t,function(){return h[t]})}(a);var n=e("2877"),r=Object(n["a"])(h["default"],s["a"],s["b"],!1,null,null,null);i["default"]=r.exports}},[["3c48","common/runtime","common/vendor"]]]);
});
require('pages/main_page/myset/myset.js');
__wxRoute = 'pages/main_page/homelist/homelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/homelist/homelist.js';

define('pages/main_page/homelist/homelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/homelist/homelist"],{"0309":function(t,e,i){"use strict";var n=i("b963"),a=i.n(n);a.a},"0df1":function(t,e,i){"use strict";i.r(e);var n=i("e0ea"),a=i("8a8b");for(var A in a)"default"!==A&&function(t){i.d(e,t,function(){return a[t]})}(A);i("0309");var s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"5e7b":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("pages/main_page/homelist/news-item").then(i.bind(null,"ce72"))},A=100,s=3,o={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},c={components:{mediaItem:a},data:function(){return{contentstyle:{height:"1000px"},bodycontenth:0,newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==",loadingIcon:"data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs="}},onLoad:function(){var t=this;this.tabBars.forEach(function(e){t.newsList.push({data:[],refreshText:"",loadingText:"加载更多..."})}),this.getList(0)},created:function(){console.log(t("created"," at pages\\main_page\\homelist\\homelist.vue:159"))},methods:{getList:function(e){for(var i=this,a=this.newsList[e],A=[],s=1;s<=10;s++){var c=Object.assign({},o["data"+Math.floor(5*Math.random())]);c.id=this.newGuid(),A.push(c)}a.data=a.data.concat(A);var h=n.createSelectorQuery().in(this);setTimeout(function(){h.select("#scrollviewitem"+e).boundingClientRect(function(e){i.contentstyle.height=parseInt(e.height)+"px",console.log(t("页面高度为："+i.contentstyle.height," at pages\\main_page\\homelist\\homelist.vue:177"))}).exec()},1e3)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,n.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout(function(){e.navigateFlag=!1},200))},close:function(t,e){var i=this;n.showModal({content:"是否删除本条信息？",success:function(n){n.confirm&&i.newsList[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.getList(e.tabIndex)},500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>A){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>s){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout(function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshText="已刷新",setTimeout(function(){e.pulling=!1},500)},2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=c}).call(this,i("0de9")["default"],i("6e42")["default"])},"8a8b":function(t,e,i){"use strict";i.r(e);var n=i("5e7b"),a=i.n(n);for(var A in n)"default"!==A&&function(t){i.d(e,t,function(){return n[t]})}(A);e["default"]=a.a},b963:function(t,e,i){},e0ea:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}},[["68d1","common/runtime","common/vendor"]]]);
});
require('pages/main_page/homelist/homelist.js');
__wxRoute = 'pages/main_page/homelist/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/homelist/detail/detail.js';

define('pages/main_page/homelist/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/homelist/detail/detail"],{"04f3":function(t,e,i){"use strict";i.r(e);var a=i("7426"),n=i("bf9d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("48aa");var l=i("2877"),s=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"0ad2":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"",contentstyle:{height:"",width:""},videoCtx:null,disable:!1}},mounted:function(){this.videoCtx=t.createVideoContext("demoVideo")},onLoad:function(e){this.title=e.title?e.title:"",t.setNavigationBarTitle({title:this.title})},onReady:function(){try{var e=t.getSystemInfoSync();console.log(i(e.model," at pages\\main_page\\homelist\\detail\\detail.vue:36")),console.log(i(e.pixelRatio," at pages\\main_page\\homelist\\detail\\detail.vue:37")),console.log(i(e.windowWidth," at pages\\main_page\\homelist\\detail\\detail.vue:38")),console.log(i(e.windowHeight," at pages\\main_page\\homelist\\detail\\detail.vue:39")),console.log(i(e.language," at pages\\main_page\\homelist\\detail\\detail.vue:40")),console.log(i(e.version," at pages\\main_page\\homelist\\detail\\detail.vue:41")),console.log(i(e.platform," at pages\\main_page\\homelist\\detail\\detail.vue:42")),this.contentstyle.height=e.windowHeight+"px",this.contentstyle.width=e.windowWidth+"px"}catch(a){}},methods:{play:function(e){this.videoCtx.play(),t.showToast({title:"开始播放",icon:"none"})},pause:function(e){this.videoCtx.pause(),t.showToast({title:"暂停播放",icon:"none"})},buy:function(e){this.videoCtx.pause(),t.showToast({title:"你在点我",icon:"none"})}}};e.default=a}).call(this,i("6e42")["default"],i("0de9")["default"])},"48aa":function(t,e,i){"use strict";var a=i("fdf3"),n=i.n(a);n.a},7426:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},bf9d:function(t,e,i){"use strict";i.r(e);var a=i("0ad2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},fdf3:function(t,e,i){}},[["fbb1","common/runtime","common/vendor"]]]);
});
require('pages/main_page/homelist/detail/detail.js');
__wxRoute = 'pages/main_page/video/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/video/index.js';

define('pages/main_page/video/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/video/index"],{"0339":function(t,i,e){"use strict";e.r(i);var n=e("40d5"),o=e("a103");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("6ce4");var s=e("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"55444d54",null);i["default"]=c.exports},"1d29":function(t,i,e){},"40d5":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"6ce4":function(t,i,e){"use strict";var n=e("1d29"),o=e.n(n);o.a},a103:function(t,i,e){"use strict";e.r(i);var n=e("d7bf"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},d7bf:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return r(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function u(t,i,e,n,o,a,s){try{var c=t[a](s),r=c.value}catch(u){return void e(u)}c.done?i(r):Promise.resolve(r).then(n,o)}function h(t){return function(){var i=this,e=arguments;return new Promise(function(n,o){var a=t.apply(i,e);function s(t){u(a,n,o,s,c,"next",t)}function c(t){u(a,n,o,s,c,"throw",t)}s(void 0)})}}var l={data:function(){return{title:"无意者 烈火焚身;以正义的烈火拔出黑暗",videoCtx:null,listTouchStartY:0,listTouchDirection:null,containerStyle:"",sysheight:0,distance:0,scroll:!1,id:0,videoList:[{src:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",content:"456",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg"},{src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"123",flag:!1,check:!0,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg"},{src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"789",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg"}]}},onLoad:function(i){this.sysheight=t.getSystemInfoSync().windowHeight,this.title=i.title?i.title:"无意者 烈火焚身;以正义的烈火拔出黑暗",t.setNavigationBarTitle({title:this.title})},mounted:function(){var i=h(n.default.mark(function i(){var e,o=this;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:e=t.getSubNVueById("concat"),e.show("slide-in-left",100,function(){t.$on("ListTouchStart",function(t){o.listTouchStartY=t.changedTouches[0].pageY}),t.$on("ListTouchMove",function(t){o.ListTouchMoveY(t.changedTouches[0].pageY)}),t.$on("ListTouchEnd",function(){o.ListTouchEnd()}),t.$on("tapLove",function(){o.scroll||o.tapLove()}),t.$on("tapMsg",function(){o.scroll||o.tapMsg()}),t.$on("tapShare",function(){o.scroll||o.tapShare()}),t.$on("tapCover",function(){o.scroll||o.videoPlay(o.id)}),t.$on("tapAvater",function(){o.scroll||o.tapAvater()})});case 2:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),methods:{pushVideoList:function(){var i=this,e=new Promise(function(e,n){t.request({url:"https://api.apiopen.top/videoRecommend?id=127397",success:function(t){var n=[],o=!0,s=!1,c=void 0;try{for(var r,u=t.data.result[Symbol.iterator]();!(o=(r=u.next()).done);o=!0){var h=r.value;"videoSmallCard"==h.type&&n.length<3&&n.push({src:h.data.playUrl,content:h.data.description,flag:!1,check:!1,avater:h.data.author.icon})}}catch(l){s=!0,c=l}finally{try{o||null==u.return||u.return()}finally{if(s)throw c}}i.videoList=[].concat(a(i.videoList),n),e()}})});return e},tapLove:function(){this.videoList[this.id].check=!this.videoList[this.id].check,this.videoList=a(this.videoList)},tapAvater:function(){t.showToast({icon:"none",title:"点击索引为".concat(this.id,"的头像")})},tapMsg:function(){t.showToast({icon:"none",title:"查看索引为".concat(this.id,"的评论")})},tapShare:function(){t.showToast({icon:"none",title:"分享索引为".concat(this.id,"的视频")})},ListTouchStart:function(t){this.listTouchStartY=t.touches[0].pageY},ListTouchMove:function(t){this.ListTouchMoveY(t.touches[0].pageY)},ListTouchMoveY:function(t){this.listTouchDirection=this.listTouchStartY-t>80?-1:0,this.listTouchDirection=t-this.listTouchStartY>80?1:this.listTouchDirection;var i=this.distance+t-this.listTouchStartY;i>0||(this.containerStyle="transform:translate3d(0, ".concat(i,"px, 0)"),this.listTouchStartY-t<10&&this.listTouchStartY-t>-10&&(this.listTouchDirection=null))},ListTouchEnd:function(){var i=h(n.default.mark(function i(e){var o,a;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:if(!this.scroll){i.next=2;break}return i.abrupt("return");case 2:if(o=this.id,o==this.videoList.length-2&&this.pushVideoList(),this.listTouchDirection||0==this.listTouchDirection){i.next=6;break}return i.abrupt("return");case 6:if(a=this.listTouchDirection*this.sysheight+this.distance,!(a>0||a<-this.sysheight*(this.videoList.length-1))){i.next=9;break}return i.abrupt("return");case 9:return this.videoCtx=t.createVideoContext("video_".concat(o)),this.videoList[o].flag=!this.videoList[o].flag,this.videoCtx.pause(),i.next=14,this.animate(a,this.listTouchDirection);case 14:this.videoCtx=t.createVideoContext("video_".concat(o-this.listTouchDirection)),this.videoList[o-this.listTouchDirection].flag=!this.videoList[o-this.listTouchDirection].flag,this.videoCtx.play(),this.id=this.id-this.listTouchDirection,this.listTouchDirection=null;case 19:case"end":return i.stop()}},i,this)}));function e(t){return i.apply(this,arguments)}return e}(),videoPlay:function(i){this.videoList[i].flag?(this.videoCtx=t.createVideoContext("video_".concat(i)),this.videoCtx.pause()):(this.videoCtx=t.createVideoContext("video_".concat(i)),this.videoCtx.play()),this.videoList[i].flag=!this.videoList[i].flag},animate:function(t,i){var e=this,n=this.distance,o=new Promise(function(o,a){e.scroll=!0;var s=setInterval(function(){-1===i&&t<n||1===i&&t>n?(n+=50*i,e.containerStyle="transform:translate3d(0, ".concat(n,"px, 0)")):(clearInterval(s),n=t,e.distance=t,e.containerStyle="transform:translate3d(0, ".concat(n,"px, 0)"),e.scroll=!1,o())},50)});return o}}};i.default=l}).call(this,e("6e42")["default"])}},[["07b3","common/runtime","common/vendor"]]]);
});
require('pages/main_page/video/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"53c6":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{PageCur:"basics"}},methods:{NavChange:function(n){this.PageCur=n.currentTarget.dataset.cur}}};t.default=u},"7f36":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},9857:function(n,t,e){"use strict";e.r(t);var u=e("53c6"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},e87c:function(n,t,e){"use strict";e.r(t);var u=e("7f36"),r=e("9857");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports}},[["7624","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/basics/layout';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/layout.js';

define('pages/basics/layout.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/layout"],{3712:function(t,e,n){},"4e50":function(t,e,n){"use strict";n.r(e);var a=n("8d3e"),i=n("64df");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("8686");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"64df":function(t,e,n){"use strict";n.r(e);var a=n("ff7d"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},8686:function(t,e,n){"use strict";var a=n("3712"),i=n.n(a);i.a},"8d3e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},ff7d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,TabCur:0,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],tabNav:["Flex布局","Grid布局","辅助布局"]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};e.default=a}},[["95cb","common/runtime","common/vendor"]]]);
});
require('pages/basics/layout.js');
__wxRoute = 'pages/basics/background';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/background.js';

define('pages/basics/background.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/background"],{cb8a:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{ColorList:this.ColorList}}};t.default=u},e3d8:function(n,t,e){"use strict";e.r(t);var u=e("e822"),r=e("e8c4");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},e822:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},e8c4:function(n,t,e){"use strict";e.r(t);var u=e("cb8a"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a}},[["2095","common/runtime","common/vendor"]]]);
});
require('pages/basics/background.js');
__wxRoute = 'pages/basics/text';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/text.js';

define('pages/basics/text.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/text"],{"0b45":function(t,n,e){"use strict";e.r(n);var u=e("a0db"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"6f0b":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},8100:function(t,n,e){"use strict";e.r(n);var u=e("6f0b"),r=e("0b45");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);var o=e("2877"),i=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},a0db:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{ColorList:this.ColorList}}};n.default=u}},[["9d39","common/runtime","common/vendor"]]]);
});
require('pages/basics/text.js');
__wxRoute = 'pages/basics/icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/icon.js';

define('pages/basics/icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/icon"],{1739:function(i,e,o){},"1f61":function(i,e,o){"use strict";var a=function(){var i=this,e=i.$createElement;i._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},3401:function(i,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,cuIcon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0},{name:"close",isShow:!0},{name:"edit",isShow:!0},{name:"emoji",isShow:!0},{name:"favorfill",isShow:!0},{name:"favor",isShow:!0},{name:"loading",isShow:!0},{name:"locationfill",isShow:!0},{name:"location",isShow:!0},{name:"phone",isShow:!0},{name:"roundcheckfill",isShow:!0},{name:"roundcheck",isShow:!0},{name:"roundclosefill",isShow:!0},{name:"roundclose",isShow:!0},{name:"roundrightfill",isShow:!0},{name:"roundright",isShow:!0},{name:"search",isShow:!0},{name:"taxi",isShow:!0},{name:"timefill",isShow:!0},{name:"time",isShow:!0},{name:"unfold",isShow:!0},{name:"warnfill",isShow:!0},{name:"warn",isShow:!0},{name:"camerafill",isShow:!0},{name:"camera",isShow:!0},{name:"commentfill",isShow:!0},{name:"comment",isShow:!0},{name:"likefill",isShow:!0},{name:"like",isShow:!0},{name:"notificationfill",isShow:!0},{name:"notification",isShow:!0},{name:"order",isShow:!0},{name:"samefill",isShow:!0},{name:"same",isShow:!0},{name:"deliver",isShow:!0},{name:"evaluate",isShow:!0},{name:"pay",isShow:!0},{name:"send",isShow:!0},{name:"shop",isShow:!0},{name:"ticket",isShow:!0},{name:"back",isShow:!0},{name:"cascades",isShow:!0},{name:"discover",isShow:!0},{name:"list",isShow:!0},{name:"more",isShow:!0},{name:"scan",isShow:!0},{name:"settings",isShow:!0},{name:"questionfill",isShow:!0},{name:"question",isShow:!0},{name:"shopfill",isShow:!0},{name:"form",isShow:!0},{name:"pic",isShow:!0},{name:"filter",isShow:!0},{name:"footprint",isShow:!0},{name:"top",isShow:!0},{name:"pulldown",isShow:!0},{name:"pullup",isShow:!0},{name:"right",isShow:!0},{name:"refresh",isShow:!0},{name:"moreandroid",isShow:!0},{name:"deletefill",isShow:!0},{name:"refund",isShow:!0},{name:"cart",isShow:!0},{name:"qrcode",isShow:!0},{name:"remind",isShow:!0},{name:"delete",isShow:!0},{name:"profile",isShow:!0},{name:"home",isShow:!0},{name:"cartfill",isShow:!0},{name:"discoverfill",isShow:!0},{name:"homefill",isShow:!0},{name:"message",isShow:!0},{name:"addressbook",isShow:!0},{name:"link",isShow:!0},{name:"lock",isShow:!0},{name:"unlock",isShow:!0},{name:"vip",isShow:!0},{name:"weibo",isShow:!0},{name:"activity",isShow:!0},{name:"friendaddfill",isShow:!0},{name:"friendadd",isShow:!0},{name:"friendfamous",isShow:!0},{name:"friend",isShow:!0},{name:"goods",isShow:!0},{name:"selection",isShow:!0},{name:"explore",isShow:!0},{name:"present",isShow:!0},{name:"squarecheckfill",isShow:!0},{name:"square",isShow:!0},{name:"squarecheck",isShow:!0},{name:"round",isShow:!0},{name:"roundaddfill",isShow:!0},{name:"roundadd",isShow:!0},{name:"add",isShow:!0},{name:"notificationforbidfill",isShow:!0},{name:"explorefill",isShow:!0},{name:"fold",isShow:!0},{name:"game",isShow:!0},{name:"redpacket",isShow:!0},{name:"selectionfill",isShow:!0},{name:"similar",isShow:!0},{name:"appreciatefill",isShow:!0},{name:"infofill",isShow:!0},{name:"info",isShow:!0},{name:"forwardfill",isShow:!0},{name:"forward",isShow:!0},{name:"rechargefill",isShow:!0},{name:"recharge",isShow:!0},{name:"vipcard",isShow:!0},{name:"voice",isShow:!0},{name:"voicefill",isShow:!0},{name:"friendfavor",isShow:!0},{name:"wifi",isShow:!0},{name:"share",isShow:!0},{name:"wefill",isShow:!0},{name:"we",isShow:!0},{name:"lightauto",isShow:!0},{name:"lightforbid",isShow:!0},{name:"lightfill",isShow:!0},{name:"camerarotate",isShow:!0},{name:"light",isShow:!0},{name:"barcode",isShow:!0},{name:"flashlightclose",isShow:!0},{name:"flashlightopen",isShow:!0},{name:"searchlist",isShow:!0},{name:"service",isShow:!0},{name:"sort",isShow:!0},{name:"down",isShow:!0},{name:"mobile",isShow:!0},{name:"mobilefill",isShow:!0},{name:"copy",isShow:!0},{name:"countdownfill",isShow:!0},{name:"countdown",isShow:!0},{name:"noticefill",isShow:!0},{name:"notice",isShow:!0},{name:"upstagefill",isShow:!0},{name:"upstage",isShow:!0},{name:"babyfill",isShow:!0},{name:"baby",isShow:!0},{name:"brandfill",isShow:!0},{name:"brand",isShow:!0},{name:"choicenessfill",isShow:!0},{name:"choiceness",isShow:!0},{name:"clothesfill",isShow:!0},{name:"clothes",isShow:!0},{name:"creativefill",isShow:!0},{name:"creative",isShow:!0},{name:"female",isShow:!0},{name:"keyboard",isShow:!0},{name:"male",isShow:!0},{name:"newfill",isShow:!0},{name:"new",isShow:!0},{name:"pullleft",isShow:!0},{name:"pullright",isShow:!0},{name:"rankfill",isShow:!0},{name:"rank",isShow:!0},{name:"bad",isShow:!0},{name:"cameraadd",isShow:!0},{name:"focus",isShow:!0},{name:"friendfill",isShow:!0},{name:"cameraaddfill",isShow:!0},{name:"apps",isShow:!0},{name:"paintfill",isShow:!0},{name:"paint",isShow:!0},{name:"picfill",isShow:!0},{name:"refresharrow",isShow:!0},{name:"colorlens",isShow:!0},{name:"markfill",isShow:!0},{name:"mark",isShow:!0},{name:"presentfill",isShow:!0},{name:"repeal",isShow:!0},{name:"album",isShow:!0},{name:"peoplefill",isShow:!0},{name:"people",isShow:!0},{name:"servicefill",isShow:!0},{name:"repair",isShow:!0},{name:"file",isShow:!0},{name:"repairfill",isShow:!0},{name:"taoxiaopu",isShow:!0},{name:"weixin",isShow:!0},{name:"attentionfill",isShow:!0},{name:"attention",isShow:!0},{name:"commandfill",isShow:!0},{name:"command",isShow:!0},{name:"communityfill",isShow:!0},{name:"community",isShow:!0},{name:"read",isShow:!0},{name:"calendar",isShow:!0},{name:"cut",isShow:!0},{name:"magic",isShow:!0},{name:"backwardfill",isShow:!0},{name:"playfill",isShow:!0},{name:"stop",isShow:!0},{name:"tagfill",isShow:!0},{name:"tag",isShow:!0},{name:"group",isShow:!0},{name:"all",isShow:!0},{name:"backdelete",isShow:!0},{name:"hotfill",isShow:!0},{name:"hot",isShow:!0},{name:"post",isShow:!0},{name:"radiobox",isShow:!0},{name:"rounddown",isShow:!0},{name:"upload",isShow:!0},{name:"writefill",isShow:!0},{name:"write",isShow:!0},{name:"radioboxfill",isShow:!0},{name:"punch",isShow:!0},{name:"shake",isShow:!0},{name:"move",isShow:!0},{name:"safe",isShow:!0},{name:"activityfill",isShow:!0},{name:"crownfill",isShow:!0},{name:"crown",isShow:!0},{name:"goodsfill",isShow:!0},{name:"messagefill",isShow:!0},{name:"profilefill",isShow:!0},{name:"sound",isShow:!0},{name:"sponsorfill",isShow:!0},{name:"sponsor",isShow:!0},{name:"upblock",isShow:!0},{name:"weblock",isShow:!0},{name:"weunblock",isShow:!0},{name:"my",isShow:!0},{name:"myfill",isShow:!0},{name:"emojifill",isShow:!0},{name:"emojiflashfill",isShow:!0},{name:"flashbuyfill",isShow:!0},{name:"text",isShow:!0},{name:"goodsfavor",isShow:!0},{name:"musicfill",isShow:!0},{name:"musicforbidfill",isShow:!0},{name:"card",isShow:!0},{name:"triangledownfill",isShow:!0},{name:"triangleupfill",isShow:!0},{name:"roundleftfill-copy",isShow:!0},{name:"font",isShow:!0},{name:"title",isShow:!0},{name:"recordfill",isShow:!0},{name:"record",isShow:!0},{name:"cardboardfill",isShow:!0},{name:"cardboard",isShow:!0},{name:"formfill",isShow:!0},{name:"coin",isShow:!0},{name:"cardboardforbid",isShow:!0},{name:"circlefill",isShow:!0},{name:"circle",isShow:!0},{name:"attentionforbid",isShow:!0},{name:"attentionforbidfill",isShow:!0},{name:"attentionfavorfill",isShow:!0},{name:"attentionfavor",isShow:!0},{name:"titles",isShow:!0},{name:"icloading",isShow:!0},{name:"full",isShow:!0},{name:"mail",isShow:!0},{name:"peoplelist",isShow:!0},{name:"goodsnewfill",isShow:!0},{name:"goodsnew",isShow:!0},{name:"medalfill",isShow:!0},{name:"medal",isShow:!0},{name:"newsfill",isShow:!0},{name:"newshotfill",isShow:!0},{name:"newshot",isShow:!0},{name:"news",isShow:!0},{name:"videofill",isShow:!0},{name:"video",isShow:!0},{name:"exit",isShow:!0},{name:"skinfill",isShow:!0},{name:"skin",isShow:!0},{name:"moneybagfill",isShow:!0},{name:"usefullfill",isShow:!0},{name:"usefull",isShow:!0},{name:"moneybag",isShow:!0},{name:"redpacket_fill",isShow:!0},{name:"subscription",isShow:!0},{name:"loading1",isShow:!0},{name:"github",isShow:!0},{name:"global",isShow:!0},{name:"settingsfill",isShow:!0},{name:"back_android",isShow:!0},{name:"expressman",isShow:!0},{name:"evaluate_fill",isShow:!0},{name:"group_fill",isShow:!0},{name:"play_forward_fill",isShow:!0},{name:"deliver_fill",isShow:!0},{name:"notice_forbid_fill",isShow:!0},{name:"fork",isShow:!0},{name:"pick",isShow:!0},{name:"wenzi",isShow:!0},{name:"ellipse",isShow:!0},{name:"qr_code",isShow:!0},{name:"dianhua",isShow:!0},{name:"cuIcon",isShow:!0},{name:"loading2",isShow:!0},{name:"btn",isShow:!0}]}},methods:{searchIcon:function(i){for(var e=i.detail.value.toLowerCase(),o=this.cuIcon,a=0;a<o.length;a++){var n=e,s=o[a].name.toLowerCase();-1!=s.search(n)?o[a].isShow=!0:o[a].isShow=!1}this.cuIcon=o}}};e.default=a},6129:function(i,e,o){"use strict";o.r(e);var a=o("1f61"),n=o("e8d0");for(var s in n)"default"!==s&&function(i){o.d(e,i,function(){return n[i]})}(s);o("e8a3");var m=o("2877"),h=Object(m["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports},e8a3:function(i,e,o){"use strict";var a=o("1739"),n=o.n(a);n.a},e8d0:function(i,e,o){"use strict";o.r(e);var a=o("3401"),n=o.n(a);for(var s in a)"default"!==s&&function(i){o.d(e,i,function(){return a[i]})}(s);e["default"]=n.a}},[["50d3","common/runtime","common/vendor"]]]);
});
require('pages/basics/icon.js');
__wxRoute = 'pages/basics/button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/button.js';

define('pages/basics/button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/button"],{"127c":function(t,e,n){"use strict";n.r(e);var o=n("6260"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},"4e05":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},6260:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{ColorList:this.ColorList,shadow:!1,bordersize:""}},methods:{SetShadow:function(t){this.shadow=t.detail.value},SetBorderSize:function(t){this.bordersize=t.detail.value}}};e.default=o},9077:function(t,e,n){"use strict";n.r(e);var o=n("4e05"),r=n("127c");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a=n("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports}},[["83bc","common/runtime","common/vendor"]]]);
});
require('pages/basics/button.js');
__wxRoute = 'pages/basics/design';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/design.js';

define('pages/basics/design.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/design"],{"278b":function(t,e,n){"use strict";n.r(e);var o=n("b3b0"),r=n("7748");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("c419");var i=n("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"2b3d":function(t,e,n){},7748:function(t,e,n){"use strict";n.r(e);var o=n("d506"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=r.a},b3b0:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},c419:function(t,e,n){"use strict";var o=n("2b3d"),r=n.n(o);r.a},d506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{ColorList:this.ColorList,modalName:"",round:!1,size:"",color:"red",shadow:!1,border:!1,bordersize:""}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetRound:function(t){this.round=t.detail.value},SetSize:function(t){this.size=t.detail.value},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetShadow:function(t){this.shadow=t.detail.value},SetBorder:function(t){this.border=t.detail.value,t.detail.value||(this.bordersize=!1)},SetBorderSize:function(t){this.bordersize=t.detail.value}}};e.default=o}},[["3c60","common/runtime","common/vendor"]]]);
});
require('pages/basics/design.js');
__wxRoute = 'pages/basics/tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/tag.js';

define('pages/basics/tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/tag"],{7851:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{ColorList:this.ColorList}}};n.default=a},a32e:function(t,n,e){"use strict";e.r(n);var a=e("7851"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},caa4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},e705:function(t,n,e){"use strict";e.r(n);var a=e("caa4"),u=e("a32e");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports}},[["67f6","common/runtime","common/vendor"]]]);
});
require('pages/basics/tag.js');
__wxRoute = 'pages/basics/avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/avatar.js';

define('pages/basics/avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/avatar"],{"54f7":function(t,e,n){"use strict";n.r(e);var o=n("e52f"),i=n("c447");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},6677:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{ColorList:this.ColorList,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"]}}};e.default=o},c447:function(t,e,n){"use strict";n.r(e);var o=n("6677"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},e52f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["fee8","common/runtime","common/vendor"]]]);
});
require('pages/basics/avatar.js');
__wxRoute = 'pages/basics/progress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/progress.js';

define('pages/basics/progress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/progress"],{"007d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{ColorList:this.ColorList,color:"red",loading:!1,modalName:"",active:!1}},onLoad:function(){var t=this;setTimeout(function(){t.loading=!0},500)},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetActive:function(t){this.active=t.detail.value}}};n.default=o},3409:function(t,n,e){"use strict";e.r(n);var o=e("f042"),a=e("829f");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var u=e("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"829f":function(t,n,e){"use strict";e.r(n);var o=e("007d"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},f042:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["81c3","common/runtime","common/vendor"]]]);
});
require('pages/basics/progress.js');
__wxRoute = 'pages/basics/shadow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/shadow.js';

define('pages/basics/shadow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/shadow"],{"13fb":function(e,t,n){"use strict";n.r(t);var u=n("a7ff"),a=n("d012");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var f=n("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"9ee4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{size:!1}},methods:{SetSize:function(e){this.size=e.detail.value}}};t.default=u},a7ff:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},d012:function(e,t,n){"use strict";n.r(t);var u=n("9ee4"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a}},[["671f","common/runtime","common/vendor"]]]);
});
require('pages/basics/shadow.js');
__wxRoute = 'pages/basics/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/loading.js';

define('pages/basics/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/loading"],{"383e":function(o,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{CustomBar:this.CustomBar,isLoad:!1,loadModal:!1,loadProgress:0}},methods:{isLoading:function(o){this.isLoad=o.detail.value},LoadModal:function(o){var t=this;this.loadModal=!0,setTimeout(function(){t.loadModal=!1},2e3)},LoadProgress:function(o){var t=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){t.LoadProgress()},100):this.loadProgress=0}}};t.default=e},"4e7a":function(o,t,a){"use strict";a.r(t);var e=a("383e"),n=a.n(e);for(var r in e)"default"!==r&&function(o){a.d(t,o,function(){return e[o]})}(r);t["default"]=n.a},abf4:function(o,t,a){"use strict";a.r(t);var e=a("c5bf"),n=a("4e7a");for(var r in n)"default"!==r&&function(o){a.d(t,o,function(){return n[o]})}(r);var s=a("2877"),i=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,null,null);t["default"]=i.exports},c5bf:function(o,t,a){"use strict";var e=function(){var o=this,t=o.$createElement;o._self._c},n=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return n})}},[["50e4","common/runtime","common/vendor"]]]);
});
require('pages/basics/loading.js');
__wxRoute = 'pages/component/bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/bar.js';

define('pages/component/bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/bar"],{"12d1":function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return o})},5692:function(t,n,u){},"5ec6":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};n.default=e},d03f:function(t,n,u){"use strict";u.r(n);var e=u("12d1"),o=u("e172");for(var r in o)"default"!==r&&function(t){u.d(n,t,function(){return o[t]})}(r);u("d95e");var c=u("2877"),a=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=a.exports},d95e:function(t,n,u){"use strict";var e=u("5692"),o=u.n(e);o.a},e172:function(t,n,u){"use strict";u.r(n);var e=u("5ec6"),o=u.n(e);for(var r in e)"default"!==r&&function(t){u.d(n,t,function(){return e[t]})}(r);n["default"]=o.a}},[["0141","common/runtime","common/vendor"]]]);
});
require('pages/component/bar.js');
__wxRoute = 'pages/component/nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/nav.js';

define('pages/component/nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/nav"],{"2d97":function(t,n,e){"use strict";e.r(n);var a=e("45f9"),r=e("a7fa");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var o=e("2877"),f=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=f.exports},"3ebf":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};n.default=a},"45f9":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},a7fa:function(t,n,e){"use strict";e.r(n);var a=e("3ebf"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a}},[["9827","common/runtime","common/vendor"]]]);
});
require('pages/component/nav.js');
__wxRoute = 'pages/component/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/list.js';

define('pages/component/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/list"],{3272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},Gridchange:function(e){this.gridCol=e.detail.value},Gridswitch:function(e){this.gridBorder=e.detail.value},MenuBorder:function(e){this.menuBorder=e.detail.value},MenuArrow:function(e){this.menuArrow=e.detail.value},MenuCard:function(e){this.menuCard=e.detail.value},SwitchSex:function(e){this.skin=e.detail.value},ListTouchStart:function(e){this.listTouchStart=e.touches[0].pageX},ListTouchMove:function(e){this.listTouchDirection=e.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(e){"left"==this.listTouchDirection?this.modalName=e.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}}};t.default=o},"99e1":function(e,t,n){"use strict";var o=n("f627"),c=n.n(o);c.a},a98c:function(e,t,n){"use strict";n.r(t);var o=n("c78b"),c=n("c7a8");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("99e1");var i=n("2877"),u=Object(i["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},c78b:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},c7a8:function(e,t,n){"use strict";n.r(t);var o=n("3272"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},f627:function(e,t,n){}},[["b5d5","common/runtime","common/vendor"]]]);
});
require('pages/component/list.js');
__wxRoute = 'pages/component/card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/card.js';

define('pages/component/card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/card"],{"39d4":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{isCard:!1}},methods:{IsCard:function(n){this.isCard=n.detail.value}}};t.default=u},"9d10":function(n,t,e){"use strict";e.r(t);var u=e("39d4"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},f02a:function(n,t,e){"use strict";e.r(t);var u=e("f166"),r=e("9d10");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},f166:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["eb80","common/runtime","common/vendor"]]]);
});
require('pages/component/card.js');
__wxRoute = 'pages/component/form';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/form.js';

define('pages/component/form.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form"],{"2aef":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},5698:function(e,t,i){"use strict";var a=i("8172"),n=i.n(a);n.a},"617d":function(e,t,i){"use strict";i.r(t);var a=i("907b"),n=i.n(a);for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);t["default"]=n.a},8172:function(e,t,i){},"907b":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"],multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],objectMultiArray:[[{id:0,name:"无脊柱动物"},{id:1,name:"脊柱动物"}],[{id:0,name:"扁性动物"},{id:1,name:"线形动物"},{id:2,name:"环节动物"},{id:3,name:"软体动物"},{id:3,name:"节肢动物"}],[{id:0,name:"猪肉绦虫"},{id:1,name:"吸血虫"}]],multiIndex:[0,0,0],time:"12:01",date:"2018-12-25",region:["广东省","广州市","海珠区"],switchA:!1,switchB:!0,switchC:!1,switchD:!1,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""}},methods:{PickerChange:function(e){this.index=e.detail.value},MultiChange:function(e){this.multiIndex=e.detail.value},MultiColumnChange:function(e){var t={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(t.multiIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:switch(t.multiIndex[0]){case 0:t.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[1]=["鱼","两栖动物","爬行动物"],t.multiArray[2]=["鲫鱼","带鱼"];break}t.multiIndex[1]=0,t.multiIndex[2]=0;break;case 1:switch(t.multiIndex[0]){case 0:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[2]=["蛔虫"];break;case 2:t.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:t.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:t.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"];break}break;case 1:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["鲫鱼","带鱼"];break;case 1:t.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:t.multiArray[2]=["蜥蜴","龟","壁虎"];break}break}t.multiIndex[2]=0;break}this.multiArray=t.multiArray,this.multiIndex=t.multiIndex},TimeChange:function(e){this.time=e.detail.value},DateChange:function(e){this.date=e.detail.value},RegionChange:function(e){this.region=e.detail.value},SwitchA:function(e){this.switchA=e.detail.value},SwitchB:function(e){this.switchB=e.detail.value},SwitchC:function(e){this.switchC=e.detail.value},SwitchD:function(e){this.switchD=e.detail.value},RadioChange:function(e){this.radio=e.detail.value},CheckboxChange:function(e){for(var t=this.checkbox,i=e.detail.value,a=0,n=t.length;a<n;++a){t[a].checked=!1;for(var u=0,r=i.length;u<r;++u)if(t[a].value==i[u]){t[a].checked=!0;break}}},ChooseImage:function(){var t=this;e.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var i=this;e.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&i.imgList.splice(t.currentTarget.dataset.index,1)}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},textareaBInput:function(e){this.textareaBValue=e.detail.value}}};t.default=i}).call(this,i("6e42")["default"])},f0d0:function(e,t,i){"use strict";i.r(t);var a=i("2aef"),n=i("617d");for(var u in n)"default"!==u&&function(e){i.d(t,e,function(){return n[e]})}(u);i("5698");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["7eb8","common/runtime","common/vendor"]]]);
});
require('pages/component/form.js');
__wxRoute = 'pages/component/timeline';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/timeline.js';

define('pages/component/timeline.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/timeline"],{"2ab2":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},8439:function(n,t,e){"use strict";e.r(t);var u=e("2ab2"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},c5c1:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},f224:function(n,t,e){"use strict";e.r(t);var u=e("c5c1"),r=e("8439");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports}},[["9e4f","common/runtime","common/vendor"]]]);
});
require('pages/component/timeline.js');
__wxRoute = 'pages/component/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/chat.js';

define('pages/component/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/chat"],{"269f":function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return o})},"295f":function(t,n,u){},"56bd":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};n.default=e},9148:function(t,n,u){"use strict";u.r(n);var e=u("269f"),o=u("b30a");for(var r in o)"default"!==r&&function(t){u.d(n,t,function(){return o[t]})}(r);u("bce0");var a=u("2877"),c=Object(a["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},b30a:function(t,n,u){"use strict";u.r(n);var e=u("56bd"),o=u.n(e);for(var r in e)"default"!==r&&function(t){u.d(n,t,function(){return e[t]})}(r);n["default"]=o.a},bce0:function(t,n,u){"use strict";var e=u("295f"),o=u.n(e);o.a}},[["be71","common/runtime","common/vendor"]]]);
});
require('pages/component/chat.js');
__wxRoute = 'pages/component/swiper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/swiper.js';

define('pages/component/swiper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/swiper"],{"05c8":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:""}},onLoad:function(){this.TowerSwiper("swiperList")},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var i=this[t],e=0;e<i.length;e++)i[e].zIndex=parseInt(i.length/2)+1-Math.abs(e-parseInt(i.length/2)),i[e].mLeft=e-parseInt(i.length/2);this.swiperList=i},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var i=this.direction,e=this.swiperList;if("right"==i){for(var s=e[0].mLeft,n=e[0].zIndex,r=1;r<this.swiperList.length;r++)this.swiperList[r-1].mLeft=this.swiperList[r].mLeft,this.swiperList[r-1].zIndex=this.swiperList[r].zIndex;this.swiperList[e.length-1].mLeft=s,this.swiperList[e.length-1].zIndex=n}else{for(var o=e[e.length-1].mLeft,a=e[e.length-1].zIndex,l=this.swiperList.length-1;l>0;l--)this.swiperList[l].mLeft=this.swiperList[l-1].mLeft,this.swiperList[l].zIndex=this.swiperList[l-1].zIndex;this.swiperList[0].mLeft=o,this.swiperList[0].zIndex=a}this.direction="",this.swiperList=this.swiperList}}};i.default=s},"1cb3":function(t,i,e){},"2c27":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},n=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return n})},"348f":function(t,i,e){"use strict";e.r(i);var s=e("05c8"),n=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(i,t,function(){return s[t]})}(r);i["default"]=n.a},"8aa7":function(t,i,e){"use strict";e.r(i);var s=e("2c27"),n=e("348f");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("b3da");var o=e("2877"),a=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);i["default"]=a.exports},b3da:function(t,i,e){"use strict";var s=e("1cb3"),n=e.n(s);n.a}},[["1bc3","common/runtime","common/vendor"]]]);
});
require('pages/component/swiper.js');
__wxRoute = 'pages/component/modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/modal.js';

define('pages/component/modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/modal"],{"0408":function(e,t,a){"use strict";var n=a("b5ab"),o=a.n(n);o.a},"16c4":function(e,t,a){"use strict";a.r(t);var n=a("3e0d"),o=a("1e28");for(var u in o)"default"!==u&&function(e){a.d(t,e,function(){return o[e]})}(u);a("0408");var c=a("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},"1e28":function(e,t,a){"use strict";a.r(t);var n=a("4ab7"),o=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=o.a},"3e0d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"4ab7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{CustomBar:this.CustomBar,modalName:null,radio:"radio1",checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}]}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},ChooseCheckbox:function(e){for(var t=this.checkbox,a=e.currentTarget.dataset.value,n=0,o=t.length;n<o;++n)if(t[n].value==a){t[n].checked=!t[n].checked;break}}}};t.default=n},b5ab:function(e,t,a){}},[["e996","common/runtime","common/vendor"]]]);
});
require('pages/component/modal.js');
__wxRoute = 'pages/component/steps';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/steps.js';

define('pages/component/steps.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/steps"],{"4bb7":function(n,t,s){"use strict";s.r(t);var e=s("d093"),u=s("4fa8");for(var c in u)"default"!==c&&function(n){s.d(t,n,function(){return u[n]})}(c);var i=s("2877"),o=Object(i["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},"4fa8":function(n,t,s){"use strict";s.r(t);var e=s("e551"),u=s.n(e);for(var c in e)"default"!==c&&function(n){s.d(t,n,function(){return e[n]})}(c);t["default"]=u.a},d093:function(n,t,s){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];s.d(t,"a",function(){return e}),s.d(t,"b",function(){return u})},e551:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{basicsList:[{cuIcon:"usefullfill",name:"开始"},{cuIcon:"radioboxfill",name:"等待"},{cuIcon:"roundclosefill",name:"错误"},{cuIcon:"roundcheckfill",name:"完成"}],basics:0,numList:[{name:"开始"},{name:"等待"},{name:"错误"},{name:"完成"}],num:0,scroll:0}},methods:{BasicsSteps:function(){this.basics=this.basics==this.basicsList.length-1?0:this.basics+1},NumSteps:function(){this.num=this.num==this.numList.length-1?0:this.num+1},ScrollSteps:function(){this.scroll=9==this.scroll?0:this.scroll+1}}};t.default=e}},[["72c9","common/runtime","common/vendor"]]]);
});
require('pages/component/steps.js');
__wxRoute = 'pages/plugin/indexes';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/indexes.js';

define('pages/plugin/indexes.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/indexes"],{3286:function(t,n,e){"use strict";e.r(n);var i=e("8965"),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=r.a},"42a7":function(t,n,e){"use strict";e.r(n);var i=e("b291"),r=e("3286");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("752d");var s=e("2877"),o=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},"590d":function(t,n,e){},"752d":function(t,n,e){"use strict";var i=e("590d"),r=e.n(i);r.a},8965:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:""}},onLoad:function(){for(var t=[{}],n=0;n<26;n++)t[n]={},t[n].name=String.fromCharCode(65+n);this.list=t,this.listCur=t[0]},onReady:function(){var n=this;t.createSelectorQuery().select(".indexBar-box").boundingClientRect(function(t){n.boxTop=t.top}).exec(),t.createSelectorQuery().select(".indexes").boundingClientRect(function(t){n.barTop=t.top}).exec()},methods:{getCur:function(t){this.hidden=!1,this.listCur=this.list[t.target.id].name},setCur:function(t){this.hidden=!0,this.listCur=this.listCur},tMove:function(t){var n=t.touches[0].clientY,e=this.boxTop,i=this;if(n>e){var r=parseInt((n-e)/20);this.listCur=i.list[r].name}},tStart:function(){this.hidden=!1},tEnd:function(){this.hidden=!0,this.listCurID=this.listCur},indexSelect:function(t){for(var n=this,e=this.barHeight,i=this.list,r=Math.ceil(i.length*t.detail.y/e),u=0;u<i.length;u++)if(r<u+1)return n.listCur=i[u].name,n.movableY=20*u,!1}}};n.default=e}).call(this,e("6e42")["default"])},b291:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})}},[["6a0e","common/runtime","common/vendor"]]]);
});
require('pages/plugin/indexes.js');
__wxRoute = 'pages/plugin/animation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/animation.js';

define('pages/plugin/animation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/animation"],{1032:function(e,n,t){"use strict";t.r(n);var o=t("54d0"),a=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=a.a},"460a":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},"54d0":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(e){var n=this,t=e.currentTarget.dataset.class;this.animation=t,setTimeout(function(){n.animation=""},1e3)},ToggleDelay:function(){var e=this;this.toggleDelay=!0,setTimeout(function(){e.toggleDelay=!1},1e3)}}};n.default=o},7627:function(e,n,t){"use strict";var o=t("f0d6"),a=t.n(o);a.a},eb9f:function(e,n,t){"use strict";t.r(n);var o=t("460a"),a=t("1032");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);t("7627");var i=t("2877"),l=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=l.exports},f0d6:function(e,n,t){}},[["ca2c","common/runtime","common/vendor"]]]);
});
require('pages/plugin/animation.js');
__wxRoute = 'pages/plugin/drawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/drawer.js';

define('pages/plugin/drawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/drawer"],{"0e79":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},4520:function(t,n,e){},"4afd":function(t,n,e){"use strict";var a=e("4520"),r=e.n(a);r.a},"9f2f":function(t,n,e){"use strict";e.r(n);var a=e("0e79"),r=e("bc33");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("4afd");var o=e("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},bc33:function(t,n,e){"use strict";e.r(n);var a=e("d2f8"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a},d2f8:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{modalName:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};n.default=a}},[["8d0b","common/runtime","common/vendor"]]]);
});
require('pages/plugin/drawer.js');
__wxRoute = 'pages/plugin/verticalnav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/verticalnav.js';

define('pages/plugin/verticalnav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/verticalnav"],{"0135":function(t,i,e){"use strict";e.r(i);var a=e("f81c"),n=e("30b2");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("cf33");var o=e("2877"),u=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);i["default"]=u.exports},"30b2":function(t,i,e){"use strict";e.r(i);var a=e("a0d0"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a},"5ebe":function(t,i,e){},a0d0:function(t,i,e){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});for(var i=[{}],e=0;e<26;e++)i[e]={},i[e].name=String.fromCharCode(65+e),i[e].id=e;this.list=i,this.listCur=i[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(i){var a=this,n=0;if(this.load){for(var r=function(i){var e=t.createSelectorQuery().select("#main-"+a.list[i].id);e.fields({size:!0},function(t){a.list[i].top=n,n+=t.height,a.list[i].bottom=n}).exec()},o=0;o<this.list.length;o++)r(o);this.load=!1}var u=i.detail.scrollTop+10;for(o=0;o<this.list.length;o++)if(u>this.list[o].top&&u<this.list[o].bottom)return this.verticalNavTop=50*(this.list[o].id-1),this.tabCur=this.list[o].id,console.log(e(u," at pages\\plugin\\verticalnav.vue:171")),!1}}};i.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},cf33:function(t,i,e){"use strict";var a=e("5ebe"),n=e.n(a);n.a},f81c:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})}},[["9a20","common/runtime","common/vendor"]]]);
});
require('pages/plugin/verticalnav.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

