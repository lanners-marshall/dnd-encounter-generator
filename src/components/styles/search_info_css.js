import styled from 'styled-components'

export const SearchDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	box-shadow: 1px 1px 1px #222222;
	align-items: center;
	align-content: center;
	justify-content: center;
	border:solid #D1AE78 2px;
	background-color:#3a4253;
	border:solid #D1AE78 2px;
	margin-left: 10px;

	margin-bottom: 10px;
	padding: 20px;
	@media (max-width: 1375px){
		width: 855px;
		margin: auto;
		padding: 20px;
	}
	@media (max-width: 941px){
		width: 400px;
	}
	> h2 {
		color: white;
		font-size: 2.5rem;
		margin-bottom: 10px;
		text-align: center;
	}
	> div > div {
		padding: 10px;
		margin: 10px;
	}
	> div > div > h3 {
		font-size: 1.55rem;
		text-align: center;
		margin-top: 15px;
		padding-bottom: 5px;
		color: white;
	}
`

export const FlexDiv = styled.div`
	display:flex;
	justify-self: center;
	align-self: center;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 700px;
	width: 100%;
 	margin: auto;
`

