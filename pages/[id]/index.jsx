const Note = ({note}) => {

    const handleEdit = () => {

    }

    return (
        <div className="card border flex flex-col justify-center m-5 cursor-pointer">
            <div className="flex justify-center mb-5 p-2 border-b-2 border-solid border-gray ">
              {note.title}
            </div>
            <div className="flex justify-center p-2">
              {note.description}
            </div>
            <div className="card-footer my-5 mx-2">
              <button
                onClick={handleEdit}
                className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 m-2 rounded w-1/5"
              >
                Edit
              </button>
            </div>
          </div>
    )
}

export default Note;

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3000/api/notes/${id}`)
    const {data} = await res.json();
    return {
        props: {
            note: data,
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/notes`);
    const {data} = await res.json();

    const paths = data.map((note) => {
        return {
            params: {
                id: `${note._id}`
            }
        }
    })

    return {
        paths,
        fallback: true,
    }
}