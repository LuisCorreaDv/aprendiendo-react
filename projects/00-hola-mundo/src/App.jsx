import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName={"kikobeats"} name={"Kiko Beats"}/>
            <TwitterFollowCard  formatUserName={formatUserName} isFollowing={false} userName={"luiscorrea"} name={"Luis Correa"}/>
            <TwitterFollowCard  formatUserName={formatUserName} isFollowing userName={"pabloHrndz"} name={"Pablo Miguel"}/>
        </section>
    )
}