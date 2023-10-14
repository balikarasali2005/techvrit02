// import React from 'react'
import Table from 'react-bootstrap/Table';

const Students = ({Students})=>{
    const tableHeaders=Object.keys(Students[0]);
function abc(){
    const nums =[1,2,3,4,5];
    nums.forEach((num)=>{
        console.log(num)
    })
}
const displayTableObjectData=(data)=>{
<Table striped bordered hover>
    <thead>
        <tr>
            {tableHeaders.map((headers)=>{
                return <th key={headers}>{headers.toUpperCase()}</th>
            })}
        </tr>
    </thead>
    <tbody>
{
    Students.map((student,index)=>{
return( 
<tr key={student.id}>
    {Object.values(student[index]).map((value)=>{
    return ( <td key={value}>
    {/* {JSON.stringify(value)} */}
    {typeof value ==="object" ? displayTableObjectData(value) :value}
    </td>
    );
    })}
</tr>
)
})}
</tbody>
</Table>
}
};
export default Students