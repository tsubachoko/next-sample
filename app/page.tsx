"use client"
// todo ↑RSCについて調査

import { useState } from 'react'

type TodoTask = {
  text: string
  isDone: boolean
}

export default function Home() {
  const [text, setText] = useState('')
  const [taskList, setTaskList] = useState<TodoTask[]>([])

  const pushTask = () => {
    if (!text) {
      return
    }

    setTaskList([...taskList, { text, isDone: false }])
    setText('')
  }

  const toggleTask = (index: number) => {
    const newTaskList = [...taskList]
    newTaskList[index].isDone = !newTaskList[index].isDone
    setTaskList(newTaskList)
  }

  return (
    <main className="text-center items-center p-24">
      <div className="text-xl">
        ToDo App
      </div>

      {/* フォーム */}
      <div className="mt-4">
        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="text-stone-700 rounded"
          />
        </div>

        <div className="mt-4">
          <button
            className="bg-stone-700 rounded px-4"
            onClick={pushTask}
          >add</button>
        </div>
      </div>

      {/* ToDoリスト */}
      <div className="mt-6">
        <div className="text-lg">ToDo List</div>

        <div className="text-left">
          {taskList.map((task, index) => (
            <div key={index} className="border-b-1 mt-1">
              <div className='p-1 flex'>
                <div className="mr-2">
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => toggleTask(index)}
                  />
                </div>
                <div>{task.text}</div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
