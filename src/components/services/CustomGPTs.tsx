import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck2, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import BackHomeButton from '../BackHomeButton';
import Contact from '../Contact';
import ConstructionDemo from '../ConstructionDemo';
import LogoLoop from '../ui/LogoLoop';
import { useSEO } from '../../hooks/useSEO';
import { useLanguage } from '../../contexts/LanguageContext';

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#61DAFB]">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#3178C6]">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="">
    <defs>
      <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB"/>
        <stop offset="100%" stopColor="#FFD43B"/>
      </linearGradient>
    </defs>
    <path fill="url(#python-gradient)" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);


const NodeJSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#339933]">
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082a1.93 1.93 0 0 1 1.846 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.795 5.078a1.857 1.857 0 0 1-.922.247zm2.722-6.972c-3.846 0-4.654-1.766-4.654-3.248 0-.142.114-.253.256-.253h1.136c.127 0 .233.092.253.216.172 1.161.686 1.746 3.009 1.746 1.853 0 2.641-.419 2.641-1.401 0-.566-.223-.986-3.103-1.269-2.408-.237-3.896-.77-3.896-2.697 0-1.775 1.497-2.833 4.007-2.833 2.819 0 4.212.978 4.388 3.076a.255.255 0 0 1-.253.28h-1.142a.252.252 0 0 1-.245-.195c-.272-1.21-.932-1.596-2.748-1.596-2.024 0-2.261.705-2.261 1.233 0 .64.278.826 3.006 1.187 2.703.358 3.99.865 3.99 2.767-.002 1.917-1.598 3.017-4.384 3.017z"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <img
    src="/postgresql-logo-svgrepo-com.svg"
    alt="PostgreSQL"
    className="h-10 w-10"
  />
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#06B6D4]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="">
    <defs>
      <linearGradient id="supabase-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3ECF8E"/>
        <stop offset="100%" stopColor="#3ECF8E" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
    <path fill="url(#supabase-gradient)" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2496ED]">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF9900]">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.32a.492.492 0 0 1-.303.072h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#1a1a1a]">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const techLogos = [
  { node: <ReactIcon />, title: "React" },
  { node: <TypeScriptIcon />, title: "TypeScript" },
  { node: <PythonIcon />, title: "Python" },
  { node: <NodeJSIcon />, title: "Node.js" },
  { node: <PostgreSQLIcon />, title: "PostgreSQL" },
  { node: <TailwindIcon />, title: "Tailwind CSS" },
  { node: <SupabaseIcon />, title: "Supabase" },
  { node: <DockerIcon />, title: "Docker" },
  { node: <AWSIcon />, title: "AWS" },
  { node: <VercelIcon />, title: "Vercel" },
];

const CustomGPTs: React.FC = () => {
  const { t, language } = useLanguage();

  useSEO({
    title: language === 'it'
      ? 'Software personalizzato potenziato con AI | Agentics - Sviluppo su misura'
      : 'Custom software powered by AI | Agentics - Tailored development',
    description: language === 'it'
      ? 'Sviluppiamo software personalizzato potenziato con AI per la tua azienda: assistenti HR, sistemi legali, CRM intelligenti e automazioni su misura.'
      : 'We develop custom software powered by AI for your business: HR assistants, legal systems, intelligent CRM, and tailored automations.',
    keywords: language === 'it'
      ? 'software personalizzato potenziato con AI, sviluppo software custom, applicazioni intelligenza artificiale, assistente AI aziendale, CRM AI, HR AI, soluzioni AI su misura, automazione processi'
      : 'custom software powered by AI, custom software development, artificial intelligence applications, business AI assistant, AI CRM, HR AI, tailored AI solutions, process automation',
    canonicalUrl: 'https://agentics.eu.com/services/software-personalizzato',
    language
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const processSteps = [
    {
      number: '01',
      title: t('customGPTs.step1.title'),
      description: t('customGPTs.step1.description')
    },
    {
      number: '02',
      title: t('customGPTs.step2.title'),
      description: t('customGPTs.step2.description')
    },
    {
      number: '03',
      title: t('customGPTs.step3.title'),
      description: t('customGPTs.step3.description')
    },
    {
      number: '04',
      title: t('customGPTs.step4.title'),
      description: t('customGPTs.step4.description')
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      <BackHomeButton />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-graphite mb-6 leading-tight">
              {t('customGPTs.pageTitle')}
            </h1>

            <p className="text-lg md:text-xl text-graphite/70 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0">
              {t('customGPTs.pageDescription')}
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-aiblue text-white hover:bg-aiblue/90 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200"
            >
              {t('customGPTs.cta')}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-3">
              {t('constructionDemo.headline')}
            </h2>
            <p className="text-graphite/60 max-w-xl mx-auto text-sm md:text-base">
              {t('constructionDemo.demoSubtitle')}
            </p>
          </motion.div>
          <ConstructionDemo />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-graphite/50 text-sm max-w-2xl mx-auto mt-8"
          >
            {t('constructionDemo.footerDescription')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <p className="text-center text-graphite/40 text-xs uppercase tracking-widest mb-6 md:mb-8">
              {t('customGPTs.techStack')}
            </p>
            <div className="relative h-16 overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={30}
                direction="left"
                logoHeight={40}
                gap={80}
                hoverSpeed={0}
                fadeOut
                fadeOutColor="rgb(248, 248, 248)"
                ariaLabel={t('customGPTs.techStackAria')}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('customGPTs.processTitle')}
            </h2>
            <p className="text-graphite/60 max-w-2xl">
              {t('customGPTs.processSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 md:gap-8"
              >
                <span className="font-display font-bold text-2xl md:text-3xl text-aiblue">
                  {step.number}
                </span>
                <div className="pb-8 border-b border-graphite/10 flex-1">
                  <h3 className="font-display font-semibold text-lg text-graphite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-graphite/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-graphite/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('customGPTs.stat1.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('customGPTs.stat1.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('customGPTs.stat2.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('customGPTs.stat2.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('customGPTs.stat3.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('customGPTs.stat3.label')}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audit section */}
      <section className="py-16 md:py-24 bg-neutral/30 border-t border-neutral">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-aiblue mb-3">
              {t('customGPTs.auditTitle')}
            </p>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('customGPTs.auditSubtitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-neutral border border-neutral">
            {[
              { icon: ShieldCheck, labelKey: 'customGPTs.audit1.label', titleKey: 'customGPTs.audit1.title', descKey: 'customGPTs.audit1.desc' },
              { icon: FileCheck2,  labelKey: 'customGPTs.audit2.label', titleKey: 'customGPTs.audit2.title', descKey: 'customGPTs.audit2.desc' },
              { icon: Cloud,       labelKey: 'customGPTs.audit3.label', titleKey: 'customGPTs.audit3.title', descKey: 'customGPTs.audit3.desc' },
            ].map(({ icon: Icon, labelKey, titleKey, descKey }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-aiblue flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] font-semibold uppercase tracking-[.08em] text-aiblue">
                    {t(labelKey as any)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base text-graphite leading-snug">
                  {t(titleKey as any)}
                </h3>
                <p className="text-sm text-graphite/60 leading-relaxed flex-1">
                  {t(descKey as any)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-center text-graphite/40 text-xs sm:text-sm"
          >
            {t('customGPTs.auditNote')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 md:mt-18"
          >
            <p className="text-center text-graphite/50 text-xs uppercase tracking-widest mb-6 md:mb-8">
              {t('customGPTs.cyberPartners')}
            </p>
            <div className="relative h-20 overflow-hidden flex items-center">
              <LogoLoop
                logos={[
                  { node: <img src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Palo_Alto_logo_PNG_(3).png" alt="Palo Alto Networks" className="h-12 w-auto object-contain" />, title: 'Palo Alto Networks' },
                  { node: <img src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Okta_(3).png" alt="Okta" className="h-10 w-auto object-contain" />, title: 'Okta' },
                  { node: <img src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/CrowdStrike_logo.svg.png" alt="CrowdStrike" className="h-8 w-auto object-contain" />, title: 'CrowdStrike' },
                  { node: <img src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Cloudflare-Logo.wine.png" alt="Cloudflare" className="h-20 w-auto object-contain" />, title: 'Cloudflare' },
                ]}
                speed={25}
                direction="left"
                logoHeight={80}
                gap={100}
                hoverSpeed={0}
                fadeOut
                fadeOutColor="rgb(248, 248, 248)"
                ariaLabel="Cybersecurity platform logos"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study — Idrotec */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-aiblue mb-3">
              {t('customGPTs.clientsTitle')}
            </p>
            <div className="w-12 h-[2px] bg-aiblue" />
          </motion.div>

          {/* Client card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-neutral"
          >
            {/* Logo bar */}
            <div className="px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-5 border-b border-neutral bg-neutral/20">
              <div className="flex-shrink-0 w-[3px] h-10 bg-aiblue" />
              <div className="bg-white border border-neutral/60 px-3 py-2">
                <img
                  src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/idrotec%20logo%201%20(1).png"
                  alt="Idrotec Solution"
                  className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Content: text left, image right */}
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {/* Left: text */}
              <div className="flex-1 px-6 py-6 sm:px-8 sm:py-8 flex flex-col justify-center space-y-3 lg:border-r lg:border-neutral">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-graphite">
                  {t('customGPTs.idrotec.name')}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/50">
                  {t('customGPTs.idrotec.subtitle')}
                </p>
                <p className="text-[13px] sm:text-sm text-graphite/70 leading-relaxed">
                  {t('customGPTs.idrotec.desc1')}
                </p>
                <p className="text-[13px] sm:text-sm text-graphite/70 leading-relaxed">
                  {t('customGPTs.idrotec.desc2')}
                </p>
              </div>

              {/* Right: screenshot */}
              <div className="lg:w-[52%] flex-shrink-0 border-t border-neutral lg:border-t-0 bg-white">
                <img
                  src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Screenshot%202026-03-16%20at%2020.03.11%201.png"
                  alt="Idrotec Solution — Piattaforma gestionale"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </motion.div>

          {/* Netsin client card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-neutral"
          >
            <div className="px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-5 border-b border-neutral bg-neutral/20">
              <div className="flex-shrink-0 w-[3px] h-10 bg-aiblue" />
              <div className="bg-white border border-neutral/60 px-3 py-2">
                <img
                  src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/netsin%20logo.png"
                  alt="Netsin"
                  className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-stretch">
              <div className="flex-1 px-6 py-6 sm:px-8 sm:py-8 flex flex-col justify-center space-y-3 lg:border-r lg:border-neutral">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-graphite">
                  {t('customGPTs.netsin.name')}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/50">
                  {t('customGPTs.netsin.subtitle')}
                </p>
                <p className="text-[13px] sm:text-sm text-graphite/70 leading-relaxed">
                  {t('customGPTs.netsin.desc1')}
                </p>
                <p className="text-[13px] sm:text-sm text-graphite/70 leading-relaxed">
                  {t('customGPTs.netsin.desc2')}
                </p>
              </div>

              <div className="lg:w-[52%] flex-shrink-0 border-t border-neutral lg:border-t-0 bg-white">
                <img
                  src="https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Screenshot%202026-03-16%20at%2020.30.14.png"
                  alt="Netsin Platform — Certificazioni ISO 9001"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
};

export default CustomGPTs;
