import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import Todo from './Todo'

test("renders todo text", () => {
  const todo = { id: 1, text: "learn docker", done: false }

  render(
    <Todo todo={todo} onToggle={() => { }} onDelete={() => { }} />
  )

  expect(screen.getByText("learn docker")).toBeDefined()
})

test("clicking done calls onToggle", async () => {
  const todo = { id: 1, text: "learn docker", done: false }
  const toggleMock = vi.fn()

  render(
    <Todo todo={todo} onToggle={toggleMock} onDelete={() => { }} />
  )

  const user = userEvent.setup()
  await user.click(screen.getByText("done"))

  expect(toggleMock).toHaveBeenCalledTimes(1)
})