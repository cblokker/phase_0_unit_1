// This is a solo challenge

// Your mission description:
// 
// I will simulate some plots in Game of Thrones by creating 
// objects that represent characters.  These characters will have
// a name, a location, an army size, parents, and children
// 
// I will create king Joffrey, Tyrion Lannister, and Daenerys Targaryen.
// I will also include information about their parents.

// Pseudocode
// joffrey
// - location is kings landing
// - army size is 10000
// - doesnt have dragons
// - parents are jaime and cersei lannister
// 
// tyrion
// - location is kings landing
// - army size is 10
// - doesnt have dragons
// - parent is Tywin Lannister
// 
// daenerys
// - location is the Dorthraki Sea
// - army size is 1000
// - doesnt have dragons
// - parents are Aerys II Targaryen and Rhaella Targaryen
//
// Timeline:
// - Daenerys gets married to Drogo!
// - The dragons hatch
// - Daenerys goes to Quarth
// - Daenerys builds army to 10000
//
// - Tyrion travels to a brothel
//
// - Joffrey marries Sansa
// - Joffrey is killed
//

// Initial Code
var joffrey = {
	name: "Joffrey Baratheon",
	location: "Kings Landing",
	armySize: 10000,
	hasDragons: false,
	parents: {
		jaime: {
			name: "Jaime Lannister"
		},
		cersei: {
			name: "Cersei Lannister"
		}
	}
};

var tyrion = {
	name: "Tyrion Linnister",
	location: "Kings Landing",
	armySize: 10,
	hasDragons: false,
	parents: {
		tywin: {
			name: "Tywin Lannister"
		}
	}
};

var daenerys = {
	name: "Denaryes Targaryen",
	location: "the Dorthraki Sea",
	armySize: 100,
	hasDragons: false,
	parents: {
		aerys: {
			name: "Aerys II Targaryen"
		},
		rhaella: {
			name: "Rhaella Targaryen"
		}
	}
};

// Daenerys gets married to Drogo!
var drogo = {
	name: "drogo"
};
daenerys.spouse = drogo;
drogo.spouse = daenerys;

// The dragons hatch
daenerys.hasDragons = true;

// Daenerys goes to Quarth
daenerys.location = "Qarth";

// Daenerys builds army to 10000
daenerys.armySize = 10000;

// Tyrion travels to a brothel
tyrion.location = "brothel outside of Kings Landing";

// Joffrey marries Sansa
var sansa = {
	name: "Sansa Stark"
};
joffrey.spouse = sansa;
sansa.spouse = joffrey;

// Joffrey is killed
delete joffrey;


// Refactored Code - I decided to refactor the objects based on family
var lannister = {
	tywin: {
        name: "Tywin Lannister",
	},
	jaime: {
        name: "Jaime Lannister",
	},
	cercei: {
        name: "Cercei Lannister",
	},
	tyrion: {
		name: "Tyrion Lannister",
	},
	joffrey: {
        name: "Joffrey Baratheon",
        location: "Kings Landing",
	    armySize: 10000,
	    hasDragons: false,
	}
};

var stark = {
	sansa: {name: "Sansa Stark"}
};

var targaryen = {
	aerys: {
		name: "Aerys II Targaryen"
	},
	rhaella: {
		name: "Rhaella Targaryen"
	},
	daenerys: {
		name: "Denaryes Targaryen",
		location: "Qarth",
		armySize: 100,
		hasDragons: false
	}
};

var dorthraki = {
	drogo: {name: "Drogo"}
}

// make some family connections:
lannister.tywin.children = [lannister.jaime, lannister.cercei, lannister.tyrion];
lannister.cercei.children = [lannister.joffrey];
lannister.jaime.children = [lannister.joffrey];
lannister.jaime.parents = [lannister.tywin];
lannister.cercei.parents = [lannister.tywin];
lannister.joffrey.parents = [lannister.cercei, lannister.jaime];
targaryen.daenerys.parents = [targaryen.aerys, targaryen.rhaella];

// Daenerys gets married to Drogo!
targaryen.daenerys.spouse = dorthraki.drogo;
dorthraki.drogo.spouse = targaryen.daenerys;

// The dragons hatch
targaryen.daenerys.hasDragons = true;

// Daenerys goes to Quarth
targaryen.daenerys.location = "Qarth";

// Daenerys builds army to 10000
targaryen.daenerys.armySize = 10000;

// Tyrion travels to a brothel
lannister.tyrion.location = "brothel outside of Kings Landing";

// Joffrey marries Sansa
lannister.joffrey.spouse = stark.sansa;
stark.sansa.spouse = lannister.joffrey;

// Joffrey is killed (decided not to delete joffrey because we still want to keep his information!)
lannister.joffrey.isAlive = false;


// Reflection
// 
// I found the open ended nature of this problem a bit difficult to work with.
// I'm still unsure if I tackled the problem correctly, but I
// made some objects, used my creativity, and manipulated those objects
// to prove my knowledge.  When it came to refactoring the code,
// I decided to change the structure of the objects.  Instead of each character being its own object,
// I decided to make each family its own object, with each character being a sub-object of their family.
// This structure seems more orderly to me. Also, I decided not to delete joffrey all together because I
// wanted to preserve his information.  So, I created isAlive for joffrey and set it to false.
//
// One thing I'm confused about is the circular nature of some objects. For example, Sansa's
// spouse is the object Joffrey, while the Joffrey's spouse is the object Sansa.  This seems like
// it might cause some sort of infinite recursion.  I'm just unsure of the whole thing and would like
// to read up on it and hear some discussions about it.
// 
//