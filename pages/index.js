import CustomLink from '../components/CustomLink';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';


const Index = () => {
    return(
        <MainContainer keywords={'mainpage'} title = {'Главная'}>
            <div>
                <h1>Главная страница </h1>
            </div>
        </MainContainer>
    )
}


export default Index;