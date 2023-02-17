import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {memoActions} from '../memoReducer'

const MemoTitles = () => {
  const newMemoContents = useSelector(state => state.memo_contents)
  const dispatch=useDispatch()

  let tags=[];
  for (let i = 0; i < newMemoContents.length; i++) {
    // console.log(newMemoContents.length)
    let d = newMemoContents[i]
    tags.push(<li key={d.id}><a href="#" onClick={()=>{
      dispatch(memoActions.read(d.id))
    }}>{d.title}</a></li>)
    // console.log(d)
  }

  return (
    <div>
      <ul>
        {tags}
      </ul>
    </div>
  )
}

export default MemoTitles