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
		font-size: 1.8rem;
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

export const Errors = styled.div`
	color: white;
	margin-top: 20px;
	text-align: center;
	font-size: 1.6rem;
`
