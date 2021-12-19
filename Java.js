var flag1 = true;
var flag2 = true;
var voice = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
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
          var result=eval(text);
       result = roundup(result,7);
 document.getElementById("screen").value=result
 } catch (SyntaxError) {
          alert('Invalid Syntax!');
        }
        
        utterance.text = result;
        voice.speak(utterance);
        flag1 = false;
    }
    function per(){
        screen.value=Math.per("screen").value;
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


