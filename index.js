// node.js 
var microBenchmark = require('micro-benchmark');
var fetchConfig = require('zero-config');

var config = fetchConfig(__dirname);

var N = 1e6;

var d = {}
for (var i = 0; i < 1000; i++) {
    d['key'+i] = 'val'+i;
}

var result = microBenchmark.suite({
    //duration: 100, // optional 
    //maxOperations: 1000, // optional 
    specs: [
    {
        name: 'config.get(\'key500\')',
        fn: function () {
            for (var i = 0; i < N; ++i) config.get('key500');
        }
    }, {
        name: 'd[\'key500\']',
        fn: function () {
            for (var i = 0; i < N; ++i) d['key500']
        }
    }]
});

var report = microBenchmark.report(result, { chartWidth: 10 /* 30 is default */ });
console.log(report);
 
