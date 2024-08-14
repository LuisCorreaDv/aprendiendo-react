export function TwitterFollowCard ({children,userName,
     name, isFollowing}) {
    console.log(isFollowing);

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src={`https://unavatar.io/${userName}`} 
                    alt="Avatar kikobeats" 
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}