 import React from 'react'
 import {Link} from 'gatsby'
 import icon from '../assets/icon/dummy.png'

 const main = () =>{
 	return(

 		<section className="main-section container">
 			<div className="columns" id="main-author-content">

 				<div className="column">
 				 	<div className="wrapper-heading-content">
 				 	 	<h1>About Me</h1>
 				 	</div>
 				</div>

 				<div className="column is-three-fifths section-main-contents">  	
 				  	<p>
 				  	   <span className="icon-auhtor">
 				  			<img alt="author_icon" src={icon} />
 				  			<span className="author-name-tagline">David A. Ringer
 				  				<span className="author-fx"></span>
 				  			</span>
 				  		</span>
 				  	</p>

 				  	<p>
					    I'll ask the QA for this part. 
					</p>



					<button className="btn-main-customize"><Link to="/about-the-author#author"> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;