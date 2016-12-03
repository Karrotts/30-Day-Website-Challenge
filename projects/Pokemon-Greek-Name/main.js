var names = {
 "water": ["Achelous","Buros","Manos","Kostas","Florou","Bani"],
 "ice": ["Remes","Anthis","Karras","Sarkis","Mingas","Demetrios"],
 "fire": ["Stamas","Remes","Pulou","Cleandros","Loxias","Euaemon"],
 "fighting": ["Ares","Enyalius", "Mars","Stefanos","Pietro","Ajax"],
 "fairy": ["Atlas","Attis","Markos","Hermione","Brison","Thyrsos"],
 "normal": ["Alastor","Asclepius","Aesculapius","Proto","Hylas","Dexicos"],
 "dragon": ["Protus","Astera","Lais","Rizon","Coronos","Damon"],
 "grass": ["Aristaeus","Aristaios","Economos","Theages","Pelonus","Ceyx"],
 "psychic": ["Themis","Aethre","Timo","Leon","Elatos","Nothon"],
 "flying": ["Aeolus","Aeolos","Eolus","Boreas","Aquilo","Aquilon"],
 "posion": ["Dexios","Cylon","Linus","Spertias","Aegle","Sotera"],
 "rock": ["Dryas","Rhesus","Kynna","Maro","Nicias","Chilon"],
 "steel": ["Chronos","Aristos","Pedocles","Selagus","Alector","Perimos"],
 "ground": ["Talos","Charax","Simonides","Rhea","Lampito","Chryse"],
 "bug": ["Cineas","Polyas","Isidor","Oroites","Charon","Eniopus"],
 "dark": ["Chaos", "Khaos","Krampus","Neritos","Diodorus"],
 "ghost": ["Aeropus","Cylon","Daphis","Aetes","Lycus","Perse"],
 "electric": ["Aither","Akmon","Oedipus","Elatos","Kriton"]
 }

 var text = element("name")

function generateName() {
  var water = element("water");
  var fire = element("fire");
  var fighting = element("fighting");
  var fairy = element("fairy");
  var flying = element("flying");
  var normal = element("normal");
  var grass = element("grass");
  var bug = element("bug");
  var ice = element("ice"); //
  var dragon = element("dragon");//
  var psychic = element("psychic"); //
  var posion = element("posion");//
  var rock = element("rock");//
  var steel = element("steel");//
  var ground = element("ground");//
  var dark = element("dark"); //
  var ghost = element("ghost");//
  var electric = element("electric"); //

  if (water.checked){
    return names.water[randomSet(1, names.water.length)];
  }
  if (ice.checked){
    return names.ice[randomSet(1, names.ice.length)];
  }
  if (fire.checked){
    return names.fire[randomSet(1, names.fire.length)];
  }
  if (fighting.checked){
    return names.fighting[randomSet(1, names.fighting.length)];
  }
  if (fairy.checked){
    return names.fairy[randomSet(1, names.fairy.length)];
  }
  if (normal.checked){
    return names.normal[randomSet(1, names.normal.length)];
  }
  if (grass.checked){
    return names.grass[randomSet(1, names.grass.length)];
  }
  if (psychic.checked){
    return names.psychic[randomSet(1, names.psychic.length)];
  }
  if (flying.checked){
    return names.flying[randomSet(1, names.flying.length)];
  }
  if (posion.checked){
    return names.posion[randomSet(1, names.posion.length)];
  }
  if (rock.checked){
    return names.rock[randomSet(1, names.rock.length)];
  }
  if (steel.checked){
    return names.steel[randomSet(1, names.steel.length)];
  }
  if (ground.checked){
    return names.ground[randomSet(1, names.ground.length)];
  }
  if (bug.checked){
    return names.bug[randomSet(1, names.bug.length)];
  }
  if (dark.checked){
    return names.dark[randomSet(1, names.dark.length)];
  }
  if (ghost.checked){
    return names.ghost[randomSet(1, names.ghost.length)];
  }
  if (electric.checked){
    return names.electric[randomSet(1, names.electric.length)];
  }
  if (dragon.checked){
    return names.dragon[randomSet(1, names.dragon.length)];
  }
}

function generate() {
  text.innerHTML = generateName();
}

function randomSet(amount, range) {
  var num = [];
  for (var i = 0; i < amount; i++) {
    num[i] = Math.floor(Math.random() * range)
  }
  return num;
}

function element(id) {
    return document.getElementById(id);
}
