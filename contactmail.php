<?php
$name=$_POST['username'];
$email=$_POST['useremail'];
$phone=$_POST['userphone'];
$u_msg=$_POST['usermsg'];
if(trim($name)!="Your Name" && trim($email)!="Your Email" && trim($phone)!="Your Phone" && trim($u_msg)!="Your Message" && trim($name)!="" && trim($email)!="" && trim($phone)!="" && trim($u_msg)!="")
{
	if(filter_var($email, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..
			<p>".$name." has sent a query</p>
			<p>Email Id : ".$email."</p>
			<p>Phone Number is : ".$phone."</p>
			<p>Message is : ".$u_msg."</p>";
		
		$message_user="Hi ".$name."<p> Thank you so much for your valuable comments. <br> Our Support team will get back to you ASAP.</p><p>Have a great day ahead.</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <devendra.singh@himanshusofttech.com>' . "\r\n";

		if(mail('devendra.singh@himanshusofttech.com','Query for Plumber',$message,$headers ))
		{
		mail($email,'Reply from Plumber Template Team',$message_user,$headers );
			
		echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Please, Try Again.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Please, provide valid Email.</p>';
}
else
{
echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>