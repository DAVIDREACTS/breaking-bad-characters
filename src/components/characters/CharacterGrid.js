import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/spinner';

const CharacterGrid = ({ items,isLoading }) => { //cards is a grid
    return isLoading ? <Spinner /> : <section className="cards">
        {items.map(item => ( //show names in list (map)
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharacterGrid;
