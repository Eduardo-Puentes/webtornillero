import React, { useEffect, useState , useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
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

    const addItem = (e) => {
        console.log(items);
        console.log(1);
        console.log(e);
        const tmp = includesSearch(e);
        console.log(tmp);
        if (tmp !== 0) {
            const updatedItems = [...items]
            updatedItems[tmp][1]++;
            setItems(updatedItems)
            handleCount();
        }
        else {
            handleCount();
            setItems(items => [...items, [e,1]]);
        }
    }
    

    const includesSearch = (e) => {
        for(let i = 0; i < items.length; i++) {
            if (items[i][0] === e) {
                return i;
            }
        }
        return 0;
    }

    

    useEffect(() => {
        if (items && items.length !== 1){
            localStorage.setItem("cart", JSON.stringify(items));
        }
        return
    }, [items])
    

    useEffect(() => {
        async function getRecords() {
            try {
                const response = await fetch(`http://localhost:5050/record/`);
        
                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }
        
                const records = await response.json();
                setRecords(records);
            }
            catch (err) {
                console.log(err);
            }
        }
        getRecords();
        if (localStorage.getItem("cart") !== null && localStorage.getItem("cart") !== undefined){
            setItems(JSON.parse(localStorage.getItem("cart")))
        } 
        return
    }, [])
    

    return (
        <>
        <MaterialReactTable columns={columns} data={records.map(row => {
            return {
                id: row._id,
                name: row.name,
                category: 0,
                txt: <>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{addItem(row._id)}}>Añadir al Carrito</button>
                </>
            }
        })} enablePagination={true}
                localization={MRT_Localization_ES}/>
        <div>
            <div className="row m-0 my-2 row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">    
            </div>
        </div>
        </>
    )
}

export default Catalogo;