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
} //end addToCollection function.

function showCollection(array) {
    console.log('The number of items in our collection is:', array.length);
    for (item of array) {
        console.log(item.albumTitle, 'by:', item.albumArtist, 'published in:', item.albumYearPublished)
    }
} //end showCollection function.

function findByArtist(artist) {
    let newArray = [];
    for (item of collection) {
        if (item.albumArtist === artist) {
            newArray.push(item);
        }
    }
    if (newArray.length > 0) {
        console.log('Your artist was found!'); //Added for testing clarification if the artist is found.
    }
    else console.log('Your artist was not found.'); //Added for testing clarification if the artist is not found.
    console.log(newArray)
} //end findByArtist function.

function search(object) {
    let searchArray = [];
    for (item of collection) {
        if (item.albumArtist === object.artist && item.albumYearPublished === object.year) {
            searchArray.push(item);
        }
    }
    if (object.artist == null || object.year == null) {
        console.log('No search parameters added');
        return collection
    }
    console.log('The following matches were found:');
    return searchArray
} //end search function.

console.log(addToCollection('Led Zeppelin I', 'Led Zeppelin', 1969));
console.log(addToCollection('L.A. Woman', 'The Doors', 1971));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971));
console.log(addToCollection('Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection('The Grand Illusion', 'Styx', 1977));
console.log(addToCollection('Some Nights', 'Fun', 2012));

showCollection(collection);

findByArtist('Led Zeppelin');
findByArtist('Backstreet Boys');

console.log(search({ artist: 'Led Zeppelin', year: 1971 }));
console.log(search({ artist: 'Backstreet Boys', year: 2001 }));
console.log(search({}));

