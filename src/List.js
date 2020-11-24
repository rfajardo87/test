function List({listFilter}) {
    console.log(listFilter);
    return (
        <ul>
            {listFilter.map(item => <li key={`state_${item.id}`}>{item.name}</li>)}
        </ul>
    );
}

export default List;