//expresiones regulares para validaciones.
export const NUMBER_REGEX = /^[0-9]+$/i;
export const REGEX_AMEXMASKINPUT = /^3[47][0-9.-]*/;
export const REGEX_COUNTRY_CODE = /^\d{1,3}$/;
export const REGEX_CODE_AREA = /^\d{1,4}$/;
export const REGEX_NUMBER = /^\d{5,11}$/;
export const REGEX_EMAIL =
    /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

/*INIT_INJECT_COMMON_CONSTANTS*/
export const APP_VERSION = '0.0.1';

export const DEFAULT_SHADOW = {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
};
