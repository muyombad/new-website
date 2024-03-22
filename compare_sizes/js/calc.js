var csi='';
function calculateF(form,size1,size2,size3,size4,cookie,calctype){
g('SizeTabWrap').style.display="block";
var mconvert=getCookie('mconvert');
if(cookie=="yes"){if(getCookie("equal") == 'yes'){toptab2();size4=getCookie("carwheel")}}
if(calctype == "HeightCalc"){size4=''}

size2=size2.replace('950','9.5');size2=size2.replace('1050','10.5');size2=size2.replace('1150','11.5');size2=size2.replace('1250','12.5');size2=size2.replace('1350','13.5');
var sw=parseFloat(size1);var as=parseFloat(size2);var rim=parseFloat(size3);var nrim=parseFloat(size4);
if(size4 != ''){g('tab1').setAttribute("onclick","toptab1();calculateF(tirecalc,tirecalc.sw.value,tirecalc.as.value,tirecalc.rim.value,tirecalc.nrim.value,'','"+calctype+"')");calctype=calctype+'Equal'}

if(!(sw > 0 && as > 0 && rim > 0)){alert('Please fill all fields with numbers only.')}else{
form.sw.value=sw;form.as.value=as;form.rim.value=rim;
if (sw>99){
form.circumference.value = Math.round(((((2 * sw * as) / 2540) + rim)*3.14)*10)/10 + "\"";
form.sidewall.value = Math.round((sw * as / 100 / 25.4) * 10)/10 + "\"";
//form.revs.value = Math.round(((5280 * 12) / ((((2 * sw * as) / 2540) + rim)*3.14))*1.03);
form.revs.value = Math.round((5280 * 12) / ((((2 * sw * as) / 2540) + rim)*3.14));
form.rim2.value=rim;
if(g('des')){g('des').innerHTML='X'}

if(calctype == undefined || calctype.search("Calc") != -1){
form.diameter.value = Math.round((((2 * sw * as) / 2540) + rim)*10)/10 + "\"";
form.width.value = Math.round(sw / 25.4 * 10)/10 + "\"";
form.diameter2.value = Math.round((((2 * sw * as) / 2540) + rim)*10)/10 + "\"";
form.width2.value = Math.round(sw / 25.4 * 10)/10 + "\"";
}else{
form.diameter.value = Math.round((((2 * sw * as) / 2540) + rim)*10)/10;
form.width.value = Math.round(sw / 25.4 * 10)/10;
form.diameter2.value = Math.round((((2 * sw * as) / 2540) + rim)*10)/10;
form.width2.value = Math.round(sw / 25.4 * 10)/10;
}

g('viswidth').innerHTML=Math.round(sw / 25.4 * 10)/10 + "\"";
g('visheight').innerHTML=Math.round((((2 * sw * as) / 2540) + rim)*10)/10 + "\"";
g('viswheel').innerHTML=rim+"\"";
g('visside').innerHTML=form.sidewall.value;
g('visArrowtyres').innerHTML=form.circumference.value;
g('visrevs').innerHTML=form.revs.value+' Revs/Mile';
g('eqin').innerHTML=parseFloat(form.diameter.value)+"X"+parseFloat(form.width.value)+"R"+rim;
g('eqmet').innerHTML=sw+"/"+as+"R"+rim;

if(size4 != ""){
g('eqin').innerHTML=parseFloat(form.diameter.value)+"X"+parseFloat(form.width.value)+"R"+nrim;
nas = Math.round(((parseFloat(form.diameter.value)-size4)/2*2540)/sw);
g('eqmet').innerHTML=sw+"/"+nas+"R"+nrim;
g('viswheel').innerHTML=nrim+"\"";
g('visside').innerHTML=(Math.round(((parseFloat(form.diameter.value)-nrim)/2)*10)/10)+"\"";

var size=sw+"-"+nas+"R"+nrim;
form.rim2.value=nrim;
form.nrim.value=nrim;
viewerCalc('nrim','met');
setCookie("carwheel",nrim,90);
setCookie("equal","yes",90);
var wheel=nrim;

}else{viewerCalc();var size=sw+"-"+as+"R"+rim;var wheel=rim;setCookie("carwheel",rim,90);setCookie("equal","no",90);}

}if (sw<100){
form.circumference.value = Math.round((sw * 3.14)*10)/10 + "\"";
form.sidewall.value = Math.round(((sw - rim) / 2) * 10)/10 + "\"";
//form.revs.value = Math.round((5280 * 12 / (sw * 3.14))*1.03);
form.revs.value = Math.round(5280 * 12 / (sw * 3.14));
form.rim2.value=rim;
if(g('des')){g('des').innerHTML='/'}

if(calctype == undefined || calctype.search("Calc") != -1){
form.width2.value = Math.round(((parseFloat(form.diameter.value)-rim)/2*100)/as);
form.diameter2.value=Math.round(as*25.4);
form.diameter.value = sw + "\"";
form.width.value = as + "\"";
}else{
form.diameter.value = sw;
form.width.value = as;
form.width2.value = Math.round(((parseFloat(form.diameter.value)-rim)/2*100)/as);
form.diameter2.value=Math.round(as*25.4);
}

g('viswidth').innerHTML=form.width.value;
g('visheight').innerHTML=form.diameter.value;
g('viswheel').innerHTML=rim+"\"";
g('visside').innerHTML=form.sidewall.value;
g('visArrowtyres').innerHTML=form.circumference.value;
g('visrevs').innerHTML=form.revs.value+' Revs/Mile';
g('eqin').innerHTML=parseFloat(form.diameter.value)+"X"+parseFloat(form.width.value)+"R"+rim;
Eas = Math.round(((parseFloat(form.diameter.value)-size3)/2*100)/as);
g('eqmet').innerHTML=Math.round(as*25.4)+"/"+Eas+"R"+rim;

if(size4 != ""){
g('eqin').innerHTML=parseFloat(form.diameter.value)+"X"+parseFloat(form.width.value)+"R"+nrim;
Eas = Math.round(((parseFloat(form.diameter.value)-size4)/2*100)/as);
g('eqmet').innerHTML=Math.round(as*25.4)+"/"+Eas+"R"+nrim;
g('viswheel').innerHTML=nrim+"\"";
g('visside').innerHTML=(Math.round(((parseFloat(form.diameter.value)-nrim)/2)*10)/10)+"\"";

var size=sw+"-"+as+"R"+nrim;
form.rim2.value=nrim;
form.nrim.value=nrim;
viewerCalc('nrim','in');
setCookie("carwheel",nrim,90);
setCookie("equal","yes",90);
var wheel=nrim;

}else{viewerCalc();var size=sw+"-"+as+"R"+rim;var wheel=rim;setCookie("carwheel",rim,90);setCookie("equal","no",90);}

size=size.replace(".5R",".50R");
}

var diameter=Math.round(parseFloat(form.diameter.value));
var height=parseFloat(form.diameter.value);
var width=parseFloat(form.width.value);
g('Vehicle').style.display="none";

//if(mconvert=='mm'){var link=diameter+"-"+wheel+"-"+height+"-mm.htm";var linkend="-mm.htm"}else{var link=diameter+"-"+wheel+"-"+height+".htm";var linkend=".htm"}
var link=diameter+"-"+wheel+"-"+height;
var num1;var num2;var num3;
if(diameter<30){
    if(wheel==22){num1=20;num2=23;num3=24;}
    else if(wheel==23){num1=22;num2=24;num3=26;}
    else if(wheel==24){num1=20;num2=22;num3=23;}
    else{num1=wheel-1;num2=wheel+1;num3=wheel+2;}
}else{
    if(wheel==16.5){num1=15;num2=16;num3=17;}
    else if(wheel==15){num1=16;num2=17;num3=18;}
    else if(wheel==16){num1=15;num2=17;num3=18;}
    else if(wheel==17){num1=16;num2=18;num3=20;}
    else if(wheel==18){num1=17;num2=20;num3=22;}
    else if(wheel==19){num1=18;num2=20;num3=22;}
    else if(wheel==20){num1=18;num2=22;num3=24;}
    else if(wheel==21){num1=20;num2=22;num3=24;}
    else if(wheel==22){num1=20;num2=24;num3=26;}
    else if(wheel==23){num1=24;num2=26;num3=28;}
    else if(wheel==24){num1=22;num2=26;num3=28;}
    else if(wheel==26){num1=24;num2=28;num3=30;}
    else if(wheel==28){num1=24;num2=26;num3=30;}
    else if(wheel==30){num1=24;num2=26;num3=28;}
    else{num1=wheel-1;num2=wheel+1;num3=wheel+2;}
}
g('SizeTabWrap').innerHTML="<a id=\"num"+wheel+"\" class=\"numunselected\" onclick=\"getSizes('"+diameter+"-"+wheel+"-"+height+"','"+diameter+"','"+wheel+"');ga('send','event','CalcRimTabs','"+size+"','"+wheel+"')\">"+wheel+"\" Wheel</a><a id=\"num"+num1+"\" class=\"numunselected\" onclick=\"getSizes('"+diameter+"-"+num1+"-"+height+"','"+diameter+"','"+num1+"');ga('send','event','CalcRimTabs','"+size+"','"+num1+"')\">"+num1+"\"</a><a id=\"num"+num2+"\" class=\"numunselected\" onclick=\"getSizes('"+diameter+"-"+num2+"-"+height+"','"+diameter+"','"+num2+"');ga('send','event','CalcRimTabs','"+size+"','"+num2+"')\">"+num2+"\"</a><a id=\"num"+num3+"\" class=\"numunselected\" onclick=\"getSizes('"+diameter+"-"+num3+"-"+height+"','"+diameter+"','"+num3+"');ga('send','event','CalcRimTabs','"+size+"','"+num3+"')\">"+num3+"\"</a>";

//this shows correct sug sizes
if(cookie == 'yes'){
getSizes(link,diameter,wheel);
var test=getCookie("displaytires");
findCookieTires(test);
var calc=getCookie("Calculator");
if(calc != 'Comp'){ga('send','event','CookieUsed',calctype,size);}
}else{

//if((window.innerWidth<768) && (g('buyonline'))){
//g('buyonline').style.display="block";
//g('buyonline').innerHTML='<a onclick="setCookie(\'buyonline\',\'clicked\',90);" hre="/buying-tires-online/">Should I Buy Tires Online? &#8680;</a>';
//    setTimeout(function(){
//    g('buyonline').style.display="none";
//    }, 10000);
//}

setCookie("wheel",rim,90);
g('CalcWrap').style.cssText="-webkit-transition:all .5s;transition:all .5s";
g('calctab').style.cssText="-webkit-transition:all .5s;transition:all .5s";
g('DisplayTires1').style.cssText="-webkit-transform:-webkit-translate3d(350px,0,0);transform:translate3d(350px,0,0)";
    setTimeout(function(){
	getSizes(link,diameter,wheel);
    }, 600);
// findCookieTires(size);
// if(calctype=='ChangeRimEqual'){
// ga('send', 'event', 'ChangeRim', size);}else{ga('send', 'event', 'CalcUsed', calctype, size);
// }
}

g('sugdisplay').style.display="block";
setCookie("height",sw,90);
setCookie("width",as,90);
setCookie("diameter",Math.round(parseFloat(form.diameter.value)),90);
setCookie("actual",parseFloat(form.diameter.value),90);

if (document.all && !window.atob) {
g('CalcWrap').style.marginTop="172px";
g('calctab').style.marginTop="175px";
}else if(window.matchMedia("(min-width:768px)").matches){
g('CalcWrap').style.marginTop="172px";
g('calctab').style.marginTop="175px";
}
else{
if(cookie!='yes'){setTimeout(function(){slideMenu('Equivalent',30)},300);}
}

g('byD').innerHTML='<select class="calcbydiameter" onchange="location.hre=this.options[this.selectedIndex].value;ga(\'send\', \'event\', \'DiameterLinks\',\'CalcPages\',this.options[this.selectedIndex].text)"><option value="#">Search Tires By Diameter</option><option value="../../tiresizes/29-inch-tires/index.html">29 Inch Tires</option><option value="../../tiresizes/30-inch-tires/index.html">30 Inch Tires</option><option value="../../tiresizes/31-inch-tires/index.html">31 Inch Tires</option><option value="../../tiresizes/32-inch-tires/index.html">32 Inch Tires</option><option value="../../tiresizes/33-inch-tires/index.html">33 Inch Tires</option><option value="../../tiresizes/34-inch-tires/index.html">34 Inch Tires</option><option value="../../tiresizes/35-inch-tires/index.html">35 Inch Tires</option><option value="../../tiresizes/36-inch-tires/index.html">36 Inch Tires</option><option value="../../tiresizes/37-inch-tires/index.html">37 Inch Tires</option><option value="../../tiresizes/38-inch-tires/index.html">38 Inch Tires</option><option value="../../tiresizes/39-inch-tires/index.html">39 Inch Tires</option><option value="../../tiresizes/40-inch-tires/index.html">40 Inch Tires</option><option value="../../tiresizes/41-inch-tires/index.html">41 Inch Tires</option><option value="../../tiresizes/42-inch-tires/index.html">42 Inch Tires</option><option value="../../tiresizes/43-inch-tires/index.html">43 Inch Tires</option><option value="../../tiresizes/44-inch-tires/index.html">44 Inch Tires</option><option value="../../tiresizes/46-inch-tires/index.html">46 Inch Tires</option><option value="../../tiresizes/47-inch-tires/index.html">47 Inch Tires</option><option value="../../tiresizes/49-inch-tires/index.html">49 Inch Tires</option><option value="../../tiresizes/54-inch-tires/index.html">54 Inch Tires</option></select>';
if(mconvert=='mm'){mConvert('mm','','calc');}
};
g('trysparetire').innerHTML="<a hre=\"../../index.html\">Need a Spare?</a>";
g('trysparetire2').innerHTML="<a hre=\"https://sparetire.com/\">Need a Spare?</a>";
g('trypresscalc').innerHTML="<a onclick=\"ga('send','event','pressCalcLink','Calc')\" hre=\"/pressure-calculator/\">What Tire Pressure to Run?</a>";
g('trypresscalc2').innerHTML="<a onclick=\"ga('send','event','pressCalcLink','Calc Mobile')\" hre=\"/pressure-calculator/\">What Tire Pressure to Run?</a>";
}//calculateF close

function showSpareTire(linktype){
	var alerttop = window.pageYOffset+100;
	g('alert').className="alertcss";
	g('alert').innerHTML="Looking to replace, or find a spare tire for a vehicle that doesn't have one?<br><br>Visit <a onclick=\"ga('send','event','spareCalcLink','"+linktype+"')\" hre=\"https://sparetire.com\">SpareTire.com</a> for more details.<div class=\"alertclose\" onclick=\"closeSpareTire()\">close</div>";
	g('alert').style.top=alerttop+'px';
}

function closeSpareTire(){
	g('alert').className="alert";
}

function calculateG(form,size1,size2,size3,size4,size5,size6,cookie,calctype){
var mconvert=getCookie('mconvert');
size2=size2.replace('950','9.5');size2=size2.replace('1050','10.5');size2=size2.replace('1150','11.5');size2=size2.replace('1250','12.5');size2=size2.replace('1350','13.5');
size5=size5.replace('950','9.5');size5=size5.replace('1050','10.5');size5=size5.replace('1150','11.5');size5=size5.replace('1250','12.5');size5=size5.replace('1350','13.5');

var sw=parseFloat(size1);var as=parseFloat(size2);var rim=parseFloat(size3);var swb=parseFloat(size4);var asb=parseFloat(size5);var rimb=parseFloat(size6);

if(!(sw > 0 && as > 0 && rim > 0 && swb > 0 && asb > 0 && rimb > 0)){alert('Please fill all fields with numbers only.')}else{
form.sw.value=sw;form.as.value=as;form.rim.value=rim;form.swb.value=swb;form.asb.value=asb;form.rimb.value=rimb;
if (sw>99){
form.diameter.value = Math.round((((2 * sw * as) / 2540) + rim)*10)/10 + "\"";
form.circumference.value = Math.round(((((2 * sw * as) / 2540) + rim)*3.14)*10)/10 + "\"";
form.width.value = Math.round(sw / 25.4 * 10)/10 + "\"";
form.sidewall.value = Math.round((sw * as / 100 / 25.4) * 10)/10 + "\"";
//form.revs.value = Math.round(((5280 * 12) / ((((2 * sw * as) / 2540) + rim)*3.14))*1.03);
form.revs.value = Math.round((5280 * 12) / ((((2 * sw * as) / 2540) + rim)*3.14));
g('viswidth1').innerHTML=form.width.value;
g('visheight1').innerHTML=form.diameter.value;
g('viswheel1').innerHTML=rim+"\"";
g('visside1').innerHTML=form.sidewall.value;
g('visArrowtyres1').innerHTML=form.circumference.value;
g('visrevs1').innerHTML=form.revs.value+' Revs/Mile';
}if (sw<100){
form.diameter.value = sw + "\"";
form.circumference.value = Math.round((sw * 3.14)*10)/10 + "\"";
form.width.value = as + "\"";
form.sidewall.value = Math.round(((sw - rim) / 2) * 10)/10 + "\"";
//form.revs.value = Math.round((5280 * 12 / (sw * 3.14))*1.03);
form.revs.value = Math.round(5280 * 12 / (sw * 3.14));
g('viswidth1').innerHTML=form.width.value;
g('visheight1').innerHTML=form.diameter.value;
g('viswheel1').innerHTML=rim+"\"";
g('visside1').innerHTML=form.sidewall.value;
g('visArrowtyres1').innerHTML=form.circumference.value;
g('visrevs1').innerHTML=form.revs.value+' Revs/Mile';
}if (swb>99){
form.diameterb.value = Math.round((((2 * swb * asb) / 2540) + rimb)*10)/10 + "\"";
form.circumferenceb.value = Math.round(((((2 * swb * asb) / 2540) + rimb)*3.14)*10)/10 + "\"";
form.widthb.value = Math.round(swb / 25.4 * 10)/10 + "\"";
form.sidewallb.value = Math.round((swb * asb / 100 / 25.4) * 10)/10 + "\"";
//form.revsb.value = Math.round(((5280 * 12) / ((((2 * swb * asb) / 2540) + rimb)*3.14))*1.03);
form.revsb.value = Math.round((5280 * 12) / ((((2 * swb * asb) / 2540) + rimb)*3.14));
g('viswidth2').innerHTML=form.widthb.value;
g('visheight2').innerHTML=form.diameterb.value;
g('viswheel2').innerHTML=rimb+"\"";
g('visside2').innerHTML=form.sidewallb.value;
g('visArrowtyres2').innerHTML=form.circumferenceb.value;
g('visrevs2').innerHTML=form.revsb.value+' Revs/Mile';
}if (swb<100){
form.diameterb.value = swb + "\"";
form.circumferenceb.value = Math.round((swb * 3.14)*10)/10 + "\"";
form.widthb.value = asb + "\"";
form.sidewallb.value = Math.round(((swb - rimb) / 2) * 10)/10 + "\"";
form.revsb.value = Math.round(5280 * 12 / (swb * 3.14));
g('viswidth2').innerHTML=form.widthb.value;
g('visheight2').innerHTML=form.diameterb.value;
g('viswheel2').innerHTML=rimb+"\"";
g('visside2').innerHTML=form.sidewallb.value;
g('visArrowtyres2').innerHTML=form.circumferenceb.value;
g('visrevs2').innerHTML=form.revsb.value+' Revs/Mile';
}
setCookie("preheight",sw,90);
setCookie("prewidth",as,90);
setCookie("prewheel",rim,90);
setCookie("compheight",swb,90);
setCookie("compwidth",asb,90);
setCookie("compwheel",rimb,90);
setCookie("compdiameter",Math.round(parseFloat(form.diameterb.value)),90);
setCookie("compactual",parseFloat(form.diameterb.value),90);

var dia1=parseFloat(form.diameter.value);
var dia2=parseFloat(form.diameterb.value);

speed.spd20.value = Math.round((dia2 / dia1)*(20)*10)/10;speed.spd30.value = Math.round((dia2 / dia1)*(30)*10)/10;speed.spd40.value = Math.round((dia2 / dia1)*(40)*10)/10;speed.spd50.value = Math.round((dia2 / dia1)*(50)*10)/10;
speed.spd60.value = Math.round((dia2 / dia1)*(60)*10)/10;speed.spd70.value = Math.round((dia2 / dia1)*(70)*10)/10;speed.spd80.value = Math.round((dia2 / dia1)*(80)*10)/10;speed.spd90.value = Math.round((dia2 / dia1)*(90)*10)/10;

pdia = Math.round((((parseFloat(form.diameterb.value) / parseFloat(form.diameter.value))-1)*100)*10)/10;
if (pdia>0){form.pdiameterb.value = "+"+pdia+"%";}else{form.pdiameterb.value = pdia+"%";}
pwidth = Math.round((((parseFloat(form.widthb.value) / parseFloat(form.width.value))-1)*100)*10)/10;
if (pwidth>0){form.pwidthb.value = "+"+pwidth+"%";}else{form.pwidthb.value = pwidth+"%";}
pcircumference = pdia;
if (pcircumference>0){form.pcircumferenceb.value = "+"+pcircumference+"%";}else{form.pcircumferenceb.value = pcircumference+"%";}
psidewall = Math.round((((parseFloat(form.sidewallb.value) / parseFloat(form.sidewall.value))-1)*100)*10)/10;
if (psidewall>0){form.psidewallb.value = "+"+psidewall+"%";}else{form.psidewallb.value = psidewall+"%";}
prevs=form.revsb.value-form.revs.value
if (prevs>0){form.prevsb.value = "+"+prevs;}else{form.prevsb.value = prevs;}


//g('trywheelcalc').innerHTML="<a onclick=\"ga('send','event','offsetCalcLink','Calc')\" hre=\"/wheel-offset-calculator/\">Looking to Compare Wheel Offset?</a><a onclick=\"ga('send','event','pressCalcLink','CalcComp')\" hre=\"/pressure-calculator/\">What Tire Pressure to Run?</a><a onclick=\"showSpareTire('CalcComp')\">Need a Spare?</a>";
g('trywheelcalc').innerHTML="<a onclick=\"ga('send','event','offsetCalcLink','Calc')\" hre=\"/wheel-offset-calculator/\">Looking to Compare Wheel Offset?</a><a onclick=\"ga('send','event','pressCalcLink','CalcComp')\" hre=\"/pressure-calculator/\">What Tire Pressure to Run?</a><a hre=\"https://sparetire.com/\">Need a Spare?</a>";

var diameter=Math.round(parseFloat(form.diameterb.value));
var height=parseFloat(form.diameterb.value);
var width=parseFloat(form.widthb.value);
var wheel=rimb;
var size=swb+"-"+asb+"R"+rimb;
size=size.replace(".5R",".50R");
//if(mconvert=='mm'){var link=diameter+"-"+wheel+"-"+height+"-mm.htm";}else{var link=diameter+"-"+wheel+"-"+height+".htm";}
var link=diameter+"-"+wheel+"-"+height;

if(cookie=="yes"){
var calc=getCookie("Calculator");
if(calc == 'Comp'){ga('send','event','CookieUsed',calctype,'Compare')}
//findCookieTires(size);
g('sugdisplay').style.display="block";
}else{
ga('send','event','CalcUsed',calctype,'Compare');
findCookieTires(size);
g('sugdisplay').style.display="block";
}

viewerComp();
if (document.all && !window.atob) {
g('CalcWrap').style.marginTop="172px";
g('calctab').style.marginTop="175px";
}else if(window.matchMedia("(min-width:768px)").matches){
g('CalcWrap').style.marginTop="172px";
g('calctab').style.marginTop="175px";
}
else{
//if(cookie!='yes'){setTimeout(function(){slideMenu('Viewer',30)},300);}
}

if(getCookie('mconvert')=='mm'){mConvert('mm','','comp');}
}//if fields aren't empty close
}//calculateG close

var http2 = false;var http2 = new XMLHttpRequest();
var http3 = false;var http3 = new XMLHttpRequest();
var tirepage;

function findCookieTires(tiresize,slide){
if(slide=='slide' && window.innerWidth>767){slideMenu('goTop',40)}
if(csi==''){
http2.onreadystatechange=function(){if(http2.readyState == 4){csi=http2.responseText;gdTires()}}
http2.open("index.html", "index.html", true);
http2.send();
}else{gdTires()}

function gdTires(){
if(csi.search(tiresize) == -1){var gofor=2}else{var gofor=1}
if(gofor==2 && csi != '' && csi != undefined){
g('sugdisplay').innerHTML="<div class='notires'><span>"+tiresize+"</span><br>There are no Tires Available<br>in the Calculated Size.<br><br>Please Calculate Again or<br>Select an Alternate Size<br>to see Available Tires.</div>";
if(window.matchMedia("(max-width:767px)").matches){choosesize();}else{g('Vehicle').style.display="block"}
g('gotosize').innerHTML='';
}else{

var link3=tiresize+".htm";
    var url3="/sizes2/"+link3;
    http3.abort();
    http3.open("index.html", url3, true);
    http3.send(url3);
    http3.onreadystatechange=function() {
        if(http3.readyState == 4) {
if (http3.status === 404 || http3.status === 300) {
g('sugdisplay').innerHTML="<div class='notires'><span>"+tiresize+"</span><br>There are no Tires Available<br>in the Calculated Size.<br><br>Please Calculate Again or<br>Select an Alternate Size<br>to see Available Tires.</div>";
if(window.matchMedia("(max-width:767px)").matches){choosesize();}else{g('Vehicle').style.display="block";}
g('gotosize').innerHTML='';
} else {
tirepage=http3.responseText;
g('sugdisplay').innerHTML=tirepage;
if(window.matchMedia("(max-width:767px)").matches){choosetire();}else{g('Vehicle').style.display="none";}
var tiretype=getCookie("tiretype");
var tiretypetext=getCookie("tiretypetext");
//sortType(tiretype,tiretypetext,tirepage);
var gotolink=tiresize;
if(tirecalc.sw.value <100){gotolink=gotolink.replace("-","X");var gotosize=gotolink}else{var gotosize=gotolink.replace("-","../../index.html")}
g('gotosize').innerHTML="<a onclick=\"ga('send','event','SeeAllTiresLow',gotosize)\" hre=\"/tiresizes/"+gotolink+".htm\">Browse "+gotosize+" Tires</a>";
		}
    }
}
}
}

g('choosetire').innerHTML=tiresize+' Tires';
setCookie("displaytires",tiresize,90);
//if(getCookie('comptires') != "" && getCookie('comptires') != undefined){compareTires('yes')}//keep this
}// close findcook

function getSizes(link,d,w){
if(getCookie('mconvert')=="mm"){var linkend="-mm.htm"}else{var linkend=".htm"}
g('DisplayTires1').style.cssText="-webkit-transform:-webkit-translate3d(0px,0,0);transform:translate3d(0px,0,0)";
if(d>55 || d<19 || w<13 || w>30){
g('DisplayTires1').innerHTML="<br><br><div style=\"text-align:center\"><br><b>No Sizes Available<br>Within 3% of Diameter</b></div><br><br>"
}else{
    var url="/sizes3/"+link+linkend;
    http1.abort();
    http1.open("index.html", url, true);
    http1.send(url);
    http1.onreadystatechange=function() {
        if(http1.readyState == 4) {
if (http1.status === 404) {g('DisplayTires1').innerHTML="<table id=\"SizeTable\"><tbody><tr><th>Size</th><th>Diameter</th><th>Width</th><th>Wheel</th></tr></tbody></table></div><br><br><div style=\"text-align:center\"><br><b>No Sizes Available<br>Within 3% of Diameter</b></div><br><br>"} else {
g('DisplayTires1').innerHTML=http1.responseText;
var seeTds=g('SizeTable').getElementsByTagName('tr');
if(getCookie('mconvert')=="mm"){
    for (var i=1;i<seeTds.length;i++){
    var timd=parseFloat(seeTds[i].childNodes[2].innerHTML);var wcn=seeTds[i].childNodes[1].className;var wch=parseFloat(tirecalc.width.value);
    if(timd<(wch+3) && timd>(wch-3) && wcn=='diaon'){seeTds[i].childNodes[2].className='diaon';seeTds[i].childNodes[0].className='diaon bold'}
    else if(timd<(wch+11) && timd>(wch-11) && wcn=='diaon'){seeTds[i].childNodes[2].className='diaon';seeTds[i].childNodes[0].className='diaon'}
    else if(timd<(wch+11) && timd>(wch-11)){seeTds[i].childNodes[2].className='diaover';seeTds[i].childNodes[0].className='diaover'}
    }
}else{
    for (var i=1;i<seeTds.length;i++){
    var timd=parseFloat(seeTds[i].childNodes[2].innerHTML);var wcn=seeTds[i].childNodes[1].className;var wch=parseFloat(tirecalc.width.value)*10;
    if(timd<((wch+2)/10) && timd>((wch-2)/10) && wcn=='diaon'){seeTds[i].childNodes[2].className='diaon';seeTds[i].childNodes[0].className='diaon bold'}
    else if(timd<((wch+5)/10) && timd>((wch-5)/10) && wcn=='diaon'){seeTds[i].childNodes[2].className='diaon';seeTds[i].childNodes[0].className='diaon'}
    else if(timd<((wch+5)/10) && timd>((wch-5)/10)){seeTds[i].childNodes[2].className='diaover';seeTds[i].childNodes[0].className='diaover'}
    }
}
}
		}
	}
}
var chtabs=g('SizeTabWrap').getElementsByTagName('a');
for (var i=0;i<chtabs.length;i++){chtabs[i].className="numunselected";}
g('num'+w).className="numselected";
}

function sortType(id,type,tirepage,redir){if(type!==undefined){
if(id==15){setCookie('ShowFilters',redir,1);window.location.hre=g('getAll').getAttribute("hre")}else{
    var notires='';
    var typenonum = type.replace(/ \(.*\)/i, "");
    if(tirepage=='cookie'){tirepage=http3.responseText;setCookie("tiretype",id,90);setCookie("tiretypetext",type,90);}
    if(tirepage.search('>'+typenonum+'<') == -1){
    if(typenonum=="Filter Tire Results" || typenonum=="All Tire Types"){id=14;notires='';}
    else{id=14;notires='<div id="typealert" class="red">No "'+typenonum+'" Tires - Filter Removed</div>';setCookie("tiretype",id,90);setCookie("tiretypetext","Remove Filters",90);}
    }else if(typenonum=="Filter Tire Results" || typenonum=="Remove Filters" || typenonum=="All Tire Types"){notires="";}else{notires='<div id="typealert">"'+typenonum+'" Filter ON</div>';}
    var tiretypes = new Array();
    var i=1;
    if(id==14){tirepage=tirepage.split("<!--split-->");while(tirepage[i] !== undefined){if(tirepage[i].search('SeeAllTires') == -1){tiretypes[i]=tirepage[i];}i++}
    } else {tirepage=tirepage.split("<!--split-->");while(tirepage[i] !== undefined){if(tirepage[i].search('>'+typenonum+'<') !== -1){tiretypes[i]=tirepage[i];}i++}}
    i=i-1;var seeall=tirepage[i];
    tiretypes=tiretypes.join('<!--split-->');
    g('typefilter').blur();
    g('sugdisplay').innerHTML=tirepage[0]+'<!--split-->'+tiretypes+seeall;
    g('typefilter').value=id;
    g('alertwrap').innerHTML=notires;
    var typenum = parseInt(g('typefilter').options[g('typefilter').selectedIndex].text.match(/\d+/i));
	typenum = (typenum+1)*180;
	g('scroll').style.width=typenum+'px';
    }
  }
}

function changeRim(){
if(g('tab1')){
toptab2();tirecalc.nrim.value=g('changeRim').value;calculateF(tirecalc,tirecalc.sw.value,tirecalc.as.value,tirecalc.rim.value,g('changeRim').value,"","ChangeRim");
}else{calculateF(tirecalc,tirecalc.sw.value,tirecalc.as.value,tirecalc.rim.value,g('changeRim').value,"","ChangeRim");}
}

function choosetire(){
g('selectMenu').style.cssText="border-left:1px solid #fff";
g('choosetire').style.cssText="border-right:1px solid #aaa;background-color:#d7d7d7";
g('choosesize').style.cssText="border-left:1px solid #fff;background-color:transparent";
if(g('sugdisplay').innerHTML != ''){g('sugdisplay').style.display="block"}
g('resultstab').style.display="none";
g('choosetire').innerHTML=getCookie("displaytires")+" Tires";
}

function choosesize(){g('selectMenu').style.cssText="border-left:1px solid #fff";g('choosetire').style.cssText="border-right:1px solid #fff;background-color:transparent";g('choosesize').style.cssText="border-left:1px solid #aaa;background-color:#d7d7d7";g('sugdisplay').style.display="none";g('resultstab').style.display="block";}
function getVehicle(){g('Vehicle').style.cssText='display:block;background-color:#333';g('Xout').innerHTML='<img src="index.html">';if(window.innerWidth<768){menuClose()}}
function showVisual(){g('CalcViewer').style.display="block";g('CalcVisualizer').style.height="300px";g('ShowTires').setAttribute("onclick", "hideVisual()");g('spin').style.transform="rotateX(180deg)";}
function hideVisual(){g('CalcViewer').style.display="none";g('CalcVisualizer').style.height="40px";g('ShowTires').setAttribute("onclick", "showVisual()");g('spin').style.transform="rotateX(0deg)";}
function showCompVisual(){g('Viewer').style.display="block";g('ShowCompTires').setAttribute("onclick", "hideCompVisual()");g('spin2').style.transform="rotateX(180deg)";}
function hideCompVisual(){g('Viewer').style.display="none";g('ShowCompTires').setAttribute("onclick", "showCompVisual()");g('spin2').style.transform="rotateX(0deg)";}

var tabCookie=getCookie("tabsize1");
if(tabCookie==undefined){tabCookie=0}
var tabCookie2=getCookie("tabsize2");
if(tabCookie2==undefined){tabCookie2=0}

  var container = g("tabContainer");
    var navitem = container.querySelectorAll(".tabs ul li")[tabCookie];
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    navitem.setAttribute("class","tabActiveHeader");
    var pages = container.querySelectorAll(".tabpage");
        i=0;
while(i < 16) {
    if (i!=tabCookie){
      pages[i].style.display="none";
   }i++;
}
    var tabs = container.querySelectorAll(".tabs ul li");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick=displayPage;
    }

  var container2 = g("tabContainer2");
    var navitem2 = container2.querySelectorAll(".tabs2 ul li")[tabCookie2];
    var ident2 = navitem2.id.split("_")[1];
    navitem2.parentNode.setAttribute("data-current",ident2);
    navitem2.setAttribute("class","tabActiveHeader2");
    var pages2 = container2.querySelectorAll(".tabpage2");
        i=0;
while(i < 21) {
    if (i!=tabCookie2){
      pages2[i].style.display="none";
   }i++;
}
    var tabs2 = container2.querySelectorAll(".tabs2 ul li");
    for (var i = 0; i < tabs2.length; i++) {
      tabs2[i].onclick=displayPage2;
    }

function displayPage() {
  var current = this.parentNode.getAttribute("data-current");
  g("tabHeader_" + current).removeAttribute("class");
  g("tabpage_" + current).style.display="none";
  var ident = this.id.split("_")[1];
  this.setAttribute("class","tabActiveHeader");
  g("tabpage_" + ident).style.display="block";
  this.parentNode.setAttribute("data-current",ident);
setCookie("tabsize1",ident-1,90);
}

function displayPage2(tabcookie) {
  var current2 = this.parentNode.getAttribute("data-current");
  g("tabHeader2_" + current2).removeAttribute("class");
  g("tabpage2_" + current2).style.display="none";
  var ident2 = this.id.split("_")[1];
  this.setAttribute("class","tabActiveHeader2");
  g("tabpage2_" + ident2).style.display="block";
  this.parentNode.setAttribute("data-current",ident2);
setCookie("tabsize2",ident2-1,90);
}

function viewerCalc(check,t){
var h=parseFloat(tirecalc.sw.value);
var w=parseFloat(tirecalc.as.value);
var r=parseFloat(tirecalc.rim.value);
var dia=parseFloat(tirecalc.diameter.value);
if(check == 'nrim'){
var r=parseFloat(tirecalc.nrim.value);
if(t=='met'){w = Math.round(((parseFloat(tirecalc.diameter.value)-r)/2*2540)/h);}
}

//heightratio and initheight are based off 370
if (document.all && !window.atob) {
var heightratio=.5;
var initheight=185;
}else if(window.matchMedia("(max-width:767px)").matches){
var heightratio=.42;
var initheight=155;
} else {
var heightratio=.5;
var initheight=185;
}

if(h>99){var h3=Math.round((h*w/100/25.4*2)+r)}else{var h3=h}
if(h>99){var tireheight=Math.round(((h*w/100/25.4*2)+(r))*10*heightratio);}else{var tireheight=h*10*heightratio}

//fully fluid sizes
//var tireratio=initheight/initheight;
//var bigtire=tireheight;

//one fluid size one fixed size
var tireratio=initheight/tireheight;
var bigtire=initheight;

if(h>99){var tirewidth=Math.round(h/25.4*10*heightratio*tireratio);}else{var tirewidth=Math.round(w*10*heightratio*tireratio)}

if((isNaN(tireheight))||(w<6)||(h>44 && h<101)||(h<45 && w>16)||(h<21)||(h>99 && w<25)||(r>28)||(r<12)||((h-r)<5)||((h3-r)<5)||(h>375)||(h>99 && w>90)||(h3>44)||((tireheight+tirewidth)>305)){
g('c').innerHTML='<div style="position:absolute;top:45%;left:35%;font-size:8px;text-align:center">Image Not<br>Available<div id="visArrowtyres"></div></div>';
g('tc').innerHTML='<div style="position:absolute;top:45%;left:5%;font-size:8px;text-align:center">Image Not<br>Available</div>';
g('ttheight').style.display='none';
g('ttwidth').style.display='none';
g('tside').style.display='none';
g('twheel').style.display='none';
g('visrevs').style.display='none';
}else{
if(g('c').innerHTML.search("Image Not") !== -1){
g('c').innerHTML='<div id="t"><img src="/images/tireview.jpg" alt="Tire Side View"><div id="w"><img src="/images/wheelview.png" alt="Wheel Side View"></div></div><div id="a"><img src="/images/circArrowtyres.png" alt=""><div id="visArrowtyres"></div></div>';
g('tc').innerHTML='<img src="/images/talltireview0.jpg" alt="Tire Front View"></div>';
g('visArrowtyres').innerHTML=tirecalc.circumference.value;
}

g('w').innerHTML='<img src="/images/wheelview.png" alt="Wheel Side View">';

g('ttheight').style.display='block';
g('ttwidth').style.display='block';
g('tside').style.display='block';
g('twheel').style.display='block';
g('visrevs').style.display='block';

var wheelheight=Math.round(r/17*370*heightratio);
wheelheight=Math.round(wheelheight*tireratio);
var wheelpos=Math.round((wheelheight-bigtire)/2*(-1));
var tirecorners=Math.round(bigtire/2)+50;
var tside=Math.round((tireheight-(r*heightratio*10))/2);
var tsidewidth=Math.round((bigtire/2))-10;
var twheel=Math.round(r*heightratio*10);
var diatop=Math.round((bigtire/2))-15;
var sidetop=Math.round(tside*tireratio/2);
var wheelmeasheight=Math.round(bigtire/2);

g('c').style.width=bigtire+'px';
g('c').style.height=bigtire+'px';
g('t').style.width=bigtire+'px';
g('t').style.height=bigtire+'px';
g('t').style.borderRadius=tirecorners+'px';
g('a').style.width=bigtire+'px';
g('a').style.height=bigtire+'px';
g('a').style.border="40px solid #e5e5e5";
g('a').style.left="-40px";
g('a').style.top="-40px";
g('w').style.width=wheelheight+'px';
g('w').style.height=wheelheight+'px';
g('w').style.top=wheelpos+'px';
g('w').style.left=wheelpos+'px';
g('tc').style.width=tirewidth+'px';
g('tc').style.height=bigtire+'px';
g('visheight').style.cssText="margin-top:"+diatop+"px";
g('visside').style.cssText="margin-top:"+sidetop+"px";
g('tside').style.height=(tside*tireratio)-1+"px";
g('tside').style.width=tsidewidth+"px";
g('twheel').style.width=(twheel*tireratio)-1+"px";
g('twheel').style.right=(tside*tireratio)+"px";
g('twheel').style.height=wheelmeasheight+"px";
}
}

function viewerComp(){
var h=parseFloat(tirecompare.sw.value);
var w=parseFloat(tirecompare.as.value);
var r=parseFloat(tirecompare.rim.value);
var dia=parseFloat(tirecompare.diameter.value);
if(tirecompare.diameterb.value != ""){var dia2=parseFloat(tirecompare.diameterb.value)}else{var dia2=0};

//fully fluid sizes
//if (document.all && !window.atob) {
//var heightratio=.5;
//var heightratio2=.5;
//var initheight=185;
//}else if(window.matchMedia("(max-width:767px)").matches){
//var heightratio=.42;
//var heightratio2=.42;
//var initheight=155;
//} else {
//var heightratio=.5;
//var heightratio2=.5;
//var initheight=185;
//}

//one fluid size one fixed size
if(dia>=dia2){
if (document.all && !window.atob) {
var heightratio=.5;
var initheight=185;
var heightratio2=Math.round((initheight/(dia*10))*1000)/1000;
}else if(window.matchMedia("(max-width:767px)").matches){
var heightratio=.42;
var initheight=155;
var heightratio2=Math.round((initheight/(dia*10))*1000)/1000;
} else {
var heightratio=.5;
var initheight=185;
var heightratio2=Math.round((initheight/(dia*10))*1000)/1000;
}
}else{
if (document.all && !window.atob) {
var heightratio2=.5;
var initheight=185;
var heightratio=Math.round((initheight/(dia2*10))*1000)/1000;
}else if(window.matchMedia("(max-width:767px)").matches){
var heightratio2=.42;
var initheight=155;
var heightratio=Math.round((initheight/(dia2*10))*1000)/1000;
} else {
var heightratio2=.5;
var initheight=185;
var heightratio=Math.round((initheight/(dia2*10))*1000)/1000;
}
}

if(h>99){var h3=Math.round((h*w/100/25.4*2)+r)}else{var h3=h}
if(h>99){var tireheight=Math.round(((h*w/100/25.4*2)+(r))*10*heightratio);}else{var tireheight=h*10*heightratio}

//fully fluid sizes
//var tireratio=initheight/initheight;
//var bigtire=tireheight;

//one fluid size one fixed size
if(dia>=dia2){
var tireratio=initheight/tireheight;
var bigtire=initheight;
}else{
var tireratio=initheight/initheight;
var bigtire=tireheight;
}

if(h>99){var tirewidth=Math.round(h/25.4*10*heightratio*tireratio);}else{var tirewidth=Math.round(w*10*heightratio*tireratio)}

if((isNaN(tireheight))||(w<6)||(h>44 && h<101)||(h<45 && w>16)||(h<21)||(h>99 && w<25)||(r>28)||(r<12)||((h-r)<5)||((h3-r)<5)||(h>375)||(h>99 && w>90)||(h3>44)||((tireheight+tirewidth)>305)){
g('c1').innerHTML='<div style="position:absolute;top:45%;left:35%;font-size:8px;text-align:center">Image Not<br>Available<div id="visArrowtyres1"></div></div>';
g('tc1').innerHTML='<div style="position:absolute;top:45%;left:5%;font-size:8px;text-align:center">Image Not<br>Available</div>';
g('ttheight1').style.display='none';
g('ttwidth1').style.display='none';
g('tside1').style.display='none';
g('twheel1').style.display='none';
g('twheel1').style.display='none';
g('visrevs1').style.display='none';
}else{
if(g('c1').innerHTML.search("Image Not") !== -1){
g('c1').innerHTML='<div id="t1"><img src="/images/tireview.jpg" alt="Tire 1 Side View"><div id="w1"><img src="/images/wheelview.png" alt="Tire 1 Wheel"></div></div><div id="a1"><img src="/images/circArrowtyres1.png" alt=""><div id="visArrowtyres1"></div></div>';
g('tc1').innerHTML='<img src="/images/talltireview1.jpg" alt="Tire 1 Front View">';
g('visArrowtyres1').innerHTML=tirecompare.circumference.value;
}
g('w1').innerHTML='<img src="/images/wheelview.png" alt="Tire 1 Wheel">';

g('ttheight1').style.display='block';
g('ttwidth1').style.display='block';
g('tside1').style.display='block';
g('twheel1').style.display='block';
g('twheel1').style.display='block';
g('visrevs1').style.display='block';

var wheelheight=Math.round(r/17*370*heightratio);
wheelheight=Math.round(wheelheight*tireratio);
var wheelpos=Math.round((wheelheight-bigtire)/2*(-1));
var tirecorners=Math.round(bigtire/2);
var tside=Math.round((tireheight-(r*heightratio*10))/2);
var tsidewidth=Math.round((bigtire/2))-10;
var twheel=Math.round(r*heightratio*10);
var diatop=Math.round((bigtire/2))-15;
var sidetop=Math.round(tside*tireratio/2);
var wheelmeasheight=Math.round(bigtire/2);

g('c1').style.width=bigtire+'px';
g('c1').style.height=bigtire+'px';
g('t1').style.width=bigtire+'px';
g('t1').style.height=bigtire+'px';
g('t1').style.borderRadius=tirecorners+'px';
g('a1').style.width=bigtire+'px';
g('a1').style.height=bigtire+'px';
g('a1').style.border="40px solid #f0f0f0";
g('a1').style.left="-40px";
g('a1').style.top="-40px";
g('w1').style.width=wheelheight+'px';
g('w1').style.height=wheelheight+'px';
g('w1').style.top=wheelpos+'px';
g('w1').style.left=wheelpos+'px';
g('tc1').style.width=tirewidth+'px';
g('tc1').style.height=bigtire+'px';
g('visheight1').style.cssText="margin-top:"+diatop+"px";
g('visside1').style.cssText="margin-top:"+sidetop+"px";
g('tside1').style.height=(tside*tireratio)-1+"px";
g('tside1').style.width=tsidewidth+"px";
g('twheel1').style.width=(twheel*tireratio)-1+"px";
g('twheel1').style.right=(tside*tireratio)+"px";
g('twheel1').style.height=wheelmeasheight+"px";
}

var h2=parseFloat(tirecompare.swb.value);
var w2=parseFloat(tirecompare.asb.value);
var r2=parseFloat(tirecompare.rimb.value);

if(h2>99){var h32=Math.round((h2*w2/100/25.4*2)+r2)}else{var h32=h2}
if(h2<100){var size2=h2.toString()+"X"+w2.toString()+"R"+r2.toString();}else{var size2=h2.toString()+"/"+w2.toString()+"R"+r2.toString();}
if(h2>99){var tireheight2=Math.round(((h2*w2/100/25.4*2)+(r2))*10*heightratio2);}else{var tireheight2=h2*10*heightratio2}

//fully fluid sizes
//var tireratio2=initheight/initheight;
//var bigtire2=tireheight2;

//one fluid size one fixed size
if(dia>=dia2){
var tireratio2=initheight/initheight;
var bigtire2=tireheight2;
}else{
var tireratio2=initheight/tireheight2;
var bigtire2=initheight;
}

if(h2>99){var tirewidth2=Math.round(h2/25.4*10*heightratio2*tireratio2);}else{var tirewidth2=Math.round(w2*10*heightratio2*tireratio2)}

if((isNaN(tireheight2))||(w2<6)||(h2>44 && h2<101)||(h2<45 && w2>16)||(h2<21)||(h2>99 && w2<25)||(r2>28)||(r2<13)||((h2-r2)<5)||((h32-r2)<5)||(h2>375)||(h2>99 && w2>90)||(h32>44)||((tireheight2+tirewidth2)>305)){
g('c2').innerHTML='<div style="position:absolute;top:45%;left:35%;font-size:8px;text-align:center">Image Not<br>Available<div id="visArrowtyres2"></div></div>';
g('tc2').innerHTML='<div style="position:absolute;top:45%;left:5%;font-size:8px;text-align:center">Image Not<br>Available</div>';
g('ttheight2').style.display='none';
g('ttwidth2').style.display='none';
g('tside2').style.display='none';
g('twheel2').style.display='none';
g('twheel2').style.display='none';
g('visrevs2').style.display='none';
}else{
if(g('c2').innerHTML.search("Image Not") !== -1){
g('c2').innerHTML='<div id="t2"><img src="/images/tireview.jpg" alt="Tire 2 Side View"><div id="w2"><img src="/images/wheelview.png" alt="Tire 2 Wheel"></div></div><div id="a2"><img src="/images/circArrowtyres2.png" alt=""><div id="visArrowtyres2"></div></div>';
g('tc2').innerHTML='<img src="/images/talltireview2.jpg" alt="Tire 2 Front View">';
g('visArrowtyres2').innerHTML=tirecompare.circumferenceb.value;
}

g('w2').innerHTML='<img src="/images/wheelview.png" alt="Tire 2 Wheel">';

g('ttheight2').style.display='block';
g('ttwidth2').style.display='block';
g('tside2').style.display='block';
g('twheel2').style.display='block';
g('twheel2').style.display='block';
g('visrevs2').style.display='block';

var wheelheight2=Math.round(r2/17*370*heightratio2);
wheelheight2=Math.round(wheelheight2*tireratio2);
var wheelpos2=Math.round((wheelheight2-bigtire2)/2*(-1));
var tirecorners2=Math.round(bigtire2/2);
var tside2=Math.round((tireheight2-(r2*heightratio2*10))/2);
var tsidewidth2=Math.round(bigtire2/2)-10;
var twheel2=Math.round(r2*heightratio2*10);
var diatop2=Math.round(bigtire2/2)-15;
var sidetop2=Math.round(tside2*tireratio2/2);
var wheelmeasheight2=Math.round(bigtire2/2);
g('c2').style.width=bigtire2+'px';
g('c2').style.height=bigtire2+'px';
g('t2').style.width=bigtire2+'px';
g('t2').style.height=bigtire2+'px';
g('t2').style.borderRadius=tirecorners2+'px';
g('a2').style.width=bigtire2+'px';
g('a2').style.height=bigtire2+'px';
g('a2').style.border="40px solid #f0f0f0";
g('a2').style.left="-40px";
g('a2').style.top="-40px";
g('w2').style.width=wheelheight2+'px';
g('w2').style.height=wheelheight2+'px';
g('w2').style.top=wheelpos2+'px';
g('w2').style.left=wheelpos2+'px';
g('tc2').style.width=tirewidth2+'px';
g('tc2').style.height=bigtire2+'px';
g('visheight2').style.cssText="margin-top:"+diatop2+"px";
g('visside2').style.cssText="margin-top:"+sidetop2+"px";
g('tside2').style.height=Math.round((tside2*tireratio2)-1)+"px";
g('tside2').style.width=tsidewidth2+"px";
g('twheel2').style.width=Math.round((twheel2*tireratio2)-1)+"px";
g('twheel2').style.right=Math.round(tside2*tireratio2)+"px";
g('twheel2').style.height=wheelmeasheight2+"px";
}
}

function mConvert(check,flip,which){
var c=tirecalc;var co=tirecompare;var wheel=parseFloat(g('viswheel').innerHTML);
if(check=='mm'){
g('mconvert').setAttribute("onclick","mConvert('in','','')");
g('slid').style.left='55px';g('slid').style.width='39px';setCookie('mconvert','mm',90);
if(c.sw.value != '' && (c.diameter.value.search('"') >-1)){
if(flip=="flip"){var diameter=Math.round(parseFloat(c.diameter.value));var height=parseFloat(c.diameter.value);var width=parseFloat(c.width.value);var link=diameter+"-"+wheel+"-"+height;getSizes(link,diameter,wheel);}
var dia=Math.round(parseFloat(c.diameter.value)*25.4);if(c.sw.value>99){var wid=c.sw.value}else{var wid=Math.round(parseFloat(c.width.value)*25.4);}
var side=Math.round(parseFloat(c.sidewall.value)*25.4);var circ=Math.round(parseFloat(c.circumference.value)*25.4);var revs=Math.round(parseFloat(c.revs.value)*0.621371);
c.diameter.value=dia;c.width.value=wid;c.sidewall.value=side;c.circumference.value=circ;c.revs.value=revs;
g('rev1').innerHTML='Revs/km';g('visrevs').innerHTML=revs+' Revs/km';
g('visheight').innerHTML=dia;g('viswidth').innerHTML=c.sw.value;g('visside').innerHTML=side;g('visArrowtyres').innerHTML=circ;
}
if(co.sw.value !='' && co.swb.value !='' && (co.diameter.value.search('"') >-1)){
var dia1=Math.round(parseFloat(co.diameter.value)*25.4);if(co.sw.value>99){var wid1=co.sw.value}else{var wid1=Math.round(parseFloat(co.width.value)*25.4);}
var side1=Math.round(parseFloat(co.sidewall.value)*25.4);var circ1=Math.round(parseFloat(co.circumference.value)*25.4);var revs1=Math.round(parseFloat(co.revs.value)*0.621371);
var dia2=Math.round(parseFloat(co.diameterb.value)*25.4);if(co.swb.value>99){var wid2=co.swb.value}else{var wid2=Math.round(parseFloat(co.widthb.value)*25.4);}
var side2=Math.round(parseFloat(co.sidewallb.value)*25.4);var circ2=Math.round(parseFloat(co.circumferenceb.value)*25.4);var revs2=Math.round(parseFloat(co.revsb.value)*0.621371);
co.diameter.value=dia1;co.width.value=wid1;co.sidewall.value=side1;co.circumference.value=circ1;co.revs.value=revs1;
co.diameterb.value=dia2;co.widthb.value=wid2;co.sidewallb.value=side2;co.circumferenceb.value=circ2;co.revsb.value=revs2;
co.prevsb.value=revs2-revs1;
g('rev2').innerHTML='Revs/km';
g('visrevs1').innerHTML=revs1+' Revs/km';g('visrevs2').innerHTML=revs2+' Revs/km';
g('visheight1').innerHTML=dia1;g('viswidth1').innerHTML=wid1;g('visside1').innerHTML=side1;g('visArrowtyres1').innerHTML=circ1;
g('visheight2').innerHTML=dia2;g('viswidth2').innerHTML=wid2;g('visside2').innerHTML=side2;g('visArrowtyres2').innerHTML=circ2;
g('reading').innerHTML='<b>Speed</b><a>10 km/h</a><a>30 km/h</a><a>50 km/h</a><a>70 km/h</a><a>90 km/h</a><a>110 km/h</a><a>130 km/h</a><a>150 km/h</a>';
speed.spd20.value = Math.round((dia2 / dia1)*(10)*10)/10;speed.spd30.value = Math.round((dia2 / dia1)*(30)*10)/10;speed.spd40.value = Math.round((dia2 / dia1)*(50)*10)/10;speed.spd50.value = Math.round((dia2 / dia1)*(70)*10)/10;
speed.spd60.value = Math.round((dia2 / dia1)*(90)*10)/10;speed.spd70.value = Math.round((dia2 / dia1)*(110)*10)/10;speed.spd80.value = Math.round((dia2 / dia1)*(130)*10)/10;speed.spd90.value = Math.round((dia2 / dia1)*(150)*10)/10;
}
}else if(check=='in'){
g('mconvert').setAttribute("onclick","mConvert('mm','flip','')");
g('slid').style.left='0px';g('slid').style.width='52px';setCookie('mconvert','in',90);
if(c.sw.value !='' && (which=='calc' || which=='')){calculateF(tirecalc,tirecalc.sw.value,tirecalc.as.value,tirecalc.rim.value,tirecalc.nrim.value,'','TireSizeCalc');}
if(co.sw.value !='' && co.swb.value !='' && (which=='comp' || which=='')){calculateG(tirecompare,tirecompare.sw.value,tirecompare.as.value,tirecompare.rim.value,tirecompare.swb.value,tirecompare.asb.value,tirecompare.rimb.value,'','TireSizeCalc');}
g('rev1').innerHTML='Revs/Mile';g('rev2').innerHTML='Revs/Mile';
g('visrevs').innerHTML=g('visrevs').innerHTML.replace('Revs/km','Revs/Mile');
g('visrevs1').innerHTML=g('visrevs1').innerHTML.replace('Revs/km','Revs/Mile');
g('visrevs2').innerHTML=g('visrevs2').innerHTML.replace('Revs/km','Revs/Mile');
g('reading').innerHTML='<b>Speed</b><a>20 mph</a><a>30 mph</a><a>40 mph</a><a>50 mph</a><a>60 mph</a><a>70 mph</a><a>80 mph</a><a>90 mph</a>';
}
}

function getInfo(type){
if(type=='open'){
if(!(g('calcinfobox'))){
var btn = document.createElement("div");
btn.id="calcinfobox";
g('WrapWrapper').appendChild(btn);
}else{g('calcinfobox').style.display="block"}
http1.onreadystatechange=function(){if(http1.readyState == 4){g('calcinfobox').innerHTML=http1.responseText;}}
http1.open("index.html", "index.html", true);
http1.send();
ga('send','event','About Results','calc');
}else{g('calcinfobox').style.display="none";g('calcinfobox').innerHTML='';}
}