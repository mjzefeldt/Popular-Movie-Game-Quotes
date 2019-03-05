import Quote from './quote.js';

const PaginatedComponent = {
    props: [
        'quotes',  
    ],
    components: {
        'quote': Quote,
    },
    data: function() {
        return {
            pageNum: 1,
            maxNumQuotes: 5,
        }
    },
    computed: {
        pageCount() {
            let totalQuotes = this.quotes.length;
            let size = this.maxNumQuotes;
            this.pageNum = 1; // reset to first pg when quote list changes with theme change
            return Math.ceil(totalQuotes/size);
          },
          paginatedQuotes() {
            let lastPgQuote = this.pageNum * this.maxNumQuotes;
            let firstPgQuote = lastPgQuote - this.maxNumQuotes;
            return this.quotes.slice(firstPgQuote, lastPgQuote);
          }, 
    },
    methods: {
        nextPage() {
            this.pageNum++;
          },
          prevPage() {
            this.pageNum--;
          },
    },
    template: `
        <div>
            <div id="quote-list-wrapper">
                <ul>
                    <li v-for="quote in paginatedQuotes" :key=quote.quote>  
                        <quote
                            v-bind:context="quote.context"
                            v-bind:quote="quote.quote"
                            v-bind:source="quote.source"
                            v-bind:theme="quote.theme"
                        ></quote>
                    </li>
                </ul>
            </div>
            <div id="pagination-buttons">
                <button class="button" @click="prevPage" :disabled="pageNum === 1">< Prev</button>
                <button id="next-btn" class="button" @click="nextPage" :disabled="pageNum === pageCount || quotes.length === 0">Next ></button>
            </div>
        </div>
        `
};

export default PaginatedComponent;
