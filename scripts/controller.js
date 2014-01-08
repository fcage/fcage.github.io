//delcare app
var fcageApp = angular.module('fcageApp', []);

fcageApp.controller('navCtlr', function ($scope) {
	$scope.blocks = [
		{	
			'section': 'top',
			'block': 'block-1'
		},
		{	
			'section': 'bio',
			'block': 'block-8'
		},
		{	
			'section': 'multi-platform',
			'block': 'block-2'
		},
		{	
			'section': 'live, updating',
			'block': 'block-3'
		},
		{	
			'section': 'personalization',
			'block': 'block-4'
		},
		{	
			'section': 'single-serve sites',
			'block': 'block-5'
		},
		{	
			'section': 'site design',
			'block': 'block-6'
		},
		{	
			'section': 'best of the rest',
			'block': 'block-7'
		}
  ];
});

fcageApp.controller('multiplatformCtlr', function ($scope) {
	$scope.projects = [
		{	'name': 'NSA Decoded',
			'org': 'guardian',
			'link': 'http://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded',
			'img': 'images/tout-nsa-decoded.jpg'
		},
		{	'name': 'Alaska on edge',
			'org': 'guardian',
			'link': 'http://www.theguardian.com/environment/interactive/2013/may/13/newtok-alaska-climate-change-refugees',
			'img': 'images/tout-alaska.jpg'
		},
		{	'name': 'Chasing Crusoe',
			'org': 'unc',
			'link': 'http://www.rcrusoe.org/',
			'img': 'images/tout-crusoe.jpg'
		},
		{	'name': 'Atacama Stories',
			'org': 'unc',
			'link': 'http://atacamastories.jomc.unc.edu/',
			'img': 'images/tout-atacama.jpg'
		}
  ];
});

fcageApp.controller('liveCtlr', function ($scope) {
	$scope.projects = [
		{	'name': '2012 momentum tracker',
			'org': 'guardian',
			'link': 'http://www.theguardian.com/world/interactive/2012/feb/28/republican-delegate-count-2012-nominees',
			'img': 'images/tout-momentum-2012.jpg'
		},
		{	'name': '2012 GOP promary results',
			'link': 'http://www.theguardian.com/world/interactive/2012/jan/03/gop-nomination-2012-primary-results',
			'org': 'guardian',
			'img': 'images/tout-primary-2012.jpg'
		},
		{	'name': '2012 county-level results',
			'link': 'http://www.theguardian.com/world/us-elections-2012/results/president',
			'org': 'guardian',
			'img': 'images/tout-election-2012.jpg'
		},
		{	'name': 'London 2012: Atheltes who became popular',
			'link': 'http://www.theguardian.com/sport/interactive/2012/jul/31/london-2012-most-popular-athletes',
			'org': 'guardian',
			'img': 'images/tout-london-2012.jpg'
		},
		{	'name': '2010 general election returns',
			'link': 'http://www.npr.org/2010/11/03/130514037/election-2010-house-senate-and-governor-results',
			'org': 'ap',
			'img': 'images/tout-2010-election.jpg'
		},
  ];
});

fcageApp.controller('personalizationCtlr', function ($scope) {
	$scope.projects = [
		{	'name': 'Gay rights, state by state',
			'org': 'guardian',
			'link': 'http://www.theguardian.com/world/interactive/2012/may/08/gay-rights-united-states',
			'img': 'images/tout-gay-rights.jpg'
		},
		{	'name': 'Gun laws, state by state',
			'link': 'http://www.theguardian.com/world/interactive/2013/jan/15/gun-laws-united-states',
			'org': 'guardian',
			'img': 'images/tout-gun-laws.jpg'
		},
		{	'name': '2012: Will your vote make the difference?',
			'link': 'http://www.theguardian.com/world/interactive/2012/oct/election-2012-vote-makes-difference',
			'org': 'guardian',
			'img': 'images/tout-vote-difference.jpg'
		},
		{	'name': 'A guide to your metadata',
			'link': 'http://www.theguardian.com/technology/interactive/2013/jun/12/what-is-metadata-nsa-surveillance',
			'org': 'guardian',
			'img': 'images/tout-metadata.jpg'
		}
  ];
});

fcageApp.controller('singleCtlr', function ($scope) {
	$scope.projects = [
		{	'name': 'Was an Olympic record set today?',
			'link': 'http://www.wasanolympicrecordsettoday.com/',
			'org': 'guardian',
			'img': 'images/tout-was-a-record-set.jpg'
		},
		{	'name': 'Is there white smoke?',
			'link': 'http://www.istherewhitesmoke.com',
			'org': 'guardian',
			'img': 'images/tout-white-smoke.jpg'
		}
  ];
});

fcageApp.controller('siteDesignCtlr', function ($scope) {
	$scope.projects = [
		{	'name': 'TIME.com video section',
			'link': 'time-video-landing.html',
			'org': 'time',
			'img': 'images/tout-time-logo.jpg'
		},
		{	'name': 'TIME.com article page',
			'link': 'time-article.html',
			'org': 'time',
			'img': 'images/tout-time-logo.jpg'
		},
		{	'name': 'TIME cover store',
			'link': 'http://www.timecoverstore.com/',
			'org': 'time',
			'img': 'images/tout-time-cover-store.jpg'
		}
  ];
});


fcageApp.controller('bestofCtlr', function ($scope) {
	$scope.projects = [
		{	'name': 'Guns and violence in top video games',
			'link': 'http://www.theguardian.com/world/interactive/2013/apr/30/violence-guns-best-selling-video-games',
			'org': 'guardian',
			'img': 'images/tout-video-games.jpg'
		},
		{	'name': 'SCOTUS decision explained: Arizona immigration law',
			'link': 'http://www.theguardian.com/world/interactive/2012/apr/26/arizona-immigration-law-supreme-court-transcripts',
			'org': 'guardian',
			'img': 'images/tout-scotus-arizona.jpg'
		},
		{	'name': 'SCOTUS decision explained: Affordable health care act',
			'link': 'http://www.theguardian.com/world/interactive/2012/mar/29/supreme-court-arguments-obama-health-reforms',
			'org': 'guardian',
			'img': 'images/tout-scotus-aca.jpg'
		},
		{	'name': 'How Osama bin Laden lived and died',
			'link': 'http://hosted.ap.org/specials/interactives/_international/osama-bin-laden/',
			'org': 'ap',
			'img': 'images/tout-osama.jpg'
		},
		{	'name': 'Japan\'s nuclear crisis',
			'link': 'http://hosted.ap.org/specials/interactives/_international/japan-earthquake-2011/',
			'org': 'ap',
			'img': 'images/tout-japan-tsunami.jpg'
		},
		{	'name': 'War in Iraq: a country moves on',
			'link': 'http://hosted.ap.org/specials/interactives/_international/iraq_war/',
			'org': 'ap',
			'img': 'images/tout-iraq-war.jpg'
		},
		{	'name': 'Home of Africa\'s first World Cup',
			'link': 'http://hosted.ap.org/specials/interactives/_sports/worldcup_10/index.html',
			'org': 'ap',
			'img': 'images/tout-south-africa.jpg'
		},
		{	'name': 'Abuse in the Catholic Church',
			'link': 'http://hosted.ap.org/specials/interactives/_international/church_abuse/index.html',
			'org': 'ap',
			'img': 'images/tout-church-abuse.jpg'
		},
		{	'name': 'Tracking the Gulf oil spill and cleanup efforts',
			'link': 'http://hosted.ap.org/specials/interactives/_national/oil_spill/',
			'org': 'ap',
			'img': 'images/tout-gulf-oil-spill.jpg'
		},
		{	'name': 'Six degrees of Barack Obama',
			'link': 'http://content.time.com/time/interactive/0,31813,1874522,00.html',
			'org': 'time',
			'img': 'images/tout-six-degrees-obama.jpg'
		},
		{	'name': '2008: How you voted, and how you\'re likely to vote',
			'link': 'http://content.time.com/time/interactive/0,31813,1848639,00.html',
			'org': 'time',
			'img': 'images/tout-likely-to-vote.jpg'
		},
		{	'name': 'TIME\s person of the year archive',
			'link': 'http://content.time.com/time/interactive/0,31813,1681791,00.html',
			'org': 'time',
			'img': 'images/tout-time-covers.jpg'
		},
		{	'name': 'Paris Hilton talks about herself',
			'link': 'http://content.time.com/time/interactive/0,31813,1638346,00.html',
			'org': 'time',
			'img': 'images/tout-paris-hilton.jpg'
		},
		{	'name': 'How New Orleans has changed',
			'link': 'http://content.time.com/time/interactive/0,31813,1649356,00.html',
			'org': 'time',
			'img': 'images/tout-new-orleans.jpg'
		},
		{	'name': 'State testing in reading and math',
			'link': 'http://content.time.com/time/interactive/0,31813,1625123,00.html',
			'org': 'time',
			'img': 'images/tout-state-testing.jpg'
		}
  ];
});