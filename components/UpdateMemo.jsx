import {useDispatch} from 'react-redux'
import {memoActions} from '../memoReducer'
import {useSelector} from 'react-redux'
import {useState} from 'react'

const UpdateMemo = () => {
  const dispatch=useDispatch()
  const newState=useSelector(state=>state)

  let id=0;
  let title, memo;
  for(let i=0;i<newState.memo_contents.length;i++){
    let d=newState.memo_contents[i]
    if(d.id===newState.selected_memo_id){
      id=d.id
      title=d.title
      memo=d.memo
    }
  }

  const [inputtedTitle, setInputtedTitle]=useState(title)
  const [inputtedMemo, setInputtedMemo]=useState(memo)

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      let title=e.target.title.value
      let memo=e.target.memo.value
      dispatch(memoActions.updateMemo_process({id, title, memo}))
  }}>
      <input type="text" name="title" placeholder="title" onChange={(e)=>{
        setInputtedTitle(e.target.value)
      }} value={inputtedTitle}></input>
      <p><textarea type="text" name="memo" placeholder="memo" onChange={(e)=>{
        setInputtedMemo(e.target.value)
      }} value={inputtedMemo} style={{background:'yellow', width:'320px', height:'300px'}}></textarea></p>
      <input type="submit"></input>
  </form>
  )
}

export default UpdateMemo