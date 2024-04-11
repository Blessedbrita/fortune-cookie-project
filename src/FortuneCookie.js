import React, { useState, useEffect } from 'react';
import fortuneCookieBroken from './images/fortuneCookieBroken.png';
import fortuneCookie from './images/fortuneCookie.png';
import Shake from 'shake.js';

function FortuneCookie() {
    const fortunes = [
        "A faithful friend is a strong defense.",
        "You love peace.",
        "Do not be afraid of competition.",
        "Sell your ideas-they've exceptional merit.",
        "Love does not have have prerequisites like perfection,agreement or even likability.",
        "Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.",
        "Don't let yeasterday take up too much of today.",
        "I never dreamed of success, I worked for it.",
        "Do not let a living prevent you from living life.",
        "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
        "You always pass failure on the way to succes.",
        "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.",
        "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
        "It always seems impossible until it is done.",
        "When you can’t find the sunshine, be the sunshine!",
        "Happiness is not a station you arrive at, but a manner of traveling.",
        "It makes a big difference in your life when you stay positive.",
        "You are never too old to set another goal or dream a new dream.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "It ain’t about how hard ya hit. It’s about how hard you can get hit and keep moving forward.",
        "The struggle you’re in toad is developing the strength you need tomorrow.",
        "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        "Make each day your masterpiece.",
        "A truly happy person is one who can enjoy the scenery while on a detour.",
        "Keep your face to the sunshine and you cannot see a shadow.",
        "A positive attitude causes a chain reaction of positive thoughts, events and outcomes.It is a catalyst and it sparks extraordinary results.",
        "Don’t forget to tell yourself positive things daily! You must love yourself internally to glow externally.",
        "The harder the battle, the sweeter the victory.",
        "Never say never because limits, like fears, are often just an illusion.",
        "You miss 100 % of the shots you don’t take.",
        "Winners never quit and quitters never win.",
        "You can’t put a limit on anything.The more you dream, the farther you get.",
        "A stranger will cross your path who later becomes your friend.",
        "An old acquaintance will re - enter your life.",
        "A chance happening will reveal your destiny.",
        "A wise person will give you timely advice.",
        "Recognition will come from unexpected sources.",
        "Love will be found from a past meeting.",
        "Kind words may mean more than they seem.",
        "A problem will solve itself this week.",
        "A long dispute will soon be solved.",
        "A mistake will soon be corrected.",
        "A new friendship will bring unexpected joy.",
        "A school friend will re - enter your life in a surprising way.",
        "A weight will be taken off your mind.",
        "A problem will not be as bad as it seems.",
        "A call today will make you smile.",
        "He who contains himself goes seldom wrong.",
        "Be slow to speak and quick to act.",
        "Generosity will repay itself sooner than you imagine.",
        "The chase of gain is rich in hate.",
        "A heart set on love will do no wrong.",
        "An enemy may have simply been misjudged.",
        "A smile can bring a change is destiny today.",
        "Change your horizons if you want to change your luck.",
        "To truly find yourself, you should play hide and seek alone.",
        "Come back later... I am sleeping. (yes, cookies need sleep too)",
        "If you think nobody cares if you are alive, try missing a couple car payments",
        "You look pretty",
        "I see money in your future... It is not yours though."
    ];

    const [fortune, setFortune] = useState("");
    const [broken, setBroken] = useState(false);

    const generateFortune = () => {
        if (!broken) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            setFortune(fortunes[randomIndex]);
        }
    };

    const reloadFortune = () => {
        setFortune("");
        setBroken(false);
    };

    useEffect(() => {
        generateFortune();
        const handleTap = () => {
            generateFortune();
            setBroken(true);
        };
        const handleShake = () => {
            generateFortune();
            setBroken(true);
        };

        const shakeEvent = new Shake({ threshold: 15 });
        shakeEvent.start();

        document.removeEventListener('click', handleTap);
        window.addEventListener('shake', handleShake);

        return () => {
            document.removeEventListener('click', handleTap);
            window.removeEventListener('shake', handleShake);
        };
    }, []);

    return (
        <div>
            <h2 className='instruction'>
                Shake or Tap
                <br />
                the Fortune Cookie
                <br />
                <span className='fortune'> {fortune && `${fortune}`} </span>
            </h2>
            <br />
            <img src={broken ? fortuneCookieBroken : fortuneCookie} alt='Fortune Cookie' onClick={(event) => { generateFortune(event); setBroken(true); }} className='cookie' />
            <br />
            <br />
            <br />
            <button onClick={reloadFortune}>Reload</button>
        </div>
    );
}

export default FortuneCookie