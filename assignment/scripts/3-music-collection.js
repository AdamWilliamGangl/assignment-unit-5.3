
console.log('***** Music Collection *****')
let collection = [];


/**
 * addToCollection
 * addToCollection takes title and artist as strings, yearPublished as a number and tracks as an array of objects.
 * Pushes the given parameters to the global variable 'collection'.
 * @param {string} title -the title of the album.
 * @param {string} artist - the artist of the album.
 * @param {number} yearPublished - the year the album was published.
 * @param {array} tracks - an array of tracks, each as an object with a name and duration.
 * @returns {album} returns the album object.
 */
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

/**
 * showCollection
 * showCollection iterates through the parent array where we have the title, artist, and year published
 * Before console-logging the results it drops down into a child array where we have the tracks, an array of objects
 * We console log the above information.
 * @param {array} array -the array we want to search- in this instance likely the 'collection' variable.
 */
function showCollection(array) {
    console.log('The number of items in our collection is:', array.length);
    for (i = 0; i < array.length; i++) { //to get into initial array.
        for (x = 0; x < array[i].albumTracks.length; x++) //to get into nested array for tracks and duration.
            console.log(array[i].albumTitle, 'by:', array[i].albumArtist, 'published in:', array[i].albumYearPublished, array[i].albumTracks[x])
    }
} //end showCollection function.

/**
 * findByArtist
 * findByArtist searchs our collection for an artist match against the given parameter, adds it to a new array, and returns that array.
 * @param {string} artist - this is the string that will search against the items in our collection array.
 */

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
        return undefined
    }
    // console.log('The following matches were found:', searchArray);
    return searchArray
} //end search function.

console.log(addToCollection('Led Zeppelin I', 'Led Zeppelin', 1969, [{ name: 'Good Times, Bad Times', duration: '2:46' }, { name: 'Dazed and Confused', duration: '6:27' }, { name: 'You Shook Me', duration: '6:28' }]));
console.log(addToCollection('L.A. Woman', 'The Doors', 1971, [{ name: 'Love Her Madly', duration: '3:19' }, { name: 'L.A. Woman', duration: '7:51' }]));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971, [{ name: 'Stairway to Heaven', duration: '8:02' }, { name: 'The Battle of Evermore', duration: '5:52' }]));
console.log(addToCollection('Dark Side of the Moon', 'Pink Floyd', 1973, [{ name: 'Time', duration: '7:05' }, { name: 'Eclipse', duration: '2:01' }]));
console.log(addToCollection('The Grand Illusion', 'Styx', 1977, [{ name: 'Fooling Yourself', duration: '5:30' }, { name: 'Come Sail Away', duration: '6:05' }]));
console.log(addToCollection('Some Nights', 'Fun', 2012, [{ name: 'Carry On', duration: '4:38' }, { name: 'Some Nights', duration: '4:37' }]));

showCollection(collection);

findByArtist('Led Zeppelin'); //testing an artist in the collection.
findByArtist('Backstreet Boys'); //Testing an artist not in collection.

console.log('Testing Led Zeppelin- should find a result', search({ artist: 'Led Zeppelin', year: 1971 }));
console.log('Testing Backstreet Boys- Should not find a result', search({ artist: 'Backstreet Boys', year: 2001 }));
console.log('Testing searching nothing- should not find a result', search({}));

console.log('Testing with only track name input matching- should result in a match', search({ artist: 'Backstreet Boys', year: 2005, trackName: 'Good Times, Bad Times' }));
console.log('Testing with all inputs not matching should result in no matches', search({ artist: 'Backstreet Boys', year: 2005, trackName: 'Candle in the Wind' }));
console.log('Testing with the atist and year working, but not track name - should result in a match', search({ artist: 'Led Zeppelin', year: 1971, trackName: 'Candle in the Wind' }));
console.log('Testing with no parameters, should result in undefined', search({})); 