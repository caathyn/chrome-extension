// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
$('#chips-wrapper').remove();
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();


$.ajax({
  method: 'GET',
  url: 'https://unsplash.it/list',
  success: function(result) {
    const randomNum = Math.floor(Math.random() * result.length);

    const url = "https://unsplash.it/1200/800?image=" + result[randomNum].id;
    const image = $(`<img src=${url} />`)
    contentsParent.prepend(image)
    
    const message = $('<p>Get back to achieving your coding dreams</p>')
    message.addClass('beautText')
    contentsParent.prepend(message)
    
    $('div').on('click', function() {
      alert('A div was clicked!');
    });
  },
  error: function(err) {
    console.log("error -->", err)
  }
})
