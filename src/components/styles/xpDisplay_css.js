import styled from 'styled-components'

export const XpDiv = styled.div`
	border:solid #D1AE78 2px;
	background-color:#3a4253;
	box-shadow: 1px 1px 1px #222222;
	color: white;
	margin: auto;
	margin: 0px 0px 10px 10px;
	width: 100%;
	max-width: 200px;

	padding: 20px;
	@media (max-width: 1375px){
		max-width: none;
		width: 400px;
		margin-left: 10px;
		margin-top: 0px;
		margin-bottom:10px;
		
	}
	@media (max-width: 941px){
		margin-left: 0px;
	}
	> h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 30px;
		@media (max-width: 1375px){
			font-size: 3rem;
		}
	}
	> span {
		text-align: center;
		color: red;
		border: 1px solid red;
		font-size: 3rem;
		margin-bottom: 30px;
		@media (max-width: 1375px){
			font-size: 3rem;
		}
	}
	> p {
		font-size: 2rem;
		text-align: left;
		@media (max-width: 1375px){
			font-size: 2rem;
		}
	}
`   