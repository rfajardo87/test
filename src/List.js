function List({listFilter}) {
    return (
        <ul>
            {listFilter.map(item => <li>{item}</li>)}
        </ul>
    );
}

export default List;