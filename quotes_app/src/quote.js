const Quote = {
    props: [
        'context', 
        'quote', 
        'source', 
        'theme'
    ],
    methods: {
        applyThemeColor(theme) {
            if (theme === 'movies') {
                return {
                    backgroundColor: '#0E788F'
                }
            } else {
                return {
                    backgroundColor: '#b28900'
                }
            }
        },
    },
    template: `
     <transition name="slide-fade">
        <div class="quote-card">
            <div id="card-header" class="simple-flex" :style="applyThemeColor(theme)">
                <div><h3>{{ theme.toUpperCase() }}</h3></div>
                <div id="context-source"><h3>{{ context }} - {{ source }}</h3></div>
            </div>
            <div id="card-body">
                <p>{{ quote }}</p>
            </div>
        </div>
    </transition>
    `,
    
};

export default Quote;
