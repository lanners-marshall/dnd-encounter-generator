import styled from 'styled-components'

export const GroupInfo = styled.div`
	border: 1px solid black;
	padding: 10px;
	box-shadow: 2.5px 5px 4px 5px black;
	margin: 3% auto;
	margin-right: 1%;
	width: 100%;
	max-width: 200px;
	height: 410px;
	padding-left: 3.3%;
	padding-right: 3.3%;
	background-color: #f5f5f5;
	@media (max-width: 1375px){ 
		width: 95%;
		margin: 0;
		height: 200px;
		max-width: none;
		margin-bottom: 20px;
		padding-right: 0;
	}
	> h2 {
		font-size: 4rem;
		margin-bottom: 10px;
	}
`
export const AddPlayer = styled.button`
	border: 1px solid black;
	font-size: 1.6rem;
	border-radius: 4px;
	margin-top: 10px;
	&:hover {
		background-color: crimson;
  		color: black;
	}
`

export const PlayersDiv = styled.div`
	margin-top: 20px;
	display:flex;
	flex-wrap: wrap;
	> p {
		margin-left: 1%;
		font-size: 1.6rem;
    padding: 1%;
    border-radius: 4px;
    margin-bottom; 10px;
	  &:hover {
			background-color: #f5f3f3;
			cursor: pointer;
		}
	}
`
