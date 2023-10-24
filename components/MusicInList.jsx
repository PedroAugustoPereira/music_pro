import AddIcon from "./icons/AddIcon";
import AlbumEmpty from "./icons/AlbumEmpty";
import RemoveIcon from "./icons/RemoveIcon";

export default function MusicInList({ music }) {
  function handleDeleteMusic(music) {
    window.electronAPI.SendToElectron("music-delete", music);
  }

  function handleAdicionarMusica(music) {
    window.electronAPI.SendToElectron("music-to-play", music);
  }

  return (
    <div className="m-5 p-2 flex flex-row border border-gray-500 w-full gap-2">
      <AlbumEmpty />
      <div className="flex justify-between w-full">
        <div className="">
          <h1 className="text-white">Nome</h1>
          <h2 className="text-white">{music}</h2>
        </div>

        <div className="flex flex-row justify-center gap-5 h-full">
          <AddIcon onClick={() => handleAdicionarMusica(music)} />
          <RemoveIcon onClick={() => handleDeleteMusic(music)} />
        </div>
      </div>
    </div>
  );
}
