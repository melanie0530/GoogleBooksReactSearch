const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

var dbUrl = `mongodb+srv://jjmateer:${process.env.MONGO_PW}@cluster0-q0kab.mongodb.net/googlebooks?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, err => {
  console.log("Connected to mongoose");
  if (err) {
    console.log(err)
  }
});

const bookSeed = [

  {
    title: "The Liberal Media Industrial Complex",
    author: "Mark Dice",
    synopsis:
      "The “media” used to mean television, radio, newspapers, and magazines; but today it largely involves social media, which has swallowed up all of these other forms and is now controlled by a small group of Silicon Valley titans who decide what billions of people are able to see and hear online. <br><br>The convergence of old technology and new has centralized unimaginable power into the hands of a few gigantic corporations that now dictate how we communicate with each other and perceive the outside world. <br><br>Media analyst Mark Dice details how the rise of social media that tipped the balance of power regarding the production and distribution of information has also resulted in a massive backslash from those conspiring to regain the influence they once held. <br><br>Now conservatives are experiencing widespread censorship as the tech giants scramble to put the genie back in the bottle. <br><br>The liberal media has launched an information war against President Trump and his supporters, and are using their monopolies to manipulate public opinion in order to further their aims of a socialist revolution. ",
    date: new Date(Date.now())
  },
  {
    title: "Make: Analog Synthesizers: Make Electronic Sounds the Synth-DIY Way",
    author: "Ray Wilson",
    synopsis:
      "Dive hands-on into the tools, techniques, and information for making your own analog synthesizer. If you’re a musician or a hobbyist with experience in building electronic projects from kits or schematics, this do-it-yourself guide will walk you through the parts and schematics you need, and how to tailor them for your needs. Author Ray Wilson shares his decades of experience in synth-DIY, including the popular Music From Outer Space (MFOS) website and analog synth community. At the end of the book, you’ll apply everything you’ve learned by building an analog synthesizer, using the MFOS Noise Toaster kit.You’ll also learn what it takes to create synth- DIY electronic music studio.Get started in the fun and engaging hobby of synth - DIY without delay.",
    date: new Date(Date.now())
  },
  {
    title: "Alibaba: The House That Jack Ma Built",
    author: "Duncan Clark",
    synopsis:
      "In just a decade and half Jack Ma, a man who rose from humble beginnings and started his career as an English teacher, founded and built Alibaba into the second largest Internet company in the world. The company’s $25 billion IPO in 2014 was the world’s largest, valuing the company more than Facebook or Coca Cola. Alibaba today runs the e-commerce services that hundreds of millions of Chinese consumers depend on every day, providing employment and income for tens of millions more. A Rockefeller of his age, Jack has become an icon for the country’s booming private sector, and as the face of the new, consumerist China is courted by heads of state and CEOs from around the world. Granted unprecedented access to a wealth of new material including exclusive interviews, Clark draws on his own first-hand experience of key figures integral to Alibaba’s rise to create an authoritative, compelling narrative account of how Alibaba and its charismatic creator have transformed the way that Chinese exercise their new found economic freedom, inspiring entrepreneurs around the world and infuriating others, turning the tables on the Silicon Valley giants who have tried to stand in his way. Duncan explores vital questions about the company’s past, present, and future: How, from such unremarkable origins, did Jack Ma build Alibaba? What explains his relentless drive and his ability to outsmart his competitors? With over 80% of China’s e-commerce market, how long can the company hope to maintain its dominance? As the company sets its sights on the country’s financial and media markets, are there limits to Alibaba’s ambitions, or will the Chinese government act to curtail them? And as it set up shop from LA and San Francisco to Seattle, how will Alibaba grow its presence and investments in the US and other international markets? Clark tells Alibaba’s tale within the wider story of China’s economic explosion—the rise of the private sector and the expansion of Internet usage—that haver powered the country’s rise to become the world’s second largest economy and largest Internet population, twice the size of the United States. He also explores the political and social context for these momentous changes. An expert insider with unrivaled connections, Clark has a deep understanding of Chinese business mindset. He illuminates an unlikely corporate titan as never before, and examines the key role his company has played in transforming China while increasing its power and presence worldwide.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now())
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    synopsis:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
    date: new Date(Date.now())
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    synopsis:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    date: new Date(Date.now())
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    author: "Brad Stone",
    synopsis:
      "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
    date: new Date(Date.now())
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics, Edition 5",
    author: "Jennifer Robbins",
    synopsis:
      "Do you want to build web pages but have no prior experience? This friendly guide is the perfect place to start. You’ll begin at square one, learning how the web and web pages work, and then steadily build from there. By the end of the book, you’ll have the skills to create a simple site with multicolumn pages that adapt for mobile devices. Each chapter provides exercises to help you learn various techniques and short quizzes to make sure you understand key concepts. This thoroughly revised edition is ideal for students and professionals of all backgrounds and skill levels. It is simple and clear enough for beginners, yet thorough enough to be a useful reference for experienced developers keeping their skills up to date. Build HTML pages with text, links, images, tables, and forms. Use style sheets (CSS) for colors, backgrounds, formatting text, page layout, and even simple animation effects",
    date: new Date(Date.now())
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    synopsis:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
    date: new Date(Date.now())
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    synopsis:
      "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the 21st century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes,and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple's hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.",
    date: new Date(Date.now())
  },
  {
    title: "Coding All-in-One For Dummies",
    author: "Nikhil Abraham",
    synopsis:
      "The demand for people with coding know-how exceeds the number of people who understand the languages that power technology. Coding All-in-One For Dummies gives you an ideal place to start when you're ready to add this valuable asset to your professional repertoire. Whether you need to learn how coding works to build a web page or an application or see how coding drives the data revolution, this resource introduces the languages and processes you'll need to know. Peek inside to quickly learn the basics of simple web languages, then move on to start thinking like a professional coder and using languages that power big applications. Take a look inside for the steps to get started with updating a website, creating the next great mobile app, or exploring the world of data science. Whether you're looking for a complete beginner's guide or a trusted resource for when you encounter problems with coding, there's something for you!",
    date: new Date(Date.now())
  },
  {
    title: "Programming in Haskell: Edition 2",
    author: "Graham Hutton",
    synopsis:
      "Haskell is a purely functional language that allows programmers to rapidly develop clear, concise, and correct software. The language has grown in popularity in recent years, both in teaching and in industry. This book is based on the author's experience of teaching Haskell for more than twenty years. All concepts are explained from first principles and no programming experience is required, making this book accessible to a broad spectrum of readers. While Part I focuses on basic concepts, Part II introduces the reader to more advanced topics. This new edition has been extensively updated and expanded to include recent and more advanced features of Haskell, new examples and exercises, selected solutions, and freely downloadable lecture slides and example code. The presentation is clean and simple, while also being fully compliant with the latest version of the language, including recent changes concerning applicative, monadic, foldable, and traversable types.",
    date: new Date(Date.now())
  },
  {
    title: "Site Reliability Engineering: How Google Runs Production Systems",
    author: "Niall Richard MurphyBetsy BeyerChris Jones",
    synopsis:
      "The overwhelming majority of a software system’s lifespan is spent in use, not in design or implementation. So, why does conventional wisdom insist that software engineers focus primarily on the design and development of large-scale computing systems? In this collection of essays and articles, key members of Google’s Site Reliability Team explain how and why their commitment to the entire lifecycle has enabled the company to successfully build, deploy, monitor, and maintain some of the largest software systems in the world. You’ll learn the principles and practices that enable Google engineers to make systems more scalable, reliable, and efficient—lessons directly applicable to your organization.",
    date: new Date(Date.now())
  },
  {
    title: "Official Google Cloud Certified Professional Cloud Architect Study Guide",
    author: "Dan Sullivan",
    synopsis:
      "Sybex's proven Study Guide format teaches Google Cloud Architect job skills and prepares you for this important new Cloud exam. The Google Cloud Certified Professional Cloud Architect Study Guide is the essential resource for anyone preparing for this highly sought-after, professional-level certification. Clear and accurate chapters cover 100% of exam objectives—helping you gain the knowledge and confidence to succeed on exam day. A pre-book assessment quiz helps you evaluate your skills, while chapter review questions emphasize critical points of learning. Detailed explanations of crucial topics include analyzing and defining technical and business processes, migration planning, and designing storage systems, networks, and compute resources. Written by Dan Sullivan—a well-known author and software architect specializing in analytics, machine learning, and cloud computing—this invaluable study guide includes access to the Sybex interactive online learning environment, which includes complete practice tests, electronic flash cards, a searchable glossary, and more.      Providing services suitable for a wide range of applications, particularly in high-growth areas of analytics and machine learning, Google Cloud is rapidly gaining market share in the cloud computing world. Organizations are seeking certified IT professionals with the ability to deploy and operate infrastructure, services, and networks in the Google Cloud. Take your career to the next level by validating your skills and earning certification.",
    date: new Date(Date.now())
  },
  {
    title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability, Edition 3",
    author: "Steve Krug",
    synopsis:
      "Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject. Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrated…and best of all–fun to read. If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites.",
    date: new Date(Date.now())
  },
  {
    title: "CompTIA Linux+ Study Guide: Exam XK0-004, Edition 4",
    author: "Christine BresnahanRichard Blum",
    synopsis:
      "The bestselling study guide completely updated for the NEW CompTIA Linux+ Exam XK0-004. This is your one- stop resource for complete coverage of Exam XK0 - 004, covering 100 % of all exam objectives.You'll prepare for the exam smarter and faster with Sybex thanks to superior content including, assessment tests that check exam readiness, objective map, real-world scenarios, hands-on exercises, key topic exam essentials, and challenging chapter review questions. Linux is a UNIX - based operating system originally created by Linus Torvalds with the help of developers around the world.Developed under the GNU General Public License, the source code is free.Because of this Linux is viewed by many organizations and companies as an excellent, low - cost, secure alternative to expensive OSs, such as Microsoft Windows.The CompTIA Linux + exam tests a candidate's understanding and familiarity with the Linux Kernel. As the Linux server market share continues to grow, so too does demand for qualified and certified Linux administrators.",
    date: new Date(Date.now())
  },
  {
    title: "Code Complete: Edition 2",
    author: "Steve McConnell",
    synopsis:
      "Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction. Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective techniques and must-know principles into clear, pragmatic guidance. No matter what your experience level, development environment, or project size, this book will inform and stimulate your thinking—and help you build the highest quality code.",
    date: new Date(Date.now())
  },
  {
    title: "Minecraft: Exploded Builds: Medieval Fortress: An Official Mojang Book",
    author: "Trevor Noah",
    synopsis:
      "Have you ever wanted to create your own legendary medieval kingdom to rule over? Well, now you can, with Minecraft Exploded Builds: Medieval Fortress. Learn how to design, build, and customize every part of your castle and the surrounding area, from sturdy walls and deadly traps to dank, dark dungeons and sprawling villages. Each build has an exploded view to show you exactly which blocks to use, plus extra ideas to make every part of your kingdom unique.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
