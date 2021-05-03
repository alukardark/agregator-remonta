let isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

import marker from '../img/marker-map-active.svg';

import markerBlue from '../img/marker-map-blue.svg';
import markerYellow from '../img/marker-map-yellow.svg';


// import logo1 from '../img/logo/logo-1.jpg';
// import logo2 from '../img/logo/logo-2.jpg';
// import logo3 from '../img/logo/logo-3.jpg';
// import logo4 from '../img/logo/logo-4.jpg';
// import logo5 from '../img/logo/logo-5.jpg';


function init() {
    let myMap = new ymaps.Map('map', {
            center: [55.755791, 37.614594],
            zoom: 9,
            controls: []
        }),


        myPlacemark1 = new ymaps.Placemark([55.755791, 37.614594], {
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: marker,
            iconImageSize: [50, 64],
            iconImageOffset: [-25, -64],
            iconContentOffset: [0, 0],
        });

    myMap.geoObjects.add(myPlacemark1);

    myMap.behaviors.disable('scrollZoom');
    if (isMobile) {
        myMap.behaviors.disable('drag');
    }
}


if (document.querySelector('#map') !== null) {
    ymaps.ready(init);
}


function modalMapInit() {

    let myMap = new ymaps.Map('map-modal', {
        center: [55.751574, 37.573856],
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });


    let coordinates = [
            {
                coordinates: [55.751574, 37.573856],
                title: 'Бюро ремонта',
                rating: 5,
                countReviews: 2,
                address: 'Семёновская площадь, 1А',
                logo: '../img/logo/logo-1.jpg',
            },
            {
                coordinates: [55.754116, 37.572247],
                title: 'Утюжок',
                rating: 5,
                countReviews: 4,
                address: 'Измайловский бул., 43',
                logo: '../img/logo/logo-2.jpg',
            }
        ],
        MyIconContentLayout = '',
        markerBlueSettings = '',
        placemark = '';


    coordinates.forEach(function (value, i) {
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<a href="#" class="modal-map__marker" data-marker="marker-' + i + '"></a>'
        );


        markerBlueSettings = {
            // iconLayout: 'default#image',
            // iconImageHref: markerBlue,
            iconImageSize: [42, 42],
            iconImageOffset: [-21, -42],
            iconContentOffset: [0, 0],
            balloonOffset: [-105, -64],
            hideIconOnBalloonOpen: false,

            iconImageHref: '',
            iconLayout: 'default#imageWithContent',
            iconContentLayout: MyIconContentLayout
        };
        // markerActiveSettings = {
        //     iconImageSize: [50, 64],
        //     iconImageOffset: [-25, -64],
        //     iconContentOffset: [0, 0],
        //     balloonOffset: [-105, -64],
        //     hideIconOnBalloonOpen: false,
        //
        //     iconImageHref: '',
        //     iconLayout: 'default#imageWithContent',
        //     iconContentLayout: MyIconContentLayout2
        // };










        placemark = new ymaps.Placemark(value.coordinates, {
                balloonContentHeader: '<a href = "#">' + value.title + '</a>' +
                '<span class="description"></span>',
                balloonContentBody: '<img src="#" height="150" width="200">' +
                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a>' +
                '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
                balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
                hintContent: 'Рога и копыта'
            },
            markerBlueSettings
        );


        myMap.geoObjects.add(placemark);
    });


    // placemark.events.add('mouseenter', function (e) {
    //     e.get('target').options.set(
    //         markerActiveSettings
    //     );
    // }).add('mouseleave', function (e) {
    //     e.get('target').options.set(
    //         markerBlueSettings
    //     );
    // });
    //
    // var placemark2 = new ymaps.Placemark([55.755791, 37.614594], {
    //         balloonContentHeader: '<a href = "#" data-balloon="placemark2">Рога и копыта</a><br>' +
    //         '<span class="description">Сеть кинотеатров</span>',
    //         balloonContentBody: '<img src="../img/marker-map-active.svg" height="150" width="200"> <br/> ' +
    //         '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
    //         '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    //         balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
    //         hintContent: 'Рога и копыта'
    //     },
    //     markerBlueSettings
    // );
    // placemark2.events.add('mouseenter', function (e) {
    //     e.get('target').options.set(
    //         markerActiveSettings
    //     );
    // }).add('mouseleave', function (e) {
    //     e.get('target').options.set(
    //         markerBlueSettings
    //     );
    // });
    //
    //
    //
    //


}

if (document.querySelector('#map-modal') !== null) {
    ymaps.ready(modalMapInit);
}