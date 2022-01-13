function tell (message) {
    document.getElementById('message-box').innerText = message;
    }

    function reserve(what) {
        document.getElementById('message-box-2').innerText = what;
    }

    function setRealCoords(area, img) {
        var originalWidth = img.naturalWidth;
        var visibleWidth = img.width;

        var factor = visibleWidth / originalWidth;

        var strDataCoords = area.dataset.coords;

        var dataCoordsAsStrings = strDataCoords.split(',');

        var visibleCoords = [];

        for (var dataCoord of dataCoordsAsStrings) {
            visibleCoords.push( (Number(dataCoord.trim()) * factor ).toFixed(0));
        }
       
        var newCoords = visibleCoords.join(', ');

        area.setAttribute ('coords', newCoords);

    }

    function resetAllCoords() {
        var areas = document.querySelectorAll('area');

        var img = document.getElementById('slika-sale');

        for ( var area of areas) {
         setRealCoords(area, img);
        }
    }
    window.addEventListener('load', resetAllCoords);
    window.addEventListener('resize', resetAllCoords);