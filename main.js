var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var playerXValue = 10;
var playerYValue = 10;
var playerObject = "";
var blockObject = "";
//faces
var avengerFaces = ["hulk_face.png","ironman_face.png","thor_face.png","spiderman_face.png"];

var faceImage = avengerFaces[ranNum];

var ranNum = Math.floor(Math.random() * 4);
//bodies
var avengerBodies = ["hulk_body.png","ironman_body.png","thor_body.png","spiderman_body.png"];

var ranNum1 = Math.floor(Math.random() * 4);

var bodyImage = avengerBodies[ranNum1];

//legs
var avengerLegs = ["hulk_legs.png","ironman_legs.png","thor_legs.png","spiderman_legs.png"];

var ranNum2 = Math.floor(Math.random() * 4);

var legImage = avengerLegs[ranNum2];
//right hands
var avengerRight_Hands = ["hulk_right_hands.png","ironman_right_hands.png","thor_right_hands.png","spiderman_right_hands.png"];

var ranNum3 = Math.floor(Math.random() * 4);

var rhandImage = avengerRight_Hands[ranNum];
//left hands
var avengerLeft_Hands = ["hulk_left_hands.png","ironman_left_hands.png","thor_left_hands.png","spiderman_left_hands.png", "captain_america_left_hand.png"];

var ranNum4 = Math.floor(Math.random() * 4);

var lhandImage = avengerLeft_Hands[ranNum];



function playerUpdate() 
{ fabric.Image.fromURL("player.png", function(Img) 
{ playerObject = Img; 
    playerObject.scaleToWidth(150); 
    playerObject.scaleToHeight(140); 
    playerObject.set({ 
        top:playerXValue, 
        left:playerYValue 
    }); 
    canvas.add(playerObject); 
});} 


function blockImage(get_image) 
{ 
    fabric.Image.fromURL(get_image, function(Img){ 
        blockObject = Img; 
        blockObject.scaleToWidth(blockWidth); 
        blockObject.scaleToHeight(blockHeight); 
        blockObject.set({ 
            top:playerXValue, 
            left:playerYValue 
        }); 
        canvas.add(blockObject); 
    }); }



    window.addEventListener("keydown", myKeydown);

    function myKeydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (e.shiftkey == true && keyPressed == '80')
        {
            console.log("P and Shift pressed together");
            blockWidth = blockWidth + 10;
            blockHeight = blockHeight + 10
            document.getElementById("currentWidth").innerHTML = blockWidth;
            document.getElementById("currentHeight").innerHTML = blockHeight;
        }
    
        if (e.shiftkey == true && keyPressed == '77')
        {
            console.log("M and Shift pressed together");
            blockWidth = blockWidth - 10;
            blockHeight = blockHeight - 10
            document.getElementById("currentWidth").innerHTML = blockWidth;
            document.getElementById("currentHeight").innerHTML = blockHeight;
        }
    
        if (keyPressed == "38")
        {
           Up();
           console.log("up");
        }
    
        if (keyPressed == "40")
        {
           Down();
           console.log("Down");
        }
    
        if (keyPressed == "39")
        {
           Right();
           console.log("Right");
        }
    
        if (keyPressed == "37")
        {
           Left();
           console.log("Left");
        }
    
        if (keyPressed == "70")
        {
           blockImage(faceImage);
           console.log("F");
        }
    
        if (keyPressed == "66")
        {
           blockImage(bodyImage);
           console.log("B");
        }

        if (keyPressed == "76")
        {
           blockImage(legImage);
           console.log("L");
        }

        if (keyPressed == "82")
        {
           blockImage(rhandImage);
           console.log("R");
        }

        if (keyPressed == "72")
        {
           blockImage(lhandImage);
           console.log("H");
        }
    }


