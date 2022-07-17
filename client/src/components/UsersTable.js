import React, {useState, useMemo, useContext, useEffect, Fragment, useRef} from 'react'
import {AgGridReact} from 'ag-grid-react';
import { UserManagementContext } from '../context';
import CommandButton from "./CommandButton"; 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';




const UsersTable = () => {
    const gridRef = useRef();
    const {users} = useContext(UserManagementContext);

    const [gridUsers, setGridUsers] = useState([]);

    const getSelectedRowData = () => {
        let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map(node => node.data);
        alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
        return selectedData;
      };



    const TableButtons = (param)=>{

        
    
    
        // <CommandButton name={"fa fa-trash"} />
        // <CommandButton name={"fa fa-edit"}/>
    
        return (<Fragment>
            <div style={{ display: "flex" }}>
                  <button>Edit</button>
                  <button>delete</button>
                </div>
    
    
        </Fragment>)
    
    }

    // useEffect(() => {
    //   if (users){
    //     setGridUsers(users);
    //   }
    // }, [])
    
    useEffect(() => {
        if (users){
          setGridUsers(users);
        }
      }, [users])

      const SimpleComp = p => {
        const deleteUser = (p)=>{
            window.alert(p.value);
    }

    const createUser = (p)=>{
        window.alert(p.value);
    }
        
        return( <>
      <CommandButton name={"fa fa-trash"} onClick ={deleteUser}/>
        <CommandButton name={"fa fa-edit"}onClick ={createUser}/>
      </>)}

    const rowData = [
        {_id: 'Something', username: 'Username', firstname: 'First Name', lastname: 'Last Name'}
    ]
    const columnDefs = [
                        {field: '_id', cellRenderer: SimpleComp},
                        {field: 'username'},
                        {field: 'firstname'},
                        {field: 'lastname'}
                    ];

                    const defaultColumDefinition = useMemo(() => ({sortable: true, filter: true}), []);
  return (
    <div className='ag-theme-alpine' style={{height: 600 , width: 850}}>
    <AgGridReact ref={gridRef}
        rowData = {gridUsers}
        columnDefs = {columnDefs}
        defaultColDef = {defaultColumDefinition}
        animateRows = {true} />
    </div>
  )
}

export default UsersTable