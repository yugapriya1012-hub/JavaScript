// var a=[1,2,3];
// var b=["a","b","c"];
// var result=[];
// for(let i = 0; i<=a.length;i++){
//     result.push(a[i])
// }
// var result=[...a,...b];
// console.log(result);


// var userDetails={
//     name:"Tony Stark",
//     occupation:"Iron Man -Avengers"
// }

// var skills={
//     skills:["Businessman","Philantropist"],
//     newWorth:20000000
// }

// var superHero={
//     ...userDetails,...skills
// }
// console.log(superHero)

var marks=[98,99,"A","B","C"];
//option 1
// var tamil=marks[0];
// console.log(tamil);
// var english=marks[1];
// console.log(english)
// var grades=marks.slice(2,5);
// console.log(grades)


//option 2 using rest operator
// let [tamil,english,...grades] = marks;
// console.log(grades)

// var details=["Doll",299,1]
// let[ item,...otherDetails]= details;
// console.log(otherDetails)

// let user={
//     name:"John",
//     years:30
// }
// let details={...user,"isAdmin":true}
// console.log(details)

//option1 to print name and years
// console.log(details['name']);
// console.log(details['years'])

//option2
// let[name,years]= details;
// console.log('name')



// const response={
//     name:"john",
//     token:"abc123",
//     roleID:"admin",
//     profile:"manager"
// };
// let details={name,token,...myProfile}
// console.log(myProfile)
//  let {username:username,token:token}=credentials;
// console.log(credentials)



//Questions

let coordinates=[34.0522,-118.2437,89];//[latitude,longitude,altitude]
//current way
// let lat=coordinates[0];
// let long=coordinates[1];
// let alt=coordinates[2];

// var co_ordinate=[34.0522,-118.2437,89]
// let[lat,long,alt]=co_ordinate
// console.log(lat,long,alt);



// let user={
//     id:101,
//     profile:{
//         username:"coder_90",
//         avatar:"image.png"
//     }
// }
// console.log(user.profile.username);
// let {username,avatar} = Detail
// console.log(Detail);

const library=[
    {
        title:"The Hobbit",
        author:"J.R.R. Tokien"

    },
    {
        title:"1984",
        author:"George Orwell"
    }
];

// for(let book of library){
//     console.log(`${book.title} by ${book.author}`)
// }


//  for(let book of library){
//     let {'book.title}=details

//     // console.log(`${book.title} by ${book.author}`)
// }


//correct
// const account={
//     id:"USR-9924",
//     username:"shutter-bug",
//     email:"bug@example.com",
//     joined:"2023-01-01"
// }
// console.log(account.id)
// let{id,...publicInfo}=account;
// console.log(publicInfo)