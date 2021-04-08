canvas = document.getElementById("brant");
ctx = canvas.getContext("2d");
car1width=100;
car1height=100;
car1image = "https://tse3.mm.bing.net/th?id=OIP.wwvcVqqln47deuKVe9Y7GAHaCe&pid=Api&P=0&w=516&h=173";
car1x = 150;
car1y = 150;

car2width =100;
car2height=100;
car2image = "https://tse2.mm.bing.net/th?id=OIP.YQZhLcqqPlgnfC6Nc48HWwHaDB&pid=Api&P=0&w=369&h=151";
car2x = 150;
car2y = 100;

backgroundimage = "http://33.media.tumblr.com/44c1ba0c640389c0482f2893e385902e/tumblr_n0sajufMVn1s9l8tco6_500.gif";

function add() {
    backgroundimgtg = new Image();
    backgroundimgtg.onload = uploadBackground;
    backgroundimgtg.src = backgroundimage;
    car1imgtg = new Image();
    car1imgtg.onload = uploadcar;
    car1imgtg.src = car1image;
}
function uploadBackground(){
    ctx.drawImage(backgroundimgtg, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1imgtg, car1x, car1y, car1width, car1height);
}

function add() {
    backgroundimgtg = new Image();
    backgroundimgtg.onload = uploadBackground;
    backgroundimgtg.src = backgroundimage;
    car2imgtg = new Image();
    car2imgtg.onload = uploadrover;
    car2imgtg.src = car2image;
}
function uploadBackground(){
    ctx.drawImage(backgroundimgtg, 0, 0, canvas.width, canvas.height);
}
function uploadcar2(){
    ctx.drawImage(car2imgtg, car2x, car2y, car2width, car2height);
}
window.addEventListener("keydown",Keydown);
function Keydown(e) {
var keypress=e.keyCode;
if(keypress == '38')
{
    car1up();

} 
if(keypress == '40')
{
    car1down();

} 
if(keypress == '37')
{
    car1left();

} 
if(keypress == '39')
{
    car1right();

} 

if(keypress == '38')
{
    car2up();

} 
if(keypress == '40')
{
    car2down();

} 
if(keypress == '37')
{
    car2left();

} 
if(keypress == '39')
{
    car2right();

} 


}

function car1up() {
if(car1y >=0) {
    car1y = car1y - 10;
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
}
function car1down() {
    if(car1y <=500) {
        car1y = car1y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    }
    function car1left() {
        if(car1x >=0) {
            car1x = car1x - 10;
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
        }
        function car1right() {
            if(car1x <=700) {
                car1x = car1x + 10;
                uploadBackground();
                uploadcar1();
                uploadcar2();
            }
            }
            
            function car2up() {
                if(car2y >=0) {
                    car2y = car2y - 10;
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                }
                }
                function car1down() {
                    if(car2y <=500) {
                        car2y = car2y + 10;
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                    }
                    function car2left() {
                        if(car2x >=0) {
                            car2x = car2x - 10;
                            uploadBackground();
                            uploadcar1();
                            uploadcar2();
                        }
                        }
                        function car2right() {
                            if(car2x <=700) {
                                car2x = car2x + 10;
                                uploadBackground();
                                uploadcar1();
                                uploadcar2();
                            }
                            }