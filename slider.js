

const images =[
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    
]
let imgIndex = 0
const imgElement = document.getElementById('nature');
setInterval(()=>{
  if (imgIndex === images.length){
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  console.log(imgUrl,imgIndex);
  imgElement.setAttribute('src', imgUrl);
  imgIndex++;
},1500

);