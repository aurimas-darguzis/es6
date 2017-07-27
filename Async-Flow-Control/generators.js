genWrap(function*(){
        const tweets = yield $.get("data/tweets.json");
        console.log(tweets);

        const friends = yield $.get("data/frieds.json");
        console.log(friends);

        const videos = yield $.get("data/videos.json");
        console.log(videos);
    });

    function genWrap(generator) {
        const gen = generator();

        function handle(yielded) {
            if(!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next());
    }
    
