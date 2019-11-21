//alert('hello');
let links = document.body.getElementsByTagName("a");
console.log(`there are ${links.length} links in this document`);

for (let link of links){
    console.log(link.href);
}

let ostrich = document.getElementById("gertrude");
console.log(ostrich.src);