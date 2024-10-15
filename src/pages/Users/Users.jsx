import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import s from './Users.module.css'
import { useEffect } from 'react';
import { Search } from '../../components/Search/Search';
export function Users(){
    const [users, setUsers] = useState([]);
    async function fetchUsers(params) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(()=>{
        fetchUsers();
    }, []);

    const [query, setQuery] = useState('')
    function handleChange(e){
        setQuery(e.target.value)
    }
    const filteredUsers = users.filter((user)=>{
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
    return(
        <section>
            <div className="container">
                <Header/>
                <Search handleChange={handleChange}/>
                <div className={s.users}>
                    {
                        filteredUsers.length ?
                        filteredUsers.map(user=>{
                            return(
                                <div className={s.user}>
                                    <p>{user.id}</p>
                                    <p>{user.name}</p>
                                </div>
                            )
                        })
                        :
                        <p className={s.error}>Ничего не найдено по запросу</p>
                    }
                </div>
            </div>
        </section>
    )
}