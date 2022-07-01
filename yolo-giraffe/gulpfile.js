const gulp = require("gulp"),
    sass = require("gulp-sass"),
    less = require("gulp-less"),
    concat = require("gulp-concat"),
    gutil = require("gulp-util");

const resourcePath = './';
const gitPublicResource = './';
// const githubIO = "D:/com.giaiphapict/quanict.github.io/";
const githubIO = '/mnt/kingston-data/github-resource/quanict.github.io/';
// Minifies SCSS
gulp.task("less", function() {
    return gulp.src(resourcePath+'less/yolo.less') // Gets all files ending with .scss in app/scss and children dirs
        // .pipe(uglify({mangle: false}))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        //.pipe(sass({outputStyle: 'compressed'}))
        .pipe(less())
        .pipe(concat('yolo.min.css'))
        // .pipe(sass())


        //.pipe(plumber()) // Deal with errors.
        //.pipe($.sourcemaps.init()) // Wrap tasks in a sourcemap.
        // .pipe($.sass({ // Compile Sass using LibSass.
        //     errLogToConsole: true,
        //     outputStyle: "expanded" // Options: nested, expanded, compact, compressed
        // }))
        // .pipe($.cleanCss({
        //     keepSpecialComments: '*',
        //     spaceAfterClosingBrace: true
        // }))
        //.pipe(rename({ suffix: '.min' })) // Append our suffix to the name
        .pipe(gulp.dest(gitPublicResource+'/css'));
});

// Minifies JS
gulp.task('js', function(){
    $script_files = [

        //PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)
        'js/_scripts/prototype.js',
        'js/libs/jquery-2.1.1.min.js',
        'js/plugin/pace/pace.min.js',
        'js/libs/jquery-ui-1.10.3.min.js',

        'js/plugin/jquery-validate/jquery.validate.min.js',
        'js/plugin/masked-input/jquery.maskedinput.min.js',

        // EASY PIE CHARTS
        'js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js',

        // SPARKLINES
        'js/plugin/sparkline/jquery.sparkline.min.js',

        //IMPORTANT: APP CONFIG
        'js/app.config.js',

        //MAIN APP JS FILE
        'js/app.min.js',

        //'js/demo.min.js',

        'js/speech/voicecommand.min.js',

        //SmartChat UI : plugin
        'js/smart-chat-ui/smart.chat.ui.min.js',
        'js/smart-chat-ui/smart.chat.manager.min.js',

        // 'js/plugin/select2/select2.min.js',
        githubIO+'jquery/select2/4.0.13/js/select2.js',

        'js/smartwidgets/jarvis.widget.min.js',
        // 'js/smartwidgets/jarvis.widget.js',


        // 'js/plugin/datatables/jquery.dataTables.min.js',
        'js/plugin/datatables/jquery.dataTables.js',

        'js/plugin/datatables/dataTables.bootstrap.min.js',

        'js/bootstrap/bootstrap.min.js',
        'js/_scripts/tables.js',
        "js/_scripts/ckeditor.config.js",
        "js/_scripts/_inputs.js",
        "js/jQuery/driving_sign.js",
        "js/_scripts/ict.js",
        "js/ict.widget/treeNestable.js"

    ];
    return gulp.src($script_files)
        .pipe(concat('smart-admin-ict.js'))
        //.pipe(uglify())
        // .on('error', function (err) {
        //     gutil.log(gutil.colors.red('[Error]'), err.toString());
        // })

        .pipe(gulp.dest('git-public/js'))
});

gulp.task('copy-resource', function(){
    gulp.src(resourcePath+'img/*').pipe(gulp.dest(gitPublicResource+'/img'));
    gulp.src(resourcePath+'img/avatars/*').pipe(gulp.dest(gitPublicResource+'/img/avatars'));
    gulp.src(resourcePath+'images/*').pipe(gulp.dest(gitPublicResource+'/images'));
    gulp.src(resourcePath+'fonts/*').pipe(gulp.dest(gitPublicResource+'/fonts'));
    return gulp.src(resourcePath+'js/crawler_form_actions.js').pipe(gulp.dest(gitPublicResource+'/js'));
});

const tasks = ['less'];
gulp.task("default", gulp.series(tasks));
gulp.watch(["js/*.js","js/*/*.js",'less/*','less/*/*'],gulp.series(tasks));