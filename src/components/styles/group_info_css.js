import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 4%;
`

export const GroupAndSearch = styled.div`
	margin-top: 100px;
	display: flex;
`
export const GroupInfo = styled.div`
	border:solid black 1px;
	padding: 4%;
	background-color: white;
	width: 100%;
	max-width: 200px;
	height: 200px;
	overflow: scroll;
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

export const SearchInfo = styled.div`

`

