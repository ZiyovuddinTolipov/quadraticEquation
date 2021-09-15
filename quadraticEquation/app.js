let table =document.getElementById('table')
let root1, root2;
let result=document.getElementById('result')
let a = prompt("a sonini qiymati: ");
let b = prompt("b sonini qiymati ")
let c = prompt("c sonini qiymati");
let t_a=document.getElementById('a').innerHTML=a;
let t_b=document.getElementById('b').innerHTML=b;
let t_c=document.getElementById('c').innerHTML=c;
let tenglama=document.getElementById('tenglama').innerHTML=`${a}x<sup>2</sup>+${b}x+${c}=0`

// D === discriminant
let D = b * b - 4 * a * c;
if (a==0){
    x=((-c)/b).toFixed(4)
    tenglama=document.getElementById('tenglama').innerHTML==`${b}x+${c}=0`
    result.innerHTML=` x=${x}`
}
else if (a.length>0 && b.length>0 && c.length>0) {
    let t_D=document.getElementById('D').innerHTML=D;
    
    if (D > 0) {
        root1 = (-b + Math.sqrt(D)) / (2 * a).toFixed(2);
        root2 = (-b - Math.sqrt(D)) / (2 * a).toFixed(2);
        result.innerHTML=`Kvadrat tenglamaning ildizlari <code style='color:#fff;' > ${root1.toFixed(2)}</code> va <code style='color:#fff;' > ${root2.toFixed(2)}</code>`;
    }else if (D<0){
 result.innerHTML=`<code>${a}x<sup>2</sup>+${b}x+${c}=0</code> <i> Tenglama yechimga ega emas .  <span style='color:red;'>Diskiriminant  0 dan kichik </span></i> `
}

else if (D == 0) {
    root1 = root2 = -b / (2 * a).toFixed(2);
 result.innerHTML=`Kvadrat tenglamaning ildizlari ${root1.toFixed(2)} va ${root2}`
  
  
}

} else {
    result.innerHTML=`null`
}