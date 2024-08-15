import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {


    return (
      <section className="App">
        <TwitterFollowCard userName={"kikobeats"}>
            Kiko beats
        </TwitterFollowCard>
        <TwitterFollowCard userName={"luiscorrea"}>
          Luis Correa
        </TwitterFollowCard>
        <TwitterFollowCard userName={"pabloHrndz"}>
          Pablo Hernandez
        </TwitterFollowCard>
      </section>
    );
}