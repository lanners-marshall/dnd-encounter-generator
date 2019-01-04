import styled from 'styled-components'

export const SearchDiv = styled.div`
	1px solid black;
	padding: 10px;
	box-shadow: 5px 10px 8px 10px black;
	margin: 3% auto;
	margin-left: 2%
	padding: 2%;
	padding-right: 8%;
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
		font-size: 1.6rem;
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

