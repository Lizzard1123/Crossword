const board = document.getElementById("board");
const tileSize = 30;
let boardLayout = [
    [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false
    ],
    [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
    ],
    [
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false
    ],
    [
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false
    ],
    [
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false
    ],
    [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false
    ],
    [
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false
    ]
];
let boardLetters = [
    ["a", "b", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "c", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

const acrossCollum = document.getElementById("across");
const verticleCollum = document.getElementById("verticle");

const clues = [{
    "clue": "The best 3D printer ever made",
    "hint": "We watched the V3 together",
    "answer": "positron",
    "comment": "Better engineering than F1",
    "start": { "x": 5, "y": 9 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/Krylin-Positron-3d-printer-624.jpeg"
    }
}, {
    "clue": "What is in the pot",
    "hint": "I think there is something",
    "answer": "nothing",
    "comment": "mmmmmmhmmmm",
    "start": { "x": 12, "y": 4 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_1992.PNG"
    }
}, {
    "clue": "The answer to the pot is a ___",
    "hint": "I know you dont want to hurt my feelings",
    "answer": "lie",
    "comment": "Still curious",
    "start": { "x": 13, "y": 11 },
    "row": true,
    "img": null
}, {
    "clue": "You are such a ___ man",
    "hint": "Compliment?",
    "answer": "ruggedly_handsome",
    "comment": "At least in my eyes",
    "start": { "x": 7, "y": 14 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_0630.PNG"
    }
}, {
    "clue": "Name of first robot",
    "hint": "It would be in the source code",
    "answer": "Fidel_Castro",
    "comment": "What started with a joke lead to a great team",
    "start": { "x": 3, "y": 18 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_2013.jpg"
    }
}, {
    "clue": "Name of the subsequent 2 robots",
    "hint": "you dont get one",
    "answer": "Bongo",
    "comment": "Never forget that he met Obama",
    "start": { "x": 6, "y": 5 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/EB3AB04A-F85F-4A70-AA64-AE7F6A4BF7BD.png"
    }
}, {
    "clue": "How many elim matches did we win this season in robotics (in my native language)",
    "hint": "English lol",
    "answer": "zero",
    "comment": "100% catie",
    "start": { "x": 10, "y": 2 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/65545232758__DF05CB9B-E22D-4FD7-9644-CD79DCFF7738_Original.png"
    }
}, {
    "clue": "Dog",
    "hint": "Tyler's too now",
    "answer": "Ranger",
    "comment": "Tongue deep in my dog",
    "start": { "x": 10, "y": 4 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/700CA4F0-3233-4802-98B2-2E42911DE37D.png"
    }
}, {
    "clue": "Dog",
    "hint": "My sister",
    "answer": "Lily",
    "comment": "zoomies",
    "start": { "x": 10, "y": 20 },
    "row": false,
    "img": null
}, {
    "clue": "Thanks for telling me he's white /s",
    "hint": "GHP buddy",
    "answer": "Richard",
    "comment": "Shame on me for assuming a steryotype",
    "start": { "x": 9, "y": 7 },
    "row": false,
    "img": null
}, {
    "clue": "He forgot the condiments :(",
    "hint": "Best engineering teacher we had",
    "answer": "Johnson",
    "comment": "I DONT WANT NONE OF THAT GAY CRAP IN MY CLASSROOM",
    "start": { "x": 0, "y": 7 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_4083.png"
    }
}, {
    "clue": "Pimp mommy",
    "hint": "Psych",
    "answer": "Erin",
    "comment": "Odd",
    "start": { "x": 16, "y": 0 },
    "row": false,
    "img": null
}, {
    "clue": "You weren't there but can't stop telling the story",
    "hint": "What he said",
    "answer": "its_leaking",
    "comment": "It would have been so much better if you were there",
    "start": { "x": 4, "y": 10 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/516BD91C-AB56-4F57-A64A-61B71F9ED294.png"
    }
}, {
    "clue": "The much awaited sequel to brotherly love",
    "hint": ";)",
    "answer": "sisterly_love",
    "comment": "",
    "start": { "x": 7, "y": 9 },
    "row": false,
    "img": null
}, {
    "clue": "This is his name off hours",
    "hint": "not chuck",
    "answer": "charlie",
    "comment": "",
    "start": { "x": 1, "y": 18 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_1298.PNG"
    }
}, {
    "clue": "Hawaiian",
    "hint": "shirt",
    "answer": "fridays",
    "comment": "Every friday is Hawaiian friday.... duh",
    "start": { "x": 16, "y": 18 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_0446.png"
    }
}, {
    "clue": "Totally not jealous you got in and I didn't",
    "hint": "Tech",
    "answer": "gtri",
    "comment": "Worked out in the end with summer school i guess",
    "start": { "x": 6, "y": 12 },
    "row": true,
    "img": null
}, {
    "clue": "The other thing I'm totally not jealous over",
    "hint": "Harrison got it too lol",
    "answer": "ghp",
    "comment": "Blame it on covid /j",
    "start": { "x": 9, "y": 14 },
    "row": false,
    "img": null
}, {
    "clue": "The other other thing I'm not jealous of",
    "hint": "rocket go brrrrr",
    "answer": "isef",
    "comment": "I could have made a stovetop too /j",
    "start": { "x": 5, "y": 21 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_1679.png"
    }
}, {
    "clue": "Nicholas cage's biggest fear",
    "hint": "bane of arthropods",
    "answer": "bees",
    "comment": "To my knowlege this is the only movie you love dearly enough to quote",
    "start": { "x": 1, "y": 12 },
    "row": true,
    "img": null
}, {
    "clue": "This animal learned what a gravitron was",
    "hint": "Tires",
    "answer": "opossum",
    "comment": "not my fault",
    "start": { "x": 14, "y": 16 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/67465738121__D671B8E9-CEAE-490C-880A-6E2B179E957D.png"
    }
}, {
    "clue": "The sport we're gonna go pro in",
    "hint": "The only time you're up top",
    "answer": "beach_volleyball",
    "comment": "",
    "start": { "x": 21, "y": 7 },
    "row": false,
    "img": null
}, {
    "clue": "International science and ____ fair",
    "hint": "you were so proud of yourself for this one",
    "answer": "infidelity",
    "comment": "Where the best and brightest people meet",
    "start": { "x": 1, "y": 23 },
    "row": true,
    "img": null
}, {
    "clue": "You only got detention because it was subpar joke placement",
    "hint": "Egg teacher",
    "answer": "kozlowski",
    "comment": "Wish I would have had her as a teacher",
    "start": { "x": 8, "y": 2 },
    "row": true,
    "img": null
}, {
    "clue": "____ are responsible for building all pyramids including the Louvre",
    "hint": "AirBnB Dallas craze",
    "answer": "mollusks",
    "comment": "",
    "start": { "x": 4, "y": 0 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_2018.jpg"
    }
}, {
    "clue": "Who is better at physics",
    "hint": "Not us",
    "answer": "tjhill",
    "comment": "He better be the first person you hire with your buisness",
    "start": { "x": 12, "y": 18 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_2019.jpg"
    }
}, {
    "clue": "How many questions did we record 笨蛋 asking?",
    "hint": "johnathan",
    "answer": "five_hundred_and_three",
    "comment": "I hate this kid /j",
    "start": { "x": 19, "y": 3 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_E549CC4D2A01-1.jpeg"
    }
}, {
    "clue": "Apparently being lazy and not painting makes you an amazing engineer /s",
    "hint": "you strapped your phone to your car steering wheel to feel like a ___ driver",
    "answer": "formula_one",
    "comment": "I only like colored cars",
    "start": { "x": 23, "y": 4 },
    "row": false,
    "img": null
}, {
    "clue": "May she Rest In Peace",
    "hint": "Chem",
    "answer": "mary_clark",
    "comment": "o7",
    "start": { "x": 17, "y": 7 },
    "row": false,
    "img": null
}, {
    "clue": "Bongo is a",
    "hint": "snake",
    "answer": "sock",
    "comment": "Still angry",
    "start": { "x": 3, "y": 1 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg"
    }
}, {
    "clue": "Robotics team game time: MARRY",
    "hint": "not me :(",
    "answer": "Catie",
    "comment": "I'm heartbroken fyi",
    "start": { "x": 12, "y": 0 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_82CBF9A1433B-1.jpeg"
    }
}, {
    "clue": "Robotics team Game time: FUCK",
    "hint": "Do you really need a hint",
    "answer": "Tyler",
    "comment": "Jealous",
    "start": { "x": 11, "y": 11 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_6BA260AE700E-1.jpeg"
    }
}, {
    "clue": "Robotics team game time: KILL",
    "hint": "Prob deserve this",
    "answer": "ethan",
    "comment": "Id win the fight though so idk...",
    "start": { "x": 18, "y": 20 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_DAEB91A16494-1.jpeg"
    }
}, {
    "clue": "Faster than Google Earth",
    "hint": "tall",
    "answer": "Daniel",
    "comment": "literally the worldiest man of us all",
    "start": { "x": 15, "y": 7 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_1405.png"
    }
}, {
    "clue": "The only Music",
    "hint": "I listened to a couple during the frc trip",
    "answer": "sabaton",
    "comment": "still not better than a good ol audiobook",
    "start": { "x": 1, "y": 10 },
    "row": false,
    "img": null
}, {
    "clue": "This shouldn't be music: Electric ___",
    "hint": "on way back from Armour's",
    "answer": "polka",
    "comment": "not my groove lol",
    "start": { "x": 2, "y": 3 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_0672.png"
    }
}, {
    "clue": "SWE big 5",
    "hint": "facebook still a thing apparently",
    "answer": "faang",
    "comment": "With all those leetcode questions you are doing, this is us at FAANG",
    "start": { "x": 0, "y": 0 },
    "row": true,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_37F430EA7233-1.jpeg"
    }
}, {
    "clue": "Face pillow",
    "hint": "there was a Rick and Morty episode with him as a boar",
    "answer": "Elon",
    "comment": "It won't be too late to work for/with him don't worry",
    "start": { "x": 1, "y": 5 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "/resources/photos/vscodeNewIcon.png"
    }
}, {
    "clue": "You have all the merch",
    "hint": "car",
    "answer": "tesla",
    "comment": "hats, belts, underwear, ties, you name it...",
    "start": { "x": 1, "y": 14 },
    "row": false,
    "img": {
        "x": 0,
        "y": 0,
        "z-index": 0,
        "src": "resources/photos/IMG_0664.png"
    }
}, {
    "clue": "(Not a trick question I swear) what is the best rocket company",
    "hint": "you 3d printed one",
    "answer": "spacex",
    "comment": "Isn't this why you're going into ASE?",
    "start": { "x": 15, "y": 23 },
    "row": false,
    "img": null
}];
//creates a text tile
function creatTile(x, y, black) {
    const tile = document.createElement("div");
    tile.style.left = (x * tileSize) + "px";
    tile.style.top = (y * tileSize) + "px";
    tile.setAttribute("class", (!black ? "edge" : "tiles"));
    board.appendChild(tile);
}

function createBoard() {
    for (let i = 0; i < boardLayout.length; i++) {
        for (let o = 0; o < boardLayout[i].length; o++) {
            creatTile(i, o, boardLayout[o][i]);
        }
    }
}

function fillBoard() {
    const nodes = board.children;
    let index = 0;
    for (let i = 0; i < boardLetters.length; i++) {
        for (let o = 0; o < boardLetters[i].length; o++) {
            nodes[index].innerHTML = boardLetters[o][i];
            index++;
        }
    }
}

function populateClues() {
    for (let i = 0; i < clues.length; i++) {
        const clue = document.createElement("div");
        clue.innerHTML = (i + 1) + ") " + clues[i].clue;
        clue.setAttribute("class", "clue");
        clue.addEventListener("click", goTo, false);
        (clues[i].row ? acrossCollum : verticleCollum).appendChild(clue);
    }
}

let shading = false;
const shadeButton = document.getElementById("toggleShading");

function toggleShade() {
    if (shading) {
        document.getElementById("across").style.backgroundColor = "";
        document.getElementById("verticle").style.backgroundColor = "";
    } else {
        document.getElementById("across").style.backgroundColor = "rgba(255,255,255,0.5)";
        document.getElementById("verticle").style.backgroundColor = "rgba(255,255,255,0.5)";
    }
    shading = !shading;
}

shadeButton.addEventListener("click", toggleShade);


/*
game logic 
*/
let currentFocus = null;
let row = true;

function clearAll() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].getAttribute("class") == "tiles") {
            nodes[i].style.outlineColor = "gray";
            nodes[i].style.backgroundColor = "";
        }
    }
}

function getStartIndex(x, y) {
    return x * boardLayout.length;
}

function getIndex(x, y) {
    return x * boardLayout.length + y;
}

function highlight(row) {
    clearAll();
    const nodes = board.children;
    const Xindex = parseInt(currentFocus.style.left) / tileSize;
    const Yindex = parseInt(currentFocus.style.top) / tileSize;
    const startIndex = getIndex(Xindex, Yindex);
    const highlightColor = "#ff0037";

    currentFocus.style.backgroundColor = "gray";
    currentFocus.style.outlineColor = highlightColor;

    if (row) {
        let i = 1;
        while (!((Xindex + i) > boardLayout.length - 1) && boardLayout[Yindex][Xindex + i]) {
            nodes[startIndex + (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex + (i * 25)].style.backgroundColor = "lightGray";
            i++;
        }
        i = 1;
        while (!((Xindex - i) < 0) && boardLayout[Yindex][Xindex - i]) {
            nodes[startIndex - (i * 25)].style.outlineColor = highlightColor;
            nodes[startIndex - (i * 25)].style.backgroundColor = "lightGray";
            i++;
        }
    } else {
        let i = 1;
        while (!((Yindex + i) > boardLayout.length - 1) && boardLayout[Yindex + i][Xindex]) {
            nodes[startIndex + i].style.outlineColor = highlightColor;
            nodes[startIndex + i].style.backgroundColor = "lightGray";
            i++;
        }
        i = 1;
        while (!((Yindex - i) < 0) && boardLayout[Yindex - i][Xindex]) {
            nodes[startIndex - i].style.outlineColor = highlightColor;
            nodes[startIndex - i].style.backgroundColor = "lightGray";
            i++;
        }
    }
}

function input(e) {
    clearAll();
    if (currentFocus != null) {
        currentFocus.style.backgroundColor = "white";
    }
    if (currentFocus === e.target) {
        currentFocus = null;
        return;
    }
    if (e.target.getAttribute("class") == "edge") {
        return;
    }
    currentFocus = e.target;
    currentFocus.style.backgroundColor = "gray";
    const info = getInfo(currentFocus);
    console.log([info.x, info.y]);
    highlight(row);
}

function goTo(e) {
    e = e.target;
    const num = parseInt(e.innerHTML[0]) - 1;
    const info = clues[num];
    currentFocus = board.children[getIndex(info.start.x, info.start.y)];
    row = info.row;
    highlight(row);
}

/*


        DEV TOOLS

*/
let inDev = false;

//swaps between tile and edge
function swap(e) {
    e = e.target;
    const Xindex = parseInt(e.style.left) / tileSize;
    const Yindex = parseInt(e.style.top) / tileSize;
    if (e.getAttribute("class") == "edge") {
        e.setAttribute("class", "tiles");
        boardLayout[Yindex][Xindex] = true;
        return;
    }
    e.setAttribute("class", "edge");
    boardLayout[Yindex][Xindex] = false;

}

//adds event listeners to board
function addSwap() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("click", swap, false);
    }
}

//removes swapping listeners from board
function removeSwap() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeEventListener("click", swap, false);
    }
}

//adds event listeners to board for the game element
function addGame() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("click", input, false);
    }
}

//removes swapping listeners from board for the game element
function removeGame() {
    const nodes = board.children;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].removeEventListener("click", input, false);
    }
}

//toggle dev mode
document.getElementById("makeBoard").onclick = function() {
    inDev = !inDev;
    if (inDev) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
        addSwap();
        removeGame();
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(70, 138, 194)";
        removeSwap();
        addGame();
    }
};

//get board layout
document.getElementById("getBoard").onclick = function() {
    console.log(boardLayout);
}

// end dev tools

function moveFocusUp(focus) {
    if (focus.y - 1 < 0) return;
    if (!squareAvalible(focus.x, focus.y - 1)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x, focus.y - 1)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusDown(focus) {
    if (focus.y + 1 > boardLayout.length - 1) return;
    if (!squareAvalible(focus.x, focus.y + 1)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x, focus.y + 1)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusRight(focus) {
    if (focus.x + 1 > boardLayout.length - 1) return;
    if (!squareAvalible(focus.x + 1, focus.y)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x + 1, focus.y)];
    currentFocus.style.backgroundColor = "gray";
}

function moveFocusLeft(focus) {
    if (focus.x - 1 < 0) return;
    if (!squareAvalible(focus.x - 1, focus.y)) return;
    currentFocus.style.backgroundColor = "lightGray";
    currentFocus = board.children[getIndex(focus.x - 1, focus.y)];
    currentFocus.style.backgroundColor = "gray";
}

document.onkeyup = function(e) {
    if (e.key.length != 1) return;
    const letter = e.key.charAt(0);
    if (letter.toLowerCase() == letter.toUpperCase()) return;
    if (currentFocus == null) return;

    const info = getInfo(currentFocus);
    boardLetters[info.x][info.y] = letter;
    board.children[getIndex(info.x, info.y)].innerHTML = letter;
    if (row) {
        moveFocusRight(info);
    } else {
        moveFocusDown(info);
    }
}

function getInfo(focus) {
    const obj = {
        "x": parseInt(focus.style.left) / tileSize,
        "y": parseInt(focus.style.top) / tileSize
    };
    return obj;
}

function squareAvalible(x, y) {
    return boardLayout[y][x];
}

document.onkeydown = function(e) {
    if (currentFocus == null) return;
    e.preventDefault();
    const focus = getInfo(currentFocus);
    switch (e.key) {
        case "ArrowUp":
            if (row) {
                highlight(false);
                row = false;
            }
            moveFocusUp(focus);
            break;
        case "ArrowDown":
            if (row) {
                highlight(false);
                row = false;
            }
            moveFocusDown(focus);
            break;
        case "ArrowLeft":
            if (!row) {
                highlight(true);
                row = true;
            }
            moveFocusLeft(focus);
            break;
        case "ArrowRight":
            if (!row) {
                highlight(true);
                row = true;
            }
            moveFocusRight(focus);
            break;
        case "Backspace":
            if (row) {
                moveFocusLeft(focus);
            } else {
                moveFocusUp(focus)
            }
            boardLetters[focus.x][focus.y] = "";
            board.children[getIndex(focus.x, focus.y)].innerHTML = "";
            break;
    }
}

//visuals for collage

const changeButton = document.getElementById("changeButton");
let visible = true;
const TO_RADIANS = Math.PI / 180;
ctx = document.getElementById("canvas").getContext("2d");

changeButton.onclick = function() {
    document.getElementById("bottom").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    document.getElementById("board").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    changeButton.innerHTML = (visible ? "Return to Game" : "See Progress");
    visible = !visible;
};


function rotateAndPaintImage(context, image, angleInRad, positionX, positionY, axisX, axisY) {
    context.translate(positionX, positionY);
    context.rotate(angleInRad);
    context.drawImage(image, -axisX, -axisY);
    context.rotate(-angleInRad);
    context.translate(-positionX, -positionY);
}

function addImage(info) {
    if (info.img == null) return;
    info = info.img;
    const img = new Image();
    img.src = info.src;
    rotateAndPaintImage(ctx, img, info.rotation, info.x, info.y, info.width / 2, info.height / 2);
}

// setup page

createBoard();
fillBoard();
addGame();
populateClues();