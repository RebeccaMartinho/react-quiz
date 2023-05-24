import { useState } from 'react';
import Radio from './Radio';
import Form from './form';

export default function Quiz() {
  const questions = [
    {
      question: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      answer: 'React.createElement()',
      id: 'p1',
    },
    {
      question: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      answer: 'useFetch()',
      id: 'p3',
    },
    {
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      answer: 'use',
      id: 'p4',
    },
  ];

  const [slide, setSlide] = useState(0);
  const [results, setResults] = useState(null);

  const [awnsers, setAnswer] = useState(
    questions.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  function handleChange({ target }) {
    setAnswer({ ...awnsers, [target.id]: target.value });
  }
  function handleNextQuestion(event) {
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      showResults();
    }
  }
  function restart() {
    setSlide(0);
    setResults(null);
    setAnswer(
      questions.reduce((acc, field) => {
        return { ...acc, [field.id]: '' };
      }, {}),
    );
  }
  function showResults() {
    const corretas = questions.filter(
      ({ id, answer }) => awnsers[id] === answer,
    );
    setResults(`Você acertou ${corretas.length} de ${questions.length}`);
    console.log(results);
  }
  return (
    <form onSubmit={event => event.preventDefault()}>
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          onChange={handleChange}
          value={awnsers[question.id]}
          key={question.id}
          {...question}
        />
      ))}
      {results ? (
        <div>
          <p>{results}</p>
          <button onClick={restart}>Voltar</button>
        </div>
      ) : (
        <button onClick={handleNextQuestion}> Próximo</button>
      )}
    </form>
  );
}
