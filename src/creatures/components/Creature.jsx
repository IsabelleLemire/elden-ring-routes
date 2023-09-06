import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CreatureService from "../service/CreatureService";

const creatureService = new CreatureService();

const Creature = () => {
    const params = useParams();
    
    const { isError, isLoading, error, data} = useQuery(['creature', params.name], () => creatureService.getCreatureById(params.name));

	return (
		<Container fluid className='min-vh-100 d-grid'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
					{data && (
						<div className='d-flex flex-column gap-5'>
							<CreatureExcerpt creature={data} />
							<PokemonAbilities creature={data} />
							<PokemonMoves creature={data} />
						</div>
					)}
				</Container>
			</FetchState>
		</Container>
	)


    return (
        <div>{data && data.map(creature => {
            return (
                <div key={creature.name}>
                    <h2>{creature.name}</h2>
                    <p>{creature.description}</p>
                </div>
            )
        })}</div>
    )
};

export default Creature;