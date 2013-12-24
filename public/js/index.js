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
            case "horsetable":
                $("#nav-build").addClass("active");
                $(".content").load("html/horsetable.html", function() {initHorsetable();});
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

        $(this).click(function() {document.location.href="/"+$(this).attr("project");});
    });
};

function initShowMore(curr) {
    var projects = ["benches", "pitbullbox", "dogcase", "horsetable", "vaderstool", "continuousprofiles"];
    for (var i=0; i<projects.length; i++) {
        if (curr === projects[i]) continue;
        var holder = $("<div>");
        holder.load("html/showmore_"+projects[i]+".html", function() {
            var tile = $(this).children(".showmore-tile"); 
            $(".showmore").append(tile);
            tile.children(".showmore-overlay").hide();
            tile.hover(function() {
                $(this).children(".showmore-overlay").show();
            }, function() {
                $(this).children(".showmore-overlay").hide();
            });
            tile.click(function() {document.location.href="/"+tile.attr("project");});
        });
    }
};

function initHack() {

};

function initDogcase() {
    initShowMore("dogcase");
};

function initHorsetable() {
    initShowMore("horsetable");
};

function initVaderstool() {

};
