import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

export function App () {
    //Se puede colocar tanto aqui como en el mismo componente
    // // const addAt = (userName) => `@${userName}`
    // const format = (userName) => `@${userName}`

    const users = [
        {
            name: 'Juan',
            userName: 'juanito',
            initialIsFollowing: false
        },
        {
            name: 'Manuel',
            userName: 'manuelito',
            initialIsFollowing: true
        },
        {
            name: 'Pedro',
            userName: 'pedrotaraza',
            initialIsFollowing: false
        },
        {
            userName: "midudev", 
            name: "Miguel",
            initialIsFollowing: true
        },
        {
            userName: 'Migalel',
            name: "Miguel",
            initialIsFollowing: false
        }
    ]

    return (
        <section className='App'>
            {/* En este caso deberia hacerse en cada entrada de datos */}
            {/* <TwitterFollowCard isFollowing userName = {addAt("midudev")} name = "Miguel"/> */}
            {
                users.map(({ name, userName, initialIsFollowing }) =>(
                        <TwitterFollowCard
                            // key ={userName}
                            userName = { userName }
                            name = { name }
                            initialIsFollowing = { initialIsFollowing }
                        />
                    )
                )
            }
        </section>
    )
}