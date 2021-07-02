import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {prettyDOM} from '@testing-library/dom';
// import App from './App';
import Card from './components/card/card'
import NavBar from './components/navBar/navBar'
// import { Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index.js';
import {BrowserRouter as Router} from 'react-router-dom'



// test('renders learn react link', () => {
//   render( < App / > );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders Card', () => {

  const data = {
    "id": 25,
    "name": "pikachu",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    "types": [
        {
            "name": "electric",
            "id": "13"
        }
    ]
}
  // const mockHandler = jest.fn()
  // const component = render(<Card data={ data }/>)
  const component = render(<Provider store={store}> <Router> <Card data={ data }/></Router></Provider>)
  const aver = component.getByText('Pikachu')
  const aver2 = component.getByText('electric')
  const aver3 = component.queryByLabelText('href')
  // console.log('aver', prettyDOM(aver))
  // console.log('aver2', prettyDOM(aver2))
  // console.log('aver3', prettyDOM(aver3))
  // fireEvent.click(aver)

  // expect(mockHandler.mock.calls).toHaveLength(1);
  // component.debug()
  // const a= component.container.querySelector('a')
  // console.log(prettyDOM(a))
})

test('Renders NavBar', ()=>{
  const component = render(<Provider store={store}> <Router> <NavBar/></Router></Provider>)
  component.getByText('Reload Pokemon')
  component.getByText('Create Pokemon')
  component.getByText('Search')

  // console.log('back', prettyDOM(back))
  // console.log('reload', prettyDOM(reload))
  // console.log('link', prettyDOM(link))
  // console.log('search', prettyDOM(search))
    // const mockHandler = jest.fn()
    // fireEvent.click(reload)
    // expect(mockHandler.mock.calls).toHaveLength(1);



})
