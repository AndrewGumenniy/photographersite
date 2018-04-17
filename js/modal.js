$(document).ready(function() {
  // lazy loading for images - jquery plugin
  $(function() {
    $(".lazy").lazy();
  });
  // loading big copie for image when we click on the small one
  $(".photos img").on("click", function() {
    var src = $(this).attr("large-img");
    var img = '<img src="' + src + '" class="showimage"/>';

    var index = +$(this).attr("id");
    var html = "";
    html += img;
    html += '<span class="controls next" id="' + (index + 1) + '"></span>';
    html += '<span class="controls prev" id="' + (index - 1) + '"></span>';
    $("#myModal").on("show.bs.modal", function() {
      $("#myModal").html(html);
      var total = $(".photos div img[id]").length;
      if (index == 0) {
        $("span.prev").hide();
      }
      if (index == total - 1) {
        $("span.next").hide();
      }
    });
   
  });
  // controls for the modal window
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {$('#myModal').modal('hide');}  // esc

    var total = $(".photos div img[id]").length;
    var prevIndex = $('.controls.prev').attr("id");
    var nextIndex = $('.controls.next').attr("id");

    if(e.keyCode == 37&&prevIndex > -1) {
      var indexid = prevIndex;
      slider(indexid,total);
    } 
    if(e.keyCode == 39&&nextIndex < total) {
      var indexid = nextIndex;
      slider(indexid,total);
    }

    $(".photos div img[id]").each(function(index, element) {
      if ($(element).attr("id") == indexid) {
        var src = $(this).attr("large-img");
        $(".modal img").attr("src", src);
      }
    });

  });
  function slider(indexid, total){
    this.indexid = indexid;
    this.total = total;
    var newPrevIndex = parseInt(indexid) - 1;
    var newNextIndex = parseInt(newPrevIndex) + 2;
    $(this).attr("id", newPrevIndex);
    $("span.next").attr("id", newNextIndex);
    $("span.prev").attr("id", newPrevIndex);
   
    if (newNextIndex==total) {
      $("span.next").hide();
    } else {
      $("span.next").show();
    }
    if (newPrevIndex <= -1) {
      $("span.prev").hide();
    } else {
      $("span.prev").show();
    }
  }
  $(document).on("click", "span.controls", function() {
    var indexid = $(this).attr("id");
    var newPrevIndex = parseInt(indexid) - 1;
    var newNextIndex = parseInt(newPrevIndex) + 2;

    if ($(this).hasClass("prev")) {
      $(this).attr("id", newPrevIndex);
      $("span.next").attr("id", newNextIndex);
    } else {
      $(this).attr("id", newNextIndex);
      $("span.prev").attr("id", newPrevIndex);
    }

    var total = $(".photos div img[id]").length;

    if (total === newNextIndex) {
      $("span.next").hide();
    } else {
      $("span.next").show();
    }
    if (newPrevIndex === -1) {
      $("span.prev").hide();
    } else {
      $("span.prev").show();
    }

    $(".photos div img[id]").each(function(index, element) {
      if ($(element).attr("id") == indexid) {
        var src = $(this).attr("large-img");
        $(".modal img").attr("src", src);
      }
    });

    return false;
  });
  // hide opening modal window with big picture for small screens
  if ($(window).width() < 640) {
    $(".photos img").removeAttr("data-toggle");
  }
  
});