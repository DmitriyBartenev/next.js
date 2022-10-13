import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';

import styles from '../../styles/user.module.scss';

export default function ({user}){
    const {query} = useRouter()
    return(
        <MainContainer keywords={user.name} title = {user.name}>
            <div className={styles.users}>
                <h1 className={styles.user_header}>Пользователь с id: {query.id}</h1>
                <div className={styles.user_name}>
                    <a>Имя пользователя - {user.name}</a>
                </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}){
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return{
        props:{user},
    }
}