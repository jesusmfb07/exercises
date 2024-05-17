interface Person {
    firsName: string;
    lastName: string;
    age: number; 
    address:{
        country:string;
        houseN:number
    }
}

 
 
 export const ObjectLiteral = () => {
   const person: Person = {
        firsName: "fernanodo",
        lastName: "herrera",
        age: 43,
       address: {
           country: "Canada",
           houseN: 615
       }
   }
 
    return (
        <>
        <h3>Objetos literales</h3>
        <pre>{JSON.stringify(person,null,2)}</pre>
        
        
        </>
    
  )
}

export default ObjectLiteral
