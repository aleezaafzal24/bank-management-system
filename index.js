var email = ["user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
var password = ["main ho user 1", "main ho user 2", "main ho user 3"];
var balance = [10000, 2000, 35600];

var statement = [
    [],
    [],
    []
];

while (true) {

    var mainchoice = prompt(
        "1. Login\n" +
        "2. Signup\n" +
        "3. Exit"
    );

    // EXIT
    if (mainchoice === "3") {
        alert("Thank you for using our service");
        break;
    }

    // LOGIN
    else if (mainchoice === "1") {

        var useremail = prompt("Enter your email:");

        var found = false;
        var index;

        for (var i = 0; i < email.length; i++) {

            if (email[i] === useremail) {
                found = true;
                index = i;
                break;
            }

        }

        if (!found) {
            alert("Email not found. Try again or sign up first.");
            continue;
        }

        var userpassword = prompt("Enter your password:");

        if (userpassword !== password[index]) {
            alert("Wrong password.");
            continue;
        }

        alert("Welcome " + useremail);

        while (true) {

            var option = prompt(
                "1. Check Balance\n" +
                "2. Deposit\n" +
                "3. Withdraw\n" +
                "4. Transfer\n" +
                "5. Statement\n" +
                "6. Logout"
            );

            if (option === "6") {
                break;
            }

            else if (option === "1") {

                alert("Your current balance is Rs. " + balance[index]);

            }

            else if (option === "2") {

                var amount = +prompt("Enter deposit amount:");

                balance[index] += amount;

                statement[index].push(
                    "Deposited Rs. " +
                    amount +
                    " | Balance: Rs. " +
                    balance[index]
                );

                alert("Deposit successful.\nNew Balance: Rs. " + balance[index]);

            }

            else if (option === "3") {

                var amount = +prompt("Enter withdraw amount:");

                if (amount <= balance[index]) {

                    balance[index] -= amount;

                    statement[index].push(
                        "Withdraw Rs. " +
                        amount +
                        " | Balance: Rs. " +
                        balance[index]
                    );

                    alert("Withdraw successful.\nNew Balance: Rs. " + balance[index]);

                }

                else {

                    alert("Insufficient balance.");

                }

            }

            else if (option === "4") {             
                   var receiverEmail = prompt("Enter receiver email:");

                var receiverIndex = email.indexOf(receiverEmail);

                if (receiverIndex === -1) {
                    alert("Receiver email not found.");
                    continue;
                }

                if (receiverIndex === index) {
                    alert("You cannot transfer money to your own account.");
                    continue;
                }

                var amount = +prompt("Enter amount to transfer:");

                if (amount <= balance[index]) {

                    balance[index] -= amount;
                    balance[receiverIndex] += amount;

                    statement[index].push(
                        "Transferred Rs. " +
                        amount +
                        " to " +
                        receiverEmail +
                        " | Balance: Rs. " +
                        balance[index]
                    );

                    statement[receiverIndex].push(
                        "Received Rs. " +
                        amount +
                        " from " +
                        useremail +
                        " | Balance: Rs. " +
                        balance[receiverIndex]
                    );

                    alert("Transfer successful!");
                    alert("Your new balance is Rs. " + balance[index]);

                }

                else {

                    alert("Insufficient balance.");

                }

            }

            else if (option === "5") {

                if (statement[index].length === 0) {

                    alert("No transactions found.");

                }

                else {

                    alert(statement[index].join("\n"));

                }

            }

            else {

                alert("Invalid option.");

            }

        }

    }

    // SIGNUP
    else if (mainchoice === "2") {

        var newEmail = prompt("Enter new email:");

        if (email.indexOf(newEmail) !== -1) {

            alert("Email already exists.");

        }

        else {

            var newPassword = prompt("Enter new password:");

            email.push(newEmail);
            password.push(newPassword);
            balance.push(0);
            statement.push([]);

            alert("Account created successfully!");

        }

    }

    else {

        alert("Invalid choice.");

    }

}