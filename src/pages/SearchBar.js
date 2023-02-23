import '../App.css';

export function SearchBar({ onTextChange, placeholder }) {
// function submit(e){
// if(e.key === "Enter" && e.target.value.trim() !== ""){
//     onSubmit(e.targer.value)
// }
// }
    return (
        <div className="search">
            <div className='search-bar'>
                <label for="site-search">Search Item</label>
                <input 
                 type="text"
                 onChange={(e) => onTextChange(e.target.value)} 
                 placeholder={placeholder} />
            </div>
        </div>
    );
}


