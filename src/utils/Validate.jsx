export const doValidation =(email ,password,firstName,lastName)=>{
    
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);                 // regex use krre h ham email or password ko test krne k liye
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isCorrectFName = /^[a-zA-Z]+$/.test(firstName);
    const isCorrectLName = /^[a-zA-Z]+$/.test(lastName);

    if (!isCorrectFName) return "First Name is not valid"
    if(!isCorrectLName) return "Last name is not valid"
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  

    return null;
}