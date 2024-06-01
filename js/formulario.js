const nome = document.getElementById('nome');
const form = document.getElementById('form');
const erroelemento = document.getElementById('erro');

form.addEventListener('submit',(a)=>{
   let mensagens =[]
   if (nome.value === '' || nome.value == null){
     mensagens.push ('nome é necessario.')
   }

   if(nome.value.length <= 4){
      mensagens.push('O nome deve conter mais de três caracteres.')
    }

  if(mensagens.length > 0){
    a.preventDefault()
    erroelemento.innerText = mensagens.join (',')
  }
  
});