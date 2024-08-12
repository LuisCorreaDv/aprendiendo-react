import './App.css';

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src="https://unavatar.io/kikobeats" 
                    alt="Avatar kikobeats" 
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>Kiko beats</strong>
                    <span className='tw-followCard-infoUserName'>@kikobeats</span>
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