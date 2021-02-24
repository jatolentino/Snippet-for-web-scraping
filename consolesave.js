(function(console){ 
let arr= [] // anglais
let arp= [] // français
let arx= [] 
let wcl = [] //word clasiffication
const lenx = document.querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.translation > div > rocket-record-phrase-string > div > span.ng-scope.ng-isolate-scope > p").length

let codearray = []
for (let i=0; i<lenx;i++)
{
codearray.push(document.querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.translation > div > rocket-record-phrase-string > div > span.ng-scope.ng-isolate-scope > p")[i].offsetParent) // codehere
}

let arraycodex = codearray.filter(Boolean)
let lenx2 = arraycodex.length

for (let i=0; i<lenx2;i++)
{
    arp.push(arraycodex[i].querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.phrases > div > div > rocket-record-phrase-string > div > span.ng-scope.ng-isolate-scope > p")[0].innerText) // frances
    arr.push(arraycodex[i].querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.translation > div > rocket-record-phrase-string > div > span.ng-scope.ng-isolate-scope > p")[0].innerText)   // ingles
    if (arraycodex[i].querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.phrases > div > div > rocket-record-phrase-string > div > span.notations > span > button")[0]!=undefined){
        wcl.push(arraycodex[i].querySelectorAll("rocket-record > div > div.tutor-row > div.text-content > div.phrases > div > div > rocket-record-phrase-string > div > span.notations > span > button")[0].innerText)}
    else {
        wcl.push(" ")}
}

for (let i=0; i<lenx2;i++){
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
})(console)
