// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();

const newImgNode = $('<img id="the-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/SuccessKid.jpg/256px-SuccessKid.jpg">');
contentsParent.prepend(newImgNode);
const dreamText = $(<p>Get back to achieving your coding dreams</p>)
newImgNode.prepend(dreamText);