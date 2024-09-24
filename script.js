const historyBtnEL = document.getElementById('history-btn')
const donateBtnEL = document.getElementById('donate-btn')
const donationSectionEl = document.getElementById('donation-section')
const historySectionEl = document.getElementById('history-section')
const modal = document.getElementById('my_modal_1')
const blogBtn = document.getElementById('blog-btn')


function getInputNumber(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNum = Number(inputValue);
    return inputValueNum;
}

function getInnerTextNumber(id) {
    const text = document.getElementById(id).innerText;
    const textNumber = Number(text);
    return textNumber;
}

function calculateCurrentBalance(donateBalance) {

    const currentBalanceEl = getInnerTextNumber('current-balance');
    if (currentBalanceEl >= 0) {
        const newBalance = currentBalanceEl - donateBalance;
        document.getElementById('current-balance').innerText = newBalance
    }
    else {
        alert('Not enough money');
        return;
    }
}

function handleDonation(cardInputID, cardBalanceID, currentBalanceID, locationNameID) {

    const inputValue = getInputNumber(cardInputID);
    const currentBalance = getInnerTextNumber(currentBalanceID);
    if (currentBalance < inputValue) {
        alert('Not enough Balance');
        document.getElementById(cardInputID).value = '';
        return;
    }

    if (inputValue > 0) {
        const cardBalance = getInnerTextNumber(cardBalanceID);
        const newCardBalance = cardBalance + inputValue;
        document.getElementById(cardBalanceID).innerText = newCardBalance;
        document.getElementById(cardInputID).value = '';
        calculateCurrentBalance(inputValue);
        modal.showModal();
        document.getElementById('btn-close').addEventListener('click', function () {
            modal.close();
        })


    }
    else {
        alert('Not a valid input');
        document.getElementById(cardInputID).value = '';
    }

    const locationName = document.getElementById(locationNameID).innerText
    const donationMessage = `
        <div class="border-2 border-gray-200 md:p-8 p-4 space-y-4 rounded-xl">
          <h1 class="md:text-xl text-base font-bold">
            ${inputValue} Taka is ${locationName}
          </h1>
          <p class="text-sm text-gray-500">
             Date: ${new Date().toString()}
          </p>
        </div>
    `
    historySectionEl.innerHTML += donationMessage;

}



historyBtnEL.addEventListener('click', function () {

    historyBtnEL.classList.add('bg-[#b4f461]')
    donateBtnEL.classList.remove('btn-primaries')
    historySectionEl.classList.remove('hidden');
    donationSectionEl.classList.add('hidden');

})

donateBtnEL.addEventListener('click', function () {

    donateBtnEL.classList.add('btn-primaries')
    historyBtnEL.classList.remove('bg-[#b4f461]')
    donationSectionEl.classList.remove('hidden');
    historySectionEl.classList.add('hidden');
})

blogBtn.addEventListener('click', function () {
    window.location.href = 'blog.html';
})



document.getElementById('donate-amount-btn-1').addEventListener('click', function () {
    handleDonation('card1-input-field', 'card1-balance', 'current-balance', 'location-1')
})

document.getElementById('donate-amount-btn-2').addEventListener('click', function () {
    handleDonation('card2-input-field', 'card2-balance', 'current-balance', 'location-2')
})

document.getElementById('donate-amount-btn-3').addEventListener('click', function () {
    handleDonation('card3-input-field', 'card3-balance', 'current-balance', 'location-3')
})