// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
const contents = $('#contents');
const contentsParent = contents.parent();
contents.remove();

contentsParent.prepend(newImgNode);
const dreamText = $(<p>Get back to achieving your coding dreams</p>)
