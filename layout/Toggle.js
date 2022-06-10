import { useDispatch, useSelector } from "react-redux"
export default function Toggle() {
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.toggle)
    const changeLang = () => {
        dispatch({type: 'toggle'})
    }
    return (
        <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button r" id="button-1">
            <input 
                type="checkbox" 
                className="checkbox" 
                onClick={() => changeLang()} 
                checked={toggle}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    )
}