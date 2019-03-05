const ThemeFilter = {
    props: [
        'handlethemechange',
    ],
    template: `
        <div id="theme-card">
            <div class="theme-card-padding">
                <h2>Theme</h2>
            </div>
            <div class="theme-card-padding">
                <div class="filter-element">
                    <input type="radio" id="all" name="theme" value="all" checked @change="handlethemechange">
                    <label for="all">All</label>
                </div>
                <div class="filter-element">
                    <input type="radio" id="movies" name="theme" value="movies" @change="handlethemechange">
                    <label for="movies">Movies</label>
                </div>
                <div class="filter-element">
                    <input type="radio" id="games" name="theme" value="games" @change="handlethemechange">
                    <label for="games">Games</label>
                </div>
            </div>
        </div>
    `
};

export default ThemeFilter;
