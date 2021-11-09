import React from 'react';


const Search = ( {inputText, setInputText, todos, setTodos}) => {

const inputHandler = (e) => {
setInputText(e.target.value)
}

const addInput = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, 
        {text: inputText, completed: false}]);
    setInputText('')

    if (inputText=== ''){
        setTodos([...todos])
    }

}

return (
    <form>
        <input value={inputText} onChange={inputHandler} type='text'/>
        <button type='submit' onClick={addInput}>add</button>
        <div>
<select>
    <option value='all'>All</option>
    <option value='bought'>Bought</option>
    <option value='missing'>Missing</option>
    
</select>
        </div>
    </form>
)
}

export default Search; 