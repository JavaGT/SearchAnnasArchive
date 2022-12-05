# Search Anna's Archive

This is a quick module for searching Anna's Archive. It is not a complete and realable solution, but it is a start.

Works via webscraping, so vulnerable to changes in the website.

## Use
Code:
```js
import { search } from "searchannasarchive";
const results = await search(query);
```
Response:
```json
{
  "request_url": "https://annas-archive.org/search?q=marx",
  "query": "marx",
  "timestamp": 1670202830960,
  "results": [
    {
      "href": "/md5/4575e56e82f80b857292e1d913ac75e6",
      "img": "https://libgen.rs/covers/739000/4575e56e82f80b857292e1d913ac75e6-d.jpg",
      "info": [
        "English, pdf, 14.3MB, \"_448303.4575e56e82f80b857292e1d913ac75e6.pdf\"",
        "Marx beyond Marx: lessons on the Grundrisse",
        "Autonomedia, 1992",
        "Antonio Negri"
      ]
    },
    {
      "href": "/md5/d15cb1e295f515e81993c4844f40a765",
      "img": "https://libgen.rs/covers/799000/d15cb1e295f515e81993c4844f40a765-d.jpg",
      "info": [
        "English, pdf, 3.6MB, \"_474415.d15cb1e295f515e81993c4844f40a765.pdf\"",
        "The Hegel-Marx Connection",
        "St. Martin's Press, 2000",
        "Tony Burns, Ian Fraser (editors)"
      ]
    },
    {
      "href": "/md5/e999d26ab6642bfca9e2872111afd979",
      "img": "https://libgen.rs/covers/807000/e999d26ab6642bfca9e2872111afd979-d.jpg",
      "info": [
        "English, pdf, 53.8MB, \"_517133.e999d26ab6642bfca9e2872111afd979.pdf\"",
        "Grundrisse: Foundations of the Critique of Political Economy",
        "Penguin Classics, 1993",
        "Karl Marx"
      ]
    },
    {
      "href": "/md5/5f5778bbfbacf53d597f669770b9a2b1",
      "img": "https://libgen.rs/covers/746000/5f5778bbfbacf53d597f669770b9a2b1-d.jpg",
      "info": [
        "English, pdf, 1.4MB, \"_496286.5f5778bbfbacf53d597f669770b9a2b1.pdf\"",
        "How to Change the World: Reflections on Marx and Marxism",
        "Yale University Press, 2011",
        "Eric Hobsbawm"
      ]
    },
    {
      "href": "/md5/3cde8dadda265cba68371761ba146c2a",
      "img": "https://libgen.rs/covers/799000/3cde8dadda265cba68371761ba146c2a-d.jpg",
      "info": [
        "English, epub, <1MB, \"_468942.3cde8dadda265cba68371761ba146c2a.epub\"",
        "Conscious evolution: awakening the power of our social potential",
        "New World Library, 1, 1998",
        "Barbara Marx Hubbard"
      ]
    },
    {
      "href": "/md5/5822420c2ec5176ce0ec823693e73358",
      "img": "https://libgen.rs/covers/800000/5822420c2ec5176ce0ec823693e73358-d.jpg",
      "info": [
        "English, pdf, <1MB, \"_480701.5822420c2ec5176ce0ec823693e73358.pdf\"",
        "Little Big World: Collecting Louis Marx and the American Fifties",
        "University Of Iowa Press, 1, 2010",
        "Jeffrey Hammond"
      ]
    },
    {
      "href": "/md5/4fd0a7c357b27292b8d646c281aa639c",
      "img": "https://libgen.rs/covers/742000/4fd0a7c357b27292b8d646c281aa639c-d.jpg",
      "info": [
        "English, epub, <1MB, \"_497046.4fd0a7c357b27292b8d646c281aa639c.epub\"",
        "How to Change the World: Reflections on Marx and Marxism",
        "Yale University Press, 2011",
        "Эрик Хобсбаум, Hobsbawm, Eric J"
      ]
    },
    {
      "href": "/md5/aa5b0f52c2bb134da19ec2b19e08dc95",
      "img": "https://libgen.rs/covers/764000/aa5b0f52c2bb134da19ec2b19e08dc95-d.jpg",
      "info": [
        "English, pdf, 2.4MB, \"_469377.aa5b0f52c2bb134da19ec2b19e08dc95.pdf\"",
        "Nurse Practitioners: The Evolution and Future of Advanced Practice, 5th Edition",
        "Springer Publishing Company, 5, 2010",
        "Eileen Sullivan-Marx"
      ]
    },
    {
      "href": "/md5/35a74d99775324ebb4bd4d54ebf83047",
      "img": "https://libgen.rs/covers/675000/35a74d99775324ebb4bd4d54ebf83047-d.jpg",
      "info": [
        "English, pdf, 1.4MB, \"_407225.35a74d99775324ebb4bd4d54ebf83047.pdf\"",
        "Art in progress: a philosophical response to the end of the avant-garde",
        "Amsterdam University Press, 2003",
        "Maarten Doorman, Sherry Marx"
      ]
    },
    {
      "href": "/md5/d4c6585a38438f0e7bd62e8fa5a1bf0c",
      "img": "https://libgen.rs/covers/775000/d4c6585a38438f0e7bd62e8fa5a1bf0c-d.jpg",
      "info": [
        "English, pdf, 17.1MB, \"_495519.d4c6585a38438f0e7bd62e8fa5a1bf0c.pdf\"",
        "Music and Marx: Ideas, Practice, Politics (Critical and Cultural Musicology)",
        "Routledge, Critical and Cultural Musicology, 1, 2002",
        "Regula Burckhardt Qureshi (Editor)"
      ]
    },
    {
      "href": "/md5/ed58e3683b7221fb750eba04f1f0a0f9",
      "img": "https://libgen.rs/covers/781000/ed58e3683b7221fb750eba04f1f0a0f9-d.jpg",
      "info": [
        "English, pdf, 207.1MB, \"_447351.ed58e3683b7221fb750eba04f1f0a0f9.pdf\"",
        "Rosen's Emergency Medicine: Expert Consult Premium Edition - Enhanced Online Features and Print (Rosen's Emergency Medicine: Concepts & Clinical Practice (2 volumes))",
        "Mosby, 7th Edition, 2009",
        "John Marx MD, Robert Hockberger MD, Ron Walls MD"
      ]
    },
    {
      "href": "/md5/9a09385a50eb5a200597a5bff8521e38",
      "img": "https://libgen.rs/covers/1641000/9a09385a50eb5a200597a5bff8521e38-d.jpg",
      "info": [
        "English, epub, 6.1MB, \"Delphi Collected Works of Karl Marx - Karl Marx.epub\"",
        "Collected Works of Karl Marx (Illustrated)",
        "Delphi Classics, Delphi Series Seven 23, 1 Illustrated, 2016",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/be67fc2c0bf656b11bd4286980311f55",
      "img": "https://libgen.rs/covers/183000/be67fc2c0bf656b11bd4286980311f55-d.jpg",
      "info": [
        "English, pdf, 1.3MB, \"Rockmore - Marx_after_Marxism.pdf\"",
        "Marx After Marxism: The Philosophy of Karl Marx",
        "Wiley-Blackwell, 2002",
        "Tom Rockmore"
      ]
    },
    {
      "href": "/md5/6f5d1653becc3bc33f1283b4077c0daa",
      "img": "https://libgen.rs/covers/2362000/6f5d1653becc3bc33f1283b4077c0daa-g.jpg",
      "info": [
        "English, epub, 2.1MB, \"Early Writings - Karl Marx.epub\"",
        "Early Writings",
        "Penguin UK, 1992",
        "Karl Marx"
      ]
    },
    {
      "href": "/md5/9f192a5529ee2cb668ceb413e25e0989",
      "img": "https://libgen.rs/covers/223000/9f192a5529ee2cb668ceb413e25e0989.jpg",
      "info": [
        "English, pdf, 1.1MB, \"Althusser - For Marx.pdf\"",
        "For Marx",
        "Verso, 1985",
        "Louis Althusser, Ben Brewster"
      ]
    },
    {
      "href": "/md5/712711f74e4b970b4eb454bcb732eb64",
      "img": "https://libgen.rs/fictioncovers/2056000/712711f74e4b970b4eb454bcb732eb64.jpg",
      "info": [
        "English, epub, 2.8MB, \"Marx Returns - Jason Barker.epub\"",
        "Marx Returns",
        "John Hunt Publishing, 2018",
        "Barker, Jason"
      ]
    },
    {
      "href": "/md5/48fc48e4aa0a098171b78761e0137fba",
      "img": "https://libgen.rs/covers/395000/48fc48e4aa0a098171b78761e0137fba-d.jpg",
      "info": [
        "English, pdf, 17.0MB, \"48fc48e4aa0a098171b78761e0137fba~9780936756257,093675625X.pdf\"",
        "Marx Beyond Marx: Lessons on the Grundrisse",
        "Autonomedia, 1989",
        "Antonio Negri"
      ]
    },
    {
      "href": "/md5/55e340fac66d9442c305e6f3b41a0ff0",
      "img": "https://libgen.rs/covers/3261000/55e340fac66d9442c305e6f3b41a0ff0-d.png",
      "info": [
        "English, pdf, 15.7MB, \"Mainlining Marx - John L. Stanley.pdf\"",
        "Mainlining Marx",
        "Routledge, 1, 2002",
        "John L. Stanley"
      ]
    },
    {
      "href": "/md5/54c2770ddfd6e2c15b2d21809f8247ea",
      "img": "https://libgen.rs/covers/360000/54c2770ddfd6e2c15b2d21809f8247ea-d.jpg",
      "info": [
        "English, pdf, 43.5MB, \"Marx - Selected Writings in Sociology and Social Philosophy 07-040672-3.pdf\"",
        "Karl Marx Selected Writings In Sociology and Social Philosophy",
        "McGraw-Hill Book, 1, 1964",
        "Karl Marx, T.B. Bottomore"
      ]
    },
    {
      "href": "/md5/085960e511a3e8cabcec0c185c8e642c",
      "img": "https://libgen.rs/covers/3290000/085960e511a3e8cabcec0c185c8e642c-d.jpg",
      "info": [
        "English, epub, 14.2MB, \"Marx, Manual de Instrucoes - Daniel Bensaid.epub\"",
        "Marx, manual de instruções",
        "Boitempo Editorial, 2015",
        "Daniel Bensaïd"
      ]
    },
    {
      "href": "/md5/7a7a2fc9f6d9745fcba0996418fb7bb6",
      "img": "https://libgen.rs/covers/835000/7a7a2fc9f6d9745fcba0996418fb7bb6-d.jpg",
      "info": [
        "English, pdf, 22.1MB, \"Shortall-Incomplete_Marx-300dpiBW-compressed\"",
        "The Incomplete Marx",
        "Avebury, Avebury Series in Philosophy, 1994",
        "Felton Shortall"
      ]
    },
    {
      "href": "/md5/5ec87aa0171e098c8fa01458430cf4a9",
      "img": "https://libgen.rs/covers/246000/5ec87aa0171e098c8fa01458430cf4a9-d.jpg",
      "info": [
        "English, pdf, 1.4MB, \"Oxford University Press - Marx - A Very Short Introduction.pdf\"",
        "Marx",
        "Sterling, A Brief Insight, 2010",
        "Peter Singer"
      ]
    },
    {
      "href": "/md5/20d0b7e1194c87a65efd4fc180f93b7f",
      "img": "https://libgen.rs/covers/730000/20d0b7e1194c87a65efd4fc180f93b7f-d.jpg",
      "info": [
        "English, pdf, 4.0MB, \"_434657.20d0b7e1194c87a65efd4fc180f93b7f.pdf\"",
        "Karl Marx: Selected Writings (Second Edition)",
        "OUP Oxford, 2nd, 2000",
        "Karl Marx; David McLellan ed."
      ]
    },
    {
      "href": "/md5/42cd80a0e39933e63c488b348b44d25d",
      "img": "https://libgen.rs/fictioncovers/2156000/42cd80a0e39933e63c488b348b44d25d.jpg",
      "info": [
        "English, epub, <1MB, \"The Late, Lamented Molly Marx_ A Novel.epub\"",
        "The Late, Lamented Molly Marx",
        "Ballantine Books, 2009",
        "Koslow, Sally"
      ]
    },
    {
      "href": "/md5/012312fc850b574ffccea8689c32b38c",
      "img": "https://libgen.rs/covers/586000/012312fc850b574ffccea8689c32b38c-d.jpg",
      "info": [
        "English, pdf, 32.4MB, \"_274381.012312fc850b574ffccea8689c32b38c.pdf\"",
        "The Marx-Engels Reader",
        "W. W. Norton & Company, 2nd Revised & enlarged, 1978",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/5c0a7e4b695ee3d450069111d45a847c",
      "img": "https://libgen.rs/covers/2965000/5c0a7e4b695ee3d450069111d45a847c-g.jpg",
      "info": [
        "English, pdf, 7.4MB, \"Marx & Engels _ the intellectua - Carver, Terrell_cropped.pdf\"",
        "Marx & Engels: The Intellectual Relationship",
        "Indiana University Press, 1983",
        "Terrell Carver"
      ]
    },
    {
      "href": "/md5/d8e9330190ab9805536c36db8eca5768",
      "img": "https://libgen.rs/covers/3314000/d8e9330190ab9805536c36db8eca5768-g.jpg",
      "info": [
        "English, epub, 1.5MB, \"The German Ideology_ A New Abri - Karl Marx.epub\"",
        "The German ideology : including Theses on Feuerbach and introduction to The critique of political economy",
        "Repeater Books, Great books in philosophy, 1998",
        "Friedrich Engels; Karl Marx; Karl Marx; OverDrive, Inc.,"
      ]
    },
    {
      "href": "/md5/8ee0f6fe595a262aded6e65874a321c0",
      "img": "https://libgen.rs/covers/208000/8ee0f6fe595a262aded6e65874a321c0-d.jpg",
      "info": [
        "English, pdf, <1MB, \"Peter Worsley - Marx and Marxism - RoutledgeISBN0-203-51983-3.pdf\"",
        "Marx and Marxism",
        "Routledge, Key Sociologists, 2, 2003",
        "Peter Worsley"
      ]
    },
    {
      "href": "/md5/ad605a010897668fae3b7d8340e48a5e",
      "img": "https://libgen.rs/covers/2308000/ad605a010897668fae3b7d8340e48a5e-g.jpg",
      "info": [
        "English, epub, <1MB, \"Marx The Key Ideas Teach Yourself - Gill Hands.epub\"",
        "Marx - The Key Ideas",
        "Hodder & Stoughton, Teach Yourself, 2010",
        "Gill Hands"
      ]
    },
    {
      "href": "/md5/b9eed44edbb06a6319140e32bb2149f9",
      "img": "https://libgen.rs/covers/805000/b9eed44edbb06a6319140e32bb2149f9-d.jpg",
      "info": [
        "English, pdf, 2.9MB, \"_514843.b9eed44edbb06a6319140e32bb2149f9.pdf\"",
        "Karl Marx: Selected Writings, Second Edition",
        "Oxford University Press, Second Edition, 2000",
        "Karl Marx, David McLellan, ed."
      ]
    },
    {
      "href": "/md5/c2598705cafff1c0f432c9d653162951",
      "img": "https://libgen.rs/covers/123000/c2598705cafff1c0f432c9d653162951-d.jpg",
      "info": [
        "English, pdf, 12.2MB, \"Elster - An Introduction to Karl Marx (Cambridge, 1986).pdf\"",
        "An Introduction to Karl Marx",
        "Cambridge University Press, 1986",
        "Jon Elster"
      ]
    },
    {
      "href": "/md5/124d6a91c2e1e36e47c1894b1525cf63",
      "img": "https://libgen.rs/covers/574000/124d6a91c2e1e36e47c1894b1525cf63-g.jpg",
      "info": [
        "English, pdf, 97.5MB, \"_264522.124d6a91c2e1e36e47c1894b1525cf63.pdf\"",
        "Grundrisse: Foundations of the Critique of Political Economy",
        "Vintage Books, The Marx library, 1973",
        "Karl Marx, Martin Nicolaus"
      ]
    },
    {
      "href": "/md5/481afaa7984c1b475dd870fd81a38cfd",
      "img": "https://libgen.rs/covers/395000/481afaa7984c1b475dd870fd81a38cfd-g.jpg",
      "info": [
        "English, pdf, 26.9MB, \"481afaa7984c1b475dd870fd81a38cfd~0394720016,9780394720012.pdf\"",
        "Grundrisse: Foundations of the critique of political economy",
        "Vintage Books, The Marx library, 1973",
        "Karl Marx, Martin Nicolaus"
      ]
    },
    {
      "href": "/md5/4b4d39ce1e372f733be4bc33c18a9bc3",
      "img": "https://libgen.rs/covers/80000/4b4d39ce1e372f733be4bc33c18a9bc3-d.jpg",
      "info": [
        "English, pdf, 20.5MB, \"Psychology - SocialThe Cambridge companion to Marx.pdf\"",
        "The Cambridge companion to Marx",
        "Cambridge University Press, Cambridge Companions to Philosophy, 1991",
        "Terrell Carver"
      ]
    },
    {
      "href": "/md5/3e18ebab039055f0b8bd33c1af4b8e0a",
      "img": "https://libgen.rs/covers/2796000/3e18ebab039055f0b8bd33c1af4b8e0a-g.jpg",
      "info": [
        "English, epub, 1.9MB, \"Stefan Kanfer & Groucho Marx - The Essential Groucho.epub\"",
        "The Essential Groucho: Writings By, for and About Groucho Marx",
        "Penguin, 2008",
        "Stefan Kanfer"
      ]
    },
    {
      "href": "/md5/b9ab0a6051c5573acf382b2796fd7821",
      "img": "https://libgen.rs/covers/261000/b9ab0a6051c5573acf382b2796fd7821-g.jpg",
      "info": [
        "English, pdf, 14.7MB, \"Y. dl_avaxhome 24616  _=0091279801_-_William_Leon_McBride_-_The_philosophy_of_Marx.pdf\"",
        "The philosophy of Marx",
        "Hutchinson, 1977",
        "William Leon McBride"
      ]
    },
    {
      "href": "/md5/39c4dac5e35c857df73ddf85a6ad8470",
      "img": "https://libgen.rs/covers/3107000/39c4dac5e35c857df73ddf85a6ad8470-g.jpg",
      "info": [
        "English, pdf, 4.2MB, \"Robert Morstein-Marx - Julius Caesar and the Roman People.pdf\"",
        "Julius Caesar and the Roman People",
        "Cambridge University Press, 2021",
        "Robert Morstein-Marx"
      ]
    },
    {
      "href": "/md5/e050194f0288e734b7a718ce54cc1aa9",
      "img": "https://libgen.rs/covers/2111000/e050194f0288e734b7a718ce54cc1aa9-g.jpg",
      "info": [
        "English, epub, 26.9MB, \"Introducing Marx_ A Graphic Guide - Rius.epub\"",
        "Introducing Marx: A Graphic Guide",
        "Icon Books Ltd, Introducing ... A Graphic Guide Series #1, 2015",
        "Rius"
      ]
    },
    {
      "href": "/md5/084c7c744afad00cd9d7ac4870088f49",
      "img": "https://libgen.rs/covers/3304000/084c7c744afad00cd9d7ac4870088f49-g.jpg",
      "info": [
        "English, epub, <1MB, \"Marx for Our Times_ Adventures - Daniel Bensaid.epub\"",
        "Marx for Our Times: Adventures and Misadventures of a Critique",
        "Verso Books, 2009",
        "Daniel Bensaid; Gregory Elliott"
      ]
    },
    {
      "href": "/md5/996cb9769636ad5289168405284de921",
      "img": "https://libgen.rs/covers/524000/996cb9769636ad5289168405284de921-d.jpg",
      "info": [
        "English, pdf, 31.0MB, \"_306477.996cb9769636ad5289168405284de921.pdf\"",
        "The Marx-Engels Reader (Second Edition)",
        "W. W. Norton & Company, 2nd Revised & enlarged, 1978",
        "Karl Marx & Friedrich Engels;   Robert C. Tucker (Editor)"
      ]
    },
    {
      "href": "/md5/a3a13a37beb12d44f8d71494c8a33ef1",
      "img": "https://libgen.rs/covers/1189000/a3a13a37beb12d44f8d71494c8a33ef1-g.jpg",
      "info": [
        "English, pdf, <1MB, \"Historical Materialism and the Economics of Karl Marx - Benedetto Croce_1893.pdf\"",
        "Historical Materialism and the Economics of Karl Marx",
        "Transaction Publishers, 1914",
        "Benedetto Croce"
      ]
    },
    {
      "href": "/md5/82c7a3c5e31a37cc4475a0d394c36a08",
      "img": "https://libgen.rs/covers/206000/82c7a3c5e31a37cc4475a0d394c36a08-d.jpg",
      "info": [
        "English, pdf, 1.0MB, \"0415305306 - Hiroshi Uchida - Marx for the 21st Century - Routledge.pdf\"",
        "Marx for the 21st Century",
        "Routledge, Routledge frontiers of political economy 73, 1, 2006",
        "Hiroshi Uchida"
      ]
    },
    {
      "href": "/md5/b67a17c935c3bebf197fd48b761e08e5",
      "img": "https://libgen.rs/covers/206000/b67a17c935c3bebf197fd48b761e08e5-d.jpg",
      "info": [
        "English, pdf, <1MB, \"0415282756 - Nichola Thoburn - Deleuze, Marx and Politics - Routledge.pdf\"",
        "Deleuze, Marx and Politics",
        "Routledge, Routledge studies in social and political thought 38, 1, 2003",
        "Nicholas Thoburn"
      ]
    },
    {
      "href": "/md5/bd4f76150f27775da31d1e5f4ff944d4",
      "img": "https://libgen.rs/covers/344000/bd4f76150f27775da31d1e5f4ff944d4-d.jpg",
      "info": [
        "English, pdf, 2.2MB, \"0745316980.Pluto.Press.The.Unknown.Marx.Reconstructing.a.Unified.Perspective.Jan.2001\"",
        "The Unknown Marx: Reconstructing a Unified Perspective",
        "Pluto Press, First Edition, 2001",
        "Takahisa Oishi"
      ]
    },
    {
      "href": "/md5/2d8564caa36ab4157bcbfb51dd430d38",
      "img": "https://libgen.rs/covers/2393000/2d8564caa36ab4157bcbfb51dd430d38-d.jpg",
      "info": [
        "English, epub, <1MB, \"The_Communist_Manifesto_and_Das_Kapital_-_Karl_Marx.epub\"",
        "The Communist Manifesto and Das Kapital",
        "Knickerbocker Classics, Original retail, 12 Feb 2019",
        "Karl Marx, Friedrich Engels, Robert Weick"
      ]
    },
    {
      "href": "/md5/63d8468b35d240090570f9d8bb4df6da",
      "img": "https://libgen.rs/covers/790000/63d8468b35d240090570f9d8bb4df6da-d.jpg",
      "info": [
        "English, pdf, 4.8MB, \"Freedom and determination in history according to Marx and Engels  Joseph Ferraro\"",
        "Freedom and Determination in history according to Marx and Engels",
        "Monthly Review Press, 1992",
        "Joseph Ferraro"
      ]
    },
    {
      "href": "/md5/6327f64ebd729af55f337849d82e54cc",
      "img": "https://libgen.rs/covers/2814000/6327f64ebd729af55f337849d82e54cc-g.jpg",
      "info": [
        "English, pdf, 2.6MB, \"Teaching Marx & Critical Theory - Bryant William Sculos.pdf\"",
        "Teaching Marx & Critical Theory in the 21st Century",
        "Brill, Studies in Critical Social Sciences, 2019",
        "Bryant William Sculos; Mary Caputi"
      ]
    },
    {
      "href": "/md5/f219e482b990222f09317bad42f6bfe2",
      "img": "https://libgen.rs/covers/320000/f219e482b990222f09317bad42f6bfe2-d.jpg",
      "info": [
        "English, pdf, <1MB, \"0333918096,~rethinking the normative content of critical theory - marx, habermas and beyond.pdf\"",
        "Rethinking the Normative Content of Critical Theory: Marx, Habermas and Beyond",
        "Palgrave Macmillan, 2001",
        "Bob Cannon"
      ]
    },
    {
      "href": "/md5/f6268dec14814a250b90d685e286ba15",
      "img": "https://libgen.rs/covers/625000/f6268dec14814a250b90d685e286ba15-d.jpg",
      "info": [
        "English, pdf, 113.6MB, \"_344957.f6268dec14814a250b90d685e286ba15.pdf\"",
        "From Hegel to Marx: Studies in the Intellectual Development of Karl Marx (A Morningside Book)",
        "Columbia University Press, Columbia University Press Morningside ed, 1994",
        "Sidney Hook"
      ]
    },
    {
      "href": "/md5/739c985a6511ab9ae43e6682b1e45f54",
      "img": "https://libgen.rs/covers/2556000/739c985a6511ab9ae43e6682b1e45f54-g.jpg",
      "info": [
        "English, pdf, 6.3MB, \"Boldizzoni, Francesco - Foretelling the End of Capitalism_ Intellectual Misadventures since Karl Marx (2020).pdf\"",
        "Foretelling the End of Capitalism: Intellectual Misadventures since Karl Marx",
        "Harvard University Press, 2020",
        "Francesco Boldizzoni"
      ]
    },
    {
      "href": "/md5/22810b3ca8f7afb3aa0827924398295f",
      "img": "https://libgen.rs/covers/122000/22810b3ca8f7afb3aa0827924398295f-d.jpg",
      "info": [
        "English, pdf, 2.3MB, \"Skousen - The Big Three in Economics - Smith, Marx, Keynes (Sharpe, 2007).pdf\"",
        "The Big Three in Economics: Adam Smith, Karl Marx, and John Maynard Keynes",
        "M.E. Sharpe, 2007",
        "Mark Skousen"
      ]
    },
    {
      "href": "/md5/853a0af3474859a92553724cdb1873cf",
      "img": "https://libgen.rs/covers/188000/853a0af3474859a92553724cdb1873cf-d.jpg",
      "info": [
        "English, pdf, 3.9MB, \"[13454] The Economics of Karl Marx-Analysis and Application.-Samuel Hollander.pdf\"",
        "The Economics of Karl Marx: Analysis and Application",
        "Cambridge University Press, Historical Perspectives on Modern Economics, 2008",
        "Samuel Hollander"
      ]
    },
    {
      "href": "/md5/ded3c6826d753f954a5234022db04636",
      "img": "https://libgen.rs/covers/2514000/ded3c6826d753f954a5234022db04636-d.png",
      "info": [
        "English, pdf, 6.8MB, \"kh04dq47g.pdf\"",
        "Marx Went Away—But Karl Stayed Behind: Updated Edition of Karl Marx Collective: Economy, Society and Religion in a Siberian Collective Farm",
        "University of Michigan Press, 2008",
        "Caroline Humphrey"
      ]
    },
    {
      "href": "/md5/fa7860b215eb32398fc74009e61bd546",
      "img": "https://libgen.rs/covers/304000/fa7860b215eb32398fc74009e61bd546-d.jpg",
      "info": [
        "English, pdf, 19.6MB, \"0521366259.Cambridge.University.Press.The.Cambridge.Companion.to.Marx.Nov.1991.pdf\"",
        "The Cambridge Companion to Marx (Cambridge Companions to Philosophy)",
        "Cambridge University Press, Cambridge Companions to Philosophy, 1991",
        "Terrell Carver"
      ]
    },
    {
      "href": "/md5/77b33de97bd9fcfe3c7299a9a75ab15a",
      "img": "https://libgen.rs/covers/2559000/77b33de97bd9fcfe3c7299a9a75ab15a-g.jpg",
      "info": [
        "English, epub, 1.2MB, \"33 Lessons on Capital - Reading Marx Politically.epub\"",
        "33 Lessons on Capital: Reading Marx Politically",
        "Book Network Int'l Limited trading as NBN International (NBNi); Pluto Press;Pluto Press (UK), 2019",
        "Harry Cleaver"
      ]
    },
    {
      "href": "/md5/349ffc22639077e0773c975b6f1e676e",
      "img": "https://libgen.rs/covers/2483000/349ffc22639077e0773c975b6f1e676e-g.jpg",
      "info": [
        "English, epub, 3.5MB, \"Economics Through Everyday Life - From China and Chili Dogs to Marx and Marijuana.epub\"",
        "Economics Through Everyday Life: From China and Chili Dogs to Marx and Marijuana",
        "Zephyros Press, 2016",
        "Clark PhD, Anthony"
      ]
    },
    {
      "href": "/md5/4da61bef6c6d7b3ba8afeda9fa86a9ae",
      "img": "https://libgen.rs/covers/1189000/4da61bef6c6d7b3ba8afeda9fa86a9ae-g.jpg",
      "info": [
        "English, pdf, 1.3MB, \"A New Social Question__ On Minimum Income Protection in the Postindustrial Era - Ive Marx_1662.pdf\"",
        "A New Social Question?: On Minimum Income Protection in the Postindustrial Era",
        "Amsterdam University Press, 2007",
        "Ive Marx"
      ]
    },
    {
      "href": "/md5/ff791bf183f2a23f2ed7297d75b9a04b",
      "img": "https://libgen.rs/covers/147000/ff791bf183f2a23f2ed7297d75b9a04b-d.jpg",
      "info": [
        "English, pdf, 2.5MB, \"Marx D., Hutter J. Ab Initio Molecular Dynamics (CUP, 2009)(ISBN 0521898633)(O)(579s)_MNs_.pdf\"",
        "Ab initio molecular dynamics: basic theory and advanced methods",
        "Cambridge University Press, 1, 2009",
        "Dominik Marx, Jürg Hutter"
      ]
    },
    {
      "href": "/md5/6dbad1ba0932524fb0edf2da53c55a73",
      "img": "https://libgen.rs/covers/2505000/6dbad1ba0932524fb0edf2da53c55a73-g.jpg",
      "info": [
        "English, epub, 3.5MB, \"Nathan Rosenstein, Robert Morstein-Marx - A Companion to the Roman Republic (Blackwell Companions to the Ancient World) (Retail).epub\"",
        "A Companion to the Roman Republic",
        "Wiley-Blackwell, Blackwell Companions to the Ancient World, 2006",
        "Nathan Rosenstein; Robert Morstein-Marx"
      ]
    },
    {
      "href": "/md5/1f707c4998a43fbff93f49e568de73a2",
      "img": "https://libgen.rs/covers/565000/1f707c4998a43fbff93f49e568de73a2-d.jpg",
      "info": [
        "English, pdf, 1.3MB, \"_266789.1f707c4998a43fbff93f49e568de73a2.pdf\"",
        "Karl Marx, Anthropologist",
        "Berg Publishers, 2009",
        "Thomas C. Patterson"
      ]
    },
    {
      "href": "/md5/4ca0927a8002e287e777d4d48ab3d3de",
      "img": "https://libgen.rs/covers/393000/4ca0927a8002e287e777d4d48ab3d3de-d.jpg",
      "info": [
        "English, pdf, 7.1MB, \"4ca0927a8002e287e777d4d48ab3d3de~0333722086,9780333722084.pdf\"",
        "Marxism After Marx",
        "Palgrave Macmillan, 3rd, 1998",
        "David Mclellan"
      ]
    },
    {
      "href": "/md5/46a6184f2132daf4054d408649c34db0",
      "img": "https://libgen.rs/covers/811000/46a6184f2132daf4054d408649c34db0-d.jpg",
      "info": [
        "English, pdf, 2.1MB, \"_520647.46a6184f2132daf4054d408649c34db0.pdf\"",
        "Marx & Satan",
        "Living Sacrifice Book Co, 1986",
        "Richard Wurmbrand"
      ]
    },
    {
      "href": "/md5/7ad210d4723f4578b5cc74ac7c008dbe",
      "img": "https://libgen.rs/covers/234000/7ad210d4723f4578b5cc74ac7c008dbe-d.jpg",
      "info": [
        "English, pdf, 52.4MB, \"America_Knits.pdf\"",
        "America Knits",
        "International Publishers, 2005",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/fff7032b7290255a90cc477d41e4cb92",
      "img": "https://libgen.rs/covers/391000/fff7032b7290255a90cc477d41e4cb92-d.jpg",
      "info": [
        "English, pdf, 56.9MB, \"1844671879,9781844671878,.pdf\"",
        "The Philosophy of Marx",
        "Verso, 2007",
        "Étienne Balibar, Chris Turner"
      ]
    },
    {
      "href": "/md5/8afaf16558c958d55bfa8ebfac348562",
      "img": "https://libgen.rs/covers/321000/8afaf16558c958d55bfa8ebfac348562-d.jpg",
      "info": [
        "English, pdf, 5.8MB, \"0415979749.Routledge.Marx.Lenin.and.the.Revolutionary.Experience.Studies.of.Communism.and.Radicalism.in.the.Age.of.Globalization.Aug.2006\"",
        "Marx, Lenin, and the Revolutionary Experience: Studies of Communism and Radicalism in an Age of Globalization",
        "Routledge, 1, 2006",
        "Le Blanc, Paul"
      ]
    },
    {
      "href": "/md5/02a0c1831ff13187e3e29982c17041b9",
      "img": "https://libgen.rs/covers/622000/02a0c1831ff13187e3e29982c17041b9-d.jpg",
      "info": [
        "English, pdf, 2.5MB, \"_341922.02a0c1831ff13187e3e29982c17041b9.pdf\"",
        "Marx on Globalization",
        "Lawrence And Wishart Ltd, 2002",
        "David Renton"
      ]
    },
    {
      "href": "/md5/7a187f25357833fc1787da9c3d1fef29",
      "img": "https://libgen.rs/covers/753000/7a187f25357833fc1787da9c3d1fef29-g.jpg",
      "info": [
        "English, pdf, 1.9MB, \"_457882.7a187f25357833fc1787da9c3d1fef29.pdf\"",
        "Marx and Philosophy: Three Studies",
        "Macmillan, 1986",
        "Wallis Arthur Suchting"
      ]
    },
    {
      "href": "/md5/7d06d6b30d947d28e62a419e0024996a",
      "img": "https://libgen.rs/covers/140000/7d06d6b30d947d28e62a419e0024996a-d.jpg",
      "info": [
        "English, pdf, 1.0MB, \"20091106_7D06D6B3\"",
        "Why Read Marx Today?",
        "Oxford University Press, USA, 2003",
        "Jonathan Wolff"
      ]
    },
    {
      "href": "/md5/cdabc6544a03bd84dca65f8ba66d2485",
      "img": "https://libgen.rs/covers/390000/cdabc6544a03bd84dca65f8ba66d2485-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"0230224407,9780230224407,.pdf\"",
        "Karl Marx on Technology and Alienation",
        "Palgrave Macmillan, 2009",
        "Amy Wendling"
      ]
    },
    {
      "href": "/md5/7c8db41f56a39cfe5afe8916763c8693",
      "img": "https://libgen.rs/covers/390000/7c8db41f56a39cfe5afe8916763c8693-d.jpg",
      "info": [
        "English, pdf, 12.4MB, \"052133831X,9780521338318,.pdf\"",
        "An Introduction to Karl Marx",
        "Cambridge University Press, 1986",
        "Jon Elster"
      ]
    },
    {
      "href": "/md5/2956de7e72fcac667d512ad378b84f2d",
      "img": "https://libgen.rs/covers/390000/2956de7e72fcac667d512ad378b84f2d-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"0199249938,9780199249930,.pdf\"",
        "Shakespeare and Marx",
        "Oxford University Press, USA, Oxford Shakespeare Topics, 2004",
        "Gabriel Egan"
      ]
    },
    {
      "href": "/md5/56db29987a61b99fc8592f49623b6ea1",
      "img": "https://libgen.rs/covers/831000/56db29987a61b99fc8592f49623b6ea1-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"_48360.56db29987a61b99fc8592f49623b6ea1.pdf\"",
        "Shakespeare and Marx (Oxford Shakespeare Topics)",
        "Oxford University Press, 2004",
        "Gabriel Egan"
      ]
    },
    {
      "href": "/md5/6f451a81dcc9d8aa68d318a989bb3db3",
      "img": "https://libgen.rs/covers/419000/6f451a81dcc9d8aa68d318a989bb3db3-d.jpg",
      "info": [
        "English, pdf, <1MB, \"_267508.6f451a81dcc9d8aa68d318a989bb3db3.pdf\"",
        "Why Marx Was Right",
        "Yale University Press, 1St Edition, 2011",
        "Terry Eagleton"
      ]
    },
    {
      "href": "/md5/93e9be92f2cc6df8da1eca4fa8b00f50",
      "img": "https://libgen.rs/covers/651000/93e9be92f2cc6df8da1eca4fa8b00f50-d.jpg",
      "info": [
        "English, pdf, <1MB, \"_378220.93e9be92f2cc6df8da1eca4fa8b00f50.pdf\"",
        "The Communist Manifesto (Signet Classics)",
        "Signet Classics, 1998",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/a86aca898095ac1ce3a841d7139c07d2",
      "img": "https://libgen.rs/covers/391000/a86aca898095ac1ce3a841d7139c07d2-d.jpg",
      "info": [
        "English, pdf, 14.9MB, \"0816615055,9780816615056,.pdf\"",
        "The Scientific Marx",
        "Univ Of Minnesota Press, Minnesota Archive Editions, 1986",
        "Daniel Little"
      ]
    },
    {
      "href": "/md5/d1edf385f0284984b6affb46a3170a0f",
      "img": "https://libgen.rs/covers/391000/d1edf385f0284984b6affb46a3170a0f-d.jpg",
      "info": [
        "English, pdf, 1.6MB, \"0262612070,9780262612074,.pdf\"",
        "Transcritique: On Kant and Marx",
        "The MIT Press, 2005",
        "Kojin Karatani, Sabu Kohso"
      ]
    },
    {
      "href": "/md5/4b970c3cd51968056faea9414ad70cff",
      "img": "https://libgen.rs/covers/392000/4b970c3cd51968056faea9414ad70cff-d.jpg",
      "info": [
        "English, pdf, 5.6MB, \"4b970c3cd51968056faea9414ad70cff~9780198239321,0198239327,0198244967,9780198244967.pdf\"",
        "Marx and Ethics",
        "Oxford University Press, USA, Clarendon Paperbacks, 1991",
        "Philip J. Kain"
      ]
    },
    {
      "href": "/md5/66be05cb8d6d312fddbc22f0c6ab6476",
      "img": "https://libgen.rs/covers/389000/66be05cb8d6d312fddbc22f0c6ab6476-d.jpg",
      "info": [
        "English, pdf, <1MB, \"66be05cb8d6d312fddbc22f0c6ab6476~9780745322520,0745322522,0745322530,9780745322537.pdf\"",
        "Marx and other Four-Letter Words",
        "Pluto Press, 2005",
        "Georgina Blakeley, Valerie Bryson"
      ]
    },
    {
      "href": "/md5/7e4eb1e7a03595fe0a7a956efa4940bc",
      "img": "https://libgen.rs/covers/407000/7e4eb1e7a03595fe0a7a956efa4940bc-d.jpg",
      "info": [
        "English, pdf, 4.6MB, \"_302879.7e4eb1e7a03595fe0a7a956efa4940bc.pdf\"",
        "The Communist Manifesto",
        "International Publishers Co., New edition, 1948",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/927e01aea12513433f25022c3c567676",
      "img": "https://libgen.rs/covers/622000/927e01aea12513433f25022c3c567676-d.jpg",
      "info": [
        "English, pdf, 1.6MB, \"_341921.927e01aea12513433f25022c3c567676.pdf\"",
        "Theory and the Common from Marx to Badiou",
        "Palgrave Macmillan, 2009",
        "Patrick McGee"
      ]
    },
    {
      "href": "/md5/a4b68b4c19fc80ec27b04b472208fd37",
      "img": "https://libgen.rs/covers/515000/a4b68b4c19fc80ec27b04b472208fd37-d.jpg",
      "info": [
        "English, pdf, 4.4MB, \"_256535.a4b68b4c19fc80ec27b04b472208fd37.pdf\"",
        "Marx and other Four-Letter Words",
        "Pluto Press, 2005",
        "Georgina Blakeley, Valerie Bryson"
      ]
    },
    {
      "href": "/md5/d7d6431cdb49fb01582aac4f665b6375",
      "img": "https://libgen.rs/covers/391000/d7d6431cdb49fb01582aac4f665b6375-d.jpg",
      "info": [
        "English, pdf, 6.4MB, \"B000E1EUQA,.pdf\"",
        "Remarks on Marx: Conversations with Duccio Trombadori",
        "Semiotext(e), 1st English, 1991",
        "michel Foucault"
      ]
    },
    {
      "href": "/md5/cf295d13f6af686d7da8d4af4ae713f0",
      "img": "https://libgen.rs/covers/774000/cf295d13f6af686d7da8d4af4ae713f0-d.jpg",
      "info": [
        "English, pdf, 1.6MB, \"_460705.cf295d13f6af686d7da8d4af4ae713f0.pdf\"",
        "Marx Today: Selected Works and Recent Debates",
        "Palgrave Macmillan, 2010",
        "John F. Sitton"
      ]
    },
    {
      "href": "/md5/0dddff3253ad74c09edca39cff9e033c",
      "img": "https://libgen.rs/covers/578000/0dddff3253ad74c09edca39cff9e033c-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"_217725.0dddff3253ad74c09edca39cff9e033c.pdf\"",
        "Marx: A Guide for the Perplexed (Guides for the Perplexed)",
        "Continuum, 2010",
        "John Seed"
      ]
    },
    {
      "href": "/md5/4070390d9c57fc87101b4fc252e0b08a",
      "img": "https://libgen.rs/covers/389000/4070390d9c57fc87101b4fc252e0b08a-d.jpg",
      "info": [
        "English, pdf, 1.0MB, \"4070390d9c57fc87101b4fc252e0b08a~0415278899,9780415278898,0203219511,9780203219515,9780203295533.pdf\"",
        "Disability in Jewish Law",
        "Routledge, Jewish Law in Content, 1, 2002",
        "Tzvi C. Marx"
      ]
    },
    {
      "href": "/md5/4bc28eeafd60b89d4ccb835c463ae870",
      "img": "https://libgen.rs/covers/392000/4bc28eeafd60b89d4ccb835c463ae870-g.jpg",
      "info": [
        "English, pdf, 1.1MB, \"4bc28eeafd60b89d4ccb835c463ae870~9780195007190,9780203202371,9780415110785,9780585459929,0195007190,0203202376,0415110785.pdf\"",
        "Ten Great Economists: From Marx to Keynes",
        "Oxford University Press, 1951",
        "Joseph A. Schumpeter"
      ]
    },
    {
      "href": "/md5/2d9b28032d54a5503a9fa3ea7d05c855",
      "img": "https://libgen.rs/covers/391000/2d9b28032d54a5503a9fa3ea7d05c855-d.jpg",
      "info": [
        "English, pdf, 23.1MB, \"9780226038599,.pdf\"",
        "Darwin, Marx, Wagner: Critique of a Heritage",
        "University Of Chicago Press, 2, 1981",
        "Jacques Barzun"
      ]
    },
    {
      "href": "/md5/63360e7f21b22cc7d043d558e8b09cd0",
      "img": "https://libgen.rs/covers/831000/63360e7f21b22cc7d043d558e8b09cd0-g.jpg",
      "info": [
        "English, pdf, 5.7MB, \"_204098.63360e7f21b22cc7d043d558e8b09cd0.pdf\"",
        "Notes on Dialectics: Hegel, Marx, Lenin",
        "Lawrence Hill & Co, 1981",
        "C. L. R. James"
      ]
    },
    {
      "href": "/md5/929be39b2a20e0fa32284815377bd11a",
      "img": "https://libgen.rs/covers/390000/929be39b2a20e0fa32284815377bd11a-d.jpg",
      "info": [
        "English, pdf, 10.5MB, \"0333772415,9780333772416,.pdf\"",
        "Interpreting Modern Political Philosophy: From Machiavelli to Marx",
        "Palgrave Macmillan, 2002",
        "Alistair Edwards, Jules Townshend"
      ]
    },
    {
      "href": "/md5/cad6e479a3b043b0ec6072836093fc64",
      "img": "https://libgen.rs/covers/483000/cad6e479a3b043b0ec6072836093fc64-d.jpg",
      "info": [
        "English, pdf, 3.0MB, \"_20239.cad6e479a3b043b0ec6072836093fc64.pdf\"",
        "Faith in Nation: Exclusionary Origins of Nationalism",
        "Oxford University Press, 2003",
        "Anthony W. Marx"
      ]
    },
    {
      "href": "/md5/f58417ff974b4ecddb0b65b2cb9a03e9",
      "img": "https://libgen.rs/covers/310000/f58417ff974b4ecddb0b65b2cb9a03e9-d.jpg",
      "info": [
        "English, pdf, <1MB, \"Steintrager, James - Bentham - Political Thinkers.pdf\"",
        "Political Thinkers: From Aristotle to Marx",
        "Routledge, Reprint, 2004",
        "Steintrager, James"
      ]
    },
    {
      "href": "/md5/3424a240d5a6d02422540c0119c21e4f",
      "img": "https://libgen.rs/covers/735000/3424a240d5a6d02422540c0119c21e4f-d.jpg",
      "info": [
        "English, pdf, 4.4MB, \"_499732.3424a240d5a6d02422540c0119c21e4f.pdf\"",
        "How to Read Marx (How to Read)",
        "W. W. Norton & Company, 1, 2006",
        "Peter Osborne"
      ]
    },
    {
      "href": "/md5/66408fa4251477d0e5d9978507da2e55",
      "img": "https://libgen.rs/covers/238000/66408fa4251477d0e5d9978507da2e55-d.jpg",
      "info": [
        "English, pdf, 7.4MB, \"Writing for Animation, Comics, and Games.pdf\"",
        "Writing for Animation, Comics, and Games",
        "Focal Press, 2006",
        "Christy Marx"
      ]
    },
    {
      "href": "/md5/84ac666a8086b84b0c1e0426d1cd681b",
      "img": "https://libgen.rs/covers/634000/84ac666a8086b84b0c1e0426d1cd681b-d.jpg",
      "info": [
        "English, pdf, 10.5MB, \"_355733.84ac666a8086b84b0c1e0426d1cd681b.pdf\"",
        "Interpreting Modern Political Philosophy: From Machiavelli to Marx",
        "Palgrave Macmillan, 2002",
        "Alistair Edwards, Jules Townshend"
      ]
    },
    {
      "href": "/md5/e13405558b5b3f73a9477b7d2c9813c1",
      "img": "https://libgen.rs/covers/778000/e13405558b5b3f73a9477b7d2c9813c1-d.jpg",
      "info": [
        "English, epub, <1MB, \"_473403.e13405558b5b3f73a9477b7d2c9813c1.epub\"",
        "The Marx Sisters: A Kathy and Brock Mystery",
        "Arcade Publishing, First US, 1999",
        "Barry Maitland"
      ]
    },
    {
      "href": "/md5/13bed871b55eaf2bb4d95c7b8f23fb50",
      "img": "https://libgen.rs/covers/684000/13bed871b55eaf2bb4d95c7b8f23fb50-d.jpg",
      "info": [
        "English, pdf, 62.2MB, \"_417324.13bed871b55eaf2bb4d95c7b8f23fb50.pdf\"",
        "Capital: Critique of Political Economy Volume 1 1",
        "Penguin Classics, Penguin Classics, 1, 1992",
        "Karl Marx"
      ]
    },
    {
      "href": "/md5/388a0b2bcc12af463f000d022a097330",
      "img": "https://libgen.rs/covers/3208000/388a0b2bcc12af463f000d022a097330-g.jpg",
      "info": [
        "English, pdf, 8.7MB, \"State Violence in Nazi Germany.pdf\"",
        "State Violence in Nazi Germany: From Kristallnacht to Barbarossa",
        "Routledge, 2019",
        "Emanuel Marx"
      ]
    },
    {
      "href": "/md5/4aa7bc5dbc285ff45d33d55c8f3409a7",
      "img": "https://libgen.rs/covers/392000/4aa7bc5dbc285ff45d33d55c8f3409a7-d.jpg",
      "info": [
        "English, pdf, 25.9MB, \"4aa7bc5dbc285ff45d33d55c8f3409a7~0521297052,9780521297059,0521228964,9780521228961.pdf\"",
        "Making Sense of Marx",
        "Cambridge University Press, Studies in Marxism and Social Theory, 1985",
        "Jon Elster"
      ]
    },
    {
      "href": "/md5/5ed2c238d127b224be2a2c1d28bfa638",
      "img": "https://libgen.rs/covers/433000/5ed2c238d127b224be2a2c1d28bfa638-d.jpg",
      "info": [
        "English, pdf, 1.5MB, \"_62690.5ed2c238d127b224be2a2c1d28bfa638.pdf\"",
        "The Politics of Historical Vision: Marx, Foucault, Habermas",
        "The Guilford Press, Critical Perspectives, 1996",
        "Steven Best"
      ]
    },
    {
      "href": "/md5/8002f92eca66bed37a3539ee81ad3af5",
      "img": "https://libgen.rs/covers/389000/8002f92eca66bed37a3539ee81ad3af5-d.jpg",
      "info": [
        "English, pdf, 9.3MB, \"8002f92eca66bed37a3539ee81ad3af5~047115315X.pdf\"",
        "Mao, Marx, and the Market: Capitalist Adventures in Russia and China",
        "Wiley, 1, 2001",
        "Dean LeBaron"
      ]
    },
    {
      "href": "/md5/763b8c57ee649437ae27a34e3ed337c2",
      "img": "https://libgen.rs/covers/634000/763b8c57ee649437ae27a34e3ed337c2-d.jpg",
      "info": [
        "English, pdf, <1MB, \"_356280.763b8c57ee649437ae27a34e3ed337c2.pdf\"",
        "Rethinking the Normative Content of Critical Theory: Marx, Habermas and Beyond",
        "Palgrave Macmillan, 2001",
        "Bob Cannon"
      ]
    },
    {
      "href": "/md5/9ee5ab795f95974c0c8bf3ca7aecd2a5",
      "img": "https://libgen.rs/covers/134000/9ee5ab795f95974c0c8bf3ca7aecd2a5.jpg",
      "info": [
        "English, pdf, 2.3MB, \"20091101_9EE5AB79\"",
        "The Big Three in Economics: Adam Smith, Karl Marx, and John Maynard Keynes",
        "Routledge, 2007",
        "Mark Skousen"
      ]
    },
    {
      "href": "/md5/45e11cf9b3ca649f597bb9cfa382b1c9",
      "img": "https://libgen.rs/covers/740000/45e11cf9b3ca649f597bb9cfa382b1c9-d.jpg",
      "info": [
        "English, epub, 1.4MB, \"_472294.45e11cf9b3ca649f597bb9cfa382b1c9.epub\"",
        "Does technology drive history?: the dilemma of technological determinism",
        "MIT Press, 1994",
        "Merritt Roe Smith, Leo Marx"
      ]
    },
    {
      "href": "/md5/4ae5e9b2599afe51303aca004ba01c06",
      "img": "https://libgen.rs/covers/392000/4ae5e9b2599afe51303aca004ba01c06-d.jpg",
      "info": [
        "English, pdf, 1.2MB, \"4ae5e9b2599afe51303aca004ba01c06~0061253170,9780061253171.pdf\"",
        "Intellectuals: From Marx and Tolstoy to Sartre and Chomsky P.S.",
        "Harper Perennial, Revised, 2007",
        "Paul Johnson"
      ]
    },
    {
      "href": "/md5/7ac66e6af5e9e8b8c0bc72421c91d710",
      "img": "https://libgen.rs/covers/753000/7ac66e6af5e9e8b8c0bc72421c91d710-d.jpg",
      "info": [
        "English, pdf, 1.0MB, \"_484983.7ac66e6af5e9e8b8c0bc72421c91d710.pdf\"",
        "Libertarian Communism: Marx, Engels and the Political Economy of Freedom",
        "Palgrave Macmillan, First Edition, 2007",
        "Ernesto Screpanti"
      ]
    },
    {
      "href": "/md5/1bfca439d9c7661d0bb9c279b5bb7dc7",
      "img": "https://libgen.rs/covers/390000/1bfca439d9c7661d0bb9c279b5bb7dc7-d.jpg",
      "info": [
        "English, pdf, 14.2MB, \"0195103262,9780195103267,.pdf\"",
        "Karl Marx: His Life and Environment, Fourth Edition",
        "Oxford University Press, USA, 4, 1996",
        "Sir Isaiah Berlin, Alan Ryan"
      ]
    },
    {
      "href": "/md5/30ceb277ed87ccc7b5188fc9c5fc19f0",
      "img": "https://libgen.rs/covers/2432000/30ceb277ed87ccc7b5188fc9c5fc19f0-g.jpg",
      "info": [
        "English, epub, 3.3MB, \"Zombie Capitalism_ Global Crisi - Chris Harman.epub\"",
        "Zombie Capitalism: Global Crisis and the Relevance of Marx",
        "Haymarket Books, 2009",
        "Chris Harman"
      ]
    },
    {
      "href": "/md5/8058850b9f9d3e8b8698734aff75bb69",
      "img": "https://libgen.rs/covers/391000/8058850b9f9d3e8b8698734aff75bb69-d.jpg",
      "info": [
        "English, pdf, 2.2MB, \"0252067959,9780252067952,.pdf\"",
        "Cyber-Marx: Cycles and Circuits of Struggle in High Technology Capitalism",
        "University of Illinois Press, 1999",
        "Nick Dyer-Witheford"
      ]
    },
    {
      "href": "/md5/8dfa1ce3e409d7b829745e17adf01ef3",
      "img": "https://libgen.rs/covers/263000/8dfa1ce3e409d7b829745e17adf01ef3-d.jpg",
      "info": [
        "English, pdf, 2.1MB, \"Y. dl_avaxhome 34882  _=0714633348.pdf\"",
        "Marx and Engels and the English Workers: And Other Essays",
        "Routledge, 1989",
        "W. O. Henderson"
      ]
    },
    {
      "href": "/md5/c3c7d4ac97717750d914c86fcf02653f",
      "img": "https://libgen.rs/covers/648000/c3c7d4ac97717750d914c86fcf02653f-d.jpg",
      "info": [
        "English, pdf, 33.0MB, \"_374799.c3c7d4ac97717750d914c86fcf02653f.pdf\"",
        "Really Existing Nationalisms: A Post-Communist View from Marx and Engels",
        "Oxford University Press, USA, 1996",
        "Erica Benner"
      ]
    },
    {
      "href": "/md5/ccc93440808dddf6912e230298d5fab0",
      "img": "https://libgen.rs/covers/773000/ccc93440808dddf6912e230298d5fab0-d.jpg",
      "info": [
        "English, pdf, 80.3MB, \"_508154.ccc93440808dddf6912e230298d5fab0.pdf\"",
        "Oral and Maxillofacial Pathology: A Rationale for Treatment",
        "Quintessence Publishing (IL), 1, 2002",
        "Robert E. Marx, Diane Stern"
      ]
    },
    {
      "href": "/md5/0a21b63904a369a5f821359d155ee3bb",
      "img": "https://libgen.rs/covers/604000/0a21b63904a369a5f821359d155ee3bb-d.jpg",
      "info": [
        "English, pdf, 2.1MB, \"_318270.0a21b63904a369a5f821359d155ee3bb.pdf\"",
        "The Big Three in Economics: Adam Smith, Karl Marx, And John Maynard Keynes",
        "M.E. Sharpe, 2007",
        "Mark Skousen"
      ]
    },
    {
      "href": "/md5/2a8524faf65de09e1576a31a841740e7",
      "img": "https://libgen.rs/covers/633000/2a8524faf65de09e1576a31a841740e7-d.jpg",
      "info": [
        "English, pdf, 1.7MB, \"_354089.2a8524faf65de09e1576a31a841740e7.pdf\"",
        "Marx and the Dynamic of the Capital Formation: An Aesthetics of Political Economy",
        "Palgrave Macmillan, 1, 2010",
        "Beverley Best"
      ]
    },
    {
      "href": "/md5/3adc630fa20a2f1c84f85e21ee6dfcc9",
      "img": "https://libgen.rs/covers/737000/3adc630fa20a2f1c84f85e21ee6dfcc9-d.jpg",
      "info": [
        "English, pdf, 46.0MB, \"_434984.3adc630fa20a2f1c84f85e21ee6dfcc9.pdf\"",
        "The German Ideology (Great Books in Philosophy)",
        "Prometheus Books, Great Books in Philosophy, Paperback, 1998",
        "Karl Marx, Friedrich Engels"
      ]
    },
    {
      "href": "/md5/7e026ce44d71ab3bb89b72e19387ccc4",
      "img": "https://libgen.rs/covers/605000/7e026ce44d71ab3bb89b72e19387ccc4-d.jpg",
      "info": [
        "English, pdf, 2.1MB, \"_318393.7e026ce44d71ab3bb89b72e19387ccc4.pdf\"",
        "The Big Three in Economics: Adam Smith, Karl Marx, And John Maynard Keynes",
        "M.E. Sharpe, 2007",
        "Mark Skousen"
      ]
    },
    {
      "href": "/md5/ba5934fd28a9f3ed2eb684fa8f8b991b",
      "img": "https://libgen.rs/covers/2798000/ba5934fd28a9f3ed2eb684fa8f8b991b-g.jpg",
      "info": [
        "English, pdf, 4.7MB, \"TheOxfordHandbookofKarlMarx.pdf\"",
        "The Oxford Handbook of Karl Marx",
        "Oxford University Press, Oxford handbooks, 2019",
        "Matt Vidal; Tony Smith; Tomás Rotta; Paul Prew"
      ]
    },
    {
      "href": "/md5/4cf4be518c5a2835c666771ea28050ed",
      "img": "https://libgen.rs/covers/588000/4cf4be518c5a2835c666771ea28050ed-d.jpg",
      "info": [
        "English, pdf, 34.4MB, \"_296419.4cf4be518c5a2835c666771ea28050ed.pdf\"",
        "Introduction to Mathematical Statistics and Its Applications, An (4th Edition)",
        "Prentice Hall, 4, 2005",
        "Richard J. Larsen, Morris L. Marx"
      ]
    },
    {
      "href": "/md5/3d72ca62162be1eaed0139c0ae404af1",
      "img": "https://libgen.rs/covers/542000/3d72ca62162be1eaed0139c0ae404af1-g.jpg",
      "info": [
        "English, pdf, 12.2MB, \"_277635.3d72ca62162be1eaed0139c0ae404af1.pdf\"",
        "Revolution Retrieved: Writings on Marx, Keynes, Capitalist Crisis and New Social Subjects (1967-83)",
        "Left Bank Books, 1988",
        "Toni Negri"
      ]
    },
    {
      "href": "/md5/3a42f30772ff890fd175c2eedeed80c7",
      "img": "https://libgen.rs/covers/391000/3a42f30772ff890fd175c2eedeed80c7-d.jpg",
      "info": [
        "English, pdf, 2.1MB, \"0521874777,9780521874779,.pdf\"",
        "The Young Karl Marx: German Philosophy, Modern Politics, and Human Flourishing",
        "Cambridge University Press, Ideas in Context, 1, 2007",
        "David Leopold"
      ]
    },
    {
      "href": "/md5/552c0cf2b40ac9cbe3e13fb8063347b1",
      "img": "https://libgen.rs/covers/400000/552c0cf2b40ac9cbe3e13fb8063347b1-d.jpg",
      "info": [
        "English, pdf, 4.0MB, \"552c0cf2b40ac9cbe3e13fb8063347b1~0415778085,9780415778084,0203876709,9780203876701.pdf\"",
        "Heterodox Macroeconomics: Keynes, Marx and globalization",
        "Routledge, Routledge Advances in Heterodox Economics, 1, 2009",
        "Jonathan P. Goldstein, Michael G. Hillard"
      ]
    },
    {
      "href": "/md5/8226323872d2c72f3a3d4fc6688af6f1",
      "img": "https://libgen.rs/covers/659000/8226323872d2c72f3a3d4fc6688af6f1-d.jpg",
      "info": [
        "English, pdf, 1.0MB, \"_388925.8226323872d2c72f3a3d4fc6688af6f1.pdf\"",
        "Leadership and Management Skills for Long-Term Care",
        "Springer Publishing Company, 1, 2008",
        "Eileen M. Sullivan-marx, Deanna Gray-Miceli"
      ]
    },
    {
      "href": "/md5/da377cb18b9672f7e9f4de978b59252e",
      "img": "https://libgen.rs/covers/391000/da377cb18b9672f7e9f4de978b59252e-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"0415247756,9780415247757,.pdf\"",
        "Marx and Wittgenstein: Knowledge, Morality and Politics",
        "Routledge, Routledge Studies in Social and Political Thought, 1, 2002",
        "Gavin Kitching, Nigel Pleasants"
      ]
    },
    {
      "href": "/md5/0ef7deb75dc235c4259550729ba235e5",
      "img": "https://libgen.rs/covers/607000/0ef7deb75dc235c4259550729ba235e5-d.jpg",
      "info": [
        "English, pdf, 82.9MB, \"_323361.0ef7deb75dc235c4259550729ba235e5.pdf\"",
        "Critique of Hegel’s ’Philosophy Of Right’",
        "Cambridge University Press, Cambridge Studies in the History and Theory of Politics, 1977",
        "Karl Marx"
      ]
    },
    {
      "href": "/md5/2e9249477f44cd057d45d56301f262c6",
      "img": "https://libgen.rs/covers/788000/2e9249477f44cd057d45d56301f262c6-d.jpg",
      "info": [
        "English, pdf, 10.5MB, \"_468985.2e9249477f44cd057d45d56301f262c6.pdf\"",
        "An Introduction to Mathematical Statistics and Its Applications, 5th Edition",
        "Prentice Hall / Pearson, 5th, 2011",
        "Richard J. Larsen, Morris L. Marx"
      ]
    },
    {
      "href": "/md5/31c21e2093431b4cebf8ab57c8dc9563",
      "img": "https://libgen.rs/covers/264000/31c21e2093431b4cebf8ab57c8dc9563-d.jpg",
      "info": [
        "English, pdf, 13.0MB, \"Y. dl_avaxhome 37439  _=IntrMaEng.pdf\"",
        "Introduction To Marx And Engels: A Critical Reconstruction,",
        "Westview Press, Dimensions of Philosophy Series, 2, 1997",
        "Richard Schmitt"
      ]
    },
    {
      "href": "/md5/5a7771d79326510da7a362273bdf8c59",
      "img": "https://libgen.rs/covers/628000/5a7771d79326510da7a362273bdf8c59-d.jpg",
      "info": [
        "English, pdf, 3.9MB, \"_348756.5a7771d79326510da7a362273bdf8c59.pdf\"",
        "Controversy and Coalition : The New Feminist Movement Across Four Decades of Change",
        "Routledge, 3, 2000",
        "Myra Marx Ferree, Beth B. Hess"
      ]
    },
    {
      "href": "/md5/55ba8a0e38faa25b4cee45946c54a19a",
      "img": "https://libgen.rs/covers/870000/55ba8a0e38faa25b4cee45946c54a19a-d.jpg",
      "info": [
        "English, pdf, 4.4MB, \"Waldron_Nonsense+Upon+Stilts_1987 copy\"",
        "Nonsense Upon Stilts: Bentham, Burke and Marx on the Rights of Man",
        "Methuen Publishing, 1987",
        "Jeremy Waldron (Editor)"
      ]
    },
    {
      "href": "/md5/70e82060d550361924908155a6e67f34",
      "img": "https://libgen.rs/covers/418000/70e82060d550361924908155a6e67f34-d.jpg",
      "info": [
        "English, pdf, 1.2MB, \"_270174.70e82060d550361924908155a6e67f34.pdf\"",
        "The Micro-Politics of Capital: Marx and the Prehistory of the Present",
        "State University of New York Press, 2003",
        "Jason Read"
      ]
    },
    {
      "href": "/md5/bb5d4040245a72caac067a0bbf855e24",
      "img": "https://libgen.rs/covers/643000/bb5d4040245a72caac067a0bbf855e24-d.jpg",
      "info": [
        "English, pdf, 19.5MB, \"_368082.bb5d4040245a72caac067a0bbf855e24.pdf\"",
        "Drug Testing In Vitro: Breakthroughs and Trends in Cell Culture Technology",
        "Wiley-VCH, 1, 2007",
        "Uwe Marx (Editor), Volker Sandig (Editor)"
      ]
    },
    {
      "href": "/md5/c9c47115700d5c3b5baaeab597986d4e",
      "img": "https://libgen.rs/covers/634000/c9c47115700d5c3b5baaeab597986d4e-d.jpg",
      "info": [
        "English, pdf, 6.2MB, \"_355469.c9c47115700d5c3b5baaeab597986d4e.pdf\"",
        "The Music of the Nineteenth Century and its Culture",
        "Cambridge University Press, Cambridge Library Collection - Music, 1, 2009",
        "Adolf bernhard Marx"
      ]
    },
    {
      "href": "/md5/1e6e247eb45f41f4df2540bec24f2172",
      "img": "https://libgen.rs/covers/565000/1e6e247eb45f41f4df2540bec24f2172-d.jpg",
      "info": [
        "English, pdf, 1.3MB, \"_278156.1e6e247eb45f41f4df2540bec24f2172.pdf\"",
        "The Monstrous and the Dead: Burke, Marx, Fascism (University of Wales Press - Political Philosophy Now)",
        "University of Wales Press, 2005",
        "Mark Neocleous"
      ]
    },
    {
      "href": "/md5/7df61a8bc8019cde8c83bbc743dd92f0",
      "img": "https://libgen.rs/covers/263000/7df61a8bc8019cde8c83bbc743dd92f0-d.jpg",
      "info": [
        "English, pdf, <1MB, \"Y. dl_avaxhome 34731  _=Communist_manifest.pdf\"",
        "The Communist Manifesto",
        "Signic Classic, Signet Classics, 1st Signic Classic print, 1998",
        "Karl Marx, Friedrich Engels, Martin Malia"
      ]
    },
    {
      "href": "/md5/a55652f8a82711386cdb0e3a19a6dd45",
      "img": "https://libgen.rs/covers/3318000/a55652f8a82711386cdb0e3a19a6dd45-d.jpg",
      "info": [
        "English, pdf, 1.8MB, \"1638312041279-1.pdf\"",
        "How to Philosophize with a Hammer and Sickle: Nietzsche and Marx for the 21st-Century Left",
        "Watkins Media Limited, 2021",
        "Jonas Ceika"
      ]
    },
    {
      "href": "/md5/c12bd3c726ca5912a2636eabc9863af5",
      "img": "https://libgen.rs/covers/665000/c12bd3c726ca5912a2636eabc9863af5-d.jpg",
      "info": [
        "English, pdf, 6.3MB, \"_395911.c12bd3c726ca5912a2636eabc9863af5.pdf\"",
        "Specters of Marx: The State of the Debt, The Work of Mourning & the New International (Routledge Classics)",
        "Routledge, 1, 2006",
        "Jacques Derrida"
      ]
    },
    {
      "href": "/md5/82e35d47284df975b6fb66e6b7b07c94",
      "img": "https://libgen.rs/covers/755000/82e35d47284df975b6fb66e6b7b07c94-d.jpg",
      "info": [
        "English, pdf, 1.9MB, \"_470759.82e35d47284df975b6fb66e6b7b07c94.pdf\"",
        "Marx and the Politics of Abstraction (Studies in Critical Social Sciences)",
        "Brill Leiden-Boston, Studies in Critical Social Sciences 31, 2011",
        "Paul Paolucci"
      ]
    },
    {
      "href": "/md5/8fb70b80be7f91e5b8d1c26be2875cce",
      "img": "https://libgen.rs/covers/389000/8fb70b80be7f91e5b8d1c26be2875cce-g.jpg",
      "info": [
        "English, pdf, <1MB, \"8fb70b80be7f91e5b8d1c26be2875cce~9780521078368,0521078369.pdf\"",
        "Critique of Hegel's Philosophy of Right (1843-44)",
        "Cambridge University Press, Cambridge Studies in the History and Theory of Politics, 1971",
        "Marx, Karl"
      ]
    },
    {
      "href": "/md5/dafbe6315472b91117755bea534541d8",
      "img": "https://libgen.rs/covers/261000/dafbe6315472b91117755bea534541d8-d.jpg",
      "info": [
        "English, pdf, 7.8MB, \"Y. dl_avaxhome 19524  _=RomanRepublicCompanion.pdf\"",
        "A Companion to the Roman Republic",
        "Wiley-Blackwell, Blackwell Companions to the Ancient World, 2006",
        "Nathan Rosenstein, Robert Morstein-Marx"
      ]
    },
    {
      "href": "/md5/343cfce3e8850f50864052bc068cc85d",
      "img": "https://libgen.rs/covers/1024000/343cfce3e8850f50864052bc068cc85d-d.jpg",
      "info": [
        "English, epub, 3.7MB, \"The ACL Solution\"",
        "The ACL solution: prevention and recovery for sports' most devastating knee injury",
        "Demos Health, 1, 2012",
        "Robert G. Marx, Grethe Myklebust, Brian W. Boyle"
      ]
    },
    {
      "href": "/md5/5072af24bb6ec905a4e826f3caec93c3",
      "img": "https://libgen.rs/covers/1022000/5072af24bb6ec905a4e826f3caec93c3-d.jpg",
      "info": [
        "English, pdf, 1.9MB, \"9380118007.Leftword Books.Patnaik, Prabhat.Marx__039;s Capital.Dec.100\"",
        "Understanding Capital: Marx's Economic Theory",
        "Harvard University Press, 2009",
        "FOLEY, D.K. and Foley, D.K."
      ]
    },
    {
      "href": "/md5/51b5417bbe203e7743ec4b0dd275848a",
      "img": "https://libgen.rs/covers/3106000/51b5417bbe203e7743ec4b0dd275848a-g.jpg",
      "info": [
        "English, epub, <1MB, \"Fetishism and the Theory of Val - Desmond McNeill.epub\"",
        "Fetishism and the Theory of Value: Reassessing Marx in the 21st Century",
        "Springer International Publishing, 2020",
        "Desmond McNeill"
      ]
    },
    {
      "href": "/md5/9e3579eadaf6dfd3cbd00dcb8f380213",
      "img": "https://libgen.rs/covers/1024000/9e3579eadaf6dfd3cbd00dcb8f380213-d.jpg",
      "info": [
        "English, pdf, 18.1MB, \"The ACL Solution\"",
        "The ACL solution: prevention and recovery for sports' most devastating knee injury",
        "Demos Health, 1, 2012",
        "Robert G. Marx, Grethe Myklebust, Brian W. Boyle"
      ]
    },
    {
      "href": "/md5/0899ee6a3c0a56175f2667e0cfcd1606",
      "img": "https://libgen.rs/covers/390000/0899ee6a3c0a56175f2667e0cfcd1606-d.jpg",
      "info": [
        "English, pdf, 19.0MB, \"087975446X,9780879754464,.pdf\"",
        "The Economic and Philosophic Manuscripts of 1844 and the Communist Manifesto",
        "Prometheus Books, Great Books in Philosophy, 1st, 1988",
        "Karl Marx, Fredrick Engels, Martin Milligan"
      ]
    },
    {
      "href": "/md5/160611cc5466ec4c4d17b572a30f1605",
      "img": "https://libgen.rs/covers/261000/160611cc5466ec4c4d17b572a30f1605-d.jpg",
      "info": [
        "English, pdf, 14.2MB, \"Y. dl_avaxhome 18102  _=0415389577.pdf\"",
        "Specters of Marx: The State of the Debt, The Work of Mourning & the New International",
        "Routledge, Routledge Classics, 1, 2006",
        "Jacques Derrida"
      ]
    },
    {
      "href": "/md5/4b60b474b0ef6598b8d5def0086516bc",
      "img": "https://libgen.rs/covers/384000/4b60b474b0ef6598b8d5def0086516bc-d.jpg",
      "info": [
        "English, pdf, 6.0MB, \"Companion to the Roman Republic, A.pdf\"",
        "A Companion to the Roman Republic",
        "Wiley-Blackwell, Blackwell Companions to the Ancient World, 2006",
        "Nathan S. Rosenstein, Robert Morstein-Marx"
      ]
    },
    {
      "href": "/md5/b1b22515005a46e2b3bba399a63ec2fd",
      "img": "https://libgen.rs/covers/504000/b1b22515005a46e2b3bba399a63ec2fd-d.jpg",
      "info": [
        "English, pdf, 1.1MB, \"_267337.b1b22515005a46e2b3bba399a63ec2fd.pdf\"",
        "Karl Marx and the Classics: An Essay on Value, Crises and the Capitalist Mode of Production",
        "Ashgate Publishing, 2002",
        "John Milios, Dimitri Dimoulis, George Economakis"
      ]
    },
    {
      "href": "/md5/0a53551376d23dae3db145a83c9f83f1",
      "img": "https://libgen.rs/covers/580000/0a53551376d23dae3db145a83c9f83f1-d.jpg",
      "info": [
        "English, pdf, 3.4MB, \"_280147.0a53551376d23dae3db145a83c9f83f1.pdf\"",
        "A New Social Question?: On Minimum Income Protection in the Postindustrial Era (Changing Welfare States Series)",
        "Amsterdam University Press, Changing Welfare States Series, 2007",
        "Ive Marx"
      ]
    },
    {
      "href": "/md5/3b74f63d916b2f8eb6dbdd05661b82e6",
      "img": "https://libgen.rs/covers/220000/3b74f63d916b2f8eb6dbdd05661b82e6-d.jpg",
      "info": [
        "English, pdf, 2.0MB, \"0521856175.Cambridge.University.Press.The.Modernist.Novel.and.the.Decline.of.Empire.Jan.2006.pdf\"",
        "The Modernist Novel and the Decline of Empire",
        "Cambridge University Press, 2005",
        "John Marx"
      ]
    },
    {
      "href": "/md5/458b14f78bb4eda4051a178e79c01dd5",
      "img": "https://libgen.rs/covers/2562000/458b14f78bb4eda4051a178e79c01dd5-g.jpg",
      "info": [
        "English, pdf, <1MB, \"Bedouin of Mount Sinai-An Anthropological Study of Their Political Economy-bw.pdf\"",
        "Bedouin of Mount Sinai: An Anthropological Study of their Political Economy",
        "Berghahn Books, 2013",
        "Emanuel Marx"
      ]
    },
    {
      "href": "/md5/2e67e34b2a813c12e01f5e067afd0930",
      "img": "https://libgen.rs/covers/826000/2e67e34b2a813c12e01f5e067afd0930-d.jpg",
      "info": [
        "English, pdf, 19.0MB, \"_302889.2e67e34b2a813c12e01f5e067afd0930.pdf\"",
        "The Economic and Philosophic Manuscripts of 1844 and the Communist Manifesto (Great Books in Philosophy)",
        "Prometheus Books, 1st, 1988",
        "Karl Marx, Fredrick Engels (authors), Martin Milligan (translator)"
      ]
    },
    {
      "href": "/md5/2800aef87e4baca92fd324849284680a",
      "img": "https://libgen.rs/covers/645000/2800aef87e4baca92fd324849284680a-d.jpg",
      "info": [
        "English, pdf, 8.0MB, \"_370957.2800aef87e4baca92fd324849284680a.pdf\"",
        "Nurse Practitioners: Evolution of Advanced Practice, Fourth Edition (Advanced Practice Nursing)",
        "Springer Publishing Company, 4, 2003",
        "Mathy D. Mezey, Diane O. McGivern, Eileen M. Sullivan-Marx, Sherry A. Greenberg"
      ]
    },
    {
      "href": "/md5/33318e5656ea7c3bc4d8729e000cf6b6",
      "img": "https://libgen.rs/covers/703000/33318e5656ea7c3bc4d8729e000cf6b6-d.jpg",
      "info": [
        "English, pdf, 4.5MB, \"Elsevier-Write.Your.Way.into.Animation.and.Games.2010.RETAiL.EBook-DiGiBook.pdf\"",
        "Write Your Way Into Animation and Games: Create a Writing Career in Animation and Games",
        "Elsevier, 2010",
        "Christy Marx"
      ]
    },
    {
      "href": "/md5/4f7082469581daac9fad882f50440d90",
      "img": "https://libgen.rs/covers/397000/4f7082469581daac9fad882f50440d90-d.jpg",
      "info": [
        "English, pdf, 2.4MB, \"4f7082469581daac9fad882f50440d90~0521452740,9780521452748,9780511008115.pdf\"",
        "Musical Form in the Age of Beethoven: Selected Writings on Theory and Method",
        "Cambridge University Press, Cambridge Studies in Music Theory and Analysis, 1998",
        "A. B. Marx, Scott Burnham"
      ]
    },
    {
      "href": "/md5/0987c93039baf406c63e965205e38b61",
      "img": "https://libgen.rs/covers/620000/0987c93039baf406c63e965205e38b61-d.jpg",
      "info": [
        "English, pdf, 2.2MB, \"_338896.0987c93039baf406c63e965205e38b61.pdf\"",
        "Hegemony to Empire: The Development of the Roman Imperium in the East from 148 to 62 BC",
        "University of California Press, Hellenistic Culture and Society, converted, 1996",
        "Robert Kallet-Marx"
      ]
    },
    {
      "href": "/md5/4e11e1e307fb4a044f2d0e89c68db925",
      "img": "https://libgen.rs/covers/397000/4e11e1e307fb4a044f2d0e89c68db925-d.jpg",
      "info": [
        "English, pdf, 1.6MB, \"4e11e1e307fb4a044f2d0e89c68db925~052179045X,9780521790451,9780511041105.pdf\"",
        "Shaping Abortion Discourse: Democracy and the Public Sphere in Germany and the United States",
        "Cambridge University Press, Communication, Society and Politics, 2002",
        "Myra Marx Ferree, William Anthony Gamson, Jürgen Gerhards, Dieter Rucht"
      ]
    },
    {
      "href": "/md5/bc5696961ffe5df56ef0ff89fb575dfb",
      "img": "https://libgen.rs/covers/25000/bc5696961ffe5df56ef0ff89fb575dfb-d.jpg",
      "info": [
        "English, pdf, 11.2MB, \"Jones_L._(ed.)_Encyclopedia_of_religion_(Vol._8)_(2005)(2nd_ed.)(en)(698s).pdf\"",
        "Encyclopedia of religion. vol. 08 of 14",
        "Macmillan Reference USA, KA'BAH - MARX, KARL, 2nd ed, 2005",
        "Jones Lindsay, Lindsay Jones, Jones, Lindsay"
      ]
    },
    {
      "href": "/md5/77ae557e13832c8c2971c38b86e9d175",
      "img": "https://libgen.rs/covers/2565000/77ae557e13832c8c2971c38b86e9d175-g.jpg",
      "info": [
        "English, epub, <1MB, \"Essential Marx, The - Karl Marx.epub\"",
        "The Essential Marx",
        "Dover Publications, 2012",
        "Karl Marx; Leon Trotsky (editor)"
      ]
    },
    {
      "href": "/md5/d9e34638d32f0ddbb9f62a369bfb423d",
      "img": "https://libgen.rs/covers/2720000/d9e34638d32f0ddbb9f62a369bfb423d-g.jpg",
      "info": [
        "English, epub, 39.5MB, \"PassPorter_2527s Walt Disney World 2016 - Jennifer Marx & Dave Marx & Alexander Marx.epub\"",
        "Passporter's Walt Disney World 2016: the unique travel guide, planner, organizer, journal, and keepsake",
        "PassPorter Travel Press, 18th edition, 2015",
        "Marx, Alexander;Marx, Dave;Marx, Jennifer"
      ]
    },
    {
      "href": "/md5/ca67b7605ebf4f8cdd220549781faf97",
      "img": "https://libgen.rs/covers/1426000/ca67b7605ebf4f8cdd220549781faf97-d.jpg",
      "info": [
        "English, epub, 1.6MB, \"(Bloomsbury Academic) Karl Marx, Anthropologist - Thomas C. Patterson.epub\"",
        "Karl Marx, anthropologist",
        "Bloomsbury Academic;Berg, 2009",
        "Marx, Karl; Patterson, Thomas Carl; Marx, Karl"
      ]
    },
    {
      "href": "/md5/c56ed13b0465b7afafed2c0260beeb9b",
      "img": "https://libgen.rs/covers/1426000/c56ed13b0465b7afafed2c0260beeb9b-d.jpg",
      "info": [
        "English, pdf, <1MB, \"Karl Marx- An Intellectual Biography.pdf\"",
        "Karl Marx : an intellectual biography",
        "Berghahn Books, English-language ed, 2013",
        "Marx, Karl; Marx, Karl; Hosfeld, Rolf"
      ]
    },
    {
      "href": "/md5/ef8403b6ac3c2aa1d23b2833b64b21fc",
      "img": "https://libgen.rs/covers/1432000/ef8403b6ac3c2aa1d23b2833b64b21fc-d.jpg",
      "info": [
        "English, pdf, <1MB, \"The Marx Dictionary - Fraser, Ian, Wilde, Lawrence.pdf\"",
        "Marx dictionary",
        "Continuum, Continuum philosophy dictionaries, 2011",
        "Marx, Karl; Fraser, Ian; Marx, Karl; Wilde, Lawrence"
      ]
    },
    {
      "href": "/md5/76651b5a4287d50f5f08b47f2cd19e4d",
      "img": "https://libgen.rs/covers/1426000/76651b5a4287d50f5f08b47f2cd19e4d-d.jpg",
      "info": [
        "English, pdf, 5.3MB, \"Kieran Allen - Marx and the Alternative to Capitalism.pdf\"",
        "Marx and the alternative to capitalism",
        "Pluto Press, 2011",
        "Marx, Karl; Allen, Kieran; Marx, Karl"
      ]
    },
    {
      "href": "/md5/e7b7bf03ad75a8f25695be7da2595f1f",
      "img": "https://libgen.rs/covers/1426000/e7b7bf03ad75a8f25695be7da2595f1f-d.jpg",
      "info": [
        "English, pdf, 1.2MB, \"(Bloomsbury Academic) Karl Marx, Anthropologist - Thomas C. Patterson (1).pdf\"",
        "Karl Marx, anthropologist",
        "Bloomsbury Academic;Berg, 2009",
        "Marx, Karl; Patterson, Thomas Carl; Marx, Karl"
      ]
    },
    {
      "href": "/md5/5251c5902d693fa18dcae2b3c732de36",
      "img": "https://libgen.rs/covers/2475000/5251c5902d693fa18dcae2b3c732de36-g.jpg",
      "info": [
        "English, epub, <1MB, \"The Essential Marx.epub\"",
        "Essential Marx",
        "Dover Publications, 2012",
        "Karl Marx, Leon Trotsky (ed.)"
      ]
    },
    {
      "href": "/md5/94bc69ff6dd844a663626cdd57eb6fc5",
      "img": "https://libgen.rs/covers/1310000/94bc69ff6dd844a663626cdd57eb6fc5-d.jpg",
      "info": [
        "English, pdf, 49.8MB, \"Marx _amp; Engels Collected Works Volume 1_ Ka - Karl Marx.pdf\"",
        "Collected Works, Vol. 1: Marx: 1835-1843 1",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 1, 1, 1975",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/2f2f5df07a56a9becd7afc7cda1d4f85",
      "img": "https://libgen.rs/covers/1426000/2f2f5df07a56a9becd7afc7cda1d4f85-d.jpg",
      "info": [
        "English, pdf, 1.3MB, \"(Reaktion Books) (Critical Lives) Karl Marx - Paul Thomas.pdf\"",
        "Karl Marx",
        "Reaktion Books, Critical lives (London England), 0, 2012",
        "Marx, Karl; Thomas, Paul; Marx, Karl"
      ]
    },
    {
      "href": "/md5/34945f801bf60b115b22a6511ddbcf55",
      "img": "https://libgen.li/covers/3350000/34945f801bf60b115b22a6511ddbcf55.jpg",
      "info": [
        "English, pdf, 7.3MB, \"For Marx by Louis Althusser.pdf\"",
        "For Marx",
        "Verso, Radical thinkers, 2005",
        "Marx, Karl;Althusser, Louis"
      ]
    },
    {
      "href": "/md5/a3b80e191e9381f1d9aaccdef249c28c",
      "img": "https://libgen.rs/covers/1426000/a3b80e191e9381f1d9aaccdef249c28c-d.jpg",
      "info": [
        "English, pdf, <1MB, \"(Berghahn Books) Karl Marx_ An Intellectual Biography - Rolf Hosfeld.pdf\"",
        "Karl Marx : an intellectual biography",
        "Berghahn Books, English-language ed, 2013",
        "Marx, Karl; Marx, Karl; Hosfeld, Rolf"
      ]
    },
    {
      "href": "/md5/b178c93013b9f3de4b4aea747c81a39c",
      "img": "https://libgen.rs/covers/2921000/b178c93013b9f3de4b4aea747c81a39c-g.jpg",
      "info": [
        "English, pdf, 16.9MB, \"Karl Marx _ economy, class and - Marx, Karl, 1818-1883_cropped.pdf\"",
        "Karl Marx: economy, class and social revolution",
        "Charles Scribner's Sons, 1971",
        "Karl Marx, Z. A. Jordan"
      ]
    },
    {
      "href": "/md5/0ad38b861787d1bcbfaa23c5dbe8b696",
      "img": "https://libgen.rs/covers/1360000/0ad38b861787d1bcbfaa23c5dbe8b696-d.jpg",
      "info": [
        "English, pdf, 7.9MB, \"1978_1991_Negr_Marx_Beyond_Marx_Lessons_On_The_Grundrisse_ocs_Pluto_Autonomedia_1991.pdf\"",
        "Marx Beyond Marx: Lessons on the Grundrisse",
        "Pluto Press, New Ed, 1992",
        "Antonio Negri"
      ]
    },
    {
      "href": "/md5/ced62439bd55877188d0579c63c440d2",
      "img": "https://libgen.rs/covers/1427000/ced62439bd55877188d0579c63c440d2-d.jpg",
      "info": [
        "English, pdf, <1MB, \"(Bloomsbury Academic) (Bloomsbury Philosophy Dictionaries) Marx Dictionary (Continuum Philosophy Dictionaries) - Ian Fraser.pdf\"",
        "Marx dictionary",
        "Bloomsbury Academic;Continuum, Continuum philosophy dictionaries, 2011",
        "Marx, Karl; Fraser, Ian; Marx, Karl; Wilde, Lawrence"
      ]
    },
    {
      "href": "/md5/4ef6868e1d9304002454c63e71ec8234",
      "img": "https://libgen.rs/covers/1311000/4ef6868e1d9304002454c63e71ec8234-g.jpg",
      "info": [
        "English, pdf, 3.8MB, \"marx-engels-collected-works-volume-50_-ma-karl-marx.pdf\"",
        "Collected Works, Vol. 50: Engels: 1892-1895",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 50, 2004",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/93dbc6406a275765ffd636d497ab8921",
      "img": "https://libgen.rs/covers/1311000/93dbc6406a275765ffd636d497ab8921-g.jpg",
      "info": [
        "English, pdf, 13.4MB, \"marx-engels-collected-works-volume-49_-ka-karl-marx.pdf\"",
        "Collected Works, Vol. 49: Engels: 1890-1892",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 49, 2001",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/bb430cd52f07e98fbe5ee87ee6e456f2",
      "img": "https://libgen.rs/covers/1311000/bb430cd52f07e98fbe5ee87ee6e456f2-g.jpg",
      "info": [
        "English, pdf, 11.4MB, \"marx-engels-collected-works-volume-48_-ka-karl-marx.pdf\"",
        "Collected Works, Vol. 48: Engels: 1887-1890",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 48, 2001",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/2b15bfa342b018e3057818a47f15ec2a",
      "img": "https://libgen.li/covers/2584000/2b15bfa342b018e3057818a47f15ec2a.jpg",
      "info": [
        "English, epub, 2.4MB, \"Shlomo Avineri - Karl Marx.epub\"",
        "Karl Marx: philosophy and revolution",
        "Yale University Press, Jewish lives, 2019;2019",
        "Avineri, Shelomoh;Marx, Karl"
      ]
    },
    {
      "href": "/md5/8b5f558d553a6c3aff6e326574528a3b",
      "img": "https://libgen.rs/covers/2654000/8b5f558d553a6c3aff6e326574528a3b-g.jpg",
      "info": [
        "English, epub, 1.6MB, \"2014 Rachel Holmes - Eleanor Marx - A Life_Rull.epub\"",
        "Eleanor Marx: a life",
        "Bloomsbury Publishing, 2015;2014",
        "Holmes, Rachel;Marx, Eleanor"
      ]
    },
    {
      "href": "/md5/a3ceae5575ba4b50468f919bb31ed063",
      "img": "https://libgen.rs/covers/2582000/a3ceae5575ba4b50468f919bb31ed063-g.jpg",
      "info": [
        "English, pdf, 1.8MB, \"Karl Marx and Contemporary Philosophy.pdf\"",
        "Karl Marx and contemporary philosophy",
        "Palgrave Macmillan, 2009",
        "Chitty, Andrew;Marx, Karl;McIvor, Martin"
      ]
    },
    {
      "href": "/md5/ed8d843574ef39fe3f1d40f1889ed1e0",
      "img": "https://libgen.rs/covers/1310000/ed8d843574ef39fe3f1d40f1889ed1e0-d.jpg",
      "info": [
        "English, pdf, 31.5MB, \"Marx _amp; Engels Collected Works Volume 2_ Fr - Karl Marx.pdf\"",
        "Collected Works, Vol. 2: Engels: 1838-1842",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 2, 1975",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/23b5cf10d8a8abc9382e148eaf744632",
      "img": "https://libgen.rs/covers/2720000/23b5cf10d8a8abc9382e148eaf744632-g.jpg",
      "info": [
        "English, epub, 12.2MB, \"Karl Marx - Jonathan Sperber.epub\"",
        "Karl Marx: a nineteenth-century life",
        "Liveright Publishing Corporation, First edition, 2013;2014",
        "Marx, Karl;Sperber, Jonathan"
      ]
    },
    {
      "href": "/md5/3923cd18ea8e28d6c8a3fcac338fe0bf",
      "img": "https://libgen.rs/covers/2690000/3923cd18ea8e28d6c8a3fcac338fe0bf-g.jpg",
      "info": [
        "English, epub, 2.0MB, \"Marx and Marxism - Claeys, Gregory.epub\"",
        "Marx and Marxism",
        "Hachette Book Group;Penguin, Unabridged, 2018",
        "Claeys, Gregory;Gould, Michael;Marx, Karl"
      ]
    },
    {
      "href": "/md5/4bd1b6eb267805067eb932becafcd58a",
      "img": "https://libgen.rs/covers/2599000/4bd1b6eb267805067eb932becafcd58a-g.jpg",
      "info": [
        "English, epub, 2.4MB, \"Shlomo Avineri - Karl Marx (epub).epub\"",
        "Karl Marx: philosophy and revolution",
        "Yale University Press, Jewish lives, 2019;2019",
        "Avineri, Shelomoh;Marx, Karl"
      ]
    },
    {
      "href": "/md5/31168106cb21edcc557856cbcb098940",
      "img": "https://libgen.li/fictioncovers/3518000/31168106cb21edcc557856cbcb098940.jpg",
      "info": [
        "English, epub, 42.9MB, \"Richard Marx - Stories to Tell - A Memoir (epub).epub\"",
        "Stories to Tell: A Memoir",
        "Simon & Schuster, 2021",
        "Richard Marx [Marx, Richard]"
      ]
    },
    {
      "href": "/md5/a7de29398618ca355566534aa9dd8e19",
      "img": "https://libgen.rs/covers/1429000/a7de29398618ca355566534aa9dd8e19-d.jpg",
      "info": [
        "English, pdf, 17.0MB, \"(Princeton University Press) (Translation_Transnation) Poetry of the Revolution_ Marx, Manifestos, and the Avant-Gardes - Martin Puchner.pdf\"",
        "Poetry of the revolution : Marx, manifestos, and the avant-gardes",
        "Princeton University Press, Translation_Transnation;Translation/transnation, annotated edition, 2006",
        "Marx, Karl; Marx, Karl; Puchner, Martin; Marx, Karl"
      ]
    },
    {
      "href": "/md5/5e91d902ce85fc1a6c79773d3b2ac142",
      "img": "https://libgen.rs/covers/2690000/5e91d902ce85fc1a6c79773d3b2ac142-g.jpg",
      "info": [
        "English, epub, 1.0MB, \"Revolutionary Ideas of Karl Marx, The - Callinicos, Alex.epub\"",
        "The Revolutionary Ideas of Karl Marx",
        "Haymarket Books, 2011",
        "Callinicos, Alex;Marx, Karl"
      ]
    },
    {
      "href": "/md5/7f93a124d96a3cff6c340588c8eb01ac",
      "img": "https://libgen.rs/covers/2720000/7f93a124d96a3cff6c340588c8eb01ac-g.jpg",
      "info": [
        "English, pdf, 1.6MB, \"2016 Ronaldo Munck - Marx 2020 - After the Crisis_Rebll.pdf\"",
        "Marx 2020: after the crisis",
        "Zed Books, 2016",
        "Marx, Karl;Munck, Ronaldo"
      ]
    },
    {
      "href": "/md5/fc9224c8ddbc52ea1c9aad2537f70862",
      "img": "https://libgen.rs/covers/1428000/fc9224c8ddbc52ea1c9aad2537f70862-d.jpg",
      "info": [
        "English, epub, <1MB, \"On Marx - Alan Ryan.epub\"",
        "On Marx : revolutionary and utopian",
        "Liveright Pub. Corporation, Liveright classics, First Edition, 2014",
        "Marx, Karl; Ryan, Alan"
      ]
    },
    {
      "href": "/md5/07838de0e309ff241332507db873650e",
      "img": "https://libgen.rs/covers/1425000/07838de0e309ff241332507db873650e-d.jpg",
      "info": [
        "English, pdf, 2.6MB, \"How to Change the World- Reflections on Marx and Marxism.pdf\"",
        "How to change the world : reflections on Marx and Marxism",
        "Yale Univ. Press, F First Edition, 2011",
        "Hobsbawm, Eric J.; Marx, Karl; Marx, Karl"
      ]
    },
    {
      "href": "/md5/3fe64da6fb2b477ce2db966be91a7de1",
      "img": "https://libgen.rs/covers/2139000/3fe64da6fb2b477ce2db966be91a7de1-d.jpg",
      "info": [
        "English, pdf, 18.4MB, \"teodor-shanin-late-marx-and-the-russian-road-marx-and-the-peripheries-of-capitalism-4.pdf\"",
        "Late Marx and the Russian Road: Marx and the \"peripheries of capitalism\"",
        "Monthly Review Press, 1st, 1983",
        "Teodor Shanin"
      ]
    },
    {
      "href": "/md5/c81c1ffc935e5535794c1695024ce44c",
      "img": "https://libgen.rs/covers/1311000/c81c1ffc935e5535794c1695024ce44c-g.jpg",
      "info": [
        "English, pdf, 15.9MB, \"marx-engels-collected-works-volume-25_-ka-karl-marx.pdf\"",
        "Collected Works, Vol. 25: Engels: Anti-Dühring, Dialectics of Nature",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 25, 1987",
        "Karl Marx, Frederick Engels"
      ]
    },
    {
      "href": "/md5/6e3bb7e910b171c64a7f7453e0303fe6",
      "img": "https://libgen.rs/covers/2671000/6e3bb7e910b171c64a7f7453e0303fe6-g.jpg",
      "info": [
        "English, epub, 20.2MB, \"PassPorter_2527s Disney Cruise Line and Its Ports of Call - Dave Marx & Jennifer Marx.epub\"",
        "PassPorter's Disney Cruise Line and Its Ports of Call",
        "PassPorter Travel Press, PassPorter, 2014",
        "Disney Cruise Line.;Marx, Dave;Marx, Jennifer"
      ]
    },
    {
      "href": "/md5/a9c0607834e742244b733fa5f5bea67a",
      "img": "https://libgen.rs/covers/1427000/a9c0607834e742244b733fa5f5bea67a-d.jpg",
      "info": [
        "English, pdf, 1.5MB, \"(Bloomsbury Academic) (Guides for the Perplexed) Marx_ A Guide for the Perplexed - John Seed.pdf\"",
        "Marx : a guide for the perplexed",
        "Bloomsbury Academic;Continuum, Guides for the perplexed, 1, 2010",
        "Marx, Karl; Seed, John; Marx, Karl"
      ]
    },
    {
      "href": "/md5/81e26ccbe732c1cf576f2c7fc2b33a00",
      "img": "https://libgen.rs/covers/2720000/81e26ccbe732c1cf576f2c7fc2b33a00-g.jpg",
      "info": [
        "English, epub, 2.0MB, \"Karl Marx - Wood, Allen_253B.epub\"",
        "Karl Marx",
        "Routledge;Taylor and Francis, Arguments of the philosophers, 2nd ed, 2013;2006",
        "Marx, Karl;Wood, Allen"
      ]
    },
    {
      "href": "/md5/49ddcfffe847ee5d78ed026f8ba2a0a4",
      "img": "https://libgen.rs/covers/1433000/49ddcfffe847ee5d78ed026f8ba2a0a4-g.jpg",
      "info": [
        "English, epub, 1.9MB, \"The Sociology of Marx - Henri Lefebvre.epub\"",
        "The Sociology of Marx",
        "Knopf Doubleday Publishing Group;Pantheon Books, 2015",
        "Guterman, Norbert; Lefebvre, Henri; Marx, Karl"
      ]
    },
    {
      "href": "/md5/826530ebb90ef5ea889da524c4e96838",
      "img": "https://libgen.rs/covers/2087000/826530ebb90ef5ea889da524c4e96838-d.jpg",
      "info": [
        "English, epub, 2.4MB, \"Groucho Marx_nodrm.epub\"",
        "Groucho Marx : the comedy of existence",
        "Yale University Press, Jewish Lives, First Edition/ First Printing, 2016",
        "Marx, Groucho; Siegel, Lee"
      ]
    },
    {
      "href": "/md5/9a943a1af14cac55b32ad618162791d9",
      "img": "https://libgen.rs/covers/2653000/9a943a1af14cac55b32ad618162791d9-g.jpg",
      "info": [
        "English, pdf, 1.4MB, \"2017 Robin Hahnel - Radical Political Economy - Sraffa Versus Marx.pdf\"",
        "Radical political economy: Sraffa versus Marx",
        "Routledge, 2017",
        "Hahnel, Robin;Marx, Karl;Sraffa, Piero"
      ]
    },
    {
      "href": "/md5/a45bc3f8c8a6cce6c13ce37aebe93533",
      "img": "https://libgen.rs/covers/2690000/a45bc3f8c8a6cce6c13ce37aebe93533-g.jpg",
      "info": [
        "English, epub, 4.6MB, \"Marx and Marxism (A Pelican Boo - Gregory Claeys.epub\"",
        "Marx and Marxism",
        "Penguin Books Ltd;Pelican, Pelican book 19, 2018",
        "Claeys, Gregory;Marx, Karl"
      ]
    },
    {
      "href": "/md5/c6cd7c7d6ee46c7b37e5956215afde42",
      "img": "https://libgen.rs/covers/1426000/c6cd7c7d6ee46c7b37e5956215afde42-d.jpg",
      "info": [
        "English, epub, 2.2MB, \"Karl Marx and World Literature - Siegbert Solomon Prawer.epub\"",
        "Karl Marx and world literature",
        "New York : Verso Books, 2011",
        "Marx, Karl; Prawer, Siegbert Salomon"
      ]
    },
    {
      "href": "/md5/dae95f01da4547115cc396656455df1c",
      "img": "https://libgen.rs/fictioncovers/2454000/dae95f01da4547115cc396656455df1c-g.jpg",
      "info": [
        "English, epub, <1MB, \"Groucho Marx 02 Private Eye - Ron Goulart.epub\"",
        "Groucho Marx, Private Eye",
        "St. Martin's Press, Mystery Featuring Groucho Marx Book 2, 1999",
        "Ron Goulart"
      ]
    },
    {
      "href": "/md5/ea64b08ae2613a62882e88b14c09c04f",
      "img": "https://libgen.rs/covers/1569000/ea64b08ae2613a62882e88b14c09c04f-d.jpg",
      "info": [
        "English, epub, <1MB, \"Samo_Tomsic_-_The_Capitalist_Unconscious_Marx_and_Lacan.epub\"",
        "The Capitalist Unconscious: Marx and Lacan",
        "Verso Books, 2015",
        "Lacan, Jacques;Marx, Karl;Tomšič, Samo"
      ]
    },
    {
      "href": "/md5/4aa36ae89293f2f2f724362fc5169436",
      "img": "https://libgen.rs/covers/1039000/4aa36ae89293f2f2f724362fc5169436-d.jpg",
      "info": [
        "English, epub, 13.4MB, \"Marx - Singer, Peter\"",
        "Marx",
        "Sterling, A Brief Insight, 2010",
        "Peter Singer"
      ]
    },
    {
      "href": "/md5/0104ccdee863109eb92bc36e126bb875",
      "img": "https://libgen.rs/covers/586000/0104ccdee863109eb92bc36e126bb875-g.jpg",
      "info": [
        "English, pdf, 14.1MB, \"_125083.0104ccdee863109eb92bc36e126bb875.pdf\"",
        "Collected Works, Vol. 29: Marx: 1857-1861",
        "International Publishers, Karl Marx and Frederick Engels. Collected Works 29, 1988",
        "Karl Marx, Frederick Engels"
      ]
    }
  ]
}
```
