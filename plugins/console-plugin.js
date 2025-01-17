/**
 * This is a simple plugin which log on the console the crawled urls
 *
 */

function Plugin(crawler) {

  this.name = "Console-Plugin";

}


Plugin.prototype.crawl = function(result, $, callback) {
      console.log(result.statusCode + ',' + result.method + ',' +
                  result.uri + ',' + result.responseTime + ',' + (result.proxy ? result.proxy : "no-proxy") );
      callback();
}

Plugin.prototype.error = function(error, result, callback) {

     console.log(error.code + ',ERROR,' +
                 result.uri + ',no-response-time,' + (result.proxy ? result.proxy : "no-proxy"));
     callback();

};

Plugin.prototype.recrawl = function(error, result, callback) {
     console.log(error.code + ',RECRAWL(' + result.currentRetries + '),' +
                 result.uri + ',no-response-time,' + (result.proxy ? result.proxy : "no-proxy") + " delay:" + result.retryTimeout);
     callback();

};


module.exports.Plugin = Plugin;
