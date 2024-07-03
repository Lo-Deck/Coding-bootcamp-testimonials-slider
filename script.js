const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const changeImg = document.getElementById('change-img');
const changeText = document.getElementById('change-text');

let left = 1;
let right = 0;


btnLeft.addEventListener('click', () => 
    {
        if(left === 1)
        {

        
            changeImg.classList.remove('anim-back');
            changeImg.classList.add('anim');
        
            setTimeout( () => 
                {

                    changeText.innerText = '“ If you want to lay the best foundation possible I’d recommend taking this course. \
                    The depth the instructors go into is incredible. I now feel so confident about \
                    starting up as a professional developer. ”' 

                    changeText.nextElementSibling.innerHTML = 'John Tarkpor<span>Junior Front-end Developer</span>';

                    changeImg.src = './images/image-john.jpg';  

                }
            , 1500);

            right = 1;
            left = 0;

        }
 
    }
);

btnRight.addEventListener('click', () => 
    {

        if(right === 1)
        {

            changeImg.classList.remove('anim');
            changeImg.classList.add('anim-back');
    
            setTimeout( () => 
                {

                    changeText.innerText = '“ I’ve been interested in coding for a while but never taken the jump, until now. \
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so \
                    excited about the future. ”';

                    changeText.nextElementSibling.innerHTML = 'Tanya Sinclair<span>UX Engineer</span>';


                    changeImg.src = './images/image-tanya.jpg';

                }
            , 1500);

            right = 0;
            left = 1;

        }

    }

);