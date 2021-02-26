import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/icon/dummy.png'
import {Helmet} from 'react-helmet';

const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">David A. Ringer</span>
			<h1 className="banr-header-fx">
				
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Dedication</span>
			</h1>
		</>
	)

	return(
		<Layout>
		  	<Helmet title="Dedication | David Ringer"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	{/* <div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author"/>
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					David A. Ringer
					 				</span>
					 			</div>

					 			<h4>
								 	
					 			</h4>

					 			<span className="ata-span-fx"></span>
					 		</div>
					 	</div> */}

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
								  I would like to express gratitude to Pat Barnhart at Writing Down Pat for her editorial assistance in writing this book.
								</p>

								<p>
									
								</p>	

								<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					David A. Ringer
					 				</span>
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor