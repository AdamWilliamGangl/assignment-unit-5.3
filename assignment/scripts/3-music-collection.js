console.log('***** Music Collection *****')
let collection =  [];

function addToCollection(title,artist,yearPublished){
    collection.push([title,artist,yearPublished])
    console.log('Added the following album to our collection:', title, artist, yearPublished)
}
addToCollection('Stairway to Heaven', 'Led Zeppelin', 1971)
console.log(collection)
