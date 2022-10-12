import Head from 'next/head';
import CustomLink from './CustomLink';

import styles from '../styles/navbar.module.scss';


const MainContainer = ({children, keywords, title}) => {
    return(
        <>
            <Head>
                <meta keywords = {"Dmitry Bartenev, next.js" + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className={styles.navbar}>
            <CustomLink href={'/'} text = 'Главная'/>
            <CustomLink href={'/users'} text = 'Пользователи'/>
            </div> 
            <div>
                {children}
            </div>
        </>
    )
}


export default MainContainer;