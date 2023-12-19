
const maDiv = document.querySelector('#maDiv');
console.log(maDiv);

let color = "grey";
chronometre(5);
for(let row = 0; row < 15; row++){
    const ligne = document.createElement('div');
    ligne.id = `ligne - ${row}`;
    ligne.className = 'ligne';
    for(let col = 0; col < 20; col++){
        const carre = document.createElement('div');
        carre.innerText = `${row}, ${col}`;
        carre.className = "carre";

        carre.style.backgroundColor = color;

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

function chronometre(initialTime){
    let temps = initialTime;
    const premiereDiv = document.querySelector('#premiereDiv');
    const baliseP = document.createElement('p');
    baliseP.textContent = temps;
    console.log(temps);
    premiereDiv.append(baliseP);

    const interval = setInterval(() => {
        temps -= 0.1;
        baliseP.textContent = temps.toFixed(1);

        if (temps < 0) {
            clearInterval(interval);
        }
    }, 100);
}









        

    

      

     





