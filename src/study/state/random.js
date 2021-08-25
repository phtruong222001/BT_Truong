
function getRandomColor(){
    const colorlist= ['deeppink' , 'green', 'red' , 'blue'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return colorlist[randomIndex];
  }

  export default getRandomColor