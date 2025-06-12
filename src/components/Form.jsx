export default function Form({ handleSubmit, handleChange, isFirstRender }) {
    return (
        <form onSubmit={handleSubmit} className="game-form">
            <div>
                <label htmlFor="category">🎯 Choose category:</label>
                <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    defaultValue="animals-and-nature"
                >
                    <option value="animals-and-nature">Animals & Nature</option>
                    <option value="food-and-drink">Food & Drink</option>
                    <option value="travel-and-places">Travel & Places</option>
                    <option value="smileys-and-people">Smileys & People</option>
                    <option value="objects">Objects</option>
                </select>
            </div>

            <div>
                <label htmlFor="number">🃏 Number of Cards:</label>
                <select
                    name="number"
                    id="number"
                    onChange={handleChange}
                    defaultValue="10"
                >
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>

            <button type="submit">
                {isFirstRender ? "Start Game" : "Restart Game"}
            </button>
        </form>
    );
}
