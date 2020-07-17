$(window).scroll(
  function(e){
    if( $(window).scrollTop() <= 0 )
      $(".explore, .navbar").addClass("at_top");
    else
      $(".explore, .navbar").removeClass("at_top");
  }
);
// --------------------

function cat_uping (cat_id, x){
  var catplace = $(cat_id).offset().left + $(cat_id).width()/2;
  // --------------------
  
  if( Math.abs( x - catplace ) < 40 ){
    $(cat_id).css("bottom", "0px");
  }
  else
    $(cat_id).css("bottom", "-50px");
};

$(window).mousemove(
  function(evt){
    var pagex = evt.pageX;
    var pagey = evt.pageY;
    
    var x = pagex - $("section#about").offset().left;
    var y = pagey - $("section#about").offset().top;
    
    var catplace = $("#cat").offset().left + $("#cat").width()/2;
    var cattop = $("#cat").offset().top;
    var cat_url = "http://awiclass.monoame.com/catpic/";
    console.log(x, y, cattop);
    // --------------------
    
    //$(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)");
    // --------------------
    
    if( y < 0 || y > $("section#about").outerHeight() ){
      $("#cross").css("opacity",0);
    }
    else{
      
      $(".r1text").css("transform","translateX("+(y/-5)+"px)");
      $(".r2text").css("transform","translateX("+(y/-10)+"px)");
      $(".r3text").css("transform","translateX("+(y/-12)+"px)");

      $(".tri1").css("transform","translateX("+(x/-5)+"px) rotate(-15deg)");
      $(".tri2").css("transform","translateX("+(x/-10)+"px) rotate(-15deg)");
      $(".tri3").css("transform","translateX("+(x/-12)+"px) rotate(-15deg)");
      $(".tri4").css("transform","translateX("+(x/-14)+"px) rotate(-15deg)");
      $(".tri5").css("transform","translateX("+(x/-16)+"px) rotate(-15deg)");
      $("#cross").css("opacity",1);
    }
      
    $("#cross").css("left",x+"px");
    $("#cross").css("top",y+"px");  
    
    
    if( pagex < catplace - 50 ){
      $("#cat").attr("src", cat_url + "cat_left.png");
    }
    else if( pagex > catplace + 50 ){
      $("#cat").attr("src", cat_url + "cat_right.png");
    }
    else{
      $("#cat").attr("src", cat_url + "cat_top.png");
    }
    
    if( pagex < catplace - 50 && pagey < cattop){
      $("#cat").attr("src", cat_url + "cat_lefttop.png");
    }
    else if( pagex > catplace + 50 && pagey < cattop){
      $("#cat").attr("src", cat_url + "cat_righttop.png");
    }
    // --------------------
    
    cat_uping("#cat_yellow", pagex);
    cat_uping("#cat_grey", pagex);
    cat_uping("#cat_blue", pagex);
  }
);
// --------------------

var vm = new Vue({
  el: "#app",
  data: {
    works: []
  },
  mounted: function(){
    var vobj=this;
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        vobj.works=JSON.parse(res);
      }
    });
  }
  
});