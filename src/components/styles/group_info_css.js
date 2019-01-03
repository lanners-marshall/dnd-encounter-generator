import styled from 'styled-components'

export const GroupInfo = styled.div`
	border:solid black 1px;
	padding: 4%;
	background-color: white;
	width: 40%;
	max-width: 200px;
	height: 300px;
	overflow: scroll;
	@media (max-width: 1375px){
		width: 91.7%;
		height: 150px;
		max-width: none;
		margin-bottom: 20px;
	}
	> h2 {
		font-size: 2rem;
		margin-bottom: 10px;
	}
`
export const AddPlayer = styled.button`
	border: solid black 1px;
	font-size: 1.6rem;
	border-radius: 4px;
	margin-top: 10px;
	&:hover {
		background-color: #f5f3f3;
		cursor: pointer;
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
