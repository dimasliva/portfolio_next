import { useSelector } from "react-redux"

export default function Popup() {
    const toggle = useSelector(state => state.toggle)
    return (
        <div style={{
            position: 'fixed',
            top: 200,
            right: '1em',
        }}>
           <div className="card bg-light mb-3" style={{ width: '15em' }}>
              <div className="card-header">{toggle ? 'Clue' : 'Подсказка'}</div>
              <div className="card-body">
                <h5 className="card-title">{toggle ? 'Work for the idea' : 'Работать за идею'}</h5>
                <p className="card-text">{toggle ? "Newspeak used by employers. Translated as: \"Work for free\"" : "Новояз применяемый работодателями. Переводится как: \"Работай за бесплатно\""}</p>
              </div>
            </div>
        </div>
    )
} 