var qoute=[
    {
        qoute: "Do not take life too seriously. You will not get outalive.",
        auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
       auther: "--Wayne Gretzy"
    },
]
function getQoutes() {
    var num=Math.floor(Math.random() * qoute.length);
   document.getElementById("qoute").innerHTML=qoute[num].qoute;
  document.getElementById("auther").innerHTML=qoute[num].auther;

}
 
