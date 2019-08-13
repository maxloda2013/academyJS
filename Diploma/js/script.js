

const hide = (elem) =>{
    elem.classList.toggle('hide');
};
//popup
const popup = () =>{
    
    const popupCall = document.querySelector('.popup-call'),
        popupCheck = document.querySelector('.popup-check'),
        popupDiscount = document.querySelector('.popup-discount'),
        body = document.querySelector('body');

        const togglePopup = (target, event = 'close', prevent = '') =>{
            if(event == 'open'){
                if(target.closest('.call-btn')){
                    hide(popupCall);
                }
                if(target.closest('.check-btn')){
                    hide(popupCheck);
                }
                if(target.closest('.discount-btn')){
                    hide(popupDiscount);   
                }
            }
            if(event == 'close'){
                if(target.closest('.popup')){
                    if(!target.closest('.popup-content') || target.closest('.popup-close')){
                        prevent.preventDefault();
                        hide(target.closest('.popup'));
                    }
                }
            }
        };

        body.addEventListener('click', (event) =>{
            let target = event.target;
            
            togglePopup(target, 'open'); 
            togglePopup(target, 'close', event);
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
    const accordionId = document.getElementById('accordion')
        sectionCalc = document.querySelectorAll('.section-calc');
        
    const searchActiveSection = (target, Class, elem = 'header') =>{
        if(elem == 'header'){
            calcSection = target.closest(`.${Class}`).parentNode;
        }else if(elem == 'button'){
            calcSection = target.closest(`.${Class}`).parentNode.parentNode.parentNode;
        }
        sectionCalcActive = calcSection.querySelector('.section-calc');
        sectionCalcActive.classList.toggle('section-calc-active');
        return sectionCalcActive;
    };

    const toggleCalcSection = (target) =>{
        if(target.closest('.header-calc')){
            activeSection = searchActiveSection(target.closest('.header-calc'),'header-calc');

            sectionCalc.forEach((item) =>{
                if(item !== activeSection){
                    item.classList.remove('section-calc-active');
                }
            });
        }
        if(target.closest('.construct-btn')){
            activeSection = searchActiveSection(target.closest('.construct-btn'),'construct-btn', 'button');

            sectionCalc.forEach((item, id) =>{
                if(item == activeSection){
                    if(id == sectionCalc.length - 1){
                        item.classList.toggle('section-calc-active');
                    }else{
                        sectionCalc[id + 1].classList.toggle('section-calc-active');
                    }
                    
                }
            });
        }
    };
        accordionId.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.closest('.onoffswitch')){
                return;
            }else{
                event.preventDefault();
            }

            toggleCalcSection(target);
        });

};

constructor();

//calc

const calc = () =>{
    const checkbox = document.getElementById('myonoffswitch'),
        checkboxWell = document.getElementById('myonoffswitch-two'),
        panelBlock = document.querySelectorAll('.panel__block'),
        accordion = document.getElementById('accordion'),
        selectDiametr = document.querySelectorAll('.diameter'),
        countCircle = document.querySelectorAll('.count-circle'),
        calcResult = document.getElementById('calc-result'),
        distance = document.querySelector('.distance');

        calcResult.value =  11000;

        let result = {};

    const counter = () =>{
        let total = 0,
            type,
            diameter,
            circleCount,
            countСhamber = 10000,
            coefficient = 1,
            circle = 1;
        
            if(checkbox.checked){
                countСhamber = 10000;
                coefficient = +selectDiametr[0][selectDiametr[0].options.selectedIndex].value;
                circle = +countCircle[0][countCircle[0].options.selectedIndex].value;
                type = 'Однокамерный';
                diameter = selectDiametr[0][selectDiametr[0].options.selectedIndex].textContent;
                circleCount = selectDiametr[0][selectDiametr[0].options.selectedIndex].textContent;
            }else{
                countСhamber = 15000;
                let coefficientFirst = +selectDiametr[0][selectDiametr[0].options.selectedIndex].value,
                    coefficientSecond = +selectDiametr[1][selectDiametr[1].options.selectedIndex].value,
                    circleFirst = +countCircle[0][countCircle[0].options.selectedIndex].value,
                    circleSecond = +countCircle[1][countCircle[1].options.selectedIndex].value;
                coefficient =  coefficientFirst * coefficientSecond;
                circle = circleFirst * circleSecond;
                type = 'Двухкамерный';
                diameter = {
                    First: selectDiametr[0][selectDiametr[0].options.selectedIndex].textContent,
                    second: selectDiametr[1][selectDiametr[1].options.selectedIndex].textContent
                };
                circleCount = {
                    First: countCircle[0][countCircle[0].options.selectedIndex].textContent,
                    second: countCircle[1][countCircle[1].options.selectedIndex].textContent
                };
            }

            
            total = Math.ceil(countСhamber * coefficient * circle);

            if(checkboxWell.checked){
                if(checkbox.checked){
                    total += 1000;
                }else{
                    total += 2000;
                }
            }

            calcResult.value =  total;
            return {
                septicType: type,
                diameter: diameter,
                circleCount: circleCount,
                bottom:checkboxWell.checked,
                total: total,
                distance:distance.value
            };
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

    accordion.addEventListener('click', (event) =>{
        let target = event.target;
        if(target.closest('.construct-btn')){
            result = console.log(counter());
        }
    });



    
};

calc();

