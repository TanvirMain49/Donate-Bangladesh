const historyBtnEL = document.getElementById('history-btn')
const donateBtnEL = document.getElementById('donate-btn')
const donationSectionEl = document.getElementById('donation-section')
const historySectionEl = document.getElementById('history-section')

historyBtnEL.addEventListener('click', function(){
    
    historyBtnEL.classList.add('bg-[#b4f461]') 
    donateBtnEL.classList.remove('btn-primaries')
    historySectionEl.classList.remove('hidden');
    donationSectionEl.classList.add('hidden');

})

donateBtnEL.addEventListener('click', function(){

    donateBtnEL.classList.add('btn-primaries') 
    historyBtnEL.classList.remove('bg-[#b4f461]')
    donationSectionEl.classList.remove('hidden');
    historySectionEl.classList.add('hidden');
})