var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x  = 10;
player_y = 10;
var player_object= "";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("data:image/jpeg;base64,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", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    
canvas.add(player_object);
});
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
canvas.add(block_image_object);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed =='80'){
        block_image_width = block_image_width +10;
        block_image_height = block_image_height +10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        block_image_width = block_image_width -10;
        block_image_height = block_image_height -10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38')
    {
        up();
    }
    if(keyPressed == '40')
    {
        down();
    }
    if(keyPressed == '37')
    {
        left();
    }
    if(keyPressed == '39')
    {
        right();
    }
    if(keyPressed == '87')
    {
        new_image('wall.jpg');
    }
    if(keyPressed == '71')
    {
        new_image('ground.png');
    }
    if(keyPressed == '76')
    {
        new_image('light_green.png');
    }
    if(keyPressed == '84')
    {
        new_image('trunk.jpg');
    }
    if(keyPressed == '82')
    {
        new_image('roof.jpg');
    }
    if(keyPressed == '89')
    {
        block_x =200;
        new_image('yellow_wall.png');
    }
    if(keyPressed == '68')
    {
        block_x =350;
        new_image('dark_green.png');
    }
    if(keyPressed == '85')
    {
        block_x =600;
        new_image('unique.png');
    }
    if(keyPressed == '67')
    {
        block_x =700;
        new_image('cloud.jpg');
    }
}
function up()
{
    if(player_y >=0)
    {
player_y = player_y - block_image_height;
canvas.remove(player_object);
player_update();
    }
}
function down()
{
    if(player_y <=500)
    {
player_y = player_y + block_image_height;
canvas.remove(player_object);
player_update();
    }
}
function left()
{
    if(player_x >0)
    {
player_x = player_x - block_image_width;
canvas.remove(player_object);
player_update();
    }
}
function right()
{
    if(player_y <=850)
    {
player_x = player_x + block_image_width;
canvas.remove(player_object);
player_update();
    }
}