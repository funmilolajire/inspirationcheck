const colors = require("colors");
colors.enable();

let quoteType = ["motivational", "funny", "astrology"];
let authorsPerQuoteType = {
    funny: ["Norm Crosby", "Buddy Hackett", "Carl Sagan", "Ann Landers", "Alexander Woollcott", "Billy Connolly", "Abraham Lincoln", "Al McGuire", "Alan Dundes", "Albert Einstein"],
    astrology: ["PILA OF HAWAII", "VOLTAIRE", "ROBERT GREEN INGERSOLL", "JAAFAR", "RUBY WARRINGTON", "BILL MYERS"],
    motivational: ["Serena Williams", "Martin Luther King Jr.", "Mae Jemison", "Joseph Campbell", "C.S. Lewis", "William James", "Winston Churchill", "Helen Keller", "Zig Ziglar", "Ella Fitzgerald"]
};
let funnyQuotes = {
    "Billy Connolly": ["Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!"],
    "Abraham Lincoln": ["Better to remain silent and be thought a fool than to speak out and remove all doubt.", "If I were two-faced, would I be wearing this one?"],
    "Al McGuire": ["The only mystery in life is why the kamikaze pilots wore helmets."],
    "Alan Dundes": ["Light travels faster than sound. This is why some people appear bright until you hear them speak."],
    "Albert Einstein": ["Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.", "The difference between stupidity and genius is that genius has its limits."],
    "Alexander Woollcott": ["All the things I really like to do are either immoral, illegal or fattening"],
    "Ann Landers": ["At every party there are two kinds of people – those who want to go home and those who don’t. The trouble is, they are usually married to each other", "If you want your children to listen, try talking softly to someone else."],
    "Buddy Hackett": ["As a child my family’s menu consisted of two choices: take it or leave it."],
    "Carl Sagan": ["But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright Brothers. But they also laughed at Bozo the Clown."],
    "Norm Crosby": ["When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty."]
};
let astrologyQuotes = {
    "VOLTAIRE": ["Superstition is to religion what astrology is to astronomy: the mad daughter of a wise mother."],
    "ROBERT GREEN INGERSOLL": ["If the people were a little more ignorant, astrology would flourish -- if a little more enlightened, religion would perish."],
    "JAAFAR": ["He is a poor astrologer who pretends by the stars to point out another's destiny, and yet does not know his own."],
    "RUBY WARRINGTON": ["Astrology is like a gateway drug to a more cosmic world view."],
    "BILL MYERS": ["Astrology is like any other superstition: It has no power unless people allow it to direct their lives."],
    "PILA OF HAWAII": ["Astrology is like a map. Like a roadmap, astrology is meant to be a useful tool to help guide you to wherever you want to go."]
};
let motivationalQuotes = {
    "William James": ["Act as if what you do makes a difference. It does.", "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome."],
    "Winston Churchill": ["Success is not final, failure is not fatal: it is the courage to continue that counts."],
    "Helen Keller": ["Keep your face to the sunshine and you cannot see a shadow.", "Never bend your head. Always hold it high. Look the world straight in the eye."],
    "Zig Ziglar": ["What you get by achieving your goals is not as important as what you become by achieving your goals."],
    "Ella Fitzgerald": ["It isn't where you came from. It's where you're going that counts.", "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."],
    "C.S. Lewis": ["You are never too old to set another goal or to dream a new dream."],
    "Joseph Campbell": ["We must be willing to let go of the life we planned so as to have the life that is waiting for us."],
    "Mae Jemison": ["Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination."],
    "Martin Luther King Jr.": ["If I cannot do great things, I can do small things in a great way."],
    "Serena Williams": ["A champion is defined not by their wins but by how they can recover when they fall."]
};

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quoteType.length);
    let randomQuoteType = quoteType[randomNumber];
    let randomAuthor = authorsPerQuoteType[randomQuoteType][Math.floor(Math.random() * authorsPerQuoteType[randomQuoteType].length)];
    let quotesCollection = "";
    let firstMessage = "";
    let randomQuote = "";
    switch (randomQuoteType) {
        case 'funny':
            firstMessage = `Oooh you got a funny one. Hope it makes you smile.`;
            quotesCollection = funnyQuotes;
            randomQuote = quotesCollection[randomAuthor][Math.floor(Math.random() * quotesCollection[randomAuthor].length)]
            break;
        case 'motivational':
            firstMessage = `Ayee! A motivational quote to inspire you.`;
            quotesCollection = motivationalQuotes;
            randomQuote = quotesCollection[randomAuthor][Math.floor(Math.random() * quotesCollection[randomAuthor].length)]
            break;
        case 'astrology':
            firstMessage = `Guess the stars are aligned. An astrology quote for you.`;
            quotesCollection = astrologyQuotes;
            randomQuote = quotesCollection[randomAuthor][Math.floor(Math.random() * quotesCollection[randomAuthor].length)]
            break;
    };
    console.log(firstMessage.magenta.underline.magenta);
    console.log(`Here's a quote from ${randomAuthor.italic}:`.green);
    console.log(randomQuote.toUpperCase().black.bgWhite.bold);
}

getRandomQuote();