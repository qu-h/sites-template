jQuery( document ).ready(function() {
	/*
	 * https://github.com/WaniKani/WanaKana
	 */
	var hira_input = jQuery("input[name=hiragana]");
    jQuery("input[name=romaji]").change(function(){
    	var romaji = $(this).val();
    	if( hira_input.val().length < 1 ){
    		hira_input.val(wanakana.toHiragana(romaji));
    	}
    });
    

    japaninput.hiragana_bin();
    kanjiWord.ini();
    jQuery("a.add-answer").off('click').on('click',function(){
    	var this_row = $(this).parents(".col-md-12");
    	var input_row = this_row.prev("section.col-md-12").clone();
    	input_row.find('input').val('');
    	$( input_row ).insertBefore( this_row );
    	japaninput.hiragana_bin();
    });
});

japaninput = {
	hiragana_bin:function(){
		jQuery( "input[name^='answer[hiragana]'], input[name='word[hiragana]'], input[name=hiragana], input.hiragana-input" ).each(function() {
	    	wanakana.bind(jQuery(this).get(0),{IMEMode:'toHiragana'});
	    });
        jQuery( "input.katakana-input" ).each(function() {
            wanakana.bind(jQuery(this).get(0),{IMEMode:'toKatakana'});
        });
	}
};

kanjiWord = {
	ini:function () {
        var g_vietTyper;
	    if ( typeof VietIME !== 'undefined' ){
            g_vietTyper = new VietIME();
            g_vietTyper.setTelexMode();
            console.log('using vietIME');
        }

		jQuery("a.add-word").unbind('click').click(function (e) {
			var lastRow = jQuery(this).closest("label.input").find('.row');
			var ordering = lastRow.length;
			if( lastRow.length > 1 ){
                lastRow = lastRow.last();
			}
			console.log("add word click",{lastRow});
			if( lastRow.find('input.words-romaji').length > 0 &&
				lastRow.find('input.words-romaji').val().length > 0 ){
                var row = lastRow.clone();
                jQuery('input',row).val("");
                row.after(jQuery(this).closest(''));
                jQuery('input.ordering',row).val(ordering+1);
                jQuery(row).insertAfter( lastRow );

                jQuery("input.words-romaji",lastRow).on('change',function(){
                    kanjiWord.getByRomaji($(this).val(),kanjiWord.bindData,$(this).closest(".row"));
                });

                jQuery(".vietnamese-input",row).on('keypress',function (evt) {
                    g_vietTyper.targetOnKeyPress( evt, this );
                });
			}

        });

		jQuery("input.words-romaji").on('change',function(){
            kanjiWord.getByRomaji($(this).val(),kanjiWord.bindData,$(this).closest(".row"));
		});
    },
    getByRomaji:function(romaji,callback,area){
        jQuery.ajax({
            url: API_BASE + "/word.json",
            data: {'r':romaji},
            dataType: "JSON"
        }).done(function(result) {
        	if( typeof result.status && typeof callback ==='function'){
                callback(result.data,area);
			}
        })
		.fail(function() {
			console.log( "error" );
		});
	},
    bindData:function (data,area) {
		area.find(".words-kanji")
            .on('change',function(){
                kanjiWord.getByRomaji($(this).val(),kanjiWord.bindData,$(this).closest(".row"));
            });

        if( data !== null){
            area.find(".words-kanji").val(data.kanji);
            area.find(".words-vn").val(data.vietnamese);
            area.find(".words-en").val(data.english);
            area.find(".words-id").val(data.id);
        }

    }
};