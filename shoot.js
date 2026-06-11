(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"shoot_atlas_1", frames: [[0,0,1024,576]]},
		{name:"shoot_atlas_2", frames: [[0,1082,1440,810],[0,0,1920,1080]]},
		{name:"shoot_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"shoot_atlas_4", frames: [[0,0,2048,1160]]},
		{name:"shoot_atlas_5", frames: [[0,0,2048,2048]]}
];


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



(lib.bgfin1 = function() {
	this.initialize(ss["shoot_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgfin2 = function() {
	this.initialize(ss["shoot_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgfin3 = function() {
	this.initialize(ss["shoot_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bggame = function() {
	this.initialize(ss["shoot_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgstart = function() {
	this.initialize(ss["shoot_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bonpic2 = function() {
	this.initialize(img.bonpic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1640);


(lib.bon = function() {
	this.initialize(img.bon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1640);


(lib.playerpic = function() {
	this.initialize(ss["shoot_atlas_5"]);
	this.gotoAndStop(0);
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


(lib.player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.playerpic();
	this.instance.setTransform(-25,-25,0.0244,0.0244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(-25,-25,50,50), null);


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgnDgnDMBOHAAAMAAABOHMhOHAAAg");
	this.shape.setTransform(0,0.0184,1,1.0001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHg");
	this.shape_1.setTransform(0,0.0184,1,1.0001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-251,-251,502,502), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.text = new cjs.Text("PLAY", "bold 50px 'Microsoft JhengHei UI'");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(0,-32.9,0.7834,0.7834);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E9FC4").s().p("Au1BCIAAiDIdrAAIAACDg");
	this.shape.setTransform(0,34.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98CDE7").s().p("Au1FYIAAqvIdrAAIAAKvg");
	this.shape_1.setTransform(0,-6.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-40.9,190,81.9);


(lib.bon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bon();
	this.instance.setTransform(-25,-20,0.0244,0.0244);

	this.instance_1 = new lib.bonpic2();
	this.instance_1.setTransform(-25,-20,0.0244,0.0244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-20,50,40);


(lib.bony = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var audio = new Audio('saki.mp3');
		this.y=-500;
		this.x=400+ Math.random()*488;
		
		
		this.addEventListener("tick",fl_RotateContinuously_3.bind(this));
		
		function fl_RotateContinuously_3(){
			
			this.y=this.y+exportRoot.dy;
			
			if( Math.abs( this.y-exportRoot.iplay.y)<50 && Math.abs( this.x-exportRoot.iplay.x)<45) 
				{
					exportRoot.dead = exportRoot.dead+1;
				}
			
			if(this.y>=750)
				{
					this.y=0;
					this.x=400+ Math.random()*488;
					exportRoot.sc = exportRoot.sc+1;
					audio.play('saki.mp3');
					exportRoot.dy=5+Math.random()*30;
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.instance = new lib.bon_1();
	this.instance.setTransform(0,0,1,1,89.9948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bony, new cjs.Rectangle(-20,-25,40,50), null);


(lib.bonx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var audio = new Audio('saki.mp3');
		this.x=-500;
		this.y=120+ Math.random()*480;
		
		
		this.addEventListener("tick",fl_RotateContinuously_3.bind(this));
		
		function fl_RotateContinuously_3(){
			
			this.x=this.x+exportRoot.dx;
			
			if( Math.abs( this.y-exportRoot.iplay.y)<45 && Math.abs( this.x-exportRoot.iplay.x)<50) 
				{
					exportRoot.dead = exportRoot.dead+1;
				}
			
			if(this.x>=1300)
				{
					this.x=0;
					this.y=120+ Math.random()*480;
					exportRoot.sc = exportRoot.sc+1;
					audio.play('saki.mp3');
					exportRoot.dx=5+Math.random()*30;
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.instance = new lib.bon_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonx, new cjs.Rectangle(-25,-20,50,40), null);


// stage content:
(lib.shoot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [4,9,14,19,24];
	// timeline functions:
	this.frame_4 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		
		this.ibtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(9);
		}
	}
	this.frame_9 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		this.stop();
		
		var x,y;
		x=640;
		y=360;
		exportRoot.dead=0;
		exportRoot.sc=0;
		exportRoot.dx=5+Math.random()*30;
		exportRoot.dy=5+Math.random()*30;
		
		
		window.addEventListener('keydown', keyDownHandler, false);
		function keyDownHandler(evt)
		{
		if(evt.keyCode == 37 )
			{if(!(x<420))x=x-10;}
		if(evt.keyCode == 38 )
			{if(!(y<140))y=y-10;}
		if(evt.keyCode == 39 )
			{if(!(x>860))x=x+10;}
		if(evt.keyCode == 40 )
			{if(!(y>580))y=y+10;}
		}
		
		
		this.addEventListener("tick",fl_RotateContinuously_3.bind(this));
		
		function fl_RotateContinuously_3(){
			
			if (exportRoot.dead >= 1 && exportRoot.sc<=10) {this.gotoAndPlay(14);}
			if (exportRoot.dead >= 1 && exportRoot.sc>=10 && exportRoot.sc<=25) {this.gotoAndPlay(19);}
			if (exportRoot.dead >= 1 && exportRoot.sc>=25) {this.gotoAndPlay(24);}
			this.iplay.x = x;
			this.iplay.y = y;
		
			this.itxt.text =  "SCORE:" + exportRoot.sc ;
			
		}
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(1));

	// Actions
	this.itxt = new cjs.Text("", "bold 20px 'Microsoft JhengHei'", "#FFFFFF");
	this.itxt.name = "itxt";
	this.itxt.textAlign = "center";
	this.itxt.lineHeight = 29;
	this.itxt.lineWidth = 100;
	this.itxt.parent = this;
	this.itxt.setTransform(992.2,82);
	this.itxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.itxt).wait(9).to({_off:false},0).wait(5).to({x:640,y:570.95,font:"bold 50px 'Microsoft JhengHei'",color:"#000000",lineHeight:68.5,lineWidth:196},0).wait(11));

	// 圖層_1
	this.text = new cjs.Text("在區域範圍內\n使用按鍵↑↓←→\n來躲避攻擊\n躲開一次加一分", "25px 'Microsoft JhengHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 250;
	this.text.parent = this;
	this.text.setTransform(640,453.55);

	this.ibtn = new lib.btn();
	this.ibtn.name = "ibtn";
	this.ibtn.setTransform(640,639.3);
	new cjs.ButtonHelper(this.ibtn, 0, 1, 1);

	this.instance = new lib.bony();
	this.instance.setTransform(400,65.65);

	this.instance_1 = new lib.bonx();
	this.instance_1.setTransform(325.4,600);

	this.iplay = new lib.player();
	this.iplay.name = "iplay";
	this.iplay.setTransform(640,360);

	this.instance_2 = new lib.bgfin1();
	this.instance_2.setTransform(205,46,0.604,0.604);

	this.instance_3 = new lib.bgfin2();
	this.instance_3.setTransform(205,46,0.453,0.453);

	this.instance_4 = new lib.bgfin3();
	this.instance_4.setTransform(205,46,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ibtn},{t:this.text}]},4).to({state:[{t:this.iplay},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(1));

	// 圖層_2
	this.instance_5 = new lib.line();
	this.instance_5.setTransform(640,360);
	this.instance_5.alpha = 0.6914;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({_off:true},5).wait(11));

	// BG
	this.instance_6 = new lib.bgstart();
	this.instance_6.setTransform(292,48,0.6797,0.6797);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E6DA").s().p("EhmjA5iMAAAhzDMDNHAAAMAAABzDg");
	this.shape.setTransform(646.4,363.2);

	this.instance_7 = new lib.bggame();
	this.instance_7.setTransform(-20,-10,0.6378,0.6378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0A799").s().p("EhmjA5iMAAAhzDMDNHAAAMAAABzDg");
	this.shape_1.setTransform(646.4,363.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.shape_1}]},5).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1302.8,731.4);
// library properties:
lib.properties = {
	id: 'EF0EBAE440E68541815D4011FEDA4103',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bonpic2.png?1779618641969", id:"bonpic2"},
		{src:"images/bon.png?1779618641969", id:"bon"},
		{src:"images/shoot_atlas_1.png?1779618641956", id:"shoot_atlas_1"},
		{src:"images/shoot_atlas_2.png?1779618641956", id:"shoot_atlas_2"},
		{src:"images/shoot_atlas_3.png?1779618641956", id:"shoot_atlas_3"},
		{src:"images/shoot_atlas_4.png?1779618641956", id:"shoot_atlas_4"},
		{src:"images/shoot_atlas_5.png?1779618641956", id:"shoot_atlas_5"}
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
an.compositions['EF0EBAE440E68541815D4011FEDA4103'] = {
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