import React from "react"
import '../css/footer.css';

function Footer() {
	return (
		<footer id="footer">
			<div className="container-fluid" id="FAQs">
			  <div className="container">
			    <div className="row footer-dash">
			        <div className="col-lg-5 col-sm-5 col-xs-12">
			        <center>Image</center>
			        <p>We believe in seamless, automatic service triumps last minute, on-demand requests and with our less than 30-seconds booking, secure payment, and 100% money-back guarantee, ThirdWheel aims to be the easiest and most convenient way to provide your vehicle the service it deserves. </p>
			        <div className="row">
			          <div className="col-md-6">
			            <i className="fa fa-envelope" aria-hidden="true"><a href="mailto">&nbsp;support@thirdwheel.org</a></i>
			          </div>
			          <div className="col-md-6">
			            <i className="fa fa-phone" aria-hidden="true">&nbsp;+977 9841522160</i>
			          </div>
			        </div>
			      </div>
			      <div className="col-md-7 col-sm-7 col-xs-12">
			        <div className="row newsletter">
			          <div className="col-md-4">
			            <h4><b>Company</b></h4>
			            <a href="#"><li>About Us</li></a>
			            <a href="#"><li>Press</li></a>
			            <a href="#"><li>Download App</li></a>
			              <a href="#"><li>Terms and Condition</li></a>
			          </div>
			          <div className="col-md-4">
			            <ul>
			                 <li><h4><b>Policies</b></h4></li>      
			                  <a href="#"><li>Terms and Condition</li></a>
			              <a href="#"><li>Privacy Policy</li></a>
			              <a href="#"><li>Refunds</li></a>
			              <a href="#"><li>FAQs</li></a>
			              </ul> 
			          </div>
			          <div className="col-md-4">  
			              <ul>
			                 <li><h4><b>Resources</b></h4></li>
			                  <a href="#"><li>Blog</li></a>
			                  <a href="#"><li>Ask Expert</li></a>
			                  <a href="#"><li>Know your Mechanic</li></a>
			                  <a href="#"><li>How it Works</li></a>
			              </ul>
			          </div>
			        </div>
			        <div className="row join-newsletter">
			            <div className="col-md-12 col-lg-12 col-sm-12">
			                <p><b>JOIN OUR NEWSLETTER</b></p>
			                <div className="input-group input-group-lg">
			                    <div className="input-type">
			                        <input type="text"  aria-describedby="sizing-addon1" placeholder="Enter your email." />
			                    </div>
			                    <div className="input-link">
			                        <a href="#" className="btn btn-primary btn-contact btn-large hvr-sweep-to-right"><center>Submit</center></a>
			                    </div>
			                </div>  
			            </div>
			        </div>     
			      </div>
			    </div>
			  </div>
			</div>
			<div className="container-fluid footer">
			  <div className="container">
			    <div className="row">
			        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			        	<p>Copyright 2017. All Rights Reserved</p>
			        </div>
			        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
				        <center><h5>BE SOCIAL WITH US</h5></center>
				        <center>
				        	<a href="#" className="hvr-float-shadow"><i className="fa fa-facebook " aria-hidden="true"></i></a>
				       		<a href="#" className="hvr-float-shadow"><i className="fa fa-google-plus " aria-hidden="true"></i></a>
				        	<a href="#" className="hvr-float-shadow"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
				        	<a href="#" className="hvr-float-shadow"><i className="fa fa-twitter " aria-hidden="true"></i></a>
				        	<a href="#" className="hvr-float-shadow"><i className="fa fa-instagram " aria-hidden="true"></i></a>
				      	</center>
				    </div>
			        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			        	<p>Powered by><a href="#"><h6>Ango- ango1993@gamil.com</h6></a></p>
			        </div>
			    </div>
			  </div>
			</div>
		</footer>
	)
}

export default Footer