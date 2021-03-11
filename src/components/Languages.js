import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const Languages = () => {
 const [computerLanguages,setComputerLanguages] = useState([
        {id:1,name:'Javascript'},                    
        {id:2,name:'NodeJs'},
        {id:3,name:'Express'},
        {id:4,name:'Python'}
    ]);
    const AddLanguage=(e)=>{
        e.preventDefault();
        setComputerLanguages([...computerLanguages,{id:id,name:'Java'}]);
    }
    const id = uuidv4();
    return (
        <div>
              <table className="table">
                  <thead className="bg-primary text-light">
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                      </tr>
                  </thead>
                    <tbody className="bg-dark text-white">
                        {computerLanguages.map(language => (
                            
                                <tr key={language.id}>
                                    <td>{language.id}</td>
                                    <td>{language.name}</td>
                                </tr>
                            
                        ))}
                    </tbody>
              </table>
              <input type="submit" className="btn btn-success" onClick={AddLanguage} value="Add Language"/>
        </div>
    )
}

export default Languages;


