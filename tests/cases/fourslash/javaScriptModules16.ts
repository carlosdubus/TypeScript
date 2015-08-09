///<reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: myMod.js
//// exports.n = 3;
//// exports.s = 'foo';
//// exports.b = true;

// @Filename: consumer.js
//// var x = require('myMod');
//// x/**/;

goTo.file('consumer.js');
goTo.marker();
edit.insert('.');
verify.completionListContains("n", /*displayText:*/ undefined, /*documentation*/ undefined, "property");
verify.completionListContains("s", /*displayText:*/ undefined, /*documentation*/ undefined, "property");
verify.completionListContains("b", /*displayText:*/ undefined, /*documentation*/ undefined, "property");
edit.insert('n.');
verify.completionListContains("toFixed", /*displayText:*/ undefined, /*documentation*/ undefined, "method");
