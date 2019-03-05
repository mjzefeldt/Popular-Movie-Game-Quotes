import PaginatedComponent from './paginated-view.js'
import ThemeFilter from './theme-filter.js'
import Navbar from './navbar.js'

const vm = new Vue({
  el: '#app',
  components: {
    'navbar-component': Navbar,
    'paginated-component': PaginatedComponent,
    'theme-filter-component': ThemeFilter,
  },
  data: {
    header: "Movie & Game Quotes",
    quotesLoaded: 0,
    quotes: [],
    filterOption: 'all',
    quoteSearch: '',
  },
  created: function() {
    this.fetchQuotes();
  },
  computed: {
    filterTheme() { 
      return this.filterOption === 'all' ? 
        this.quotes
      : 
        this.quotes.filter(quote => quote.theme === this.filterOption);
    },
    filterQuoteText() { // composed from filterTheme - pass into paginated-component as props
      return this.filterTheme.filter(quote => quote.quote.toLowerCase().match(this.quoteSearch.toLowerCase()));
    },
  },
  methods: {
    fetchQuotes() {
      const quotesSource = 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json';
      axios.get(quotesSource)
        .then((res) => {
          vm.quotes = res.data;
          vm.quotesLoaded = res.data.length;
        })
        .catch((err) => {
          console.error(err)
          vm.quotesLoaded = 0;
        });
    },
    handlethemechange(event) {
      event.preventDefault;
      vm.filterOption = event.target.value;
    },
    handlequotesearch(event) {
      vm.quoteSearch = event.target.value
    },
  }
})

export default vm;
