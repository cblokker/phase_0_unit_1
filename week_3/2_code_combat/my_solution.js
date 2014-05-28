// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// ***RESCUE MISSION***
//
// _pseudocode_
// move down x2
// move right
// move up x2
// move right x3
// move down x2
// attack!
//
// _Solution_
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();


// ***GRAB THE MUSHROOM***
//
// _pseudocode_
// move up
// mover right
// move left
// move up
// attack!
//
// _Solution_
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


// ***DRINK ME***
//
// _pseudocode_
// move right
// attack!
// move right
// move down
// move up
// move right
// attack!
//
// _Solution_
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// ***TAUNT THE GUARDS***
//
// _pseudocode_
// move right
// break door
// say something
// move left x2
// attack!
// move right
// say follow
// move right x2
// move up
// move right
// say follow me
// move down
// move right
// move up
// move right
//
// _Solution_
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Follow me.");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// ***IT'S A TRAP***
//
// _pseudocode_
// move down x2
// say follow
// move up x2
//
// _Solution_
this.moveDown();
this.moveDown();
this.say("follow me!");
this.moveUp();
this.moveUp();

// ***TAUNT***
//
// _pseudocode_
// say something x5
//
// _Solution_
this.say("hey!");
this.say("You're ugly!");
this.say("come here!");
this.say("brat!");
this.say("hey!");


// ***COWARDLY TAUNT***
//
// _pseudocode_
// move to 50,16
// say something
// move to 70,10
//
// _Solution_
this.moveXY(50, 16);
this.say("I can lure them in here.");
this.moveXY(70, 10);

// ***COMMANDING FOLLOWERS***
//
// _pseudocode_
// move to 49, 66
// move to 60, 63
// move to 75, 63
// say hail friends
// say follow
// move to 60, 25
// say attack
//
// _Solution_
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow!");
this.moveXY(60, 25);
this.say("Attack!");


// ***MOBILE ARTILERY***
//
// _pseudocode_
// move to 30, 26
// attack at 46, 5
// move to 40, 40
// attack at 50, 63
// attack at 50, 50
// attack at 67, 54
// attack at 62, 50
//
// _Solution_
this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(40, 40); 
this.attackXY(50, 63); 
this.attackXY(50, 50); 
this.attackXY(67, 54); 
this.attackXY(62, 50);


// ***BREAK THE PRISON***
//
// _pseudocode_
// if name is equal to allies, return true. else, return false.
//
// _Solution_
if (name === "William")
    return true;
if (name === "Krogg")
    return false;
if (name === "Lucas")
    return true;
if (name === "Marcus")
    return true;
if (name === "Robert")
    return true;
if (name === "Gordon")

 
// Reflection:
// Write your reflection here.
//
//.this refers to the character object, .  It has functions you can call, like moveXY() and moveUP()
// the () in Javascript denotes where the function parameters of the function are supposed to go
// the semicolons indicate that it's the end of that command or line.
//
// This challenge was fun, but a bit tedious, especially those challenges that required moveXY().
// It was a lot of guess anf check.  Also, the break the prison challenge was strange, as it was differnet
// than all the others and the instructions weren't clear.  I don't think I learned much from this exercise
// (I learned a lot more doing the js codeacademy), but I see how it can be attractive to people who are
// into gaming. I understand the exercise of writing the pseudocode, but for this instance I found it tedious.