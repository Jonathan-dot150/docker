const API_BASE = '/api';
const WS_PATH = '/ws/chat';


const msgContainer = document.getElementById('messages');
const form = document.getElementById('chat-form');
const questionEl = document.getElementById('question');
const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear');


// load history
async function loadHistory(){
try{
const res = await fetch(`${API_BASE}/history`);
const data = await res.json();
historyList.innerHTML = '';
data.conversations.forEach(conv=>{
const li = document.createElement('li');
li.textContent = `${new Date(conv.created_at).toLocaleString()} — ${conv.last_message_preview}`;
li.addEventListener('click', ()=> loadConversation(conv.id));
historyList.appendChild(li);
});
}catch(e){console.error(e)}
}


async function loadConversation(id){
const res = await fetch(`${API_BASE}/history/${id}`);
const data = await res.json();
msgContainer.innerHTML = '';
data.messages.forEach(m=> addMessage(m.role, m.content));
}


function addMessage(role, text){
const div = document.createElement('div');
div.className = 'msg ' + (role==='user'? 'user':'ai');
div.textContent = text;
msgContainer.appendChild(div);
msgContainer.scrollTop = msgContainer.scrollHeight;
}


form.addEventListener('submit', async (e)=>{
e.preventDefault();
const question = questionEl.value.trim();
if(!question) return;


addMessage('user', question);
questionEl.value='';


// open websocket for streaming
const ws = new WebSocket((location.protocol==='https:'?'wss://':'ws://') + location.host + WS_PATH);


ws.onopen = ()=>{
ws.send(JSON.stringify({question}));
}


let aiDiv = document.createElement('div');
aiDiv.className = 'msg ai';
aiDiv.textContent = '';
msgContainer.appendChild(aiDiv);


ws.onmessage = (ev)=>{
// expects JSON chunks: {type: 'chunk', text: '...'} or {type: 'done', conversation_id: 1}
try{
const payload = JSON.parse(ev.data);
if(payload.type === 'chunk'){
aiDiv.textContent += payload.text;
msgContainer.scrollTop = msgContainer.scrollHeight;
} else if(payload.type === 'done'){
ws.close();
loadHistory();
}
}catch(err){ console.error('invalid chunk', err)}
}


ws.onerror = (err)=>{console.error('ws error', err);}
});


clearBtn.addEventListener('click', ()=>{ questionEl.value=''; });


// initial load
loadHistory();
