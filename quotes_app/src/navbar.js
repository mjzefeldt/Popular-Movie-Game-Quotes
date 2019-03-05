const Navbar = {
    props: [
        'handlequotesearch'
    ],
    data: function() {
        return {
            header: "Movie & Game Quotes",
        }
    },
    template: `
        <header id="header" class="simple-flex">
            <div>
                <h1>{{ header }}</h1>
            </div>
            <div class="simple-flex" id="search-container">
                <div>
                    <label for="search-quote">Search Quotes</label>
                </div>
                <div>
                    <input type="text" id="search-quote" @input="handlequotesearch" placeholder="Quote text...">
                </div>
            </div>
        </header>
    `
}

export default Navbar
