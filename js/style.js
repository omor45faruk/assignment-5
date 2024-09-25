
// donation /history btn
document.getElementById('Donation').addEventListener('click', function () {
    console.log('show add money btn');
    showSectionById('donation-section');
})

document.getElementById('history').addEventListener('click', function () {
    console.log('show add money btn');
    showSectionById('history-section');
})
document.getElementById('blog').addEventListener('click', function () {
    console.log('blog click');
    window.location.href = 'blog.html';
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

            //  add alart

            alert`
             Congrates!
             You Have Donated for Humankind
             Successfully
            
            
            `

            // end




            // add transiction

            const p = document.createElement('p');
            p.innerText = `Donate:${donateNumber} tk.Balance:${totalBalance}`;
            console.log(p);


            document.getElementById('transaction-container').appendChild(p);
        }
        else {

            alert(`Invalid Donation amount!

     Please Enter a valid amount.`);
        }
    })


// card-1 end


// card-2 start
document.getElementById('card-2').
    addEventListener('click', function (event) {
        event.preventDefault();
        const donate2 = document.getElementById('card-2-input').value;
        const donationCollected2 = document.getElementById('donation-collected2').innerText;


        if (donate2 > 0 && donate2 != Text) {
            const balance2 = document.getElementById('account-balance').innerText;
            const balanceNumber2 = parseFloat(balance2);



            const donateNumber2 = parseFloat(donate2);

            const totalDonation2 = parseFloat(donationCollected2);

            const totalDonationCollected2 = totalDonation2 + donateNumber2;
            document.getElementById('donation-collected2').innerText = totalDonationCollected2;

            const totalBalance2 = balanceNumber2 - donateNumber2;
            document.getElementById('account-balance').innerText = totalBalance2;



            alert`
             Congrates!
             You Have Donated for Humankind
             Successfully
            
            
            `


            // add transiction

            const pera2 = document.createElement('p');
            pera2.innerText = `Donate:${donateNumber2} tk.Balance:${totalBalance2}`;
            console.log(pera2);


            // document.getElementById('transaction-container').appendChild(pera2);
        }
        else {

            alert(`Invalid Donation amount!

        Please Enter a valid amount.`);
        }
    })

// card-2 end


// card-3 start


document.getElementById('card-3').
    addEventListener('click', function (event) {
        event.preventDefault();
        const donate3 = document.getElementById('card-3-input').value;
        const donationCollected3 = document.getElementById('donation-collected3').innerText;


        if (donate3 > 0 && donate3 != Text) {
            const balance3 = document.getElementById('account-balance').innerText;
            const balanceNumber3 = parseFloat(balance3);



            const donateNumber3 = parseFloat(donate3);

            const totalDonation3 = parseFloat(donationCollected3);

            const totalDonationCollected3 = totalDonation3 + donateNumber3;
            document.getElementById('donation-collected3').innerText = totalDonationCollected3;

            const totalBalance3 = balanceNumber3 - donateNumber3;
            document.getElementById('account-balance').innerText = totalBalance3;

            alert`
             Congrates!
             You Have Donated for Humankind
             Successfully
            
            
            `



            // add transiction

            const para = document.createElement('p');
            para.innerText = `Donate:${donateNumber3} tk.Balance:${totalBalance3}`;
            console.log(para);


            //  document.getElementById('transaction-container').appendChild(para);
        }
        else {

            alert(`Invalid Donation amount!

     Please Enter a valid amount.`);
        }
    })


// card-3 end