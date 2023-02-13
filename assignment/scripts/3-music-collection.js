console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(album)
    return album
}

function showCollection(array) {
    console.log('The number of items in our collection is:', array.length);
    for (item of array) {
        console.log(item.albumTitle, 'by:', item.albumArtist, 'published in:', item.albumYearPublished)
    }
}

function findByArtist(artist) {
    let newArray = [];
    for (item of collection) {
        if (item.albumArtist === artist) {
            newArray.push(item);
        }
    }
    if (newArray.length > 0) {
        console.log('Your artist was found!'); //Added for testing clarification.
    }
    else console.log('Your artist was not found.') //Added for testing clarification.
    console.log(newArray)
}

console.log(addToCollection('Stairway to Heaven', 'Led Zeppelin', 1971));
console.log(addToCollection('Light My Fire', 'The Doors', 1967));
console.log(addToCollection('Kashmir', 'Led Zeppelin', 1975));
console.log(addToCollection('Comfortably Numb', 'Pink Floyd', 1980));
console.log(addToCollection('Come Sail Away', 'Styx', 1977));
console.log(addToCollection('Some Nights', 'Fun', 2012));

showCollection(collection);

findByArtist('Led Zeppelin');
findByArtist('Backstreet Boys');