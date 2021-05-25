const user = {
    name:'Jussara',
    lastname: 'Andrade'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastname}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);