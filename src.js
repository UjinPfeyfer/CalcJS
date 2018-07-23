var operation=0;
var temp=0;
var flagNewNum=1;
var flagPoint=0;

var inp=document.createElement("INPUT");
inp.setAttribute('id','inputMain');
inp.setAttribute('value',0);
inp.setAttribute('style','text-align:right; margin:5px; width:172px');
document.getElementById('inp').appendChild(inp);
for (var i=1;i<10;i++) {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(i);
    btn.setAttribute('id','btn'+i);
    btn.setAttribute('style','margin: 5px');
    btn.setAttribute('onclick','butClick(this)');
    btn.setAttribute('value',i);
    btn.appendChild(t);
    document.getElementById('num').appendChild(btn);
}

var btnClear= document.createElement("BUTTON");
btnClear.appendChild(document.createTextNode('C'));
btnClear.setAttribute('id','btnClear');
btnClear.setAttribute('style','margin: 5px; width:23.42px');
btnClear.setAttribute('onclick','btnClearClick()');
document.getElementById('num').appendChild(btnClear);

function btnClearClick() {
    temp=0;
    operation=0;
    flagNewNum=1;
    flagPoint=0;
    document.getElementById('inputMain').value=0;
}

var btn0 = document.createElement("BUTTON");
var t = document.createTextNode(0);
btn0.setAttribute('id','btn'+0);
btn0.setAttribute('style','margin: 5px');
btn0.appendChild(t);
btn0.setAttribute('onclick','butClick(this)');
document.getElementById('num').appendChild(btn0);

var btnPoint= document.createElement("BUTTON");
btnPoint.appendChild(document.createTextNode('.'));
btnPoint.setAttribute('id','btnPoint');
btnPoint.setAttribute('style','margin: 5px; width:23.42px');
btnPoint.setAttribute('onclick','btnPointClick()');
document.getElementById('num').appendChild(btnPoint);

function btnPointClick() {
    if(!flagPoint)
        flagPoint=2;
}

function butClick(obj) {
    if(flagPoint==2) {
        document.getElementById('inputMain').value += '.';
        flagPoint=1;
        flagNewNum=1;
    }

    if(document.getElementById('inputMain').value!=0&&flagNewNum) {
        document.getElementById('inputMain').value += obj.innerHTML;
    }
    else {
        document.getElementById('inputMain').value = obj.innerHTML;
        flagNewNum=1;
    }

}
var btnplus= document.createElement("BUTTON");
btnplus.appendChild(document.createTextNode('+'));
btnplus.setAttribute('id','btnPlus');
btnplus.setAttribute('onclick','btnPlusClick()');
document.getElementById('operation').appendChild(btnplus);
function btnPlusClick() {
    operation=1;
    temp=inp.value;
    flagNewNum=0;
    flagPoint=0;
}

var btnminus= document.createElement("BUTTON");
btnminus.appendChild(document.createTextNode('-'));
btnminus.setAttribute('id','btnMinus');
btnminus.setAttribute('onclick','btnMinusClick()');
document.getElementById('operation').appendChild(btnminus);
function btnMinusClick() {
    operation=2;
    temp=inp.value;
    flagNewNum=0;
    flagPoint=0;
}

var btnMult= document.createElement("BUTTON");
btnMult.appendChild(document.createTextNode('*'));
btnMult.setAttribute('id','btnMult');
btnMult.setAttribute('onclick','btnMultClick()');
document.getElementById('operation').appendChild(btnMult);
function btnMultClick() {
    operation=3;
    temp=inp.value;
    flagNewNum=0;
    flagPoint=0;
}

var btnDiv= document.createElement("BUTTON");
btnDiv.appendChild(document.createTextNode('/'));
btnDiv.setAttribute('id','btnDiv');
btnDiv.setAttribute('onclick','btnDivClick()');
document.getElementById('operation').appendChild(btnDiv);
function btnDivClick() {
    operation = 4;
    temp = inp.value;
    flagNewNum = 0;
    flagPoint=0;
}

var btnSqr= document.createElement("BUTTON");
btnSqr.appendChild(document.createTextNode('sqr'));
btnSqr.setAttribute('id','btnSqr');
btnSqr.setAttribute('onclick','btnSqrClick()');
btnSqr.setAttribute('Style','font-size:11px; padding:3px 6px 1px 1px ; ');
document.getElementById('operation').appendChild(btnSqr);

function btnSqrClick(){
    flagNewNum = 0;
    operation = 4;
    temp=0;
    flagPoint=1;
    document.getElementById('inputMain').value*=document.getElementById('inputMain').value;
}

var btnSqrt= document.createElement("BUTTON");
btnSqrt.appendChild(document.createTextNode('sqrt'));
btnSqrt.setAttribute('id','btnSqrt');
btnSqrt.setAttribute('onclick','btnSqrtClick()');
btnSqrt.setAttribute('Style','font-size:11px; padding:3px 6px 1px 1px ; ');
document.getElementById('operation').appendChild(btnSqrt);

function btnSqrtClick(){
    flagNewNum = 0;
    operation = 4;
    temp=0;
    flagPoint=1;
    document.getElementById('inputMain').value=Math.sqrt(document.getElementById('inputMain').value);
}

var btnSin= document.createElement("BUTTON");
btnSin.appendChild(document.createTextNode('sin'));
btnSin.setAttribute('id','btnSin');
btnSin.setAttribute('onclick','btnSinClick()');
btnSin.setAttribute('Style','font-size:11px; padding:3px 6px 1px 1px ; ');
document.getElementById('operation').appendChild(btnSin);

function btnSinClick(){
    flagNewNum = 0;
    operation = 4;
    temp=0;
    flagPoint=1;
    document.getElementById('inputMain').value=Math.sin(document.getElementById('inputMain').value);
}

var btnEqual= document.createElement("BUTTON");
btnEqual.appendChild(document.createTextNode('='));
btnEqual.setAttribute('id','btnEqual');
btnEqual.setAttribute('onclick','btnEqualClick()');
document.getElementById('operation').appendChild(btnEqual);

function btnEqualClick() {
    switch(operation) {
        case 1:
            document.getElementById('inputMain').value = parseFloat((document.getElementById('inputMain').value)) + parseFloat(temp);
            break;
        case 2 :
            document.getElementById('inputMain').value = parseFloat(temp) - parseFloat((document.getElementById('inputMain').value)) ;
            break;
        case 3:
            document.getElementById('inputMain').value = parseFloat((document.getElementById('inputMain').value)) * parseFloat(temp);
            break;
        case 4:
            if (document.getElementById('inputMain').value!=0)
                document.getElementById('inputMain').value = parseFloat(temp) / parseFloat((document.getElementById('inputMain').value)) ;
            else
                document.getElementById('inputMain').value="Division by zero";
                break;
        default:
            break;
    }
    flagNewNum=0;
    operation=0;
}

