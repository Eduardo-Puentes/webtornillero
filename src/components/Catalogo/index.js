import React, { useEffect, useState , useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import data from '../../data.json';
import "./styles.css"

const Catalogo = ({handleCount}) => {
    const [items, setItems] = useState([["0",0]])
    const [records, setRecords] = useState([]);

    const columns = useMemo(
        () => [
        {
            accessorKey: 'name',
            header: 'Nombre',
            size: 150,
        },
        {
            accessorKey: 'category',
            header: 'Categoría',
            size: 150,
        },
        {
            accessorKey: 'txt',
            header: 'Acción',
            size: 200,
            enableColumnActions: false,
            enableSorting: false,
        },
        ],
        [],
    );

    useEffect(() => {
        async function getRecords() {
            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin','http://localhost:3000');
            const response = await fetch(`https://serverwt.onrender.com/record/`,  {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                }});
    
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
    
            const records = await response.json();
            setRecords(records.map(row => {
                return {
                    id: row._id,
                    name: row.name,
                    category: 0,
                    txt: <>
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{addItem(row._id)}}>Añadir al Carrito</button>
                    </>
                }
            }));
        }
        getRecords();
        if (localStorage.getItem("cart") !== null && localStorage.getItem("cart") !== undefined){
            setItems(JSON.parse(localStorage.getItem("cart")))
        } 
        return
    }, [])
    

    const includesSearch = (e) => {
        console.log(items);
        for(let i = 0; i < items.length; i++) {
            console.log(items[i]);
            if (items[i][0] === e) {
                return i;
            }
        }
        return 0;
    }

    const addItem = (e) => {
        console.log(e);
        if(items) {
            const tmp = includesSearch(e);
            console.log(tmp);
            if (tmp !== 0) {
                items[tmp][1] = items[tmp][1]++;
                setItems(items => [...items])
                handleCount();
                return
            }
            else {
                setItems(items => [...items, [e,1]]);
                handleCount();
                return
            }
        }
    }

    useEffect(() => {
        if (items && items.length !== 1){
            localStorage.setItem("cart", JSON.stringify(items));
        }
        return
    }, [items])
    

    return (
        <>
        <MaterialReactTable columns={columns} data={records} enablePagination={true}
                localization={MRT_Localization_ES}/>
        <div>
            <div className="row m-0 my-2 row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">    
            </div>
        </div>
        </>
    )
}

export default Catalogo;