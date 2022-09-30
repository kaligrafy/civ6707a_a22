import inquirer from 'inquirer';

const pi = 3.141592654;

const addition = function(a, b) {
    return a + b;
};

const soustraction = function(a, b) {
    return a - b;
};

export default async function() {
    console.log('Test de questions Inquirer');
    const questions = [
        {
            type: 'input',
            name: 'prenom',
            message: 'Quel est votre prénom?'
        },
        {
            type: 'number',
            name: 'age',
            message: 'Quel est votre âge?',
            validate: function(age, answers) {
                if (age < 120) {
                    return true;
                } else {
                    return "Votre âge devrait être plus petit que 120."
                }
            }
        }
    ];
    const answers = await inquirer.prompt(questions);
    return answers;
}

export {
    addition,
    soustraction,
    pi
}
