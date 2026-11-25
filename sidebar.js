(function(){
  const body=document.body;
  const sidebar=document.querySelector('.portfolio-sidebar');
  if(!sidebar)return;
  const key='qiyue-portfolio-sidebar-collapsed';
  const button=document.createElement('button');
  button.type='button';
  button.className='sidebar-toggle';
  button.setAttribute('aria-controls','portfolio-sidebar');
  button.innerHTML='<span class="sidebar-toggle-icon" aria-hidden="true">‹</span><span class="sidebar-toggle-label">收起侧栏</span>';
  sidebar.id='portfolio-sidebar';
  sidebar.insertBefore(button,sidebar.firstChild);
  const apply=(collapsed)=>{
    body.classList.toggle('sidebar-collapsed',collapsed);
    button.setAttribute('aria-expanded',String(!collapsed));
    button.setAttribute('aria-label',collapsed?'展开侧栏':'收起侧栏');
    button.querySelector('.sidebar-toggle-icon').textContent=collapsed?'›':'‹';
    button.querySelector('.sidebar-toggle-label').textContent=collapsed?'展开侧栏':'收起侧栏';
  };
  let saved=false;
  try{saved=localStorage.getItem(key)==='1'}catch(e){}
  if(window.matchMedia('(max-width:760px)').matches) saved=false;
  apply(saved);
  button.addEventListener('click',()=>{
    const next=!body.classList.contains('sidebar-collapsed');
    apply(next);
    try{localStorage.setItem(key,next?'1':'0')}catch(e){}
  });
})();