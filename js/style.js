
// donation /history btn
document.getElementById('Donation').addEventListener('click',function(){
    console.log('show add money btn');
    showSectionById('donation-section');
})

document.getElementById('history').addEventListener('click',function(){
    console.log('show add money btn');
    showSectionById('history-section');
})
// card-1

document.getElementById('card-1').
    addEventListener('click', function (event) {
        event.preventDefault();
        const donate = document.getElementById('card-1-input').value;
        const donationCollected = document.getElementById('donation-collected').innerText;


        if (donate > 0 && donate != Text) {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);



            const donateNumber = parseFloat(donate);

            const totalDonation = parseFloat(donationCollected);

            const totalDonationCollected = totalDonation + donateNumber;
            document.getElementById('donation-collected').innerText = totalDonationCollected;

            const totalBalance = balanceNumber - donateNumber;
            document.getElementById('account-balance').innerText = totalBalance;

            // add transiction

            const p=document.createElement('p');
            p.innerText = `Donate:${donateNumber} tk.Balance:${totalBalance}`;
            console.log(p);


            document.getElementById('transaction-container').appendChild(p);
        }
        else {

            alert(`Invalid Donation amount!

        Please Enter a valid amount.`);
        }
    })

// card-2