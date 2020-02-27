function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#CBCADC");
	
	//brown door//
	fill("#84543E");
	rect(500, 50, 250, 500);
    rect(750, 50, 100, 500);
    
    //top & bottom panel//
	fill("#FFFAF3");
    topbot(500, 50);
    topbot(500, 530);

    //front panel//
	fill("#FFFAF3");
	fronts(350, 15);
	fronts(900, 15);
    
    //door handle//
	fill("#B0AEAA");
	circle(728, 310, 15, 15);
    rect(720, 330, 15, 180);


	noStroke();
    fill("#ECE5DC");
    
    //triangles//
	triangle(450, 50, 450, 15, 500, 50);
	triangle(900, 50, 900, 15, 850, 50);
	triangle(450, 615, 450, 550, 500, 550);
    triangle(900, 615, 850, 550, 900, 550);
    
    //inner panels//
    inrpnl(450, 50);
	inrpnl(850, 50); 
}


function inrpnl(x,y){
    let w3 = 50
    let l3 = 500

    rect(x, y, w3, l3)
    rect(x, y, w3, l3)

}

function topbot(x, y) {
    let w2 = 350;
    let l2 = 20;
    rect(x, y, w2, l2);
    rect(x, y+ 480, w2, l2);
}


 function fronts(x, y) {
    let w1 = 100;
    let l1 = 600;
    rect(x, y, w1, l1);
    rect(x, y + 6000, w1, l1);
 }


