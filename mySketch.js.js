var inputElement,sliderElement,buttonElement,colorPickerElement,radioElement

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(100);
	inputElement = createInput("Hello");
	inputElement.position(50,50)
	click = createButton("Click")
	sliderElement = createSlider(50,100,60,0.01)
	sliderElement.position(50,100)
	buttonElement = createButton("Go Crazy")
	buttonElement.position(50,150)
	buttonElement.mousePressed(goCrazy)
	colorPickerElement = createColorPicker("#84DCCF")
	colorPickerElement.position(50,200)
	radioElement = createRadio()
	radioElement.position(50,200)
	radioElement.option("normal")
	radioElement.option("rotate")
	radioElement.option("scale")
	radioElement.style("background-color","white")
	radioElement.selected("normal")
	//click.position(inputElement.size,500)
}
function goCrazy(){
	//print("Crazy")
	if(randomValue>0){
		randomValue = 0
	}else{
		randomValue=1
	}
}
var randomValue = 0

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
	background(100)
	let txt = inputElement.value()
	let sliderValue = sliderElement.value()
	let selectedColor = colorPickerElement.value()
	let mode = radioElement.value()
	
	//print(sliderValue)
	//fill(txt)
	textSize(sliderValue)
	textStyle(BOLD)
	let textLength = textWidth(txt)+5
	let lineCount = 0
	for(var i=0;i<=width;i+=sliderValue){
		push()
			lineCount++
			if(lineCount%2==0){
				fill(selectedColor)
				translate(-50,0)
			}else{
				fill("white")
			}
			for(var o = 0;o<=height;o+=textLength){
				push()
					translate(o+random(-randomValue,randomValue),i+random(-randomValue,randomValue))
					if(mode == "rotate"){
						rotate(cos(frameCount/20)+i/10)
					}else if(mode == "scale"){
						scale(sin(frameCount/20)+0.5)
					}
					text(txt,0,0)
				pop()
			}
		pop()
	}
}