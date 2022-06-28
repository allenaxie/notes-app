import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const NewNoteForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    // if form is submitting
    if (isSubmitting) {
      // and if there are no errors
      if (Object.keys(errors).length === 0 ) {
        // create note
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors])
  
  const createNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })
      // redirect to home page to see new note
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    // controlled input
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
    // create new note
  }

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required"
    }

    if (!form.description) {
      err.description = "Description is required"
    }

    return err;
  }

  return (
    <div className="flex justify-center">
      {isSubmitting ?
        <div>
          Submitting...
        </div>
        :

        <form
          className="grid grid-cols-1 gap-6 p-10 w-1/2"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Title"
              required
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <textarea
              name="description"
              onChange={handleChange}
              placeholder="Description"
              required
              className="
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
          <div className="flex justify-center">
            <button type="submit" className="border rounded-full p-3 text-white text-lg bg-cyan-600 hover:bg-cyan-500">Add New Note</button>
          </div>
        </form>
      }
    </div>
  )
}

export default NewNoteForm;