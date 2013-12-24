$(document).ready(function() {
    $(".nav").load("html/nav.html", function() {
        // start routing once navbar is done
        var route = window.location.pathname.split('/');
        route = route[route.length-1];
        switch (route) {
            case "":
                $(".content").load("html/build.html", function() {initBuild();});
                $("#nav-build").addClass("active");
                break;
            case "build":
                $("#nav-build").addClass("active");
                $(".content").load("html/build.html", function() {initBuild();});
                break;
            case "dogcase":
                $("#nav-build").addClass("active");
                $(".content").load("html/dogcase.html", function() {initDogcase();});
                break;
            case "hack":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack();});
                break;
            case "work":
                $("#nav-work").addClass("active");
                break;
            case "about":
                $("#nav-about").addClass("active");
                break;
        }

        // activate nav buttons
        $("#nav-build").click(function() { document.location.href="/build"; });
        $("#nav-hack").click(function() { document.location.href="/hack"; });
        $("#nav-work").click(function() { document.location.href="/work"; });
        $("#nav-about").click(function() { document.location.href="/about"; });
    });
     
});

function initBuild() {
    $(".hero-overlay").hide();
    $(".hero").each(function(i) {
        $(this).hover(function() {
            $(this).children(".hero-overlay").show();
        }, function() {
            $(this).children(".hero-overlay").hide();
        });
    });
};

function initHack() {

};

function initShowMore() {
    var projects = ["benches", "pitbullbox", "dogcase", "horsetable", "vaderstool"];
    for (var i=0; i<projects.length; i++) {
        var tile = $("<div>");
        tile.load("html/showmore_"+projects[i]+".html", function() {
            $(".showmore").append($(this).children(".showmore-tile"));
        });
    }
    
};

function initDogcase() {
    initShowMore();
};

function initHorsetable() {

};

function initVaderstool() {

};
