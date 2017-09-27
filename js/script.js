var blockIndex = 1;

function plusBlock(n) {
  showBlock(blockIndex += n);
}

function showBlock(n) {
  var i;
  var block = document.getElementsByClassName("right-half");
  if (n > block.length) {blockIndex = 1} 
  if (n < 1) {blockIndex = block.length}
  for (i = 0; i < block.length; i++) {
      block[i].style.display = "none"; 
  }
  block[blockIndex-1].style.display = "block"; 
}