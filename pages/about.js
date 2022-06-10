import { useDispatch, useSelector } from 'react-redux'
import Popup from '../layout/Popup';
import classes from '../styles/error.module.css'

export default function About () {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.toggle)
    
    const popup = useSelector(state => state.popup)
    function ShowPopup(show) {
        dispatch({type: show})
    }
    return (
        <div className={classes.about} style={{display:'flex', justifyContent: 'center'}}>
            <h1 className={classes.aboutTitle}>{toggle ? 'About me' : 'Обо мне'}</h1>
            <div className={classes.aboutCard}>
                <h4 className="mb-2">{toggle ? 'Programming experience' : 'Опыт в программировании'}</h4>
                <p>
                {toggle
                    ?'I have been programming since the end of 2020. Since December 2021, I\'m began working at ' 
                    :'Занимаюсь программированием с конца 2020 года. С декабря 2021 года работаю в компании '
                }
                <a 
                    target="_blank" 
                    href='https://aiaracorp.com/' 
                    className='fw-bold'
                    style={{textDecoration: 'none'}}
                >AIARA
                </a> 
                {toggle ?
                 ' on React.js and Vue.js. I took courses on Youtube on express, php, React Native, Next.js, C++.' 
                 :' на React.js и Vue.js. Проходил курсы на Youtube по express, php, React Native, Redux, Next.js, C++.'
                }
                </p>
            </div>
            <div className={classes.aboutCard}>
                <h4 className="mb-2">{toggle ? 'Personal life' : 'Личная жизнь'}</h4>
                <p>
                {toggle ?
                 'Born January 4, 2002. At school he was a successful triplet.At the collage, I studied as a system administrator and graduated from the technical school with a grade of 4.I have been studying English since the age of 14. Good reading comprehension but very poor spoken English. I left my parents at the age of 20, so I don\’t have the opportunity to ' 
                 :'Родился 4 января 2002 года. В школе был успешным троечником. В коллаже учился на системного администратора и закончил техникум на четвёрочку. Английский изучаю с 14 лет. Понимание прочитанного хорошее но очень слабый разговорный английский. Съехал от родителей в 20 лет, поэтому нет возможности '
                 }
                <a className="cursor" onMouseEnter={() => ShowPopup('show')} onMouseLeave={() => ShowPopup('close')}>
                    <span className='fst-italic'>“{toggle ? 'work for the idea' : 'работать за идею'}”</span>
                </a>.
                </p>
            </div>
            <div className={classes.aboutCard}>
                <h4 className="mb-2">{toggle ? 'Hobby' : 'Хобби'}</h4>
                <p>
                {toggle 
                ? ' In my free time, I study previously unknown javascript frameworks/libraries and SDL2 libraries in C++. I take care of two parrots, which I keep in free range. I rarely play games because of work, but when I have time and energy left after work, I play ' 
                : 'В свободное время изучаю ранее неизвестные фреймворки/библиотеки для javascript. Одеваю, кормлю, пою и убираю какашки за двумя попугаями, которых содержу на свободном выгуле. Редко играю в игры из-за работы, но когда после работы остается время и силы, я играю в '}
                <a href='https://steamcommunity.com/id/Pipeee228/' target="_blank">The Binding of Issac.</a>
                </p>
            </div>
            {popup && (
                <Popup />
            )}
        </div>
    )
}