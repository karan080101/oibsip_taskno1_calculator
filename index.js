let screen = document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenvalue+=buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText=='AC')
        {
            screenvalue="";
             screen.value =screenvalue;
        }
        else if(buttonText=='=')
        {
             screen.value =eval(screenvalue);
        }
        else if(buttonText=="DEL")
        {
            screenvalue=screenvalue.substring(0,screenvalue.length-1);
            screen.value=screenvalue;
        }
        else if(buttonText=="π")
        {
            screenvalue+= 3.14;
            screen.value=screenvalue;
        }
        else if(buttonText=="√")
        {
            screenvalue=Math.sqrt(screen.value,2);
            screen.value=screenvalue;
        }
        else
        {
            screenvalue +=buttonText;
            screen.value=screenvalue;
        }

    })
}