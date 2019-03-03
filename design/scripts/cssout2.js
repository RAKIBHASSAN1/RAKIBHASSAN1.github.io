var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myimage.jpg.jpg') {
      myImage.setAttribute ('src','images/gimage1.jpg');
    } 
    else if(mySrc === 'images/gimage1.jpg'){
      myImage.setAttribute ('src','images/gimage2.jpg');
    }
    else if(mySrc === 'images/gimage2.jpg'){
        myImage.setAttribute ('src','images/gimage3.jpg');
      }
      else{
        myImage.setAttribute ('src','images/myimage.jpg.jpg');
      }
}