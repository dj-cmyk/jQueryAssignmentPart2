
$('#submitBtn').on("click", function(e){
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    console.log(title, rating);
    if (title.length >= 2 && (rating >=0 && rating <=10)) {
        let listItem = `<li> TITLE: ${title} - RATING: ${rating}  -  <span class="material-icons" id="removebtn">remove_circle_outline</span></li>`;

        $('#movieRatingDisplay').append(listItem)
        $('#title').val('')
        $('#rating').val('')
    } else {
        alert("not valid input");
    }

    
})


$('ul').on("click", "li span", function(){
    $(this).parent().remove();
})

