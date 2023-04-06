const display=document.querySelector('#display');
const  clear=document.getElementById('clear');
const  valor=document.getElementById('valor');
const  percentage=document.getElementById('percentage');
const  divide=document.getElementById('divide');
const  seven=document.getElementById('seven');
const  eight=document.getElementById('eight');
const  nine=document.getElementById('nine');
const  multiply=document.getElementById('multiply');
const  four=document.getElementById('four');
const  five=document.getElementById('five');
const  six=document.getElementById('six');
const  subtract=document.getElementById('subtract');
const  one=document.getElementById('one');
const  two=document.getElementById('two');
const  three=document.getElementById('three');
const  add=document.getElementById('add');
const  zero=document.getElementById('zero');
const  decimal=document.getElementById('decimal');
const  equals=document.getElementById('equals');
var digits=[];
var digit2=[];
var digit3=[];
var symbols=[];
var resultado=0;
var val=0; 
var numb=0;
var numb2=0;



clear.addEventListener('click',borrador);
valor.addEventListener('click',operation);
percentage.addEventListener('click',operation);
seven.addEventListener('click',catcher);
eight.addEventListener('click',catcher);
nine.addEventListener('click',catcher);
four.addEventListener('click',catcher);
five.addEventListener('click',catcher);
six.addEventListener('click',catcher);
one.addEventListener('click',catcher);
two.addEventListener('click',catcher);
three.addEventListener('click',catcher);
zero.addEventListener('click',catcher);
decimal.addEventListener('click',catcher); 
equals.addEventListener('click',operation); 

divide.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiply.classList.remove('active');
        subtract.classList.remove('active');
        add.classList.remove('active');
        symbols.push(1);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
        console.log(val)
    }

});
multiply.addEventListener('click',function(){
    
    this.classList.add('active');
    if(this.classList.contains('active')){
        divide.classList.remove('active');
        subtract.classList.remove('active');
        add.classList.remove('active');
        symbols.push(2);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
        console.log(val);
    }
    
});
subtract.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiply.classList.remove('active');
        divide.classList.remove('active');
        add.classList.remove('active');
        symbols.push(3);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
    }
});
add.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiply.classList.remove('active');
        subtract.classList.remove('active');
        divide.classList.remove('active');
        symbols.push(4);
    }
    if(val==0){
        val=1;
    }
    else {
        val=2;
    }
});

function catcher(){
    if (val==0){   
    var cal1='';
    
    digits.push(this.value);
    if(digits.length>=1){
        clear.innerText='C'; 
    }
    if(digits.length>9){
        digits.pop();
    }
    
    for(let i=0; i<digits.length; i++) {
        cal1=cal1+digits[i];
        
        cal1*=1;
        
        numb=cal1;
        print1=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb)
        
      }
      display.innerText=print1;
      
    }
    else if(val==1){
        var cal2='';
        digit2.push(this.value);
        if(digit2.length>=1){
            clear.innerText='C'; 
        }
        if(digit2.length>9){
            digit2.pop();
        }
        for(let i=0; i<digit2.length; i++) {
            cal2=cal2+digit2[i];
            cal2*=1;
            numb2=cal2;  
            print2=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb2)    
           
          }
          display.innerText=print2;
         
    }
    else if(val==2){
        
        numb=resultado;
        var cal3='';
        digit3.push(this.value);
        if(digit3.length>=1){
            clear.innerText='C'; 
        }
        if(digit3.length>9){
            digit3.pop();
        }
        
        for(let i=0; i<digit3.length; i++) {
            cal3=cal3+digit3[i];
            cal3*=1;
            numb2=cal3;
                  
            print3=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(numb2)
          }
          display.innerText=print3;
          
          
    }
    
}

function operation(){
    
    if(this.value==='csymbol'){
        numb=numb*-1
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(numb)
        display.innerText=printe;
        
    }
    else if(this.value==='%'){
        numb=numb/100;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(numb)
        display.innerText=printe;
       
    }
    else if(symbols.includes(1)===true){
       
        resultado=numb/numb2; 
        resultado=resultado.toPrecision(6);
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        display.innerText=printe
        
        digits=[]
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(2)===true){
        resultado=numb*numb2;
        resultado=resultado.toPrecision(6);
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        display.innerText=printe
        digits=[];
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(3)===true){
        resultado=numb-numb2;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        display.innerText=printe

        digits=[];
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
    else if(symbols.includes(4)===true){
        resultado=numb+numb2;
        printe=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 4 }).format(resultado)
        display.innerText=printe;

        digits=[]
        digit2=[];
        digit3=[];
        symbols=[];
        val=2;
    }
}

function borrador(){
    clear.innerText='C';
    digits=[];
    digit2=[];
    digit3=[];
    symbols=[];
    val=0;
    display.innerText='0';
        add.classList.remove('active');
        multiply.classList.remove('active');
        subtract.classList.remove('active');
        divide.classList.remove('active');
    if((display.innerText='0') && (clear.innerText='C')){
        
        clear.innerText='AC'
    }
    
}


const conteo=(a) => {
    if (a<0) return
    
    return conteo(a-1)
}