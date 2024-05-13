
function generateRandomString() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function onRequest(context) {
  let randomkey = generateRandomString()
   try {
            const value = await context.env.ENV_KV.get(randomkey);

            if (value === null) {
                return context.request.text().then(function(text){
                   if(atob(text.substring(6)).indexOf('http')!=0){
                      return new Response('Error');
                   }
                  
                   return context.env.ENV_KV.put(randomkey, text.substring(6), {expirationTtl: 7*24*60*60}).then((response) => {
                    return new Response(randomkey);
                    
                   
                })
              })
            }
            return new Response('Error', {status: 500})
        }
   
        catch (e)
        {
            return new Response(e.message, {status: 500});
        }

}
