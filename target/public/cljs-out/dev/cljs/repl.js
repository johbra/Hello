// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19070){
var map__19071 = p__19070;
var map__19071__$1 = cljs.core.__destructure_map.call(null,map__19071);
var m = map__19071__$1;
var n = cljs.core.get.call(null,map__19071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19072_19100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19073_19101 = null;
var count__19074_19102 = (0);
var i__19075_19103 = (0);
while(true){
if((i__19075_19103 < count__19074_19102)){
var f_19104 = cljs.core._nth.call(null,chunk__19073_19101,i__19075_19103);
cljs.core.println.call(null,"  ",f_19104);


var G__19105 = seq__19072_19100;
var G__19106 = chunk__19073_19101;
var G__19107 = count__19074_19102;
var G__19108 = (i__19075_19103 + (1));
seq__19072_19100 = G__19105;
chunk__19073_19101 = G__19106;
count__19074_19102 = G__19107;
i__19075_19103 = G__19108;
continue;
} else {
var temp__5804__auto___19109 = cljs.core.seq.call(null,seq__19072_19100);
if(temp__5804__auto___19109){
var seq__19072_19110__$1 = temp__5804__auto___19109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19072_19110__$1)){
var c__5525__auto___19111 = cljs.core.chunk_first.call(null,seq__19072_19110__$1);
var G__19112 = cljs.core.chunk_rest.call(null,seq__19072_19110__$1);
var G__19113 = c__5525__auto___19111;
var G__19114 = cljs.core.count.call(null,c__5525__auto___19111);
var G__19115 = (0);
seq__19072_19100 = G__19112;
chunk__19073_19101 = G__19113;
count__19074_19102 = G__19114;
i__19075_19103 = G__19115;
continue;
} else {
var f_19116 = cljs.core.first.call(null,seq__19072_19110__$1);
cljs.core.println.call(null,"  ",f_19116);


var G__19117 = cljs.core.next.call(null,seq__19072_19110__$1);
var G__19118 = null;
var G__19119 = (0);
var G__19120 = (0);
seq__19072_19100 = G__19117;
chunk__19073_19101 = G__19118;
count__19074_19102 = G__19119;
i__19075_19103 = G__19120;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19121 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19121);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19121)))?cljs.core.second.call(null,arglists_19121):arglists_19121));
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
var seq__19076_19122 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19077_19123 = null;
var count__19078_19124 = (0);
var i__19079_19125 = (0);
while(true){
if((i__19079_19125 < count__19078_19124)){
var vec__19088_19126 = cljs.core._nth.call(null,chunk__19077_19123,i__19079_19125);
var name_19127 = cljs.core.nth.call(null,vec__19088_19126,(0),null);
var map__19091_19128 = cljs.core.nth.call(null,vec__19088_19126,(1),null);
var map__19091_19129__$1 = cljs.core.__destructure_map.call(null,map__19091_19128);
var doc_19130 = cljs.core.get.call(null,map__19091_19129__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19131 = cljs.core.get.call(null,map__19091_19129__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19127);

cljs.core.println.call(null," ",arglists_19131);

if(cljs.core.truth_(doc_19130)){
cljs.core.println.call(null," ",doc_19130);
} else {
}


var G__19132 = seq__19076_19122;
var G__19133 = chunk__19077_19123;
var G__19134 = count__19078_19124;
var G__19135 = (i__19079_19125 + (1));
seq__19076_19122 = G__19132;
chunk__19077_19123 = G__19133;
count__19078_19124 = G__19134;
i__19079_19125 = G__19135;
continue;
} else {
var temp__5804__auto___19136 = cljs.core.seq.call(null,seq__19076_19122);
if(temp__5804__auto___19136){
var seq__19076_19137__$1 = temp__5804__auto___19136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19076_19137__$1)){
var c__5525__auto___19138 = cljs.core.chunk_first.call(null,seq__19076_19137__$1);
var G__19139 = cljs.core.chunk_rest.call(null,seq__19076_19137__$1);
var G__19140 = c__5525__auto___19138;
var G__19141 = cljs.core.count.call(null,c__5525__auto___19138);
var G__19142 = (0);
seq__19076_19122 = G__19139;
chunk__19077_19123 = G__19140;
count__19078_19124 = G__19141;
i__19079_19125 = G__19142;
continue;
} else {
var vec__19092_19143 = cljs.core.first.call(null,seq__19076_19137__$1);
var name_19144 = cljs.core.nth.call(null,vec__19092_19143,(0),null);
var map__19095_19145 = cljs.core.nth.call(null,vec__19092_19143,(1),null);
var map__19095_19146__$1 = cljs.core.__destructure_map.call(null,map__19095_19145);
var doc_19147 = cljs.core.get.call(null,map__19095_19146__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19148 = cljs.core.get.call(null,map__19095_19146__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19144);

cljs.core.println.call(null," ",arglists_19148);

if(cljs.core.truth_(doc_19147)){
cljs.core.println.call(null," ",doc_19147);
} else {
}


var G__19149 = cljs.core.next.call(null,seq__19076_19137__$1);
var G__19150 = null;
var G__19151 = (0);
var G__19152 = (0);
seq__19076_19122 = G__19149;
chunk__19077_19123 = G__19150;
count__19078_19124 = G__19151;
i__19079_19125 = G__19152;
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

var seq__19096 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19097 = null;
var count__19098 = (0);
var i__19099 = (0);
while(true){
if((i__19099 < count__19098)){
var role = cljs.core._nth.call(null,chunk__19097,i__19099);
var temp__5804__auto___19153__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19153__$1)){
var spec_19154 = temp__5804__auto___19153__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19154));
} else {
}


var G__19155 = seq__19096;
var G__19156 = chunk__19097;
var G__19157 = count__19098;
var G__19158 = (i__19099 + (1));
seq__19096 = G__19155;
chunk__19097 = G__19156;
count__19098 = G__19157;
i__19099 = G__19158;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__19096);
if(temp__5804__auto____$1){
var seq__19096__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19096__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19096__$1);
var G__19159 = cljs.core.chunk_rest.call(null,seq__19096__$1);
var G__19160 = c__5525__auto__;
var G__19161 = cljs.core.count.call(null,c__5525__auto__);
var G__19162 = (0);
seq__19096 = G__19159;
chunk__19097 = G__19160;
count__19098 = G__19161;
i__19099 = G__19162;
continue;
} else {
var role = cljs.core.first.call(null,seq__19096__$1);
var temp__5804__auto___19163__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19163__$2)){
var spec_19164 = temp__5804__auto___19163__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19164));
} else {
}


var G__19165 = cljs.core.next.call(null,seq__19096__$1);
var G__19166 = null;
var G__19167 = (0);
var G__19168 = (0);
seq__19096 = G__19165;
chunk__19097 = G__19166;
count__19098 = G__19167;
i__19099 = G__19168;
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
var map__19171 = datafied_throwable;
var map__19171__$1 = cljs.core.__destructure_map.call(null,map__19171);
var via = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19172 = cljs.core.last.call(null,via);
var map__19172__$1 = cljs.core.__destructure_map.call(null,map__19172);
var type = cljs.core.get.call(null,map__19172__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19172__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19172__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19173 = data;
var map__19173__$1 = cljs.core.__destructure_map.call(null,map__19173);
var problems = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19174 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19174__$1 = cljs.core.__destructure_map.call(null,map__19174);
var top_data = map__19174__$1;
var source = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19175 = phase;
var G__19175__$1 = (((G__19175 instanceof cljs.core.Keyword))?G__19175.fqn:null);
switch (G__19175__$1) {
case "read-source":
var map__19176 = data;
var map__19176__$1 = cljs.core.__destructure_map.call(null,map__19176);
var line = cljs.core.get.call(null,map__19176__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19176__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19177 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19177__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19177,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19177);
var G__19177__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19177__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19177__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19177__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19178 = top_data;
var G__19178__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19178,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19178);
var G__19178__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19178__$1);
var G__19178__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19178__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19178__$2);
var G__19178__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19178__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19178__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19178__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19178__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19179 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19179,(0),null);
var method = cljs.core.nth.call(null,vec__19179,(1),null);
var file = cljs.core.nth.call(null,vec__19179,(2),null);
var line = cljs.core.nth.call(null,vec__19179,(3),null);
var G__19182 = top_data;
var G__19182__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19182,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19182);
var G__19182__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19182__$1);
var G__19182__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__19182__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19182__$2);
var G__19182__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19182__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19182__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19182__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19182__$4;
}

break;
case "execution":
var vec__19183 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19183,(0),null);
var method = cljs.core.nth.call(null,vec__19183,(1),null);
var file = cljs.core.nth.call(null,vec__19183,(2),null);
var line = cljs.core.nth.call(null,vec__19183,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19170_SHARP_){
var or__5002__auto__ = (p1__19170_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19170_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19186 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19186__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19186,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19186);
var G__19186__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19186__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19186__$1);
var G__19186__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__19186__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19186__$2);
var G__19186__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19186__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19186__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19186__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19186__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19175__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19190){
var map__19191 = p__19190;
var map__19191__$1 = cljs.core.__destructure_map.call(null,map__19191);
var triage_data = map__19191__$1;
var phase = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19192 = phase;
var G__19192__$1 = (((G__19192 instanceof cljs.core.Keyword))?G__19192.fqn:null);
switch (G__19192__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19193_19202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19194_19203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19195_19204 = true;
var _STAR_print_fn_STAR__temp_val__19196_19205 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19195_19204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19196_19205);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19188_SHARP_){
return cljs.core.dissoc.call(null,p1__19188_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19194_19203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19193_19202);
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
var _STAR_print_newline_STAR__orig_val__19197_19206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19198_19207 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19199_19208 = true;
var _STAR_print_fn_STAR__temp_val__19200_19209 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19199_19208);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19200_19209);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19189_SHARP_){
return cljs.core.dissoc.call(null,p1__19189_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19198_19207);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19197_19206);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19192__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
