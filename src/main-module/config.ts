import path from 'path'


// ამ ფაილში უნდა იყოს მხოლოდ და მხოლოდ default პარამეტრები 
// იმ ყველაფრის, რაც user-ს შეუძლია რომ გადმოაწოდოს

export const config = {
    subject: '21f შესავალი ციფრულ ტექნოლოგიებში',
    STUDENTS_DATA_PATH: path.resolve(`../data/students.json`),
    CLASSROOM_CREDENTIALS_PATH: path.resolve(`../data/credentials/credentials.json`),
    CLASSROOM_TOKEN_PATH: path.resolve(`../data/credentials/token.json`)
}
