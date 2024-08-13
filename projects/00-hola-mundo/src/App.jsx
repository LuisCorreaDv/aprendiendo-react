import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName={"kikobeats"} name={"Kiko Beats"}/>
            <TwitterFollowCard userName={"luiscorrea"} name={"Luis Correa"}/>
            <TwitterFollowCard userName={"pabloHrndz"} name={"Pablo Miguel"}/>
        </section>
    )
}