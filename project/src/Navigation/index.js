import { Switch, Route, NavLink } from 'react-router-dom'

import CharDetail from '../Character/CharDetail'
import NewChar from '../Character/NewChar'
import CharBrow from '../Character/CharBrow'


const actLink = { fontWeight: "bold", color: 'blue' }

export default function Navigation() {
    return (
        <>
            <div>
                <NavLink exact to="/" activeStyle={actLink}>Home</NavLink>
                <br />
                <NavLink to="/newcharacter" activeStyle={actLink}>New Character</NavLink>
                <br />
                <NavLink to='/character/1' activeStyle={actLink}>TEST::REMOVE</NavLink>
                <br />
            </div>
            <Switch>
                <Route path='/' exact>
                    <CharBrow />
                </Route>
                <Route path='/newcharacter'>
                    <NewChar />
                </Route>
                <Route path='/character/:charId'>
                    <CharDetail />
                </Route>
            </Switch>
        </>
    )
}
