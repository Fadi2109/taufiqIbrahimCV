function onInit() {
  console.log("ready");
  renderPersonlDetails();
  renderSoftware();
  renderLanguages();
  renderworkExperience();
  renderEducation();
}

function renderPersonlDetails() {
  var html = "";
  for (var i = 0; i < personlDetails.length; i++) {
    if (personlDetails[i].item == "email") {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ": </b> <a href='mailto:" +
        personlDetails[i].value +
        "'>" +
        personlDetails[i].value +
        "</a></li></ul>";
    } else if (personlDetails[i].item == "phone") {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ":</b> <a href='tel:" +
        personlDetails[i].value +
        "'>" +
        personlDetails[i].value +
        "</a></li></ul>";
    } else {
      html +=
        "<ul><li>" +
        "<b>" +
        personlDetails[i].item +
        ": </b> " +
        personlDetails[i].value +
        "</li></ul>";
    }
  }
  document.getElementById("personlDetails").innerHTML = html;
}

function renderSoftware() {
  var html = "";
  for (var i = 0; i < software.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      software[i].item +
      ": </b> " +
      software[i].value +
      "</li></ul>";
  }
  document.getElementById("software").innerHTML = html;
}

function renderLanguages() {
  var html = "";
  for (var i = 0; i < languages.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      languages[i].item +
      ": </b> " +
      languages[i].value +
      "</li></ul>";
  }
  document.getElementById("languages").innerHTML = html;
}

function renderworkExperience() {
  var html = "";
  for (var i = 0; i < workExperience.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      workExperience[i].title +
      ": </b> " +
      workExperience[i].items +
      "</li></ul>";
  }
  document.getElementById("workExperience").innerHTML = html;
}

function renderEducation() {
  var html = "";
  for (var i = 0; i < education.length; i++) {
    html +=
      "<ul><li>" +
      "<b>" +
      education[i].title +
      ": </b> " +
      education[i].items +
      "</li></ul>";
  }
  document.getElementById("education").innerHTML = html;
}

// var personlDetails = [{
//         'item': "name",
//         'value': "Taufiq Ibrahim"
//     },
//     {
//         'item': "phone",
//         'value': "+972548669995"
//     },
//     {
//         'item': "email",
//         'value': "tau.ibra1996@gmail.com"
//     },

//     {
//         'item': "address",
//         'value': "Kfar Smia, Israel"
//     }
// ]
var personalDetails = [
  {
    item: "שם",
    value: "תאופיק איברהים",
  },
  {
    item: "טלפון",
    value: "+972548669995",
  },
  {
    item: 'דוא"ל',
    value: "tau.ibra1996@gmail.com",
  },
  {
    item: "כתובת",
    value: "כפר סמיע, ישראל",
  },
];

// var software = [{
//         item: "Highly proficient",
//         value: "with Web Applications, Vue, Angular and Microsoft Office",
//     },
//     {
//         item: "Very good",
//         value: "control of Firebase",
//     },
//     {
//         item: "Good control",
//         value: "of Node.js and MongoDB",
//     },
// ];
var software = [
  {
    item: "בעל מיומנות גבוהה",
    value: "באפליקציות אינטרנט, Vue, Angular ו-Microsoft Office",
  },
  {
    item: "בעל שליטה טובה מאוד",
    value: "ב-Firebase",
  },
  {
    item: "בעל שליטה טובה",
    value: "ב-Node.js ו-MongoDB",
  },
];

// var languages = [{
//         item: "Arabic",
//         value: "Mother's tongue",
//     },
//     {
//         item: "Hebrew",
//         value: "Full command",
//     },
//     {
//         item: "English",
//         value: "Very good command",
//     },
// ];
var languages = [
  {
    item: "ערבית",
    value: "שפת אם",
  },
  {
    item: "עברית",
    value: "שליטה מלאה",
  },
  {
    item: "אנגלית",
    value: "שליטה טובה מאוד",
  },
];

// var workExperience = [{
//         title: "2022 – Today, NLP Master Trainer, Independent",
//         items: ["Have my own clinic, Guide people to overcome their obstacles to achieve their goals",
//             "Programming Teacher in ProCode Academy"
//         ]
//     },
//     {
//         title: "2019 – Today, Staff manager, Full Stack developer",
//         items: [
//             "Staff manager in hi-tech company",
//             "Programmer in hi-tech company that works with the Ministry of Education, working with Angular & Nodejs & MongoDB"
//         ],
//     },
//     {
//         title: "2019 – Today, Construction of time systems, Independent",
//         items: [
//             "Building time systems for schools using the software in the company I work for",
//         ],
//     },
//     {
//         title: "2018 – Today, Assimilator and guide in Ischool company",
//         items: [
//             "Marketing the system and expanding new clients",
//             "Training and assimilation reaching 200 schools"
//         ],
//     },
//     {
//         title: "2014 – 2017, Jewelry shop manager",
//         items: [
//             "Raising business and expanding new clients",
//         ],
//     },
// ];
var workExperience = [
  {
    title: "2022 – עד היום, מאמן ראשי NLP, עצמאי",
    items: [
      "יש לי קליניקה פרטית, מנחה אנשים להתגבר על המכשולים שלהם כדי להשיג את מטרותיהם",
      "מורה לתכנות באקדמיה ProCode",
    ],
  },
  {
    title: "2019 – עד היום, מנהל צוות, מפתח Full Stack",
    items: [
      "מנהל צוות בחברת היי-טק",
      "תכנתן בחברת היי-טק העובדת עם משרד החינוך, עובד עם Angular, Node.js ו-MongoDB",
    ],
  },
  {
    title: "2019 – עד היום, בניית מערכות זמנים, עצמאי",
    items: ["בניית מערכות זמנים לבתי ספר באמצעות התוכנה בחברה בה אני עובד"],
  },
  {
    title: "2018 – עד היום, משתלם ומדריך בחברת Ischool",
    items: ["שיווק המערכת והרחבה ללקוחות חדשים", "הכשרה והטמעה ב-200 בתי ספר"],
  },
  {
    title: "2014 – 2017, מנהל חנות תכשיטים",
    items: ["הרחבת העסק וגיוס לקוחות חדשים"],
  },
];

// var education = [{
//         title: "2023 – NLP Master Trainer at PureNLP college, USA",
//         items: ["Charisma enhancement", "Guiding groups in the field of NLP"],
//     },
//     {
//         title: "2022 – Integral Eye Movement Therapy (IEMT), ForaChange College",
//         items: ["IEMT Therapist", "IEMT Senior therapist"],
//     },

//     {
//         title: "2021 – NLP Practitioner && NLP Practitioner Master at Bar Elan University",
//         items: [
//             "Model the skills of exceptional people, allowing anyone to acquire them.",
//         ],
//     },
//     {
//         title: "2020 – Full Stack programming course at ProCode Academy",
//         items: [
//             "Learning through PBL (Project-Based Learning)"
//         ],
//     },
//     {
//         title: "2017 – Full Stack programming course at Hackeru College",
//         items: [
//             "Frontend: HTML, CSS, JavaScript, .Net, React, Angular, Backend: Node.js, MongoDB, SQL Server",
//         ],
//     },
//     {
//         title: "2013-2014 – High school diploma",
//         items: [
//             "Completed matriculation certificate at the School of Sciences and Leadership, Yarka",
//         ],
//     },
// ];
var education = [
  {
    title: '2023 – מאמן ראשי NLP במכללת PureNLP, ארה"ב',
    items: ["שיפור כריזמה", "הדרכת קבוצות בתחום NLP"],
  },
  {
    title: "2022 – תרפיה בתנועת עיניים אינטגרלית (IEMT), מכללת ForaChange",
    items: ["מטפל ב-IEMT", "מטפל בכיר ב-IEMT"],
  },
  {
    title: "2021 – מתרגל NLP ומאסטר מתרגל NLP באוניברסיטת בר אילן",
    items: ["מידול כישורים של אנשים יוצאי דופן, מאפשר לכל אחד לרכוש אותם."],
  },
  {
    title: "2020 – קורס תכנות Full Stack באקדמיה ProCode",
    items: ["למידה דרך PBL (למידה מבוססת פרויקטים)"],
  },
  {
    title: "2017 – קורס תכנות Full Stack במכללת Hackeru",
    items: [
      "Frontend: HTML, CSS, JavaScript, .Net, React, Angular, Backend: Node.js, MongoDB, SQL Server",
    ],
  },
  {
    title: "2013-2014 – תעודת בגרות",
    items: ["סיום תעודת בגרות בבית הספר למדעים ומנהיגות, ירכא"],
  },
];

var myProjects = [
  {
    title: "IScore",
    link: "https://iscoreplus.co.il/",
    img: "./images/iscore.png",
    description:
      "Official government software for pedagogical management in schools",
    technologies: ["Angular", "Node", "MongoDB"],
    createdAt: "01/01/2013",
  },
];
