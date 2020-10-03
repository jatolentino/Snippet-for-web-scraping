(function(console){
let myVar = undefined; 
let arr= [] // anglais
let arp= [] // français
let arx= [] 
let wcl = [] //word clasiffication
const lenx = document.querySelectorAll("span.ws-1 > span").length

//returns the box code of a phrase 
let codearray = []
for (let i=0; i<lenx;i++)
{
codearray.push(document.querySelectorAll("span.ws-1 > span")[i].offsetParent)
}

//filter duplicated elements and calculate the length
let arraycodex = codearray.filter(Boolean)
let lenx2 = arraycodex.length


for (let i=0; i<lenx;i++)
{
        arr.push(document.querySelectorAll("span.ws-1 > span")[i].innerText) // english
        arp.push(document.querySelectorAll("span.ws-10 > span")[i].innerText) //frances
        try {
            wcl.push(document.querySelectorAll("span.ws-10 > span")[i].offsetParent.querySelectorAll("span > span.ws-10")[i].nextElementSibling.innerText)
        } catch (err) {
            try{
                wcl.push(document.querySelectorAll("span.ws-10 > span")[0].offsetParent.querySelectorAll("span > span.ws-10")[i].nextElementSibling.innerText)
            }catch(err){
                wcl.push(" ")}
            }
         }

//for (let i=0; i<lenx2;i++){
for (let i=0; i<lenx;i++){
JSON.stringify(arx.push(arr[i] + "\t" + wcl[i] + "\t" + arp[i]))//arx.push(vard[i].innerText + "\t" + phra[i].innerText)
}

//arx.unshift("sep=,") force UTF-8
let arxx= Array.from(new Set(arx))
//console.log(arxx)
console.save = function(filename){

    if(!filename) filename = 'French_lesson'

    var a = document.createElement('a');
    var file = new Blob([arxx.map(function(d){return d}).join("\n") ], { type: 'text/plain' }); //text/plain text/csv;charset=utf-8; iso-8859-1 utf-8
   
    a.href = URL.createObjectURL(file);
    a.download = filename; // name of download file
    a.click();
 }
//console.log(arp)
//console.log(arr)

})(console)

