import useGames from "../hooks/useGames";

const GameGrid = ()=> {
    const {games, error} = useGames()

    return(
        <div>
            {error && <p>{error}</p> }
            {games.map(game => <li key={game.id}>{game.name}</li> )}
        </div>
    );
};

export default GameGrid;