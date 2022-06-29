import {useRouter} from 'next/router';
import { EditNoteForm } from '../../components';

const Edit = () => {

    const router = useRouter();
    // console.log(router.query);
    const note = router.query;
  return (
    <EditNoteForm note={note}/>
  )
}

export default Edit;
