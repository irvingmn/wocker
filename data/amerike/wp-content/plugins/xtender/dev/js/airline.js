if (typeof(document.getElementById("xtd-search-flight")) != 'undefined' && document.getElementById("xtd-search-flight") != null){

  Vue.component('v-select', VueSelect.VueSelect);

  var xtenderSearchFlight = new Vue({
    el: '#xtd-search-flight',
    data: function(){
      var empty_leg = {
        from: null,
        to: null,
        date: '',
        pax: 2
      };
      return {
        empty_leg: empty_leg,
        legs: [ JSON.parse( JSON.stringify( empty_leg ) ) ],
        requirements: '',
        requirements_visibility: false,
        return_flight: true,
        options: [],
        loading: '',
        modal: false,
        modal_visibility: false
      }
    },
    mounted:function(){
      this.mountFlatPickrs(0);
      if( this.$el.className.indexOf('modal') >= 0 ){
        this.modal = true;
      }
    },
    watch: {
      modal_visibility: function(v){
        if( v ){
          this.$el.className += ' xtd-search-flight--modal-opened';
        } else{
          this.$el.className = this.$el.className.replace(' xtd-search-flight--modal-opened', '');
        }
      }
    },
    methods: {
      isSearchDisabled: function(){
        var vm = this;
        var out = true;
        _.each( vm.legs, function(o){
          if( out === true && o.from !== null && o.to !== null && o.date.length > 1 && o.pax > 0  ){
            out = false;
          }
        });
        return out;
      },
      searchFlights: function(){
        var vm = this;
        var flight_log = leg = '';
        _.each( vm.legs, function(o){
          leg  = '';
          leg += o.from.value + ' | ' + o.from.label + ' | ' + o.from.location + ' >>> ';
          leg += o.to.value + ' | ' + o.to.label + ' | ' + o.to.location + ' | ' + o.date + ' | PAX: ' + o.pax + '\n';
          flight_log += leg + '\n';
        });
        window.location.href = this.$el.dataset.url + "?" + this.$el.dataset.query + '=' + encodeURIComponent(flight_log);
      },
      deleteRequirements: function(){
        this.requirements_visibility = false;
        this.requirements = '';
      },
      deleteLeg: function(id){
        var vm = this;
        var out = [];
        _.each(vm.legs, function(val, key){
          if( id !== key ){
            out.push(val);
          }
        });
        vm.legs = out;
      },
      onChangePax: function( ev, id ){
        var vm = this;
        if( isNaN( parseInt( vm.legs[id].pax ) ) || vm.legs[id].pax < 1 ){
          vm.legs[id].pax = 1;
        }
      },
      mountFlatPickrs: function(id){
        var vm = this;
        setTimeout(function(){
          flatpickr( vm.$refs['flatpikr_' + id][0],{
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            time_24hr: true,
            minDate: Date.now()
          });
        }, 500);
      },
      addReturn: function(){
        var vm = this;
        vm.legs.push( vm.empty_leg );
        vm.return_flight = false;
        this.mountFlatPickrs(vm.legs.length-1);
      },
      addRequirements: function(){
        var vm = this;
        vm.requirements_visibility = true;
      },
      addFlight: function(){
        var vm = this;
        vm.legs.push( JSON.parse( JSON.stringify( vm.empty_leg ) ) );
        this.mountFlatPickrs(vm.legs.length-1);
      },
      onSearch: function(search, loading){
        if( search.length > 2 ){
          loading(true);
          this.search(loading, search, this);
        }

      },
      search: _.debounce(function(loading, search, vm){
        search = search.split(' ').join('-');
          var url = window.xtenderAirline.rest_url.substr(0, window.xtenderAirline.rest_url.indexOf( '/xtender/v1/airports/' ) + 21 )
          var suffix = window.xtenderAirline.rest_url.substr( window.xtenderAirline.rest_url.indexOf( '/xtender/v1/airports/' ) + 21, -1 )
        this.$http.get( url+ encodeURIComponent(search) + suffix, {}).then(function(r){
          var vm = this;
          vm.options = r.body;
          loading(false);
        }, function(r){
          loading(false);
        });
      }, 700 ),
    }
	});
};
