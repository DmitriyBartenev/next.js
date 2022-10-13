import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.scss';

export default function Error(){
    return(
        <>
            <Head>
                <meta keywords = '404 not found'></meta>
                <title>404 Not Found</title>
            </Head>
            <div className={styles.notFound}>
                <h1>Something went wrong...</h1>
                <Link href = {'/'}>
                    <a>Вернуться на главную</a>
                </Link>
            </div>
        </>
    )
}