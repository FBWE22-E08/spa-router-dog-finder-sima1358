 import { useParams, NavLink } from "react-router-dom";
import Dog from "./Dog";

export default function Dogs({ dogs }) {
  // get the current name
  const { name } = useParams();

  // find the dog
  const ChooseDog = dogs.find((e) => e.name === name);

  const classes = name ? "" : "force-full-opacity";
  
  return (
    <div>
      <h1>All Dogs</h1>

      <nav>
        {dogs.map((dog) => (
          <NavLink key={dog.id} to={"/dogs" + dog.name} className={classes} >
            <img src="{dog.image}" alt="" />
            {dog.name}
          </NavLink>
        ))}
      </nav>
      {name && <Dog dog={ChooseDog} />}
    </div>
  );
}
