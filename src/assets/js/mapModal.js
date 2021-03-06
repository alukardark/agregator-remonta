import MicroModal from "micromodal";
import {accordion} from './squeezebox';

let isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


function modalMapInit() {

    let myMap = new ymaps.Map('map-modal', {
        center: [55.750652, 37.577064],
        zoom: 15,
        controls: ['zoomControl']
    }, {
        searchControlProvider: 'yandex#search'
    });


    let coordinates = [
            {
                coordinates: [55.750652, 37.577064],
                title: '???????? ??????????????',
                rating: 5,
                countReviews: 2,
                address: '?????????????????????? ??????????????, 1??',
                logo: '../img/logo-1.jpg',
                link: '#',
                mainMarker: 'main-marker',
            },
            {
                coordinates: [55.750150, 37.585236],
                title: '????????????',
                rating: 5,
                countReviews: 4,
                address: '???????????????????????? ??????., 43',
                logo: '../img/logo-2.jpg',
                link: '#',
                mainMarker: '',
            },
            {
                coordinates: [55.753413, 37.575026],
                title: 'Help-Holodilnik',
                rating: 5,
                countReviews: 4,
                address: '????. ?????????????????? ????????????????, ??. 22',
                logo: '../img/logo-3.jpg',
                link: '#',
                mainMarker: '',
            },
            {
                coordinates: [55.754247, 37.581076],
                title: '??????-????????????24',
                rating: 5,
                countReviews: 4,
                address: '1-?? ????????????????-???????????? ??????????, 6',
                logo: '../img/logo-4.jpg',
                link: '#',
                mainMarker: '',
            },
            {
                coordinates: [55.747558, 37.568892],
                title: 'Repair',
                rating: 5,
                countReviews: 4,
                address: '???????????????????????? ??????., 43',
                logo: '../img/logo-5.jpg',
                link: '#',
                mainMarker: '',
            }
        ],
        IconBlueLayout = '',
        markerBlue = '',
        placemark = '';


    coordinates.forEach(function (value, i) {
        IconBlueLayout = ymaps.templateLayoutFactory.createClass(
            '<a href="#" class="modal-map__marker ' + value.mainMarker + '" data-marker="marker-' + i + '"></a>'
        );

        markerBlue = {
            iconImageSize: [42, 42],
            iconImageOffset: [-21, -42],
            iconContentOffset: [0, 0],
            balloonOffset: [-105, -64],
            hideIconOnBalloonOpen: false,
            iconImageHref: '',
            iconLayout: 'default#imageWithContent',
            iconContentLayout: IconBlueLayout
        };


        placemark = new ymaps.Placemark(value.coordinates, {
                balloonContentHeader: "",
                balloonContentBody: '' +
                '<a target="_blank" class="balloon" data-marker="marker-' + i + '" href="' + value.link + '">' +
                '<span class="modal-map__item-wrap">' +
                '<span class="modal-map__item-box">' +
                '<span class="modal-map__item-title">' + value.title + '</span>' +
                '<span class="modal-map__item-rating">' +
                '<span class="stars stars--' + value.rating + '">' +
                '<span></span>' +
                '<span></span>' +
                '<span></span>' +
                '<span></span>' +
                '<span></span>' +
                '</span>' +
                '<span class="modal-map__item-reviews">' + value.countReviews + ' ????????????</span>' +
                '</span>' +
                '</span>' +
                '<span class="modal-map__img" style="background-image: url(' + value.logo + ');"></span>' +
                '</span>' +
                '<span class="modal-map__item-address">' + value.address + '</span>' +
                '</a>',
                balloonContentFooter: '',
                hintContent: ''
            },
            markerBlue
        );

        myMap.geoObjects.add(placemark);

    });

    if (isMobile) {
        myMap.behaviors.disable('drag');
    }
}

if (document.querySelector('#map-modal') !== null) {
    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: true,
        disableFocus: true,
        awaitCloseAnimation: true,
        onShow: function (modal) {
            if (modal.id == 'modal-map') {
                if(!document.getElementById(modal.id).classList.contains('active')){
                    accordion('#'+modal.id+' .accordion');
                    document.getElementById(modal.id).classList.add('active')
                }

                ymaps.ready(modalMapInit);

                //hover and click markers
                ymaps.ready(function () {
                    setTimeout(function () {
                        for (let company of document.querySelectorAll('.modal-map__list a')) {
                            company.addEventListener('mouseenter', function (e) {
                                let $this = this;
                                for (let markerItem of document.querySelectorAll('.modal-map__marker')) {
                                    if (markerItem.getAttribute('data-marker') == $this.getAttribute('data-marker')) {
                                        $this.classList.add('active');
                                        markerItem.classList.add('yellow');
                                    }
                                }
                            });
                            company.addEventListener('mouseleave', function (e) {
                                let $this = this;
                                for (let markerItem of document.querySelectorAll('.modal-map__marker')) {
                                    if (markerItem.getAttribute('data-marker') == $this.getAttribute('data-marker')) {
                                        $this.classList.remove('active');
                                        markerItem.classList.remove('yellow');
                                    }
                                }
                            });
                        }

                        for (let markerItem of document.querySelectorAll('.modal-map__marker')) {
                            markerItem.addEventListener('click', function (e) {
                                let $this = this;
                                for (let marker of document.querySelectorAll('.modal-map__marker')) {
                                    marker.classList.remove('active')
                                }
                                setTimeout(function () {
                                    if (document.querySelector('.modal-map .balloon')) {
                                        if (document.querySelector('.modal-map .balloon').getAttribute('data-marker') == $this.getAttribute('data-marker')) {
                                            $this.classList.add('active');
                                        }
                                        let closeButton = document.querySelector('.ymaps-2-1-78-balloon__close-button');
                                        closeButton.addEventListener('click', function (e) {
                                            $this.classList.remove('active');
                                        });
                                    }
                                });
                            });
                        }
                    }, 300);
                });
            }
        }
    });
}


