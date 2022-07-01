function setREVStartSize(e) {
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) ? window.innerWidth : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.innerHeight);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.innerWidth ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl) if (sl > nl[i] && nl[i] > 0) {
                sl = nl[i];
                ix = i;
            }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);

            newh = (e.type === "carousel" && e.justify === "true" ? e.gh[ix] : (e.gh[ix] * m)) + (e.tabh + e.thumbh);
        }

        if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));
        document.getElementById(e.c).height = newh;
        window.rs_init_css.innerHTML += "#" + e.c + "_wrapper { height: " + newh + "px }";
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
}

if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        var err = "<div class='rs_error_message_box'>";
        err += "<div class='rs_error_message_oops'>Oops...</div>";
        err += "<div class='rs_error_message_content'>";
        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
        err += "</div>";
        err += "</div>";
        jQuery(sliderID).show().html(err);
    }
}

var mystickyside_name = {
    "mystickyside_string": ".sidebar.col-lg-4",
    "mystickyside_content_string": "",
    "mystickyside_margin_top_string": "120",
    "mystickyside_margin_bot_string": "50",
    "mystickyside_update_sidebar_height_string": "false",
    "mystickyside_min_width_string": "991",
    "device_desktop": "1",
    "device_mobile": "1"
};
var sc_countdown = {"days":"Days","hours":"Hours","minutes":"Minutes","seconds":"Seconds"};
