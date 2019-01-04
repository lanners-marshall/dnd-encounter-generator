import styled from 'styled-components'
import formBackground from './formBackground.jpg'
export const SearchDiv = styled.div`
	1px solid black;
	padding: 10px;
	box-shadow: 2.5px 5px 4px 5px black;
	margin: 3% auto;
	margin-left: 2%
	padding: 2%;
	padding-right: 8%;
	background-image: url(${formBackground});
	background-size:cover;
	@media (max-width: 1375px){
		margin-left: 0;
		margin-right: 1%;
		padding: 2%;
	}
	> h2 {
		font-size: 4rem;
		margin-bottom: 10px;
		text-align: center;
	}
	> div > div {
		> h3{
			margin-bottom: 5%;
		}
		padding: 2%;
		margin: 10px 1%;
		
	}
	> div > div > h3 {
		font-size: 2rem;
		margin-top: 15px;
	}
`

export const FlexDiv = styled.div`
	display:flex;
	flex-wrap: wrap;
	width: 100%;
  	max-width: 800px;
  	margin: 0 auto;
`

