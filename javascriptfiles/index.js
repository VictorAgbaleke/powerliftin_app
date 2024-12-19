


const footerSubs = document.querySelectorAll('.footer-subs p');
const contentBoxes = document.getElementsByClassName('content');



    for (let i = 0;i<contentBoxes.length; i++){
        contentBoxes[i].addEventListener('mouseenter',function (){
            contentBoxes[i].style.border = '2px solid #D13E3E';
            contentBoxes[i].style.borderRadius = '10px';
            contentBoxes[i].style.transition = 'border 0.3s ease';
        })

        contentBoxes[i].addEventListener('mouseleave', function(){
            contentBoxes[i].style.border = 'none';
        });
    }

for (let i=0; i < footerSubs.length; i++){
    footerSubs[i].addEventListener('mouseenter', function(){
        footerSubs[i].style.opacity = '100%';
        
    }) 

    footerSubs[i].addEventListener('mouseleave', function(){
        footerSubs[i].style.opacity = '50%';
    });
}