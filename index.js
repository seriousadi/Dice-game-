let dices = []
for (let i = 1; i < 7; i++){
    dices.push('dice'+i+'.png')
}

function ranNumber(){
    let num = Math.floor(Math.random() * 6)
    return num
}
let left = ranNumber()
let right =ranNumber()
document.querySelector('.img1').setAttribute('src', 'images/'+(dices[left]));
 document.querySelector('.img2').setAttribute('src', 'images/'+(dices[right]));
if (left> right){
    document.querySelector('.container h1').innerHTML = '🚩Left win'
}
else{
    document.querySelector('.container h1').innerHTML = 'Right win🚩'
}