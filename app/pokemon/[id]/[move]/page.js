import { use } from "react";
import axios from "axios";

const getData = async (url) => {
  const data = await axios
    .get(url)
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

const PokemonMove = ({ params: { move } }, PageProps) => {
  const moveDetails = use(getData(`https://pokeapi.co/api/v2/move/${move}/`));
  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return (
    <section className="w-full max-w-7xl min-h-screen flex justify-between mx-auto px-9 py-9">
      <div className="w-full mt-24">
        <div className="flex items-center">
          <h1 className="text-3xl uppercase">{moveDetails.name}</h1>
          <p
            className="ml-3 py-2 px-3 text-xs mr-2 rounded-2xl text-white"
            style={{
              backgroundColor: colours[moveDetails.type.name],
            }}
          >
            {moveDetails.type.name}
          </p>
        </div>
        <div className="mt-5">
          <div>
            {moveDetails.effect_entries.length > 0 && (
              <>
                {moveDetails.effect_entries.map((entry, index) => (
                  <p key={index}>
                    {entry.language.name === "en" &&
                      entry.effect.replace(
                        "$effect_chance%",
                        moveDetails.effect_chance
                      )}
                  </p>
                ))}
              </>
            )}

            <div className="w-full mt-10">
              <h2 className="text-2xl pb-5">Stats</h2>
              {moveDetails.accuracy !== null && (
                <div className="flex justify-between items-center">
                  <p>Accuracy:</p>
                  <p>{moveDetails.accuracy}</p>
                </div>
              )}
              {moveDetails.effect_chance !== null && (
                <div className="flex justify-between items-center mt-5">
                  <p>Effect chance:</p>
                  <p>{moveDetails.effect_chance}</p>
                </div>
              )}
              {moveDetails.power !== null && (
                <div className="flex justify-between items-center mt-5">
                  <p>Power:</p>
                  <p>{moveDetails.power}</p>
                </div>
              )}
              {moveDetails.pp !== null && (
                <div className="flex justify-between items-center mt-5">
                  <p>PP:</p>
                  <p>{moveDetails.pp}</p>
                </div>
              )}
              {moveDetails.priority !== null && (
                <div className="flex justify-between items-center mt-5">
                  <p>Priority:</p>
                  <p>{moveDetails.priority}</p>
                </div>
              )}
            </div>

            {moveDetails.contest_combos !== null && (
              <>
                <div className="mt-10">
                  <h2 className="text-2xl pb-5">Combos</h2>
                  {moveDetails.contest_combos.normal.use_before !== null && (
                    <>
                      <p>Use these attack&apos;s before:</p>
                      <ul>
                        {moveDetails.contest_combos.normal.use_before.map(
                          (attack, index) => (
                            <li key={index} className="ml-5 mt-5">
                              {attack.name}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                  {moveDetails.contest_combos.normal.use_after !== null && (
                    <>
                      <p className="mt-4">Use these attack&apos;s after:</p>
                      <ul>
                        {moveDetails.contest_combos.normal.use_after.map(
                          (attack, index) => (
                            <li key={index} className="ml-5 mt-5">
                              {attack.name}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </div>
              </>
            )}
            {moveDetails.damage_class.name !== null && (
              <div className="mt-10">
                <h2 className="text-2xl pb-5">Damage class</h2>
                <p>{moveDetails.damage_class.name}</p>
              </div>
            )}
            {moveDetails.generation.name !== null && (
              <div className="mt-10">
                <h2 className="text-2xl pb-5">Generation</h2>
                <p>{moveDetails.generation.name}</p>
              </div>
            )}
            {moveDetails.machines.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl pb-5">Machines</h2>
                {moveDetails.machines.map((machines, index) => {
                  const machineDetails = use(getData(machines.machine.url));

                  return (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between mb-5"
                    >
                      <p>{machineDetails.item.name}</p>
                      <p>{machines.version_group.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-10">
              <h2 className="text-2xl pb-5">Meta</h2>
              <div className="w-full">
                {moveDetails.meta.ailment.name !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Ailment:</p>
                    <p>{moveDetails.meta.ailment.name}</p>
                  </div>
                )}
                {moveDetails.meta.category.name !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Category:</p>
                    <p>{moveDetails.meta.category.name}</p>
                  </div>
                )}
                {moveDetails.meta.crit_rate !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Crit rate:</p>
                    <p>{moveDetails.meta.crit_rate}</p>
                  </div>
                )}
                {moveDetails.meta.drain !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Drain:</p>
                    <p>{moveDetails.meta.drain}</p>
                  </div>
                )}
                {moveDetails.meta.flinch_chance !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Flinch chance:</p>
                    <p>{moveDetails.meta.flinch_chance}</p>
                  </div>
                )}
                {moveDetails.meta.healing !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Healing:</p>
                    <p>{moveDetails.meta.healing}</p>
                  </div>
                )}
                {moveDetails.meta.stat_chancet !== null && (
                  <div className="flex justify-between items-center mb-5">
                    <p>Stat chance:</p>
                    <p>{moveDetails.meta.stat_chance}</p>
                  </div>
                )}
              </div>
            </div>
            {moveDetails.names.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl pb-5">Names</h2>
                {moveDetails.names.map((name, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-5"
                  >
                    <p>{name.language.name}</p>
                    <p>{name.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonMove;
