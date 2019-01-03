import styled from 'styled-components'

export const Banner = styled.div`
	height: 60px;
	background-color: #272d39;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	display: flex;
	align-items: center;
	> h1 {
		color: white;
		margin-left: 2%;
		font-size: 2rem;
	}
`

export const GroupAndSearch = styled.div`
	display: flex;
	margin-top: 100px;
	justify-content: center;
	@media (max-width: 1375px){
		flex-direction: column;
	}
`

export const Container = styled.div`
	margin: 0 2%;
`