jQuery(document).ready(function($){$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})}),$(".project").click(function(){$(".project-overlay").fadeIn(400),$(".main-nav, .main-nav-scrolled").fadeOut(400),$("body").addClass("no_scroll")}),$(".close").click(function(){$("body").removeClass("no_scroll"),$(".project-overlay").fadeOut(400),$(".main-nav, .main-nav-scrolled").fadeIn()}),$(".project-overlay").click(function(){$("body").removeClass("no_scroll"),$(".project-overlay").fadeOut(400),$(".main-nav, .main-nav-scrolled").fadeIn()});var t=$(".main-nav"),e="main-nav-scrolled",r=$("#landing").height();$(window).scroll(function(){$(this).scrollTop()>r?t.addClass(e):t.removeClass(e)})});for(var project=$(".project:first").remove(),i=0;i<projects.length;i++){var tempProject=project.clone();tempProject.attr("data-id",projects[i].id),tempProject.find("img").attr("src",projects[i].thumbUrl),$("#recent-work").append(tempProject)}$(".project").click(function(){$(".detailed-view-wrap").find("img").attr("src","");for(var t=$(this).attr("data-id"),e=0;e<projects.length;e++)if(projects[e].id==t){$(".project-details-wrap").find("ul").html(""),$(".project-details-wrap").find("img").attr("src",projects[e].imgUrl),$(".project-details-wrap").find("h2").html(projects[e].title),$(".summary").find(".description").html(projects[e].description),$(".github").find("a").attr("href",projects[e].gitHub),$(".site").find("a").attr("href",projects[e].url);for(var r="",o=0;o<projects[e].technologies.length;o++)r=r+"  "+projects[e].technologies[o];$(".project-details-wrap").find(".technologies-list").html(r)}});