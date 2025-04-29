// Array of question objects containing questions, answer options, and correct answers
const quizData = [
    {
      id: 1,
      question: "Which of the following is not a symptom of Malaria?",
      options: [
        "Sensation of coldness and shivering of body",
        "Running of high temperature",
        "Vomiting at times",
        "Running nose",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "'Tehri' Hydro Power Complex has been built on which of the following rivers?",
      options: ["Yamuna", "Ganga", "Gomati", "Bhagirathi"],
      answer: 3,
    },
    {
      id: 3,
      question: "Which of the following is not a river of northern India?",
      options: ["Ghagra", "Kosi", "Sutlej", "Tapti"],
      answer: 3,
    },
    {
      id: 4,
      question:
        "Given below is a column of tribes/races and another column containing names of the places that they inhabit. Find out the correct answer out of the four options given below showing the correct matching between them.",
      tableData: {
        headers: ["Sl.No.", "Tribes", "Sl.No.", "Places"],
        rows: [
          ["i.", "Afridis", "a.", "Bangladesh"],
          ["ii.", "Bhils", "b.", "Belgium"],
          ["iii.", "Chakma", "c.", "Madhya Pradesh"],
          ["iv.", "Flemings", "d.", "Pak-Afghan border"],
        ],
      },
      options: [
        "(A) i-a; ii-d; iii-c; iv-b",
        "(B) i-c; ii-d; iii-b; iv-a",
        "(C) i-d; ii-c; iii-a; iv-b",
        "(D) i-d; ii-a; iii-c; iv-b",
      ],
      answer: 2, // Correct answer is C (i-d; ii-c; iii-a; iv-b)
    },
    {
      id: 5,
      question:
        "Match the following pairs of sportsperson and the sports he/she is associated with in right order.",
      tableData: {
        headers: ["Sl.No.", "Sportsperson", "Sl.No.", "Sports"],
        rows: [
          ["1.", "Rachita Mistry (Panda)", "i)", "Cricket"],
          ["2.", "Dillip Tirkey", "ii)", "Olympic"],
          ["3.", "Pragya Ojha", "iii)", "Hockey"],
          ["4.", "Bijaya Satpathy", "iv)", "Child Marathon"],
          ["5.", "Budhia Singh", "v)", "Weight Lifting"],
        ],
      },
      options: [
        "1-iv; 2-iii; 3-i; 4-v; 5-ii",
        "1-iv; 2-iii; 3-i; 4-ii; 5-v",
        "1-iii; 2-iv; 3-i; 4-v; 5-ii",
        "1-iv; 2-i; 3-iii; 4-v; 5-ii",
      ],
      answer: 0, // Correct answer is A (1-iv; 2-iii; 3-i; 4-v; 5-ii)
    },
    {
      id: 6,
      question:
        "Tenzing Norgay conquered the Mount Everest with Edmund Hillary in?",
      options: ["1943", "1948", "1951", "1953"],
      answer: 3,
    },
    {
      id: 7,
      question:
        "Who wrote, 'Politicians are the same all over. They promise to build a bridge even when there's no river'?",
      options: [
        "Maxim Gorkey",
        "Nikita Khrushchev",
        "Soblia Dey",
        "Khuswant Singh",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "What is the name of the currency used in South Korea?",
      options: ["Euro", "Krone", "Dinar", "Won"],
      answer: 3,
    },
    {
      id: 9,
      question: "A satellite is said to be at geostationary orbit when-",
      options: [
        "the period of its rotation is about 72 hours and its height is 56000kms above the sea level",
        "the period of its rotation is about 24 hours and its height is 36000kms above the sea level",
        "the period of its rotation is about 48 hours and its height is 46000kms above the sea level",
        "None of these",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "Who of the following is not an Odissi dancer?",
      options: [
        "Sanjukta Panigrahi",
        "Uday Shankar",
        "Sonal Mansingh",
        "Kelu Charan Mahapatra",
      ],
      answer: 1,
    },
    // Continuing with questions 11-20
    {
        id: 11,
        question: "Given below is a column of towns/cities and another column containing the industries they are associated. Find out the correct answer out of the four options given below showing the correct matching between them.",
        tableData: {
            headers: ["Sl.No.", "Towns/cities", "Sl.No.", "Industries"],
            rows: [
                ["1.", "Agra", "a.", "leather"],
                ["2.", "Ahmedabad", "b.", "textile"],
                ["3.", "Bangalore", "c.", "aircraft"],
                ["4.", "Bhagalpur", "d.", "silk"],
                ["5.", "Cochin", "e.", "ship-building"]
            ]
        },
        options: [
            "(A) 1-a; 2-b; 3-c; 4-d & 5-e",
            "(B) 1-c; 2-d; 3-b; 4-a & 5-e",
            "(C) 1-d; 2-c; 3-a; 4-b & 5-e",
            "(D) None of these"
        ],
        answer: 0 // Correct answer is A (1-a; 2-b; 3-c; 4-d & 5-e)
    
    },
    {
      id: 12,
      question:
        "The Sun Temple of Odisha has been built in the shape of a giant chariot pulled by-",
      options: [
        "9 horses and 8 pairs of wheel",
        "7 horses and 11 pairs of wheel",
        "8 horses and 10 pairs of wheel",
        "7 horses and 12 pairs of wheel",
      ],
      answer: 3,
    },
    {
      id: 13,
      question:
        "The first Indian Railway line opened between Bombay and Thane on-",
      options: [
        "9<sup>th</sup> January, 1852",
        "18<sup>th</sup> April, 1853",
        "21<sup>st</sup> May, 1954",
        "26<sup>th</sup> June, 1955",
      ],
      answer: 1,
    },
    {
      id: 14,
      question:
        "The Indian Railways, the second largest rail network in the world, handles about-",
      options: [
        "70% of passenger & 75% of cargo traffic",
        "75% of passenger & 80% of cargo traffic",
        "78% of passenger & 85% of cargo traffic",
        "None of these",
      ],
      answer: 3,
    },
    {
        id: 15,
    question: "Which one of the following statements is incorrect? <br>The functions of the lungs is to-",
    statements: [
        "i. purify blood.",
        "ii. separate carbon dioxide and water vapour from blood.",
        "iii. Supply oxygen to blood.",
        "iv. supply pure blood to all parts of the body."
    ],
    options: [
        "(A) only i is incorrect",
        "(B) only iii is incorrect",
        "(C) only ii is incorrect",
        "(D) only iv is incorrect"
    ],
    answer: 3 // Correct answer is D (only iv is incorrect)
    },
    {
      id: 16,
      question: "Who of the following is not a cartoonist?",
      options: ["R.K.Laxman", "Shankar Pillai", "Amrita Pritam", "Sudhir Dhar"],
      answer: 2,
    },
    {
      
    id: 17,
    question: "Match the following pairs of stadium and its location.",
    tableData: {
        headers: ["Sl.No.", "Stadium", "Sl.No.", "Location"],
        rows: [
            ["1.", "Sura Pratap Stadium", "i)", "Cuttack"],
            ["2.", "Panposh Hockey Stadium", "ii)", "Dhenkanal"],
            ["3.", "Satyabrata Stadium", "iii)", "Rourkela"],
            ["4.", "Jawaharlal Indoor Stadium", "iv)", "Sambalpur"],
            ["5.", "V.S.S. Stadium", "v)", "Cuttack"]
        ]
    },
    options: [
        "(A) 1-i; 2-ii; 3-v; 4-iii & 5-iv",
        "(B) 1-ii; 2-iii; 3-i; 4-iv & 5-v",
        "(C) 1-ii; 2-iii; 3-i; 4-v & 5-iv",
        "(D) 1-iv; 2-iii; 3-i; 4-v & 5-ii"
    ],
    answer: 3 // Correct answer is D (1-iv; 2-iii; 3-i; 4-v & 5-ii)
    },
    {
      id: 18,
      question:
        "Mother Teresa, the first non-Indian, who got Nobel Prize in 1979 and Bharat Ratna in 1980 was born in?",
      options: ["Czechoslovakia", "Zurich", "Kolkata", "Albania"],
      answer: 3,
    },
    {
      id: 19,
      question: "Rajtarangini, composed by the famous Indian poetess Kalhana gives a vivid history of?",
      options: ["Kashmir", "Himachal Pradesh", "Rajsthan", "Haryana"],
      answer: 0,
    },
    {
      id: 20,
      question:
        "For which sports is Val Barker Cup awarded in the Olympic Games?",
      options: ["Swimming", "Boxing", "Long Jump", "High Jump"],
      answer: 1,
    },
    // Questions 21-30
    {
      id: 21,
      question:
        "Which of the following statements about Kalpana Chawla is false ?",
      options: [
        "She was an Indian born Russian cosmonaut and Engineer",
        "She went to space in space shuttle Columbia on a 16-days voyage in 1997",
        "She along with crew of six others was killed on 1st February, 2003 while landing in the second voyage of Columbia.",
        "None of these",
      ],
      answer: 0,
    },
    {
      id: 22,
      question: "Which of the following is not a Painter?",
      options: ["Satish Gujral", "Amrita Shergill", "Jamini Roy", "Begam Akhtar"],
      answer: 3,
    },
    {
      id: 23,
      question: "Muslim League was formed at Dacca on 31st December, 1906 by-",
      options: [
        "Nawab Salimullah Khan",
        "Zulfquar Alli Bhutto",
        "Mohammad Alli Jinah",
        "Khan Abdul Gaffar Khan",
      ],
      answer: 0,
    },
    {
      id: 24,
      question:
        "Bharatiya Gyanapith Award was founded by Shanti Bhusan Jain in the year-",
      options: ["1944", "1950", "1956", "1962"],
      answer: 0,
    },
    {
      id: 25,
      question:
        "Which of the following series of countries of the world has been arranged in sequence of bigger to smaller in terms of geographical area?",
      options: [
        "Russia, Canada, United States",
        "Russia, China, Brazil",
        "United States, Canada, Russia",
        "Canada, China, Russia",
      ],
      answer: 0,
    },
    {
      id: 26,
      question:
        "The UNO was established on 24<sup>th</sup> October, 1945 with delegates from —",
      options: ["35 countries", "40 countries", "45 countries", "50 countries"],
      answer: 3,
    },
    {
      id: 27,
      question:
        "The temple of Lord Nilamadhav built in replica of the Jagannath Temple is located in-",
      options: ["Koraput", "Nayagarh", "Keonjhar", "Kantilo"],
      answer: 1,
    },
    {
      id: 28,
      question: "Which of the following is the most populous states of India as per 2011 Census?",
      options: ["Uttar Pradesh", "Maharastra", "Bihar", "West Bengal"],
      answer: 0,
    },
    {
      id: 29,
      question:
        "The first charter of English liberties for barons, church and common men was signed by King John II in-",
      options: ["1215", "1218", "1221", "1225"],
      answer: 0,
    },
  
    {
      id: 30,
      question:
        "Given below are names of Industries/Research centre in one column and names of the places of their location in the other. Find out the pair which mismatches.",
      tableData: {
        headers: ["Sl.No.", "Industry/Research centre", "Place"],
        rows: [
          ["1", "Indian Veterinary Research Institute", "Izatnagar"],
          ["2", "Indian Institute of Virology", "Bengaluru"],
          ["3", "Indian Institute of Sugarcane Research", "Lucknow"],
          ["4", "National Sugar Institute", "Kolkata"],
          ["5", "National Defence College", "New Delhi"],
        ],
      },
      options: ["(A) Sl. No.1", "(B) Sl. No.2", "(C) Sl. No.3", "(D) Sl. No.4"],
      answer: 3, // Correct answer is D (SI.No.4)
    },
  
    {
      id: 31,
      question: "'NRI' Day is observed on which of the following days?",
      options: [
        "7<sup>th</sup> January",
        "8<sup>th</sup> January",
        "9<sup>th</sup> January",
        "10<sup>th</sup> January",
      ],
      answer: 2,
    },
    {
      id: 32,
      question: "The Dronacharya Award is associated with-",
      options: [
        "Eminent surgeons",
        "Famous artistes",
        "Sports coaches",
        "Expert engineers",
      ],
      answer: 2,
    },
    {
      id: 33,
      question:
        "Who of the following wrote the prayer 'Ahe Dyamava Biswa Bihari'?",
      options: [
        "Madhusudan Rao",
        "Madhusudan Dash",
        "Gouri Shanakar Ray",
        "Ramakrushna Nanda",
      ],
      answer: 0,
    },
    {
      id: 34,
      question: "What is the official language of Meghalaya?",
      options: ["Roman", "English", "Miji", "Mishmi"],
      answer: 1,
    },
    {
      id: 35,
      question: "Which of the following rivers divides Odisha and West Bengal?",
      options: ["Baitarani", "Budhabalanga", "Subamarekha", "Salandi"],
      answer: 2,
    },
    {
      id: 36,
      question:
        "Swami Vivekanand represented India in the World Congress of religions at Chicago in?",
      options: ["1893", "1896", "1899", "1903"],
      answer: 0,
    },
    {
      id: 37,
      question:
        "Which constitutional amendment substituted 'Odisha' for 'Orissa' and 'Odia' for 'Oriya'?",
      options: [
        "91<sup>st</sup> amendment, 2003",
        "95<sup>th</sup> amendment, 2010",
        "93<sup>rd</sup> amendment, 2006",
        "96<sup>th</sup> amendment, 2011",
      ],
      answer: 3,
    },
    {
      id: 38,
      question:
        "Which of the following is not a fundamental right according to constitution of India?",
      options: [
        "Right to equality",
        "Right to particular freedom",
        "Right against exploitation",
        "Right to acquire property",
      ],
      answer: 3,
    },
    {
      id: 39,
      question:
        "	Appearance of periodic warm and saline ocean current in the Pacific Ocean, west of Peru which is believed to be weakening the monsoon currents over India is called-",
      options: ["Ecliptic", "Cumulous", "Kuro Siwo", "El Nino"],
      answer: 3,
    },
    {
      id: 40,
      question:
        "Who of the following Odia writer is not a winner of Gyanapitha Award?",
      options: [
        "Sachidanand Routray",
        "Sitakanta Mohapatra",
        "Pratibha Ray",
        "Manoj Das",
      ],
      answer: 3,
    },
  
    // Questions 41-50
    {
      id: 41,
      question:
        "The world famous Khajuraho temples were built by the kings of which of the following	dynasties?",
      options: ["Chandela", "Chauhan", "Parmar", "Chalukya"],
      answer: 0,
    },
    {
      id: 42,
      question:
        "Which of the following is not a literal creation of Upendra Bhanja?",
      options: ["Labanyabati", "Premachintainani", "Chitralekha", "Chandrakala"],
      answer: 3,
    },
    {
      id: 43,
      question: "'Cusec' means-",
      options: [
        "One cubic foot of water flow per second",
        "One cubic foot of water flow per minute",
        "One cubic meter of water per second",
        "None of these",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "World War-I broke out  on November 11 of the year in which  Panama Canal was opened. What is that year?",
      options: ["1910", "1912", "1914", "1918"],
      answer: 2,
    },
    {
      id: 45,
      question:
        "Which of the following is not a factor behind the rainfall of a place?",
      options: [
        "Distance from the north or south pole",
        "Direction of wind and mountain",
        "Nearness from the sea",
        "Forest and warm currents",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "Equinoxes occur throughout the globe on-",
      options: [
        "January, 18 & August, 21",
        "March, 21 & September, 23",
        "February, 19 & September, 23",
        "None of these",
      ],
      answer: 1,
    },
    {
      id: 47,
      question: "The Panchpatmali is famous for mining of-",
      options: ["Chromite", "Bauxite", "Graphite", "Dolomite"],
      answer: 1,
    },
    {
        id: 48,
        question: "Find out which of the following pairs of books and authors is incorrect.",
        tableData: {
            headers: ["Sl.No.", "Book", "Author"],
            rows: [
                ["1.", "Alice in Wonder Land", "Lewis Carroll"],
                ["2.", "Abhigyan Shakuntalan", "Kali Das"],
                ["3.", "Artha Sastra", "Koutilya"],
                ["4.", "Birds and Beasts", "Mark Twain"],
                ["5.", "Borken Wings", "Arundhati Ray"]
            ]
        },
        options: [
            "(A) Sl.No.1",
            "(B) Sl.No.2", 
            "(C) Sl.No.3",
            "(D) Sl.No.5"
        ],
        answer: 3 // Correct answer is D (Sl.No.5 is incorrect - should be "Arundhati Roy" not "Ray")
    },

    {
      id: 49,
      question:
        "Find out the incorrect one of the following pairs of the great personlaity and his actual name?",
      options: [
        "Bagha Jatin-Jatin Mukherjee",
        "Chandan Hajuri- Chakhi Khuntia",
        "Pathani Samanta-Chandra Sekhar Srichandan",
        "Sarala Das- Sidheswar Parida",
      ],
      answer: 3,
    },
    {
      id: 50,
      question:
        "When did Veer Surendra Sai first declare his revolt against the British regime?",
      options: ["1817", "1827", "1837", "1847"],
      answer: 1,
    },
  
    // Questions 51-60
    {
      id: 51,
      question: "'Ammeter' is used in aircraft for measuring strength of-",
      options: [
        "Electric current",
        "Velocity of wind",
        "Speed of light",
        "None of these",
      ],
      answer: 0,
    },
    {
      id: 52,
      question:
        "Who was the first Russian cosmonaut to orbit the Earth in Vostok-I on 12th April, 1961?",
      options: [
        "Andriail Nicolayev",
        "Alexei Leonov",
        "Yuri Gagarin",
        "Vitaly Sevastyanov",
      ],
      answer: 2,
    },
    {
      id: 53,
      question: "'Dengue' fever is caused by —",
      options: [
        "Varicella - Zoster virus",
        "Aedes aegypti mosquito",
        "Hepatitis A virus",
        "None of these",
      ],
      answer: 1,
    },
    {
      id: 54,
      question:
        "Name the famous battle wherein Rana Pratap was defeated by Mughal Army led by Raja Mansingh",
      options: [
        "Battle of Haldighat",
        "Battle of Panipat",
        "Battle of Buxar",
        "None of these",
      ],
      answer: 0,
    },
    {
      id: 55,
      question:
        "Adam's Bridge, a 28-km long bridge of rocks and sand, connects between-",
      options: [
        "Britain & Switzerland",
        "Pakistan and India",
        "India and Bangladesh",
        "India and Srilanka",
      ],
      answer: 3,
    },
    {
      id: 56,
      question: "Who is the brand Ambassador of newly formed Telengana state?",
      options: ["Sania Mirza", "Saina Nehwal", "V.V.S.Laxman", "P.V.Sindhu"],
      answer: 0,
    },
    {
      id: 57,
      question:
        "Who presided over the first session of the Indian National Congress?",
      options: [
        "Woinesh Chandra Banerjee",
        "Surendranath Banerjee",
        "Mahatma Gandhi",
        "G.K.Gokhale",
      ],
      answer: 0,
    },
    {
        id: 58,
        question: "Find out which of the following statements of Invention/Discovery, Scientist & Year is incorrect?",
        tableData: {
            headers: ["Sl.No", "Invention/Discovery", "Scientist", "Year"],
            rows: [
                ["1.", "Helicopter", "Briquette Brothers", "1909"],
                ["2.", "Incandescent Bulb", "Marry Curre, USA", "1879"],
                ["3.", "Improved Power Elevator (lift)", "Otis and Watson", "1852"],
                ["4.", "Laser", "Gordon Gouid, USA", "1957"],
                ["5.", "Motor Cycle", "G.Dainibar, Germany", "1885"]
            ]
        },
        options: [
            "(A) Sl.No.2",
            "(B) Sl.No.3",
            "(C) Sl.No.4",
            "(D) Sl.No.5"
        ],
        answer: 0 // Correct answer is A (Sl.No.2 is incorrect - should be Thomas Edison, not "Marry Curre")
    },

    {
      id: 59,
      question: "Who is the chief Executive Officer of the Zilla Parishad?",
      options: [
        "Project Director, DRDA",
        "District Panchayat Officer",
        "Collector",
        "Addl. District Magistrate",
      ],
      answer: 1,
    },
    {
      id: 60,
      question: "One degree of latitude from Equator measures about",
      options: ["100 kms", "105 kms", "110 kms", "None of these"],
      answer: 3,
    },
  
    // Questions 61-70
    {
      id: 61,
      question:
        " Which of the following countries are respectively the largest producers of Coal, Iron Ore and Aluminium?",
      options: [
        "USA, Brazil & Russia",
        "USA, USA & USA",
        "Australia, Australia & Canada",
        "China, China & China",
      ],
      answer: 3,
    },
    {
      id: 62,
      question:
        "Which one of the following statements about human body is incorrect?",
      options: [
        "Human heart beats 72 times a minute.",
        "The master gland of human body is pituitary.",
        "The number of muscles in human body is 639.",
        "The number of chromosomes in human body is 48 or 24 pairs.",
      ],
      answer: 3,
    },
    {
      id: 63,
      question: "The length of Odisha coast is about-",
      options: ["480kms", "580kms", "680kms", "780kms"],
      answer: 0,
    },
    {
      id: 64,
      question:
        "Universities in India were first established at Kolkata, Bombay and Madras in the year",
      options: ["1877", "1867", "1857", "1847"],
      answer: 2,
    },
    {
      id: 65,
      question: "Which of the following statement is incorrect?",
      options: [
        "Brass is an alloy of Copper & Zinc",
        "Stainless steel is the alloy of chromium, nickel, iron and manganese",
        "Bronze is an alloy of tin and copper",
        "None of these",
      ],
      answer: 3,
    },
    {
      id: 66,
      question: "The year 1920 is not associated with which event?",
      options: [
        "Non-cooperation Movement",
        "Bal Gangadhar Tilak Passes away",
        "Indian Red Cross Society set up",
        "Azad Hind fouz formed",
      ],
      answer: 3,
    },
    {
      id: 67,
      question: "Which of the following is not a literary creation of Gangadhar Meher?",
      options: ["Pranayaballari", "Chilika", "Tapaswini", "Indumati"],
      answer: 1,
    },
    {
      id: 68,
      question:
        "The machine used for recording electric current passing through the brain to determine brain disease is called ?",
      options: [
        "Electrometer",
        "Electrocardiogram",
        "Electroencephalograph",
        "None of these",
      ],
      answer: 2,
    },
    {
      id: 69,
      question: "The Crust of earth has the following percentage of Oxygen",
      options: ["49.85%", "59.95%", "69.05%", "None of these"],
      answer: 0,
    },
    {
      id: 70,
      question:
        "The national anthem 'Jana gana mana',composed by Ravindranath Tagore was first sung at Calcutta session of Indian National Congress on-",
      options: [
        "27<sup>th</sup> October, 1916",
        "27<sup>th</sup> November, 1928",
        "26<sup>th</sup> January, 1938",
        "27<sup>th</sup> December, 1911",
      ],
      answer: 3,
    },
  
    // Questions 71-80
    {
      id: 71,
      question:
        "What percentage of Manganese is available in Odisha comparison to all India reserve?",
      options: ["30%", "32%", "34%", "36%"],
      answer: 2,
    },
    {
        id: 72,
        question: "Given below is a column of places and another column containing brief statements of their importance. Find out the correct answer out of the four options given below showing the correct matching between them.",
        tableData: {
            headers: ["Sl.No.", "Places", "Sl.No.", "Meanings"],
            rows: [
                ["i.", "Amarkantak", "a.", "source of Narmada and Tapti in Madhya Pradesh"],
                ["ii.", "Abadon, Iran", "b.", "active volcano in the Andes mountains"],
                ["iii.", "Baku, Azerbaijan", "c.", "noted for petroleum"],
                ["iv.", "Cotopaxi", "d.", "noted for oil refinery"]
            ]
        },
        options: [
            "(A) i-a; ii-d; iii-c; & iv-b",
            "(B) i-c; ii-d; iii-a & iv-b",
            "(C) i-a; ii-c; iii-b; & iv-d",
            "(D) i-d; ii-a; iii-c; & iv-b"
        ],
        answer: 0 // Correct answer is A (i-a; ii-d; iii-c; & iv-b)
    },
    {
      id: 73,
      question: "The average depth of the oceans on earth is-",
      options: ["5.5 kms", "4.4 kms", "3.5 kms", "2.3 kms"],
      answer: 2,
    },
    {
        id: 74,
        question: "Pick out the incorrect one of the following pairs of important year and events.",
        tableData: {
            headers: ["Sl.No.", "Year", "Event"],
            rows: [
                ["1.", "1940", "Mohmed Ali Jina demands separate statehood for Pakistan"],
                ["2.", "1942", "8 August, Quit India Resolution"],
                ["3.", "1943", "21 Oct, INA organised by Sublias Chandra Bose"],
                ["4.", "1950", "November 26, Constitution of India adopted"]
            ]
        },
        options: [
            "(A) Sl.No. 1",
            "(B) Sl.No. 2",
            "(C) Sl.No. 3",
            "(D) Sl.No. 4"
        ],
        answer: 3 // Correct answer is D (Sl.No. 4 is incorrect - Constitution adopted on Jan 26, 1950)
    },
    {
        id: 75,
        question: "Which of the following pairs of disease and the affected part of human body is incorrect?",
        tableData: {
            headers: ["Sl.No.", "Disease", "Part of human body"],
            rows: [
                ["i.", "Asthma", "bronchial muscles"],
                ["ii.", "Diabetes", "pancreas"],
                ["iii.", "Encephalitis", "thyroid gland"],
                ["iv.", "Goitre", "brain"]
            ]
        },
        options: [
            "(A) Only i & ii are incorrect",
            "(B) Only ii is incorrect",
            "(C) Only iii & iv are incorrect",
            "(D) Only iv is incorrect"
        ],
        answer: 2 // Correct answer is C (Only iii & iv are incorrect)
    },
    {
      id: 76,
      question: "The Equator does not pass through which of the following country?",
      options: ["Indonesia", "Mexico", "Brazil", "Columbia"],
      answer: 1,
    },
    {
      id: 77,
      question: "Which of the following statements on Prime Meridian is correct ?",
      options: [
        "It is the Meridian from which longitude is measured",
        "0' degree longitude is measured from here",
        "It passes through Greenwich near London which had once a famous observatory.",
        "All of these",
      ],
      answer: 3,
    },
    {
      id: 78,
      question:
        "Indian-born Hargovind Khorana got Nobel Prize for his work on Genetic Code in the year?",
      options: ["1962", "1964", "1966", "1968"],
      answer: 3,
    },
    {
      id: 79,
      question: "On which of the fol1owing date the day at Arctic Circle is of 24 hours duration?",
      options: ["June, 21", "May, 22", "April, 23", "June, 22"],
      answer: 0,
    },
    {
        id: 80,
        question: "Arrange the names of the following Indian Presidents in order of their incumbency.",
        tableData: {
            headers: ["Sl.No.", "Name"],
            rows: [
                ["1.", "Dr. Rajendra Prasad"],
                ["2.", "Dr. S. Radhakrishnan"],
                ["3.", "Dr. Zakir Hussain"],
                ["4.", "Sjt. V.V. Giri"],
                ["5.", "Fakhruddin Ali Ahmed"]
            ]
        },
        options: [
            "(A) 1,3,4,2 & 5",
            "(B) 1,2,4,3 & 5",
            "(C) 1,2,3,4 & 5",
            "(D) 2,1,3,4 & 5"
        ],
        answer: 1 // Correct answer is B (1,2,4,3&5)
    },
  
    // Questions 81-90
    {
      id: 81,
      question: "Which of the following countries are respectively the largest producers of tea, wheat and wool?",
      options: [
        "China, Bangladesh, UK",
        "India, Thailand, Russia",
        "India, China, Australia",
        "Bangladesh, Malaysia, USA",
      ],
      answer: 2,
    },
    {
      id: 82,
      question: "‘Bharat Ninnan Yojana’ is intended for the development of which of the following ?",
      options: [
        "Urban infrastructure",
        "Rural Infrastructure",
        "Bridges and roads",
        "Information technology",
      ],
      answer: 1,
    },
    {
      id: 83,
      question: "The normal temperature in the body of human beings is?",
      options: [
        "37.2 &deg;C",
        "39.2 &deg;C",
        "37.4 &deg;C",
        "39.4 &deg;C",
      ],
      answer: 0,
    },
    {
      id: 84,
      question: "Which of the following is not a measure of prevention of Smallpox?",
      options: [
        "Isolation of patient till the last crust of rashes separate",
        "Disinfection of premises",
        "Destruction of sputum",
        "Cleaning patients' clothing in washing machine",
      ],
      answer: 3,
    },
    {
      id: 85,
      question:
        "In 1907, the Indian National Congress split into moderates and extremists on selection of President at Surat Session. Who was elected President with support of the moderates?",
      options: [
        "A.O.Hume",
        "M.K.Gandhi",
        "Rash Bihari Bose",
        "Bipin Chandra Paul",
      ],
      answer: 3,
    },
    {
      id: 86,
      question:
        "The highest waterfall that measures about 1000 meters and is located in Venezuela is called-",
      options: ["Tugela", "Jog Fall", "Angel", "Cuquenan"],
      answer: 2,
    },
    {
      id: 87,
      question: "Neil Armstrong, the first American astronaut, set foot on the moon on-",
      options: [
        "21<sup>st</sup> July, 1857",
        "13<sup>th</sup> September, 1959",
        "20<sup>th</sup> August, 1858",
        "18<sup>th</sup> October, 1961",
      ],
      answer: 0,
    },
    {
        id: 88,
        question: "Which of the following is not a rule of hoisting the Indian national flag?",
        options: [
            "(A) The saffron colour band should always be at the top",
            "(B) No flag or emblem should be placed above or to the left of the national flag",
            "(C) While marching it should be held on the right or in the centre",
            "(D) It can be taken down on the next day morning of hoisting"
        ],
        answer: 3 // Correct answer is D (Flag must be taken down before sunset)
    },
    {
      id: 89,
      question: "Which place is known as the Kashmir of Odisha?",
      options: ["Deomali", "Daringbadi", "Saptasajjya", "Satakoshia"],
      answer: 1,
    },
    {
        id: 90,
        question: "Match the following pairs of Award and its founder?",
        tableData: {
            headers: ["Sl.No.", "Award", "Sl.No.", "Founder"],
            rows: [
                ["1.", "Kalinga Award", "i)", "Harekrushna Mahatab"],
                ["2.", "Bisuba Samman", "ii)", "Biju Pattanaik"],
                ["3.", "Atibadi Jagannath Das", "iii)", "Sambalpur University"],
                ["4.", "Gangadhar National Award", "iv)", "Srujani"],
                ["5.", "Guru Kelucharan Award", "v)", "Odia Sahitya Academy"]
            ]
        },
        options: [
            "(A) 1-ii; 2-i; 3-v; 4-iii & 5-iv",
            "(B) 1-iv; 2-iii; 3-i; 4-ii & 5-v",
            "(C) 1-ii; 2-i; 3-iv; 4-iii & 5-v",
            "(D) 1-iv; 2-iii; 3-i; 4-v & 5-ii"
        ],
        answer: 0 // Correct answer is A (1-ii; 2-i; 3-v; 4-iii & 5-iv)
    },
  
    // Questions 91-100
    {
      id: 91,
      question: "The Chief Justice of Odisha High Court is appointed by-",
      options: [
        "The Governor of Odisha",
        "The Prime Minister",
        "The Chief Justice of Supreme Court",
        "The President of India",
      ],
      answer: 3,
    },
    {
      id: 92,
      question:
        "When Odisha became a separate state on 1<sup>st</sup> April, 1936, the number of districts was-",
      options: ["Five", "Six", "Seven", "Thirteen"],
      answer: 1,
    },
    {
        id: 93,
        question: "Pick out the incorrect one of the following pairs of important year and the event that occurred in it",
        tableData: {
            headers: ["Sl.No.", "Year", "Event"],
            rows: [
                ["1", "1576", "Battle of Haldighat"],
                ["2", "1757", "June 23, Battle of Plassey"],
                ["3", "1761", "Third Battle of Panipat"],
                ["4", "1764", "October 22, Battle of Buxar"]
            ]
        },
        options: [
             "(A) Sl.No. 1",
             "(B) Sl.No. 2",
             "(C) Sl.No. 3",
             "(D) None"
        ],
        answer: 3 // Most accurate answer
    },
    {
        id: 94,
        question: "Find out which of the following pairs of books and authors is incorrect.",
        tableData: {
            headers: ["Sl.No.", "Book", "Author"],
            rows: [
                ["1.", "Dr. Jekyll and Mr. Hybe", "R.L Stevensom"],
                ["2.", "5th Column", "R. Nest Hemigway"],
                ["3.", "Gita Gobinda", "Jaydev"],
                ["4.", "Godaan", "Munsi Prem Chand"],
                ["5.", "The Guide", "Mulk Raj Anand"]
            ]
        },
        options: [
            "(A) Sl.No.1",
            "(B) Sl.No.3",
            "(C) Sl.No.5",
            "(D) Sl.No.4"
        ],
        answer: 0 // Correct answer is A (Sl.No.1 is incorrect - multiple errors)
    },
    {
        id: 95,
        question: "Given below is a column of towns/cities and another column containing names of the industries they are associated. Find out the correct answer out of the four options given below showing the correct matching between them.",
        tableData: {
            headers: ["Sl.No.", "Towns/cities", "Sl.No.", "Industries"],
            rows: [
                ["1.", "Dhariwal", "a.", "tobacco"],
                ["2.", "Guntur", "b.", "woollen goods"],
                ["3.", "Jalandhar", "c.", "diamonds"],
                ["4.", "Katni", "d.", "cement"],
                ["5.", "Kimberley", "e.", "sports goods"]
            ]
        },
        options: [
            "(A) 1-a; 2-b; 3-c; 4-d & 5-e",
            "(B) 1-c; 2-d; 3-b; 4-a & 5-e",
            "(C) 1-d; 2-c; 3-a; 4-b & 5-e",
            "(D) 1-b; 2-a; 3-e; 4-d & 5-c"
        ],
        answer: 3 // Correct answer is D (1-b; 2-a; 3-e; 4-d & 5-c)
    },
    {
        id: 96,
        question: "Pick out the incorrect pair of the important year and the event that occurred in it from the following",
        tableData: {
            headers: ["Sl.No.", "Year", "Event"],
            rows: [
                ["1.", "569 AD", "Birth of Prophet Mohammad at Mecca"],
                ["2.", "1215", "Magna Carta signed by King John II"],
                ["3.", "1494", "Columbus discovered America"],
                ["4.", "1498", "Vasco da Gama discovered sea route to India"]
            ]
        },
        options: [
            "(A) Sl.No. 3",
            "(B) Sl.No. 2",
            "(C) Sl.No. 1",
            "(D) None of these"
        ],
        answer: 0 // Correct answer is A (Sl.No.3 is incorrect - Columbus discovered America in 1492)
    },
    {
      id: 97,
      question: "Who was first muslim ruler of Odisha?",
      options: [
        "Allaud-din Baktiya",
        "Mahammad Sayeed",
        "Subiman Karrani",
        "Qutab-ud-din Aibak",
      ],
      answer: 2,
    },
    {
      id: 98,
      question: "Which of the following rivers does not flow into the Bay of Bengal?",
      options: ["Godavari", "Krishna", "Cauvery", "None of these"],
      answer: 3,
    },
    {
      id: 99,
      question: "Odisha became part of British empire during reign of-",
      options: [
        "Warren Hastings",
        "Lord Cornwallis",
        "William Bentick",
        "Lord Wellesly",
      ],
      answer: 0,
    },
  
    {
      id: 100,
      question:
        "The first Odisha Legislative Assembly met in Ravenshaw College Hall at Cuttack on?",
      options: [
        "25th July,1936",
        "28th July,1937",
        "25th June,1937",
        "28th June,1937",
      ],
      answer: 1,
    },
  ];