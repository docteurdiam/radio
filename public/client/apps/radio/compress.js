//js apps/app/compress.js

include = {
    done : function(total){
        var compressed = include.collectAndCompress(total);
        new include.File('apps/gowane/production.js').save(compressed);
        print("Compressed to 'apps/gowane/production.js'.");
        include.plugins('documentation')
        var app = new include.Doc.Application(total, "gowane");
        app.generate();
        print("Generated docs.");
        if(!window.MVCDontQuit) quit();
    },
    env: "compress"
}

load('jmvc/rhino/env.js');
Envjs('apps/gowane/index.html', {scriptTypes : {"text/javascript" : true,"text/envjs" : true}});
