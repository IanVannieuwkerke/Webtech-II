
// div element maken
let brick = document.createElement('div');
// klasse toevoegen
brick.className = 'brick brick-yellow';
// de muur declareren
let wall = document.createElement('wall-1');
// div (steen) toevoegen aan div met id wall-1 (muur)
wall.appendChild(brick);


function createBrick(color)

    //div element maken
    let brick = document.createElement('div');

    // klasse toevoegen
    brick.className = 'brick brick-yellow'



function addBrickToWall(color, wallnumber) {

    // id beschrijven
    let wallId = 'wall-' + wallnumber;

    // element ophalen (juiste muur ophalen)
    let wall = document.getElementById(wallId);

    let newBrick = createBrick(color);

    //steentje toevoegen aan de muur
    wall.appendChild(newBrick);

}

function removeBrickToWall(color, wallnumber) {
   
    // id beschrijven
    let wallId = 'wall-' + wallnumber;

    // element ophalen (juiste muur ophalen)
    let wall = document.getElementById(wallId);

    let bricks = document.getElementsByClassName('brick-'+color);
    if(bricks.lenght > 0') {
        wall.removeChild(bricks[0]);
    }

}