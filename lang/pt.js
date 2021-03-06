(function () {
    var lang = {
            months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            longDateFormat : { 
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D \\de MMMM \\de YYYY",
                LLL : "D \\de MMMM \\de YYYY LT",
                LLLL : "dddd, D \\de MMMM \\de YYYY LT"
            },
            meridiem : {
                AM : 'AM',
                am : 'am',
                PM : 'PM',
                pm : 'pm'
            },
            relativeDate : {
                today: 'Hoje às %time',
                tomorrow: 'Amanhã às %time',
                next: '%weekday às %time',
                yesterday: 'Ontem às %time',
                last: function () {
                    var weekday = parseInt(this.format('d'), 10);

                    if (weekday < 5) {
                        // Mo - Fr
                        return 'Última %weekday às %time';
                    } else {
                        // Sa + Su
                        return 'Último %weekday às %time';
                    }
                }
            },
            relativeTime : {
                future : "em %s",
                past : "%s atrás",
                s : "segundos",
                m : "um minuto",
                mm : "%d minutos",
                h : "uma hora",
                hh : "%d horas",
                d : "um dia",
                dd : "%d dias",
                M : "um mês",
                MM : "%d meses",
                y : "um ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('pt', lang);
    }
}());
