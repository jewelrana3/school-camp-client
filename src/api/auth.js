// import { toast } from "react-hot-toast"

// // save to user database
// export const saveUser = user =>{
//     const currentUser = {
//         email:user.email,
//     }
//     fetch(`https://school-camp-server-rouge.vercel.app/users/${user?.email}`,{
//         method:'PUT',   
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(currentUser)
//     })
//     .then(res => res.json())
//     .then(data => {
//         if(data.inserted){
//             toast('Sign Up Successfully')
//         }
//     })

   
// }