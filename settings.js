function applySettings(){

let lang = localStorage.getItem("lang") || "ar";
let theme = localStorage.getItem("theme") || "light";

/* 🌍 النصوص لكل الموقع */
const t = {
ar: {
buy: "شراء",
back: "⬅ العودة للرئيسية",
contact: "تواصل معنا",
services: "الخدمات"
},
en: {
buy: "Buy",
back: "⬅ Back to Home",
contact: "Contact Us",
services: "Services"
}
};

/* 🧠 تغيير كل الأزرار المشتركة */
document.querySelectorAll(".buy").forEach(btn=>{
btn.innerText = t[lang].buy;
});

document.querySelectorAll(".backBtn").forEach(btn=>{
btn.innerText = t[lang].back;
});

/* 🌐 اللغة */
document.documentElement.lang = lang;
document.documentElement.dir = (lang === "en") ? "ltr" : "rtl";

/* 🎨 الثيم */
if(theme === "dark"){
document.body.style.background = "#111";
document.body.style.color = "white";

document.querySelectorAll(".product, .contact-box").forEach(el=>{
if(el) el.style.background = "#222";
});

document.querySelectorAll("header").forEach(el=>{
el.style.background = "#222";
});

}else{
document.body.style.background = "#f5f5f5";
document.body.style.color = "black";

document.querySelectorAll(".product, .contact-box").forEach(el=>{
if(el) el.style.background = "white";
});

document.querySelectorAll("header").forEach(el=>{
el.style.background = "#4b0082";
});
}
}

applySettings();