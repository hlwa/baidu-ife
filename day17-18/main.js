//定义变量和函数

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";

let insertX = ["怪兽威利","大老爹","圣诞老人"];
let insertY = ["肯德基","迪士尼乐园","白宫"];
let insertZ = ["自燃了","在人行道化成了一坨泥","变成一条鼻涕虫爬走了"];

//事件监听器和函数定义

randomize.onclick = result;

function result() {
    let newStory =storyText;
    newStory = newStory.replace(':inserta:',randomValueFromArray(insertX));
    newStory = newStory.replace(':inserta:',randomValueFromArray(insertX));
    newStory = newStory.replace(':insertb:',randomValueFromArray(insertY));
    newStory = newStory.replace(':insertc:',randomValueFromArray(insertZ));

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("李雷",name);  
  }

  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);

  }

 
  story.textContent = newStory;
  story.style.visibility = 'visible';
}