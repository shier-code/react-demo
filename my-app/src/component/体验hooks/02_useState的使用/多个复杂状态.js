import React, { useState } from 'react'
/* eslint-disable  */
export default function MutiHookState() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18)
    const [friends, setFriends] = useState(['李白', '韩信'])
    const [students, setStudents] = useState([
        { id: 111, name: 'shier', age: 19 },
        { id: 121, name: 'luoxue', age: 19 },
        { id: 131, name: 'goudan', age: 19 }
    ])
    function addStuAgeWithIndex(index) {
        const newStu = [...students]
        newStu[index].age += 1
        setStudents(newStu)
    }
    return (
        <div>
            <div>state1:{count}</div>
            <div>state2:{age}</div>
            <h2>好友列表：</h2>
            <ul>
                {
                    friends.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            {/* 覆盖操作 */}
            <button onClick={e => setFriends([...friends, 'tom'])}>添加朋友</button>
            <h2>学生列表</h2>
            <ul>
                {
                    students.map((item,index) => {
                        return (
                            <li key={item.id}   >
                                <span>名字：{item.name}--年龄：{item.age}</span>
                                <button onClick={e => addStuAgeWithIndex(index)}>age+1</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}
