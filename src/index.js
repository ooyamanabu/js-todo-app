import "styles.css";

const onclickAdd = () => {
  //テキストを取得する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  creaIncompleteList(inputText);
};

//~~未完了のリストに追加する関数~~

const creaIncompleteList = (text) => {
  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-Low";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //divタグの子要素にliを設定
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("not-completed").appendChild(div);

  //button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //~~完了ボタンを押したときに発生するイベント~~
  completeButton.addEventListener("click", () => {
    //完了ボタンを押したとき親divを未完了のリストから消す
    deleteFromCompleteButton(completeButton.parentNode);
    //完了リストに追加
    const addTarget = completeButton.parentNode;
    //TODO内容の中身（テキスト）を取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liを生成
    const li = document.createElement("li");
    li.innerText = text;
    //戻るボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    
    //backButton(戻るボタン)にイベントを追加
    backButton.addEventListener("click",()=>{
    const backTarget = backButton.parentNode;
    const text = backTarget.firstChild.innerText;

    //削除
    document.getElementById("complet-list").removeChild(backTarget);
    createIncompleteList(text);
    })

    const IncompleteButton = document.createElement("button");
    IncompleteButton.innerText = "削除";
    
    
    //backButtonにイベントを追加
    IncompleteButton.addEventListener("click",()=>{
    //削除
    document.getElementById("complete-List").removeChild(IncompleteButton.parentNode);
    })

};

