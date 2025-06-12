import React from 'react';

export default function Select({ handleChange, value }) {
    return (
        <label>
            Category:
            <select name="category" onChange={handleChange} value={value}>
                <option value="smileys-and-people">Smileys & People</option>
                <option value="animals-and-nature">Animals & Nature</option>
                <option value="food-and-drink">Food & Drink</option>
                <option value="travel-and-places">Travel & Places</option>
                <option value="activities">Activities</option>
                <option value="objects">Objects</option>
                <option value="symbols">Symbols</option>
                <option value="flags">Flags</option>
            </select>
        </label>
    );
}
