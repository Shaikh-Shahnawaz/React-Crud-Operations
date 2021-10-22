
import AddModal from './AddModal'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import EditModal from './EditModal'

function Main() {

    // This is for modal hide and show
    const [showModal, setShowModal] = useState(false)

    // store get data   
    const [state, setState] = useState([])

    // delete data   
    const [deleted, setDeleted] = useState(false)

    // storing element id 
    const [elementId, setElementId] = useState()




    // ============function for getting the deatil via get request============

    function getInitialData() {

        axios.get('http://5.189.130.81:1337/restaurants').then((response) => {
            setState([...response.data])
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {

        getInitialData()

    }, [state, deleted])

    // =========function for adding the detail via post request=========

    function addName(data) {

        const payload = { name: data }

        // const userData = {
        //     "name": (Math.random() + 1).toString(36).substring(7),
        // }

        axios.post('http://5.189.130.81:1337/restaurants', payload).then((res) => {

            console.log("api data", res.data)

            setState([...res.data])

        }).catch((err) => {
            console.log(err)
        })

    }
    // ===========function for edit the detail===========


    function editName(data) {

        const payload = { name: data }
        axios.put(`http://5.189.130.81:1337/restaurants/${elementId}`, payload).then((res) => {

            setShowModal(false);
            setState([...res.data])

        }).catch((err) => {
            console.log(err)
        })

    }

    function editModalOpen(id) {
        // debugger;
       setShowModal(true) // for modal to show

        setElementId(id) // set the element id

    }


    // ======== function for Modal =========

    function modalInEdit(mShow) {

        setShowModal(mShow)
    }

    function handleModalClose(){
        setShowModal(false)
    }

    // ==========function for deleting the detail==========

    function deleteName(id) {

        axios.delete(`http://5.189.130.81:1337/restaurants/${id}`).then((res) => {
            console.log(res)
            setDeleted(!deleted)
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <div>


            <h1 className="bg-dark text-light py-2 mb-3">This is Crud Operation Using Axios</h1>
            {/* =========[ Add Modal ]========= */}

            <AddModal addName={addName} />

            {/* ============================[ Table ]============================ */}
            <div className="container" >
                <table class="table table-hover mt-2">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PUBLISHED AT</th>
                            <th scope="col">UPDATED AT</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* debugger; */}
                        {

                            state.map((element) => (

                                <tr>
                                    <th scope="row">{element.id}</th>
                                    <td>{element.name}</td>
                                    <td>{element.published_at}</td>
                                    <td>{element.updated_at}</td>

                                    <td><button type="button" onClick={() => editModalOpen(element.id)} className="btn btn-warning">Edit</button></td>

                                    <td><button type="button" onClick={() => deleteName(element.id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))

                        }

                    </tbody>
                </table>

            </div>

            {/* ============================[ Table End ]============================ */}


            <EditModal handleModalClose={handleModalClose} modalInEdit={modalInEdit} showModal={showModal} editName={editName} />


        </div>
    )
}

export default Main
