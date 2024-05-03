/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import FinancialCard from "../components/FinancialCard";
import BadgeText from "../components/BadgeTextComponent";
import SimpleCard from "../components/SimpleCard";
import PricingCard from "../components/PricingCard";

const Home = () => {
  const [priceType, setPriceType] = useState(0);
  const [checked, setChecked] = useState(true);

  const priceTypeOptions = [
    { icon: "pi pi-user", value: 0, text: "Individual Use" },
    { icon: "pi pi-briefcase", value: 1, text: "Commercial Use" },
  ];

  const priceTypeTemplate = (option) => {
    return (
      <span>
        <i className={option.icon}></i> {option.text}
      </span>
    );
  };

  const data = {
    stockWebSockets: {
      text: "Stock WebSockets",
      data: [
        { text: "Trades", value: "WS", type: null },
        { text: "Quotes", value: "WS", type: null },
        { text: "Aggregates (Per Second)", value: "WS", type: null },
        { text: "Aggregates (Per Minute)", value: "WS", type: null },
      ],
    },
    stockAPI: {
      text: "Stock API",
      data: [
        { text: "Trades", value: "GET", type: "success" },
        { text: "Quotes(NBBO)", value: "GET", type: "success" },
        { text: "Last Trade for a Symbol", value: "GET", type: "success" },
        { text: "Last Quote for a Symbol", value: "GET", type: "success" },
        { text: "Daily Open/Close", value: "GET", type: "success" },
        { text: "Grouped Daily", value: "GET", type: "success" },
        { text: "Previous Close", value: "GET", type: "success" },
        { text: "Aggregates(Bars)", value: "GET", type: "success" },
        { text: "Snapshot - All Tickers", value: "GET", type: "success" },
        { text: "Snapshot - Ticker", value: "GET", type: "success" },
        { text: "Snapshot - Gainers/Losers", value: "GET", type: "success" },
      ],
    },
    referenceDataAPI: {
      text: "Reference Data API",
      data: [
        { text: "Tickers", value: "GET", type: "success" },
        { text: "Tickers Types", value: "GET", type: "success" },
        { text: "Tickers Details", value: "GET", type: "success" },
        { text: "Options Contracts", value: "GET", type: "success" },
        { text: "Ticker News", value: "GET", type: "success" },
        { text: "Stock Splits", value: "GET", type: "success" },
        { text: "Stock Dividends", value: "GET", type: "success" },
        { text: "Stock Financials", value: "GET", type: "success" },
        { text: "Market Holidays", value: "GET", type: "success" },
        { text: "Market Status", value: "GET", type: "success" },
        { text: "Condition Mappings", value: "GET", type: "success" },
        { text: "Exchanges", value: "GET", type: "success" },
      ],
    },
    forexWebSockets: {
      text: "Forex WebSockets",
      data: [
        { text: "Quotes", value: "WS", type: null },
        { text: "Aggregates (Per Minute)", value: "WS", type: null },
      ],
    },
    forexAPI: {
      text: "Forex API",
      data: [
        { text: "Quotes(BBO)", value: "GET", type: "success" },
        {
          text: "Real-time Currency Conversion",
          value: "GET",
          type: "success",
        },
        {
          text: "Last Quote for a Currency Pair",
          value: "GET",
          type: "success",
        },
        { text: "Grouped Daily (Bars)", value: "GET", type: "success" },
        { text: "Previous Close", value: "GET", type: "success" },
        { text: "Aggregates (Bars)", value: "GET", type: "success" },
        { text: "Snapshot - Ticker", value: "GET", type: "success" },
        { text: "Snapshot - All Tickers", value: "GET", type: "success" },
        { text: "Snapshot - Gainers/Losers", value: "GET", type: "success" },
      ],
    },
    cryptoWebSockets: {
      text: "Crypto WebSockets",
      data: [
        { text: "Trades", value: "WS", type: null },
        { text: "Quotes", value: "WS", type: null },
        { text: "Level 2 Book", value: "WS", type: null },
        { text: "Aggregates (Per Minute)", value: "WS", type: null },
      ],
    },
    cryptoAPI: {
      text: "Crypto API",
      data: [
        { text: "Last Trade for a Crypto Pair", value: "GET", type: "success" },
        { text: "Daily Open/Close", value: "GET", type: "success" },
        { text: "Trades", value: "GET", type: "success" },
        { text: "Grouped Daily (Bars)", value: "GET", type: "success" },
        { text: "Previous Close", value: "GET", type: "success" },
        { text: "Aggregates (Bars)", value: "GET", type: "success" },
        { text: "Snapshot - All Tickers", value: "GET", type: "success" },
        { text: "Snapshot - Ticker", value: "GET", type: "success" },
        {
          text: "Snapshot - Ticker Full Book (Level 2)",
          value: "GET",
          type: "success",
        },
        { text: "Snapshot - Gainers/Losers", value: "GET", type: "success" },
      ],
    },
  };

  return (
    <>
      <div className="bg-stone-200/40 postSection">
        <div className="relative overflow-hidden">
          <div className="svg_background">
            <object
              data="poly-hero-graphic.svg"
              type="image/svg+xml"
              width="1540"
              height="960"
            ></object>
          </div>
          <div className="container slideTitle m-auto">
            <p>
              <Badge value="New" severity="success" />
              <span className="introduce"> Introducing:</span>
              <span className="introduce_title">
                {" "}
                Options Chain Snapshot API
              </span>
            </p>
            <h1>Market Data APIs</h1>
            <h2>Stocks, Options, Forex, and More</h2>
            <h3>Built by Developers for Developers</h3>
            <div>
              <Button
                label="Get your Free API Key"
                icon="pi pi-arrow-right"
                iconPos="right"
              />
              <Button label="View Pricing" severity="secondary" outlined />
            </div>
          </div>
        </div>
        <div>
          <div className="py-32">
            <div className="container m-auto">
              <h3 className="mb-10">
                <center>
                  Trusted by Top Companies, Governments, and Institutions.
                </center>
              </h3>
              <div className="other_site">
                <div>
                  <img
                    src="logo-google.svg"
                    alt="google"
                    style={{ height: "45px" }}
                  />
                </div>
                <div>
                  <img
                    src="logo-stanford.svg"
                    alt="stanford"
                    style={{ height: "26px" }}
                  />
                </div>
                <div>
                  <img
                    src="logo-public.svg"
                    alt="public"
                    style={{ height: "42px" }}
                  />
                </div>
                <div>
                  <img
                    src="logo-revolut.svg"
                    alt="revolut"
                    style={{ height: "31px" }}
                  />
                </div>
                <div>
                  <img
                    src="logo-motley-fool.svg"
                    alt="motely"
                    style={{ height: "65px" }}
                  />
                </div>
                <div>
                  <img
                    src="logo-sec.webp"
                    alt="sec"
                    style={{ height: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white financialCardList relative">
        <div className="container m-auto mt-32 pt-32">
          <div className="mb-12">
            <h2 className="blacksubtitle">Real-time & Historical</h2>
            <h2 className="subtitle">Financial Market Data APIs</h2>
          </div>
          <div className="w-full grid tablet:grid-cols-1 laptop:grid-cols-3 gap-4">
            <FinancialCard
              title={"Stock API"}
              subtitle={"100% Market Coverage"}
              text={
                "Real-time and historical stock data APIs for all US stocks from all US stock exchanges + dark pools."
              }
              svg={
                <svg
                  className="svg-inline--fa fa-candlestick"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="candlestick"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M32 464H0V296h32v-32h16v32h32v168H48v48H32v-48zM8 304v152h64V304H8zm456 72v72h-16v-72h-32V192h32v-40h16v40h32v184h-32zm-40-8h64V200h-64v168zm144 0h32v144h-80V368h32v-32h16v32zm-40 136h64V376h-64v128zM152 224h32v112h-32v64h-16v-64h-32V224h32v-32h16v32zm-40 8v96h64v-96h-64zm232-88h-32v-16h32v-16h16v16h32v16h-32v32h-16v-32zm-24-8h64-64zM256 32h32v192h-32v32h-16v-32h-32V32h32V0h16v32zm-40 8v176h64V40h-64z"
                  ></path>
                </svg>
              }
            />
            <FinancialCard
              title={"Forex API"}
              subtitle={"1K+ Currency Pairs"}
              text={
                "Tick by tick updates on over 1,000 currency pairs from the world's leading banking institutions."
              }
              svg={
                <svg
                  className="svg-inline--fa fa-currencies"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="currencies"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 497 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M376.74 265.934c66.484 0 119.976 53.493 119.976 119.976 0 66.484-53.492 120.74-119.976 119.977-65.72 0-119.976-53.493-119.976-119.977 0-65.719 53.493-119.976 119.976-119.976zm-256.764-6.113c66.484 0 120.74 54.257 119.976 120.74 0 65.72-53.492 119.976-119.976 119.976C53.493 500.537 0 447.045 0 380.561c0-66.483 53.493-120.74 119.976-120.74zm256.764 18.34c-59.606 0-108.513 48.143-108.513 108.514 0 59.606 48.143 108.513 108.513 108.513 59.606 0 108.514-48.907 108.514-108.513 0-59.606-48.144-108.514-108.514-108.514zm-256.764-6.113c-59.606 0-108.513 48.143-108.513 108.513 0 59.606 48.907 108.514 108.513 108.514 60.37 0 109.278-48.908 108.514-108.514 0-59.606-48.144-108.513-108.514-108.513zm259.057 41.265c22.161 0 40.501 18.34 40.501 40.502h-11.462c0-16.048-12.991-29.039-29.04-29.039-16.047 0-29.802 13.755-29.038 30.567 0 7.642 3.057 16.048 6.113 23.69.765 3.057 2.293 6.113 3.057 9.17h42.794v11.463h-40.501v3.056c0 12.227-3.057 25.218-9.17 35.917 8.406-1.529 18.34-2.293 30.567.764 5.349 2.293 19.104 5.35 28.274.764l5.35 9.934c-15.284 7.642-36.681 0-37.445 0-26.746-6.877-41.266 6.114-42.03 6.878l-7.642-8.406c12.991-12.227 20.633-29.039 20.633-46.615v-3.057H330.89V387.44h16.047c0-2.293-.764-3.821-1.528-5.35-.278-.833-.562-1.667-.85-2.501l-1.729-5.017c-2.278-6.71-4.299-13.531-4.299-20.756 0-22.161 18.34-40.502 40.502-40.502zm-252.18-3.056c11.463 0 22.926 3.056 33.625 9.17l-5.35 9.934c-9.17-5.35-18.34-7.642-28.274-7.642-25.982 0-47.38 16.812-55.785 38.974h61.134v11.462H68.776c-.764 2.293-.764 5.35-.764 7.642 0 2.293.764 5.35.764 7.642h64.191V398.9H71.833c7.642 22.926 29.803 38.974 55.02 38.974 9.935 0 19.105-2.293 28.275-7.642l5.35 9.934c-10.699 6.114-22.162 9.17-33.624 9.17-32.096 0-58.842-21.397-67.248-50.436H34.388V387.44h22.925c-.764-2.293-.764-5.35-.764-7.642 0-2.293.764-5.35.764-7.642H34.388v-11.462h25.218c8.406-29.04 35.152-50.436 67.248-50.436zM376.74 11.463c66.484 0 119.976 53.492 119.976 119.976 0 66.483-53.492 120.74-119.976 120.74-66.483 0-120.74-54.257-119.976-120.74 0-65.72 53.493-119.976 119.976-119.976zm-256.764-5.35c66.484 0 119.976 54.257 119.976 119.977 0 65.719-53.492 119.976-119.976 119.976C53.493 246.066 0 192.573 0 126.09 0 59.606 53.493 6.113 119.976 6.113zM376.74 22.925c-60.37 0-109.277 48.908-108.513 108.514 0 59.606 48.143 108.513 108.513 108.513 59.606 0 108.514-48.143 108.514-108.513 0-59.606-48.144-108.514-108.514-108.514zm-256.764-5.349C60.37 17.576 11.463 65.72 11.463 126.09c0 59.606 48.143 108.513 108.513 108.513 60.37 0 109.278-48.143 109.278-108.513 0-60.37-48.908-108.514-109.278-108.514zM382.09 49.672v22.925c7.641.764 14.519 3.82 19.104 8.406 7.642 6.113 11.463 14.52 11.463 23.69h-11.463c0-5.35-2.293-10.699-6.878-14.52-9.934-8.406-26.746-8.406-36.68 0-4.585 3.821-6.878 9.17-6.878 14.52 0 5.349 2.293 10.698 6.878 14.519 4.585 4.585 11.463 6.878 18.34 6.878 9.934 0 19.105 3.056 25.982 9.17 7.642 6.113 11.463 14.52 11.463 23.69 0 9.17-4.585 17.575-11.463 23.689-5.349 5.35-12.227 8.406-19.868 9.17v22.925H371.39V191.81c-7.642-1.528-14.52-4.585-19.869-9.17-7.641-6.114-11.462-14.52-11.462-23.69h11.462c0 5.35 2.293 10.699 6.878 14.52 9.17 8.406 26.746 8.406 36.68.764 4.586-3.821 6.878-9.17 6.878-14.52 0-5.349-2.292-10.698-6.877-14.519-4.585-4.585-11.463-6.878-18.34-6.878-9.935 0-19.105-3.056-25.983-9.17-7.642-6.113-11.462-14.52-11.462-23.69 0-9.17 4.585-17.575 11.462-23.689 5.35-5.35 12.227-8.406 19.869-9.17V49.672h11.463zM157.42 61.134l9.935 6.114-36.68 58.842h32.86v11.462H126.09v22.161h37.444v11.463H126.09v29.039h-11.463v-29.039H77.182v-11.463h37.445v-22.16H77.182V126.09h32.86l-36.68-58.842 9.934-6.114 36.68 59.606 37.445-59.606z"
                  ></path>
                </svg>
              }
            />
            <FinancialCard
              title={"Crypto API"}
              subtitle={"Full Level 2 Book"}
              text={
                "Real-time and historical crypto data from all the leading crypto exchanges in one easy to use API."
              }
              svg={
                <svg
                  className="svg-inline--fa fa-blockchain"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="blockchain"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M510.659 99.277c0-.103 0-.154-.052-.256v-.051c0-.052 0-.052-.061-.103l-17.92-75.725a5.265 5.265 0 00-3.779-3.788L413.332 1.536l-.46-.102c-1.746-.41-3.528.102-4.767 1.382h-.051l-.108-.154-57.805 57.805a5.101 5.101 0 00-1.382 4.813l2.662 11.06 13.522 56.985-67.369-15.872c-.061 0-.061-.051-.107-.051l-.466-.103c-1.74-.41-3.482.103-4.762 1.383h-.056l-.107-.154-57.805 57.805c-1.23 1.229-1.741 3.072-1.331 4.813l2.61 11.059 13.466 56.934-67.072-15.82-.056-.052-.717-.153a5.11 5.11 0 00-4.761 1.33v.052l-.154-.154-57.754 57.8c-1.28 1.229-1.792 3.093-1.382 4.782l2.611 11.05 13.466 56.98-67.118-15.872-.722-.149c.46-.064.927-.064 1.387 0l-.153-.148-63.888 59.177a5.008 5.008 0 00-1.382 4.761l2.611 11.06 15.309 64.557.102.523c.057.2.108.348.154.522.107.348.256.66.46.963.41.732 1.025 1.28 1.69 1.69.313.199.666.358 1.024.46.108.061.154.061.256.107.205.062.461.108.722.16l75.623 17.92c.358.102.768.137 1.177.137a5.032 5.032 0 003.58-1.48l57.804-57.81a5.38 5.38 0 001.131-1.689c.149-.312.205-.599.256-.962.052-.149.103-.323.052-.523.05-.148.05-.348.05-.522 0-.41-.05-.87-.148-1.331l-16.082-67.727 67.994 16.071c.358.103.768.159 1.178.159a4.984 4.984 0 003.579-1.541l57.81-57.749c.46-.46.87-1.08 1.136-1.69a5.05 5.05 0 00.256-3.128c0-.05-.061-.148-.061-.2l-16.082-67.737 67.947 16.077c.41.102.82.148 1.23.148a5.032 5.032 0 003.578-1.48l57.8-57.81c.26-.255.522-.562.722-.92.21-.308.358-.666.517-1.025.107-.256.153-.512.204-.768a8.215 8.215 0 000-1.587c-.05-.154-.05-.256-.05-.358v-.154l-16.18-68.045 68.045 16.18c.41.05.763.102 1.172.102 1.332 0 2.668-.512 3.64-1.485l57.39-57.446.349-.359c.973-.973 1.544-2.253 1.544-3.635.012-.41-.044-.712-.151-1.121zM11.924 413.179l49.306-49.3 15.253 64.348v.061l-49.306 49.25-15.253-64.36zm136.141 37.632l-49.254 49.26-64.359-15.258 49.255-49.31h.051l13.158 3.127 51.2 12.13-.05.05zm3.277-9.78l-64.968-15.41-15.257-64.82 64.819 15.258 15.406 64.973zm-8.346-79.303l-15.252-64.358 49.306-49.306 15.252 64.353v.051l-49.306 49.26zm71.68 22.523l-64.41-15.253 49.255-49.31h.051l64.359 15.252-49.255 49.31zm52.486-59.029l-64.973-15.41-15.258-64.82 64.82 15.258 15.41 64.972zm-8.351-79.314l-15.258-64.358 49.311-49.306 10.291 43.47.563 2.252 4.398 18.637v.051h-.061v.051l-49.244 49.203zm120.883-26.72l-49.254 49.254-64.359-15.253 49.255-49.305h.056l13.153 3.123 51.2 12.134-.05.046zm3.277-9.785l-64.968-15.411-15.298-64.82 64.87 15.258 15.396 64.973zm-8.29-79.36l-13.317-56.064-1.945-8.295 49.25-49.254 15.252 64.358v.052l-49.24 49.203zm71.624 22.528l-64.353-15.258L431.15 88.06h.051l64.359 15.257-49.255 49.255zM433.86 78.126h-.052l-6.348-27.034-1.89-8.038-1.387-5.786-5.632-23.961 64.87 15.309 15.36 64.921-64.921-15.41z"
                  ></path>
                </svg>
              }
            />
          </div>
          <div className="w-full py-28 grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4">
            <div>
              <div className="py-4">
                <h3 className="badgeText">{data.stockWebSockets.text}</h3>
                {data.stockWebSockets.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
              <div className="py-4">
                <h3 className="badgeText">{data.stockAPI.text}</h3>
                {data.stockAPI.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="py-4">
                <h3 className="badgeText">{data.referenceDataAPI.text}</h3>
                {data.referenceDataAPI.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="py-4">
                <h3 className="badgeText">{data.forexWebSockets.text}</h3>
                {data.forexWebSockets.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
              <div className="py-4">
                <h3 className="badgeText">{data.forexAPI.text}</h3>
                {data.forexAPI.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="py-4">
                <h3 className="badgeText">{data.cryptoWebSockets.text}</h3>
                {data.cryptoWebSockets.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
              <div className="py-4">
                <h3 className="badgeText">{data.cryptoAPI.text}</h3>
                {data.cryptoAPI.data.map((item, index) => (
                  <BadgeText
                    text={item.text}
                    type={item.type}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-200/40 py-32">
        <div className="container m-auto flex flex-col gap-10">
          <div className="w-full grid grid-cols-5 gap-32">
            <div className="col-span-2">
              <div className="mb-2">
                <h2 className="blacksubtitle">Use Any Language</h2>
                <h2 className="subtitle">
                  Clients for All Major Development Language
                </h2>
              </div>
              <div className="mt-14 leading-7">
                Create your application in any language. No more C++/Java
                limitations. Use the technology you already know, and spend your
                time creating, no integrating
              </div>
              <div className="mt-6">
                <Button label="Getting Started" />
              </div>
            </div>
            <div className="col-span-3">
              <img src="editor.png" className="w-full" />
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-8">
            <SimpleCard
              title={"Sample Code"}
              subtitle={"Client Libraries to Get Started"}
              text={
                "Examples to get you up and running in Python, Go, Javascript, Java, and more."
              }
              icon={
                <svg
                  class="svg-inline--fa fa-life"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="life"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 578 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M435.2 8.533l-2.626-5.25h-286.85L1.968 256l143.098 252.718h286.85L575.673 256 435.2 8.533zm-256 85.334L25.6 240.903 147.692 25.6 179.2 93.867zm245.497-68.923l42.01 234.338L202.832 97.15l221.866-72.205zm-231.056 82.05L462.769 272.41 193.641 425.354v-318.36zm272.41 178.544L418.79 487.713l-213.99-53.17 261.251-149.005zM180.513 420.103L25.6 259.283l154.913-149.006v309.826zm-1.97 17.066l-30.194 50.544L36.103 289.477l142.44 147.692zm11.816 6.564l206.113 51.857h-237.62l31.507-51.857zm290.79-166.071l76.143-16.41-123.405 217.927 47.262-201.517zm74.83-28.883l-74.83 16.41L442.42 47.919l113.558 200.861zM190.36 87.303l-32.82-70.893h250.748L190.36 87.303z"
                  ></path>
                </svg>
              }
            />
            <SimpleCard
              title={"WebSocket Docs"}
              subtitle={"Connect, Authenticate, Subscribe"}
              text={
                "Tick by tick data with low latency over TCP using standardized protocols."
              }
              icon={
                <svg
                  class="svg-inline--fa fa-websocket"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="websocket"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 683 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M682.35 219.837c-5.791-70.794-35.934-139.129-93.919-182.052C532.23-3.946 460.064-9.163 395.25 12.597a336.395 336.395 0 00-89.093 46.202 540.953 540.953 0 00-42.913 34.876c-6.385 5.663-12.399 11.7-18.56 17.66-2.302 2.237-4.604 4.472-6.757 6.782-4.752 4.919-4.232 6.707-10.246 4.471-34.894-13.115-67.487-33.534-100.006-51.344-27.47-14.904-59.395-38.303-91.691-25.486C20.698 52.035 8.81 64.562 3.309 80.19a58.319 58.319 0 003.867 47.391 203.046 203.046 0 0033.261 40.166c10.691 11.104 21.457 22.73 32.964 33.46 16.705 15.575 33.336 31.224 50.115 46.724 3.415 3.204 10.691 7.452 10.914 11.103.223 3.652-4.752 8.57-6.162 11.253-2.525 4.77-4.9 9.687-7.425 14.457a409.555 409.555 0 00-35.711 96.876c-7.424 32.937-7.424 69.154 12.77 97.77 20.194 28.615 58.133 36.664 90.429 28.317 33.558-8.719 62.959-28.764 90.503-49.183 14.85-11.029 29.03-22.356 43.359-34.279 6.607-5.44 13.438-10.805 19.971-16.394 3.416-2.981 4.01-4.62 7.796-4.173a62.55 62.55 0 0113.587 6.185c61.548 26.082 134.307 41.21 198.825 16.543 65.705-25.039 106.91-85.4 117.453-153.884a275.615 275.615 0 002.525-52.685zm-488.856-99.739l18.393 7.861c-7.67 8.774-15.269 17.478-22.583 26.462-29.259-25.97-57.24-52.362-84.51-80.297 29.33 16.073 58.802 31.164 88.7 45.974zm-122.812 42.8c-10.273-10.013-20.929-19.962-30.755-30.223s-23.034-22.636-25.523-37.623c-2.372-13.642 3.574-27.39 15.25-35.26 12.762-9.08 28.777-6.965 42.495-.56a10.94 10.94 0 013.574 1.866c1.212 1.554-.32 4.726.893 7.524a21.11 21.11 0 003.19 4.291c3.637 4.291 8.04 8.209 12.06 12.438 11.995 12.064 23.927 24.315 35.923 36.317a748.84 748.84 0 0066.295 56.714 937.12 937.12 0 0082.502 59.078l-44.282 38.618c-2.233 1.927-5.806 6.218-8.614 7.462-2.807 1.244-.447.933-3.956-.435a126.004 126.004 0 01-22.268-15.112c-29.67-21.019-58.128-43.53-85.501-67.472-13.974-12.376-27.5-25.124-41.283-37.623zm134.245 183.844c-3.409 2.456-7.101 4.913-10.297 7.019a401.863 401.863 0 0119.813-44.15c6.534 4.773 13.28 9.265 19.956 14.038l-29.472 23.093zm54.55 67.983a472.733 472.733 0 01-59.575 38.951c-19.533 10.007-43.167 17.734-65.11 11.97-55.733-14.63-45.706-80.056-32.033-119.957a429.043 429.043 0 0133.401-72.393 912.806 912.806 0 0046.293 36.355 43.365 43.365 0 019.115 6.333c1.953 2.724 1.628.444 0 4.307a51.949 51.949 0 01-2.67 5.194c-4.557 9.183-8.854 18.43-13.021 27.867-1.563 3.737-2.93 7.537-4.298 11.337a45.142 45.142 0 01-4.036 11.4 39.444 39.444 0 01-12.306 6.334c-4.493 2.027-14.324 2.85-16.408 7.03-3.646 7.538 5.014 9.818 10.678 8.614a66.101 66.101 0 0013.022-5.383 183.163 183.163 0 0023.83-13.427c31.969-20.648 60.487-46.045 89.33-70.493 13.022-11.21 26.044-22.99 38.415-34.645a399.79 399.79 0 0035.81-35.088c3.646-4.37 7.552-13.11-1.563-14.693-6.055-1.077-10.287 8.74-13.738 12.667-7.553 8.423-16.147 15.96-24.35 23.814-3.712 3.547-3.256 3.737-8.205 2.85-6.966-1.267-13.933-2.787-20.9-4.18-9.245-1.9-16.928-9.5-24.546-14.757 9.441-11.4 19.533-22.421 29.69-32.935 5.274-5.32 10.808-10.514 16.408-15.517 5.599-5.004 7.682-2.28 13.933-1.267l48.767 8.234c14.52 2.47 29.69 5.32 40.758 15.58 22.268 20.838 13.022 49.592-4.948 69.67a886.972 886.972 0 01-67.714 63.335c-23.765 21.724-48.571 42.182-74.16 62.893h.131zM516.67 247.447c-2.735 18.013-8.206 36.927-23.34 48.816-14.766 10.416-33.065 14.725-50.999 12.008a177.069 177.069 0 01-33.492-6.845c19.208-18.913 41.03-40.469 37.686-69.65-3.525-30.622-30.392-43.712-58.05-48.515l-47.836-8.586c27.596-20.955 59.325-41.13 95.431-41.25 36.106-.12 61.696 26.9 73.306 58.362a133.089 133.089 0 017.112 55.66h.182zm92.555-6.804c-2.251 47.615-18.937 94.063-57.143 125.418-38.205 31.354-90.05 37.703-138.122 30.059a325.933 325.933 0 01-79.457-24.617c17.48-15.418 35.49-30.448 52.574-46.255 4.238-3.951 5.297-7.126 10.859-6.478 5.562.648 10.727 3.11 16.09 4.405a182.396 182.396 0 0030.458 4.988c20.442 2.075 40.987-2.847 58.136-13.928 16.013-12.283 26.948-29.814 30.79-49.364 9.337-42.112-1.516-86.09-29.465-119.393-31.12-35.112-77.47-38.157-119.848-21.443-40.854 16.26-75.55 45.866-105.148 77.22-3.641 3.822-7.085 7.71-10.528 11.661-1.655 1.944-8.674 12.957-11.455 13.54-2.78.583-11.587-7.84-14.037-9.977-2.45-2.138-5.43-4.081-8.078-6.478l-16.752-13.54a86.092 86.092 0 01-16.024-12.956c-.331-.518-1.987-1.101-2.124-1.75-.127-.647 5.037-6.477 5.964-7.255 3.708-4.405 7.615-8.68 11.455-12.956 28.378-32.787 61.904-60.952 99.321-83.44 37.146-21.442 80.649-36.536 124.483-34.399 44.052 1.983 85.474 21.08 115.08 53.057 28.834 31.857 46.815 71.706 51.448 114.016a245.842 245.842 0 011.523 29.865z"
                  ></path>
                </svg>
              }
            />
            <SimpleCard
              title={"RESTful API Docs"}
              subtitle={"Get, Put, Post, Del"}
              text={
                "Structured, versioned JSON RESTful APIs allow you to make requests using any coding language."
              }
              icon={
                <svg
                  class="svg-inline--fa fa-terminal"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fak"
                  data-icon="terminal"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 659 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M653.897 1.463v508.343H4.39V1.463h649.508zM639.27 152.137H19.017V495.91H639.27V152.137zm-532.48 78.994c2.925-2.925 7.314-2.925 10.24 0l84.845 84.846c2.926 2.926 2.926 7.314 0 10.24l-84.845 84.846c-1.463 1.463-3.658 2.194-5.12 2.194-1.463 0-3.658-.731-5.12-2.194-2.926-2.926-2.926-7.314 0-10.24l79.725-79.726-79.725-79.726c-2.926-2.925-2.926-7.314 0-10.24zm288.914 82.652c4.388 0 7.314 2.926 7.314 7.314s-2.926 7.314-7.314 7.314H261.85c-3.657 0-7.314-2.925-7.314-7.314s2.926-7.314 7.314-7.314zM639.269 16.09H19.017v120.686H639.27V16.091zM78.263 32.914c24.868 0 44.617 19.749 44.617 44.617 0 24.869-19.749 44.618-44.617 44.618-24.869 0-44.617-19.749-44.617-44.618 0-24.868 19.748-44.617 44.617-44.617zm101.668 0c24.869 0 44.618 19.749 44.618 44.617 0 24.869-19.749 44.618-44.618 44.618-24.868 0-44.617-19.749-44.617-44.618 0-24.868 19.749-44.617 44.617-44.617zm101.669 0c24.869 0 44.617 19.749 44.617 44.617 0 24.869-19.748 44.618-44.617 44.618-24.869 0-44.617-19.749-44.617-44.618 0-24.868 19.748-44.617 44.617-44.617zM78.263 48.274c-16.823 0-29.989 13.166-29.989 29.989S61.44 108.25 78.263 108.25s29.988-13.165 29.988-29.988-13.165-29.989-29.988-29.989zm101.668 0c-16.822 0-29.988 13.166-29.988 29.989s13.166 29.988 29.988 29.988 29.989-13.165 29.989-29.988-13.166-29.989-29.989-29.989zm101.669 0c-16.823 0-29.989 13.166-29.989 29.989s13.166 29.988 29.989 29.988 29.989-13.165 29.989-29.988-13.166-29.989-29.989-29.989z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div
        className="pt-32 pb-48 bg-cover reliable_section"
        style={{ backgroundImage: "url(datacenter.jpg)" }}
      >
        <div className="container m-auto grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="p-12 mt-6 reliable">
              <h1 className="text-3xl text-white font-bold">
                Accurate, Fast, and Reliable
              </h1>
              <h2 className="subtitle">
                Complete redundancy, horizontally scalable, built on proven
                technologies.
              </h2>
              <div className="w-full grid grid-cols-2 gap-6 pt-12 pb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    &gt; 1 millisecond
                  </h2>
                  <p className="text-sm text-white">Ultra low latency APIs</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">1,000,000+</h2>
                  <p className="text-sm text-white">Messages per Second</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Equinix NY Data Centers
                  </h2>
                  <p className="text-sm text-white">
                    Same data centers as the exchanges
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Impeccable Reliability
                  </h2>
                  <p className="text-sm text-white">Multiple redundancies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <div className="container m-auto py-16">
          <div className="w-full grid grid-cols-3 gaps-10">
            <div className="mb-2 flex flex-col justify-center">
              <h2 className="blacksubtitle">Create Powerful Visualizations</h2>
              <h2 className="subtitle">Develop for Any Platform</h2>
              <div className="mt-8 leading-7">
                life.io's market data APIs give you the tools you need to
                create visualizations for any platform or operating system, in
                the coding language which fits you best
              </div>
            </div>
            <div className="col-span-2">
              <img src="powerful.png" className="w-full" alt="powerful" />
            </div>
          </div>
        </div>
        <div className="container relative py-28 m-auto">
          <div className="mb-2 flex flex-col justify-center">
            <h2 className="blacksubtitle">Success Stories</h2>
            <h2 className="subtitle">You're in Good Company</h2>
          </div>
          <div className="grid grid-cols-3 gap-20 mt-10">
            <div className="grid grid-rows-2 gap-4">
              <div>
                <img
                  src="logo-google.svg"
                  alt="google"
                  style={{ height: "45px" }}
                />
              </div>
              <div>
                <h3 className="text-xl">Data for BigQuery</h3>
                <p className="text-base">
                  life.io has teamed up with Google to provide BigQuery
                  public dataset for stock data.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div>
                <img
                  src="logo-motley-fool.svg"
                  alt="motely"
                  style={{ height: "65px" }}
                />
              </div>
              <div>
                <h3 className="text-xl">Powering Fool.com</h3>
                <p className="text-base">
                  The Motely Fool uses life.io to power one of the largest
                  financial and investing advice websites in the world.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div>
                <img
                  src="logo-revolut.svg"
                  alt="revolut"
                  style={{ height: "31px" }}
                />
              </div>
              <div>
                <h3 className="text-xl">Digital Banking & Trading</h3>
                <p className="text-base">
                  Revolut trusts life.io to power their new trading
                  application for US stocks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-200/40 py-32">
        <h2 className="blacksubtitle text-center">Simple Pricing</h2>
        <h3 className="text-xl text-center mb-8 mt-4">
          Instant Access. Cancel Anytime
        </h3>
        <div className="priceTab flex justify-center w-full">
          <div className="flex justify-center items-center gap-10">
            <SelectButton
              size={"small"}
              value={priceType}
              onChange={(e) => setPriceType(e.value)}
              itemTemplate={priceTypeTemplate}
              optionLabel="text"
              options={priceTypeOptions}
            />
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold">Monthly</span>
              <InputSwitch
                className="scale-90"
                checked={checked}
                onChange={(e) => setChecked(e.value)}
              />
              <span className="text-xs font-bold">Annual</span>
            </div>
            <span
              style={{
                fontSize: "10px",
                visibility: `${!priceType ? "visible" : "hidden"}`,
              }}
            >
              20% Discount
            </span>
          </div>
        </div>
        <div className="container m-auto">
          <div className="mt-20">
            <h2 className="blacksubtitle text-center flex items-center justify-center gap-2">
              <img src="stocks.svg" className="inline" /> <span>Stocks</span>
            </h2>
            <h3 className="text-sm text-center mb-8 mt-2">
              All US Exchanges + Dark Pools
            </h3>
          </div>
          <div className="w-full flex gap-6 item-center justify-center">
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button
              label="Compare Plans"
              severity="secondary"
              size="small"
              outlined
            />
          </div>
        </div>
        <div className="container m-auto">
          <div className="mt-20">
            <h2 className="blacksubtitle text-center flex items-center justify-center gap-2">
              <img src="options.svg" className="inline" /> <span>Options</span>
            </h2>
            <h3 className="text-sm text-center mb-8 mt-2">
              All US Options Trades & Quotes
            </h3>
          </div>
          <div className="w-full flex gap-6 item-center justify-center">
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button
              label="Compare Plans"
              severity="secondary"
              size="small"
              outlined
            />
          </div>
        </div>
        <div className="container m-auto">
          <div className="mt-20">
            <h2 className="blacksubtitle text-center flex items-center justify-center gap-2">
              <img src="currencies.svg" className="inline" />{" "}
              <span>Curriences</span>
            </h2>
            <h3 className="text-sm text-center mb-8 mt-2">Crypto + Forex</h3>
          </div>
          <div className="w-full flex gap-6 item-center justify-center">
            <PricingCard />
            <PricingCard />
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button
              label="Compare Plans"
              severity="secondary"
              size="small"
              outlined
            />
          </div>
        </div>
        <div className="container m-auto mt-32">
          <div className="w-full flex justify-center flex-wrap gap-8">
            <div>
              <img src="cloud-chat-bubble.svg" alt="Not Sure" />
            </div>
            <div className="contact_us">
              <h2 className="blacksubtitle font-normal">
                Not Sure which plan to choose?
              </h2>
              <h2 className="blacksubtitle">Contact Us</h2>
              <p className="text-base mt-4">
                We're always here to assist if you happen to need our help. Feel
                free to contact us and one of our team members will gladly walk
                you through choosing the right plan for you.
              </p>
              <Button label="Contact Us" className="mt-8" />
            </div>
          </div>
          <div className="w-full bg-white my-16 flex justify-center customer_section p-12">
            <div className="flex flex-col flex-wrap item-stretch">
              <h2 className="blacksubtitle text-center">
                <span>We</span>
                <span className="px-4">
                  <img className="inline" src="heart.svg" alt="heart" />
                </span>
                <span>Happy</span>
              </h2>
              <h2 className="blacksubtitle text-center">Customers</h2>
              <hr className="my-8" />
              <p className="text-sm text-center leading-6">
                life is a dream come true when compared to some of the
                largest players in the market. They provide excellent quality
                data through a modern API with no long term contract.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                {/* <div>
                  <img src="logo-sec.webp" alt="avatar" />
                </div> */}
                <div>
                  <p className="text-xl font-bold">Gajodhar</p>
                  <p className="text-base userEmail">
                    Founder@<span>LifeApi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container m-auto grid grid-cols-12 gap-12 footer_top">
          <div className="col-span-8 grid grid-cols-8 gap-6">
            <div className="col-span-3">
              <img src="logo.png" alt="logo" className="w-28" />
            </div>
            <div className="col-span-5 grid grid-cols-3">
              <div>
                <h2 className="text-sm font-bold">Products</h2>
                <p>Stocks Data</p>
                <p>Options Data</p>
                <p>Currencies Data</p>
                <p>Crypto Data</p>
              </div>
              <div>
                <h2 className="text-sm font-bold">Doc</h2>
                <p>Stocks API</p>
                <p>Options API</p>
                <p>Forex API</p>
                <p>Crypto API</p>
                <p>Launchpad Docs</p>
              </div>
              <div>
                <h2 className="text-sm font-bold">Resources</h2>
                <p>Client Libraries</p>
                <p>Roadmap</p>
                <p>Knowledge Base</p>
                <p>System Status</p>
              </div>
            </div>
            <div className="col-span-3">
              <h2 className="text-sm font-bold">Subscribe for Updates</h2>
              <div className="p-inputgroup">
                <InputText placeholder="Email Address" />
                <Button icon="pi pi-search" className="p-button" />
              </div>
            </div>
            <div className="col-span-5 grid grid-cols-3">
              <div>
                <h2 className="text-sm font-bold">Company</h2>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Contact Us</p>
              </div>
              <div>
                <h2 className="text-sm font-bold">Pricing</h2>
                <p>View Pricing</p>
                <p>Compare</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-rows-4 gap-6">
            <div className="grid grid-cols-3">
              <div>
                <img
                  src="footer_item1.jpg"
                  alt=""
                  className="footer_item_img"
                />
              </div>
              <div className="col-span-2">
                <p className="footer_item_date">March 23, 2023</p>
                <h2 className="footer_item_title font-bold text-base">
                  Simplifying Data Access with CSV Support
                </h2>
                <p className="footer_item_text text-xs">
                  We are excited to announce the launch of CSV support for our
                  REST APIs. You can now choose...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <img
                  src="footer_item2.png"
                  alt=""
                  className="footer_item_img"
                />
              </div>
              <div className="col-span-2">
                <p className="footer_item_date">February 9, 2023</p>
                <h2 className="footer_item_title font-bold text-base">
                  Introducing Options Chain Snapshot API
                </h2>
                <p className="footer_item_text text-xs">
                  Level up your trading game by getting the mose up-to-date
                  price data for an asset's entire options...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <img
                  src="footer_item3.png"
                  alt=""
                  className="footer_item_img"
                />
              </div>
              <div className="col-span-2">
                <p className="footer_item_date">November 22, 2022</p>
                <h2 className="footer_item_title font-bold text-base">
                  Case Study: Birdwindgo
                </h2>
                <p className="footer_item_text text-xs">
                  Birdwindgo recently launched their mobile investment
                  application, bringing an innovative twi...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <img
                  src="footer_item4.png"
                  alt=""
                  className="footer_item_img"
                />
              </div>
              <div className="col-span-2">
                <p className="footer_item_date">September 6, 2022</p>
                <h2 className="footer_item_title font-bold text-base">
                  New Technical Indicators APIs
                </h2>
                <p className="footer_item_text text-xs">
                  After hundreds of requests from our community, we're happy to
                  announce the release of out new...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto grid grid-cols-12 gap-12">
          <div className="col-span-3">
            <p className="footer_item_date text-sm">Terms of Service</p>
            <p className="footer_item_date text-sm">Privacy Policy</p>
          </div>
          <div className="col-span-5">
            <p className="footer_item_text text-xs">
              All data provided on life is provided for informational
              purposes only, and is not intended for trading or investing
              purposes. life provides all information as is. You must not
              redistribute information displayed on or provided by life.
              Stock prices displayed in the ticker are from a subset of
              exchanges, this price does not represent the real-time price from
              the SIP.
            </p>
            <p className="footer_item_text mt-4 text-xs">
              &copy;life.io.etc
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
