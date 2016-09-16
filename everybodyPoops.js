var Body = (function() {

	// *** private vars ***

	// Body status.
	var _isAlive = true;
	var _isHungry = true;
	var _isThirsty = true;

	var _bladderLevel = 0;
	var _stomachLevel = 0;

	var MAX_STOMACH_LEVEL = 3;
	var MAX_BLADDER_LEVEL = 5;
	
	// Body details.
	var _firstName = null;
	var _lastName = null;

	// *** public functions ***

	var isHungry = function()
	{
		return _isHungry;
	};

	var isThirsty = function()
	{
		return _isThirsty;
	};

	var hasToPoop = function()
	{
		return _stomachLevel >= MAX_STOMACH_LEVEL;
	};

	var hasToPee = function()
	{
		return _bladderLevel >= MAX_BLADDER_LEVEL;
	};

	var getFirstName = function() {
			return _firstName;
	};

	var setFirstName = function(value)
	{
		if (value === null || typeof value === "undefined" || value.length === 0) {
			throw getFirstName() + ": First name must be provided.";
		}

		_firstName = value.trim();
	};
	
	var getLastName = function() {
		return _lastName;
	};

	var setLastName = function(value) 
	{
		if (value === null || typeof value === "undefined" || value.length === 0) {
			throw getFirstName() + ": Last name must be provided.";
		}

		_lastName = value.trim();

	};

	// Bodily Functions
	var eat = function()
	{
		if (!hasToPoop())
		{
			_stomachLevel++;
			console.log(getFirstName() + ": Yum!");
			return true;
		}
		else 
		{
			console.log(getFirstName() + ": I'm full! Maybe I should do something about that.");
			return false;
		}
	};

	var drink = function()
	{
		if (!hasToPee())
		{
			_bladderLevel++;
			console.log(getFirstName() + ": Bellllch!");
			return true;
		}
		else 
		{
			console.log(getFirstName() + ": I'm not thirsty! Maybe I should do something about that.");
			return false;
		}
	};

	var poop = function()
	{
		if (hasToPoop())
		{
			_stomachLevel = 0;
			console.log(getFirstName() + ": Ahhhhh... I feel ten pounds lighter!");
			return true;
		}
		else 
		{
			console.log(getFirstName() + ": I don't have to poop.");
			return false;
		}
	};

	var pee = function()
	{
		if (hasToPee())
		{
			_bladderLevel = 0;
			console.log(getFirstName() + ": Ahhhhh... Relief!");
			return true;
		}
		else 
		{
			console.log(getFirstName() + ": I don't have to pee.");
			return false;
		}
	};

	// return the instance
	return {
        create : function(first, last) {
            setFirstName(first);
            setLastName(last);

            // Return all the functions they should have access to
            // with a properly initialized object.
            return {
                    pee : pee,
                    poop : poop,
                    eat : eat,
                    drink : drink,
                    hasToPee : hasToPee,
                    hasToPoop : hasToPoop
            };
        }
	};
});

var Auri = new Body().create("Auri", "Rahimzadeh");
var Shea = new Body().create("Shea", "Maynard");

Auri.eat();
Auri.eat();
Auri.eat();
Shea.eat();
Auri.eat();
Shea.eat();
Auri.poop();
Shea.poop();
