import { createSlice } from '@reduxjs/toolkit';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, query, orderByChild, } from "firebase/database";

const initialState = {
    type: 'memo/home',
    home_content: {
        title: 'Welcome',
        memo: 'Click newMemo!!'
    },
    selected_memo_id:1,
    max_id:3,
    memo_contents: [
        { id: 1, title: '메모예시1', memo: 'mx1 is ...' },
        { id: 2, title: 'memoEx2', memo: 'mx2 is ...' },
        { id: 3, title: '메모3', memo: 'mx3 is ...' }
    ]
}

const memoSlice = createSlice({
    name: 'memo',
    initialState,
    reducers: {
        home: (state, action) => {
            state.type = action.type
        },
        read: (state, action) => {
            //쓰기로 대체???
            state.type=action.type
            state.selected_memo_id=action.payload
        },
        newMemo: (state, action) => {
            state.type=action.type
        },
        newMemo_process: (state, action) => {
            // let newId=state.max_id+1
            // let newMemoContents=[
            //     ...state.memo_contents,
            //     {id:newId, title:action.payload.title, memo:action.payload.memo}
            // ]
            // state.memo_contents=newMemoContents
            // state.selected_memo_id=newId
            // state.max_id=newId
            // state.type='memo/read'


            let actionMemo = action.payload.memo;
            // 파이업베이스 쓰기 부분
            function saveMemo() {

                let key = Math.random().toString().replace(".", "")
                let memo = actionMemo;
              
                const db = getDatabase();
                set(ref(db, 'memo/' + key), {
                  memo: memo,
                  regdate: new Date().toString(),
                });
                
                 let newId=state.max_id+1
                let newMemoContents=[
                        ...state.memo_contents,
                        {id:newId, title:action.payload.title, memo:memo}
                    ]
                    state.memo_contents=newMemoContents

              }
              
              saveMemo()
              // 파이어베이스메모 쓰기 부분



        },
        updateMemo: (state, action) => {
            state.type=action.type
        },
        updateMemo_process: (state, action) => {

            // 아래 반복문 부분을 파이어베이스메모 부분의 읽는 부분, 쓰는 부분, 삭제 부분을 고려하여 수정
            let newMemoContents=[
                ...state.memo_contents,
            ]
            for(let i=0;i<newMemoContents.length;i++){
                let d=newMemoContents[i]
                if(d.id===state.selected_memo_id){
                    d.title=action.payload.title
                    d.memo=action.payload.memo
                }
            }
            state.memo_contents=newMemoContents
            state.type='memo/read'
        },
        delete: (state, action) => {
            // 파이어베이스 삭제부분 활용
            let newMemoContents=state.memo_contents.filter((e)=>{
                if(e.id===state.selected_memo_id){
                    return false
                } return true
            })
            state.memo_contents=newMemoContents
            state.type='memo/home'
        }
    }
})
export const memoActions = memoSlice.actions
export default memoSlice.reducer