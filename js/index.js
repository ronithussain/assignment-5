document.getElementById('donate-now-btn')
    .addEventListener('click', function(){
        // console.log('click button')

const addMoney =getInputValueById('input-add-money');

const balance = getTextValueById('donate-balance');
const newBalance = balance + addMoney;
document.getElementById('donate-balance').innerText = newBalance;

// if(addMoney > balance){
//     alert('Failed');
//     return;
// }

// if(isNaN(addMoney)){
//  alert('Your donate is failed.');
//  return;
// }
 


if(addMoney <= 0 || isNaN(addMoney)){
    document.getElementById('input-error').classList.remove('hidden')
    return;
}
})