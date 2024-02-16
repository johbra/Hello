// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16319){
var map__16320 = p__16319;
var map__16320__$1 = cljs.core.__destructure_map.call(null,map__16320);
var m = map__16320__$1;
var n = cljs.core.get.call(null,map__16320__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16320__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16321_16349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16322_16350 = null;
var count__16323_16351 = (0);
var i__16324_16352 = (0);
while(true){
if((i__16324_16352 < count__16323_16351)){
var f_16353 = cljs.core._nth.call(null,chunk__16322_16350,i__16324_16352);
cljs.core.println.call(null,"  ",f_16353);


var G__16354 = seq__16321_16349;
var G__16355 = chunk__16322_16350;
var G__16356 = count__16323_16351;
var G__16357 = (i__16324_16352 + (1));
seq__16321_16349 = G__16354;
chunk__16322_16350 = G__16355;
count__16323_16351 = G__16356;
i__16324_16352 = G__16357;
continue;
} else {
var temp__5804__auto___16358 = cljs.core.seq.call(null,seq__16321_16349);
if(temp__5804__auto___16358){
var seq__16321_16359__$1 = temp__5804__auto___16358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16321_16359__$1)){
var c__5525__auto___16360 = cljs.core.chunk_first.call(null,seq__16321_16359__$1);
var G__16361 = cljs.core.chunk_rest.call(null,seq__16321_16359__$1);
var G__16362 = c__5525__auto___16360;
var G__16363 = cljs.core.count.call(null,c__5525__auto___16360);
var G__16364 = (0);
seq__16321_16349 = G__16361;
chunk__16322_16350 = G__16362;
count__16323_16351 = G__16363;
i__16324_16352 = G__16364;
continue;
} else {
var f_16365 = cljs.core.first.call(null,seq__16321_16359__$1);
cljs.core.println.call(null,"  ",f_16365);


var G__16366 = cljs.core.next.call(null,seq__16321_16359__$1);
var G__16367 = null;
var G__16368 = (0);
var G__16369 = (0);
seq__16321_16349 = G__16366;
chunk__16322_16350 = G__16367;
count__16323_16351 = G__16368;
i__16324_16352 = G__16369;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16370 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16370);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16370)))?cljs.core.second.call(null,arglists_16370):arglists_16370));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16325_16371 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16326_16372 = null;
var count__16327_16373 = (0);
var i__16328_16374 = (0);
while(true){
if((i__16328_16374 < count__16327_16373)){
var vec__16337_16375 = cljs.core._nth.call(null,chunk__16326_16372,i__16328_16374);
var name_16376 = cljs.core.nth.call(null,vec__16337_16375,(0),null);
var map__16340_16377 = cljs.core.nth.call(null,vec__16337_16375,(1),null);
var map__16340_16378__$1 = cljs.core.__destructure_map.call(null,map__16340_16377);
var doc_16379 = cljs.core.get.call(null,map__16340_16378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16380 = cljs.core.get.call(null,map__16340_16378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16376);

cljs.core.println.call(null," ",arglists_16380);

if(cljs.core.truth_(doc_16379)){
cljs.core.println.call(null," ",doc_16379);
} else {
}


var G__16381 = seq__16325_16371;
var G__16382 = chunk__16326_16372;
var G__16383 = count__16327_16373;
var G__16384 = (i__16328_16374 + (1));
seq__16325_16371 = G__16381;
chunk__16326_16372 = G__16382;
count__16327_16373 = G__16383;
i__16328_16374 = G__16384;
continue;
} else {
var temp__5804__auto___16385 = cljs.core.seq.call(null,seq__16325_16371);
if(temp__5804__auto___16385){
var seq__16325_16386__$1 = temp__5804__auto___16385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16325_16386__$1)){
var c__5525__auto___16387 = cljs.core.chunk_first.call(null,seq__16325_16386__$1);
var G__16388 = cljs.core.chunk_rest.call(null,seq__16325_16386__$1);
var G__16389 = c__5525__auto___16387;
var G__16390 = cljs.core.count.call(null,c__5525__auto___16387);
var G__16391 = (0);
seq__16325_16371 = G__16388;
chunk__16326_16372 = G__16389;
count__16327_16373 = G__16390;
i__16328_16374 = G__16391;
continue;
} else {
var vec__16341_16392 = cljs.core.first.call(null,seq__16325_16386__$1);
var name_16393 = cljs.core.nth.call(null,vec__16341_16392,(0),null);
var map__16344_16394 = cljs.core.nth.call(null,vec__16341_16392,(1),null);
var map__16344_16395__$1 = cljs.core.__destructure_map.call(null,map__16344_16394);
var doc_16396 = cljs.core.get.call(null,map__16344_16395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16397 = cljs.core.get.call(null,map__16344_16395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16393);

cljs.core.println.call(null," ",arglists_16397);

if(cljs.core.truth_(doc_16396)){
cljs.core.println.call(null," ",doc_16396);
} else {
}


var G__16398 = cljs.core.next.call(null,seq__16325_16386__$1);
var G__16399 = null;
var G__16400 = (0);
var G__16401 = (0);
seq__16325_16371 = G__16398;
chunk__16326_16372 = G__16399;
count__16327_16373 = G__16400;
i__16328_16374 = G__16401;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__16345 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16346 = null;
var count__16347 = (0);
var i__16348 = (0);
while(true){
if((i__16348 < count__16347)){
var role = cljs.core._nth.call(null,chunk__16346,i__16348);
var temp__5804__auto___16402__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16402__$1)){
var spec_16403 = temp__5804__auto___16402__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16403));
} else {
}


var G__16404 = seq__16345;
var G__16405 = chunk__16346;
var G__16406 = count__16347;
var G__16407 = (i__16348 + (1));
seq__16345 = G__16404;
chunk__16346 = G__16405;
count__16347 = G__16406;
i__16348 = G__16407;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__16345);
if(temp__5804__auto____$1){
var seq__16345__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16345__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16345__$1);
var G__16408 = cljs.core.chunk_rest.call(null,seq__16345__$1);
var G__16409 = c__5525__auto__;
var G__16410 = cljs.core.count.call(null,c__5525__auto__);
var G__16411 = (0);
seq__16345 = G__16408;
chunk__16346 = G__16409;
count__16347 = G__16410;
i__16348 = G__16411;
continue;
} else {
var role = cljs.core.first.call(null,seq__16345__$1);
var temp__5804__auto___16412__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16412__$2)){
var spec_16413 = temp__5804__auto___16412__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16413));
} else {
}


var G__16414 = cljs.core.next.call(null,seq__16345__$1);
var G__16415 = null;
var G__16416 = (0);
var G__16417 = (0);
seq__16345 = G__16414;
chunk__16346 = G__16415;
count__16347 = G__16416;
i__16348 = G__16417;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16420 = datafied_throwable;
var map__16420__$1 = cljs.core.__destructure_map.call(null,map__16420);
var via = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16420__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16421 = cljs.core.last.call(null,via);
var map__16421__$1 = cljs.core.__destructure_map.call(null,map__16421);
var type = cljs.core.get.call(null,map__16421__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16421__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16422 = data;
var map__16422__$1 = cljs.core.__destructure_map.call(null,map__16422);
var problems = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16422__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16423 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16423__$1 = cljs.core.__destructure_map.call(null,map__16423);
var top_data = map__16423__$1;
var source = cljs.core.get.call(null,map__16423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16424 = phase;
var G__16424__$1 = (((G__16424 instanceof cljs.core.Keyword))?G__16424.fqn:null);
switch (G__16424__$1) {
case "read-source":
var map__16425 = data;
var map__16425__$1 = cljs.core.__destructure_map.call(null,map__16425);
var line = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16425__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16426 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16426__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16426,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16426);
var G__16426__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16426__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16426__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16426__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16427 = top_data;
var G__16427__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16427,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16427);
var G__16427__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16427__$1);
var G__16427__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16427__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16427__$2);
var G__16427__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16427__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16427__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16427__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16427__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16428 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16428,(0),null);
var method = cljs.core.nth.call(null,vec__16428,(1),null);
var file = cljs.core.nth.call(null,vec__16428,(2),null);
var line = cljs.core.nth.call(null,vec__16428,(3),null);
var G__16431 = top_data;
var G__16431__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16431,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16431);
var G__16431__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16431__$1);
var G__16431__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__16431__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16431__$2);
var G__16431__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16431__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16431__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16431__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16431__$4;
}

break;
case "execution":
var vec__16432 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16432,(0),null);
var method = cljs.core.nth.call(null,vec__16432,(1),null);
var file = cljs.core.nth.call(null,vec__16432,(2),null);
var line = cljs.core.nth.call(null,vec__16432,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16419_SHARP_){
var or__5002__auto__ = (p1__16419_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16419_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__16435 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16435__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16435,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16435);
var G__16435__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16435__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16435__$1);
var G__16435__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16435__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16435__$2);
var G__16435__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16435__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16435__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16435__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16435__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16424__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16439){
var map__16440 = p__16439;
var map__16440__$1 = cljs.core.__destructure_map.call(null,map__16440);
var triage_data = map__16440__$1;
var phase = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16441 = phase;
var G__16441__$1 = (((G__16441 instanceof cljs.core.Keyword))?G__16441.fqn:null);
switch (G__16441__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16442_16451 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16443_16452 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16444_16453 = true;
var _STAR_print_fn_STAR__temp_val__16445_16454 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16444_16453);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16445_16454);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16437_SHARP_){
return cljs.core.dissoc.call(null,p1__16437_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16443_16452);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16442_16451);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16446_16455 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16447_16456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16448_16457 = true;
var _STAR_print_fn_STAR__temp_val__16449_16458 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16448_16457);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16449_16458);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16438_SHARP_){
return cljs.core.dissoc.call(null,p1__16438_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16447_16456);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16446_16455);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16441__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
