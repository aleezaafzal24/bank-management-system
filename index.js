var email =["user1@gmail.com" , "user2@gmail.com", "user3@gmail.com" ];
var password = ["main ho user 1" , "main ho user 2", "main ho user 3" ];
var balance = [10000, 2000, 35600,];
while(userinput!=="3"){
var userinput = prompt("please select a option\n1. login\n2. signup\n 3.Exit");
// login
if(userinput === "1")
    
    {
        var login = false;
while(!login){

{
    var useremail = prompt("please enter your email");
    // check email is found or not
    if (useremail=== email[0] || useremail===email[1] || useremail===email[2]){
        
        while(!login){
         var userpassword = prompt("please enter your password");
        //  checking password is correct or not
            if (userpassword=== password[0] && useremail=== email[0] || userpassword===password[1] && useremail=== email[1] || userpassword===password[2] && useremail=== email[2])
                {
                    login = true;
        alert("password is correct! you are logged in . welcome " + useremail);
        // if user email is found and password is correct  then show the options
        // for  user1
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
                            else if(transferemail === email[3]){
                                balance[0] = balance[0] - transferamount;
                                balance[3] = balance[3] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[0]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }
                else{
                    alert("wrong input!")
                

            }
          
        }
        }
         // for user2
               if(useremail=== email[1]){
                while(option !=="exit"){
                    var option = prompt("please select a option \n1.check balance\n2.deposit\n3.withdraw\n4.transfer amount \n5.exit" );
                    if(option === "1"){
                        alert("your balance is: " + balance[1]);
                    }
                    else if(option === "2"){
                        var depositamount = +prompt("please enter the amount you want to deposit");
                        balance[1] = balance[1] +depositamount;
                        alert("your new balance is: " + balance[1]);
                    }
                    else if(option === "3"){
                        var withdrawamount = +prompt("please enter the amount you want to withdraw");
                        if(withdrawamount <= balance[1]){
                            balance[1] = balance[1] - (withdrawamount);
                            alert("your new balance is: " + balance[1]);
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "4"){
                        var transferamount = +prompt("please enter the amount you want to transfer");
                        if(transferamount <= balance[1]){
                            var transferemail = prompt("please enter the email you want to transfer to");
                            if(transferemail === email[0]){
                                balance[1] = balance[1] - transferamount;
                                balance[0] = balance[0] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[1]);
                            }
                            else if(transferemail === email[2]){
                                balance[1] = balance[1] - transferamount;
                                balance[2] = balance[2] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[1]);
                            }
                            else if(transferemail === email[3]){
                                balance[1] = balance[1] - transferamount;
                                balance[3] = balance[3] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[1]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }
                else{
                    alert("wrong input!")
                }

            }
        }
         // for  user3
               if(useremail=== email[2]){
                while(option !=="exit"){
                    var option = prompt("please select a option \n1.check balance\n2.deposit\n3.withdraw\n4.transfer amount \n5.exit" );
                    if(option === "1"){
                        alert("your balance is: " + balance[2]);
                    }
                    else if(option === "2"){
                        var depositamount = +prompt("please enter the amount you want to deposit");
                        balance[2] = balance[2] +depositamount;
                        alert("your new balance is: " + balance[2]);
                    }
                    else if(option === "3"){
                        var withdrawamount = +prompt("please enter the amount you want to withdraw");
                        if(withdrawamount <= balance[2]){
                            balance[2] = balance[2] - (withdrawamount);
                            alert("your new balance is: " + balance[2]);
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "4"){
                        var transferamount = +prompt("please enter the amount you want to transfer");
                        if(transferamount <= balance[2]){
                            var transferemail = prompt("please enter the email you want to transfer to");
                            if(transferemail === email[1]){
                                balance[2] = balance[2] - transferamount;
                                balance[1] = balance[1] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[2]);
                            }
                            else if(transferemail === email[0]){
                                balance[2] = balance[2] - transferamount;
                                balance[0] = balance[0] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[2]);
                            }
                            else if(transferemail === email[3]){
                                balance[2] = balance[2] - transferamount;
                                balance[3] = balance[3] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[2]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }
                else{
                    alert("wrong input. try again!")
                }

            }
        }
        // for user 4
               if(useremail=== email[3]){
                while(option !=="exit"){
                    var option = prompt("please select a option \n1.check balance\n2.deposit\n3.withdraw\n4.transfer amount \n5.exit" );
                    if(option === "1"){
                        alert("your balance is: " + balance[3]);
                    }
                    else if(option === "2"){
                        var depositamount = +prompt("please enter the amount you want to deposit");
                        balance[3] = balance[3] +depositamount;
                        alert("your new balance is: " + balance[3]);
                    }
                    else if(option === "3"){
                        var withdrawamount = +prompt("please enter the amount you want to withdraw");
                        if(withdrawamount <= balance[3]){
                            balance[3] = balance[3] - (withdrawamount);
                            alert("your new balance is: " + balance[3]);
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "4"){
                        var transferamount = +prompt("please enter the amount you want to transfer");
                        if(transferamount <= balance[3]){
                            var transferemail = prompt("please enter the email you want to transfer to");
                            if(transferemail === email[0]){
                                balance[3] = balance[3] - transferamount;
                                balance[0] = balance[0] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[3]);
                            }
                            else if(transferemail === email[2]){
                                balance[3] = balance[3] - transferamount;
                                balance[2] = balance[2] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[3]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }
                else{
                    alert("wrong input!")
                }

            }
        }
       

            

        }
        //if password is incorrect
        else{
            alert("password is incorrect! please try again");
}
    }
}
         else{

            alert("email  not found! please try again.");
        }
        
}
}
}








// sign up
else if(userinput === "2"){
     email.push(prompt("email:"));
     balance.push(0);
     
     if(email[email.length-1]===email[0]||email[email.length-1]===email[1] || email[email.length-1]===email[2]){
      alert("already existing email . login or try again.")
          
     }
     else if (
    email[email.length-1] !== email[0] &&
    email[email.length-1] !== email[1] &&
    email[email.length-1] !== email[2]
){
        password.push(prompt("enter password:"));
        while(option !=="exit"){
                    var option = prompt("please select a option \n1.check balance\n2.deposit\n3.withdraw\n4.transfer amount \n5.exit" );
                   
                    if(option === "1"){
                        alert("your balance is: " + balance[email.length-1]);
                    }
                    else if(option === "2"){
                        var depositamount = +prompt("please enter the amount you want to deposit");
                        balance[email.length-1] = balance[email.length-1] +depositamount;
                        alert("your new balance is: " + balance[email.length-1]);
                    }
                    else if(option === "3"){
                        var withdrawamount = +prompt("please enter the amount you want to withdraw");
                        if((withdrawamount) <= balance[email.length-1]){
                            balance[email.length-1] = balance[email.length-1] - (withdrawamount);
                            alert("your new balance is: " + balance[email.length-1]);
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "4"){
                        var transferamount = +prompt("please enter the amount you want to transfer");
                        if(transferamount <= balance[email.length-1]){
                            var transferemail = prompt("please enter the email you want to transfer to");
                            if(transferemail === email[1]){
                                balance[email.length-1] = balance[0] - transferamount;
                                balance[1] = balance[1] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[email.length-1]);
                            }
                            else if(transferemail === email[2]){
                                balance[email.length-1] = balance[email.length-1] - transferamount;
                                balance[2] = balance[2] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[email.length-1]);
                            }
                            else if(transferemail === email[0]){
                                balance[email.length-1] = balance[email.length-1] - transferamount;
                                balance[0] = balance[0] + transferamount;
                                alert("you have successfully transferred RS." + transferamount + " to " + transferemail);
                                alert("your new balance is: " + balance[email.length-1]);
                            }
                            else {
                                alert("invalid email! please try again");
                            }
                        }
                        else{
                            alert("insufficient balance!");
                        }
                    }
                    else if(option === "5"){
                        alert("you have successfully logged out! thank you for using our services");
                        break;
                }
                else{
                    alert("wrong input!")
                

            }

     }
    }
    


}
}

