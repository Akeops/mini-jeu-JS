const maDiv = document.querySelector('#maDiv');
console.log(maDiv);

let color = "grey";

for(let row = 0; row < 15; row++){
    const ligne = document.createElement('div');
    ligne.id = `ligne - ${row}`;
    ligne.className = 'ligne';
    for(let col = 0; col < 20; col++){
        const carre = document.createElement('div');
        carre.innerText = `${row}, ${col}`;
        carre.className = "carre";

        carre.style.backgroundColor = color;

        //carre.addEventListener('click', (e) => {
          //  e.target.style.backgroundColor = 'red';
        //});*


            carre.addEventListener('click', (e) => {
                if(e.target.style.backgroundColor === 'red'){
                    e.target.style.backgroundColor = color;
                } else {
                    e.target.style.backgroundColor = 'red';
                }
            });
        ligne.append(carre);

       
    }
  
    maDiv.append(ligne);
}







        

    

      

     





