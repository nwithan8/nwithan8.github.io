var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


//Here's the old stuff:
$('overlay').hide();
$('gatewayCreative').hide();
$(document.body).setStyle( { overflow:'scroll' } );

//April 28th update:
document.getElementsByTagName("html")[0].style.overflow='';


try {
  //August 10th update:
  new Ajax.Updater('shell', window.location.href.replace(/gwh=.*/,""));
} catch (e) {
  //Fail silently
}


}
/*
     FILE ARCHIVED ON 06:42:18 Jan 17, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:16:24 Feb 03, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.517
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 17.531
  LoadShardBlock: 205.099 (3)
  PetaboxLoader3.datanode: 170.215 (5)
  PetaboxLoader3.resolve: 220.619 (3)
  load_resource: 212.04 (2)
*/
