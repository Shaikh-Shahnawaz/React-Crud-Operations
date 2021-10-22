import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Button from '@mui/material/Button';
import AddEditModal from './AddEditModal';

// https://github.com/shubhamdixit863/crudoperation/blob/master/src/components/AddEditModal.js

function View() {
    // ==========================material ui table==========================
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'name', headerName: 'Restarurant name', width: 230 },
        { field: 'published_at', headerName: 'Published At', width: 230 },
        {
            field: 'created_at',
            headerName: 'Created At',
            width: 230,
        },
        {
            field: 'updated_at',
            headerName: 'Updated At',

            width: 230,
        },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: (params) => {


                return <Button variant="contained">Edit</Button>
            },

        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) => {


                return <Button variant="outlined">Delete</Button>
            },

        }
    ];

    // ==========================material ui table end==========================

    // material ui function for popUp modal

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [state, setState] = useState([])

    function createRestaurant(data) {
        const payload = { name: data }
        axios.post('http://5.189.130.81:1337/restaurants', payload).then((res) => {


            setOpen(false); // yeh material ui ka hai

        }).catch((err) => {
            console.log(err)
        })
    }

    function getInitialData() {

        axios.get('http://5.189.130.81:1337/restaurants').then((res) => {

            console.log(res.data)
            setState([...res.data])

        }).catch((err) => {
            console.log('Error', err)
        })
    }

    useEffect(() => {
        getInitialData()

    }, [open])

    function deleteData() {

    }


    return (
        <>
            <h1>Material Ui Table</h1>

            <div style={{ height: 800, width: '100%', marginTop: 100 }}>
                
                <Button variant="contained" onClick={handleOpen} color="success" style={{ marginBottom: "50px" }}>
                    Create Restaurant
                </Button>
                <DataGrid
                    rows={state}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />

                <AddEditModal createRestaurant={createRestaurant} handleClose={handleClose} handleOpen={handleOpen} open={open} />

            </div>
        </>
    )
}

export default View
