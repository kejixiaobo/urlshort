export async function onRequest(context) {
  var request = context.request
  var url = new URL(request.url);

   try {
            const value = await context.env.ENV_KV.get(url.pathname.substring(1));

            if (value === null) {
                return new Response("Value not found", {status: 404});
            }
            return new Response(value,{status: 302, headers: {
                'Location': atob(value) ,
            },});
        }
        catch (e)
        {
            return new Response(e.message, {status: 500});
        }
}
