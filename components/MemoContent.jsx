import {useSelector} from 'react-redux'

const MemoContent = () => {
    const newState=useSelector(state=>state)

    let title, memo;
    if(newState.type==='memo/home'){
        title=newState.home_content.title;
        memo=newState.home_content.memo;
    } else if(newState.type==='memo/read'){
        for(let i=0;i<newState.memo_contents.length; i++){
            let d=newState.memo_contents[i]
            if(d.id===newState.selected_memo_id){
                title=d.title;
                memo=d.memo;
            }
        }
    }

// 위를 파이어베이스메모 코드에서 디비 읽기로 처리하면 될 것임
// 아래 태그처리 고민해야 함

  return (
    <div>
        <h1 style={{color:'#3b5999'}}>{title}</h1>
        {memo}

    </div>
  )
}

export default MemoContent