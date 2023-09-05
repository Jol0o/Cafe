import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function CarouselCard() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div data-aos="fade-right" className="service-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692418631/Rectangle_30_2_wnysmg.png"
          width={200}
          height={300}
          alt="img"
        />
        <div className="service-content">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="79"
              height="79"
              rx="39.5"
              fill="#D3AD7F"
              fillOpacity="0.3"
            />
            <g clipPath="url(#clip0_62_140)">
              <path
                d="M62.5395 44.4842C62.1139 46.2992 61.029 47.667 59.5137 48.6572C58.3953 49.3885 57.2025 50.0274 55.9857 50.5861C54.1372 51.4336 52.1748 51.9599 50.1872 52.383C50.0733 52.407 49.9402 52.4298 49.8599 52.5029C49.2365 53.0735 48.6228 53.6562 47.9526 54.2867C48.1636 54.2867 48.3219 54.2867 48.4789 54.2867C52.1424 54.2867 55.8059 54.2915 59.4682 54.2819C59.9633 54.2807 60.3541 54.4042 60.5579 54.8873C60.7665 55.3824 60.5387 55.748 60.197 56.0849C59.5365 56.737 58.8892 57.4012 58.2286 58.0533C56.8872 59.3756 55.2796 60.0409 53.3915 60.0409C43.5387 60.0361 33.6847 60.0361 23.8319 60.0409C21.9761 60.0409 20.3878 59.3983 19.0583 58.1168C18.3474 57.4323 17.6617 56.7203 16.9616 56.0226C16.638 55.7001 16.4845 55.3321 16.6691 54.8873C16.8597 54.4258 17.229 54.2819 17.7121 54.2831C21.3756 54.2915 25.039 54.2879 28.7013 54.2879H29.3103C29.1053 54.1093 28.9807 53.999 28.8536 53.8911C25.3076 50.863 23.1378 47.0544 22.5348 42.4199C22.3334 40.8699 22.3538 39.2839 22.3586 37.7147C22.3622 36.4584 23.5166 35.2896 24.7657 35.1397C24.9875 35.1133 25.2129 35.1001 25.437 35.0989C34.2134 35.0966 42.9909 35.0954 51.7672 35.0989C53.4779 35.0989 54.6287 36.0472 54.8672 37.656C54.9188 38.0084 54.8924 38.3728 54.8984 38.7325C54.902 38.9554 54.8984 39.1784 54.8984 39.3906C55.6992 39.2479 56.4676 39.0346 57.2444 38.9926C58.0236 38.9507 58.8412 38.9674 59.5905 39.158C61.258 39.5824 62.1271 40.792 62.4424 42.4427C62.464 42.5566 62.5059 42.6657 62.5395 42.7772V44.4854V44.4842ZM38.6285 37.0206C34.2325 37.0206 29.8366 37.0206 25.4406 37.0206C24.6626 37.0206 24.2526 37.3431 24.2706 38.0564C24.3078 39.5357 24.2658 41.0353 24.4984 42.4871C25.3268 47.6371 28.0876 51.4911 32.577 54.1093C32.7592 54.216 32.9954 54.2771 33.2064 54.2783C36.8099 54.2879 40.4135 54.2879 44.017 54.2783C44.2148 54.2783 44.4342 54.2232 44.6056 54.1261C48.3566 51.9922 50.8945 48.867 52.2251 44.7528C52.9084 42.6405 52.9983 40.4659 52.9528 38.2733C52.9336 37.3251 52.6399 37.0182 51.6809 37.0182C47.3293 37.0182 42.9789 37.0182 38.6273 37.0182L38.6285 37.0206ZM19.9502 56.2347C21.0675 57.5666 22.4365 58.1216 24.092 58.1192C33.7662 58.1061 43.4416 58.1132 53.1158 58.1108C53.4443 58.1108 53.7752 58.1037 54.1 58.0605C55.3791 57.8915 56.4029 57.2717 57.2756 56.2335H19.9502V56.2347ZM51.8511 50.037C52.8725 49.6858 53.7799 49.4089 54.6611 49.0648C56.3214 48.4175 57.9241 47.6598 59.2524 46.4275C60.2426 45.5092 60.7509 44.4183 60.5819 43.0277C60.438 41.8409 59.8878 41.1252 58.7333 40.937C57.4302 40.7237 56.1859 41.0569 54.9739 41.5065C54.8828 41.54 54.8157 41.733 54.8001 41.8589C54.4848 44.5058 53.6792 46.9849 52.3102 49.2758C52.1832 49.4892 52.0549 49.7014 51.8511 50.0394V50.037Z"
                fill="#D3AD7F"
              />
              <path
                d="M37.6431 29.5239C37.6623 28.0434 38.0315 26.9177 38.776 25.9096C39.7949 24.5286 39.8165 22.8119 38.8575 21.3913C38.4739 20.8231 38.5338 20.2717 39.0157 19.9324C39.4928 19.5968 40.0395 19.7322 40.4423 20.2837C41.8149 22.1658 41.8868 24.9793 40.4638 26.835C39.3945 28.2292 39.2938 30.3355 40.3368 31.6685C40.6868 32.1169 40.5526 32.6971 40.1126 33.0124C39.7062 33.3037 39.1344 33.2258 38.7951 32.7966C37.9836 31.7728 37.6491 30.5836 37.6431 29.5239Z"
                fill="#D3AD7F"
              />
              <path
                d="M47.2334 23.5662C47.219 24.8644 46.8666 25.9973 46.1209 27.0103C45.0804 28.4236 45.0552 30.1247 46.0298 31.574C46.4002 32.1255 46.3451 32.653 45.8812 33.0006C45.4244 33.3423 44.849 33.2116 44.4462 32.6745C43.0292 30.7864 43.0448 27.9489 44.5014 25.9589C45.3465 24.8045 45.5167 23.5578 45.0468 22.2223C44.9389 21.9166 44.7579 21.6337 44.5841 21.358C44.2412 20.8137 44.3048 20.2551 44.7699 19.9338C45.2422 19.6066 45.7805 19.7252 46.1701 20.2551C46.9061 21.2537 47.2286 22.3866 47.2346 23.5674L47.2334 23.5662Z"
                fill="#D3AD7F"
              />
              <path
                d="M35.7466 23.5453C35.7334 24.8676 35.3786 25.9993 34.6341 27.0122C33.5936 28.428 33.5684 30.1255 34.5442 31.5748C34.9146 32.1239 34.8583 32.6573 34.3944 33.0014C33.9484 33.3322 33.3778 33.2136 32.987 32.7089C31.564 30.8711 31.5365 27.9821 32.9654 26.0328C33.8321 24.8508 34.0431 23.5933 33.56 22.2219C33.4521 21.9162 33.2711 21.6333 33.0973 21.3576C32.7556 20.8157 32.8215 20.2523 33.2843 19.9334C33.759 19.6061 34.2937 19.726 34.6833 20.2571C35.4181 21.2569 35.7418 22.3885 35.7466 23.5453Z"
                fill="#D3AD7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_140">
                <rect
                  width="45.9495"
                  height="40.29"
                  fill="white"
                  transform="translate(16.59 19.75)"
                />
              </clipPath>
            </defs>
          </svg>
          <h5>type Of coffee</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit
            amet
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="service-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692418628/Rectangle_30_gmpuwq.png"
          width={200}
          height={300}
          alt="img"
        />
        <div className="service-content">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="79"
              height="79"
              rx="39.5"
              fill="#D3AD7F"
              fillOpacity="0.3"
            />
            <g clipPath="url(#clip0_62_140)">
              <path
                d="M62.5395 44.4842C62.1139 46.2992 61.029 47.667 59.5137 48.6572C58.3953 49.3885 57.2025 50.0274 55.9857 50.5861C54.1372 51.4336 52.1748 51.9599 50.1872 52.383C50.0733 52.407 49.9402 52.4298 49.8599 52.5029C49.2365 53.0735 48.6228 53.6562 47.9526 54.2867C48.1636 54.2867 48.3219 54.2867 48.4789 54.2867C52.1424 54.2867 55.8059 54.2915 59.4682 54.2819C59.9633 54.2807 60.3541 54.4042 60.5579 54.8873C60.7665 55.3824 60.5387 55.748 60.197 56.0849C59.5365 56.737 58.8892 57.4012 58.2286 58.0533C56.8872 59.3756 55.2796 60.0409 53.3915 60.0409C43.5387 60.0361 33.6847 60.0361 23.8319 60.0409C21.9761 60.0409 20.3878 59.3983 19.0583 58.1168C18.3474 57.4323 17.6617 56.7203 16.9616 56.0226C16.638 55.7001 16.4845 55.3321 16.6691 54.8873C16.8597 54.4258 17.229 54.2819 17.7121 54.2831C21.3756 54.2915 25.039 54.2879 28.7013 54.2879H29.3103C29.1053 54.1093 28.9807 53.999 28.8536 53.8911C25.3076 50.863 23.1378 47.0544 22.5348 42.4199C22.3334 40.8699 22.3538 39.2839 22.3586 37.7147C22.3622 36.4584 23.5166 35.2896 24.7657 35.1397C24.9875 35.1133 25.2129 35.1001 25.437 35.0989C34.2134 35.0966 42.9909 35.0954 51.7672 35.0989C53.4779 35.0989 54.6287 36.0472 54.8672 37.656C54.9188 38.0084 54.8924 38.3728 54.8984 38.7325C54.902 38.9554 54.8984 39.1784 54.8984 39.3906C55.6992 39.2479 56.4676 39.0346 57.2444 38.9926C58.0236 38.9507 58.8412 38.9674 59.5905 39.158C61.258 39.5824 62.1271 40.792 62.4424 42.4427C62.464 42.5566 62.5059 42.6657 62.5395 42.7772V44.4854V44.4842ZM38.6285 37.0206C34.2325 37.0206 29.8366 37.0206 25.4406 37.0206C24.6626 37.0206 24.2526 37.3431 24.2706 38.0564C24.3078 39.5357 24.2658 41.0353 24.4984 42.4871C25.3268 47.6371 28.0876 51.4911 32.577 54.1093C32.7592 54.216 32.9954 54.2771 33.2064 54.2783C36.8099 54.2879 40.4135 54.2879 44.017 54.2783C44.2148 54.2783 44.4342 54.2232 44.6056 54.1261C48.3566 51.9922 50.8945 48.867 52.2251 44.7528C52.9084 42.6405 52.9983 40.4659 52.9528 38.2733C52.9336 37.3251 52.6399 37.0182 51.6809 37.0182C47.3293 37.0182 42.9789 37.0182 38.6273 37.0182L38.6285 37.0206ZM19.9502 56.2347C21.0675 57.5666 22.4365 58.1216 24.092 58.1192C33.7662 58.1061 43.4416 58.1132 53.1158 58.1108C53.4443 58.1108 53.7752 58.1037 54.1 58.0605C55.3791 57.8915 56.4029 57.2717 57.2756 56.2335H19.9502V56.2347ZM51.8511 50.037C52.8725 49.6858 53.7799 49.4089 54.6611 49.0648C56.3214 48.4175 57.9241 47.6598 59.2524 46.4275C60.2426 45.5092 60.7509 44.4183 60.5819 43.0277C60.438 41.8409 59.8878 41.1252 58.7333 40.937C57.4302 40.7237 56.1859 41.0569 54.9739 41.5065C54.8828 41.54 54.8157 41.733 54.8001 41.8589C54.4848 44.5058 53.6792 46.9849 52.3102 49.2758C52.1832 49.4892 52.0549 49.7014 51.8511 50.0394V50.037Z"
                fill="#D3AD7F"
              />
              <path
                d="M37.6431 29.5239C37.6623 28.0434 38.0315 26.9177 38.776 25.9096C39.7949 24.5286 39.8165 22.8119 38.8575 21.3913C38.4739 20.8231 38.5338 20.2717 39.0157 19.9324C39.4928 19.5968 40.0395 19.7322 40.4423 20.2837C41.8149 22.1658 41.8868 24.9793 40.4638 26.835C39.3945 28.2292 39.2938 30.3355 40.3368 31.6685C40.6868 32.1169 40.5526 32.6971 40.1126 33.0124C39.7062 33.3037 39.1344 33.2258 38.7951 32.7966C37.9836 31.7728 37.6491 30.5836 37.6431 29.5239Z"
                fill="#D3AD7F"
              />
              <path
                d="M47.2334 23.5662C47.219 24.8644 46.8666 25.9973 46.1209 27.0103C45.0804 28.4236 45.0552 30.1247 46.0298 31.574C46.4002 32.1255 46.3451 32.653 45.8812 33.0006C45.4244 33.3423 44.849 33.2116 44.4462 32.6745C43.0292 30.7864 43.0448 27.9489 44.5014 25.9589C45.3465 24.8045 45.5167 23.5578 45.0468 22.2223C44.9389 21.9166 44.7579 21.6337 44.5841 21.358C44.2412 20.8137 44.3048 20.2551 44.7699 19.9338C45.2422 19.6066 45.7805 19.7252 46.1701 20.2551C46.9061 21.2537 47.2286 22.3866 47.2346 23.5674L47.2334 23.5662Z"
                fill="#D3AD7F"
              />
              <path
                d="M35.7466 23.5453C35.7334 24.8676 35.3786 25.9993 34.6341 27.0122C33.5936 28.428 33.5684 30.1255 34.5442 31.5748C34.9146 32.1239 34.8583 32.6573 34.3944 33.0014C33.9484 33.3322 33.3778 33.2136 32.987 32.7089C31.564 30.8711 31.5365 27.9821 32.9654 26.0328C33.8321 24.8508 34.0431 23.5933 33.56 22.2219C33.4521 21.9162 33.2711 21.6333 33.0973 21.3576C32.7556 20.8157 32.8215 20.2523 33.2843 19.9334C33.759 19.6061 34.2937 19.726 34.6833 20.2571C35.4181 21.2569 35.7418 22.3885 35.7466 23.5453Z"
                fill="#D3AD7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_140">
                <rect
                  width="45.9495"
                  height="40.29"
                  fill="white"
                  transform="translate(16.59 19.75)"
                />
              </clipPath>
            </defs>
          </svg>
          <h5>bean varieties</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit
            amet
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="service-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692418627/Rectangle_30_1_ivembc.png"
          width={200}
          height={300}
          alt="img"
        />
        <div className="service-content">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="79"
              height="79"
              rx="39.5"
              fill="#D3AD7F"
              fillOpacity="0.3"
            />
            <g clipPath="url(#clip0_62_140)">
              <path
                d="M62.5395 44.4842C62.1139 46.2992 61.029 47.667 59.5137 48.6572C58.3953 49.3885 57.2025 50.0274 55.9857 50.5861C54.1372 51.4336 52.1748 51.9599 50.1872 52.383C50.0733 52.407 49.9402 52.4298 49.8599 52.5029C49.2365 53.0735 48.6228 53.6562 47.9526 54.2867C48.1636 54.2867 48.3219 54.2867 48.4789 54.2867C52.1424 54.2867 55.8059 54.2915 59.4682 54.2819C59.9633 54.2807 60.3541 54.4042 60.5579 54.8873C60.7665 55.3824 60.5387 55.748 60.197 56.0849C59.5365 56.737 58.8892 57.4012 58.2286 58.0533C56.8872 59.3756 55.2796 60.0409 53.3915 60.0409C43.5387 60.0361 33.6847 60.0361 23.8319 60.0409C21.9761 60.0409 20.3878 59.3983 19.0583 58.1168C18.3474 57.4323 17.6617 56.7203 16.9616 56.0226C16.638 55.7001 16.4845 55.3321 16.6691 54.8873C16.8597 54.4258 17.229 54.2819 17.7121 54.2831C21.3756 54.2915 25.039 54.2879 28.7013 54.2879H29.3103C29.1053 54.1093 28.9807 53.999 28.8536 53.8911C25.3076 50.863 23.1378 47.0544 22.5348 42.4199C22.3334 40.8699 22.3538 39.2839 22.3586 37.7147C22.3622 36.4584 23.5166 35.2896 24.7657 35.1397C24.9875 35.1133 25.2129 35.1001 25.437 35.0989C34.2134 35.0966 42.9909 35.0954 51.7672 35.0989C53.4779 35.0989 54.6287 36.0472 54.8672 37.656C54.9188 38.0084 54.8924 38.3728 54.8984 38.7325C54.902 38.9554 54.8984 39.1784 54.8984 39.3906C55.6992 39.2479 56.4676 39.0346 57.2444 38.9926C58.0236 38.9507 58.8412 38.9674 59.5905 39.158C61.258 39.5824 62.1271 40.792 62.4424 42.4427C62.464 42.5566 62.5059 42.6657 62.5395 42.7772V44.4854V44.4842ZM38.6285 37.0206C34.2325 37.0206 29.8366 37.0206 25.4406 37.0206C24.6626 37.0206 24.2526 37.3431 24.2706 38.0564C24.3078 39.5357 24.2658 41.0353 24.4984 42.4871C25.3268 47.6371 28.0876 51.4911 32.577 54.1093C32.7592 54.216 32.9954 54.2771 33.2064 54.2783C36.8099 54.2879 40.4135 54.2879 44.017 54.2783C44.2148 54.2783 44.4342 54.2232 44.6056 54.1261C48.3566 51.9922 50.8945 48.867 52.2251 44.7528C52.9084 42.6405 52.9983 40.4659 52.9528 38.2733C52.9336 37.3251 52.6399 37.0182 51.6809 37.0182C47.3293 37.0182 42.9789 37.0182 38.6273 37.0182L38.6285 37.0206ZM19.9502 56.2347C21.0675 57.5666 22.4365 58.1216 24.092 58.1192C33.7662 58.1061 43.4416 58.1132 53.1158 58.1108C53.4443 58.1108 53.7752 58.1037 54.1 58.0605C55.3791 57.8915 56.4029 57.2717 57.2756 56.2335H19.9502V56.2347ZM51.8511 50.037C52.8725 49.6858 53.7799 49.4089 54.6611 49.0648C56.3214 48.4175 57.9241 47.6598 59.2524 46.4275C60.2426 45.5092 60.7509 44.4183 60.5819 43.0277C60.438 41.8409 59.8878 41.1252 58.7333 40.937C57.4302 40.7237 56.1859 41.0569 54.9739 41.5065C54.8828 41.54 54.8157 41.733 54.8001 41.8589C54.4848 44.5058 53.6792 46.9849 52.3102 49.2758C52.1832 49.4892 52.0549 49.7014 51.8511 50.0394V50.037Z"
                fill="#D3AD7F"
              />
              <path
                d="M37.6431 29.5239C37.6623 28.0434 38.0315 26.9177 38.776 25.9096C39.7949 24.5286 39.8165 22.8119 38.8575 21.3913C38.4739 20.8231 38.5338 20.2717 39.0157 19.9324C39.4928 19.5968 40.0395 19.7322 40.4423 20.2837C41.8149 22.1658 41.8868 24.9793 40.4638 26.835C39.3945 28.2292 39.2938 30.3355 40.3368 31.6685C40.6868 32.1169 40.5526 32.6971 40.1126 33.0124C39.7062 33.3037 39.1344 33.2258 38.7951 32.7966C37.9836 31.7728 37.6491 30.5836 37.6431 29.5239Z"
                fill="#D3AD7F"
              />
              <path
                d="M47.2334 23.5662C47.219 24.8644 46.8666 25.9973 46.1209 27.0103C45.0804 28.4236 45.0552 30.1247 46.0298 31.574C46.4002 32.1255 46.3451 32.653 45.8812 33.0006C45.4244 33.3423 44.849 33.2116 44.4462 32.6745C43.0292 30.7864 43.0448 27.9489 44.5014 25.9589C45.3465 24.8045 45.5167 23.5578 45.0468 22.2223C44.9389 21.9166 44.7579 21.6337 44.5841 21.358C44.2412 20.8137 44.3048 20.2551 44.7699 19.9338C45.2422 19.6066 45.7805 19.7252 46.1701 20.2551C46.9061 21.2537 47.2286 22.3866 47.2346 23.5674L47.2334 23.5662Z"
                fill="#D3AD7F"
              />
              <path
                d="M35.7466 23.5453C35.7334 24.8676 35.3786 25.9993 34.6341 27.0122C33.5936 28.428 33.5684 30.1255 34.5442 31.5748C34.9146 32.1239 34.8583 32.6573 34.3944 33.0014C33.9484 33.3322 33.3778 33.2136 32.987 32.7089C31.564 30.8711 31.5365 27.9821 32.9654 26.0328C33.8321 24.8508 34.0431 23.5933 33.56 22.2219C33.4521 21.9162 33.2711 21.6333 33.0973 21.3576C32.7556 20.8157 32.8215 20.2523 33.2843 19.9334C33.759 19.6061 34.2937 19.726 34.6833 20.2571C35.4181 21.2569 35.7418 22.3885 35.7466 23.5453Z"
                fill="#D3AD7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_140">
                <rect
                  width="45.9495"
                  height="40.29"
                  fill="white"
                  transform="translate(16.59 19.75)"
                />
              </clipPath>
            </defs>
          </svg>
          <h5>coffee & pastry</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit
            amet
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="service-card">
        <Image
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1692418626/Rectangle_32_reabp5.png"
          width={200}
          height={300}
          alt="img"
        />
        <div className="service-content">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="79"
              height="79"
              rx="39.5"
              fill="#D3AD7F"
              fillOpacity="0.3"
            />
            <g clipPath="url(#clip0_62_140)">
              <path
                d="M62.5395 44.4842C62.1139 46.2992 61.029 47.667 59.5137 48.6572C58.3953 49.3885 57.2025 50.0274 55.9857 50.5861C54.1372 51.4336 52.1748 51.9599 50.1872 52.383C50.0733 52.407 49.9402 52.4298 49.8599 52.5029C49.2365 53.0735 48.6228 53.6562 47.9526 54.2867C48.1636 54.2867 48.3219 54.2867 48.4789 54.2867C52.1424 54.2867 55.8059 54.2915 59.4682 54.2819C59.9633 54.2807 60.3541 54.4042 60.5579 54.8873C60.7665 55.3824 60.5387 55.748 60.197 56.0849C59.5365 56.737 58.8892 57.4012 58.2286 58.0533C56.8872 59.3756 55.2796 60.0409 53.3915 60.0409C43.5387 60.0361 33.6847 60.0361 23.8319 60.0409C21.9761 60.0409 20.3878 59.3983 19.0583 58.1168C18.3474 57.4323 17.6617 56.7203 16.9616 56.0226C16.638 55.7001 16.4845 55.3321 16.6691 54.8873C16.8597 54.4258 17.229 54.2819 17.7121 54.2831C21.3756 54.2915 25.039 54.2879 28.7013 54.2879H29.3103C29.1053 54.1093 28.9807 53.999 28.8536 53.8911C25.3076 50.863 23.1378 47.0544 22.5348 42.4199C22.3334 40.8699 22.3538 39.2839 22.3586 37.7147C22.3622 36.4584 23.5166 35.2896 24.7657 35.1397C24.9875 35.1133 25.2129 35.1001 25.437 35.0989C34.2134 35.0966 42.9909 35.0954 51.7672 35.0989C53.4779 35.0989 54.6287 36.0472 54.8672 37.656C54.9188 38.0084 54.8924 38.3728 54.8984 38.7325C54.902 38.9554 54.8984 39.1784 54.8984 39.3906C55.6992 39.2479 56.4676 39.0346 57.2444 38.9926C58.0236 38.9507 58.8412 38.9674 59.5905 39.158C61.258 39.5824 62.1271 40.792 62.4424 42.4427C62.464 42.5566 62.5059 42.6657 62.5395 42.7772V44.4854V44.4842ZM38.6285 37.0206C34.2325 37.0206 29.8366 37.0206 25.4406 37.0206C24.6626 37.0206 24.2526 37.3431 24.2706 38.0564C24.3078 39.5357 24.2658 41.0353 24.4984 42.4871C25.3268 47.6371 28.0876 51.4911 32.577 54.1093C32.7592 54.216 32.9954 54.2771 33.2064 54.2783C36.8099 54.2879 40.4135 54.2879 44.017 54.2783C44.2148 54.2783 44.4342 54.2232 44.6056 54.1261C48.3566 51.9922 50.8945 48.867 52.2251 44.7528C52.9084 42.6405 52.9983 40.4659 52.9528 38.2733C52.9336 37.3251 52.6399 37.0182 51.6809 37.0182C47.3293 37.0182 42.9789 37.0182 38.6273 37.0182L38.6285 37.0206ZM19.9502 56.2347C21.0675 57.5666 22.4365 58.1216 24.092 58.1192C33.7662 58.1061 43.4416 58.1132 53.1158 58.1108C53.4443 58.1108 53.7752 58.1037 54.1 58.0605C55.3791 57.8915 56.4029 57.2717 57.2756 56.2335H19.9502V56.2347ZM51.8511 50.037C52.8725 49.6858 53.7799 49.4089 54.6611 49.0648C56.3214 48.4175 57.9241 47.6598 59.2524 46.4275C60.2426 45.5092 60.7509 44.4183 60.5819 43.0277C60.438 41.8409 59.8878 41.1252 58.7333 40.937C57.4302 40.7237 56.1859 41.0569 54.9739 41.5065C54.8828 41.54 54.8157 41.733 54.8001 41.8589C54.4848 44.5058 53.6792 46.9849 52.3102 49.2758C52.1832 49.4892 52.0549 49.7014 51.8511 50.0394V50.037Z"
                fill="#D3AD7F"
              />
              <path
                d="M37.6431 29.5239C37.6623 28.0434 38.0315 26.9177 38.776 25.9096C39.7949 24.5286 39.8165 22.8119 38.8575 21.3913C38.4739 20.8231 38.5338 20.2717 39.0157 19.9324C39.4928 19.5968 40.0395 19.7322 40.4423 20.2837C41.8149 22.1658 41.8868 24.9793 40.4638 26.835C39.3945 28.2292 39.2938 30.3355 40.3368 31.6685C40.6868 32.1169 40.5526 32.6971 40.1126 33.0124C39.7062 33.3037 39.1344 33.2258 38.7951 32.7966C37.9836 31.7728 37.6491 30.5836 37.6431 29.5239Z"
                fill="#D3AD7F"
              />
              <path
                d="M47.2334 23.5662C47.219 24.8644 46.8666 25.9973 46.1209 27.0103C45.0804 28.4236 45.0552 30.1247 46.0298 31.574C46.4002 32.1255 46.3451 32.653 45.8812 33.0006C45.4244 33.3423 44.849 33.2116 44.4462 32.6745C43.0292 30.7864 43.0448 27.9489 44.5014 25.9589C45.3465 24.8045 45.5167 23.5578 45.0468 22.2223C44.9389 21.9166 44.7579 21.6337 44.5841 21.358C44.2412 20.8137 44.3048 20.2551 44.7699 19.9338C45.2422 19.6066 45.7805 19.7252 46.1701 20.2551C46.9061 21.2537 47.2286 22.3866 47.2346 23.5674L47.2334 23.5662Z"
                fill="#D3AD7F"
              />
              <path
                d="M35.7466 23.5453C35.7334 24.8676 35.3786 25.9993 34.6341 27.0122C33.5936 28.428 33.5684 30.1255 34.5442 31.5748C34.9146 32.1239 34.8583 32.6573 34.3944 33.0014C33.9484 33.3322 33.3778 33.2136 32.987 32.7089C31.564 30.8711 31.5365 27.9821 32.9654 26.0328C33.8321 24.8508 34.0431 23.5933 33.56 22.2219C33.4521 21.9162 33.2711 21.6333 33.0973 21.3576C32.7556 20.8157 32.8215 20.2523 33.2843 19.9334C33.759 19.6061 34.2937 19.726 34.6833 20.2571C35.4181 21.2569 35.7418 22.3885 35.7466 23.5453Z"
                fill="#D3AD7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_140">
                <rect
                  width="45.9495"
                  height="40.29"
                  fill="white"
                  transform="translate(16.59 19.75)"
                />
              </clipPath>
            </defs>
          </svg>
          <h5>coffee to go</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit
            amet
          </p>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
