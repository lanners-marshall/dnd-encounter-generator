import styled from 'styled-components'
import background from './paper.jpg'
import headerBackground from './header.jpg'

export const AppContainer = styled.div`
background-image: url(${background});
background-size: contain;
}
`
export const Banner = styled.div`
	margin: 0 auto;
	border: 1px solid black;
	padding: 10px;
	box-shadow: 5px 10px 8px 10px black;
	height: 250px;
	background-image: url(${headerBackground});
	background-size: 100% 100%;
	top: 0;
	width: 90%;
	z-index: 1;
	display: flex;
	align-items: center;
	> h1 {
		color: crimson;
		margin-left: 2%;
		margin-top: 16%;
		font-size: 4rem;
	}
`

export const GroupAndSearch = styled.div`
	display: flex;
	margin-top: 60px;
	justify-content: center;
	@media (max-width: 1375px){
		flex-direction: column;
	}
`

export const Container = styled.div`
	margin: 0 2%;
	
	
`