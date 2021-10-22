import {useEffect, useState} from 'react' //https://reactjs.org/docs/hooks-state.html

const width = 10
const avengers = ['ironman', 'cap', 'hulk', 'thor', 'widow', 'hawkeye']

const App = () => {//functional expression

  //use setCurrentAvenger to set the value of currentAvenger, this assigns the values of the randomAvengerArray to currentAvenger later in the code
  const [currentAvenger, setCurrentAvenger] = useState([])


  const createBoard = () => {
    const randomAvengerArray = []
    for(let i = 0; i < width*width; i++){
      const randomAvengerFromArray = Math.floor(Math.random() * avengers.length)
      const randomAvenger = avengers[randomAvengerFromArray]
      randomAvengerArray.push(randomAvenger)
    }

    setCurrentAvenger(randomAvengerArray)
    //console.log(randomAvengerArray)
  }

  useEffect(() => {//useEffect performs side effects in a function component
    createBoard()
  }, [])//the empty array, without any deps, makes useEffect run once



  console.log(currentAvenger)

  return (
    <div>

    </div>
  )
}

export default App;
