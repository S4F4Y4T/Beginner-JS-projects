class typewriter{
    constructor(txtElement,words){
        this.txtElement = txtElement;
        this.words      = words;
        this.await      = 2000;
        this.wordIndex  = 0;
        this.deleting   = false;
        this.txt        = '';
        this.type();
    }

    type(){
        const current = this.wordIndex % this.words.length; 
        // Get full text of current word
        const fullTxt = this.words[current];

        if(this.deleting){
            this.txt = fullTxt.substring(0 , this.txt.length - 1);
        }else{
            this.txt = fullTxt.substring(0 , this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

        let typespeed = 300;

        if(this.deleting){
            typespeed /= 2;
        }
        
        if(!this.deleting && this.txt ==  fullTxt){
            
            typespeed = this.await;
            this.deleting = true;

        }else if(this.txt == ''){

            this.deleting = false;
            this.wordIndex += 1;
            typespeed = 500;
        }
        
        setTimeout(() => this.type(),typespeed);
    }
}


//load content
window.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.data-type');
    const words = JSON.parse(txtElement.getAttribute('data-word'));

    new typewriter(txtElement,words);
}