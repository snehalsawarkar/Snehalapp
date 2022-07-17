import React from "react";
import { Link } from "react-router-dom";

 function SignUpForm()
 {
  return (
    <div>
        <div class="login-wrap">
    <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			
		<div class="col-xs-6"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				
			

        </div>
        <div class="form-group">
        <div class="col-xs-6"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center text-primary">Already have an account? <Link to="/">Sign in</Link>
    </div>
    </div>
    </div>
    </div>
  )
}
  


export default SignUpForm;