import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

const Pp = () =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">
				David A. Ringer
			</span>

			<h1 className="banr-header-fx">
				Privacy
				<span className="banr-spn-highlight" id="span-non-front">Policy</span>
			</h1>
		</>
	)


	const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};

	return(
		<>
		 	<Layout>
		 		
	 			<Banner bannerContext={bannerText} />

	 			<div className="container">
					<div id="privacy-policy-content">
	 					<div className="">{Parser(data.html)}</div>
 					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default Pp;