// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric.

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let direction = CardinalDirections.North;
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

enum CardinalDirectionsInitialized {
  North = 6,
  East = "String",
  South = "work but should not do",
  West = 4,
}

let direction2 = CardinalDirectionsInitialized.North;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.East;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.South;
console.log("direction: ", direction2);
direction2 = CardinalDirectionsInitialized.West;
console.log("direction: ", direction2);
