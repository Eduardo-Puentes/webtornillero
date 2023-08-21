import React, { useEffect, useState , useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import data from '../../data.json';
import "./styles.css"

const Catalogo = ({handleCount}) => {
    const [items, setItems] = useState([[0,0]])
    const [id, setId] = useState(0)

    const products = data.map(row => {
        return {
            id: row.id,
            name: row.name,
            length: row.length,
            price: row.price,
            category: row.category,
            txt: <>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{setId(row.id); addItem(id)}}>Añadir al Carrito</button>
            </>
        }
    });

    const columns = useMemo(
        () => [
        {
            accessorKey: 'name',
            header: 'Nombre',
            size: 150,
        },
        {
            accessorKey: 'length',
            header: 'Dimensiones',
            size: 150,
        },
        {
            accessorKey: 'category',
            header: 'Categoría',
            size: 150,
        },
        {
            accessorKey: 'price',
            header: 'Precio',
            size: 200,
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
        if (localStorage.getItem("cart") !== null && localStorage.getItem("cart") !== undefined){
            setItems(JSON.parse(localStorage.getItem("cart")))
        }
    }, [])
    

    const includesSearch = (e) => {
        for(let i = 0; i < items.length; i++) {
            if (items[i][0] === e) {
                return i+1;
            }
        }
        return 0;
    }

    const addItem = (e) => {
        console.log(e);
        if(items) {
            const tmp = includesSearch(e+1);
            if (tmp !== 0) {
                items[tmp-1][1] = items[tmp-1][1] + 1
                setItems(items=>[...items])
                handleCount();
            }
            else {
                setItems(items => [...items, [e+1,1]]);
                handleCount();
            }
        }
    }

    useEffect(() => {
        if (items && items.length !== 1){
            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items])
    

    return (
        <>
        <MaterialReactTable columns={columns} data={products} enablePagination={true}
                localization={MRT_Localization_ES}/>
        <div>
            <div className="row m-0 my-2 row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">    
            </div>
        </div>
        </>
    )
}

export default Catalogo;