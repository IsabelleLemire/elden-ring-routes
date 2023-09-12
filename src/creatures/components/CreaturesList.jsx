import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import CreatureService from "../service/CreatureService";
import Container from 'react-bootstrap/Container';

const creatureService = new CreatureService();

const CreaturesList = () => {
    const { data, isLoading, isError, error } = useQuery(['creature', params.name], () => creatureService.getAllCreature());

    if (isLoading || isError) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    

    return (
		<Container fluid className='d-grid min-vh-100'>
				<Container>
					<Row>
						{data?.map((creature) => (
							<Col key={creature.name} xs={12} sm={6} md={4} lg={3} xl={2}>
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