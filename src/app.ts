console.log(`
------------------------------
施工中 
てへぺろ☆(・ω<)
------------------------------
`)

const SPEED = 150;
const NAME = "ＹＵＫＩ. Ｎ＞";

function sleep(time: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  })
}

const $commandline = document.getElementById('js-commandline');
function print(str: string) {
  // console.clear();
  // console.log(str);
  $commandline.innerHTML = str;
}

async function yuki_n(messages: string[], msg = '') {
  let row = 0;

  for (let i = 0, length = NAME.length; i < length; i++) {
    msg += NAME[i]
    print(msg);
    await sleep(SPEED);
  }

  for (let i = 0, length = messages.length; i < length; i++) {
    for (let j = 0, slength = messages[i].length; j < slength; j++) {
      msg += messages[i][j]
      print(msg + (j !== slength - 1 ? '＿' : ''));

      if (j === slength - 1) {
        msg += `<br/><span style="opacity: 0">${NAME}</span>`;
      }
      await sleep(SPEED);
    }
  }

  msg += '<br/>';
  print(msg);
  return msg;
}

async function ready(msg = '', count = 0) {
  if (count <= 0) {
    msg += `<span style="opacity: 0">${NAME}</span>`;
    const command = "Ｒｅａｄｙ？";
    for (let i = 0, length = command.length; i < length; i++) {
      msg += command[i];
      print(msg + '＿');
      await sleep(SPEED);
    }

    document.addEventListener('keydown', (e) => {
      // TODO: 做些什麼
      gtag('event', 'keydown', {
        event_category: 'Ready?',
        event_label: e.key,
        transport_type: '',
      });
      document.getElementById('js-exit').click();
      // window.location.reload();
      // switch (e.keyCode) {
      //   case 13:
      //     $commandline.classList.remove('is-active');
      //     document.getElementById('js-alert').classList.add('is-escape')
      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 500)
      //     break;
      //   default:
      //     $commandline.classList.remove('is-active');
      // }
    })
  }
  print(msg + (count % 2 !== 0 ? '＿' : ''))
  count++;
  if (count <= 10) {
    setTimeout(() => {
      ready(msg, count);
    }, 500)
  }
}

async function start() {
  $commandline.classList.add('is-active');
  await sleep(500);

  let msg = '';
  msg = await yuki_n([
    "これをあなたが読んでいる時、",
    "わたしはわたしではないだろう。"
  ], msg)

  msg = await yuki_n([
    "このメッセージが表示されたということは、",
    "そこにはあなた、わたし、涼宮ハルヒ、朝比奈みくる、",
    "小泉一樹が存在しているはずである。"
  ], msg)

  msg = await yuki_n([
    "それが鍵。",
    "あなたは回答を見つけ出した。"
  ], msg)

  msg = await yuki_n([
    "これは緊急脱出プログラムである。",
    " ",
    "起動させる場合はエンターキーを、",
    "そうでない場合はそれ以外のキーを選択せよ。",
    " ",
    "起動させた場合、",
    "あなたは時空修正の機会を得る。",
    "ただし成功は保証できない。",
    "また帰還の保証もできない。"
  ], msg)

  msg = await yuki_n([
    "このプログラムが起動するのは一度きりである。",
    "実行ののち、消去される。",
    " ",
    "非実行が選択された場合は起動せずに削除される。",
  ], msg)

  ready(msg);
}

document.getElementById('js-reload').addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: '再試行',
    event_label: '',
    transport_type: '',
  });
  start();
  // document.getElementById('js-exit').classList.add('is-active')
});
// start();
