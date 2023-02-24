import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

function response(result){
    stringtable = ''
    result['data'].array.forEach(element => {
        stringtable += `<div class="flex p-4 bg-gray-50 rounded">
        <span class="inline-flex w-8 h-8 mr-2 justify-center items-center bg-blue-50 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0675 1.37468C15.0374 1.26049 14.9775 1.15633 14.894 1.07284C14.8106 0.989341 14.7064 0.929498 14.5922 0.899417C13.2246 0.54421 11.7845 0.582467 10.4377 1.00979C9.09094 1.4371 7.89221 2.2361 6.97958 3.31479L6.23629 4.19734L4.49976 3.77836C4.07759 3.63118 3.61642 3.64173 3.20141 3.80806C2.78641 3.97439 2.44561 4.28526 2.24195 4.68328L0.775154 7.28321C0.72376 7.37428 0.694511 7.47616 0.689772 7.58062C0.685033 7.68509 0.704936 7.7892 0.747874 7.88454C0.790811 7.97989 0.855578 8.0638 0.936941 8.12949C1.0183 8.19518 1.11398 8.2408 1.21623 8.26268L3.26473 8.7018C3.09121 9.23004 2.9673 9.7733 2.89462 10.3245C2.88144 10.4258 2.8917 10.5287 2.92461 10.6254C2.95751 10.7221 3.01218 10.8099 3.08439 10.8821L5.15113 12.9489C5.21301 13.0108 5.28648 13.0599 5.36736 13.0934C5.44823 13.127 5.53492 13.1442 5.62246 13.1442C5.64167 13.1442 5.66087 13.1432 5.68041 13.1416C6.24397 13.0909 6.80068 12.9815 7.34145 12.8149L7.77057 14.8171C7.7925 14.9193 7.83816 15.0149 7.90386 15.0963C7.96956 15.1776 8.05346 15.2423 8.14879 15.2853C8.24413 15.3282 8.34822 15.3481 8.45266 15.3434C8.55711 15.3387 8.65899 15.3095 8.75007 15.2581L11.3536 13.7897C11.72 13.5671 12.0062 13.2338 12.171 12.8379C12.3358 12.4421 12.3705 12.0041 12.2702 11.5872L11.8244 9.7479L12.6492 8.98956C13.7319 8.07949 14.5339 6.8807 14.9621 5.53265C15.3902 4.18459 15.4267 2.74269 15.0675 1.37468ZM2.3816 7.14877L3.41903 5.30893C3.48347 5.18403 3.59325 5.08851 3.72587 5.04196C3.85848 4.99541 4.00388 5.00137 4.13225 5.0586L5.27719 5.33607L4.84385 5.8506C4.43303 6.34298 4.0777 6.87913 3.78431 7.44934L2.3816 7.14877ZM10.6951 12.6302L8.88453 13.6513L8.59819 12.3149C9.17861 12.0255 9.71936 11.6625 10.2071 11.235L10.7028 10.7792L10.9718 11.889C11.0066 12.026 10.9988 12.1704 10.9494 12.3029C10.8999 12.4354 10.8112 12.5496 10.6951 12.6302ZM11.7712 7.98668L9.31487 10.2442C8.34257 11.085 7.14328 11.6195 5.86793 11.7803L4.26506 10.1774C4.48034 8.89876 5.03287 7.70067 5.86565 6.70676L6.98454 5.37831C7.00318 5.35881 7.02058 5.33815 7.03663 5.31646L7.99325 4.18068C8.70057 3.34527 9.61691 2.71255 10.6487 2.34711C11.6805 1.98166 12.7909 1.8966 13.8663 2.1006C14.0752 3.17941 13.9911 4.29451 13.6226 5.32975C13.2541 6.36498 12.6148 7.28248 11.7712 7.98668ZM11.1559 3.8775C10.9581 3.8775 10.7648 3.93615 10.6003 4.04603C10.4359 4.15592 10.3077 4.31209 10.232 4.49482C10.1563 4.67755 10.1365 4.87861 10.1751 5.07259C10.2137 5.26658 10.309 5.44476 10.4488 5.58461C10.5887 5.72446 10.7668 5.8197 10.9608 5.85829C11.1548 5.89687 11.3559 5.87707 11.5386 5.80138C11.7213 5.7257 11.8775 5.59752 11.9874 5.43307C12.0973 5.26862 12.1559 5.07528 12.1559 4.8775C12.1559 4.74618 12.1301 4.61613 12.0798 4.4948C12.0296 4.37347 11.9559 4.26323 11.863 4.17036C11.7702 4.0775 11.6599 4.00384 11.5386 3.95359C11.4173 3.90334 11.2872 3.87748 11.1559 3.87749L11.1559 3.8775Z" fill="#2D70F5"></path>
          </svg>
        </span>
        <div class="text-xs">
          <p class="font-medium">${element.first_name}</p>
          <p class="text-gray-500">${element.email}</p>
        </div>
        <button class="ml-auto">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4999 10C17.2789 10 17.0669 10.0878 16.9107 10.2441C16.7544 10.4004 16.6666 10.6123 16.6666 10.8333V15.8333C16.6666 16.0543 16.5788 16.2663 16.4225 16.4226C16.2662 16.5789 16.0543 16.6667 15.8332 16.6667H4.16658C3.94557 16.6667 3.73361 16.5789 3.57732 16.4226C3.42104 16.2663 3.33325 16.0543 3.33325 15.8333V4.16667C3.33325 3.94565 3.42104 3.73369 3.57732 3.57741C3.73361 3.42113 3.94557 3.33333 4.16658 3.33333H9.16658C9.38759 3.33333 9.59956 3.24554 9.75584 3.08926C9.91212 2.93298 9.99991 2.72101 9.99991 2.5C9.99991 2.27899 9.91212 2.06702 9.75584 1.91074C9.59956 1.75446 9.38759 1.66667 9.16658 1.66667H4.16658C3.50354 1.66667 2.86765 1.93006 2.39881 2.3989C1.92997 2.86774 1.66658 3.50363 1.66658 4.16667V15.8333C1.66658 16.4964 1.92997 17.1323 2.39881 17.6011C2.86765 18.0699 3.50354 18.3333 4.16658 18.3333H15.8332C16.4963 18.3333 17.1322 18.0699 17.601 17.6011C18.0699 17.1323 18.3332 16.4964 18.3332 15.8333V10.8333C18.3332 10.6123 18.2455 10.4004 18.0892 10.2441C17.9329 10.0878 17.7209 10 17.4999 10ZM4.99991 10.6333V14.1667C4.99991 14.3877 5.08771 14.5996 5.24399 14.7559C5.40027 14.9122 5.61223 15 5.83325 15H9.36658C9.47625 15.0006 9.58497 14.9796 9.6865 14.9381C9.78803 14.8967 9.88038 14.8356 9.95825 14.7583L15.7249 8.98333L18.0916 6.66667C18.1697 6.5892 18.2317 6.49703 18.274 6.39548C18.3163 6.29393 18.3381 6.18501 18.3381 6.075C18.3381 5.96499 18.3163 5.85607 18.274 5.75452C18.2317 5.65297 18.1697 5.5608 18.0916 5.48333L14.5582 1.90833C14.4808 1.83023 14.3886 1.76823 14.2871 1.72592C14.1855 1.68362 14.0766 1.66183 13.9666 1.66183C13.8566 1.66183 13.7477 1.68362 13.6461 1.72592C13.5446 1.76823 13.4524 1.83023 13.3749 1.90833L11.0249 4.26667L5.24158 10.0417C5.16435 10.1195 5.10324 10.2119 5.06177 10.3134C5.0203 10.4149 4.99928 10.5237 4.99991 10.6333ZM13.9666 3.675L16.3249 6.03333L15.1416 7.21667L12.7832 4.85833L13.9666 3.675ZM6.66658 10.975L11.6082 6.03333L13.9666 8.39167L9.02491 13.3333H6.66658V10.975Z" fill="#8594A5"></path>
          </svg>
        </button>
        </div>`
    });

    setInner("demo",stringtable);

}

get("https://reqres.in/api/users",response);



