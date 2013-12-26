$(document).ready(function() {
    $(".nav").load("html/nav.html", function() {
        // start routing once navbar is done
        var route = window.location.pathname.split('/');
        route = route[route.length-1];
        switch (route) {
            // BUILD
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
            case "vaderstool":
                $("#nav-build").addClass("active");
                $(".content").load("html/vaderstool.html", function() {initVaderstool();});
                break;
            case "continuousprofiles":
                $("#nav-build").addClass("active");
                $(".content").load("html/continuousprofiles.html", function() {initContinuousprofiles();});
                break;

            // HACK
            case "hack":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack();});
                break;
            case "popgossipusa":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("popgossipusa");});
                break;
            case "acronymdictionary":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("acronymdictionary");});
                break;
            case "towergame":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("towergame");});
                break;
            case "freebeyonce":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("freebeyonce");});
                break;
            case "zobeide":
                $("#nav-hack").addClass("active");
                $(".content").load("html/zobeide.html", function() {initZobeide();});
                break;

            // WORK
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
    var projects = [/*"benches", "pitbullbox",*/ "dogcase", "horsetable", "vaderstool", "continuousprofiles"];
    var projectInfo = {
        /* "benches" : {
            "path"  : "/images/tiles/benches.png"
          , "title" : "Benches"
          , "desc"  : "Some text about benches here."
        }
      , "pitbullbox" : {
            "path"  : "/images/tiles/pitbullbox.png"
          , "title" : "Pitbull Box"
          , "desc"  : "Some text about pitbull here."
        }
      , */ 
        "dogcase" : {
            "path"  : "/images/tiles/dogcase.png"
          , "title" : "Dogcase"
          , "desc"  : "Some text about dogcase here."
        }
      , "horsetable" : {
            "path"  : "/images/tiles/horsetable.png"
          , "title" : "Horse Table"
          , "desc"  : "Some text about horse table here."
        }  
      , "vaderstool" : {
            "path"  : "/images/tiles/vaderstool.png"
          , "title" : "Vader Stool"
          , "desc"  : "Some text about Vader here."
        }
      , "continuousprofiles" : {
            "path"  : "/images/tiles/continuousprofiles.png"
          , "title" : "Continuous Profiles"
          , "desc"  : "Some text about continuous profiles here."
        }
    };

    for (var i=0; i<projects.length; i++) {
        if (curr === projects[i]) {continue};
        var holder = $("<div>");

        holder.load("html/showmore.html", function(j) {
            return function() {
                var tile = $(this).children(".showmore-tile"); 

                var projectName = projects[j];
                var projectPath = projectInfo[projectName].path;
                var projectTitle = projectInfo[projectName].title;
                var projectDesc = projectInfo[projectName].desc;

                tile.attr("project", projects[j]);
                tile.children(".showmore-image").attr("src", projectPath);
                tile.children(".showmore-overlay")
                    .children(".showmore-title").html(projectTitle);
                tile.children(".showmore-overlay")
                    .children(".showmore-desc").html(projectDesc);

                $(".showmore").append(tile);
                tile.children(".showmore-overlay").hide();

                tile.hover(function() {
                    $(this).children(".showmore-overlay").show();
                }, function() {
                    $(this).children(".showmore-overlay").hide();
                });
                tile.click(function() {document.location.href="/"+tile.attr("project");});
            }
        }(i));
    }
};

function initHack(project) {
    $(".option-btn").each(function(i) {
        $(this).click(function() {
            var projectWrapper = $(this).parent().parent().parent();
            if (projectWrapper.attr("project") === "zobeide") {
                document.location.href="/"+projectWrapper.attr("project");
            } else {
                projectWrapper.children(".desc").slideToggle();
                var downPath = "/images/misc/dropdown_down.png";
                var newPath = ($(this).attr("src") == downPath) ? "/images/misc/dropdown_up.png" : "/images/misc/dropdown_down.png";
                $(this).attr("src", newPath);
            }
        });
    });
    
    if (project) {
        $(".entry").each(function(i) {
            if ($(this).attr("project") === project) {
                $(this).children(".desc").slideToggle(function() {
                    $(window).scroll(0, $(this).offset().top);
                    $('html,body').animate(
                        { scrollTop: $(this).parent().offset().top - 80 } // 80 is the top margin
                      , 'slow');
                });
            }
        });
    }
};

function initDogcase() {
    initShowMore("dogcase");
};

function initHorsetable() {
    initShowMore("horsetable");
};

function initContinuousprofiles() {
    initShowMore("continuousprofiles");
};

function initVaderstool() {
    initShowMore("vaderstool");
};
