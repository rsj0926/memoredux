import {useDispatch} from 'react-redux'
import {memoActions} from '../memoReducer'

const NewMemo = () => {
  const dispatch=useDispatch()

  const style1={
    marginLeft:'20px',
    padding:'10px',
    background:'yellow',
  }
  const style2={
    marginLeft:'20px',
    padding:'10px',
    background:'beige',
    width:'400px',
    height:'300px',
    
  }

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        let title=e.target.title.value
        let memo=e.target.memo.value
        dispatch(memoActions.newMemo_process({title, memo}))
    }}>
        <input type="text" name="title" placeholder="title" style={style1}></input>
        <p><textarea type="text" name="memo" placeholder="memo" style={style2}></textarea></p>
        <input type="submit" style={{marginLeft:'20px'}}></input>
    </form>
  )
}

export default NewMemo