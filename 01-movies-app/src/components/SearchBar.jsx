import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <header className='p-3 mb-3 border-bottom'>
      <div className='container navbar-expand-lg p-5 bg-purple rounded-3'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a href='/' className='d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none'>
            <svg className='bi me-2' width='40' height='32' role='img' aria-label='Bootstrap'><use xlinkHref='#bootstrap' /></svg>
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li><a href='/Overview' className='nav-link px-2 link-light'>Overview</a></li>
            <li><a href='/serie' className='nav-link px-2 link-body-emphasis'>Show main information</a></li>

          </ul>

          <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search' onSubmit={(event) => { event.preventDefault(); handleSearch() }}>
            <input type='search' className=' search-button form-control w-2 p-3 rounded-2' placeholder='Search...' aria-label='Search' value={search} onChange={(event) => { setSearch(event.target.value) }} />
          </form>

          <button
            className='search-button btn btn-dark'
            onClick={() => handleSearch(search)}
          >
            Search
          </button>

          <div className='dropdown text-end'>
            <a href='#' className='d-block link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
              <img src='https://github.com/YunuenAM.png' alt='mdo' width='94' height='94' className='rounded-circle' />
            </a>
            <ul className='dropdown-menu text-large'>
              <li><a className='dropdown-item' href='#'>Home</a></li>
              <li><a className='dropdown-item' href='#'>Profile</a></li>
              <li><a className='dropdown-item' href='#'>Series</a></li>
              <li><a className='dropdown-item' href='#'>Reviews</a></li>
              <li><a className='dropdown-item' href='#'>Watchlist</a></li>
              <li><hr className='dropdown-divider' /></li>
              <li><a className='dropdown-item' href='#'>Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
export default SearchBar
