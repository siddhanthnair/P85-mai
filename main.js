canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundimage="racing.jpg";
car1image="car1(1).png";
car2image="download.png";
function add(){
    background_img=new Image();
background_img.onload=uploadbackground;
background_img.src=backgroundimage;
car1image_img=new Image();
car2image_img=new Image();
car1image_img.onload=uploadcar1;
car2image_img.onload=uploadcar2;
car1image_img=car1image;
car2image_img=car2image;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
car1x=10;
car1y=10;
car2x=10;
car2y=70;
car1width= 50;
car1height=50;
car2width=50;
car2height=50;
function uploadcar1(){
    ctx.drawImage(car1image_img,car1x,car1y,car1width,car1height);
  
}
    function uploadcar2(){
        ctx.drawImage(car2image_img,car2x,car2y,car2width,car2height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed=='40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed=='37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed=='39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed=='87')
    {
        car2_up();
        console.log("key W");
        
    }

    if(keyPressed=='68')
    {
        car2_down();
        console.log("key D");
    }
    if(keyPressed=='81')
    {
        car2_left();
        console.log("key Q");
    }
    if(keyPressed=='69')
    {
        car2_right();
        console.log("key E");
    }
}

function car1_up() {

    if(car1y>=0)
    {
        car1y=car1y-10;
        console.log("When up arrow is pressed, y= car1y +" +car1y);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
function car1_down() {

    if(car1y<=550)
    {
        car1y=car1y+10;
        console.log("When down arrow is pressed, y= car1y +" +car1y);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
function car1_left() {

    if(car1x>=0)
    {
        car1x=car1x-10;
        console.log("When left arrow is pressed, x= car1x +" +car1x);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}


function car2_up() {

    if(car2y>=0)
    {
        car2y=car2y-10;
        console.log("When up arrow is pressed, y= car2y +" +car2y);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
function car2_down() {

    if(car2y<=550)
    {
        car2y=car2y+10;
        console.log("When down arrow is pressed, y= car2y +" +car2y);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
function car2_left() {

    if(car1x>=0)
    {
        car2x=car2x-10;
        console.log("When left arrow is pressed, x= car1x +" +car1x);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
function car2_right() {

    if(car1y<=750)
    {
        car2x=car2x+10;
        console.log("When right arrow is pressed, x= car1x +" +car1x);
        uploadbackground();
uploadcar1();
uploadcar2();

    }
}
