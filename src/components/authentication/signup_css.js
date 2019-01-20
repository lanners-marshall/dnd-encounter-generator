import styled from 'styled-components';

export const Container = styled.div`
	background-color: #272D38;
	height: 0;
`

export const SignUpForm = styled.form`
	padding: 1%;
	> h2 {
		font-size: 2rem;
		color: white;
		margin: 40px 0;
	}
	background-color: #191919;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	width: 100%;
	>input {
		width: 99%;
		font-size: 2rem;
		margin-bottom: 40px;
	}
	padding: 0 5%;
	@media (max-width: 740px){
		width: 90%;
		padding-bottom: 30px;
	}
`

export const FlexDiv = styled.div`
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	@media (max-width: 740px){
		flex-direction: column;
		margin-bottom: 100px;
	}
`

export const Submit = styled.button`
	background-color: red;
	color: white;
	border: none;
	padding: 3%;
	font-size: 2rem;
	border-radius: 20px;
	max-width: 120px;
	&:hover {
		cursor: pointer;
	}
`

	// height: 500px;
	// background-color: #1d1d1d;
	// color: #ddd7d7;
	// > h2 {
	// 	font-size: 2.5rem;
	// 	margin: 40px 0;
	// }
	// > input {
	// 	border:none;
	// 	margin-bottom: 10px;
	// 	background-color: #1d1d1d;
	// 	::placeholder {
	// 		color: #ddd7d7;
	// 		font-size: 2rem;
	// 	}
	// 	padding-bottom: 5px;
	// 	border-bottom: .5px solid #ddd7d7;
	// 	margin-bottom: 50px;
	// 	color: #ddd7d7;
	// 	font-size: 2rem;
	// 	&:focus {
	// 		outline-width: 0;
	// 	}
	// 	@media (max-width: 740px){
	// 		width: 100%;
	// 		max-width: none;
	// 		padding: 0;
	// 	}
	// }
	// padding: 0 50px;
	// @media (max-width: 740px){
	// 	width: 100%;
	// 	max-width: none;
	// 	padding-bottom: 30px;
	// }
