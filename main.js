/* 
3. Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
    - Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
    - В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
    - В противном случае, если меньше часа, вывести `"m мин. назад"`.
    - В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.
    */

let date = new Date(2022, 04, 27, 19, 05);

function formatDate(date) {
    let diff = new Date() - date;
    
    if( diff < 1000 ) {
        console.log('Прямо сейчас');
    } else if ( diff < 60000) {
        console.log(`${Math.ceil(diff/1000)} cек назад`);
    } else if ( diff < 3600000 ) {
        console.log(`${Math.floor(diff/60000)} мин назад`);
    } else {
        let addZero = (num) => {
            return num < 10 ? '0' + num : num;
        };
        console.log(`${addZero(date.getDate())}.${addZero(date.getMonth())}.${addZero(date.getFullYear() % 100)} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`)
    }
}

formatDate(date)
