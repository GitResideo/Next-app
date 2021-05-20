import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useI18n } from 'next-localization';
import { getPublicUrl } from 'lib/util';

import styles from 'assets/Home.module.css'

import {
  Placeholder,
  LayoutServiceData,
  VisitorIdentification,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
const Navigation = () => {
  const { t } = useI18n();

  return (

    <nav className="navbar navbar-expand-sm">

      <a className="navbar-brand" href="/">
        <img src="/resideo-block-logo-black.svg" alt="Resideo Logo" className={styles.logo} />
        <img src="/resideo-logo-black.svg" alt="Resideo Logo" />
      </a>


      <ul className="navbar-nav">
        <li className="nav-item dropdown" id="down">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            PRODUCTS
      </a>
          <div className="dropdown-menu" id="downMenu">
            <a className="dropdown-item" href="#">Thermostats</a>
            <a className="dropdown-item" href="#">Humidifiers</a>
            <a className="dropdown-item" href="#">Dehumidifiers</a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            HOW IT WORKS
      </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Thermostats</a>
            <a className="dropdown-item" href="#">Humidifiers</a>
            <a className="dropdown-item" href="#">Dehumidifiers</a>
          </div>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            SUPPORT
      </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Training & <br />Installation</a>
            <a className="dropdown-item" href="#">Recalls</a>
            <a className="dropdown-item" href="#">Find a Pro</a>
          </div>
        </li>

      </ul>

      <a className="header_checkout snipcart-checkout" href="/" >
        <table><tr><td><img className="cart-img" src="/ic-cart-black.svg" /></td><td><span className="snipcart-total-price">$0.00</span>&nbsp;(<span class="snipcart-items-count">0</span>)</td></tr></table>
      </a>


    </nav>
  );
};

const Footer = () => {
  const { t } = useI18n();

  return (

    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="row">
          <div className="col-md-4">
            <ul className={styles.footermenu}>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/support/">Support</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/thermostat-wiring-compatibility/">Thermostat Wiring Compatibility</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-lookup/">Order Lookup</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-faq/">Order FAQs</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/recall/">Recalls</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className={styles.footermenu}>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/support/">Air</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/thermostat-wiring-compatibility/">Security</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-lookup/">Water</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-faq/">Energy</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/recall/">All Products</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className={styles.footermenu}>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/support/">Find a Pro</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/thermostat-wiring-compatibility/">Find a Retailer - USA</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-lookup/">About Us</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/order-faq/">Businesses</a></li>
              <li className={styles.footermenuli}><a className={styles.footermenuitem} href="/us/en/recall/">News</a></li>
            </ul>
          </div>

        </div>
        <div className="row text-center">
          <div class="col footer-text">
            <div class="score-style-box" data-ux-module="score_bootstrap/Components/StyleBox" data-ux-state="loaded"><div class="score-button-group ">
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="/us/en/" >Resideo.com</a> | 
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="https://www.honeywellhome.com" target="_blank" > HoneywellHome.com</a> | 
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="https://www.adiglobal.com:443/" > ADIGlobal.com</a> | 
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="/us/en/corporate/legal/privacy/" > Privacy Policy</a> | 
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="/us/en/corporate/legal/terms-and-conditions/" > Terms &amp; Conditions</a> | 
              <a class="score-button" data-ux-module="score_bootstrap/Components/Button" data-ux-state="loaded" href="/us/en/sitemap/" > Sitemap</a>
            </div></div><p class="score-lead">
              Ⓒ 2021 Resideo Technologies Inc. The Honeywell Home trademark is used under license from Honeywell International Inc.
</p>
          </div>
        </div>
      </div>

    </div>

  );
};

type LayoutProps = {
  layoutData: LayoutServiceData;
};

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { updateSitecoreContext } = useSitecoreContext({ updatable: true });

  // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.
  useEffect(() => {
    const context: StyleguideSitecoreContextValue = {
      route: layoutData.sitecore.route,
      itemId: layoutData.sitecore.route.itemId,
      ...layoutData.sitecore.context,
    };
    updateSitecoreContext && updateSitecoreContext(context);
  }, [layoutData]);

  const { route } = layoutData.sitecore;

  return (
    <>
      <Head>
        <title>
          {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* <link href="assets/css/bootstrap-responsive.css" rel="stylesheet"></link> */}
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />

        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.1.1/default/snipcart.css" />
        <script src="http://www.starplugins.com/sites/starplugins/js/cloudzoom/cloudzoom.js"></script>

        {/* These two js required for TAB */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        {/* <script src={`${publicUrl}/js/jquery.exzoom.js`}></script>
        <link rel="stylesheet" type="text/css" href={`${publicUrl}/js/jquery.exzoom.css`} />
        <script src={`${publicUrl}/js/main.js`}></script> */}

      </Head>

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      <VisitorIdentification />

      <Navigation />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">
        <Placeholder name="jss-main" rendering={route} />
      </div>

      <Footer />
      <script async src="https://cdn.snipcart.com/themes/v3.1.1/default/snipcart.js"></script>

      <div hidden id="snipcart" data-api-key="NjJkODMxMWItYTc3Ni00ZDdjLWE4OGMtZTM2OWY1YmUxMWRlNjM3NTU2NTgyNzk5ODg5MDA1" >
        <billing section="top">
          <fieldset class="snipcart-form__set">
            <div class="snipcart-form__field">
              <div class="snipcart-form__field-checkbox">
                <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
                <snipcart-label for="subscribeToNewsletter" className="snipcart__font--tiny snipcart-form__label--checkbox">
                  Subscribe to Resideo Newsletter
                    </snipcart-label>
              </div>
            </div>

            <div className="snipcart-form__field">
              <snipcart-label className="snipcart__font--tiny" for="vatNumber">
                Resideo Employee Id
                </snipcart-label>
              <snipcart-input name="empNumber"></snipcart-input>
            </div>

            <div class="snipcart-form__field">
              <snipcart-label for="customerType" class="snipcart__font--tiny" for="customerType">
                Customer type
              </snipcart-label>
              <snipcart-select name="customerType" class="snipcart-form__select  snipcart__font--secondary snipcart__font--bold">
                <option value="Corporate">Resideo Corporate</option>
                <option value="Personal">Resideo Personal</option>
                <option value="NonProfit">Resideo Non-profit</option>
              </snipcart-select>
            </div>


          </fieldset>
        </billing>
      </div>
    </>
  );
};

export default Layout;
