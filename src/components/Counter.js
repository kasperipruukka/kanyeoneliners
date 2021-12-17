import useQuotes from "../useQuotes";

const Counter = () => {
    const {totalCount, filteredCount} = useQuotes();

    return(
        <div>
            <p>Total quote count: {totalCount}</p>
            <p>Quotes in view: {filteredCount}</p>
        </div>
    );
}

export default Counter;