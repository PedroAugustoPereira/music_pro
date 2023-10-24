export default function ImportFiles() {
  const handleFileInputChange = (event) => {
    //função que nos da o eveno que a chamou, normalmente um input alterado
    const selectedFiles = Array.from(event.target.files); //agora transformamos o  A MATRIZ de aquivos em um array com Array.from
    selectedFiles.forEach((file) => {
      //precorremos tudo
      const reader = new FileReader(); //usamos FileReader, uma API que permite ler dados de arquivos selecionados pelo usuári
      reader.onload = () => {
        //onload é chamado quando o FileRader termina de ler o arquivo, e então chama a função
        const fileData = reader.result; //objtemos os dados do arquivo lido
        const fileObject = {
          name: file.name, //armazena o nome do arquivo
          data: new Uint8Array(fileData), //armazena os dados do arquivo com Uint8Array, que é uma representação de dados binários em js
        };

        window.electronAPI.SendToElectron("music-upload", fileObject); // usando a api que criamos do electron para enviar os dados do arquivo para o processo principal, com o evento music-upload
      };
      reader.readAsArrayBuffer(file); //inicia a leitura do arquivo com o Arraybuffer,isso é fundamental para disparar o onload.
    });
  };

  return (
    <>
      <div className="mb-3">
        <label
          className="block text-lg font-medium text-gray-400 mb-1"
          htmlFor="formFileMultiple"
        >
          Importar Musicas
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid  bg-clip-padding px-3 py-[0.32rem] text-base font-normal file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit  file:py-[0.32rem] file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none border-neutral-600 text-neutral-200 file:bg-neutral-700 file:text-neutral-100 focus:border-primary"
          type="file"
          id="formFileMultiple"
          multiple
          accept=".mp3,.wav"
          onChange={handleFileInputChange}
        />
      </div>
    </>
  );
}
