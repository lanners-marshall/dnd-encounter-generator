import styled from 'styled-components'

export const EColorDiv = styled.div`
	border: solid #D1AE78 2px;
	background-color: #3a4253;
	margin: 0 auto;
	max-width: 1310px;
	padding: 1%
	@media (max-width: 1375px){
		max-width: 870px;
	}
	@media (max-width: 910px){
		max-width: 422px;
	}
	@media (max-width: 500px){
		margin: 0 2.5%;
	}
	> form{
		max-width: 700px;
		margin: 30px auto;
		> input {
			font-size: 2rem;
			border-radius: 2px;
			margin-bottom: 15px;
			padding: 1%;
		}
	}
`

export const BottomEColorDiv = styled(EColorDiv)`
	margin-top: 30px;
`

export const EContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	> div {
		display: flex;
		margin: 0 auto;
	}
	> div > a {
		text-decoration: none;
	}
`

export const Eh2 = styled.h2`
	color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
`

export const SForm = styled.form`
	border: solid #3a4253 3px;
	max-width: 400px;
	margin: 0 auto;
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

export const Spacing = styled.div`
	padding-bottom: 150px;
`

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	background-color: #3a4253;
	border: solid #D1AE78 3px;
`

export const Holder = styled.div`
	max-width: 800px;
	margin: 0 auto;
	margin-top: 30px;
`

export const DeleteP = styled.p`
	background-color: rgb(151, 69, 69);
	display: inline-block;
	padding: 1%;
	font-size: 2rem;
	color: white;
	border: solid #D1AE78 2px;
	&:hover { 
		cursor: pointer;
		background-color: rgb(39,45,57);
	}
`

export const SessionP = styled.p`
	display: inline-block;
	background-color: rgb(151, 69, 69);
	padding: 1%;
	font-size: 2rem;
	margin-right: 1%;
	margin-bottom: 15px;
	border: solid #D1AE78 3px;
	box-shadow: inset 1px 1px 1px black
	&:hover { 
		cursor: pointer;
		background-color: rgb(39,45,57);
	}
`

export const SessionSP = styled(SessionP)`
	padding: 3%;
	margin-right: 5%;
	&:hover {
		cursor: pointer;
		background-color: rgb(128, 132, 136);
	}
`

export const Sbmit = styled(SessionSP)`
	color: white;
	padding: 1%;
`


export const DeletePs = styled(DeleteP)`
	width: 20px;
	height: 20px;
	display:flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
		background-color: rgb(128, 132, 136);
	}
`

export const ErrorD = styled.div`
	font-size: 2rem;
	color: white;
	display: inline-block;
	padding: 2%;
`
