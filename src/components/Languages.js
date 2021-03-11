import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import InputHook from './InputHook';


const Languages = () => {
 const [computerLanguages,setComputerLanguages] = useState([
        {id:1,name:'Javascript',email:'example@gmial.com'},                    
        {id:2,name:'NodeJs',email:'example@gmial.com'},
        {id:3,name:'Express',email:'example@gmial.com'},
        {id:4,name:'Python',email:'example@gmial.com'}
    ]);
    // const [name,setName] = useState("");
    const [name,setName,clearName] = InputHook("");
    const [email,setEmail,clearEmail] = InputHook();

    // const inputHandle = (e) => {
    //     setName(e.target.value);
    // }

    const AddLanguage=(e)=>{
        e.preventDefault();
        setComputerLanguages([...computerLanguages,{id:id,name:name,email:email}]);
        clearName("");
        clearEmail("");
    }
    const id = uuidv4();
    return (
        <div>
              <table className="table">
                  <thead className="bg-primary text-light">
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                      </tr>
                  </thead>
                    <tbody className="bg-dark text-white">
                        {computerLanguages.map(language => (
                            
                                <tr key={language.id}>
                                    <td>{language.id}</td>
                                    <td>{language.name}</td>
                                    <td>{language.email}</td>
                                </tr>
                            
                        ))}
                    </tbody>
                    </table>
                    <form onSubmit={AddLanguage}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        onChange={setName}
                        placeholder="Add Language..."/>
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={setEmail} placeholder="Email..." className="form-control"/>
                    </div>
                    <div className="form-group">

                
              
            <input type="submit" className="btn btn-success"  value="Add Language"/>
              </div>
              </form>
        </div>
    )
}

export default Languages;


