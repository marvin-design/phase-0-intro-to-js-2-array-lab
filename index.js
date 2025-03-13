// The original cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively appends a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructively prepends a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructively removes the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructively removes the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Appends a cat and returns a new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// 6. Prepends a cat and returns a new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 7. Removes the last cat and returns a new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Removes the first cat and returns a new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}
