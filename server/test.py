import json
from llamaapi import LlamaAPI

# Initialize the llamaapi with your api_token
llama_api_key = "LL-8USqR8qsydVIrRQ54Jds0Ma6EufbB7ziu9UdylMH5hPI2t1aWs9cjOZcG0SxwDF1"

llama = LlamaAPI(llama_api_key)

# API Request JSON Cell
api_request_json = {
  "model": "llama-13b-chat",
  "messages": [
    {"role": "system", "content": "You are a personalized self help coach that gives advice on 3 activities: workouts, meditation and journaling. Based on the following goals you will create a 7 day plan for these activities that the person should follow to improve their life."},
    {"role": "user", "content": "Hi, I am feeling stressed and want to improve my life. Please give me 3 journal prompts"},
  ],
    "max_length": 100,
    "temperature": 0.9,
}

# Make your request and handle the response
response = llama.run(api_request_json)
print(response.json()['choices'][0]['message']['content'])