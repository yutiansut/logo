var pixel= require('pixel');
var svg= require('pixel-to-svg');
pixel.parse('./QUANTAXIS-white.png')
.then(function(images){
  console.log(svg.convert(images[0]));
});