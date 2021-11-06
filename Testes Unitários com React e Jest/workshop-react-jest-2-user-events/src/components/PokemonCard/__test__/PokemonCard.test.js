import React from 'react';
import { render } from '@testing-library/react';
import PokemonCard from '../PokemonCard';
import { cardBuilder } from "../../../__mocks__/card-builder"

const setup = ({ card, onClick }) => {
    const defaultCard = card || cardBuilder();

    const renderResult = render(<PokemonCard {...defaultCard} onLick={onClick} />);

    return {
        ...renderResult,
        defaultCard,
        image: renderResult.getByAltText(`${defaultCard.id}-${defaultCard.name}`)
    }
};

describe('PokemonCard', () => {
    test('should render with default props', () => {
        const { container, image } = setup({});

        expect(container).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });

    // test('should emit onClick event', () => {
    //     const onClick = jest.fn();

    //     const {image} = setup({onClick});

    //     image.click();

    //     fireEvent.click(image);

    //     expect(onClick).toHaveBeenCalledTimes(1);
    // });
});