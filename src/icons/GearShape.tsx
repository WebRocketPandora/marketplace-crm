import React from "react"
import {Icon} from "~types/index"

const GearShape: React.FC<Icon> = ({className, outline}) => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {outline ? (
        <path d="M9.10352 19.208H10.8877C11.6172 19.208 12.1885 18.751 12.3643 18.0479L12.7158 16.5098L12.9443 16.4219L14.2891 17.2568C14.9043 17.6436 15.6338 17.5381 16.1523 17.0195L17.3828 15.7891C17.9102 15.2617 17.998 14.541 17.6113 13.9346L16.7764 12.5898L16.8643 12.3789L18.4023 12.0186C19.0967 11.8428 19.5537 11.2715 19.5537 10.542V8.81055C19.5537 8.08105 19.1055 7.50977 18.4023 7.33398L16.873 6.96484L16.7852 6.73633L17.6201 5.40039C18.0068 4.79395 17.9189 4.07324 17.3916 3.53711L16.1611 2.30664C15.6514 1.78809 14.9219 1.69141 14.3066 2.06934L12.9619 2.89551L12.7158 2.80762L12.3643 1.26074C12.1885 0.557617 11.6172 0.109375 10.8877 0.109375H9.10352C8.36523 0.109375 7.79395 0.557617 7.62695 1.26074L7.27539 2.80762L7.0293 2.89551L5.68457 2.06934C5.06055 1.69141 4.33984 1.78809 3.83008 2.30664L2.59082 3.53711C2.07227 4.07324 1.97559 4.79395 2.3623 5.40039L3.19727 6.73633L3.10938 6.96484L1.58887 7.33398C0.885742 7.50977 0.4375 8.08105 0.4375 8.81055V10.542C0.4375 11.2715 0.894531 11.8428 1.58887 12.0186L3.12695 12.3789L3.20605 12.5898L2.37109 13.9346C1.98438 14.541 2.08105 15.2617 2.59961 15.7891L3.83887 17.0195C4.34863 17.5381 5.07812 17.6436 5.69336 17.2568L7.03809 16.4219L7.27539 16.5098L7.62695 18.0479C7.79395 18.751 8.36523 19.208 9.10352 19.208ZM9.33203 17.5908C9.18262 17.5908 9.10352 17.5293 9.08594 17.3975L8.55859 15.2354C8.00488 15.1035 7.46875 14.875 7.03809 14.6025L5.13965 15.7715C5.02539 15.8418 4.91992 15.833 4.81445 15.7275L3.8916 14.8047C3.78613 14.708 3.78613 14.6025 3.85645 14.4883L5.02539 12.5898C4.7793 12.168 4.55078 11.6406 4.41895 11.0869L2.24805 10.5684C2.11621 10.5508 2.0459 10.4717 2.0459 10.3223V9.02148C2.0459 8.86328 2.10742 8.80176 2.24805 8.7666L4.41016 8.25684C4.54199 7.66797 4.79688 7.12305 5.0166 6.72754L3.84766 4.84668C3.77734 4.72363 3.77734 4.61816 3.87402 4.5127L4.80566 3.59863C4.91113 3.50195 5.00781 3.48438 5.13965 3.56348L7.02051 4.71484C7.41602 4.46875 8.00488 4.22266 8.56738 4.08203L9.08594 1.91992C9.10352 1.78809 9.18262 1.71777 9.33203 1.71777H10.6592C10.8086 1.71777 10.8789 1.7793 10.9053 1.91992L11.4326 4.09082C12.0039 4.23145 12.5225 4.46875 12.9619 4.71484L14.8428 3.56348C14.9746 3.49316 15.0713 3.50195 15.1768 3.60742L16.1084 4.52148C16.2139 4.61816 16.2139 4.72363 16.1348 4.84668L14.9746 6.72754C15.1855 7.12305 15.4492 7.66797 15.5811 8.25684L17.7432 8.7666C17.8838 8.80176 17.9365 8.86328 17.9365 9.02148V10.3223C17.9365 10.4717 17.875 10.5508 17.7432 10.5684L15.5723 11.0869C15.4404 11.6406 15.2031 12.1768 14.957 12.5898L16.126 14.4795C16.1963 14.6025 16.1963 14.6992 16.0908 14.7959L15.168 15.7275C15.0625 15.833 14.957 15.8418 14.8428 15.7715L12.9531 14.6025C12.5137 14.875 12.0127 15.0947 11.4326 15.2354L10.9053 17.3975C10.8789 17.5293 10.8086 17.5908 10.6592 17.5908H9.33203ZM10 12.9941C11.8281 12.9941 13.3311 11.4912 13.3311 9.6543C13.3311 7.83496 11.8281 6.33203 10 6.33203C8.16309 6.33203 6.65137 7.83496 6.65137 9.6543C6.65137 11.4912 8.16309 12.9941 10 12.9941ZM10 11.4736C8.99805 11.4736 8.18066 10.6562 8.18066 9.6543C8.18066 8.66992 9.00684 7.85254 10 7.85254C10.9756 7.85254 11.793 8.66992 11.793 9.6543C11.793 10.6475 10.9756 11.4736 10 11.4736Z" />
      ) : (
        <path d="M9.2002 19.0059H10.8086C11.3359 19.0059 11.7314 18.6895 11.8457 18.1709L12.2852 16.3164C12.584 16.2109 12.8652 16.0967 13.1289 15.9736L14.7549 16.9756C15.1855 17.248 15.7041 17.2041 16.0645 16.8438L17.1982 15.71C17.5586 15.3496 17.6113 14.8135 17.3213 14.374L16.3281 12.7656C16.4512 12.502 16.5654 12.2207 16.6533 11.9482L18.5254 11.5088C19.0439 11.3945 19.3516 10.999 19.3516 10.4717V8.88965C19.3516 8.37109 19.0439 7.9668 18.5254 7.85254L16.6709 7.4043C16.5742 7.09668 16.4512 6.82422 16.3457 6.58691L17.3389 4.94336C17.6201 4.49512 17.585 3.99414 17.207 3.625L16.0645 2.49121C15.6953 2.15723 15.2295 2.0957 14.7812 2.3418L13.1289 3.36133C12.874 3.23828 12.5928 3.12402 12.2939 3.01855L11.8457 1.1377C11.7314 0.619141 11.3359 0.302734 10.8086 0.302734H9.2002C8.66406 0.302734 8.26855 0.619141 8.1543 1.1377L7.71484 3.00977C7.41602 3.10645 7.12598 3.2207 6.8623 3.35254L5.21875 2.3418C4.77051 2.0957 4.31348 2.14844 3.93555 2.49121L2.79297 3.625C2.41504 3.99414 2.37988 4.49512 2.66113 4.94336L3.6543 6.58691C3.54883 6.82422 3.43457 7.09668 3.3291 7.4043L1.47461 7.85254C0.956055 7.9668 0.648438 8.37109 0.648438 8.88965V10.4717C0.648438 10.999 0.956055 11.3945 1.47461 11.5088L3.34668 11.9482C3.43457 12.2207 3.54883 12.502 3.67188 12.7656L2.67871 14.374C2.38867 14.8135 2.44141 15.3496 2.81055 15.71L3.93555 16.8438C4.2959 17.2041 4.81445 17.248 5.25391 16.9756L6.87109 15.9736C7.13477 16.0967 7.41602 16.2109 7.71484 16.3164L8.1543 18.1709C8.26855 18.6895 8.66406 19.0059 9.2002 19.0059ZM10 12.7305C8.3125 12.7305 6.93262 11.3418 6.93262 9.64551C6.93262 7.9668 8.3125 6.58691 10 6.58691C11.6963 6.58691 13.0762 7.9668 13.0762 9.64551C13.0762 11.3418 11.6963 12.7305 10 12.7305Z" />
      )}
    </svg>
  )
}

export default GearShape