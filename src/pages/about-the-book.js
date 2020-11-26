import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/two_book_perspective.png'
import Book2 from '../assets/img/books/book_02.png'
import { DiscussionEmbed } from "disqus-react"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'david-a-ringer',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">David A. Ringer </span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight" id="span-non-front">Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
						<div className="column">
							<div className="bookImgContainer">
								<img id="snowbear" alt="main-book" src={Book2} />
							</div>
						</div>
						
						<div className="column">
							<section className="contentBook">

								<div className="title-wrapper">
									 <h1>The Mysteries and Adventures of SEBASTIAN CRICKET</h1>
									 <p>Soldier, Crime Fighter, Lover</p>
								</div>

								<p>
									This collection of short stories introduces the mysterious and
									handsome Sebastian Cricket and his loyal lover and life partner,
									Justin. The unlikely pair seem to attract trouble and often find
									themselves in the most dangerous predicaments one might conjure.
									Sebastian is a man of action and few words, and his expeditions
									are told by Justin, a man of tender feelings, a sensitive and loyal
									reporter, and always on Sebastian’s side.
									Sebastian Cricket’s mission is simple: use the skills he learned as
									an elite special operations soldier to help those in distress, by any
									means necessary
								</p>
								<p>From the “Snow Viper”</p>
								<p>
									The massive belching engine, an iron relic forged in a distant
									century, struggled to pull us up the steep mountainside. With
									each gasp and lurch, my stomach tied itself into knots, my heart
									pounded, and my clenched hands dripped with hot sticky sweat.
									The beast would have been more appropriate in a museum than
									perched on narrow-gauge tracks, but here we were, nevertheless. It
									was terrifying knowing we had scant purchase on the steep incline
									and could plummet to our deaths at any moment. The deafening
									grind of the train’s wheels as it rounded sharp mountainous curves,
									inching higher and higher through dense forest and across rocky
									cliffs, was such a terror I had rarely endured.
								</p>
								<p>Little did I realize even greater perils lay ahead.</p>

							</section>

							<nav className="booklinkBlocks">
								<span>Ebooks :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Mysteries-Adventures-Sebastian-Cricket-Collection-ebook/dp/B085VLC6LT/ref=sr_1_1?dchild=1&keywords=9781643459684&qid=1606367213&sr=8-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/the-mysteries-and-adventures-of-sebastian-cricket-a-collection-of-stories-to-delight-the-devoted-readers-of-crime/">Stratton Press</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-mysteries-and-adventures-of-sebastian-cricket-david-a-ringer/1136645436?ean=9781643459684">Barnes & Noble</a></li>
							</nav>

							<nav className="booklinkBlocks">
								<span>Purchase Paperback :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Mysteries-Adventures-Sebastian-Cricket-Collection/dp/1643459678/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1606367281&sr=8-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-mysteries-and-adventures-of-sebastian-cricket-david-a-ringer/1136645436?ean=9781643459677">Barnes & Noble </a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Mysteries-Adventures-Sebastian-Cricket/David-a-Ringer/9781643459677?id=8049069540563&_ga=2.19173048.144254833.1606293192-2145380449.1604906972">Books A Million</a></li>
							</nav>
						</div>
					</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor