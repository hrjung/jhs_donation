

  function handleAmountChange(amount) {
    const totalSpan = document.getElementById('total-donation');
    totalSpan.innerText = amount;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var oneThousandButton = document.getElementById("Button1000");
    var fiveThousandButton = document.getElementById("Button5000");
    var tenThousandButton = document.getElementById("Button10000");
    var donateButton = document.getElementById("donateButton");
    var donationAmountInput = document.getElementById("donationAmountInput");
    var imageElement = document.querySelector(".modal-body img");
    var totalDonationText = document.getElementById("totalDonationText");
    var totalDonation = 0;
    var userEmail = localStorage.getItem('email');
    var emailElement = document.getElementById('userEmailDisplay'); 

    console.log("user_email:", userEmail);
    if (userEmail) {
      emailElement.textContent = `로그인 이메일: ${userEmail}`;
    } 

    // donationAmountInput.addEventListener("keyup", () => {
    //   const currentValue = parseInt(donationAmountInput.value);
  
    //   console.log("keyup");
    //   if (isNaN(currentValue)) {
    //     donationAmountInput.value = 1000;
    //   } else {
    //     donationAmountInput.value = currentValue + 1000;
    //   }
    // });

    // donationAmountInput.addEventListener("keydown", () => {
    //   const currentValue = parseInt(donationAmountInput.value);
  
    //   console.log("keydown");
    //   if (isNaN(currentValue) || currentValue < 1000) {
    //     donationAmountInput.value = 0;
    //   } else {
    //     donationAmountInput.value = currentValue - 1000;
    //   }
    // });

    if (oneThousandButton) {
      oneThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 1000;
      });
    }

    if (fiveThousandButton) {
      fiveThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 5000;
      });
    }

    if (tenThousandButton) {
      tenThousandButton.addEventListener("click", function() {
        document.getElementById("donationAmountInput").value = 10000;
      });
    }

    if (donateButton) {
      donateButton.addEventListener("click", function(event) {
        event.preventDefault();

        var donation = parseInt(donationAmountInput.value);

        donationAmountInput.value = 0;
        if (!isNaN(donation)) {
          totalDonation += donation;

          if (totalDonation > 20000) {
            imageElement.src = "images/green.webp"; 
            imageElement.alt = "new image";
          }

          totalDonationText.textContent = totalDonation + " 원";
        } else {
          alert("금액을 입력하세요");
        }
      });
    }

  });


  // window.onload = function() {
  //   const amountInput = document.getElementById('amount');
  //   const confirmButton = document.getElementById('confirm-button');
  //   const modal = new bootstrap.Modal(document.getElementById('donationModal'));
  
  //   amountInput.addEventListener('keyup', function(e) {
  //     handleAmountChange(e.target.value);
  //   });

  //   confirmButton.addEventListener('click', function() {
  //     modal.hide();
  //   });
  // }
