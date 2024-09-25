
// card-1

document.getElementById ('card-1').
addEventListener('click',function(event){
    event.preventDefault();
    const donate = document.getElementById('card-1-input').value;
    const donationCollected =document.getElementById('donation-collected').innerText;
   
    
     if(donate>0 && donate != Text){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        

        const donateNumber =parseFloat(donate);
   
     const totalDonation= parseFloat(donationCollected);
    
     const totalDonationCollected = totalDonation+donateNumber;
     document.getElementById('donation-collected').innerText=totalDonationCollected;

     const totalBalance = balanceNumber-donateNumber;
        document.getElementById('account-balance').innerText= totalBalance;
     }  
     else{
        
        alert (`Invalid Donation amount!

        Please Enter a valid amount.`);
     }
})

// card-2