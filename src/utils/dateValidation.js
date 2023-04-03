export const disableDate = () =>{
    let today,mm,dd,yyyy;
    today = new Date();
    dd = today.getDate();
    if(dd < 10)
    dd = '0' + dd.toString();
    mm = today.getMonth()+1
    if(mm < 10)
    mm = '0' + mm.toString();

    yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}