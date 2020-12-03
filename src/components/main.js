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
					   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id risus et lorem semper tristique sed vitae felis. Integer sit amet semper orci, vitae iaculis lectus. Morbi et aliquam nisl. Nam in congue felis. Curabitur vulputate dolor et arcu elementum ultrices. Vestibulum tincidunt massa at ex lobortis, ac gravida enim ultrices. Pellentesque dictum nulla vel arcu dictum viverra. Donec ac enim dolor. Etiam eget libero dolor. Curabitur aliquam auctor ligula, a placerat dolor ultricies at. Aenean sem eros, mattis non dignissim id, viverra a ex. Nullam commodo in neque non efficitur.
					</p>



					<button className="btn-main-customize"><Link className="Read-more" to="/about-the-author#author"> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;