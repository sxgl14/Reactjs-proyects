import { useState } from 'react'

export function TwitterFollowCard ({ userName = 'unknown', name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    // Ejemplo en componente para agregar arroba
    // const addAt2 = (userName) => `@${userName}` 
    const textbutt = isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const imgSrc = `https://unavatar.io/${userName}`

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={imgSrc} alt="Avatar kikobeats" className="tw-followCard-avatar"/>
                <div className="tw-followCard-div">
                    <strong>{name}</strong>
                    {/* En el caso de la constante */}
                    {/* <span className="tw-followCard-infoUser">{addAt2(userName)}</span> */}
                    <span className="tw-followCard-infoUser">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{textbutt}</button>
            </aside>
        </article>
    )
}