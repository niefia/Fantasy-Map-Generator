class CK3Ruler {
  constructor(id, name, dynasty, motherId, fatherId, culture, religion, age, birthDate, traits, attributes, skills, titlesHeld, rank, nickname, gender, sexuality) {
    this.id = id;
    this.name = name;
    this.dynasty = dynasty;
    this.motherId = motherId;
    this.fatherId = fatherId;
    this.culture = culture;
    this.religion = religion;
    this.age = age;
    this.birthDate = birthDate;
    this.traits = traits;
    this.attributes = attributes;
    this.skills = skills;
    this.titlesHeld = titlesHeld;
    this.rank = rank;
    this.nickname = nickname;
    this.gender = gender;
    this.sexuality = sexuality;
  }
}

function generateCK3Ruler() {
  const genders = ['Male', 'Female', 'Non-binary'];
  const names = ['Sage', 'Alex','Rowan','Avery','Jordan'];
  const fem_names = ['Catherine', 'Eleanor'];
  const masc_names = ['Aethelred', 'Bjorn', 'Dimitrios'];
  const genderIndex = Math.floor(Math.random() * genders.length);
  let name;

  if (genders[genderIndex] === 'Female') {
    const nameIndex = Math.floor(Math.random() * fem_names.length);
    name = fem_names[nameIndex];
  } else if (genders[genderIndex] === 'Male') {
    const nameIndex = Math.floor(Math.random() * masc_names.length);
    name = masc_names[nameIndex];
  } else {
    const nameIndex = Math.floor(Math.random() * names.length);
    name = names[nameIndex];
  }
  

  const dynasties = ['Wessex', 'Godwin', 'Normandy', 'Anjou', 'Doukid'];
  const traits = ['Brave', 'Ambitious', 'Charismatic', 'Cynical', 'Honest'];
  const attributes = ['Diplomacy', 'Martial', 'Stewardship', 'Intrigue', 'Learning'];
  const skills = {
    diplomacy: Math.floor(Math.random() * 21),
    martial: Math.floor(Math.random() * 21),
    stewardship: Math.floor(Math.random() * 21),
    intrigue: Math.floor(Math.random() * 21),
    learning: Math.floor(Math.random() * 21),
  };

  //const titlesHeld = ['d_wessex', 'k_norway', 'c_bayeux', 'e_byzantium', 'd_quitaine'];
  


  const nicknames = ['the Great', 'the Conqueror', 'the Wise', 'the Terrible', 'the Pious'];
  const sexualities = ['Heterosexual', 'Homosexual', 'Bisexual', 'Pansexual', 'Asexual'];
  const religions = ['Asatru', 'Shimber Church', 'Kragrirism','Qashism']


  const dynastyIndex = Math.floor(Math.random() * dynasties.length);
  const traitIndex1 = Math.floor(Math.random() * traits.length);
  const traitIndex2 = Math.floor(Math.random() * traits.length);
  const traitIndex3 = Math.floor(Math.random() * traits.length);

  const attributeIndex = Math.floor(Math.random() * attributes.length);
  //const titleIndex = Math.floor(Math.random() * titlesHeld.length);
  //const rankIndex = Math.floor(Math.random() * ranks.length);
  const nicknameIndex = Math.floor(Math.random() * nicknames.length);
  const sexualityIndex = Math.floor(Math.random() * sexualities.length);
  //const cultureIndex = Math.floor(Math.random() * cultures.length);
  const religionIndex = Math.floor(Math.random() * religions.length);

  //Date input and Birthday Generation
  const currentYear = 1000;//to be replaced by azgaar year
  const currentDate = new Date(currentYear, 0, 1); // set to Jan 1st, 1000
  const birthYear = Math.floor(Math.random() * 100) + 900;
  const birthMonth = Math.floor(Math.random() * 12) + 1;
  const birthDay = Math.floor(Math.random() * 28) + 1;
  const birthDate = `${birthYear}.${birthMonth}.${birthDay}`;
  const birthDateObj = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
  const birthDateFormatted = `${birthDateObj.getFullYear()}.${birthDateObj.getMonth() + 1}.${birthDateObj.getDate()}`;
  const ageInMilliseconds = currentDate - birthDateObj;
  const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // 31557600000 is the number of milliseconds in a year
  const age = ageInYears;

  //Unique ID generation
  function generateUniqueId() {
    return Math.floor(Math.random() * 1000000) + 1; // generate a random integer between 1 and 1000000
  }

  const usedIds = [];

  let rulerId = generateUniqueId();
  while (usedIds.includes(rulerId)) {
    rulerId = generateUniqueId();
  }
  usedIds.push(rulerId);




  //Title and Rank generator based off Character's Gender
  const titlesHeld = ['b_bayeux','c_bayeux', 'd_normandy', 'k_france','e_francia'];
  const titlePrefixesMasc = {'b': 'Baron', 'c': 'Count', 'd': 'Duke', 'k': 'King', 'e': 'Emperor'};
  const titlePrefixesFem = {'b': 'Baroness', 'c': 'Countess', 'd': 'Duchess', 'k': 'Queen', 'e': 'Empress'};
  const titlePrefixesNeut = {'b': 'Barone', 'c': 'Landgrave', 'd': 'Dux', 'k': 'Monarch', 'e': 'Imperator'};

  const titleIndex = Math.floor(Math.random() * titlesHeld.length);
  const title = titlesHeld[titleIndex];
  const titlePrefix = title[0].toLowerCase();
  const rank = (genderIndex === 1) ? titlePrefixesFem[titlePrefix] : (genderIndex === 2) ? titlePrefixesNeut[titlePrefix] : titlePrefixesMasc[titlePrefix];

  //const cultures = ['English', 'French', 'Norweigan','Greek']
  const cultures = ['Quenian (Elfish)', 'Uruk (Orkish)', 'Dail (Human)','Greek']

  const cultureIndex = Math.floor(Math.random() * cultures.length);




  const ruler = new CK3Ruler(
    rulerId, // ID
    name,
    dynasties[dynastyIndex],
    null, // mother ID
    null, // father ID
    cultures[cultureIndex],
    religions[religionIndex],
    age,
    birthDate,
    [traits[traitIndex1], traits[traitIndex2], traits[traitIndex3]], // array of three traits
    [attributes[attributeIndex]],
    skills,
    [titlesHeld[titleIndex]], // array of one title
    rank, // assigned rank
    nicknames[nicknameIndex],
    genders[genderIndex],
    sexualities[sexualityIndex]
  );



  document.getElementById("NameOutput").textContent = ruler.name;
  document.getElementById("AgeOutput").textContent = ruler.age;
  document.getElementById("GenderOutput").textContent = ruler.gender;
  document.getElementById("SexualityOutput").textContent = ruler.sexuality;
  document.getElementById("CultureOutput").textContent = ruler.culture;
  document.getElementById("ReligionOutput").textContent = ruler.religion;
  document.getElementById("NicknameOutput").textContent = ruler.nickname;
  document.getElementById("titleOutput").textContent = ruler.titlesHeld;
  document.getElementById("rankOutput").textContent = ruler.rank;
  document.getElementById("dynastyOutput").textContent = ruler.dynasty;
  document.getElementById("birthDateOutput").textContent = ruler.birthDate;


    return ruler;
    }
    
    const myRuler = generateCK3Ruler();
    console.log(myRuler);