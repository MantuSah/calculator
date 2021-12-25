var flag1 = true;
var flag2 = true;
//var voice = window.speechSynthesis;
//const utterance = new //SpeechSynthesisUtterance();
function clk(val){
   if (flag1 == false) {
                clrdisp();
                check_last_char();
                console.log()
   document.getElementById("screen").value= document.getElementById("screen").value+ val;
                adjust_scr();
                flag1 = true;
        }
        else {
                check_last_char();
             document.getElementById("screen").value=document.getElementById("screen").value+ val;
                adjust_scr();
        }
}
function adjust_scr() {
            document.getElementById('screen')['scrollLeft'] = document.getElementById('screen')['scrollWidth'];
}

function check_last_char() {
            const sym = ['%','*','/','-','+'];
            let s = document.getElementById('screen').value;
            for (var i=0;i<sym.length; i++){
                if (s[s.length-1] == sym[i]) {
                      flag2 = false;  
                } else {
                      flag2 = true;
                }
            }
    }
    
function clrdisp(){
document.getElementById("screen").value=" "
 }

function eql(){
        var text=document.getElementById("screen").value;
        check_last_char();
        try {
          text=percentage(text);
          var result=eval(text);
          result = roundup(result,7);
 document.getElementById("screen").value= roundup(result);
 } 

 catch (SyntaxError) {
          alert('Invalid Syntax!');
        }
        //utterance.text = result;
        //voice.speak(utterance);
        flag1 = false;
    }
  
    function back(){
            let rev = document.getElementById("screen").value;
            var rev1= "";
            for (var i=0; i<rev.length-1; i++) {
                rev1 = rev1 + rev[i];
            }
    document.getElementById("screen").value = rev1;
    }
    
function sin(){
var x = document.getElementById("screen");
x.value=Math.sin(parseInt(x.value));
}
function cos(){
var y=document.getElementById("screen");
y.value=Math.cos(parseInt(y.value));
}
	function tan(){
	var z=document.getElementById("screen");
	z.value=Math.tan(parseInt(z.value));	
	}
	
	function square(){
  var p=document.getElementById("screen");
	p.value=Math.pow(parseInt(p.value),2);
	}
	function cubed(){
var q=document.getElementById("screen");
	q.value=Math.pow(parseInt(q.value),3);
	}
	function sqrt2(){
	var r=document.getElementById("screen");
	r.value=Math.pow(parseInt(r.value),1/2);
	}
	function sqrt3(){
	var s=document.getElementById("screen");
	s.value=Math.pow(parseInt(s.value),1/3);
	}
	
function roundup(x,rd){
	  let iOfdot = String(x).indexOf('.');
	  let digAfterDot = String(x).length-iOfdot;
	  if (iOfdot > -1) {
	    if (digAfterDot > rd) {
	      return x.toFixed(rd);
	    }else {
	      return x;
	    }
	  }else {
	    return x;
	 }
}
 var flag = false;

function num(getnum, btnum) {
  let number = document.getElementsByName(btnum)[0].value;
  display(number);
  flag = false;
}

function sym(getsym, btsym) {
  let symbol = document.getElementsByName(btsym)[0].value;
  let scdom = document.getElementById('screen1');
  
  if (!isNaN(scdom.value[0]) || getsym == "()") { //check if the first char is numeric or not
    display (symbol);
  }
}

/*function checkLastOperator(symbol) {
  var scdom = document.getElementById('screen1');
  var lastChar = scdom.value[scdom.value.length-1];
  if(!isNaN(lastChar) || lastChar==null || !isNaN(num)) {
  scdom.value=scdom.valuem + num;
  } else if(num!=lastChar) {
  document.form.textview.value=myString.replace(lastChar,num);
  }
}*
  /
  // case 1
  // 8
  // case 2 
  // 8+ , 873+
  // case 3 (btn symbol +, then don't replace)
  // 8+ 
  // case 4 (btn symbol -, then replace)
  // 8+ -> 8-
  
/*function replaceLastOperator(x,y,z){
    const rev = [];
    let rlen = x.length;
    for (let i=0; i<rlen; ++i)
        rev[i] = x[i];
    x = rev.reverse().join("").replace(y,z);
    for (let i=0; i<rlen; ++i)
        rev[i] = x[i];
    return rev.reverse().join("");   
  }
*/



function display(show) {
  document.getElementById('screen1').value += show;
  document.getElementById('screen1')['scrollLeft'] = document.getElementById('screen1')['scrollWidth'];
}

function clean() {
  document.getElementById('screen1').value = null;
}

function replaceOperator(str) {
  let rstr = str.value;
  rstr = rstr.replace(/÷/g,'/');
  rstr = rstr.replace(/×/g,'*');
  return rstr;
}

function result() {
  let scdom = document.getElementById('screen1');
  try {
    let result = "";
    result = replaceOperator(scdom);
    result = percentage(result);
    console.log(result);
    result = eval(result);
    result = roundup(result,6);
    scdom.value = result;
  } catch(SyntaxError) {
    alert('Invalid format used.');
  } 
}

function roundup(x,rd){
	  let iOfdot = String(x).indexOf('.');
	  let digAfterDot = String(x).length-iOfdot;
	  if (iOfdot > -1) {
	    if (digAfterDot > rd) {
	      return x.toFixed(rd);
	    }else {
	      return x;
	    }
	  }else {
	    return x;
	 }
}

function percentage(str){
    let modInx = str.indexOf('%');
    let count = 0;
    const numLftOfMod = [];
    const numRhtOfMod = [];
    let lnum,rnum;
    let newStr;
    
    if (modInx > -1){
        for(let i=modInx-1; i>=0; --i){
            if(!isNaN(str[i]) || str[i] == "."){
                numLftOfMod[count] = str[i];
                ++count;
            }else break;            
        }
        count = 0;
        for(let i=modInx+1; i<=str.length; ++i){
            if(!isNaN(str[i]) || str[i] == "."){
                numRhtOfMod[count] = str[i];
                ++count;
            }else break;            
        }        
        lnum = numLftOfMod.reverse().join("");
        rnum = numRhtOfMod.join("");
        newStr = lnum+"%"+rnum;
         
    }else return str;
    str = str.replace(newStr,"("+lnum+"/100"+")"+"*"+rnum);
    console.log(str);
    
    if(str.indexOf("%") == -1)
      return str;
    else return percentage(str);
}

