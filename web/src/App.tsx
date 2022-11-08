import {useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from './Components/CreateAdBanner';
import { GameBanner } from './Components/GameBanner';

import './styles/main.css'

import logoImg from './asserts/logo-nlw.svg'
import { CreateAdModal } from './Components/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  }
}

function App() {
  const [games, SetGames] = useState<Game[]>([]);

  useEffect(() =>{
    fetch('http://localhost:3333/games/')
    .then(response => response.json())
    .then(data => {
      SetGames(data)
    })
  }, []);
  
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return ( 
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.Ads}
            />
          );
        })}
       
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App
