console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished,
        albumTracks: tracks
    }
    collection.push(album)
    return album
} //end addToCollection function.

function showCollection(array) {
    console.log('The number of items in our collection is:', array.length);
    for (i = 0; i < array.length; i++) {
        for (x = 0; x < array[i].albumTracks.length; x++)
            console.log(array[i].albumTitle, 'by:', array[i].albumArtist, 'published in:', array[i].albumYearPublished, array[i].albumTracks[x])
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
    for (i = 0; i < collection.length; i++) {
        for (x = 0; x < collection[i].albumTracks.length; x++) {
            if (collection[i].albumTracks[x].name == object.trackName) {
                searchArray.push(collection[i]);
            }
        } // end nested for loop
        if (searchArray.length == 00 && collection[i].albumArtist === object.artist && collection[i].albumYearPublished === object.year) { //I read this as searching either an artist & year or a trackname.
            searchArray.push(collection[i]);
        }
    } // end primary for loop
    if (object.artist == null || object.year == null) {
        console.log('No search parameters added');
        return
    }
    // console.log('The following matches were found:', searchArray);
    return searchArray
} //end search function.

console.log(addToCollection('Led Zeppelin I', 'Led Zeppelin', 1969, [{ name: 'Good Times, Bad Times', duration: '2:46' }, { name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('L.A. Woman', 'The Doors', 1971, [{ name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971, [{ name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('Dark Side of the Moon', 'Pink Floyd', 1973, [{ name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('The Grand Illusion', 'Styx', 1977, [{ name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('Some Nights', 'Fun', 2012, [{ name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));

showCollection(collection);

findByArtist('Led Zeppelin');
findByArtist('Backstreet Boys');

console.log('Testing Led Zeppelin- should find a result', search({ artist: 'Led Zeppelin', year: 1971 }));
console.log('Testing Backstreet Boys- Should not find a result', search({ artist: 'Backstreet Boys', year: 2001 }));
console.log('Testing searching nothing- should not find a result', search({}));

console.log('Testing with only track name input matching- should result in a match', search({ artist: 'Backstreet Boys', year: 2005, trackName: 'Good Times, Bad Times' }));
console.log('Testing with all inputs not matching should result in no matches', search({ artist: 'Backstreet Boys', year: 2005, trackName: 'Candle in the Wind' }));
console.log('Testing with the atist and year working, but not track name - should result in a match', search({ artist: 'Led Zeppelin', year: 1971, trackName: 'Candle in the Wind' }));
console.log('Testing with no parameters, should result in undefined', search({})); 