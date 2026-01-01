// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var direction = CardinalDirections.North;
console.log("direction: ", direction);
direction = CardinalDirections.East;
console.log("direction: ", direction);
direction = CardinalDirections.South;
console.log("direction: ", direction);
direction = CardinalDirections.West;
console.log("direction: ", direction);
// direction = 'South'; not assignable to type Cardinal Directions
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirectionsInitialized;
(function (CardinalDirectionsInitialized) {
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["North"] = 6] = "North";
    CardinalDirectionsInitialized["East"] = "String";
    CardinalDirectionsInitialized["South"] = "work but should not do";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["West"] = 4] = "West";
})(CardinalDirectionsInitialized || (CardinalDirectionsInitialized = {}));
var direction2 = CardinalDirectionsInitialized.North;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.East;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.South;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.West;
console.log("direction: ", direction2);
