(function () {
    "use strict"

    angular
        .module("myngapp")
        .controller("myngcntrl", function ($scope) {
            $scope.myobject = [{
                "id":1,
                "title": "First item",
                "image":"https://vignette3.wikia.nocookie.net/matrix/images/e/ec/Matrix-neo-wallpaper-660x320.jpg/revision/latest?cb=20131002032555",
                "price": "$1000000",
                "txt": "Amet et nihil ipsum invidunt invidunt gubergren erat sit dolor quis ut labore sed ipsum lorem magna et et diamLorem diam option consequat et duis tincidunt sea diam sed labore stet labore in cum takimata diam aliquyam nonumy dolor diam at takimata sed accusam iriure lorem lorem nulla rebum amet dolores magna ipsum invidunt ullamcorper dolor gubergren diam consequat nonummy invidunt et no dolor diam dolor rebum tempor placerat"
            },
             {
                 "id":2,
                 "title": "Second item",
                 "image":"http://vignette4.wikia.nocookie.net/matrix/images/8/88/Neo_stops_bullets_2.JPG/revision/latest?cb=20060831032053",
                 "price": "$1500",
                 "txt": "Amet et nihil ipsum invidunt invidunt gubergren erat sit dolor quis ut labore sed ipsum lorem magna et et diamLorem diam option consequat et duis tincidunt sea diam sed labore stet labore in cum takimata diam aliquyam nonumy dolor diam at takimata sed accusam iriure lorem lorem nulla rebum amet dolores magna ipsum invidunt ullamcorper dolor gubergren diam consequat nonummy invidunt et no dolor diam dolor rebum tempor placerat"
             },
            {
                "id":3,
                "title": "blala",
                "image":"http://download.gamezone.com/uploads/image/data/1201507/article_post_width_Thomas-Anderson-aka-Neo-the-Matrix-1024x516.jpg",
                "price": "$105556",
                "txt": "Amet et nihil ipsum invidunt invidunt gubergren erat sit dolor quis ut labore sed ipsum lorem magna et et diamLorem diam option consequat et duis tincidunt sea diam sed labore stet labore in cum takimata diam aliquyam nonumy dolor diam at takimata sed accusam iriure lorem lorem nulla rebum amet dolores magna ipsum invidunt ullamcorper dolor gubergren diam consequat nonummy invidunt et no dolor diam dolor rebum tempor placerat",
                "tags": ["green", "ejan"]
            },
            {
                "id": 15,
                "title": "Some item",
                "image": "https://static.comicvine.com/uploads/original/11115/111150831/4992349-4717230839-neo.j.jpg",
                "price": "$125100",
                "txt": "Amet et nihil ipsum invidunt invidunt gubergren erat sit dolor quis ut labore sed ipsum lorem magna et et diamLorem diam option consequat et duis tincidunt sea diam sed labore stet labore in cum takimata diam aliquyam nonumy dolor diam at takimata sed accusam iriure lorem lorem nulla rebum amet dolores magna ipsum invidunt ullamcorper dolor gubergren diam consequat nonummy invidunt et no dolor diam dolor rebum tempor placerat"
            },
            {
                "id": 10,
                "title": "NANANA",
                "image": "https://media.giphy.com/media/MgkBTmxt18lGg/giphy.gif",
                "price": "$456464",
                "txt": "Amet et nihil ipsum invidunt invidunt gubergren erat sit dolor quis ut labore sed ipsum lorem magna et et diamLorem diam option consequat et duis tincidunt sea diam sed labore stet labore in cum takimata diam aliquyam nonumy dolor diam at takimata sed accusam iriure lorem lorem nulla rebum amet dolores magna ipsum invidunt ullamcorper dolor gubergren diam consequat nonummy invidunt et no dolor diam dolor rebum tempor placerat"
            },
            ];
            $scope.name = "Narek";
        })
})();