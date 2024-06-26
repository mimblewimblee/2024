function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {

	// fill(0, 1)
	// rect(0, 0, width, height)

	translate(width/2, height/2)

	const num = 1200
	const t = frameCount * TAU / num

	const raggio = min(width/2, height/2)
	const A = 3
	const B = 4

	const x = cos(t*A) * raggio
	const y = sin(t*B) * raggio

	const r = (cos(t * 10.13) * 0.5 + 0.5) * 100 + 125
	const g = (cos(t * 11.21) * 0.5 + 0.5) * 40
	const b = (cos(t * 12.43) * 0.5 + 0.5) * 255

	noStroke()
	fill(r, g, b)
	ellipse(x, y, 300, 300)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	background(0)
}

function keyPressed() {

}