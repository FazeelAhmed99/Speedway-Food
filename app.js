const sigup = ()=>{
    var email = document.getElementById("email").value
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var number = document.getElementById("number").value
    var country = document.getElementById("country").value
    var city = document.getElementById("city").value
    var select = document.getElementById("select").value
    // console.log(email,name,password,select)

    if(email==''||name=='' ||password=="" ||select==""){
        alert("Enter Correct Values")
    }
    else{
        firebase.auth().createUserWithEmailAndPassword(email, password )
          .then((result) => {
            var user = result.user;
            console.log("User :",user)
            console.log("User Uid:",user.uid)
   

            var obj = {
                Name : name,
                email : email,
                password :password,
                number: number,
                country: country,
                city: city,
                type : select,
                uid : user.uid
            }

            firebase.database().ref(`/${select}`).child(user.uid).set(obj)
            .then((data)=>{
            // window.location='login.html'

            })
            // window.location='login.html'
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }

}


const sigin = ()=>{
    var email = document.getElementById("user-name").value
    var password = document.getElementById("pass").value
    if(email=='' ||password=="" ){
        alert("Enter Correct Values")
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email, password )
        .then((result) => {
          var user = result.user;
          console.log(user)
          console.log("User Email :",user.email)
          console.log("User Uid :",user.uid)

          localStorage.setItem('Current_user Uid',user.uid)

          firebase.database().ref('').

          window.location='order.html'

        //   firebase.database().ref().child('Resturant')
        //   .orderByChild('uid')
        //   .equalTo(user.uid)
        //   .once('value')
        //   .then((snap)=>{
        //       console.log("snap",snap.toJSON())

        //   })



        //   var obj = {
        //       Name : name,
        //       email : email,
        //       password :password,
        //       type : select,
        //       uid : user.uid
        //   }

        //   firebase.database().ref(`/${select}`).child(user.uid).set(obj)
        })
        // .catch((error) => {
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   console.log(errorMessage)
        //   // ..
        // });

    }

} 



// console.log("APP.JS",localStorage.getItem('USer_Email'))

// app2.js code


// console.log(localStorage.getItem('Current_user Uid'))
// var a = localStorage.getItem('Current_user Uid')

// console.log(a)

// firebase.database().ref().child('Resturant').orderByChild('uid').equalTo(a).once('value')
//     .then((snap) => {
//         var data = snap.toJSON();
//         // console.log("Not json",snap)
//         // console.log("JSON",data)



//         if (data == null) {

//             firebase.database().ref().child('User')
//                 .orderByChild('uid')
//                 .equalTo(a)
//                 .once('value')
//                 .then((snap) => {
//                     var data = snap.toJSON();

//                     const value = Object.values(data)

//                     console.log("user:", value[0].email)

//                     document.getElementById('email').innerText = value[0].email
//                     document.getElementById('name').innerText = value[0].Name

//                     // firebase.database().ref('Resturant').once('value')
//                     //     .then((data) => {
//                     //         var js = data.toJSON()
//                     //         console.log(js)
//                     //     })
//                     //     .catch((err) => {
//                     //         console.log(err)
//                     //     })

//                     firebase.database().ref('Resturant').once('value', (snapshot) => {

//                         const data11 = snapshot.toJSON()
//                         const value = Object.values(data11)
            
//                         console.log("Resturants:",value)
//                     })


//                 })

//         }

//         else {

//             // const key = Object.keys(data)
//             // console.log(key)
//             const value = Object.values(data)
//             console.log(value)

//             console.log("Resturant:", value[0].email)

//             document.getElementById('email').innerText = value[0].email
//             document.getElementById('name').innerText = value[0].Name

//            var user_data = []

//              var data = document.getElementById("user_data")
           

//             firebase.database().ref('User').once('value', (snapshot) => {

//                 const data11 = snapshot.toJSON()
//                 const value = Object.values(data11)
                
//                 value.forEach(v=>
                 
//                    user_data.push(v)   
//                 )
               

//                 user_data.map((v,i)=>{
//                     // console.log("User No :",i)
//                     // console.log("User Value :",v)
               
//                     var ele1 = document.createElement('h1')
//                     var text = document.createTextNode(`User Name :${v.Name}`)
//                     ele1.appendChild(text)
//                     var ele2 = document.createElement('h3')
//                     var text2 = document.createTextNode(`User Email :${v.email}`)
//                     ele2.appendChild(text2)
//                     data.appendChild(ele1)
//                     data.appendChild(ele2)

//                 })
               
                
//             })
           

          


          

          
//         }


//     })