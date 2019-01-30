import styled from 'styled-components'

export const GroupInfo = styled.div`
	border:solid #D1AE78 2px;
	background-color:#3a4253;
	box-shadow: 1px 1px 1px #222222;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 300px;

	margin-bottom: 10px;
	// overflow: scroll;
	// overflow-x: hidden;
	// overflow-y: hidden;
	@media (max-width: 1375px){
		width: 410px;
		max-width: none;
	}
	> h2 {
		color: white;
		font-size: 2.5rem;
		margin-bottom: 10px;
	}
`
export const AddPlayer = styled.button`
	border: solid black 1px;
	font-size: 1.6rem;
	border-radius: 4px;
	margin-top: 10px;
	background-color: #f5f3f3;
	&:hover {
		cursor: pointer;
		background-color: #ffffff
	}
`

export const PlayersDiv = styled.div`
	margin-top: 20px;
	width: 100%;
	justify-content: center;
	display:flex;
	flex-wrap: wrap;
	overflow-x: hidden;
	overflow-y: hidden;
	// overflow: scroll;
	> p {
		margin-left: 1%;
		font-size: 1.6rem;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 10px;
	  &:hover {
			background-color: gray;
			cursor: pointer;
		}
	}
`