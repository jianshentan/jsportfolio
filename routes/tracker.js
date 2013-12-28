var fs = require('fs');

exports.createLog = function() {
    var log = {
        "index"             : 0
      , "about"             : 0
      , "build"             : 0
      , "hack"              : 0
      , "work"              : 0
      , "dogcase"           : 0
      , "horsetable"        : 0
      , "vaderstool"        : 0
      , "continuousprofiles": 0
      , "popgossipusa"      : 0
      , "acronymdictionary" : 0
      , "zobeide"           : 0
      , "towergame"         : 0
      , "freebeyonce"       : 0
      , "happypoliticians"  : 0
      , "hopper"            : 0
      , "freefoodatbrown"   : 0
      , "nola"              : 0
    }
    if (!fs.existsSync("track_log"))
        fs.writeFileSync("track_log", JSON.stringify(log), "utf8");
};

exports.increment = function(project) {
    var log = JSON.parse(fs.readFileSync("track_log", "utf8"));
    log[project] = log[project] + 1; 
    fs.writeFileSync("track_log", JSON.stringify(log), "utf8");
};
