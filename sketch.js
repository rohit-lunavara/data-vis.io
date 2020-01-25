function setup() {
	createCanvas(800, 800); // make an HTML canvas element width x height pixels
}

function draw() {
	background(255);
	textSize(32);
	text(hour(), 10, 30);
	text(minute(), 10, 60);
	text(second(), 10, 90);

	translate(width/2, height/2);
	xval = 40;
	yval = 40;

	angleMode(DEGREES);
	rotate(225);
	anglesec = 360 / second();
	anglemin = 360 / minute();
	anglehour = 360 / hour();
	phi = 1.61803398;
	secscl = 4.3;
	minscl = 1.9;
	hourscl = 1;
	
	// dark, bright, dark color scheme
	
	push();
	for ( let i = 0; i < second(); i++) {
		stroke(9, 9, 9, 127);
		strokeWeight(3);
		strokeCap(PROJECT);

		rotate(anglesec);
		line(0, 0, xval * secscl + phi * i, yval * secscl + phi * i);
	}
	pop();

	push();
	for ( let i = 0; i < minute(); i++) {
		stroke(239, 104, 43, 191);
		strokeWeight(7);
		strokeCap(PROJECT);

		rotate(anglemin);
		line(0, 0, xval * minscl + phi * i, yval * minscl + phi * i);
	}
	pop();

	push();
	for ( let i = 0; i < hour(); i++) {
		stroke(9, 9, 9, 255);
		strokeWeight(10);
		strokeCap(PROJECT);

		rotate(anglehour);
		line(0, 0, xval * hourscl + phi * i, yval * hourscl + phi * i);
	}
	pop();
}
