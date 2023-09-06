import {useQuery} from 'react-query';
import { Link } from 'react-router-dom';

import CreatureService from '../service/CretureService';
import FetchState from '../../components/FetchState/FetchState';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const creatureService = new CreatureService();

const Creatures = () => {
	const { data, isLoading, isError, error } = useQuery(['creatures'], () => creatureService.getAllCreature());

	return (
		<Container fluid className='d-grid min-vh-100'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
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
			</FetchState>
		</Container>
	)
}

export default Creatures