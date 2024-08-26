import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "countryList": "Country List",
          "search": "Search",
          "export": "Export",
          "darkMode": "Dark Mode",
          "allRegions": "All Regions",
          "allSubregions": "All Subregions",
          "minPopulation": "Min Population",
          "maxPopulation": "Max Population",
          "allLanguages": "All Languages",
          "allTimezones": "All Timezones",
          "region": "Region",
          "subregion": "Subregion",
          "population": "Population",
          "languages": "Languages",
          "timezones": "Timezones",
          "top10CountriesByPopulation": "Top 10 Countries by Population",
          "top10CountriesByArea": "Top 10 Countries by Area",
          "top10CountriesByDensity": "Top 10 Countries by Population Density",
          "countries": "Countries",
          "area": "Area",
          "populationDensity": "Population Density"
        }
      },
      es: {
        translation: {
          "countryList": "Lista de Países",
          "search": "Buscar",
          "export": "Exportar",
          "darkMode": "Modo Oscuro",
          "allRegions": "Todas las Regiones",
          "allSubregions": "Todas las Subregiones",
          "minPopulation": "Población Mínima",
          "maxPopulation": "Población Máxima",
          "allLanguages": "Todos los Idiomas",
          "allTimezones": "Todas las Zonas Horarias",
          "region": "Región",
          "subregion": "Subregión",
          "population": "Población",
          "languages": "Idiomas",
          "timezones": "Zonas Horarias",
          "top10CountriesByPopulation": "Top 10 Países por Población",
          "top10CountriesByArea": "Top 10 Países por Área",
          "top10CountriesByDensity": "Top 10 Países por Densidad de Población",
          "countries": "Países",
          "area": "Área",
          "populationDensity": "Densidad de Población"
        }
      },
      fr: {
        translation: {
          "countryList": "Liste des pays",
          "search": "Rechercher",
          "export": "Exporter",
          "darkMode": "Mode sombre",
          "allRegions": "Toutes les régions",
          "allSubregions": "Toutes les sous-régions",
          "minPopulation": "Population minimale",
          "maxPopulation": "Population maximale",
          "allLanguages": "Toutes les langues",
          "allTimezones": "Tous les fuseaux horaires",
          "region": "Région",
          "subregion": "Sous-région",
          "population": "Population",
          "languages": "Langues",
          "timezones": "Fuseaux horaires",
          "top10CountriesByPopulation": "Top 10 Pays par Population",
          "top10CountriesByArea": "Top 10 Pays par Superficie",
          "top10CountriesByDensity": "Top 10 Pays par Densité de Population",
          "countries": "Pays",
          "area": "Superficie",
          "populationDensity": "Densité de Population"
        }
      },
      de: {
        translation: {
          "countryList": "Länderliste",
          "search": "Suche",
          "export": "Exportieren",
          "darkMode": "Dunkelmodus",
          "allRegions": "Alle Regionen",
          "allSubregions": "Alle Unterregionen",
          "minPopulation": "Mindestbevölkerung",
          "maxPopulation": "Höchstbevölkerung",
          "allLanguages": "Alle Sprachen",
          "allTimezones": "Alle Zeitzonen",
          "region": "Region",
          "subregion": "Unterregion",
          "population": "Bevölkerung",
          "languages": "Sprachen",
          "timezones": "Zeitzonen",
          "top10CountriesByPopulation": "Top 10 Länder nach Bevölkerung",
          "top10CountriesByArea": "Top 10 Länder nach Fläche",
          "top10CountriesByDensity": "Top 10 Länder nach Bevölkerungsdichte",
          "countries": "Länder",
          "area": "Fläche",
          "populationDensity": "Bevölkerungsdichte"
        }
      },
      it: {
        translation: {
          "countryList": "Elenco dei Paesi",
          "search": "Cerca",
          "export": "Esporta",
          "darkMode": "Modalità Scura",
          "allRegions": "Tutte le Regioni",
          "allSubregions": "Tutte le Sotto-regioni",
          "minPopulation": "Popolazione Minima",
          "maxPopulation": "Popolazione Massima",
          "allLanguages": "Tutte le Lingue",
          "allTimezones": "Tutti i Fusi Orari",
          "region": "Regione",
          "subregion": "Sotto-regione",
          "population": "Popolazione",
          "languages": "Lingue",
          "timezones": "Fusi Orari",
          "top10CountriesByPopulation": "Top 10 Paesi per Popolazione",
          "top10CountriesByArea": "Top 10 Paesi per Area",
          "top10CountriesByDensity": "Top 10 Paesi per Densità di Popolazione",
          "countries": "Paesi",
          "area": "Area",
          "populationDensity": "Densità di Popolazione"
        }
      },
      pt: {
        translation: {
          "countryList": "Lista de Países",
          "search": "Pesquisar",
          "export": "Exportar",
          "darkMode": "Modo Escuro",
          "allRegions": "Todas as Regiões",
          "allSubregions": "Todas as Sub-regiões",
          "minPopulation": "População Mínima",
          "maxPopulation": "População Máxima",
          "allLanguages": "Todos os Idiomas",
          "allTimezones": "Todos os Fusos Horários",
          "region": "Região",
          "subregion": "Sub-região",
          "population": "População",
          "languages": "Idiomas",
          "timezones": "Fusos Horários",
          "top10CountriesByPopulation": "Top 10 Países por População",
          "top10CountriesByArea": "Top 10 Países por Área",
          "top10CountriesByDensity": "Top 10 Países por Densidade Populacional",
          "countries": "Países",
          "area": "Área",
          "populationDensity": "Densidade Populacional"
        }
      },
      ru: {
        translation: {
          "countryList": "Список стран",
          "search": "Поиск",
          "export": "Экспорт",
          "darkMode": "Темный режим",
          "allRegions": "Все регионы",
          "allSubregions": "Все субрегионы",
          "minPopulation": "Мин. население",
          "maxPopulation": "Макс. население",
          "allLanguages": "Все языки",
          "allTimezones": "Все часовые пояса",
          "region": "Регион",
          "subregion": "Субрегион",
          "population": "Население",
          "languages": "Языки",
          "timezones": "Часовые пояса",
          "top10CountriesByPopulation": "Топ 10 стран по населению",
          "top10CountriesByArea": "Топ 10 стран по площади",
          "top10CountriesByDensity": "Топ 10 стран по плотности населения",
          "countries": "Страны",
          "area": "Площадь",
          "populationDensity": "Плотность населения"
        }
      },
      zh: {
        translation: {
          "countryList": "国家列表",
          "search": "搜索",
          "export": "导出",
          "darkMode": "黑暗模式",
          "allRegions": "所有地区",
          "allSubregions": "所有次区域",
          "minPopulation": "最小人口",
          "maxPopulation": "最大人口",
          "allLanguages": "所有语言",
          "allTimezones": "所有时区",
          "region": "地区",
          "subregion": "次区域",
          "population": "人口",
          "languages": "语言",
          "timezones": "时区",
          "top10CountriesByPopulation": "人口前10位的国家",
          "top10CountriesByArea": "面积前10位的国家",
          "top10CountriesByDensity": "人口密度前10位的国家",
          "countries": "国家",
          "area": "面积",
          "populationDensity": "人口密度"
        }
      },
      ja: {
        translation: {
          "countryList": "国のリスト",
          "search": "検索",
          "export": "エクスポート",
          "darkMode": "ダークモード",
          "allRegions": "すべての地域",
          "allSubregions": "すべてのサブリージョン",
          "minPopulation": "最小人口",
          "maxPopulation": "最大人口",
          "allLanguages": "すべての言語",
          "allTimezones": "すべてのタイムゾーン",
          "region": "地域",
          "subregion": "サブリージョン",
          "population": "人口",
          "languages": "言語",
          "timezones": "タイムゾーン",
          "top10CountriesByPopulation": "人口のトップ10の国",
          "top10CountriesByArea": "面積のトップ10の国",
          "top10CountriesByDensity": "人口密度のトップ10の国",
          "countries": "国",
          "area": "面積",
          "populationDensity": "人口密度"
        }
      },
      ko: {
        translation: {
          "countryList": "국가 목록",
          "search": "검색",
          "export": "내보내기",
          "darkMode": "다크 모드",
          "allRegions": "모든 지역",
          "allSubregions": "모든 하위 지역",
          "minPopulation": "최소 인구",
          "maxPopulation": "최대 인구",
          "allLanguages": "모든 언어",
          "allTimezones": "모든 시간대",
          "region": "지역",
          "subregion": "하위 지역",
          "population": "인구",
          "languages": "언어",
          "timezones": "시간대",
          "top10CountriesByPopulation": "인구 상위 10개국",
          "top10CountriesByArea": "면적 상위 10개국",
          "top10CountriesByDensity": "인구 밀도 상위 10개국",
          "countries": "국가",
          "area": "면적",
          "populationDensity": "인구 밀도"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;
