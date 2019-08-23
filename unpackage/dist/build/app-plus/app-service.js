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
Z([3,'50aa7231'])
Z([3,'_view M50aa7231'])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
Z([a,[3,'_view M50aa7231 cu-bar fixed '],[[4],[[5],[[5],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]]])
Z([a,[3,' '],[[7],[3,'style']]])
Z([[7],[3,'isBack']])
Z([3,'handleProxy'])
Z([3,'_view M50aa7231 action'])
Z([[7],[3,'$k']])
Z([1,'50aa7231-0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotbackText']],[1,'backText']])
Z(z[12])
Z([[2,'||'],[[7],[3,'$slotcontent']],[1,'content']])
Z(z[12])
Z([[2,'||'],[[7],[3,'$slotright']],[1,'right']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5d8833cc'])
Z([[6],[[7],[3,'options']],[3,'title']])
Z([3,'handleProxy'])
Z([3,'_view M5d8833cc cu-item shadow'])
Z([[7],[3,'$k']])
Z([1,'5d8833cc-0'])
Z([3,'_view M5d8833cc content'])
Z([[6],[[7],[3,'options']],[3,'image_url']])
Z([3,'i'])
Z([3,'source'])
Z([[6],[[7],[3,'options']],[3,'image_list']])
Z(z[8])
Z(z[10])
Z([[2,'!'],[[6],[[7],[3,'options']],[3,'image_list']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'543cfee6'])
Z([3,'_view M543cfee6 navTabBox solid-bottom'])
Z([[2,'<='],[[6],[[7],[3,'tabBars']],[3,'length']],[1,5]])
Z([[2,'>'],[[6],[[7],[3,'tabBars']],[3,'length']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8031c5c0'])
Z([a,[3,'_view M8031c5c0 refresh '],[[2,'?:'],[[2,'=='],[[7],[3,'isEnd']],[1,2]],[1,'animationSmall'],[1,'']]])
Z([a,[3,' '],[[7],[3,'isZoom']]])
Z([[2,'=='],[[7],[3,'isEnd']],[1,0]])
Z([[2,'=='],[[7],[3,'isEnd']],[1,1]])
Z([[2,'=='],[[7],[3,'isEnd']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'48e755f4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4f2a6abe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2ea99d5c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'M56bc0dc3-default-56bc0dc3-0'])
Z([3,'M56bc0dc3-backText-56bc0dc3-0'])
Z([3,'M56bc0dc3-content-56bc0dc3-0'])
Z([3,'M11e71972-default-11e71972-0'])
Z([3,'M11e71972-backText-11e71972-0'])
Z([3,'M11e71972-content-11e71972-0'])
Z([3,'M3f382152-default-3f382152-0'])
Z([3,'M3f382152-backText-3f382152-0'])
Z([3,'M3f382152-content-3f382152-0'])
Z([3,'M3f3d2a06-default-3f3d2a06-0'])
Z([3,'M3f3d2a06-backText-3f3d2a06-0'])
Z([3,'M3f3d2a06-content-3f3d2a06-0'])
Z([3,'M494ad457-default-494ad457-0'])
Z([3,'M494ad457-backText-494ad457-0'])
Z([3,'M494ad457-content-494ad457-0'])
Z([3,'M46c339cb-default-46c339cb-0'])
Z([3,'M46c339cb-backText-46c339cb-0'])
Z([3,'M46c339cb-content-46c339cb-0'])
Z([3,'M128e5ba1-default-128e5ba1-0'])
Z([3,'M128e5ba1-backText-128e5ba1-0'])
Z([3,'M128e5ba1-content-128e5ba1-0'])
Z([3,'M4513d3f2-default-4513d3f2-0'])
Z([3,'M4513d3f2-backText-4513d3f2-0'])
Z([3,'M4513d3f2-content-4513d3f2-0'])
Z([3,'Mad88daf4-default-ad88daf4-0'])
Z([3,'Mad88daf4-backText-ad88daf4-0'])
Z([3,'Mad88daf4-content-ad88daf4-0'])
Z([3,'M63058bb9-default-63058bb9-0'])
Z([3,'M63058bb9-backText-63058bb9-0'])
Z([3,'M63058bb9-content-63058bb9-0'])
Z([3,'Md15bbc7a-default-d15bbc7a-0'])
Z([3,'Md15bbc7a-backText-d15bbc7a-0'])
Z([3,'Md15bbc7a-content-d15bbc7a-0'])
Z([3,'Md15bbc7a-right-d15bbc7a-0'])
Z([3,'M0b611960-default-0b611960-0'])
Z([3,'M0b611960-backText-0b611960-0'])
Z([3,'M0b611960-content-0b611960-0'])
Z([3,'M4fa3a101-default-4fa3a101-0'])
Z([3,'M4fa3a101-backText-4fa3a101-0'])
Z([3,'M4fa3a101-content-4fa3a101-0'])
Z([3,'M4f9f6b73-default-4f9f6b73-0'])
Z([3,'M4f9f6b73-backText-4f9f6b73-0'])
Z([3,'M4f9f6b73-content-4f9f6b73-0'])
Z([3,'M4fa0fd27-default-4fa0fd27-0'])
Z([3,'M4fa0fd27-backText-4fa0fd27-0'])
Z([3,'M4fa0fd27-content-4fa0fd27-0'])
Z([3,'M51b649b8-default-51b649b8-0'])
Z([3,'M51b649b8-backText-51b649b8-0'])
Z([3,'M51b649b8-content-51b649b8-0'])
Z([3,'M0b60bf40-default-0b60bf40-0'])
Z([3,'M0b60bf40-backText-0b60bf40-0'])
Z([3,'M0b60bf40-content-0b60bf40-0'])
Z([3,'M4f9f83bb-default-4f9f83bb-0'])
Z([3,'M4f9f83bb-backText-4f9f83bb-0'])
Z([3,'M4f9f83bb-content-4f9f83bb-0'])
Z([3,'M01f20c1b-default-01f20c1b-0'])
Z([3,'M01f20c1b-backText-01f20c1b-0'])
Z([3,'M01f20c1b-content-01f20c1b-0'])
Z([3,'Mb63dd2ac-default-b63dd2ac-0'])
Z([3,'Mb63dd2ac-backText-b63dd2ac-0'])
Z([3,'Mb63dd2ac-content-b63dd2ac-0'])
Z([3,'Mb59021b8-default-b59021b8-0'])
Z([3,'Mb59021b8-backText-b59021b8-0'])
Z([3,'Mb59021b8-content-b59021b8-0'])
Z([3,'M4ad438b5-default-4ad438b5-0'])
Z([3,'M4ad438b5-backText-4ad438b5-0'])
Z([3,'M4ad438b5-content-4ad438b5-0'])
Z([3,'M7085294a-default-7085294a-0'])
Z([3,'M7085294a-content-7085294a-0'])
Z([3,'M2596d9bc-default-2596d9bc-0'])
Z([3,'M2596d9bc-backText-2596d9bc-0'])
Z([3,'M2596d9bc-content-2596d9bc-0'])
Z([3,'M5d31be9c-default-5d31be9c-0'])
Z([3,'M5d31be9c-backText-5d31be9c-0'])
Z([3,'M5d31be9c-content-5d31be9c-0'])
Z([3,'M596df1f9-default-596df1f9-0'])
Z([3,'M596df1f9-backText-596df1f9-0'])
Z([3,'M596df1f9-content-596df1f9-0'])
Z([3,'M45c56fe4-default-45c56fe4-0'])
Z([3,'M45c56fe4-backText-45c56fe4-0'])
Z([3,'M45c56fe4-content-45c56fe4-0'])
Z([3,'M3eeaa084-default-3eeaa084-0'])
Z([3,'M3eeaa084-backText-3eeaa084-0'])
Z([3,'M3eeaa084-content-3eeaa084-0'])
Z([3,'M5c76df44-default-5c76df44-0'])
Z([3,'M5c76df44-backText-5c76df44-0'])
Z([3,'M5c76df44-content-5c76df44-0'])
Z([3,'M9066649c-default-9066649c-0'])
Z([3,'M9066649c-backText-9066649c-0'])
Z([3,'M9066649c-content-9066649c-0'])
Z([3,'M360dd6b8-default-360dd6b8-0'])
Z([3,'M360dd6b8-backText-360dd6b8-0'])
Z([3,'M360dd6b8-content-360dd6b8-0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4513d3f2'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4513d3f2-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4513d3f2-default-4513d3f2-0']]],[[8],'$slotbackText',[1,'M4513d3f2-backText-4513d3f2-0']]],[[8],'$slotcontent',[1,'M4513d3f2-content-4513d3f2-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4513d3f2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'11e71972'])
Z([3,'_view M11e71972'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'11e71972-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M11e71972-default-11e71972-0']]],[[8],'$slotbackText',[1,'M11e71972-backText-11e71972-0']]],[[8],'$slotcontent',[1,'M11e71972-content-11e71972-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'<'],[[7],[3,'index']],[1,12]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'11e71972'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'46c339cb'])
Z([3,'_view M46c339cb'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'46c339cb-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M46c339cb-default-46c339cb-0']]],[[8],'$slotbackText',[1,'M46c339cb-backText-46c339cb-0']]],[[8],'$slotcontent',[1,'M46c339cb-content-46c339cb-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'46c339cb'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'494ad457'])
Z([3,'_view M494ad457'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'494ad457-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M494ad457-default-494ad457-0']]],[[8],'$slotbackText',[1,'M494ad457-backText-494ad457-0']]],[[8],'$slotcontent',[1,'M494ad457-content-494ad457-0']]])
Z([3,'50aa7231'])
Z([[7],[3,'color']])
Z([[7],[3,'border']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[7])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'494ad457'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3f37d9b8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3f382152'])
Z([3,'_view M3f382152'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3f382152-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M3f382152-default-3f382152-0']]],[[8],'$slotbackText',[1,'M3f382152-backText-3f382152-0']]],[[8],'$slotcontent',[1,'M3f382152-content-3f382152-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cuIcon']])
Z(z[5])
Z([[6],[[7],[3,'item']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3f382152'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'56bc0dc3'])
Z([3,'_view M56bc0dc3'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'56bc0dc3-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M56bc0dc3-default-56bc0dc3-0']]],[[8],'$slotbackText',[1,'M56bc0dc3-backText-56bc0dc3-0']]],[[8],'$slotcontent',[1,'M56bc0dc3-content-56bc0dc3-0']]])
Z([3,'50aa7231'])
Z([[2,'=='],[[7],[3,'TabCur']],[1,0]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,1]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'56bc0dc3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d15bbc7a'])
Z([3,'_view Md15bbc7a'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'d15bbc7a-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'Md15bbc7a-default-d15bbc7a-0']]],[[8],'$slotbackText',[1,'Md15bbc7a-backText-d15bbc7a-0']]],[[8],'$slotcontent',[1,'Md15bbc7a-content-d15bbc7a-0']]],[[8],'$slotright',[1,'Md15bbc7a-right-d15bbc7a-0']]])
Z([3,'50aa7231'])
Z([[7],[3,'loadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'d15bbc7a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ad88daf4'])
Z([3,'_view Mad88daf4'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'ad88daf4-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'Mad88daf4-default-ad88daf4-0']]],[[8],'$slotbackText',[1,'Mad88daf4-backText-ad88daf4-0']]],[[8],'$slotcontent',[1,'Mad88daf4-content-ad88daf4-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'ColorList']])
Z(z[5])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ad88daf4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'63058bb9'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'63058bb9-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M63058bb9-default-63058bb9-0']]],[[8],'$slotbackText',[1,'M63058bb9-backText-63058bb9-0']]],[[8],'$slotcontent',[1,'M63058bb9-content-63058bb9-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'63058bb9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'128e5ba1'])
Z([3,'_view M128e5ba1'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'128e5ba1-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M128e5ba1-default-128e5ba1-0']]],[[8],'$slotbackText',[1,'M128e5ba1-backText-128e5ba1-0']]],[[8],'$slotcontent',[1,'M128e5ba1-content-128e5ba1-0']]])
Z([3,'50aa7231'])
Z([3,'_view M128e5ba1 padding-sm flex flex-wrap'])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'128e5ba1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3f3d2a06'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3f3d2a06-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M3f3d2a06-default-3f3d2a06-0']]],[[8],'$slotbackText',[1,'M3f3d2a06-backText-3f3d2a06-0']]],[[8],'$slotcontent',[1,'M3f3d2a06-content-3f3d2a06-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3f3d2a06'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b611960'])
Z([3,'_view M0b611960'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0b611960-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M0b611960-default-0b611960-0']]],[[8],'$slotbackText',[1,'M0b611960-backText-0b611960-0']]],[[8],'$slotcontent',[1,'M0b611960-content-0b611960-0']]])
Z([3,'50aa7231'])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b611960'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4f9f6b73'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4f9f6b73-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4f9f6b73-default-4f9f6b73-0']]],[[8],'$slotbackText',[1,'M4f9f6b73-backText-4f9f6b73-0']]],[[8],'$slotcontent',[1,'M4f9f6b73-content-4f9f6b73-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4f9f6b73'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4f9f83bb'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4f9f83bb-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4f9f83bb-default-4f9f83bb-0']]],[[8],'$slotbackText',[1,'M4f9f83bb-backText-4f9f83bb-0']]],[[8],'$slotcontent',[1,'M4f9f83bb-content-4f9f83bb-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4f9f83bb'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4fa0fd27'])
Z([3,'_view M4fa0fd27'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4fa0fd27-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4fa0fd27-default-4fa0fd27-0']]],[[8],'$slotbackText',[1,'M4fa0fd27-backText-4fa0fd27-0']]],[[8],'$slotcontent',[1,'M4fa0fd27-content-4fa0fd27-0']]])
Z([3,'50aa7231'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4fa0fd27'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4fa1e542'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4fa3a101'])
Z([a,[3,'_scroll-view M4fa3a101 page '],[[2,'?:'],[[2,'!='],[[7],[3,'modalName']],[1,null]],[1,'show'],[1,'']]])
Z([[2,'=='],[[7],[3,'modalName']],[1,null]])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4fa3a101-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4fa3a101-default-4fa3a101-0']]],[[8],'$slotbackText',[1,'M4fa3a101-backText-4fa3a101-0']]],[[8],'$slotcontent',[1,'M4fa3a101-content-4fa3a101-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cuIconList']])
Z(z[6])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4fa3a101'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b63dd2ac'])
Z([3,'_view Mb63dd2ac'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'b63dd2ac-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'Mb63dd2ac-default-b63dd2ac-0']]],[[8],'$slotbackText',[1,'Mb63dd2ac-backText-b63dd2ac-0']]],[[8],'$slotcontent',[1,'Mb63dd2ac-content-b63dd2ac-0']]])
Z([3,'50aa7231'])
Z([3,'handleProxy'])
Z([a,[3,'_view Mb63dd2ac cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'ChooseModal']],[1,'show'],[1,'']]])
Z([[7],[3,'$k']])
Z([1,'b63dd2ac-25'])
Z(z[5])
Z([3,'_view Mb63dd2ac cu-dialog'])
Z(z[7])
Z([1,'b63dd2ac-24'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'checkbox']])
Z(z[13])
Z(z[5])
Z([a,[3,'_button Mb63dd2ac cu-btn orange lg block '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'bg-orange'],[1,'line-orange']]])
Z(z[7])
Z([[2,'+'],[1,'b63dd2ac-23-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'hot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b63dd2ac'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b60bf40'])
Z([3,'_view M0b60bf40'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0b60bf40-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M0b60bf40-default-0b60bf40-0']]],[[8],'$slotbackText',[1,'M0b60bf40-backText-0b60bf40-0']]],[[8],'$slotcontent',[1,'M0b60bf40-content-0b60bf40-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([1,10])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b60bf40'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b59021b8'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'b59021b8-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'Mb59021b8-default-b59021b8-0']]],[[8],'$slotbackText',[1,'Mb59021b8-backText-b59021b8-0']]],[[8],'$slotcontent',[1,'Mb59021b8-content-b59021b8-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b59021b8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'01f20c1b'])
Z([3,'_view M01f20c1b'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'01f20c1b-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M01f20c1b-default-01f20c1b-0']]],[[8],'$slotbackText',[1,'M01f20c1b-backText-01f20c1b-0']]],[[8],'$slotcontent',[1,'M01f20c1b-content-01f20c1b-0']]])
Z([3,'50aa7231'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[5])
Z([3,'_swiper-item M01f20c1b'])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z([1,true])
Z([3,'handleProxy'])
Z(z[13])
Z([a,[3,'_swiper M01f20c1b card-swiper '],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]])
Z([[7],[3,'$k']])
Z([1,'01f20c1b-1'])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[13])
Z([3,'5000'])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z([3,'_view M01f20c1b swiper-item'])
Z(z[11])
Z(z[12])
Z(z[14])
Z(z[14])
Z(z[14])
Z([3,'_view M01f20c1b tower-swiper'])
Z(z[17])
Z([1,'01f20c1b-2'])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[5])
Z(z[28])
Z(z[11])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'01f20c1b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'51b649b8'])
Z([3,'bg-gradual-pink'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'51b649b8-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M51b649b8-default-51b649b8-0']]],[[8],'$slotbackText',[1,'M51b649b8-backText-51b649b8-0']]],[[8],'$slotcontent',[1,'M51b649b8-content-51b649b8-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'51b649b8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4fb97c64'])
Z([3,'_view M4fb97c64'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'basics']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4fb97c64-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3f37d9b8'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'component']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4fb97c64-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4fa1e542'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'plugin']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4fb97c64-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7085294a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4fb97c64'])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3ed3a378'])
Z([3,'_view M3ed3a378'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'homepage']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3ed3a378-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'45c56fe4'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'aboutpage']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3ed3a378-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'126e8dc0'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'searchpage']])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'postpage']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3ed3a378-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3eeaa084'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'mypage']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3ed3a378-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5c76df44'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3ed3a378'])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'126e8dc0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'126e8dc0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'45c56fe4'])
Z([3,'_view M45c56fe4'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'45c56fe4-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M45c56fe4-default-45c56fe4-0']]],[[8],'$slotbackText',[1,'M45c56fe4-backText-45c56fe4-0']]],[[8],'$slotcontent',[1,'M45c56fe4-content-45c56fe4-0']]])
Z([3,'50aa7231'])
Z([1,true])
Z([3,'handleProxy'])
Z(z[4])
Z([a,[3,'_swiper M45c56fe4 card-swiper '],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]])
Z([[7],[3,'$k']])
Z([1,'45c56fe4-1'])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[4])
Z([3,'5000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[15])
Z(z[5])
Z([a,[3,'_swiper-item M45c56fe4 '],[[2,'?:'],[[2,'=='],[[7],[3,'cardCur']],[[7],[3,'index']]],[1,'cur'],[1,'']]])
Z(z[8])
Z([[2,'+'],[1,'45c56fe4-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view M45c56fe4 swiper-item'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z(z[15])
Z(z[16])
Z([[7],[3,'cuIconList']])
Z(z[15])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z(z[5])
Z([3,'_view M45c56fe4 cu-item'])
Z(z[8])
Z([[2,'+'],[1,'45c56fe4-7-'],[[7],[3,'index']]])
Z(z[23])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'45c56fe4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'19b32d88'])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'19b32d88'])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'360dd6b8'])
Z([3,'handleProxy'])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'_view M360dd6b8 pagecontent'])
Z([[7],[3,'$k']])
Z([1,'360dd6b8-3'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'360dd6b8-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M360dd6b8-default-360dd6b8-0']]],[[8],'$slotbackText',[1,'M360dd6b8-backText-360dd6b8-0']]],[[8],'$slotcontent',[1,'M360dd6b8-content-360dd6b8-0']]])
Z([3,'50aa7231'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'360dd6b8-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8031c5c0'])
Z([3,'refresh'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'360dd6b8-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'543cfee6'])
Z([3,'navTab'])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'_swiper M360dd6b8'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'360dd6b8-2'])
Z([1,400])
Z([3,'min-height: 100vh;'])
Z([3,'listIndex'])
Z([3,'listItem'])
Z([[7],[3,'list']])
Z(z[25])
Z(z[1])
Z([3,'_scroll-view M360dd6b8'])
Z(z[6])
Z([[2,'+'],[1,'360dd6b8-1-'],[[7],[3,'listIndex']]])
Z([3,'true'])
Z([3,'height: 100%;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listItem']])
Z(z[35])
Z([[2,'>'],[[6],[[7],[3,'listItem']],[3,'length']],[1,0]])
Z(z[1])
Z(z[1])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'360dd6b8-3-']],[[7],[3,'listIndex']]],[1,'-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'360dd6b8-0-'],[[7],[3,'listIndex']]],[1,'-']],[[7],[3,'index']]])
Z([3,'5d8833cc'])
Z([[2,'==='],[[6],[[7],[3,'listItem']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'360dd6b8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5c76df44'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5c76df44-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M5c76df44-default-5c76df44-0']]],[[8],'$slotbackText',[1,'M5c76df44-backText-5c76df44-0']]],[[8],'$slotcontent',[1,'M5c76df44-content-5c76df44-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5c76df44'])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9066649c'])
Z([3,'_view M9066649c'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9066649c-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M9066649c-default-9066649c-0']]],[[8],'$slotbackText',[1,'M9066649c-backText-9066649c-0']]],[[8],'$slotcontent',[1,'M9066649c-content-9066649c-0']]])
Z([3,'50aa7231'])
Z([3,'width: 200rpx; height: 200rpx; border-radius: 100%;'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9066649c-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'9066649c-0'])
Z([3,'2ea99d5c'])
Z([3,'200rpx'])
Z(z[10])
Z([3,'划线价显示'])
Z([3,'价格显示'])
Z([3,'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'])
Z([3,'标题文本'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9066649c-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[14])
Z([3,'4f2a6abe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9066649c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3eeaa084'])
Z([3,'_view M3eeaa084'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3eeaa084-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M3eeaa084-default-3eeaa084-0']]],[[8],'$slotbackText',[1,'M3eeaa084-backText-3eeaa084-0']]],[[8],'$slotcontent',[1,'M3eeaa084-content-3eeaa084-0']]])
Z([3,'50aa7231'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3eeaa084'])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'12fe765a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'12fe765a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'596df1f9'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'596df1f9-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M596df1f9-default-596df1f9-0']]],[[8],'$slotbackText',[1,'M596df1f9-backText-596df1f9-0']]],[[8],'$slotcontent',[1,'M596df1f9-content-596df1f9-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'596df1f9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5d31be9c'])
Z([3,'bg-gradual-blue'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5d31be9c-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M5d31be9c-default-5d31be9c-0']]],[[8],'$slotbackText',[1,'M5d31be9c-backText-5d31be9c-0']]],[[8],'$slotcontent',[1,'M5d31be9c-content-5d31be9c-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5d31be9c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7085294a'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'])
Z([[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7085294a-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M7085294a-default-7085294a-0']]],[[8],'$slotcontent',[1,'M7085294a-content-7085294a-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4ad438b5'])
Z([3,'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4ad438b5-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M4ad438b5-default-4ad438b5-0']]],[[8],'$slotbackText',[1,'M4ad438b5-backText-4ad438b5-0']]],[[8],'$slotcontent',[1,'M4ad438b5-content-4ad438b5-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4ad438b5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2596d9bc'])
Z([3,'bg-shadeTop text-white'])
Z([[9],[[9],[[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2596d9bc-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'M2596d9bc-default-2596d9bc-0']]],[[8],'$slotbackText',[1,'M2596d9bc-backText-2596d9bc-0']]],[[8],'$slotcontent',[1,'M2596d9bc-content-2596d9bc-0']]])
Z([3,'50aa7231'])
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2596d9bc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.vue.wxml','/common/slots.wxml','./colorui/components/medialist/mediaList.vue.wxml','./colorui/components/navTab.vue.wxml','./colorui/components/refresh.vue.wxml','./colorui/components/uni-icon/uni-icon.vue.wxml','./colorui/components/wm-poster/wm-poster.vue.wxml','./colorui/components/yq-avatar/yq-avatar.vue.wxml','./common/slots.wxml','/colorui/components/cu-custom.vue.wxml','/colorui/components/yq-avatar/yq-avatar.vue.wxml','/colorui/components/wm-poster/wm-poster.vue.wxml','/colorui/components/refresh.vue.wxml','/colorui/components/navTab.vue.wxml','/colorui/components/medialist/mediaList.vue.wxml','/pages/main_page/home/home.vue.wxml','/pages/main_page/about/about.vue.wxml','/pages/main_page/post/post.vue.wxml','/pages/main_page/my/my.vue.wxml','/pages/basics/home.vue.wxml','/pages/component/home.vue.wxml','/pages/plugin/home.vue.wxml','./pages/basics/avatar.vue.wxml','./pages/basics/avatar.wxml','./avatar.vue.wxml','./pages/basics/background.vue.wxml','./pages/basics/background.wxml','./background.vue.wxml','./pages/basics/button.vue.wxml','./pages/basics/button.wxml','./button.vue.wxml','./pages/basics/design.vue.wxml','./pages/basics/design.wxml','./design.vue.wxml','./pages/basics/home.vue.wxml','./pages/basics/icon.vue.wxml','./pages/basics/icon.wxml','./icon.vue.wxml','./pages/basics/layout.vue.wxml','./pages/basics/layout.wxml','./layout.vue.wxml','./pages/basics/loading.vue.wxml','./pages/basics/loading.wxml','./loading.vue.wxml','./pages/basics/progress.vue.wxml','./pages/basics/progress.wxml','./progress.vue.wxml','./pages/basics/shadow.vue.wxml','./pages/basics/shadow.wxml','./shadow.vue.wxml','./pages/basics/tag.vue.wxml','./pages/basics/tag.wxml','./tag.vue.wxml','./pages/basics/text.vue.wxml','./pages/basics/text.wxml','./text.vue.wxml','./pages/component/bar.vue.wxml','./pages/component/bar.wxml','./bar.vue.wxml','./pages/component/card.vue.wxml','./pages/component/card.wxml','./card.vue.wxml','./pages/component/chat.vue.wxml','./pages/component/chat.wxml','./chat.vue.wxml','./pages/component/form.vue.wxml','./pages/component/form.wxml','./form.vue.wxml','./pages/component/home.vue.wxml','./pages/component/list.vue.wxml','./pages/component/list.wxml','./list.vue.wxml','./pages/component/modal.vue.wxml','./pages/component/modal.wxml','./modal.vue.wxml','./pages/component/nav.vue.wxml','./pages/component/nav.wxml','./nav.vue.wxml','./pages/component/steps.vue.wxml','./pages/component/steps.wxml','./steps.vue.wxml','./pages/component/swiper.vue.wxml','./pages/component/swiper.wxml','./swiper.vue.wxml','./pages/component/timeline.vue.wxml','./pages/component/timeline.wxml','./timeline.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/main/home.vue.wxml','./pages/main/home.wxml','./home.vue.wxml','./pages/main_page/about/about.vue.wxml','./pages/main_page/about/about.wxml','./about.vue.wxml','./pages/main_page/home/home.vue.wxml','./pages/main_page/home/home.wxml','./pages/main_page/homelist/detail/detail.vue.wxml','./pages/main_page/homelist/detail/detail.wxml','./detail.vue.wxml','./pages/main_page/homelist/homelist.vue.wxml','./pages/main_page/homelist/homelist.wxml','./homelist.vue.wxml','./pages/main_page/my/my.vue.wxml','./pages/main_page/my/my.wxml','./my.vue.wxml','./pages/main_page/myset/myset.vue.wxml','./pages/main_page/myset/myset.wxml','./myset.vue.wxml','./pages/main_page/post/post.vue.wxml','./pages/main_page/post/post.wxml','./post.vue.wxml','./pages/main_page/video/index.vue.wxml','./pages/main_page/video/index.wxml','./pages/plugin/animation.vue.wxml','./pages/plugin/animation.wxml','./animation.vue.wxml','./pages/plugin/drawer.vue.wxml','./pages/plugin/drawer.wxml','./drawer.vue.wxml','./pages/plugin/home.vue.wxml','./pages/plugin/indexes.vue.wxml','./pages/plugin/indexes.wxml','./indexes.vue.wxml','./pages/plugin/verticalnav.vue.wxml','./pages/plugin/verticalnav.wxml','./verticalnav.vue.wxml'];d_[x[0]]={}
d_[x[0]]["50aa7231"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':50aa7231'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
var fE=_mz(z,'view',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_v()
_(fE,cF)
var hG=_oz(z,13,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],1,655)
_(oD,fE)
}
var oJ=_v()
_(xC,oJ)
var lK=_oz(z,15,e,s,gg)
var aL=_gd(x[0],lK,e_,d_)
if(aL){
var tM=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[0],1,853)
var eN=_v()
_(xC,eN)
var bO=_oz(z,17,e,s,gg)
var oP=_gd(x[0],bO,e_,d_)
if(oP){
var xQ=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[0],1,962)
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["backText"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':backText'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["content"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':content'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["right"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':right'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/cu-custom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["5d8833cc"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':5d8833cc'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/medialist/mediaList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',6,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
}
var hG=_v()
_(oD,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,12,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,10,oH,e,s,gg,hG,'source','i','i')
var cF=_v()
_(oD,cF)
if(_oz(z,13,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["543cfee6"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':543cfee6'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/navTab.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["8031c5c0"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':8031c5c0'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/refresh.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
d_[x[5]]["48e755f4"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[5]+':48e755f4'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/uni-icon/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["4f2a6abe"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[6]+':4f2a6abe'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/wm-poster/wm-poster.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["2ea99d5c"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[7]+':2ea99d5c'
r.wxVkey=b
gg.f=$gdc(f_["./colorui/components/yq-avatar/yq-avatar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["M56bc0dc3-default-56bc0dc3-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M56bc0dc3-default-56bc0dc3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M56bc0dc3-backText-56bc0dc3-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M56bc0dc3-backText-56bc0dc3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M56bc0dc3-content-56bc0dc3-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M56bc0dc3-content-56bc0dc3-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M11e71972-default-11e71972-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M11e71972-default-11e71972-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M11e71972-backText-11e71972-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M11e71972-backText-11e71972-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M11e71972-content-11e71972-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M11e71972-content-11e71972-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f382152-default-3f382152-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f382152-default-3f382152-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f382152-backText-3f382152-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f382152-backText-3f382152-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f382152-content-3f382152-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f382152-content-3f382152-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f3d2a06-default-3f3d2a06-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f3d2a06-default-3f3d2a06-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f3d2a06-backText-3f3d2a06-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f3d2a06-backText-3f3d2a06-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3f3d2a06-content-3f3d2a06-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3f3d2a06-content-3f3d2a06-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M494ad457-default-494ad457-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M494ad457-default-494ad457-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M494ad457-backText-494ad457-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M494ad457-backText-494ad457-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M494ad457-content-494ad457-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M494ad457-content-494ad457-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M46c339cb-default-46c339cb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M46c339cb-default-46c339cb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M46c339cb-backText-46c339cb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M46c339cb-backText-46c339cb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M46c339cb-content-46c339cb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M46c339cb-content-46c339cb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M128e5ba1-default-128e5ba1-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M128e5ba1-default-128e5ba1-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M128e5ba1-backText-128e5ba1-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M128e5ba1-backText-128e5ba1-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M128e5ba1-content-128e5ba1-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M128e5ba1-content-128e5ba1-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4513d3f2-default-4513d3f2-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4513d3f2-default-4513d3f2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4513d3f2-backText-4513d3f2-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4513d3f2-backText-4513d3f2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4513d3f2-content-4513d3f2-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4513d3f2-content-4513d3f2-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mad88daf4-default-ad88daf4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mad88daf4-default-ad88daf4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mad88daf4-backText-ad88daf4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mad88daf4-backText-ad88daf4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mad88daf4-content-ad88daf4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mad88daf4-content-ad88daf4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M63058bb9-default-63058bb9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M63058bb9-default-63058bb9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M63058bb9-backText-63058bb9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M63058bb9-backText-63058bb9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M63058bb9-content-63058bb9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M63058bb9-content-63058bb9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Md15bbc7a-default-d15bbc7a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Md15bbc7a-default-d15bbc7a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Md15bbc7a-backText-d15bbc7a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Md15bbc7a-backText-d15bbc7a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Md15bbc7a-content-d15bbc7a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Md15bbc7a-content-d15bbc7a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Md15bbc7a-right-d15bbc7a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Md15bbc7a-right-d15bbc7a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b611960-default-0b611960-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b611960-default-0b611960-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b611960-backText-0b611960-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b611960-backText-0b611960-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b611960-content-0b611960-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b611960-content-0b611960-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa3a101-default-4fa3a101-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa3a101-default-4fa3a101-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa3a101-backText-4fa3a101-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa3a101-backText-4fa3a101-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa3a101-content-4fa3a101-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa3a101-content-4fa3a101-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f6b73-default-4f9f6b73-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f6b73-default-4f9f6b73-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f6b73-backText-4f9f6b73-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f6b73-backText-4f9f6b73-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f6b73-content-4f9f6b73-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f6b73-content-4f9f6b73-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa0fd27-default-4fa0fd27-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa0fd27-default-4fa0fd27-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa0fd27-backText-4fa0fd27-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa0fd27-backText-4fa0fd27-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4fa0fd27-content-4fa0fd27-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4fa0fd27-content-4fa0fd27-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M51b649b8-default-51b649b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M51b649b8-default-51b649b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M51b649b8-backText-51b649b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M51b649b8-backText-51b649b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M51b649b8-content-51b649b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M51b649b8-content-51b649b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b60bf40-default-0b60bf40-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b60bf40-default-0b60bf40-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b60bf40-backText-0b60bf40-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b60bf40-backText-0b60bf40-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M0b60bf40-content-0b60bf40-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M0b60bf40-content-0b60bf40-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f83bb-default-4f9f83bb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f83bb-default-4f9f83bb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f83bb-backText-4f9f83bb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f83bb-backText-4f9f83bb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4f9f83bb-content-4f9f83bb-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4f9f83bb-content-4f9f83bb-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M01f20c1b-default-01f20c1b-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M01f20c1b-default-01f20c1b-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M01f20c1b-backText-01f20c1b-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M01f20c1b-backText-01f20c1b-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M01f20c1b-content-01f20c1b-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M01f20c1b-content-01f20c1b-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb63dd2ac-default-b63dd2ac-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb63dd2ac-default-b63dd2ac-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb63dd2ac-backText-b63dd2ac-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb63dd2ac-backText-b63dd2ac-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb63dd2ac-content-b63dd2ac-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb63dd2ac-content-b63dd2ac-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb59021b8-default-b59021b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb59021b8-default-b59021b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb59021b8-backText-b59021b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb59021b8-backText-b59021b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["Mb59021b8-content-b59021b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':Mb59021b8-content-b59021b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4ad438b5-default-4ad438b5-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4ad438b5-default-4ad438b5-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4ad438b5-backText-4ad438b5-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4ad438b5-backText-4ad438b5-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M4ad438b5-content-4ad438b5-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M4ad438b5-content-4ad438b5-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M7085294a-default-7085294a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M7085294a-default-7085294a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M7085294a-content-7085294a-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M7085294a-content-7085294a-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M2596d9bc-default-2596d9bc-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M2596d9bc-default-2596d9bc-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M2596d9bc-backText-2596d9bc-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M2596d9bc-backText-2596d9bc-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M2596d9bc-content-2596d9bc-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M2596d9bc-content-2596d9bc-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5d31be9c-default-5d31be9c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5d31be9c-default-5d31be9c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5d31be9c-backText-5d31be9c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5d31be9c-backText-5d31be9c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5d31be9c-content-5d31be9c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5d31be9c-content-5d31be9c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M596df1f9-default-596df1f9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M596df1f9-default-596df1f9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M596df1f9-backText-596df1f9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M596df1f9-backText-596df1f9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M596df1f9-content-596df1f9-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M596df1f9-content-596df1f9-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M45c56fe4-default-45c56fe4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M45c56fe4-default-45c56fe4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M45c56fe4-backText-45c56fe4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M45c56fe4-backText-45c56fe4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M45c56fe4-content-45c56fe4-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M45c56fe4-content-45c56fe4-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3eeaa084-default-3eeaa084-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3eeaa084-default-3eeaa084-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3eeaa084-backText-3eeaa084-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3eeaa084-backText-3eeaa084-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M3eeaa084-content-3eeaa084-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M3eeaa084-content-3eeaa084-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5c76df44-default-5c76df44-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5c76df44-default-5c76df44-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5c76df44-backText-5c76df44-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5c76df44-backText-5c76df44-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M5c76df44-content-5c76df44-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M5c76df44-content-5c76df44-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M9066649c-default-9066649c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M9066649c-default-9066649c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M9066649c-backText-9066649c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M9066649c-backText-9066649c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M9066649c-content-9066649c-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M9066649c-content-9066649c-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M360dd6b8-default-360dd6b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M360dd6b8-default-360dd6b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M360dd6b8-backText-360dd6b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M360dd6b8-backText-360dd6b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["M360dd6b8-content-360dd6b8-0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[8]+':M360dd6b8-content-360dd6b8-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJ=e_[x[8]].i
_ai(oJ,x[9],e_,x[8],1,1)
_ai(oJ,x[10],e_,x[8],2,2)
_ai(oJ,x[11],e_,x[8],3,2)
_ai(oJ,x[12],e_,x[8],4,2)
_ai(oJ,x[13],e_,x[8],5,2)
_ai(oJ,x[14],e_,x[8],6,2)
_ai(oJ,x[15],e_,x[8],7,2)
_ai(oJ,x[16],e_,x[8],8,2)
_ai(oJ,x[17],e_,x[8],9,2)
_ai(oJ,x[18],e_,x[8],10,2)
_ai(oJ,x[19],e_,x[8],11,2)
_ai(oJ,x[20],e_,x[8],12,2)
_ai(oJ,x[21],e_,x[8],13,2)
_ai(oJ,x[1],e_,x[8],14,2)
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
oJ.pop()
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[x[9],x[10],x[11],x[12],x[13],x[14],x[15],x[16],x[17],x[18],x[19],x[20],x[21],x[1]],ic:[]}
d_[x[22]]={}
d_[x[22]]["4513d3f2"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[22]+':4513d3f2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/avatar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[22],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[22],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aL=e_[x[22]].i
_ai(aL,x[9],e_,x[22],1,1)
aL.pop()
return r
}
e_[x[22]]={f:m8,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[23]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eN=e_[x[23]].i
_ai(eN,x[24],e_,x[23],1,1)
var bO=_v()
_(r,bO)
var oP=_oz(z,1,e,s,gg)
var xQ=_gd(x[23],oP,e_,d_)
if(xQ){
var oR=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[23],2,18)
eN.pop()
return r
}
e_[x[23]]={f:m9,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["11e71972"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[25]+':11e71972'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/background.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[25],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[25],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cT=e_[x[25]].i
_ai(cT,x[9],e_,x[25],1,1)
cT.pop()
return r
}
e_[x[25]]={f:m10,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[26]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oV=e_[x[26]].i
_ai(oV,x[27],e_,x[26],1,1)
var cW=_v()
_(r,cW)
var oX=_oz(z,1,e,s,gg)
var lY=_gd(x[26],oX,e_,d_)
if(lY){
var aZ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[26],2,18)
oV.pop()
return r
}
e_[x[26]]={f:m11,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["46c339cb"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[28]+':46c339cb'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/button.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[28],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[28],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var e2=e_[x[28]].i
_ai(e2,x[9],e_,x[28],1,1)
e2.pop()
return r
}
e_[x[28]]={f:m12,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[29]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o4=e_[x[29]].i
_ai(o4,x[30],e_,x[29],1,1)
var x5=_v()
_(r,x5)
var o6=_oz(z,1,e,s,gg)
var f7=_gd(x[29],o6,e_,d_)
if(f7){
var c8=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[29],2,18)
o4.pop()
return r
}
e_[x[29]]={f:m13,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["494ad457"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[31]+':494ad457'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/design.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var fE=_v()
_(oB,fE)
var cF=_oz(z,4,e,s,gg)
var hG=_gd(x[31],cF,e_,d_)
if(hG){
var oH=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[31],1,344)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
}
var cI=_v()
_(oB,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,11,aL,lK,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return tM
}
cI.wxXCkey=2
_2z(z,9,oJ,e,s,gg,cI,'item','index','index')
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o0=e_[x[31]].i
_ai(o0,x[9],e_,x[31],1,1)
o0.pop()
return r
}
e_[x[31]]={f:m14,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[32]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oBB=e_[x[32]].i
_ai(oBB,x[33],e_,x[32],1,1)
var lCB=_v()
_(r,lCB)
var aDB=_oz(z,1,e,s,gg)
var tEB=_gd(x[32],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[32],2,18)
oBB.pop()
return r
}
e_[x[32]]={f:m15,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["3f37d9b8"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[34]+':3f37d9b8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[34]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
d_[x[35]]["3f382152"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[35]+':3f382152'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[35]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[35],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[35],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var xIB=e_[x[35]].i
_ai(xIB,x[9],e_,x[35],1,1)
xIB.pop()
return r
}
e_[x[35]]={f:m17,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[36]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var fKB=e_[x[36]].i
_ai(fKB,x[37],e_,x[36],1,1)
var cLB=_v()
_(r,cLB)
var hMB=_oz(z,1,e,s,gg)
var oNB=_gd(x[36],hMB,e_,d_)
if(oNB){
var cOB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cLB.wxXCkey=3
oNB(cOB,cOB,cLB,gg)
gg.f=cur_globalf
}
else _w(hMB,x[36],2,18)
fKB.pop()
return r
}
e_[x[36]]={f:m18,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
d_[x[38]]["56bc0dc3"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[38]+':56bc0dc3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/layout.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var cF=_v()
_(oB,cF)
var hG=_oz(z,4,e,s,gg)
var oH=_gd(x[38],hG,e_,d_)
if(oH){
var cI=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[38],1,344)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var lQB=e_[x[38]].i
_ai(lQB,x[9],e_,x[38],1,1)
lQB.pop()
return r
}
e_[x[38]]={f:m19,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[39]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var tSB=e_[x[39]].i
_ai(tSB,x[40],e_,x[39],1,1)
var eTB=_v()
_(r,eTB)
var bUB=_oz(z,1,e,s,gg)
var oVB=_gd(x[39],bUB,e_,d_)
if(oVB){
var xWB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eTB.wxXCkey=3
oVB(xWB,xWB,eTB,gg)
gg.f=cur_globalf
}
else _w(bUB,x[39],2,18)
tSB.pop()
return r
}
e_[x[39]]={f:m20,j:[],i:[],ti:[x[40]],ic:[]}
d_[x[41]]={}
d_[x[41]]["d15bbc7a"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[41]+':d15bbc7a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/loading.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[41]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[41],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[41],1,384)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fYB=e_[x[41]].i
_ai(fYB,x[9],e_,x[41],1,1)
fYB.pop()
return r
}
e_[x[41]]={f:m21,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[42]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var h1B=e_[x[42]].i
_ai(h1B,x[43],e_,x[42],1,1)
var o2B=_v()
_(r,o2B)
var c3B=_oz(z,1,e,s,gg)
var o4B=_gd(x[42],c3B,e_,d_)
if(o4B){
var l5B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[42],2,18)
h1B.pop()
return r
}
e_[x[42]]={f:m22,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[44]]={}
d_[x[44]]["ad88daf4"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[44]+':ad88daf4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/progress.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[44],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[44],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var t7B=e_[x[44]].i
_ai(t7B,x[9],e_,x[44],1,1)
t7B.pop()
return r
}
e_[x[44]]={f:m23,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[45]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var b9B=e_[x[45]].i
_ai(b9B,x[46],e_,x[45],1,1)
var o0B=_v()
_(r,o0B)
var xAC=_oz(z,1,e,s,gg)
var oBC=_gd(x[45],xAC,e_,d_)
if(oBC){
var fCC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0B.wxXCkey=3
oBC(fCC,fCC,o0B,gg)
gg.f=cur_globalf
}
else _w(xAC,x[45],2,18)
b9B.pop()
return r
}
e_[x[45]]={f:m24,j:[],i:[],ti:[x[46]],ic:[]}
d_[x[47]]={}
d_[x[47]]["63058bb9"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[47]+':63058bb9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/shadow.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[47]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[47],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[47],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var hEC=e_[x[47]].i
_ai(hEC,x[9],e_,x[47],1,1)
hEC.pop()
return r
}
e_[x[47]]={f:m25,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[48]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cGC=e_[x[48]].i
_ai(cGC,x[49],e_,x[48],1,1)
var oHC=_v()
_(r,oHC)
var lIC=_oz(z,1,e,s,gg)
var aJC=_gd(x[48],lIC,e_,d_)
if(aJC){
var tKC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oHC.wxXCkey=3
aJC(tKC,tKC,oHC,gg)
gg.f=cur_globalf
}
else _w(lIC,x[48],2,18)
cGC.pop()
return r
}
e_[x[48]]={f:m26,j:[],i:[],ti:[x[49]],ic:[]}
d_[x[50]]={}
d_[x[50]]["128e5ba1"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[50]+':128e5ba1'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/tag.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[50],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[50],1,344)
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
if(_oz(z,10,lK,oJ,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
return aL
}
oH.wxXCkey=2
_2z(z,8,cI,e,s,gg,oH,'item','index','index')
var bO=_v()
_(hG,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_v()
_(fS,hU)
if(_oz(z,15,oR,xQ,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
return fS
}
bO.wxXCkey=2
_2z(z,13,oP,e,s,gg,bO,'item','index','index')
_(oB,hG)
var oV=_v()
_(oB,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
if(_oz(z,20,lY,oX,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
return aZ
}
oV.wxXCkey=2
_2z(z,18,cW,e,s,gg,oV,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var bMC=e_[x[50]].i
_ai(bMC,x[9],e_,x[50],1,1)
bMC.pop()
return r
}
e_[x[50]]={f:m27,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[51]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xOC=e_[x[51]].i
_ai(xOC,x[52],e_,x[51],1,1)
var oPC=_v()
_(r,oPC)
var fQC=_oz(z,1,e,s,gg)
var cRC=_gd(x[51],fQC,e_,d_)
if(cRC){
var hSC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oPC.wxXCkey=3
cRC(hSC,hSC,oPC,gg)
gg.f=cur_globalf
}
else _w(fQC,x[51],2,18)
xOC.pop()
return r
}
e_[x[51]]={f:m28,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
d_[x[53]]["3f3d2a06"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[53]+':3f3d2a06'
r.wxVkey=b
gg.f=$gdc(f_["./pages/basics/text.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[53],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[53],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var cUC=e_[x[53]].i
_ai(cUC,x[9],e_,x[53],1,1)
cUC.pop()
return r
}
e_[x[53]]={f:m29,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[54]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var lWC=e_[x[54]].i
_ai(lWC,x[55],e_,x[54],1,1)
var aXC=_v()
_(r,aXC)
var tYC=_oz(z,1,e,s,gg)
var eZC=_gd(x[54],tYC,e_,d_)
if(eZC){
var b1C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aXC.wxXCkey=3
eZC(b1C,b1C,aXC,gg)
gg.f=cur_globalf
}
else _w(tYC,x[54],2,18)
lWC.pop()
return r
}
e_[x[54]]={f:m30,j:[],i:[],ti:[x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["0b611960"]=function(e,s,r,gg){
var z=gz$gwx_32()
var b=x[56]+':0b611960'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[56],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[56],1,344)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var x3C=e_[x[56]].i
_ai(x3C,x[9],e_,x[56],1,1)
x3C.pop()
return r
}
e_[x[56]]={f:m31,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[57]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var f5C=e_[x[57]].i
_ai(f5C,x[58],e_,x[57],1,1)
var c6C=_v()
_(r,c6C)
var h7C=_oz(z,1,e,s,gg)
var o8C=_gd(x[57],h7C,e_,d_)
if(o8C){
var c9C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c6C.wxXCkey=3
o8C(c9C,c9C,c6C,gg)
gg.f=cur_globalf
}
else _w(h7C,x[57],2,18)
f5C.pop()
return r
}
e_[x[57]]={f:m32,j:[],i:[],ti:[x[58]],ic:[]}
d_[x[59]]={}
d_[x[59]]["4f9f6b73"]=function(e,s,r,gg){
var z=gz$gwx_34()
var b=x[59]+':4f9f6b73'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/card.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[59],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[59],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var lAD=e_[x[59]].i
_ai(lAD,x[9],e_,x[59],1,1)
lAD.pop()
return r
}
e_[x[59]]={f:m33,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[60]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var tCD=e_[x[60]].i
_ai(tCD,x[61],e_,x[60],1,1)
var eDD=_v()
_(r,eDD)
var bED=_oz(z,1,e,s,gg)
var oFD=_gd(x[60],bED,e_,d_)
if(oFD){
var xGD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eDD.wxXCkey=3
oFD(xGD,xGD,eDD,gg)
gg.f=cur_globalf
}
else _w(bED,x[60],2,18)
tCD.pop()
return r
}
e_[x[60]]={f:m34,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["4f9f83bb"]=function(e,s,r,gg){
var z=gz$gwx_36()
var b=x[62]+':4f9f83bb'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/chat.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[62],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[62],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var fID=e_[x[62]].i
_ai(fID,x[9],e_,x[62],1,1)
fID.pop()
return r
}
e_[x[62]]={f:m35,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[63]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var hKD=e_[x[63]].i
_ai(hKD,x[64],e_,x[63],1,1)
var oLD=_v()
_(r,oLD)
var cMD=_oz(z,1,e,s,gg)
var oND=_gd(x[63],cMD,e_,d_)
if(oND){
var lOD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oLD.wxXCkey=3
oND(lOD,lOD,oLD,gg)
gg.f=cur_globalf
}
else _w(cMD,x[63],2,18)
hKD.pop()
return r
}
e_[x[63]]={f:m36,j:[],i:[],ti:[x[64]],ic:[]}
d_[x[65]]={}
d_[x[65]]["4fa0fd27"]=function(e,s,r,gg){
var z=gz$gwx_38()
var b=x[65]+':4fa0fd27'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/form.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[65],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[65],1,344)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var tQD=e_[x[65]].i
_ai(tQD,x[9],e_,x[65],1,1)
tQD.pop()
return r
}
e_[x[65]]={f:m37,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[66]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var bSD=e_[x[66]].i
_ai(bSD,x[67],e_,x[66],1,1)
var oTD=_v()
_(r,oTD)
var xUD=_oz(z,1,e,s,gg)
var oVD=_gd(x[66],xUD,e_,d_)
if(oVD){
var fWD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTD.wxXCkey=3
oVD(fWD,fWD,oTD,gg)
gg.f=cur_globalf
}
else _w(xUD,x[66],2,18)
bSD.pop()
return r
}
e_[x[66]]={f:m38,j:[],i:[],ti:[x[67]],ic:[]}
d_[x[68]]={}
d_[x[68]]["4fa1e542"]=function(e,s,r,gg){
var z=gz$gwx_40()
var b=x[68]+':4fa1e542'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[68]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[68]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
d_[x[69]]["4fa3a101"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[69]+':4fa3a101'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_mz(z,'scroll-view',['class',1,'scrollY',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,5,e,s,gg)
var fE=_gd(x[69],oD,e_,d_)
if(fE){
var cF=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[69],1,460)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,10,oJ,cI,gg)){tM.wxVkey=1
var eN=_v()
_(tM,eN)
if(_oz(z,11,oJ,cI,gg)){eN.wxVkey=1
var bO=_v()
_(eN,bO)
if(_oz(z,12,oJ,cI,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
}
eN.wxXCkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,8,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var oZD=e_[x[69]].i
_ai(oZD,x[9],e_,x[69],1,1)
oZD.pop()
return r
}
e_[x[69]]={f:m40,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[70]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var o2D=e_[x[70]].i
_ai(o2D,x[71],e_,x[70],1,1)
var l3D=_v()
_(r,l3D)
var a4D=_oz(z,1,e,s,gg)
var t5D=_gd(x[70],a4D,e_,d_)
if(t5D){
var e6D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
l3D.wxXCkey=3
t5D(e6D,e6D,l3D,gg)
gg.f=cur_globalf
}
else _w(a4D,x[70],2,18)
o2D.pop()
return r
}
e_[x[70]]={f:m41,j:[],i:[],ti:[x[71]],ic:[]}
d_[x[72]]={}
d_[x[72]]["b63dd2ac"]=function(e,s,r,gg){
var z=gz$gwx_43()
var b=x[72]+':b63dd2ac'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/modal.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[72]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[72],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[72],1,344)
var hG=_mz(z,'view',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oH=_mz(z,'view',['catchtap',9,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cI=_v()
_(oH,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_mz(z,'button',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3,'data-value',4],[],aL,lK,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,22,aL,lK,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,15,oJ,e,s,gg,cI,'item','index','index')
_(hG,oH)
_(oB,hG)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var o8D=e_[x[72]].i
_ai(o8D,x[9],e_,x[72],1,1)
o8D.pop()
return r
}
e_[x[72]]={f:m42,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[73]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var o0D=e_[x[73]].i
_ai(o0D,x[74],e_,x[73],1,1)
var fAE=_v()
_(r,fAE)
var cBE=_oz(z,1,e,s,gg)
var hCE=_gd(x[73],cBE,e_,d_)
if(hCE){
var oDE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fAE.wxXCkey=3
hCE(oDE,oDE,fAE,gg)
gg.f=cur_globalf
}
else _w(cBE,x[73],2,18)
o0D.pop()
return r
}
e_[x[73]]={f:m43,j:[],i:[],ti:[x[74]],ic:[]}
d_[x[75]]={}
d_[x[75]]["0b60bf40"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[75]+':0b60bf40'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/nav.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[75]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[75],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[75],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,9,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var oFE=e_[x[75]].i
_ai(oFE,x[9],e_,x[75],1,1)
oFE.pop()
return r
}
e_[x[75]]={f:m44,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[76]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var aHE=e_[x[76]].i
_ai(aHE,x[77],e_,x[76],1,1)
var tIE=_v()
_(r,tIE)
var eJE=_oz(z,1,e,s,gg)
var bKE=_gd(x[76],eJE,e_,d_)
if(bKE){
var oLE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tIE.wxXCkey=3
bKE(oLE,oLE,tIE,gg)
gg.f=cur_globalf
}
else _w(eJE,x[76],2,18)
aHE.pop()
return r
}
e_[x[76]]={f:m45,j:[],i:[],ti:[x[77]],ic:[]}
d_[x[78]]={}
d_[x[78]]["b59021b8"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[78]+':b59021b8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/steps.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[78]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[78],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[78],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var oNE=e_[x[78]].i
_ai(oNE,x[9],e_,x[78],1,1)
oNE.pop()
return r
}
e_[x[78]]={f:m46,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[79]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var cPE=e_[x[79]].i
_ai(cPE,x[80],e_,x[79],1,1)
var hQE=_v()
_(r,hQE)
var oRE=_oz(z,1,e,s,gg)
var cSE=_gd(x[79],oRE,e_,d_)
if(cSE){
var oTE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hQE.wxXCkey=3
cSE(oTE,oTE,hQE,gg)
gg.f=cur_globalf
}
else _w(oRE,x[79],2,18)
cPE.pop()
return r
}
e_[x[79]]={f:m47,j:[],i:[],ti:[x[80]],ic:[]}
d_[x[81]]={}
d_[x[81]]["01f20c1b"]=function(e,s,r,gg){
var z=gz$gwx_49()
var b=x[81]+':01f20c1b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/swiper.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[81]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[81],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[81],1,344)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'swiper-item',['class',9,'key',1],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,11,oJ,cI,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,12,oJ,cI,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,7,oH,e,s,gg,hG,'item','index','index')
var oP=_mz(z,'swiper',['autoplay',13,'bindchange',1,'circular',2,'class',3,'data-comkey',4,'data-eventid',5,'duration',6,'indicatorActiveColor',7,'indicatorColor',8,'indicatorDots',9,'interval',10],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_n('view')
_rz(z,cW,'class',28,cT,fS,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,29,cT,fS,gg)){oX.wxVkey=1
}
var lY=_v()
_(cW,lY)
if(_oz(z,30,cT,fS,gg)){lY.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,26,oR,e,s,gg,xQ,'item','index','index')
_(oB,oP)
var aZ=_mz(z,'view',['bindtouchend',31,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-comkey',4,'data-eventid',5],[],e,s,gg)
var t1=_v()
_(aZ,t1)
var e2=function(o4,b3,x5,gg){
var f7=_n('view')
_rz(z,f7,'class',41,o4,b3,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,42,o4,b3,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,43,o4,b3,gg)){h9.wxVkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,39,e2,e,s,gg,t1,'item','index','index')
_(oB,aZ)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var aVE=e_[x[81]].i
_ai(aVE,x[9],e_,x[81],1,1)
aVE.pop()
return r
}
e_[x[81]]={f:m48,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[82]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var eXE=e_[x[82]].i
_ai(eXE,x[83],e_,x[82],1,1)
var bYE=_v()
_(r,bYE)
var oZE=_oz(z,1,e,s,gg)
var x1E=_gd(x[82],oZE,e_,d_)
if(x1E){
var o2E=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bYE.wxXCkey=3
x1E(o2E,o2E,bYE,gg)
gg.f=cur_globalf
}
else _w(oZE,x[82],2,18)
eXE.pop()
return r
}
e_[x[82]]={f:m49,j:[],i:[],ti:[x[83]],ic:[]}
d_[x[84]]={}
d_[x[84]]["51b649b8"]=function(e,s,r,gg){
var z=gz$gwx_51()
var b=x[84]+':51b649b8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/component/timeline.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[84]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[84],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[84],1,344)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var c4E=e_[x[84]].i
_ai(c4E,x[9],e_,x[84],1,1)
c4E.pop()
return r
}
e_[x[84]]={f:m50,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[85]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var o6E=e_[x[85]].i
_ai(o6E,x[86],e_,x[85],1,1)
var c7E=_v()
_(r,c7E)
var o8E=_oz(z,1,e,s,gg)
var l9E=_gd(x[85],o8E,e_,d_)
if(l9E){
var a0E=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c7E.wxXCkey=3
l9E(a0E,a0E,c7E,gg)
gg.f=cur_globalf
}
else _w(o8E,x[85],2,18)
o6E.pop()
return r
}
e_[x[85]]={f:m51,j:[],i:[],ti:[x[86]],ic:[]}
d_[x[87]]={}
d_[x[87]]["4fb97c64"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[87]+':4fb97c64'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[87]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var cF=_v()
_(xC,cF)
var hG=_oz(z,4,e,s,gg)
var oH=_gd(x[87],hG,e_,d_)
if(oH){
var cI=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[87],1,293)
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
var oJ=_v()
_(oD,oJ)
var lK=_oz(z,7,e,s,gg)
var aL=_gd(x[87],lK,e_,d_)
if(aL){
var tM=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[87],1,420)
}
var fE=_v()
_(oB,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
var eN=_v()
_(fE,eN)
var bO=_oz(z,10,e,s,gg)
var oP=_gd(x[87],bO,e_,d_)
if(oP){
var xQ=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[87],1,544)
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var eBF=e_[x[87]].i
_ai(eBF,x[19],e_,x[87],1,1)
_ai(eBF,x[20],e_,x[87],1,45)
_ai(eBF,x[21],e_,x[87],1,92)
eBF.pop()
eBF.pop()
eBF.pop()
return r
}
e_[x[87]]={f:m52,j:[],i:[],ti:[x[19],x[20],x[21]],ic:[]}
d_[x[88]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
var oDF=e_[x[88]].i
_ai(oDF,x[89],e_,x[88],1,1)
var xEF=_v()
_(r,xEF)
var oFF=_oz(z,1,e,s,gg)
var fGF=_gd(x[88],oFF,e_,d_)
if(fGF){
var cHF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xEF.wxXCkey=3
fGF(cHF,cHF,xEF,gg)
gg.f=cur_globalf
}
else _w(oFF,x[88],2,18)
oDF.pop()
return r
}
e_[x[88]]={f:m53,j:[],i:[],ti:[x[89]],ic:[]}
d_[x[90]]={}
d_[x[90]]["3ed3a378"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[90]+':3ed3a378'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[90]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oH=_v()
_(xC,oH)
var cI=_oz(z,4,e,s,gg)
var oJ=_gd(x[90],cI,e_,d_)
if(oJ){
var lK=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[90],1,366)
}
var oD=_v()
_(oB,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
var aL=_v()
_(oD,aL)
var tM=_oz(z,7,e,s,gg)
var eN=_gd(x[90],tM,e_,d_)
if(eN){
var bO=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[90],1,493)
}
var fE=_v()
_(oB,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_oz(z,9,e,s,gg)){cF.wxVkey=1
var oP=_v()
_(cF,oP)
var xQ=_oz(z,11,e,s,gg)
var oR=_gd(x[90],xQ,e_,d_)
if(oR){
var fS=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[90],1,702)
}
var hG=_v()
_(oB,hG)
if(_oz(z,12,e,s,gg)){hG.wxVkey=1
var cT=_v()
_(hG,cT)
var hU=_oz(z,14,e,s,gg)
var oV=_gd(x[90],hU,e_,d_)
if(oV){
var cW=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[90],1,826)
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var oJF=e_[x[90]].i
_ai(oJF,x[15],e_,x[90],1,1)
_ai(oJF,x[16],e_,x[90],1,53)
_ai(oJF,x[17],e_,x[90],1,107)
_ai(oJF,x[18],e_,x[90],1,159)
oJF.pop()
oJF.pop()
oJF.pop()
oJF.pop()
return r
}
e_[x[90]]={f:m54,j:[],i:[],ti:[x[15],x[16],x[17],x[18]],ic:[]}
d_[x[91]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var oLF=e_[x[91]].i
_ai(oLF,x[92],e_,x[91],1,1)
var lMF=_v()
_(r,lMF)
var aNF=_oz(z,1,e,s,gg)
var tOF=_gd(x[91],aNF,e_,d_)
if(tOF){
var ePF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lMF.wxXCkey=3
tOF(ePF,ePF,lMF,gg)
gg.f=cur_globalf
}
else _w(aNF,x[91],2,18)
oLF.pop()
return r
}
e_[x[91]]={f:m55,j:[],i:[],ti:[x[92]],ic:[]}
d_[x[93]]={}
d_[x[93]]["126e8dc0"]=function(e,s,r,gg){
var z=gz$gwx_57()
var b=x[93]+':126e8dc0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/about/about.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[93]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
return r
}
e_[x[93]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var xSF=e_[x[94]].i
_ai(xSF,x[95],e_,x[94],1,1)
var oTF=_v()
_(r,oTF)
var fUF=_oz(z,1,e,s,gg)
var cVF=_gd(x[94],fUF,e_,d_)
if(cVF){
var hWF=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTF.wxXCkey=3
cVF(hWF,hWF,oTF,gg)
gg.f=cur_globalf
}
else _w(fUF,x[94],2,18)
xSF.pop()
return r
}
e_[x[94]]={f:m57,j:[],i:[],ti:[x[95]],ic:[]}
d_[x[96]]={}
d_[x[96]]["45c56fe4"]=function(e,s,r,gg){
var z=gz$gwx_59()
var b=x[96]+':45c56fe4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/home/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[96]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[96],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[96],1,318)
var hG=_mz(z,'swiper',['autoplay',4,'bindchange',1,'circular',2,'class',3,'data-comkey',4,'data-eventid',5,'duration',6,'indicatorActiveColor',7,'indicatorColor',8,'indicatorDots',9,'interval',10],[],e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'swiper-item',['bindtap',19,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],lK,oJ,gg)
var bO=_n('view')
_rz(z,bO,'class',24,lK,oJ,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,25,lK,oJ,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,26,lK,oJ,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(eN,bO)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,17,cI,e,s,gg,oH,'item','index','index')
_(oB,hG)
var oR=_v()
_(oB,oR)
var fS=function(hU,cT,oV,gg){
var oX=_v()
_(oV,oX)
if(_oz(z,31,hU,cT,gg)){oX.wxVkey=1
var lY=_mz(z,'view',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],hU,cT,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,37,hU,cT,gg)){aZ.wxVkey=1
var t1=_v()
_(aZ,t1)
if(_oz(z,38,hU,cT,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
}
aZ.wxXCkey=1
_(oX,lY)
}
oX.wxXCkey=1
return oV
}
oR.wxXCkey=2
_2z(z,29,fS,e,s,gg,oR,'item','index','index')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var cYF=e_[x[96]].i
_ai(cYF,x[9],e_,x[96],1,1)
cYF.pop()
return r
}
e_[x[96]]={f:m58,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[97]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var l1F=e_[x[97]].i
_ai(l1F,x[92],e_,x[97],1,1)
var a2F=_v()
_(r,a2F)
var t3F=_oz(z,1,e,s,gg)
var e4F=_gd(x[97],t3F,e_,d_)
if(e4F){
var b5F=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a2F.wxXCkey=3
e4F(b5F,b5F,a2F,gg)
gg.f=cur_globalf
}
else _w(t3F,x[97],2,18)
l1F.pop()
return r
}
e_[x[97]]={f:m59,j:[],i:[],ti:[x[92]],ic:[]}
d_[x[98]]={}
d_[x[98]]["19b32d88"]=function(e,s,r,gg){
var z=gz$gwx_61()
var b=x[98]+':19b32d88'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/homelist/detail/detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[98]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
return r
}
e_[x[98]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[99]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
var o8F=e_[x[99]].i
_ai(o8F,x[100],e_,x[99],1,1)
var f9F=_v()
_(r,f9F)
var c0F=_oz(z,1,e,s,gg)
var hAG=_gd(x[99],c0F,e_,d_)
if(hAG){
var oBG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f9F.wxXCkey=3
hAG(oBG,oBG,f9F,gg)
gg.f=cur_globalf
}
else _w(c0F,x[99],2,18)
o8F.pop()
return r
}
e_[x[99]]={f:m61,j:[],i:[],ti:[x[100]],ic:[]}
d_[x[101]]={}
d_[x[101]]["360dd6b8"]=function(e,s,r,gg){
var z=gz$gwx_63()
var b=x[101]+':360dd6b8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/homelist/homelist.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[101]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4,'data-comkey',5,'data-eventid',6],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,9,e,s,gg)
var fE=_gd(x[101],oD,e_,d_)
if(fE){
var cF=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[101],1,659)
var hG=_v()
_(oB,hG)
var oH=_oz(z,11,e,s,gg)
var cI=_gd(x[101],oH,e_,d_)
if(cI){
var oJ=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[101],1,767)
var lK=_v()
_(oB,lK)
var aL=_oz(z,14,e,s,gg)
var tM=_gd(x[101],aL,e_,d_)
if(tM){
var eN=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[101],1,922)
var bO=_mz(z,'swiper',['bindchange',16,'bindtouchend',1,'bindtouchstart',2,'class',3,'current',4,'data-comkey',5,'data-eventid',6,'duration',7,'style',8],[],e,s,gg)
var oP=_v()
_(bO,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_mz(z,'scroll-view',['bindscrolltolower',29,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4,'style',5],[],fS,oR,gg)
var oX=_v()
_(oV,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
if(_oz(z,39,t1,aZ,gg)){o4.wxVkey=1
var x5=_v()
_(o4,x5)
var o6=_oz(z,45,t1,aZ,gg)
var f7=_gd(x[101],o6,e_,d_)
if(f7){
var c8=_1z(z,42,t1,aZ,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[101],1,1995)
}
o4.wxXCkey=1
return e2
}
oX.wxXCkey=2
_2z(z,37,lY,fS,oR,gg,oX,'item','index','index')
var cW=_v()
_(oV,cW)
if(_oz(z,46,fS,oR,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(cT,oV)
return cT
}
oP.wxXCkey=2
_2z(z,27,xQ,e,s,gg,oP,'listItem','listIndex','listIndex')
_(oB,bO)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var oDG=e_[x[101]].i
_ai(oDG,x[9],e_,x[101],1,1)
_ai(oDG,x[12],e_,x[101],1,56)
_ai(oDG,x[13],e_,x[101],1,109)
_ai(oDG,x[14],e_,x[101],1,161)
oDG.pop()
oDG.pop()
oDG.pop()
oDG.pop()
return r
}
e_[x[101]]={f:m62,j:[],i:[],ti:[x[9],x[12],x[13],x[14]],ic:[]}
d_[x[102]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var aFG=e_[x[102]].i
_ai(aFG,x[103],e_,x[102],1,1)
var tGG=_v()
_(r,tGG)
var eHG=_oz(z,1,e,s,gg)
var bIG=_gd(x[102],eHG,e_,d_)
if(bIG){
var oJG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tGG.wxXCkey=3
bIG(oJG,oJG,tGG,gg)
gg.f=cur_globalf
}
else _w(eHG,x[102],2,18)
aFG.pop()
return r
}
e_[x[102]]={f:m63,j:[],i:[],ti:[x[103]],ic:[]}
d_[x[104]]={}
d_[x[104]]["5c76df44"]=function(e,s,r,gg){
var z=gz$gwx_65()
var b=x[104]+':5c76df44'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[104],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[104],1,318)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var oLG=e_[x[104]].i
_ai(oLG,x[9],e_,x[104],1,1)
oLG.pop()
return r
}
e_[x[104]]={f:m64,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[105]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
var cNG=e_[x[105]].i
_ai(cNG,x[106],e_,x[105],1,1)
var hOG=_v()
_(r,hOG)
var oPG=_oz(z,1,e,s,gg)
var cQG=_gd(x[105],oPG,e_,d_)
if(cQG){
var oRG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hOG.wxXCkey=3
cQG(oRG,oRG,hOG,gg)
gg.f=cur_globalf
}
else _w(oPG,x[105],2,18)
cNG.pop()
return r
}
e_[x[105]]={f:m65,j:[],i:[],ti:[x[106]],ic:[]}
d_[x[107]]={}
d_[x[107]]["9066649c"]=function(e,s,r,gg){
var z=gz$gwx_67()
var b=x[107]+':9066649c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/myset/myset.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[107]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[107],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[107],1,448)
var hG=_v()
_(oB,hG)
var oH=_oz(z,9,e,s,gg)
var cI=_gd(x[107],oH,e_,d_)
if(cI){
var oJ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[107],1,961)
var lK=_v()
_(oB,lK)
var aL=_oz(z,18,e,s,gg)
var tM=_gd(x[107],aL,e_,d_)
if(tM){
var eN=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[107],1,1284)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
var aTG=e_[x[107]].i
_ai(aTG,x[9],e_,x[107],1,1)
_ai(aTG,x[10],e_,x[107],1,56)
_ai(aTG,x[11],e_,x[107],1,121)
aTG.pop()
aTG.pop()
aTG.pop()
return r
}
e_[x[107]]={f:m66,j:[],i:[],ti:[x[9],x[10],x[11]],ic:[]}
d_[x[108]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var eVG=e_[x[108]].i
_ai(eVG,x[109],e_,x[108],1,1)
var bWG=_v()
_(r,bWG)
var oXG=_oz(z,1,e,s,gg)
var xYG=_gd(x[108],oXG,e_,d_)
if(xYG){
var oZG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bWG.wxXCkey=3
xYG(oZG,oZG,bWG,gg)
gg.f=cur_globalf
}
else _w(oXG,x[108],2,18)
eVG.pop()
return r
}
e_[x[108]]={f:m67,j:[],i:[],ti:[x[109]],ic:[]}
d_[x[110]]={}
d_[x[110]]["3eeaa084"]=function(e,s,r,gg){
var z=gz$gwx_69()
var b=x[110]+':3eeaa084'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/post/post.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[110]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=_oz(z,3,e,s,gg)
var cF=_gd(x[110],fE,e_,d_)
if(cF){
var hG=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[110],1,318)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
var c2G=e_[x[110]].i
_ai(c2G,x[9],e_,x[110],1,1)
c2G.pop()
return r
}
e_[x[110]]={f:m68,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[111]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
var o4G=e_[x[111]].i
_ai(o4G,x[112],e_,x[111],1,1)
var c5G=_v()
_(r,c5G)
var o6G=_oz(z,1,e,s,gg)
var l7G=_gd(x[111],o6G,e_,d_)
if(l7G){
var a8G=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c5G.wxXCkey=3
l7G(a8G,a8G,c5G,gg)
gg.f=cur_globalf
}
else _w(o6G,x[111],2,18)
o4G.pop()
return r
}
e_[x[111]]={f:m69,j:[],i:[],ti:[x[112]],ic:[]}
d_[x[113]]={}
d_[x[113]]["12fe765a"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[113]+':12fe765a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main_page/video/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[113]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
return r
}
e_[x[113]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[114]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
var bAH=e_[x[114]].i
_ai(bAH,x[89],e_,x[114],1,1)
var oBH=_v()
_(r,oBH)
var xCH=_oz(z,1,e,s,gg)
var oDH=_gd(x[114],xCH,e_,d_)
if(oDH){
var fEH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oBH.wxXCkey=3
oDH(fEH,fEH,oBH,gg)
gg.f=cur_globalf
}
else _w(xCH,x[114],2,18)
bAH.pop()
return r
}
e_[x[114]]={f:m71,j:[],i:[],ti:[x[89]],ic:[]}
d_[x[115]]={}
d_[x[115]]["596df1f9"]=function(e,s,r,gg){
var z=gz$gwx_73()
var b=x[115]+':596df1f9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/animation.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[115]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[115],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[115],1,383)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
var hGH=e_[x[115]].i
_ai(hGH,x[9],e_,x[115],1,1)
hGH.pop()
return r
}
e_[x[115]]={f:m72,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[116]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
var cIH=e_[x[116]].i
_ai(cIH,x[117],e_,x[116],1,1)
var oJH=_v()
_(r,oJH)
var lKH=_oz(z,1,e,s,gg)
var aLH=_gd(x[116],lKH,e_,d_)
if(aLH){
var tMH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJH.wxXCkey=3
aLH(tMH,tMH,oJH,gg)
gg.f=cur_globalf
}
else _w(lKH,x[116],2,18)
cIH.pop()
return r
}
e_[x[116]]={f:m73,j:[],i:[],ti:[x[117]],ic:[]}
d_[x[118]]={}
d_[x[118]]["5d31be9c"]=function(e,s,r,gg){
var z=gz$gwx_75()
var b=x[118]+':5d31be9c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/drawer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[118]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[118],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[118],1,467)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var bOH=e_[x[118]].i
_ai(bOH,x[9],e_,x[118],1,1)
bOH.pop()
return r
}
e_[x[118]]={f:m74,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[119]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
var xQH=e_[x[119]].i
_ai(xQH,x[120],e_,x[119],1,1)
var oRH=_v()
_(r,oRH)
var fSH=_oz(z,1,e,s,gg)
var cTH=_gd(x[119],fSH,e_,d_)
if(cTH){
var hUH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oRH.wxXCkey=3
cTH(hUH,hUH,oRH,gg)
gg.f=cur_globalf
}
else _w(fSH,x[119],2,18)
xQH.pop()
return r
}
e_[x[119]]={f:m75,j:[],i:[],ti:[x[120]],ic:[]}
d_[x[121]]={}
d_[x[121]]["7085294a"]=function(e,s,r,gg){
var z=gz$gwx_77()
var b=x[121]+':7085294a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[121]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[121],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[121],1,396)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
var cWH=e_[x[121]].i
_ai(cWH,x[9],e_,x[121],1,1)
cWH.pop()
return r
}
e_[x[121]]={f:m76,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[122]]={}
d_[x[122]]["4ad438b5"]=function(e,s,r,gg){
var z=gz$gwx_78()
var b=x[122]+':4ad438b5'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/indexes.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[122]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[122],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[122],1,384)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
var lYH=e_[x[122]].i
_ai(lYH,x[9],e_,x[122],1,1)
lYH.pop()
return r
}
e_[x[122]]={f:m77,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[123]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
var t1H=e_[x[123]].i
_ai(t1H,x[124],e_,x[123],1,1)
var e2H=_v()
_(r,e2H)
var b3H=_oz(z,1,e,s,gg)
var o4H=_gd(x[123],b3H,e_,d_)
if(o4H){
var x5H=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e2H.wxXCkey=3
o4H(x5H,x5H,e2H,gg)
gg.f=cur_globalf
}
else _w(b3H,x[123],2,18)
t1H.pop()
return r
}
e_[x[123]]={f:m78,j:[],i:[],ti:[x[124]],ic:[]}
d_[x[125]]={}
d_[x[125]]["2596d9bc"]=function(e,s,r,gg){
var z=gz$gwx_80()
var b=x[125]+':2596d9bc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/plugin/verticalnav.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[125]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[125],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[125],1,387)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
var f7H=e_[x[125]].i
_ai(f7H,x[9],e_,x[125],1,1)
f7H.pop()
return r
}
e_[x[125]]={f:m79,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[126]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
var h9H=e_[x[126]].i
_ai(h9H,x[127],e_,x[126],1,1)
var o0H=_v()
_(r,o0H)
var cAI=_oz(z,1,e,s,gg)
var oBI=_gd(x[126],cAI,e_,d_)
if(oBI){
var lCI=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0H.wxXCkey=3
oBI(lCI,lCI,o0H,gg)
gg.f=cur_globalf
}
else _w(cAI,x[126],2,18)
h9H.pop()
return r
}
e_[x[126]]={f:m80,j:[],i:[],ti:[x[127]],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/main/home","pages/main_page/home/home","pages/main_page/about/about","pages/main_page/post/post","pages/main_page/my/my","pages/main_page/myset/myset","pages/main_page/homelist/homelist","pages/main_page/homelist/detail/detail","pages/main_page/video/index","pages/index/index","pages/basics/layout","pages/basics/background","pages/basics/text","pages/basics/icon","pages/basics/button","pages/basics/design","pages/basics/tag","pages/basics/avatar","pages/basics/progress","pages/basics/shadow","pages/basics/loading","pages/component/bar","pages/component/nav","pages/component/list","pages/component/card","pages/component/form","pages/component/timeline","pages/component/chat","pages/component/swiper","pages/component/modal","pages/component/steps","pages/plugin/indexes","pages/plugin/animation","pages/plugin/drawer","pages/plugin/verticalnav"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"ColorUi for UniApp","navigationStyle":"custom","navigationBarTextStyle":"white"},"usingComponents":{},"tabBar":{"color":"#ffffff","selectedColor":"#f37b1d","borderStyle":"black","backgroundColor":"#333333","list":[{"pagePath":"pages/main_page/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_cur.png","text":"首页"},{"pagePath":"pages/main_page/post/post","iconPath":"static/tabbar/post.png","selectedIconPath":"static/tabbar/post.png","text":"发布"},{"pagePath":"pages/main_page/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my_cur.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"best","compilerVersion":"2.2.1"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/basics/avatar.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/avatar.wxml']=$gwx('./pages/basics/avatar.wxml');

__wxAppCode__['pages/basics/background.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/background.wxml']=$gwx('./pages/basics/background.wxml');

__wxAppCode__['pages/basics/button.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/button.wxml']=$gwx('./pages/basics/button.wxml');

__wxAppCode__['pages/basics/design.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/design.wxml']=$gwx('./pages/basics/design.wxml');

__wxAppCode__['pages/basics/icon.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/icon.wxml']=$gwx('./pages/basics/icon.wxml');

__wxAppCode__['pages/basics/layout.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/layout.wxml']=$gwx('./pages/basics/layout.wxml');

__wxAppCode__['pages/basics/loading.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/loading.wxml']=$gwx('./pages/basics/loading.wxml');

__wxAppCode__['pages/basics/progress.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/progress.wxml']=$gwx('./pages/basics/progress.wxml');

__wxAppCode__['pages/basics/shadow.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/shadow.wxml']=$gwx('./pages/basics/shadow.wxml');

__wxAppCode__['pages/basics/tag.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/tag.wxml']=$gwx('./pages/basics/tag.wxml');

__wxAppCode__['pages/basics/text.json']={"usingComponents":{}};
__wxAppCode__['pages/basics/text.wxml']=$gwx('./pages/basics/text.wxml');

__wxAppCode__['pages/component/bar.json']={"usingComponents":{}};
__wxAppCode__['pages/component/bar.wxml']=$gwx('./pages/component/bar.wxml');

__wxAppCode__['pages/component/card.json']={"usingComponents":{}};
__wxAppCode__['pages/component/card.wxml']=$gwx('./pages/component/card.wxml');

__wxAppCode__['pages/component/chat.json']={"usingComponents":{}};
__wxAppCode__['pages/component/chat.wxml']=$gwx('./pages/component/chat.wxml');

__wxAppCode__['pages/component/form.json']={"usingComponents":{}};
__wxAppCode__['pages/component/form.wxml']=$gwx('./pages/component/form.wxml');

__wxAppCode__['pages/component/list.json']={"usingComponents":{}};
__wxAppCode__['pages/component/list.wxml']=$gwx('./pages/component/list.wxml');

__wxAppCode__['pages/component/modal.json']={"usingComponents":{}};
__wxAppCode__['pages/component/modal.wxml']=$gwx('./pages/component/modal.wxml');

__wxAppCode__['pages/component/nav.json']={"usingComponents":{}};
__wxAppCode__['pages/component/nav.wxml']=$gwx('./pages/component/nav.wxml');

__wxAppCode__['pages/component/steps.json']={"usingComponents":{}};
__wxAppCode__['pages/component/steps.wxml']=$gwx('./pages/component/steps.wxml');

__wxAppCode__['pages/component/swiper.json']={"usingComponents":{}};
__wxAppCode__['pages/component/swiper.wxml']=$gwx('./pages/component/swiper.wxml');

__wxAppCode__['pages/component/timeline.json']={"usingComponents":{}};
__wxAppCode__['pages/component/timeline.wxml']=$gwx('./pages/component/timeline.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/main_page/about/about.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/about/about.wxml']=$gwx('./pages/main_page/about/about.wxml');

__wxAppCode__['pages/main_page/home/home.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/home/home.wxml']=$gwx('./pages/main_page/home/home.wxml');

__wxAppCode__['pages/main_page/homelist/detail/detail.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/homelist/detail/detail.wxml']=$gwx('./pages/main_page/homelist/detail/detail.wxml');

__wxAppCode__['pages/main_page/homelist/homelist.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/homelist/homelist.wxml']=$gwx('./pages/main_page/homelist/homelist.wxml');

__wxAppCode__['pages/main_page/my/my.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/my/my.wxml']=$gwx('./pages/main_page/my/my.wxml');

__wxAppCode__['pages/main_page/myset/myset.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/myset/myset.wxml']=$gwx('./pages/main_page/myset/myset.wxml');

__wxAppCode__['pages/main_page/post/post.json']={"usingComponents":{}};
__wxAppCode__['pages/main_page/post/post.wxml']=$gwx('./pages/main_page/post/post.wxml');

__wxAppCode__['pages/main_page/video/index.json']={"usingComponents":{},"disableScroll":true,"navigationBarTitleText":"首页"};
__wxAppCode__['pages/main_page/video/index.wxml']=$gwx('./pages/main_page/video/index.wxml');

__wxAppCode__['pages/main/home.json']={"usingComponents":{}};
__wxAppCode__['pages/main/home.wxml']=$gwx('./pages/main/home.wxml');

__wxAppCode__['pages/plugin/animation.json']={"usingComponents":{}};
__wxAppCode__['pages/plugin/animation.wxml']=$gwx('./pages/plugin/animation.wxml');

__wxAppCode__['pages/plugin/drawer.json']={"usingComponents":{}};
__wxAppCode__['pages/plugin/drawer.wxml']=$gwx('./pages/plugin/drawer.wxml');

__wxAppCode__['pages/plugin/indexes.json']={"usingComponents":{}};
__wxAppCode__['pages/plugin/indexes.wxml']=$gwx('./pages/plugin/indexes.wxml');

__wxAppCode__['pages/plugin/verticalnav.json']={"usingComponents":{}};
__wxAppCode__['pages/plugin/verticalnav.wxml']=$gwx('./pages/plugin/verticalnav.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0953":function(t,e,a){"use strict";a.r(e);var n=a("0a49"),o=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=o.a},"0a49":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"components",data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,list:[{title:"索引列表",img:"https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",url:"../plugin/indexes"},{title:"微动画",img:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",url:"../plugin/animation"},{title:"全屏抽屉",img:"https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",url:"../plugin/drawer"},{title:"垂直导航",img:"https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",url:"../plugin/verticalnav"}]}},methods:{toChild:function(e){t.navigateTo({url:e.currentTarget.dataset.url})}}};e.default=a}).call(this,a("6e42")["default"])},"0b53":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[a("view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgColor],style:t.style},[t.isBack?a("view",{staticClass:"action",attrs:{eventid:"50aa7231-0"},on:{tap:t.BackPage}},[a("text",{staticClass:"cuIcon-back"}),t._t("backText",null,{mpcomid:"50aa7231-0"})],2):t._e(),a("view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content",null,{mpcomid:"50aa7231-1"})],2),t._t("right",null,{mpcomid:"50aa7231-2"})],2)])])},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},13869:function(t,e,a){"use strict";a.r(e);var n=a("f3ae"),o=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=o.a},"15dc":function(t,e,a){"use strict";var n=a("e94a"),o=a.n(n);o.a},"1d3a":function(t,e,a){"use strict";a.r(e);var n=a("ac83"),o=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=o.a},"2f73":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(a("f3d3")),o=l(a("271e"));function l(t){return t&&t.__esModule?t:{default:t}}var c={onLaunch:function(){t.getSystemInfo({success:function(e){n.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?n.default.prototype.CustomBar=e.statusBarHeight+50:n.default.prototype.CustomBar=e.statusBarHeight+45,n.default.prototype.Defaulttheam={headcls:"bg-gradual-orange",btncls:"bg-orange",textcls:"text-orange"},t.getStorageSync("Defaulttheam")&&(n.default.prototype.Defaulttheam=t.getStorageSync("Defaulttheam"))}}),n.default.prototype.ArticleList=[{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big10006.jpg",author:"正义天使",tag:"史诗",created_at:"2018年12月4日"},{title:"上通自然之性，下取万类之象",remark:"用笔者，天也；流美者，地也",image:"/static/default-skin/big10001.jpg",author:"上官婉儿",tag:"武道",created_at:"2018年12月4日"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big37006.jpg",author:"火炮千金",tag:"荣耀",created_at:"2018年12月4日"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big39000.jpg",author:"妲己",tag:"史诗",created_at:"2018年12月4日"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big10006.jpg",author:"莫甘娜",tag:"史诗",created_at:"2018年12月4日"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big99008.jpg",author:"王昭君",tag:"史诗",created_at:"2018年12月4日"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",remark:"折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！",image:"/static/default-skin/big84000.jpg",author:"娜可露露",tag:"史诗",created_at:"2018年12月4日"}],n.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){o.default.mayiwoLog("util tool mayiwoLog"),console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=c}).call(this,a("6e42")["default"])},3579:function(t,e,a){"use strict";var n=a("6881"),o=a.n(n);o.a},"3d86":function(t,e,a){"use strict";a.r(e);var n=a("a033");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("e194");var l,c,i=a("2877"),r=Object(i["a"])(n["default"],l,c,!1,null,null,null);e["default"]=r.exports},"511c":function(t,e,a){},"51b9":function(t,e,a){},5279:function(t,e,a){"use strict";a.r(e);var n=a("7434"),o=a("feb5");for(var l in o)"default"!==l&&function(t){a.d(e,t,function(){return o[t]})}(l);a("3579");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},6796:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[a("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg",mpcomid:"7085294a-0"}},[a("block",{slot:"content"},[a("image",{staticStyle:{width:"240rpx",height:"60rpx"},attrs:{src:"/static/cjkz.png",mode:"aspectFill"}})])],1),a("view",{staticClass:"cu-card"},t._l(t.list,function(e,n){return a("view",{key:n,staticClass:"cu-item bg-img shadow-blur",style:[{backgroundImage:"url("+e.img+")"}],attrs:{"data-url":e.url,eventid:"7085294a-0-"+n},on:{tap:t.toChild}},[a("view",{staticClass:"cardTitle"},[t._v(t._s(e.title))])])})),a("view",{staticClass:"cu-tabbar-height"})],1)],1)},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},6881:function(t,e,a){},7434:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[a("image",{staticClass:"response",attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png",mode:"widthFix"}}),a("view",{staticClass:"nav-list"},t._l(t.elements,function(e,n){return a("navigator",{key:n,staticClass:"nav-li",class:"bg-"+e.color,style:[{animation:"show "+(.2*(n+1)+1)+"s 1"}],attrs:{"hover-class":"none",url:"/pages/basics/"+e.name,navigateTo:""}},[a("view",{staticClass:"nav-title"},[t._v(t._s(e.title))]),a("view",{staticClass:"nav-name"},[t._v(t._s(e.name))]),a("text",{class:"cuIcon-"+e.cuIcon})])})),a("view",{staticClass:"cu-tabbar-height"})])],1)},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},9213:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("scroll-view",{staticClass:"page",attrs:{"scroll-y":""}},[a("image",{staticClass:"response",attrs:{src:"/static/componentBg.png",mode:"widthFix"}}),a("view",{staticClass:"nav-list"},t._l(t.elements,function(e,n){return a("navigator",{key:n,staticClass:"nav-li",class:"bg-"+e.color,style:[{animation:"show "+(.2*(n+1)+1)+"s 1"}],attrs:{"hover-class":"none",url:"/pages/component/"+e.name,navigateTo:""}},[a("view",{staticClass:"nav-title"},[t._v(t._s(e.title))]),a("view",{staticClass:"nav-name"},[t._v(t._s(e.name))]),a("text",{class:"cuIcon-"+e.cuIcon})])})),a("view",{staticClass:"cu-tabbar-height"})])],1)},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},a033:function(t,e,a){"use strict";a.r(e);var n=a("2f73"),o=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=o.a},a850:function(t,e,a){"use strict";a("a0fc");var n=m(a("f3d3")),o=m(a("3d86")),l=m(a("232c")),c=m(a("02e2")),i=m(a("a1e7")),r=m(a("94da")),u=m(a("5279")),s=m(a("d548")),f=m(a("e3e1")),d=m(a("d6ef"));function m(t){return t&&t.__esModule?t:{default:t}}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){p(t,e,a[e])})}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}n.default.component("ctmainpage",l.default),n.default.component("ctaboutpage",c.default),n.default.component("ctpost",i.default),n.default.component("ctmy",r.default),n.default.component("basics",u.default),n.default.component("components",s.default),n.default.component("plugin",f.default),n.default.component("cu-custom",d.default),n.default.config.productionTip=!1,o.default.mpType="app";var v=new n.default(g({},o.default));v.$mount()},ac83:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,e=this.CustomBar,a=this.bgImage,n="height:".concat(e,"px;padding-top:").concat(t,"px;");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(a,");")),n}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};e.default=a}).call(this,a("6e42")["default"])},b658:function(t,e,a){"use strict";var n=a("511c"),o=a.n(n);o.a},bcff:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"basics",data:function(){return{elements:[{title:"布局",name:"layout",color:"cyan",cuIcon:"newsfill"},{title:"背景",name:"background",color:"blue",cuIcon:"colorlens"},{title:"文本",name:"text",color:"purple",cuIcon:"font"},{title:"图标 ",name:"icon",color:"mauve",cuIcon:"cuIcon"},{title:"按钮",name:"button",color:"pink",cuIcon:"btn"},{title:"标签",name:"tag",color:"brown",cuIcon:"tagfill"},{title:"头像",name:"avatar",color:"red",cuIcon:"myfill"},{title:"进度条",name:"progress",color:"orange",cuIcon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",cuIcon:"copy"},{title:"加载",name:"loading",color:"green",cuIcon:"loading2"}]}},onShow:function(){console.log("success")}};e.default=n},d548:function(t,e,a){"use strict";a.r(e);var n=a("9213"),o=a("13869");for(var l in o)"default"!==l&&function(t){a.d(e,t,function(){return o[t]})}(l);a("b658");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},d6ef:function(t,e,a){"use strict";a.r(e);var n=a("0b53"),o=a("1d3a");for(var l in o)"default"!==l&&function(t){a.d(e,t,function(){return o[t]})}(l);var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},e194:function(t,e,a){"use strict";var n=a("51b9"),o=a.n(n);o.a},e3e1:function(t,e,a){"use strict";a.r(e);var n=a("6796"),o=a("0953");for(var l in o)"default"!==l&&function(t){a.d(e,t,function(){return o[t]})}(l);a("15dc");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},e94a:function(t,e,a){},f3ae:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{elements:[{title:"操作条",name:"bar",color:"purple",cuIcon:"vipcard"},{title:"导航栏 ",name:"nav",color:"mauve",cuIcon:"formfill"},{title:"列表",name:"list",color:"pink",cuIcon:"list"},{title:"卡片",name:"card",color:"brown",cuIcon:"newsfill"},{title:"表单",name:"form",color:"red",cuIcon:"formfill"},{title:"时间轴",name:"timeline",color:"orange",cuIcon:"timefill"},{title:"聊天",name:"chat",color:"green",cuIcon:"messagefill"},{title:"轮播",name:"swiper",color:"olive",cuIcon:"album"},{title:"模态框",name:"modal",color:"grey",cuIcon:"squarecheckfill"},{title:"步骤条",name:"steps",color:"cyan",cuIcon:"roundcheckfill"}]}}};e.default=n},feb5:function(t,e,a){"use strict";a.r(e);var n=a("bcff"),o=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=o.a}},[["a850","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{0:function(t,e){},"02e2":function(t,e,n){"use strict";n.r(e);var r=n("b4f6"),i=n("1386");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"0676":function(t,e,n){"use strict";n.r(e);var r=n("fe51"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"0960":function(t,e,n){t.exports=n("b19a")},1:function(t,e){},1386:function(t,e,n){"use strict";n.r(e);var r=n("d418"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"18cb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("cu-custom",{attrs:{bgColor:t.Defaulttheam.headcls,isBack:!1,mpcomid:"3eeaa084-0"}},[n("block",{slot:"backText"},[t._v("返回")]),n("block",{slot:"content"},[t._v("我的")])],1),n("form",[n("view",{staticClass:"cu-form-group margin-top"},[n("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"",eventid:"3eeaa084-0"},on:{input:t.textareaAInput}},[t._v(t._s(t.addressName))])]),n("view",{staticClass:"cu-bar bg-white margin-top"},[n("view",{staticClass:"action"},[t._v("图片上传")]),n("view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/4")])]),n("view",{staticClass:"cu-form-group"},[n("view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,function(e,r){return n("view",{key:r,staticClass:"bg-img",attrs:{"data-url":t.imgList[r],eventid:"3eeaa084-2-"+r},on:{tap:t.ViewImage}},[n("image",{attrs:{src:t.imgList[r],mode:"aspectFill"}}),n("view",{staticClass:"cu-tag bg-red",attrs:{"data-index":r,eventid:"3eeaa084-1-"+r},on:{tap:function(e){e.stopPropagation(),t.DelImg(e)}}},[n("text",{staticClass:"cuIcon-close"},[t._v("addressName")])])])}),t.imgList.length<4?n("view",{staticClass:"solids",attrs:{eventid:"3eeaa084-3"},on:{tap:t.ChooseImage}},[n("text",{staticClass:"cuIcon-cameraadd"})]):t._e()],2)]),n("view",{staticClass:"padding"},[n("button",{staticClass:"cu-btn block margin-tb-sm lg",class:t.Defaulttheam.btncls,attrs:{type:"",eventid:"3eeaa084-4"},on:{tap:t.getRegeo}},[t._v("提交")])],1),n("view",{staticStyle:{width:"700rpx",height:"auto"}},[t._v(t._s(t.addressName))]),n("view",{staticClass:"cu-tabbar-height"}),n("view",{staticClass:"cu-tabbar-height"}),n("view",{staticClass:"cu-tabbar-height"})]),n("view",{staticClass:"cu-tabbar-height"})],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},"1fb5":function(t,e,n){"use strict";e.byteLength=l,e.toByteArray=h,e.fromByteArray=v;for(var r=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=a.length;s<u;++s)r[s]=a[s],i[a.charCodeAt(s)]=s;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function l(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r}function f(t,e,n){return 3*(e+n)/4-n}function h(t){for(var e,n=c(t),r=n[0],a=n[1],s=new o(f(t,r,a)),u=0,l=a>0?r-4:r,h=0;h<l;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],s[u++]=e>>16&255,s[u++]=e>>8&255,s[u++]=255&e;return 2===a&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,s[u++]=255&e),1===a&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,s[u++]=e>>8&255,s[u++]=255&e),s}function p(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function d(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(p(r));return i.join("")}function v(t){for(var e,n=t.length,i=n%3,o=[],a=16383,s=0,u=n-i;s<u;s+=a)o.push(d(t,s,s+a>u?u:s+a));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"205e":function(t,e,n){"use strict";(function(e){function n(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function r(t,e){return t<<e|t>>>32-e}function i(t,e,i,o,a,s){return n(r(n(n(e,t),n(o,s)),a),i)}function o(t,e,n,r,o,a,s){return i(e&n|~e&r,t,e,o,a,s)}function a(t,e,n,r,o,a,s){return i(e&r|n&~r,t,e,o,a,s)}function s(t,e,n,r,o,a,s){return i(e^n^r,t,e,o,a,s)}function u(t,e,n,r,o,a,s){return i(n^(e|~r),t,e,o,a,s)}function c(t,e){var r,i,c,l,f;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var h=1732584193,p=-271733879,d=-1732584194,v=271733878;for(r=0;r<t.length;r+=16)i=h,c=p,l=d,f=v,h=o(h,p,d,v,t[r],7,-680876936),v=o(v,h,p,d,t[r+1],12,-389564586),d=o(d,v,h,p,t[r+2],17,606105819),p=o(p,d,v,h,t[r+3],22,-1044525330),h=o(h,p,d,v,t[r+4],7,-176418897),v=o(v,h,p,d,t[r+5],12,1200080426),d=o(d,v,h,p,t[r+6],17,-1473231341),p=o(p,d,v,h,t[r+7],22,-45705983),h=o(h,p,d,v,t[r+8],7,1770035416),v=o(v,h,p,d,t[r+9],12,-1958414417),d=o(d,v,h,p,t[r+10],17,-42063),p=o(p,d,v,h,t[r+11],22,-1990404162),h=o(h,p,d,v,t[r+12],7,1804603682),v=o(v,h,p,d,t[r+13],12,-40341101),d=o(d,v,h,p,t[r+14],17,-1502002290),p=o(p,d,v,h,t[r+15],22,1236535329),h=a(h,p,d,v,t[r+1],5,-165796510),v=a(v,h,p,d,t[r+6],9,-1069501632),d=a(d,v,h,p,t[r+11],14,643717713),p=a(p,d,v,h,t[r],20,-373897302),h=a(h,p,d,v,t[r+5],5,-701558691),v=a(v,h,p,d,t[r+10],9,38016083),d=a(d,v,h,p,t[r+15],14,-660478335),p=a(p,d,v,h,t[r+4],20,-405537848),h=a(h,p,d,v,t[r+9],5,568446438),v=a(v,h,p,d,t[r+14],9,-1019803690),d=a(d,v,h,p,t[r+3],14,-187363961),p=a(p,d,v,h,t[r+8],20,1163531501),h=a(h,p,d,v,t[r+13],5,-1444681467),v=a(v,h,p,d,t[r+2],9,-51403784),d=a(d,v,h,p,t[r+7],14,1735328473),p=a(p,d,v,h,t[r+12],20,-1926607734),h=s(h,p,d,v,t[r+5],4,-378558),v=s(v,h,p,d,t[r+8],11,-2022574463),d=s(d,v,h,p,t[r+11],16,1839030562),p=s(p,d,v,h,t[r+14],23,-35309556),h=s(h,p,d,v,t[r+1],4,-1530992060),v=s(v,h,p,d,t[r+4],11,1272893353),d=s(d,v,h,p,t[r+7],16,-155497632),p=s(p,d,v,h,t[r+10],23,-1094730640),h=s(h,p,d,v,t[r+13],4,681279174),v=s(v,h,p,d,t[r],11,-358537222),d=s(d,v,h,p,t[r+3],16,-722521979),p=s(p,d,v,h,t[r+6],23,76029189),h=s(h,p,d,v,t[r+9],4,-640364487),v=s(v,h,p,d,t[r+12],11,-421815835),d=s(d,v,h,p,t[r+15],16,530742520),p=s(p,d,v,h,t[r+2],23,-995338651),h=u(h,p,d,v,t[r],6,-198630844),v=u(v,h,p,d,t[r+7],10,1126891415),d=u(d,v,h,p,t[r+14],15,-1416354905),p=u(p,d,v,h,t[r+5],21,-57434055),h=u(h,p,d,v,t[r+12],6,1700485571),v=u(v,h,p,d,t[r+3],10,-1894986606),d=u(d,v,h,p,t[r+10],15,-1051523),p=u(p,d,v,h,t[r+1],21,-2054922799),h=u(h,p,d,v,t[r+8],6,1873313359),v=u(v,h,p,d,t[r+15],10,-30611744),d=u(d,v,h,p,t[r+6],15,-1560198380),p=u(p,d,v,h,t[r+13],21,1309151649),h=u(h,p,d,v,t[r+4],6,-145523070),v=u(v,h,p,d,t[r+11],10,-1120210379),d=u(d,v,h,p,t[r+2],15,718787259),p=u(p,d,v,h,t[r+9],21,-343485551),h=n(h,i),p=n(p,c),d=n(d,l),v=n(v,f);return[h,p,d,v]}function l(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function f(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function h(t){return l(c(f(t),8*t.length))}function p(t,e){var n,r,i=f(t),o=[],a=[];for(o[15]=a[15]=void 0,i.length>16&&(i=c(i,8*t.length)),n=0;n<16;n+=1)o[n]=909522486^i[n],a[n]=1549556828^i[n];return r=c(o.concat(f(e)),512+8*e.length),l(c(a.concat(r),640))}function d(t){var e,n,r="0123456789abcdef",i="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),i+=r.charAt(e>>>4&15)+r.charAt(15&e);return i}function v(t){return unescape(encodeURIComponent(t))}function g(t){return h(v(t))}function y(t){return d(g(t))}function m(t,e){return p(v(t),v(e))}function w(t,e){return d(m(t,e))}function b(t,e,n){return e?n?m(e,t):w(e,t):n?g(t):y(t)}t.exports=b})()},"232c":function(t,e,n){"use strict";n.r(e);var r=n("f4e1"),i=n("0676");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"271e":function(t,e,n){"use strict";var r=i(n("677c"));function i(t){return t&&t.__esModule?t:{default:t}}var o={debug:!0,mayiwoLog:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!this.debug)return!1;var n=getCurrentPages(),r=(n.route,n.route),i="当前页面【"+r+"】";""!=e&&(i+="["+e+"]"),console.log(i),console.log(t)},form_timefunction:function(t){var e=new Date(1e3*parseInt(t)),n="";return n=e.getFullYear(),n=n+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1),n=n+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate()),n},form_time_shortdata_function:function(t){var e=new Date(1e3*parseInt(t)),n="";return n=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=n+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate()),n=n+" "+(e.getHours()<10?"0"+e.getHours():e.getHours()),n=n+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()),n},getQuery:function(t){var e=[];if(-1!=t.indexOf("?"))for(var n=t.split("?")[1],r=n.split("&"),i=0;i<r.length;i++)r[i].split("=")[0]&&unescape(r[i].split("=")[1])&&(e[i]={name:r[i].split("=")[0],value:unescape(r[i].split("=")[1])});return e},getUserInfo:function(t,e){var n=this;r.default.getUserInfo(function(r){n.mayiwoLog(wx.getStorageSync("userInfo"),"系统通用会员信息");var i=new Object;i.from_id=0,t.from_id?(n.mayiwoLog(t.from_id,"存在推荐人会员UID"),i.from_id=t.from_id):n.mayiwoLog(t.from_id,"不存在推荐人会员UID");var o="wxapi";i.model="member",i.apiname="member_info",n.mayiwoPost(o,i,function(t){wx.setStorageSync("memberInfo",t.result.data),n.mayiwoLog(wx.getStorageSync("memberInfo"),"模块内真实会员信息"),"function"==typeof e&&e(t.result.data)})})},getUserInfoForButton:function(t,e){var n=this;r.default.getUserInfo(function(t){n.mayiwoLog(t),"function"==typeof e&&e(t)},t.detail)},mayiwoPost:function(t,e,n){var i=this;e.m="haojk_myw",i.mayiwoLog(e.apiname+":"+o.dateFormat("yyyy-MM-dd hh:mm:ss.S")+"开始请求接口"),r.default.request({url:"entry/wxapp/"+t,showLoading:!1,data:e,method:"post",success:function(r){var a={"POST API":t,"POST 参数":e,"POST 结果":r.data};i.mayiwoLog(a),i.mayiwoLog(e.apiname+":"+o.dateFormat("yyyy-MM-dd hh:mm:ss.S")+"结束请求接口"),"function"==typeof n&&n(r.data)}})},dateFormat:function(t){var e=new Date,n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},getGoodList:function(t,e){var n=this;t.m="haojk_myw",t.model="apicloud",t.apiname="api_listall";var r="wxapi";wx.getStorageSync("userInfo");n.mayiwoPost(r,t,function(t){t.result;"function"==typeof e&&e(t.result)})}};t.exports=o},"27bf":function(t,e,n){"use strict";t.exports=a;var r=n("b19a"),i=n("3a7c");function o(t,e){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(!r)return this.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!=e&&this.push(e),r(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function a(t){if(!(this instanceof a))return new a(t);r.call(this,t),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"===typeof t.transform&&(this._transform=t.transform),"function"===typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",s)}function s(){var t=this;"function"===typeof this._flush?this._flush(function(e,n){u(t,e,n)}):u(this,null,null)}function u(t,e,n){if(e)return t.emit("error",e);if(null!=n&&t.push(n),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}i.inherits=n("3fb5"),i.inherits(a,r),a.prototype.push=function(t,e){return this._transformState.needTransform=!1,r.prototype.push.call(this,t,e)},a.prototype._transform=function(t,e,n){throw new Error("_transform() is not implemented")},a.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},a.prototype._destroy=function(t,e){var n=this;r.prototype._destroy.call(this,t,function(t){e(t),n.emit("close")})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2c63":function(t,e,n){t.exports=n("dc14")},"2c85":function(t,e,n){"use strict";(function(){var e=Array.prototype,n=Object.prototype,r=Function.prototype,i=e.push,o=e.slice,a=n.toString,s=n.hasOwnProperty,u=Array.isArray,c=Object.keys,l=r.bind,f=Object.create,h=function(){},p=function t(e){return e instanceof t?e:this instanceof t?void(this._wrapped=e):new t(e)};t.exports=p,p.VERSION="1.8.2";var d=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return function(){return t.apply(e,arguments)}},v=function(t,e,n){return null==t?p.identity:p.isFunction(t)?d(t,e,n):p.isObject(t)?p.matcher(t):p.property(t)};p.iteratee=function(t,e){return v(t,e,1/0)};var g=function(t,e){return function(n){var r=arguments.length;if(r<2||null==n)return n;for(var i=1;i<r;i++)for(var o=arguments[i],a=t(o),s=a.length,u=0;u<s;u++){var c=a[u];e&&void 0!==n[c]||(n[c]=o[c])}return n}},y=function(t){if(!p.isObject(t))return{};if(f)return f(t);h.prototype=t;var e=new h;return h.prototype=null,e},m=Math.pow(2,53)-1,w=function(t){var e=null!=t&&t.length;return"number"==typeof e&&e>=0&&e<=m};function b(t){function e(e,n,r,i,o,a){for(;o>=0&&o<a;o+=t){var s=i?i[o]:o;r=n(r,e[s],s,e)}return r}return function(n,r,i,o){r=d(r,o,4);var a=!w(n)&&p.keys(n),s=(a||n).length,u=t>0?0:s-1;return arguments.length<3&&(i=n[a?a[u]:u],u+=t),e(n,r,i,a,u,s)}}p.each=p.forEach=function(t,e,n){var r,i;if(e=d(e,n),w(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=p.keys(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t},p.map=p.collect=function(t,e,n){e=v(e,n);for(var r=!w(t)&&p.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var s=r?r[a]:a;o[a]=e(t[s],s,t)}return o},p.reduce=p.foldl=p.inject=b(1),p.reduceRight=p.foldr=b(-1),p.find=p.detect=function(t,e,n){var r;if(r=w(t)?p.findIndex(t,e,n):p.findKey(t,e,n),void 0!==r&&-1!==r)return t[r]},p.filter=p.select=function(t,e,n){var r=[];return e=v(e,n),p.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r},p.reject=function(t,e,n){return p.filter(t,p.negate(v(e)),n)},p.every=p.all=function(t,e,n){e=v(e,n);for(var r=!w(t)&&p.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},p.some=p.any=function(t,e,n){e=v(e,n);for(var r=!w(t)&&p.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},p.contains=p.includes=p.include=function(t,e,n){return w(t)||(t=p.values(t)),p.indexOf(t,e,"number"==typeof n&&n)>=0},p.invoke=function(t,e){var n=o.call(arguments,2),r=p.isFunction(e);return p.map(t,function(t){var i=r?e:t[e];return null==i?i:i.apply(t,n)})},p.pluck=function(t,e){return p.map(t,p.property(e))},p.where=function(t,e){return p.filter(t,p.matcher(e))},p.findWhere=function(t,e){return p.find(t,p.matcher(e))},p.max=function(t,e,n){var r,i,o=-1/0,a=-1/0;if(null==e&&null!=t){t=w(t)?t:p.values(t);for(var s=0,u=t.length;s<u;s++)r=t[s],r>o&&(o=r)}else e=v(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i>a||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},p.min=function(t,e,n){var r,i,o=1/0,a=1/0;if(null==e&&null!=t){t=w(t)?t:p.values(t);for(var s=0,u=t.length;s<u;s++)r=t[s],r<o&&(o=r)}else e=v(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},p.shuffle=function(t){for(var e,n=w(t)?t:p.values(t),r=n.length,i=Array(r),o=0;o<r;o++)e=p.random(0,o),e!==o&&(i[o]=i[e]),i[e]=n[o];return i},p.sample=function(t,e,n){return null==e||n?(w(t)||(t=p.values(t)),t[p.random(t.length-1)]):p.shuffle(t).slice(0,Math.max(0,e))},p.sortBy=function(t,e,n){return e=v(e,n),p.pluck(p.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};var _=function(t){return function(e,n,r){var i={};return n=v(n,r),p.each(e,function(r,o){var a=n(r,o,e);t(i,r,a)}),i}};p.groupBy=_(function(t,e,n){p.has(t,n)?t[n].push(e):t[n]=[e]}),p.indexBy=_(function(t,e,n){t[n]=e}),p.countBy=_(function(t,e,n){p.has(t,n)?t[n]++:t[n]=1}),p.toArray=function(t){return t?p.isArray(t)?o.call(t):w(t)?p.map(t,p.identity):p.values(t):[]},p.size=function(t){return null==t?0:w(t)?t.length:p.keys(t).length},p.partition=function(t,e,n){e=v(e,n);var r=[],i=[];return p.each(t,function(t,n,o){(e(t,n,o)?r:i).push(t)}),[r,i]},p.first=p.head=p.take=function(t,e,n){if(null!=t)return null==e||n?t[0]:p.initial(t,t.length-e)},p.initial=function(t,e,n){return o.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},p.last=function(t,e,n){if(null!=t)return null==e||n?t[t.length-1]:p.rest(t,Math.max(0,t.length-e))},p.rest=p.tail=p.drop=function(t,e,n){return o.call(t,null==e||n?1:e)},p.compact=function(t){return p.filter(t,p.identity)};var x=function t(e,n,r,i){for(var o=[],a=0,s=i||0,u=e&&e.length;s<u;s++){var c=e[s];if(w(c)&&(p.isArray(c)||p.isArguments(c))){n||(c=t(c,n,r));var l=0,f=c.length;o.length+=f;while(l<f)o[a++]=c[l++]}else r||(o[a++]=c)}return o};function k(t){return function(e,n,r){n=v(n,r);for(var i=null!=e&&e.length,o=t>0?0:i-1;o>=0&&o<i;o+=t)if(n(e[o],o,e))return o;return-1}}p.flatten=function(t,e){return x(t,e,!1)},p.without=function(t){return p.difference(t,o.call(arguments,1))},p.uniq=p.unique=function(t,e,n,r){if(null==t)return[];p.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=v(n,r));for(var i=[],o=[],a=0,s=t.length;a<s;a++){var u=t[a],c=n?n(u,a,t):u;e?(a&&o===c||i.push(u),o=c):n?p.contains(o,c)||(o.push(c),i.push(u)):p.contains(i,u)||i.push(u)}return i},p.union=function(){return p.uniq(x(arguments,!0,!0))},p.intersection=function(t){if(null==t)return[];for(var e=[],n=arguments.length,r=0,i=t.length;r<i;r++){var o=t[r];if(!p.contains(e,o)){for(var a=1;a<n;a++)if(!p.contains(arguments[a],o))break;a===n&&e.push(o)}}return e},p.difference=function(t){var e=x(arguments,!0,!0,1);return p.filter(t,function(t){return!p.contains(e,t)})},p.zip=function(){return p.unzip(arguments)},p.unzip=function(t){for(var e=t&&p.max(t,"length").length||0,n=Array(e),r=0;r<e;r++)n[r]=p.pluck(t,r);return n},p.object=function(t,e){for(var n={},r=0,i=t&&t.length;r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},p.indexOf=function(t,e,n){var r=0,i=t&&t.length;if("number"==typeof n)r=n<0?Math.max(0,i+n):n;else if(n&&i)return r=p.sortedIndex(t,e),t[r]===e?r:-1;if(e!==e)return p.findIndex(o.call(t,r),p.isNaN);for(;r<i;r++)if(t[r]===e)return r;return-1},p.lastIndexOf=function(t,e,n){var r=t?t.length:0;if("number"==typeof n&&(r=n<0?r+n+1:Math.min(r,n+1)),e!==e)return p.findLastIndex(o.call(t,0,r),p.isNaN);while(--r>=0)if(t[r]===e)return r;return-1},p.findIndex=k(1),p.findLastIndex=k(-1),p.sortedIndex=function(t,e,n,r){n=v(n,r,1);var i=n(e),o=0,a=t.length;while(o<a){var s=Math.floor((o+a)/2);n(t[s])<i?o=s+1:a=s}return o},p.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i};var S=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=y(t.prototype),a=t.apply(o,i);return p.isObject(a)?a:o};p.bind=function(t,e){if(l&&t.bind===l)return l.apply(t,o.call(arguments,1));if(!p.isFunction(t))throw new TypeError("Bind must be called on a function");var n=o.call(arguments,2),r=function r(){return S(t,r,e,this,n.concat(o.call(arguments)))};return r},p.partial=function(t){var e=o.call(arguments,1),n=function n(){for(var r=0,i=e.length,o=Array(i),a=0;a<i;a++)o[a]=e[a]===p?arguments[r++]:e[a];while(r<arguments.length)o.push(arguments[r++]);return S(t,n,this,this,o)};return n},p.bindAll=function(t){var e,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(e=1;e<r;e++)n=arguments[e],t[n]=p.bind(t[n],t);return t},p.memoize=function(t,e){var n=function n(r){var i=n.cache,o=""+(e?e.apply(this,arguments):r);return p.has(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return n.cache={},n},p.delay=function(t,e){var n=o.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},p.defer=p.partial(p.delay,p,1),p.throttle=function(t,e,n){var r,i,o,a=null,s=0;n||(n={});var u=function(){s=!1===n.leading?0:p.now(),a=null,o=t.apply(r,i),a||(r=i=null)};return function(){var c=p.now();s||!1!==n.leading||(s=c);var l=e-(c-s);return r=this,i=arguments,l<=0||l>e?(a&&(clearTimeout(a),a=null),s=c,o=t.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(u,l)),o}},p.debounce=function(t,e,n){var r,i,o,a,s,u=function u(){var c=p.now()-a;c<e&&c>=0?r=setTimeout(u,e-c):(r=null,n||(s=t.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=p.now();var c=n&&!r;return r||(r=setTimeout(u,e)),c&&(s=t.apply(o,i),o=i=null),s}},p.wrap=function(t,e){return p.partial(e,t)},p.negate=function(t){return function(){return!t.apply(this,arguments)}},p.compose=function(){var t=arguments,e=t.length-1;return function(){var n=e,r=t[e].apply(this,arguments);while(n--)r=t[n].call(this,r);return r}},p.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},p.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},p.once=p.partial(p.before,2);var C=!{toString:null}.propertyIsEnumerable("toString"),A=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function O(t,e){var r=A.length,i=t.constructor,o=p.isFunction(i)&&i.prototype||n,a="constructor";p.has(t,a)&&!p.contains(e,a)&&e.push(a);while(r--)a=A[r],a in t&&t[a]!==o[a]&&!p.contains(e,a)&&e.push(a)}p.keys=function(t){if(!p.isObject(t))return[];if(c)return c(t);var e=[];for(var n in t)p.has(t,n)&&e.push(n);return C&&O(t,e),e},p.allKeys=function(t){if(!p.isObject(t))return[];var e=[];for(var n in t)e.push(n);return C&&O(t,e),e},p.values=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},p.mapObject=function(t,e,n){e=v(e,n);for(var r,i=p.keys(t),o=i.length,a={},s=0;s<o;s++)r=i[s],a[r]=e(t[r],r,t);return a},p.pairs=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},p.invert=function(t){for(var e={},n=p.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},p.functions=p.methods=function(t){var e=[];for(var n in t)p.isFunction(t[n])&&e.push(n);return e.sort()},p.extend=g(p.allKeys),p.extendOwn=p.assign=g(p.keys),p.findKey=function(t,e,n){e=v(e,n);for(var r,i=p.keys(t),o=0,a=i.length;o<a;o++)if(r=i[o],e(t[r],r,t))return r},p.pick=function(t,e,n){var r,i,o={},a=t;if(null==a)return o;p.isFunction(e)?(i=p.allKeys(a),r=d(e,n)):(i=x(arguments,!1,!1,1),r=function(t,e,n){return e in n},a=Object(a));for(var s=0,u=i.length;s<u;s++){var c=i[s],l=a[c];r(l,c,a)&&(o[c]=l)}return o},p.omit=function(t,e,n){if(p.isFunction(e))e=p.negate(e);else{var r=p.map(x(arguments,!1,!1,1),String);e=function(t,e){return!p.contains(r,e)}}return p.pick(t,e,n)},p.defaults=g(p.allKeys,!0),p.create=function(t,e){var n=y(t);return e&&p.extendOwn(n,e),n},p.clone=function(t){return p.isObject(t)?p.isArray(t)?t.slice():p.extend({},t):t},p.tap=function(t,e){return e(t),t},p.isMatch=function(t,e){var n=p.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0};var E=function t(e,n,r,i){if(e===n)return 0!==e||1/e===1/n;if(null==e||null==n)return e===n;e instanceof p&&(e=e._wrapped),n instanceof p&&(n=n._wrapped);var o=a.call(e);if(o!==a.call(n))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e===""+n;case"[object Number]":return+e!==+e?+n!==+n:0===+e?1/+e===1/n:+e===+n;case"[object Date]":case"[object Boolean]":return+e===+n}var s="[object Array]"===o;if(!s){if("object"!=typeof e||"object"!=typeof n)return!1;var u=e.constructor,c=n.constructor;if(u!==c&&!(p.isFunction(u)&&u instanceof u&&p.isFunction(c)&&c instanceof c)&&"constructor"in e&&"constructor"in n)return!1}r=r||[],i=i||[];var l=r.length;while(l--)if(r[l]===e)return i[l]===n;if(r.push(e),i.push(n),s){if(l=e.length,l!==n.length)return!1;while(l--)if(!t(e[l],n[l],r,i))return!1}else{var f,h=p.keys(e);if(l=h.length,p.keys(n).length!==l)return!1;while(l--)if(f=h[l],!p.has(n,f)||!t(e[f],n[f],r,i))return!1}return r.pop(),i.pop(),!0};p.isEqual=function(t,e){return E(t,e)},p.isEmpty=function(t){return null==t||(w(t)&&(p.isArray(t)||p.isString(t)||p.isArguments(t))?0===t.length:0===p.keys(t).length)},p.isElement=function(t){return!(!t||1!==t.nodeType)},p.isArray=u||function(t){return"[object Array]"===a.call(t)},p.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},p.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){p["is"+t]=function(e){return a.call(e)==="[object "+t+"]"}}),p.isArguments(arguments)||(p.isArguments=function(t){return p.has(t,"callee")}),"object"!=typeof Int8Array&&(p.isFunction=function(t){return"function"==typeof t||!1}),p.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},p.isNaN=function(t){return p.isNumber(t)&&t!==+t},p.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===a.call(t)},p.isNull=function(t){return null===t},p.isUndefined=function(t){return void 0===t},p.has=function(t,e){return null!=t&&s.call(t,e)},p.noConflict=function(){return root._=previousUnderscore,this},p.identity=function(t){return t},p.constant=function(t){return function(){return t}},p.noop=function(){},p.property=function(t){return function(e){return null==e?void 0:e[t]}},p.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},p.matcher=p.matches=function(t){return t=p.extendOwn({},t),function(e){return p.isMatch(e,t)}},p.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},p.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},p.now=Date.now||function(){return(new Date).getTime()};var T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},j=p.invert(T),$=function(t){var e=function(e){return t[e]},n="(?:"+p.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};p.escape=$(T),p.unescape=$(j),p.result=function(t,e,n){var r=null==t?void 0:t[e];return void 0===r&&(r=n),p.isFunction(r)?r.call(t):r};var P=0;p.uniqueId=function(t){var e=++P+"";return t?t+e:e},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\u2028|\u2029/g,R=function(t){return"\\"+L[t]};p.template=function(t,e,n){!e&&n&&(e=n),e=p.defaults({},e,p.templateSettings);var r=RegExp([(e.escape||I).source,(e.interpolate||I).source,(e.evaluate||I).source].join("|")+"|$","g"),i=0,o="__p+='";t.replace(r,function(e,n,r,a,s){return o+=t.slice(i,s).replace(M,R),i=s+e.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),e}),o+="';\n",e.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(e.variable||"obj","_",o)}catch(c){throw c.source=o,c}var s=function(t){return a.call(this,t,p)},u=e.variable||"obj";return s.source="function("+u+"){\n"+o+"}",s},p.chain=function(t){var e=p(t);return e._chain=!0,e};var D=function(t,e){return t._chain?p(e).chain():e};p.mixin=function(t){p.each(p.functions(t),function(e){var n=p[e]=t[e];p.prototype[e]=function(){var t=[this._wrapped];return i.apply(t,arguments),D(this,n.apply(p,t))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=e[t];p.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],D(this,e)}}),p.each(["concat","join","slice"],function(t){var n=e[t];p.prototype[t]=function(){return D(this,n.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},p.prototype.valueOf=p.prototype.toJSON=p.prototype.value,p.prototype.toString=function(){return""+this._wrapped}}).call(void 0)},3002:function(t,e,n){"use strict";var r=n("9439"),i=n.n(r);i.a},"3a7c":function(t,e,n){(function(t){function n(t){return Array.isArray?Array.isArray(t):"[object Array]"===g(t)}function r(t){return"boolean"===typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"===typeof t}function s(t){return"string"===typeof t}function u(t){return"symbol"===typeof t}function c(t){return void 0===t}function l(t){return"[object RegExp]"===g(t)}function f(t){return"object"===typeof t&&null!==t}function h(t){return"[object Date]"===g(t)}function p(t){return"[object Error]"===g(t)||t instanceof Error}function d(t){return"function"===typeof t}function v(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function g(t){return Object.prototype.toString.call(t)}e.isArray=n,e.isBoolean=r,e.isNull=i,e.isNullOrUndefined=o,e.isNumber=a,e.isString=s,e.isSymbol=u,e.isUndefined=c,e.isRegExp=l,e.isObject=f,e.isDate=h,e.isError=p,e.isFunction=d,e.isPrimitive=v,e.isBuffer=t.isBuffer}).call(this,n("b639").Buffer)},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"429b":function(t,e,n){t.exports=n("faa1").EventEmitter},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},4681:function(t,e,n){"use strict";var r=n("966d");function i(t,e){var n=this,i=this._readableState&&this._readableState.destroyed,o=this._writableState&&this._writableState.destroyed;return i||o?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||r.nextTick(a,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?(r.nextTick(a,n,t),n._writableState&&(n._writableState.errorEmitted=!0)):e&&e(t)}),this)}function o(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function a(t,e){t.emit("error",e)}t.exports={destroy:i,undestroy:o}},"46f5":function(t,e,n){"use strict";function r(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}r.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var n=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:n}),e(n)},fail:function(n){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:n.errMsg||""})}})},r.prototype.getRegeo=function(t){function e(e){var r=n.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:n.key,location:e,extensions:"all",s:r.s,platform:r.platform,appname:n.key,sdkversion:r.sdkversion,logversion:r.logversion},method:"GET",header:{"content-type":"application/json"},success:function(n){var r,i,o,a,s,u,c,l,f;n.data.status&&"1"==n.data.status?(r=n.data.regeocode,i=r.addressComponent,o=[],a="",r&&r.roads[0]&&r.roads[0].name&&(a=r.roads[0].name+"附近"),s=e.split(",")[0],u=e.split(",")[1],r.pois&&r.pois[0]&&(a=r.pois[0].name+"附近",c=r.pois[0].location,c&&(s=parseFloat(c.split(",")[0]),u=parseFloat(c.split(",")[1]))),i.provice&&o.push(i.provice),i.city&&o.push(i.city),i.district&&o.push(i.district),i.streetNumber&&i.streetNumber.street&&i.streetNumber.number?(o.push(i.streetNumber.street),o.push(i.streetNumber.number)):(l="",r&&r.roads[0]&&r.roads[0].name&&(l=r.roads[0].name),o.push(l)),o=o.join(""),f=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:o,desc:a,longitude:s,latitude:u,id:0,regeocodeData:r}],t.success(f)):t.fail({errCode:n.data.infocode,errMsg:n.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var n=this;t.location?e(t.location):n.getWxLocation(t,function(t){e(t)})},r.prototype.getWeather=function(t){function e(e){var n="base";t.type&&"forecast"==t.type&&(n="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:r.key,city:e,extensions:n,s:i.s,platform:i.platform,appname:r.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function n(t){var e={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return e}var r,i;e.data.status&&"1"==e.data.status?e.data.lives?(r=e.data.lives,r&&r.length>0&&(r=r[0],i=n(r),i["liveData"]=r,t.success(i))):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function n(n){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:r.key,location:n,extensions:"all",s:i.s,platform:i.platform,appname:r.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(n){var r,i;n.data.status&&"1"==n.data.status?(i=n.data.regeocode,i.addressComponent?r=i.addressComponent.adcode:i.aois&&i.aois.length>0&&(r=i.aois[0].adcode),e(r)):t.fail({errCode:n.data.infocode,errMsg:n.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var r=this,i=r.requestConfig;t.city?e(t.city):r.getWxLocation(t,function(t){n(t)})},r.prototype.getPoiAround=function(t){function e(e){var i={key:n.key,location:e,s:r.s,platform:r.platform,appname:n.key,sdkversion:r.sdkversion,logversion:r.logversion};t.querytypes&&(i["types"]=t.querytypes),t.querykeywords&&(i["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){var n,r,i,o;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(n=[],r=0;r<e.pois.length;r++)i=0==r?t.iconPathSelected:t.iconPath,n.push({latitude:parseFloat(e.pois[r].location.split(",")[1]),longitude:parseFloat(e.pois[r].location.split(",")[0]),iconPath:i,width:22,height:32,id:r,name:e.pois[r].name,address:e.pois[r].address});o={markers:n,poisData:e.pois},t.success(o)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var n=this,r=n.requestConfig;t.location?e(t.location):n.getWxLocation(t,function(t){e(t)})},r.prototype.getStaticmap=function(t){function e(e){i.push("location="+e),t.zoom&&i.push("zoom="+t.zoom),t.size&&i.push("size="+t.size),t.scale&&i.push("scale="+t.scale),t.markers&&i.push("markers="+t.markers),t.labels&&i.push("labels="+t.labels),t.paths&&i.push("paths="+t.paths),t.traffic&&i.push("traffic="+t.traffic);var n=o+i.join("&");t.success({url:n})}var n,r=this,i=[],o="https://restapi.amap.com/v3/staticmap?";i.push("key="+r.key),n=r.requestConfig,i.push("s="+n.s),i.push("platform="+n.platform),i.push("appname="+n.appname),i.push("sdkversion="+n.sdkversion),i.push("logversion="+n.logversion),t.location?e(t.location):r.getWxLocation(t,function(t){e(t)})},r.prototype.getInputtips=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.location&&(r["location"]=t.location),t.keywords&&(r["keywords"]=t.keywords),t.type&&(r["type"]=t.type),t.city&&(r["city"]=t.city),t.citylimit&&(r["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getDrivingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),t.strategy&&(r["strategy"]=t.strategy),t.waypoints&&(r["waypoints"]=t.waypoints),t.avoidpolygons&&(r["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(r["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getWalkingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getTransitRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),t.strategy&&(r["strategy"]=t.strategy),t.city&&(r["city"]=t.city),t.cityd&&(r["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var n=e.data.route;t.success({distance:n.distance||"",taxi_cost:n.taxi_cost||"",transits:n.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getRidingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=r},"4d31":function(t,e,n){"use strict";n.r(e);var r=n("5c6d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"5c6d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("46f5"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{amapPlugin:null,amapkey:"43d51bb439f2e0da12e075e0c8a94b73",addressName:"",weather:{hasData:!1,data:[]},Defaulttheam:this.Defaulttheam,addr:"点击提交获取地址",imgList:[],modalName:null,textareaAValue:"",swiperList:[{id:0,type:"image",url:"/static/default-skin/big84000.jpg"},{id:1,type:"image",url:"/static/default-skin/big37006.jpg"},{id:2,type:"image",url:"/static/default-skin/big39000.jpg"},{id:3,type:"image",url:"/static/default-skin/big10001.jpg"},{id:4,type:"image",url:"/static/default-skin/big25011.jpg"},{id:5,type:"image",url:"/static/default-skin/big21016.jpg"},{id:6,type:"image",url:"/static/default-skin/big99008.jpg"}]}},onLoad:function(){this.amapPlugin=new r.default.AMapWX({key:this.amapkey})},methods:{ChooseImage:function(){var e=this;t.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["camera","album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var n=this;t.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value},getRegeo:function(){var e=this;t.showLoading({title:"获取信息中"}),console.log(123),t.getLocation({type:"gcj02",geocode:!0,success:function(n){t.hideLoading(),e.addressName=JSON.stringify(n),console.log(JSON.stringify(n)),console.log("当前位置的经度："+n.longitude),console.log("当前位置的纬度："+n.latitude)}})}}};e.default=o}).call(this,n("6e42")["default"])},"5e1a":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n("8707").Buffer,o=n(1);function a(t,e,n){t.copy(e,n)}t.exports=function(){function t(){r(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";var e=this.head,n=""+e.data;while(e=e.next)n+=t+e.data;return n},t.prototype.concat=function(t){if(0===this.length)return i.alloc(0);if(1===this.length)return this.head.data;var e=i.allocUnsafe(t>>>0),n=this.head,r=0;while(n)a(n.data,e,r),r+=n.data.length,n=n.next;return e},t}(),o&&o.inspect&&o.inspect.custom&&(t.exports.prototype[o.inspect.custom]=function(){var t=o.inspect({length:this.length});return this.constructor.name+" "+t})},"677c":function(module,exports,__webpack_require__){"use strict";var _base=__webpack_require__("9873"),_md=_interopRequireDefault(__webpack_require__("205e")),_siteinfo=_interopRequireDefault(__webpack_require__("d1ce")),_request=_interopRequireDefault(__webpack_require__("e1e2"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var util={};function getQuery(t){var e=[];if(-1!=t.indexOf("?"))for(var n=t.split("?")[1],r=n.split("&"),i=0;i<r.length;i++)r[i].split("=")[0]&&unescape(r[i].split("=")[1])&&(e[i]={name:r[i].split("=")[0],value:unescape(r[i].split("=")[1])});return e}function getUrlParam(t,e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t.split("?")[1].match(n);return null!=r?unescape(r[2]):null}function getSign(t,e,n){var r=__webpack_require__("2c85"),i=__webpack_require__("205e"),o="",a=getUrlParam(t,"sign");if(a||e&&e.sign)return!1;if(t&&(o=getQuery(t)),e){var s=[];for(var u in e)u&&e[u]&&(s=s.concat({name:u,value:e[u]}));o=o.concat(s)}o=r.sortBy(o,"name"),o=r.uniq(o,!0,"name");for(var c="",l=0;l<o.length;l++)o[l]&&o[l].name&&o[l].value&&(c+=o[l].name+"="+o[l].value,l<o.length-1&&(c+="&"));return n=n||_siteinfo.default.token,a=i(c+n),a}util.base64Encode=function(t){return(0,_base.base64_encode)(t)},util.base64Decode=function(t){return(0,_base.base64_decode)(t)},util.md5=function(t){return(0,_md.default)(t)},util.url=function(t,e){getApp();var n=_siteinfo.default.siteroot+"?i="+_siteinfo.default.uniacid+"&t="+_siteinfo.default.multiid+"&v="+_siteinfo.default.version+"&from=wxapp&";if(t&&(t=t.split("/"),t[0]&&(n+="c="+t[0]+"&"),t[1]&&(n+="a="+t[1]+"&"),t[2]&&(n+="do="+t[2]+"&")),e&&"object"===typeof e)for(var r in e)r&&e.hasOwnProperty(r)&&e[r]&&(n+=r+"="+e[r]+"&");return n},util.getSign=function(t,e,n){return getSign(t,e,n)},util.request_old=function(t){var e=new _request.default;e.setConfig(function(t){return t.baseUrl="http://www.aaa.cn",t.header={a:1,b:2},t}),e.interceptor.request(function(t,e){return t.header=_objectSpread({},t.header,{a:1}),t}),e.interceptor.response(function(t){return t}),e.get("/user/login",{userName:"name",password:"123456"},{header:{},dataType:"json",responseType:"text"}).then(function(t){}).catch(function(t){})},util.request=function(t){__webpack_require__("2c85");var e,n=__webpack_require__("205e"),r=getApp();t=t||{};t.cachetime=t.cachetime?t.cachetime:0,t.showLoading="undefined"==typeof t.showLoading||t.showLoading;var i=wx.getStorageSync("userInfo").sessionid,o=t.url;-1==o.indexOf("http://")&&-1==o.indexOf("https://")&&(o=util.url(o));var a=getUrlParam(o,"state");if(a||t.data&&t.data.state||!i||(o=o+"&state=we7sid-"+i),!t.data||!t.data.m){var s=getCurrentPages();s.length&&(s=s[getCurrentPages().length-1],s&&s.__route__&&(o=o+"&m="+s.__route__.split("/")[0]))}var u=getSign(o,t.data);if(u&&(o=o+"&sign="+u),!o)return!1;if(wx.showNavigationBarLoading(),t.showLoading&&util.showLoading(),t.cachetime){var c=n(o),l=wx.getStorageSync(c),f=Date.parse(new Date);if(l&&l.data){if(l.expire>f)return t.complete&&"function"==typeof t.complete&&t.complete(l),t.success&&"function"==typeof t.success&&t.success(l),console.log("cache:"+o),wx.hideLoading(),wx.hideNavigationBarLoading(),!0;wx.removeStorageSync(c)}}wx.request((e={url:o,data:t.data?t.data:{},async:!1,header:t.header?t.header:{},method:t.method?t.method:"GET"},_defineProperty(e,"header",{"content-type":"application/x-www-form-urlencoded"}),_defineProperty(e,"success",function(e){if(wx.hideNavigationBarLoading(),wx.hideLoading(),e.data.errno){if("41009"==e.data.errno)return wx.setStorageSync("userInfo",""),void util.getUserInfo(function(){util.request(t)});if(t.fail&&"function"==typeof t.fail)t.fail(e);else if(e.data.message){if(null!=e.data.data&&e.data.data.redirect)var n=e.data.data.redirect;else n="";r.util.message(e.data.message,n,"error")}}else if(t.success&&"function"==typeof t.success&&t.success(e),t.cachetime){var i={data:e.data,expire:f+1e3*t.cachetime};wx.setStorageSync(c,i)}}),_defineProperty(e,"fail",function(e){wx.hideNavigationBarLoading(),wx.hideLoading();var n=__webpack_require__("f576"),r=n(o),i=wx.getStorageSync(r);if(i&&i.data)return t.success&&"function"==typeof t.success&&t.success(i),console.log("failreadcache:"+o),!0;t.fail&&"function"==typeof t.fail&&t.fail(e)}),_defineProperty(e,"complete",function(e){t.complete&&"function"==typeof t.complete&&t.complete(e)}),e))},util.getWe7User=function(t,e){var n=wx.getStorageSync("userInfo")||{};util.request({url:"auth/session/openid",data:{code:e||""},cachetime:0,showLoading:!1,success:function(e){e.data.errno||(n.sessionid=e.data.data.sessionid,n.memberInfo=e.data.data.userinfo,wx.setStorageSync("userInfo",n)),"function"==typeof t&&t(n)}})},util.upadteUser=function(t,e){var n=wx.getStorageSync("userInfo");if(!t)return"function"==typeof e&&e(n);n.wxInfo=t.userInfo,util.request({url:"auth/session/userinfo",data:{signature:t.signature,rawData:t.rawData,iv:t.iv,encryptedData:t.encryptedData},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},cachetime:0,success:function(t){t.data.errno||(n.memberInfo=t.data.data,wx.setStorageSync("userInfo",n)),"function"==typeof e&&e(n)}})},util.checkSession=function(t){util.request({url:"auth/session/check",method:"POST",cachetime:0,showLoading:!1,success:function(e){e.data.errno?"function"==typeof t.fail&&t.fail():"function"==typeof t.success&&t.success()},fail:function(){"function"==typeof t.fail&&t.fail()}})},util.getUserInfo=function(t,e){var n=function(){console.log("start login");wx.login({success:function(n){util.getWe7User(function(n){e?util.upadteUser(e,function(e){"function"==typeof t&&t(e)}):wx.canIUse("getUserInfo")?wx.getUserInfo({withCredentials:!0,success:function(e){util.upadteUser(e,function(e){"function"==typeof t&&t(e)})},fail:function(){"function"==typeof t&&t(n)}}):"function"==typeof t&&t(n)},n.code)},fail:function(){wx.showModal({title:"获取信息失败",content:"请允许授权以便为您提供给服务",success:function(t){t.confirm&&util.getUserInfo()}})}})},r=wx.getStorageSync("userInfo")||{};r.sessionid?util.checkSession({success:function(){e?util.upadteUser(e,function(e){"function"==typeof t&&t(e)}):"function"==typeof t&&t(r)},fail:function(){r.sessionid="",console.log("relogin"),wx.removeStorageSync("userInfo"),n()}}):n()},util.navigateBack=function(t){var e=t.delta?t.delta:1;if(t.data){var n=getCurrentPages(),r=n[n.length-(e+1)];r.pageForResult?r.pageForResult(t.data):r.setData(t.data)}wx.navigateBack({delta:e,success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(){"function"==typeof t.complete&&t.complete()}})},util.footer=function(t){var e=getApp(),n=t,r=e.tabBar;for(var i in r["list"])r["list"][i]["pageUrl"]=r["list"][i]["pagePath"].replace(/(\?|#)[^"]*/g,"");n.setData({tabBar:r,"tabBar.thisurl":n.__route__})},util.message=function(t,e,n){if(!t)return!0;if("object"==typeof t&&(e=t.redirect,n=t.type,t=t.title),e){var r=e.substring(0,9),i="",o="";"navigate:"==r?(o="navigateTo",i=e.substring(9)):"redirect:"==r?(o="redirectTo",i=e.substring(9)):(i=e,o="redirectTo")}console.log(i),n||(n="success"),"success"==n?wx.showToast({title:t,icon:"success",duration:2e3,mask:!!i,complete:function(){i&&setTimeout(function(){wx[o]({url:i})},1800)}}):"error"==n&&wx.showModal({title:"系统信息",content:t,showCancel:!1,complete:function(){i&&wx[o]({url:i})}})},util.user=util.getUserInfo,util.showLoading=function(){var t=wx.getStorageSync("isShowLoading");t&&(wx.hideLoading(),wx.setStorageSync("isShowLoading",!1)),wx.showLoading({title:"加载中",complete:function(){wx.setStorageSync("isShowLoading",!0)},fail:function(){wx.setStorageSync("isShowLoading",!1)}})},util.showImage=function(t){var e=t?t.currentTarget.dataset.preview:"";if(!e)return!1;wx.previewImage({urls:[e]})},util.parseContent=function(t){if(!t)return t;var e=["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"],n=t.match(new RegExp(e.join("|"),"g"));if(n)for(var r in n)t=t.replace(n[r],"[U+"+n[r].codePointAt(0).toString(16).toUpperCase()+"]");return t},util.date=function(){this.isLeapYear=function(t){return 0==t.getYear()%4&&(t.getYear()%100!=0||t.getYear()%400==0)},this.dateToStr=function(t,e){t=arguments[0]||"yyyy-MM-dd HH:mm:ss",e=arguments[1]||new Date;var n=t,r=["日","一","二","三","四","五","六"];return n=n.replace(/yyyy|YYYY/,e.getFullYear()),n=n.replace(/yy|YY/,e.getYear()%100>9?(e.getYear()%100).toString():"0"+e.getYear()%100),n=n.replace(/MM/,e.getMonth()>9?e.getMonth()+1:"0"+(e.getMonth()+1)),n=n.replace(/M/g,e.getMonth()),n=n.replace(/w|W/g,r[e.getDay()]),n=n.replace(/dd|DD/,e.getDate()>9?e.getDate().toString():"0"+e.getDate()),n=n.replace(/d|D/g,e.getDate()),n=n.replace(/hh|HH/,e.getHours()>9?e.getHours().toString():"0"+e.getHours()),n=n.replace(/h|H/g,e.getHours()),n=n.replace(/mm/,e.getMinutes()>9?e.getMinutes().toString():"0"+e.getMinutes()),n=n.replace(/m/g,e.getMinutes()),n=n.replace(/ss|SS/,e.getSeconds()>9?e.getSeconds().toString():"0"+e.getSeconds()),n=n.replace(/s|S/g,e.getSeconds()),n},this.dateAdd=function(t,e,n){switch(n=arguments[2]||new Date,t){case"s":return new Date(n.getTime()+1e3*e);case"n":return new Date(n.getTime()+6e4*e);case"h":return new Date(n.getTime()+36e5*e);case"d":return new Date(n.getTime()+864e5*e);case"w":return new Date(n.getTime()+6048e5*e);case"m":return new Date(n.getFullYear(),n.getMonth()+e,n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());case"y":return new Date(n.getFullYear()+e,n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds())}},this.dateDiff=function(t,e,n){switch(t){case"s":return parseInt((n-e)/1e3);case"n":return parseInt((n-e)/6e4);case"h":return parseInt((n-e)/36e5);case"d":return parseInt((n-e)/864e5);case"w":return parseInt((n-e)/6048e5);case"m":return n.getMonth()+1+12*(n.getFullYear()-e.getFullYear())-(e.getMonth()+1);case"y":return n.getFullYear()-e.getFullYear()}},this.strToDate=function(dateStr){var data=dateStr,reCat=/(\d{1,4})/gm,t=data.match(reCat);return t[1]=t[1]-1,eval("var d = new Date("+t.join(",")+");"),d},this.strFormatToDate=function(t,e){var n=0,r=-1,i=e.length;(r=t.indexOf("yyyy"))>-1&&r<i&&(n=e.substr(r,4));var o=0;(r=t.indexOf("MM"))>-1&&r<i&&(o=parseInt(e.substr(r,2))-1);var a=0;(r=t.indexOf("dd"))>-1&&r<i&&(a=parseInt(e.substr(r,2)));var s=0;((r=t.indexOf("HH"))>-1||(r=t.indexOf("hh"))>1)&&r<i&&(s=parseInt(e.substr(r,2)));var u=0;(r=t.indexOf("mm"))>-1&&r<i&&(u=e.substr(r,2));var c=0;return(r=t.indexOf("ss"))>-1&&r<i&&(c=e.substr(r,2)),new Date(n,o,a,s,u,c)},this.dateToLong=function(t){return t.getTime()},this.longToDate=function(t){return new Date(t)},this.isDate=function(t,e){null==e&&(e="yyyyMMdd");var n=e.indexOf("yyyy");if(-1==n)return!1;var r=t.substring(n,n+4),i=e.indexOf("MM");if(-1==i)return!1;var o=t.substring(i,i+2),a=e.indexOf("dd");if(-1==a)return!1;var s=t.substring(a,a+2);return!(!isNumber(r)||r>"2100"||r<"1900")&&(!(!isNumber(o)||o>"12"||o<"01")&&!(s>getMaxDay(r,o)||s<"01"))},this.getMaxDay=function(t,e){return 4==e||6==e||9==e||11==e?"30":2==e?t%4==0&&t%100!=0||t%400==0?"29":"28":"31"},this.isNumber=function(t){var e=/^\d+$/g;return e.test(t)},this.toArray=function(t){t=arguments[0]||new Date;var e=Array();return e[0]=t.getFullYear(),e[1]=t.getMonth(),e[2]=t.getDate(),e[3]=t.getHours(),e[4]=t.getMinutes(),e[5]=t.getSeconds(),e},this.datePart=function(t,e){e=arguments[1]||new Date;var n="",r=["日","一","二","三","四","五","六"];switch(t){case"y":n=e.getFullYear();break;case"M":n=e.getMonth()+1;break;case"d":n=e.getDate();break;case"w":n=r[e.getDay()];break;case"ww":n=e.WeekNumOfYear();break;case"h":n=e.getHours();break;case"m":n=e.getMinutes();break;case"s":n=e.getSeconds();break}return n},this.maxDayOfDate=function(t){t=arguments[0]||new Date,t.setDate(1),t.setMonth(t.getMonth()+1);var e=t.getTime()-864e5,n=new Date(e);return n.getDate()}},module.exports=util},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Se,e.createPage=ke,e.default=void 0;var r=i(n("f3d3"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return p(t)||h(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function w(t,e){return v.call(t,e)}function b(){}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,k=_(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],C={},A={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?E(n):n}function E(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function T(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&(t[n]=O(t[n],e[n]))})}function $(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&T(t[n],e[n])})}function P(t,e){"string"===typeof t&&m(e)?j(A[t]||(A[t]={}),e):m(t)&&j(C,t)}function I(t,e){"string"===typeof t?m(e)?$(A[t],e):delete A[t]:m(t)&&$(C,t)}function L(t){return function(e){return t(e)||e}}function M(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(L(i));else{var o=i(e);if(M(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function B(t,e){var n=[];Array.isArray(C.returnValue)&&n.push.apply(n,l(C.returnValue));var r=A[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(C).forEach(function(t){"returnValue"!==t&&(e[t]=C[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=N(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[D(a,t)].concat(i))})}return e.apply(void 0,[D(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var q={returnValue:function(t){return M(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,Y=/^on/;function V(t){return W.test(t)}function H(t){return F.test(t)}function z(t){return Y.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||H(t)||z(t))}function K(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?B(t,U.apply(void 0,[t,e,n].concat(i))):B(t,G(new Promise(function(r,o){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Z?.5:1:t<0?-n:n}var it={promiseInterceptor:q},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:P,removeInterceptor:I}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(ht(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var o=!0===i?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(w(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:m(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return g(e)&&(e=lt(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function pt(t,e){if(w(at,t)){var n=at[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=ft(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return H(t)?ht(t,a,i.returnValue,V(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function wt(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function _t(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function xt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({$on:wt,$off:bt,$once:_t,$emit:xt});function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function Ct(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Ot=Object.freeze({requireNativePlugin:At,getSubNVueById:Ct}),Et=Page,Tt=Component,jt=/:/g,$t=_(function(t){return k(t.replace(jt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[$t(n)].concat(i))}}}function It(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Tt(t)};var Lt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Mt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){w(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Dt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Bt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||w(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Yt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Ht(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Ht(t.props,!0)}))}),a}function Vt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Wt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var i=r["default"];g(i)&&(i=i()),r.type=Vt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:Wt(e)}}else{var o=Vt(e,r);n[e]={type:-1!==Ft.indexOf(o)?o:null,observer:Wt(e)}}}),n}function zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},w(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Jt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Gt(t,e)}),r}function Kt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Jt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Kt(t)):"string"===typeof t&&w(s,t)?u.push(s[t]):u.push(t)}),u}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}o.push(a.apply(i,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Mt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Dt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function fe(t){return re(t,{mocks:ie,initRefs:ce})}var he=["onUniNViewMessage"];function pe(t){var e=fe(t);return Dt(e,he),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Bt(r.default,t),s=o(a,2),u=s[0],c=s[1],l={options:{multipleSlots:!0,addGlobalClass:!0},data:qt(c,r.default.prototype),behaviors:Yt(c,ae),properties:Ht(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return n?l:[l,u]}function ge(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function we(t,e){e.isPage,e.initRelation;var n=ye(t);return Dt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return we(t,{isPage:se,initRelation:ue})}me.push.apply(me,Lt);var _e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function xe(t){var e=be(t);return Dt(e.methods,_e),e}function ke(t){return Component(xe(t))}function Se(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ce={};Object.keys(ot).forEach(function(t){Ce[t]=ot[t]}),Object.keys(kt).forEach(function(t){Ce[t]=kt[t]}),Object.keys(Ot).forEach(function(t){Ce[t]=K(t,Ot[t])}),Object.keys(wx).forEach(function(t){(w(wx,t)||w(at,t))&&(Ce[t]=K(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ce,t.UniEmitter=kt),wx.createApp=de,wx.createPage=ke,wx.createComponent=Se;var Ae=Ce,Oe=Ae;e.default=Oe}).call(this,n("c8ba"))},7275:function(t,e,n){"use strict";n.r(e);var r=n("b96e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"780f":function(t,e,n){"use strict";t.exports=o;var r=n("27bf"),i=n("3a7c");function o(t){if(!(this instanceof o))return new o(t);r.call(this,t)}i.inherits=n("3fb5"),i.inherits(o,r),o.prototype._transform=function(t,e,n){n(null,t)}},"7d72":function(t,e,n){"use strict";var r=n("8707").Buffer,i=r.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){if(!t)return"utf8";var e;while(1)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function a(t){var e=o(t);if("string"!==typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}function s(t){var e;switch(this.encoding=a(t),this.encoding){case"utf16le":this.text=d,this.end=v,e=4;break;case"utf8":this.fillLast=f,e=4;break;case"base64":this.text=g,this.end=y,e=3;break;default:return this.write=m,void(this.end=w)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function u(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function c(t,e,n){var r=e.length-1;if(r<n)return 0;var i=u(e[r]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--r<n||-2===i?0:(i=u(e[r]),i>=0?(i>0&&(t.lastNeed=i-2),i):--r<n||-2===i?0:(i=u(e[r]),i>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0))}function l(t,e,n){if(128!==(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!==(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!==(192&e[2]))return t.lastNeed=2,"�"}}function f(t){var e=this.lastTotal-this.lastNeed,n=l(this,t,e);return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function h(t,e){var n=c(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=n;var r=t.length-(n-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)}function p(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function d(t,e){if((t.length-e)%2===0){var n=t.toString("utf16le",e);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function v(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,n)}return e}function g(t,e){var n=(t.length-e)%3;return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function y(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function m(t){return t.toString(this.encoding)}function w(t){return t&&t.length?this.write(t):""}e.StringDecoder=s,s.prototype.write=function(t){if(0===t.length)return"";var e,n;if(this.lastNeed){if(e=this.fillLast(t),void 0===e)return"";n=this.lastNeed,this.lastNeed=0}else n=0;return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},s.prototype.end=p,s.prototype.text=h,s.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},8707:function(t,e,n){var r=n("b639"),i=r.Buffer;function o(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=a),o(i,a),a.from=function(t,e,n){if("number"===typeof t)throw new TypeError("Argument must not be a number");return i(t,e,n)},a.alloc=function(t,e,n){if("number"!==typeof t)throw new TypeError("Argument must be a number");var r=i(t);return void 0!==e?"string"===typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return i(t)},a.allocUnsafeSlow=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},9152:function(t,e){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,f=n?i-1:0,h=n?-1:1,p=t[e+f];for(f+=h,o=p&(1<<-l)-1,p>>=-l,l+=s;l>0;o=256*o+t[e+f],f+=h,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+t[e+f],f+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,r),o-=c}return(p?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,v=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),e+=a+f>=1?h/u:h*Math.pow(2,1-f),e*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(e*u-1)*Math.pow(2,i),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;t[n+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;t[n+p]=255&a,p+=d,a/=256,c-=8);t[n+p-d]|=128*v}},"93e6":function(t,e,n){"use strict";var r=n("8707").Buffer,i=n("d485").Transform,o=n("3fb5");function a(t,e){if(!r.isBuffer(t)&&"string"!==typeof t)throw new TypeError(e+" must be a string or a buffer")}function s(t){i.call(this),this._block=r.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}o(s,i),s.prototype._transform=function(t,e,n){var r=null;try{this.update(t,e)}catch(i){r=i}n(r)},s.prototype._flush=function(t){var e=null;try{this.push(this.digest())}catch(n){e=n}t(e)},s.prototype.update=function(t,e){if(a(t,"Data"),this._finalized)throw new Error("Digest already called");r.isBuffer(t)||(t=r.from(t,e));var n=this._block,i=0;while(this._blockOffset+t.length-i>=this._blockSize){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=t[i++];this._update(),this._blockOffset=0}while(i<t.length)n[this._blockOffset++]=t[i++];for(var s=0,u=8*t.length;u>0;++s)this._length[s]+=u,u=this._length[s]/4294967296|0,u>0&&(this._length[s]-=4294967296*u);return this},s.prototype._update=function(){throw new Error("_update is not implemented")},s.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var e=this._digest();void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;for(var n=0;n<4;++n)this._length[n]=0;return e},s.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=s},9439:function(t,e,n){},"94da":function(t,e,n){"use strict";n.r(e);var r=n("f150"),i=n("7275");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3002");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"966d":function(t,e,n){"use strict";(function(e){function n(t,n,r,i){if("function"!==typeof t)throw new TypeError('"callback" argument must be a function');var o,a,s=arguments.length;switch(s){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick(function(){t.call(null,n)});case 3:return e.nextTick(function(){t.call(null,n,r)});case 4:return e.nextTick(function(){t.call(null,n,r,i)});default:o=new Array(s-1),a=0;while(a<o.length)o[a++]=arguments[a];return e.nextTick(function(){t.apply(null,o)})}}!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:n}:t.exports=e}).call(this,n("4362"))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==r&&i.call(m,a)&&(g=m);var w=S.prototype=x.prototype=Object.create(g);k.prototype=w.constructor=S,S.constructor=k,S[u]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(A.prototype),A.prototype[s]=function(){return this},l.AsyncIterator=A,l.async=function(t,e,n,r){var i=new A(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new $(r||[]);return o._invoke=O(t,n,a),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function k(){}function S(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,r,o,a){var s=_(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return I()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=_(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9873:function(t,e,n){"use strict";function r(t){var e,n,r,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=t.length,s="";while(o<a){if(e=255&t.charCodeAt(o++),o==a){s+=i.charAt(e>>2),s+=i.charAt((3&e)<<4),s+="==";break}if(n=t.charCodeAt(o++),o==a){s+=i.charAt(e>>2),s+=i.charAt((3&e)<<4|(240&n)>>4),s+=i.charAt((15&n)<<2),s+="=";break}r=t.charCodeAt(o++),s+=i.charAt(e>>2),s+=i.charAt((3&e)<<4|(240&n)>>4),s+=i.charAt((15&n)<<2|(192&r)>>6),s+=i.charAt(63&r)}return s}function i(t){var e,n,r,i,o=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),a=0,s=t.length,u="";while(a<s){do{e=o[255&t.charCodeAt(a++)]}while(a<s&&-1==e);if(-1==e)break;do{n=o[255&t.charCodeAt(a++)]}while(a<s&&-1==n);if(-1==n)break;u+=String.fromCharCode(e<<2|(48&n)>>4);do{if(r=255&t.charCodeAt(a++),61==r)return u;r=o[r]}while(a<s&&-1==r);if(-1==r)break;u+=String.fromCharCode((15&n)<<4|(60&r)>>2);do{if(i=255&t.charCodeAt(a++),61==i)return u;i=o[i]}while(a<s&&-1==i);if(-1==i)break;u+=String.fromCharCode((3&r)<<6|i)}return u}t.exports={base64_encode:r,base64_decode:i}},a0fc:function(t,e,n){},a1e7:function(t,e,n){"use strict";n.r(e);var r=n("18cb"),i=n("4d31");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("adec");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},a34a:function(t,e,n){t.exports=n("bbdd")},ad71:function(t,e,n){"use strict";(function(e,r){var i=n("966d");t.exports=x;var o,a=n("e3db");x.ReadableState=_;n("faa1").EventEmitter;var s=function(t,e){return t.listeners(e).length},u=n("429b"),c=n("8707").Buffer,l=e.Uint8Array||function(){};function f(t){return c.from(t)}function h(t){return c.isBuffer(t)||t instanceof l}var p=n("3a7c");p.inherits=n("3fb5");var d=n(0),v=void 0;v=d&&d.debuglog?d.debuglog("stream"):function(){};var g,y=n("5e1a"),m=n("4681");p.inherits(x,u);var w=["error","close","destroy","pause","resume"];function b(t,e,n){if("function"===typeof t.prependListener)return t.prependListener(e,n);t._events&&t._events[e]?a(t._events[e])?t._events[e].unshift(n):t._events[e]=[n,t._events[e]]:t.on(e,n)}function _(t,e){o=o||n("b19a"),t=t||{};var r=e instanceof o;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var i=t.highWaterMark,a=t.readableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(a||0===a)?a:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(g||(g=n("7d72").StringDecoder),this.decoder=new g(t.encoding),this.encoding=t.encoding)}function x(t){if(o=o||n("b19a"),!(this instanceof x))return new x(t);this._readableState=new _(t,this),this.readable=!0,t&&("function"===typeof t.read&&(this._read=t.read),"function"===typeof t.destroy&&(this._destroy=t.destroy)),u.call(this)}function k(t,e,n,r,i){var o,a=t._readableState;null===e?(a.reading=!1,j(t,a)):(i||(o=C(a,e)),o?t.emit("error",o):a.objectMode||e&&e.length>0?("string"===typeof e||a.objectMode||Object.getPrototypeOf(e)===c.prototype||(e=f(e)),r?a.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):S(t,a,e,!0):a.ended?t.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!n?(e=a.decoder.write(e),a.objectMode||0!==e.length?S(t,a,e,!1):I(t,a)):S(t,a,e,!1))):r||(a.reading=!1));return A(a)}function S(t,e,n,r){e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,r?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&$(t)),I(t,e)}function C(t,e){var n;return h(e)||"string"===typeof e||void 0===e||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function A(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}Object.defineProperty(x.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),x.prototype.destroy=m.destroy,x.prototype._undestroy=m.undestroy,x.prototype._destroy=function(t,e){this.push(null),e(t)},x.prototype.push=function(t,e){var n,r=this._readableState;return r.objectMode?n=!0:"string"===typeof t&&(e=e||r.defaultEncoding,e!==r.encoding&&(t=c.from(t,e),e=""),n=!0),k(this,t,e,!1,n)},x.prototype.unshift=function(t){return k(this,t,null,!0,!1)},x.prototype.isPaused=function(){return!1===this._readableState.flowing},x.prototype.setEncoding=function(t){return g||(g=n("7d72").StringDecoder),this._readableState.decoder=new g(t),this._readableState.encoding=t,this};var O=8388608;function E(t){return t>=O?t=O:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}function T(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!==t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=E(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function j(t,e){if(!e.ended){if(e.decoder){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,$(t)}}function $(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(v("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?i.nextTick(P,t):P(t))}function P(t){v("emit readable"),t.emit("readable"),N(t)}function I(t,e){e.readingMore||(e.readingMore=!0,i.nextTick(L,t,e))}function L(t,e){var n=e.length;while(!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark){if(v("maybeReadMore read 0"),t.read(0),n===e.length)break;n=e.length}e.readingMore=!1}function M(t){return function(){var e=t._readableState;v("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&s(t,"data")&&(e.flowing=!0,N(t))}}function R(t){v("readable nexttick read 0"),t.read(0)}function D(t,e){e.resumeScheduled||(e.resumeScheduled=!0,i.nextTick(B,t,e))}function B(t,e){e.reading||(v("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),N(t),e.flowing&&!e.reading&&t.read(0)}function N(t){var e=t._readableState;v("flow",e.flowing);while(e.flowing&&null!==t.read());}function U(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):n=q(t,e.buffer,e.decoder),n);var n}function q(t,e,n){var r;return t<e.head.data.length?(r=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):r=t===e.head.data.length?e.shift():n?F(t,e):W(t,e),r}function F(t,e){var n=e.head,r=1,i=n.data;t-=i.length;while(n=n.next){var o=n.data,a=t>o.length?o.length:t;if(a===o.length?i+=o:i+=o.slice(0,t),t-=a,0===t){a===o.length?(++r,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(a));break}++r}return e.length-=r,i}function W(t,e){var n=c.allocUnsafe(t),r=e.head,i=1;r.data.copy(n),t-=r.data.length;while(r=r.next){var o=r.data,a=t>o.length?o.length:t;if(o.copy(n,n.length-t,0,a),t-=a,0===t){a===o.length?(++i,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(a));break}++i}return e.length-=i,n}function Y(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,i.nextTick(V,e,t))}function V(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function H(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}x.prototype.read=function(t){v("read",t),t=parseInt(t,10);var e=this._readableState,n=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return v("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?Y(this):$(this),null;if(t=T(t,e),0===t&&e.ended)return 0===e.length&&Y(this),null;var r,i=e.needReadable;return v("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&(i=!0,v("length less than watermark",i)),e.ended||e.reading?(i=!1,v("reading or ended",i)):i&&(v("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=T(n,e))),r=t>0?U(t,e):null,null===r?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&Y(this)),null!==r&&this.emit("data",r),r},x.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},x.prototype.pipe=function(t,e){var n=this,o=this._readableState;switch(o.pipesCount){case 0:o.pipes=t;break;case 1:o.pipes=[o.pipes,t];break;default:o.pipes.push(t);break}o.pipesCount+=1,v("pipe count=%d opts=%j",o.pipesCount,e);var a=(!e||!1!==e.end)&&t!==r.stdout&&t!==r.stderr,u=a?l:_;function c(t,e){v("onunpipe"),t===n&&e&&!1===e.hasUnpiped&&(e.hasUnpiped=!0,p())}function l(){v("onend"),t.end()}o.endEmitted?i.nextTick(u):n.once("end",u),t.on("unpipe",c);var f=M(n);t.on("drain",f);var h=!1;function p(){v("cleanup"),t.removeListener("close",m),t.removeListener("finish",w),t.removeListener("drain",f),t.removeListener("error",y),t.removeListener("unpipe",c),n.removeListener("end",l),n.removeListener("end",_),n.removeListener("data",g),h=!0,!o.awaitDrain||t._writableState&&!t._writableState.needDrain||f()}var d=!1;function g(e){v("ondata"),d=!1;var r=t.write(e);!1!==r||d||((1===o.pipesCount&&o.pipes===t||o.pipesCount>1&&-1!==H(o.pipes,t))&&!h&&(v("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,d=!0),n.pause())}function y(e){v("onerror",e),_(),t.removeListener("error",y),0===s(t,"error")&&t.emit("error",e)}function m(){t.removeListener("finish",w),_()}function w(){v("onfinish"),t.removeListener("close",m),_()}function _(){v("unpipe"),n.unpipe(t)}return n.on("data",g),b(t,"error",y),t.once("close",m),t.once("finish",w),t.emit("pipe",n),o.flowing||(v("pipe resume"),n.resume()),t},x.prototype.unpipe=function(t){var e=this._readableState,n={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,n),this);if(!t){var r=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)r[o].emit("unpipe",this,n);return this}var a=H(e.pipes,t);return-1===a?this:(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,n),this)},x.prototype.on=function(t,e){var n=u.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var r=this._readableState;r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&$(this):i.nextTick(R,this))}return n},x.prototype.addListener=x.prototype.on,x.prototype.resume=function(){var t=this._readableState;return t.flowing||(v("resume"),t.flowing=!0,D(this,t)),this},x.prototype.pause=function(){return v("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(v("pause"),this._readableState.flowing=!1,this.emit("pause")),this},x.prototype.wrap=function(t){var e=this,n=this._readableState,r=!1;for(var i in t.on("end",function(){if(v("wrapped end"),n.decoder&&!n.ended){var t=n.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(i){if(v("wrapped data"),n.decoder&&(i=n.decoder.write(i)),(!n.objectMode||null!==i&&void 0!==i)&&(n.objectMode||i&&i.length)){var o=e.push(i);o||(r=!0,t.pause())}}),t)void 0===this[i]&&"function"===typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));for(var o=0;o<w.length;o++)t.on(w[o],this.emit.bind(this,w[o]));return this._read=function(e){v("wrapped _read",e),r&&(r=!1,t.resume())},this},Object.defineProperty(x.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),x._fromList=U}).call(this,n("c8ba"),n("4362"))},adec:function(t,e,n){"use strict";var r=n("ec23"),i=n.n(r);i.a},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),i=n.n(r);function o(t,e,n){var r,i=t.$options[e];if("onError"===e&&i&&(i=[i]),"function"===typeof i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)r=i[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return o(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new i.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var o=r.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",o(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",o(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",o(t,"onHide")},onUnload:function(){var t=a(this);o(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);o(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);o(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);o(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);o(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return o(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);o(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);o(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);o(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);o(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return o(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b19a:function(t,e,n){"use strict";var r=n("966d"),i=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e};t.exports=f;var o=n("3a7c");o.inherits=n("3fb5");var a=n("ad71"),s=n("dc14");o.inherits(f,a);for(var u=i(s.prototype),c=0;c<u.length;c++){var l=u[c];f.prototype[l]||(f.prototype[l]=s.prototype[l])}function f(t){if(!(this instanceof f))return new f(t);a.call(this,t),s.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",h)}function h(){this.allowHalfOpen||this._writableState.ended||r.nextTick(p,this)}function p(t){t.end()}Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),f.prototype._destroy=function(t,e){this.push(null),this.end(),r.nextTick(e,t)}},b4f6:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"cu-bar bg-white"},[n("view",{staticClass:"action"}),n("view",{staticClass:"content text-bold"},[t._v("鲜亮的高饱和色彩，专注视觉的小程序组件库")]),n("view",{staticClass:"action"},[n("text",{staticClass:"cuIcon-refresh text-gray"})])]),n("view",{staticClass:"bg-img bg-mask flex align-center",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg')",height:"414rpx"}},[n("view",{staticClass:"padding-xl text-white"},[n("view",{staticClass:"padding-xs text-xxl text-bold"},[t._v("钢铁之翼")]),n("view",{staticClass:"padding-xs text-lg"},[t._v("Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me.")])])]),n("view",{staticClass:"solids-bottom padding-xs flex align-center"},[n("view",{staticClass:"flex-sub text-center"},[n("view",{staticClass:"solid-bottom text-lg padding"},[n("text",{staticClass:"text-black"},[t._v("ColorUI组件库")])]),n("view",{staticClass:"padding"},[t._v("页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容\n\t\t\t\t页面小标题，首要层级显示内容")])])]),n("view",{staticClass:"bg-img bg-mask flex align-center",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg')",height:"414rpx"}},[n("view",{staticClass:"padding-xl text-white"},[n("view",{staticClass:"padding-xs text-xxl text-bold"},[t._v("钢铁之翼")]),n("view",{staticClass:"padding-xs text-lg"},[t._v("Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me.")])])]),n("view",{staticClass:"solids-bottom padding-xs flex align-center"},[n("view",{staticClass:"flex-sub text-center"},[n("view",{staticClass:"solid-bottom text-lg padding"},[n("text",{staticClass:"text-black"},[t._v("ColorUI组件库")])]),n("view",{staticClass:"padding"},[t._v("页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容 页面小标题，首要层级显示内容\n\t\t\t\t页面小标题，首要层级显示内容")])])]),n("view",{staticClass:"cu-tabbar-height"})])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},b639:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),i=n("9152"),o=n("e3db");function a(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function s(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=c.prototype):(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c))return new c(t,e,n);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return l(this,t,e,n)}function l(t,e,n,r){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?g(t,e,n,r):"string"===typeof e?d(t,e,n):y(t,e)}function f(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e,n,r){return f(e),e<=0?u(t,e):void 0!==n?"string"===typeof r?u(t,e).fill(n,r):u(t,e).fill(n):u(t,e)}function p(t,e){if(f(e),t=u(t,e<0?0:0|m(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e,n){if("string"===typeof n&&""!==n||(n="utf8"),!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|b(e,n);t=u(t,r);var i=t.write(e,n);return i!==r&&(t=t.slice(0,i)),t}function v(t,e){var n=e.length<0?0:0|m(e.length);t=u(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function g(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),c.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=c.prototype):t=v(t,e),t}function y(t,e){if(c.isBuffer(e)){var n=0|m(e.length);return t=u(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?u(t,0):v(t,e);if("Buffer"===e.type&&o(e.data))return v(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function m(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function w(t){return+t!=t&&(t=0),c.alloc(+t)}function b(t,e){if(c.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return K(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(t).length;default:if(r)return K(t).length;e=(""+e).toLowerCase(),r=!0}}function _(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return D(this,e,n);case"utf8":case"utf-8":return P(this,e,n);case"ascii":return M(this,e,n);case"latin1":case"binary":return R(this,e,n);case"base64":return $(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function x(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function k(t,e,n,r,i){if(0===t.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:S(t,e,n,r,i);if("number"===typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):S(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function S(t,e,n,r,i){var o,a=1,s=t.length,u=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(t,o)===c(e,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var f=!0,h=0;h<u;h++)if(c(t,o+h)!==c(e,h)){f=!1;break}if(f)return o}return-1}function C(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;a<r;++a){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))return a;t[n+a]=s}return a}function A(t,e,n,r){return tt(K(e,t.length-n),t,n,r)}function O(t,e,n,r){return tt(X(e),t,n,r)}function E(t,e,n,r){return O(t,e,n,r)}function T(t,e,n,r){return tt(Z(e),t,n,r)}function j(t,e,n,r){return tt(Q(e,t.length-n),t,n,r)}function $(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function P(t,e,n){n=Math.min(t.length,n);var r=[],i=e;while(i<n){var o,a,s,u,c=t[i],l=null,f=c>239?4:c>223?3:c>191?2:1;if(i+f<=n)switch(f){case 1:c<128&&(l=c);break;case 2:o=t[i+1],128===(192&o)&&(u=(31&c)<<6|63&o,u>127&&(l=u));break;case 3:o=t[i+1],a=t[i+2],128===(192&o)&&128===(192&a)&&(u=(15&c)<<12|(63&o)<<6|63&a,u>2047&&(u<55296||u>57343)&&(l=u));break;case 4:o=t[i+1],a=t[i+2],s=t[i+3],128===(192&o)&&128===(192&a)&&128===(192&s)&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s,u>65535&&u<1114112&&(l=u))}null===l?(l=65533,f=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=f}return L(r)}e.Buffer=c,e.SlowBuffer=w,e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:a(),e.kMaxLength=s(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return l(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return h(null,t,e,n)},c.allocUnsafe=function(t){return p(null,t)},c.allocUnsafeSlow=function(t){return p(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var a=t[n];if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r,i),i+=a.length}return r},c.byteLength=b,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)x(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)x(this,e,e+3),x(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)x(this,e,e+7),x(this,e+1,e+6),x(this,e+2,e+5),x(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):_.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,i){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,a=n-e,s=Math.min(o,a),u=this.slice(r,i),l=t.slice(e,n),f=0;f<s;++f)if(u[f]!==l[f]){o=u[f],a=l[f];break}return o<a?-1:a<o?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return k(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return k(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"===typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return C(this,t,e,n);case"utf8":case"utf-8":return A(this,t,e,n);case"ascii":return O(this,t,e,n);case"latin1":case"binary":return E(this,t,e,n);case"base64":return T(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var I=4096;function L(t){var e=t.length;if(e<=I)return String.fromCharCode.apply(String,t);var n="",r=0;while(r<e)n+=String.fromCharCode.apply(String,t.slice(r,r+=I));return n}function M(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function R(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function D(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=J(t[o]);return i}function B(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function N(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,i,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function q(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function F(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function W(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Y(t,e,n,r,o){return o||W(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),i.write(t,e,n,r,23,4),n+4}function V(t,e,n,r,o){return o||W(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),i.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=c.prototype;else{var i=e-t;n=new c(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);var r=this[t+--e],i=1;while(e>0&&(i*=256))r+=this[t+--e]*i;return r},c.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);var r=e,i=1,o=this[t+--r];while(r>0&&(i*=256))o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},c.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=1,a=0;this[e]=255&t;while(++a<n&&(o*=256))this[e+a]=t/o&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=n-1,a=1;this[e+o]=255&t;while(--o>=0&&(a*=256))this[e+o]=t/a&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=0,a=1,s=0;this[e]=255&t;while(++o<n&&(a*=256))t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0;this[e+o]=255&t;while(--o>=0&&(a*=256))t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):q(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):q(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return Y(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return Y(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return V(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return V(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},c.prototype.fill=function(t,e,n,r){if("string"===typeof t){if("string"===typeof e?(r=e,e=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(o=e;o<n;++o)this[o]=t;else{var a=c.isBuffer(t)?t:K(new c(t,r).toString()),s=a.length;for(o=0;o<n-e;++o)this[o+e]=a[o%s]}return this};var H=/[^+\/0-9A-Za-z-_]/g;function z(t){if(t=G(t).replace(H,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function G(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function J(t){return t<16?"0"+t.toString(16):t.toString(16)}function K(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],a=0;a<r;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function X(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function Q(t,e){for(var n,r,i,o=[],a=0;a<t.length;++a){if((e-=2)<0)break;n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)}return o}function Z(t){return r.toByteArray(z(t))}function tt(t,e,n,r){for(var i=0;i<r;++i){if(i+n>=e.length||i>=t.length)break;e[i+n]=t[i]}return i}function et(t){return t!==t}}).call(this,n("c8ba"))},b7d1:function(t,e,n){(function(e){function n(t,e){if(r("noDeprecation"))return t;var n=!1;function i(){if(!n){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}return i}function r(t){try{if(!e.localStorage)return!1}catch(r){return!1}var n=e.localStorage[t];return null!=n&&"true"===String(n).toLowerCase()}t.exports=n}).call(this,n("c8ba"))},b96e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Defaulttheam:this.Defaulttheam,isCard:!0,TabCur:0,animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(t){var e=this,n=t.currentTarget.dataset.class;this.animation=n,setTimeout(function(){e.animation=""},1e3)},ToggleDelay:function(){var t=this;this.toggleDelay=!0,setTimeout(function(){t.toggleDelay=!1},1e3)},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},myset:function(e){t.navigateTo({url:"/pages/main_page/myset/myset",animationType:"pop-in",animationDuration:200})}}};e.default=n}).call(this,n("6e42")["default"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c2ae:function(t,e,n){t.exports=n("e372").PassThrough},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d17b:function(t,e,n){t.exports=n("e372").Transform},d1ce:function(t,e,n){"use strict";var r={uniacid:"70",acid:"70",multiid:"10000",version:"1.0.0",siteroot:"https://www.91jdj.cn/app/index.php",token:12312};t.exports=r},d418:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{}};e.default=r},d485:function(t,e,n){t.exports=o;var r=n("faa1").EventEmitter,i=n("3fb5");function o(){r.call(this)}i(o,r),o.Readable=n("e372"),o.Writable=n("2c63"),o.Duplex=n("0960"),o.Transform=n("d17b"),o.PassThrough=n("c2ae"),o.Stream=o,o.prototype.pipe=function(t,e){var n=this;function i(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",s),n.on("close",u));var a=!1;function s(){a||(a=!0,t.end())}function u(){a||(a=!0,"function"===typeof t.destroy&&t.destroy())}function c(t){if(l(),0===r.listenerCount(this,"error"))throw t}function l(){n.removeListener("data",i),t.removeListener("drain",o),n.removeListener("end",s),n.removeListener("close",u),n.removeListener("error",c),t.removeListener("error",c),n.removeListener("end",l),n.removeListener("close",l),t.removeListener("close",l)}return n.on("error",c),t.on("error",c),n.on("end",l),n.on("close",l),t.on("close",l),t.emit("pipe",n),t}},dc14:function(t,e,n){"use strict";(function(e,r){var i=n("966d");function o(t){var e=this;this.next=null,this.entry=null,this.finish=function(){R(e,t)}}t.exports=w;var a,s=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?setImmediate:i.nextTick;w.WritableState=m;var u=n("3a7c");u.inherits=n("3fb5");var c={deprecate:n("b7d1")},l=n("429b"),f=n("8707").Buffer,h=r.Uint8Array||function(){};function p(t){return f.from(t)}function d(t){return f.isBuffer(t)||t instanceof h}var v,g=n("4681");function y(){}function m(t,e){a=a||n("b19a"),t=t||{};var r=e instanceof a;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var i=t.highWaterMark,s=t.writableHighWaterMark,u=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(s||0===s)?s:u,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var c=!1===t.decodeStrings;this.decodeStrings=!c,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){O(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function w(t){if(a=a||n("b19a"),!v.call(w,this)&&!(this instanceof a))return new w(t);this._writableState=new m(t,this),this.writable=!0,t&&("function"===typeof t.write&&(this._write=t.write),"function"===typeof t.writev&&(this._writev=t.writev),"function"===typeof t.destroy&&(this._destroy=t.destroy),"function"===typeof t.final&&(this._final=t.final)),l.call(this)}function b(t,e){var n=new Error("write after end");t.emit("error",n),i.nextTick(e,n)}function _(t,e,n,r){var o=!0,a=!1;return null===n?a=new TypeError("May not write null values to stream"):"string"===typeof n||void 0===n||e.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(t.emit("error",a),i.nextTick(r,a),o=!1),o}function x(t,e,n){return t.objectMode||!1===t.decodeStrings||"string"!==typeof e||(e=f.from(e,n)),e}function k(t,e,n,r,i,o){if(!n){var a=x(e,r,i);r!==a&&(n=!0,i="buffer",r=a)}var s=e.objectMode?1:r.length;e.length+=s;var u=e.length<e.highWaterMark;if(u||(e.needDrain=!0),e.writing||e.corked){var c=e.lastBufferedRequest;e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},c?c.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else S(t,e,!1,s,r,i,o);return u}function S(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function C(t,e,n,r,o){--e.pendingcb,n?(i.nextTick(o,r),i.nextTick(L,t,e),t._writableState.errorEmitted=!0,t.emit("error",r)):(o(r),t._writableState.errorEmitted=!0,t.emit("error",r),L(t,e))}function A(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function O(t,e){var n=t._writableState,r=n.sync,i=n.writecb;if(A(n),e)C(t,n,r,e,i);else{var o=$(n);o||n.corked||n.bufferProcessing||!n.bufferedRequest||j(t,n),r?s(E,t,n,o,i):E(t,n,o,i)}}function E(t,e,n,r){n||T(t,e),e.pendingcb--,r(),L(t,e)}function T(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function j(t,e){e.bufferProcessing=!0;var n=e.bufferedRequest;if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,i=new Array(r),a=e.corkedRequestsFree;a.entry=n;var s=0,u=!0;while(n)i[s]=n,n.isBuf||(u=!1),n=n.next,s+=1;i.allBuffers=u,S(t,e,!0,e.length,i,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new o(e),e.bufferedRequestCount=0}else{while(n){var c=n.chunk,l=n.encoding,f=n.callback,h=e.objectMode?1:c.length;if(S(t,e,!1,h,c,l,f),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function $(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function P(t,e){t._final(function(n){e.pendingcb--,n&&t.emit("error",n),e.prefinished=!0,t.emit("prefinish"),L(t,e)})}function I(t,e){e.prefinished||e.finalCalled||("function"===typeof t._final?(e.pendingcb++,e.finalCalled=!0,i.nextTick(P,t,e)):(e.prefinished=!0,t.emit("prefinish")))}function L(t,e){var n=$(e);return n&&(I(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),n}function M(t,e,n){e.ending=!0,L(t,e),n&&(e.finished?i.nextTick(n):t.once("finish",n)),e.ended=!0,t.writable=!1}function R(t,e,n){var r=t.entry;t.entry=null;while(r){var i=r.callback;e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}u.inherits(w,l),m.prototype.getBuffer=function(){var t=this.bufferedRequest,e=[];while(t)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(m.prototype,"buffer",{get:c.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"===typeof Symbol&&Symbol.hasInstance&&"function"===typeof Function.prototype[Symbol.hasInstance]?(v=Function.prototype[Symbol.hasInstance],Object.defineProperty(w,Symbol.hasInstance,{value:function(t){return!!v.call(this,t)||this===w&&(t&&t._writableState instanceof m)}})):v=function(t){return t instanceof this},w.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},w.prototype.write=function(t,e,n){var r=this._writableState,i=!1,o=!r.objectMode&&d(t);return o&&!f.isBuffer(t)&&(t=p(t)),"function"===typeof e&&(n=e,e=null),o?e="buffer":e||(e=r.defaultEncoding),"function"!==typeof n&&(n=y),r.ended?b(this,n):(o||_(this,r,t,n))&&(r.pendingcb++,i=k(this,r,o,t,e,n)),i},w.prototype.cork=function(){var t=this._writableState;t.corked++},w.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||j(this,t))},w.prototype.setDefaultEncoding=function(t){if("string"===typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(w.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),w.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},w.prototype._writev=null,w.prototype.end=function(t,e,n){var r=this._writableState;"function"===typeof t?(n=t,t=null,e=null):"function"===typeof e&&(n=e,e=null),null!==t&&void 0!==t&&this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||M(this,r,n)},Object.defineProperty(w.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),w.prototype.destroy=g.destroy,w.prototype._undestroy=g.undestroy,w.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,n("4362"),n("c8ba"))},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return r.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(o(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===a(t,-1);return t=n(o(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,u=0;u<a;u++)if(i[u]!==o[u]){s=u;break}var c=[];for(u=s;u<i.length;u++)c.push("..");return c=c.concat(o.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e1e2:function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function e(){var t=this;r(this,e),a(this,"config",{baseUrl:"https://www.91jdj.cn",header:{"Content-Type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text"}),a(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e){e&&(t.requestComFun=e)}})}return o(e,[{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var r=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.baseUrl=this.config.baseUrl,i.dataType=i.dataType||this.config.dataType,i.responseType=i.responseType||this.config.responseType,i.url=e.posUrl(i.url)?i.url:i.baseUrl+i.url,i.data=i.data||{},i.header=i.header||this.config.header,i.method=i.method||this.config.method,new Promise(function(e,o){var a=!0,s=null;i.complete=function(t){var n=t.statusCode;t.config=s,t=r.requestComFun(t),200===n?e(t):o(t)};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n={errMsg:t,config:e};o(n),a=!1};s=n({},r.requestBeforeFun(i,u)),a&&t.request(s)})}},{key:"get",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"GET"},r))}},{key:"post",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"POST"},r))}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}}]),e}();e.default=s}).call(this,n("6e42")["default"])},e372:function(t,e,n){e=t.exports=n("ad71"),e.Stream=e,e.Readable=e,e.Writable=n("dc14"),e.Duplex=n("b19a"),e.Transform=n("27bf"),e.PassThrough=n("780f")},e3db:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},ec23:function(t,e,n){},f150:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("cu-custom",{attrs:{bgColor:t.Defaulttheam.headcls,isBack:!1,mpcomid:"5c76df44-0"}},[n("block",{slot:"backText"},[t._v("返回")]),n("block",{slot:"content"},[t._v("我的")])],1),n("view",{staticClass:"cu-card case",class:t.isCard?"no-card":""},[n("view",{staticClass:"cu-item shadow"},[n("view",{staticClass:"image"},[n("image",{attrs:{src:"/static/default-skin/big10006.jpg",mode:"widthFix"}}),n("view",{staticClass:"cu-tag ",class:t.Defaulttheam.btncls},[t._v("史诗")]),n("view",{staticClass:"cu-bar bg-shadeBottom",attrs:{eventid:"5c76df44-0"},on:{tap:t.myset}},[n("text",{staticClass:"text-cut"},[t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")]),n("text",{staticClass:"lg text-gray cuIcon-qrcode"}),n("text",{staticClass:"lg text-gray cuIcon-right"})])]),n("view",{staticClass:"cu-list menu-avatar"},[n("view",{staticClass:"cu-item"},[n("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(/static/default-skin/big10006.jpg)"}}),n("view",{staticClass:"content flex-sub"},[n("view",{staticClass:"text-grey"},[t._v("正义天使 凯尔")]),n("view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("十天前"),n("view",{staticClass:"text-gray text-sm"},[n("text",{staticClass:"cuIcon-attentionfill margin-lr-xs",class:t.Defaulttheam.textcls}),t._v("10"),n("text",{staticClass:"cuIcon-appreciatefill margin-lr-xs",class:t.Defaulttheam.textcls}),t._v("20"),n("text",{staticClass:"cuIcon-messagefill margin-lr-xs",class:t.Defaulttheam.textcls}),t._v("30")])])])])]),n("scroll-view",{staticClass:"nav text-center",class:t.Defaulttheam.headcls,attrs:{"scroll-x":""}},[n("view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0",eventid:"5c76df44-1"},on:{tap:t.tabSelect}},[n("text",{staticClass:"cuIcon-camerafill"}),t._v("数码")]),n("view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1",eventid:"5c76df44-2"},on:{tap:t.tabSelect}},[n("text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")]),n("view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2",eventid:"5c76df44-3"},on:{tap:t.tabSelect}},[n("text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")])]),n("view",{staticClass:"cu-list menu-avatar comment "},[n("view",{staticClass:"cu-item"},[n("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/default-skin/big39000.jpg)"}}),n("view",{staticClass:"content"},[n("view",{staticClass:"text-grey"},[t._v("莫甘娜")]),n("view",{staticClass:"text-gray text-content text-df"},[t._v("凯尔，你被自己的光芒变的盲目。")]),n("view",{staticClass:"flex justify-between align-center"},[n("view",{staticClass:"cu-avatar xl radius"},[t._v("港"),n("view",{staticClass:"cu-tag badge",class:t.Defaulttheam.btncls},[t._v("99+")])]),n("view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(/static/default-skin/big39000.jpg)"}},[n("view",{staticClass:"cu-tag badge",class:t.Defaulttheam.btncls},[t._v("9")])]),n("view",{staticClass:"cu-avatar xl radius"},[n("view",{staticClass:"cu-tag badge",class:t.Defaulttheam.btncls},[t._v("99")]),n("text",{staticClass:"cuIcon-people"})]),n("view",{staticClass:"cu-avatar xl radius"},[n("view",{staticClass:"cu-tag badge",class:t.Defaulttheam.btncls},[t._v("99+")])])]),n("view",{staticClass:"margin-top-sm flex justify-between"},[n("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),n("view",[n("text",{staticClass:"cuIcon-appreciatefill text-red margin-lr-xs",class:t.Defaulttheam.textcls},[t._v("22")])])])])]),t._m(0)])],1)]),n("view",{staticClass:"cu-tabbar-height"})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"cu-item"},[n("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/default-skin/big10006.jpg)"}}),n("view",{staticClass:"content"},[n("view",{staticClass:"text-grey"},[t._v("凯尔")]),n("view",{staticClass:"text-gray text-content text-df"},[t._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")]),n("view",{staticClass:"margin-top-sm flex justify-between"},[n("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),n("view",[n("text",{staticClass:"cuIcon-appreciate text-gray"},[t._v("0")])])])])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,i){if(r!==i&&void 0!==r)if(null==r||null==i||typeof r!==typeof i)e[n]=r;else if(Array.isArray(r)&&Array.isArray(i))if(r.length===i.length)for(var o=0,a=r.length;o<a;++o)t(e,n+"["+o+"]",r[o],i[o]);else e[n]=r;else if("object"===typeof r&&"object"===typeof i){var s=Object.keys(r),u=Object.keys(i);if(s.length!==u.length)e[n]=r;else{var c=Object.create(null);for(o=0,a=s.length;o<a;++o)c[s[o]]=!0,c[u[o]]=!0;if(Object.keys(c).length!==s.length)e[n]=r;else for(o=0,a=s.length;o<a;++o){var l=s[o];t(e,n+"."+l,r[l],i[l])}}}else r!==i&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),i={},o=0,a=r.length;o<a;++o){for(var s=r[o],u=s.split("."),c=n[u[0]],l=1,f=u.length;l<f&&void 0!==c;++l)c=c[u[l]];t(i,s,e[s],c)}return i}function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function f(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function p(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var w=Object.prototype.hasOwnProperty;function b(t,e){return w.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,k=_(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),S=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/([^-])([A-Z])/g,A=_(function(t){return t.replace(C,"$1-$2").replace(C,"$1-$2").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function E(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function T(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&T(e,t[n]);return e}function $(t,e,n){}var P=function(t,e,n){return!1},I=function(t){return t};function L(t,e){var r=c(t),i=c(e);if(!r||!i)return!r&&!i&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function M(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var D="data-server-rendered",B=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:$,parsePlatformTagName:I,mustUseProp:P,_lifecycleHooks:N},q=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=/[^\w.$]/;function V(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var H=$;function z(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!K||"undefined"===typeof console)throw t;console.error(t)}}var G,J="__proto__"in{},K="undefined"!==typeof window,X=["mpvue-runtime"].join(),Q=(X&&/msie|trident/.test(X),X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),Z=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)),tt=(X&&/chrome\/\d+/.test(X),{}.watch);if(K)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===G&&(G=!K&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),G},rt=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function it(t){return"function"===typeof t&&/native code/.test(t.toString())}var ot,at="undefined"!==typeof Symbol&&it(Symbol)&&"undefined"!==typeof Reflect&&it(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function i(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&it(Promise)){var o=Promise.resolve(),a=function(t){console.error(t)};t=function(){o.then(i).catch(a),Z&&setTimeout($)}}else t=function(){setTimeout(i,0)};return function(i,o){var a;if(e.push(function(){if(i)try{i.call(o)}catch(n){z(n,o,"nextTick")}else a&&a(o)}),r||(r=!0,t()),!i&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();ot="undefined"!==typeof Set&&it(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=0,ct=function(){this.id=ut++,this.subs=[]};ct.prototype.addSub=function(t){this.subs.push(t)},ct.prototype.removeSub=function(t){m(this.subs,t)},ct.prototype.depend=function(){ct.target&&ct.target.addDep(this)},ct.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ct.target=null;var lt=[];function ft(t){ct.target&&lt.push(ct.target),ct.target=t}function ht(){ct.target=lt.pop()}var pt=Array.prototype,dt=Object.create(pt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=pt[t];W(dt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var vt=Object.getOwnPropertyNames(dt),gt={shouldConvert:!0},yt=function(t){if(this.value=t,this.dep=new ct,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=J?mt:wt;e(t,dt,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function wt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function bt(t,e){var n;if(c(t))return b(t,"__ob__")&&t.__ob__ instanceof yt?n=t.__ob__:gt.shouldConvert&&!nt()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yt(t)),e&&n&&n.vmCount++,n}function _t(t,e,n,r,i){var o=new ct,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set,c=!i&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ct.target&&(o.depend(),c&&c.dep.depend(),Array.isArray(e)&&St(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(u?u.call(t,e):n=e,c=!i&&bt(e),o.notify())}})}}function xt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(_t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function kt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function St(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&St(e)}yt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)_t(t,e[n],t[e[n]])},yt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var Ct=U.optionMergeStrategies;function At(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),a=0;a<o.length;a++)n=o[a],r=t[n],i=e[n],b(t,n)?f(r)&&f(i)&&At(r,i):xt(t,n,i);return t}function Ot(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,i="function"===typeof t?t.call(n):void 0;return r?At(r,i):i}:void 0:e?t?function(){return At("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Et(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Tt(t,e){var n=Object.create(t||null);return e?T(n,e):n}Ct.data=function(t,e,n){return n?Ot(t,e,n):e&&"function"!==typeof e?t:Ot.call(this,t,e)},N.forEach(function(t){Ct[t]=Et}),B.forEach(function(t){Ct[t+"s"]=Tt}),Ct.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in T(n,t),e){var i=n[r],o=e[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return T(n,t),T(n,e),n},Ct.provide=Ot;var jt=function(t,e){return void 0===e?t:e};function $t(t){var e=t.props;if(e){var n,r,i,o={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(i=k(r),o[i]={type:null})}else if(f(e))for(var a in e)r=e[a],i=k(a),o[i]=f(r)?r:{type:r};t.props=o}}function Pt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function It(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){"function"===typeof e&&(e=e.options),$t(e),Pt(e),It(e);var r=e.extends;if(r&&(t=Lt(t,r,n)),e.mixins)for(var i=0,o=e.mixins.length;i<o;i++)t=Lt(t,e.mixins[i],n);var a,s={};for(a in t)u(a);for(a in e)b(t,a)||u(a);function u(r){var i=Ct[r]||jt;s[r]=i(t[r],e[r],n,r)}return s}function Mt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=k(n);if(b(i,o))return i[o];var a=S(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Rt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t];if(Nt(Boolean,i.type)&&(o&&!b(i,"default")?a=!1:Nt(String,i.type)||""!==a&&a!==A(t)||(a=!0)),void 0===a){a=Dt(r,i,t);var s=gt.shouldConvert;gt.shouldConvert=!0,bt(a),gt.shouldConvert=s}return a}function Dt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Nt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ut=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},qt={child:{}};qt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,qt);var Ft=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ut(void 0,void 0,void 0,String(t))}function Yt(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Vt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Yt(t[r]);return n}var Ht,zt=_(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Gt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function Jt(t,e,n,r,o){var a,s,u,c;for(a in t)s=t[a],u=e[a],c=zt(a),i(s)||(i(u)?(i(s.fns)&&(s=t[a]=Gt(s)),n(c.name,s,c.once,c.capture,c.passive)):s!==u&&(u.fns=s,t[a]=u));for(a in e)i(t[a])&&(c=zt(a),r(c.name,e[a],c.capture))}function Kt(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in r){var l=A(c);Xt(a,u,c,l,!0)||Xt(a,s,c,l,!1)}return a}}function Xt(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Zt(t){return u(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return o(t)&&o(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,c=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(s=c[c.length-1],Array.isArray(r)?c.push.apply(c,ee(r,(e||"")+"_"+n)):u(r)?te(s)?s.text+=String(r):""!==r&&c.push(Wt(r)):te(r)&&te(s)?c[c.length-1]=Wt(s.text+r.text):(a(t._isVList)&&o(r.tag)&&i(r.key)&&o(e)&&(r.key="__vlist"+e+"_"+n+"__"),c.push(r)));return c}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),c(t)?e.extend(t):t}function re(t,e,n,r,i){var o=Ft();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function ie(t,e,n){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var r=t.contexts=[n],s=!0,u=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},l=R(function(n){t.resolved=ne(n,e),s||u()}),f=R(function(e){o(t.errorComp)&&(t.error=!0,u())}),h=t(l,f);return c(h)&&("function"===typeof h.then?i(t.resolved)&&h.then(l,f):o(h.component)&&"function"===typeof h.component.then&&(h.component.then(l,f),o(h.error)&&(t.errorComp=ne(h.error,e)),o(h.loading)&&(t.loadingComp=ne(h.loading,e),0===h.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,u())},h.delay||200)),o(h.timeout)&&setTimeout(function(){i(t.resolved)&&f(null)},h.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function oe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&o(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ce(t,e)}function se(t,e,n){n?Ht.$once(t,e):Ht.$on(t,e)}function ue(t,e){Ht.$off(t,e)}function ce(t,e,n){Ht=t,Jt(e,n||{},se,ue,t)}function le(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,i=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)r.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var u=s.length;while(u--)if(a=s[u],a===e||a.fn===e){s.splice(u,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?E(r):r;for(var i=E(arguments,1),o=0,a=r.length;o<a;o++)try{r[o].apply(e,i)}catch(n){z(n,e,'event handler for "'+t+'"')}}return e}}function fe(t,e){var n={};if(!t)return n;for(var r=[],i=0,o=t.length;i<o;i++){var a=t[i];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,u=n[s]||(n[s]=[]);"template"===a.tag?u.push.apply(u,a.children):u.push(a)}}return r.every(he)||(n.default=r),n}function he(t){return t.isComment||" "===t.text}function pe(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?pe(t[n],e):e[t[n].key]=t[n].fn;return e}var de=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ge(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&xe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=de;de=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),de=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){xe(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),xe(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ye(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),xe(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,$),n=!1,null==t.$vnode&&(t._isMounted=!0,xe(t,"mounted")),t}function me(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==q);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){gt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],u=0;u<s.length;u++){var c=s[u];a[c]=Rt(c,t.$options.props,e,t)}gt.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,ce(t,n,l)}o&&(t.$slots=fe(i,r.context),t.$forceUpdate())}function we(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,we(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);xe(t,"activated")}}function _e(t,e){if((!e||(t._directInactive=!0,!we(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)_e(t.$children[n]);xe(t,"deactivated")}}function xe(t,e){var r=t.$options[e];if(r)for(var i=0,o=r.length;i<o;i++)try{r[i].call(t)}catch(n){z(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var ke=[],Se=[],Ce={},Ae=!1,Oe=!1,Ee=0;function Te(){Ee=ke.length=Se.length=0,Ce={},Ae=Oe=!1}function je(){var t,e;for(Oe=!0,ke.sort(function(t,e){return t.id-e.id}),Ee=0;Ee<ke.length;Ee++)t=ke[Ee],e=t.id,Ce[e]=null,t.run();var n=Se.slice(),r=ke.slice();Te(),Ie(n),$e(r),rt&&U.devtools&&rt.emit("flush")}function $e(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&xe(r,"updated")}}function Pe(t){t._inactive=!1,Se.push(t)}function Ie(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Le(t){var e=t.id;if(null==Ce[e]){if(Ce[e]=!0,Oe){var n=ke.length-1;while(n>Ee&&ke[n].id>t.id)n--;ke.splice(n+1,0,t)}else ke.push(t);Ae||(Ae=!0,st(je))}}var Me=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Me,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="","function"===typeof e?this.getter=e:(this.getter=V(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;z(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),ht(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Le(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){z(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var De=new ot;function Be(t){De.clear(),Ne(t,De)}function Ne(t,e){var n,r,i=Array.isArray(t);if((i||c(t))&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)Ne(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ne(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:$,set:$};function qe(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Ke(t,e.methods),e.data?Ye(t):bt(t._data={},!0),e.computed&&ze(t,e.computed),e.watch&&e.watch!==tt&&Xe(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;gt.shouldConvert=o;var a=function(o){i.push(o);var a=Rt(o,e,n,t);_t(r,o,a),o in t||qe(t,"_props",o)};for(var s in e)a(s);gt.shouldConvert=!0}function Ye(t){var e=t.$options.data;e=t._data="function"===typeof e?Ve(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];r&&b(r,o)||F(o)||qe(t,"_data",o)}bt(e,!0)}function Ve(t,e){try{return t.call(e)}catch(n){return z(n,e,"data()"),{}}}var He={lazy:!0};function ze(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var i=e[r],o="function"===typeof i?i:i.get;n[r]=new Re(t,o,$,He),r in t||Ge(t,r,i)}}function Ge(t,e,n){"function"===typeof n?(Ue.get=Je(e),Ue.set=$):(Ue.get=n.get?!1!==n.cache?Je(e):n.get:$,Ue.set=n.set?n.set:$),Object.defineProperty(t,e,Ue)}function Je(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ct.target&&e.depend(),e.value}}function Ke(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?$:O(e[n],t)}function Xe(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Qe(t,n,r[i]);else Qe(t,n,r)}}function Qe(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ze(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=xt,t.prototype.$delete=kt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var i=new Re(r,t,e,n);return n.immediate&&e.call(r,i.value),function(){i.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(gt.shouldConvert=!1,Object.keys(e).forEach(function(n){_t(t,n,e[n])}),gt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i],a=t[o],s=e;while(s){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,i){var a={},s=t.options.props;if(o(s))for(var u in s)a[u]=Rt(u,s,e||{});else o(n.attrs)&&on(a,n.attrs),o(n.props)&&on(a,n.props);var c=Object.create(r),l=function(t,e,n,r){return vn(c,t,e,n,r,!0)},f=t.options.render.call(null,l,{data:n,props:a,children:i,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return fe(i,r)}});return f instanceof Ut&&(f.functionalContext=r,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function on(t,e){for(var n in e)t[k(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var i=t.componentInstance=cn(t,de,n,r);i.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var o=t;an.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,xe(n,"mounted")),t.data.keepAlive&&(e._isMounted?Pe(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?_e(e,!0):e.$destroy())}},sn=Object.keys(an);function un(t,e,n,r,s){if(!i(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=ie(l,u,n),void 0===t))return re(l,e,n,r,s);e=e||{},In(t),o(e.model)&&hn(t.options,e);var f=Kt(e,t,s);if(a(t.options.functional))return rn(t,f,e,n,r);var h=e.on;if(a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}ln(e);var d=t.options.name||s,v=new Ut("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:s,children:r},l);return v}}}function cn(t,e,n,r){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return o(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new i.Ctor(a)}function ln(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],i=an[n];t.hook[n]=r?fn(i,r):i}}function fn(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}function hn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});o(i[r])?i[r]=[e.model.callback].concat(i[r]):i[r]=e.model.callback}var pn=1,dn=2;function vn(t,e,n,r,i,o){return(Array.isArray(n)||u(n))&&(i=r,r=n,n=void 0),a(o)&&(i=dn),gn(t,e,n,r,i)}function gn(t,e,n,r,i){if(o(n)&&o(n.__ob__))return Ft();if(o(n)&&o(n.is)&&(e=n.is),!e)return Ft();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Zt(r):i===pn&&(r=Qt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):o(u=Mt(t.$options,"components",e))?un(u,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=un(e,n,t,r);return o(a)?(s&&yn(a,s),a):Ft()}function yn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&o(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];o(a.tag)&&i(a.ns)&&yn(a,e)}}function mn(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)&&(n._isVList=!0),n}function wn(t,e,n,r){var i=this.$scopedSlots[t];if(i)return n=n||{},r&&(n=T(T({},r),n)),i(n)||e;var o=this.$slots[t];return o||e}function bn(t){return Mt(this.$options,"filters",t,!0)||I}function _n(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function xn(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in o)&&(o[a]=n[a],i)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function kn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Vt(n):Yt(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),Cn(n,"__static__"+t,!1),n)}function Sn(t,e,n){return Cn(t,"__once__"+e+(n?"_"+n:""),!0),t}function Cn(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&An(t[r],e+"_"+r,n);else An(t,e,n)}function An(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function On(t,e){if(e)if(f(e)){var n=t.on=t.on?T({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(o,i):o}}else;return t}function En(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=fe(t.$options._renderChildren,n),t.$scopedSlots=q,t._c=function(e,n,r,i){return vn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return vn(t,e,n,r,i,!0)};var r=e&&e.data;_t(t,"$attrs",r&&r.attrs,null,!0),_t(t,"$listeners",r&&r.on,null,!0)}function Tn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,i=r.render,o=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Vt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||q,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=i.call(e._renderProxy,e.$createElement)}catch(n){z(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Ft()),t.parent=a,t},t.prototype._o=Sn,t.prototype._n=v,t.prototype._s=d,t.prototype._l=mn,t.prototype._t=wn,t.prototype._q=L,t.prototype._i=M,t.prototype._m=kn,t.prototype._f=bn,t.prototype._k=_n,t.prototype._b=xn,t.prototype._v=Wt,t.prototype._e=Ft,t.prototype._u=pe,t.prototype._g=On}var jn=0;function $n(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?Pn(e,t):e.$options=Lt(In(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),En(e),xe(e,"beforeCreate"),en(e),Fe(e),tn(e),xe(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Pn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function In(t){var e=t.options;if(t.super){var n=In(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Ln(t);i&&T(t.extendOptions,i),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ln(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=Mn(n[o],r[o],i[o]));return e}function Mn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function Rn(t){this._init(t)}function Dn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function Nn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&qn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=T({},a.options),i[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)qe(t.prototype,"_props",n)}function qn(t){var e=t.options.computed;for(var n in e)Ge(t.prototype,n,e[n])}function Fn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}$n(Rn),Ze(Rn),le(Rn),ge(Rn),Tn(Rn);var Wn=[String,RegExp,Array];function Yn(t){return t&&(t.Ctor.options.name||t.tag)}function Vn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Hn(t,e,n){for(var r in t){var i=t[r];if(i){var o=Yn(i.componentOptions);o&&!n(o)&&(i!==e&&zn(i),t[r]=null)}}}function zn(t){t&&t.componentInstance.$destroy()}var Gn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)zn(t.cache[e])},watch:{include:function(t){Hn(this.cache,this._vnode,function(e){return Vn(t,e)})},exclude:function(t){Hn(this.cache,this._vnode,function(e){return!Vn(t,e)})}},render:function(){var t=oe(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Yn(e);if(n&&(this.include&&!Vn(this.include,n)||this.exclude&&Vn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Jn={KeepAlive:Gn};function Kn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:H,extend:T,mergeOptions:Lt,defineReactive:_t},t.set=xt,t.delete=kt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,T(t.options.components,Jn),Dn(t),Bn(t),Nn(t),Fn(t)}Kn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Xn=g("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=g("style,class");g("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),g("embed,img,image,input,link,meta",!0);function Zn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ir={};function or(t,e){return ir}function ar(t,e){return ir}function sr(t){return ir}function ur(t){return ir}function cr(t,e,n){}function lr(t,e){}function fr(t,e){}function hr(t){return ir}function pr(t){return ir}function dr(t){return"div"}function vr(t,e){return ir}function gr(t,e,n){return ir}var yr=Object.freeze({createElement:or,createElementNS:ar,createTextNode:sr,createComment:ur,insertBefore:cr,removeChild:lr,appendChild:fr,parentNode:hr,nextSibling:pr,tagName:dr,setTextContent:vr,setAttribute:gr}),mr={create:function(t,e){wr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(wr(t,!0),wr(e))},destroy:function(t){wr(t,!0)}};function wr(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?m(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var br=new Ut("",{},[]),_r=["create","activate","update","remove","destroy"];function xr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&kr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&i(e.asyncFactory.error))}function kr(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i}function Sr(t,e,n){var r,i,a={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(a[i]=r);return a}function Cr(t){var e,n,r={},s=t.modules,c=t.nodeOps;for(e=0;e<_r.length;++e)for(r[_r[e]]=[],n=0;n<s.length;++n)o(s[n][_r[e]])&&r[_r[e]].push(s[n][_r[e]]);function l(t){return new Ut(c.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&h(t)}return n.listeners=e,n}function h(t){var e=c.parentNode(t);o(e)&&c.removeChild(e,t)}function p(t,e,n,r,i){if(t.isRootInsert=!i,!d(t,e,n,r)){var s=t.data,u=t.children,l=t.tag;o(l)?(t.elm=t.ns?c.createElementNS(t.ns,l):c.createElement(l,t),x(t),w(t,u,e),o(s)&&_(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=c.createComment(t.text),m(n,t.elm,r)):(t.elm=c.createTextNode(t.text),m(n,t.elm,r))}}function d(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1,n,r),o(t.componentInstance))return v(t,e),a(s)&&y(t,e,n,r),!0}}function v(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(_(t,e),x(t)):(wr(t),e.push(t))}function y(t,e,n,i){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}m(n,t.elm,i)}function m(t,e,n){o(t)&&(o(n)?n.parentNode===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function w(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0);else u(t.text)&&c.appendChild(t.elm,c.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function _(t,n){for(var i=0;i<r.create.length;++i)r.create[i](br,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(br,t),o(e.insert)&&n.push(t))}function x(t){var e,n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,""),n=n.parent;o(e=de)&&e!==t.context&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,"")}function k(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e)}function S(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function C(t,e,n,r){for(;n<=r;++n){var i=e[n];o(i)&&(o(i.tag)?(A(i),S(i)):h(i.elm))}}function A(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=f(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&A(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else h(t.elm)}function O(t,e,n,r,a){var s,u,l,f,h=0,d=0,v=e.length-1,g=e[0],y=e[v],m=n.length-1,w=n[0],b=n[m],_=!a;while(h<=v&&d<=m)i(g)?g=e[++h]:i(y)?y=e[--v]:xr(g,w)?(E(g,w,r),g=e[++h],w=n[++d]):xr(y,b)?(E(y,b,r),y=e[--v],b=n[--m]):xr(g,b)?(E(g,b,r),_&&c.insertBefore(t,g.elm,c.nextSibling(y.elm)),g=e[++h],b=n[--m]):xr(y,w)?(E(y,w,r),_&&c.insertBefore(t,y.elm,g.elm),y=e[--v],w=n[++d]):(i(s)&&(s=Sr(e,h,v)),u=o(w.key)?s[w.key]:null,i(u)?(p(w,r,t,g.elm),w=n[++d]):(l=e[u],xr(l,w)?(E(l,w,r),e[u]=void 0,_&&c.insertBefore(t,l.elm,g.elm),w=n[++d]):(p(w,r,t,g.elm),w=n[++d])));h>v?(f=i(n[m+1])?null:n[m+1].elm,k(t,f,n,d,m,r)):d>m&&C(t,e,h,v)}function E(t,e,n,s){if(t!==e){var u=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?$(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var l,f=e.data;o(f)&&o(l=f.hook)&&o(l=l.prepatch)&&l(t,e);var h=t.children,p=e.children;if(o(f)&&b(e)){for(l=0;l<r.update.length;++l)r.update[l](t,e);o(l=f.hook)&&o(l=l.update)&&l(t,e)}i(e.text)?o(h)&&o(p)?h!==p&&O(u,h,p,n,s):o(p)?(o(t.text)&&c.setTextContent(u,""),k(u,null,p,0,p.length-1,n)):o(h)?C(u,h,0,h.length-1):o(t.text)&&c.setTextContent(u,""):t.text!==e.text&&c.setTextContent(u,e.text),o(f)&&o(l=f.hook)&&o(l=l.postpatch)&&l(t,e)}}}function T(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=g("attrs,style,class,staticClass,staticStyle,key");function $(t,n,r){if(a(n.isComment)&&o(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var i=n.tag,s=n.data,u=n.children;if(o(s)&&(o(e=s.hook)&&o(e=e.init)&&e(n,!0),o(e=n.componentInstance)))return v(n,r),!0;if(o(i)){if(o(u))if(t.hasChildNodes()){for(var c=!0,l=t.firstChild,f=0;f<u.length;f++){if(!l||!$(l,u[f],r)){c=!1;break}l=l.nextSibling}if(!c||l)return!1}else w(n,u,r);if(o(s))for(var h in s)if(!j(h)){_(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,u,f){if(!i(e)){var h=!1,d=[];if(i(t))h=!0,p(e,d,u,f);else{var v=o(t.nodeType);if(!v&&xr(t,e))E(t,e,d,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(D)&&(t.removeAttribute(D),n=!0),a(n)&&$(t,e,d))return T(e,d,!0),t;t=l(t)}var g=t.elm,y=c.parentNode(g);if(p(e,d,g._leaveCb?null:y,c.nextSibling(g)),o(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(b(e))for(var w=0;w<r.create.length;++w)r.create[w](br,e.parent)}o(y)?C(y,[t],0,0):o(t.tag)&&S(t)}}return T(e,d,h),e.elm}o(t)&&S(t)}}var Ar=[mr],Or=Cr({nodeOps:yr,modules:Ar});function Er(){Or.apply(this,arguments),this.$updateDataToMP()}function Tr(t,e,r){var i,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)try{i=o[a].call(t,r)}catch(n){z(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Tr(t,e,r)}),i}function jr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function $r(t,e,n){if(t){var r,i,o;if(Array.isArray(t)){r=t.length;while(r--)i=t[r],"string"===typeof i&&(o=k(i),e[o]={type:null})}else if(f(t))for(var a in t)i=t[a],o=k(a),e[o]=f(i)?i:{type:i};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var c=u.observer;u.observer=function(t,e){n[o]=t,"function"===typeof c&&c.call(n,t,e)}}return e}}function Pr(t){var e=t.$options.properties,n=t.$options.props,r={};return $r(e,r,t),$r(n,r,t),r}function Ir(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(qe(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Lr(t,n){var r=this.$root;r.$mp||(r.$mp={});var i=r.$mp;if(i.status)return"app"===t?Tr(this,"onLaunch",i.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Tr(this,"onLoad",i.query)),n();if(i.mpType=t,i.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),i.app=this,i.status="launch",this.globalData.appOptions=i.appOptions=t,Tr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),i.status="show",this.globalData.appOptions=i.appOptions=t,Tr(r,"onShow",t)},onHide:function(){i.status="hide",Tr(r,"onHide")},onError:function(t){Tr(r,"onError",t)},onUniNViewMessage:function(t){Tr(r,"onUniNViewMessage",t)}});else if("component"===t)Ir(r),e.Component({properties:Pr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){i.status="created",i.page=this},attached:function(){i.status="attached",Tr(r,"attached")},ready:function(){i.status="ready",Tr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Tr(r,"moved")},detached:function(){i.status="detached",Tr(r,"detached")}});else{var o=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,i.page=this,i.query=t,i.status="load",jr(o,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Tr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,i.page=this,i.status="show",Tr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){i.status="ready",Tr(r,"onReady"),n()},onHide:function(){i.status="hide",Tr(r,"onHide")},onUnload:function(){i.status="unload",Tr(r,"onUnload"),i.page=null},onPullDownRefresh:function(){Tr(r,"onPullDownRefresh")},onReachBottom:function(){Tr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Tr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Tr(r,"onPageScroll",t)},onTabItemTap:function(t){Tr(r,"onTabItemTap",t)}})}}function Mr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Dr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Mr(t),{$k:n,$kk:n+",",$p:e}),i="$root."+n,o={};return o[i]=r,o}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Dr(t))}function Nr(t,e,n){var r,i,o,a=null,s=0;function u(){s=!1===n.leading?0:Date.now(),a=null,o=t.apply(r,i),a||(r=i=null)}return n||(n={}),function(c,l){var f=Date.now();s||!1!==n.leading||(s=f);var h=e-(f-s);return r=this,i=i?[c,Object.assign(i[1],l)]:[c,l],h<=0||h>e?(clearTimeout(a),a=null,s=f,o=t.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(u,h)),o}}var Ur=Nr(function(t,e){t&&t(e)},50);function qr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var i=n.page;if("app"!==r&&i&&"function"===typeof i.setData)return i}function Fr(){var t=qr(this);if(t){var e=JSON.parse(JSON.stringify(Dr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=qr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Yr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var i=t.$children[r],o=nr(i);if(o===e)return t=i,t}return t},t):t}function Vr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var i=t||{},o=i.data;void 0===o&&(o={});var a=i.children;void 0===a&&(a=[]);var s=i.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var i=s.$slots[t],o=Array.isArray(i)?i:[i];o.forEach(function(t){r=r.concat(Vr(t,e,n))})}):a.forEach(function(t){r=r.concat(Vr(t,e,n))});var u=o.attrs,c=o.on;return u&&c&&u["eventid"]===e?(n.forEach(function(t){var e=c[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Hr(t){var e=t.type,n=t.timeStamp,r=t.touches,i=t.detail;void 0===i&&(i={});var o=t.target;void 0===o&&(o={});var a=t.currentTarget;void 0===a&&(a={});var s=i.x,u=i.y,c={mp:t,type:e,timeStamp:n,x:s,y:u,target:Object.assign({},o,i),detail:i,currentTarget:a,stopPropagation:$,preventDefault:$};return r&&r.length&&(Object.assign(c,r[0]),c.touches=r),c}function zr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var i=t.currentTarget,o=i||r,a=o.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var u=a.eventid,c=Yr(e,s.split(","));if(c){var l=rr[n]||[n],f=Vr(c._vnode,u,l);if(f.length){var h=Hr(t);if(1===f.length){var p=f[0](h);return p}f.forEach(function(t){return t(h)})}}}return Rn.config.mustUseProp=Zn,Rn.config.isReservedTag=Xn,Rn.config.isReservedAttr=Qn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=Er,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var i=r.mpType;return void 0===i&&(i="page"),this._initMP(i,function(){return ye(n,void 0,void 0)})}return ye(this,void 0,void 0)},Rn.prototype._initMP=Lr,Rn.prototype.$updateDataToMP=Fr,Rn.prototype._initDataToMP=Wr,Rn.prototype.$handleProxyWithVue=zr,Rn})}).call(this,n("c8ba"))},f4e1:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("cu-custom",{attrs:{bgColor:t.Defaulttheam.headcls,isBack:!1,mpcomid:"45c56fe4-0"}},[n("block",{slot:"backText"},[t._v("返回")]),n("block",{slot:"content"},[t._v("首页")])],1),n("swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff",eventid:"45c56fe4-1"},on:{change:t.cardSwiper}},t._l(t.swiperList,function(e,r){return n("swiper-item",{key:r,class:t.cardCur==r?"cur":"",attrs:{eventid:"45c56fe4-0-"+r,mpcomid:"45c56fe4-1-"+r},on:{tap:t.toHomelist2}},[n("view",{staticClass:"swiper-item"},["image"==e.type?n("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?n("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])])})),n("view",{staticClass:"cu-bar bg-white solid-bottom margin-top",staticStyle:{display:"none"}},[t._m(0),n("view",{staticClass:"action"},[n("button",{staticClass:"cu-btn shadow",class:t.Defaulttheam.btncls,attrs:{"data-target":"gridModal",eventid:"45c56fe4-2"},on:{tap:t.showModal}},[t._v("设置")])],1)]),n("view",{staticClass:"cu-modal",class:"gridModal"==t.modalName?"show":"",attrs:{eventid:"45c56fe4-6"},on:{tap:t.hideModal}},[n("view",{staticClass:"cu-dialog",attrs:{eventid:"45c56fe4-5"},on:{tap:function(t){t.stopPropagation()}}},[n("radio-group",{staticClass:"block",attrs:{eventid:"45c56fe4-3",mpcomid:"45c56fe4-2"},on:{change:t.Gridchange}},[n("view",{staticClass:"cu-list menu text-left"},t._l(3,function(e,r){return n("view",{key:r,staticClass:"cu-item"},[n("label",{staticClass:"flex justify-between align-center flex-sub"},[n("view",{staticClass:"flex-sub"},[t._v(t._s(r+3)+" 列")]),n("radio",{staticClass:"round",class:t.gridCol==r+3?"checked":"",attrs:{value:r+3+"",checked:t.gridCol==r+3}})],1)],1)}))]),n("view",{staticClass:"cu-list menu text-left solid-top"},[n("view",{staticClass:"cu-item"},[t._m(1),n("view",{staticClass:"action"},[n("switch",{class:t.gridBorder?"checked":"",attrs:{checked:!!t.gridBorder,eventid:"45c56fe4-4"},on:{change:t.Gridswitch}})])])])],1)]),n("view",{staticClass:"cu-list grid",class:["col-"+t.gridCol,t.gridBorder?"":"no-border"]},t._l(t.cuIconList,function(e,r){return r<2*t.gridCol?n("view",{key:r,staticClass:"cu-item",attrs:{eventid:"45c56fe4-7-"+r},on:{tap:t.toHomelist}},[n("view",{class:["cuIcon-"+e.cuIcon,"text-"+e.color]},[0!=e.badge?n("view",{staticClass:"cu-tag badge",class:t.Defaulttheam.btncls},[1!=e.badge?n("block",[t._v(t._s(e.badge>99?"99+":e.badge))]):t._e()],1):t._e()]),n("text",[t._v(t._s(e.name))])]):t._e()})),n("view",{staticClass:"bg-img bg-mask flex align-center",staticStyle:{"background-image":"url('/static/default-skin/big10006.jpg')",height:"414rpx"},attrs:{eventid:"45c56fe4-8"},on:{tap:t.tovideo}},[t._m(2)]),t._l(t.ArticleList,function(e,r){return n("view",{key:r,staticClass:"cu-card article solid-bottom",class:t.isCard?"no-card":"",attrs:{eventid:"45c56fe4-9-"+r},on:{tap:t.tovideo2}},[n("view",{staticClass:"cu-item shadow"},[n("view",{staticClass:"title"},[n("view",{staticClass:"text-cut"},[t._v(t._s(e.title))])]),n("view",{staticClass:"content"},[n("image",{attrs:{src:e.image,mode:"aspectFill"}}),n("view",{staticClass:"desc"},[n("view",{staticClass:"text-content"},[t._v(t._s(e.remark))]),n("view",[n("view",{staticClass:"cu-tag light sm round",class:t.Defaulttheam.btncls},[t._v(t._s(e.author))]),n("view",{staticClass:"cu-tag light sm round",class:t.Defaulttheam.btncls},[t._v(t._s(e.tag))])])])])])])}),n("view",{staticClass:"load-progress",class:0!=t.loadProgress?"show":"hide",style:[{top:t.CustomBar+"px"}]},[n("view",{staticClass:"load-progress-bar bg-green",style:[{transform:"translate3d(-"+(100-t.loadProgress)+"%, 0px, 0px)"}]}),n("view",{staticClass:"load-progress-spinner text-green"})]),n("view",{staticClass:"cu-tabbar-height"})],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"action"},[n("text",{staticClass:"cuIcon-title text-orange "}),t._v("宫格列表")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("text",{staticClass:"text-grey"},[t._v("边框")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"padding-xl text-white"},[n("view",{staticClass:"padding-xs text-xxl text-bold"},[t._v("钢铁之翼小视频")]),n("view",{staticClass:"padding-xs text-lg"},[t._v("Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me.")])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},f576:function(t,e,n){"use strict";var r=n("3fb5"),i=n("93e6"),o=n("8707").Buffer,a=new Array(16);function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function u(t,e){return t<<e|t>>>32-e}function c(t,e,n,r,i,o,a){return u(t+(e&n|~e&r)+i+o|0,a)+e|0}function l(t,e,n,r,i,o,a){return u(t+(e&r|n&~r)+i+o|0,a)+e|0}function f(t,e,n,r,i,o,a){return u(t+(e^n^r)+i+o|0,a)+e|0}function h(t,e,n,r,i,o,a){return u(t+(n^(e|~r))+i+o|0,a)+e|0}r(s,i),s.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);var n=this._a,r=this._b,i=this._c,o=this._d;n=c(n,r,i,o,t[0],3614090360,7),o=c(o,n,r,i,t[1],3905402710,12),i=c(i,o,n,r,t[2],606105819,17),r=c(r,i,o,n,t[3],3250441966,22),n=c(n,r,i,o,t[4],4118548399,7),o=c(o,n,r,i,t[5],1200080426,12),i=c(i,o,n,r,t[6],2821735955,17),r=c(r,i,o,n,t[7],4249261313,22),n=c(n,r,i,o,t[8],1770035416,7),o=c(o,n,r,i,t[9],2336552879,12),i=c(i,o,n,r,t[10],4294925233,17),r=c(r,i,o,n,t[11],2304563134,22),n=c(n,r,i,o,t[12],1804603682,7),o=c(o,n,r,i,t[13],4254626195,12),i=c(i,o,n,r,t[14],2792965006,17),r=c(r,i,o,n,t[15],1236535329,22),n=l(n,r,i,o,t[1],4129170786,5),o=l(o,n,r,i,t[6],3225465664,9),i=l(i,o,n,r,t[11],643717713,14),r=l(r,i,o,n,t[0],3921069994,20),n=l(n,r,i,o,t[5],3593408605,5),o=l(o,n,r,i,t[10],38016083,9),i=l(i,o,n,r,t[15],3634488961,14),r=l(r,i,o,n,t[4],3889429448,20),n=l(n,r,i,o,t[9],568446438,5),o=l(o,n,r,i,t[14],3275163606,9),i=l(i,o,n,r,t[3],4107603335,14),r=l(r,i,o,n,t[8],1163531501,20),n=l(n,r,i,o,t[13],2850285829,5),o=l(o,n,r,i,t[2],4243563512,9),i=l(i,o,n,r,t[7],1735328473,14),r=l(r,i,o,n,t[12],2368359562,20),n=f(n,r,i,o,t[5],4294588738,4),o=f(o,n,r,i,t[8],2272392833,11),i=f(i,o,n,r,t[11],1839030562,16),r=f(r,i,o,n,t[14],4259657740,23),n=f(n,r,i,o,t[1],2763975236,4),o=f(o,n,r,i,t[4],1272893353,11),i=f(i,o,n,r,t[7],4139469664,16),r=f(r,i,o,n,t[10],3200236656,23),n=f(n,r,i,o,t[13],681279174,4),o=f(o,n,r,i,t[0],3936430074,11),i=f(i,o,n,r,t[3],3572445317,16),r=f(r,i,o,n,t[6],76029189,23),n=f(n,r,i,o,t[9],3654602809,4),o=f(o,n,r,i,t[12],3873151461,11),i=f(i,o,n,r,t[15],530742520,16),r=f(r,i,o,n,t[2],3299628645,23),n=h(n,r,i,o,t[0],4096336452,6),o=h(o,n,r,i,t[7],1126891415,10),i=h(i,o,n,r,t[14],2878612391,15),r=h(r,i,o,n,t[5],4237533241,21),n=h(n,r,i,o,t[12],1700485571,6),o=h(o,n,r,i,t[3],2399980690,10),i=h(i,o,n,r,t[10],4293915773,15),r=h(r,i,o,n,t[1],2240044497,21),n=h(n,r,i,o,t[8],1873313359,6),o=h(o,n,r,i,t[15],4264355552,10),i=h(i,o,n,r,t[6],2734768916,15),r=h(r,i,o,n,t[13],1309151649,21),n=h(n,r,i,o,t[4],4149444226,6),o=h(o,n,r,i,t[11],3174756917,10),i=h(i,o,n,r,t[2],718787259,15),r=h(r,i,o,n,t[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+r|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=o.allocUnsafe(16);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=s},faa1:function(t,e,n){"use strict";var r,i="object"===typeof Reflect?Reflect:null,o=i&&"function"===typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};function a(t){console&&console.warn&&console.warn(t)}r=i&&"function"===typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!==t};function u(){u.init.call(this)}t.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function l(t){return void 0===t._maxListeners?u.defaultMaxListeners:t._maxListeners}function f(t,e,n,r){var i,o,s;if("function"!==typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(o=t._events,void 0===o?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"===typeof s?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=l(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a(u)}return t}function h(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}function p(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=h.bind(r);return i.listener=n,r.wrapFn=i,i}function d(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?m(i):g(i,i.length)}function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function y(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function m(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},u.prototype.getMaxListeners=function(){return l(this)},u.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=i[t];if(void 0===u)return!1;if("function"===typeof u)o(u,this,e);else{var c=u.length,l=g(u,c);for(n=0;n<c;++n)o(l[n],this,e)}return!0},u.prototype.addListener=function(t,e){return f(this,t,e,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(t,e){return f(this,t,e,!0)},u.prototype.once=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,p(this,t,e)),this},u.prototype.prependOnceListener=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,p(this,t,e)),this},u.prototype.removeListener=function(t,e){var n,r,i,o,a;if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(r=this._events,void 0===r)return this;if(n=r[t],void 0===n)return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():y(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(t){var e,n,r;if(n=this._events,void 0===n)return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)i=o[r],"removeListener"!==i&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=n[t],"function"===typeof e)this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},u.prototype.listeners=function(t){return d(this,t,!0)},u.prototype.rawListeners=function(t){return d(this,t,!1)},u.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},u.prototype.listenerCount=v,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},fe51:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Defaulttheam:this.Defaulttheam,isCard:!0,loadProgress:0,CustomBar:this.CustomBar,ArticleList:this.ArticleList,cardCur:0,swiperList:[{id:0,type:"image",url:"/static/default-skin/big84000.jpg"},{id:1,type:"image",url:"/static/default-skin/big37006.jpg"},{id:2,type:"image",url:"/static/default-skin/big39000.jpg"},{id:3,type:"image",url:"/static/default-skin/big10001.jpg"},{id:4,type:"image",url:"/static/default-skin/big25011.jpg"},{id:5,type:"image",url:"/static/default-skin/big21016.jpg"},{id:6,type:"image",url:"/static/default-skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:"",cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:5,gridBorder:!1}},methods:{IsCard:function(t){this.isCard=t.detail.value},DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var e=this[t],n=0;n<e.length;n++)e[n].zIndex=parseInt(e.length/2)+1-Math.abs(n-parseInt(e.length/2)),e[n].mLeft=n-parseInt(e.length/2);this.swiperList=e},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var e=this.direction,n=this.swiperList;if("right"==e){for(var r=n[0].mLeft,i=n[0].zIndex,o=1;o<this.swiperList.length;o++)this.swiperList[o-1].mLeft=this.swiperList[o].mLeft,this.swiperList[o-1].zIndex=this.swiperList[o].zIndex;this.swiperList[n.length-1].mLeft=r,this.swiperList[n.length-1].zIndex=i}else{for(var a=n[n.length-1].mLeft,s=n[n.length-1].zIndex,u=this.swiperList.length-1;u>0;u--)this.swiperList[u].mLeft=this.swiperList[u-1].mLeft,this.swiperList[u].zIndex=this.swiperList[u-1].zIndex;this.swiperList[0].mLeft=a,this.swiperList[0].zIndex=s}this.direction="",this.swiperList=this.swiperList},LoadProgress:function(){var t=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){t.LoadProgress()},100):this.loadProgress=0},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},toHomelist:function(e){t.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},toHomelist2:function(e){t.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},tovideo:function(e){t.navigateTo({url:"/pages/main_page/video/index",animationType:"pop-in",animationDuration:200})},tovideo2:function(e){t.navigateTo({url:"/pages/main_page/homelist/detail/detail?title=凡真正的恩典因不完整而美丽"})}},onLoad:function(){console.log("页面加载事件"),this.LoadProgress(),this.TowerSwiper("swiperList")}};e.default=n}).call(this,n("6e42")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/main/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/home.js';

define('pages/main/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/home"],{"1eb2":function(a,t,e){"use strict";e.r(t);var c=e("c43e"),n=e.n(c);for(var u in c)"default"!==u&&function(a){e.d(t,a,function(){return c[a]})}(u);t["default"]=n.a},bb14:function(a,t,e){"use strict";var c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("view",["homepage"==a.PageCur?e("ctmainpage",{attrs:{mpcomid:"3ed3a378-0"}}):a._e(),"aboutpage"==a.PageCur?e("ctaboutpage",{attrs:{mpcomid:"3ed3a378-1"}}):a._e(),"searchpage"==a.PageCur?e("ctsearch",{attrs:{mpcomid:"3ed3a378-2"}}):a._e(),"postpage"==a.PageCur?e("ctpost",{attrs:{mpcomid:"3ed3a378-3"}}):a._e(),"mypage"==a.PageCur?e("ctmy",{attrs:{mpcomid:"3ed3a378-4"}}):a._e(),e("view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("view",{class:"homepage"==a.PageCur?"action "+a.Defaulttheam.textcls:"action",attrs:{"data-cur":"homepage",eventid:"3ed3a378-0"},on:{click:a.NavChange}},[e("view",{staticClass:"cuIcon-homefill"}),a._v("首页")]),e("view",{class:"postpage"==a.PageCur?"action add-action "+a.Defaulttheam.textcls:"action add-action",attrs:{"data-cur":"postpage",eventid:"3ed3a378-1"},on:{click:a.NavChange}},[e("button",{staticClass:"cu-btn cuIcon-add shadow",class:a.Defaulttheam.btncls}),a._v("发布")],1),e("view",{class:"mypage"==a.PageCur?"action "+a.Defaulttheam.textcls:"action",attrs:{"data-cur":"mypage",eventid:"3ed3a378-2"},on:{click:a.NavChange}},[e("view",{staticClass:"cuIcon-myfill"}),a._v("我的")])])],1)},n=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return n})},c204:function(a,t,e){"use strict";e("a0fc");var c=u(e("b0ce")),n=u(e("f067"));function u(a){return a&&a.__esModule?a:{default:a}}Page((0,c.default)(n.default))},c43e:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(e("271e"));function n(a){return a&&a.__esModule?a:{default:a}}var u={data:function(){return{Defaulttheam:this.Defaulttheam,PageCur:"homepage"}},methods:{NavChange:function(a){c.default.mayiwoLog(a.currentTarget.dataset.cur),this.PageCur=a.currentTarget.dataset.cur}},onLoad:function(){c.default.getGoodList({},function(a){c.default.mayiwoLog(a)})}};t.default=u},f067:function(a,t,e){"use strict";e.r(t);var c=e("bb14"),n=e("1eb2");for(var u in n)"default"!==u&&function(a){e.d(t,a,function(){return n[a]})}(u);var o=e("2877"),r=Object(o["a"])(n["default"],c["a"],c["b"],!1,null,null,null);t["default"]=r.exports}},[["c204","common/runtime","common/vendor"]]]);
});
require('pages/main/home.js');
__wxRoute = 'pages/main_page/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/home/home.js';

define('pages/main_page/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/home/home"],{e9aa:function(e,a,o){"use strict";o("a0fc");var n=u(o("b0ce")),c=u(o("232c"));function u(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(c.default))}},[["e9aa","common/runtime","common/vendor"]]]);
});
require('pages/main_page/home/home.js');
__wxRoute = 'pages/main_page/about/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/about/about.js';

define('pages/main_page/about/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/about/about"],{c7b0:function(e,a,o){"use strict";o("a0fc");var n=c(o("b0ce")),u=c(o("02e2"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(u.default))}},[["c7b0","common/runtime","common/vendor"]]]);
});
require('pages/main_page/about/about.js');
__wxRoute = 'pages/main_page/post/post';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/post/post.js';

define('pages/main_page/post/post.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/post/post"],{fd88:function(e,a,o){"use strict";o("a0fc");var n=u(o("b0ce")),t=u(o("a1e7"));function u(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(t.default))}},[["fd88","common/runtime","common/vendor"]]]);
});
require('pages/main_page/post/post.js');
__wxRoute = 'pages/main_page/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/my/my.js';

define('pages/main_page/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/my/my"],{5285:function(e,a,n){"use strict";n("a0fc");var o=c(n("b0ce")),u=c(n("94da"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(u.default))}},[["5285","common/runtime","common/vendor"]]]);
});
require('pages/main_page/my/my.js');
__wxRoute = 'pages/main_page/myset/myset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/myset/myset.js';

define('pages/main_page/myset/myset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/myset/myset"],{"0426":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i,a,s,n,r){try{var h=t[n](r),l=h.value}catch(c){return void i(c)}h.done?e(l):Promise.resolve(l).then(a,s)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(a,s){var r=t.apply(e,i);function h(t){n(r,a,s,h,l,"next",t)}function l(t){n(r,a,s,h,l,"throw",t)}h(void 0)})}}var h=50,l={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var e=this;this.ctxCanvas=t.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=t.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=t.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):t.showTabBar({complete:function(t){e.moreHeight="showTabBar:ok"===t.errMsg?50:0,e.fWindowResize()}})},methods:{fWindowResize:function(){var e=t.getSystemInfoSync();this.platform=e.platform,this.pixelRatio=e.pixelRatio,this.windowWidth=e.windowWidth,"android"===this.platform?(this.windowHeight=e.screenHeight+e.statusBarHeight,this.cvsStyleHeight=this.windowHeight-h+"px"):(this.windowHeight=e.windowHeight+this.moreHeight,this.cvsStyleHeight=this.windowHeight-h+6+"px"),this.pxRatio=this.windowWidth/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var a={},s=!0,n=!1,r=void 0;try{for(var l,c=i[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var o=l.value;if(o){if(o=o.trim().split(":"),o[1].indexOf("upx")>=0){var d=o[1].trim().split(" ");for(var u in d)d[u]&&d[u].indexOf("upx")>=0&&(d[u]=parseFloat(d[u])*this.pxRatio+"px");o[1]=d.join(" ")}a[o[0].trim()]=o[1].trim()}}}catch(p){n=!0,r=p}finally{try{s||null==c.return||c.return()}finally{if(n)throw r}}this.imgStyle=a}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var e=this;this.fSelecting||(this.fSelecting=!0,setTimeout(function(){e.fSelecting=!1},500),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){t.showLoading({mask:!0});var a=e.imgPath=i.tempFilePaths[0];t.getImageInfo({src:a,success:function(i){if(e.imgWidth=i.width,e.imgHeight=i.height,e.path=a,!e.hasSel){var s=e.selStyle||{};if(!e.selWidth||!e.selHeight)return void t.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var n=e.selWidth.indexOf("upx")>=0?parseInt(e.selWidth)*e.pxRatio:parseInt(e.selWidth),r=e.selHeight.indexOf("upx")>=0?parseInt(e.selHeight)*e.pxRatio:parseInt(e.selHeight);s.width=n+"px",s.height=r+"px",s.top=(e.windowHeight-r-h)/2+"px",s.left=(e.windowWidth-n)/2+"px",e.selStyle=s}e.noBar?e.fDrawInit(!0):t.hideTabBar({complete:function(){e.fDrawInit(!0)}})},fail:function(){t.showToast({title:"error3",duration:2e3})},complete:function(){t.hideLoading()}})}}))},fUpload:function(){var e=this;if(!this.fUploading){this.fUploading=!0,setTimeout(function(){e.fUploading=!1},1e3);var i=this.selStyle,a=parseInt(i.left),s=parseInt(i.top),n=parseInt(i.width),r=parseInt(i.height),h=this.exportWidth||n,l=this.exportHeight||r;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:a,y:s,width:n,height:r,destWidth:h,destHeight:l,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,e.$emit("upload",{avatar:e.imgSrc,path:t,index:e.indx,data:e.rtn})},fail:function(e){t.showToast({title:"error1",duration:2e3})},complete:function(){t.hideLoading(),e.noBar||t.showTabBar()}},this)}},fPrvUpload:function(){var e=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout(function(){e.fPrvUploading=!1},1e3);var i=this.selStyle,a=(parseInt(i.width),parseInt(i.height),this.prvX),s=this.prvY,n=this.prvWidth,r=this.prvHeight,h=this.exportWidth||n,l=this.exportHeight||r;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:a,y:s,width:n,height:r,destWidth:h,destHeight:l,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,e.$emit("upload",{avatar:e.imgSrc,path:t,index:e.indx,data:e.rtn})},fail:function(){t.showToast({title:"error_prv",duration:2e3})},complete:function(){t.hideLoading(),e.noBar||t.showTabBar()}},this)}},fDrawInit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.windowWidth,a=this.windowHeight,s=this.imgWidth,n=this.imgHeight,r=s/n,l=i-40,c=a-h-80,o=(this.pixelRatio,parseInt(this.selStyle.width)),d=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":r>1?this.fixWidth=1:this.fixHeight=1;break;case"short":r>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":o>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":o>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":r>1?this.lckWidth=1:this.lckHeight=1;break;case"short":r>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":o>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":o>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(l=o,c=l/r):this.fixHeight?(c=d,l=c*r):r<1?n<c?(l=s,c=n):(c=c,l=c*r):s<l?(l=s,c=n):(l=l,c=l/r),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,l<o&&(l=o,c=l/r,this.lckHeight=0),c<d&&(c=d,l=c*r,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(i-l)/2,this.posHeight=(a-c-h)/2,this.useWidth=l,this.useHeight=c;var u=this.selStyle,p=parseInt(u.left),f=parseInt(u.top),v=parseInt(u.width),g=parseInt(u.height),x=(this.canvas,this.canvasOper,this.ctxCanvas),m=this.ctxCanvasOper;m.setLineWidth(3),m.setStrokeStyle("grey"),m.setGlobalAlpha(.4),m.setFillStyle("black"),m.strokeRect(p,f,v,g),m.fillRect(0,0,this.windowWidth,f),m.fillRect(0,f,p,g),m.fillRect(0,f+g,this.windowWidth,this.windowHeight-g-f-h),m.fillRect(p+v,f,this.windowWidth-v-p,g),m.setStrokeStyle("red"),m.moveTo(p+20,f),m.lineTo(p,f),m.lineTo(p,f+20),m.moveTo(p+v-20,f),m.lineTo(p+v,f),m.lineTo(p+v,f+20),m.moveTo(p+20,f+g),m.lineTo(p,f+g),m.lineTo(p,f+g-20),m.moveTo(p+v-20,f+g),m.lineTo(p+v,f+g),m.lineTo(p+v,f+g-20),m.stroke(),m.draw(!1,function(){e&&(t.styleDisplay="flex",t.styleTop="0",x.setFillStyle("black"),t.fDrawImage())}),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var e=this.ctxCanvas;e.fillRect(0,0,this.windowWidth,this.windowHeight-h),e.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),e.scale(this.scaleSize,this.scaleSize),e.rotate(this.rotateDeg*Math.PI/180),e.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),e.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||t.showTabBar()},fPreview:function(){var e=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout(function(){e.fPreviewing=!1},1e3);var i=this.selStyle,a=parseInt(i.left),s=parseInt(i.top),n=parseInt(i.width),r=parseInt(i.height);t.showLoading({mask:!0}),t.canvasToTempFilePath({x:a,y:s,width:n,height:r,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){e.prvImgTmp=t=t.tempFilePath;var i=e.ctxCanvasPrv,a=e.windowWidth,s=parseInt(e.cvsStyleHeight),n=parseInt(e.selStyle.width),r=parseInt(e.selStyle.height),h=a-40,l=s-80,c=h/n,o=r*c;o<l?(n=h,r=o):(c=l/r,n*=c,r=l),i.setFillStyle("black"),i.fillRect(0,0,a,s),e.prvX=a=(a-n)/2,e.prvY=s=(s-r)/2,e.prvWidth=n,e.prvHeight=r,i.drawImage(t,a,s,n,r),i.draw(!1),"android"!=e.platform&&(e.showOper=!1),e.prvTop="0"},fail:function(){t.showToast({title:"error2",duration:2e3})},complete:function(){t.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e){var a=e.selWidth,s=e.selHeight,n=e.expWidth,r=e.expHeight,l=e.quality,c=e.canRotate,o=e.canScale,d=e.minScale,u=e.maxScale,p=e.stretch,f=e.inner,v=e.lock;n&&(this.exportWidth=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),r&&(this.exportHeight=r.indexOf("upx")>=0?parseInt(r)*this.pxRatio:parseInt(r)),this.letRotate="false"===c?0:1,this.letScale="false"===o?0:1,this.qlty=parseInt(l)||.9,this.mnScale=d||.3,this.mxScale=u||4,this.stc=p,this.isin="true"===f?1:0,this.lck=v,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),a&&s&&(a=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),s=s.indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.selStyle.width=a+"px",this.selStyle.height=s+"px",this.selStyle.top=(this.windowHeight-s-h)/2+"px",this.selStyle.left=(this.windowWidth-a)/2+"px",this.hasSel=!0)}this.rtn=i,this.indx=t,this.fSelect()},fRotate:function(){var t=this;if("android"===this.platform){if(this.fRotateing)return;this.fRotateing=!0,setTimeout(function(){t.fRotateing=!1},500)}this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var e=t.touches,i=e[0],a=e[1];if(this.touch0=i,this.touch1=a,a){var s=a.x-i.x,n=a.y-i.y;this.fgDistance=Math.sqrt(s*s+n*n)}},fMove:function(t){var e=t.touches,i=e[0],a=e[1];if(a){var s=a.x-i.x,n=a.y-i.y,r=Math.sqrt(s*s+n*n),h=.005*(r-this.fgDistance),l=this.scaleSize+h;do{if(!this.letScale)break;if(l<this.mnScale)break;if(l>this.mxScale)break;if(this.isin){var c=this.useWidth*l,o=this.useHeight*l,d=this.posWidth+this.useWidth/2,u=this.posHeight+this.useHeight/2,p=d-c/2,f=u-o/2,v=p+c,g=f+o,x=parseInt(this.selStyle.left),m=parseInt(this.selStyle.top),w=parseInt(this.selStyle.width),b=parseInt(this.selStyle.height);if(x<p||x+w>v||m<f||m+b>g)break;this.scaleWidth=(this.useWidth-c)/2,this.scaleHeight=(this.useHeight-o)/2}this.scaleSize=l}while(0);this.fgDistance=r,a.x!==i.x&&this.letRotate&&(s=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),n=(a.y-i.y)/(a.x-i.x),this.rotateDeg+=180*Math.atan((n-s)/(1+s*n))/Math.PI,this.touch0=i,this.touch1=a),this.fDrawImage()}else if(this.touch0){var y=i.x-this.touch0.x,S=i.y-this.touch0.y,T=this.posWidth+y,I=this.posHeight+S;if(this.isin){var C=this.useWidth*this.scaleSize,k=this.useHeight*this.scaleSize,H=T+this.useWidth/2,W=I+this.useHeight/2,_=H-C/2,D=W-k/2,P=_+C,R=D+k,O=parseInt(this.selStyle.left),M=parseInt(this.selStyle.top),F=parseInt(this.selStyle.width),q=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(y)<100&&(O>=_&&O+F<=P?this.posWidth=T:O<_?this.posWidth=O-this.scaleWidth:O+F>P&&(this.posWidth=O-(C-F)-this.scaleWidth)),!this.lckHeight&&Math.abs(S)<100&&(M>=D&&M+q<=R?this.posHeight=I:M<D?this.posHeight=M-this.scaleHeight:M+q>R&&(this.posHeight=M-(k-q)-this.scaleHeight))}else Math.abs(y)<100&&!this.lckWidth&&(this.posWidth=T),Math.abs(S)<100&&!this.lckHeight&&(this.posHeight=I);this.touch0=i,this.fDrawImage()}},fEnd:function(t){var e=t.touches,i=e&&e[0];e&&e[1];i?this.touch0=i:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var e=this;return new Promise(function(i,a){var s=e.prvX,n=e.prvY,r=e.prvWidth,h=e.prvHeight;s*=e.pixelRatio,n*=e.pixelRatio,r*=e.pixelRatio,h*=e.pixelRatio,t.canvasGetImageData({canvasId:"prv-canvas",x:s,y:n,width:r,height:h,success:function(t){i(t.data)},fail:function(t){a(t)}},e)})},fColorChange:function(){var e=r(a.default.mark(function e(i){var s,n,r,h,l,c,o,d,u,p,f,v,g,x,m,w,b,y,S,T,I,C,k,H,W,_,D;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s=Date.now(),!(s-this.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(this.prvTm=s,t.showLoading({mask:!0}),this.prvImgData){e.next=11;break}return e.next=8,this.fGetImgData().catch(function(e){t.showToast({title:"error_read",duration:2e3})});case 8:if(this.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:this.target=new Uint8ClampedArray(this.prvImgData.length);case 11:if(n=this.prvImgData,r=this.target,h=i.detail.value,0===h)r=n;else for(h=(h+100)/200,h<.005&&(h=0),h>.995&&(h=1),I=n.length-1;I>=0;I-=4)l=n[I-3]/255,c=n[I-2]/255,o=n[I-1]/255,w=Math.max(l,c,o),m=Math.min(l,c,o),v=w-m,w===m?u=0:w===l&&c>=o?u=(c-o)/v*60:w===l&&c<o?u=(c-o)/v*60+360:w===c?u=(o-l)/v*60+120:w===o&&(u=(l-c)/v*60+240),f=(w+m)/2,0===f||w===m?p=0:0<f&&f<=.5?p=v/(2*f):f>.5&&(p=v/(2-2*f)),n[I]&&(d=n[I]),h<.5?p=p*h/.5:h>.5&&(p=2*p+2*h-p*h/.5-1),0===p?l=c=o=Math.round(255*f):(f<.5?x=f*(1+p):f>=.5&&(x=f+p-f*p),g=2*f-x,b=u/360,y=b+1/3,S=b,T=b-1/3,C=function(t){return t<0?t+1:t>1?t-1:t},k=function(t){return t<1/6?g+6*(x-g)*t:t>=1/6&&t<.5?x:t>=.5&&t<2/3?g+6*(x-g)*(2/3-t):g},l=y=Math.round(255*k(C(y))),c=S=Math.round(255*k(C(S))),o=T=Math.round(255*k(C(T)))),d&&(r[I]=d),r[I-3]=l,r[I-2]=c,r[I-1]=o;H=this.prvX,W=this.prvY,_=this.prvWidth,D=this.prvHeight,this.ctxCanvasPrv.setFillStyle("black"),this.ctxCanvasPrv.fillRect(H,W,_,D),this.ctxCanvasPrv.draw(!0),H*=this.pixelRatio,W*=this.pixelRatio,_*=this.pixelRatio,D*=this.pixelRatio,t.canvasPutImageData({canvasId:"prv-canvas",x:H,y:W,width:_,height:D,data:r,fail:function(){t.showToast({title:"error_put",duration:2e3})},complete:function(){t.hideLoading()}},this);case 22:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),btop:function(t){return new Promise(function(e,i){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),r=n.length,h=new Uint8Array(r);while(r--)h[r]=n.charCodeAt(r);return e((window.URL||window.webkitURL).createObjectURL(new Blob([h],{type:s})))})}}};e.default=l}).call(this,i("6e42")["default"])},"1a47":function(t,e,i){"use strict";i.r(e);var a=i("2661"),s=i("ca1f");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var r=i("2877"),h=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports},2661:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("canvas",{style:{width:t.canvasW+"px",height:t.canvasH+"px"},attrs:{"canvas-id":t.CanvasID}})])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"295a":function(t,e,i){},"3c48":function(t,e,i){"use strict";i("a0fc");var a=n(i("b0ce")),s=n(i("f3ea"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"498a":function(t,e,i){"use strict";var a=i("295a"),s=i.n(a);s.a},"91e8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("image",{staticClass:"my-avatar",style:t.imgStyle,attrs:{src:t.imgSrc.imgSrc,eventid:"2ea99d5c-0"},on:{click:t.fSelect}}),i("canvas",{staticClass:"my-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),i("canvas",{staticClass:"oper-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false",eventid:"2ea99d5c-1"},on:{touchstart:t.fStart,touchmove:t.fMove,touchend:t.fEnd}}),i("canvas",{staticClass:"prv-canvas",style:{height:t.cvsStyleHeight,top:t.prvTop},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false",eventid:"2ea99d5c-2"},on:{touchstart:t.fHideImg}}),i("view",{staticClass:"oper-wrapper",style:{display:t.styleDisplay}},[i("view",{staticClass:"oper"},[t.showOper?i("view",{staticClass:"btn-wrapper"},[i("view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover",eventid:"2ea99d5c-3"},on:{click:t.fSelect}},[i("text",[t._v("重选")])]),i("view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover",eventid:"2ea99d5c-4"},on:{click:t.fClose}},[i("text",[t._v("关闭")])]),i("view",{style:{width:t.btnWidth,display:t.btnDsp},attrs:{"hover-class":"hover",eventid:"2ea99d5c-5"},on:{click:t.fRotate}},[i("text",[t._v("旋转")])]),i("view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover",eventid:"2ea99d5c-6"},on:{click:t.fPreview}},[i("text",[t._v("预览")])]),i("view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover",eventid:"2ea99d5c-7"},on:{click:t.fUpload}},[i("text",[t._v("上传")])])]):i("view",{staticClass:"clr-wrapper"},[i("slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":"",eventid:"2ea99d5c-8"},on:{change:t.fColorChange}}),i("view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover",eventid:"2ea99d5c-9"},on:{click:t.fPrvUpload}},[i("text",[t._v("上传")])])])])])])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},9383:function(t,e,i){"use strict";i.r(e);var a=i("91e8"),s=i("ae5a");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("498a");var r=i("2877"),h=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports},a1a9:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9383")),s=n(i("1a47"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h=r({components:{wmPoster:s.default,avatar:a.default},data:function(){return{shadow:!1,url:"/static/default-skin/big10006.jpg",Defaulttheam:this.Defaulttheam}},methods:{myUpload:function(t){this.url=t.path},SetShadow:function(t){this.shadow=t.detail.value},SetTheam:function(e){console.log(e),this.Defaulttheam.headcls=e.currentTarget.dataset.cls,this.Defaulttheam.btncls=e.currentTarget.dataset.btncls,this.Defaulttheam.textcls=e.currentTarget.dataset.textcls,t.setStorageSync("Defaulttheam",this.Defaulttheam)}}},"components",{avatar:a.default});e.default=h}).call(this,i("6e42")["default"])},ae5a:function(t,e,i){"use strict";i.r(e);var a=i("0426"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},b1de:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("cu-custom",{attrs:{bgColor:t.Defaulttheam.headcls,isBack:!0,mpcomid:"9066649c-0"}},[i("block",{slot:"backText"},[t._v("返回1")]),i("block",{slot:"content"},[t._v("按钮")])],1),t._m(0),i("view",{staticClass:"padding flex flex-direction"},[i("avatar",{attrs:{selWidth:"200rpx",selHeight:"200rpx",avatarSrc:t.url,avatarStyle:"width: 200rpx; height: 200rpx; border-radius: 100%;",eventid:"9066649c-0",mpcomid:"9066649c-1"},on:{upload:t.myUpload}})],1),i("wmPoster",{attrs:{imgSrc:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",QrSrc:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",Title:"标题文本",PriceTxt:"价格显示",OriginalTxt:"划线价显示",mpcomid:"9066649c-2"}}),i("view",{staticClass:"cu-bar margin-top bg-white"},[t._m(1),i("view",{staticClass:"action"},[i("text",{staticClass:"text-df margin-right-sm"},[t._v("阴影")]),i("switch",{class:t.shadow?"checked":"",attrs:{color:"#39B54A",eventid:"9066649c-1"},on:{change:t.SetShadow}})])]),i("view",{staticClass:"grid col-2 padding-sm"},[i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-red","data-btncls":"bg-red","data-textcls":"text-red",eventid:"9066649c-2"},on:{tap:t.SetTheam}},[t._m(2)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-orange","data-btncls":"bg-orange","data-textcls":"text-orange",eventid:"9066649c-3"},on:{tap:t.SetTheam}},[t._m(3)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-green","data-btncls":"bg-green","data-textcls":"text-green",eventid:"9066649c-4"},on:{tap:t.SetTheam}},[t._m(4)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-blue","data-btncls":"bg-cyan","data-textcls":"text-cyan",eventid:"9066649c-5"},on:{tap:t.SetTheam}},[t._m(5)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-purple","data-btncls":"bg-purple","data-textcls":"text-purple",eventid:"9066649c-6"},on:{tap:t.SetTheam}},[t._m(6)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-pink","data-btncls":"bg-mauve","data-textcls":"text-mauve",eventid:"9066649c-7"},on:{tap:t.SetTheam}},[t._m(7)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-gray","data-btncls":"bg-gray","data-textcls":"text-gray",eventid:"9066649c-8"},on:{tap:t.SetTheam}},[t._m(8)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-grey","data-btncls":"bg-grey","data-textcls":"text-grey",eventid:"9066649c-9"},on:{tap:t.SetTheam}},[t._m(9)]),i("view",{staticClass:"padding-sm",attrs:{"data-cls":"bg-gradual-black","data-btncls":"bg-black","data-textcls":"text-black",eventid:"9066649c-10"},on:{tap:t.SetTheam}},[t._m(10)])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-bar margin-top bg-white"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("块状按钮")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮颜色")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-red padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("魅红")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#f43f3b - #ec008c")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-orange padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("鎏金")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ff9700 - #ed1c24")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-green padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("翠柳")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#39b54a - #8dc63f")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-blue padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("靛青")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#0081ff - #1cbbb4")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-purple padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("惑紫")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#9000ff - #5e00ff")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-pink padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("霞彩")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ec008c - #6739b6")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-gray padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("烟灰")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#8799a3 - #333333")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-grey padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("玄灰")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#8799a3 - #333333")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"bg-gradual-black padding radius text-center shadow-blur"},[i("view",{staticClass:"text-lg"},[t._v("水墨")]),i("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#333333 - #333333")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},b745:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s=n(i("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,a,s,n,r){try{var h=t[n](r),l=h.value}catch(c){return void i(c)}h.done?e(l):Promise.resolve(l).then(a,s)}function h(t){return function(){var e=this,i=arguments;return new Promise(function(a,s){var n=t.apply(e,i);function h(t){r(n,a,s,h,l,"next",t)}function l(t){r(n,a,s,h,l,"throw",t)}h(void 0)})}}var l={name:"wm-poster",props:{CanvasID:{Type:String,default:"PosterCanvas"},imgSrc:{Type:String,default:""},QrSrc:{Type:String,default:""},Title:{Type:String,default:""},TitleColor:{Type:String,default:"#333333"},LineType:{Type:[String,Boolean],default:!0},PriceTxt:{Type:String,default:"99.99"},PriceColor:{Type:String,default:"#e31d1a"},OriginalTxt:{Type:String,default:"199.99"},OriginalColor:{Type:String,default:"#b8b8b8"},Width:{Type:String,default:750},CanvasBg:{Type:String,default:"#ffffff"},Referrer:{Type:String,default:"quitter推荐给你"},ViewDetails:{Type:String,default:"长按或扫描识别二维码"}},data:function(){return{canvasW:0,canvasH:0,canvasImgSrc:"",ctx:null}},methods:{OnCanvas:function(){var e=h(s.default.mark(function e(){var i,n,r,h,l,c,o,d,u,p,f,v,g;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a.ctx=t.createCanvasContext(a.CanvasID,this),i=t.upx2px(a.Width),n=t.upx2px(30),r=t.upx2px(150),h=0,e.next=5,a.getImageInfo({imgSrc:a.imgSrc});case 5:return l=e.sent,e.next=8,a.getImageInfo({imgSrc:a.QrSrc});case 8:c=e.sent,o=[l.width,l.height],d=[c.width,c.height],u=i-2*n,o[0]!=u&&(o[1]=Math.floor(u/o[0]*o[1]),o[0]=u),d[0]!=r&&(d[1]=Math.floor(r/d[0]*d[1]),d[0]=r),a.canvasW=i,a.canvasH=o[1]+d[1]+128,a.ctx.setFillStyle(a.CanvasBg),a.ctx.fillRect(0,0,i,a.canvasH),a.ctx.drawImage(l.path,n,n,o[0],o[1]),a.ctx.setFontSize(t.upx2px(28)),a.ctx.setFillStyle(a.TitleColor),p=0,f=o[1]+2*n+10,v=1,g=0;case 25:if(!(g<a.Title.length)){e.next=47;break}if(h+=a.ctx.measureText(a.Title[g]).width,!(h>o[0])){e.next=43;break}if(2!=v||!a.LineType){e.next=36;break}return a.ctx.fillText(a.Title.substring(p,g-8)+"...",n,f),h=0,p=g,v++,e.abrupt("break",47);case 36:a.ctx.fillText(a.Title.substring(p,g),n,f),h=0,f+=20,p=g,v++;case 41:e.next=44;break;case 43:g==a.Title.length-1&&(a.ctx.fillText(a.Title.substring(p,g+1),n,f),h=0);case 44:g++,e.next=25;break;case 47:h=n,f+=t.upx2px(60),1==v&&(f+=20),""!=a.PriceTxt&&(a.ctx.setFillStyle(a.PriceColor),a.ctx.setFontSize(t.upx2px(38)),a.ctx.fillText(a.PriceTxt,h,f),h+=a.ctx.measureText(a.PriceTxt).width+t.upx2px(10)),""!=a.PriceTxt&&""!=a.OriginalTxt&&(a.ctx.setFillStyle(a.OriginalColor),a.ctx.setFontSize(t.upx2px(24)),a.ctx.fillText(a.OriginalTxt,h,f)),a.ctx.strokeStyle=a.OriginalColor,a.ctx.moveTo(h,f-t.upx2px(10)),a.ctx.lineTo(h+a.ctx.measureText(a.OriginalTxt).width,f-t.upx2px(10)),a.ctx.stroke(),f+=t.upx2px(20),a.ctx.drawImage(c.path,o[0]-d[0]+n,f,d[0],d[1]),a.ctx.setFillStyle(a.TitleColor),a.ctx.setFontSize(t.upx2px(30)),a.ctx.fillText(a.Referrer,n,f+d[1]/2),a.ctx.setFillStyle(a.OriginalColor),a.ctx.setFontSize(t.upx2px(24)),a.ctx.fillText(a.ViewDetails,n,f+d[1]/2+20),setTimeout(function(){a.ctx.draw(!0,function(t){a.getNewImage()})},600);case 65:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),getImageInfo:function(){var e=h(s.default.mark(function e(i){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=i.imgSrc,e.abrupt("return",new Promise(function(e,i){t.getImageInfo({src:a,success:function(t){e(t)},fail:function(t){i(t)}})}));case 2:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),getNewImage:function(){t.canvasToTempFilePath({canvasId:a.CanvasID,quality:1,complete:function(t){console.log(t.tempFilePath),a.$emit("success",t)}},this)}},mounted:function(){a=this,a.OnCanvas()}};e.default=l}).call(this,i("6e42")["default"])},ca1f:function(t,e,i){"use strict";i.r(e);var a=i("b745"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},ee86:function(t,e,i){"use strict";i.r(e);var a=i("a1a9"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},f3ea:function(t,e,i){"use strict";i.r(e);var a=i("b1de"),s=i("ee86");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var r=i("2877"),h=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports}},[["3c48","common/runtime","common/vendor"]]]);
});
require('pages/main_page/myset/myset.js');
__wxRoute = 'pages/main_page/homelist/homelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/homelist/homelist.js';

define('pages/main_page/homelist/homelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/homelist/homelist"],{"06d2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniIcon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16}},methods:{_onClick:function(){this.$emit("click")}}};e.default=n},"0df1":function(t,e,i){"use strict";i.r(e);var n=i("aa93"),a=i("8a8b");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"18bb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(i("e21f")),a=c(i("b93d")),s=c(i("4860")),r=c(i("f8a8"));function c(t){return t&&t.__esModule?t:{default:t}}var o=0,u=[{datetime:"40分钟前",article_type:0,title:"1.uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639,videoSrc:!0},{datetime:"一天前",article_type:1,title:"2.DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395,videoSrc:!1},{datetime:"一天前",article_type:2,title:"3.中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395,videoSrc:!1},{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"4.uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11,videoSrc:!0},{datetime:"2小时前",article_type:4,title:"5.uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69,videoSrc:!1}],l={components:{refresh:n.default,navTab:a.default,uniIcon:s.default,mediaList:r.default},data:function(){return{Defaulttheam:this.Defaulttheam,headerPosition:"fixed",currentTab:0,headerTop:null,statusTop:null,pages:[],tabBars:[{name:"关注",id:"guanzhu",bg:"/static/default-skin/bg1.jpg"},{name:"推荐",id:"tuijian",bg:"/static/default-skin/bg2.jpg"},{name:"体育",id:"tiyu",bg:"/static/default-skin/bg3.jpg"},{name:"热点",id:"redian",bg:"/static/default-skin/bg4.jpg"},{name:"财经",id:"caijing",bg:"/static/default-skin/bg5.jpg"},{name:"娱乐",id:"yule",bg:"/static/default-skin/bg6.jpg"},{name:"军事",id:"junshi",bg:"/static/default-skin/bg1.jpg"},{name:"历史",id:"lishi",bg:"/static/default-skin/bg2.jpg"},{name:"本地",id:"bendi",bg:"/static/default-skin/bg3.jpg"}],list:[u,u,u,u,u,u,u,u,u]}},mounted:function(){},onLoad:function(){for(var t=1;t<=this.tabBars.length;t++)this.pages.push(1)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},methods:{touchStart:function(t){console.log(t),0==this.currentTab&&(o=t.changedTouches[0].pageX)},toucheEnd:function(e){console.log(e),e.changedTouches[0].pageX-o>120&&0==this.currentTab&&t.switchTab({url:"../index/index"})},conClick:function(t){},refreshStart:function(t){this.$refs.refresh.refreshStart(t)},refreshMove:function(t){this.$refs.refresh.refreshMove(t)},refreshEnd:function(t){this.$refs.refresh.refreshEnd(t)},isRefresh:function(){return new Promise(function(e,i){setTimeout(function(){t.showToast({icon:"success",title:"刷新成功"}),e()},1e3)})},isRequest:function(e){var i=this;return new Promise(function(e,n){i.pages[i.currentTab]++;setTimeout(function(){t.hideLoading();var i=u;e(i)},1e3)})},swiperTab:function(t){var e=t.detail.current;this.tabBars.length<=5?this.$refs.navTab.navClick(e):this.$refs.navTab.longClick(e)},loadMore:function(){var e=this;console.log("加载".concat(this.currentTab)),t.showLoading({content:"加载中",mask:!0});this.isRequest().then(function(t){var i=e.list;i[e.currentTab]=i[e.currentTab].concat(t),console.log(i),e.list=i,e.$forceUpdate()})},close:function(e,i){var n=this;t.showModal({content:"是否删除本条信息？",success:function(t){if(t.confirm)for(var e=n.list,a=1;a<=e[n.currentTab].length;a++)e[n.currentTab].splice(i,1)}})},goDetail:function(t,e){}}};e.default=l}).call(this,i("6e42")["default"])},"1ec4":function(t,e,i){},"2d56":function(t,e,i){"use strict";var n=i("1ec4"),a=i.n(n);a.a},"31a5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"refresh",props:{isRefresh:{type:Function,default:{}}},data:function(){return{isTranf:0,touchStart:"",touchMove:"",isEnd:0}},methods:{refreshStart:function(t){0==this.isEnd&&(this.touchStart=t.changedTouches[0].pageY)},refreshMove:function(t){if(0==this.isEnd){var e=this.touchStart,i=(this.touchMove,t.changedTouches[0].pageY);if(e<=i){var n=e>i?0:i-e;this.isTranf=n,this.touchMove=t.changedTouches[0].pageY}}else this.isTranf=0,this.isEnd=0,this.touchStart=9999},refreshEnd:function(t){var e=this;0==this.isEnd&&(this.isTranf>=90?(this.isTranf=125,this.isEnd=1,this.isRefresh().then(function(t){e.isEnd=2,setTimeout(function(){e.isTranf=0,e.isEnd=0},600)})):this.isTranf=0)}},computed:{isTranform:function(){var t=this.isTranf>150?150:this.isTranf,e="transform: translateY(".concat(t-100,"px);");return e},isZoom:function(){var t=this.isTranf>125?125:this.isTranf,e="zoom:".concat(t/125,";");return e}}};e.default=n},"346a":function(t,e,i){"use strict";i.r(e);var n=i("31a5"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},4860:function(t,e,i){"use strict";i.r(e);var n=i("df6c"),a=i("56b4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("9c36");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"56b4":function(t,e,i){"use strict";i.r(e);var n=i("06d2"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"683e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"refreshBox",style:t.isTranform},[i("view",{staticClass:"refresh",class:2==t.isEnd?"animationSmall":"",style:t.isZoom},[0==t.isEnd?i("view",{staticClass:"refreshWord"},[t._v("松开刷新")]):t._e(),1==t.isEnd?i("view",{staticClass:"refreshCirle animation"}):t._e(),2==t.isEnd?i("image",{staticClass:"iconYes",attrs:{src:"../static/icon-yes.png"}}):t._e()])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"68d1":function(t,e,i){"use strict";i("a0fc");var n=s(i("b0ce")),a=s(i("0df1"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},7127:function(t,e,i){"use strict";var n=i("9e67"),a=i.n(n);a.a},7331:function(t,e,i){},"76a5":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"navTab",props:{tabBars:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var e=this;t.getSystemInfo({success:function(t){e.isWidth=t.windowWidth/e.tabBars.length,e.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$parent.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t){var e=t-2;e=e<=0?0:e,this.toView="id".concat(e),console.log(t),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$parent.currentTab=t}}};e.default=i}).call(this,i("6e42")["default"])},"8a8b":function(t,e,i){"use strict";i.r(e);var n=i("18bb"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"9c36":function(t,e,i){"use strict";var n=i("7331"),a=i.n(n);a.a},"9e67":function(t,e,i){},a817:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"navTabBox solid-bottom"},[t.tabBars.length<=5?i("view",{staticClass:"shortTab"},[i("view",{staticClass:"navTab"},t._l(t.tabBars,function(e,n){return i("view",{key:n,staticClass:"navTabItem",class:n===t.tabClick?"click":"",attrs:{eventid:"543cfee6-0-"+n},on:{click:function(e){t.navClick(n)}}},[t._v(t._s(e.name))])})),i("view",{staticClass:"underlineBox",style:"transform:translateX("+t.isLeft+"px);width:"+t.isWidth+"px"},[i("view",{staticClass:"underline"})])]):t._e(),t.tabBars.length>5?i("view",{staticClass:"longTab"},[i("scroll-view",{staticStyle:{"white-space":"nowrap",display:"flex"},attrs:{"scroll-x":"true","scroll-with-animation":"","scroll-into-view":t.toView}},[t._l(t.tabBars,function(e,n){return i("view",{key:n,staticClass:"longItem",class:n===t.tabClick?"click":"",attrs:{"data-index":n,id:"id"+n,eventid:"543cfee6-1-"+n},on:{click:function(e){t.longClick(n)}}},[t._v(t._s(e.name))])}),i("view",{staticClass:"underlineBox",style:"transform:translateX("+t.isLeft+"px);"},[i("view",{staticClass:"underline"})])],2)],1):t._e()])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},aa93:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"pagecontent",attrs:{eventid:"360dd6b8-3"},on:{click:t.conClick,touchstart:t.refreshStart,touchmove:t.refreshMove,touchend:t.refreshEnd}},[i("cu-custom",{attrs:{bgImage:t.tabBars[t.currentTab].bg,isBack:!1,mpcomid:"360dd6b8-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("热点推荐20")])],1),i("refresh",{ref:"refresh",attrs:{isRefresh:t.isRefresh,mpcomid:"360dd6b8-1"}}),i("view",{staticClass:"bg-gradual-orange"},[i("navTab",{ref:"navTab",attrs:{tabBars:t.tabBars,mpcomid:"360dd6b8-2"}})],1),i("swiper",{staticStyle:{"min-height":"100vh"},attrs:{duration:400,current:t.currentTab,eventid:"360dd6b8-2"},on:{change:t.swiperTab,touchstart:t.touchStart,touchend:t.toucheEnd}},t._l(t.list,function(e,n){return i("swiper-item",{key:n,attrs:{mpcomid:"360dd6b8-4-"+n}},[i("scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true",eventid:"360dd6b8-1-"+n},on:{scrolltolower:t.loadMore}},[i("view",{staticStyle:{width:"100%",height:"80rpx"}}),i("view",{staticClass:"content"},t._l(e,function(a,s){return e.length>0?i("view",{key:s},[i("mediaList",{attrs:{options:a,eventid:"360dd6b8-0-"+n+"-"+s,mpcomid:"360dd6b8-3-"+n+"-"+s},on:{close:function(i){t.close(e,s)},click:function(e){t.goDetail(a,s)}}})],1):t._e()})),0===e.length?i("view",{staticClass:"noCard"},[t._v("暂无信息")]):t._e()])],1)}))],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b2b3:function(t,e,i){"use strict";i.r(e);var n=i("b49e"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},b49e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{options:{type:Object,default:function(t){return{}}}},methods:{close:function(t){this.$emit("close")},bindClick:function(){this.$emit("click")}}};e.default=n},b93d:function(t,e,i){"use strict";i.r(e);var n=i("a817"),a=i("d71b");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("2d56");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},d01e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-card article solid-bottom no-card"},[t.options.title?i("view",{staticClass:"cu-item shadow",attrs:{eventid:"5d8833cc-0"},on:{click:t.click}},[i("view",{staticClass:"title"},[i("view",{staticClass:"text-cut"},[t._v(t._s(t.options.title))])]),i("view",{staticClass:"content"},[t.options.image_url?i("image",{class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,function(e,n){return t.options.image_list?i("image",{key:n,attrs:{src:e.url}}):t._e()}),t.options.image_list?t._e():i("view",{staticClass:"desc"},[i("view",{staticClass:"text-content"},[t._v(t._s(t.options.title))]),i("view",[i("view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(t.options.datetime))]),i("view",{staticClass:"cu-tag bg-red light sm round"},[t._v(t._s(t.options.source))])])])],2)]):t._e()])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d71b:function(t,e,i){"use strict";i.r(e);var n=i("76a5"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},df6c:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-icon",class:"uni-icon-"+t.type,style:{color:t.color,"font-size":t.size+"px"},attrs:{eventid:"48e755f4-0"},on:{click:t._onClick}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e21f:function(t,e,i){"use strict";i.r(e);var n=i("683e"),a=i("346a");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("7127");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},f8a8:function(t,e,i){"use strict";i.r(e);var n=i("d01e"),a=i("b2b3");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["68d1","common/runtime","common/vendor"]]]);
});
require('pages/main_page/homelist/homelist.js');
__wxRoute = 'pages/main_page/homelist/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/homelist/detail/detail.js';

define('pages/main_page/homelist/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/homelist/detail/detail"],{"04f3":function(t,e,o){"use strict";o.r(e);var n=o("c98c"),i=o("bf9d");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("48aa");var l=o("2877"),a=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"48aa":function(t,e,o){"use strict";var n=o("fdf3"),i=o.n(n);i.a},"5d1b":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"",contentstyle:{height:"",width:""},videoCtx:null,disable:!1}},mounted:function(){var e=t.getSystemInfoSync();console.log(e.model),console.log(e.pixelRatio),console.log(e.windowWidth),console.log(e.windowHeight),console.log(e.language),console.log(e.version),console.log(e.platform),this.contentstyle.height=e.windowHeight+"px",this.contentstyle.width=e.windowWidth+"px",this.videoCtx=t.createVideoContext("demoVideo")},onLoad:function(e){this.title=e.title?e.title:"",t.setNavigationBarTitle({title:this.title})},onReady:function(){try{var e=t.getSystemInfoSync();console.log(e.model),console.log(e.pixelRatio),console.log(e.windowWidth),console.log(e.windowHeight),console.log(e.language),console.log(e.version),console.log(e.platform),this.contentstyle.height=e.windowHeight+"px",this.contentstyle.width=e.windowWidth+"px"}catch(o){}},methods:{play:function(e){this.videoCtx.play(),t.showToast({title:"开始播放",icon:"none"})},pause:function(e){this.videoCtx.pause(),t.showToast({title:"暂停播放",icon:"none"})},buy:function(e){this.videoCtx.pause(),t.showToast({title:"你在点我",icon:"none"})}}};e.default=o}).call(this,o("6e42")["default"])},bf9d:function(t,e,o){"use strict";o.r(e);var n=o("5d1b"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},c98c:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"page"},[o("video",{staticClass:"video",style:t.contentstyle,attrs:{id:"demoVideo",autoplay:"true",loop:"true",controls:t.disable,"show-fullscreen-btn":t.disable,"show-play-btn":t.disable,"show-center-play-btn":t.disable,"enable-progress-gesture":t.disable,src:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",eventid:"19b32d88-3"},on:{fullscreenchange:t.fullscreenchange}},[o("cover-view",{staticClass:"controls-title",attrs:{mpcomid:"19b32d88-0"}},[t._v(t._s(t.title))]),o("cover-view",{staticClass:"controls-price",attrs:{mpcomid:"19b32d88-1"}},[t._v("来源DCloud官方 作者丁小白")]),o("cover-image",{staticClass:"controls-play img",attrs:{src:"/static/goods_bag.png",eventid:"19b32d88-0",mpcomid:"19b32d88-2"},on:{click:t.play}}),o("cover-image",{staticClass:"controls-pause img",attrs:{src:"/static/goods_buy.png",eventid:"19b32d88-1",mpcomid:"19b32d88-3"},on:{click:t.buy}}),o("cover-image",{staticClass:"img controls-share",attrs:{src:"/static/goods_share.png",eventid:"19b32d88-2",mpcomid:"19b32d88-4"},on:{click:t.pause}})],1)])},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},fbb1:function(t,e,o){"use strict";o("a0fc");var n=s(o("b0ce")),i=s(o("04f3"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},fdf3:function(t,e,o){}},[["fbb1","common/runtime","common/vendor"]]]);
});
require('pages/main_page/homelist/detail/detail.js');
__wxRoute = 'pages/main_page/video/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main_page/video/index.js';

define('pages/main_page/video/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/video/index"],{"0339":function(t,i,e){"use strict";e.r(i);var o=e("5188"),n=e("a103");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("a058");var s=e("2877"),c=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"6affe781",null);i["default"]=c.exports},"07b3":function(t,i,e){"use strict";e("a0fc");var o=a(e("b0ce")),n=a(e("0339"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},"28c3":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function a(t){return r(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function l(t,i,e,o,n,a,s){try{var c=t[a](s),r=c.value}catch(l){return void e(l)}c.done?i(r):Promise.resolve(r).then(o,n)}function d(t){return function(){var i=this,e=arguments;return new Promise(function(o,n){var a=t.apply(i,e);function s(t){l(a,o,n,s,c,"next",t)}function c(t){l(a,o,n,s,c,"throw",t)}s(void 0)})}}var u={data:function(){return{scrollTop:0,title:"无意者 烈火焚身;以正义的烈火拔出黑暗",videoCtx:null,listTouchStartY:0,listTouchDirection:null,containerStyle:"",sysheight:0,distance:0,scroll:!1,id:0,index:0,playvideo:{title:"无意者 烈火焚身;以正义的烈火拔出黑暗",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"123",flag:!1,check:!0,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"https://img.91fyt.com/19e10ca607680d2242e595c82b9bb65de03f17788c09382dgtBC1Sddr7.jpg"},videoList:[{title:"无意者 烈火焚身;以正义的烈火拔出黑暗",src:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",content:"456",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"https://img.91fyt.com/6e2abf172ce3fec4e68692fe7226795763ed75d12d1b9693LC0cSSJZ03.jpg"},{title:"真正的恩典因不完整而美丽",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"123",flag:!1,check:!0,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"https://img.91fyt.com/547ff08d95da80c5f49f8c3a5b2a09973e7bed49f826aa46xkStV5YMGU.jpg"},{title:"折磨生出苦难，苦难又会加剧折磨",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"789",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"https://img.91fyt.com/c32032f671ba5830bad8fa3a689168180ed7f2341bf14be2BlT3YgRHhN.jpg"},{title:"真正的恩典因不完整而美丽",src:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",content:"456",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"http://img14.360buyimg.com/ads/jfs/t1/45162/29/4764/626138/5d270e59E278729f2/668f420b2fcbadb1.png"},{title:"折磨生出苦难，苦难又会加剧折磨",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"123",flag:!1,check:!0,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"https://img.91fyt.com/f087a84bafe488cd4f76341804d4f8a29df77a0323143c90Jpp1YGbNP2.jpg"},{title:"无意者 烈火焚身;以正义的烈火拔出黑暗",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss",content:"789",flag:!1,check:!1,avater:"https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg",picture:"http://img.haojingke.com/740c1c8ab1a7eadd43bd993e49f09f556d5649bb137f57073xm0nBI4ri.jpg"}]}},onLoad:function(i){this.sysheight=t.getSystemInfoSync().windowHeight,this.title=i.title?i.title:"无意者 烈火焚身;以正义的烈火拔出黑暗",t.setNavigationBarTitle({title:this.title})},onPageScroll:function(i){console.log(JSON.stringify(i)),0==this.scrollTop&&(this.scrollTop=i.scrollTop,this.scrollTop>0&&(this.index++,console.log("下一个视频"+this.index),this.index<0&&(this.index=this.videoList.length-1)),this.scrollTop<0&&(this.index--,console.log("上一个视频"+this.index),this.index==this.videoList.length&&(this.index=0))),0==i.scrollTop&&(this.playvideo=this.videoList[this.index],console.log("播放视频"+this.index),this.videoCtx=t.createVideoContext("video"),this.videoCtx.play(),this.scrollTop=i.scrollTop)},mounted:function(){var t=d(o.default.mark(function t(){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),methods:{pushVideoList:function(){var i=this,e=new Promise(function(e,o){t.request({url:"https://api.apiopen.top/videoRecommend?id=127397",success:function(t){var o=[],n=!0,s=!1,c=void 0;try{for(var r,l=t.data.result[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var d=r.value;"videoSmallCard"==d.type&&o.length<3&&o.push({src:d.data.playUrl,content:d.data.description,flag:!1,check:!1,avater:d.data.author.icon})}}catch(u){s=!0,c=u}finally{try{n||null==l.return||l.return()}finally{if(s)throw c}}i.videoList=[].concat(a(i.videoList),o),e()}})});return e},tapLove:function(){this.videoList[this.id].check=!this.videoList[this.id].check,this.videoList=a(this.videoList)},tapAvater:function(){t.showToast({icon:"none",title:"点击索引为".concat(this.id,"的头像")})},tapMsg:function(){t.showToast({icon:"none",title:"查看索引为".concat(this.id,"的评论")})},tapShare:function(){return t.showToast({icon:"none",title:"分享索引为".concat(this.id,"的视频")}),!1},ListTouchStart:function(t){this.listTouchStartY=t.touches[0].pageY},ListTouchMove:function(t){this.ListTouchMoveY(t.touches[0].pageY)},ListTouchMoveY:function(t){this.listTouchDirection=this.listTouchStartY-t>80?-1:0,console.log("向上"+this.listTouchDirection),this.listTouchDirection=t-this.listTouchStartY>80?1:this.listTouchDirection,console.log("向下"+this.listTouchDirection);var i=this.distance+t-this.listTouchStartY;i>0||this.listTouchStartY-t<10&&this.listTouchStartY-t>-10&&(this.listTouchDirection=null)},ListTouchEnd:function(){var i=d(o.default.mark(function i(e){return o.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:if(!this.scroll){i.next=2;break}return i.abrupt("return");case 2:this.id,console.log(this.listTouchDirection),-1==this.listTouchDirection&&(console.log("向上"),this.index++,this.index==this.videoList.length&&(this.index=0),this.playvideo=this.videoList[this.index]),1==this.listTouchDirection&&(console.log("向下"),this.index--,this.index<0&&(this.index=this.videoList.length-1),console.log(this.videoList[this.index]),this.playvideo=this.videoList[this.index]),this.videoCtx=t.createVideoContext("video_".concat(this.index)),this.videoCtx.play();case 8:case"end":return i.stop()}},i,this)}));function e(t){return i.apply(this,arguments)}return e}(),videoPlay:function(i){this.videoList[i].flag?(this.videoCtx=t.createVideoContext("video_".concat(i)),this.videoCtx.pause()):(this.videoCtx=t.createVideoContext("video_".concat(i)),this.videoCtx.play()),this.videoList[i].flag=!this.videoList[i].flag},animate:function(t,i){var e=this,o=this.distance,n=new Promise(function(n,a){e.scroll=!0;var s=setInterval(function(){console.log("视频滑动"),-1===i&&t<o||1===i&&t>o?o+=3e3*i:(clearInterval(s),o=t,e.distance=t,e.scroll=!1,n())},0)});return n}}};i.default=u}).call(this,e("6e42")["default"])},5188:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticStyle:{position:"absolute",top:"0",bottom:"0"}},[e("view",{staticClass:"video-view",style:t.containerStyle},[e("video",{key:t.index,staticClass:"video",attrs:{id:"video","data-id":t.index,autoplay:"true",src:t.playvideo.src,controls:"",eventid:"12fe765a-5"},on:{tapVideo:function(i){t.videoPlay(t.index)},touchstart:t.ListTouchStart,touchmove:t.ListTouchMove,touchend:t.ListTouchEnd}},[e("cover-view",{staticClass:"controls-title",attrs:{mpcomid:"12fe765a-0"}},[t._v(t._s(t.playvideo.title))]),e("cover-view",{staticClass:"controls-price",attrs:{mpcomid:"12fe765a-1"}},[t._v("来源 作者丁小白推荐")]),e("cover-image",{staticClass:"controls-play img",attrs:{src:t.playvideo.picture,eventid:"12fe765a-0",mpcomid:"12fe765a-2"},on:{click:t.play}}),e("cover-image",{staticClass:"avater img",attrs:{src:t.playvideo.avater,eventid:"12fe765a-1",mpcomid:"12fe765a-3"},on:{tap:function(i){i.stopPropagation(),t.tapAvater(i)}}}),e("cover-image",{staticClass:"aixin img",attrs:{src:"http://www.91jdj.cn/attachment/images/69/2019/08/uSUKnTofUn0SfuwRn3SgO4WtTso3R3.png",eventid:"12fe765a-2",mpcomid:"12fe765a-4"},on:{tap:function(i){i.stopPropagation(),t.tapLove(i)}}}),e("cover-image",{staticClass:"xiaoxi img",attrs:{src:"http://www.91jdj.cn/attachment/images/69/2019/08/QKyhcbbxYcuYHhKHbCb3sc3HZQIuYc.png",eventid:"12fe765a-3",mpcomid:"12fe765a-5"},on:{tap:function(i){i.stopPropagation(),t.tapMsg(i)}}}),e("cover-image",{staticClass:"controls-share",attrs:{src:"http://www.91jdj.cn/attachment/images/69/2019/08/p9fwD74jk4nX9kqxTd4xZjJo6Jf649.png",eventid:"12fe765a-4",mpcomid:"12fe765a-6"},on:{tap:t.tapShare}})],1)])])},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})},"6e7c":function(t,i,e){},a058:function(t,i,e){"use strict";var o=e("6e7c"),n=e.n(o);n.a},a103:function(t,i,e){"use strict";e.r(i);var o=e("28c3"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a}},[["07b3","common/runtime","common/vendor"]]]);
});
require('pages/main_page/video/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"41b1":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c={data:function(){return{PageCur:"basics"}},methods:{NavChange:function(t){this.PageCur=t.currentTarget.dataset.cur}}};a.default=c},7624:function(t,a,e){"use strict";e("a0fc");var c=i(e("b0ce")),n=i(e("e87c"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(n.default))},"7f36":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",["basics"==t.PageCur?e("basics",{attrs:{mpcomid:"4fb97c64-0"}}):t._e(),"component"==t.PageCur?e("components",{attrs:{mpcomid:"4fb97c64-1"}}):t._e(),"plugin"==t.PageCur?e("plugin",{attrs:{mpcomid:"4fb97c64-2"}}):t._e(),e("view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[e("view",{staticClass:"action",attrs:{"data-cur":"basics",eventid:"4fb97c64-0"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/basics"+["basics"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"basics"==t.PageCur?"text-green":"text-gray"},[t._v("元素")])]),e("view",{staticClass:"action",attrs:{"data-cur":"component",eventid:"4fb97c64-1"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/component"+["component"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"component"==t.PageCur?"text-green":"text-gray"},[t._v("组件")])]),e("view",{staticClass:"action",attrs:{"data-cur":"plugin",eventid:"4fb97c64-2"},on:{click:t.NavChange}},[e("view",{staticClass:"cuIcon-cu-image"},[e("image",{attrs:{src:"/static/tabbar/plugin"+["plugin"==t.PageCur?"_cur":""]+".png"}})]),e("view",{class:"plugin"==t.PageCur?"text-green":"text-gray"},[t._v("扩展")])])])],1)},n=[];e.d(a,"a",function(){return c}),e.d(a,"b",function(){return n})},9857:function(t,a,e){"use strict";e.r(a);var c=e("41b1"),n=e.n(c);for(var i in c)"default"!==i&&function(t){e.d(a,t,function(){return c[t]})}(i);a["default"]=n.a},e87c:function(t,a,e){"use strict";e.r(a);var c=e("7f36"),n=e("9857");for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);var r=e("2877"),s=Object(r["a"])(n["default"],c["a"],c["b"],!1,null,null,null);a["default"]=s.exports}},[["7624","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/basics/layout';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/layout.js';

define('pages/basics/layout.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/layout"],{3712:function(s,i,t){},"4e50":function(s,i,t){"use strict";t.r(i);var a=t("8d3e"),e=t("64df");for(var l in e)"default"!==l&&function(s){t.d(i,s,function(){return e[s]})}(l);t("8686");var d=t("2877"),g=Object(d["a"])(e["default"],a["a"],a["b"],!1,null,null,null);i["default"]=g.exports},"64df":function(s,i,t){"use strict";t.r(i);var a=t("968f"),e=t.n(a);for(var l in a)"default"!==l&&function(s){t.d(i,s,function(){return a[s]})}(l);i["default"]=e.a},8686:function(s,i,t){"use strict";var a=t("3712"),e=t.n(a);e.a},"8d3e":function(s,i,t){"use strict";var a=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("view",[t("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"56bc0dc3-0"}},[t("block",{slot:"backText"},[s._v("返回")]),t("block",{slot:"content"},[s._v("布局")])],1),t("scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:s.CustomBar+"px"}],attrs:{"scroll-x":""}},s._l(s.tabNav,function(i,a){return t("view",{key:a,staticClass:"cu-item",class:a==s.TabCur?"text-blue cur":"",attrs:{"data-id":a,eventid:"56bc0dc3-0-"+a},on:{tap:s.tabSelect}},[s._v(s._s(s.tabNav[a]))])})),0==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("固定尺寸")])]),t("view",{staticClass:"padding bg-white"},[t("view",{staticClass:"flex flex-wrap"},[t("view",{staticClass:"basis-xs bg-grey margin-xs padding-sm radius"},[s._v("xs(20%)")]),t("view",{staticClass:"basis-df"}),t("view",{staticClass:"basis-sm bg-grey margin-xs padding-sm radius"},[s._v("sm(40%)")]),t("view",{staticClass:"basis-df"}),t("view",{staticClass:"basis-df bg-grey margin-xs padding-sm radius"},[s._v("sub(50%)")]),t("view",{staticClass:"basis-lg bg-grey margin-xs padding-sm radius"},[s._v("lg(60%)")]),t("view",{staticClass:"basis-xl bg-grey margin-xs padding-sm radius"},[s._v("xl(80%)")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("比例布局")])]),t("view",{staticClass:"padding bg-white"},[t("view",{staticClass:"flex"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")])]),t("view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-twice bg-grey padding-sm margin-xs radius"},[s._v("2")])]),t("view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[t("view",{staticClass:"flex-sub bg-grey padding-sm margin-xs radius"},[s._v("1")]),t("view",{staticClass:"flex-twice bg-grey padding-sm margin-xs radius"},[s._v("2")]),t("view",{staticClass:"flex-treble bg-grey padding-sm margin-xs radius"},[s._v("3")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("水平对齐(justify)")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"flex solid-bottom padding justify-start"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")])]),t("view",{staticClass:"flex solid-bottom padding justify-end"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")])]),t("view",{staticClass:"flex solid-bottom padding justify-center"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")])]),t("view",{staticClass:"flex solid-bottom padding justify-between"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("between")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("between")])]),t("view",{staticClass:"flex solid-bottom padding justify-around"},[t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("around")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("around")])])]),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("垂直对齐(align)")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"flex solid-bottom padding align-start"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("start")])]),t("view",{staticClass:"flex solid-bottom padding align-end"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("end")])]),t("view",{staticClass:"flex solid-bottom padding align-center"},[t("view",{staticClass:"bg-grey padding-lg margin-xs radius"},[s._v("ColorUi")]),t("view",{staticClass:"bg-grey padding-sm margin-xs radius"},[s._v("center")])])])]):s._e(),1==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("等分列")]),t("view",{staticClass:"action"})]),t("view",{staticClass:"bg-white padding"},s._l(5,function(i,a){return t("view",{key:a,staticClass:"grid margin-bottom text-center",class:"col-"+(a+1)},s._l(2*(a+1),function(i,a){return t("view",{key:a,staticClass:"padding",class:a%2==0?"bg-cyan":"bg-blue"},[s._v(s._s(a+1))])}))})),t("view",{staticClass:"cu-bar bg-white  margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("等高")]),t("view",{staticClass:"action"})]),t("view",{staticClass:"bg-white padding"},[t("view",{staticClass:"grid col-4 grid-square"},s._l(s.avatar,function(i,a){return t("view",{key:a,staticClass:"bg-img",style:[{backgroundImage:"url("+s.avatar[a]+")"}]})}))])]):s._e(),2==s.TabCur?t("block",[t("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("浮动")])]),t("view",{staticClass:"bg-white padding"},[t("view",{staticClass:" cf padding-sm"},[t("view",{staticClass:"bg-grey radius fl padding-sm"},[s._v("ColorUi fl")]),t("view",{staticClass:"bg-grey radius fr padding-sm"},[s._v("ColorUi fr")])])]),t("view",{staticClass:"cu-bar bg-white  solid-bottom margin-top solid-bottom"},[t("view",{staticClass:"action"},[t("text",{staticClass:"cuIcon-title text-blue"}),s._v("内外边距")])]),t("view",{staticClass:"bg-white"},[t("view",{staticClass:"padding bg-gray"},[s._v("{size}的尺寸有xs/sm/df/lg/xl")]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("水平方向外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("水平方向内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-lr-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-lr-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("垂直方向外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("垂直方向内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-tb-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-tb-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("上外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("上内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-top-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-top-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("右外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("右内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-right-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-right-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("下外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("下内边距")]),t("view",{staticClass:"basis-df"},[s._v("margin-bottom-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-bottom-{size}")])]),t("view",{staticClass:"flex flex-wrap padding solid-top"},[t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("左外边距")]),t("view",{staticClass:"basis-df padding-bottom-xs"},[s._v("左内边距")]),t("view",{staticClass:"basis-df"},[s._v(".margin-left-{size}")]),t("view",{staticClass:"basis-df"},[s._v(".padding-left-{size}")])])])]):s._e()],1)},e=[];t.d(i,"a",function(){return a}),t.d(i,"b",function(){return e})},"95cb":function(s,i,t){"use strict";t("a0fc");var a=l(t("b0ce")),e=l(t("4e50"));function l(s){return s&&s.__esModule?s:{default:s}}Page((0,a.default)(e.default))},"968f":function(s,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,TabCur:0,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],tabNav:["Flex布局","Grid布局","辅助布局"]}},methods:{tabSelect:function(s){this.TabCur=s.currentTarget.dataset.id,this.scrollLeft=60*(s.currentTarget.dataset.id-1)}}};i.default=a}},[["95cb","common/runtime","common/vendor"]]]);
});
require('pages/basics/layout.js');
__wxRoute = 'pages/basics/background';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/background.js';

define('pages/basics/background.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/background"],{2095:function(t,s,e){"use strict";e("a0fc");var a=c(e("b0ce")),i=c(e("e3d8"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},bc9c:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{ColorList:this.ColorList}}};s.default=a},e3d8:function(t,s,e){"use strict";e.r(s);var a=e("e822"),i=e("e8c4");for(var c in i)"default"!==c&&function(t){e.d(s,t,function(){return i[t]})}(c);var l=e("2877"),n=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=n.exports},e822:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"11e71972-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("背景")])],1),t._m(0),e("view",{staticClass:"grid col-3 padding-sm"},t._l(t.ColorList,function(s,a){return e("view",{key:a,staticClass:"padding-sm"},[e("view",{staticClass:"padding radius text-center shadow-blur",class:"bg-"+s.name},[e("view",{staticClass:"text-lg"},[t._v(t._s(s.title))]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v(t._s(s.name))])])])})),t._m(1),e("view",{staticClass:"grid col-3 bg-white padding-sm"},t._l(t.ColorList,function(s,a){return a<12?e("view",{key:a,staticClass:"padding-sm"},[e("view",{staticClass:"padding radius text-center light",class:"bg-"+s.name},[e("view",{staticClass:"text-lg"},[t._v(t._s(s.title))]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v(t._s(s.name))])])]):t._e()})),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"cu-bar bg-white solid-bottom"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("深色背景")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"cu-bar bg-white solid-bottom"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("淡色背景")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("渐变背景")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"grid col-2 padding-sm"},[e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-red padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("魅红")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#f43f3b - #ec008c")])])]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-orange padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("鎏金")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ff9700 - #ed1c24")])])]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-green padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("翠柳")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#39b54a - #8dc63f")])])]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-blue padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("靛青")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#0081ff - #1cbbb4")])])]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-purple padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("惑紫")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#9000ff - #5e00ff")])])]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"bg-gradual-pink padding radius text-center shadow-blur"},[e("view",{staticClass:"text-lg"},[t._v("霞彩")]),e("view",{staticClass:"margin-top-sm text-Abc"},[t._v("#ec008c - #6739b6")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("图片背景")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"bg-img bg-mask flex align-center",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg')",height:"414rpx"}},[e("view",{staticClass:"padding-xl text-white"},[e("view",{staticClass:"padding-xs text-xxl text-bold"},[t._v("钢铁之翼")]),e("view",{staticClass:"padding-xs text-lg"},[t._v("Only the guilty need fear me.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("透明背景(文字层)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"grid col-2"},[e("view",{staticClass:"bg-img padding-bottom-xl",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg')",height:"207rpx"}},[e("view",{staticClass:"bg-shadeTop padding padding-bottom-xl"},[t._v("上面开始")])]),e("view",{staticClass:"bg-img padding-top-xl flex align-end",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg')",height:"207rpx"}},[e("view",{staticClass:"bg-shadeBottom padding padding-top-xl flex-sub"},[t._v("下面开始")])])])}];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},e8c4:function(t,s,e){"use strict";e.r(s);var a=e("bc9c"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(s,t,function(){return a[t]})}(c);s["default"]=i.a}},[["2095","common/runtime","common/vendor"]]]);
});
require('pages/basics/background.js');
__wxRoute = 'pages/basics/text';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/text.js';

define('pages/basics/text.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/text"],{"0b45":function(t,s,i){"use strict";i.r(s);var e=i("c00e"),a=i.n(e);for(var l in e)"default"!==l&&function(t){i.d(s,t,function(){return e[t]})}(l);s["default"]=a.a},"6f0b":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"3f3d2a06-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("文本")])],1),t._m(0),t._m(1),t._m(2),i("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return i("view",{key:e,staticClass:"padding-sm"},[i("view",{staticClass:"text-center",class:"text-"+s.name},[t._v(t._s(s.title))])])})),t._m(3),i("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(t,s){return i("view",{key:s,staticClass:"padding-sm"},[i("view",{staticClass:"text-center text-shadow",class:"text-"+t.name},[i("view",{staticClass:"cuIcon-ellipse text-xxl"})])])})),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字大小")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"bg-white padding-lr"},[i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("60")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xsl padding"},[i("text",{staticClass:" cuIcon-roundcheckfill text-green"})]),i("view",{staticClass:"padding"},[t._v("用于图标、数字等特大显示")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("40")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-sl padding"},[i("text",{staticClass:" cuIcon-roundcheckfill text-green"})]),i("view",{staticClass:"padding"},[t._v("用于图标、数字等较大显示")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("22")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xxl padding"},[i("text",{staticClass:"text-price text-red"},[t._v("80.00")])]),i("view",{staticClass:"padding"},[t._v("用于金额数字等信息")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("18")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xl padding"},[i("text",{staticClass:"text-black text-bold"},[t._v("您的订单已提交成功！")])]),i("view",{staticClass:"padding"},[t._v("页面大标题，用于结果页等单一信息页")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("16")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-lg padding"},[i("text",{staticClass:"text-black"},[t._v("ColorUI组件库")])]),i("view",{staticClass:"padding"},[t._v("页面小标题，首要层级显示内容")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("14")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-df padding"},[t._v("专注视觉的小程序组件库")]),i("view",{staticClass:"padding"},[t._v("页面默认字号，用于摘要或阅读文本")])])]),i("view",{staticClass:"solids-bottom padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("12")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-sm padding"},[i("text",{staticClass:"text-grey"},[t._v("衬衫的价格是9磅15便士")])]),i("view",{staticClass:"padding"},[t._v("页面辅助信息，次级内容等")])])]),i("view",{staticClass:"padding-xs flex align-center"},[i("view",{staticClass:"padding"},[t._v("10")]),i("view",{staticClass:"flex-sub text-center"},[i("view",{staticClass:"solid-bottom text-xs padding"},[i("text",{staticClass:"text-gray"},[t._v("我于杀戮之中绽放 亦如黎明中的花朵")])]),i("view",{staticClass:"padding"},[t._v("说明文本，标签文字等关注度低的文字")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字颜色")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字阴影")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字截断")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding bg-white"},[i("view",{staticClass:"text-cut padding bg-grey radius",staticStyle:{width:"220px"}},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("文字对齐")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding bg-white"},[i("view",{staticClass:"text-left padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),i("view",{staticClass:"text-center padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),i("view",{staticClass:"text-right padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("特殊文字")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding text-center"},[i("view",{staticClass:"padding-lr bg-white"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-price"},[t._v("80.00")])]),i("view",{staticClass:"padding"},[t._v('价格文本，利用伪元素添加"¥"符号')])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-Abc"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("英文单词首字母大写")])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-ABC"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("全部字母大写")])]),i("view",{staticClass:"padding-lr bg-white margin-top"},[i("view",{staticClass:"solid-bottom padding"},[i("text",{staticClass:"text-abc"},[t._v("color Ui")])]),i("view",{staticClass:"padding"},[t._v("全部字母小写")])])])}];i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a})},8100:function(t,s,i){"use strict";i.r(s);var e=i("6f0b"),a=i("0b45");for(var l in a)"default"!==l&&function(t){i.d(s,t,function(){return a[t]})}(l);var c=i("2877"),n=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,null,null);s["default"]=n.exports},"9d39":function(t,s,i){"use strict";i("a0fc");var e=l(i("b0ce")),a=l(i("8100"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},c00e:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};s.default=e}},[["9d39","common/runtime","common/vendor"]]]);
});
require('pages/basics/text.js');
__wxRoute = 'pages/basics/icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/icon.js';

define('pages/basics/icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/icon"],{1739:function(i,e,o){},"1f61":function(i,e,o){"use strict";var a=function(){var i=this,e=i.$createElement,o=i._self._c||e;return o("view",[o("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"3f382152-0"}},[o("block",{slot:"backText"},[i._v("返回")]),o("block",{slot:"content"},[i._v("图标")])],1),o("view",{staticClass:"cu-bar bg-white search fixed",style:[{top:i.CustomBar+"px"}]},[o("view",{staticClass:"search-form round"},[o("text",{staticClass:"cuIcon-search"}),o("input",{attrs:{type:"text",placeholder:"搜索cuIcon","confirm-type":"search",eventid:"3f382152-0"},on:{input:i.searchIcon}})])]),o("view",{staticClass:"cu-list grid col-3"},i._l(i.cuIcon,function(e,a){return e.isShow?o("view",{key:a,staticClass:"cu-item"},[o("text",{staticClass:"lg text-gray",class:"cuIcon-"+e.name}),o("text",[i._v(i._s(e.name))])]):i._e()}))],1)},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"50d3":function(i,e,o){"use strict";o("a0fc");var a=s(o("b0ce")),n=s(o("6129"));function s(i){return i&&i.__esModule?i:{default:i}}Page((0,a.default)(n.default))},6129:function(i,e,o){"use strict";o.r(e);var a=o("1f61"),n=o("e8d0");for(var s in n)"default"!==s&&function(i){o.d(e,i,function(){return n[i]})}(s);o("e8a3");var m=o("2877"),h=Object(m["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=h.exports},c1f2:function(i,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{CustomBar:this.CustomBar,cuIcon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0},{name:"close",isShow:!0},{name:"edit",isShow:!0},{name:"emoji",isShow:!0},{name:"favorfill",isShow:!0},{name:"favor",isShow:!0},{name:"loading",isShow:!0},{name:"locationfill",isShow:!0},{name:"location",isShow:!0},{name:"phone",isShow:!0},{name:"roundcheckfill",isShow:!0},{name:"roundcheck",isShow:!0},{name:"roundclosefill",isShow:!0},{name:"roundclose",isShow:!0},{name:"roundrightfill",isShow:!0},{name:"roundright",isShow:!0},{name:"search",isShow:!0},{name:"taxi",isShow:!0},{name:"timefill",isShow:!0},{name:"time",isShow:!0},{name:"unfold",isShow:!0},{name:"warnfill",isShow:!0},{name:"warn",isShow:!0},{name:"camerafill",isShow:!0},{name:"camera",isShow:!0},{name:"commentfill",isShow:!0},{name:"comment",isShow:!0},{name:"likefill",isShow:!0},{name:"like",isShow:!0},{name:"notificationfill",isShow:!0},{name:"notification",isShow:!0},{name:"order",isShow:!0},{name:"samefill",isShow:!0},{name:"same",isShow:!0},{name:"deliver",isShow:!0},{name:"evaluate",isShow:!0},{name:"pay",isShow:!0},{name:"send",isShow:!0},{name:"shop",isShow:!0},{name:"ticket",isShow:!0},{name:"back",isShow:!0},{name:"cascades",isShow:!0},{name:"discover",isShow:!0},{name:"list",isShow:!0},{name:"more",isShow:!0},{name:"scan",isShow:!0},{name:"settings",isShow:!0},{name:"questionfill",isShow:!0},{name:"question",isShow:!0},{name:"shopfill",isShow:!0},{name:"form",isShow:!0},{name:"pic",isShow:!0},{name:"filter",isShow:!0},{name:"footprint",isShow:!0},{name:"top",isShow:!0},{name:"pulldown",isShow:!0},{name:"pullup",isShow:!0},{name:"right",isShow:!0},{name:"refresh",isShow:!0},{name:"moreandroid",isShow:!0},{name:"deletefill",isShow:!0},{name:"refund",isShow:!0},{name:"cart",isShow:!0},{name:"qrcode",isShow:!0},{name:"remind",isShow:!0},{name:"delete",isShow:!0},{name:"profile",isShow:!0},{name:"home",isShow:!0},{name:"cartfill",isShow:!0},{name:"discoverfill",isShow:!0},{name:"homefill",isShow:!0},{name:"message",isShow:!0},{name:"addressbook",isShow:!0},{name:"link",isShow:!0},{name:"lock",isShow:!0},{name:"unlock",isShow:!0},{name:"vip",isShow:!0},{name:"weibo",isShow:!0},{name:"activity",isShow:!0},{name:"friendaddfill",isShow:!0},{name:"friendadd",isShow:!0},{name:"friendfamous",isShow:!0},{name:"friend",isShow:!0},{name:"goods",isShow:!0},{name:"selection",isShow:!0},{name:"explore",isShow:!0},{name:"present",isShow:!0},{name:"squarecheckfill",isShow:!0},{name:"square",isShow:!0},{name:"squarecheck",isShow:!0},{name:"round",isShow:!0},{name:"roundaddfill",isShow:!0},{name:"roundadd",isShow:!0},{name:"add",isShow:!0},{name:"notificationforbidfill",isShow:!0},{name:"explorefill",isShow:!0},{name:"fold",isShow:!0},{name:"game",isShow:!0},{name:"redpacket",isShow:!0},{name:"selectionfill",isShow:!0},{name:"similar",isShow:!0},{name:"appreciatefill",isShow:!0},{name:"infofill",isShow:!0},{name:"info",isShow:!0},{name:"forwardfill",isShow:!0},{name:"forward",isShow:!0},{name:"rechargefill",isShow:!0},{name:"recharge",isShow:!0},{name:"vipcard",isShow:!0},{name:"voice",isShow:!0},{name:"voicefill",isShow:!0},{name:"friendfavor",isShow:!0},{name:"wifi",isShow:!0},{name:"share",isShow:!0},{name:"wefill",isShow:!0},{name:"we",isShow:!0},{name:"lightauto",isShow:!0},{name:"lightforbid",isShow:!0},{name:"lightfill",isShow:!0},{name:"camerarotate",isShow:!0},{name:"light",isShow:!0},{name:"barcode",isShow:!0},{name:"flashlightclose",isShow:!0},{name:"flashlightopen",isShow:!0},{name:"searchlist",isShow:!0},{name:"service",isShow:!0},{name:"sort",isShow:!0},{name:"down",isShow:!0},{name:"mobile",isShow:!0},{name:"mobilefill",isShow:!0},{name:"copy",isShow:!0},{name:"countdownfill",isShow:!0},{name:"countdown",isShow:!0},{name:"noticefill",isShow:!0},{name:"notice",isShow:!0},{name:"upstagefill",isShow:!0},{name:"upstage",isShow:!0},{name:"babyfill",isShow:!0},{name:"baby",isShow:!0},{name:"brandfill",isShow:!0},{name:"brand",isShow:!0},{name:"choicenessfill",isShow:!0},{name:"choiceness",isShow:!0},{name:"clothesfill",isShow:!0},{name:"clothes",isShow:!0},{name:"creativefill",isShow:!0},{name:"creative",isShow:!0},{name:"female",isShow:!0},{name:"keyboard",isShow:!0},{name:"male",isShow:!0},{name:"newfill",isShow:!0},{name:"new",isShow:!0},{name:"pullleft",isShow:!0},{name:"pullright",isShow:!0},{name:"rankfill",isShow:!0},{name:"rank",isShow:!0},{name:"bad",isShow:!0},{name:"cameraadd",isShow:!0},{name:"focus",isShow:!0},{name:"friendfill",isShow:!0},{name:"cameraaddfill",isShow:!0},{name:"apps",isShow:!0},{name:"paintfill",isShow:!0},{name:"paint",isShow:!0},{name:"picfill",isShow:!0},{name:"refresharrow",isShow:!0},{name:"colorlens",isShow:!0},{name:"markfill",isShow:!0},{name:"mark",isShow:!0},{name:"presentfill",isShow:!0},{name:"repeal",isShow:!0},{name:"album",isShow:!0},{name:"peoplefill",isShow:!0},{name:"people",isShow:!0},{name:"servicefill",isShow:!0},{name:"repair",isShow:!0},{name:"file",isShow:!0},{name:"repairfill",isShow:!0},{name:"taoxiaopu",isShow:!0},{name:"weixin",isShow:!0},{name:"attentionfill",isShow:!0},{name:"attention",isShow:!0},{name:"commandfill",isShow:!0},{name:"command",isShow:!0},{name:"communityfill",isShow:!0},{name:"community",isShow:!0},{name:"read",isShow:!0},{name:"calendar",isShow:!0},{name:"cut",isShow:!0},{name:"magic",isShow:!0},{name:"backwardfill",isShow:!0},{name:"playfill",isShow:!0},{name:"stop",isShow:!0},{name:"tagfill",isShow:!0},{name:"tag",isShow:!0},{name:"group",isShow:!0},{name:"all",isShow:!0},{name:"backdelete",isShow:!0},{name:"hotfill",isShow:!0},{name:"hot",isShow:!0},{name:"post",isShow:!0},{name:"radiobox",isShow:!0},{name:"rounddown",isShow:!0},{name:"upload",isShow:!0},{name:"writefill",isShow:!0},{name:"write",isShow:!0},{name:"radioboxfill",isShow:!0},{name:"punch",isShow:!0},{name:"shake",isShow:!0},{name:"move",isShow:!0},{name:"safe",isShow:!0},{name:"activityfill",isShow:!0},{name:"crownfill",isShow:!0},{name:"crown",isShow:!0},{name:"goodsfill",isShow:!0},{name:"messagefill",isShow:!0},{name:"profilefill",isShow:!0},{name:"sound",isShow:!0},{name:"sponsorfill",isShow:!0},{name:"sponsor",isShow:!0},{name:"upblock",isShow:!0},{name:"weblock",isShow:!0},{name:"weunblock",isShow:!0},{name:"my",isShow:!0},{name:"myfill",isShow:!0},{name:"emojifill",isShow:!0},{name:"emojiflashfill",isShow:!0},{name:"flashbuyfill",isShow:!0},{name:"text",isShow:!0},{name:"goodsfavor",isShow:!0},{name:"musicfill",isShow:!0},{name:"musicforbidfill",isShow:!0},{name:"card",isShow:!0},{name:"triangledownfill",isShow:!0},{name:"triangleupfill",isShow:!0},{name:"roundleftfill-copy",isShow:!0},{name:"font",isShow:!0},{name:"title",isShow:!0},{name:"recordfill",isShow:!0},{name:"record",isShow:!0},{name:"cardboardfill",isShow:!0},{name:"cardboard",isShow:!0},{name:"formfill",isShow:!0},{name:"coin",isShow:!0},{name:"cardboardforbid",isShow:!0},{name:"circlefill",isShow:!0},{name:"circle",isShow:!0},{name:"attentionforbid",isShow:!0},{name:"attentionforbidfill",isShow:!0},{name:"attentionfavorfill",isShow:!0},{name:"attentionfavor",isShow:!0},{name:"titles",isShow:!0},{name:"icloading",isShow:!0},{name:"full",isShow:!0},{name:"mail",isShow:!0},{name:"peoplelist",isShow:!0},{name:"goodsnewfill",isShow:!0},{name:"goodsnew",isShow:!0},{name:"medalfill",isShow:!0},{name:"medal",isShow:!0},{name:"newsfill",isShow:!0},{name:"newshotfill",isShow:!0},{name:"newshot",isShow:!0},{name:"news",isShow:!0},{name:"videofill",isShow:!0},{name:"video",isShow:!0},{name:"exit",isShow:!0},{name:"skinfill",isShow:!0},{name:"skin",isShow:!0},{name:"moneybagfill",isShow:!0},{name:"usefullfill",isShow:!0},{name:"usefull",isShow:!0},{name:"moneybag",isShow:!0},{name:"redpacket_fill",isShow:!0},{name:"subscription",isShow:!0},{name:"loading1",isShow:!0},{name:"github",isShow:!0},{name:"global",isShow:!0},{name:"settingsfill",isShow:!0},{name:"back_android",isShow:!0},{name:"expressman",isShow:!0},{name:"evaluate_fill",isShow:!0},{name:"group_fill",isShow:!0},{name:"play_forward_fill",isShow:!0},{name:"deliver_fill",isShow:!0},{name:"notice_forbid_fill",isShow:!0},{name:"fork",isShow:!0},{name:"pick",isShow:!0},{name:"wenzi",isShow:!0},{name:"ellipse",isShow:!0},{name:"qr_code",isShow:!0},{name:"dianhua",isShow:!0},{name:"cuIcon",isShow:!0},{name:"loading2",isShow:!0},{name:"btn",isShow:!0}]}},methods:{searchIcon:function(i){for(var e=i.detail.value.toLowerCase(),o=this.cuIcon,a=0;a<o.length;a++){var n=e,s=o[a].name.toLowerCase();-1!=s.search(n)?o[a].isShow=!0:o[a].isShow=!1}this.cuIcon=o}}};e.default=a},e8a3:function(i,e,o){"use strict";var a=o("1739"),n=o.n(a);n.a},e8d0:function(i,e,o){"use strict";o.r(e);var a=o("c1f2"),n=o.n(a);for(var s in a)"default"!==s&&function(i){o.d(e,i,function(){return a[i]})}(s);e["default"]=n.a}},[["50d3","common/runtime","common/vendor"]]]);
});
require('pages/basics/icon.js');
__wxRoute = 'pages/basics/button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/button.js';

define('pages/basics/button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/button"],{"127c":function(t,s,a){"use strict";a.r(s);var e=a("3492"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a},3492:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{ColorList:this.ColorList,shadow:!1,bordersize:""}},methods:{SetShadow:function(t){this.shadow=t.detail.value},SetBorderSize:function(t){this.bordersize=t.detail.value}}};s.default=e},"4e05":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"46c339cb-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("按钮")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),a("view",{staticClass:"action"},[a("navigator",{staticClass:"action",attrs:{url:"design","hover-class":"none"}},[a("text",{staticClass:"cuIcon-skinfill"}),a("text",{staticClass:"text-df"},[t._v("设计")])])],1)]),a("view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[a("button",{staticClass:"cu-btn"},[t._v("默认")]),a("button",{staticClass:"cu-btn round"},[t._v("圆角")]),a("button",{staticClass:"cu-btn cuIcon"},[a("text",{staticClass:"cuIcon-emojifill"})])],1),t._m(1),a("view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[a("button",{staticClass:"cu-btn round sm"},[t._v("小尺寸")]),a("button",{staticClass:"cu-btn round"},[t._v("默认")]),a("button",{staticClass:"cu-btn round lg"},[t._v("大尺寸")])],1),a("view",{staticClass:"cu-bar margin-top bg-white"},[t._m(2),a("view",{staticClass:"action"},[a("text",{staticClass:"text-df margin-right-sm"},[t._v("阴影")]),a("switch",{class:t.shadow?"checked":"",attrs:{color:"#39B54A",eventid:"46c339cb-0"},on:{change:t.SetShadow}})])]),a("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return a("view",{key:e,staticClass:"margin-tb-sm text-center"},[a("button",{staticClass:"cu-btn round",class:["bg-"+s.name,t.shadow?"shadow":""]},[t._v(t._s(s.title))])],1)})),a("view",{staticClass:"cu-bar margin-top bg-white"},[t._m(3),a("view",{staticClass:"action"},[a("radio-group",{attrs:{eventid:"46c339cb-1",mpcomid:"46c339cb-1"},on:{change:t.SetBorderSize}},[a("label",{staticClass:"margin-left-sm"},[a("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),a("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),a("label",{staticClass:"margin-left-sm"},[a("radio",{staticClass:"blue radio",attrs:{value:"s"}}),a("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1)]),a("view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,function(s,e){return"white"!=s.name?a("view",{key:e,staticClass:"margin-tb-sm text-center"},[a("button",{staticClass:"cu-btn round",class:[t.bordersize?"lines-"+s.name:"line-"+s.name,t.shadow?"shadow":""]},[t._v(t._s(s.title))])],1):t._e()})),t._m(4),a("view",{staticClass:"padding flex flex-direction"},[a("button",{staticClass:"cu-btn bg-grey lg"},[t._v("玄灰")]),a("button",{staticClass:"cu-btn bg-red margin-tb-sm lg"},[t._v("嫣红")])],1),t._m(5),a("view",{staticClass:"padding"},[a("button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",attrs:{disabled:"",type:""}},[t._v("无效状态")]),a("button",{staticClass:"cu-btn block line-blue margin-tb-sm lg",attrs:{disabled:""}},[t._v("无效状态")])],1),t._m(6),a("view",{staticClass:"padding-xl"},[a("button",{staticClass:"cu-btn block line-orange lg"},[a("text",{staticClass:"cuIcon-upload"}),t._v("图标")]),a("button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg"},[a("text",{staticClass:"cuIcon-loading2 cuIconfont-spin"}),t._v("加载")]),a("button",{staticClass:"cu-btn block bg-black margin-tb-sm lg",attrs:{loading:""}},[t._v("原生加载")])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮形状")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮尺寸")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮颜色")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空按钮")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("块状按钮")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("无效状态")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar margin-top bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮加图标")])])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},"83bc":function(t,s,a){"use strict";a("a0fc");var e=c(a("b0ce")),i=c(a("9077"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},9077:function(t,s,a){"use strict";a.r(s);var e=a("4e05"),i=a("127c");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);var n=a("2877"),l=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=l.exports}},[["83bc","common/runtime","common/vendor"]]]);
});
require('pages/basics/button.js');
__wxRoute = 'pages/basics/design';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/design.js';

define('pages/basics/design.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/design"],{"278b":function(t,a,s){"use strict";s.r(a);var e=s("b3b0"),i=s("7748");for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);s("c419");var l=s("2877"),r=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},"2b3d":function(t,a,s){},"3c60":function(t,a,s){"use strict";s("a0fc");var e=o(s("b0ce")),i=o(s("278b"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},7748:function(t,a,s){"use strict";s.r(a);var e=s("7c02"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);a["default"]=i.a},"7c02":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList,modalName:"",round:!1,size:"",color:"red",shadow:!1,border:!1,bordersize:""}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetRound:function(t){this.round=t.detail.value},SetSize:function(t){this.size=t.detail.value},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetShadow:function(t){this.shadow=t.detail.value},SetBorder:function(t){this.border=t.detail.value,t.detail.value||(this.bordersize=!1)},SetBorderSize:function(t){this.bordersize=t.detail.value}}};a.default=e},b3b0:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"494ad457-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("按钮 / 设计")])],1),s("view",{staticClass:"padding-xl"},[s("view",{staticClass:"box bg-white text-center radius"},[s("button",{staticClass:"cu-btn",class:[t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color,t.round?"round":"",t.size,t.shadow?"shadow":""]},[t._v("我是一个按钮")])],1),s("view",{staticClass:"padding text-center"},[t._v('class="cu-btn'),t.color?s("text",[t._v(t._s(" ")+" "+t._s(t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color)+" "+t._s(t.round?"round":"")+" "+t._s(t.size)+" "+t._s(t.shadow?"shadow":""))]):t._e(),t._v('"')])]),s("view",{staticClass:"cu-form-group margin-top",attrs:{"data-target":"ColorModal",eventid:"494ad457-0"},on:{tap:t.showModal}},[s("view",{staticClass:"title"},[t._v("选择颜色")]),s("view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否圆角")]),s("switch",{staticClass:"blue",class:t.round?"checked":"",attrs:{eventid:"494ad457-1"},on:{change:t.SetRound}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("选择尺寸")]),s("radio-group",{attrs:{eventid:"494ad457-2",mpcomid:"494ad457-1"},on:{change:t.SetSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"sm"}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("中")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"lg"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否添加阴影")]),s("switch",{class:t.shadow?"checked":"",attrs:{eventid:"494ad457-3"},on:{change:t.SetShadow}})]),s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("是否镂空")]),s("switch",{class:t.border?"checked":"",attrs:{eventid:"494ad457-4"},on:{change:t.SetBorder}})]),t.border?s("view",{staticClass:"cu-form-group"},[s("view",{staticClass:"title"},[t._v("边框大小")]),s("radio-group",{attrs:{eventid:"494ad457-5",mpcomid:"494ad457-2"},on:{change:t.SetBorderSize}},[s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),s("text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("label",{staticClass:"margin-left-sm"},[s("radio",{staticClass:"blue radio",attrs:{value:"s"}}),s("text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1):t._e(),s("view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[s("view",{staticClass:"cu-dialog"},[s("view",{staticClass:"cu-bar justify-end solid-bottom"},[s("view",{staticClass:"content"},[t._v("选择颜色")]),s("view",{staticClass:"action",attrs:{eventid:"494ad457-6"},on:{tap:t.hideModal}},[s("text",{staticClass:"cuIcon-close text-red"})])]),s("view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs",attrs:{"data-color":a.name,eventid:"494ad457-7-"+e},on:{tap:t.SetColor}},[s("view",{staticClass:"padding-tb radius",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}))])])],1)},i=[];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})},c419:function(t,a,s){"use strict";var e=s("2b3d"),i=s.n(e);i.a}},[["3c60","common/runtime","common/vendor"]]]);
});
require('pages/basics/design.js');
__wxRoute = 'pages/basics/tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/tag.js';

define('pages/basics/tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/tag"],{"08b9":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{ColorList:this.ColorList}}};a.default=e},"67f6":function(t,a,s){"use strict";s("a0fc");var e=c(s("b0ce")),i=c(s("e705"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},a32e:function(t,a,s){"use strict";s.r(a);var e=s("08b9"),i=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(a,t,function(){return e[t]})}(c);a["default"]=i.a},caa4:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"128e5ba1-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("标签")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("view",{staticClass:"padding-sm flex flex-wrap"},[t._l(t.ColorList,function(a,e){return"gray"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()}),t._l(t.ColorList,function(a,e){return"gray"!=a.name&&"black"!=a.name&&"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag light",class:"bg-"+a.name},[t._v(t._s(a.title))])]):t._e()})],2),t._m(5),s("view",{staticClass:"padding-sm flex flex-wrap"},t._l(t.ColorList,function(a,e){return"white"!=a.name?s("view",{key:e,staticClass:"padding-xs"},[s("view",{staticClass:"cu-tag",class:"line-"+a.name},[t._v(t._s(a.title))])]):t._e()})),t._m(6),t._m(7),t._m(8),t._m(9)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white solid-bottom"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签形状")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white solid-bottom"},[s("view",{staticClass:"cu-tag"},[t._v("默认")]),s("view",{staticClass:"cu-tag round"},[t._v("椭圆")]),s("view",{staticClass:"cu-tag radius"},[t._v("圆角")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding bg-white"},[s("view",{staticClass:"cu-tag radius sm"},[t._v("小尺寸")]),s("view",{staticClass:"cu-tag radius"},[t._v("普通尺寸")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("标签颜色")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("胶囊样式")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding"},[s("view",{staticClass:"cu-capsule"},[s("view",{staticClass:"cu-tag bg-red"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-red"},[t._v("12")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-blue"},[t._v("23")])]),s("view",{staticClass:"cu-capsule round"},[s("view",{staticClass:"cu-tag bg-blue "},[t._v("说明")]),s("view",{staticClass:"cu-tag line-blue"},[t._v("123")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-grey "},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-grey"},[t._v("23")])]),s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-brown sm"},[s("text",{staticClass:"cuIcon-likefill"})]),s("view",{staticClass:"cu-tag line-brown sm"},[t._v("23")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("数字标签")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"padding flex justify-between align-center"},[s("view",{staticClass:"cu-avatar xl radius"},[t._v("港"),s("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),s("view",{staticClass:"cu-avatar xl radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}},[s("view",{staticClass:"cu-tag badge"},[t._v("9")])]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99")]),s("text",{staticClass:"cuIcon-people"})]),s("view",{staticClass:"cu-avatar xl radius"},[s("view",{staticClass:"cu-tag badge"},[t._v("99+")])])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})},e705:function(t,a,s){"use strict";s.r(a);var e=s("caa4"),i=s("a32e");for(var c in i)"default"!==c&&function(t){s.d(a,t,function(){return i[t]})}(c);var l=s("2877"),n=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=n.exports}},[["67f6","common/runtime","common/vendor"]]]);
});
require('pages/basics/tag.js');
__wxRoute = 'pages/basics/avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/avatar.js';

define('pages/basics/avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/avatar"],{"3e7b":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{ColorList:this.ColorList,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"]}}};a.default=s},"54f7":function(t,a,e){"use strict";e.r(a);var s=e("e52f"),i=e("c447");for(var c in i)"default"!==c&&function(t){e.d(a,t,function(){return i[t]})}(c);var r=e("2877"),l=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=l.exports},c447:function(t,a,e){"use strict";e.r(a);var s=e("3e7b"),i=e.n(s);for(var c in s)"default"!==c&&function(t){e.d(a,t,function(){return s[t]})}(c);a["default"]=i.a},e52f:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"4513d3f2-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("头像")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),e("view",{staticClass:"padding-sm"},t._l(t.ColorList,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg margin-xs",class:"bg-"+a.name},[e("text",{staticClass:"avatar-text"},[t._v(t._s(a.name))])])})),t._m(9),e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar-group"},t._l(t.avatar,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg",style:[{backgroundImage:"url("+t.avatar[s]+")"}]})}))]),t._m(10),e("view",{staticClass:"padding"},t._l(t.avatar,function(a,s){return e("view",{key:s,staticClass:"cu-avatar round lg margin-left",style:[{backgroundImage:"url("+t.avatar[s]+")"}]},[e("view",{staticClass:"cu-tag badge",class:s%2==0?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})])}))],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像形状")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),e("view",{staticClass:"cu-avatar radius margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像尺寸")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),e("view",{staticClass:"cu-avatar round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),e("view",{staticClass:"cu-avatar lg round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),e("view",{staticClass:"cu-avatar xl round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg)"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("A")]),e("view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("B")]),e("view",{staticClass:"cu-avatar lg round margin-left bg-red"},[t._v("C")]),e("view",{staticClass:"cu-avatar xl round margin-left bg-red"},[t._v("D")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("蔚")]),e("view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("蓝")]),e("view",{staticClass:"cu-avatar lg round margin-left bg-red"},[e("text",[t._v("wl")])]),e("view",{staticClass:"cu-avatar xl round margin-left bg-red"},[e("text",{staticClass:"avatar-text"},[t._v("网络")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("内嵌文字(图标)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"padding"},[e("view",{staticClass:"cu-avatar radius"},[e("text",{staticClass:"cuIcon-people"})]),e("view",{staticClass:"cu-avatar radius margin-left"},[e("text",[t._v("港")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像颜色")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像组")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white margin-top"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-blue"}),t._v("头像标签")])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},fee8:function(t,a,e){"use strict";e("a0fc");var s=c(e("b0ce")),i=c(e("54f7"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["fee8","common/runtime","common/vendor"]]]);
});
require('pages/basics/avatar.js');
__wxRoute = 'pages/basics/progress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/progress.js';

define('pages/basics/progress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/progress"],{"1bd5":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{ColorList:this.ColorList,color:"red",loading:!1,modalName:"",active:!1}},onLoad:function(){var t=this;setTimeout(function(){t.loading=!0},500)},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetActive:function(t){this.active=t.detail.value}}};s.default=i},3409:function(t,s,a){"use strict";a.r(s);var i=a("f042"),e=a("829f");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);var l=a("2877"),o=Object(l["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=o.exports},"81c3":function(t,s,a){"use strict";a("a0fc");var i=c(a("b0ce")),e=c(a("3409"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},"829f":function(t,s,a){"use strict";a.r(s);var i=a("1bd5"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},f042:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"ad88daf4-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("进度条")])],1),t._m(0),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])]),a("view",{staticClass:"cu-progress radius margin-top"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])]),a("view",{staticClass:"cu-progress round margin-top"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])])]),t._m(1),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})]),a("view",{staticClass:"cu-progress round margin-top sm"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})]),a("view",{staticClass:"cu-progress round margin-top xs"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top",attrs:{"data-target":"ColorModal",eventid:"ad88daf4-0"},on:{tap:t.showModal}},[t._m(2),a("view",{staticClass:"action"},[a("view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})])]),a("view",{staticClass:"padding",class:"white"==t.color?"bg-grey":"bg-white"},[a("view",{staticClass:"cu-progress round"},[a("view",{class:"bg-"+t.color,style:[{width:t.loading?"61.8%":""}]})])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(3),a("switch",{staticClass:"margin-right-sm",class:t.active?"checked":"",attrs:{eventid:"ad88daf4-1"},on:{change:t.SetActive}})]),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress round sm striped",class:t.active?"active":""},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"60%":""}]})]),a("view",{staticClass:"cu-progress round sm margin-top-sm striped",class:t.active?"active":""},[a("view",{staticClass:"bg-black",style:[{width:t.loading?"40%":""}]})])]),t._m(4),a("view",{staticClass:"padding bg-white"},[a("view",{staticClass:"cu-progress radius striped active"},[a("view",{staticClass:"bg-red",style:[{width:t.loading?"30%":""}]},[t._v("30%")]),a("view",{staticClass:"bg-olive",style:[{width:t.loading?"45%":""}]},[t._v("45%")]),a("view",{staticClass:"bg-cyan",style:[{width:t.loading?"25%":""}]},[t._v("25%")])])]),t._m(5),a("view",{staticClass:"padding bg-white "},[a("view",{staticClass:"flex"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"100%":""}]})]),a("text",{staticClass:"cuIcon-roundcheckfill text-green margin-left-sm"})]),a("view",{staticClass:"flex margin-top"},[a("view",{staticClass:"cu-progress round"},[a("view",{staticClass:"bg-green",style:[{width:t.loading?"80%":""}]})]),a("text",{staticClass:"margin-left"},[t._v("80%")])])]),a("view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[a("view",{staticClass:"cu-dialog"},[a("view",{staticClass:"cu-bar justify-end solid-bottom"},[a("view",{staticClass:"content"},[t._v("选择颜色")]),a("view",{staticClass:"action",attrs:{eventid:"ad88daf4-2"},on:{tap:t.hideModal}},[a("text",{staticClass:"cuIcon-close text-red"})])]),a("view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(s,i){return"gray"!=s.name&&"white"!=s.name?a("view",{key:i,staticClass:"padding-xs",attrs:{"data-color":s.name,eventid:"ad88daf4-3-"+i},on:{tap:t.SetColor}},[a("view",{staticClass:"padding-tb radius",class:"bg-"+s.name},[t._v(t._s(s.title))])]):t._e()}))])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条形状")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条尺寸")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条颜色")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条条纹")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条比例")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条布局")])])}];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})}},[["81c3","common/runtime","common/vendor"]]]);
});
require('pages/basics/progress.js');
__wxRoute = 'pages/basics/shadow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/shadow.js';

define('pages/basics/shadow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/shadow"],{"13fb":function(t,s,i){"use strict";i.r(s);var a=i("a7ff"),e=i("d012");for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var l=i("2877"),c=Object(l["a"])(e["default"],a["a"],a["b"],!1,null,null,null);s["default"]=c.exports},"2f42":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{size:!1}},methods:{SetSize:function(t){this.size=t.detail.value}}};s.default=a},"671f":function(t,s,i){"use strict";i("a0fc");var a=n(i("b0ce")),e=n(i("13fb"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(e.default))},a7ff:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"63058bb9-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("边框阴影")])],1),i("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),i("view",{staticClass:"action"},[i("switch",{staticClass:"sm",class:t.size?"checked":"",attrs:{eventid:"63058bb9-0"},on:{change:t.SetSize}})])]),i("view",{staticClass:"padding bg-white text-center"},[i("view",{staticClass:"padding",class:t.size?"solids":"solid"},[t._v("四周")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-top":"solid-top"},[t._v("上")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-right":"solid-right"},[t._v("右")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-bottom":"solid-bottom"},[t._v("下")]),i("view",{staticClass:"padding margin-top",class:t.size?"solids-left":"solid-left"},[t._v("左")])]),t._m(1),t._m(2)],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("边框")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-blue"}),t._v("阴影")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"padding text-center"},[i("view",{staticClass:"padding-xl radius shadow bg-white"},[t._v("默认阴影")]),i("view",{staticClass:"padding-xl radius shadow bg-blue margin-top"},[t._v("根据背景颜色而改变的阴影")]),i("view",{staticClass:"padding-xl radius shadow shadow-lg bg-white margin-top"},[t._v("长阴影")]),i("view",{staticClass:"padding-xl radius shadow shadow-lg bg-blue margin-top"},[t._v("长阴影")]),i("view",{staticClass:"padding-xl radius shadow-warp bg-white margin-top"},[t._v("翘边阴影")]),i("view",{staticClass:"padding-xl radius shadow-blur bg-red margin-top bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg)"}},[i("view",[t._v("根据背景图而改变的阴影")])])])}];i.d(s,"a",function(){return a}),i.d(s,"b",function(){return e})},d012:function(t,s,i){"use strict";i.r(s);var a=i("2f42"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);s["default"]=e.a}},[["671f","common/runtime","common/vendor"]]]);
});
require('pages/basics/shadow.js');
__wxRoute = 'pages/basics/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/basics/loading.js';

define('pages/basics/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/loading"],{"4e7a":function(t,a,s){"use strict";s.r(a);var e=s("80d7"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);a["default"]=i.a},"50e4":function(t,a,s){"use strict";s("a0fc");var e=o(s("b0ce")),i=o(s("abf4"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},"80d7":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{CustomBar:this.CustomBar,isLoad:!1,loadModal:!1,loadProgress:0}},methods:{isLoading:function(t){this.isLoad=t.detail.value},LoadModal:function(t){var a=this;this.loadModal=!0,setTimeout(function(){a.loadModal=!1},2e3)},LoadProgress:function(t){var a=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){a.LoadProgress()},100):this.loadProgress=0}}};a.default=e},abf4:function(t,a,s){"use strict";s.r(a);var e=s("c5bf"),i=s("4e7a");for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);var c=s("2877"),l=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=l.exports},c5bf:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"d15bbc7a-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("加载")]),s("block",{slot:"right"},[s("view",{staticClass:"action"},[s("view",{staticClass:"cu-load load-cuIcon",class:t.isLoad?"over":"loading"})])])],1),t._m(0),s("view",{staticClass:"cu-load bg-blue",class:t.isLoad?"over":"loading"}),s("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(1),s("view",{staticClass:"action"},[s("switch",{class:t.isLoad?"checked":"",attrs:{eventid:"d15bbc7a-0"},on:{change:t.isLoading}})])]),s("view",{staticClass:"cu-load bg-grey",class:t.isLoad?"over":"loading"}),t._m(2),s("view",{staticClass:"cu-load bg-red erro"}),s("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(3),s("view",{staticClass:"action"},[s("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"d15bbc7a-1"},on:{tap:t.LoadModal}},[t._v("点我")])],1)]),t.loadModal?s("view",{staticClass:"cu-load load-modal"},[s("image",{attrs:{src:"/static/logo.png",mode:"aspectFit"}}),s("view",{staticClass:"gray-text"},[t._v("加载中...")])]):t._e(),s("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(4),s("view",{staticClass:"action"},[s("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"d15bbc7a-2"},on:{tap:t.LoadProgress}},[t._v("点我")])],1)]),s("view",{staticClass:"load-progress",class:0!=t.loadProgress?"show":"hide",style:[{top:t.CustomBar+"px"}]},[s("view",{staticClass:"load-progress-bar bg-green",style:[{transform:"translate3d(-"+(100-t.loadProgress)+"%, 0px, 0px)"}]}),s("view",{staticClass:"load-progress-spinner text-green"})])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("背景")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("加载状态")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"cu-bar bg-white margin-top"},[s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("加载错误")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("弹框加载")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"action"},[s("text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条加载")])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})}},[["50e4","common/runtime","common/vendor"]]]);
});
require('pages/basics/loading.js');
__wxRoute = 'pages/component/bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/bar.js';

define('pages/component/bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/bar"],{"0141":function(t,s,a){"use strict";a("a0fc");var e=i(a("b0ce")),c=i(a("d03f"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(c.default))},"12d1":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0b611960-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("操作条")])],1),t._m(0),a("view",{staticClass:"box"},[t._m(1),t._m(2),a("view",{staticClass:"cu-bar tabbar margin-bottom-xl bg-white"},[t._m(3),t._m(4),a("view",{staticClass:"action text-gray add-action"},[a("button",{staticClass:"cu-btn cuIcon-add bg-green shadow"}),t._v("发布")],1),t._m(5),t._m(6)]),a("view",{staticClass:"cu-bar tabbar bg-black"},[t._m(7),t._m(8),a("view",{staticClass:"action text-gray add-action"},[a("button",{staticClass:"cu-btn cuIcon-add bg-green shadow"}),t._v("发布")],1),t._m(9),t._m(10)]),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(11),t._m(12),a("view",{staticClass:"bg-red submit"},[t._v("立即订购")])],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(13),a("view",{staticClass:"bg-orange submit"},[t._v("加入购物车")]),a("view",{staticClass:"bg-red submit"},[t._v("立即订购")])],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(14),t._m(15),a("view",{staticClass:"btn-group"},[a("button",{staticClass:"cu-btn bg-red round shadow-blur"},[t._v("立即订购")])],1)],1),a("view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("button",{staticClass:"action",attrs:{"open-type":"contact"}},[a("view",{staticClass:"cuIcon-service text-green"},[a("view",{staticClass:"cu-tag badge"})]),t._v("客服")]),t._m(16),a("view",{staticClass:"btn-group"},[a("button",{staticClass:"cu-btn bg-orange round shadow-blur"},[t._v("加入购物车")]),a("button",{staticClass:"cu-btn bg-red round shadow-blur"},[t._v("立即订购")])],1)],1)]),t._m(17),t._e(),t._m(22),t._m(23),t._m(24),t._m(25),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar search bg-white"},[a("view",{staticClass:"search-form round"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"0b611960-0"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round"},[t._v("搜索")])],1)]),a("view",{staticClass:"cu-bar search bg-white"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"}}),a("view",{staticClass:"search-form round"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"0b611960-1"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(26)]),a("view",{staticClass:"cu-bar bg-red search"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big114004.jpg)"}}),a("view",{staticClass:"search-form radius"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"0b611960-2"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(27)]),a("view",{staticClass:"cu-bar bg-cyan search"},[a("view",{staticClass:"search-form radius"},[a("text",{staticClass:"cuIcon-search"}),a("input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search",eventid:"0b611960-3"},on:{focus:t.InputFocus,blur:t.InputBlur}})]),t._m(28)])]),t._m(29),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round lg"},[t._v("保存")])],1),a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("保存")]),a("button",{staticClass:"cu-btn text-green line-green shadow"},[t._v("上传")])],1),a("view",{staticClass:"cu-bar btn-group"},[a("button",{staticClass:"cu-btn bg-green shadow-blur round"},[t._v("保存")]),a("button",{staticClass:"cu-btn bg-blue shadow-blur round"},[t._v("提交")])],1)]),t._m(30),a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar input"},[t._m(31),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10",eventid:"0b611960-4"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(32),a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("发送")])],1),a("view",{staticClass:"cu-bar input"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}}),t._m(33),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,maxlength:"300","cursor-spacing":"10",eventid:"0b611960-5"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(34),a("button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("发送")])],1)])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("底部操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar tabbar bg-white"},[a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/basics_cur.png"}})]),a("view",{staticClass:"text-green"},[t._v("元素")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/component.png"}})]),a("view",{staticClass:"text-gray"},[t._v("组件")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/plugin.png"}}),a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),a("view",{staticClass:"text-gray"},[t._v("扩展")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cu-image"},[a("image",{attrs:{src:"/static/tabbar/about.png"}}),a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"text-gray"},[t._v("关于")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar tabbar margin-bottom-xl bg-black"},[a("view",{staticClass:"action text-orange"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-recharge"}),t._v("积分")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")]),a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-green"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-green"},[a("view",{staticClass:"cuIcon-homefill"}),t._v("首页")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-similar"}),t._v("分类")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-gray"},[a("view",{staticClass:"cuIcon-my"},[a("view",{staticClass:"cu-tag badge"})]),t._v("我的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action text-orange"},[a("view",{staticClass:"cuIcon-favorfill"}),t._v("已收藏")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:" cuIcon-shop"}),t._v("店铺")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("view",{staticClass:"cuIcon-cart"},[a("view",{staticClass:"cu-tag badge"},[t._v("99")])]),t._v("购物车")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("标题操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"bg-grey",staticStyle:{width:"2rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"bg-gradual-blue",staticStyle:{width:"3rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-green"},[t._v("关于我们")]),a("text",{staticClass:"bg-green",staticStyle:{width:"2rem"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar justify-center bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"text-ABC text-blue"},[t._v("about")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"bg-grey",staticStyle:{width:"2rem"}})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action border-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"bg-gradual-blue",staticStyle:{width:"3rem"}})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-green"},[t._v("关于我们")]),a("text",{staticClass:"bg-green"})])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action sub-title"},[a("text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),a("text",{staticClass:"text-ABC text-blue"},[t._v("about")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action title-style-3"},[a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),a("text",{staticClass:"text-Abc text-gray self-end margin-left-sm"},[t._v("about")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-green"}),a("text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("顶部操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"box"},[a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-back text-gray"}),t._v("返回")]),a("view",{staticClass:"content text-bold"},[t._v("操作条")])]),a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-homefill text-gray"}),t._v("首页")]),a("view",{staticClass:"content text-bold"},[t._v("鲜亮的高饱和色彩，专注视觉的小程序组件库")]),a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-cardboardfill text-grey"}),a("text",{staticClass:"cuIcon-recordfill text-red"})])]),a("view",{staticClass:"cu-bar bg-blue"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-close"}),t._v("关闭")]),a("view",{staticClass:"content text-bold"},[t._v("海蓝")])]),a("view",{staticClass:"cu-bar bg-black search"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}}),a("view",{staticClass:"content"},[t._v("ColorUI")]),a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-more"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("搜索操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",[t._v("广州")]),a("text",{staticClass:"cuIcon-triangledownfill"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",[t._v("广州")]),a("text",{staticClass:"cuIcon-triangledownfill"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-close"}),a("text",[t._v("取消")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("操作条按钮组")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-bar bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),a("text",[t._v("输入操作条")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-sound text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-roundaddfill text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return c})},5692:function(t,s,a){},d03f:function(t,s,a){"use strict";a.r(s);var e=a("12d1"),c=a("e172");for(var i in c)"default"!==i&&function(t){a.d(s,t,function(){return c[t]})}(i);a("d95e");var n=a("2877"),l=Object(n["a"])(c["default"],e["a"],e["b"],!1,null,null,null);s["default"]=l.exports},d95e:function(t,s,a){"use strict";var e=a("5692"),c=a.n(e);c.a},e172:function(t,s,a){"use strict";a.r(s);var e=a("fa84"),c=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(s,t,function(){return e[t]})}(i);s["default"]=c.a},fa84:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};s.default=e}},[["0141","common/runtime","common/vendor"]]]);
});
require('pages/component/bar.js');
__wxRoute = 'pages/component/nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/nav.js';

define('pages/component/nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/nav"],{"2d97":function(t,e,a){"use strict";a.r(e);var s=a("45f9"),c=a("a7fa");for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);var n=a("2877"),r=Object(n["a"])(c["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},"45f9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0b60bf40-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("导航栏")])],1),t._l(10,function(e,s){return s==t.TabCur?a("view",{key:s,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(s))]):t._e()}),t._m(0),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(10,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-green cur":"",attrs:{"data-id":s,eventid:"0b60bf40-0-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(1),a("scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-blue cur":"",attrs:{"data-id":s,eventid:"0b60bf40-1-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(2),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[a("view",{staticClass:"flex text-center"},t._l(4,function(e,s){return a("view",{key:s,staticClass:"cu-item flex-sub",class:s==t.TabCur?"text-orange cur":"",attrs:{"data-id":s,eventid:"0b60bf40-2-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])}))]),t._m(3),a("scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-white cur":"",attrs:{"data-id":s,eventid:"0b60bf40-3-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(4),a("scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":""}},[a("view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0",eventid:"0b60bf40-4"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-camerafill"}),t._v("数码")]),a("view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1",eventid:"0b60bf40-5"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")]),a("view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2",eventid:"0b60bf40-6"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")])])],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c})},9827:function(t,e,a){"use strict";a("a0fc");var s=i(a("b0ce")),c=i(a("2d97"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(c.default))},a7fa:function(t,e,a){"use strict";a.r(e);var s=a("d10d"),c=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=c.a},d10d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};e.default=s}},[["9827","common/runtime","common/vendor"]]]);
});
require('pages/component/nav.js');
__wxRoute = 'pages/component/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/list.js';

define('pages/component/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/list"],{"3f67":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},Gridswitch:function(t){this.gridBorder=t.detail.value},MenuBorder:function(t){this.menuBorder=t.detail.value},MenuArrow:function(t){this.menuArrow=t.detail.value},MenuCard:function(t){this.menuCard=t.detail.value},SwitchSex:function(t){this.skin=t.detail.value},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}}};s.default=e},"99e1":function(t,s,a){"use strict";var e=a("f627"),i=a.n(e);i.a},a98c:function(t,s,a){"use strict";a.r(s);var e=a("c78b"),i=a("c7a8");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);a("99e1");var l=a("2877"),o=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=o.exports},b5d5:function(t,s,a){"use strict";a("a0fc");var e=c(a("b0ce")),i=c(a("a98c"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},c78b:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"4fa3a101-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("列表")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("宫格列表")]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"gridModal",eventid:"4fa3a101-0"},on:{tap:t.showModal}},[t._v("设置")])],1)]),a("view",{staticClass:"cu-modal",class:"gridModal"==t.modalName?"show":"",attrs:{eventid:"4fa3a101-4"},on:{tap:t.hideModal}},[a("view",{staticClass:"cu-dialog",attrs:{eventid:"4fa3a101-3"},on:{tap:function(t){t.stopPropagation()}}},[a("radio-group",{staticClass:"block",attrs:{eventid:"4fa3a101-1",mpcomid:"4fa3a101-1"},on:{change:t.Gridchange}},[a("view",{staticClass:"cu-list menu text-left"},t._l(3,function(s,e){return a("view",{key:e,staticClass:"cu-item"},[a("label",{staticClass:"flex justify-between align-center flex-sub"},[a("view",{staticClass:"flex-sub"},[t._v(t._s(e+3)+" 列")]),a("radio",{staticClass:"round",class:t.gridCol==e+3?"checked":"",attrs:{value:e+3+"",checked:t.gridCol==e+3}})],1)],1)}))]),a("view",{staticClass:"cu-list menu text-left solid-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("边框")])]),a("view",{staticClass:"action"},[a("switch",{class:t.gridBorder?"checked":"",attrs:{checked:!!t.gridBorder,eventid:"4fa3a101-2"},on:{change:t.Gridswitch}})])])])],1)]),a("view",{staticClass:"cu-list grid",class:["col-"+t.gridCol,t.gridBorder?"":"no-border"]},t._l(t.cuIconList,function(s,e){return e<2*t.gridCol?a("view",{key:e,staticClass:"cu-item"},[a("view",{class:["cuIcon-"+s.cuIcon,"text-"+s.color]},[0!=s.badge?a("view",{staticClass:"cu-tag badge"},[1!=s.badge?a("block",[t._v(t._s(s.badge>99?"99+":s.badge))]):t._e()],1):t._e()]),a("text",[t._v(t._s(s.name))])]):t._e()})),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("菜单列表")]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"menuModal",eventid:"4fa3a101-5"},on:{tap:t.showModal}},[t._v("设置")])],1)]),a("view",{staticClass:"cu-modal",class:"menuModal"==t.modalName?"show":"",attrs:{eventid:"4fa3a101-10"},on:{tap:t.hideModal}},[a("view",{staticClass:"cu-dialog",attrs:{eventid:"4fa3a101-9"},on:{tap:function(t){t.stopPropagation()}}},[a("view",{staticClass:"cu-list menu text-left solid-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("短边框")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuBorder?"checked":"",attrs:{checked:!!t.menuBorder,eventid:"4fa3a101-6"},on:{change:t.MenuBorder}})])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("箭头")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuArrow?"checked":"",attrs:{checked:!!t.menuArrow,eventid:"4fa3a101-7"},on:{change:t.MenuArrow}})])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey"},[t._v("卡片")])]),a("view",{staticClass:"action"},[a("switch",{class:t.menuCard?"checked":"",attrs:{checked:!!t.menuCard,eventid:"4fa3a101-8"},on:{change:t.MenuCard}})])])])])]),a("view",{staticClass:"cu-list menu",class:[t.menuBorder?"sm-border":"",t.menuCard?"card-menu margin-top":""]},[a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-circlefill text-grey"}),a("text",{staticClass:"text-grey"},[t._v("图标 + 标题")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("image",{staticClass:"png",attrs:{src:"/static/logo.png",mode:"aspectFit"}}),a("text",{staticClass:"text-grey"},[t._v("图片 + 标题")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[a("text",{staticClass:"cuIcon-btn text-olive"}),a("text",{staticClass:"text-grey"},[t._v("Open-type 按钮")])])],1),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"../list/list","open-type":"redirect"}},[a("text",{staticClass:"cuIcon-discoverfill text-orange"}),a("text",{staticClass:"text-grey"},[t._v("Navigator 跳转")])])],1),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-emojiflashfill text-pink"}),a("text",{staticClass:"text-grey"},[t._v("头像组")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cu-avatar-group"},[a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),a("view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}})]),a("text",{staticClass:"text-grey text-sm"},[t._v("4 人")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-btn text-green"}),a("text",{staticClass:"text-grey"},[t._v("按钮")])]),a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn round bg-green shadow"},[a("text",{staticClass:"cuIcon-upload"}),t._v("上传")])],1)]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-tagfill text-red  margin-right-xs"}),a("text",{staticClass:"text-grey"},[t._v("标签")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"cu-tag round bg-orange light"},[t._v("音乐")]),a("view",{staticClass:"cu-tag round bg-olive light"},[t._v("电影")]),a("view",{staticClass:"cu-tag round bg-blue light"},[t._v("旅行")])])]),a("view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[a("view",{staticClass:"content"},[a("text",{staticClass:"cuIcon-warn text-green"}),a("text",{staticClass:"text-grey"},[t._v("文本")])]),a("view",{staticClass:"action"},[a("text",{staticClass:"text-grey text-sm"},[t._v("小目标还没有实现！")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content padding-tb-sm"},[a("view",[a("text",{staticClass:"cuIcon-clothesfill text-blue margin-right-xs"}),t._v("多行Item")]),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-infofill margin-right-xs"}),t._v("小目标还没有实现！")])]),a("view",{staticClass:"action"},[a("switch",{staticClass:"switch-sex",class:t.skin?"checked":"",attrs:{checked:!!t.skin,eventid:"4fa3a101-11"},on:{change:t.SwitchSex}})])])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("消息列表")])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex"},[a("view",{staticClass:"text-cut"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[a("view",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("view",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])]),a("view",{staticClass:"cu-item "},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("view",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("view",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item grayscale"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("view",{staticClass:"content"},[a("view",[a("view",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("view",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item cur"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"content"},[a("view",[a("view",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("view",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange "}),t._v("列表左滑")])]),a("view",{staticClass:"cu-list menu-avatar"},t._l(4,function(s,e){return a("view",{key:e,staticClass:"cu-item",class:t.modalName=="move-box-"+e?"move-cur":"",attrs:{"data-target":"move-box-"+e,eventid:"4fa3a101-12-"+e},on:{touchstart:t.ListTouchStart,touchmove:t.ListTouchMove,touchend:t.ListTouchEnd}},[a("view",{staticClass:"cu-avatar round lg",style:[{backgroundImage:"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100"+(e+2)+".jpg)"}]}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("文晓港")]),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("消息未送达")])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])]),a("view",{staticClass:"move"},[a("view",{staticClass:"bg-grey"},[t._v("置顶")]),a("view",{staticClass:"bg-red"},[t._v("删除")])])])}))],1)],1)},i=[];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},c7a8:function(t,s,a){"use strict";a.r(s);var e=a("3f67"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a},f627:function(t,s,a){}},[["b5d5","common/runtime","common/vendor"]]]);
});
require('pages/component/list.js');
__wxRoute = 'pages/component/card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/card.js';

define('pages/component/card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/card"],{"12df":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{isCard:!1}},methods:{IsCard:function(t){this.isCard=t.detail.value}}};s.default=e},"9d10":function(t,s,a){"use strict";a.r(s);var e=a("12df"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);s["default"]=i.a},eb80:function(t,s,a){"use strict";a("a0fc");var e=c(a("b0ce")),i=c(a("f02a"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},f02a:function(t,s,a){"use strict";a.r(s);var e=a("f166"),i=a("9d10");for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);var l=a("2877"),n=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,null,null);s["default"]=n.exports},f166:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"4f9f6b73-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("卡片")])],1),a("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"4f9f6b73-0"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card case",class:t.isCard?"no-card":""},[t._m(1)]),a("view",{staticClass:"cu-bar bg-white solid-bottom",class:t.isCard?"margin-top":""},[t._m(2),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"4f9f6b73-1"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card dynamic",class:t.isCard?"no-card":""},[a("view",{staticClass:"cu-item shadow"},[t._m(3),a("view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！")]),a("view",{staticClass:"grid flex-sub padding-lr",class:t.isCard?"col-3 grid-square":"col-1"},t._l(t.isCard?9:1,function(s,e){return a("view",{key:e,staticClass:"bg-img",class:t.isCard?"":"only-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}})})),t._m(4),t._m(5)])]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(6),a("view",{staticClass:"action"},[a("switch",{class:t.isCard?"checked":"",attrs:{checked:!!t.isCard,eventid:"4f9f6b73-2"},on:{change:t.IsCard}})])]),a("view",{staticClass:"cu-card article",class:t.isCard?"no-card":""},[t._m(7)])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange"}),t._v("案例类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-item shadow"},[a("view",{staticClass:"image"},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"widthFix"}}),a("view",{staticClass:"cu-tag bg-blue"},[t._v("史诗")]),a("view",{staticClass:"cu-bar bg-shadeBottom"},[a("text",{staticClass:"text-cut"},[t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content flex-sub"},[a("view",{staticClass:"text-grey"},[t._v("正义天使 凯尔")]),a("view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("十天前"),a("view",{staticClass:"text-gray text-sm"},[a("text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),a("text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),a("text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange "}),t._v("动态类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content flex-sub"},[a("view",[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("2019年12月3日")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"text-gray text-sm text-right padding"},[a("text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),a("text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),a("text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-list menu-avatar comment solids-top"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("莫甘娜")]),a("view",{staticClass:"text-gray text-content text-df"},[t._v("凯尔，你被自己的光芒变的盲目。")]),a("view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[a("view",{staticClass:"flex"},[a("view",[t._v("凯尔：")]),a("view",{staticClass:"flex-sub"},[t._v("妹妹，你在帮他们给黑暗找借口吗?")])])]),a("view",{staticClass:"margin-top-sm flex justify-between"},[a("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),a("view",[a("text",{staticClass:"cuIcon-appreciatefill text-red"}),a("text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})])])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-content text-df"},[t._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")]),a("view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[a("view",{staticClass:"flex"},[a("view",[t._v("莫甘娜：")]),a("view",{staticClass:"flex-sub"},[t._v("如果不能立足于大地，要这双脚又有何用?")])])]),a("view",{staticClass:"margin-top-sm flex justify-between"},[a("view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")]),a("view",[a("text",{staticClass:"cuIcon-appreciate text-gray"}),a("text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-titles text-orange "}),t._v("文章类卡片")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-item shadow"},[a("view",{staticClass:"title"},[a("view",{staticClass:"text-cut"},[t._v("无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。")])]),a("view",{staticClass:"content"},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"aspectFill"}}),a("view",{staticClass:"desc"},[a("view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！")]),a("view",[a("view",{staticClass:"cu-tag bg-red light sm round"},[t._v("正义天使")]),a("view",{staticClass:"cu-tag bg-green light sm round"},[t._v("史诗")])])])])])}];a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})}},[["eb80","common/runtime","common/vendor"]]]);
});
require('pages/component/card.js');
__wxRoute = 'pages/component/form';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/form.js';

define('pages/component/form.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form"],{"2aef":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"4fa0fd27-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("表单")])],1),a("form",[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("邮件")]),a("input",{attrs:{placeholder:"两字短标题",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("输入框")]),a("input",{attrs:{placeholder:"三字标题",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("收货地址")]),a("input",{attrs:{placeholder:"统一标题的宽度",name:"input"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("收货地址")]),a("input",{attrs:{placeholder:"输入框带个图标",name:"input"}}),a("text",{staticClass:"cuIcon-locationfill text-orange"})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("验证码")]),a("input",{attrs:{placeholder:"输入框带个按钮",name:"input"}}),a("button",{staticClass:"cu-btn bg-green shadow"},[t._v("验证码")])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("手机号码")]),a("input",{attrs:{placeholder:"输入框带标签",name:"input"}}),a("view",{staticClass:"cu-capsule radius"},[a("view",{staticClass:"cu-tag bg-blue "},[t._v("+86")]),a("view",{staticClass:"cu-tag line-blue"},[t._v("中国大陆")])])]),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("普通选择")]),a("picker",{attrs:{value:t.index,range:t.picker,eventid:"4fa0fd27-0"},on:{change:t.PickerChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"禁止换行，超出容器部分会以 ... 方式截断"))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("多列选择")]),a("picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray,eventid:"4fa0fd27-1"},on:{change:t.MultiChange,columnchange:t.MultiColumnChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("时间选择")]),a("picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01",eventid:"4fa0fd27-2"},on:{change:t.TimeChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.time))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("日期选择")]),a("picker",{attrs:{mode:"date",value:t.date,start:"2015-09-01",end:"2020-09-01",eventid:"4fa0fd27-3"},on:{change:t.DateChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.date))])])],1),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("开关选择")]),a("switch",{class:t.switchA?"checked":"",attrs:{checked:!!t.switchA,eventid:"4fa0fd27-4"},on:{change:t.SwitchA}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("switch",{staticClass:"red",class:t.switchB?"checked":"",attrs:{checked:!!t.switchB,eventid:"4fa0fd27-5"},on:{change:t.SwitchB}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义图标")]),a("switch",{staticClass:"switch-sex",class:t.switchC?"checked":"",attrs:{checked:!!t.switchC,eventid:"4fa0fd27-6"},on:{change:t.SwitchC}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("方形开关")]),a("switch",{staticClass:"orange radius",class:t.switchD?"checked":"",attrs:{checked:!!t.switchD,eventid:"4fa0fd27-7"},on:{change:t.SwitchD}})]),a("radio-group",{staticClass:"block",attrs:{eventid:"4fa0fd27-8",mpcomid:"4fa0fd27-1"},on:{change:t.RadioChange}},[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("单选操作(radio)")]),a("radio",{class:"A"==t.radio?"checked":"",attrs:{checked:"A"==t.radio,value:"A"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义样式")]),a("radio",{staticClass:"radio",class:"B"==t.radio?"checked":"",attrs:{checked:"B"==t.radio,value:"B"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("view",[a("radio",{staticClass:"blue radio",class:"C"==t.radio?"checked":"",attrs:{checked:"C"==t.radio,value:"C"}}),a("radio",{staticClass:"red margin-left-sm",class:"D"==t.radio?"checked":"",attrs:{checked:"D"==t.radio,value:"D"}})],1)])]),a("checkbox-group",{staticClass:"block",attrs:{eventid:"4fa0fd27-9",mpcomid:"4fa0fd27-2"},on:{change:t.CheckboxChange}},[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("复选选操作(checkbox)")]),a("checkbox",{class:t.checkbox[0].checked?"checked":"",attrs:{checked:!!t.checkbox[0].checked,value:"A"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义形状")]),a("checkbox",{staticClass:"round",class:t.checkbox[1].checked?"checked":"",attrs:{checked:!!t.checkbox[1].checked,value:"B"}})],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("定义颜色")]),a("checkbox",{staticClass:"round blue",class:t.checkbox[2].checked?"checked":"",attrs:{checked:!!t.checkbox[2].checked,value:"C"}})],1)]),a("view",{staticClass:"cu-bar bg-white margin-top"},[a("view",{staticClass:"action"},[t._v("图片上传")]),a("view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/4")])]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,function(e,i){return a("view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.imgList[i],eventid:"4fa0fd27-11-"+i},on:{tap:t.ViewImage}},[a("image",{attrs:{src:t.imgList[i],mode:"aspectFill"}}),a("view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i,eventid:"4fa0fd27-10-"+i},on:{tap:function(e){e.stopPropagation(),t.DelImg(e)}}},[a("text",{staticClass:"cuIcon-close"})])])}),t.imgList.length<4?a("view",{staticClass:"solids",attrs:{eventid:"4fa0fd27-12"},on:{tap:t.ChooseImage}},[a("text",{staticClass:"cuIcon-cameraadd"})]):t._e()],2)]),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("头像")]),a("view",{staticClass:"cu-avatar radius bg-gray"})]),a("view",{staticClass:"cu-form-group margin-top"},[a("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"多行文本输入框",eventid:"4fa0fd27-13"},on:{input:t.textareaAInput}})]),a("view",{staticClass:"cu-form-group align-start"},[a("view",{staticClass:"title"},[t._v("文本框")]),a("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"多行文本输入框",eventid:"4fa0fd27-14"},on:{input:t.textareaBInput}})])],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"4fbc":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"],multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],objectMultiArray:[[{id:0,name:"无脊柱动物"},{id:1,name:"脊柱动物"}],[{id:0,name:"扁性动物"},{id:1,name:"线形动物"},{id:2,name:"环节动物"},{id:3,name:"软体动物"},{id:3,name:"节肢动物"}],[{id:0,name:"猪肉绦虫"},{id:1,name:"吸血虫"}]],multiIndex:[0,0,0],time:"12:01",date:"2018-12-25",region:["广东省","广州市","海珠区"],switchA:!1,switchB:!0,switchC:!1,switchD:!1,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""}},methods:{PickerChange:function(t){this.index=t.detail.value},MultiChange:function(t){this.multiIndex=t.detail.value},MultiColumnChange:function(t){var e={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(e.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(e.multiIndex[0]){case 0:e.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],e.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:e.multiArray[1]=["鱼","两栖动物","爬行动物"],e.multiArray[2]=["鲫鱼","带鱼"];break}e.multiIndex[1]=0,e.multiIndex[2]=0;break;case 1:switch(e.multiIndex[0]){case 0:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:e.multiArray[2]=["蛔虫"];break;case 2:e.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:e.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:e.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"];break}break;case 1:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["鲫鱼","带鱼"];break;case 1:e.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:e.multiArray[2]=["蜥蜴","龟","壁虎"];break}break}e.multiIndex[2]=0;break}this.multiArray=e.multiArray,this.multiIndex=e.multiIndex},TimeChange:function(t){this.time=t.detail.value},DateChange:function(t){this.date=t.detail.value},RegionChange:function(t){this.region=t.detail.value},SwitchA:function(t){this.switchA=t.detail.value},SwitchB:function(t){this.switchB=t.detail.value},SwitchC:function(t){this.switchC=t.detail.value},SwitchD:function(t){this.switchD=t.detail.value},RadioChange:function(t){this.radio=t.detail.value},CheckboxChange:function(t){for(var e=this.checkbox,a=t.detail.value,i=0,s=e.length;i<s;++i){e[i].checked=!1;for(var c=0,l=a.length;c<l;++c)if(e[i].value==a[c]){e[i].checked=!0;break}}},ChooseImage:function(){var e=this;t.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var a=this;t.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&a.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(t){this.textareaAValue=t.detail.value},textareaBInput:function(t){this.textareaBValue=t.detail.value}}};e.default=a}).call(this,a("6e42")["default"])},5698:function(t,e,a){"use strict";var i=a("8172"),s=a.n(i);s.a},"617d":function(t,e,a){"use strict";a.r(e);var i=a("4fbc"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"7eb8":function(t,e,a){"use strict";a("a0fc");var i=c(a("b0ce")),s=c(a("f0d0"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},8172:function(t,e,a){},f0d0:function(t,e,a){"use strict";a.r(e);var i=a("2aef"),s=a("617d");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);a("5698");var l=a("2877"),r=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}},[["7eb8","common/runtime","common/vendor"]]]);
});
require('pages/component/form.js');
__wxRoute = 'pages/component/timeline';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/timeline.js';

define('pages/component/timeline.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/timeline"],{8439:function(t,e,s){"use strict";s.r(e);var a=s("a565"),i=s.n(a);for(var c in a)"default"!==c&&function(t){s.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"9e4f":function(t,e,s){"use strict";s("a0fc");var a=c(s("b0ce")),i=c(s("f224"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},a565:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},c5c1:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"51b649b8-0"}},[s("block",{slot:"backText"},[t._v("返回")]),s("block",{slot:"content"},[t._v("时间轴")])],1),t._m(0),t._m(1),t._m(2)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("昨天")]),s("view",{staticClass:"cu-item cur cuIcon-noticefill"},[s("view",{staticClass:"content bg-green shadow-blur"},[s("text",[t._v("22:22")]),t._v("【广州市】快件已到达地球")])]),s("view",{staticClass:"cu-item text-red cuIcon-attentionforbidfill"},[s("view",{staticClass:"content bg-red shadow-blur"},[t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！")])]),s("view",{staticClass:"cu-item text-grey cuIcon-evaluate_fill"},[s("view",{staticClass:"content bg-grey shadow-blur"},[t._v("这是第一次，我家的铲屎官走了这么久。")])]),s("view",{staticClass:"cu-item text-blue"},[s("view",{staticClass:"bg-blue content"},[s("text",[t._v("20:00")]),t._v("【月球】快件已到达月球，准备发往地球")]),s("view",{staticClass:"bg-cyan content"},[s("text",[t._v("10:00")]),t._v("【银河系】快件已到达银河系，准备发往月球")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("06-17")]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"content"},[s("text",[t._v("01:30")]),t._v("【喵星】 MX-12138 已揽收，准备发往银河系")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"cu-timeline"},[s("view",{staticClass:"cu-time"},[t._v("06-17")]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"content"},[s("view",{staticClass:"cu-capsule radius"},[s("view",{staticClass:"cu-tag bg-cyan"},[t._v("上午")]),s("view",{staticClass:"cu-tag line-cyan"},[t._v("10:00")])]),s("view",{staticClass:"margin-top"},[t._v("这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。")])])]),s("view",{staticClass:"cu-item text-blue"},[s("view",{staticClass:"bg-blue shadow-blur content"},[s("view",{staticClass:"cu-list menu-avatar radius"},[s("view",{staticClass:"cu-item"},[s("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),s("view",{staticClass:"content"},[s("view",{staticClass:"text-grey"},[t._v("文晓港")]),s("view",{staticClass:"text-gray text-sm"},[s("text",{staticClass:"cuIcon-infofill text-red"}),t._v("消息未送达")])]),s("view",{staticClass:"action"},[s("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),s("view",{staticClass:"cu-item"},[s("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}},[s("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),s("view",{staticClass:"content"},[s("view",{staticClass:"text-grey"},[t._v("文晓港"),s("view",{staticClass:"cu-tag round orange sm"},[t._v("SVIP")])]),s("view",{staticClass:"text-gray text-sm"},[s("text",{staticClass:"cuIcon-redpacket_fill text-red"}),t._v("收到红包")])]),s("view",{staticClass:"action"},[s("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("text",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])])])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},f224:function(t,e,s){"use strict";s.r(e);var a=s("c5c1"),i=s("8439");for(var c in i)"default"!==c&&function(t){s.d(e,t,function(){return i[t]})}(c);var l=s("2877"),n=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=n.exports}},[["9e4f","common/runtime","common/vendor"]]]);
});
require('pages/component/timeline.js');
__wxRoute = 'pages/component/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/chat.js';

define('pages/component/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/chat"],{"269f":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"4f9f83bb-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("聊天")])],1),t._m(0),a("view",{staticClass:"cu-bar foot input",style:[{bottom:t.InputBottom+"px"}]},[t._m(1),a("input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10",eventid:"4f9f83bb-0"},on:{focus:t.InputFocus,blur:t.InputBlur}}),t._m(2),a("button",{staticClass:"cu-btn bg-green shadow"},[t._v("发送")])],1)],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"cu-chat"},[a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"content bg-green shadow"},[a("text",[t._v("喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！")])])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("2018年3月23日 13:23")])]),a("view",{staticClass:"cu-info round"},[t._v("对方撤回一条消息!")]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("view",{staticClass:"main"},[a("view",{staticClass:"content shadow"},[a("text",[t._v("喵喵喵！喵喵喵！")])])]),a("view",{staticClass:"date "},[t._v("13:23")])]),a("view",{staticClass:"cu-info"},[a("text",{staticClass:"cuIcon-roundclosefill text-red "}),t._v("对方拒绝了你的消息")]),a("view",{staticClass:"cu-info"},[t._v("对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。"),a("text",{staticClass:"text-blue"},[t._v("发送好友验证")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("image",{staticClass:"radius",attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"widthFix"}})]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"action text-bold text-grey"},[t._v('3"')]),a("view",{staticClass:"content shadow"},[a("text",{staticClass:"cuIcon-sound text-xxl padding-right-xl"})])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item self"},[a("view",{staticClass:"main"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-locationfill text-orange text-xxl"})]),a("view",{staticClass:"content shadow"},[t._v("喵星球，喵喵市")])]),a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("view",{staticClass:"date"},[t._v("13:23")])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("view",{staticClass:"main"},[a("view",{staticClass:"content shadow"},[t._v("@#$^&**")]),a("view",{staticClass:"action text-grey"},[a("text",{staticClass:"cuIcon-warnfill text-red text-xxl"}),a("text",{staticClass:"text-sm margin-left-sm"},[t._v("翻译错误")])])]),a("view",{staticClass:"date"},[t._v("13:23")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-sound text-grey"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-emojifill text-grey"})])}];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"295f":function(t,s,a){},9148:function(t,s,a){"use strict";a.r(s);var i=a("269f"),e=a("b30a");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);a("bce0");var n=a("2877"),l=Object(n["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=l.exports},b30a:function(t,s,a){"use strict";a.r(s);var i=a("e2a5"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},bce0:function(t,s,a){"use strict";var i=a("295f"),e=a.n(i);e.a},be71:function(t,s,a){"use strict";a("a0fc");var i=c(a("b0ce")),e=c(a("9148"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},e2a5:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};s.default=i}},[["be71","common/runtime","common/vendor"]]]);
});
require('pages/component/chat.js');
__wxRoute = 'pages/component/swiper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/swiper.js';

define('pages/component/swiper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/swiper"],{"1bc3":function(t,e,i){"use strict";i("a0fc");var s=a(i("b0ce")),r=a(i("8aa7"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(r.default))},"1cb3":function(t,e,i){},"2c27":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"01f20c1b-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("轮播图")])],1),i("view",{staticClass:"cu-bar bg-white"},[t._m(0),i("view",{staticClass:"action"},[i("switch",{class:t.dotStyle?"checked":"",attrs:{checked:!!t.dotStyle,eventid:"01f20c1b-0"},on:{change:t.DotStyle}})])]),i("swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,function(e,s){return i("swiper-item",{key:s,attrs:{mpcomid:"01f20c1b-1-"+s}},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])})),t._m(1),i("swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff",eventid:"01f20c1b-1"},on:{change:t.cardSwiper}},t._l(t.swiperList,function(e,s){return i("swiper-item",{key:s,class:t.cardCur==s?"cur":"",attrs:{mpcomid:"01f20c1b-2-"+s}},[i("view",{staticClass:"swiper-item"},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])])})),t._m(2),i("view",{staticClass:"tower-swiper",attrs:{eventid:"01f20c1b-2"},on:{touchmove:t.TowerMove,touchstart:t.TowerStart,touchend:t.TowerEnd}},t._l(t.swiperList,function(e,s){return i("view",{key:s,staticClass:"tower-item",class:1==e.zIndex?"none":"",style:[{"--index":e.zIndex,"--left":e.mLeft}],attrs:{"data-direction":t.direction}},[i("view",{staticClass:"swiper-item"},["image"==e.type?i("image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()])])}))],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("全屏限高轮播")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("卡片式轮播")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cu-bar bg-white margin-top"},[i("view",{staticClass:"action"},[i("text",{staticClass:"cuIcon-title text-pink"}),t._v("堆叠式轮播")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r})},"348f":function(t,e,i){"use strict";i.r(e);var s=i("56c6"),r=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=r.a},"56c6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:""}},onLoad:function(){this.TowerSwiper("swiperList")},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var e=this[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);this.swiperList=e},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var e=this.direction,i=this.swiperList;if("right"==e){for(var s=i[0].mLeft,r=i[0].zIndex,a=1;a<this.swiperList.length;a++)this.swiperList[a-1].mLeft=this.swiperList[a].mLeft,this.swiperList[a-1].zIndex=this.swiperList[a].zIndex;this.swiperList[i.length-1].mLeft=s,this.swiperList[i.length-1].zIndex=r}else{for(var o=i[i.length-1].mLeft,n=i[i.length-1].zIndex,c=this.swiperList.length-1;c>0;c--)this.swiperList[c].mLeft=this.swiperList[c-1].mLeft,this.swiperList[c].zIndex=this.swiperList[c-1].zIndex;this.swiperList[0].mLeft=o,this.swiperList[0].zIndex=n}this.direction="",this.swiperList=this.swiperList}}};e.default=s},"8aa7":function(t,e,i){"use strict";i.r(e);var s=i("2c27"),r=i("348f");for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i("b3da");var o=i("2877"),n=Object(o["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},b3da:function(t,e,i){"use strict";var s=i("1cb3"),r=i.n(s);r.a}},[["1bc3","common/runtime","common/vendor"]]]);
});
require('pages/component/swiper.js');
__wxRoute = 'pages/component/modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/modal.js';

define('pages/component/modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/modal"],{"0408":function(t,a,e){"use strict";var s=e("b5ab"),i=e.n(s);i.a},"16c4":function(t,a,e){"use strict";e.r(a);var s=e("3e0d"),i=e("1e28");for(var c in i)"default"!==c&&function(t){e.d(a,t,function(){return i[t]})}(c);e("0408");var o=e("2877"),l=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=l.exports},"1e28":function(t,a,e){"use strict";e.r(a);var s=e("bec0"),i=e.n(s);for(var c in s)"default"!==c&&function(t){e.d(a,t,function(){return s[t]})}(c);a["default"]=i.a},"3e0d":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"b63dd2ac-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("模态窗口")])],1),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(0),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"Modal",eventid:"b63dd2ac-0"},on:{tap:t.showModal}},[t._v("Modal")])],1)]),e("view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"b63dd2ac-1"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(1),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"bottomModal",eventid:"b63dd2ac-2"},on:{tap:t.showModal}},[t._v("Bottom")])],1)]),e("view",{staticClass:"cu-modal bottom-modal",class:"bottomModal"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action text-green"},[t._v("确定")]),e("view",{staticClass:"action text-blue",attrs:{eventid:"b63dd2ac-3"},on:{tap:t.hideModal}},[t._v("取消")])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DialogModal1",eventid:"b63dd2ac-4"},on:{tap:t.showModal}},[t._v("Dialog")]),e("button",{staticClass:"cu-btn bg-blue shadow margin-left",attrs:{"data-target":"DialogModal2",eventid:"b63dd2ac-5"},on:{tap:t.showModal}},[t._v("Dialog")])],1)]),e("view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"b63dd2ac-6"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")]),e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn line-green text-green",attrs:{eventid:"b63dd2ac-7"},on:{tap:t.hideModal}},[t._v("取消")]),e("button",{staticClass:"cu-btn bg-green margin-left",attrs:{eventid:"b63dd2ac-8"},on:{tap:t.hideModal}},[t._v("确定")])],1)])])]),e("view",{staticClass:"cu-modal",class:"DialogModal2"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"cu-bar bg-white justify-end"},[e("view",{staticClass:"content"},[t._v("Modal标题")]),e("view",{staticClass:"action",attrs:{eventid:"b63dd2ac-9"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close text-red"})])]),e("view",{staticClass:"padding-xl"},[t._v("Modal 内容。")]),e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action margin-0 flex-sub text-green ",attrs:{eventid:"b63dd2ac-10"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-moneybag"}),t._v("微信支付")]),e("view",{staticClass:"action margin-0 flex-sub text-green solid-left",attrs:{eventid:"b63dd2ac-11"},on:{tap:t.hideModal}},[t._v("取消")]),e("view",{staticClass:"action margin-0 flex-sub  solid-left",attrs:{eventid:"b63dd2ac-12"},on:{tap:t.hideModal}},[t._v("确定")])])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(3),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"Image",eventid:"b63dd2ac-13"},on:{tap:t.showModal}},[t._v("Image")])],1)]),e("view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":""},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"bg-img",staticStyle:{"background-image":"url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg')",height:"200px"}},[e("view",{staticClass:"cu-bar justify-end text-white"},[e("view",{staticClass:"action",attrs:{eventid:"b63dd2ac-14"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-close "})])])]),e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action margin-0 flex-sub  solid-left",attrs:{eventid:"b63dd2ac-15"},on:{tap:t.hideModal}},[t._v("我知道了")])])])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(4),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"RadioModal",eventid:"b63dd2ac-16"},on:{tap:t.showModal}},[t._v("Radio")])],1)]),e("view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",attrs:{eventid:"b63dd2ac-19"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog",attrs:{eventid:"b63dd2ac-18"},on:{tap:function(t){t.stopPropagation()}}},[e("radio-group",{staticClass:"block",attrs:{eventid:"b63dd2ac-17",mpcomid:"b63dd2ac-1"},on:{change:t.RadioChange}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item"},[e("label",{staticClass:"flex justify-between align-center flex-sub"},[e("view",{staticClass:"flex-sub"},[t._v("Item "+t._s(s+1))]),e("radio",{staticClass:"round",class:t.radio=="radio"+s?"checked":"",attrs:{checked:t.radio=="radio"+s,value:"radio"+s}})],1)],1)}))])],1)]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(5),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"ChooseModal",eventid:"b63dd2ac-20"},on:{tap:t.showModal}},[t._v("Choose")])],1)]),e("view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",attrs:{eventid:"b63dd2ac-25"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog",attrs:{eventid:"b63dd2ac-24"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action text-blue",attrs:{eventid:"b63dd2ac-21"},on:{tap:t.hideModal}},[t._v("取消")]),e("view",{staticClass:"action text-green",attrs:{eventid:"b63dd2ac-22"},on:{tap:t.hideModal}},[t._v("确定")])]),e("view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,function(a,s){return e("view",{key:s,staticClass:"padding-xs"},[e("button",{staticClass:"cu-btn orange lg block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.value,eventid:"b63dd2ac-23-"+s},on:{tap:t.ChooseCheckbox}},[t._v(t._s(a.name)),a.hot?e("view",{staticClass:"cu-tag sm round",class:a.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()])],1)}))])]),e("view",{staticClass:"cu-bar bg-white margin-top"},[t._m(6),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"DrawerModalL",eventid:"b63dd2ac-26"},on:{tap:t.showModal}},[t._v("Left")]),e("button",{staticClass:"cu-btn bg-blue shadow margin-left",attrs:{"data-target":"DrawerModalR",eventid:"b63dd2ac-27"},on:{tap:t.showModal}},[t._v("Right")])],1)]),e("view",{staticClass:"cu-modal drawer-modal justify-start",class:"DrawerModalL"==t.modalName?"show":"",attrs:{eventid:"b63dd2ac-29"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],attrs:{eventid:"b63dd2ac-28"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("view",[t._v("Item "+t._s(s+1))])])])}))])]),e("view",{staticClass:"cu-modal drawer-modal justify-end",class:"DrawerModalR"==t.modalName?"show":"",attrs:{eventid:"b63dd2ac-31"},on:{tap:t.hideModal}},[e("view",{staticClass:"cu-dialog basis-lg",style:[{top:t.CustomBar+"px",height:"calc(100vh - "+t.CustomBar+"px)"}],attrs:{eventid:"b63dd2ac-30"},on:{tap:function(t){t.stopPropagation()}}},[e("view",{staticClass:"cu-list menu text-left"},t._l(5,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("view",[t._v("Item "+t._s(s+1))])])])}))])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("普通窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("底部窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("对话窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("图片窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("单选窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("多选窗口")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange "}),t._v("侧边抽屉")])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},b5ab:function(t,a,e){},bec0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{CustomBar:this.CustomBar,modalName:null,radio:"radio1",checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}]}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},ChooseCheckbox:function(t){for(var a=this.checkbox,e=t.currentTarget.dataset.value,s=0,i=a.length;s<i;++s)if(a[s].value==e){a[s].checked=!a[s].checked;break}}}};a.default=s},e996:function(t,a,e){"use strict";e("a0fc");var s=c(e("b0ce")),i=c(e("16c4"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["e996","common/runtime","common/vendor"]]]);
});
require('pages/component/modal.js');
__wxRoute = 'pages/component/steps';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/steps.js';

define('pages/component/steps.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/steps"],{"4bb7":function(t,s,e){"use strict";e.r(s);var a=e("d093"),i=e("4fa8");for(var c in i)"default"!==c&&function(t){e.d(s,t,function(){return i[t]})}(c);var n=e("2877"),l=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=l.exports},"4fa8":function(t,s,e){"use strict";e.r(s);var a=e("9c51"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(s,t,function(){return a[t]})}(c);s["default"]=i.a},"72c9":function(t,s,e){"use strict";e("a0fc");var a=c(e("b0ce")),i=c(e("4bb7"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"9c51":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{basicsList:[{cuIcon:"usefullfill",name:"开始"},{cuIcon:"radioboxfill",name:"等待"},{cuIcon:"roundclosefill",name:"错误"},{cuIcon:"roundcheckfill",name:"完成"}],basics:0,numList:[{name:"开始"},{name:"等待"},{name:"错误"},{name:"完成"}],num:0,scroll:0}},methods:{BasicsSteps:function(){this.basics=this.basics==this.basicsList.length-1?0:this.basics+1},NumSteps:function(){this.num=this.num==this.numList.length-1?0:this.num+1},ScrollSteps:function(){this.scroll=9==this.scroll?0:this.scroll+1}}};s.default=a},d093:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"b59021b8-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("步骤条")])],1),e("view",{staticClass:"cu-bar bg-white solid-bottom"},[t._m(0),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"b59021b8-0"},on:{tap:t.BasicsSteps}},[t._v("下一步")])],1)]),e("view",{staticClass:"bg-white padding"},[e("view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,a){return e("view",{key:a,staticClass:"cu-item",class:a>t.basics?"":"text-red"},[e("text",{class:"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"bg-white padding margin-top-xs"},[e("view",{staticClass:"cu-steps"},t._l(t.basicsList,function(s,a){return e("view",{key:a,staticClass:"cu-item",class:a>t.basics?"":"text-orange"},[e("text",{class:a>t.basics?"cuIcon-title":"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"bg-white padding  margin-top-xs"},[e("view",{staticClass:"cu-steps steps-arrow"},t._l(t.basicsList,function(s,a){return e("view",{key:a,staticClass:"cu-item",class:a>t.basics?"":"text-blue"},[e("text",{class:"cuIcon-"+s.cuIcon}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(1),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"b59021b8-1"},on:{tap:t.NumSteps}},[t._v("下一步")])],1)]),e("view",{staticClass:"bg-white padding"},[e("view",{staticClass:"cu-steps"},t._l(t.numList,function(s,a){return e("view",{key:a,staticClass:"cu-item",class:a>t.num?"":"text-blue"},[e("text",{staticClass:"num",class:2==a?"err":"",attrs:{"data-index":a+1}}),t._v(t._s(s.name))])}))]),e("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"b59021b8-2"},on:{tap:t.ScrollSteps}},[t._v("下一步")])],1)]),e("scroll-view",{staticClass:"bg-white padding response cu-steps steps-bottom",attrs:{"scroll-x":"","scroll-into-view":"scroll-"+t.scroll,"scroll-with-animation":""}},t._l(10,function(s,a){return e("view",{key:a,staticClass:"cu-item padding-lr-xl",class:a>t.scroll?"":"text-blue",attrs:{id:"scroll-"+a}},[t._v("Level "+t._s(a+1)),e("text",{staticClass:"num",attrs:{"data-index":a+1}})])}))],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("基本用法")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("数字完成")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("多级显示")])}];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})}},[["72c9","common/runtime","common/vendor"]]]);
});
require('pages/component/steps.js');
__wxRoute = 'pages/plugin/indexes';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/indexes.js';

define('pages/plugin/indexes.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/indexes"],{3286:function(t,e,i){"use strict";i.r(e);var s=i("3ea7"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"3ea7":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:""}},onLoad:function(){for(var t=[{}],e=0;e<26;e++)t[e]={},t[e].name=String.fromCharCode(65+e);this.list=t,this.listCur=t[0]},onReady:function(){var e=this;t.createSelectorQuery().select(".indexBar-box").boundingClientRect(function(t){e.boxTop=t.top}).exec(),t.createSelectorQuery().select(".indexes").boundingClientRect(function(t){e.barTop=t.top}).exec()},methods:{getCur:function(t){this.hidden=!1,this.listCur=this.list[t.target.id].name},setCur:function(t){this.hidden=!0,this.listCur=this.listCur},tMove:function(t){var e=t.touches[0].clientY,i=this.boxTop,s=this;if(e>i){var a=parseInt((e-i)/20);this.listCur=s.list[a].name}},tStart:function(){this.hidden=!1},tEnd:function(){this.hidden=!0,this.listCurID=this.listCur},indexSelect:function(t){for(var e=this,i=this.barHeight,s=this.list,a=Math.ceil(s.length*t.detail.y/i),n=0;n<s.length;n++)if(a<n+1)return e.listCur=s[n].name,e.movableY=20*n,!1}}};e.default=i}).call(this,i("6e42")["default"])},"42a7":function(t,e,i){"use strict";i.r(e);var s=i("b291"),a=i("3286");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("752d");var r=i("2877"),c=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},"590d":function(t,e,i){},"6a0e":function(t,e,i){"use strict";i("a0fc");var s=n(i("b0ce")),a=n(i("42a7"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"752d":function(t,e,i){"use strict";var s=i("590d"),a=i.n(s);a.a},b291:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",isBack:!0,mpcomid:"4ad438b5-0"}},[i("block",{slot:"backText"},[t._v("返回")]),i("block",{slot:"content"},[t._v("索引")])],1),i("view",{staticClass:"cu-bar bg-white search fixed",style:[{top:t.CustomBar+"px"}]},[t._m(0),i("view",{staticClass:"action"},[i("button",{staticClass:"cu-btn bg-gradual-green shadow-blur round"},[t._v("搜索")])],1)]),i("scroll-view",{staticClass:"indexes",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}],attrs:{"scroll-y":"","scroll-into-view":"indexes-"+t.listCurID,"scroll-with-animation":!0,"enable-back-to-top":!0}},t._l(t.list,function(e,s){return i("block",{key:s},[i("view",{class:"indexItem-"+e.name,attrs:{id:"indexes-"+e.name,"data-index":e.name}},[i("view",{staticClass:"padding"},[t._v(t._s(e.name))]),i("view",{staticClass:"cu-list menu-avatar no-padding"},t._l(2,function(s,a){return i("view",{key:a,staticClass:"cu-item"},[i("view",{staticClass:"cu-avatar round lg"},[t._v(t._s(e.name))]),i("view",{staticClass:"content"},[i("view",{staticClass:"text-grey"},[t._v(t._s(e.name)),i("text",{staticClass:"text-abc"},[t._v(t._s(t.list[a].name))]),t._v("君")]),i("view",{staticClass:"text-gray text-sm"},[t._v("有"+t._s(a+2)+"个主子需要伺候")])])])}))])])})),i("view",{staticClass:"indexBar",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}]},[i("view",{staticClass:"indexBar-box",attrs:{eventid:"4ad438b5-1"},on:{touchstart:t.tStart,touchend:t.tEnd,touchmove:function(e){e.stopPropagation(),t.tMove(e)}}},t._l(t.list,function(e,s){return i("view",{key:s,staticClass:"indexBar-item",attrs:{id:s,eventid:"4ad438b5-0-"+s},on:{touchstart:t.getCur,touchend:t.setCur}},[t._v(t._s(e.name))])}))]),i("view",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"indexToast"},[t._v(t._s(t.listCur))])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"search-form round"},[i("text",{staticClass:"cuIcon-search"}),i("input",{attrs:{type:"text",placeholder:"输入搜索的关键词","confirm-type":"search"}})])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}},[["6a0e","common/runtime","common/vendor"]]]);
});
require('pages/plugin/indexes.js');
__wxRoute = 'pages/plugin/animation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/animation.js';

define('pages/plugin/animation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/animation"],{1032:function(t,a,e){"use strict";e.r(a);var s=e("9f4d"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a},"460a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",isBack:!0,mpcomid:"596df1f9-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("微动画")])],1),t._m(0),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"cu-btn margin-sm basis-sm shadow",class:["bg-"+a.color,t.animation==a.name?"animation-"+a.name:""],attrs:{"data-class":a.name,eventid:"596df1f9-0-"+s},on:{tap:t.Toggle}},[t._v(t._s(a.name))])}))]),t._m(1),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"cu-btn animation-reverse margin-sm basis-sm shadow",class:["bg-"+a.color,t.animation==a.name+"s"?"animation-"+a.name:""],attrs:{"data-class":a.name+"s",eventid:"596df1f9-1-"+s},on:{tap:t.Toggle}},[t._v(t._s(a.name))])}))]),e("view",{staticClass:"cu-bar bg-white"},[t._m(2),e("view",{staticClass:"action"},[e("button",{staticClass:"cu-btn bg-cyan shadow",attrs:{eventid:"596df1f9-2"},on:{tap:t.ToggleDelay}},[t._v("开始执行")])],1)]),e("view",{staticClass:"padding-sm"},[e("view",{staticClass:"flex flex-wrap justify-around"},t._l(t.list,function(a,s){return e("button",{key:s,staticClass:"margin-sm basis-sm shadow cu-btn",class:["bg-"+a.color,t.toggleDelay?"animation-slide-bottom":""],style:[{animationDelay:.1*(s+1)+"s"}]},[t._v("0."+t._s(s+1)+"s")])}))]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("默认效果")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("反向动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("延迟执行")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"cu-bar bg-white"},[e("view",{staticClass:"action"},[e("text",{staticClass:"cuIcon-title text-orange"}),t._v("Gif动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin radius bg-gradual-green shadow-blur"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"100rpx"},attrs:{src:"https://image.weilanwl.com/gif/wave.gif",mode:"scaleToFill"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-black flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-black.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-white.gif",mode:"aspectFit"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-gradual-blue flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-black.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-white.gif",mode:"aspectFit"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"margin flex"},[e("view",{staticClass:"bg-white flex-sub margin-right radius shadow-lg"},[e("image",{staticClass:"gif-white response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-1.gif",mode:"aspectFit"}})]),e("view",{staticClass:"bg-black flex-sub radius shadow-lg"},[e("image",{staticClass:"gif-black response",staticStyle:{height:"240rpx"},attrs:{src:"https://image.weilanwl.com/gif/loading-2.gif",mode:"aspectFit"}})])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},7627:function(t,a,e){"use strict";var s=e("f0d6"),i=e.n(s);i.a},"9f4d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(t){var a=this,e=t.currentTarget.dataset.class;this.animation=e,setTimeout(function(){a.animation=""},1e3)},ToggleDelay:function(){var t=this;this.toggleDelay=!0,setTimeout(function(){t.toggleDelay=!1},1e3)}}};a.default=s},ca2c:function(t,a,e){"use strict";e("a0fc");var s=n(e("b0ce")),i=n(e("eb9f"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},eb9f:function(t,a,e){"use strict";e.r(a);var s=e("460a"),i=e("1032");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("7627");var l=e("2877"),c=Object(l["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=c.exports},f0d6:function(t,a,e){}},[["ca2c","common/runtime","common/vendor"]]]);
});
require('pages/plugin/animation.js');
__wxRoute = 'pages/plugin/drawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/drawer.js';

define('pages/plugin/drawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/drawer"],{"0e79":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"bg-gradual-blue"},[e("scroll-view",{staticClass:"DrawerPage",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"5d31be9c-0"}},[e("block",{slot:"backText"},[t._v("返回")]),e("block",{slot:"content"},[t._v("全屏抽屉")])],1),e("view",{staticClass:"padding margin text-center"},[e("view",{staticClass:"cu-btn bg-green lg block shadow radius margin-xl",attrs:{"data-target":"viewModal",eventid:"5d31be9c-0"},on:{tap:t.showModal}},[t._v("打开抽屉")])]),e("view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},t._l(20,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("text",{staticClass:"cuIcon-github text-grey"}),e("text",{staticClass:"text-grey"},[t._v(t._s(s+1))])])])})),e("view",{staticClass:"padding margin text-center"},[e("view",{staticClass:"cu-btn bg-green lg block shadow radius margin-xl",attrs:{"data-target":"viewModal",eventid:"5d31be9c-1"},on:{tap:t.showModal}},[t._v("打开抽屉")])])],1),e("view",{staticClass:"DrawerClose",class:"viewModal"==t.modalName?"show":"",attrs:{eventid:"5d31be9c-2"},on:{tap:t.hideModal}},[e("text",{staticClass:"cuIcon-pullright"})]),e("scroll-view",{staticClass:"DrawerWindow",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},t._l(20,function(a,s){return e("view",{key:s,staticClass:"cu-item arrow"},[e("view",{staticClass:"content"},[e("text",{staticClass:"cuIcon-github text-grey"}),e("text",{staticClass:"text-grey"},[t._v(t._s(s+1))])])])}))])],1)},n=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n})},4520:function(t,a,e){},"4afd":function(t,a,e){"use strict";var s=e("4520"),n=e.n(s);n.a},"8a1e":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{modalName:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=s},"8d0b":function(t,a,e){"use strict";e("a0fc");var s=l(e("b0ce")),n=l(e("9f2f"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},"9f2f":function(t,a,e){"use strict";e.r(a);var s=e("0e79"),n=e("bc33");for(var l in n)"default"!==l&&function(t){e.d(a,t,function(){return n[t]})}(l);e("4afd");var i=e("2877"),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);a["default"]=r.exports},bc33:function(t,a,e){"use strict";e.r(a);var s=e("8a1e"),n=e.n(s);for(var l in s)"default"!==l&&function(t){e.d(a,t,function(){return s[t]})}(l);a["default"]=n.a}},[["8d0b","common/runtime","common/vendor"]]]);
});
require('pages/plugin/drawer.js');
__wxRoute = 'pages/plugin/verticalnav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/plugin/verticalnav.js';

define('pages/plugin/verticalnav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/verticalnav"],{"0135":function(t,s,a){"use strict";a.r(s);var i=a("f81c"),e=a("30b2");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);a("cf33");var l=a("2877"),r=Object(l["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=r.exports},"30b2":function(t,s,a){"use strict";a.r(s);var i=a("fd39"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},"5ebe":function(t,s,a){},"9a20":function(t,s,a){"use strict";a("a0fc");var i=c(a("b0ce")),e=c(a("0135"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},cf33:function(t,s,a){"use strict";var i=a("5ebe"),e=a.n(i);e.a},f81c:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white",mpcomid:"2596d9bc-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("垂直导航")])],1)],1),a("swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,function(t,s){return a("swiper-item",{key:s,attrs:{mpcomid:"2596d9bc-1-"+s}},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+s+".jpg",mode:"aspectFill"}})])})),a("view",{staticClass:"VerticalBox"},[a("scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-top":t.verticalNavTop}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"cu-item",class:i==t.tabCur?"text-green cur":"",attrs:{"data-id":i,eventid:"2596d9bc-0-"+i},on:{tap:t.TabSelect}},[t._v("Tab-"+t._s(s.name))])})),a("scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-into-view":"main-"+t.mainCur,eventid:"2596d9bc-1"},on:{scroll:t.VerticalMain}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"padding-top padding-lr",attrs:{id:"main-"+i}},[a("view",{staticClass:"cu-bar solid-bottom bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),t._v("Tab-"+t._s(s.name))])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[a("text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])]),a("view",{staticClass:"cu-item "},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("text",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item grayscale"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item cur"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])])])}))],1)],1)},e=[];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},fd39:function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});for(var s=[{}],a=0;a<26;a++)s[a]={},s[a].name=String.fromCharCode(65+a),s[a].id=a;this.list=s,this.listCur=s[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(s){var a=this,i=0;if(this.load){for(var e=function(s){var e=t.createSelectorQuery().select("#main-"+a.list[s].id);e.fields({size:!0},function(t){a.list[s].top=i,i+=t.height,a.list[s].bottom=i}).exec()},c=0;c<this.list.length;c++)e(c);this.load=!1}var l=s.detail.scrollTop+10;for(c=0;c<this.list.length;c++)if(l>this.list[c].top&&l<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(l),!1}}};s.default=a}).call(this,a("6e42")["default"])}},[["9a20","common/runtime","common/vendor"]]]);
});
require('pages/plugin/verticalnav.js');


