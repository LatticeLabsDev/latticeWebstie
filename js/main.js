jQuery(document).ready(function($){function formatMoney(amount,decimalCount=0,decimal=".",thousands=","){try{decimalCount=Math.abs(decimalCount);decimalCount=isNaN(decimalCount)?0:decimalCount;const negativeSign=amount<0?"-":"";let i=parseInt(amount=Math.abs(Number(amount)||0).toFixed(decimalCount)).toString();let j=(i.length>3)?i.length%3:0;return negativeSign+(j?i.substr(0,j)+thousands:'')+i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+thousands)+(decimalCount?decimal+Math.abs(amount-i).toFixed(decimalCount).slice(2):"");}catch(e){}}
$(".staking-form #fname").keypress(function(e){$(this).attr('placeholder','Enter VXLC');if(e.which!=8&&e.which!=0&&(e.which<48||e.which>57)){$("#errmsg").html("Digits Only").show().fadeOut("slow");return false;}
var maxLength=10;var sliderVal=$(this).val();$(this).val(sliderVal.substring(0,maxLength))});var totalStaked=$('#totalStaked').val();var totalSupply=$('#totalSupply').val();var totalStakedValue=parseInt(totalStaked,16)/1e18;var totalSuppliedValue=parseInt(totalSupply,16)/1e18;var stakedValue=Math.round(totalStakedValue)/parseFloat(totalSuppliedValue)*100;var stakedValuePercantage=Math.round(stakedValue);$('#totalStakedpercentage').text(stakedValuePercantage+"%");$(".staking-form #fname").keyup(function(e){var number=$(this).val();var sliderVal=Number(number.replace(/[^0-9.-]+/g,""));if(value<365){var apy=$('.arps').text()
var YearlyRewards=parseFloat(sliderVal)/100*parseFloat(apy).toFixed(2)/365*value
$('#yearReward').text(formatMoney(YearlyRewards)+" VXLC");}else{var rewardPercantage=$('#rewardpercentageYearly').val();var YearlyRewards=parseFloat(sliderVal)*parseFloat(rewardPercantage)/100;$('#yearReward').text(formatMoney(YearlyRewards)+" VXLC");}
var rewardPercantageMonthly=$('#rewardpercentagemonthly').val();var monthlyRewards=parseFloat(sliderVal)*parseFloat(rewardPercantageMonthly)/100;$('#monthlyReward').text(formatMoney(monthlyRewards)+" VXLC");});var totalStaked=$('#totalStaked').val();var value=$('.days-rangeslider-wrapper input[type="range"]').val();var staked=parseInt(totalStaked,16)/1e18;var arps=parseFloat((0.3+(value*0.7/365))*534247*(365/staked));var arpsPercentage=arps*100
$('.arps').text(arpsPercentage.toFixed(2)+'%');var defaultInput='1,000,000'
var defaultNumber=Number(defaultInput.replace(/[^0-9.-]+/g,""));var defaultYearlyRewards=parseInt(defaultNumber)*parseInt(arpsPercentage)/100;$('#yearReward').text(formatMoney(defaultYearlyRewards)+" VXLC");$(function(){$('.staking-days-rangeslider-sec input[type="range"]').rangeslider({polyfill:false,onInit:function(){$('.staking-days-rangeslider-sec .header .pull-right').text($('.staking-days-rangeslider-sec input[type="range"]').val()+' days');},onSlide:function(position,value){$('.staking-days-rangeslider-sec .header .pull-right').text(value+' days');var arps=parseFloat((0.3+(value*0.7/365))*534247*(365/totalStakedValue));var arpsPercentage=arps*100
$('.arps').text(arpsPercentage.toFixed(2)+'%');var input=$('#fname').val();input=input?input:'1,000,000'
var number=Number(input.replace(/[^0-9.-]+/g,""));if(value<365){var YearlyRewards=parseFloat(number)/100*arpsPercentage/365*value;$('#yearReward').text(formatMoney(YearlyRewards)+" VXLC");}else{var rewardPercantage=$('#rewardpercentageYearly').val();var YearlyRewards=parseInt(number)*parseInt(rewardPercantage)/100;$('#yearReward').text(formatMoney(YearlyRewards)+" VXLC");}},onSlideEnd:function(position,value){}});});$('.staking-form #fname').on('blur',function(){const value=this.value.replace(/,/g,'');if(value!=''){this.value=parseFloat(value).toLocaleString('en-US',{style:'decimal',maximumFractionDigits:0,minimumFractionDigits:0});}});$('.page-id-259 .card-section a:nth-of-type(4)').on('click',function(e){e.preventDefault()
$('html, body').animate({scrollTop:$($('#mc4wp-form-1')).offset().top,},500,'linear')})
$(function(){$('.content-wrapper input[type="range"]').rangeslider({polyfill:false,onInit:function(){var sliderVal=$('.content-wrapper input[type="range"]').val();var convertedValue=formatMoney(sliderVal);$('.you-stake-wrapper .text-blue').text(convertedValue.toString()+" VXLC");var rewardPercantage=$('#rewardpercentage').val();var YearlyRewards=parseFloat(sliderVal)*parseFloat(rewardPercantage)/100;$('.rewards-wrapper > .text-blue').text(formatMoney(YearlyRewards)+" VXLC");},onSlide:function(position,value){$('.you-stake-wrapper .text-blue').text(formatMoney(value)+" VXLC");var rewardPercantage=$('.arp').text()
var days=$('.days-rangeslider-wrapper input[type="range"]').val();if(parseInt(days)<365){var apy=$('.arp').text()
var YearlyRewards=parseFloat(value)/100*parseFloat(apy).toFixed(2)/365*parseInt(days);$('.rewards-wrapper > .text-blue').text(formatMoney(YearlyRewards)+" VXLC");}else{var YearlyRewards=parseFloat(value)*parseFloat(rewardPercantage)/100;$('.rewards-wrapper > .text-blue').text(formatMoney(YearlyRewards)+" VXLC");}},});});var totalStaked=$('#totalstaked').val();var value=$('.days-rangeslider-wrapper input[type="range"]').val();var staked=parseInt(totalStaked,16)/1e18;var arp=parseFloat((0.3+(value*0.7/365))*534247*(365/staked));var arpPercentage=arp*100
$('.arp').text(arpPercentage.toFixed(2)+'%');$(function(){$('.days-rangeslider-wrapper input[type="range"]').rangeslider({polyfill:false,onInit:function(){$('.days-rangeslider-wrapper .header .pull-right').text($('.days-rangeslider-wrapper input[type="range"]').val()+' days');},onSlide:function(position,value){$('.days-rangeslider-wrapper .header .pull-right').text(value+' days');var totalStaked=$('#totalstaked').val();var staked=parseInt(totalStaked,16)/1e18;var arp=parseFloat((0.3+(value*0.7/365))*534247*(365/staked));var arpPercentage=arp*100
$('.arp').text(arpPercentage.toFixed(2)+'%');var rewardValue=$('.content-wrapper input[type="range"]').val();if(value<365){var YearlyRewards=parseFloat(rewardValue)/100*arpPercentage/365*value;$('.rewards-wrapper > .text-blue').text(formatMoney(YearlyRewards)+" VXLC");}else{var rewardPercantage=$('#rewardpercentage').val();var YearlyRewards=parseFloat(rewardValue)*parseFloat(rewardPercantage)/100;$('.rewards-wrapper > .text-blue').text(formatMoney(YearlyRewards)+" VXLC");}},onSlideEnd:function(position,value){}});});$('.menu-toggle').click(function(){if($('body').hasClass('menu-open')){$('body').removeClass('active');setTimeout(function(){$('body').removeClass('menu-open');},);}else{$('body').addClass('menu-open');setTimeout(function(){$('body').addClass('active');},);}});$('.close-image').click(function(){$('body').removeClass('menu-open');$('.menu-toggle').removeClass('open');setTimeout(function(){$('body').removeClass('active');},);});var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=0;$(window).scroll(function(event){didScroll=true;});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},250);function hasScrolled(){var st=$(this).scrollTop();if(Math.abs(lastScrollTop-st)<=delta)
return;if(st>lastScrollTop&&st>navbarHeight){$('.globalNav , .mobile-row-sec-wrapper').removeClass('nav-down').addClass('nav-up');}else{if(st+$(window).height()<$(document).height()){$('.globalNav , .mobile-row-sec-wrapper').removeClass('nav-up').addClass('nav-down');}}
lastScrollTop=st;}
$(window).scroll();var Accordion=function(el,multiple){this.el=el||{};this.multiple=multiple||false;var links=this.el.find('.link');links.on('click',{el:this.el,multiple:this.multiple},this.dropdown)}
Accordion.prototype.dropdown=function(e){var $el=e.data.el;$this=$(this),$next=$this.next();$next.slideToggle();$this.parent().toggleClass('open');if(!e.data.multiple){$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');};}
var accordion=new Accordion($('#accordion'),false);$(window).scroll();var Accordion=function(el,multiple){this.el=el||{};this.multiple=multiple||false;var links=this.el.find('.links');links.on('click',{el:this.el,multiple:this.multiple},this.dropdown)}
Accordion.prototype.dropdown=function(e){var $el=e.data.el;$this=$(this),$next=$this.next();$next.slideToggle();$this.parent().toggleClass('opens');if(!e.data.multiple){$el.find('.accordion-contents').not($next).slideUp().parent().removeClass('opens');};}
var accordion=new Accordion($('#accordions'),false);var sections=$('section'),nav=$('nav.pagenav'),nav_height=nav.outerHeight();$(window).on('scroll',function(){var cur_pos=$(this).scrollTop();sections.each(function(){var top=$(this).offset().top,bottom=top+$(this).outerHeight();if(cur_pos>=top-80&&cur_pos<=bottom){nav.find('a').removeClass('active');sections.removeClass('active');$(this).addClass('active');nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');}});});nav.find('a').on('click',function(){var $el=$(this),id=$el.attr('href');$('html, body').animate({scrollTop:$(id).offset().top-50},500);return false;});$(window).scroll(function(event){if($('div').hasClass('pagenav-section-wrapper')){var scroll=$(window).scrollTop();$('#pagenav').toggleClass('fixed',scroll>=$('#container-wrapper').offset().top);}});$(".targetDiv").hide();jQuery('#div2').show();jQuery('.showSingle').click(function(){jQuery('.targetDiv').fadeOut('.cnt');jQuery('#div'+$(this).attr('target')).fadeIn('100');});$(".showSingle").click(function(){$(".showSingle").removeClass("active");var targetid=$(this).attr('target');$('.wallet-section a').each(function(){var targetidInner=$(this).attr('target');if(targetid===targetidInner){$(this).addClass("active");}else{$(this).removeClass("active");}})});jQuery('.menu-toggle').click(function(){jQuery('.site-nav').toggleClass('site-nav--open',500);jQuery(this).toggleClass('open');});jQuery('#medium-blog-carousel').owlCarousel({loop:true,items:1,margin:5,autoplay:false,smartSpeed:900,responsive:{0:{items:1,},600:{items:1},768:{items:1},}})
$('#tabs-nav li:first-child').addClass('active');$('.tab-content').hide();$('.tab-content:first').show();$('#tabs-nav li').click(function(){$('#tabs-nav li').removeClass('active');$(this).addClass('active');$('.tab-content').hide();var activeTab=$(this).find('a').attr('href');$(activeTab).fadeIn();return false;});$('.myTag').on('click',function(){var target=$(this).attr('rel');$("."+target).show('slow').siblings("div").hide('slow');});$('.page-id-451 div#container-wrapper img , .page-id-474 div#container-wrapper img , .page-id-494 div#container-wrapper img ').attr('data-action','zoom');+function($){"use strict";function ZoomService(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null
this._$document=$(document)
this._$window=$(window)
this._$body=$(document.body)
this._boundClick=$.proxy(this._clickHandler,this)}
ZoomService.prototype.listen=function(){this._$body.on('click','[data-action="zoom"]',$.proxy(this._zoom,this))}
ZoomService.prototype._zoom=function(e){var target=e.target
if(!target||target.tagName!='IMG')
return
if(this._$body.hasClass('zoom-overlay-open'))
return
if(e.metaKey||e.ctrlKey)
return window.open(e.target.src,'_blank')
if(target.width>=(window.innerWidth-Zoom.OFFSET))
return
this._activeZoomClose(true)
this._activeZoom=new Zoom(target)
this._activeZoom.zoomImage()
this._$window.on('scroll.zoom',$.proxy(this._scrollHandler,this))
this._$document.on('keyup.zoom',$.proxy(this._keyHandler,this))
this._$document.on('touchstart.zoom',$.proxy(this._touchStart,this))
document.addEventListener('click',this._boundClick,true)
e.stopPropagation()}
ZoomService.prototype._activeZoomClose=function(forceDispose){if(!this._activeZoom)
return
if(forceDispose){this._activeZoom.dispose()}else{this._activeZoom.close()}
this._$window.off('.zoom')
this._$document.off('.zoom')
document.removeEventListener('click',this._boundClick,true)
this._activeZoom=null}
ZoomService.prototype._scrollHandler=function(e){if(this._initialScrollPosition===null)
this._initialScrollPosition=window.scrollY
var deltaY=this._initialScrollPosition-window.scrollY
if(Math.abs(deltaY)>=40)
this._activeZoomClose()}
ZoomService.prototype._keyHandler=function(e){if(e.keyCode==27)
this._activeZoomClose()}
ZoomService.prototype._clickHandler=function(e){e.stopPropagation()
e.preventDefault()
this._activeZoomClose()}
ZoomService.prototype._touchStart=function(e){this._initialTouchPosition=e.touches[0].pageY
$(e.target).on('touchmove.zoom',$.proxy(this._touchMove,this))}
ZoomService.prototype._touchMove=function(e){if(Math.abs(e.touches[0].pageY-this._initialTouchPosition)>10){this._activeZoomClose()
$(e.target).off('touchmove.zoom')}}
function Zoom(img){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null
this._targetImage=img
this._$body=$(document.body)
this._transitionDuration=300}
Zoom.OFFSET=80
Zoom.prototype.zoomImage=function(){var img=document.createElement('img')
img.onload=$.proxy(function(){this._fullHeight=Number(img.height)
this._fullWidth=Number(img.width)
this._zoomOriginal()},this)
img.src=this._targetImage.src}
Zoom.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement('div')
this._targetImageWrap.className='zoom-img-wrap'
this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage)
this._targetImageWrap.appendChild(this._targetImage)
$(this._targetImage).addClass('zoom-img').attr('data-action','zoom-out')
this._overlay=document.createElement('div')
this._overlay.className='zoom-overlay'
document.body.appendChild(this._overlay)
this._calculateZoom()
this._triggerAnimation()}
Zoom.prototype._calculateZoom=function(){this._targetImage.offsetWidth
var originalFullImageWidth=this._fullWidth
var originalFullImageHeight=this._fullHeight
var scrollTop=window.scrollY
var viewportHeight=(window.innerHeight-Zoom.OFFSET)
var viewportWidth=(window.innerWidth-Zoom.OFFSET)
var viewportAspectRatio=viewportWidth/viewportHeight
var imageAspectRatio=originalFullImageWidth/originalFullImageHeight
var imageTargetAspectRatio=this._targetImage.width/this._targetImage.height
this._trueHeight=this._targetImage.height
this._trueWidth=this._targetImage.width
if(imageAspectRatio<imageTargetAspectRatio){this._trueHeight=(this._fullHeight*this._targetImage.width)/this._fullWidth}else{this._trueWidth=(this._fullWidth*this._targetImage.height)/this._fullHeight}
var maxScaleFactor=originalFullImageWidth/this._trueWidth
if(originalFullImageWidth<viewportWidth&&originalFullImageHeight<viewportHeight){this._imgScaleFactor=maxScaleFactor}else if(imageAspectRatio<viewportAspectRatio){this._imgScaleFactor=(viewportHeight/originalFullImageHeight)*maxScaleFactor}else{this._imgScaleFactor=(viewportWidth/originalFullImageWidth)*maxScaleFactor}}
Zoom.prototype._triggerAnimation=function(){this._targetImage.offsetWidth
var imageOffset=$(this._targetImage).offset()
var scrollTop=$(window).scrollTop()
var viewportY=scrollTop+(window.innerHeight/2)
var viewportX=(window.innerWidth/2)
var imageCenterY=imageOffset.top+(this._trueHeight/2)
var imageCenterX=imageOffset.left+(this._trueWidth/2)
this._translateY=viewportY-imageCenterY
this._translateX=viewportX-imageCenterX
$(this._targetImage).velocity({scale:this._imgScaleFactor,height:this._trueHeight,width:this._trueWidth,},this._transitionDuration);$(this._targetImageWrap).velocity({translateX:this._translateX,translateY:this._translateY,translateZ:0,},this._transitionDuration);this._$body.addClass('zoom-overlay-open')}
Zoom.prototype.close=function(){this._$body.removeClass('zoom-overlay-open').addClass('zoom-overlay-transitioning')
$(this._targetImage).velocity('reverse',{duration:this._transitionDuration});var myself=this
$(this._targetImageWrap).velocity({translateX:0,translateY:0,},{duration:this._transitionDuration,complete:function(elements){myself.dispose()}});}
Zoom.prototype.dispose=function(){if(this._targetImageWrap&&this._targetImageWrap.parentNode){$(this._targetImage).removeClass('zoom-img').attr('data-action','zoom').css({'width':'','height':'','transform':''})
this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap)
this._overlay.parentNode.removeChild(this._overlay)
this._$body.removeClass('zoom-overlay-transitioning')}}
$(function(){new ZoomService().listen()})}(jQuery)
$('.enterprise-case-study-carousel').slick({dots:false,infinite:true,speed:500,fade:true,cssEase:'linear',adaptiveHeight:true,draggable:false});function sliderAnimatedHeader(){var caseHeight=jQuery(".enterprise-case-study-carousel article.slick-active .case-study--header").outerHeight();jQuery(".case-study--animated-header").height(caseHeight);jQuery(".enterprise-case-study-carousel article.slick-active").addClass("animate-active");}
sliderAnimatedHeader()
$('.enterprise-case-study-carousel').on('afterChange',function(event,slick,currentSlide,nextSlide){sliderAnimatedHeader()});$('.enterprise-case-study-carousel').on('beforeChange',function(event,slick,currentSlide,nextSlide){jQuery(".enterprise-case-study-carousel article").removeClass("animate-active");});$("a.link-wrapper , section#going-to-do a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash;});}});$(".link-btn-wrapper").click(function(event){event.preventDefault();var defaultAnchorOffset=0;var anchor=$(this).attr('data-attr-scroll');var anchorOffset=$('#'+anchor).attr('data-scroll-offset');if(!anchorOffset)
anchorOffset=defaultAnchorOffset;$('html,body').animate({scrollTop:$('#'+anchor).offset().top-anchorOffset},500);});$('form input[type="submit"], form input[type="file"]').before("<span class='button-hover'></span>");$('form input[type="submit"]').mouseenter(function(){$('.button-hover').addClass('grow');$('.upload-file .button-hover').removeClass('grow');}).mouseleave(function(){$('.button-hover').removeClass('grow');});$(' form input[type="file"]').mouseenter(function(){$('.upload-file .button-hover').addClass('grow');}).mouseleave(function(){$('.upload-file .button-hover').removeClass('grow');});$(".form-fileupload").attr("id","FileUpload");$('.form-fileupload').click(function(){$('#FileUpload').show();$('.btn').prop('disabled',false);$('#FileUpload').change(function(){var filename=$('#FileUpload').val().split('\\').pop();$('.resume-file-name').html(filename);});});$(".Coverletter .form-fileupload").attr("id","UploadCoverLetter");$('.Coverletter .form-fileupload').click(function(){$('#UploadCoverLetter').show();$('.btn').prop('disabled',false);$('#UploadCoverLetter').change(function(){var filename=$('#UploadCoverLetter').val().split('\\').pop();$('.coverletter-file-name').html(filename);});});$(window).scroll(function(event){if($('div').hasClass('careers-job-section')){var scroll=$(window).scrollTop();$('.jobs-details-sidebar-wrapper').toggleClass('section-fade',scroll>=$('.apply-section').offset().top);}});$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=100){$(".jobs-details-sidebar-wrapper").addClass("sidebar-fixed");}else{$(".jobs-details-sidebar-wrapper").removeClass("sidebar-fixed ");}});$(function(){if($('body').is('.home')){$('#myModalPrev').on('show.bs.modal',function(e){var idVideo=$(e.relatedTarget).data('id');$('#myModalPrev .modal-body').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+idVideo+'?autoplay=true"  frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"></iframe>');});$('#myModalPrev').on('hidden.bs.modal',function(){$('#myModalPrev .modal-body').empty();});var promise=document.querySelector('video').play();if(promise!==undefined){promise.then(_=>{}).catch(error=>{});}}})
$(window).scroll(function(event){if($('div').hasClass('partners-wrapper-section')){var scroll=$(window).scrollTop();$('#partners-wrapper').toggleClass('fixeds',scroll>=$('#partners-wrapper-sec').offset().top);}});$(document).ready(function(){$(document).on("scroll",onScroll);$('a[href^="#"]').on('click',function(e){e.preventDefault();$(document).off("scroll");$('a').each(function(){$(this).removeClass('active');})
$(this).addClass('active');var target=this.hash,menu=target;$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top+2},500,'swing',function(){window.location.hash=target;$(document).on("scroll",onScroll);});});});function onScroll(event){var scrollPos=$(document).scrollTop();$('#menu-center a').each(function(){var currLink=$(this);var refElement=$(currLink.attr("href"));if(refElement.position().top<=scrollPos&&refElement.position().top+refElement.height()>scrollPos){$('#menu-center ul li a').removeClass("active");currLink.addClass("active");}else{currLink.removeClass("active");}});}
if($("body").hasClass("page-template-partners")){const Strut={random(min,max){return Math.random()*(max-min)+min;},interpolate(a,b,i){return a*(1-i)+b*i;},clamp(num,min,max){return Math.max(Math.min(num,max),min);},ready(fn){if(document.readyState!=="loading"){fn();}else{document.addEventListener("DOMContentLoaded",fn);}},};function LogoBubbles(conf){const self=this;for(i in conf){self[i]=conf[i];}
self.container=document.querySelector(self.containerSelector);self.noiseT=0;self.scrollX=0;self.logos.forEach((l,i)=>{self.logos[i]={index:i,title:l};});shuffleArray(self.logos);self.vertShrink=0;updateVertShrink();window.addEventListener("resize",updateVertShrink);self.playing=false;updatePlayState();window.addEventListener("scroll",updatePlayState);for(var i=0;i<self.bubbles.length;i+=1){const b=self.bubbles[i];const logoIndex=i%self.logos.length;b.scale=b.s||1;b.seedX=Math.random()*10000;b.seedY=Math.random()*10000;b.noiseX=0;b.noiseY=0;b.introDelay=Math.random()*self.introDelay;b.introProgress=0;let str=self.logos[logoIndex].title;str=str.replace(/\s+/g,"-").toLowerCase();b.el=document.createElement("div");b.el.className=`${ self.classPrefix } ${ str }`;b.tagEl=document.createElement("span");b.tagEl.innerHTML=self.logos[logoIndex].title;b.el.appendChild(b.tagEl);render(b);self.container.appendChild(b.el);}
function updateVertShrink(){self.vertShrink=reverseInterpolate(1000,100,window.innerHeight);self.vertShrink=clamp(self.vertShrink,0,1);}
function updatePlayState(){const rect=self.container.getBoundingClientRect();if((rect.bottom<0||rect.top>window.innerHeight)&&self.playing===true){self.playing=false;}else if(rect.bottom>0&&rect.top<window.innerHeight&&self.playing===false){self.playing=true;requestAnimationFrame((t)=>{self.tick(t)});}}
function render(b){const paramB=b;const absX=paramB.x+paramB.noiseX+self.scrollX;let absY=paramB.y+paramB.noiseY;absY=interpolate(absY,self.containerHeight/2,self.vertShrink*self.maxShrink);if(absX<-200){paramB.x+=self.containerWidth;}
let sc=ease(paramB.introProgress)/20+0.95;sc*=paramB.scale;paramB.el.style.opacity=ease(paramB.introProgress);paramB.el.style.transform=`translate(${ absX }px, ${ absY }px) scale(${ sc })`;}
function shuffleArray(array){const arg=array;let i=0;let j=0;let temp=null;for(i=arg.length-1;i>0;i-=1){j=Math.floor(Math.random()*(i+1));temp=arg[i];arg[i]=arg[j];arg[j]=temp;}}
function ease(t){return t<.5?2*t*t:-1+(4-2*t)*t;}
function interpolate(a,b,i){return a*(1-i)+b*i;}
function reverseInterpolate(a,b,i){return(i-a)/(b-a);}
function clamp(num,min,max){return Math.max(Math.min(num,max),min);}
self.firstTick=null;self.lastTick=0;self.tick=(timer)=>{let paramTimer=timer;if(!self.firstTick){self.firstTick=paramTimer;}
paramTimer-=self.firstTick;const delta=paramTimer-self.lastTick;self.lastTick=paramTimer;self.noiseT+=delta*self.noiseSpeed;self.scrollX-=delta*self.scrollSpeed;for(let i=0;i<self.bubbles.length;i+=1){const b=self.bubbles[i];b.noiseX=noise(b.seedX+self.noiseT)*self.noiseScale-self.noiseScale/2;b.noiseY=noise(b.seedY+self.noiseT)*self.noiseScale-self.noiseScale/2;if(self.logosLoaded&&b.introProgress<1&&paramTimer>b.introDelay){b.introProgress=Math.min(1,b.introProgress+(delta/self.introDuration));}
render(b);}
if(self.playing){requestAnimationFrame(self.tick);}};}
const bubbles=[{s:1,x:662,y:200},{s:1,x:80,y:372},{s:.7,x:404,y:90},{s:.7,x:2647,y:293},{s:.6,x:1136,y:102},{s:1,x:-113,y:230},{s:.8,x:1337,y:230},{s:0.6,x:1320,y:398},{s:1,x:2310,y:362},{s:.8,x:855,y:362},{s:.7,x:1080,y:280},{s:.7,x:550,y:398},{s:.8,x:352,y:293},{s:.7,x:78,y:139},{s:.7,x:1822,y:293},{s:.7,x:900,y:160},{s:.7,x:1550,y:139},{s:1,x:1600,y:362},{s:1,x:2052,y:230},{s:.7,x:1878,y:102},{s:.7,x:2250,y:139},{s:.7,x:2520,y:102}];const logos=["Afghanistan Ministry of Health","United Arab Emirates","Chainlink","MasterCard","Frontier","Dun Bradstreet","AS Monaco","OKEx","Monaco Goverment","AS Monaco FC","MasterCard","Formula-e","AS Monaco","Traditionalist Communion","Jumio","Ren","API3","x","The Graph"];Strut.ready(()=>{window.logoBubbles=new LogoBubbles({bubbles,logos,classPrefix:"Icon Icon-img",containerSelector:".IconsContainer",containerWidth:3000,containerHeight:460,maxShrink:0.1,noiseSpeed:0.000055,noiseScale:80,scrollSpeed:0.0175,introDelay:1500,introDuration:1500});});"use strict";const PERLIN_SIZE=4095;const perlinOctaves=4;const perlinAmpFalloff=0.5;const scaledCosine=i=>0.5*(1.0-Math.cos(i*Math.PI));let perlin;let noise=x=>{let paramX=x;if(perlin==null){perlin=new Array(PERLIN_SIZE+1);for(let i=0;i<PERLIN_SIZE+1;i+=1){perlin[i]=Math.random();}}
if(paramX<0){paramX=-paramX;}
let xi=Math.floor(paramX);let xf=paramX-xi;let rxf;let r=0;let ampl=0.5;let n1;for(let o=0;o<perlinOctaves;o+=1){rxf=scaledCosine(xf);n1=perlin[xi&PERLIN_SIZE];n1+=rxf*(perlin[(xi+1)&PERLIN_SIZE]-n1);r+=n1*ampl;ampl*=perlinAmpFalloff;xi<<=1;xf*=2;if(xf>=1.0){xi+=1;xf-=1;}}
return r;};}
$(function(){$(".hero-text-wrapper").typed({strings:["Digital Assets","Institutional Finance","Central Bank Digital Currency","DeFi","Real Estate","Smart Healthcare"],typeSpeed:70,backSpeed:20,backDelay:1500,showCursor:true,loop:true});});$(window).scroll(function(){if($(this).scrollTop()>2){$('body').addClass("show-header-background");}else{$('body').removeClass("show-header-background");}});if(jQuery('body').hasClass('home')){var editor=CodeMirror.fromTextArea(document.getElementById("code"),{theme:"solidity",matchBrackets:true,indentUnit:4,lineNumbers:true,tabSize:8,indentWithTabs:true,mode:"text/x-solidity"});var editor=CodeMirror.fromTextArea(document.getElementById("code2"),{theme:"solidity",matchBrackets:true,indentUnit:4,lineNumbers:true,tabSize:8,indentWithTabs:true,mode:"text/x-solidity"});}
if($("body").hasClass("page-template-new-get-started")){$(window).scroll(function(event){if($('div').hasClass('get-started-points-sec')){var scroll=$(window).scrollTop();$('#menu-center').toggleClass('fixeds',scroll>=$('#get-started-points-sec').offset().top);}});}
$('.partners-tab-section .tab-link').click(function(){var tabID=$(this).attr('data-tab');$(this).addClass('active').siblings().removeClass('active');$('.partners-tab-section #tab-'+tabID).addClass('active').siblings().removeClass('active');});$('.vxlnetwork-ecosystem-section .tab-link').click(function(){var tabID=$(this).attr('data-tab');$(this).addClass('vxlnetwork-ecosystem-tab-active').siblings().removeClass('vxlnetwork-ecosystem-tab-active');$('.vxlnetwork-ecosystem-section #tab-'+tabID).addClass('vxlnetwork-ecosystem-tab-active').siblings().removeClass('vxlnetwork-ecosystem-tab-active');});$(function(){$('.vxlnetwork-ecosystem-section .tab-link').click(function(){$('.vxlnetwork-ecosystem-section .tab-link.vxlnetwork-ecosystem-tab-active').removeClass('vxlnetwork-ecosystem-tab-active');$(this).addClass('vxlnetwork-ecosystem-tab-active');});});jQuery('#vxlnetwork-ecosystem-tab').owlCarousel({loop:false,items:5,margin:0,autoWidth:true,nav:false,dots:false,autoplay:false,smartSpeed:900});$('.where-to-buy-card-sec .tab-link').click(function(){var tabID=$(this).attr('data-tab');$(this).addClass('active').siblings().removeClass('active');$('.where-to-buy-card-sec #tab-'+tabID).addClass('active').siblings().removeClass('active');});$("li.tab-link.nav__link").click(function(){$(".nav__slider-rect").css({left:$(this).prevAll().length*document.getElementById("fistNavButton").clientWidth+
"px",});});});