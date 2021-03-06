(function () {
    var lang = {
            months : "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays : "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort : "sön_mån_tis_ons_tor_fre_lör".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "YYYY-MM-DD",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            meridiem : {
                AM : 'AM',
                am : 'am',
                PM : 'PM',
                pm : 'pm'
            },
            relativeDate : {
                today: 'Idag klockan %time',
                tomorrow: 'Imorgon klockan %time',
                next: '%weekday klockan %time',
                yesterday: 'Igår klockan %time',
                last: 'Förra %weekdayen klockan %time'
            },
            relativeTime : {
                future : "om %s",
                past : "för %s sen",
                s : "några sekunder",
                m : "en minut",
                mm : "%d minuter",
                h : "en timme",
                hh : "%d timmar",
                d : "en dag",
                dd : "%d dagar",
                M : "en månad",
                MM : "%d månader",
                y : "ett år",
                yy : "%d år"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'e' :
                    (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('sv', lang);
    }
}());
