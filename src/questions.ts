export type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
}

export const questions: Question[] = [
    {
        question: 'Enter the command which runs the TypeScript compiler',
        options: ['node index.ts', 'tsc', 'typescript'],
        correctAnswer: 'tsc',
    },
    {
        question: 'What is the return type of the function which does not return anything?',
        options: ['void', 'any', 'string', 'number'],
        correctAnswer: 'void',
    },
    {
        question: 'let [first, ...rest] = [1, 2, 3, 4];  console.log(rest);',
        options: ["[2, 3, 4]", "2", "error", "4"],
        correctAnswer: "[2, 3, 4]",
    },
    {
        question: "What is the difference between 'var' and 'let'?",
        options: ["'var' is block scoped, 'let' is function scoped", "'var' is function scoped, 'let' is block scoped", "'var' is global scoped, 'let' is function scoped", "'var' is global scoped, 'let' is block scoped"],
        correctAnswer: "'var' is function scoped, 'let' is block scoped",    
    },
];