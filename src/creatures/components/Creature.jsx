import { useQuery } from "@tanstack/react-query";
import CreatureService from "../service/CreatureService";

const creatureService = new CreatureService();

const Creature = () => {

    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["creature"],
        queryFn: () => creatureService.getAllCreature(),
    })

    if (isLoading || isError) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    

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