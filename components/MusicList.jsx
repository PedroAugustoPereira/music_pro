import { useEffect, useState } from "react";

import MusicInList from "./MusicInList";

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);

  const fetchMusiclist = async () => {
    try {
      await window.electronAPI.SendToElectron("music-get");
      await window.electronAPI.ReciveFromElectron(
        "music-list",
        (event, args) => {
          console.log(args);
          setMusicList(args);
        }
      );
    } catch (error) {
      console.log("Erro ao obter a lista de musicas");
    }
  };

  useEffect(() => {
    console.log("effect");

    fetchMusiclist();
    console.log(musicList);
  }, []);

  return (
    <div className="w-11/12">
      <h2 className="ml-5 text-white text-2xl">Music List</h2>
      {musicList.length === 0 ? (
        <p className="text-zinc-400">Vazio</p>
      ) : (
        musicList.map((music, index) => {
          return <MusicInList key={index} music={music} />;
        })
      )}
    </div>
  );
}
