import React, {useState} from 'react'
import HeaderBar from './HeaderBar';
import CommandButton from "./CommandButton";
import UserInputForm from './UserInputForm';
import UsersTable from './UsersTable';
import { UserManagementContext } from "../context";

let initialState = [{
  "_id": "62d3f7d09171ea337b1a86c2",
  "username": "user3",
  "firstname": "kekec3",
  "lastname": "kekec3",
  "email": "John@john3.com",
  "created": "2022-07-17T11:51:44.509Z"
  },
    {
  "_id": "62d3fd1d9171ea337b1a86c4",
  "username": "borisd",
  "firstname": "Boris",
  "lastname": "Dezulovic",
  "email": "prvi@kralj.com",
  "created": "2022-07-17T12:14:21.246Z"
  },
    {
  "_id": "62d3fd259171ea337b1a86c6",
  "username": "zeljkom",
  "firstname": "Zeljko",
  "lastname": "Mihokovic",
  "email": "drugi@kralj.com",
  "created": "2022-07-17T12:14:29.310Z"
  },
    {
  "_id": "62d3fd2f9171ea337b1a86c8",
  "username": "ivanad",
  "firstname": "Ivana",
  "lastname": "Dragicevic",
  "email": "treca@kraljica.com",
  "created": "2022-07-17T12:14:39.231Z"
  },
    {
  "_id": "62d3fd3b9171ea337b1a86ca",
  "username": "ljuboj",
  "firstname": "Ljubo",
  "lastname": "Jurcic",
  "email": "cetvrti@kraljica.com",
  "created": "2022-07-17T12:14:51.111Z"
  },
    {
  "_id": "62d3fd439171ea337b1a86cc",
  "username": "renatob",
  "firstname": "Renato",
  "lastname": "Baricic",
  "email": "peti@kralj.com",
  "created": "2022-07-17T12:14:59.312Z"
  },
    {
  "_id": "62d3fd4c9171ea337b1a86ce",
  "username": "konstantinm",
  "firstname": "Konstantin",
  "lastname": "Mihajlov",
  "email": "sesti@kraljica.com",
  "created": "2022-07-17T12:15:08.183Z"
  },
    {
  "_id": "62d3fd539171ea337b1a86d0",
  "username": "misok",
  "firstname": "Miso",
  "lastname": "Kovac",
  "email": "sedmi@kraljica.com",
  "created": "2022-07-17T12:15:15.687Z"
  },
    {
  "_id": "62d3fd5c9171ea337b1a86d2",
  "username": "viktori",
  "firstname": "Viktor",
  "lastname": "Ivancic",
  "email": "osmi@kraljica.com",
  "created": "2022-07-17T12:15:24.944Z"
  },
    {
  "_id": "62d3fd649171ea337b1a86d4",
  "username": "dimitrijr",
  "firstname": "Dimitrij",
  "lastname": "Rogozin",
  "email": "deveti@king.com",
  "created": "2022-07-17T12:15:32.511Z"
  },
    {
  "_id": "62d3fd6c9171ea337b1a86d6",
  "username": "nickc",
  "firstname": "Nick",
  "lastname": "Cave",
  "email": "deseti@king.com",
  "created": "2022-07-17T12:15:40.616Z"
  },
    {
  "_id": "62d3fd749171ea337b1a86d8",
  "username": "miloradp",
  "firstname": "Milorad",
  "lastname": "Pupovac",
  "email": "jedanaesti@king.com",
  "created": "2022-07-17T12:15:48.447Z"
  },
    {
  "_id": "62d3fd7c9171ea337b1a86da",
  "username": "borisk",
  "firstname": "Boris",
  "lastname": "Kolic",
  "email": "dvanaesti@king.com",
  "created": "2022-07-17T12:15:56.951Z"
  },
    {
  "_id": "62d3fd859171ea337b1a86dc",
  "username": "nikolak",
  "firstname": "Nikola",
  "lastname": "Kutlerovac",
  "email": "trinaesti@king.com",
  "created": "2022-07-17T12:16:05.482Z"
  },
    {
  "_id": "62d3fd8e9171ea337b1a86de",
  "username": "marijanp",
  "firstname": "Marijan",
  "lastname": "Pohorski",
  "email": "cetrnaesti@queen.com",
  "created": "2022-07-17T12:16:14.889Z"
  },
    {
  "_id": "62d3fd969171ea337b1a86e0",
  "username": "werterj",
  "firstname": "Werter",
  "lastname": "Jad",
  "email": "petnaesti@queen.com",
  "created": "2022-07-17T12:16:22.248Z"
  },
    {
  "_id": "62d3fd9e9171ea337b1a86e2",
  "username": "dinom",
  "firstname": "Dino",
  "lastname": "Merlin",
  "email": "sesnaesti@queen.com",
  "created": "2022-07-17T12:16:30.035Z"
  },
    {
  "_id": "62d3fda79171ea337b1a86e4",
  "username": "sinisam",
  "firstname": "Sinisa",
  "lastname": "Mali",
  "email": "sedamnaesti@queen.com",
  "created": "2022-07-17T12:16:39.887Z"
  },
    {
  "_id": "62d3fdaf9171ea337b1a86e6",
  "username": "anerg",
  "firstname": "Aner",
  "lastname": "Gosto",
  "email": "osamnaesti@queen.com",
  "created": "2022-07-17T12:16:47.907Z"
  },
    {
  "_id": "62d3fdb89171ea337b1a86e8",
  "username": "dritana",
  "firstname": "Dritan",
  "lastname": "Abazovic",
  "email": "devetnaesti@queen.com",
  "created": "2022-07-17T12:16:56.234Z"
  },
    {
  "_id": "62d3fdc09171ea337b1a86ea",
  "username": "anab",
  "firstname": "Ana",
  "lastname": "Brnabic",
  "email": "dvadeseta@queen.com",
  "created": "2022-07-17T12:17:04.318Z"
  },
    {
  "_id": "62d3fdc99171ea337b1a86ec",
  "username": "dobrev",
  "firstname": "Dobre",
  "lastname": "Vijesti",
  "email": "dvadesetprvi@queen.com",
  "created": "2022-07-17T12:17:13.469Z"
  },
    {
  "_id": "62d3fdd29171ea337b1a86ee",
  "username": "novakd",
  "firstname": "Novak",
  "lastname": "Djokovic",
  "email": "dvadesetdrugi@silk.com",
  "created": "2022-07-17T12:17:22.064Z"
  },
    {
  "_id": "62d3fddb9171ea337b1a86f0",
  "username": "mickj",
  "firstname": "Mick",
  "lastname": "Jagger",
  "email": "dvadesettreci@silk.com",
  "created": "2022-07-17T12:17:31.017Z"
  }];


const Main = () => {



  const [state, setState] = useState(initialState);


  
  return (
    <UserManagementContext.Provider value={{state, setState}}>
    <div>
        <HeaderBar/>

        {/* <div style={{ marginTop: "50px", display: "flex" }}>
              
              <CommandButton name={"fa fa-trash"} />
              <CommandButton name={"fa fa-edit"} />
            </div> */}

        {/* <UserInputForm/> */}

        <UsersTable/>
        </div>
        </UserManagementContext.Provider>
  )
}

export default Main