// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
$('#chips-wrapper').remove();
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();

const url = "https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/1:1/w_1329,h_1329,c_limit/Culture-Success-Meme-Kid.jpg";
const image = $(`<img src=${url} />`)
contentsParent.prepend(image)

const message = $('<p>Get back to achieving your coding dreams</p>')
message.addClass('beautText')
contentsParent.prepend(message)

$('div').on('click', function() {
  alert('A div was clicked!');
});

$.ajax({
  method: 'GET',
  url: 'https://unsplash.it/list',
  success: function(result) {
    console.log("result -->", result)
  },
  error: function(err) {
    console.log("error -->", err)
  }
})
