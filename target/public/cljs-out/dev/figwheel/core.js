// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__13061_SHARP_){
var k = f.call(null,p1__13061_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13062){
var vec__13063 = p__13062;
var k = cljs.core.nth.call(null,vec__13063,(0),null);
var v = cljs.core.nth.call(null,vec__13063,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13067 = arguments.length;
var i__5727__auto___13068 = (0);
while(true){
if((i__5727__auto___13068 < len__5726__auto___13067)){
args__5732__auto__.push((arguments[i__5727__auto___13068]));

var G__13069 = (i__5727__auto___13068 + (1));
i__5727__auto___13068 = G__13069;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq13066){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13066));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__13072){
var map__13073 = p__13072;
var map__13073__$1 = cljs.core.__destructure_map.call(null,map__13073);
var message = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__13071_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13071_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__13070_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__13070_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__13075){
var map__13076 = p__13075;
var map__13076__$1 = cljs.core.__destructure_map.call(null,map__13076);
var message_data = map__13076__$1;
var message = cljs.core.get.call(null,map__13076__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__13076__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13076__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__13076__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__13077 = file_excerpt;
var map__13077__$1 = cljs.core.__destructure_map.call(null,map__13077);
var start_line = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__13078 = cljs.core.split_with.call(null,(function (p1__13074_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__13074_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__13078,(0),null);
var end = cljs.core.nth.call(null,vec__13078,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__13081){
var map__13082 = p__13081;
var map__13082__$1 = cljs.core.__destructure_map.call(null,map__13082);
var file = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__13083 = "";
var G__13083__$1 = (cljs.core.truth_(file)?[G__13083,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__13083);
var G__13083__$2 = (cljs.core.truth_(line)?[G__13083__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__13083__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = line;
if(cljs.core.truth_(and__5000__auto__)){
return column;
} else {
return and__5000__auto__;
}
})())){
return [G__13083__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__13083__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_13141 = (new goog.debug.Console());
var G__13090_13142 = c_13141.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__13090_13142,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__13090_13142,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_13141);

}

var temp__5804__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5804__auto__)){
var console_instance = temp__5804__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__13091 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__13091,"data",(function (){var or__5002__auto__ = data;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__13091;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5802__auto__ = e.event_;
if(cljs.core.truth_(temp__5802__auto__)){
var e__$1 = temp__5802__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5000__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5000__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5000__auto__;
}
});

var last_reload_timestamp_13143 = cljs.core.atom.call(null,(0));
var promise_chain_13144 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
var and__5000__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_13143) < ts);
if(and__5000__auto__){
return ts;
} else {
return and__5000__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ts = temp__5802__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_13143,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_13144.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__13092 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__13093 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__13093);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__13094 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__13095 = null;
var count__13096 = (0);
var i__13097 = (0);
while(true){
if((i__13097 < count__13096)){
var w = cljs.core._nth.call(null,chunk__13095,i__13097);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__13145 = seq__13094;
var G__13146 = chunk__13095;
var G__13147 = count__13096;
var G__13148 = (i__13097 + (1));
seq__13094 = G__13145;
chunk__13095 = G__13146;
count__13096 = G__13147;
i__13097 = G__13148;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13094);
if(temp__5804__auto__){
var seq__13094__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13094__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13094__$1);
var G__13149 = cljs.core.chunk_rest.call(null,seq__13094__$1);
var G__13150 = c__5525__auto__;
var G__13151 = cljs.core.count.call(null,c__5525__auto__);
var G__13152 = (0);
seq__13094 = G__13149;
chunk__13095 = G__13150;
count__13096 = G__13151;
i__13097 = G__13152;
continue;
} else {
var w = cljs.core.first.call(null,seq__13094__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__13153 = cljs.core.next.call(null,seq__13094__$1);
var G__13154 = null;
var G__13155 = (0);
var G__13156 = (0);
seq__13094 = G__13153;
chunk__13095 = G__13154;
count__13096 = G__13155;
i__13097 = G__13156;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__13092);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_13144.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__13098 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__13099 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__13099);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__13098);
}}));
} else {
return promise_chain_13144.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5000__auto____$1){
var or__5002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13157 = arguments.length;
var i__5727__auto___13158 = (0);
while(true){
if((i__5727__auto___13158 < len__5726__auto___13157)){
args__5732__auto__.push((arguments[i__5727__auto___13158]));

var G__13159 = (i__5727__auto___13158 + (1));
i__5727__auto___13158 = G__13159;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__13102){
var vec__13103 = p__13102;
var n = cljs.core.nth.call(null,vec__13103,(0),null);
var mdata = cljs.core.nth.call(null,vec__13103,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__13106 = cljs.core.seq.call(null,hooks);
var chunk__13107 = null;
var count__13108 = (0);
var i__13109 = (0);
while(true){
if((i__13109 < count__13108)){
var vec__13118 = cljs.core._nth.call(null,chunk__13107,i__13109);
var n = cljs.core.nth.call(null,vec__13118,(0),null);
var f = cljs.core.nth.call(null,vec__13118,(1),null);
var temp__5802__auto___13160 = cljs.core.reduce.call(null,((function (seq__13106,chunk__13107,count__13108,i__13109,vec__13118,n,f,hooks){
return (function (p1__13084_SHARP_,p2__13085_SHARP_){
if(cljs.core.truth_(p1__13084_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__13084_SHARP_,p2__13085_SHARP_);
} else {
return null;
}
});})(seq__13106,chunk__13107,count__13108,i__13109,vec__13118,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___13160)){
var hook_13161 = temp__5802__auto___13160;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_13161,args);
}catch (e13121){if((e13121 instanceof Error)){
var e_13162 = e13121;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_13162);
} else {
throw e13121;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__13163 = seq__13106;
var G__13164 = chunk__13107;
var G__13165 = count__13108;
var G__13166 = (i__13109 + (1));
seq__13106 = G__13163;
chunk__13107 = G__13164;
count__13108 = G__13165;
i__13109 = G__13166;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13106);
if(temp__5804__auto__){
var seq__13106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13106__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13106__$1);
var G__13167 = cljs.core.chunk_rest.call(null,seq__13106__$1);
var G__13168 = c__5525__auto__;
var G__13169 = cljs.core.count.call(null,c__5525__auto__);
var G__13170 = (0);
seq__13106 = G__13167;
chunk__13107 = G__13168;
count__13108 = G__13169;
i__13109 = G__13170;
continue;
} else {
var vec__13122 = cljs.core.first.call(null,seq__13106__$1);
var n = cljs.core.nth.call(null,vec__13122,(0),null);
var f = cljs.core.nth.call(null,vec__13122,(1),null);
var temp__5802__auto___13171 = cljs.core.reduce.call(null,((function (seq__13106,chunk__13107,count__13108,i__13109,vec__13122,n,f,seq__13106__$1,temp__5804__auto__,hooks){
return (function (p1__13084_SHARP_,p2__13085_SHARP_){
if(cljs.core.truth_(p1__13084_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__13084_SHARP_,p2__13085_SHARP_);
} else {
return null;
}
});})(seq__13106,chunk__13107,count__13108,i__13109,vec__13122,n,f,seq__13106__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___13171)){
var hook_13172 = temp__5802__auto___13171;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_13172,args);
}catch (e13125){if((e13125 instanceof Error)){
var e_13173 = e13125;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_13173);
} else {
throw e13125;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__13174 = cljs.core.next.call(null,seq__13106__$1);
var G__13175 = null;
var G__13176 = (0);
var G__13177 = (0);
seq__13106 = G__13174;
chunk__13107 = G__13175;
count__13108 = G__13176;
i__13109 = G__13177;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq13100){
var G__13101 = cljs.core.first.call(null,seq13100);
var seq13100__$1 = cljs.core.next.call(null,seq13100);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13101,seq13100__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13126){
var vec__13127 = p__13126;
var k = cljs.core.nth.call(null,vec__13127,(0),null);
var v = cljs.core.nth.call(null,vec__13127,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__13086_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__13086_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__13086_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__13087_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__13087_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5000__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5000__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__13088_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__13088_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__13130_13178 = cljs.core.seq.call(null,to_reload);
var chunk__13131_13179 = null;
var count__13132_13180 = (0);
var i__13133_13181 = (0);
while(true){
if((i__13133_13181 < count__13132_13180)){
var ns_13182 = cljs.core._nth.call(null,chunk__13131_13179,i__13133_13181);
goog.require(cljs.core.name.call(null,ns_13182),true);


var G__13183 = seq__13130_13178;
var G__13184 = chunk__13131_13179;
var G__13185 = count__13132_13180;
var G__13186 = (i__13133_13181 + (1));
seq__13130_13178 = G__13183;
chunk__13131_13179 = G__13184;
count__13132_13180 = G__13185;
i__13133_13181 = G__13186;
continue;
} else {
var temp__5804__auto___13187 = cljs.core.seq.call(null,seq__13130_13178);
if(temp__5804__auto___13187){
var seq__13130_13188__$1 = temp__5804__auto___13187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13130_13188__$1)){
var c__5525__auto___13189 = cljs.core.chunk_first.call(null,seq__13130_13188__$1);
var G__13190 = cljs.core.chunk_rest.call(null,seq__13130_13188__$1);
var G__13191 = c__5525__auto___13189;
var G__13192 = cljs.core.count.call(null,c__5525__auto___13189);
var G__13193 = (0);
seq__13130_13178 = G__13190;
chunk__13131_13179 = G__13191;
count__13132_13180 = G__13192;
i__13133_13181 = G__13193;
continue;
} else {
var ns_13194 = cljs.core.first.call(null,seq__13130_13188__$1);
goog.require(cljs.core.name.call(null,ns_13194),true);


var G__13195 = cljs.core.next.call(null,seq__13130_13188__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__13130_13178 = G__13195;
chunk__13131_13179 = G__13196;
count__13132_13180 = G__13197;
i__13133_13181 = G__13198;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_13199 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5804__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var not_loaded = temp__5804__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_13199);
} else {
setTimeout(after_reload_fn_13199,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__13134 = cljs.core.seq.call(null,warnings);
var chunk__13135 = null;
var count__13136 = (0);
var i__13137 = (0);
while(true){
if((i__13137 < count__13136)){
var warning = cljs.core._nth.call(null,chunk__13135,i__13137);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__13200 = seq__13134;
var G__13201 = chunk__13135;
var G__13202 = count__13136;
var G__13203 = (i__13137 + (1));
seq__13134 = G__13200;
chunk__13135 = G__13201;
count__13136 = G__13202;
i__13137 = G__13203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13134);
if(temp__5804__auto__){
var seq__13134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13134__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13134__$1);
var G__13204 = cljs.core.chunk_rest.call(null,seq__13134__$1);
var G__13205 = c__5525__auto__;
var G__13206 = cljs.core.count.call(null,c__5525__auto__);
var G__13207 = (0);
seq__13134 = G__13204;
chunk__13135 = G__13205;
count__13136 = G__13206;
i__13137 = G__13207;
continue;
} else {
var warning = cljs.core.first.call(null,seq__13134__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__13208 = cljs.core.next.call(null,seq__13134__$1);
var G__13209 = null;
var G__13210 = (0);
var G__13211 = (0);
seq__13134 = G__13208;
chunk__13135 = G__13209;
count__13136 = G__13210;
i__13137 = G__13211;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__13138){
var map__13139 = p__13138;
var map__13139__$1 = cljs.core.__destructure_map.call(null,map__13139);
var exception_data = map__13139__$1;
var file = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__13089_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__13089_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__13140 = "Compile Exception - ";
var G__13140__$1 = (cljs.core.truth_((function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return message;
}
})())?[G__13140,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__13140);
if(cljs.core.truth_(file)){
return [G__13140__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__13140__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
