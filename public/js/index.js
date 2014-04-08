$(document).ready(function() {
    $(".nav").load("html/nav.html", function() {
        // show footer
        $(".footer").show();

        // start routing once navbar is done
        var route = window.location.pathname.split('/');
        route = route[route.length-1];
        switch (route) {
           
            // BUILD
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
            case "pitbullbox":
                $("#nav-build").addClass("active");
                $(".content").load("html/pitbullbox.html", function() {initPitbullbox();});
                break;
            case "rugbench":
                $("#nav-build").addClass("active");
                $(".content").load("html/rugbench.html", function() {initRugbench();});
                break;
            case "diybench":
                $("#nav-build").addClass("active");
                $(".content").load("html/diybench.html", function() {initDiybench();});
                break;
            case "sheetsteelseats":
                $("#nav-build").addClass("active");
                $(".content").load("html/sheetsteelseats.html", function() {initSheetsteelseats();});
                break;



            // HACK
            case "hack":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack();});
                break;
            case "peoplesmagazinegenerator":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("peoplesmagazinegenerator");});
                break;
            case "popgossipusa":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("popgossipusa");});
                break;
            case "acronymdictionary":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("acronymdictionary");});
                break;
            case "zobeide":
                $("#nav-hack").addClass("active");
                $(".content").load("html/zobeide.html", function() {initHack("zobeide");});
                break;
            case "towergame":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("towergame");});
                break;
            case "freebeyonce":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("freebeyonce");});
                break;
            case "happypoliticians":
                $("#nav-hack").addClass("active");
                $(".content").load("html/hack.html", function() {initHack("happypoliticians");});
                break;
           

            // WORK
            case "work":
                $("#nav-work").addClass("active");
                $(".content").load("html/work.html", function() {initWork();});
                break;
            case "hopper":
                $("#nav-work").addClass("active");
                $(".content").load("html/hopper.html", function() {initWork();});
                break;
            case "freefoodatbrown":
                $("#nav-work").addClass("active");
                $(".content").load("html/freefoodatbrown.html", function() {initWork();});
                break;
            case "nola":
                $("#nav-work").addClass("active");
                $(".content").load("html/nola.html", function() {initWork();});
                break;

            // ABOUT
            case "":
                $(".content").load("html/about.html", function() {initAbout();});
                $(".footer").hide();
                break;
            case "about":
                $(".content").load("html/about.html", function() {initAbout();});
                $(".footer").hide();
                break;
        }

        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

        // activate click and hover on navbtns
        $(".navbtn").each(function(i) {
            $(this).click(function() {
                document.location.href="/"+$(this).attr("category");
            });
            if (!$(this).hasClass("active")) {
                $(this).hover(function() {
                    $(this).addClass("active");       
                }, function() {
                    $(this).removeClass("active");
                });
            }
        });

    });
});

function initAbout() {
    $(".nav").css({position: "relative", top: "260px"});
    $(".content").css("margin-top", "0px");
    $(".about > b").css("margin-top", "30px");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".nav").css("top", "400px");
    }

};

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
    var projects = ["sheetsteelseats", "diybench", "rugbench", "pitbullbox", "dogcase", "horsetable", "vaderstool", "continuousprofiles"];
    var projectInfo = {
        "sheetsteelseats" : {
            "path"  : "/images/tiles/sheetsteelseats.png"
          , "title" : "Sheet Steel Seats"
          , "desc"  : "A set of obnoxiously designed furniture seating."
        }
      , "diybench" : {
            "path"  : "/images/tiles/diybench.png"
          , "title" : "DIY Bench"
          , "desc"  : "A minimalist set of DIY benches."
        }
      , "rugbench" : {
            "path"  : "/images/tiles/rugbench.png"
          , "title" : "Rug Bench"
          , "desc"  : "A fun cylindrical rug bench!"      
        }
      , "pitbullbox" : {
            "path"  : "/images/tiles/pitbullbox.png"
          , "title" : "Pitbull Box"
          , "desc"  : "An easily transportable and beautifully crafted Pitbull shrine."
        }
      , "dogcase" : {
            "path"  : "/images/tiles/dogcase.png"
          , "title" : "Dogcase"
          , "desc"  : "Transport your dogs in this iconic piece of luggage."
        }
      , "horsetable" : {
            "path"  : "/images/tiles/horsetable.png"
          , "title" : "Horse Table"
          , "desc"  : "A multi-purpose furniture objects. Also a horse."
        }  
      , "vaderstool" : {
            "path"  : "/images/tiles/vaderstool.png"
          , "title" : "Vader Stool"
          , "desc"  : "Sit on the face of evil."
        }
      , "continuousprofiles" : {
            "path"  : "/images/tiles/continuousprofiles.png"
          , "title" : "Continuous Profiles"
          , "desc"  : "Continuous profiles (profile spun in 360-degrees) of various people."
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

function initWork(project) { initHack(project); }; // currently just a hack
function initHack(project) {
    /*
     * -- DEPRECATED --
    $(".dropdown-btn").each(function(i) {
        $(this).click(function() {
            var projectWrapper = $(this).parent().parent().parent();

            // change URL (for server)
            if (!projectWrapper.children(".desc").is(":visible"))
                $.get("/"+projectWrapper.attr("project"))

            projectWrapper.children(".desc").slideToggle();
            var downImgPath = "/images/misc/dropdown_down.png";
            var newImgPath = ($(this).attr("src") == downImgPath) ? 
                "/images/misc/dropdown_up.png" : "/images/misc/dropdown_down.png";
            $(this).attr("src", newImgPath);
        });
    });
    
    $(".learnmore-btn").each(function(i) {
        $(this).click(function() {
            var projectWrapper = $(this).parent().parent().parent();
            document.location.href="/"+projectWrapper.attr("project");
        });
    });
    */

    $(".entry").each(function(i) {
        $(this).click(function() {
            if ($(this).attr("entry") == "link")
                document.location.href="/"+$(this).attr("project");
            else {
                var projectWrapper = $(this);

                // change URL (for server)
                if (!projectWrapper.children(".desc").is(":visible"))
                    $.get("/"+projectWrapper.attr("project"))

                projectWrapper.children(".desc").slideToggle();
                var btn = projectWrapper.find(".option-btn");
                var downImgPath = "/images/misc/dropdown_down.png";
                var newImgPath = btn.attr("src") == downImgPath ? 
                    "/images/misc/dropdown_up.png" : "/images/misc/dropdown_down.png";
                btn.attr("src", newImgPath);
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

function initSheetsteelseats() {
    initShowMore("sheetsteelseats");
};

function initDiybench() {
    initShowMore("diybench");
};

function initRugbench() {
    initShowMore("rugbench");
};

function initPitbullbox() {
    initShowMore("pitbullbox");
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
