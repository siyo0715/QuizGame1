const quiz = [
  {
    question: '問題1.'+'「くさタイプはどのポケモンですか？」',
    answers: [
    'リザードン',
    'フシギバナ',
    'カメックス',
    'ライチュウ'
    ],
    correct: 'フシギバナ'
  }, {
    question: '問題2.'+'「二刀流と呼ばれ大活躍を続けている野球選手といえば？」',
    answers: [
    'カエル',
    'ロロノアゾロ',
    'はるな愛',
    '大谷翔平'
    ],
    correct: '大谷翔平'
  }, {
    question: '問題3.'+'「食べられないパンはどれ？」',
    answers: [
    'カレーパン',
    'あんパン',
    'メロンパン',
    'サンドパン'
    ],
    correct: 'サンドパン'
  }, {
    question: '問題4.'+'「1+1は？」',
    answers: [
    '2',
    '11',
    '0',
    '3'
    ],
    correct: '2'
  },{
    question: '問題5.'+'「あなたはこれから先の未来で？」',
    answers: [
    '1億円を拾う',
    '空を飛ぶ',
    '宇宙人に会える',
    '幸せになる'
    ],
    correct: '幸せになる'
  },{
    question: '問題6.'+'「東京タワーの高さは？」',
    answers: [
    '333m',
    '634m',
    '103m',
    '296m'
    ],
    correct: '333m'
  },{
    question: '問題7.'+'「東大寺盧舎那仏像は都道府県のどこにある？」',
    answers: [
    '奈良県',
    '沖縄県',
    '京都府',
    '奈良県'
    ],
    correct: '奈良県'
  },{
    question: '問題8.'+'「飲み物じゃないのは？」',
    answers: [
    '加藤茶',
    'カルピス',
    'コーヒー',
    '青汁'
    ],
    correct: '加藤茶'
  },{
    question: '問題9.'+'「ドラゴンボールの第22回天下一武道会優勝者は？」',
    answers: [
    '天津飯',
    '孫悟空',
    'ミスターサタン',
    'ジャッキー・チュン'
    ],
    correct: '天津飯'
  },{
    question: '問題10.'+'アニメ「サザエさん」の磯野カツオの母親は？」',
    answers: [
    '磯野 舟',
    '磯野 サザエ',
    'タマ',
    '波平'
    ],
    correct: '磯野 舟'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    // ここに命令↓
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('残念...');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }
  else {
      // 問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です' )

  }
};

// ボタンクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}