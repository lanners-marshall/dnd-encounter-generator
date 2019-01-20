import styled from 'styled-components'

export const Banner = styled.div`
	height: 60px;
	
	border-bottom: 2px solid #D1AE78;
	box-shadow: 1px 1px 5px 1px black;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	display: flex;
	align-items: center;
	> h1 {
		color: white;
		margin-left: 20px;
		font-size: 2rem;
	}
`

export const GroupAndSearch = styled.div`
	display: flex;
	padding: 10px;
	justify-content: center;
	@media (max-width: 1375px){
		flex-direction: row;
		flex-wrap: wrap;
	}
`

export const Container = styled.div`
	padding-top: 100px;
	background:#272D38;
	width: 100%;
	height: 100vh;
`