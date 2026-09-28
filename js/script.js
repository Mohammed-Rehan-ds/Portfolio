const menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");
menuBtn?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+"%"},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/*
  EDIT THESE LINKS before deploying:
  1. Put your PDF at assets/Md Rehan-Resume.pdf
  2. Replace YOUR_EMAIL@example.com
  3. Replace YOUR-LINKEDIN
  4. Replace YOUR-GITHUB
  5. Replace the # GitHub project links with your actual repositories.
*/
document.querySelectorAll(".github-link").forEach(link=>{
  link.addEventListener("click",e=>{
    if(link.getAttribute("href")==="#"){
      e.preventDefault();
      alert("Add your GitHub repository URL in index.html.");
    }
  });
});
