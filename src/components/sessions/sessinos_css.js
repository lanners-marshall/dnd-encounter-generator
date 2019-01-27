import styled from 'styled-components'

export const SForm = styled.form`
	border: solid #3a4253 3px;
	margin-top: 20px;
	max-width: 400px;
	padding: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> h2 {
		font-size: 3rem;
		padding: 1%;
		color: white;
		margin-bottom: 15px;
	}
	> input {
		padding: 2%;
		font-size: 2rem;
	}
`

export const Sbtn = styled.button`
	border: solid #3a4253 3px;
	margin-top: 15px;
	padding: 2%;
	font-size: 2rem;
	border-radius: 4px;
	background-color: #2c323e;
	color: white;
	&:hover {
		cursor: pointer;
		background-color: #3a4253;
		color: rgb(255, 218, 7);
	}
`

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

export const DeleteP = styled.p`
	border: solid #3a4253 3px;
	display: inline-block;
	padding: 1%;
	font-size: 2rem;
	color: white;
	&:hover { 
		color: rgb(255, 218, 7);
		cursor: pointer;
		background-color: #3a4253;
	}
`

export const SessionP = styled.p`
	border: solid #3a4253 3px;
	display: inline-block;
	padding: 1%;
	font-size: 2rem;
	margin-right: 2%;
	margin-bottom: 15px;
	&:hover { 
		color: rgb(255, 218, 7);
		cursor: pointer;
		background-color: #3a4253;
	}
`

export const ErrorD = styled.div`
	border: solid #3a4253 3px;
	font-size: 2rem;
	margin-top: 15px;
	color: white;
	display: inline-block;
	padding: 2%;
`
