import { Navbar, Skeletons, ModalPokemon, PokemonTable, Pagination, GetPokemons, FilterPokemons, UsePokemonParams } from "../../Utils/Imports";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import "./Home.css"

type pokemonType = {
  id: string,
  name: string,
  image: string,
  types: string,
  weight: string,
  height: string
}

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [poke, setPoke] = useState<pokemonType>();
  const [modal, setModal] = useState(false);
  const [pokesPerPage] = useState(24);
  const navigate = useNavigate();

  const indexOfLastPoke = currentPage * pokesPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const currentPokes = pokemons.slice(indexOfFirstPoke, indexOfLastPoke);

  useEffect(() => {
    const getPokeData = async () => {
      const payload: any = await GetPokemons();
      setPokemons(payload)
    }
    getPokeData()
  }, []);

  async function pokemonFilter(name: string) {
    const filteredPokemons: any = await FilterPokemons(name, pokemons)
    setPokemons(filteredPokemons);
    setCurrentPage(1);
  };

  function toggleModal(pokemon?: any) {
    if (pokemon) {
      const singlePoke: pokemonType = UsePokemonParams(pokemon)
      setPoke(singlePoke);
    }
    setModal(!modal);
  }

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <ModalPokemon trigger={modal} setTrigger={toggleModal} poke={poke} modalType={1}/>
      <Navbar pokemonFilter={pokemonFilter} navigation={() => navigate("/teams")} typeNav={1} />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            <>
              <PokemonTable pokemons={currentPokes} toggleModal={toggleModal}></PokemonTable>
              <br />
              <Pagination pokesPerPage={pokesPerPage} totalPokes={pokemons.length} paginate={paginate} currentPage={currentPage}></Pagination>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
};
