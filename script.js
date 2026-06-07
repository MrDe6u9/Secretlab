
const SECRET={
 user:"demo.user",
 role:"user",
 token:"eyFakeDemoToken",
 flag:"flag{localstorage_should_not_store_sensitive_secrets}"
};

document.getElementById("loginBtn").onclick=()=>{
 localStorage.setItem("session",JSON.stringify(SECRET));
 alert("Logged in successfully!");
};

document.getElementById("profileBtn").onclick=()=>{
 const data=localStorage.getItem("session");
 if(!data){
   alert("Please login first.");
   return;
 }
 document.getElementById("profile").classList.remove("hidden");
};

document.getElementById("resetBtn").onclick=()=>{
 localStorage.clear();
 location.reload();
};

// Tiny distraction
console.log("%cNothing interesting here... or is there?","color:lime");
