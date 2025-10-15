"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import s from "./page.module.css";
import cn from "classnames";
import { useState } from "react";
export default function Start() {
  const [buy, setBuy] = useState<boolean>(false);
  const [sell, setSell] = useState<boolean>(false);

  return (
    <div className={s.main}>
      {/* Деньги */}

      <div className={cn(s.mainImages, { [s.hidden]: buy || sell })}>
        <img
          src="assets/main-page/bg1.png"
          alt=" background"
          className={cn(s.bg)}
        />
        <img
          src="assets/main-page/leftbottom.webp"
          className={cn(s.leftbottom, s.moneyImg)}
          alt="cash"
        />
        <img
          src="assets/main-page/leftmiddle.webp"
          className={cn(s.leftmiddle, s.moneyImg)}
          alt="cash"
        />
        <img
          src="assets/main-page/lefttop.webp"
          className={cn(s.lefttop, s.moneyImg)}
          alt="cash"
        />
        <img
          src="assets/main-page/rightbottom.webp"
          className={cn(s.rightbottom, s.moneyImg)}
          alt="cash"
        />
        <img
          src="assets/main-page/righttop.webp"
          className={cn(s.righttop, s.moneyImg)}
          alt="cash"
        />
        <img
          src="assets/main-page/topmiddle.webp"
          className={cn(s.topmiddle, s.moneyImg)}
          alt="cash"
        />

        {/* Ленты */}
        <div className={cn(s.lentaWrapper, s.lenta1)}>
          <div className={cn(s.lentaTrack, s.lentaTrack1)}>
            <img src="assets/main-page/lenta_black.webp" alt="" />
            <img src="assets/main-page/lenta_black.webp" alt="" />
            <img src="assets/main-page/lenta_black.webp" alt="" />
          </div>
        </div>

        <div className={cn(s.lentaWrapper, s.lenta2)}>
          <div className={cn(s.lentaTrack, s.lentaTrack2)}>
            <img src="assets/main-page/lenta_white.webp" alt="" />
            <img src="assets/main-page/lenta_white.webp" alt="" />
            <img src="assets/main-page/lenta_white.webp" alt="" />
          </div>
        </div>
        <div className={cn(s.lentaWrapper, s.lenta3)}>
          <div className={cn(s.lentaTrack, s.lentaTrack3)}>
            <img src="assets/main-page/lenta_black.webp" alt="" />
            <img src="assets/main-page/lenta_black.webp" alt="" />
            <img src="assets/main-page/lenta_black.webp" alt="" />
          </div>
        </div>
        <div className={cn(s.lentaWrapper, s.lenta4)}>
          <div className={cn(s.lentaTrack, s.lentaTrack4)}>
            <img src="assets/main-page/lenta_white.webp" alt="" />
            <img src="assets/main-page/lenta_white.webp" alt="" />
            <img src="assets/main-page/lenta_white.webp" alt="" />
          </div>
        </div>
        <img src="assets/main-page/wolf.webp" className={s.wolf} alt="wolf" />
      </div>

      <div className={cn(s.buyPage, { [s.show]: buy || sell })}>
        {buy ? <img src="assets/main-page/buybg.png" alt="buy bg" /> : null}
        {sell ? <img src="assets/main-page/sellbg.png" alt="sell bg" /> : null}
      </div>

      <div className={s.choose}>
        <div
          onMouseEnter={() => setBuy(true)}
          onMouseLeave={() => setBuy(false)}
        >
          <Link href="/asda" className={cn(s.buy, s.link)}>
            BUY LEADS
          </Link>
        </div>
        <div className={s.centerImages}>
          {buy || sell ? (
            <img src="assets/main-page/left.png" alt="" className={s.man} />
          ) : null}
          <img src="assets/main-page/man2.png" className={s.person} alt="man" />

          {buy || sell ? (
            <img src="assets/main-page/right.png" alt="" className={s.man} />
          ) : null}
        </div>
        <div
          onMouseEnter={() => setSell(true)}
          onMouseLeave={() => setSell(false)}
        >
          <Link href="/asdas" className={cn(s.sell, s.link)}>
            SELL LEADS
          </Link>
        </div>
      </div>

      {/* Бегущая строка */}
      <div className={s.runstring}>
        <div className={s.track}>
          <span>ARE YOU READY TO EARN MORE MONEY? </span>
          <span>ARE YOU READY TO EARN MORE MONEY? </span>
        </div>
      </div>
    </div>
  );
}
