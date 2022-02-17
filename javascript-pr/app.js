console.log('welcome');
const taskOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task one complate');
        }, 5000);
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Two complate');;
        }, 4000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Three complate');
        }, 3000);
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Four complate');
        }, 2000);
    });
};
taskOne().then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))