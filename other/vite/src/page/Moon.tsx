import Lander from "../assets/moon_Lander.webp"
import "../App.css"

const Moon = () => {
    return (
        <div className="moon-main">
            <div className="image-moon">
                <img src={Lander} alt="russian moon lander" />
            </div>
            <div className="moon-div2">
                <h2>Russian Moon lander</h2>
                <p>
                    The LK (Russian: ЛК, from Russian: Лунный корабль, romanized: Lunniy korabyl, lit.'lunar craft'; GRAU index: 11F94) was a lunar module (lunar lander designed for human spaceflight) developed in the 1960s as a part of several Soviet crewed lunar programs. Its role was analogous to the American Apollo Lunar Module (LM). Three LK modules, of the T2K variant, were flown without crew in Earth orbit, but no LK ever reached the Moon. The development of the N1 launch vehicle required for the lunar flight suffered setbacks (including several launch failures), and the first Moon landings were achieved by US astronauts on Apollo 11. As a result, having lost the Space Race, both the N1 and the LK programs were cancelled without any further development.
                </p>
            </div>
        </div>
    );
};

export default Moon;