let compteurActif = true;
const maDiv = document.querySelector('#maDiv');
let casesRougesCliquees = 0;
console.log(maDiv);

let color = "grey";
chronometre(5);

const compteurP = document.createElement('p');
compteurP.textContent = `Cases rouges cliquées : ${casesRougesCliquees}`;
premiereDiv.append(compteurP);

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
                if (compteurActif) {
                    if (e.target.style.backgroundColor === 'red') {
                        e.target.style.backgroundColor = color;
                        
                    } else {
                        e.target.style.backgroundColor = 'red';
                        casesRougesCliquees++;
                        compteurP.textContent = `Cases rouges cliquées : ${casesRougesCliquees}`;
                    }
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
        temps = Math.round((temps - 0.1) * 10) / 10;
        baliseP.textContent = `TIMER : ${temps.toFixed(1)}`;

        if (temps <= 0) {
            clearInterval(interval);
            compteurActif = false;
            
        }
    }, 100);
}









        

    

      

     





