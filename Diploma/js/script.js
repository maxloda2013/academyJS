

const hide = (elem) =>{
    elem.classList.toggle('hide');
};
//popup
const popup = () =>{
    
    const popupCall = document.querySelector('.popup-call'),
        popupCheck = document.querySelector('.popup-check'),
        popupDiscount = document.querySelector('.popup-discount'),
        body = document.querySelector('body');

        body.addEventListener('click', (event) =>{
            let target = event.target;

            const openPopup = (elemClass, hideElem) =>{
                if(target.closest(`.${elemClass}`)){
                    hide(hideElem);
                }
            };

            const closePopup = () =>{
                if(target.closest('.popup')){
                    if(!target.closest('.popup-content') || target.closest('.popup-close')){
                        event.preventDefault();
                        hide(target.closest('.popup'));
                    }
                }
            };

            openPopup('call-btn', popupCall);
            openPopup('check-btn', popupCheck);
            openPopup('discount-btn', popupDiscount)
            closePopup();
        });
};

popup();

//toggleDiscount

const toggleDiscount = () =>{
    const sentence = document.querySelector('.sentence');


        sentence.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.closest('.add-sentence-btn')){
                const discountItem = sentence.querySelectorAll('.discount-item '),
                    addSentenceBtn = document.querySelector('.add-sentence-btn');

                
                hide(addSentenceBtn);

                discountItem.forEach((item) =>{
                    item.classList.remove('hide');
                });
            }


        });
};

toggleDiscount();

//accordion

const toggleAccordion = () =>{
    const slideInDown = document.querySelector('.slideInDown'),
        answer = slideInDown.querySelectorAll('.answer');

        
        slideInDown.addEventListener('click', (event) =>{
            let target = event.target;
            event.preventDefault();

            if(target.closest('.question')){
                const activeAnswer = target.closest('.question').querySelector('.answer');
                activeAnswer.classList.toggle('active-answer');
                answer.forEach((item) =>{
                    if(item !== activeAnswer){
                        item.classList.remove('active-answer');
                    }
                });
            }
        });
};

toggleAccordion();

//constructor

const constructor = () =>{
    const accordionId = document.getElementById('accordion'),
        btn = accordionId.querySelectorAll('.construct-btn'),
        sectionCalc = document.querySelectorAll('.section-calc');
        

        accordionId.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;
            if(target.closest('.header-calc')){
                calcSection = target.closest('.header-calc').parentNode;
                sectionCalcActive = calcSection.querySelector('.section-calc');
                sectionCalcActive.classList.toggle('section-calc-active');
                sectionCalc.forEach((item) =>{
                    if(item !== sectionCalcActive){
                        item.classList.remove('section-calc-active');
                    }
                });

            }
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

