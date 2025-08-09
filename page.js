function Roll(){
   const box=document.getElementById("box").value;
   const result=document.getElementById("result");
    const imageid=document.getElementById("image");
    let valueid=[];
    let image=[];

    for(let i=0; i<box; i++) {
        let value1 =Math.floor(Math.random()*6)+1;
        valueid.push(value1);
        image.push(`<img src="dice/${value1}.png" alt="dice pic ${value1}">`);
    }
    result.textContent=valueid.join(', '); 
    imageid.innerHTML =image.join(' ');
    //console.log(image);

    
}