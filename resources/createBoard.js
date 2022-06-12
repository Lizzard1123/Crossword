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
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

const acrossCollum = document.getElementById("across");
const verticleCollum = document.getElementById("verticle");

const clues = [{
        "clue": "Thanks for telling me he's white /s",
        "hint": "GHP buddy",
        "answer": "Richard",
        "comment": "Shame on me for assuming a steryotype",
        "start": {
            "x": 9,
            "y": 7
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "He forgot the condiments :(",
        "hint": "Best engineering teacher we had",
        "answer": "Johnson",
        "comment": "I DONT WANT NONE OF THAT GAY CRAP IN MY CLASSROOM",
        "start": {
            "x": 0,
            "y": 7
        },
        "found": false,
        "row": true,
        "img": {
            "x": -10,
            "y": 1360,
            "r": -15,
            "z-index": 0,
            "src": "resources/photos/IMG_4083.png"
        }
    },
    {
        "clue": "How many elim matches did we win this season in robotics (in my native language)",
        "hint": "English lol",
        "answer": "zero",
        "comment": "100% catie",
        "start": {
            "x": 10,
            "y": 2
        },
        "found": false,
        "row": false,
        "img": {
            "x": 830,
            "y": 0,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/65545232758__DF05CB9B-E22D-4FD7-9644-CD79DCFF7738_Original.png"
        }
    },
    {
        "clue": "May she Rest In Peace",
        "hint": "Chem",
        "answer": "mary_clark",
        "comment": "o7",
        "start": {
            "x": 17,
            "y": 7
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "Who is better at physics",
        "hint": "Not us",
        "answer": "tjhill",
        "comment": "He better be the first person you hire with your buisness",
        "start": {
            "x": 12,
            "y": 18
        },
        "found": false,
        "row": false,
        "img": {
            "x": 0,
            "y": 990,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_2019.jpg"
        }
    },
    {
        "clue": "You only got detention because it was subpar joke placement",
        "hint": "Egg teacher",
        "answer": "kozlowski",
        "comment": "Wish I would have had her as a teacher",
        "start": {
            "x": 8,
            "y": 2
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "You are such a ___ man",
        "hint": "Compliment?",
        "answer": "ruggedly_handsome",
        "comment": "At least in my eyes",
        "start": {
            "x": 7,
            "y": 14
        },
        "found": false,
        "row": true,
        "img": {
            "x": 1010,
            "y": 390,
            "r": 0,
            "z-index": -1,
            "src": "resources/photos/IMG_0630.PNG"
        }
    },
    {
        "clue": "Robotics team Game time: fuck",
        "hint": "Do you really need a hint",
        "answer": "Tyler",
        "comment": "Jealous",
        "start": {
            "x": 11,
            "y": 11
        },
        "found": false,
        "row": false,
        "img": {
            "x": 350,
            "y": 1470,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_6BA260AE700E-1.jpeg"
        }
    },
    {
        "clue": "This is his name off hours",
        "hint": "not chuck",
        "answer": "charlie",
        "comment": "What a man",
        "start": {
            "x": 1,
            "y": 18
        },
        "found": false,
        "row": false,
        "img": {
            "x": 350,
            "y": 1130,
            "r": 0,
            "z-index": -2,
            "src": "resources/photos/IMG_1298.PNG"
        }
    },
    {
        "clue": "You have all the merch",
        "hint": "car",
        "answer": "tesla",
        "comment": "hats, belts, underwear, ties, you name it...",
        "start": {
            "x": 1,
            "y": 14
        },
        "found": false,
        "row": true,
        "img": {
            "x": 1120,
            "y": -50,
            "r": 0,
            "z-index": -3,
            "src": "resources/photos/IMG_0664.png"
        }
    },
    {
        "clue": "How many questions did we record ç¬¨è›‹ asking?",
        "hint": "johnathan",
        "answer": "five_hundred_and_three",
        "comment": "I hate this kid /j",
        "start": {
            "x": 19,
            "y": 3
        },
        "found": false,
        "row": false,
        "img": {
            "x": 0,
            "y": 1100,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_E549CC4D2A01-1.jpeg"
        }
    },
    {
        "clue": "The other thing I'm totally not jealous over",
        "hint": "Harrison got it too lol",
        "answer": "ghp",
        "comment": "Blame it on covid /j",
        "start": {
            "x": 9,
            "y": 14
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "Robotics team game time: marry",
        "hint": "not me :(",
        "answer": "Catie",
        "comment": "I'm heartbroken fyi",
        "start": {
            "x": 12,
            "y": 0
        },
        "found": false,
        "row": true,
        "img": {
            "x": -30,
            "y": -10,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_82CBF9A1433B-1.jpeg"
        }
    },
    {
        "clue": "Totally not jealous you got in and I didn't",
        "hint": "Tech",
        "answer": "gtri",
        "comment": "Worked out in the end with summer school i guess",
        "start": {
            "x": 6,
            "y": 12
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "Name of the subsequent 2 robots",
        "hint": "you dont get one",
        "answer": "Bongo",
        "comment": "Never forget that he met Obama",
        "start": {
            "x": 6,
            "y": 5
        },
        "found": false,
        "row": false,
        "img": {
            "x": 540,
            "y": 0,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/EB3AB04A-F85F-4A70-AA64-AE7F6A4BF7BD.png"
        }
    },
    {
        "clue": "The much awaited sequel to brotherly love",
        "hint": ";)",
        "answer": "sisterly_love",
        "comment": ".....",
        "start": {
            "x": 7,
            "y": 9
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "The other other thing I'm not jealous of",
        "hint": "rocket go brrrrr",
        "answer": "isef",
        "comment": "I could have made a stovetop too /j",
        "start": {
            "x": 5,
            "y": 21
        },
        "found": false,
        "row": true,
        "img": {
            "x": 320,
            "y": 90,
            "r": 0,
            "z-index": -4,
            "src": "resources/photos/IMG_1679.png"
        }
    },
    {
        "clue": "Pimp mommy",
        "hint": "Psych",
        "answer": "Erin",
        "comment": "Odd",
        "start": {
            "x": 16,
            "y": 0
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "This animal learned what a gravitron was",
        "hint": "Tires",
        "answer": "opossum",
        "comment": "not my fault",
        "start": {
            "x": 14,
            "y": 16
        },
        "found": false,
        "row": false,
        "img": {
            "x": 290,
            "y": -240,
            "r": 0,
            "z-index": -5,
            "src": "resources/photos/67465738121__D671B8E9-CEAE-490C-880A-6E2B179E957D.png"
        }
    },
    {
        "clue": "The answer to the pot is a ___",
        "hint": "I know you dont want to hurt my feelings",
        "answer": "lie",
        "comment": "Still curious",
        "start": {
            "x": 13,
            "y": 11
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "Nicholas cage's biggest fear",
        "hint": "bane of arthropods",
        "answer": "bees",
        "comment": "To my knowlege this is the only movie you love dearly enough to quote",
        "start": {
            "x": 1,
            "y": 12
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "What is in the pot",
        "hint": "I think there is something",
        "answer": "nothing",
        "comment": "mmmmmmhmmmm",
        "start": {
            "x": 12,
            "y": 4
        },
        "found": false,
        "row": false,
        "img": {
            "x": 510,
            "y": 50,
            "r": 0,
            "z-index": -6,
            "src": "resources/photos/IMG_1992.PNG"
        }
    },
    {
        "clue": "Dog",
        "hint": "My sister",
        "answer": "Lily",
        "comment": "zoomies",
        "start": {
            "x": 10,
            "y": 20
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "Bongo is a",
        "hint": "snake",
        "answer": "sock",
        "comment": "Still angry",
        "start": {
            "x": 3,
            "y": 1
        },
        "found": false,
        "row": true,
        "img": {
            "x": 800,
            "y": 530,
            "r": 0,
            "z-index": -7,
            "src": "resources/photos/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg"
        }
    },
    {
        "clue": "The best 3D printer ever made",
        "hint": "We watched the V3 together",
        "answer": "positron",
        "comment": "Better engineering than F1",
        "start": {
            "x": 5,
            "y": 9
        },
        "found": false,
        "row": true,
        "img": {
            "x": -50,
            "y": 340,
            "r": 0,
            "z-index": -8,
            "src": "resources/photos/Krylin-Positron-3d-printer-624.jpeg"
        }
    },
    {
        "clue": "Robotics team game time: kill",
        "hint": "Prob deserve this",
        "answer": "ethan",
        "comment": "Id win the fight though so idk...",
        "start": {
            "x": 18,
            "y": 20
        },
        "found": false,
        "row": true,
        "img": {
            "x": 330,
            "y": 440,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_DAEB91A16494-1.jpeg"
        }
    },
    {
        "clue": "Faster than Google Earth",
        "hint": "tall",
        "answer": "Daniel",
        "comment": "literally the worldiest man of us all",
        "start": {
            "x": 15,
            "y": 7
        },
        "found": false,
        "row": false,
        "img": {
            "x": 500,
            "y": 750,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_1405.png"
        }
    },
    {
        "clue": "The sport we're gonna go pro in",
        "hint": "The only time you're up top",
        "answer": "beach_volleyball",
        "comment": "We seriously crushed it imo",
        "start": {
            "x": 21,
            "y": 7
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "(Not a trick question I swear) what is the best rocket company",
        "hint": "you 3d printed one",
        "answer": "spacex",
        "comment": "Isn't this why you're going into ASE?",
        "start": {
            "x": 15,
            "y": 23
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "Face pillow",
        "hint": "there was a Rick and Morty episode with him as a boar",
        "answer": "Elon",
        "comment": "It won't be too late to work for/with him don't worry",
        "start": {
            "x": 1,
            "y": 5
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "This shouldn't be music: Electric ___",
        "hint": "on way back from Armour's",
        "answer": "polka",
        "comment": "not my groove lol",
        "start": {
            "x": 2,
            "y": 3
        },
        "found": false,
        "row": true,
        "img": {
            "x": 1120,
            "y": 940,
            "r": 0,
            "z-index": 0,
            "src": "resources/photos/IMG_0672.png"
        }
    },
    {
        "clue": "Dog",
        "hint": "Tyler's too now",
        "answer": "Ranger",
        "comment": "Tongue deep in my dog",
        "start": {
            "x": 10,
            "y": 4
        },
        "found": false,
        "row": true,
        "img": {
            "x": -10,
            "y": 480,
            "r": 0,
            "z-index": -9,
            "src": "resources/photos/700CA4F0-3233-4802-98B2-2E42911DE37D.png"
        }
    },
    {
        "clue": "The only Music",
        "hint": "I listened to a couple during the frc trip",
        "answer": "sabaton",
        "comment": "still not better than a good ol audiobook",
        "start": {
            "x": 1,
            "y": 10
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "SWE big 5",
        "hint": "facebook still a thing apparently",
        "answer": "faang",
        "comment": "With all those leetcode questions you are doing, this is us at FAANG",
        "start": {
            "x": 0,
            "y": 20
        },
        "found": false,
        "row": true,
        "img": {
            "x": 1030,
            "y": 1240,
            "r": 0,
            "z-index": -10,
            "src": "resources/photos/IMG_37F430EA7233-1.jpeg"
        }
    },
    {
        "clue": "Apparently being lazy and not painting makes you an amazing engineer /s",
        "hint": "you strapped your phone to your car steering wheel to feel like a ___ driver",
        "answer": "formula_one",
        "comment": "I only like colored cars",
        "start": {
            "x": 23,
            "y": 4
        },
        "found": false,
        "row": false,
        "img": null
    },
    {
        "clue": "International science and ____ fair",
        "hint": "you were so proud of yourself for this one",
        "answer": "infidelity",
        "comment": "Where the best and brightest people meet",
        "start": {
            "x": 1,
            "y": 23
        },
        "found": false,
        "row": true,
        "img": null
    },
    {
        "clue": "You weren't there but can't stop telling the story",
        "hint": "What he said",
        "answer": "its_leaking",
        "comment": "It would have been so much better if you were there",
        "start": {
            "x": 4,
            "y": 10
        },
        "found": false,
        "row": false,
        "img": {
            "x": 190,
            "y": 460,
            "r": 0,
            "z-index": -11,
            "src": "resources/photos/516BD91C-AB56-4F57-A64A-61B71F9ED294.png"
        }
    },
    {
        "clue": "Hawaiian",
        "hint": "shirt",
        "answer": "fridays",
        "comment": "Every friday is Hawaiian friday.... duh",
        "start": {
            "x": 16,
            "y": 18
        },
        "found": false,
        "row": true,
        "img": {
            "x": 730,
            "y": 800,
            "r": 0,
            "z-index": -12,
            "src": "resources/photos/IMG_0446.png"
        }
    },
    {
        "clue": "____ are responsible for building all pyramids including the Louvre",
        "hint": "AirBnB Dallas craze",
        "answer": "mollusks",
        "comment": "Am I onto something?",
        "start": {
            "x": 4,
            "y": 0
        },
        "found": false,
        "row": false,
        "img": {
            "x": 720,
            "y": 1300,
            "r": 0,
            "z-index": -13,
            "src": "resources/photos/IMG_2018.jpg"
        }
    },
    {
        "clue": "Name of first robot",
        "hint": "It would be in the source code",
        "answer": "Fidel_Castro",
        "comment": "What started with a joke lead to a great team",
        "start": {
            "x": 3,
            "y": 18
        },
        "found": false,
        "row": true,
        "img": {
            "x": 380,
            "y": 810,
            "r": 0,
            "z-index": -14,
            "src": "resources/photos/IMG_2013.jpg"
        }
    }
];
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

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function populateClues() {
    shuffle(clues);
    for (let i = 0; i < clues.length; i++) {
        const clue = document.createElement("div");
        clue.innerHTML = (i + 1) + ") " + clues[i].clue;
        clue.setAttribute("class", "clue");
        clue.addEventListener("click", goTo, false);
        boardLetters[clues[i].start.y][clues[i].start.x] = (i + 1);
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
        document.getElementById("across").style.backgroundColor = "rgba(255,255,255,0.8)";
        document.getElementById("verticle").style.backgroundColor = "rgba(255,255,255,0.8)";
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
    highlight(row);
}

function goTo(e) {
    e = e.target;
    let num = parseInt(e.innerHTML[0]) - 1;
    if (e.innerHTML[1] != ")") {
        num = parseInt(e.innerHTML[0] + e.innerHTML[1]) - 1;
    }
    const info = clues[num];
    currentFocus = board.children[getIndex(info.start.x, info.start.y)];
    row = info.row;
    highlight(row);
    scroll(0, 0);
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
    if (e.key.length != 1 && e.key != " ") return;
    let letter = e.key.charAt(0);
    if ((letter.toLowerCase() == letter.toUpperCase()) && e.key != " ") return;
    if (currentFocus == null) return;
    if (e.key == " ") {
        letter = "_";
    }
    const info = getInfo(currentFocus);
    boardLetters[info.x][info.y] = letter;
    board.children[getIndex(info.x, info.y)].innerHTML = letter;
    if (row) {
        moveFocusRight(info);
    } else {
        moveFocusDown(info);
    }
    checkBoard();
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
            if (boardLetters[focus.x][focus.y] == "") {
                if (row) {
                    moveFocusLeft(focus);
                } else {
                    moveFocusUp(focus)
                }
            }
            boardLetters[focus.x][focus.y] = "";
            board.children[getIndex(focus.x, focus.y)].innerHTML = "";
            break;
    }
}

//visuals for collage

const changeButton = document.getElementById("changeButton");
const commentBox = document.getElementById("commentBox");
const photoBoard = document.getElementById("photoBoard");
let visible = true;
const TO_RADIANS = Math.PI / 180;

changeButton.onclick = function() {
    document.getElementById("bottom").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    document.getElementById("board").setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    commentBox.setAttribute("class", (!visible ? "fadeIn" : "fadeOut "));
    changeButton.innerHTML = (visible ? "Return to Game" : "See Progress");
    visible = !visible;
};


let currentImage = null;

function addImage(info) {
    if (info.img == null) return;
    info = info.img;
    const image = document.createElement("img");
    image.setAttribute("src", info.src);
    image.setAttribute("alt", "uh oh error");
    image.style.width = "30%";
    image.style.height = "auto";
    //currentImage = image;
    image.style.top = info.y + "px";
    image.style.left = info.x + "px";
    image.style.transform = "rotate(" + info.r + "deg)";
    image.style.zIndex = info["z-index"];
    photoBoard.appendChild(image);
}

function addComment(obj) {
    commentBox.innerHTML = obj.comment;
    commentBox.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) +
        "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
    commentBox.setAttribute("class", "comeOut");
    window.setTimeout(() => {
        commentBox.setAttribute("class", "comeIn");
    }, 20000);
}

function correct(obj) {
    obj.found = true;
    addComment(obj);
    addImage(obj);
}

function checkBoard() {
    console.log("checj");
    const children = board.children;
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].found) continue;
        for (j = 0; j < clues[i].answer.length; j++) {
            if (children[getIndex(clues[i].start.x + (clues[i].row ? j : 0), clues[i].start.y + (clues[i].row ? 0 : j))].innerHTML.toLowerCase() != clues[i].answer[j].toLowerCase()) {
                break;
            }
            if (j == clues[i].answer.length - 1) {
                correct(clues[i]);
            }
        }
    }
}

// setup page

createBoard();
addGame();
populateClues();
fillBoard();

//temp
/*
function fillAllPhotos() {
    for (let i = 0; i < clues.length; i++) {
        addImage(clues[i]);
    }
}

fillAllPhotos();


let current = 0;
let incriment = 10;
let cx = 0;
let cy = 0;
let cr = 0;
let cz = 0;

document.onkeydown = function(e) {
    e.preventDefault();
    console.log(e.key);
    switch (e.key) {
        case "e":
            addImage(clues[current]);
            cx = 0;
            cr = 0;
            cy = 0;
            current++;
            break;
        case "ArrowUp":
            cy -= incriment;
            clues[current - 1].img.y = cy;
            currentImage.style.top = cy + "px";
            break;
        case "ArrowDown":
            cy += incriment;
            clues[current - 1].img.y = cy;
            currentImage.style.top = cy + "px";
            break;
        case "ArrowLeft":
            cx -= incriment;
            clues[current - 1].img.x = cx;
            currentImage.style.left = cx + "px";
            break;
        case "ArrowRight":
            cx += incriment;
            clues[current - 1].img.x = cx;
            currentImage.style.left = cx + "px";
            break;
        case "a":
            cr -= 5;
            clues[current - 1].img.r = cr;
            currentImage.style.transform = "rotate(" + cr + "deg)";
            break;
        case "d":
            cr += 5;
            clues[current - 1].img.r = cr;
            currentImage.style.transform = "rotate(" + cr + "deg)";
            break;
        case "w":
            cz += 1;
            clues[current - 1].img["z-index"] = cz;
            currentImage.style.zIndex = cz;
            break;
        case "s":
            cz -= 1;
            clues[current - 1].img["z-index"] = cz;
            currentImage.style.zIndex = cz;
            break;
        case "t":
            console.log(clues);
            break;
    }
}
*/