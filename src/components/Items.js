import Item from './Item';

export default function Items(props) {
  return (
    <main>
        {props.items.map((item) =>
            <Item 
              onShowItem = {props.onShowItem}
              key = {item.id} 
              item = {item} 
              onAdd = {props.onAdd}/>         
        )}
    </main>
  );
}
