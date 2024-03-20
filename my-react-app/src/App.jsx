import List from './List'

function App(){
  const fruits = [{id:1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 89},
                   {id: 3, name: "banana", calories:987},
                    {id:4, name: "coconut", claories: 78}]

const vegetables = [{id:5, name: "broccoli", calories: 95},
{id: 6, name: "nut", calories:987},
{id:7, name: "grain", claories: 78}]

return(
    <>
     <List items={fruits} category="Fruits"/>
     <List items={vegetables} category="Vegetables"/>
    
    </>
    
  )
}

export default App