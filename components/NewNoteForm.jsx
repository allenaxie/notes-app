import {useState} from 'react';

const NewNoteForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  })

  const handleSubmit = () => {
    // create new note
  }

  return (
    <div class="flex justify-center">
      <form
        class="grid grid-cols-1 gap-6 p-10 w-1/2"
        onSubmit={handleSubmit}
      >
        <label class="block">
          <span class="text-gray-700">Title</span>
          <input
            type="text"
            class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            placeholder=""
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Description</span>
          <textarea
            class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            rows="3"
          ></textarea>
        </label>
        <div class="flex justify-center">
          <button type="submit" class="border rounded-full p-3 text-white text-lg bg-cyan-600 hover:bg-cyan-500">Add New Note</button>
        </div>
      </form>
    </div>
  )
}

export default NewNoteForm;