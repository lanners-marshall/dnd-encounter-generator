import styled from 'styled-components'

export const GroupInfo = styled.div`

	border: 1px solid black;
	padding: 10px;
	box-shadow: 5px 10px 8px 10px black;
	margin: 3% auto;
	width: 100%;
	max-width: 200px;
	height: 300px;
	padding-left: 3.3%;
	@media (max-width: 1375px){
		width: 91.7%;
		height: 200px;
		max-width: none;
		margin-bottom: 20px;
	}
	> h2 {
		font-size: 4rem;
		margin-left:40%;
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
