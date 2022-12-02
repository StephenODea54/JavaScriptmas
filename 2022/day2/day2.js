const getFullNames = (data) => {
    const nameArr = [];
    
    data.forEach(user => {
        nameArr.push(user.name.first + ' ' + user.name.last);
    });
    
    return nameArr;
}

const getBirthdays = (data) => {
    const dobArr = [];
    
    data.forEach(user => {
        const date = new Date(user.dob.date);
        dobArr.push(date.toDateString());
    });
    
    return dobArr;
}

const transformData = (data) => {
    let users = [];
    
    const names = getFullNames(data);
    const birthdays = getBirthdays(data);
    
    users.push(names, birthdays);
    
    users = users.map(([fullName, birthday]) => ({ fullName, birthday }));
    
    return users;
}
