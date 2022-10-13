import Link from "next/link";
import MainContainer from "../components/MainContainer";

import styles from '../styles/user.module.scss'

const Users = ({users}) => {


    return(
        <MainContainer keywords={'users'} title={'Пользователи'}>
            <div className={styles.users}>
                <h1>Страница с пользователями</h1>
                <ul className={styles.ulist}>
                    {users.map(user =>
                        <li 
                            key = {user.id} 
                            className = {styles.user}>
                            <Link href = {`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </MainContainer>
    )
}

export default Users;

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return{
        props:{users},
    }
}