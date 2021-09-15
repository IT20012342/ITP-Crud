import React, { useEffect } from "react";
import axios from "axios";



export default function DeleteSupplier({id}) {

    //alert(id);

    useEffect(() => {
        function delSupplier() {
            axios
            .delete(`http://localhost:8080/supplier/delete/${id}`)
            .then(res => {
                console.log(res);
                alert('Delete successfull')
                
            }).catch(err => {
                alert(err.message);
            })
        }
        delSupplier();
      
    },[id])  


    return (
            <>
            </>
    )
}