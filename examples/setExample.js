const uniqueTags = new Set();

uniqueTags.add("javascript");
uniqueTags.add("data-structures");
uniqueTags.add("javascript");

console.log("Unique tags:", Array.from(uniqueTags).join(", "));
console.log("Has javascript?", uniqueTags.has("javascript"));
console.log("Total unique tags:", uniqueTags.size);
