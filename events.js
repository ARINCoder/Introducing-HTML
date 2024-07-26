const tellTime = () => {
    return Date()
}
console.log(tellTime())

const turnOn = () => {
    bulbOn.style.display = 'inline';
    bulbOff.style.display = 'none';

}
const turnOff = () => {
    bulbOn.style.display = 'none';
    bulbOff.style.display = 'inline';
}
//Object Display
//One can display an object in this case the object is "football = {}".
//The function creates a new object within an object.
//The ".join()" function is used to join the object together with comma(,) separted strings.
let football = {
    teamName: "Real Madrid",
    locationName: "Spain",
    stadium: "Barnabeau",
    coachName: "Anchelotte",
    players: ["Ronaldo", "Bale", "Asensio", "Viniscus", "Bellingham"].join(", "),
    gamesPlayers: function () {
        const games = () => {
            return (this.teamName + " , " + this.locationName + " , " + this.stadium + " , " + this.coachName + " , " + this.players).toUpperCase()
        }
        return games()
    }
}
console.log(football.gamesPlayers());// REAL MADRID , SPAIN , BARNABEAU , ANCHELOTTE , RONALDO, BALE, ASENSIO, VINISCUS, BELLINGHAM


// let champ = " ";
// for (let i in football) {

//     champ += football[i] + " ";

// }
// console.log(champ)
//Object Cunstructors
function Song(title, artist, album, views) {
    this.songTitle = title;
    this.nameArtist = artist;
    this.artisyAlbum = album;
    this.totalViews = views;
    this.country = "United States";
}
//The constructor function uses the key word function.
//Note: From the above object, one can note that country has a default value of "United States".
//With this one can create a new song object(s) with the abone variables
const eminemSong = new Song("Mocking Bird", "Eminem", "Kamikaze", "100,678,676")
const billieSong = new Song("All the Good girls go to hell", "Billie Eilish", "Okay", "358,756,990")
const eminemSong2 = new Song("Lose Yourself", "Eminem", "8 Mile", "125,000,000")

const songs = [
    new Song("All the Good girls go to hell", "Billie Eilish", "Okay", "358,756,990"),
    new Song("Mocking Bird", "Eminem", "Kamikaze", "100, 78,676"),
    new Song("Lose Yourself", "Eminem", "8 Mile", "125,000,000"),

]
console.log(songs)
console.log(eminemSong.nameArtist)
console.log(billieSong)
//Adding a new property to the constructor
//Adding a method to a constructor
//Thhis will add the nationality variable or property to the constructor
Song.prototype.setNationality = function (nationality) {
    this.nationality = nationality;
};
//This will set the nationality on the variable eminemSong to Russian
eminemSong.setNationality("Russian")
console.log(eminemSong.nationality)
//Changing information in the constructor
//I want to update the album name from Kamikaze to ("The Marshall Mathers LP")

eminemSong.changeAlbum = function (album) {
    this.artisyAlbum = album;
}
eminemSong.changeAlbum("The Marshall Mathers LP")
console.log(eminemSong.artisyAlbum) //The Marshall Mathers LP
//Displaying the updated details on the eminemSong
Song.prototype.toString = function () {
    return this.songTitle + ", " + this.nameArtist + ", " + this.artisyAlbum + ", " + this.totalViews + ", " + this.country + ", " + this.nationality;
}
console.log(eminemSong.toString()) //Mocking Bird, Eminem, The Marshall Mathers LP, 100,678,676, United States, Russian
