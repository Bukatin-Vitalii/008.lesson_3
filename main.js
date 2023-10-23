let smile = document.getElementById('smile');
console.log(smile)
let count = 0;
let div = document.createElement('div');
let p = document.createElement('p');
let text = document.createTextNode(count);
p.appendChild(text);
div.appendChild(p);
smile.appendChild(div);

smile.addEventListener('click', function () {
	count++;
	p.innerHTML = count;
}
);

let smile2 = document.getElementById('smile2');
let count2 = 0;
let div2 = document.createElement('div');
let p2 = document.createElement('p');
let text2 = document.createTextNode(count2);
p2.appendChild(text2);
div2.appendChild(p2);
smile2.appendChild(div2);

smile2.addEventListener('click', function () {
	count2++;
	p2.innerHTML = count2;
}
);


let smile3 = document.getElementById('smile3');
let count3 = 0;
let div3 = document.createElement('div');
let p3 = document.createElement('p');
let text3 = document.createTextNode(count3);
p3.appendChild(text3);
div3.appendChild(p3);
smile3.appendChild(div3);

smile3.addEventListener('click', function () {
	count3++;
	p3.innerHTML = count3;
}
);


let smile4 = document.getElementById('smile4');
let count4 = 0;
let div4 = document.createElement('div');
let p4 = document.createElement('p');
let text4 = document.createTextNode(count4);
p4.appendChild(text4);
div4.appendChild(p4);
smile4.appendChild(div4);

smile4.addEventListener('click', function () {
	count4++;
	p4.innerHTML = count4;
}
);



let smile5 = document.getElementById('smile5');
let count5 = 0;
let div5 = document.createElement('div');
let p5 = document.createElement('p');
let text5 = document.createTextNode(count5);
p5.appendChild(text5);
div5.appendChild(p5);
smile5.appendChild(div5);

smile5.addEventListener('click', function () {
	count5++;
	p5.innerHTML = count5;
}
);