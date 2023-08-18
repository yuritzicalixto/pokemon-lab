<script type="text/javascript">
const existencia = {!! json_encode($pro)!!}
console.log(existencia['stock']);
jQuery(document).ready(function(){
  // Listen for the input event
  jQuery("#cantidad_compra").on('input', function(evt) {
    // Allow only numbers
    jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));
    if(jQuery(this).val() > existencia['stock']){
      // Si la cantidad es mayor al stock disponible, establecer la cantidad al stock disponible
      $('#cantidad_compra').val(existencia['stock']);
    }
  });
});
</script>
