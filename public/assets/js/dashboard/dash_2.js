try {

  Apex.tooltip = {
    theme: 'dark'
  }

  /*

    Dropdown

  */

  var filterDropdown = function() {
      var getDropdownElement = document.querySelectorAll('.filter.custom-dropdown-icon .dropdown-item');
      for (var i = 0; i < getDropdownElement.length; i++) {
          getDropdownElement[i].addEventListener('click', function() {
            console.log(this.getAttribute('data-value'))
              document.querySelectorAll('.custom-dropdown-icon .dropdown-toggle > span.text')[0].innerHTML = this.getAttribute('data-value');
          })
      }
  }

    /*
        ==============================
        |    @Options Charts Script   |
        ==============================
    */

    /*
        ======================================
            Visitor Statistics | Options
        ======================================
    */


    /*
        ===================================
            Unique Visitors | Script
        ===================================
    */

    /*
        ==============================
            Statistics | Script
        ==============================
    */


    // Followers


  /*
      =============================================
          Perfect Scrollbar | Notifications
      =============================================
  */
  const ps = new PerfectScrollbar(document.querySelector('.mt-container'));

  filterDropdown();

} catch(e) {
  // statements
  console.log(e);
}
