import styled from 'styled-components'
import formBackground from './formBackground.jpg'
export const XpDiv = styled.div`
	background-image: url(${formBackground});
	background-size:cover;
	box-shadow: 2.5px 5px 4px 5px black;
	margin: 39px 1%;
	margin-right: 0px;
	width: 15%;
	padding: 2%;
	@media (max-width: 1375px){
		width: 95%;
		margin-left: 0;
		margin-top: 10px;
		margin-bottom: 0;
		
	}
	> h2 {
		text-align: center;
		font-size: 3rem;
		margin-bottom: 30px;
		@media (max-width: 1375px){
			font-size: 6rem;
		}
	}
	> p {
		font-size: 1.6rem;
		text-align: center;
		@media (max-width: 1375px){
			font-size: 2.5rem;
		}
	}
`   