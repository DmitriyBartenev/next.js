import Link from "next/link";
import MainContainer from "../components/MainContainer";



const Users = ({users}) => {


    return(
        <MainContainer keywords={'users'} title={'Пользователи'}>
            <div>
                <h1>Страница с пользователями</h1>
                <ul>
                    {users.map(user =>
                        <li key = {user.id}>
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

export async function getStaticProps(contenxt) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return{
        props:{users},
    }
}