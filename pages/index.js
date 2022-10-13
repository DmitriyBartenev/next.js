import MainContainer from '../components/MainContainer';

import styles from '../styles/index.module.scss';

const Index = () => {
    return(
        <MainContainer keywords={'mainpage'} title = {'Главная'}>
            <div className={styles.wrapper}>
                <h1>App made with Next.js</h1>
            </div>
        </MainContainer>
    )
}


export default Index;