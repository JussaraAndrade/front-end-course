//Array de alunos
const students = [
    {
        //Alunos tem dois atributos: name 'nome' e grade 'nota'
        name: 'Grace', 
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];
//Uma função que recebe uma lista de alunos dentro do parametro
function getApprovedStudents(studentsList){
    //Vai retornar os alunos aprovados maior ou igual a 7
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
//Executar a função
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ');
console.log(students);