import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Events from './Events';
import '@testing-library/jest-dom/vitest'
import {describe,it, expect} from 'vitest';


describe("Events screen component",() => {

    it("renders an event",() => {
        render(
        <MemoryRouter>    
        <Events />
        </MemoryRouter>
    )
        expect(screen.getByText("Future Of AI")).toBeInTheDocument();
        expect(screen.getByText("Building Scalable Solutions")).toBeInTheDocument();
    });
})
