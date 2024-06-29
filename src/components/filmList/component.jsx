import { films } from "../../mock"
import { Film } from "../film/component"

export const FilmList = () => {
    return (
        <div>
            {films.map((film)=>{
                return (
                    <Film film={film} key={film.id}/>
                )
            })}
        </div>
    )
} 