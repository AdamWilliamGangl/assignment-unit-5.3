console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(album)
    console.log('Added the following album to our collection:', title, artist, yearPublished)
    return album
}

function showCollection(array) {
    console.log('The number of items in our collection is:', array.length);
    for (item of array) {
        console.log(item.albumTitle, 'by:', item.albumArtist,'published in:', item.albumYearPublished )
    }
}

addToCollection('Stairway to Heaven', 'Led Zeppelin', 1971);
addToCollection('Light My Fire', 'The Doors', 1967);
addToCollection('Kashmir', 'Led Zeppelin', 1975);
addToCollection('Comfortably Numb', 'Pink Floyd', 1980);
addToCollection('Come Sail Away', 'Styx', 1977);
addToCollection('Some Nights', 'Fun', 2012);

console.log(showCollection(collection));