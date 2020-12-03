import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/icon/dummy.png'


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">David A. Ringer</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					David A. Ringer
					 				</span>
					 			</div>

					 			<h4>
								 	
					 			</h4>

					 			<span className="ata-span-fx"></span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id risus et lorem semper tristique sed vitae felis. Integer sit amet semper orci, vitae iaculis lectus. Morbi et aliquam nisl. Nam in congue felis. Curabitur vulputate dolor et arcu elementum ultrices. Vestibulum tincidunt massa at ex lobortis, ac gravida enim ultrices. Pellentesque dictum nulla vel arcu dictum viverra. Donec ac enim dolor. Etiam eget libero dolor. Curabitur aliquam auctor ligula, a placerat dolor ultricies at. Aenean sem eros, mattis non dignissim id, viverra a ex. Nullam commodo in neque non efficitur.
								</p>

								<p>
									
								</p>	

			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor