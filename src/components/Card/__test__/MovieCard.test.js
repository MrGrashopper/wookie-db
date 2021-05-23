import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieCard from '../MovieCard';
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe('Test MovieCard', () => {
  function tree() {
    return render(
      <Router>
        <MovieCard title="Batman" image="imagesrc"/>
      </Router>
    )
  }

  it('should match with snapshot', () => {
    expect(tree()).toMatchSnapshot();
   });

   it('test h3 text is Batman', () => {
     const { getByTestId } = tree();
     const element = screen.getByTestId('testH3')
     expect(element.textContent).toEqual("Batman")
     expect(element.textContent).not.toEqual("Wonder Woman")
     // screen.debug();
    });
  });
 