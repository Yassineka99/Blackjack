let pictures=["Cards/4.JPG","Cards/5.JPG","Cards/6.JPG","Cards/7.JPG",
              "Cards/8.JPG","Cards/9.JPG","Cards/10.JPG","Cards/11.JPG",
              "Cards/12.JPG","Cards/13.JPG","Cards/14.JPG","Cards/15.JPG",
              "Cards/16.JPG","Cards/17.JPG","Cards/18.JPG","Cards/19.JPG",
              "Cards/20.JPG","Cards/21.JPG","Cards/22.JPG","Cards/23.JPG",
              "Cards/24.JPG","Cards/25.JPG","Cards/26.JPG","Cards/27.JPG",
              "Cards/28.JPG","Cards/29.JPG","Cards/30.JPG","Cards/31.JPG",
              "Cards/32.JPG","Cards/33.JPG","Cards/34.JPG","Cards/35.JPG",
              "Cards/36.JPG","Cards/37.JPG","Cards/38.JPG","Cards/39.JPG",
              "Cards/40.JPG","Cards/41.JPG","Cards/42.JPG","Cards/43.JPG",
              "Cards/44.JPG","Cards/45.JPG","Cards/46.JPG","Cards/47.JPG",
              "Cards/48.JPG","Cards/49.JPG","Cards/50.JPG","Cards/51.JPG",
              "Cards/52.JPG","Cards/1.JPG","Cards/2.JPG","Cards/3.JPG"];
let picturesvalue=[5,6,7,8,
                   9,10,10,10,
                   10,10,2,3,
                   4,5,6,7,8,
                   9,10,10,10,
                   10,10,2,3,
                   4,5,6,7,8,
                   9,10,10,10,
                   10,10,2,3,
                   4,5,6,7,8,
                   9,10,10,10,
                   10,10,2,3,4
                   
                   
];
let yourscore=document.getElementById("score");
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");
let trash=[];
let randomnumber;
let score=0;
let field1=0;
let field2=0;
let field3=0;
let field4=0;
let field5=0;
let field6=0;
let dealerscore=0;

function work ()
{   
    randomnumber=Math.floor(Math.random()*52);
    console.log(randomnumber);
    trash.push(randomnumber);
    if(score<21){
         if (field1===0)
        {
            card1.src=pictures[randomnumber];
            card1.style.animation="slideleft 2s ease"
            field1=1;
        }
         else if(field2===0)
        {
            card2.src=pictures[randomnumber];
            card2.style.animation="slideleft 2s ease"
            field2=1;  
        }
         else if(field3===0)
        {
            card3.src=pictures[randomnumber];
            card3.style.animation="slideleft 2s ease"
            field3=1;  
        }

        score+=picturesvalue[randomnumber];
        yourscore.textContent="Score :"+score;
        if(score>21)
        {
            document.getElementById("result").textContent="You lost ! Better luck next time" ;
            document.getElementById("add").textContent=("Play again ");
            document.getElementById("stop").textContent=("Exit");

        }
        else if (score===21)
        {
            document.getElementById("result").textContent="BlackJack";
            document.getElementById("add").textContent=("Play again ");
            document.getElementById("stop").textContent=("Exit");
        }

    }
    else if (score>21)
    {
       document.getElementById("result").textContent="You lost ! Better luck next time" ;

    }
    else if (score===21)
        {
            document.getElementById("result").textContent="BlackJack";
        }
}

function work2()
{   randomnumber=Math.floor(Math.random()*52);
    card1.src="";
    card2.src="";
    card3.src="";
 //while  ((dealerscore<21)||(dealerscore>score)){ 
   for (let i=0;i<3;i++)
    {randomnumber=Math.floor(Math.random()*52);
        if (field4===0)
        {
            card1.src=pictures[randomnumber];
            card1.style.animation="slideleft 2s ease"
            field4=1;
            console.log("error f 1");
        }
    else if(field5===0)
        {
            card2.src=pictures[randomnumber];
            card2.style.animation="slideleft 2s ease"
            field5=1;  
            console.log("error f 2");
        }
    else if(field6===0)
        {
            card3.src=pictures[randomnumber];
            card3.style.animation="slideleft 2s ease"
            field6=1;  
            console.log("error f 3");
        }
    dealerscore+=picturesvalue[randomnumber];
    document.getElementById("dealerscore").textContent=dealerscore;
    console.log("error f while");
   }
   if ((dealerscore>score)&&(dealerscore<22))
   {
    document.getElementById("result").textContent="You lost ! Better luck next time" ;

   }
   else {document.getElementById("result").textContent="You won !"};
   document.getElementById("dealerscore").textContent="Dealer Score"+dealerscore;

}
