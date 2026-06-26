var email = ["user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
var password = ["main ho user 1", "main ho user 2", "main ho user 3"];
var balance = [10000, 2000, 35600];

while (true) {

    var mainchoice = prompt(
        "1. Login\n" + "2. Signup\n" + "3. Exit"

    );
    // exit
     if (mainchoice === "3") {
    alert("Thank you for using our service");
        break;
    }
 // LOGIN
     else if (mainchoice === "1") {
        
         var useremail = prompt("Enter your  email:");
           var found = false;

for (var i = 0; i < email.length; i++) {

    if (email[i] === useremail) {
        found = true;
        var index = i;
        break;
    }
}

if (found===false) {
    alert("Email not found. Try again or sign up first");
    continue;
}
            var userpassword = prompt("Enter password:");

        if (userpassword !== password[index]) {
            alert("Wrong password");
            continue;
        }
        else{
        alert(" correct password ! Welcome " + useremail);}

        while (true) {
             

            var option = prompt(
                "1. Check Balance\n" +"2. Deposit\n" +"3. Withdraw\n" +"4. Transfer\n" +"5. Logout"
            );
            if (option === "5") {

                break;
        }

             else if (option === "1") {

                alert(" your current Balance: " + balance[index]);

            } else if (option === "2") {

                var amount = +prompt("Deposit amount");
                balance[index]= balance[index] + amount;
                alert("Deposit successful. your New balance is Rs: " + balance[index]);

            } else if (option === "3") {

                var amount = +prompt("Withdraw amount");

                if (amount <= balance[index]) {
                    balance[index] -= amount;
                    alert("Withdraw successful. New balance: " + balance[index]);
                } else {
                    alert("Insufficient balance");
                }

            } else if (option === "4") {

                var receiverEmail = prompt("Enter  email you want to transfer to:");

                var receiverIndex = email.indexOf(receiverEmail);

                if (receiverIndex === -1) {
                    alert("Email not found");
                    continue;
                }

                var amount = +prompt("Enter amount to transfer:");

                if (amount <= balance[index]) {

                   balance[index ] = balance[index] - amount;
                     balance[receiverIndex] += amount;
                     alert("Successfully transferred Rs. " + amount + " to " + receiverEmail + ". Your new balance: " + balance[index]);

                    alert("Transfer successful");

                } else {
                    alert("Insufficient balance");
                }

            } 
            }
        }
    

    // SIGNUP
    else if (mainchoice === "2") {

       var newEmail = prompt("Enter email");

if(email.indexOf(newEmail) !== -1){
    alert("Email already exists");
}
else{
    email.push(newEmail);
    console.log(email)

    var newPassword = prompt("Enter password");

    password.push(newPassword);
    balance.push(0);

    alert("Account created successfully");
}
    }
    
   
    else{
        alert("Wrong choice");
    }

}