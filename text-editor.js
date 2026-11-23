(() => {
  const STORE = 'qiyue-site-text-edits-v1';
  const eligible = 'h1,h2,h3,h4,p,li,blockquote';
  const page = document.body.dataset.page || location.pathname;
  const getStore = () => { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } };
  const setStore = value => localStorage.setItem(STORE, JSON.stringify(value));
  const targets = () => [...document.querySelectorAll(eligible)].filter(el =>
    !el.closest('nav,footer,.portfolio-sidebar,.portfolio-nav,.editor-toolbar,script,style') &&
    el.textContent.trim().length > 0 &&
    !el.parentElement?.closest('li') &&
    !el.querySelector('h1,h2,h3,h4,p,li,blockquote')
  );
  const assignIds = () => targets().forEach((el,i) => { el.dataset.editId = page + ':' + i; });
  const restore = () => { const data=getStore(); targets().forEach(el => { const v=data[el.dataset.editId]; if (typeof v==='string') el.innerHTML=v; }); };
  assignIds(); restore();
  const bar=document.createElement('div'); bar.className='editor-toolbar'; bar.innerHTML='<button type="button" class="editor-toggle">编辑文字</button><button type="button" class="editor-save" hidden>保存</button><button type="button" class="editor-export" hidden>导出修改</button><button type="button" class="editor-reset" hidden>恢复原文</button><span class="editor-status" aria-live="polite"></span>';
  document.body.appendChild(bar);
  let editing=false, active=null, originals=new Map();
  const toggle=bar.querySelector('.editor-toggle'), save=bar.querySelector('.editor-save'), exp=bar.querySelector('.editor-export'), reset=bar.querySelector('.editor-reset'), status=bar.querySelector('.editor-status');
  toggle.addEventListener('click',()=>{editing=!editing; document.body.classList.toggle('text-edit-mode',editing); toggle.textContent=editing?'退出编辑':'编辑文字'; [save,exp,reset].forEach(b=>b.hidden=!editing); status.textContent=editing?'点击页面文字即可修改':'浏览模式'; if(!editing&&active){active.contentEditable='false';active=null;}});
  document.addEventListener('click',e=>{if(!editing)return; const el=e.target.closest('[data-edit-id]'); if(!el||!targets().includes(el))return; e.preventDefault(); e.stopPropagation(); if(active&&active!==el) active.contentEditable='false'; active=el; if(!originals.has(el.dataset.editId)) originals.set(el.dataset.editId,el.innerHTML); el.contentEditable='true'; el.focus(); status.textContent='正在编辑：点击页面其他文字可继续';},{capture:true});
  save.addEventListener('click',()=>{const data=getStore(); targets().forEach(el=>{if(originals.has(el.dataset.editId)&&el.innerHTML!==originals.get(el.dataset.editId))data[el.dataset.editId]=el.innerHTML;}); setStore(data); if(active){active.contentEditable='false';active=null;} status.textContent='已保存到当前浏览器';});
  exp.addEventListener('click',()=>{const data=getStore(); const scoped=Object.fromEntries(Object.entries(data).filter(([k])=>k.startsWith(page+':'))); const blob=new Blob([JSON.stringify({page,exportedAt:new Date().toISOString(),edits:scoped},null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='website-text-edits-'+page+'.json'; a.click(); URL.revokeObjectURL(url); status.textContent='修改记录已导出';});
  reset.addEventListener('click',()=>{if(!confirm('恢复本页面已保存的文字修改？此操作无法撤销。'))return; const data=getStore(); targets().forEach(el=>{delete data[el.dataset.editId]; if(originals.has(el.dataset.editId))el.innerHTML=originals.get(el.dataset.editId);}); setStore(data); active=null; status.textContent='本页面已恢复浏览器初始版本';});
})();