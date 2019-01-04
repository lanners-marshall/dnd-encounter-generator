import styled from 'styled-components'
import background from './paper.jpg'
import headerBackground from './header.jpg'

export const AppContainer = styled.div`
background-image: url(${background});
background-size: contain;
padding-top: 60px;
}
`
export const Banner = styled.div`
	margin: 0 auto;
	border: 1px solid black;
	box-shadow: 5px 10px 8px 10px black;
	height: 250px;
	background-image: url(${headerBackground});
	background-size: 100% 100%;
	top: 0;
	width: 80%;
	max-width: 80%;
	z-index: 1;
	display: flex;
	align-items: center;
	> h1 {
		color: crimson;
		font-size: 4rem;
	}
	@media (max-width: 1375px){
		margin-bottom: 60px;
		width: 100%;
	}
`

export const GroupAndSearch = styled.div`
	display: flex;
	margin-top: 20px;
	width: 100%;
  max-width: 1312px;
  margin: 0 auto;
	@media (max-width: 1375px){
		flex-direction: column;
	}
`

export const Container = styled.div`
	margin: 0 2%;
`