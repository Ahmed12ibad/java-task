var days=["sundey",'monday',"thuresday","wednesday","thursday","friday","saturday"]
var ajkidate=new Date().getTime()
var eidtime1=new Date("july 10, 2022").getTime()
var eidtime2=new Date("july 11, 2022").getTime()
var eidtime3=new Date("july 12, 2022").getTime()
//
var eidday1=new Date("july 10, 2022").getDay()
var eidday2=new Date("july 11, 2022").getDay()
var eidday3=new Date("july 12, 2022").getDay()



var day1=days[eidday1]
var day2=days[eidday2]
var day3=days[eidday3]

//
var diff1=eidtime1  -  ajkidate
var diff2=eidtime2  -  ajkidate
var diff3=eidtime3  -  ajkidate

//

var eid1=Math.ceil(diff1 / (1000*60*60*24))
var eid2=Math.ceil(diff2 / (1000*60*60*24))
var eid3=Math.ceil(diff3 / (1000*60*60*24))

//

var eidH1=Math.ceil(diff1 / (1000*60*60))
var eidH2=Math.ceil(diff2 / (1000*60*60))
var eidH3=Math.ceil(diff3 / (1000*60*60))






// 

var card1=document.getElementById("card-1")

card1.innerHTML="<h1> first eid <h1/>"+eid1+" day baki he "+"<br>"+day1



var card2=document.getElementById("card-2")

card2.innerHTML="<h1> second eid <h1/>"+eid2 +" day baki he "+"<br>"+day2




var card3=document.getElementById("card-3")

card3.innerHTML="<h1> third eid <h1/>"+  eid3+ " day baki he "+"<br>"+day3

// 

var card1=document.getElementById("card-1")

card1.innerHTML="<h1> first eid <h1/>"+eid1+" day " +eidH1+"hours"+"<br>"+day1



var card2=document.getElementById("card-2")

card2.innerHTML="<h1> second eid <h1/>"+eid2 +" day "+eidH2+"hours"+"<br>"+day2




var card3=document.getElementById("card-3")

card3.innerHTML="<h1> third eid <h1/>"+  eid3+ " day "+eidH3+"hours"+"<br>"+day3


