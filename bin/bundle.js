(function(){var f=Laya.Scene,g=Laya.ClassUtils.regClass,c;(function(b){(function(h){class d extends f{constructor(){super()}createChildren(){super.createChildren();this.loadScene("test/TestScene")}}h.ba=d;g("ui.test.TestSceneUI",d)})(b.test||(b.test={}))})(c||(c={}));var e;(function(b){b[b.R8G8B8=0]="R8G8B8";b[b.R8G8B8A8=1]="R8G8B8A8";b[b.Alpha8=2]="Alpha8";b[b.R16G16B16A16=14]="R16G16B16A16";b[b.Depth=15]="Depth";b[b.ShadowMap=16]="ShadowMap"})(e||(e={}));class k extends c.test.ba{constructor(){super();
this.j=Laya.stage.addChild(new Laya.Scene3D);this.j.$=Laya.AmbientMode.SolidColor;this.j.o=new Laya.Vector3(.5490196168422699,.5490196168422699,.5490196168422699);var b=this.j.addChild(new Laya.Camera(0,.1,100));b.transform.translate(new Laya.Vector3(0,3,3));b.transform.rotate(new Laya.Vector3(-30,0,0),!0,!1);b=this.j.addChild(new Laya.DirectionLight);b.color=new Laya.Vector3(.6,.6,.6);b.transform.worldMatrix.setForward(new Laya.Vector3(1,-1,0));this.ea()}ea(){Laya.loader.create([{url:"res/zip/player.zip",
type:LayaZip.ZIP}],Laya.Handler.create(this,()=>{let b=Laya.loader.getRes("res/zip/player/PeasantMale06.lh").clone();this.j.addChild(b)}))}}class a{constructor(){}static init(){var b=Laya.ClassUtils.regClass;b("script/GameUI.ts",k)}}a.width=640;a.height=1136;a.scaleMode="fixedwidth";a.aa="none";a.m="top";a.l="left";a.o="test/TestScene.scene";a.$=!1;a.stat=!1;a.da=!1;a.ca=!0;a.init();class l{constructor(){window.Laya3D?Laya3D.init(a.width,a.height):Laya.init(a.width,a.height,Laya.WebGL);Laya.Physics&&
Laya.Physics.enable();Laya.DebugPanel&&Laya.DebugPanel.enable();Laya.stage.scaleMode=a.scaleMode;Laya.stage.aa=a.aa;Laya.stage.m=a.m;Laya.stage.l=a.l;Laya.URL.exportSceneToJson=a.ca;(a.$||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel();a.da&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable();a.stat&&Laya.Stat.show();Laya.alertGlobalError(!0);Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.m),Laya.ResourceVersion.FILENAME_VERSION)}m(){Laya.AtlasInfoManager.enable("fileconfig.json",
Laya.Handler.create(this,this.l))}l(){LayaZip.Init();a.o&&Laya.Scene.open(a.o)}}new l})();
