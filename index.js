// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    return appendCat = [...cats, name]
}
function prependCat(name) {
    return prependCat = [name, ...cats]
}
function removeLastCat(name) {
    return removeLastCat  = cats.slice (0, cats.length -1)
}
function removeFirstCat(name) {
    return removeFirstCat  = cats.slice (1)
}