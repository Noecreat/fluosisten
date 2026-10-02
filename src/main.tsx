import React, {useMemo, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type View = 'Home'|'AI Studio'|'Work Library'|'Growth'|'Business Brain';
const views: View[] = ['Home','AI Studio','Work Library','Growth','Business Brain'];

function App(){
 const [view,setView]=useState<View>('Home'); const [dark,setDark]=useState(false);
 const [generating,setGenerating]=useState(false); const [credits,setCredits]=useState(30);
 const title=useMemo(()=>({Home:'Good evening, grow smarter.', 'AI Studio':'Create work that moves your business.', 'Work Library':'Your work, organized around growth.', Growth:'Turn activity into growth signals.', 'Business Brain':'Your business context, working quietly.'}[view]),[view]);
 const generate=()=>{if(credits<2)return;setGenerating(true);setCredits(c=>c-2);setTimeout(()=>setGenerating(false),1400)};
 return <div className={dark?'app dark':'app'}>
  <aside className="sidebar"><div className="brand"><div className="logo">F</div><div><b>Fluosisten</b><span>Grow Smarter. Flow Further.</span></div></div>
   <nav>{views.map(v=><button className={view===v?'nav active':'nav'} onClick={()=>setView(v)} key={v}><span>{v==='Home'?'⌂':v==='AI Studio'?'✦':v==='Work Library'?'▣':v==='Growth'?'↗':'◉'}</span>{v}</button>)}</nav>
   <div className="side-bottom"><div className="credit"><span>AI Credits</span><strong>{credits}</strong><small>30-day trial balance</small></div><button className="business">● <span>My Business</span>⌄</button></div>
  </aside>
  <main><header><div className="search">⌕ <span>Search your workspace...</span></div><div className="head-actions"><button onClick={()=>setDark(!dark)}>{dark?'☀':'☾'}</button><button>♢</button><div className="avatar">N</div></div></header>
   <section className="hero"><div><div className="eyebrow">FLUOSISTEN GROWTH FLOW</div><h1>{title}</h1><p>{view==='Home'?'A calm command center for turning business context into useful action.':view==='AI Studio'?'Create, refine and repurpose content without losing your business context.':view==='Growth'?'See what is happening, what it means, and what to do next.':'Everything your AI needs to understand your business—without making you repeat yourself.'}</p></div><div className="flow"><i/><i/><i/><i/></div></section>
   {view==='Home' && <Home generate={generate} generating={generating}/>} 
   {view==='AI Studio' && <Studio generate={generate} generating={generating}/>} 
   {view==='Work Library' && <Library/>}
   {view==='Growth' && <Growth/>}
   {view==='Business Brain' && <Brain/>}
  </main>
 </div>
}
function Home({generate,generating}:{generate:()=>void;generating:boolean}){return <><div className="section-head"><div><small>NEXT BEST ACTION</small><h2>Reconnect with customers who already know you.</h2></div><button className="primary" onClick={generate}>{generating?'Creating…':'Create action'}</button></div><div className="grid3"><Card k="BUSINESS SIGNAL" t="Your offer is clear" d="Your recent work is aligned with your primary growth goal."/><Card k="CONTENT MOMENTUM" t="3 ideas ready" d="Turn one product story into a week of useful content."/><Card k="CUSTOMER RETENTION" t="Win-back opportunity" d="Prepare a simple WhatsApp follow-up for dormant customers."/></div><div className="lower"><div className="panel"><div className="panel-title">Quick actions</div><div className="actions"><Action t="Create caption"/><Action t="Content ideas"/><Action t="Promotion"/><Action t="WhatsApp"/><Action t="Repurpose"/></div></div><div className="panel"><div className="panel-title">Recent work <span>View all</span></div><div className="recent"><Row t="Ramadan product campaign" m="Updated today"/><Row t="Instagram caption · New offer" m="Yesterday"/><Row t="7-day content plan" m="2 days ago"/></div></div></div></>}
function Studio({generate,generating}:{generate:()=>void;generating:boolean}){return <div className="studio"><div className="studio-tabs"><b>Create</b><span>Refine</span><span>Repurpose</span></div><div className="creator"><div className="creator-main"><label>What do you want to create today?</label><textarea placeholder="Describe the business task…"/><div className="chips"><button>Caption</button><button>Content Ideas</button><button>Promotion</button><button>WhatsApp</button></div><button className="primary wide" onClick={generate}>{generating?'Generating…':'Generate with context →'}</button></div><div className="context"><small>CONTEXT</small><p><b>Product</b> Signature Coffee</p><p><b>Audience</b> Young professionals</p><p><b>Channel</b> Instagram</p><p><b>Tone</b> Warm & premium</p></div></div></div>}
function Library(){return <div className="panel full"><div className="panel-title">Work Library <span>Recent · Saved · Favorites</span></div>{['Ramadan product campaign','Signature Coffee launch caption','7-day content plan','WhatsApp win-back message'].map((x,i)=><Row key={x} t={x} m={`${i+1} version${i?'s':''} · Ready to use`}/>)}</div>}
function Growth(){return <div className="grid3"><Card k="DISCOVER" t="5 opportunities" d="Content, hooks and local marketing ideas based on your context."/><Card k="CONVERT" t="3 actions" d="Offers and CTAs ready to turn attention into customers."/><Card k="RETAIN" t="2 signals" d="Simple follow-up ideas to bring customers back."/></div>}
function Brain(){return <div className="brain"><div className="panel"><div className="panel-title">Business Summary</div><h2>Signature Coffee</h2><p>Neighborhood coffee brand focused on young professionals and repeat visits.</p><div className="facts"><b>Category<br/><span>Food & Beverage</span></b><b>Primary goal<br/><span>More repeat customers</span></b><b>Voice<br/><span>Warm · Premium · Human</span></b></div></div><div className="panel"><div className="panel-title">What Fluosisten understands</div><ul><li>Your primary growth lever is repeat purchase.</li><li>Your content performs best when it feels useful, local and human.</li><li>Keep offers simple and CTA-focused.</li></ul></div></div>}
function Card({k,t,d}:{k:string;t:string;d:string}){return <div className="card"><small>{k}</small><h3>{t}</h3><p>{d}</p></div>}; function Action({t}:{t:string}){return <button className="action">✦ <span>{t}</span> →</button>}; function Row({t,m}:{t:string;m:string}){return <div className="row"><div className="doc">▤</div><div><b>{t}</b><small>{m}</small></div><span>→</span></div>}

createRoot(document.getElementById('root')!).render(<App/>);
