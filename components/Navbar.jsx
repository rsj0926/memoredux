import { useDispatch } from 'react-redux'
import { memoActions } from '../memoReducer'

const Navbar = () => {
    const dispatch = useDispatch()

    const style = {
        display: 'flex',
        flexDirection: 'row',
        
        background: '#3b5999',
        width: '420px',
        padding:'12px',
        color: '#fff'
    }

    return (
        <div style={style}>
            <a href="home" style={{ color: '#fff', fontSize:'20px', marginRight:'10px' }} onClick={(e) => {
                e.preventDefault()
                dispatch(memoActions.home())
            }}>Home</a> ||
            <a href="newMemo" style={{ color: '#fff', fontSize:'20px', marginLeft:'10px', marginRight:'10px' }} onClick={(e) => {
                e.preventDefault()
                dispatch(memoActions.newMemo())
            }}>newMemo</a> ||
            <a href="updateMemo" style={{ color: '#fff', fontSize:'20px', marginLeft:'10px', marginRight:'10px' }} onClick={(e) => {
                e.preventDefault()
                dispatch(memoActions.updateMemo())
            }}>updateMemo</a> ||
            <input type="button" style={{ background:'black', color: '#fff', fontSize:'20px', marginLeft:'10px' }} onClick={() => {
                dispatch(memoActions.delete())
                if (window.confirm("Really?")) {
                    return false;
                }
            }} value="delete"></input>
        </div>
    )
}

export default Navbar