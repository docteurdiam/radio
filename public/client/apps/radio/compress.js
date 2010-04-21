include = {
    done : function(total){
        var compressed = include.collectAndCompress(total);
        new include.File('apps/radio/production.js').save(compressed);
        print("Compressed to 'apps/radio/production.js'.");
        include.plugins('documentation')
        var app = new include.Doc.Application(total, "radio");
        app.generate();
        print("Generated docs.");
        if(!window.MVCDontQuit) quit();
    },
    env: "compress"
}

load('jmvc/rhino/env.js');
Envjs('apps/radio/index.html', {scriptTypes : {"text/javascript" : true,"text/envjs" : true}});
