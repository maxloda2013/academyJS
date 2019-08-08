
//popup
const popup = () =>{
    
    const popupCall = document.querySelector('.popup-call'),
        popup = document.querySelectorAll('.popup'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation'),
        callBtn = document.querySelectorAll('.call-btn'),
        checkBtn = document.querySelector('.check-btn'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        sentence = document.querySelector('.sentence'),
        consultationBtn = document.querySelector('.consultation-btn');


    const popupOpen = () =>{

        callBtn.forEach((item) =>{
            if(item.tagName == 'A'){
                item.addEventListener('click', () =>{
                    popupCall.style.display = 'block';
                });
            }
            if(item.tagName == 'BUTTON'){
                item.addEventListener('click', () =>{
                    popupDiscount.style.display = 'block';
                });
            }
        });
    
        checkBtn.addEventListener('click', () =>{
            popupCheck.style.display = 'block';
        });

        sentence.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.matches('.discount-btn')){
                popupDiscount.style.display = 'block';
            }
        });

        consultationBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            popupConsultation.style.display = 'block';
        });
        
    };

    popupOpen();
    

    const popupClose = () =>{

        popup.forEach((item) =>{

        
            item.addEventListener('click', (event) =>{
                let target = event.target;
                if(!target.closest('.popup-content')){
                    item.style.display = 'none';
                }
                if(target.matches('.popup-close')){
                    event.preventDefault();
                    item.style.display = 'none';
                }
            });
        });
    };
    popupClose();
};

popup();

//toggleDiscount

const toggleDiscount = () =>{
    const sentence = document.querySelector('.sentence');
        sentence.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;

            if(target.matches('.add-sentence-btn')){
                const discountItem = sentence.querySelectorAll('.discount-item ');
                
                sentence.querySelector('.add-sentence-btn').style.display = 'none';

                discountItem.forEach((item) =>{
                    item.classList.remove('hidden', 'visible-sm-block');
                });
            }


        });
};

toggleDiscount();

//accordion

const accordion = () =>{
    const slideInDown = document.querySelector('.slideInDown'),
        panel = slideInDown.querySelectorAll('.panel');

        
        slideInDown.addEventListener('click', (event) =>{
            let target = event.target;
            panel.forEach((item) =>{
                const linkPanel = item.querySelector('a');
                if(target == linkPanel){
                    event.preventDefault();
                    item.querySelectorAll('div')[1].style.display = 'block';
                }
                if(target !== linkPanel){
                    event.preventDefault();
                    item.querySelectorAll('div')[1].style.display = 'none';
                }
            });
        });
};

accordion();

//constructor

const constructor = () =>{
    const accordionId = document.getElementById('accordion'),
        panel = accordionId.querySelectorAll('.panel'),
        btn = accordionId.querySelectorAll('.construct-btn');

        accordionId.addEventListener('click', (event) =>{
            let target = event.target;
            btn.forEach((item, id) =>{
                let nextId = id + 1;
                if(nextId == btn.length){
                    return;
                }
                if(target == item || target == item.querySelector('span')){
                    panel[nextId].querySelectorAll('div')[1].style.display = 'block';
                }
            });
        });

};

constructor();

//calc

const calc = () =>{
    const checkbox = document.getElementById('myonoffswitch'),
        checkboxWell = document.getElementById('myonoffswitch-two'),
        panelBlock = document.querySelectorAll('.panel__block'),
        accordion = document.getElementById('accordion'),
        selectDiametr = document.getElementById('diameter'),
        countCircle = document.getElementById('count-circle'),
        calcResult = document.getElementById('calc-result');

    const counter = () =>{
        let total = 0,
            countСhamber,
            coefficient = +selectDiametr[selectDiametr.options.selectedIndex].value,
            circle = +countCircle[countCircle.options.selectedIndex].value;
        
            if(checkbox.checked){
                countСhamber = 10000;
            }else{
                countСhamber = 15000;
            }

            
            total = countСhamber * coefficient * circle;

            if(checkboxWell.checked){
                total += 1000;
            }

            calcResult.value =  total;
    };

    accordion.addEventListener('change', (event) =>{
        let target = event.target;
            if(target.matches('#myonoffswitch')){
                if(!checkbox.checked){
                    panelBlock[1].style.display = 'block';
                }else{
                    panelBlock[1].style.display = 'none';
                }
            }
        counter();
    });



    
};

calc();

