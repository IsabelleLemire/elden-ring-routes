import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import CreatureService from "../service/CreatureService";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const creatureService = new CreatureService();

const CreaturesList = () => {
    const { name } = useParams();

    const { data, isLoading, isError, error } = useQuery(['creature', name], () => creatureService.getAllCreature());

    if (isLoading || isError) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    

    return (
		<Container fluid className='d-grid min-vh-100'>
				<Container>
					<Row>
						{data?.map((creature) => (
							<Col key={creature.name}>
								<Link to={`/creature/${creature.name}`}>
									{creature.name}
								</Link>
							</Col>
						))}
					</Row>
				</Container>
		</Container>
    )
};

export default CreaturesList;
