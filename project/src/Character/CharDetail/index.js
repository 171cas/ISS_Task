import { useParams } from 'react-router-dom'

export default function CharDetail() {
    const { charId } = useParams();
    return <h2>Detail about Character ID #{charId}</h2>
}
