var email =["user1@gmail.com" , "user2@gmail.com", "user3@gmail.com" ];
var password = ["main ho user 1" , "main ho user 2", "main ho user 3" ];
var balance = [10000, 2000, 35600];
var userinput = prompt("please select a option\n1. login\n2. signup");
// login
if(userinput === "1"){
    var useremail = prompt("please enter your email");
    // check email is found or not
    if (useremail=== email[0] || useremail===email[1] || useremail===email[2]){
        alert("email is found!");
         var userpassword = prompt("please enter your password");
        //  checking password is correct or not
            if (userpassword=== password[0] && useremail=== email[0] || userpassword===password[1] && useremail=== email[1] || userpassword===password[2] && useremail=== email[2])
                {
        alert("password is correct! you are logged in . welcome " + useremail);
        // if user email is found then show the options
        // for email of user1
               if(useremail=== email[0]){
                while(option !=="exit"){
                    var option = prompt("please select a option \n1.check balance\n2.deposit\n3.withdraw\n4.transfer amount \n5.exit" );
                    if(option === "1"){
                        alert("your balance is: " + balance[0]);
                    }
                    else if(option === "2"){
                        var depositamount = +prompt("please enter the amount you want to deposit");
                        balance[0] = balance[0] +depositamount;
                        alert("your new balance is: " + balance[0]);
                    }
                    else if(option === "3"){
                        var withdrawamount = +prompt("please enter the amount you want to withdraw");
                        if((withdrawamount) <= balance[0]){
                            balance[0] = balance[0] - (withdrawamount);
                            alert("your new balance is: " + balance[0]);
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "4"){
                        var transferamount = +prompt("please enter the amount you want to transfer");
                        if(transferamount <= balance[0]){
                            var transferemail = prompt("please enter the email you want to transfer to");
                            if(transferemail === email[1]){
                                balance[0] = balance[0] - transferamount;
                                balance[1] = balance[1] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[0]);
                            }
                            else if(transferemail === email[2]){
                                balance[0] = balance[0] - transferamount;
                                balance[2] = balance[2] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[0]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }

            }
        }
        else{
            alert("email is not found! please try again or sign up first");
        }

            

        }
        //if password is incorrect
        else{
            alert("password is incorrect! please try again");

}
}








// sign up
else if(userinput === "2"){


}
}
