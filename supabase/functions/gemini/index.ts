// Setup type definitions for built-in Supabase Runtime APIs
import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    console.log(req)
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { query } = await req.json();
    const apiKey = Deno.env.get("GOOGLE_GENAI_API_KEY");
    const genai = new GoogleGenerativeAI(apiKey);

    const prompt = `Generate a roadmap for the following: ${query}. The roadmap should be concise. You should return the goals as a javascript array of strings. do not use code blocks in the response`;

    const model = genai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    console.log(reply)
    
    // TODO: Handle cases when response is in invalid format (such as when gemini fails to generate content)
    return new Response(reply, {
      headers: { ...corsHeaders, "Content-Type": "text/plain" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(`Error...`, {
      headers: { ...corsHeaders, "Content-Type": "text/plain" },
      status: 500,
    });
  }
});
