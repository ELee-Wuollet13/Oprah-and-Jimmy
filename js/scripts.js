$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    let colorInput = parseInt($("input:radio[name=color]:checked").val());
    let petInput = parseInt($("input:radio[name=pet]:checked").val());
    let foodTypeInput = parseInt($("input:radio[name=food-type]:checked").val());
    let total = (colorInput + petInput + foodTypeInput);
    console.log(total)

    if (total > 0) {
      $('.result').html("<h3>Oprah Winfrey!</h3><br><img src='img/oprah.jpg'></img><br><p>She's a saint!</p>");
    } else if (total < 0) {
      $('.result').html("<h3>Jimmy Fallon!</h3><br><img src='img/jimmy.jpg'></img><br><p>He's a great guy!</p>");
    } else {
      alert("Please fill out whole form");
    }

    event.preventDefault();
  });
});
