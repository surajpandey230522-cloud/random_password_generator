


let screen=document.querySelector("#screen")
let button=document.querySelector("button")
let refresh=document.querySelector("#refresh")


class password{
   constructor(){
      alert("welcome to password genarator")
      this.pass=""
   }
   genaratePassword(len){
    this.pass="";
      let char="abcdefghijklmnopqrstyvwxyz"
      let num="1234567890"
      let special="!@#$%^&*()"
   if(len<3){
      console.log("your passwaord should be atleast 3 characters  long")
   }
   else{
      let i=0;
      while(i<len){
         this.pass+= char[Math.floor(Math.random()*char.length)]
         this.pass+= num[Math.floor(Math.random()*num.length)]
         this.pass+= special[Math.floor(Math.random()*special.length)]
         i+=3;
      }
      return this.pass
      }

   }
}
let p=new password()

// console.log(p.genaratePassword(5))


button.addEventListener("click", () => {
    screen.innerText = p.genaratePassword(8);
});

refresh.addEventListener("click", () => {
    location.reload();
   alert("thanks for visit")
});
