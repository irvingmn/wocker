<?php

class xtenderAirlineShortcodeSearchFlight{

  function __construct(){

    add_shortcode( 'xtd-search-flight', array( $this, 'search_flight_shortcode' ));

    add_action( 'wp_enqueue_scripts', array( $this, 'load_assets' ), 20);

    add_action( 'rest_api_init', function () {
      register_rest_route( 'xtender/v1', '/airports/(?P<id>[a-zA-Z0-9-%-+]+)', array(
        'methods' => 'GET',
        'callback' => array( $this, 'search_airports' ),
      ) );
    });

  }

  function search_airports( WP_REST_Request $request ){
    $search = isset( $request['id'] ) ? urldecode( esc_html( $request['id'] ) ) : '' ;
    if( empty( $search ) ) return false;

    $search = str_replace('-', ' ', $search );

    $request = wp_remote_get( XTENDER_URL . 'assets/front/json/airports.json'  );

    if( is_wp_error( $request ) ) {
      return false;
    }

    $body = wp_remote_retrieve_body( $request );
    $data = json_decode( $body );

    $search = strtolower($search);
    $matches = $content = array();
    foreach($data as $k => $v) {

      //$content[] = $v->icao . '±' . $v->name . '±' . $v->city . ', ' . $v->country;

        if( preg_match("/$search/i", strtolower($v) )) {
          $val = explode('±', $v);
          $matches[] = array(
            'value' => $val[0],
            'label' => $val[1],
            'location' => $val[2]
          );
        }
    }
    /*
    $content = json_encode( $content );
    $fp = fopen( XTENDER_PATH . "assets/front/json/airports_new.json", "wb" );
    fwrite($fp,$content);
    fclose($fp);*/

    return new WP_REST_Response( $matches, 200 );

  }

  function load_assets(){

    global $post;

    if( isset($post->post_content) && ! has_shortcode( $post->post_content, 'xtd-search-flight' ) ) return;

    wp_enqueue_style(
			'flatpickr',
			  XTENDER_URL . 'dev/libs/flatpickr/flatpickr.min.css',
			array( 'jet-one-style' ), rand(), 'all'
		);

    wp_enqueue_style(
			'airline',
			 XTENDER_URL . 'assets/front/css/airline.css',
			array( 'jet-one-style', 'flatpickr' ), rand(), 'all'
		);

    if( ! wp_script_is( 'registered', 'vue-js' ) ){
      wp_register_script(
  			'vue-js',
  			XTENDER_URL .'dev/libs/vue/' . ( WP_DEBUG ? 'vue.js' : 'vue.min.js' ),
  			array( 'jquery' ),
  			null,
  			true
  		);
    }

    if( ! wp_script_is( 'registered', 'lodash' ) ){
      wp_register_script(
  			'lodash',
  			XTENDER_URL .'dev/libs/lodash/lodash.min.js',
  			array( 'jquery' ),
  			null,
  			true
  		);
    }

    if( ! wp_script_is( 'registered', 'vue-resource' ) ){
      wp_register_script(
  			'vue-resource',
  			XTENDER_URL .'dev/libs/vue/vue-resource.min.js',
  			array( 'jquery' ),
  			null,
  			true
  		);
    }

    if( ! wp_script_is( 'registered', 'flatpickr' ) ){
      wp_register_script(
  			'flatpickr',
  			XTENDER_URL .'dev/libs/flatpickr/flatpickr.js',
  			array( 'jquery' ),
  			null,
  			true
  		);
    }

    wp_register_script(
      'vue-select',
      XTENDER_URL .'dev/libs/vue/vue-select.js',
      array( 'jquery' ),
      null,
      true
    );

    wp_enqueue_script(
      'airline',
      XTENDER_URL . 'assets/front/js/airline-min.js',
      array( 'jquery', 'jet-one-scripts', 'vue-js', 'vue-select', 'lodash', 'vue-resource', 'flatpickr' ),
      wp_validate_boolean( WP_DEBUG ) ? rand() : rand(),
      true
    );

    wp_localize_script( 'airline', 'xtenderAirline', array(
        'rest_url' => get_rest_url(null, '/xtender/v1/airports/')
    ));

  }

  function search_flight_shortcode( $atts, $content = null ){

    $atts = shortcode_atts( array(
      'from_label'	=> 'From',
      'from_placeholder' => 'Departure Airport',
      'to_label'	=> 'To',
      'to_placeholder' => 'Destination Airport',
      'date_label' => 'Date',
      'date_placeholder' => 'Choose date & time',
      'passengers_label' => 'Passengers',
      'requirements_label' => 'Requirements',
      'requirements_placeholder' => 'enter special req here',
      'url' => get_permalink(),
      'query' => 'flight_info',
      'return_label' => 'Add Return',
      'add_flight_label' => 'Add Flight',
      'search_label' => 'Search',
      'add_requirements_label' => 'Add Requirements',
      'search_for_airport_label' => 'Search for airport',
      'modal' => false,
      'modal_text' => '',
      'modal_desc' => ''
    ), $atts, 'xtd-search-flight' );

    extract( $atts );

    $url = esc_url_raw( $url );

    ob_start();

    ?>
    <div id="xtd-search-flight" v-cloak data-url="<?php echo esc_attr( $url ) ?>" data-query="<?php echo esc_attr( $query ) ?>" class="xtd-search-flight__wrapper <?php echo wp_validate_boolean( $modal ) ? 'xtd-search-flight--modal' : '' ?>">
      <form class="xtd-search-flight">
        <div v-for="(leg, index) in legs" :key="index" class="xtd-search-flight__leg">
          <div class="xtd-search-flight__from">
            <label><?php echo esc_html( $from_label ) ?></label>
            <v-select v-model="legs[index].from" :filterable="false" :options="options" @search="onSearch" placeholder="<?php echo esc_html( $from_placeholder ) ?>" label="name">
              <template slot="no-options">
                <?php echo esc_html( $search_for_airport_label ) ?>
              </template>
              <template slot="option" scope="scope">
                <div class="d-center xtd-search-flight__airport-select">
                  {{ scope.label }}
                  <small>{{ scope.location }} </small>
                  </div>
              </template>
              <template slot="selected-option" scope="scope">
                <div class="selected d-center xtd-search-flight__airport-select xtd-search-flight__airport-select--selected">
                  {{ scope.label }}
                  <small>{{ scope.location }} </small>
                </div>
              </template>
            </v-select>
          </div>
          <div class="xtd-search-flight__to">
            <label><?php echo esc_html( $to_label ) ?></label>
            <v-select v-model="legs[index].to" :filterable="false" :options="options" @search="onSearch" placeholder="<?php echo esc_html( $to_placeholder ) ?>" label="name">
              <template slot="no-options">
                <?php echo esc_html( $search_for_airport_label ) ?>
              </template>
              <template slot="option" scope="scope">
                <div class="d-center xtd-search-flight__airport-select">
                  {{ scope.label }}
                  <small>{{ scope.location }} </small>
                  </div>
              </template>
              <template slot="selected-option" scope="scope">
                <div class="selected d-center xtd-search-flight__airport-select xtd-search-flight__airport-select--selected">
                  {{ scope.label }}
                  <small>{{ scope.location }} </small>
                </div>
              </template>
            </v-select>
          </div>
          <div class="xtd-search-flight__date">
            <label><?php echo esc_html( $date_label ) ?></label>
            <input :ref="'flatpikr_' + index" type="text" class="form-control" v-model="legs[index].date" placeholder="<?php echo esc_html( $date_placeholder ) ?>">
          </div>
          <div class="xtd-search-flight__pax">
            <label><?php echo esc_html( $passengers_label ) ?></label>
            <input type="number" class="form-control form-control-lg"  v-model="legs[index].pax" v-on:change="onChangePax($event, index)" placeholder="0">
          </div>
          <div v-if="index > 0" class="xtd-search-flight__remove">
            <a href="#" class="fa fa-fw fa-times"  v-on:click.prevent="deleteLeg(index)"></a>
          </div>
        </div>
        <div class="xtd-search-flight__requirements" v-if="requirements_visibility">
            <label><?php echo esc_html( $requirements_label ) ?></label>
            <textarea class="form-control" v-model="requirements"  placeholder="<?php echo esc_html( $requirements_placeholder ) ?>">
            </textarea>
          <div class="xtd-search-flight__remove">
            <a href="#" class="fa fa-fw fa-times"  v-on:click.prevent="deleteRequirements()"></a>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col">
            <button class="btn btn-sm btn-outline-primary" v-on:click.prevent="addReturn" :disabled="!return_flight || legs.length > 4"><i class="fa fa-undo fa-fw"></i> <?php echo esc_html( $return_label ) ?></button>
            <button class="btn btn-sm btn-outline-primary" v-on:click.prevent="addFlight" :disabled="legs.length > 4"><i class="fa fa-plus fa-fw"></i> <?php echo esc_html( $add_flight_label ) ?></button>
            <button v-if="!requirements_visibility" class="btn btn-sm btn-outline-primary" v-on:click.prevent="addRequirements"><i class="fa fa-star fa-fw"></i> <?php echo esc_html( $add_requirements_label ) ?></button>
          </div>
          <div class="col-sm-3 align-self-end text-right"><button class="btn btn-sm btn-primary" v-on:click.prevent="searchFlights()" :disabled="isSearchDisabled()"><?php echo esc_html( $search_label ) ?></button></div>
        </div>
        <div v-if="modal" class="xtd-search-flight__toggle-modal" v-on:click="modal_visibility = !modal_visibility">
          <div><i class="fa" :class="modal_visibility ? 'fa-arrow-left' : 'fa-arrow-right'"></i></div>
          <div>
            <span><strong><?php echo esc_html( $modal_text ) ?></strong> <?php echo esc_html( $modal_desc ) ?></span>
          </div>
        </div>
      </form>
    </div>
    <?php

    return ob_get_clean();

  }

}

new xtenderAirlineShortcodeSearchFlight();

?>
