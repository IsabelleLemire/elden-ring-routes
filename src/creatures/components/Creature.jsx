import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import CreatureService from "../service/CreatureService";
import Container from 'react-bootstrap/Container';

const creatureService = new CreatureService();

const Creature = () => {
    const params = useParams();
    const { data, isLoading, isError, error } = useQuery(['creature', params.name], () => creatureService.getCreatureByName(params.name));

    if (isLoading || isError) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    

    return (
        <Container>
            {data && (
                <div className='d-flex flex-column gap-5'>
                    <CreaturesList creature={data} />
                </div>
            )}
        </Container>
    )
};

export default Creature;