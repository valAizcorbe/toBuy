import React from 'react'

const Search = ( {setInputText} ) => {

const inputHandler = (e) => {
setInputText(e.target.value)
}

return (
    <form>
        <input onChange={inputHandler} type='text'/>
        <button type='submit'>add</button>
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