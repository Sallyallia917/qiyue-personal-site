(function(){
  const body=document.body;
  const sidebar=document.querySelector('.portfolio-sidebar');
  const button=sidebar&&sidebar.querySelector('.sidebar-toggle');
  if(!sidebar||!button)return;
  const key='qiyue-portfolio-sidebar-collapsed';
  sidebar.id='portfolio-sidebar';
  button.setAttribute('aria-controls','portfolio-sidebar');
  const apply=(collapsed)=>{
    body.classList.toggle('sidebar-collapsed',collapsed);
    button.setAttribute('aria-expanded',String(!collapsed));
    button.setAttribute('aria-label',collapsed?'展开侧栏':'收起侧栏');
    const icon=button.querySelector('.sidebar-toggle-icon');
    const label=button.querySelector('.sidebar-toggle-label');
    if(icon)icon.textContent=collapsed?'›':'‹';
    if(label)label.textContent=collapsed?'展开侧栏':'收起侧栏';
  };
  let saved=false;
  try{saved=localStorage.getItem(key)==='1'}catch(e){}
  apply(saved);
  button.addEventListener('click',()=>{
    const next=!body.classList.contains('sidebar-collapsed');
    apply(next);
    try{localStorage.setItem(key,next?'1':'0')}catch(e){}
  });
})();