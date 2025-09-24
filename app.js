
function submitform() {
    const firstname = document.getElementById(firstName).value
    const lastname = document.getElementById(lastName).value
    const email =document.getElementById(Email).value
    const password = document.getElementById(Password).value
    const female = document.getElementById(Female).value
    const male = document.getElementById(Male).value
    const custom = document.getElementById(Custom).value
    const Date = document.getElementById(date).value
    const Month = document.getElementById(month).value
    const Year = document.getElementById(year).value
    
    console.log(firstname,lastname,email,password,female,male,custom,Date,Month,Year)
}
