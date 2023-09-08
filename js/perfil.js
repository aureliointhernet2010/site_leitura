function previewImagem(){
    var recebeImagem = document.querySelector('input[name=imagem]').files[0];
    var preview = document.querySelector('img[name=perfiluser]');


    var lerImagem = new FileReader();

    lerImagem.onload = function(){
        preview.src = lerImagem.result;

    }
    if(recebeImagem){
        lerImagem.readAsDataURL(recebeImagem);
    }else{
        preview.src="";
    }
}