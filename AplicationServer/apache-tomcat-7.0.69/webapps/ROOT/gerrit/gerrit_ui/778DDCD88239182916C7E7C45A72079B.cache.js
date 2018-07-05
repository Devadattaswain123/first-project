/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){function h(k){var g={};k=k.split(" ");for(var f=0;f<k.length;++f)g[k[f]]=!0;return g}f.defineMode("d",function(k,g){function h(b,c){var a=b.next();if(q[a]){var d=q[a](b,c);if(!1!==d)return d}if('"'==a||"'"==a||"`"==a)return c.tokenize=u(a),c.tokenize(b,c);if(/[\[\]{}\(\),;\:\.]/.test(a))return e=a,null;
if(/\d/.test(a))return b.eatWhile(/[\w\.]/),"number";if("/"==a){if(b.eat("+")){c.tokenize=n;for(a=!1;d=b.next();){if("/"==d&&a){c.tokenize=null;break}a="+"==d}return"comment"}if(b.eat("*"))return c.tokenize=n,n(b,c);if(b.eat("/"))return b.skipToEnd(),"comment"}if(r.test(a))return b.eatWhile(r),"operator";b.eatWhile(/[\w\$_\xa1-\uffff]/);a=b.current();return v.propertyIsEnumerable(a)?(s.propertyIsEnumerable(a)&&(e="newstatement"),"keyword"):w.propertyIsEnumerable(a)?(s.propertyIsEnumerable(a)&&(e=
"newstatement"),"builtin"):x.propertyIsEnumerable(a)?"atom":"variable"}function u(b){return function(c,a){for(var d=!1,e,f=!1;null!=(e=c.next());){if(e==b&&!d){f=!0;break}d=!d&&"\\"==e}if(f||!d&&!y)a.tokenize=null;return"string"}}function n(b,c){for(var a=!1,d;d=b.next();){if("/"==d&&a){c.tokenize=null;break}a="*"==d}return"comment"}function t(b,c,a,d,e){this.indented=b;this.column=c;this.type=a;this.align=d;this.prev=e}function m(b,c,a){var d=b.indented;b.context&&"statement"==b.context.type&&(d=
b.context.indented);return b.context=new t(d,c,a,null,b.context)}function l(b){var c=b.context.type;if(")"==c||"]"==c||"}"==c)b.indented=b.context.indented;return b.context=b.context.prev}var p=k.indentUnit,z=g.statementIndentUnit||p,v=g.keywords||{},w=g.builtin||{},s=g.blockKeywords||{},x=g.atoms||{},q=g.hooks||{},y=g.multiLineStrings,r=/[+\-*&%=<>!?|\/]/,e;return{startState:function(b){return{tokenize:null,context:new t((b||0)-p,0,"top",!1),indented:0,startOfLine:!0}},token:function(b,c){var a=
c.context;b.sol()&&(null==a.align&&(a.align=!1),c.indented=b.indentation(),c.startOfLine=!0);if(b.eatSpace())return null;e=null;var d=(c.tokenize||h)(b,c);if("comment"==d||"meta"==d)return d;null==a.align&&(a.align=!0);if(";"!=e&&":"!=e&&","!=e||"statement"!=a.type)if("{"==e)m(c,b.column(),"}");else if("["==e)m(c,b.column(),"]");else if("("==e)m(c,b.column(),")");else if("}"==e){for(;"statement"==a.type;)a=l(c);for("}"==a.type&&(a=l(c));"statement"==a.type;)a=l(c)}else e==a.type?l(c):(("}"==a.type||
"top"==a.type)&&";"!=e||"statement"==a.type&&"newstatement"==e)&&m(c,b.column(),"statement");else l(c);c.startOfLine=!1;return d},indent:function(b,c){if(b.tokenize!=h&&null!=b.tokenize)return f.Pass;var a=b.context,d=c&&c.charAt(0);"statement"==a.type&&"}"==d&&(a=a.prev);var e=d==a.type;return"statement"==a.type?a.indented+("{"==d?0:z):a.align?a.column+(e?0:1):a.indented+(e?0:p)},electricChars:"{}"}});f.defineMIME("text/x-d",{name:"d",keywords:h("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with"),
blockKeywords:h("body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with"),builtin:h("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:h("exit failure success true false null"),hooks:{"@":function(f,g){f.eatWhile(/[\w\$_]/);return"meta"}}})});
