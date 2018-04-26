//DBL JS
var getJSON = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};

getJSON('https://discordbots.org/api/bots/339112443743698947/stats').then(function (data) {
    document.getElementById("server").innerHTML = data.server_count;
    document.getElementById("shards").innerHTML = data.shard_count;

});