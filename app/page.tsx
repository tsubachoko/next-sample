"use client"
// todo ↑RSCについて調査

import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  const [taskList, setTaskList] = useState<string[]>([])

  const pushTask = () => {
    if (!text) {
      return
    }

    setTaskList([...taskList, text])
    setText('')
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

        <div>{text}</div>

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
            <div key={index}>
              <div>{task}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
