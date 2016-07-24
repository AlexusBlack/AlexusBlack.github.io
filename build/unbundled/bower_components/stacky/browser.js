!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.Stacky=t()}}(function(){return function t(n,r,e){function o(i,u){if(!r[i]){if(!n[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[i]={exports:{}};n[i][0].call(f.exports,function(t){var r=n[i][1][t];return o(r?r:t)},f,f.exports,t,n,r,e)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<e.length;i++)o(e[i]);return o}({1:[function(t,n,r){!function(n){"use strict";function r(t,r){r=a(r||{},n.defaults);var o=Array.isArray(t)?t:f(t);o=e(o,r);var c=i(o,r),l=o.map(function(t){var n=t.method||r.methodPlaceholder,e=r.indent+u(c-n.length),o=[r.styles.location(t.location),r.styles.line(t.line)];"column"in t&&o.push(r.styles.column(t.column));var a=o.join(":"),i=e+r.styles.method(n)+" at "+a;return t.important||(i=r.styles.unimportant(i)),i});return l.join("\n")}function e(t,n){for(var r,e=[],o=0;r=t[o];o++)n.filter(r)||(r.location=c(r.location,n),r.important=l(r,n),e.push(r));return e}function o(t){return t}function a(t,n){var r=Object.create(n);return Object.keys(t).forEach(function(e){var o=t[e];"object"!=typeof o||Array.isArray(o)||(o=a(o,n[e])),r[e]=o}),r}function i(t,n){for(var r,e=n.methodPlaceholder.length,o=0;r=t[o];o++)e=Math.min(n.maxMethodPadding,Math.max(e,r.method.length));return e}function u(t){for(var n="",r=0;r<t;r++)n+=" ";return n}function c(t,n){if(n.locationStrip)for(var r,e=0;r=n.locationStrip[e];e++)t=t.replace(r,"");return t}function l(t,n){if(n.unimportantLocation)for(var r,e=0;r=n.unimportantLocation[e];e++)if(t.location.match(r))return!1;return!0}var f=n.parse||t("./parsing").parse;n.defaults={maxMethodPadding:40,indent:"",methodPlaceholder:"<unknown>",locationStrip:[],unimportantLocation:[],filter:function(){return!1},styles:{method:o,location:o,line:o,column:o,unimportant:o}};var s=new Function("try {return this===global;}catch(e){return false;}");if(s()){var p=t("chalk");n.defaults.styles={method:p.magenta,location:p.blue,line:p.cyan,column:p.cyan,unimportant:p.dim}}n.clean=e,n.pretty=r}("undefined"!=typeof n?n.exports:this.Stacky=this.Stacky||{})},{"./parsing":4,chalk:void 0}],2:[function(t,n,r){"use strict";var e=t("./formatting"),o=t("./normalization"),a=t("./parsing");n.exports={normalize:o.normalize,parse:a.parse,pretty:e.pretty,formatting:e,normalization:o,parsing:a}},{"./formatting":1,"./normalization":3,"./parsing":4}],3:[function(t,n,r){!function(n){"use strict";function r(t,n){if(t.parsedStack)return t;var r=t.message||t.description||t||"<unknown error>",a=[];try{a=e(t.stack||t.toString())}catch(t){}if(0===a.length&&t.fileName&&a.push({method:"",location:t.fileName,line:t.lineNumber,column:t.columnNumber}),!n||!n.showColumns)for(var i,u=0;i=a[u];u++)delete i.column;var c=r;a.length>0&&(c=c+"\n"+o(a,n));var l=Object.create(Error.prototype);return l.message=r,l.stack=c,l.parsedStack=a,l}var e=n.parse||t("./parsing").parse,o=n.pretty||t("./formatting").pretty;n.normalize=r}("undefined"!=typeof n?n.exports:this.Stacky=this.Stacky||{})},{"./formatting":1,"./parsing":4}],4:[function(t,n,r){!function(t){"use strict";function n(t){var n=t.split("\n"),i=a(n.map(o));if(i.length===n.length)return i;var u=a(n.map(e));if(u.length>0)return u;var c=a(n.map(r));if(c.length>0)return c;throw new Error("Unknown stack format: "+t)}function r(t){var n=t.match(i);return n?{method:n[1]||"",location:n[2]||"",line:parseInt(n[3])||0,column:parseInt(n[4])||0}:null}function e(t){var n=t.match(u)||t.match(c);if(!n)return null;var r=n[3].match(l);if(!r)return null;var e=n[2]||"";return n[1]&&(e="eval at "+e),{method:e,location:r[1]||"",line:parseInt(r[2])||0,column:parseInt(r[3])||0}}function o(t){var n=t.match(f);return n?{method:n[1]||"",location:n[2]||"",line:parseInt(n[3])||0,column:parseInt(n[4])||0}:null}function a(t){var n=[];return t.forEach(function(t){t&&n.push(t)}),n}var i=/^(?:([^@]*)@)?(.*?):(\d+)(?::(\d+))?$/,u=/^\s*(eval )?at (.*) \((.*)\)$/,c=/^\s*at()() (\S+)$/,l=/^\(?([^\(]+):(\d+):(\d+)\)?$/,f=/^\s*(.+) at (.+):(\d+):(\d+)$/;t.parse=n,t.parseGeckoLine=r,t.parseV8Line=e,t.parseStackyLine=o}("undefined"!=typeof n?n.exports:this.Stacky=this.Stacky||{})},{}]},{},[2])(2)});