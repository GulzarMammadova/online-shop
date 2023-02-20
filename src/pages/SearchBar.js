import '../App.css';

export function SearchBar() {

    return (
        <div className="search">
            <div className='search-bar'>
                <label for="site-search">Search Item</label>
                <input type="search" id="site-search" name="search" placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
            </div>
        </div>
    );
}


