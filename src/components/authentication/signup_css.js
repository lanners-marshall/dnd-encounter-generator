import styled from 'styled-components'

import dragon from '../images/dragon.jpg'

export const Container = styled.div`
	padding-top: 100px;
	background-color: #272D38;
	height: 0;
`

export const SignUpForm = styled.form`
	height:500px;
	border: solid black 1px;
	width: 270px;
	background-color: #1d1d1d;
	color: #ddd7d7;
	> h2 {
		font-size: 2.5rem;
		margin: 15px 0;
	}
	> input {
		width: 98%;
		border:none;
		margin-bottom: 10px;
		background-color: #1d1d1d;
		::placeholder {
			color: #ddd7d7;
			font-size: 2rem;
		}
		padding-bottom: 5px;
		border-bottom: .5px solid #ddd7d7;
		margin-bottom: 50px;
		padding: 4%;
		padding-left: 0;
		color: #ddd7d7;
		font-size: 2rem;
	}
	padding: 0 50px;
`

export const PicDiv = styled.div`
	border: solid black 1px;
	max-width: 350px;
	height: 500px;
	width: 100%;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
	background-image: url(${dragon});
`

export const FlexDiv = styled.div`
	display: flex;
	justify-content: center;
`

export const Submit = styled.button`
	background-color: red;
	color: white;
	border: none;
	padding: 3%;
	font-size: 2rem;
	border-radius: 20px;
	width: 100%;
	max-width: 120px;
	&:hover {
		cursor: pointer;
	}
`

