let box_position;
let box_size;
let box_velocity;
let edge_margin;

function setup() {
    createCanvas(1280, 720);
    rectMode(CORNER);
    stroke(0);
    strokeWeight(2);
    box_position = createVector(50, 50);
    box_size = createVector(50, 50);
    box_velocity = createVector(20, 20);
    edge_margin = createVector(5, 5);
}
function draw() {
    background(220);
    rect(box_position.x, box_position.y, box_size.x, box_size.y);
    box_position.x += box_velocity.x;
    box_position.y += box_velocity.y;

    if ((box_position.y + box_size.y > height - edge_margin.y) || (box_position.y < edge_margin.y)) {
        box_velocity.y *= -1;
        randomize_box_color();
    }

    if ((box_position.x + box_size.x > width - edge_margin.x) || (box_position.x < edge_margin.x)) {
        box_velocity.x *= -1;
        randomize_box_color();
    }
}
function randomize_box_color() {
    fill(random(255), random(255), random(255));
}