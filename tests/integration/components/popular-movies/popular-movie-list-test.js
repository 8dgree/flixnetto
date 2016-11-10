import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('popular-movies/popular-movie-list', 'Integration | Component | popular movies/popular movie list', {
  integration: true,

  beforeEach() {
    this.setProperties({
      popularMovies: {
        "page":1,
        "results":[
          {
            "poster_path":"\/xfWac8MTYDxujaxgPVcRD9yZaul.jpg",
            "adult":false,
            "overview":"After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
            "release_date":"2016-10-25",
            "genre_ids":[
              28,
              12,
              14,
              878
            ],
            "id":284052,
            "original_title":"Doctor Strange",
            "original_language":"en",
            "title":"Doctor Strange",
            "backdrop_path":"\/hETu6AxKsWAS42tw8eXgLUgn4Lo.jpg",
            "popularity":52.834047,
            "vote_count":638,
            "video":false,
            "vote_average":6.98
          },
          {
            "poster_path":"\/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
            "adult":false,
            "overview":"An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
            "release_date":"2015-05-13",
            "genre_ids":[
              28,
              12,
              878,
              53
            ],
            "id":76341,
            "original_title":"Mad Max: Fury Road",
            "original_language":"en",
            "title":"Mad Max: Fury Road",
            "backdrop_path":"\/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
            "popularity":28.669847,
            "vote_count":5635,
            "video":false,
            "vote_average":7.2
          },
          {
            "poster_path":"\/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
            "adult":false,
            "overview":"Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
            "release_date":"2016-10-19",
            "genre_ids":[
              53,
              28,
              80,
              18,
              9648
            ],
            "id":343611,
            "original_title":"Jack Reacher: Never Go Back",
            "original_language":"en",
            "title":"Jack Reacher: Never Go Back",
            "backdrop_path":"\/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
            "popularity":22.605947,
            "vote_count":439,
            "video":false,
            "vote_average":4.46
          },
          {
            "poster_path":"\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "adult":false,
            "overview":"Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date":"2014-11-05",
            "genre_ids":[
              12,
              18,
              878
            ],
            "id":157336,
            "original_title":"Interstellar",
            "original_language":"en",
            "title":"Interstellar",
            "backdrop_path":"\/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "popularity":20.645354,
            "vote_count":5985,
            "video":false,
            "vote_average":8.07
          },
          {
            "poster_path":"\/5N20rQURev5CNDcMjHVUZhpoCNC.jpg",
            "adult":false,
            "overview":"Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
            "release_date":"2016-04-27",
            "genre_ids":[
              28,
              878,
              53
            ],
            "id":271110,
            "original_title":"Captain America: Civil War",
            "original_language":"en",
            "title":"Captain America: Civil War",
            "backdrop_path":"\/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
            "popularity":20.331323,
            "vote_count":3423,
            "video":false,
            "vote_average":6.78
          },
          {
            "poster_path":"\/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg",
            "adult":false,
            "overview":"The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
            "release_date":"2016-07-07",
            "genre_ids":[
              28,
              12,
              878,
              53
            ],
            "id":188927,
            "original_title":"Star Trek Beyond",
            "original_language":"en",
            "title":"Star Trek Beyond",
            "backdrop_path":"\/6uBlEXZCUHM15UNZqNig17VdN4m.jpg",
            "popularity":19.333959,
            "vote_count":1089,
            "video":false,
            "vote_average":6.31
          },
          {
            "poster_path":"\/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
            "adult":false,
            "overview":"Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
            "release_date":"2015-06-09",
            "genre_ids":[
              28,
              12,
              878,
              53
            ],
            "id":135397,
            "original_title":"Jurassic World",
            "original_language":"en",
            "title":"Jurassic World",
            "backdrop_path":"\/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
            "popularity":17.26691,
            "vote_count":5209,
            "video":false,
            "vote_average":6.58
          },
          {
            "poster_path":"\/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
            "adult":false,
            "overview":"\"Finding Dory\" reunites Dory with friends Nemo and Marlin on a search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
            "release_date":"2016-06-16",
            "genre_ids":[
              16,
              10751
            ],
            "id":127380,
            "original_title":"Finding Dory",
            "original_language":"en",
            "title":"Finding Dory",
            "backdrop_path":"\/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg",
            "popularity":17.121052,
            "vote_count":1287,
            "video":false,
            "vote_average":6.66
          },
          {
            "poster_path":"\/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
            "adult":false,
            "overview":"From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
            "release_date":"2016-08-03",
            "genre_ids":[
              28,
              80,
              14
            ],
            "id":297761,
            "original_title":"Suicide Squad",
            "original_language":"en",
            "title":"Suicide Squad",
            "backdrop_path":"\/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
            "popularity":14.951012,
            "vote_count":2448,
            "video":false,
            "vote_average":5.96
          },
          {
            "poster_path":"\/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
            "adult":false,
            "overview":"After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
            "release_date":"2016-05-18",
            "genre_ids":[
              28,
              12,
              14,
              878
            ],
            "id":246655,
            "original_title":"X-Men: Apocalypse",
            "original_language":"en",
            "title":"X-Men: Apocalypse",
            "backdrop_path":"\/oQWWth5AOtbWG9o8SCAviGcADed.jpg",
            "popularity":14.810067,
            "vote_count":2193,
            "video":false,
            "vote_average":6.13
          },
          {
            "poster_path":"\/oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
            "adult":false,
            "overview":"After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot.",
            "release_date":"2016-10-13",
            "genre_ids":[
              28,
              80,
              9648,
              878,
              53
            ],
            "id":207932,
            "original_title":"Inferno",
            "original_language":"en",
            "title":"Inferno",
            "backdrop_path":"\/anmLLbDx9d98NMZRyVUtxwJR6ab.jpg",
            "popularity":14.673429,
            "vote_count":397,
            "video":false,
            "vote_average":5.13
          },
          {
            "poster_path":"\/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
            "adult":false,
            "overview":"Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
            "release_date":"2014-11-18",
            "genre_ids":[
              878,
              12,
              53
            ],
            "id":131631,
            "original_title":"The Hunger Games: Mockingjay - Part 1",
            "original_language":"en",
            "title":"The Hunger Games: Mockingjay - Part 1",
            "backdrop_path":"\/83nHcz2KcnEpPXY50Ky2VldewJJ.jpg",
            "popularity":14.089487,
            "vote_count":3350,
            "video":false,
            "vote_average":6.68
          },
          {
            "poster_path":"\/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg",
            "adult":false,
            "overview":"Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.",
            "release_date":"2016-06-29",
            "genre_ids":[
              28,
              12
            ],
            "id":258489,
            "original_title":"The Legend of Tarzan",
            "original_language":"en",
            "title":"The Legend of Tarzan",
            "backdrop_path":"\/uC8RkYALi9VWHeZQWLRUqjxfW09.jpg",
            "popularity":13.543907,
            "vote_count":1310,
            "video":false,
            "vote_average":5.08
          },
          {
            "poster_path":"\/jDeDRLEa8JqB3xmKVy6q3bkmDt6.jpg",
            "adult":false,
            "overview":"Sausage Party, the first R-rated CG animated movie, is about one sausage leading a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
            "release_date":"2016-07-11",
            "genre_ids":[
              12,
              16,
              35,
              14
            ],
            "id":223702,
            "original_title":"Sausage Party",
            "original_language":"en",
            "title":"Sausage Party",
            "backdrop_path":"\/nBvyktlVHjLx5nZ9Oxaoqo5jwbf.jpg",
            "popularity":13.496508,
            "vote_count":453,
            "video":false,
            "vote_average":5.95
          },
          {
            "poster_path":"\/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
            "adult":false,
            "overview":"The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
            "release_date":"2015-06-23",
            "genre_ids":[
              878,
              28,
              53,
              12
            ],
            "id":87101,
            "original_title":"Terminator Genisys",
            "original_language":"en",
            "title":"Terminator Genisys",
            "backdrop_path":"\/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
            "popularity":13.21941,
            "vote_count":2418,
            "video":false,
            "vote_average":5.88
          },
          {
            "poster_path":"\/6w1VjTPTjTaA5oNvsAg0y4H6bou.jpg",
            "adult":false,
            "overview":"Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart.",
            "release_date":"2015-03-18",
            "genre_ids":[
              12,
              878,
              53
            ],
            "id":262500,
            "original_title":"Insurgent",
            "original_language":"en",
            "title":"Insurgent",
            "backdrop_path":"\/L5QRL1O3fGs2hH1LbtYyVl8Tce.jpg",
            "popularity":12.741042,
            "vote_count":2281,
            "video":false,
            "vote_average":6.35
          },
          {
            "poster_path":"\/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
            "adult":false,
            "overview":"The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
            "release_date":"2016-07-27",
            "genre_ids":[
              28,
              53
            ],
            "id":324668,
            "original_title":"Jason Bourne",
            "original_language":"en",
            "title":"Jason Bourne",
            "backdrop_path":"\/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
            "popularity":12.573617,
            "vote_count":1002,
            "video":false,
            "vote_average":5.52
          },
          {
            "poster_path":"\/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
            "adult":false,
            "overview":"In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
            "release_date":"2015-12-25",
            "genre_ids":[
              37,
              18,
              12,
              53
            ],
            "id":281957,
            "original_title":"The Revenant",
            "original_language":"en",
            "title":"The Revenant",
            "backdrop_path":"\/kiWvoV78Cc3fUwkOHKzyBgVdrDD.jpg",
            "popularity":12.497699,
            "vote_count":3569,
            "video":false,
            "vote_average":7.17
          },
          {
            "poster_path":"\/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
            "adult":false,
            "overview":"Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
            "release_date":"2016-02-09",
            "genre_ids":[
              28,
              12,
              35,
              10749
            ],
            "id":293660,
            "original_title":"Deadpool",
            "original_language":"en",
            "title":"Deadpool",
            "backdrop_path":"\/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
            "popularity":12.194041,
            "vote_count":5396,
            "video":false,
            "vote_average":7.2
          },
          {
            "poster_path":"\/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg",
            "adult":false,
            "overview":"The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
            "release_date":"2016-06-18",
            "genre_ids":[
              12,
              16,
              35,
              10751
            ],
            "id":328111,
            "original_title":"The Secret Life of Pets",
            "original_language":"en",
            "title":"The Secret Life of Pets",
            "backdrop_path":"\/lubzBMQLLmG88CLQ4F3TxZr2Q7N.jpg",
            "popularity":12.119559,
            "vote_count":972,
            "video":false,
            "vote_average":5.93
          }
        ],
        "total_results":19642,
        "total_pages":983
      },
      onPageChange: () => {},
      onSelectPreviousPage: () => {},
      onSelectNextPage: () => {},
      onViewMovieDetails: () => {}
    });
  }
});

test('"popular-movie-list" component and its contents render', function(assert) {
  assert.expect(5);

  this.render(hbs`{{popular-movies/popular-movie-list
                    popularMovies=popularMovies
                    onPageChange=(route-action onPageChange)
                    onSelectPreviousPage=(route-action onSelectPreviousPage)
                    onSelectNextPage=(route-action onSelectNextPage)
                    onViewMovieDetails=(route-action onViewMovieDetails)}}`);

  // Component renders
  assert.ok(this.$());
  // "Previous" page button exists
  assert.ok(this.$('.previous-page').length);
  // "Next" page button exists
  assert.ok(this.$('.next-page').length);
  // Sort dropdown select exists
  assert.ok(this.$('#sort-movies').length);
  // List of movies exists
  assert.ok(this.$('.movie-list').length);
});
