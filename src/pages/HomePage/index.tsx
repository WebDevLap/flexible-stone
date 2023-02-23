import React from 'react';
import { Using } from '../../components/Using';
import { TechDescription } from './components/TechDescription';
import { Adventages } from '../../components/Adventages';
import { StagesWork } from './components/StagesWork';
import { OurProducts } from './components/OurProducts';
import { MainBlock } from '../../components/MainBlock';

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <MainBlock
        title="Производство и продажа изделий на основе <span>гибкого камня</span>"
        subtitle="Красивый, качественный и современный материал по доступной цене !"
        bgImageUrl="https://lh3.googleusercontent.com/sSi8bkiNtIyQ0YPWrB-Uden-TLlXi_H38EIjVeiJoav91QN-QIdIUkiOgCNRHQ4apjankqbgld2u0AbXQtmYLr1mwMl-_As0y8dlxez3DgqIW3YEGir8QFL5n0PNQQty7W-q7Wgq93PV1frFjO-Xvr5jho9G_G-_wNXS6hmNekhcLO2Co2Vi0m9G0Re__Hw3Adan3A4G0DioDh961YfU_m0Qo0R24wAUJVyPBxv0zGzwHPYziFPhOPXZDOjiew63r22BIxPqcwoC_8XmJiUALgUl_CZPNSF9A7PGvqDicC_plbEu840-LFtgGXgefk7rPlu09BMB6AqcLEUBNTgY6uAEOXYO1MQKb_o3Ih01P7DrhW7Aq5b65S8SVN6_cdqqvHwbPOMpCA4wTo2Pa-amdQlR7-YttmHFyMdPJlhtczHT1QdhbR8cOTP7kqbo5odNT-gSjSwqyci5evTo72kKh5mPCGOLOC_dmx_IfD0jRubMd2SgS51rTE5K87i06v3CsRSsJuDCDL1oQX9qzXTRSGd8JJ6x68hGWVjWscjT_-vQnL53Zlkzh6FVDU3cl9Pb4CpEV1yGex6ceUw_A9QO4vD2iFbgC52ckaiIxaPZbWRY_AIojSEeIfvO_tZu8C-ClP_ZMFnMTdlwvc6v4XDXsiITIdXPAwI1aSQu1UyEGT4er_83Dc2xO2NJGvL5VSPpFdHymSd_tz9f3Fv9Iiac1iM5qQSNhILcSgQ5dc7Ia7n9HnGgOFKn55mlLSL19vOoGrmrYqKwHE4w94KbgN1ZBgfan7aKxnttPtVD7gGlhsILvy20TujUzhJnIvViR5vqeIPbzDPIbNcL7RFQ5yCAvL0KgahO3ItAmqH8ia65-olBIvekH3kdJGaLt_CPYWCp-2qW-eYJg009WJNAQJcXKBLbdEfH41j6EB3qH0QtFhrISsHE=w1280-h720-no?authuser=0"></MainBlock>
      <Using
        title="Применение гибкого камня"
        subtitle="Гибкий камень - это качественный строительный материал, который используется во
        внутренней и внешней отделке помещений. Он изготавливается из экологически чистых
        материалов и имеет все необходимые сертификаты.
        <br /> Гибкий камень применяется: на стенах, полах, ступенях, подоконниках,
        столешницах, в ванных комнатах, бассейнах, саунах, витражах, кухонных фартуках, и
        этот список можно продолжать долго."
        imageUrl1="https://thumb.tildacdn.com/tild6532-3062-4034-a638-383962376465/-/cover/806x740/center/center/-/format/webp/2022-05-20_19-00-06.png"
        imageUrl2="https://thumb.tildacdn.com/tild6135-3835-4563-a436-376261326365/-/resize/740x/-/format/webp/2022-05-20_19-01-46.png"
      />
      <TechDescription />
      <Adventages
        title={<>Преимущества гибкого камня</>}
        imageUrl="https://thumb.tildacdn.com/tild3933-3264-4630-a438-306232356535/-/resize/560x/-/format/webp/2.jpg"
      />
      <StagesWork />
      <OurProducts />
    </main>
  );
};
