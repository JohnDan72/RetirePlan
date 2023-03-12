export const startUser = (milliseconds = 1500) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(true);
        }, milliseconds);
        
    })
} 