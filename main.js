// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();

const url = "https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/1:1/w_1329,h_1329,c_limit/Culture-Success-Meme-Kid.jpg";
contentsParent.prepend('<img src="https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/1:1/w_1329,h_1329,c_limit/Culture-Success-Meme-Kid.jpg" />')
