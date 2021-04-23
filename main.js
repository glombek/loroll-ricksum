// We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of, you wouldn't get this from any other guy. I just wanna tell you how I'm feeling, gotta make you understand.
// Never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.
// We've known each other for so long. Your heart's been aching but you're too shy to say it. Inside we both know what's been going on, we know the game and we're gonna play it and if you ask me how I'm feeling, don't tell me you're too blind to see.

var pigLatinRickRoll = [
    "Evernay onnagay ivegay ouyay upway, evernay onnagay etlay ouyay ownday, evernay onnagay unray aroundway andway esertday ouyay. Evernay onnagay akemay ouyay ycray, evernay onnagay aysay oodbyegay, evernay onnagay elltay away ielay andway urthay ouyay.",
    "E'reway onay angersstray otay ovelay. Ouyay owknay ethay ulesray andway osay oday Iway. Away ullfay ommitment'scay atwhay I'mway inkingthay ofway, ouyay ouldn'tway etgay isthay omfray anyway otherway uygay. Iway ustjay annaway elltay ouyay owhay I'mway eelingfay, ottagay akemay ouyay understandway.",
    "E'veway ownknay eachway otherway orfay osay onglay. Ouryay eart'shay eenbay achingway utbay ou'reyay ootay yshay otay aysay itway. Insideway eway othbay owknay at'swhay eenbay oinggay onway, eway owknay ethay amegay andway e'reway onnagay ayplay itway andway ifway ouyay askway emay owhay I'mway eelingfay, on'tday elltay emay ou'reyay ootay indblay otay eesay."
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

var app = new Vue({
    el: '#app',
    data: {
      output: '',
        numParagraphs: 1,
        startWithPrefix: true
    },
    methods: {
        generate: function() {
            this.output = "";
            if(this.startWithPrefix) {
                this.output = "Loroll ricksum dolor sit amet, consectetur adipiscing elit. ";
            }
            for (let step = 0; step < this.numParagraphs; step++) {
                this.output += pigLatinRickRoll[getRandomInt(0, pigLatinRickRoll.length - 1)] + "\r\n";
            }
        }
    }
  })