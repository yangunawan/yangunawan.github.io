import { render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import EquationForm from './Components/EquationForm';
import FormulaPage from './Components/FormulaPage';
import GraphDisplay from './Components/GraphDisplay';
import HtmlRender from './Components/HtmlRender';
import MyNavbar from './Components/MyNavbar';
import { MemoryRouter } from 'react-router-dom';


test('App renders without crashing', () => {
  render(
    <MemoryRouter initialEntries={["","/pharmakinetics"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Pharmacokinetic Calculations")).toBeInTheDocument();
});

test('About page', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTitle('about-paragraph')).toBeInTheDocument();

});

test('Contact page', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/contact"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTitle('img')).toBeInTheDocument();
});

test('Equation Form page', () => {

});

test('Formula page', () => {

});

test('Graph Display', () => {

});

test('HTML REnder page', () => {

});

test('MyNavbar', () => {
  const page = render(
    <MemoryRouter initialEntries={["","/about"]}>
      <App />
    </MemoryRouter>
  );

  const getById = queryByAttribute.bind(null, 'id');
  const navbar_1 = getById(page.container, 'basic-navbar-nav');

  expect(navbar_1).toBeInTheDocument();

});