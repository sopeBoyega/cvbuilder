interface IconProps {
  name: "home" | "notes" | "cloud" | "settings" | "exit" | "trash" | "edit" | string | undefined ;
  color? : string;
  fillColor?: string;
}

export default function IconItem(props: IconProps) {
  switch (props.name) {
    case "home": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 45 46"
          fill={props.fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3768 18.9327L25.8082 1.36409C24.9845 0.540686 23.8676 0.078125 22.7029 0.078125C21.5383 0.078125 20.4213 0.540686 19.5977 1.36409L2.02911 18.9327C1.6196 19.3397 1.29498 19.8239 1.07407 20.3573C0.853156 20.8908 0.740357 21.4628 0.74221 22.0401V43.1224C0.74221 43.8213 1.01986 44.4916 1.51407 44.9858C2.00828 45.48 2.67858 45.7577 3.3775 45.7577H42.0284C42.7273 45.7577 43.3976 45.48 43.8918 44.9858C44.386 44.4916 44.6637 43.8213 44.6637 43.1224V22.0401C44.6655 21.4628 44.5527 20.8908 44.3318 20.3573C44.1109 19.8239 43.7863 19.3397 43.3768 18.9327ZM39.3931 40.4871H6.01278V22.4025L22.7029 5.71231L39.3931 22.4025V40.4871Z"
            fill={props.color || "#94A3B8"}
          />
        </svg>
      );
    }
    case "notes": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 57 58"
          fill={props.fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.3206 25.3986L49.025 35.1902C47.0573 43.6465 43.1688 47.0665 35.8602 46.3638C34.689 46.2701 33.4241 46.0592 32.0654 45.7313L28.1301 44.7943C18.3619 42.4753 15.3401 37.6498 17.6358 27.8582L19.9314 18.0432C20.3999 16.0521 20.9621 14.3187 21.6648 12.8898C24.4055 7.22097 29.0671 5.69836 36.8909 7.54891L40.8029 8.46248C50.6179 10.7581 53.6162 15.607 51.3206 25.3986Z"
            stroke={props.color || "#94A3B8"}
            strokeWidth="4.68496"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.86 46.3607C34.4076 47.3446 32.5805 48.1644 30.3551 48.8906L26.654 50.1087C17.3544 53.1071 12.4586 50.6006 9.43681 41.301L6.43844 32.0482C3.44007 22.7485 5.92309 17.8293 15.2227 14.831L18.9238 13.6129C19.8843 13.3084 20.7978 13.0507 21.6645 12.8867C20.9618 14.3156 20.3996 16.0491 19.9311 18.0402L17.6355 27.8552C15.3399 37.6467 18.3617 42.4722 28.1298 44.7913L32.0651 45.7283C33.4238 46.0562 34.6887 46.267 35.86 46.3607Z"
            stroke={props.color || "#94A3B8"}
            strokeWidth="4.68496"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.1953 20.9219L41.5563 23.8031"
            stroke={props.color || "#94A3B8"}
            strokeWidth="4.68496"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.8906 29.9883L34.6838 31.7217"
            stroke={props.color || "#94A3B8"}
            strokeWidth="4.68496"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    case "cloud": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 57 57"
          fill={props.fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6106 30.6719C16.3691 30.0394 14.987 29.7114 13.5815 29.7114C2.61865 30.4845 2.61865 46.4369 13.5815 47.2099H39.5599C42.7222 47.2333 45.7675 46.0621 48.0866 43.9304C55.7934 37.2074 51.6706 23.6912 41.5276 22.4028C37.8733 0.453607 6.17925 8.79291 13.6987 29.7114"
            stroke={props.color || "#94A3B8"}
            strokeWidth="5.1535"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.7188 23.4311C38.9368 22.8221 40.2721 22.4941 41.6307 22.4707"
            stroke={props.color || "#94A3B8"}
            strokeWidth="5.1535"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    case "settings": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 57 57"
          fill={props.fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.6863 17.0636C26.4278 17.0636 24.2199 17.7334 22.342 18.9882C20.464 20.243 19.0004 22.0265 18.136 24.1131C17.2717 26.1998 17.0456 28.4959 17.4862 30.711C17.9268 32.9262 19.0144 34.961 20.6115 36.5581C22.2085 38.1551 24.2433 39.2427 26.4585 39.6833C28.6737 40.124 30.9698 39.8978 33.0564 39.0335C35.1431 38.1692 36.9266 36.7055 38.1814 34.8276C39.4362 32.9496 40.1059 30.7418 40.1059 28.4832C40.1024 25.4556 38.8982 22.553 36.7574 20.4122C34.6165 18.2714 31.7139 17.0671 28.6863 17.0636ZM28.6863 34.6322C27.4702 34.6322 26.2813 34.2716 25.2701 33.5959C24.2589 32.9202 23.4708 31.9599 23.0054 30.8363C22.54 29.7127 22.4182 28.4764 22.6555 27.2836C22.8928 26.0908 23.4784 24.9951 24.3383 24.1352C25.1983 23.2752 26.2939 22.6896 27.4867 22.4523C28.6795 22.2151 29.9159 22.3368 31.0395 22.8023C32.1631 23.2677 33.1234 24.0558 33.7991 25.067C34.4747 26.0782 34.8354 27.267 34.8354 28.4832C34.8354 30.114 34.1875 31.678 33.0344 32.8312C31.8812 33.9844 30.3172 34.6322 28.6863 34.6322ZM53.6908 23.7463C53.6165 23.3751 53.4631 23.0243 53.241 22.7177C53.019 22.4111 52.7335 22.156 52.4039 21.9696L46.301 18.4889L46.2769 11.613C46.2756 11.2315 46.1914 10.8548 46.0303 10.509C45.8691 10.1632 45.6348 9.85652 45.3436 9.61014C42.8842 7.52931 40.0525 5.93385 36.9985 4.90835C36.6501 4.79084 36.281 4.74752 35.9149 4.78118C35.5488 4.81484 35.1938 4.92474 34.8727 5.1038L28.6863 8.55822L22.5 5.1016C22.1785 4.92156 21.8228 4.81094 21.4559 4.7769C21.089 4.74285 20.719 4.78614 20.3698 4.90396C17.315 5.93372 14.4832 7.53366 12.0247 9.61893C11.7344 9.86504 11.5009 10.1711 11.3401 10.5161C11.1794 10.8611 11.0953 11.2368 11.0936 11.6174L11.0629 18.4998L4.96876 21.9718C4.63915 22.1589 4.35376 22.4148 4.13206 22.7221C3.91035 23.0295 3.75754 23.3811 3.68406 23.7529C3.06365 26.8781 3.06365 30.0949 3.68406 33.2201C3.75813 33.5911 3.9112 33.9418 4.13288 34.2484C4.35456 34.5549 4.63965 34.8102 4.96876 34.9967L11.0782 38.4775L11.1024 45.3534C11.1037 45.7349 11.1879 46.1116 11.349 46.4574C11.5102 46.8032 11.7445 47.1099 12.0357 47.3562C14.4951 49.4371 17.3268 51.0325 20.3808 52.058C20.7292 52.1755 21.0983 52.2189 21.4644 52.1852C21.8305 52.1515 22.1855 52.0416 22.5066 51.8626L28.6863 48.4082L34.8661 51.8648C35.1876 52.0448 35.5433 52.1554 35.9102 52.1895C36.2772 52.2235 36.6471 52.1802 36.9963 52.0624C40.0511 51.0327 42.8829 49.4327 45.3414 47.3475C45.6317 47.1013 45.8652 46.7953 46.026 46.4503C46.1867 46.1053 46.2708 45.7296 46.2725 45.349L46.3032 38.4665L52.4105 34.9945C52.7401 34.8075 53.0255 34.5516 53.2472 34.2442C53.4689 33.9369 53.6217 33.5853 53.6952 33.2135C54.3142 30.088 54.3127 26.8712 53.6908 23.7463ZM48.7211 31.0328L42.8181 34.3884C42.3987 34.6262 42.0529 34.975 41.8189 35.3964C41.7003 35.616 41.5751 35.8203 41.4455 36.0289C41.1853 36.4444 41.0461 36.9243 41.0437 37.4146L41.0129 44.0753C39.5922 45.1444 38.0363 46.0209 36.3858 46.682L30.4234 43.3462C30.0303 43.126 29.5872 43.0103 29.1365 43.0102H29.0729C28.8225 43.0102 28.5678 43.0102 28.3174 43.0102C27.8465 42.9991 27.3811 43.1135 26.969 43.3418L21.0001 46.6711C19.3468 46.0132 17.7873 45.1405 16.362 44.0753L16.3378 37.4344C16.3358 36.9433 16.1966 36.4626 15.9359 36.0465C15.8086 35.84 15.6812 35.627 15.5626 35.414C15.3284 34.9951 14.9835 34.6487 14.5656 34.4126L8.65816 31.0372C8.42867 29.3437 8.42867 27.627 8.65816 25.9336L14.5612 22.578C14.9799 22.3403 15.3255 21.9924 15.5604 21.5721C15.679 21.3525 15.8042 21.1461 15.9338 20.9375C16.194 20.522 16.3332 20.0421 16.3356 19.5518L16.3598 12.8911C17.781 11.8251 19.3368 10.9515 20.9869 10.2931L26.9493 13.629C27.3611 13.86 27.8278 13.9753 28.2998 13.9628C28.5502 13.9628 28.8049 13.9628 29.0553 13.9628C29.5262 13.9739 29.9916 13.8594 30.4037 13.6312L36.3726 10.2953C38.0259 10.9532 39.5853 11.8259 41.0107 12.8911L41.0349 19.532C41.0369 20.023 41.1761 20.5038 41.4367 20.9199C41.5641 21.1263 41.6915 21.3394 41.8101 21.5524C42.0443 21.9713 42.3892 22.3177 42.8071 22.5538L48.7145 25.9204C48.947 27.6165 48.9492 29.3362 48.7211 31.0328Z"
            fill={!props.color ? "#94A3B8" : props.color}
          />
        </svg>
      );
    }
    case "exit": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 57 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5909 12.1686H13.4811V12.2784V45.6587V45.7685H13.5909H25.0105C25.6803 45.7685 26.3226 46.0346 26.7963 46.5082C27.2699 46.9818 27.5359 47.6242 27.5359 48.294C27.5359 48.9638 27.2699 49.6061 26.7963 50.0798C26.3226 50.5534 25.6803 50.8195 25.0105 50.8195H10.9556C10.2858 50.8195 9.64343 50.5534 9.16981 50.0798C8.69619 49.6061 8.43012 48.9638 8.43012 48.294V9.6431C8.43012 8.9733 8.69619 8.33093 9.16981 7.85731C9.64343 7.38369 10.2858 7.11762 10.9556 7.11762H25.0105C25.6803 7.11762 26.3226 7.38369 26.7963 7.85731C27.2699 8.33093 27.5359 8.9733 27.5359 9.6431C27.5359 10.3129 27.2699 10.9553 26.7963 11.4289C26.3226 11.9025 25.6803 12.1686 25.0105 12.1686H13.5909ZM51.3933 27.1817L51.3934 27.1818C51.6287 27.4166 51.8153 27.6955 51.9426 28.0025C52.0699 28.3096 52.1353 28.6387 52.1351 28.9711C52.1349 29.3035 52.0691 29.6326 51.9415 29.9395C51.8138 30.2464 51.6269 30.5251 51.3913 30.7596L51.3911 30.7598L42.6068 39.544C42.1323 40.0185 41.4888 40.2851 40.8178 40.2851C40.1468 40.2851 39.5033 40.0185 39.0288 39.544C38.5543 39.0696 38.2877 38.426 38.2877 37.755C38.2877 37.084 38.5543 36.4405 39.0288 35.966C39.0288 35.966 39.0288 35.966 39.0288 35.966L43.3155 31.6815L43.5031 31.494H43.2379H25.0105C24.3407 31.494 23.6983 31.2279 23.2247 30.7543C22.7511 30.2807 22.485 29.6383 22.485 28.9685C22.485 28.2987 22.7511 27.6564 23.2247 27.1828C23.6983 26.7091 24.3407 26.4431 25.0105 26.4431H43.2379H43.5032L43.3155 26.2556L39.031 21.9755C39.031 21.9755 39.0309 21.9754 39.0309 21.9754C38.5565 21.501 38.2899 20.8574 38.2899 20.1864C38.2899 19.5154 38.5565 18.8719 39.031 18.3974C39.5055 17.9229 40.149 17.6564 40.82 17.6564C41.491 17.6564 42.1345 17.9229 42.609 18.3974L51.3933 27.1817Z"
            fill="white"
            stroke="#475569"
            strokeWidth="0.219607"
          />
        </svg>
      );
    }
    case "trash": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.022 16.0588V15.949H9.91215H9.03372C8.36392 15.949 7.72156 15.6829 7.24794 15.2093C6.77432 14.7357 6.50824 14.0933 6.50824 13.4235C6.50824 12.7537 6.77432 12.1113 7.24794 11.6377C7.72156 11.1641 8.36392 10.898 9.03372 10.898H47.6846C48.3544 10.898 48.9968 11.1641 49.4704 11.6377C49.944 12.1113 50.2101 12.7537 50.2101 13.4235C50.2101 14.0933 49.944 14.7357 49.4704 15.2093C48.9968 15.6829 48.3544 15.949 47.6846 15.949H46.8062H46.6964V16.0588V45.9254C46.6964 47.0611 46.2452 48.1503 45.4421 48.9534C44.639 49.7565 43.5498 50.2077 42.414 50.2077H14.3043C13.1686 50.2077 12.0793 49.7565 11.2762 48.9534C10.4731 48.1503 10.022 47.0611 10.022 45.9254V16.0588ZM41.5356 45.1567H41.6454V45.0469V16.0588V15.949H41.5356H15.1827H15.0729V16.0588V45.0469V45.1567H15.1827H41.5356ZM17.0494 4.63919C17.0494 3.96939 17.3155 3.32703 17.7891 2.85341C18.2627 2.37979 18.9051 2.11371 19.5749 2.11371H37.1435C37.8133 2.11371 38.4556 2.37979 38.9292 2.85341C39.4029 3.32703 39.6689 3.96939 39.6689 4.63919C39.6689 5.30899 39.4029 5.95136 38.9292 6.42498C38.4556 6.8986 37.8133 7.16468 37.1435 7.16468H19.5749C18.9051 7.16468 18.2627 6.8986 17.7891 6.42498C17.3155 5.95136 17.0494 5.30899 17.0494 4.63919Z"
            fill="white"
            stroke="white"
            strokeWidth="0.219607"
          />
        </svg>
      );
    }
    case "edit": {
      return (
        //prettier ignore
        <svg
          width="20"
          height="20"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.915 13.3109L40.4676 1.86094C39.9918 1.3849 39.4268 1.00727 38.805 0.749628C38.1831 0.491984 37.5166 0.359375 36.8435 0.359375C36.1705 0.359375 35.504 0.491984 34.8821 0.749628C34.2603 1.00727 33.6953 1.3849 33.2195 1.86094L1.6264 33.4566C1.14884 33.931 0.77021 34.4956 0.512483 35.1174C0.254757 35.7393 0.123057 36.4062 0.125022 37.0794V48.5293C0.125022 49.8883 0.664888 51.1917 1.62586 52.1527C2.58682 53.1136 3.89018 53.6535 5.24919 53.6535H16.6991C17.3723 53.6553 18.0391 53.5236 18.661 53.2658C19.2829 53.0081 19.8474 52.6296 20.3219 52.1521L51.915 20.5565C52.8756 19.5956 53.4153 18.2924 53.4153 16.9337C53.4153 15.5749 52.8756 14.2718 51.915 13.3109ZM16.2662 47.5045H6.27403V37.5124L27.7955 15.9908L37.7877 25.983L16.2662 47.5045ZM42.1432 21.6274L32.1511 11.6353L36.8499 6.93643L46.8421 16.9286L42.1432 21.6274Z"
            fill={props.color || "#94A3B8"}
          />
        </svg>
      );
    }
  }
}
