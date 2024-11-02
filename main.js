const words = [
    "apple", "ball", "cat", "dog", "egg",
    "fish", "grape", "hat", "ice", "jam",
    "kite", "leaf", "mouse", "nest", "owl",
    "pen", "queen", "rose", "sun", "tiger",
    "umbrella", "van", "water", "x-ray", "yarn",
    "zebra", "ant", "book", "car", "doll",
    "ear", "fork", "game", "hand", "igloo",
    "jam", "key", "lamp", "moon", "note",
    "orange", "pad", "quilt", "ring", "sock",
    "table", "urn", "violin", "whistle", "box",
    "cup", "drum", "elephant", "frog", "gate",
    "house", "ice cream", "jacket", "kite", "leaf",
    "monkey", "notebook", "pillow", "quokka", "rock",
    "star", "turtle", "ukelele", "vase", "watch",
    "xylophone", "yak", "zucchini", "train", "plane",
    "sand", "sunflower", "tree", "candle", "ring"
];

const russianWords = [
    "яблоко", "мяч", "кот", "собака", "яйцо",
    "рыба", "виноград", "шляпа", "лёд", "варенье",
    "кит", "лист", "мышь", "гнездо", "сова",
    "ручка", "королева", "роза", "солнце", "тигр",
    "зонтик", "фургон", "вода", "рентген", "пряжа",
    "зебра", "ант", "книга", "машина", "кукла",
    "ухо", "вилка", "игра", "рука", "иглу",
    "варенье", "ключ", "лампа", "луна", "заметка",
    "апельсин", "подушка", "квилт", "кольцо", "носок",
    "стол", "урна", "скрипка", "свисток", "коробка",
    "чашка", "барабан", "слон", "лягушка", "ворота",
    "дом", "мороженое", "куртка", "воздушный змей", "лист",
    "обезьяна", "блокнот", "подушка", "куокка", "камень",
    "звезда", "черепаха", "укулеле", "ваза", "часы",
    "ксилофон", "як", "цуккини", "поезд", "самолёт",
    "песок", "подсолнух", "дерево", "свеча", "колечко"
];

const azerWords = [
    "alma", "top", "pişik", "it", "yumurta",
    "balıq", "üzüm", "şapka", "buz", "marmelad",
    "qılınc", "yarpaq", "siçan", "quş evi", "sovuq",
    "qələm", "kraliça", "gül", "günəş", "tiger",
    "göyçə", "yük maşını", "su", "rentgen", "ip",
    "zebra", "qarışqa", "kitab", "maşın", "doll",
    "qulaq", "çaşqın", "oyun", "əl", "iqloo",
    "marmelad", "açar", "lamp", "ay", "not",
    "portağal", "yastıq", "yastıq", "üçbucaq", "çalası",
    "masa", "urn", "sintezator", "səs", "qutu",
    "fincan", "darbuka", "fil", "qırqovul", "qapı",
    "ev", "dondurma", "kürkdən", "kültür", "yarpaq",
    "meymun", "notebook", "yastıq", "quokka", "daş",
    "ulduz", "tülkü", "ukulet", "vaza", "saat",
    "ksilofon", "yak", "xiyar", "qatar", "təyyarə",
    "qum", "günəbaxan", "ağac", "şam", "halqa"
];


let players = []

function start() {
    let lang = document.getElementById("lang").value
    console.log(lang=="ru");
    
    if (lang == "en") {
        var word = words[Math.floor(Math.random() * words.length)]; 
    }
    else if (lang == "ru") {
        var word = russianWords[Math.floor(Math.random() * russianWords.length)];
    }
    else if (lang == "az") {
        var word = azerWords[Math.floor(Math.random() * azerWords.length)];
    }

    let player_count = document.getElementById("count").value
    if (player_count < 3) {
        alert("The minimum number of players is 3")
    }
    else {
        document.getElementById("startdiv").style.display = "none"; //zdes
        document.getElementById("choose").style.display = "inline";
    
       for (let i=0; i<player_count; i++) {
            players.push(word)
       }
    
       let spy = Math.floor(Math.random()*players.length)
    
       players[spy] = "spy"

    }

}

function choose() {
    document.getElementById("choose").style.display = "none"; //zdes
    let player = Math.floor(Math.random()*players.length)
    let chosen = players[player]
    document.getElementById("result").innerText = chosen
    document.getElementById("card").style.display = "block"
    players.splice(player, 1)
}


function hide() {
    document.getElementById("choose").style.display = "inline"; //izdes
    document.getElementById("card").style.display = "none"
    if (players.length == 0) {
        document.getElementById("new").style.display = "block"
        document.getElementById("mani").style.display = "none"
    }
}