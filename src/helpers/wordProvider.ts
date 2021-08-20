import type { Locales } from "../i18n/i18n-types";

const top200WordsHU: string[] = [
	"a",
	"meg",
	"vagy",
	"van",
	"vagyok",
	"vannak",
	"vagytok",
	"volt",
	"már",
	"kell",
	"még",
	"és",
	"mint",
	"azt",
	"az",
	"akkor",
	"sem",
	"lehet",
	"mert",
	"minden",
	"olyan",
	"szerint",
	"pedig",
	"ezt",
	"ez",
	"így",
	"után",
	"úgy",
	"nagy",
	"fel",
	"majd",
	"két",
	"nem",
	"nagyon",
	"aki",
	"akik",
	"akit",
	"kit",
	"kik",
	"most",
	"több",
	"lesz",
	"itt",
	"magyar",
	"ami",
	"amik",
	"amit",
	"mit",
	"első",
	"között",
	"amely",
	"hanem",
	"nincs",
	"más",
	"illetve",
	"alatt",
	"egyik",
	"volna",
	"arra",
	"kft.",
	"ilyen",
	"azonban",
	"sok",
	"való",
	"által",
	"amikor",
	"számára",
	"valamint",
	"azért",
	"egy",
	"saját",
	"jól",
	"ember",
	"ahol",
	"ott",
	"annak",
	"mindig",
	"miatt",
	"mellett",
	"kis",
	"alapján",
	"lenne",
	"előtt",
	"egész",
	"nélkül",
	"lett",
	"ezért",
	"igen",
	"másik",
	"stb.",
	"teljes",
	"néhány",
	"során",
	"ma",
	"hiszen",
	"milyen",
	"mely",
	"mind",
	"valami",
	"viszont",
	"áll",
	"tehát",
	"inkább",
	"legyen",
	"három",
	"tudom",
	"amelyek",
	"éves",
	"ezek",
	"adott",
	"nagyobb",
	"például",
	"szükséges",
	"együtt",
	"azok",
	"akár",
	"tovább",
	"ennek",
	"nekem",
	"megfelelő",
	"őket",
	"szó",
	"elég",
	"hozzá",
	"erre",
	"neki",
	"ezzel",
	"következő",
	"esetén",
	"mivel",
	"ezen",
	"belül",
	"éppen",
	"közül",
	"fontos",
	"jobb",
	"benne",
	"magát",
	"esetben",
	"talán",
	"különböző",
	"voltak",
	"fog",
	"teljesen",
	"maga",
	"rendszer",
	"nap",
	"egyes",
	"található",
	"vele",
	"ebben",
	"kellett",
	"második",
	"túl",
	"egyre",
	"csak",
	"arról",
	"valaki",
	"óta",
	"emberek",
	"egyéb",
	"ahogy",
	"semmi",
	"tudja",
	"azzal",
	"ugyanis",
	"került",
	"ellen",
	"mondta",
	"miért",
	"aztán",
	"című",
	"kicsit",
	"módon",
	"vissza",
	"bár",
	"világ",
	"abban",
	"legnagyobb",
	"legalább",
	"mindenki",
	"jelent",
	"újra",
	"persze",
	"részt",
	"tud",
	"kívül",
	"eddig",
	"össze",
	"keresztül",
	"biztos",
	"utolsó",
	"isten",
	"idő",
	"azon",
	"kerül",
	"szinte",
	"egyetlen",
	"dolog",
	"szép",
];

const top200WordsEN: string[] = [
	"the",
	"of",
	"and",
	"to",
	"a",
	"in",
	"that",
	"i",
	"was",
	"he",
	"his",
	"with",
	"is",
	"it",
	"for",
	"as",
	"had",
	"you",
	"not",
	"be",
	"on",
	"at",
	"by",
	"her",
	"which",
	"have",
	"or",
	"from",
	"this",
	"but",
	"all",
	"him",
	"she",
	"were",
	"they",
	"my",
	"are",
	"so",
	"me",
	"their",
	"an",
	"one",
	"de",
	"we",
	"who",
	"would",
	"said",
	"been",
	"no",
	"he",
	"will",
	"them",
	"when",
	"if",
	"there",
	"more",
	"out",
	"any",
	"up",
	"into",
	"your",
	"has",
	"do",
	"what",
	"could",
	"our",
	"than",
	"other",
	"some",
	"very",
	"man",
	"upon",
	"about",
	"its",
	"only",
	"time",
	"may",
	"la",
	"like",
	"little",
	"then",
	"now",
	"should",
	"can",
	"made",
	"did",
	"such",
	"great",
	"must",
	"these",
	"two",
	"before",
	"see",
	"us",
	"over",
	"et",
	"much",
	"know",
	"after",
	"first",
	"i",
	"good",
	"mr",
	"down",
	"never",
	"most",
	"where",
	"those",
	"old",
	"men",
	"own",
	"shall",
	"le",
	"came",
	"project",
	"without",
	"come",
	"make",
	"being",
	"day",
	"might",
	"long",
	"through",
	"himself",
	"work",
	"how",
	"go",
	"am",
	"way",
	"en",
	"even",
	"que",
	"many",
	"well",
	"say",
	"every",
	"too",
	"think",
	"under",
	"life",
	"went",
	"back",
	"same",
	"last",
	"found",
	"take",
	"people",
	"thought",
	"here",
	"still",
	"les",
	"just",
	"while",
	"def",
	"also",
	"again",
	"against",
	"place",
	"away",
	"get",
	"to",
	"young",
	"die",
	"though",
	"yet",
	"give",
	"hand",
	"eyes",
	"ever",
	"part",
	"des",
	"left",
	"when",
	"things",
	"saw",
	"years",
	"took",
	"nothing",
	"put",
	"new",
	"three",
	"always",
	"und",
	"off",
	"once",
	"another",
	"right",
	"don't",
	"between",
	"each",
	"face",
	"because",
	"whom",
	"few",
	"der",
	"tell",
	"son",
	"love",
	"far",
	"un",
];

const getShuffledWords = (locale: Locales): string[] => {
	let clonedWords: string[];

	switch (locale) {
		case "hu":
			clonedWords = [...top200WordsHU];
			break;
		default:
			clonedWords = [...top200WordsEN];
	}

	let shuffled: string[] = [];
	while (clonedWords.length > 0) {
		const rndIndex: number = Math.floor(
			Math.random() * (clonedWords.length - 1)
		);
		shuffled.push(clonedWords[rndIndex]);
		clonedWords.splice(rndIndex, 1);
	}

	return shuffled;
};

export { getShuffledWords };