import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

    const midudev = { isFollowing: true, userName: 'midudev'}
    const luisCorrea = { isFollowing: false, userName: 'luiscorrea'}

    return (
        <section className='App'>
            <TwitterFollowCard {...midudev}>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard {...luisCorrea}>
                Luis Correa
            </TwitterFollowCard>
            
        </section>
    )
}