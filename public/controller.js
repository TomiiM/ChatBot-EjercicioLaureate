

$(document).ready(()=>{
    // $('#contenido').html(
    //     '<table>'+
    //         '<thead>'+
    //             '<tr>'+
    //                 '<th>Nombre</th>'+
    //                 '<th>Apellido</th>'+
    //                 '<th>Nacionalidad</th>'+
    //             '</tr>'+
    //         '</thead>'+
    //         '<tbody id="usuariosTable">'+
    //         '</tbody>'+
    //     '</table>'
    // )
    // getUsuarios()
})

// function getUsuarios(){
//     $.ajax({
//         url:'/usuarios',
//         type:'get',
//         datatype: 'json',
//         success:(res)=>{
//             var content= ''
//             for (let index = 0; index < res.length; index++) {
//                 const element = res[index];
//                 contenido +=
//                 '<tr>' + 
//                     '<td>' + element.nombre +'</td>'+
//                     '<td>' + element.apellido +'</td>'+
//                     '<td>' + element.nacionalidad +'</td>'+
//                 '</tr>'
//             }
//             $('#usuariosTable').html(contenido)
//         }



//     })
// }