(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,465,465],[0,467,465,465],[467,0,465,465],[467,467,465,465]]},
		{name:"index_atlas_2", frames: [[0,0,465,465],[0,467,465,465],[467,0,465,465],[467,467,465,465]]},
		{name:"index_atlas_3", frames: [[467,0,415,401],[0,0,465,465],[0,467,465,465],[467,403,400,400]]},
		{name:"index_atlas_4", frames: [[0,0,400,400],[0,402,400,400],[402,0,400,400],[402,402,400,400]]},
		{name:"index_atlas_5", frames: [[0,0,400,400],[0,402,400,400],[402,0,400,400],[402,402,400,400]]},
		{name:"index_atlas_6", frames: [[0,402,392,392],[394,402,392,392],[402,0,392,392],[0,0,400,400]]},
		{name:"index_atlas_7", frames: [[0,0,392,392],[0,394,392,392],[394,0,392,392],[394,394,392,392]]},
		{name:"index_atlas_8", frames: [[0,0,392,392],[0,394,392,392],[394,0,392,392],[394,394,314,314],[571,710,314,314],[710,394,314,314],[0,788,569,225]]},
		{name:"index_atlas_9", frames: [[0,0,314,314],[0,316,314,314],[0,632,314,314],[316,0,314,314],[632,0,314,314],[316,316,314,314],[316,632,314,314],[632,316,300,300],[632,618,300,300]]},
		{name:"index_atlas_10", frames: [[0,0,300,300],[0,302,300,300],[0,604,300,300],[302,0,300,300],[604,0,300,300],[302,302,300,300],[302,604,300,300],[604,302,300,300],[604,604,300,300]]},
		{name:"index_atlas_11", frames: [[0,0,300,300],[0,302,300,300],[0,604,300,300],[302,0,300,300],[604,0,300,300],[302,302,300,300],[302,604,300,300],[604,302,300,300],[604,604,300,300]]},
		{name:"index_atlas_12", frames: [[729,0,216,186],[486,872,253,106],[729,188,262,152],[486,718,262,152],[730,342,262,152],[0,0,241,241],[0,243,241,241],[0,486,241,241],[0,729,241,241],[243,0,241,241],[243,243,241,241],[243,486,241,241],[243,729,241,241],[486,0,241,241],[486,243,241,241],[730,496,266,136],[486,486,242,230],[750,634,193,184],[750,820,193,184]]},
		{name:"index_atlas_13", frames: [[0,448,54,38],[827,400,63,43],[56,448,54,38],[892,400,63,43],[458,449,54,38],[957,400,63,43],[285,354,61,61],[0,385,61,61],[63,385,61,61],[259,78,212,113],[239,99,17,28],[239,129,17,28],[197,267,17,28],[216,267,17,28],[1008,60,14,23],[1008,85,12,19],[1008,106,11,17],[987,60,7,11],[1016,0,5,6],[116,159,75,32],[0,99,237,58],[644,226,236,58],[565,404,57,47],[624,404,57,47],[882,222,87,87],[841,311,87,87],[930,311,87,87],[176,430,43,38],[221,418,63,42],[618,453,43,38],[683,429,63,42],[336,456,43,38],[748,429,63,42],[286,417,48,48],[126,430,48,48],[813,445,48,48],[863,445,48,48],[913,445,48,48],[963,445,48,48],[322,193,47,24],[371,193,43,21],[0,267,195,65],[644,286,195,65],[0,0,257,97],[473,78,320,72],[473,152,320,72],[0,193,320,72],[322,219,139,5],[176,470,139,5],[663,473,139,5],[176,477,139,5],[663,480,139,5],[458,397,58,50],[259,0,324,76],[585,0,324,76],[911,0,74,74],[692,353,74,74],[145,354,74,74],[993,176,27,27],[0,334,143,49],[402,346,143,49],[547,353,143,49],[221,354,62,62],[348,354,51,33],[565,453,51,33],[1016,8,5,1],[197,300,203,52],[322,226,320,72],[795,176,196,44],[402,300,196,44],[600,300,39,39],[381,456,39,39],[795,78,211,96],[0,159,114,24],[416,193,28,19],[518,404,45,60],[987,0,27,58],[971,222,53,57],[348,397,53,57],[403,397,53,57],[768,353,57,72],[193,159,51,31]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_145 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,718);


(lib.cg = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.popBG = function() {
	this.initialize(img.popBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.popidle1 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.popidle1p = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.popidle_1 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.popidle_12 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.popidle_2 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.popidle_22 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.popidle_3 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.popidle_32 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.popidle_4 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.popidle_42 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.popidle_5 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.popidle_52 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.popidle_6 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.popidle_62 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.popidle_7 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.popidle_72 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.popidle_8 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.popidle_82 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.popidle_9 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.popidle_92 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.PopItBlackBig1 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PopItBlueBig1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PopItGreenBig1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PopItLBlueBig1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PopItOrangeBig1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PopItPinkBig1 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PopItPurpleBig1 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PopItRedBig11 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PopItWhiteBig1 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PopItYellowBig1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.star1 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.star2 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.star3 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yesB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_141();
	this.instance.setTransform(1.25,0,0.8381,0.8381);

	this.instance_1 = new lib.CachedBmp_140();
	this.instance_1.setTransform(-1.95,-0.85,0.8381,0.8381);

	this.instance_2 = new lib.CachedBmp_143();
	this.instance_2.setTransform(1.25,0,0.8381,0.8381);

	this.instance_3 = new lib.CachedBmp_142();
	this.instance_3.setTransform(-1.95,-0.85,0.8381,0.8381);

	this.instance_4 = new lib.CachedBmp_145();
	this.instance_4.setTransform(1.25,0,0.8381,0.8381);

	this.instance_5 = new lib.CachedBmp_144();
	this.instance_5.setTransform(-1.95,-0.85,0.8381,0.8381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-0.8,52.8,36);


(lib.uTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("升级", "normal 700 30px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 187;
	this.text.parent = this;
	this.text.setTransform(95.25,4.5);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_139();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,196,46.3);


(lib.upBt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.CachedBmp_135();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_136();
	this.instance_1.setTransform(-2,-2);

	this.instance_2 = new lib.CachedBmp_137();
	this.instance_2.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,61,61);


(lib.uBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_134();
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uBG, new cjs.Rectangle(-2,-2,415,401), null);


(lib.tutorial = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("弹出一些气泡，直到获得 20 个气泡和 1 个宝石", "normal 700 20px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 241;
	this.text.parent = this;
	this.text.setTransform(125.95,12.4);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.instance = new lib.CachedBmp_130();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_131();
	this.instance_1.setTransform(375.25,72.2);

	this.instance_2 = new lib.CachedBmp_133();
	this.instance_2.setTransform(-224.7,185.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text,p:{x:125.95,y:12.4,text:"戳破出一些气泡，\n直到获得 20 个气泡和\n 1 个宝石",lineWidth:241,font:"normal 700 20px 'tk-adelle-mono'",lineHeight:27.15}}]},1).to({state:[{t:this.instance_1},{t:this.text,p:{x:481.6,y:76.2,text:"现在让我们购买一些升级。\n 提高你的制作力量",lineWidth:205,font:"normal 700 20px 'tk-adelle-mono'",lineHeight:27.15}}]},1).to({state:[{t:this.instance_2,p:{x:-224.7,y:185.45}},{t:this.text,p:{x:-117.95,y:226.8,text:"现在，让我们制作一个新光标。\n它会增加你的伤害",lineWidth:196,font:"normal 700 20px 'tk-adelle-mono'",lineHeight:27.15}}]},1).to({state:[{t:this.instance_2,p:{x:585.8,y:-2}},{t:this.text,p:{x:690.75,y:10.05,text:"赚到足够的钱，\n让我们买一个鼠标（在建筑里）。 \n它会给这个游戏一些自动化",lineWidth:196,font:"normal 700 18px 'tk-adelle-mono'",lineHeight:24.65}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.7,-2,1026.5,373.5);


(lib.swordHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_121();

	this.instance_1 = new lib.CachedBmp_122();
	this.instance_1.setTransform(-2.15,0);

	this.instance_2 = new lib.CachedBmp_123();
	this.instance_2.setTransform(-4.65,0);

	this.instance_3 = new lib.CachedBmp_124();
	this.instance_3.setTransform(-7.8,2.85);

	this.instance_4 = new lib.CachedBmp_125();
	this.instance_4.setTransform(-10.75,2.85);

	this.instance_5 = new lib.CachedBmp_126();
	this.instance_5.setTransform(-13.85,2.85);

	this.instance_6 = new lib.CachedBmp_127();
	this.instance_6.setTransform(-13.85,2.85);

	this.instance_7 = new lib.CachedBmp_128();
	this.instance_7.setTransform(-13.85,2.85);

	this.instance_8 = new lib.CachedBmp_129();
	this.instance_8.setTransform(-13.85,2.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,20.200000000000003,30.9);


(lib.sword = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_120();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sword, new cjs.Rectangle(0,0,75,32), null);


(lib.speedUP_b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_118();
	this.instance.setTransform(-28.75,-28.75);

	this.instance_1 = new lib.CachedBmp_119();
	this.instance_1.setTransform(-28.75,-28.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-28.7,237,58);


(lib.soundSet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_116();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_117();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,57,47);


(lib.prestigeW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.gain3 = new cjs.Text("点击 5 次以声望", "normal 700 14px 'tk-adelle-mono'", "#FFFFFF");
	this.gain3.name = "gain3";
	this.gain3.textAlign = "center";
	this.gain3.lineHeight = 20;
	this.gain3.lineWidth = 247;
	this.gain3.parent = this;
	this.gain3.setTransform(129.05,125.1);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gain3);
	}

	this.instance = new lib.popidle_1();
	this.instance.setTransform(4,98,0.0722,0.0722);

	this.gain2 = new cjs.Text("增益: x10,000 -> x10,000", "normal 700 14px 'tk-adelle-mono'", "#FFFFFF");
	this.gain2.name = "gain2";
	this.gain2.lineHeight = 20;
	this.gain2.lineWidth = 221;
	this.gain2.parent = this;
	this.gain2.setTransform(27.7,103.5);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gain2);
	}

	this.gain1 = new cjs.Text("乘数增益: x10,000 -> x10,000", "normal 700 14px 'tk-adelle-mono'", "#FFFFFF");
	this.gain1.name = "gain1";
	this.gain1.lineHeight = 20;
	this.gain1.lineWidth = 252;
	this.gain1.parent = this;
	this.gain1.setTransform(6,81.9);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gain1);
	}

	this.text = new cjs.Text("重置所有以前的进度，但是：", "normal 700 16px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(127.75,31.3);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.text_1 = new cjs.Text("声望", "normal 700 16px 'tk-adelle-mono'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 251;
	this.text_1.parent = this;
	this.text_1.setTransform(127.4,7.15);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text_1);
	}

	this.instance_1 = new lib.CachedBmp_113();
	this.instance_1.setTransform(-2,-2);

	this.instance_2 = new lib.CachedBmp_114();
	this.instance_2.setTransform(-2,-2);

	this.instance_3 = new lib.CachedBmp_115();
	this.instance_3.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.text},{t:this.gain1},{t:this.gain2},{t:this.instance},{t:this.gain3}]}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.text},{t:this.gain1},{t:this.gain2},{t:this.instance},{t:this.gain3}]},1).to({state:[{t:this.instance_3},{t:this.text_1},{t:this.text},{t:this.gain1},{t:this.gain2},{t:this.instance},{t:this.gain3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,262,152);


(lib.popOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.CachedBmp_110();

	this.instance_1 = new lib.CachedBmp_111();

	this.instance_2 = new lib.CachedBmp_112();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.noB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(6.2,0,0.8381,0.8381);

	this.instance_1 = new lib.CachedBmp_64();
	this.instance_1.setTransform(-1.95,-1.25,0.8381,0.8381);

	this.instance_2 = new lib.CachedBmp_67();
	this.instance_2.setTransform(6.2,0,0.8381,0.8381);

	this.instance_3 = new lib.CachedBmp_66();
	this.instance_3.setTransform(-1.95,-1.25,0.8381,0.8381);

	this.instance_4 = new lib.CachedBmp_69();
	this.instance_4.setTransform(6.2,0,0.8381,0.8381);

	this.instance_5 = new lib.CachedBmp_68();
	this.instance_5.setTransform(-1.95,-1.25,0.8381,0.8381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.2,52.8,35.2);


(lib.levPlus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.CachedBmp_61();
	this.instance_1.setTransform(-1,-1);

	this.instance_2 = new lib.CachedBmp_62();
	this.instance_2.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48,48);


(lib.levMinus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.CachedBmp_58();
	this.instance_1.setTransform(-1,-1);

	this.instance_2 = new lib.CachedBmp_59();
	this.instance_2.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48,48);


(lib.hpNow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(-0.5,-0.5,0.6047,0.6047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hpNow, new cjs.Rectangle(-0.5,-0.5,28.4,14.5), null);


(lib.hpIs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgXhdIAuAAIAAC7IguAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AgYhdIAxAAIAAC7IgxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AgZhdIAzAAIAAC7IgzAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgahdIA1AAIAAC7Ig1AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AgchdIA5AAIAAC7Ig5AAg");
	var mask_graphics_5 = new cjs.Graphics().p("AgdhdIA7AAIAAC7Ig7AAg");
	var mask_graphics_6 = new cjs.Graphics().p("AgehdIA9AAIAAC7Ig9AAg");
	var mask_graphics_7 = new cjs.Graphics().p("AgghdIBBAAIAAC7IhBAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AghhdIBDAAIAAC7IhDAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AgihdIBFAAIAAC7IhFAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AgkhdIBJAAIAAC7IhJAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AglhdIBLAAIAAC7IhLAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AgmhdIBNAAIAAC7IhNAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AgohdIBRAAIAAC7IhRAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AgphdIBTAAIAAC7IhTAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AgqhdIBVAAIAAC7IhVAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AgshdIBZAAIAAC7IhZAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AgthdIBbAAIAAC7IhbAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AguhdIBdAAIAAC7IhdAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AgvhdIBfAAIAAC7IhfAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AgxhdIBjAAIAAC7IhjAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AgyhdIBlAAIAAC7IhlAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AgzhdIBnAAIAAC7IhnAAg");
	var mask_graphics_23 = new cjs.Graphics().p("Ag1hdIBrAAIAAC7IhrAAg");
	var mask_graphics_24 = new cjs.Graphics().p("Ag2hdIBtAAIAAC7IhtAAg");
	var mask_graphics_25 = new cjs.Graphics().p("Ag3hdIBvAAIAAC7IhvAAg");
	var mask_graphics_26 = new cjs.Graphics().p("Ag5hdIBzAAIAAC7IhzAAg");
	var mask_graphics_27 = new cjs.Graphics().p("Ag6hdIB1AAIAAC7Ih1AAg");
	var mask_graphics_28 = new cjs.Graphics().p("Ag7hdIB3AAIAAC7Ih3AAg");
	var mask_graphics_29 = new cjs.Graphics().p("Ag9hdIB7AAIAAC7Ih7AAg");
	var mask_graphics_30 = new cjs.Graphics().p("Ag+hdIB9AAIAAC7Ih9AAg");
	var mask_graphics_31 = new cjs.Graphics().p("Ag/hdIB/AAIAAC7Ih/AAg");
	var mask_graphics_32 = new cjs.Graphics().p("AhBhdICDAAIAAC7IiDAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AhChdICFAAIAAC7IiFAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AhDhdICHAAIAAC7IiHAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AhFhdICLAAIAAC7IiLAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AhGhdICNAAIAAC7IiNAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AhHhdICPAAIAAC7IiPAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AhJhdICTAAIAAC7IiTAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AhKhdICVAAIAAC7IiVAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AhLhdICXAAIAAC7IiXAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AhNhdICbAAIAAC7IibAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AhOhdICdAAIAAC7IidAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AhPhdICfAAIAAC7IifAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AhRhdICjAAIAAC7IijAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AhShdIClAAIAAC7IilAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AhThdICnAAIAAC7IinAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AhUhdICpAAIAAC7IipAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AhWhdICtAAIAAC7IitAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AhXhdICvAAIAAC7IivAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AhYhdICxAAIAAC7IixAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AhahdIC1AAIAAC7Ii1AAg");
	var mask_graphics_52 = new cjs.Graphics().p("AhbhdIC3AAIAAC7Ii3AAg");
	var mask_graphics_53 = new cjs.Graphics().p("AhchdIC5AAIAAC7Ii5AAg");
	var mask_graphics_54 = new cjs.Graphics().p("AhehdIC9AAIAAC7Ii9AAg");
	var mask_graphics_55 = new cjs.Graphics().p("AhfhdIC/AAIAAC7Ii/AAg");
	var mask_graphics_56 = new cjs.Graphics().p("AhghdIDBAAIAAC7IjBAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AhihdIDFAAIAAC7IjFAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AhjhdIDHAAIAAC7IjHAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AhkhdIDJAAIAAC7IjJAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AhmhdIDNAAIAAC7IjNAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AhnhdIDPAAIAAC7IjPAAg");
	var mask_graphics_62 = new cjs.Graphics().p("AhohdIDRAAIAAC7IjRAAg");
	var mask_graphics_63 = new cjs.Graphics().p("AhqhdIDVAAIAAC7IjVAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AhrhdIDXAAIAAC7IjXAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AhshdIDZAAIAAC7IjZAAg");
	var mask_graphics_66 = new cjs.Graphics().p("AhuhdIDdAAIAAC7IjdAAg");
	var mask_graphics_67 = new cjs.Graphics().p("AhvhdIDfAAIAAC7IjfAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AhwhdIDhAAIAAC7IjhAAg");
	var mask_graphics_69 = new cjs.Graphics().p("AhyhdIDlAAIAAC7IjlAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AhzhdIDnAAIAAC7IjnAAg");
	var mask_graphics_71 = new cjs.Graphics().p("Ah0hdIDpAAIAAC7IjpAAg");
	var mask_graphics_72 = new cjs.Graphics().p("Ah2hdIDtAAIAAC7IjtAAg");
	var mask_graphics_73 = new cjs.Graphics().p("Ah3hdIDvAAIAAC7IjvAAg");
	var mask_graphics_74 = new cjs.Graphics().p("Ah4hdIDxAAIAAC7IjxAAg");
	var mask_graphics_75 = new cjs.Graphics().p("Ah5hdIDzAAIAAC7IjzAAg");
	var mask_graphics_76 = new cjs.Graphics().p("Ah7hdID3AAIAAC7Ij3AAg");
	var mask_graphics_77 = new cjs.Graphics().p("Ah8hdID5AAIAAC7Ij5AAg");
	var mask_graphics_78 = new cjs.Graphics().p("Ah9hdID7AAIAAC7Ij7AAg");
	var mask_graphics_79 = new cjs.Graphics().p("Ah/hdID/AAIAAC7Ij/AAg");
	var mask_graphics_80 = new cjs.Graphics().p("AiAhdIEBAAIAAC7IkBAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AiBhdIEDAAIAAC7IkDAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AiDhdIEHAAIAAC7IkHAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AiEhdIEJAAIAAC7IkJAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AiFhdIELAAIAAC7IkLAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AiHhdIEPAAIAAC7IkPAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AiIhdIERAAIAAC7IkRAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AiJhdIETAAIAAC7IkTAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AiLhdIEXAAIAAC7IkXAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AiMhdIEZAAIAAC7IkZAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AiNhdIEbAAIAAC7IkbAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AiPhdIEfAAIAAC7IkfAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AiQhdIEhAAIAAC7IkhAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AiRhdIEjAAIAAC7IkjAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AiThdIEnAAIAAC7IknAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AiUhdIEpAAIAAC7IkpAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AiVhdIErAAIAAC7IkrAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AiXhdIEvAAIAAC7IkvAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AiYhdIExAAIAAC7IkxAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AiZhdIEzAAIAAC7IkzAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-2.3712,y:6.7727}).wait(1).to({graphics:mask_graphics_1,x:-2.2715,y:6.7727}).wait(1).to({graphics:mask_graphics_2,x:-2.1385,y:6.7727}).wait(1).to({graphics:mask_graphics_3,x:-2.0054,y:6.7727}).wait(1).to({graphics:mask_graphics_4,x:-1.8723,y:6.7727}).wait(1).to({graphics:mask_graphics_5,x:-1.7392,y:6.7727}).wait(1).to({graphics:mask_graphics_6,x:-1.6062,y:6.7727}).wait(1).to({graphics:mask_graphics_7,x:-1.4731,y:6.7727}).wait(1).to({graphics:mask_graphics_8,x:-1.34,y:6.7727}).wait(1).to({graphics:mask_graphics_9,x:-1.207,y:6.7727}).wait(1).to({graphics:mask_graphics_10,x:-1.0739,y:6.7727}).wait(1).to({graphics:mask_graphics_11,x:-0.9408,y:6.7727}).wait(1).to({graphics:mask_graphics_12,x:-0.8077,y:6.7727}).wait(1).to({graphics:mask_graphics_13,x:-0.6747,y:6.7727}).wait(1).to({graphics:mask_graphics_14,x:-0.5416,y:6.7727}).wait(1).to({graphics:mask_graphics_15,x:-0.4085,y:6.7727}).wait(1).to({graphics:mask_graphics_16,x:-0.2754,y:6.7727}).wait(1).to({graphics:mask_graphics_17,x:-0.1424,y:6.7727}).wait(1).to({graphics:mask_graphics_18,x:-0.0093,y:6.7727}).wait(1).to({graphics:mask_graphics_19,x:0.1238,y:6.7727}).wait(1).to({graphics:mask_graphics_20,x:0.2569,y:6.7727}).wait(1).to({graphics:mask_graphics_21,x:0.3899,y:6.7727}).wait(1).to({graphics:mask_graphics_22,x:0.523,y:6.7727}).wait(1).to({graphics:mask_graphics_23,x:0.6561,y:6.7727}).wait(1).to({graphics:mask_graphics_24,x:0.7891,y:6.7727}).wait(1).to({graphics:mask_graphics_25,x:0.9222,y:6.7727}).wait(1).to({graphics:mask_graphics_26,x:1.0553,y:6.7727}).wait(1).to({graphics:mask_graphics_27,x:1.1884,y:6.7727}).wait(1).to({graphics:mask_graphics_28,x:1.3214,y:6.7727}).wait(1).to({graphics:mask_graphics_29,x:1.4545,y:6.7727}).wait(1).to({graphics:mask_graphics_30,x:1.5876,y:6.7727}).wait(1).to({graphics:mask_graphics_31,x:1.7207,y:6.7727}).wait(1).to({graphics:mask_graphics_32,x:1.8537,y:6.7727}).wait(1).to({graphics:mask_graphics_33,x:1.9868,y:6.7727}).wait(1).to({graphics:mask_graphics_34,x:2.1199,y:6.7727}).wait(1).to({graphics:mask_graphics_35,x:2.2529,y:6.7727}).wait(1).to({graphics:mask_graphics_36,x:2.386,y:6.7727}).wait(1).to({graphics:mask_graphics_37,x:2.5191,y:6.7727}).wait(1).to({graphics:mask_graphics_38,x:2.6522,y:6.7727}).wait(1).to({graphics:mask_graphics_39,x:2.7852,y:6.7727}).wait(1).to({graphics:mask_graphics_40,x:2.9183,y:6.7727}).wait(1).to({graphics:mask_graphics_41,x:3.0514,y:6.7727}).wait(1).to({graphics:mask_graphics_42,x:3.1845,y:6.7727}).wait(1).to({graphics:mask_graphics_43,x:3.3175,y:6.7727}).wait(1).to({graphics:mask_graphics_44,x:3.4506,y:6.7727}).wait(1).to({graphics:mask_graphics_45,x:3.5837,y:6.7727}).wait(1).to({graphics:mask_graphics_46,x:3.7167,y:6.7727}).wait(1).to({graphics:mask_graphics_47,x:3.8498,y:6.7727}).wait(1).to({graphics:mask_graphics_48,x:3.9829,y:6.7727}).wait(1).to({graphics:mask_graphics_49,x:4.116,y:6.7727}).wait(1).to({graphics:mask_graphics_50,x:4.249,y:6.7727}).wait(1).to({graphics:mask_graphics_51,x:4.3821,y:6.7727}).wait(1).to({graphics:mask_graphics_52,x:4.5152,y:6.7727}).wait(1).to({graphics:mask_graphics_53,x:4.6483,y:6.7727}).wait(1).to({graphics:mask_graphics_54,x:4.7813,y:6.7727}).wait(1).to({graphics:mask_graphics_55,x:4.9144,y:6.7727}).wait(1).to({graphics:mask_graphics_56,x:5.0475,y:6.7727}).wait(1).to({graphics:mask_graphics_57,x:5.1805,y:6.7727}).wait(1).to({graphics:mask_graphics_58,x:5.3136,y:6.7727}).wait(1).to({graphics:mask_graphics_59,x:5.4467,y:6.7727}).wait(1).to({graphics:mask_graphics_60,x:5.5798,y:6.7727}).wait(1).to({graphics:mask_graphics_61,x:5.7128,y:6.7727}).wait(1).to({graphics:mask_graphics_62,x:5.8459,y:6.7727}).wait(1).to({graphics:mask_graphics_63,x:5.979,y:6.7727}).wait(1).to({graphics:mask_graphics_64,x:6.1121,y:6.7727}).wait(1).to({graphics:mask_graphics_65,x:6.2451,y:6.7727}).wait(1).to({graphics:mask_graphics_66,x:6.3782,y:6.7727}).wait(1).to({graphics:mask_graphics_67,x:6.5113,y:6.7727}).wait(1).to({graphics:mask_graphics_68,x:6.6443,y:6.7727}).wait(1).to({graphics:mask_graphics_69,x:6.7774,y:6.7727}).wait(1).to({graphics:mask_graphics_70,x:6.9105,y:6.7727}).wait(1).to({graphics:mask_graphics_71,x:7.0436,y:6.7727}).wait(1).to({graphics:mask_graphics_72,x:7.1766,y:6.7727}).wait(1).to({graphics:mask_graphics_73,x:7.3097,y:6.7727}).wait(1).to({graphics:mask_graphics_74,x:7.4428,y:6.7727}).wait(1).to({graphics:mask_graphics_75,x:7.5759,y:6.7727}).wait(1).to({graphics:mask_graphics_76,x:7.7089,y:6.7727}).wait(1).to({graphics:mask_graphics_77,x:7.842,y:6.7727}).wait(1).to({graphics:mask_graphics_78,x:7.9751,y:6.7727}).wait(1).to({graphics:mask_graphics_79,x:8.1082,y:6.7727}).wait(1).to({graphics:mask_graphics_80,x:8.2412,y:6.7727}).wait(1).to({graphics:mask_graphics_81,x:8.3743,y:6.7727}).wait(1).to({graphics:mask_graphics_82,x:8.5074,y:6.7727}).wait(1).to({graphics:mask_graphics_83,x:8.6404,y:6.7727}).wait(1).to({graphics:mask_graphics_84,x:8.7735,y:6.7727}).wait(1).to({graphics:mask_graphics_85,x:8.9066,y:6.7727}).wait(1).to({graphics:mask_graphics_86,x:9.0397,y:6.7727}).wait(1).to({graphics:mask_graphics_87,x:9.1727,y:6.7727}).wait(1).to({graphics:mask_graphics_88,x:9.3058,y:6.7727}).wait(1).to({graphics:mask_graphics_89,x:9.4389,y:6.7727}).wait(1).to({graphics:mask_graphics_90,x:9.572,y:6.7727}).wait(1).to({graphics:mask_graphics_91,x:9.705,y:6.7727}).wait(1).to({graphics:mask_graphics_92,x:9.8381,y:6.7727}).wait(1).to({graphics:mask_graphics_93,x:9.9712,y:6.7727}).wait(1).to({graphics:mask_graphics_94,x:10.1042,y:6.7727}).wait(1).to({graphics:mask_graphics_95,x:10.2373,y:6.7727}).wait(1).to({graphics:mask_graphics_96,x:10.3704,y:6.7727}).wait(1).to({graphics:mask_graphics_97,x:10.5035,y:6.7727}).wait(1).to({graphics:mask_graphics_98,x:10.6365,y:6.7727}).wait(1).to({graphics:mask_graphics_99,x:10.7696,y:6.7727}).wait(1));

	// Слой_1
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(0,0,0.6047,0.6047);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,12.7);


(lib.hovering2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_53();
	this.instance.setTransform(0,0,0.7572,0.7572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hovering2, new cjs.Rectangle(0,0,147.7,49.2), null);


(lib.hovering = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(0,0,0.7572,0.7572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hovering, new cjs.Rectangle(0,0,147.7,49.2), null);


(lib.hoverHelp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.txt = new cjs.Text("制作更好的光标以造成更多伤害并获得更多金钱", "normal 700 14px 'tk-adelle-mono'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 245;
	this.txt.parent = this;
	this.txt.setTransform(124.6,6.05);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.txt);
	}

	this.instance = new lib.CachedBmp_51();
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoverHelp, new cjs.Rectangle(-2,-2,257,97), null);


(lib.hover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.CachedBmp_48();

	this.instance_1 = new lib.CachedBmp_49();

	this.instance_2 = new lib.CachedBmp_50();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,72);


(lib.gem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gem, new cjs.Rectangle(0,0,58,50), null);


(lib.frameT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,324,76);


(lib.discordCH = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-35.4,-36.05);

	this.instance_1 = new lib.CachedBmp_38();
	this.instance_1.setTransform(-35.5,-35.95);

	this.instance_2 = new lib.CachedBmp_39();
	this.instance_2.setTransform(-35.4,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-36,74.1,74.1);


(lib.currency = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_36();

	this.instance_1 = new lib.popidle_1();
	this.instance_1.setTransform(-3,-2,0.1124,0.1124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-2,33.7,33.7);


(lib.craftBt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (!this._listeners || !hasListener(this._listeners.mouseover, "mOverPop")) {
			this.addEventListener("mouseover", mOverPop.bind(this));
		}
		function mOverPop() {
			this.gotoAndStop(1);
		}
		
		if (!this._listeners || !hasListener(this._listeners.mouseout, "mOutPop")) {
			this.addEventListener("mouseout", mOutPop.bind(this));
		}
		function mOutPop() {
			this.gotoAndStop(0);
		}
		
		
		if (!this._listeners || !hasListener(this._listeners.mousedown, "mDownPop")) {
			this.addEventListener("mousedown", mDownPop.bind(this));
		}
		function mDownPop() {
			this.gotoAndStop(2);
		}
		
		if (!window._listeners || !hasListener(window._listeners.mouseup, "mUpPop")) {
			window.addEventListener("mouseup", mUpPop.bind(this));
		}
		function mUpPop() {
			if (this.currentFrame == 2) {
				this.gotoAndStop(1);
			}
		}
		
		this.gotoAndStop(0);
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.text = new cjs.Text("制作", "normal 700 18px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 93;
	this.text.parent = this;
	this.text.setTransform(49.8,7.25);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-1.95,-1.95,0.7258,0.7258);

	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(-1.95,-1.95,0.7258,0.7258);

	this.instance_2 = new lib.CachedBmp_35();
	this.instance_2.setTransform(-1.95,-1.95,0.7258,0.7258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).to({state:[{t:this.instance_2},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,103.80000000000001,35.5);


(lib.coin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(-2,-2,62,62), null);


(lib.chooseBuy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.txt = new cjs.Text("最大", "normal 700 30px 'tk-adelle-mono'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 40;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(23.35,5.45,0.6786,0.6786);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.txt);
	}

	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,51,34.5);


(lib.chipG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.star1();
	this.instance.setTransform(-97,-94,0.7991,0.7991);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(24.6,63.8);

	this.instance_2 = new lib.star2();
	this.instance_2.setTransform(-97,-94);

	this.instance_3 = new lib.star3();
	this.instance_3.setTransform(-97,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-94,193.4,185);


(lib.buyBulkTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buyBulkTab, new cjs.Rectangle(-2,-2,203,52), null);


(lib.bTab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("建筑", "normal 700 30px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(95.15,4.5);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(-2,-2);

	this.instance_1 = new lib.CachedBmp_139();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,196,46.3);


(lib.autoIs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.CachedBmp_24();
	this.instance_1.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39,39);


(lib.afterAd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.popidle_1();
	this.instance.setTransform(7,10,0.1185,0.1185);

	this.rew2 = new cjs.Text("+5 分钟加速", "normal 700 23px 'tk-adelle-mono'", "#FFFFFF");
	this.rew2.name = "rew2";
	this.rew2.textAlign = "center";
	this.rew2.lineHeight = 31;
	this.rew2.lineWidth = 200;
	this.rew2.parent = this;
	this.rew2.setTransform(104.4,53.35);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.rew2);
	}

	this.rew1 = new cjs.Text("+ 10,000", "normal 700 23px 'tk-adelle-mono'", "#FFFFFF");
	this.rew1.name = "rew1";
	this.rew1.textAlign = "center";
	this.rew1.lineHeight = 31;
	this.rew1.lineWidth = 158;
	this.rew1.parent = this;
	this.rew1.setTransform(124.85,11.5);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.rew1);
	}

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.rew1},{t:this.rew2},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afterAd, new cjs.Rectangle(-1.5,-1.5,211,96), null);


(lib.Анимация20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-57.1,-11.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,-11.8,114,24);


(lib.Анимация19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-57.1,-11.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,-11.8,114,24);


(lib.Анимация18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-57.1,-11.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,-11.8,114,24);


(lib.Анимация17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-14.2,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-9.7,28,19);


(lib.Анимация16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-14.2,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-9.7,28,19);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-14.2,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-9.7,28,19);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-22.45,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-29.8,45,60);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-22.45,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-29.8,45,60);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-22.45,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-29.8,45,60);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-13.55,-28.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-28.9,27,58);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-13.55,-28.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-28.9,27,58);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-13.55,-28.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-28.9,27,58);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-26.55,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-28.7,53,57);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-26.55,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-28.7,53,57);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-26.55,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-28.7,53,57);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-28.35,-35.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-35.7,57,72);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-28.35,-35.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-35.7,57,72);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-28.35,-35.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-35.7,57,72);


(lib.stone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(26.55,28.7);

	this.instance_1 = new lib.Анимация7("synched",0);
	this.instance_1.setTransform(47.45,50.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация8("synched",0);
	this.instance_2.setTransform(26.55,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:47.45,y:50.5},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,x:26.55,y:28.7},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.9,78.8);


(lib.snake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация18("synched",0);
	this.instance.setTransform(57.1,11.85);

	this.instance_1 = new lib.Анимация19("synched",0);
	this.instance_1.setTransform(93.05,11.85);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация20("synched",0);
	this.instance_2.setTransform(57.1,11.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:93.05},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,x:57.1},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,24);


(lib.needle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(13.55,28.9);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(0,49.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация11("synched",0);
	this.instance_2.setTransform(13.55,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:0,y:49.1},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,x:13.55,y:28.9},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,0,40.5,78.2);


(lib.mouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(28.35,35.75);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(28.35,56.25);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.setTransform(28.35,35.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:56.25},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,y:35.75},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,92.5);


(lib.midAd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.noB = new lib.noB();
	this.noB.name = "noB";
	this.noB.setTransform(-86.9,10.9,1.1932,1.1932);
	new cjs.ButtonHelper(this.noB, 0, 1, 2);

	this.yesB = new lib.yesB();
	this.yesB.name = "yesB";
	this.yesB.setTransform(59.65,30.5,1.1932,1.1932,0,0,0,24.2,16.9);
	new cjs.ButtonHelper(this.yesB, 0, 1, 2);

	this.text = new cjs.Text("获得额外奖励\n通过看广告?", "normal 700 20px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 260;
	this.text.parent = this;
	this.text.setTransform(-3.0715,-63.75,1.0305,1.0305);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(-135.85,-67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.yesB},{t:this.noB}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.midAd, new cjs.Rectangle(-139.3,-67.8,272.5,136), null);


(lib.hammer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация12("synched",0);
	this.instance.setTransform(22.45,59.7,1,1,0,0,0,0,29.9);

	this.instance_1 = new lib.Анимация13("synched",0);
	this.instance_1.setTransform(22.5,59.7,1,1,89.9991,0,0,0.1,29.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация14("synched",0);
	this.instance_2.setTransform(22.45,59.7,1,1,0,0,0,0,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.1,regY:29.8,rotation:89.9991,x:22.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,regX:0,regY:29.9,rotation:0,x:22.45},15).wait(1));

	// way
	this.instance_3 = new lib.CachedBmp_43();
	this.instance_3.setTransform(1.2,76.7);

	this.instance_4 = new lib.CachedBmp_44();
	this.instance_4.setTransform(1.2,76.7);

	this.instance_5 = new lib.CachedBmp_45();
	this.instance_5.setTransform(1.2,76.7);

	this.instance_6 = new lib.CachedBmp_46();
	this.instance_6.setTransform(1.2,76.7);

	this.instance_7 = new lib.CachedBmp_47();
	this.instance_7.setTransform(1.2,76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,140.2,86.2);


(lib.cursor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация15("synched",0);
	this.instance.setTransform(14.2,9.7);

	this.instance_1 = new lib.Анимация16("synched",0);
	this.instance_1.setTransform(4.85,3.05);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация17("synched",0);
	this.instance_2.setTransform(14.2,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:4.85,y:3.05},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29).to({_off:true,x:14.2,y:9.7},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-6.6,37.3,25.6);


(lib.cGamess = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.cg();
	this.instance.setTransform(0,0,0.2674,0.2674);

	this.instance_1 = new lib.hovering();
	this.instance_1.setTransform(0,0,1.0315,1.2176);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.hovering2();
	this.instance_2.setTransform(0,0,1.0315,1.2176);
	this.instance_2.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.3,60.2);


(lib.bTemplate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.hover = new lib.hover();
	this.hover.name = "hover";
	this.hover.setTransform(159.8,35.9,1,1,0,0,0,159.8,35.9);
	this.hover.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.hover).wait(1));

	// Слой_1
	this.frameT = new lib.frameT();
	this.frameT.name = "frameT";
	this.frameT.setTransform(159.8,35.9,1,1,0,0,0,159.8,35.9);

	this.cost = new cjs.Text("100,000", "normal 700 16px 'tk-adelle-mono'", "#FFFF99");
	this.cost.name = "cost";
	this.cost.lineHeight = 22;
	this.cost.lineWidth = 100;
	this.cost.parent = this;
	this.cost.setTransform(154.9,52.9);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.cost);
	}

	this.currency = new lib.currency();
	this.currency.name = "currency";
	this.currency.setTransform(141.85,59.6,0.7701,0.7701,0,0,0,13.7,13.7);

	this.change = new cjs.Text("x100,000 -> x102,000", "normal 700 16px 'tk-adelle-mono'", "#FFFFFF");
	this.change.name = "change";
	this.change.textAlign = "center";
	this.change.lineHeight = 22;
	this.change.lineWidth = 317;
	this.change.parent = this;
	this.change.setTransform(160.4,28.55);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.change);
	}

	this.namee = new cjs.Text("制作力量", "normal 700 16px 'tk-adelle-mono'", "#FFFFFF");
	this.namee.name = "namee";
	this.namee.textAlign = "center";
	this.namee.lineHeight = 22;
	this.namee.lineWidth = 317;
	this.namee.parent = this;
	this.namee.setTransform(160.4,4.4);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.namee);
	}

	this.instance = new lib.CachedBmp_27();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.namee},{t:this.change},{t:this.currency},{t:this.cost},{t:this.frameT}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bTemplate, new cjs.Rectangle(-2,-2,324,77.1), null);


(lib.popThing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.hp = nd(2).times(nd(1.1).pow(this.parent.parent.level - 1));
		this.maxHp = nd(2).times(nd(1.1).pow(this.parent.parent.level - 1));
		
		var anc = this.parent.parent;
		
		
		this.popped1 = false;
		this.popped2 = false;
		this.popped3 = false;
		this.popped4 = false;
		this.popped5 = false;
		this.popped6 = false;
		this.popped7 = false;
		this.popped8 = false;
		
		this.poison = nd(0);
		this.died = false;
		
		
		if (!this.popOver._listeners || !hasListener(this.popOver._listeners.mousedown, "getP")) {
			this.popOver.addEventListener("mousedown", getP.bind(this));
		}
		function getP() {
			if (this.hp.gt(0)) {
				this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal);
				this.hp = this.hp.sub(this.parent.parent.clickPower);
			}
		}
		
		function flyGem(e) {
			var gem = e.currentTarget;
			if (gem.x < 1081 && gem.y > 41) {
				gem.x += (1081 - gem.startX)/30/2*this.exportRoot.timeMult;
				gem.y += (41 - gem.startY)/30/2*this.exportRoot.timeMult;
			}
			else {
				gem.x = 1081;
				gem.y = 41;
				gem.alpha -= 2/30*this.exportRoot.timeMult;
			}
			
			if (gem.alpha < 0) {
				gem.visible = false;
				anc.gems = anc.gems.plus(1);
				gem.removeEventListener('tick', flyGem);
				stage.removeChild(gem);
			}
			
		}
		
		if (!this._listeners || !hasListener(this._listeners.tick, "setPopIt")) {
			this.addEventListener("tick", setPopIt.bind(this));
			this.popS = new sound("sounds/pop.mp3");
		}
		function setPopIt() {
			
			this.maxHp = nd(2).times(nd(1.1).pow(this.parent.parent.level - 1));
			
			if (this.hp.gt(this.maxHp)) {
				this.hp = this.maxHp;
			} 
		
			this.timeMult = this.parent.parent.timeMult;
			
			this.hp = this.hp.sub(this.poison.div(30));
			
			if (this.parent.parent.buildings[7].level >= 1) {
				this.passiveDMG = this.parent.parent.clickPower.times(this.parent.parent.powers[7]);
				
				this.hp = this.hp.sub(this.passiveDMG.div(30));
			}
			
			if (this.hp.lte(0) && !this.died) {
				if (this.parent.parent.soundIs) {
					this.popS.play();
				}
				this.poison = nd(0);
				
				if (this.hasGem) {
					var gem;
					gem = new lib.gem();
				
					gem.x = this.x + 385;
					gem.y = this.y + 118;
						
					gem.startX = this.x + 385;
					gem.startY = this.y + 118;
						
					gem.scaleX = 0.7;
					gem.scaleY = 0.7;
				
					stage.addChild(gem);
					
					gem.addEventListener('tick', flyGem);
					
					var randN = Math.random();
					
					if (randN < this.parent.parent.doubleGC/100) {
						var gem2;
						gem2 = new lib.gem();
					
						gem2.x = this.x + 385;
						gem2.y = this.y + 118;
							
						gem2.startX = this.x + 385;
						gem2.startY = this.y + 118;
							
						gem2.scaleX = 0.7;
						gem2.scaleY = 0.7;
					
						stage.addChild(gem2);
						
						gem2.addEventListener('tick', flyGem);
					}
						
				}
				this.died = true;	
			}
			
			
			anc = this.parent.parent;
			if (this.parent.parent.updates[this.num] == 1) {
				
				var maxHPvalue = this.maxHp;
		
				this.hp = maxHPvalue;
				this.died = false;	
				var randNum = Math.random();
				if (randNum <= this.parent.parent.gemCh/100) {
					this.hasGem = true;
				}
				else {
					this.hasGem = false;
				}
			
				this.parent.parent.updates[this.num] = 0;
			}
			
			
			this.hpIs.gotoAndStop(Math.floor(this.hp.div(this.maxHp).times(99).toNumber()));
			this.color = this.parent.color;
			
			if (this.hp.gt(0) && this.hp.lt(this.maxHp)) {
				this.gotoAndStop(this.color*2);
				this.hpIs.visible = true;
				this.hpNow.visible = true;
				this.parent.parent.alive[this.num] = 1;
			}
			else if (this.hp.lte(0)) {
				this.gotoAndStop(this.color*2 + 1);
				this.hpIs.visible = false;
				this.hpNow.visible = false;
				this.parent.parent.alive[this.num] = 0;
			}
			else if (this.hp.gte(this.maxHp)) {
				this.gotoAndStop(this.color*2);
				this.hpIs.visible = false;
				this.hpNow.visible = false;
				this.parent.parent.alive[this.num] = 1;
			}
		
			if ((mousePosX-this.x)*(mousePosX-this.x) + (mousePosY-this.y)*(mousePosY-this.y) >= 44*44) {
				if (this.popOver.currentFrame != 0) {
					this.popOver.gotoAndStop(0);
				}
			}
		
		
		
		
		
			if (this.parent.parent.targets[0] == this.num && this.parent.parent.buildings[0].level >= 1 && this.parent.parent.alive[this.num]) {
				this.mouse.visible = true;
				this.parent.parent.ticks[0] += 1/30*this.timeMult;
				this.mouse.gotoAndStop(Math.floor(this.parent.parent.ticks[0] / this.parent.parent.maxTicks[0] * 60));
				
				if (!this.popped1 && this.parent.parent.ticks[0] >= (this.parent.parent.maxTicks[0]/2)) {
					
					this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal.times(this.parent.parent.powers[0]));
					this.hp = this.hp.sub(this.parent.parent.clickPower.times(this.parent.parent.powers[0]));
					
					this.popped1 = true;
				}
			
				if (this.parent.parent.ticks[0] >= this.parent.parent.maxTicks[0]) {
					this.parent.parent.ticks[0] %= this.parent.parent.maxTicks[0];
					this.popped1 = false;
					this.parent.parent.changes[0] = true;
				}
				
			}
			else if (this.parent.parent.targets[0] == this.num && this.parent.parent.buildings[0].level >= 1 && !this.parent.parent.alive[this.num]) {
				this.mouse.visible = false;
				this.popped1 = false;
				this.parent.parent.changes[0] = true;
				this.parent.parent.ticks[0] = 0;
			}
			else {
				this.mouse.visible = false;
			}
		
		
		
			if (this.parent.parent.targets[1] == this.num && this.parent.parent.buildings[1].level >= 1 && this.parent.parent.alive[this.num]) {
				this.stone.visible = true;
				this.parent.parent.ticks[1] += 1/30*this.timeMult;
				this.stone.gotoAndStop(Math.floor(this.parent.parent.ticks[1] / this.parent.parent.maxTicks[1] * 60));
				
				if (!this.popped2 && this.parent.parent.ticks[1] >= (this.parent.parent.maxTicks[1]/2)) {
					
					this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal.times(this.parent.parent.powers[1]));
					this.hp = this.hp.sub(this.parent.parent.clickPower.times(this.parent.parent.powers[1]));
					
					this.popped2 = true;
				}
			
				if (this.parent.parent.ticks[1] >= this.parent.parent.maxTicks[1]) {
					this.parent.parent.ticks[1] %= this.parent.parent.maxTicks[1];
					this.popped2 = false;
					this.parent.parent.changes[1] = true;
				}
				
			}
			else if (this.parent.parent.targets[1] == this.num && this.parent.parent.buildings[1].level >= 1 && !this.parent.parent.alive[this.num]) {
				this.stone.visible = false;
				this.popped2 = false;
				this.parent.parent.changes[1] = true;
				this.parent.parent.ticks[1] = 0;
			}
			else {
				this.stone.visible = false;
			}
		
			
		
			if (this.parent.parent.targets[2] == this.num && this.parent.parent.buildings[2].level >= 1 && this.parent.parent.alive[this.num]) {
				this.needle.visible = true;
				this.parent.parent.ticks[2] += 1/30*this.timeMult;
				this.needle.gotoAndStop(Math.floor(this.parent.parent.ticks[2] / this.parent.parent.maxTicks[2] * 60));
				
				if (!this.popped3 && this.parent.parent.ticks[2] >= (this.parent.parent.maxTicks[2]/2)) {
					
					this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal.times(this.parent.parent.powers[2]));
					this.hp = this.hp.sub(this.parent.parent.clickPower.times(this.parent.parent.powers[2]));
					
					this.popped3 = true;
				}
			
				if (this.parent.parent.ticks[2] >= this.parent.parent.maxTicks[2]) {
					this.parent.parent.ticks[2] %= this.parent.parent.maxTicks[2];
					this.popped3 = false;
					this.parent.parent.changes[2] = true;
				}
				
			}
			else if (this.parent.parent.targets[2] == this.num && this.parent.parent.buildings[2].level >= 1 && !this.parent.parent.alive[this.num]) {
				this.needle.visible = false;
				this.popped3 = false;
				this.parent.parent.changes[2] = true;
				this.parent.parent.ticks[2] = 0;
			}
			else {
				this.needle.visible = false;
			}
		
			
		
			if (this.parent.parent.targets[4] == this.num && this.parent.parent.buildings[4].level >= 1 && this.parent.parent.alive[this.num]) {
				this.cursor.visible = true;
				this.parent.parent.ticks[4] += 1/30*this.timeMult;
				this.cursor.gotoAndStop(Math.floor(this.parent.parent.ticks[4] / this.parent.parent.maxTicks[4] * 60));
				
				if (!this.popped5 && this.parent.parent.ticks[4] >= (this.parent.parent.maxTicks[4]/2)) {
					
					this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal.times(this.parent.parent.powers[4]));
					this.hp = this.hp.sub(this.parent.parent.clickPower.times(this.parent.parent.powers[4]));
		
					this.popped5 = true;
				}
			
				if (this.parent.parent.ticks[4] >= this.parent.parent.maxTicks[4]) {
					this.parent.parent.ticks[4] %= this.parent.parent.maxTicks[4];
					this.popped5 = false;
					this.parent.parent.changes[4] = true;
				}
				
			}
			else if (this.parent.parent.targets[4] == this.num && this.parent.parent.buildings[4].level >= 1 && !this.parent.parent.alive[this.num]) {
				this.cursor.visible = false;
				this.popped5 = false;
				this.parent.parent.changes[4] = true;
				this.parent.parent.ticks[4] = 0;
			}
			else {
				this.cursor.visible = false;
			}
		
		
		
			if (this.parent.parent.targets[5] == this.num && this.parent.parent.buildings[5].level >= 1 && this.parent.parent.alive[this.num]) {
				this.snake.visible = true;
				this.parent.parent.ticks[5] += 1/30*this.timeMult;
				this.snake.gotoAndStop(Math.floor(this.parent.parent.ticks[5] / this.parent.parent.maxTicks[5] * 60));
				
				if (!this.popped6 && this.parent.parent.ticks[5] >= (this.parent.parent.maxTicks[5]/2)) {
					
					this.parent.parent.money = this.parent.parent.money.plus(this.parent.parent.clickRewardTotal.times(this.parent.parent.powers[5]));
					this.hp = this.hp.sub(this.parent.parent.clickPower.times(this.parent.parent.powers[5]));
					this.poison = this.poison.plus(this.parent.parent.clickPower.times(this.parent.parent.powers[5]).div(5));
					
					this.popped6 = true;
				}
			
				if (this.parent.parent.ticks[5] >= this.parent.parent.maxTicks[5]) {
					this.parent.parent.ticks[5] %= this.parent.parent.maxTicks[5];
					this.popped6 = false;
					this.parent.parent.changes[5] = true;
				}
				
			}
			else if (this.parent.parent.targets[5] == this.num && this.parent.parent.buildings[5].level >= 1 && !this.parent.parent.alive[this.num]) {
				this.snake.visible = false;
				this.popped6 = false;
				this.parent.parent.changes[5] = true;
				this.parent.parent.ticks[5] = 0;
			}
			else {
				this.snake.visible = false;
			}
			
		}
		
		if (!this._listeners || !hasListener(this._listeners.tick, "main_fs")) {
			this.addEventListener("tick", main_fs.bind(this));
		}
		function main_fs() {
		
			mousePosX = stage.mouseX / canvas.width * 1280 - 405.5;
			mousePosY = stage.mouseY / canvas.height * 720 - 138.6;
		}
		
		
		
		function sound(src) {
			this.sound = document.createElement("audio");
			this.sound.src = src;
			this.sound.setAttribute("preload", "auto");
			this.sound.setAttribute("controls", "none");
			this.sound.style.display = "none";
			document.body.appendChild(this.sound);
			this.play = function () {
				this.sound.play();
			}
			this.pause = function () {
				this.sound.pause();
			}
			this.stop = function () {
				this.sound.pause();
				this.sound.currentTime = 0;
			}
		}
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// snake
	this.snake = new lib.snake();
	this.snake.name = "snake";
	this.snake.setTransform(26.25,12.3,0.7671,0.7671,74.9998,0,0,114,11.8);

	this.timeline.addTween(cjs.Tween.get(this.snake).wait(20));

	// cursor
	this.cursor = new lib.cursor();
	this.cursor.name = "cursor";
	this.cursor.setTransform(70.6,59.65,1,1,0,0,0,14.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(20));

	// needle
	this.needle = new lib.needle();
	this.needle.name = "needle";
	this.needle.setTransform(95.2,-15.25,1,1,0,0,0,13.6,28.9);

	this.timeline.addTween(cjs.Tween.get(this.needle).wait(20));

	// stone
	this.stone = new lib.stone();
	this.stone.name = "stone";
	this.stone.setTransform(-15.05,-12.05,1,1,0,0,0,26.6,28.7);

	this.timeline.addTween(cjs.Tween.get(this.stone).wait(20));

	// mouse
	this.mouse = new lib.mouse();
	this.mouse.name = "mouse";
	this.mouse.setTransform(44.45,-19.25,0.7566,0.7566,0,0,0,28.4,35.8);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(20));

	// Слой_2
	this.popOver = new lib.popOver();
	this.popOver.name = "popOver";
	this.popOver.setTransform(6.45,3.7);
	this.popOver.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.popOver).wait(1).to({regX:43.6,regY:43.6,x:50.05,y:47.3},0).wait(19));

	// Слой_3
	this.hpIs = new lib.hpIs();
	this.hpIs.name = "hpIs";
	this.hpIs.setTransform(49.6,81.05,1.6537,1.6537,0,0,0,13.1,6.2);
	this.hpIs.alpha = 0.6992;

	this.hpNow = new lib.hpNow();
	this.hpNow.name = "hpNow";
	this.hpNow.setTransform(49.65,80.95,1.6537,1.6537,0,0,0,13.6,6.7);
	this.hpNow.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hpNow},{t:this.hpIs}]}).wait(20));

	// Слой_1
	this.instance = new lib.popidle1();
	this.instance.setTransform(0,0,0.3407,0.3407);

	this.instance_1 = new lib.popidle1p();
	this.instance_1.setTransform(0,0,0.3407,0.3407);

	this.instance_2 = new lib.popidle_1();
	this.instance_2.setTransform(0,0,0.3407,0.3407);

	this.instance_3 = new lib.popidle_12();
	this.instance_3.setTransform(0,0,0.3407,0.3407);

	this.instance_4 = new lib.popidle_2();
	this.instance_4.setTransform(0,0,0.3407,0.3407);

	this.instance_5 = new lib.popidle_22();
	this.instance_5.setTransform(0,0,0.3407,0.3407);

	this.instance_6 = new lib.popidle_3();
	this.instance_6.setTransform(0,0,0.3407,0.3407);

	this.instance_7 = new lib.popidle_32();
	this.instance_7.setTransform(0,0,0.3407,0.3407);

	this.instance_8 = new lib.popidle_4();
	this.instance_8.setTransform(0,0,0.3407,0.3407);

	this.instance_9 = new lib.popidle_42();
	this.instance_9.setTransform(0,0,0.3407,0.3407);

	this.instance_10 = new lib.popidle_5();
	this.instance_10.setTransform(0,0,0.3407,0.3407);

	this.instance_11 = new lib.popidle_52();
	this.instance_11.setTransform(0,0,0.3407,0.3407);

	this.instance_12 = new lib.popidle_6();
	this.instance_12.setTransform(0,0,0.3407,0.3407);

	this.instance_13 = new lib.popidle_62();
	this.instance_13.setTransform(0,0,0.3407,0.3407);

	this.instance_14 = new lib.popidle_7();
	this.instance_14.setTransform(0,0,0.3407,0.3407);

	this.instance_15 = new lib.popidle_72();
	this.instance_15.setTransform(0,0,0.3407,0.3407);

	this.instance_16 = new lib.popidle_8();
	this.instance_16.setTransform(0,0,0.3407,0.3407);

	this.instance_17 = new lib.popidle_82();
	this.instance_17.setTransform(0,0,0.3407,0.3407);

	this.instance_18 = new lib.popidle_9();
	this.instance_18.setTransform(0,0,0.3407,0.3407);

	this.instance_19 = new lib.popidle_92();
	this.instance_19.setTransform(0,0,0.3407,0.3407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-74.4,150.2,176.60000000000002);


(lib.popIt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.popChildren = [];
		this.popChildren.push(this.popThing1);
		this.popChildren.push(this.popThing2);
		this.popChildren.push(this.popThing3);
		this.popChildren.push(this.popThing4);
		this.popChildren.push(this.popThing5);
		this.popChildren.push(this.popThing6);
		this.popChildren.push(this.popThing7);
		this.popChildren.push(this.popThing8);
		this.popChildren.push(this.popThing9);
		this.popChildren.push(this.popThing10);
		this.popChildren.push(this.popThing11);
		this.popChildren.push(this.popThing12);
		this.popChildren.push(this.popThing13);
		this.popChildren.push(this.popThing14);
		this.popChildren.push(this.popThing15);
		this.popChildren.push(this.popThing16);
		this.popChildren.push(this.popThing17);
		this.popChildren.push(this.popThing18);
		this.popChildren.push(this.popThing19);
		this.popChildren.push(this.popThing20);
		this.popChildren.push(this.popThing21);
		this.popChildren.push(this.popThing22);
		this.popChildren.push(this.popThing23);
		this.popChildren.push(this.popThing24);
		this.popChildren.push(this.popThing25);
		this.popChildren.push(this.popThing26);
		this.popChildren.push(this.popThing27);
		this.popChildren.push(this.popThing28);
		this.popChildren.push(this.popThing29);
		this.popChildren.push(this.popThing30);
		this.popChildren.push(this.popThing31);
		this.popChildren.push(this.popThing32);
		this.popChildren.push(this.popThing33);
		this.popChildren.push(this.popThing34);
		this.popChildren.push(this.popThing35);
		this.popChildren.push(this.popThing36);
		
		
		
		
		if (!this._listeners || !hasListener(this._listeners.tick, "setPops")) {
			this.addEventListener("tick", setPops.bind(this));
		}
		function setPops() {
			this.popThing1.num = 0;
			this.popThing2.num = 1;
			this.popThing3.num = 2;
			this.popThing4.num = 3;
			this.popThing5.num = 4;
			this.popThing6.num = 5;
			this.popThing7.num = 6;
			this.popThing8.num = 7;
			this.popThing9.num = 8;
			this.popThing10.num = 9;
			if (this.currentFrame >= 10) {
				this.popThing11.num = 10;
				this.popThing12.num = 11;
				this.popThing13.num = 12;
				this.popThing14.num = 13;
				this.popThing15.num = 14;
				this.popThing16.num = 15;
			}
			if (this.currentFrame >= 20) {
				this.popThing17.num = 16;
				this.popThing18.num = 17;
				this.popThing19.num = 18;
				this.popThing20.num = 19;
				this.popThing21.num = 20;
				this.popThing22.num = 21;
				this.popThing23.num = 22;
				this.popThing24.num = 23;
				this.popThing25.num = 24;
			}
			if (this.currentFrame >= 30) {
				this.popThing26.num = 25;
				this.popThing27.num = 26;
				this.popThing28.num = 27;
				this.popThing29.num = 28;
				this.popThing30.num = 29;
				this.popThing31.num = 30;
				this.popThing32.num = 31;
				this.popThing33.num = 32;
				this.popThing34.num = 33;
				this.popThing35.num = 34;
				this.popThing36.num = 35;
			}
		
		}
		
		
		
		function hasListener(array, name) {
			var has = false;
			if (array) {
				for (var i = 0 ; i < array.length ; ++i) {
					if (array[i].name == ("bound " + name)) {
						has = true;
					}
				}
			}
			return has;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// pops
	this.popThing9 = new lib.popThing();
	this.popThing9.name = "popThing9";
	this.popThing9.setTransform(268.35,276.85,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing8 = new lib.popThing();
	this.popThing8.name = "popThing8";
	this.popThing8.setTransform(195.05,276.85,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing7 = new lib.popThing();
	this.popThing7.name = "popThing7";
	this.popThing7.setTransform(121.4,278.4,0.7172,0.7172,0,0,0,50.7,57.8);

	this.popThing4 = new lib.popThing();
	this.popThing4.name = "popThing4";
	this.popThing4.setTransform(268.35,203.55,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing5 = new lib.popThing();
	this.popThing5.name = "popThing5";
	this.popThing5.setTransform(195.05,203.55,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing6 = new lib.popThing();
	this.popThing6.name = "popThing6";
	this.popThing6.setTransform(121.75,203.55,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing3 = new lib.popThing();
	this.popThing3.name = "popThing3";
	this.popThing3.setTransform(268.35,130.25,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing2 = new lib.popThing();
	this.popThing2.name = "popThing2";
	this.popThing2.setTransform(195.05,130.25,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing1 = new lib.popThing();
	this.popThing1.name = "popThing1";
	this.popThing1.setTransform(121.75,130.25,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing13 = new lib.popThing();
	this.popThing13.name = "popThing13";
	this.popThing13.setTransform(301.65,310.15,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing15 = new lib.popThing();
	this.popThing15.name = "popThing15";
	this.popThing15.setTransform(155.05,310.15,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing16 = new lib.popThing();
	this.popThing16.name = "popThing16";
	this.popThing16.setTransform(81.75,310.15,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing12 = new lib.popThing();
	this.popThing12.name = "popThing12";
	this.popThing12.setTransform(301.65,236.85,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing10 = new lib.popThing();
	this.popThing10.name = "popThing10";
	this.popThing10.setTransform(155.05,236.85,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing14 = new lib.popThing();
	this.popThing14.name = "popThing14";
	this.popThing14.setTransform(228.35,309.45,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing11 = new lib.popThing();
	this.popThing11.name = "popThing11";
	this.popThing11.setTransform(228.35,236.85,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing25 = new lib.popThing();
	this.popThing25.name = "popThing25";
	this.popThing25.setTransform(346.75,354.35,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing24 = new lib.popThing();
	this.popThing24.name = "popThing24";
	this.popThing24.setTransform(273.45,354.35,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing23 = new lib.popThing();
	this.popThing23.name = "popThing23";
	this.popThing23.setTransform(200.15,354.35,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing22 = new lib.popThing();
	this.popThing22.name = "popThing22";
	this.popThing22.setTransform(126.85,354.35,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing21 = new lib.popThing();
	this.popThing21.name = "popThing21";
	this.popThing21.setTransform(53.55,354.35,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing17 = new lib.popThing();
	this.popThing17.name = "popThing17";
	this.popThing17.setTransform(273.45,281.05,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing18 = new lib.popThing();
	this.popThing18.name = "popThing18";
	this.popThing18.setTransform(200.6,282.6,0.7172,0.7172,0,0,0,51.8,57.8);

	this.popThing19 = new lib.popThing();
	this.popThing19.name = "popThing19";
	this.popThing19.setTransform(126.85,281.05,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing20 = new lib.popThing();
	this.popThing20.name = "popThing20";
	this.popThing20.setTransform(53.55,281.05,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing31 = new lib.popThing();
	this.popThing31.name = "popThing31";
	this.popThing31.setTransform(381.05,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing32 = new lib.popThing();
	this.popThing32.name = "popThing32";
	this.popThing32.setTransform(307.75,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing33 = new lib.popThing();
	this.popThing33.name = "popThing33";
	this.popThing33.setTransform(234.45,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing34 = new lib.popThing();
	this.popThing34.name = "popThing34";
	this.popThing34.setTransform(161.15,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing35 = new lib.popThing();
	this.popThing35.name = "popThing35";
	this.popThing35.setTransform(87.85,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing36 = new lib.popThing();
	this.popThing36.name = "popThing36";
	this.popThing36.setTransform(14.55,398.3,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing30 = new lib.popThing();
	this.popThing30.name = "popThing30";
	this.popThing30.setTransform(381.05,323,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing29 = new lib.popThing();
	this.popThing29.name = "popThing29";
	this.popThing29.setTransform(307.75,323,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing28 = new lib.popThing();
	this.popThing28.name = "popThing28";
	this.popThing28.setTransform(234.45,323,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing27 = new lib.popThing();
	this.popThing27.name = "popThing27";
	this.popThing27.setTransform(161.15,323,0.7172,0.7172,0,0,0,51.2,55.6);

	this.popThing26 = new lib.popThing();
	this.popThing26.name = "popThing26";
	this.popThing26.setTransform(87.85,323,0.7172,0.7172,0,0,0,51.2,55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:50.7,regY:57.8,x:121.4,y:278.4}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]}).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:121.75,y:130.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:195.05,y:130.25}},{t:this.popThing3,p:{x:268.35,y:130.25}},{t:this.popThing6,p:{x:121.75,y:203.55}},{t:this.popThing5,p:{x:195.05,y:203.55}},{t:this.popThing4,p:{x:268.35,y:203.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:121.75,y:276.85}},{t:this.popThing8,p:{x:195.05,y:276.85}},{t:this.popThing9,p:{x:268.35,y:276.85}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:81.75,y:90.25,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:155.05,y:90.25}},{t:this.popThing3,p:{x:228.35,y:90.25}},{t:this.popThing4,p:{x:301.65,y:90.25}},{t:this.popThing8,p:{x:81.75,y:163.55}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:155.05,y:163.55}},{t:this.popThing6,p:{x:228.35,y:163.55}},{t:this.popThing11,p:{x:228.35,y:236.85}},{t:this.popThing5,p:{x:301.65,y:163.55}},{t:this.popThing9,p:{x:81.75,y:236.85}},{t:this.popThing14,p:{x:228.35,y:309.45}},{t:this.popThing10,p:{x:155.05,y:236.85}},{t:this.popThing12,p:{x:301.65,y:236.85}},{t:this.popThing16,p:{x:81.75,y:310.15}},{t:this.popThing15,p:{x:155.05,y:310.15}},{t:this.popThing13,p:{x:301.65,y:310.15}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:53.5,y:59.85,regX:51.1,regY:53.8}},{t:this.popThing2,p:{x:126.85,y:61.15}},{t:this.popThing3,p:{x:200.15,y:61.15}},{t:this.popThing4,p:{x:273.45,y:61.15}},{t:this.popThing5,p:{x:346.75,y:61.15}},{t:this.popThing10,p:{x:53.55,y:134.45}},{t:this.popThing9,p:{x:126.85,y:134.45}},{t:this.popThing8,p:{x:200.15,y:134.45}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:273.45,y:134.45}},{t:this.popThing6,p:{x:346.75,y:134.45}},{t:this.popThing11,p:{x:53.55,y:207.75}},{t:this.popThing12,p:{x:126.85,y:207.75}},{t:this.popThing13,p:{x:200.15,y:207.75}},{t:this.popThing14,p:{x:273.45,y:207.75}},{t:this.popThing15,p:{x:346.75,y:207.75}},{t:this.popThing20,p:{x:53.55,y:281.05}},{t:this.popThing19,p:{x:126.85,y:281.05}},{t:this.popThing18,p:{regX:51.8,regY:57.8,x:200.6,y:282.6}},{t:this.popThing17,p:{x:273.45,y:281.05}},{t:this.popThing16,p:{x:346.75,y:281.05}},{t:this.popThing21,p:{x:53.55,y:354.35}},{t:this.popThing22,p:{x:126.85,y:354.35}},{t:this.popThing23,p:{x:200.15,y:354.35}},{t:this.popThing24,p:{x:273.45,y:354.35}},{t:this.popThing25,p:{x:346.75,y:354.35}}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).to({state:[{t:this.popThing1,p:{x:14.55,y:27.8,regX:51.2,regY:55.6}},{t:this.popThing2,p:{x:87.85,y:27.8}},{t:this.popThing3,p:{x:161.15,y:27.8}},{t:this.popThing4,p:{x:234.45,y:27.8}},{t:this.popThing5,p:{x:307.75,y:27.8}},{t:this.popThing6,p:{x:381.05,y:27.8}},{t:this.popThing12,p:{x:14.55,y:103.1}},{t:this.popThing11,p:{x:87.85,y:103.1}},{t:this.popThing10,p:{x:161.15,y:103.1}},{t:this.popThing9,p:{x:234.45,y:103.1}},{t:this.popThing8,p:{x:307.75,y:103.1}},{t:this.popThing7,p:{regX:51.2,regY:55.6,x:381.05,y:103.1}},{t:this.popThing13,p:{x:14.55,y:176.4}},{t:this.popThing14,p:{x:87.85,y:176.4}},{t:this.popThing15,p:{x:161.15,y:176.4}},{t:this.popThing16,p:{x:234.45,y:176.4}},{t:this.popThing17,p:{x:307.75,y:176.4}},{t:this.popThing18,p:{regX:51.2,regY:55.6,x:381.05,y:176.4}},{t:this.popThing24,p:{x:14.55,y:249.7}},{t:this.popThing23,p:{x:87.85,y:249.7}},{t:this.popThing22,p:{x:161.15,y:249.7}},{t:this.popThing21,p:{x:234.45,y:249.7}},{t:this.popThing20,p:{x:307.75,y:249.7}},{t:this.popThing19,p:{x:381.05,y:249.7}},{t:this.popThing25,p:{x:14.55,y:323}},{t:this.popThing26},{t:this.popThing27},{t:this.popThing28},{t:this.popThing29},{t:this.popThing30},{t:this.popThing36},{t:this.popThing35},{t:this.popThing34},{t:this.popThing33},{t:this.popThing32},{t:this.popThing31}]},1).wait(1));

	// lines
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(73.3,77.05);

	this.instance_1 = new lib.CachedBmp_71();
	this.instance_1.setTransform(73.3,77.05);

	this.instance_2 = new lib.CachedBmp_72();
	this.instance_2.setTransform(73.3,77.05);

	this.instance_3 = new lib.CachedBmp_73();
	this.instance_3.setTransform(73.3,77.05);

	this.instance_4 = new lib.CachedBmp_74();
	this.instance_4.setTransform(73.3,77.05);

	this.instance_5 = new lib.CachedBmp_75();
	this.instance_5.setTransform(73.3,77.05);

	this.instance_6 = new lib.CachedBmp_76();
	this.instance_6.setTransform(73.3,77.05);

	this.instance_7 = new lib.CachedBmp_77();
	this.instance_7.setTransform(73.3,77.05);

	this.instance_8 = new lib.CachedBmp_78();
	this.instance_8.setTransform(73.3,77.05);

	this.instance_9 = new lib.CachedBmp_79();
	this.instance_9.setTransform(73.3,77.05);

	this.instance_10 = new lib.CachedBmp_80();
	this.instance_10.setTransform(33.3,37.05);

	this.instance_11 = new lib.CachedBmp_81();
	this.instance_11.setTransform(33.3,37.05);

	this.instance_12 = new lib.CachedBmp_82();
	this.instance_12.setTransform(33.3,37.05);

	this.instance_13 = new lib.CachedBmp_83();
	this.instance_13.setTransform(33.3,37.05);

	this.instance_14 = new lib.CachedBmp_84();
	this.instance_14.setTransform(33.3,37.05);

	this.instance_15 = new lib.CachedBmp_85();
	this.instance_15.setTransform(33.3,37.05);

	this.instance_16 = new lib.CachedBmp_86();
	this.instance_16.setTransform(33.3,37.05);

	this.instance_17 = new lib.CachedBmp_87();
	this.instance_17.setTransform(33.3,37.05);

	this.instance_18 = new lib.CachedBmp_88();
	this.instance_18.setTransform(33.3,37.05);

	this.instance_19 = new lib.CachedBmp_89();
	this.instance_19.setTransform(33.3,37.05);

	this.instance_20 = new lib.CachedBmp_90();
	this.instance_20.setTransform(3.3,7.05);

	this.instance_21 = new lib.CachedBmp_91();
	this.instance_21.setTransform(3.3,7.05);

	this.instance_22 = new lib.CachedBmp_92();
	this.instance_22.setTransform(3.3,7.05);

	this.instance_23 = new lib.CachedBmp_93();
	this.instance_23.setTransform(3.3,7.05);

	this.instance_24 = new lib.CachedBmp_94();
	this.instance_24.setTransform(3.3,7.05);

	this.instance_25 = new lib.CachedBmp_95();
	this.instance_25.setTransform(3.3,7.05);

	this.instance_26 = new lib.CachedBmp_96();
	this.instance_26.setTransform(3.3,7.05);

	this.instance_27 = new lib.CachedBmp_97();
	this.instance_27.setTransform(3.3,7.05);

	this.instance_28 = new lib.CachedBmp_98();
	this.instance_28.setTransform(3.3,7.05);

	this.instance_29 = new lib.CachedBmp_99();
	this.instance_29.setTransform(3.3,7.05);

	this.instance_30 = new lib.CachedBmp_100();
	this.instance_30.setTransform(-35.2,-25.45);

	this.instance_31 = new lib.CachedBmp_101();
	this.instance_31.setTransform(-35.2,-25.45);

	this.instance_32 = new lib.CachedBmp_102();
	this.instance_32.setTransform(-35.2,-25.45);

	this.instance_33 = new lib.CachedBmp_103();
	this.instance_33.setTransform(-35.2,-25.45);

	this.instance_34 = new lib.CachedBmp_104();
	this.instance_34.setTransform(-35.2,-25.45);

	this.instance_35 = new lib.CachedBmp_105();
	this.instance_35.setTransform(-35.2,-25.45);

	this.instance_36 = new lib.CachedBmp_106();
	this.instance_36.setTransform(-35.2,-25.45);

	this.instance_37 = new lib.CachedBmp_107();
	this.instance_37.setTransform(-35.2,-25.45);

	this.instance_38 = new lib.CachedBmp_108();
	this.instance_38.setTransform(-35.2,-25.45);

	this.instance_39 = new lib.CachedBmp_109();
	this.instance_39.setTransform(-35.2,-25.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(1));

	// popBG
	this.instance_40 = new lib.PopItWhiteBig1();
	this.instance_40.setTransform(69,74,0.6033,0.6033);

	this.instance_41 = new lib.PopItRedBig11();
	this.instance_41.setTransform(69,74,0.6033,0.6033);

	this.instance_42 = new lib.PopItOrangeBig1();
	this.instance_42.setTransform(69,74,0.6033,0.6033);

	this.instance_43 = new lib.PopItYellowBig1();
	this.instance_43.setTransform(69,74,0.6033,0.6033);

	this.instance_44 = new lib.PopItGreenBig1();
	this.instance_44.setTransform(69,74,0.6033,0.6033);

	this.instance_45 = new lib.PopItLBlueBig1();
	this.instance_45.setTransform(69,74,0.6033,0.6033);

	this.instance_46 = new lib.PopItBlueBig1();
	this.instance_46.setTransform(69,74,0.6033,0.6033);

	this.instance_47 = new lib.PopItPurpleBig1();
	this.instance_47.setTransform(69,74,0.6033,0.6033);

	this.instance_48 = new lib.PopItPinkBig1();
	this.instance_48.setTransform(69,74,0.6033,0.6033);

	this.instance_49 = new lib.PopItBlackBig1();
	this.instance_49.setTransform(69,74,0.6033,0.6033);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]}).to({state:[{t:this.instance_41,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_42,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_43,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_44,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_46,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_47,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_48,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_49,p:{scaleX:0.6033,scaleY:0.6033,x:69,y:74}}]},1).to({state:[{t:this.instance_40,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_41,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_42,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_43,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_44,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_45,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_46,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_47,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_48,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_49,p:{scaleX:0.7892,scaleY:0.7892,x:29,y:34}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_41,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_42,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_46,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_47,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_48,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_49,p:{scaleX:1,scaleY:1,x:-1,y:4}}]},1).to({state:[{t:this.instance_40,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_41,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_42,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_45,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_46,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_47,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_48,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).to({state:[{t:this.instance_49,p:{scaleX:1.1983,scaleY:1.1983,x:-41,y:-36}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-65.5,490.3,508.8);


(lib.bupgrades = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// upgrades
	this.b4 = new lib.bTemplate();
	this.b4.name = "b4";
	this.b4.setTransform(171.35,334.15,1,1,0,0,0,159.8,35.9);

	this.b3 = new lib.bTemplate();
	this.b3.name = "b3";
	this.b3.setTransform(171.35,253.2,1,1,0,0,0,159.8,35.9);

	this.b2 = new lib.bTemplate();
	this.b2.name = "b2";
	this.b2.setTransform(171.35,172.25,1,1,0,0,0,159.8,35.9);

	this.b1 = new lib.bTemplate();
	this.b1.name = "b1";
	this.b1.setTransform(171.35,91.3,1,1,0,0,0,159.8,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(1));

	// Слой_2
	this.set2 = new lib.uTab();
	this.set2.name = "set2";
	this.set2.setTransform(314.05,22.2,1,1,0,0,0,95.9,20.2);

	this.set1 = new lib.bTab();
	this.set1.name = "set1";
	this.set1.setTransform(97.9,22.2,1,1,0,0,0,95.9,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set1},{t:this.set2}]}).wait(1));

	// Слой_1
	this.uBG = new lib.uBG();
	this.uBG.name = "uBG";
	this.uBG.setTransform(205.6,198.3,1,1,0,0,0,205.6,198.3);

	this.timeline.addTween(cjs.Tween.get(this.uBG).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bupgrades, new cjs.Rectangle(-2,-2,415,401), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.timeMult = 1;
		
		this.cGames.addEventListener("click", goCG.bind(this));
		function goCG() {
			window.open("http://crazygames.com/", "_blank");
		}
		
		const crazysdk = window.CrazyGames.CrazySDK.getInstance(); //Getting the SDK
		crazysdk.init();
		adRequested = false;
		
		var fullscreen = false;
		var elem = document.getElementById("animation_container");
		
		crazysdk.addEventListener('adStarted', adStarted.bind(this));
		crazysdk.addEventListener('adError', adError.bind(this));
		crazysdk.addEventListener('adFinished', adFinished.bind(this));
		
		
		var addedAd2 = false;
		
		var respawn = 60;
		
		this.afterAd.visible = false;
		
		
		this.addEventListener("tick", devSet.bind(this));
		function devSet() {
			
			d = new Date();
			time1_ib = d.getTime()/1000;
			
		}
		
		
		function adStarted() {
		}
		
		
		function adError() {
		}
		
		
		function adFinished() {
		
			
			
			var bGain = this.bubblesReward.times(5);
			this.bubbles = this.bubbles.plus(bGain);
			speedUPtime_ib += 300;
			
			this.afterAd.visible = true;
			this.afterAd.alpha = 1;
			this.afterAd.rew1.text = " +" + format(bGain);
			this.afterAd.rew2.text = "+5 分钟 加速";
			
			respawn = 150;
		}
		
		
		
		
		this.midAd.yesB.addEventListener("click", watchAd.bind(this));
		function watchAd() {
			this.midAd.visible = false;
			this.chipG.visible = false;
			if (!crazysdk.hasAdblock) {
				crazysdk.requestAd('rewarded');
			}
		}
		
		
		//ads
		
		this.chipG.visible = false
		this.midAd.visible = false
		
		
		
		this.addEventListener("tick", bonusbonus.bind(this));
		function bonusbonus() {
			
			respawn -= 1/30;
			if (this.chipG.life > 0) {
				this.chipG.life -= 1/30;
				this.chipG.alpha = this.chipG.life/10;
				if (this.chipG.alpha < 0) {
					this.chipG.alpha.visible = false;
					respawn = 160;
				}
			}
			
			var chance = Math.random();
			if (chance <= 0.0014 && respawn <= 0) {
				this.chipG.visible = true;
				this.chipG.x = 336;
				this.chipG.y = 69;
				this.chipG.life = 18;
				respawn = 160;
			}
			
			if (this.midAd.visible) {
				stage.addChild(this.midAd);
			}
		
			if (this.afterAd.visible) {
				stage.addChild(this.afterAd);
				this.afterAd.alpha -= 0.3/30;
				if (this.afterAd.alpha <= 0) {
					this.afterAd.visible = false;
				}
			}
		}
		
		this.chipG.gotoAndStop(0);
		
		this.chipG.addEventListener("mousedown", showAddDown.bind(this));
		function showAddDown() {
			this.chipG.gotoAndStop(2);
			this.midAd.visible = true;
			this.midAd.x = this.chipG.x + 40;
			this.midAd.y = this.chipG.y + 125;
		}
		
		
		this.chipG.addEventListener("mouseover", showAddOver.bind(this));
		function showAddOver() {
			this.chipG.gotoAndStop(1);
		}
		
		
		this.chipG.addEventListener("mouseout", showAddOut.bind(this));
		function showAddOut() {
			this.chipG.gotoAndStop(0);
		}
		
		
		window.addEventListener("mouseup", showAddUp.bind(this));
		function showAddUp() {
			if (this.chipG.currentFrame == 2) {
				this.chipG.gotoAndStop(1);
			}
		}
		
		
		this.midAd.noB.addEventListener("click", remChip.bind(this));
		function remChip() {
			this.midAd.visible = false;
			this.chipG.visible = false;
		}
		
		
		
		this.addEventListener("tick", spUP.bind(this));
		function spUP() {
			
			this.timeMult = 1 + (sActive*1);
			var dt = new Date();
			time2_ib = dt.getTime()/1000;
			
			if (speedUPtime_ib > 0) {
				this.speedUP_b.visible = true;
				this.spdUP.visible = true;
				this.spdTime.visible = true;
				this.spdUP.text = "加速 (x2, 最大 30分钟)";
				this.spdTime.text = Math.floor(speedUPtime_ib*10)/10 + "秒";
				
				if (sActive == true) {
					this.speedUP_b.gotoAndStop(1);
					speedUPtime_ib -= 1/30;
				}
				else {
					this.speedUP_b.gotoAndStop(0);
				}
			}
			else {
				this.speedUP_b.visible = false;
				this.spdUP.visible = false;
				this.spdTime.visible = false;
				sActive = false;
			}
		}
		
		this.speedUP_b.addEventListener("click", makeActive.bind(this));
		function makeActive() {
			if (sActive == false) {
				sActive = true;
			}
			else {
				sActive = false;
			}
		}
		
		this.discord.addEventListener("click", goDiscord.bind(this));
		function goDiscord() {
			window.open("https://discord.gg/4j5DnbT", "_blank");
		}
		stage.enableMouseOver(30);
		
		
		var num = Math.floor(Math.random()*10);
		
		
		this.levelType = num;
		
		this.popIt.gotoAndStop(0);
		this.popIt.gotoAndStop(this.levelType);
		this.popIt.color = this.levelType%10;
		
		
		this.money = nd(0);
		this.moneyAll = nd(0);
		
		this.gems = nd(0);
		this.bubbles = nd(0);
		
		
		this.clickPower = nd(1);
		this.clickReward = nd(1);
		this.clickRewardTotal = nd(1);
		
		this.popAmount = 25;
		
		this.updates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		this.alive = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		
		
		this.respawn = 1;
		this.resNow = 0;
		
		this.level = 1;
		this.maxLevel = 1;
		this.autoLevel = true;
		
		
		this.bubblesReward = nd(1);
		this.multReward = nd(0);
		
		
		this.tick = 0;
		
		this.mults = [nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1)];
		
		this.craftPow = nd(1);
		this.craftPowFull1 = nd(1);
		this.craftPowFull2 = nd(1);
		this.gemsCraft = 1;
		
		this.buyAmoType = 1;
		this.buTab = 2;
		this.buPage = 1;
		
		this.tutor = 1;
		
		function upgrade(maxLevel, cInc, cost) {
			this.level = 0;
			this.maxLevel = maxLevel;
			this.cInc = cInc;
			this.baseCost = cost;
			this.nowCost = cost;
			this.totalCost = cost;
			this.buyAmo = 1;
		}
		
		
		this.buildings = [new upgrade(999999, nd(2), nd(20)), new upgrade(999999, nd(2), nd(1000)),
						  new upgrade(999999, nd(2), nd(100000)), new upgrade(999999, nd(2), nd(1e7)),
						  new upgrade(999999, nd(2), nd(1e10)), new upgrade(999999, nd(2), nd(1e15)),
						  new upgrade(999999, nd(2), nd(1e20)), new upgrade(999999, nd(2), nd(1e25))]
		
		
		this.upgrades = [new upgrade(999999, nd(1.5), nd(10)), new upgrade(950, nd(2), nd(200)),
						 new upgrade(99, nd(2.5), nd(1000)), new upgrade(100, nd(1.5), nd(10000)),
						 new upgrade(999999, nd(5), nd(100000)), new upgrade(100, nd(10), nd(1000000)),
						 new upgrade(999999, nd(3), nd(10000000)), new upgrade(999999, nd(3), nd(10000000))]
		
		
		this.passiveGemTick = 0;
		
		
		this.gemCh = 5 + this.upgrades[1].level*0.1; //in percent
		this.maxGemUse = 1 + this.upgrades[2].level;
		this.doubleGC = this.upgrades[3].level;
		this.maxCraftPower = nd(1.5 + this.upgrades[4].level*0.02);
		this.multsExp = nd(1 + this.upgrades[5].level*0.01);
		this.passiveMoney = nd(this.upgrades[6].level);
		this.passiveGems = nd(this.upgrades[7].level);
		
		
		
		this.gain1 = [nd(1), nd(1)];
		this.gain2 = [nd(1), nd(1)];
		
		this.soundIs = true;
		
		
		
		window.setInterval(saving, 10000);
		
		var speedUPtime_ib = 0;
		var sActive = false;
		var timeMult = 1;
		
		var d = new Date();
		var timeStart_ib = d.getTime()/1000;
		var time1_ib = d.getTime()/1000;
		var time2_ib = d.getTime()/1000;
		
		
		function loading() {
			if (localStorage.getItem('PII_moneyAll')) {
				this.exportRoot.moneyAll = nd(JSON.parse(localStorage.getItem('PII_moneyAll')));
				this.exportRoot.money = nd(JSON.parse(localStorage.getItem('PII_money')));
				this.exportRoot.gems = nd(JSON.parse(localStorage.getItem('PII_gems')));
				this.exportRoot.bubbles = nd(JSON.parse(localStorage.getItem('PII_bubbles')));
				this.exportRoot.level = JSON.parse(localStorage.getItem('PII_level'));
				this.exportRoot.maxLevel = JSON.parse(localStorage.getItem('PII_maxLevel'));
				this.exportRoot.autoLevel = JSON.parse(localStorage.getItem('PII_autoLevel'));
				this.exportRoot.mults = JSON.parse(localStorage.getItem('PII_mults'));
				this.exportRoot.gemsCraft = JSON.parse(localStorage.getItem('PII_gemsCraft'));
				this.exportRoot.buyAmoType = JSON.parse(localStorage.getItem('PII_buyAmoType'));
				this.exportRoot.buTab = JSON.parse(localStorage.getItem('PII_buTab'));
				this.exportRoot.buPage = JSON.parse(localStorage.getItem('PII_buPage'));
				this.exportRoot.buildings = JSON.parse(localStorage.getItem('PII_buildings'));
				this.exportRoot.upgrades = JSON.parse(localStorage.getItem('PII_upgrades'));
				this.exportRoot.passiveGemTick = JSON.parse(localStorage.getItem('PII_passiveGemTick'));
			
				time1_ib = JSON.parse(localStorage.getItem('PII_time1_ib'));
				speedUPtime_ib = JSON.parse(localStorage.getItem('PII_speedUPtime_ib'));
				
				for (var i = 0 ; i < 10 ; ++i) {
					this.exportRoot.mults[i] = nd(this.exportRoot.mults[i]);
				}
			
				for (var i = 0 ; i < 8 ; ++i) {
					this.exportRoot.buildings[i].cInc = nd(this.exportRoot.buildings[i].cInc);
					this.exportRoot.buildings[i].baseCost = nd(this.exportRoot.buildings[i].baseCost);
					this.exportRoot.buildings[i].nowCost = nd(this.exportRoot.buildings[i].nowCost);
					this.exportRoot.buildings[i].totalCost = nd(this.exportRoot.buildings[i].totalCost);
					
					this.exportRoot.upgrades[i].cInc = nd(this.exportRoot.upgrades[i].cInc);
					this.exportRoot.upgrades[i].baseCost = nd(this.exportRoot.upgrades[i].baseCost);
					this.exportRoot.upgrades[i].nowCost = nd(this.exportRoot.upgrades[i].nowCost);
					this.exportRoot.upgrades[i].totalCost = nd(this.exportRoot.upgrades[i].totalCost);
				}
			}
			if (localStorage.getItem('PII_clickPower')) {
				this.exportRoot.clickPower = nd(JSON.parse(localStorage.getItem('PII_clickPower')));
			}
			if (localStorage.getItem('PII_gain1')) {
				this.exportRoot.gain1 = JSON.parse(localStorage.getItem('PII_gain1'));
				this.exportRoot.gain2 = JSON.parse(localStorage.getItem('PII_gain2'));
				
				this.exportRoot.gain1[0] = nd(this.exportRoot.gain1[0]);
				this.exportRoot.gain1[1] = nd(this.exportRoot.gain1[1]);
				this.exportRoot.gain2[0] = nd(this.exportRoot.gain2[0]);
				this.exportRoot.gain2[1] = nd(this.exportRoot.gain2[1]);
			}
			if (localStorage.getItem('PII_soundIs')) {
				this.exportRoot.soundIs = nd(JSON.parse(localStorage.getItem('PII_soundIs')));
			}
			if (localStorage.getItem('PII_tutor')) {
				this.exportRoot.tutor = JSON.parse(localStorage.getItem('PII_tutor'));
			}
		}
		
		loading();
		
		var bonus = time2_ib - time1_ib;
		var bonus = bonus/15;
		var bonus = Math.pow(bonus, 0.7);
		
		if (bonus >= 2) {
			speedUPtime_ib += bonus;
		}
		if (speedUPtime_ib > 1800) {
			speedUPtime_ib = 1800;
		}
		
		function saving() {
			localStorage.setItem('PII_moneyAll', JSON.stringify(this.exportRoot.moneyAll));
			localStorage.setItem('PII_money', JSON.stringify(this.exportRoot.money));
			localStorage.setItem('PII_gems', JSON.stringify(this.exportRoot.gems));
			localStorage.setItem('PII_bubbles', JSON.stringify(this.exportRoot.bubbles));
			localStorage.setItem('PII_level', JSON.stringify(this.exportRoot.level));
			localStorage.setItem('PII_maxLevel', JSON.stringify(this.exportRoot.maxLevel));
			localStorage.setItem('PII_autoLevel', JSON.stringify(this.exportRoot.autoLevel));
			localStorage.setItem('PII_mults', JSON.stringify(this.exportRoot.mults));
			localStorage.setItem('PII_gemsCraft', JSON.stringify(this.exportRoot.gemsCraft));
			localStorage.setItem('PII_buyAmoType', JSON.stringify(this.exportRoot.buyAmoType));
			localStorage.setItem('PII_buTab', JSON.stringify(this.exportRoot.buTab));
			localStorage.setItem('PII_buPage', JSON.stringify(this.exportRoot.buPage));
			localStorage.setItem('PII_buildings', JSON.stringify(this.exportRoot.buildings));
			localStorage.setItem('PII_upgrades', JSON.stringify(this.exportRoot.upgrades));
			localStorage.setItem('PII_passiveGemTick', JSON.stringify(this.exportRoot.passiveGemTick));
			localStorage.setItem('PII_clickPower', JSON.stringify(this.exportRoot.clickPower));
			localStorage.setItem('PII_gain1', JSON.stringify(this.exportRoot.gain1));
			localStorage.setItem('PII_gain2', JSON.stringify(this.exportRoot.gain2));
			localStorage.setItem('PII_soundIs', JSON.stringify(this.exportRoot.soundIs));
			localStorage.setItem('PII_time1_ib', JSON.stringify(time1_ib));
			localStorage.setItem('PII_speedUPtime_ib', JSON.stringify(speedUPtime_ib));
			localStorage.setItem('PII_tutor', JSON.stringify(this.exportRoot.tutor));
			console.log("GAME SAVED!");
		}
		
				
		
		
		this.resNow = 0;
		
		var add = 0;
		var num = Math.floor(Math.random()*10);
		
		if (this.level%20 == 0) {
			add = 30;
			this.popAmount = 36;	
		}
		else if (this.level%10 == 0) {
			add = 20;
			this.popAmount = 25;	
		}
		else if (this.level%5 == 0) {
			add = 10;
			this.popAmount = 16;	
		}
		else {
			add = 0;
			this.popAmount = 9;	
		}
		
		this.popIt.gotoAndStop(num+add);
		this.popIt.color = num%10;
		
		
		
		this.targets = [findRandom(),findRandom(),findRandom(),findRandom(),findFirst(),findRandom(),findRandom(),0];
		this.ticks = [0,0,0,0,0,0,0,0];
		
		this.maxTicks = [1, 2, 0.5, 4, 0.3, 3, 3, 1];
		this.powers = [nd(0.5), nd(1), nd(0.25), nd(1), nd(0.2), nd(1), nd(0.3), nd(0.05)];
		
		
		this.changes = [false,false,false,false,false,false,false,false];
		
		
		
		this.craftedTxt.text = "";
		this.clicksPrestige = 5;
		
		this.addEventListener("tick", main.bind(this));
		function main() {
			
			time1_ib = d.getTime()/1000;
			
			this.moneyTxt.text = ": " + format(this.money);
			this.bubbleTxt.text = ": " + format(this.bubbles);
			this.gemTxt.text = ": " + format(this.gems);
			
			this.tick += 1/30*this.timeMult;
			
			this.money = this.money.plus(this.passiveMoney.times(this.clickRewardTotal).div(30).times(this.timeMult));
			
			this.passiveGemTick += this.passiveGems/30/60*this.timeMult;
			
			if (this.soundIs) {
				this.soundSet.gotoAndStop(0);
			}
			else {
				this.soundSet.gotoAndStop(1);
			}
			
			
			if (this.passiveGemTick >= 1) {
				this.passiveGemTick%= 1;
				this.gems = this.gems.plus(1);
			}
			
			
			if (this.resNow > this.respawn/10) {
				this.popIt.alpha = ((this.resNow-this.respawn/10) / this.respawn*0.9);
				this.resNow -= 1/30*this.timeMult;
			}
		
			if (this.resNow < this.respawn/10) {
				this.popIt.alpha = 1 - (this.resNow/(this.respawn/10));
				this.resNow -= 1/30*this.timeMult;
			}
		
			if (this.resNow <= 0) {
				this.resNow = 0;
				this.popIt.alpha = 1;
			}
			
			if (allDead()) {
				if (this.resNow == 0) {
					this.resNow = this.respawn;
					this.bubbles = this.bubbles.plus(this.bubblesReward);
					this.mults[this.popIt.color] = this.mults[this.popIt.color].plus(this.multReward);
				}
			
				if (this.resNow < this.respawn/10) {
					changeLoc(1);
				}
			}
		
		
			this.levNow.text = "等级: " + format(nd(this.level));
			
			if (this.maxLevel < 50) {
				this.prestigeW.visible = false;
			}
			else {
				this.prestigeW.visible = true;
			}
		
		
			this.gain1[1] = Decimal.max(this.gain1[0], nd(1.01).pow(this.maxLevel).times(nd(2).pow(Math.min(10, Math.floor(this.maxLevel/100)))));
			this.gain2[1] = Decimal.max(this.gain2[0], nd(1.02).pow(this.maxLevel).pow(2).times(nd(2).pow(Math.min(10, Math.floor(this.maxLevel/100)))));
		
			this.prestigeW.gain1.text = "增益乘数: x" + format(this.gain1[0]) + " -> " + format(this.gain1[1]);
			this.prestigeW.gain2.text = "增益: x" + format(this.gain2[0]) + " -> " + format(this.gain2[1]);
		
			this.prestigeW.gain3.text = "点击 " + Math.round(this.clicksPrestige) + " 次以声望";
		
		
		
			this.clickReward = this.mults[0].times(this.mults[1]).times(this.mults[2]).times(this.mults[3]).times(this.mults[4]).times(this.mults[5]).times(this.mults[6]).times(this.mults[7]).times(this.mults[8]).times(this.mults[9]).pow(this.multsExp);
			this.clickRewardTotal = this.clickReward.times(this.clickPower);
		
		
			this.bubblesReward = nd(1).times(nd(1.15).pow(this.level)).times(this.popAmount).times(this.gain2[0]).round();
		
			if (this.level != this.maxLevel) {
				this.multReward = nd(0);
			}
			else {
				this.multReward = nd(0.01).times(this.popAmount).times(this.gain1[0]);
			}
		
		
			this.clickRewTxt.text = "/点击: " + format(this.clickRewardTotal);
			this.bubbleRewTxt.text = ": " + format(this.bubblesReward);
		
			if (this.popIt.color == 0) {
				this.multRewTxt.text = "白色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#FFFFFF";
			}
			else if (this.popIt.color == 1) {
				this.multRewTxt.text = "红色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#FF3333";
			}
			else if (this.popIt.color == 2) {
				this.multRewTxt.text = "橘色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#FF9933";
			}
			else if (this.popIt.color == 3) {
				this.multRewTxt.text = "黄色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#FFFF66";
			}
			else if (this.popIt.color == 4) {
				this.multRewTxt.text = "绿色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#71FFA0";
			}
			else if (this.popIt.color == 5) {
				this.multRewTxt.text = "青色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#33FFFF";
			}
			else if (this.popIt.color == 6) {
				this.multRewTxt.text = "蓝色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#3399CC";
			}
			else if (this.popIt.color == 7) {
				this.multRewTxt.text = "紫色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#B31AFF";
			}
			else if (this.popIt.color == 8) {
				this.multRewTxt.text = "粉色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#CC66CC";
			}
			else if (this.popIt.color == 9) {
				this.multRewTxt.text = "黑色乘数 +" + format(this.multReward);
				this.multRewTxt.color = "#000000";
			}
		
			
			this.multTotalTxt.text = "x" + format(this.clickReward) + " 到 $ 增益";
			this.mult1t.text = format(this.mults[0]);
			this.mult2t.text = format(this.mults[1]);
			this.mult3t.text = format(this.mults[2]);
			this.mult4t.text = format(this.mults[3]);
			this.mult5t.text = format(this.mults[4]);
			this.mult6t.text = format(this.mults[5]);
			this.mult7t.text = format(this.mults[6]);
			this.mult8t.text = format(this.mults[7]);
			this.mult9t.text = format(this.mults[8]);
			this.mult10t.text = format(this.mults[9]);
		
			if (this.autoLevel) {
				this.autoIs.gotoAndStop(1);
			}
			else {
				this.autoIs.gotoAndStop(0);
			}
		
		
			this.gemChTxt.text = "获得宝石几率: " + Math.round(this.gemCh*10)/10 + "%";
			this.craftPowFull1 = this.craftPow.times(nd(1 + (0.05 * (this.gemsCraft-1))));
			this.craftPowFull2 = this.craftPow.times(this.maxCraftPower).times(nd(1 + (0.05 * (this.gemsCraft-1))));
		
			this.cpTxt.text = format(this.craftPowFull1) + " - " + format(this.craftPowFull2);
			
			this.powerTxt.text = "力量: " + format(this.clickPower);
		
		
			this.gemUseTxt.text = "使用宝石: " + format(nd(this.gemsCraft));
		
		
			for (var i = 0 ; i < 8 ; ++i) {
				this.upgrades[i].nowCost = this.upgrades[i].baseCost.times(this.upgrades[i].cInc.pow(this.upgrades[i].level));
				this.upgrades[i].totalCost = (Decimal.pow(this.upgrades[i].cInc, this.upgrades[i].buyAmo).sub(1)).div((this.upgrades[i].cInc).sub(1)).times(this.upgrades[i].nowCost);
			}
		
		
			for (var i = 0 ; i < 8 ; ++i) {
				this.buildings[i].nowCost = this.buildings[i].baseCost.times(this.buildings[i].cInc.pow(this.buildings[i].level));
				this.buildings[i].totalCost = (Decimal.pow(this.buildings[i].cInc, this.buildings[i].buyAmo).sub(1)).div((this.buildings[i].cInc).sub(1)).times(this.buildings[i].nowCost);
			}
		
			this.maxTicks[0] = Math.max(0.5, 0.98 ** (this.buildings[0].level - 1));
			this.powers[0] = nd(0.48 + (0.02*this.buildings[0].level))
			
			this.maxTicks0next = Math.max(0.5, 0.98 ** (this.buildings[0].level - 1 + this.buildings[0].buyAmo));
			this.powers0next = nd(0.48 + (0.02*(this.buildings[0].level + this.buildings[0].buyAmo)));
		
		
			this.maxTicks[1] = Math.max(1, 2 * (0.98 ** (this.buildings[1].level - 1)));
			this.powers[1] = nd(0.95 + (0.05*this.buildings[1].level))
			
			this.maxTicks1next = Math.max(1, 2 * (0.98 ** (this.buildings[1].level - 1 + this.buildings[1].buyAmo)));
			this.powers1next = nd(0.95 + (0.05*(this.buildings[1].level + this.buildings[1].buyAmo)));
		
		
			this.maxTicks[2] = Math.max(0.25, 0.5 * (0.98 ** (this.buildings[2].level - 1)));
			this.powers[2] = nd(0.24 + (0.01*this.buildings[2].level))
			
			this.maxTicks2next = Math.max(0.25, 0.5 * (0.98 ** (this.buildings[2].level - 1 + this.buildings[2].buyAmo)));
			this.powers2next = nd(0.24 + (0.01*(this.buildings[2].level + this.buildings[2].buyAmo)));
		
			this.maxTicks[3] = Math.max(2, 4 * (0.98 ** (this.buildings[3].level - 1)));
			this.powers[3] = nd(0.95 + (0.05*this.buildings[3].level))
			
			this.maxTicks3next = Math.max(2, 4 * (0.98 ** (this.buildings[3].level - 1 + this.buildings[3].buyAmo)));
			this.powers3next = nd(0.95 + (0.05*(this.buildings[3].level + this.buildings[3].buyAmo)));
		
			this.maxTicks[4] = Math.max(0.15, 0.3 * (0.98 ** (this.buildings[4].level - 1)));
			this.powers[4] = nd(0.19 + (0.01*this.buildings[4].level))
			
			this.maxTicks4next = Math.max(0.15, 0.3 * (0.98 ** (this.buildings[4].level - 1 + this.buildings[4].buyAmo)));
			this.powers4next = nd(0.19 + (0.01*(this.buildings[4].level + this.buildings[4].buyAmo)));
		
			this.maxTicks[5] = Math.max(1, 3 * (0.98 ** (this.buildings[5].level - 1)));
			this.powers[5] = nd(0.95 + (0.05*this.buildings[5].level))
			
			this.maxTicks5next = Math.max(1, 3 * (0.98 ** (this.buildings[5].level - 1 + this.buildings[5].buyAmo)));
			this.powers5next = nd(0.95 + (0.05*(this.buildings[5].level + this.buildings[5].buyAmo)));
		
			this.maxTicks[6] = Math.max(1, 3 * (0.98 ** (this.buildings[6].level - 1)));
			this.powers[6] = nd(0.3 + (0.03*this.buildings[6].level))
			
			this.maxTicks6next = Math.max(1, 3 * (0.98 ** (this.buildings[6].level - 1 + this.buildings[6].buyAmo)));
			this.powers6next = nd(0.3 + (0.03*(this.buildings[6].level + this.buildings[6].buyAmo)));
		
			this.maxTicks[7] = 1;
			this.powers[7] = nd(0.05 + (0.01*this.buildings[7].level))
			
			this.maxTicks7next = 1;
			this.powers7next = nd(0.05 + (0.01*(this.buildings[7].level + this.buildings[7].buyAmo)));
		
		
		
			this.craftPow = nd(1.2).pow(this.upgrades[0].level)
			this.gemCh = 5 + this.upgrades[1].level*0.1; //in percent
			this.maxGemUse = 1 + this.upgrades[2].level;
			this.doubleGC = this.upgrades[3].level;
			this.maxCraftPower = nd(1.5 + this.upgrades[4].level*0.02);
			this.multsExp = nd(1 + this.upgrades[5].level*0.01);
			this.passiveMoney = nd(this.upgrades[6].level);
			this.passiveGems = nd(this.upgrades[7].level);
			
			
			this.craftPow_next = nd(1.2).pow(this.upgrades[0].level + this.upgrades[0].buyAmo);
			this.gemCh_next = 5 + (this.upgrades[1].level+this.upgrades[1].buyAmo)*0.1; //in percent
			this.maxGemUse_next = 1 + (this.upgrades[2].level+this.upgrades[2].buyAmo);
			this.doubleGC_next = this.upgrades[3].level+this.upgrades[3].buyAmo;
			this.maxCraftPower_next = nd(1.5 + (this.upgrades[4].level+this.upgrades[4].buyAmo)*0.02);
			this.multsExp_next = nd(1 + (this.upgrades[5].level+this.upgrades[5].buyAmo)*0.01);
			this.passiveMoney_next = nd(this.upgrades[6].level+this.upgrades[6].buyAmo);
			this.passiveGems_next = nd(this.upgrades[7].level+this.upgrades[7].buyAmo);
		
		
		
		
		
		
		
			if (this.buTab == 1) {
				this.bupgrades.set1.gotoAndStop(1);
				this.bupgrades.set2.gotoAndStop(0);
				
				this.bupgrades.b1.visible = true;
				if (this.buPage == 1) {
					this.upBtn.visible = false;
					this.downBtn.visible = true;
					
					this.bupgrades.b1.namee.text = "鼠标";
					
					
					if (this.buildings[0].level > 0) {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = Math.round(this.maxTicks[0]*100)/100 + "秒 / " + format(this.powers[0].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks0next*100)/100 + "秒 / " + format(this.powers0next.times(100)) + "%";
						this.bupgrades.b1.cost.text = format(this.buildings[0].totalCost);
						this.bupgrades.b1.cost.color = "#FFFF99";
						this.bupgrades.b1.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = "否"
							+ " -> " + Math.round(this.maxTicks0next*100)/100 + "秒 / " + format(this.powers0next.times(100)) + "%";
						this.bupgrades.b1.cost.text = format(this.buildings[0].totalCost);
						this.bupgrades.b1.cost.color = "#FFFF99";
						this.bupgrades.b1.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[0].totalCost) && this.buildings[0].level < this.buildings[0].maxLevel) {
						this.bupgrades.b1.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.frameT.gotoAndStop(0);
					}
					
				
				
				
					this.bupgrades.b2.namee.text = "石头";
					
					
					if (this.buildings[1].level > 0) {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = Math.round(this.maxTicks[1]*100)/100 + "秒 / " + format(this.powers[1].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks1next*100)/100 + "秒 / " + format(this.powers1next.times(100)) + "%";
						this.bupgrades.b2.cost.text = format(this.buildings[1].totalCost);
						this.bupgrades.b2.cost.color = "#FFFF99";
						this.bupgrades.b2.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = "否"
							+ " -> " + Math.round(this.maxTicks1next*100)/100 + "秒 / " + format(this.powers1next.times(100)) + "%";
						this.bupgrades.b2.cost.text = format(this.buildings[1].totalCost);
						this.bupgrades.b2.cost.color = "#FFFF99";
						this.bupgrades.b2.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[1].totalCost) && this.buildings[1].level < this.buildings[1].maxLevel) {
						this.bupgrades.b2.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.frameT.gotoAndStop(0);
					}
				
				
				
				
					this.bupgrades.b3.namee.text = "针";
					
					
					if (this.buildings[2].level > 0) {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = Math.round(this.maxTicks[2]*100)/100 + "秒 / " + format(this.powers[2].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks2next*100)/100 + "秒 / " + format(this.powers2next.times(100)) + "%";
						this.bupgrades.b3.cost.text = format(this.buildings[2].totalCost);
						this.bupgrades.b3.cost.color = "#FFFF99";
						this.bupgrades.b3.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = "否"
							+ " -> " + Math.round(this.maxTicks2next*100)/100 + "秒 / " + format(this.powers2next.times(100)) + "%";
						this.bupgrades.b3.cost.text = format(this.buildings[2].totalCost);
						this.bupgrades.b3.cost.color = "#FFFF99";
						this.bupgrades.b3.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[2].totalCost) && this.buildings[2].level < this.buildings[2].maxLevel) {
						this.bupgrades.b3.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.frameT.gotoAndStop(0);
					}
				
				
				
				
					this.bupgrades.b4.namee.text = "锤子";
					
					
					if (this.buildings[3].level > 0) {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = Math.round(this.maxTicks[3]*100)/100 + "秒 / " + format(this.powers[3].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks3next*100)/100 + "秒 / " + format(this.powers3next.times(100)) + "%";
						this.bupgrades.b4.cost.text = format(this.buildings[3].totalCost);
						this.bupgrades.b4.cost.color = "#FFFF99";
						this.bupgrades.b4.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = "否"
							+ " -> " + Math.round(this.maxTicks3next*100)/100 + "秒 / " + format(this.powers3next.times(100)) + "%";
						this.bupgrades.b4.cost.text = format(this.buildings[3].totalCost);
						this.bupgrades.b4.cost.color = "#FFFF99";
						this.bupgrades.b4.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[3].totalCost) && this.buildings[3].level < this.buildings[3].maxLevel) {
						this.bupgrades.b4.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.frameT.gotoAndStop(0);
					}
				
				}
				else {
					this.upBtn.visible = true;
					this.downBtn.visible = false;
					
					this.bupgrades.b1.namee.text = "光标";
					
					
					if (this.buildings[4].level > 0) {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = Math.round(this.maxTicks[4]*100)/100 + "秒 / " + format(this.powers[4].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks4next*100)/100 + "秒 / " + format(this.powers4next.times(100)) + "%";
						this.bupgrades.b1.cost.text = format(this.buildings[4].totalCost);
						this.bupgrades.b1.cost.color = "#FFFF99";
						this.bupgrades.b1.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = "否"
							+ " -> " + Math.round(this.maxTicks4next*100)/100 + "秒 / " + format(this.powers4next.times(100)) + "%";
						this.bupgrades.b1.cost.text = format(this.buildings[4].totalCost);
						this.bupgrades.b1.cost.color = "#FFFF99";
						this.bupgrades.b1.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[4].totalCost) && this.buildings[4].level < this.buildings[4].maxLevel) {
						this.bupgrades.b1.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.frameT.gotoAndStop(0);
					}
					
				
				
				
					this.bupgrades.b2.namee.text = "蛇";
					
					
					if (this.buildings[5].level > 0) {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = Math.round(this.maxTicks[5]*100)/100 + "秒 / " + format(this.powers[5].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks5next*100)/100 + "秒 / " + format(this.powers5next.times(100)) + "%";
						this.bupgrades.b2.cost.text = format(this.buildings[5].totalCost);
						this.bupgrades.b2.cost.color = "#FFFF99";
						this.bupgrades.b2.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = "否"
							+ " -> " + Math.round(this.maxTicks5next*100)/100 + "秒 / " + format(this.powers5next.times(100)) + "%";
						this.bupgrades.b2.cost.text = format(this.buildings[5].totalCost);
						this.bupgrades.b2.cost.color = "#FFFF99";
						this.bupgrades.b2.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[5].totalCost) && this.buildings[5].level < this.buildings[5].maxLevel) {
						this.bupgrades.b2.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.frameT.gotoAndStop(0);
					}
				
				
				
				
					this.bupgrades.b3.namee.text = "剑";
					
					
					if (this.buildings[6].level > 0) {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = Math.round(this.maxTicks[6]*100)/100 + "秒 / " + format(this.powers[6].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks6next*100)/100 + "秒 / " + format(this.powers6next.times(100)) + "%";
						this.bupgrades.b3.cost.text = format(this.buildings[6].totalCost);
						this.bupgrades.b3.cost.color = "#FFFF99";
						this.bupgrades.b3.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = "否"
							+ " -> " + Math.round(this.maxTicks6next*100)/100 + "秒 / " + format(this.powers6next.times(100)) + "%";
						this.bupgrades.b3.cost.text = format(this.buildings[6].totalCost);
						this.bupgrades.b3.cost.color = "#FFFF99";
						this.bupgrades.b3.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[6].totalCost) && this.buildings[6].level < this.buildings[6].maxLevel) {
						this.bupgrades.b3.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.frameT.gotoAndStop(0);
					}
				
				
				
				
					this.bupgrades.b4.namee.text = "被动伤害";
					
					
					if (this.buildings[7].level > 0) {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = Math.round(this.maxTicks[7]*100)/100 + "秒 / " + format(this.powers[7].times(100)) + "%"
							+ " -> " + Math.round(this.maxTicks7next*100)/100 + "秒 / " + format(this.powers7next.times(100)) + "%";
						this.bupgrades.b4.cost.text = format(this.buildings[7].totalCost);
						this.bupgrades.b4.cost.color = "#FFFF99";
						this.bupgrades.b4.currency.gotoAndStop(0);
					}
					else {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = "否"
							+ " -> " + Math.round(this.maxTicks7next*100)/100 + "秒 / " + format(this.powers7next.times(100)) + "%";
						this.bupgrades.b4.cost.text = format(this.buildings[7].totalCost);
						this.bupgrades.b4.cost.color = "#FFFF99";
						this.bupgrades.b4.currency.gotoAndStop(0);
					}
					
					
					
					if (this.money.gte(this.buildings[7].totalCost) && this.buildings[7].level < this.buildings[7].maxLevel) {
						this.bupgrades.b4.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.frameT.gotoAndStop(0);
					}
				}
				
			}
			else {
				this.bupgrades.set1.gotoAndStop(0);
				this.bupgrades.set2.gotoAndStop(1);
				
				this.bupgrades.b1.visible = true;
				if (this.buPage == 1) {
					this.upBtn.visible = false;
					this.downBtn.visible = true;
					
					this.bupgrades.b1.namee.text = "制作力量";
					
					if (this.upgrades[0].level < this.upgrades[0].maxLevel) {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = "x"+format(this.craftPow) + " -> x"+format(this.craftPow_next);
						this.bupgrades.b1.cost.text = format(this.upgrades[0].totalCost);
						this.bupgrades.b1.cost.color = "#FF9999";
						this.bupgrades.b1.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.cost.visible = false;
						this.bupgrades.b1.currency.visible = false;
						this.bupgrades.b1.change.text = "x"+format(this.craftPow) + " (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[0].totalCost) && this.upgrades[0].level < this.upgrades[0].maxLevel) {
						this.bupgrades.b1.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.frameT.gotoAndStop(0);
					}
				
					
				
				
				
					this.bupgrades.b2.namee.text = "获得宝石的几率";
					
					if (this.upgrades[1].level < this.upgrades[1].maxLevel) {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = format(nd(this.gemCh)) + "% -> "+format(nd(this.gemCh_next)) + "%";
						this.bupgrades.b2.cost.text = format(this.upgrades[1].totalCost);
						this.bupgrades.b2.cost.color = "#FF9999";
						this.bupgrades.b2.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.cost.visible = false;
						this.bupgrades.b2.currency.visible = false;
						this.bupgrades.b2.change.text = format(nd(this.gemCh)) + "% (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[1].totalCost) && this.upgrades[1].level < this.upgrades[1].maxLevel) {
						this.bupgrades.b2.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.frameT.gotoAndStop(0);
					}
				
				
				
					this.bupgrades.b3.namee.text = "最大宝石使用数量";
					
					if (this.upgrades[2].level < this.upgrades[2].maxLevel) {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = format(nd(this.maxGemUse)) + " -> "+format(nd(this.maxGemUse_next));
						this.bupgrades.b3.cost.text = format(this.upgrades[2].totalCost);
						this.bupgrades.b3.cost.color = "#FF9999";
						this.bupgrades.b3.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.cost.visible = false;
						this.bupgrades.b3.currency.visible = false;
						this.bupgrades.b3.change.text = format(nd(this.maxGemUse)) + " (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[2].totalCost) && this.upgrades[2].level < this.upgrades[2].maxLevel) {
						this.bupgrades.b3.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.frameT.gotoAndStop(0);
					}
					
				
				
					this.bupgrades.b4.namee.text = "双倍宝石的几率";
					
					if (this.upgrades[3].level < this.upgrades[3].maxLevel) {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = format(nd(this.doubleGC)) + "% -> "+format(nd(this.doubleGC_next)) + "%";
						this.bupgrades.b4.cost.text = format(this.upgrades[3].totalCost);
						this.bupgrades.b4.cost.color = "#FF9999";
						this.bupgrades.b4.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.cost.visible = false;
						this.bupgrades.b4.currency.visible = false;
						this.bupgrades.b4.change.text = format(nd(this.doubleGC)) + "% (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[3].totalCost) && this.upgrades[3].level < this.upgrades[3].maxLevel) {
						this.bupgrades.b4.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.frameT.gotoAndStop(0);
					}
				
				}
				else {
					this.upBtn.visible = true;
					this.downBtn.visible = false;
					
					this.bupgrades.b1.namee.text = "最大制作力量";
					
					if (this.upgrades[4].level < this.upgrades[4].maxLevel) {
						this.bupgrades.b1.cost.visible = true;
						this.bupgrades.b1.currency.visible = true;
						
						this.bupgrades.b1.change.text = "x"+format(this.maxCraftPower) + " -> x"+format(this.maxCraftPower_next);
						this.bupgrades.b1.cost.text = format(this.upgrades[4].totalCost);
						this.bupgrades.b1.cost.color = "#FF9999";
						this.bupgrades.b1.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.cost.visible = false;
						this.bupgrades.b1.currency.visible = false;
						this.bupgrades.b1.change.text = "x"+format(this.maxCraftPower) + " (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[4].totalCost) && this.upgrades[4].level < this.upgrades[4].maxLevel) {
						this.bupgrades.b1.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b1.frameT.gotoAndStop(0);
					}
				
					
				
				
				
					this.bupgrades.b2.namee.text = "乘数指数";
					
					if (this.upgrades[5].level < this.upgrades[5].maxLevel) {
						this.bupgrades.b2.cost.visible = true;
						this.bupgrades.b2.currency.visible = true;
						
						this.bupgrades.b2.change.text = "^" + format(this.multsExp) + " -> ^"+format(this.multsExp_next);
						this.bupgrades.b2.cost.text = format(this.upgrades[5].totalCost);
						this.bupgrades.b2.cost.color = "#FF9999";
						this.bupgrades.b2.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.cost.visible = false;
						this.bupgrades.b2.currency.visible = false;
						this.bupgrades.b2.change.text = "^" + format(this.multsExp) + " (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[5].totalCost) && this.upgrades[5].level < this.upgrades[5].maxLevel) {
						this.bupgrades.b2.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b2.frameT.gotoAndStop(0);
					}
				
				
				
					this.bupgrades.b3.namee.text = "被动金钱";
					
					if (this.upgrades[6].level < this.upgrades[6].maxLevel) {
						this.bupgrades.b3.cost.visible = true;
						this.bupgrades.b3.currency.visible = true;
						
						this.bupgrades.b3.change.text = format(this.passiveMoney.times(100)) + "%/秒 -> "+format(this.passiveMoney_next.times(100)) + "%/秒";
						this.bupgrades.b3.cost.text = format(this.upgrades[6].totalCost);
						this.bupgrades.b3.cost.color = "#FF9999";
						this.bupgrades.b3.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.cost.visible = false;
						this.bupgrades.b3.currency.visible = false;
						this.bupgrades.b3.change.text = format(this.passiveMoney.times(100)) + "%/秒 (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[6].totalCost) && this.upgrades[6].level < this.upgrades[6].maxLevel) {
						this.bupgrades.b3.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b3.frameT.gotoAndStop(0);
					}
					
				
				
					this.bupgrades.b4.namee.text = "被动宝石";
					
					if (this.upgrades[7].level < this.upgrades[7].maxLevel) {
						this.bupgrades.b4.cost.visible = true;
						this.bupgrades.b4.currency.visible = true;
						
						this.bupgrades.b4.change.text = format(this.passiveGems) + "/分钟 -> "+format(this.passiveGems_next) + "/分钟";
						this.bupgrades.b4.cost.text = format(this.upgrades[7].totalCost);
						this.bupgrades.b4.cost.color = "#FF9999";
						this.bupgrades.b4.currency.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.cost.visible = false;
						this.bupgrades.b4.currency.visible = false;
						this.bupgrades.b4.change.text = format(this.passiveGems) + "/分钟 (最大)";
					}
					
					if (this.bubbles.gte(this.upgrades[7].totalCost) && this.upgrades[7].level < this.upgrades[7].maxLevel) {
						this.bupgrades.b4.frameT.gotoAndStop(1);
					}
					else {
						this.bupgrades.b4.frameT.gotoAndStop(0);
					}
				}
			}
		
			this.buy1.txt.text = "1";
			this.buy10.txt.text = "10%";
			this.buy50.txt.text = "50%";
			this.buyMax.txt.text = "最大";
		
			if (this.buyAmoType == 1) {
				this.buy1.gotoAndStop(1);
				this.buy10.gotoAndStop(0);
				this.buy50.gotoAndStop(0);
				this.buyMax.gotoAndStop(0);
				
				for (var i = 0 ; i < 8 ; ++i) {
					this.buildings[i].buyAmo = 1;
					this.upgrades[i].buyAmo = 1;
				}
				
			}
			else if (this.buyAmoType == 2) {
				this.buy1.gotoAndStop(0);
				this.buy10.gotoAndStop(1);
				this.buy50.gotoAndStop(0);
				this.buyMax.gotoAndStop(0);
				
				for (var i = 0 ; i < 8 ; ++i) {
					this.buildings[i].buyAmo = Decimal.floor(Decimal.log(this.money.div(10).div(this.buildings[i].nowCost).times(this.buildings[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.buildings[i].cInc, nd(2)))).toNumber();
					this.upgrades[i].buyAmo = Decimal.floor(Decimal.log(this.bubbles.div(10).div(this.upgrades[i].nowCost).times(this.upgrades[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.upgrades[i].cInc, nd(2)))).toNumber();
				}
			}
			else if (this.buyAmoType == 3) {
				this.buy1.gotoAndStop(0);
				this.buy10.gotoAndStop(0);
				this.buy50.gotoAndStop(1);
				this.buyMax.gotoAndStop(0);
				
				for (var i = 0 ; i < 8 ; ++i) {
					this.buildings[i].buyAmo = Decimal.floor(Decimal.log(this.money.div(2).div(this.buildings[i].nowCost).times(this.buildings[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.buildings[i].cInc, nd(2)))).toNumber();
					this.upgrades[i].buyAmo = Decimal.floor(Decimal.log(this.bubbles.div(2).div(this.upgrades[i].nowCost).times(this.upgrades[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.upgrades[i].cInc, nd(2)))).toNumber();
				}
			}
			else if (this.buyAmoType == 4) {
				this.buy1.gotoAndStop(0);
				this.buy10.gotoAndStop(0);
				this.buy50.gotoAndStop(0);
				this.buyMax.gotoAndStop(1);
				
				for (var i = 0 ; i < 8 ; ++i) {
					this.buildings[i].buyAmo = Decimal.floor(Decimal.log(this.money.div(this.buildings[i].nowCost).times(this.buildings[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.buildings[i].cInc, nd(2)))).toNumber();
					this.upgrades[i].buyAmo = Decimal.floor(Decimal.log(this.bubbles.div(this.upgrades[i].nowCost).times(this.upgrades[i].cInc.sub(1)).plus(1), nd(2)).div(Decimal.log(this.upgrades[i].cInc, nd(2)))).toNumber();
				}
			}
		
			for (var i = 0 ; i < 8 ; ++i) {
				this.buildings[i].buyAmo = Math.max(this.buildings[i].buyAmo, 1);
				this.upgrades[i].buyAmo = Math.max(this.upgrades[i].buyAmo, 1);
				
				
				this.buildings[i].buyAmo = Math.min(this.buildings[i].buyAmo, this.buildings[i].maxLevel - this.buildings[i].level);
				this.upgrades[i].buyAmo = Math.min(this.upgrades[i].buyAmo, this.upgrades[i].maxLevel - this.upgrades[i].level);
			}
		
		
		
		
			if (this.changes[0]) {
				this.targets[0] = findRandom();
				this.changes[0] = false;
			}
		
			if (this.changes[1]) {
				this.targets[1] = findRandom();
				this.changes[1] = false;
			}
		
			if (this.changes[2]) {
				this.targets[2] = findRandom();
				this.changes[2] = false;
			}
		
			if (this.changes[3]) {
				this.targets[3] = findRandom();
				this.changes[3] = false;
			}
		
			if (this.changes[4]) {
				this.targets[4] = findFirst();
				this.changes[4] = false;
			}
		
			if (this.changes[5]) {
				this.targets[5] = findRandom();
				this.changes[5] = false;
			}
		
			if (this.targets[0] >= this.popAmount) {
				this.targets[0] = findRandom();
			}
		
			if (this.targets[1] >= this.popAmount) {
				this.targets[1] = findRandom();
			}
		
			if (this.targets[2] >= this.popAmount) {
				this.targets[2] = findRandom();
			}
		
			if (this.targets[3] >= this.popAmount) {
				this.targets[3] = findRandom();
			}
		
			if (this.targets[4] >= this.popAmount) {
				this.targets[4] = findFirst();
			}
		
			if (this.targets[5] >= this.popAmount) {
				this.targets[5] = findRandom();
			}
		
		
		
			if (this.buildings[3].level >= 1 && !allDead()) {
				this.ticks[3] += 1/30*this.timeMult;
				
				if (this.ticks[3] >= this.maxTicks[3]) {
					this.ticks[3] %= this.maxTicks[3];
					this.targets[3] = findRandom();
					var hammer;
					hammer = new lib.hammer();
					
					hammer.x = this.popIt.popChildren[this.targets[3]].x + 335;
					hammer.y = this.popIt.popChildren[this.targets[3]].y + 50;
					
					hammer.child = this.targets[3];
					hammer.childLeft = Math.max(0, this.targets[3] - 1);
					hammer.childRight = Math.min(35, this.targets[3] + 1);
					
					hammer.tick = 0;
					hammer.tickMax = 2;
					hammer.popped = false;
					
					
					stage.addChild(hammer);
					hammer.addEventListener('tick', hammerAttack);
				}
			}
		
			if (this.buildings[6].level >= 1 && !allDead()) {
				this.ticks[6] += 1/30*this.timeMult;
				if (this.ticks[6] >= this.maxTicks[6]) {
					this.ticks[6] %= this.maxTicks[6];
					this.targets[6] = findRandom();
					var sword;
					sword = new lib.sword();
					if (this.popAmount == 9) {
						sword.x = 388;
						sword.pops = 3;
						sword.row = Math.floor(this.targets[6]/3);
						sword.targets = [sword.row*3, sword.row*3+1, sword.row*3+2];
						
					}
					if (this.popAmount == 16) {
						sword.x = 328;
						sword.pops = 4;
						sword.row = Math.floor(this.targets[6]/4);
						sword.targets = [sword.row*4, sword.row*4+1, sword.row*4+2, sword.row*4+3];
						
					}
					if (this.popAmount == 25) {
						sword.x = 268;
						sword.pops = 5;
						sword.row = Math.floor(this.targets[6]/5);
						sword.targets = [sword.row*5, sword.row*5+1, sword.row*5+2, sword.row*5+3, sword.row*5+4];
						
					}
					if (this.popAmount == 36) {
						sword.x = 248;
						sword.pops = 6;
						sword.row = Math.floor(this.targets[6]/6);
						sword.targets = [sword.row*6, sword.row*6+1, sword.row*6+2, sword.row*6+3, sword.row*6+4, sword.row*6+5];
						
					}
					sword.y = this.popIt.popChildren[this.targets[6]].y + 115;
					
					sword.tick = 0;
					sword.tickMax = 1;
					sword.popped = false;
					
					stage.addChild(sword);
					sword.addEventListener('tick', swordAttack);
				}
			}
		
		
		
		
		
		
		}
		
		
		function swordAttack(e) {
			var sword = e.currentTarget;
			if (sword.tick < 1) {
				sword.tick += 1/30*this.exportRoot.timeMult;
				if (allDead()) {
					sword.popped = true;
				}
			}
			if (sword.pops == 3) {
				sword.x = 388 + 350*Math.min(1, sword.tick);
				if (sword.tick >= 1 && !sword.popped) {
					for (var i = 0 ; i < 3 ; ++i) {
						var dmger;
						dmger = new lib.swordHit();
						dmger.x = this.exportRoot.popIt.popChildren[sword.targets[i]].x + 410;
						dmger.y = this.exportRoot.popIt.popChildren[sword.targets[i]].y + 115;
						
						dmger.damage = (this.exportRoot.clickPower.times(this.exportRoot.powers[6]));
						dmger.target = sword.targets[i];
						
						dmger.tick = 0;
						dmger.maxTick = 0.3;
						
						if (this.exportRoot.alive[dmger.target]) {
							stage.addChild(dmger);
							dmger.addEventListener('tick', dmgAttack);
						}
					}
					sword.popped = true;
				}
			}
			else if (sword.pops == 4) {
				sword.x = 328 + 470*Math.min(1, sword.tick);
				if (sword.tick >= 1 && !sword.popped) {
					for (var i = 0 ; i < 4 ; ++i) {
						var dmger;
						dmger = new lib.swordHit();
						dmger.x = this.exportRoot.popIt.popChildren[sword.targets[i]].x + 410;
						dmger.y = this.exportRoot.popIt.popChildren[sword.targets[i]].y + 115;
						
						dmger.damage = (this.exportRoot.clickPower.times(this.exportRoot.powers[6]));
						dmger.target = sword.targets[i];
						
						dmger.tick = 0;
						dmger.maxTick = 0.3;
						if (this.exportRoot.alive[dmger.target]) {
							stage.addChild(dmger);
							dmger.addEventListener('tick', dmgAttack);
						}
					}
					sword.popped = true;
				}
			}
			else if (sword.pops == 5) {
				sword.x = 268 + 590*Math.min(1, sword.tick);
				if (sword.tick >= 1 && !sword.popped) {
					for (var i = 0 ; i < 5 ; ++i) {
						var dmger;
						dmger = new lib.swordHit();
						dmger.x = this.exportRoot.popIt.popChildren[sword.targets[i]].x + 410;
						dmger.y = this.exportRoot.popIt.popChildren[sword.targets[i]].y + 115;
						
						dmger.damage = (this.exportRoot.clickPower.times(this.exportRoot.powers[6]));
						dmger.target = sword.targets[i];
						
						dmger.tick = 0;
						dmger.maxTick = 0.3;
						if (this.exportRoot.alive[dmger.target]) {
							stage.addChild(dmger);
							dmger.addEventListener('tick', dmgAttack);
						}
					}
					sword.popped = true;
				}
			}
			else if (sword.pops == 6) {
				sword.x = 248 + 600*Math.min(1, sword.tick);
				if (sword.tick >= 1 && !sword.popped) {
					for (var i = 0 ; i < 6 ; ++i) {
						var dmger;
						dmger = new lib.swordHit();
						dmger.x = this.exportRoot.popIt.popChildren[sword.targets[i]].x + 410;
						dmger.y = this.exportRoot.popIt.popChildren[sword.targets[i]].y + 115;
						
						dmger.damage = (this.exportRoot.clickPower.times(this.exportRoot.powers[6]));
						dmger.target = sword.targets[i];
						
						dmger.tick = 0;
						dmger.maxTick = 0.3;
						if (this.exportRoot.alive[dmger.target]) {
							stage.addChild(dmger);
							dmger.addEventListener('tick', dmgAttack);
						}
					}
					sword.popped = true;
				}
			}
		
			if (sword.popped) {
				sword.visible = false;
				sword.removeEventListener('tick', swordAttack);
				stage.removeChild(sword);
			}
			
			if (clearTime > 0) {
				sword.visible = false;
				sword.removeEventListener('tick', swordAttack);
				stage.removeChild(sword);
			}
		}
		
		
		function dmgAttack(e) {
			var dmg = e.currentTarget;
			if (dmg.tick < dmg.maxTick && this.exportRoot.alive[dmg.target]) {
				dmg.tick += 1/30*this.exportRoot.timeMult;
				dmg.gotoAndStop(Math.floor(dmg.tick/dmg.maxTick*9));
			}
			else {
				if (this.exportRoot.alive[dmg.target]) {
					this.exportRoot.popIt.popChildren[dmg.target].hp =
					this.exportRoot.popIt.popChildren[dmg.target].hp.sub(dmg.damage);
					
					this.exportRoot.money = this.exportRoot.money.plus(dmg.damage.times(this.exportRoot.clickReward));
				}
				dmg.visible = false;
				dmg.removeEventListener('tick', dmgAttack);
				stage.removeChild(dmg);
			}
			if (clearTime > 0) {
				dmg.visible = false;
				dmg.removeEventListener('tick', dmgAttack);
				stage.removeChild(dmg);
			}
			
		}
		
		
		function hammerAttack(e) {
			var hammer = e.currentTarget;
			hammer.tick += 1/30*this.exportRoot.timeMult;
			hammer.gotoAndStop(hammer.tick / hammer.tickMax * 30);
			
			hammer.power = (this.exportRoot.clickPower.times(this.exportRoot.powers[3]));
			
			hammer.x = this.exportRoot.popIt.popChildren[this.exportRoot.targets[3]].x + 335;
			hammer.y = this.exportRoot.popIt.popChildren[this.exportRoot.targets[3]].y + 50;
			
			if (allDead()) {
				hammer.visible = false;
			}
			else {
				hammer.visible = true;
			}
			
			if (clearTime > 0) {
				hammer.visible = false;
				hammer.removeEventListener('tick', hammerAttack);
				stage.removeChild(hammer);
			}
			
			if (!this.exportRoot.alive[hammer.child] && hammer.tick < hammer.tickMax/2 && !allDead()) {
				this.exportRoot.targets[3] = findRandom();
				hammer.child = this.exportRoot.targets[3];
				hammer.childLeft = Math.max(0, this.exportRoot.targets[3] - 1);
				hammer.childRight = Math.min(35, this.exportRoot.targets[3] + 1);
			}
			
		
			if (!hammer.popped && hammer.tick >= hammer.tickMax/2) {
				hammer.popped = true;
				
				this.exportRoot.popIt.popChildren[hammer.child].hp =
				this.exportRoot.popIt.popChildren[hammer.child].hp.sub(hammer.power);
				
				this.exportRoot.money = this.exportRoot.money.plus(hammer.power.times(this.exportRoot.clickReward));
		
				
				if (this.exportRoot.alive[hammer.childLeft]) {
					this.exportRoot.popIt.popChildren[hammer.childLeft].hp =
					this.exportRoot.popIt.popChildren[hammer.childLeft].hp.sub(hammer.power.div(2));
				
					this.exportRoot.money = this.exportRoot.money.plus(hammer.power.div(2).times(this.exportRoot.clickReward));
				}
			
				
				if (this.exportRoot.alive[hammer.childRight]) {
					this.exportRoot.popIt.popChildren[hammer.childRight].hp =
					this.exportRoot.popIt.popChildren[hammer.childRight].hp.sub(hammer.power.div(2));
			
					this.exportRoot.money = this.exportRoot.money.plus(hammer.power.div(2).times(this.exportRoot.clickReward));
				}
			}
			if (hammer.popped && hammer.tick >= hammer.tickMax) {
				hammer.visible = false;
				hammer.removeEventListener('tick', hammerAttack);
				stage.removeChild(hammer);
			}
			
		}
		
		
		function flyGem(e) {
			var gem = e.currentTarget;
			if (gem.x < 1081 && gem.y > 41) {
				gem.x += (1081 - gem.startX)/30/2*this.exportRoot.timeMult;
				gem.y += (41 - gem.startY)/30/2*this.exportRoot.timeMult;
			}
			else {
				gem.x = 1081;
				gem.y = 41;
				gem.alpha -= 2/30*this.timeMult;
			}
			
			if (gem.alpha < 0) {
				gem.visible = false;
				this.exportRoot.gems = this.exportRoot.gems.plus(1);
				gem.removeEventListener('tick', flyGem);
				stage.removeChild(gem);
			}
			if (clearTime > 0) {
				gem.removeEventListener('tick', flyGem);
				stage.removeChild(gem);
			}
			
		}
		
		
		
		function changeLoc() {
				
			for (var i = 0 ; i < this.exportRoot.updates.length ; ++i) {
				this.exportRoot.updates[i] = 1;
				this.exportRoot.alive[i] = 1;
			}
		
			if (this.exportRoot.level == this.exportRoot.maxLevel) {
				this.exportRoot.maxLevel += 1;
			}
			if (this.exportRoot.autoLevel) {
				this.exportRoot.level = this.exportRoot.maxLevel;
			}
			
			var add = 0;
			var num = Math.floor(Math.random()*10);
		
			if (this.exportRoot.level%20 == 0) {
				add = 30;
				this.exportRoot.popAmount = 36;	
			}
			else if (this.exportRoot.level%10 == 0) {
				add = 20;
				this.exportRoot.popAmount = 25;	
			}
			else if (this.exportRoot.level%5 == 0) {
				add = 10;
				this.exportRoot.popAmount = 16;	
			}
			else {
				add = 0;
				this.exportRoot.popAmount = 9;	
			}
		
			this.exportRoot.popIt.gotoAndStop(num+add);
			this.exportRoot.popIt.color = num%10;
		
			this.exportRoot.targets[0] = findRandom();
			this.exportRoot.targets[1] = findRandom();
			this.exportRoot.targets[2] = findRandom();
			this.exportRoot.targets[3] = findRandom();
			this.exportRoot.targets[4] = findFirst();
			this.exportRoot.targets[5] = findRandom();
		}
		
		
		
		function changeLocLite() {
				
			for (var i = 0 ; i < this.exportRoot.updates.length ; ++i) {
				this.exportRoot.updates[i] = 1;
				this.exportRoot.alive[i] = 1;
			}
		
			
			var add = 0;
			var num = Math.floor(Math.random()*10);
		
			if (this.exportRoot.level%20 == 0) {
				add = 30;
				this.exportRoot.popAmount = 36;	
			}
			else if (this.exportRoot.level%10 == 0) {
				add = 20;
				this.exportRoot.popAmount = 25;	
			}
			else if (this.exportRoot.level%5 == 0) {
				add = 10;
				this.exportRoot.popAmount = 16;	
			}
			else {
				add = 0;
				this.exportRoot.popAmount = 9;	
			}
		
			this.exportRoot.popIt.gotoAndStop(num+add);
			this.exportRoot.popIt.color = num%10;
		
		
			this.exportRoot.targets[0] = findRandom();
			this.exportRoot.targets[1] = findRandom();
			this.exportRoot.targets[2] = findRandom();
			this.exportRoot.targets[3] = findRandom();
			this.exportRoot.targets[4] = findFirst();
			this.exportRoot.targets[5] = findRandom();
		}
		
		function allDead() {
			var dead = true;
			for (var i = 0 ; i < this.exportRoot.popAmount ; ++i) {
				if (this.exportRoot.alive[i] == 1) {
					dead = false;
				}
			}
			return dead;
		}
		
		
		
		
		
		
		
		this.levMinus.addEventListener("mousedown", setMinusLv.bind(this));
		function setMinusLv() {
			if (this.level > 1) {
				this.level -= 1;
				changeLocLite();
			}
		}
		
		
		
		this.gemPlus.addEventListener("mousedown", setPlusG.bind(this));
		function setPlusG() {
			if (this.gemsCraft < this.maxGemUse) {
				this.gemsCraft += 1;
			}
		}
		
		
		this.gemMinus.addEventListener("mousedown", setMinusG.bind(this));
		function setMinusG() {
			if (this.gemsCraft > 1) {
				this.gemsCraft -= 1;
			}
		}
		
		
		
		this.levPlus.addEventListener("mousedown", setPlusLv.bind(this));
		function setPlusLv() {
			if (this.level < this.maxLevel) {
				this.level += 1;
				changeLocLite();
			}
		}
		
		this.autoIs.addEventListener("mousedown", setAP.bind(this));
		function setAP() {
			if (this.autoLevel) {
				this.autoLevel = false;
			}
			else {
				this.autoLevel = true;
			}
		}
		
		
		
		this.craftBt.addEventListener("mousedown", craftIt.bind(this));
		function craftIt() {
			if (this.gems.gte(this.gemsCraft)) {
				this.gems = this.gems.sub(this.gemsCraft);
				
				var newCraft = this.craftPowFull1.plus((this.craftPowFull2.sub(this.craftPowFull1)).times(Math.random()));
				
				if (newCraft.gt(this.clickPower)) {
					this.craftedTxt.text = "你制作了一个更好的光标 (" +
					format(newCraft) + " > " + format(this.clickPower) + ")";
					this.craftedTxt.color = "#009933";
					this.clickPower = newCraft;
					
					if (this.tutor == 3) {
						this.tutor += 1;
					}
				}
				else {
					this.craftedTxt.text = "你制作了一个更糟糕的光标 (" +
					format(newCraft) + " < " + format(this.clickPower) + ")";
					this.craftedTxt.color = "#990000";
				}
				
				
			}
			else {
				this.craftedTxt.text = "你没有足够的宝石";
				this.craftedTxt.color = "#990000"
			}
		}
		
		
		this.buy1.addEventListener("mousedown", setbb1.bind(this));
		function setbb1() {
			this.buyAmoType = 1;
		}
		
		this.buy10.addEventListener("mousedown", setbb2.bind(this));
		function setbb2() {
			this.buyAmoType = 2;
		}
		
		this.buy50.addEventListener("mousedown", setbb3.bind(this));
		function setbb3() {
			this.buyAmoType = 3;
		}
		
		this.buyMax.addEventListener("mousedown", setbb4.bind(this));
		function setbb4() {
			this.buyAmoType = 4;
		}
		
		this.bupgrades.set1.addEventListener("mousedown", setTab1.bind(this));
		function setTab1() {
			this.buTab = 1;
		}
		
		this.bupgrades.set2.addEventListener("mousedown", setTab2.bind(this));
		function setTab2() {
			this.buTab = 2;
		}
		
		
		
		
		this.bupgrades.b1.addEventListener("mousedown", buyUpgrade1.bind(this));
		function buyUpgrade1() {
			if (this.buTab == 1) {
				if (this.buPage == 1) {
					if (this.money.gte(this.buildings[0].totalCost)) {
						this.money = this.money.sub(this.buildings[0].totalCost);
						this.buildings[0].level += this.buildings[0].buyAmo;
						if (this.tutor == 4) {
							this.tutor = 0;
						}
					}
				}
				else {
					if (this.money.gte(this.buildings[4].totalCost)) {
						this.money = this.money.sub(this.buildings[4].totalCost);
						this.buildings[4].level += this.buildings[4].buyAmo;
					}
				}
			}
			else if (this.buTab == 2) {
				if (this.buPage == 1) {
					if (this.bubbles.gte(this.upgrades[0].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[0].totalCost);
						this.upgrades[0].level += this.upgrades[0].buyAmo;
						if (this.tutor == 2) {
							this.tutor += 1;
						}
					}
				}
				else {
					if (this.bubbles.gte(this.upgrades[4].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[4].totalCost);
						this.upgrades[4].level += this.upgrades[4].buyAmo;
					}
				}
			}
		}
		
		
		this.bupgrades.b2.addEventListener("mousedown", buyUpgrade2.bind(this));
		function buyUpgrade2() {
			if (this.buTab == 1) {
				if (this.buPage == 1) {
					if (this.money.gte(this.buildings[1].totalCost)) {
						this.money = this.money.sub(this.buildings[1].totalCost);
						this.buildings[1].level += this.buildings[1].buyAmo;
					}
				}
				else {
					if (this.money.gte(this.buildings[5].totalCost)) {
						this.money = this.money.sub(this.buildings[5].totalCost);
						this.buildings[5].level += this.buildings[5].buyAmo;
					}
				}
			}
			else if (this.buTab == 2) {
				if (this.buPage == 1) {
					if (this.bubbles.gte(this.upgrades[1].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[1].totalCost);
						this.upgrades[1].level += this.upgrades[1].buyAmo;
					}
				}
				else {
					if (this.bubbles.gte(this.upgrades[5].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[5].totalCost);
						this.upgrades[5].level += this.upgrades[5].buyAmo;
					}
				}
			}
		}
		
		
		this.bupgrades.b3.addEventListener("mousedown", buyUpgrade3.bind(this));
		function buyUpgrade3() {
			if (this.buTab == 1) {
				if (this.buPage == 1) {
					if (this.money.gte(this.buildings[2].totalCost)) {
						this.money = this.money.sub(this.buildings[2].totalCost);
						this.buildings[2].level += this.buildings[2].buyAmo;
					}
				}
				else {
					if (this.money.gte(this.buildings[6].totalCost)) {
						this.money = this.money.sub(this.buildings[6].totalCost);
						this.buildings[6].level += this.buildings[6].buyAmo;
					}
				}
			}
			else if (this.buTab == 2) {
				if (this.buPage == 1) {
					if (this.bubbles.gte(this.upgrades[2].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[2].totalCost);
						this.upgrades[2].level += this.upgrades[2].buyAmo;
					}
				}
				else {
					if (this.bubbles.gte(this.upgrades[6].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[6].totalCost);
						this.upgrades[6].level += this.upgrades[6].buyAmo;
					}
				}
			}
		}
		
		
		
		this.bupgrades.b4.addEventListener("mousedown", buyUpgrade4.bind(this));
		function buyUpgrade4() {
			if (this.buTab == 1) {
				if (this.buPage == 1) {
					if (this.money.gte(this.buildings[3].totalCost)) {
						this.money = this.money.sub(this.buildings[3].totalCost);
						this.buildings[3].level += this.buildings[3].buyAmo;
					}
				}
				else {
					if (this.money.gte(this.buildings[7].totalCost)) {
						this.money = this.money.sub(this.buildings[7].totalCost);
						this.buildings[7].level += this.buildings[7].buyAmo;
					}
				}
			}
			else if (this.buTab == 2) {
				if (this.buPage == 1) {
					if (this.bubbles.gte(this.upgrades[3].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[3].totalCost);
						this.upgrades[3].level += this.upgrades[3].buyAmo;
					}
				}
				else {
					if (this.bubbles.gte(this.upgrades[7].totalCost)) {
						this.bubbles = this.bubbles.sub(this.upgrades[7].totalCost);
						this.upgrades[7].level += this.upgrades[7].buyAmo;
					}
				}
			}
		}
		
		
		
		this.hover = false;
		this.hoverType = 0;
		
		this.addEventListener("tick", setHovers.bind(this));
		function setHovers() {
			
			if (this.hover) {
				this.hoverHelp.visible = true;
				if (this.buTab == 1) {
					if (this.buPage == 1) {
						if (this.hoverType == 0) {
							this.hoverHelp.txt.text = "鼠标以平均速度点击随机泡泡";
						}
						if (this.hoverType == 1) {
							this.hoverHelp.txt.text = "石头以慢速点击随机泡泡";
						}
						if (this.hoverType == 2) {
							this.hoverHelp.txt.text = "针高速点击随机气泡";
						}
						if (this.hoverType == 3) {
							this.hoverHelp.txt.text = "锤击随机点击 2 个相邻的气泡 (50% 伤害) 速度较慢";
						}
					}
					if (this.buPage == 2) {
						if (this.hoverType == 0) {
							this.hoverHelp.txt.text = "光标快速点击第一个未爆破的气泡";
						}
						if (this.hoverType == 1) {
							this.hoverHelp.txt.text = "蛇点击随机气泡并以慢速毒化它 (20% 伤害/秒)";
						}
						if (this.hoverType == 2) {
							this.hoverHelp.txt.text = "剑随机切割一排气泡";
						}
						if (this.hoverType == 3) {
							this.hoverHelp.txt.text = "被动伤害伤害所有气泡";
						}
					}
				}
				if (this.buTab == 2) {
					if (this.buPage == 1) {
						if (this.hoverType == 0) {
							this.hoverHelp.txt.text = "制作更好的光标以造成更多伤害并获得更多金钱";
						}
						if (this.hoverType == 1) {
							this.hoverHelp.txt.text = "爆破泡泡后有几率获得宝石";
						}
						if (this.hoverType == 2) {
							this.hoverHelp.txt.text = "可用于制作光标的最大宝石数量";
						}
						if (this.hoverType == 3) {
							this.hoverHelp.txt.text = "爆破泡泡后有机会获得 2 颗宝石而不是 1 颗";
						}
					}
					if (this.buPage == 2) {
						if (this.hoverType == 0) {
							this.hoverHelp.txt.text = "最大制作力量";
						}
						if (this.hoverType == 1) {
							this.hoverHelp.txt.text = "乘数被提高到这个指数（以获得更多的钱）";
						}
						if (this.hoverType == 2) {
							this.hoverHelp.txt.text = "基于每次点击金钱的被动金钱收益";
						}
						if (this.hoverType == 3) {
							this.hoverHelp.txt.text = "被动宝石获取";
						}
					}
				}
			}
			else {
				this.hoverHelp.visible = false;
			}
			
		}
		
		this.bupgrades.b1.addEventListener("mouseover", hovUpgrade1.bind(this));
		function hovUpgrade1() {
			this.hover = true;
			this.hoverType = 0;
		}
		
		this.bupgrades.b2.addEventListener("mouseover", hovUpgrade2.bind(this));
		function hovUpgrade2() {
			this.hover = true;
			this.hoverType = 1;
		}
		
		this.bupgrades.b3.addEventListener("mouseover", hovUpgrade3.bind(this));
		function hovUpgrade3() {
			this.hover = true;
			this.hoverType = 2;
		}
		
		this.bupgrades.b4.addEventListener("mouseover", hovUpgrade4.bind(this));
		function hovUpgrade4() {
			this.hover = true;
			this.hoverType = 3;
		}
		
		
		this.bupgrades.b1.addEventListener("mouseout", hovoUpgrade1.bind(this));
		function hovoUpgrade1() {
			this.hover = false;
		}
		
		this.bupgrades.b2.addEventListener("mouseout", hovoUpgrade2.bind(this));
		function hovoUpgrade2() {
			this.hover = false;
		}
		
		this.bupgrades.b3.addEventListener("mouseout", hovoUpgrade3.bind(this));
		function hovoUpgrade3() {
			this.hover = false;
		}
		
		this.bupgrades.b4.addEventListener("mouseout", hovoUpgrade4.bind(this));
		function hovoUpgrade4() {
			this.hover = false;
		}
		
		
		
		this.bupgrades.uBG.addEventListener("mouseover", hideHint.bind(this));
		function hideHint() {
			this.hover = false;
		}
		
		
		function findRandom() {
			var target = Math.floor(Math.random() * this.exportRoot.popAmount);
			if (!allDead()) {
				while (!this.exportRoot.alive[target]) {
					target = Math.floor(Math.random() * this.exportRoot.popAmount);
				}
			}
			return target;
		}
		
		
		function findFirst() {
			var target = 0;
			if (!allDead()) {
				while (!this.exportRoot.alive[target]) {
					target += 1;
				}
			}
			return target;
		}
		
		
		
		this.upBtn.addEventListener("mousedown", setP1.bind(this));
		function setP1() {
			this.buPage = 1;
		}
		
		
		this.downBtn.addEventListener("mousedown", setP2.bind(this));
		function setP2() {
			this.buPage = 2;
		}
		
		var clearTime = 0;
		
		this.addEventListener("tick", prestigeMain.bind(this));
		function prestigeMain() {
		
			if (clearTime > 0) {
				clearTime -= 1/30;
				clearALL();
				this.clicksPrestige = 5;
			}
		}
		
		this.prestigeW.addEventListener("mousedown", setPrestige.bind(this));
		function setPrestige() {
			if (this.clicksPrestige > 1) {
				this.clicksPrestige -= 1;
			}
			else {
				this.gain1[0] = this.gain1[1];
				this.gain2[0] = this.gain2[1];
				clearTime = 0.2;
				clearALL();
			}
		}
		
		this.soundSet.addEventListener("mousedown", setSound.bind(this));
		function setSound() {
			if (this.soundIs) {
				this.soundIs = false;
			}
			else {
				this.soundIs = true;
			}
		}
		
		
		
		function clearALL() {
			var num = Math.floor(Math.random()*10);
		
			this.exportRoot.levelType = num;
		
		
		
			this.exportRoot.money = nd(0);
			this.exportRoot.moneyAll = nd(0);
		
			this.exportRoot.gems = nd(0);
			this.exportRoot.bubbles = nd(0);
		
		
			this.exportRoot.clickPower = nd(1);
			this.exportRoot.clickReward = nd(1);
			this.exportRoot.clickRewardTotal = nd(1);
		
		
			this.exportRoot.updates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			this.exportRoot.alive = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		
		
			this.exportRoot.respawn = 1;
			this.exportRoot.resNow = 0;
		
			this.exportRoot.level = 1;
			this.exportRoot.maxLevel = 1;
			this.exportRoot.autoLevel = true;
		
		
			this.exportRoot.bubblesReward = nd(1);
			this.exportRoot.multReward = nd(0);
		
		
			this.exportRoot.tick = 0;
		
			this.exportRoot.mults = [nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1),nd(1)];
		
			this.exportRoot.craftPow = nd(1);
			this.exportRoot.craftPowFull1 = nd(1);
			this.exportRoot.craftPowFull2 = nd(1);
			this.exportRoot.gemsCraft = 1;
		
			this.exportRoot.buyAmoType = 1;
			this.exportRoot.buTab = 1;
			this.exportRoot.buPage = 1;
		
		
		
			this.exportRoot.buildings = [new upgrade(999999, nd(2), nd(20)), new upgrade(999999, nd(2), nd(1000)),
							  new upgrade(999999, nd(2), nd(100000)), new upgrade(999999, nd(2), nd(1e7)),
							  new upgrade(999999, nd(2), nd(1e10)), new upgrade(999999, nd(2), nd(1e15)),
							  new upgrade(999999, nd(2), nd(1e20)), new upgrade(999999, nd(2), nd(1e25))]
		
		
			this.exportRoot.upgrades = [new upgrade(999999, nd(1.5), nd(10)), new upgrade(950, nd(2), nd(200)),
							 new upgrade(99, nd(2.5), nd(1000)), new upgrade(100, nd(1.5), nd(10000)),
							 new upgrade(999999, nd(5), nd(100000)), new upgrade(100, nd(10), nd(1000000)),
							 new upgrade(999999, nd(3), nd(10000000)), new upgrade(999999, nd(3), nd(10000000))]
		
		
			this.exportRoot.passiveGemTick = 0;
			
			
		
			this.exportRoot.resNow = 0;
		
			var add = 0;
			var num = Math.floor(Math.random()*10);
		
			if (this.exportRoot.level%20 == 0) {
				add = 30;
				this.exportRoot.popAmount = 36;	
			}
			else if (this.exportRoot.level%10 == 0) {
				add = 20;
				this.exportRoot.popAmount = 25;	
			}
			else if (this.exportRoot.level%5 == 0) {
				add = 10;
				this.exportRoot.popAmount = 16;	
			}
			else {
				add = 0;
				this.exportRoot.popAmount = 9;	
			}
		
			this.exportRoot.popIt.gotoAndStop(num+add);
			this.exportRoot.popIt.color = num%10;
		
		
		
			this.exportRoot.targets = [findRandom(),findRandom(),findRandom(),findRandom(),findFirst(),findRandom(),findRandom(),0];
			this.exportRoot.ticks = [0,0,0,0,0,0,0,0];
		
			this.exportRoot.maxTicks = [1, 2, 0.5, 4, 0.3, 3, 3, 1];
			this.exportRoot.powers = [nd(0.5), nd(1), nd(0.25), nd(1), nd(0.2), nd(1), nd(0.3), nd(0.05)];
		
		
			this.exportRoot.changes = [false,false,false,false,false,false,false,false];
		
		
			this.exportRoot.craftedTxt.text = "";
			this.exportRoot.clicksPrestige = 5;
		}
		
		
		
		
		
		this.addEventListener("tick", mainTut.bind(this));
		function mainTut() {
			this.tutorial.gotoAndStop(this.tutor);
			
			if (this.bubbles.gte(20) && this.gems.gte(1) && this.tutor == 1) {
				this.tutor += 1;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tutor
	this.tutorial = new lib.tutorial();
	this.tutorial.name = "tutorial";
	this.tutorial.setTransform(601.2,108.35,1,1,0,0,0,124.4,51.1);

	this.timeline.addTween(cjs.Tween.get(this.tutorial).wait(1));

	// cgames
	this.discord = new lib.discordCH();
	this.discord.name = "discord";
	this.discord.setTransform(210.55,624.95,0.8678,0.8654,0,0,0,1.4,0.9);
	new cjs.ButtonHelper(this.discord, 0, 1, 2);

	this.spdTime = new cjs.Text("1h 30m 59s", "bold 18px 'Arial'", "#FFFFFF");
	this.spdTime.name = "spdTime";
	this.spdTime.textAlign = "center";
	this.spdTime.lineHeight = 22;
	this.spdTime.lineWidth = 161;
	this.spdTime.parent = this;
	this.spdTime.setTransform(380.8,622.05,0.9704,0.9678);

	this.spdUP = new cjs.Text("加速 (x2, 最大 1小时)", "bold 18px 'Arial'", "#FFFFFF");
	this.spdUP.name = "spdUP";
	this.spdUP.textAlign = "center";
	this.spdUP.lineHeight = 22;
	this.spdUP.lineWidth = 208;
	this.spdUP.parent = this;
	this.spdUP.setTransform(382.113,603.2,0.7418,0.7398);

	this.speedUP_b = new lib.speedUP_b();
	this.speedUP_b.name = "speedUP_b";
	this.speedUP_b.setTransform(278.15,624.05,0.8939,0.8916,0,0,0,0.1,0.1);

	this.afterAd = new lib.afterAd();
	this.afterAd.name = "afterAd";
	this.afterAd.setTransform(337.7,205.8,1,1,0,0,0,104,46.2);

	this.midAd = new lib.midAd();
	this.midAd.name = "midAd";
	this.midAd.setTransform(340.1,199.3,0.7932,0.7932);

	this.chipG = new lib.chipG();
	this.chipG.name = "chipG";
	this.chipG.setTransform(336.05,69.2,0.7474,0.7474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chipG},{t:this.midAd},{t:this.afterAd},{t:this.speedUP_b},{t:this.spdUP},{t:this.spdTime},{t:this.discord}]}).wait(1));

	// hover
	this.hoverHelp = new lib.hoverHelp();
	this.hoverHelp.name = "hoverHelp";
	this.hoverHelp.setTransform(1029.1,192.05,1,1,0,0,0,126.4,46.6);

	this.timeline.addTween(cjs.Tween.get(this.hoverHelp).wait(1));

	// main
	this.soundSet = new lib.soundSet();
	this.soundSet.name = "soundSet";
	this.soundSet.setTransform(523.35,86.1,1,1,0,0,0,26.7,21.2);

	this.prestigeW = new lib.prestigeW();
	this.prestigeW.name = "prestigeW";
	this.prestigeW.setTransform(137.2,509.4,1,1,0,0,0,128.9,74.2);

	this.downBtn = new lib.upBt();
	this.downBtn.name = "downBtn";
	this.downBtn.setTransform(1226.35,551.05,1,1,180,0,0,28.4,28.4);

	this.upBtn = new lib.upBt();
	this.upBtn.name = "upBtn";
	this.upBtn.setTransform(1226.45,280.5,1,1,0,0,0,28.4,28.4);

	this.swordHit = new lib.swordHit();
	this.swordHit.name = "swordHit";
	this.swordHit.setTransform(264.55,774.75,1,1,0,0,0,2.4,2.9);

	this.sword = new lib.sword();
	this.sword.name = "sword";
	this.sword.setTransform(214.75,772.85,1,1,0,0,0,37.3,16);

	this.hammer = new lib.hammer();
	this.hammer.name = "hammer";
	this.hammer.setTransform(130,774.4,1,1,0,0,0,22.4,29.8);

	this.buyMax = new lib.chooseBuy();
	this.buyMax.name = "buyMax";
	this.buyMax.setTransform(1249.1,156.2,0.9153,0.9153,0,0,0,23.4,14.7);

	this.buy50 = new lib.chooseBuy();
	this.buy50.name = "buy50";
	this.buy50.setTransform(1199.15,156.2,0.9153,0.9153,0,0,0,23.4,14.7);

	this.buy10 = new lib.chooseBuy();
	this.buy10.name = "buy10";
	this.buy10.setTransform(1149.2,156.2,0.9153,0.9153,0,0,0,23.4,14.7);

	this.buy1 = new lib.chooseBuy();
	this.buy1.name = "buy1";
	this.buy1.setTransform(1099.25,156.2,0.9153,0.9153,0,0,0,23.4,14.7);

	this.instance = new lib.buyBulkTab();
	this.instance.setTransform(1173.5,155.75,1,1,0,0,0,99.4,23.9);

	this.bupgrades = new lib.bupgrades();
	this.bupgrades.name = "bupgrades";
	this.bupgrades.setTransform(1061.3,395.8,1,1,0,0,0,205.6,198.3);

	this.craftBt = new lib.craftBt();
	this.craftBt.name = "craftBt";
	this.craftBt.setTransform(128.85,311.15,1.3778,1.3778,0,0,0,49.9,15.9);

	this.gemPlus = new lib.levPlus();
	this.gemPlus.name = "gemPlus";
	this.gemPlus.setTransform(234.35,266.75,0.7473,0.7473,0,0,0,23.2,23.2);

	this.gemMinus = new lib.levMinus();
	this.gemMinus.name = "gemMinus";
	this.gemMinus.setTransform(195.65,266.75,0.7473,0.7473,0,0,0,23.2,23.2);

	this.gemUseTxt = new cjs.Text("使用宝石数量: 1", "normal 700 18px 'tk-adelle-mono'", "#FFFFFF");
	this.gemUseTxt.name = "gemUseTxt";
	this.gemUseTxt.lineHeight = 25;
	this.gemUseTxt.lineWidth = 193;
	this.gemUseTxt.parent = this;
	this.gemUseTxt.setTransform(14.5,258.55);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gemUseTxt);
	}

	this.craftedTxt = new cjs.Text("你制作了一个更糟糕的光标 (99,999 < 100,000)", "normal 700 18px 'tk-adelle-mono'", "#009933");
	this.craftedTxt.name = "craftedTxt";
	this.craftedTxt.textAlign = "center";
	this.craftedTxt.lineHeight = 25;
	this.craftedTxt.lineWidth = 237;
	this.craftedTxt.parent = this;
	this.craftedTxt.setTransform(130.75,348.2);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.craftedTxt);
	}

	this.powerTxt = new cjs.Text("力量: 100,000", "normal 700 18px 'tk-adelle-mono'", "#FFFFFF");
	this.powerTxt.name = "powerTxt";
	this.powerTxt.textAlign = "center";
	this.powerTxt.lineHeight = 25;
	this.powerTxt.lineWidth = 168;
	this.powerTxt.parent = this;
	this.powerTxt.setTransform(162.55,198.85);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.powerTxt);
	}

	this.cpTxt = new cjs.Text("100,000 - 100,000", "normal 700 22px 'tk-adelle-mono'", "#FFFFFF");
	this.cpTxt.name = "cpTxt";
	this.cpTxt.textAlign = "center";
	this.cpTxt.lineHeight = 30;
	this.cpTxt.lineWidth = 243;
	this.cpTxt.parent = this;
	this.cpTxt.setTransform(127.35,130.8);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.cpTxt);
	}

	this.craftPowTxt = new cjs.Text("制作力量", "normal 700 22px 'tk-adelle-mono'", "#FFFFFF");
	this.craftPowTxt.name = "craftPowTxt";
	this.craftPowTxt.textAlign = "center";
	this.craftPowTxt.lineHeight = 30;
	this.craftPowTxt.lineWidth = 244;
	this.craftPowTxt.parent = this;
	this.craftPowTxt.setTransform(128.05,100.75);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.craftPowTxt);
	}

	this.gemChTxt = new cjs.Text("获得宝石几率: 5%", "normal 700 22px 'tk-adelle-mono'", "#FFFFFF");
	this.gemChTxt.name = "gemChTxt";
	this.gemChTxt.textAlign = "center";
	this.gemChTxt.lineHeight = 30;
	this.gemChTxt.lineWidth = 244;
	this.gemChTxt.parent = this;
	this.gemChTxt.setTransform(128.05,64.45);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gemChTxt);
	}

	this.gem = new lib.gem();
	this.gem.name = "gem";
	this.gem.setTransform(39.75,771.45,0.7037,0.7037,0,0,0,29.2,24.9);

	this.autoIs = new lib.autoIs();
	this.autoIs.name = "autoIs";
	this.autoIs.setTransform(811,86.7,1,1,0,0,0,18.7,18.7);

	this.text = new cjs.Text("自动进度", "normal 700 24px 'tk-adelle-mono'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 217;
	this.text.parent = this;
	this.text.setTransform(679.6,74.4);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text);
	}

	this.multTotalTxt = new cjs.Text("x100,000 到 $ 增益", "normal 700 21px 'tk-adelle-mono'", "#FFFFFF");
	this.multTotalTxt.name = "multTotalTxt";
	this.multTotalTxt.textAlign = "center";
	this.multTotalTxt.lineHeight = 28;
	this.multTotalTxt.lineWidth = 236;
	this.multTotalTxt.parent = this;
	this.multTotalTxt.setTransform(1153.8,625.6);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.multTotalTxt);
	}

	this.mult10t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'");
	this.mult10t.name = "mult10t";
	this.mult10t.textAlign = "center";
	this.mult10t.lineHeight = 33;
	this.mult10t.lineWidth = 118;
	this.mult10t.parent = this;
	this.mult10t.setTransform(1207.75,678.85,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult10t);
	}

	this.mult9t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#CC66CC");
	this.mult9t.name = "mult9t";
	this.mult9t.textAlign = "center";
	this.mult9t.lineHeight = 33;
	this.mult9t.lineWidth = 118;
	this.mult9t.parent = this;
	this.mult9t.setTransform(1073.4,678.85,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult9t);
	}

	this.mult8t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#B31AFF");
	this.mult8t.name = "mult8t";
	this.mult8t.textAlign = "center";
	this.mult8t.lineHeight = 33;
	this.mult8t.lineWidth = 118;
	this.mult8t.parent = this;
	this.mult8t.setTransform(947,678.65,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult8t);
	}

	this.mult7t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#3399CC");
	this.mult7t.name = "mult7t";
	this.mult7t.textAlign = "center";
	this.mult7t.lineHeight = 33;
	this.mult7t.lineWidth = 118;
	this.mult7t.parent = this;
	this.mult7t.setTransform(820.6,678.5,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult7t);
	}

	this.mult6t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#33FFFF");
	this.mult6t.name = "mult6t";
	this.mult6t.textAlign = "center";
	this.mult6t.lineHeight = 33;
	this.mult6t.lineWidth = 118;
	this.mult6t.parent = this;
	this.mult6t.setTransform(693.9,678.3,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult6t);
	}

	this.mult5t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#71FFA0");
	this.mult5t.name = "mult5t";
	this.mult5t.textAlign = "center";
	this.mult5t.lineHeight = 33;
	this.mult5t.lineWidth = 118;
	this.mult5t.parent = this;
	this.mult5t.setTransform(567.9,678.1,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult5t);
	}

	this.mult4t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#FFFF66");
	this.mult4t.name = "mult4t";
	this.mult4t.textAlign = "center";
	this.mult4t.lineHeight = 33;
	this.mult4t.lineWidth = 118;
	this.mult4t.parent = this;
	this.mult4t.setTransform(441.5,677.9,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult4t);
	}

	this.mult3t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#FF9933");
	this.mult3t.name = "mult3t";
	this.mult3t.textAlign = "center";
	this.mult3t.lineHeight = 33;
	this.mult3t.lineWidth = 118;
	this.mult3t.parent = this;
	this.mult3t.setTransform(315.1,677.7,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult3t);
	}

	this.mult2t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#FF3333");
	this.mult2t.name = "mult2t";
	this.mult2t.textAlign = "center";
	this.mult2t.lineHeight = 33;
	this.mult2t.lineWidth = 118;
	this.mult2t.parent = this;
	this.mult2t.setTransform(188.75,677.55,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult2t);
	}

	this.mult1t = new cjs.Text("100,000", "normal 700 25px 'tk-adelle-mono'", "#FFFFFF");
	this.mult1t.name = "mult1t";
	this.mult1t.textAlign = "center";
	this.mult1t.lineHeight = 33;
	this.mult1t.lineWidth = 118;
	this.mult1t.parent = this;
	this.mult1t.setTransform(62.35,677.35,0.9571,0.9571);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.mult1t);
	}

	this.multRewTxt = new cjs.Text("紫色乘数 +100,000", "normal 700 30px 'tk-adelle-mono'", "#FFFFFF");
	this.multRewTxt.name = "multRewTxt";
	this.multRewTxt.textAlign = "center";
	this.multRewTxt.lineHeight = 40;
	this.multRewTxt.lineWidth = 241;
	this.multRewTxt.parent = this;
	this.multRewTxt.setTransform(953.9,118.35,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.multRewTxt);
	}

	this.bubbleRewTxt = new cjs.Text(": 100,000", "normal 700 30px 'tk-adelle-mono'", "#FF9999");
	this.bubbleRewTxt.name = "bubbleRewTxt";
	this.bubbleRewTxt.lineHeight = 40;
	this.bubbleRewTxt.lineWidth = 204;
	this.bubbleRewTxt.parent = this;
	this.bubbleRewTxt.setTransform(883.05,82.85,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.bubbleRewTxt);
	}

	this.instance_1 = new lib.popidle_1();
	this.instance_1.setTransform(850,78,0.1185,0.1185);

	this.clickRewTxt = new cjs.Text("/点击 : 100,000", "normal 700 20px 'tk-adelle-mono'", "#FFFF99");
	this.clickRewTxt.name = "clickRewTxt";
	this.clickRewTxt.lineHeight = 27;
	this.clickRewTxt.lineWidth = 210;
	this.clickRewTxt.parent = this;
	this.clickRewTxt.setTransform(877.85,53,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.clickRewTxt);
	}

	this.instance_2 = new lib.coin();
	this.instance_2.setTransform(865.55,57.4,0.4369,0.4369,0,0,0,29.1,29.1);

	this.text_1 = new cjs.Text("奖励", "normal 700 24px 'tk-adelle-mono'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 201;
	this.text_1.parent = this;
	this.text_1.setTransform(952.7,9.85);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.text_1);
	}

	this.levPlus = new lib.levPlus();
	this.levPlus.name = "levPlus";
	this.levPlus.setTransform(809.25,31.7,1,1,0,0,0,23.2,23.2);

	this.levMinus = new lib.levMinus();
	this.levMinus.name = "levMinus";
	this.levMinus.setTransform(757.45,31.7,1,1,0,0,0,23.2,23.2);

	this.levNow = new cjs.Text("等级: 1", "normal 700 24px 'tk-adelle-mono'", "#FFFFFF");
	this.levNow.name = "levNow";
	this.levNow.textAlign = "center";
	this.levNow.lineHeight = 32;
	this.levNow.lineWidth = 240;
	this.levNow.parent = this;
	this.levNow.setTransform(603.7,21);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.levNow);
	}

	this.cpText = new cjs.Text("制作中", "normal 700 30px 'tk-adelle-mono'", "#FFFFFF");
	this.cpText.name = "cpText";
	this.cpText.textAlign = "center";
	this.cpText.lineHeight = 40;
	this.cpText.lineWidth = 245;
	this.cpText.parent = this;
	this.cpText.setTransform(128.7,13.1);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.cpText);
	}

	this.gemTxt = new cjs.Text(": 100,000", "normal 700 27px 'tk-adelle-mono'", "#66FFFF");
	this.gemTxt.name = "gemTxt";
	this.gemTxt.lineHeight = 36;
	this.gemTxt.lineWidth = 201;
	this.gemTxt.parent = this;
	this.gemTxt.setTransform(1108.4731,87.3,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.gemTxt);
	}

	this.bubbleTxt = new cjs.Text(": 100,000", "normal 700 27px 'tk-adelle-mono'", "#FF9999");
	this.bubbleTxt.name = "bubbleTxt";
	this.bubbleTxt.lineHeight = 36;
	this.bubbleTxt.lineWidth = 203;
	this.bubbleTxt.parent = this;
	this.bubbleTxt.setTransform(1108.4731,49.8,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.bubbleTxt);
	}

	this.instance_3 = new lib.gem();
	this.instance_3.setTransform(1090.55,98.35,0.7037,0.7037,0,0,0,29.2,24.9);

	this.instance_4 = new lib.popidle_1();
	this.instance_4.setTransform(1070,41,0.1434,0.1434);

	this.instance_5 = new lib.coin();
	this.instance_5.setTransform(1091.5,23.65,0.5707,0.5707,0,0,0,29,29);

	this.popIt = new lib.popIt();
	this.popIt.name = "popIt";
	this.popIt.setTransform(605.5,338.6,1,1,0,0,0,200,200);

	this.moneyTxt = new cjs.Text(": 100,000", "normal 700 27px 'tk-adelle-mono'", "#FFFF99");
	this.moneyTxt.name = "moneyTxt";
	this.moneyTxt.lineHeight = 36;
	this.moneyTxt.lineWidth = 203;
	this.moneyTxt.parent = this;
	this.moneyTxt.setTransform(1108.4731,13.55,0.8261,0.8261);
	if(!lib.properties.webfonts['tk-adelle-mono']) {
		lib.webFontTxtInst['tk-adelle-mono'] = lib.webFontTxtInst['tk-adelle-mono'] || [];
		lib.webFontTxtInst['tk-adelle-mono'].push(this.moneyTxt);
	}

	this.instance_6 = new lib.CachedBmp_1();
	this.instance_6.setTransform(-0.2,2.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.moneyTxt},{t:this.popIt},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.bubbleTxt},{t:this.gemTxt},{t:this.cpText},{t:this.levNow},{t:this.levMinus},{t:this.levPlus},{t:this.text_1},{t:this.instance_2},{t:this.clickRewTxt},{t:this.instance_1},{t:this.bubbleRewTxt},{t:this.multRewTxt},{t:this.mult1t},{t:this.mult2t},{t:this.mult3t},{t:this.mult4t},{t:this.mult5t},{t:this.mult6t},{t:this.mult7t},{t:this.mult8t},{t:this.mult9t},{t:this.mult10t},{t:this.multTotalTxt},{t:this.text},{t:this.autoIs},{t:this.gem},{t:this.gemChTxt},{t:this.craftPowTxt},{t:this.cpTxt},{t:this.powerTxt},{t:this.craftedTxt},{t:this.gemUseTxt},{t:this.gemMinus},{t:this.gemPlus},{t:this.craftBt},{t:this.bupgrades},{t:this.instance},{t:this.buy1},{t:this.buy10},{t:this.buy50},{t:this.buyMax},{t:this.hammer},{t:this.sword},{t:this.swordHit},{t:this.upBtn},{t:this.downBtn},{t:this.prestigeW},{t:this.soundSet}]}).wait(1));

	// format
	this.cGames = new lib.cGamess();
	this.cGames.name = "cGames";
	this.cGames.setTransform(3.6,658.05,1.0847,1.0847,0,0,0,0.4,60.3);
	new cjs.ButtonHelper(this.cGames, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.cGames).wait(1));

	// bg
	this.instance_7 = new lib.popBG();
	this.instance_7.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639.8,359,640.2,445.6);
// library properties:
lib.properties = {
	id: '325FC9EE1F20554CB4F8181ED030A70E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/popBG.png", id:"popBG"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png", id:"index_atlas_7"},
		{src:"images/index_atlas_8.png", id:"index_atlas_8"},
		{src:"images/index_atlas_9.png", id:"index_atlas_9"},
		{src:"images/index_atlas_10.png", id:"index_atlas_10"},
		{src:"images/index_atlas_11.png", id:"index_atlas_11"},
		{src:"images/index_atlas_12.png", id:"index_atlas_12"},
		{src:"images/index_atlas_13.png", id:"index_atlas_13"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['325FC9EE1F20554CB4F8181ED030A70E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;