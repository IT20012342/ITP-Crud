import React, { useEffect } from "react";
import axios from "axios";



export default function DeleteOrder({ id }) {

    //alert(id);

    useEffect(() => {
        function deleteOrder() {
            axios
                .delete(`http://localhost:8080/upcomingorder/delete/${id}`)
                .then(res => {
                    console.log(res);
                    alert('Delete successfull')

                }).catch(err => {
                    alert(err.message);
                })
        }
        deleteOrder();

    }, [id])


    return (
        <>
        </>
    )
}