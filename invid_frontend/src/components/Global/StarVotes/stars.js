/* eslint-disable no-undef */
/* eslint-disable func-names */

const StarJQuery = clickHandler => {
  $("#stars li")
    .on("mouseover", function() {
      const onStar = parseInt($(this).data("value"), 10);

      $(this)
        .parent()
        .children("li.star")
        .each(function(e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function() {
      $(this)
        .parent()
        .children("li.star")
        .each(function(e) {
          $(this).removeClass("hover");
        });
    });

  $(".seleccion li").on("click", function() {
    const onStar = parseInt($(this).data("value"), 10);
    const stars = $(this)
      .parent()
      .children("li.star");
    const video = $(this).attr("id");
    console.log(`este es el id del video: ${video}`);

    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // for (let i = 0; i < onStar; i++) {
    const ratingValue = parseInt(
      $("#stars li.selected")
        .last()
        .data("value"),
      10
    );
    // console.log(`onStar: ${i} rating value: ${ratingValue}`);
    let msg = "";
    if (ratingValue === 1) {
      msg = `vota ${ratingValue} estrella`;
    } else {
      msg = `vota ${ratingValue} estrellas`;
    }
    const rb = document.createElement("button");
    rb.setAttribute("id", "ratingButton");
    rb.innerHTML = msg;
    rb.value = ratingValue;
    rb.className = "btn btn-outline-primary votoEstrella selected";
    rb.onclick = clickHandler;
    /*
    const ratingButton = $("<button>", {
      class: "btn btn-outline-primary votoEstrella selected"
    });
    */

    $(".rating-stars").replaceWith(rb);

    /*
    $(stars[ratingValue])
      .parent()
      .parent()
      .html(
        `<button class="btn btn-outline-primary votoEstrella" type="button" id ="${ratingValue}">${msg}</button>`
      )
      .addClass("selected")
      .click(clickHandler);
    */
    // }
  });
};

export default StarJQuery;
/*
  $('.votoEstrella').on('click', function(){
    $(this).removeClass('btn-outline-primary').addClass('btn-secondary');
   });

  function addMessageVote() {
    setTimeout(function(){ alert(`Ya le has dado ${ratingValue} a este video`) }, 1000);
  } */
