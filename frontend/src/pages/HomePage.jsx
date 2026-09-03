// src/pages/HomePage.jsx
import React, { useState } from "react";

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="homepage-container">
      <main className="NewLanding_main__kkG_v" data-influencer-flow="false">
        {/* ===== HERO SECTION ===== */}
        <section
          className="NewLanding_heroSection__1Te4d NewLanding_heroSectionVideo__DzR8c"
          data-replace-quiz="false"
          data-homecopy-v2="true"
          data-sai-hero-fade="true"
        >
          <video
            className="NewLanding_heroVideo__jVAls NewLanding_heroVideoShifted__n51mA"
            autoPlay
            loop
            playsInline
            src="/images/new-landing/janeEasyDrawHome12.mp4"
          ></video>
          <div className="NewLanding_heroGradientOverlayWrapper__QgFkw">
            <div className="NewLanding_heroGradientOverlay__vEz96"></div>
          </div>
          <div className="NewLanding_heroContentWrapper__FKcQT">
            <div className="NewLanding_container__N2WSY">
              <div className="NewLanding_heroCopy___TCyK NewLanding_heroCopyHidden__VoG4s">
                <div className="NewLanding_title__ZoBu9 NewLanding_wordCycleTitle__zU6bY">
                  <div className="NewLanding_heroEligibilityPill__yI_3s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="NewLanding_heroEligibilityIcon__J0Ew2"
                    >
                      <path
                        fill="currentColor"
                        d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                      ></path>
                    </svg>
                    <span>HSA / FSA eligible</span>
                  </div>
                  <h1 data-speakable="true">
                    <span>
                      At-Home<br />
                      <strong>Health Testing.</strong>
                    </span>
                    <br />
                    <strong className="NewLanding_coloredWord__n0beB">
                      Fast. Painless.
                    </strong>
                  </h1>
                </div>
              </div>
              <div className="NewLanding_heroCopy___TCyK NewLanding_heroCopyHidden__VoG4s">
                <div className="NewLanding_description__nRa8e">
                  <div className="NewLanding_heroBenefitsGrid__iZMFI">
                    <span className="NewLanding_heroPromise__HwYuH">
                      <span className="NewLanding_heroBenefitCheck__9YxA9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="NewLanding_heroBenefitCheckIcon__YXlQl"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                          ></path>
                        </svg>
                      </span>
                      <strong className="NewLanding_heroPromiseText__GE6qT">
                        Clear insights &amp; personalized action plan
                      </strong>
                    </span>
                    <span className="NewLanding_heroBenefitItem__5WQW_">
                      <span className="NewLanding_heroBenefitCheck__9YxA9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="NewLanding_heroBenefitCheckIcon__YXlQl"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                          ></path>
                        </svg>
                      </span>
                      No needles
                    </span>
                    <span className="NewLanding_heroBenefitItem__5WQW_">
                      <span className="NewLanding_heroBenefitCheck__9YxA9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="NewLanding_heroBenefitCheckIcon__YXlQl"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                          ></path>
                        </svg>
                      </span>
                      No lab visits
                    </span>
                    <span className="NewLanding_heroBenefitItem__5WQW_">
                      <span className="NewLanding_heroBenefitCheck__9YxA9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="NewLanding_heroBenefitCheckIcon__YXlQl"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                          ></path>
                        </svg>
                      </span>
                      No waiting rooms
                    </span>
                    <span className="NewLanding_heroBenefitItem__5WQW_">
                      <span className="NewLanding_heroBenefitCheck__9YxA9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="NewLanding_heroBenefitCheckIcon__YXlQl"
                        >
                          <path
                            fill="currentColor"
                            d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                          ></path>
                        </svg>
                      </span>
                      No monthly fees
                    </span>
                  </div>
                </div>
              </div>
              <div className="NewLanding_ctaContainer__sm8UN">
                <a
                  className="NewCTAButton_button__k_jiN NewCTAButton_primary__cWNwq NewLanding_heroCtaButtonV2__jv10q"
                  type="primary"
                  itemScope=""
                  href="/join"
                  data-msai-text="Start testing
$124
$99"
                >
                  <span className="NewLanding_heroCtaButtonContent__NSH2F">
                    <span className="NewLanding_heroCtaLabel__1iZ7z">
                      Start testing
                    </span>
                    <span className="NewLanding_heroCtaDivider__TBsyK"></span>
                    <span className="NewLanding_heroCtaPrice__V48U4">
                      <span className="NewLanding_heroCtaOriginalPrice__VaqKp">
                        $124
                      </span>
                      <span className="NewLanding_heroCtaCurrentPrice__SrpuN">
                        $99
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 -960 960 960"
                      className="NewLanding_heroCtaArrow__17O4t"
                      aria-hidden="true"
                    >
                      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56z"></path>
                    </svg>
                  </span>
                </a>
                <p className="NewLanding_heroCtaSubtext__TKxuG">
                  + Shipping &amp; handling. Introductory offer.
                </p>
              </div>
              <div className="HeroReviewsCarousel_carousel__PU8YY">
                <div
                  className="HeroReviewsCarousel_track__pFLXa"
                  data-lenis-prevent-touch="true"
                >
                  <figure className="HeroReviewsCarousel_card__xdozQ">
                    <div
                      aria-label="5 out of 5 stars"
                      className="HeroReviewsCarousel_stars__Y0DB9"
                      role="img"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                    </div>
                    <blockquote className="HeroReviewsCarousel_quote__7iF37">
                      SiPhox has made getting my health in check very easy and
                      clear. They offer more biomarkers than other at-home
                      bloodwork health companies.
                    </blockquote>
                    <figcaption className="HeroReviewsCarousel_author__b2m4Z">
                      Josh T.
                    </figcaption>
                  </figure>
                  <figure className="HeroReviewsCarousel_card__xdozQ">
                    <div
                      aria-label="5 out of 5 stars"
                      className="HeroReviewsCarousel_stars__Y0DB9"
                      role="img"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                    </div>
                    <blockquote className="HeroReviewsCarousel_quote__7iF37">
                      As someone with severe needle phobia and strong vasovagal
                      responses, this experience was amazing.
                    </blockquote>
                    <figcaption className="HeroReviewsCarousel_author__b2m4Z">
                      Kara K.
                    </figcaption>
                  </figure>
                  <figure className="HeroReviewsCarousel_card__xdozQ">
                    <div
                      aria-label="5 out of 5 stars"
                      className="HeroReviewsCarousel_stars__Y0DB9"
                      role="img"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="HeroReviewsCarousel_star__x4Tty"
                      >
                        <path
                          fill="currentColor"
                          d="m10 1 2.39 5.26 5.79 1.01-4.09 4.35.94 6.02L10 14.77l-5.03 2.87.94-6.02-4.09-4.35 5.79-1.01z"
                        ></path>
                      </svg>
                    </div>
                    <blockquote className="HeroReviewsCarousel_quote__7iF37">
                      I've started the peptide journey and wanted to keep up
                      with my labs without the extra cost from a dr office
                      visit. This worked perfectly!
                    </blockquote>
                    <figcaption className="HeroReviewsCarousel_author__b2m4Z">
                      Reggie K.
                    </figcaption>
                  </figure>
                </div>
                <div className="HeroReviewsCarousel_dots__l5m0v">
                  <button
                    aria-label="Show review from Josh T."
                    className="HeroReviewsCarousel_dot__dJJv_"
                    type="button"
                    data-msai-text=""
                  ></button>
                  <button
                    aria-label="Show review from Kara K."
                    className="HeroReviewsCarousel_dot__dJJv_"
                    type="button"
                    data-msai-text=""
                  ></button>
                  <button
                    aria-label="Show review from Reggie K."
                    className="HeroReviewsCarousel_dot__dJJv_ HeroReviewsCarousel_dotActive__ojNxe"
                    type="button"
                    data-msai-text=""
                  ></button>
                </div>
              </div>
            </div>
            <div className="NewLanding_heroStatsBar__YC_lr NewLanding_heroStatsBarV2___QKax">
              <div className="NewLanding_heroStatsBarInner___9rY6">
                <div className="NewLanding_heroStat__7nJPB">
                  <span className="NewLanding_heroStatValue__wXPj4">1M+</span>
                  <span className="NewLanding_heroStatLabel__4_yKk">
                    Biomarkers tested
                  </span>
                </div>
                <div className="NewLanding_heroStatDivider__mUMdE"></div>
                <div className="NewLanding_heroStat__7nJPB">
                  <div className="TrustpilotMicroCombo_combo__WUrmA TrustpilotMicroCombo_comboStacked__q6MaV TrustpilotMicroCombo_comboHideReviewCountMobile__bBaaO TrustpilotMicroCombo_comboLight__hC1zn TrustpilotMicroCombo_comboSummaryMobile__mtP3d NewLanding_heroStatTrustpilotWidget__qSKWH">
                    <div className="TrustpilotMicroCombo_summaryLine__6npI9">
                      <span className="TrustpilotMicroCombo_label__wvvgu">
                        Excellent
                      </span>
                      <span
                        className="TrustpilotMicroCombo_stars__CnKVM"
                        aria-hidden="true"
                      >
                        <span className="TrustpilotMicroCombo_starTrack__ZC6T_">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starEmpty__wHSMQ"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starEmpty__wHSMQ"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starEmpty__wHSMQ"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starEmpty__wHSMQ"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starEmpty__wHSMQ"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                        </span>
                        <span
                          className="TrustpilotMicroCombo_starFill__EnyGo"
                          style={{ width: "92%" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starFilled__Hn_mb"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starFilled__Hn_mb"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starFilled__Hn_mb"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starFilled__Hn_mb"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="TrustpilotMicroCombo_starFilled__Hn_mb"
                          >
                            <path
                              fill="currentColor"
                              d="M0 .922h16.679v16.729H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m8.34 12.197 2.536-.645 1.06 3.276zm5.837-4.235H9.712L8.339 3.745 6.967 7.962H2.502l3.614 2.614-1.373 4.217 3.614-2.614 2.224-1.603zm12.231 4.235 2.537-.645"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="TrustpilotMicroCombo_reviewLine__xjtHq">
                      <span className="TrustpilotMicroCombo_reviewText__z4wu8">
                        <span className="TrustpilotMicroCombo_reviewCount__93uGd">
                          827 reviews
                        </span>
                        <span className="TrustpilotMicroCombo_reviewSource__fIXt9">
                          on
                        </span>
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 126 31"
                        aria-hidden="true"
                        className="TrustpilotMicroCombo_logo__N7cO9"
                      >
                        <path
                          fill="currentColor"
                          d="M33.075 11.07h12.743v2.364h-5.01v13.29h-2.756v-13.29h-4.988V11.07zm12.199 4.32h2.355v2.187h.044q.117-.465.434-.895c.21-.287.466-.563.766-.795.3-.243.634-.431 1-.586a3.1 3.1 0 0 1 1.122-.22c.29 0 .5.01.611.021.112.011.223.034.345.045v2.408a8 8 0 0 0-.545-.077 5 5 0 0 0-.544-.033c-.422 0-.822.088-1.2.254-.378.165-.7.42-.978.74-.277.331-.5.729-.666 1.215s-.245 1.039-.245 1.668v5.392h-2.51V15.39zm18.22 11.335h-2.466v-1.58h-.045c-.31.574-.766 1.027-1.377 1.37-.611.342-1.234.519-1.867.519-1.5 0-2.588-.365-3.255-1.105q-1-1.11-1-3.347V15.39h2.51v6.949c0 .994.19 1.701.579 2.11.377.409.922.618 1.61.618.534 0 .967-.077 1.323-.243.355-.165.644-.375.855-.651.222-.266.378-.597.478-.973.1-.375.144-.784.144-1.226v-6.573h2.511zm4.278-3.635c.077.729.355 1.237.833 1.536.489.287 1.066.441 1.744.441.233 0 .5-.022.8-.055s.589-.11.844-.21c.267-.1.478-.254.656-.453.167-.199.244-.453.233-.773a1.07 1.07 0 0 0-.355-.784c-.222-.21-.5-.365-.845-.498a8.5 8.5 0 0 0-1.177-.32c-.445-.088-.89-.188-1.345-.287-.466-.1-.922-.232-1.355-.376a4.2 4.2 0 0 1-1.167-.596 2.6 2.6 0 0 1-.822-.95c-.21-.387-.31-.862-.31-1.437 0-.618.155-1.127.455-1.546s.689-.752 1.144-1.006c.467-.254.978-.43 1.544-.541a9.5 9.5 0 0 1 1.622-.155c.59 0 1.156.067 1.69.188.532.122 1.021.32 1.455.608.433.276.788.64 1.077 1.082.29.442.467.984.545 1.613h-2.622c-.123-.596-.39-1.005-.823-1.204-.433-.21-.933-.31-1.488-.31a5 5 0 0 0-.634.045 3.5 3.5 0 0 0-.688.166 1.5 1.5 0 0 0-.545.353.85.85 0 0 0-.222.608c0 .31.111.552.322.74s.49.343.833.475c.345.122.734.232 1.178.32.445.089.9.188 1.367.288.455.1.9.232 1.344.375.444.144.833.343 1.178.597.344.254.622.563.833.939s.322.85.322 1.403c0 .674-.155 1.237-.466 1.712-.312.464-.712.851-1.2 1.138a5.7 5.7 0 0 1-1.645.641c-.6.133-1.2.199-1.788.199a7.6 7.6 0 0 1-2-.243c-.611-.166-1.145-.409-1.589-.73-.444-.33-.8-.74-1.055-1.225-.256-.487-.39-1.072-.411-1.746h2.533zm8.288-7.7h1.9v-3.403h2.51v3.403h2.267v1.867H80.47v6.054c0 .265.012.486.034.685.022.188.078.353.155.486q.117.199.367.298c.167.066.378.1.667.1.177 0 .355 0 .533-.011s.355-.034.533-.078v1.934c-.278.033-.555.055-.81.088a7 7 0 0 1-.812.044c-.667 0-1.2-.066-1.6-.188-.4-.121-.722-.309-.944-.552-.233-.243-.378-.541-.467-.906a7 7 0 0 1-.144-1.248v-6.684h-1.9v-1.89zm8.455 0h2.377v1.535h.045c.355-.663.844-1.127 1.477-1.414a4.9 4.9 0 0 1 2.056-.43c.9 0 1.677.154 2.344.474q1 .464 1.666 1.293c.445.552.767 1.193.99 1.922.221.73.332 1.514.332 2.342 0 .763-.1 1.503-.3 2.21a5.9 5.9 0 0 1-.9 1.9c-.4.552-.91.983-1.533 1.315s-1.344.497-2.188.497a6 6 0 0 1-1.1-.1 5 5 0 0 1-1.056-.32 3.8 3.8 0 0 1-.933-.563 3.5 3.5 0 0 1-.722-.796h-.045v5.657h-2.51zm8.777 5.678q0-.762-.2-1.491a4 4 0 0 0-.6-1.282 3.05 3.05 0 0 0-.99-.895 2.8 2.8 0 0 0-1.366-.342c-1.055 0-1.855.364-2.388 1.094q-.8 1.093-.8 2.916c0 .575.066 1.105.21 1.591.145.486.345.906.634 1.26q.417.53 1 .828c.389.21.844.31 1.355.31.578 0 1.056-.122 1.456-.354s.722-.541.977-.906c.256-.376.445-.795.556-1.27.1-.476.156-.962.156-1.459m4.432-9.998h2.511v2.364h-2.51zm0 4.32h2.511v11.335h-2.51zm4.756-4.32h2.51v15.655h-2.51zm10.21 15.964c-.911 0-1.722-.155-2.433-.453a5.4 5.4 0 0 1-1.811-1.237 5.4 5.4 0 0 1-1.122-1.89 7.3 7.3 0 0 1-.39-2.408c0-.862.134-1.657.39-2.386a5.4 5.4 0 0 1 1.122-1.89c.489-.53 1.1-.938 1.81-1.237.712-.298 1.523-.453 2.434-.453.91 0 1.722.155 2.433.453a5.4 5.4 0 0 1 1.81 1.238c.49.53.867 1.16 1.123 1.889a7.2 7.2 0 0 1 .389 2.386c0 .873-.134 1.68-.39 2.408a5.4 5.4 0 0 1-1.121 1.89c-.489.53-1.1.939-1.811 1.237s-1.522.453-2.433.453m0-1.978c.555 0 1.044-.121 1.455-.353a3.1 3.1 0 0 0 1.011-.917c.267-.376.456-.807.589-1.282.122-.475.189-.96.189-1.458 0-.486-.067-.961-.189-1.447a3.8 3.8 0 0 0-.589-1.282 3.06 3.06 0 0 0-1.01-.906c-.412-.232-.9-.353-1.456-.353s-1.045.121-1.456.353a3.2 3.2 0 0 0-1.01.906 4 4 0 0 0-.59 1.282 6 6 0 0 0-.188 1.447c0 .497.066.983.188 1.458.123.475.323.906.59 1.282s.6.685 1.01.917c.411.243.9.353 1.456.353m6.488-9.666h1.9v-3.403h2.51v3.403h2.267v1.867h-2.266v6.054c0 .265.01.486.033.685.022.188.078.353.156.486q.116.199.366.298c.167.066.378.1.667.1.178 0 .355 0 .533-.011s.356-.034.533-.078v1.934c-.277.033-.555.055-.81.088a7 7 0 0 1-.812.044c-.666 0-1.2-.066-1.6-.188-.4-.121-.722-.309-.944-.552-.233-.243-.378-.541-.466-.906a7 7 0 0 1-.145-1.248v-6.684h-1.9v-1.89z"
                        ></path>
                        <path
                          fill="#00B67A"
                          d="M30.142 11.07h-11.51L15.076.177 11.51 11.07 0 11.059l9.321 6.74L5.755 28.68l9.321-6.728 9.31 6.728-3.555-10.882z"
                        ></path>
                        <path
                          fill="#005128"
                          d="m21.631 20.262-.8-2.464-5.755 4.154z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="NewLanding_heroStatDivider__mUMdE"></div>
                <div className="NewLanding_heroStat__7nJPB">
                  <span className="NewLanding_heroStatValue__wXPj4">
                    CLIA &amp; CAP
                  </span>
                  <span className="NewLanding_heroStatLabel__4_yKk">
                    Accredited labs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INCLUSIONS SECTION ===== */}
        <div className="msai-inclusions-section msai-inclusions-applied">
          <div className="msai-inclusions-grid">
            <div className="msai-multi-inclusion-card">
              <div className="msai-multi-inclusion-icon-chip">
                <svg
                  className="msai-multi-inclusion-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.6"
                  ></circle>
                  <path
                    d="M8 12.2l2.6 2.6L16 9.4"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="msai-multi-inclusion-title">Everything's included</p>
              <p className="msai-multi-inclusion-text">
                Testing, insights &amp; action plans, supplement recommendations,
                Sai AI, wearable sync, and your dashboard.
              </p>
            </div>
            <div className="msai-multi-inclusion-card">
              <div className="msai-multi-inclusion-icon-chip">
                <svg
                  className="msai-multi-inclusion-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="5"
                    width="17"
                    height="15"
                    rx="2.5"
                    stroke="currentColor"
                    stroke-width="1.6"
                  ></rect>
                  <path
                    d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <p className="msai-multi-inclusion-title">You set the pace</p>
              <p className="msai-multi-inclusion-text">
                Choose monthly, quarterly, or every 6 months. Your membership
                renews on the cadence you pick.
              </p>
            </div>
            <div className="msai-multi-inclusion-card">
              <div className="msai-multi-inclusion-icon-chip">
                <svg
                  className="msai-multi-inclusion-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="11"
                    width="14"
                    height="9"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.6"
                  ></rect>
                  <path
                    d="M8 11V8a4 4 0 017.5-1.9"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <p className="msai-multi-inclusion-title">No lock-in</p>
              <p className="msai-multi-inclusion-text">
                Change your cadence or cancel anytime. HSA/FSA eligible.
              </p>
            </div>
          </div>
          <div className="msai-inclusions-cta-row">
            <a
              href="/join"
              className="msai-inclusions-cta"
              data-msai-metric="qt12vwcs8Iqw"
              data-msai-text="Start testing"
            >
              Start testing
            </a>
          </div>
        </div>

        {/* ===== TESTING STEPS SECTION ===== */}
        <section className="TestingSteps_section__EypjE" data-nosnippet="true">
          <h2 className="TestingSteps_sectionTitle__3JeAu">
            Shortest path to <strong>answers.</strong>
          </h2>
          <p className="TestingSteps_sectionSubtitle__5QZSe">
            No appointments. No waiting rooms. Results in 7–10 days.
          </p>
          <div className="TestingSteps_stepsGrid__E8QaI">
            <div className="TestingSteps_stepCard__CLECW">
              <span className="TestingSteps_stepNumber__EN6Rj">01</span>
              <h3 className="TestingSteps_stepTitle__99H95">Test at home</h3>
              <p className="TestingSteps_stepDescription__xyDGo">
                5-minute test. No pain. No lab visits. Choose a panel each time
                you test — included with membership.
              </p>
              <div className="TestingSteps_stepIllustration__EZV_n">
                <div className="TestingSteps_panelGrid__88Q2L">
                  <a
                    className="TestingSteps_panelCard__T2yra "
                    href="/pricing/easydraw-heart-and-metabolic-program"
                    style={{
                      transition:
                        "background 0.3s, box-shadow 0.3s, color 0.3s",
                    }}
                    data-msai-text="Heart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 45 46"
                      width="24"
                      height="24"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                      >
                        <path d="M9.21 22.754c1.665 1.664 9.236 9.357 13.462 13.65 4.292-4.392 12.464-12.14 13.546-13.65 2.503-3.49 2.955-8.763-1.354-12.007-5.138-3.867-10.772-.198-12.192 1.981-1.213-1.98-6.878-5.948-12.184-1.98-3.897 2.912-4.5 8.787-1.278 12.006"></path>
                        <path d="M5 22.777h9.317l2.976-6.737 5.25 10.194 4.506-7.613 2.713 4.156H40"></path>
                      </g>
                    </svg>
                    <span>Heart</span>
                  </a>
                  <a
                    className="TestingSteps_panelCard__T2yra "
                    href="/pricing/easydraw-hormone-program"
                    style={{
                      transition:
                        "background 0.3s, box-shadow 0.3s, color 0.3s",
                    }}
                    data-msai-text="Hormones"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 45 46"
                      width="24"
                      height="24"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                      >
                        <path d="M19.306 15.354a6.382 6.382 0 1 1-12.764 0 6.382 6.382 0 0 1 12.764 0M38.462 29.96a6.382 6.382 0 1 1-12.764 0 6.382 6.382 0 0 1 12.764 0M13.094 21.626v13.463M8.578 31.138h8.823M32.228 23.038V10.216m0 0-4.267 4.267m4.267-4.267 4.267 4.267"></path>
                      </g>
                    </svg>
                    <span>Hormones</span>
                  </a>
                  <a
                    className="TestingSteps_panelCard__T2yra "
                    href="/pricing/easydraw-thyroid-program"
                    style={{
                      transition:
                        "background 0.3s, box-shadow 0.3s, color 0.3s",
                    }}
                    data-msai-text="Thyroid"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 49 48"
                      width="24"
                      height="24"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      >
                        <path d="M21.883 38.526v1.632c0 .64.78 1.74 2.804 1.74s2.875-.994 2.875-1.74v-1.81"></path>
                        <path d="M18.982 29.057c-.692 2.2 1.442 2.84 1.442 4.295 0 1.597-1.211 1.42-1.211 3.478 0 1.922 1.21 2.449 1.96 1.846.75-.604 1.472-1.385 3.721-1.385s2.74.959 3.317 1.385c.577.425 2.394.78 2.394-1.846s-1.587-2.059-1.616-3.478c-.028-1.42 1.616-1.775 1.616-3.55 0-1.742-1.587-2.378-3.115-1.987-1.001.255-1.615.887-2.913.887-.894 0-1.76-.426-2.567-.887-.808-.462-2.49-.468-3.028 1.242M16.196 19.08c-.4 4.513-1.575 15.013-10.926 18.586v5.453M32.747 19.764c.4 4.513 1.456 14.329 10.808 17.901v5.454"></path>
                        <path d="m9.824 4.881 1.47 9.842c2.496 2.53 8.645 7.588 13.267 7.588s11.163-5.059 13.856-7.588L39.64 4.88"></path>
                        <path d="M20.82 14.125c1.527-.986 5.713-1.505 7.862 0M26.805 15.115c-.797.56-2.98.855-4.1 0"></path>
                      </g>
                    </svg>
                    <span>Thyroid</span>
                  </a>
                  <a
                    className="TestingSteps_panelCard__T2yra TestingSteps_panelCardHighlighted__fM1UT"
                    href="/pricing/easydraw-core-program"
                    style={{
                      transition:
                        "background 0.3s, box-shadow 0.3s, color 0.3s",
                    }}
                    data-msai-text="Longevity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 45 46"
                      width="24"
                      height="24"
                    >
                      <g stroke="currentColor" stroke-width="1.6">
                        <path d="M21.505 23.43c-1.184 1.08-2.83 2.52-4.087 3.778-.796.796-1.408 2.336-1.343 3.775.098 2.165 1.343 2.165 2.73 2.165h8.57c1.544 0 2.153-.74 2.153-2.165 0-1.758-.574-3.075-1.387-3.888-1.193-1.193-9.723-8.77-10.723-9.98-.76-.92-1.323-1.934-1.242-4.148.057-1.554 1.948-1.63 2.63-1.63h8.568c1.326 0 2.118.737 2.118 1.63 0 1.662-.49 3.434-1.217 4.212-.837.896-3.06 2.905-4.065 3.797z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M33.975 9.149c-3.049-2.42-6.919-4.184-11.207-4.152-4.288.031-8.277 1.5-11.365 4.152-2.236 1.92-6.192 6.299-6.192 13.8 0 5.183 3.319 10.657 4.978 11.795m0 0 1.214-1.17.516 3.094-3.07-.535z"
                        ></path>
                        <path
                          stroke-dasharray="3 5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.079 38.613c.711.26 3.588 1.426 7.834.822s8.002-2.593 10.708-5.633c1.96-2.202 5.295-7.07 4.293-14.504"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m37.262 15.53 1.664-.734 1.386-.638-2.461-1.5z"
                        ></path>
                      </g>
                    </svg>
                    <span>Longevity</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="TestingSteps_stepCard__CLECW">
              <span className="TestingSteps_stepNumber__EN6Rj">02</span>
              <h3 className="TestingSteps_stepTitle__99H95">Results analyzed</h3>
              <p className="TestingSteps_stepDescription__xyDGo">
                CLIA-certified lab processing. Expert review. Clear,
                easy-to-understand results.
              </p>
              <div className="TestingSteps_stepIllustration__EZV_n">
                <div className="TestingSteps_resultsChart__49WWo">
                  <div className="TestingSteps_chartArea__8aLuu">
                    <svg
                      viewBox="0 0 265 110"
                      className="TestingSteps_chartSvg__pr1qT"
                    >
                      <line
                        x1="15"
                        y1="35"
                        x2="250"
                        y2="35"
                        stroke="#e8ecf0"
                        stroke-width="0.8"
                      ></line>
                      <line
                        x1="15"
                        y1="55"
                        x2="250"
                        y2="55"
                        stroke="#e8ecf0"
                        stroke-width="0.8"
                      ></line>
                      <line
                        x1="15"
                        y1="75"
                        x2="250"
                        y2="75"
                        stroke="#e8ecf0"
                        stroke-width="0.8"
                      ></line>
                      <line
                        x1="15"
                        y1="95"
                        x2="250"
                        y2="95"
                        stroke="#e8ecf0"
                        stroke-width="0.8"
                      ></line>
                      <g>
                        <defs>
                          <linearGradient
                            id="seg-0"
                            x1="20"
                            y1="88"
                            x2="65"
                            y2="72"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stop-color="#ef4444"></stop>
                            <stop offset="100%" stop-color="#f97316"></stop>
                          </linearGradient>
                        </defs>
                        <line
                          x1="20"
                          y1="88"
                          x2="65"
                          y2="72"
                          stroke="url(#seg-0)"
                          stroke-width="2"
                          stroke-linecap="round"
                          className="TestingSteps_chartLineAnim__em2A7"
                        ></line>
                      </g>
                      <g>
                        <defs>
                          <linearGradient
                            id="seg-1"
                            x1="65"
                            y1="72"
                            x2="110"
                            y2="58"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stop-color="#f97316"></stop>
                            <stop offset="100%" stop-color="#eaad08"></stop>
                          </linearGradient>
                        </defs>
                        <line
                          x1="65"
                          y1="72"
                          x2="110"
                          y2="58"
                          stroke="url(#seg-1)"
                          stroke-width="2"
                          stroke-linecap="round"
                          className="TestingSteps_chartLineAnim__em2A7"
                        ></line>
                      </g>
                      <g>
                        <defs>
                          <linearGradient
                            id="seg-2"
                            x1="110"
                            y1="58"
                            x2="155"
                            y2="42"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stop-color="#eaad08"></stop>
                            <stop offset="100%" stop-color="#eab308"></stop>
                          </linearGradient>
                        </defs>
                        <line
                          x1="110"
                          y1="58"
                          x2="155"
                          y2="42"
                          stroke="url(#seg-2)"
                          stroke-width="2"
                          stroke-linecap="round"
                          className="TestingSteps_chartLineAnim__em2A7"
                        ></line>
                      </g>
                      <g>
                        <defs>
                          <linearGradient
                            id="seg-3"
                            x1="155"
                            y1="42"
                            x2="200"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stop-color="#eab308"></stop>
                            <stop offset="100%" stop-color="#95c522"></stop>
                          </linearGradient>
                        </defs>
                        <line
                          x1="155"
                          y1="42"
                          x2="200"
                          y2="30"
                          stroke="url(#seg-3)"
                          stroke-width="2"
                          stroke-linecap="round"
                          className="TestingSteps_chartLineAnim__em2A7"
                        ></line>
                      </g>
                      <g>
                        <defs>
                          <linearGradient
                            id="seg-4"
                            x1="200"
                            y1="30"
                            x2="245"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stop-color="#95c522"></stop>
                            <stop offset="100%" stop-color="#22c55e"></stop>
                          </linearGradient>
                        </defs>
                        <line
                          x1="200"
                          y1="30"
                          x2="245"
                          y2="22"
                          stroke="url(#seg-4)"
                          stroke-width="2"
                          stroke-linecap="round"
                          className="TestingSteps_chartLineAnim__em2A7"
                        ></line>
                      </g>
                      <circle
                        cx="20"
                        cy="88"
                        r="3"
                        fill="#ef4444"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                      <circle
                        cx="65"
                        cy="72"
                        r="3"
                        fill="#f97316"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                      <circle
                        cx="110"
                        cy="58"
                        r="3"
                        fill="#eaad08"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                      <circle
                        cx="155"
                        cy="42"
                        r="3"
                        fill="#eab308"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                      <circle
                        cx="200"
                        cy="30"
                        r="3"
                        fill="#95c522"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                      <circle
                        cx="245"
                        cy="22"
                        r="3"
                        fill="#22c55e"
                        className="TestingSteps_chartDotAnim__4NIUQ"
                      ></circle>
                    </svg>
                    <div
                      className="TestingSteps_optimalBadge__xwUsk"
                      style={{ opacity: 1, transition: "opacity 0.4s" }}
                    >
                      Optimal
                    </div>
                    <div className="TestingSteps_chartLabel__qgh7G">
                      <span className="TestingSteps_chartLabelDot__FNhTm"></span>
                      ApoA1 over time
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TestingSteps_stepCard__CLECW">
              <span className="TestingSteps_stepNumber__EN6Rj">03</span>
              <h3 className="TestingSteps_stepTitle__99H95">Take Action</h3>
              <p className="TestingSteps_stepDescription__xyDGo">
                Receive custom insights and a personalized action plan. Retest
                to track improvements in your biomarkers.
              </p>
              <div className="TestingSteps_stepIllustration__EZV_n">
                <div className="TestingSteps_actionPlanStack__OQAae">
                  <div
                    className="TestingSteps_stackedCard__QhRck"
                    style={{
                      zIndex: 4,
                      transform: "translateY(0px) scale(1)",
                      opacity: 1,
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s",
                    }}
                  >
                    <span className="TestingSteps_stackedCardIcon__X2XCz">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        fill="none"
                      >
                        <g
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.75"
                          clip-path="url(#diet_svg__a)"
                        >
                          <path d="M12.75 19.716A5.05 5.05 0 0 1 10 18.889a5.05 5.05 0 0 1-2.748.825c-1.462 0-2.9-1.165-4.049-3.282-.979-1.802-1.587-4.029-1.587-5.808 0-1.71.575-3.135 1.664-4.123.996-.903 2.406-1.402 3.972-1.402.977.003 1.931.29 2.748.825A5.05 5.05 0 0 1 12.75 5.1c1.566 0 2.976.497 3.972 1.402 1.088.986 1.663 2.412 1.663 4.123 0 1.78-.608 4.006-1.585 5.81-1.15 2.116-2.588 3.282-4.05 3.282ZM10 18.078a.37.37 0 0 1 .215.069 4.34 4.34 0 0 0 2.534.833c1.162 0 2.401-1.055 3.4-2.896.91-1.677 1.498-3.82 1.498-5.458 0-2.907-1.923-4.786-4.898-4.786-.896 0-1.77.288-2.534.833a.37.37 0 0 1-.43 0 4.34 4.34 0 0 0-2.533-.833c-2.975-.002-4.898 1.875-4.898 4.784 0 1.639.588 3.781 1.498 5.458.998 1.84 2.238 2.896 3.4 2.896.896 0 1.77-.289 2.534-.834a.37.37 0 0 1 .214-.066Z"></path>
                          <path d="M10.001 6.74a.37.37 0 0 1-.361-.445c.427-2.013.194-3.21-.077-3.86-.283-.68-.688-.932-.668-.912l.005.003.352-.648c.084.046 2.044 1.168 1.11 5.569A.37.37 0 0 1 10 6.74Z"></path>
                          <path d="M12.716 4.482a6.5 6.5 0 0 1-2.507-.534.37.37 0 0 1-.156-.53c.046-.074 1.163-1.822 3.052-2.377 1.89-.556 3.772.31 3.852.348a.37.37 0 0 1 .156.53c-.046.074-1.163 1.822-3.053 2.377a4.8 4.8 0 0 1-1.344.186Zm-1.77-1.04c.609.2 1.776.48 2.904.148s1.96-1.196 2.363-1.694c-.609-.2-1.776-.478-2.903-.148s-1.96 1.196-2.364 1.694Z"></path>
                        </g>
                        <defs>
                          <clipPath id="diet_svg__a">
                            <path fill="#fff" d="M0 .261h20v20H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="TestingSteps_stackedCardTitle__BWoI3">
                      Increase Lycopene Intake
                    </span>
                    <span className="TestingSteps_stackedCardTag__5yrE5">
                      HDL Cholesterol
                    </span>
                  </div>
                  <div
                    className="TestingSteps_stackedCard__QhRck"
                    style={{
                      zIndex: 3,
                      transform: "translateY(-8px) scale(0.97)",
                      opacity: 0.8,
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s",
                    }}
                  >
                    <span className="TestingSteps_stackedCardIcon__X2XCz">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="17"
                        fill="currentColor"
                      >
                        <path d="M10.167 16.75 9 15.583l2.958-2.958-7.083-7.083L1.917 8.5.75 7.333l1.167-1.208L.75 4.958l1.75-1.75L1.333 2 2.5.833 3.708 2 5.458.25l1.167 1.167L7.833.25 9 1.417 6.042 4.375l7.083 7.083L16.083 8.5l1.167 1.167-1.167 1.208 1.167 1.167-1.75 1.75L16.667 15 15.5 16.167 14.292 15l-1.75 1.75-1.167-1.167z"></path>
                      </svg>
                    </span>
                    <span className="TestingSteps_stackedCardTitle__BWoI3">
                      Strength Training for Lower Ferritin
                    </span>
                    <span className="TestingSteps_stackedCardTag__5yrE5">
                      Ferritin
                    </span>
                  </div>
                  <div
                    className="TestingSteps_stackedCard__QhRck"
                    style={{
                      zIndex: 2,
                      transform: "translateY(-16px) scale(0.94)",
                      opacity: 0.6,
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s",
                    }}
                  >
                    <span className="TestingSteps_stackedCardIcon__X2XCz">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="27"
                        fill="none"
                      >
                        <g
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="1.5"
                        >
                          <path d="M3.52 13.403c.834-1.458 3.51-3.056 5.293-3.354M14.266 15.187c2.524.883 5.378 3.931 5.973 6.019M10.07 9.246c.922-.366 1.54-.522 2.719-.507m2.186.195c1.306.152 2.147.393 2.91.89"></path>
                          <path d="M6.803 6.773a3.133 3.133 0 0 0-5.34 3.276l3.994 6.512a3.133 3.133 0 0 0 5.34-3.276z"></path>
                          <path d="M10.732 16.667c.31.365.685.672 1.11.905m5.962-5.863.38-6.957A3.937 3.937 0 0 0 14.47.608a3.937 3.937 0 0 0-4.145 3.714l-.41 7.52"></path>
                          <path d="M23.73 17.772a4.241 4.241 0 0 0-5.945-6.047l-6.726 6.614a4.24 4.24 0 0 0-.05 5.996 4.24 4.24 0 0 0 5.996.05z"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="TestingSteps_stackedCardTitle__BWoI3">
                      Boost Vitamin B2
                    </span>
                    <span className="TestingSteps_stackedCardTag__5yrE5">
                      T4 (free)
                    </span>
                  </div>
                  <div
                    className="TestingSteps_stackedCard__QhRck"
                    style={{
                      zIndex: 1,
                      transform: "translateY(-24px) scale(0.91)",
                      opacity: 0.4,
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s",
                    }}
                  >
                    <span className="TestingSteps_stackedCardIcon__X2XCz">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                      >
                        <path d="M9.503 12q1.041 0 1.77-.729t.73-1.77-.73-1.771A2.4 2.4 0 0 0 9.503 7a2.4 2.4 0 0 0-1.771.73 2.4 2.4 0 0 0-.73 1.77q0 1.042.73 1.771.729.73 1.77.73m0 1.667q-1.73 0-2.948-1.218-1.22-1.22-1.22-2.948 0-1.73 1.22-2.948 1.218-1.22 2.948-1.219 1.728 0 2.948 1.219Q13.669 7.77 13.669 9.5q0 1.728-1.219 2.948-1.218 1.218-2.947 1.218m-5.834-3.333H.336V8.667h3.333zm15 0h-3.333V8.667h3.333zm-10-6.667V.334h1.667v3.333zm0 15v-3.333h1.667v3.333zM4.836 5.96l-2.104-2.02 1.187-1.23 2 2.083zm10.25 10.333-2.02-2.104 1.103-1.146 2.104 2.021zM13.044 4.834l2.021-2.104 1.23 1.187-2.084 2zM2.711 15.084l2.104-2.02 1.146 1.103-2.02 2.105z"></path>
                      </svg>
                    </span>
                    <span className="TestingSteps_stackedCardTitle__BWoI3">
                      Use Sauna Sessions
                    </span>
                    <span className="TestingSteps_stackedCardTag__5yrE5">
                      Cortisol
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="TestingSteps_buttons__TEai4">
            <a
              className="NewCTAButton_button__k_jiN NewCTAButton_primary__cWNwq"
              type="primary"
              itemScope=""
              href="/join"
              data-msai-text="Start Testing"
            >
              Start Testing
            </a>
            <a
              className="NewCTAButton_button__k_jiN NewCTAButton_secondary__cIWoO"
              type="primary"
              itemScope=""
              href="/programs"
              data-msai-text="See what we test"
            >
              See what we test
            </a>
          </div>
        </section>

        {/* ===== SCROLLING CONDITIONS SECTION ===== */}
        <section
          className="ScrollingConditionsList_section__GpOfA "
          data-nosnippet="true"
        >
          <div className="ScrollingConditionsList_header__pYOL5">
            <h2 className="ScrollingConditionsList_title__vMuc7">
              <strong>Know</strong> where you stand.<br />
              <strong>Stay ahead</strong> of what's coming.
            </h2>
            <p className="ScrollingConditionsList_subtitle__fgS8S">
              Establish your baseline, track your biomarkers over time, and
              catch changes before they become problems.
            </p>
          </div>
          <div className="ScrollingConditionsList_scrollingWrapper____KY0">
            <div className="ScrollingConditionsList_rowsContainer__UvTEg">
              <div
                className="ScrollingRow_row__uE3jX ScrollingRow_scrollLeft__7xbv_"
                style={{ animation: "scroll-left 30s linear infinite" }}
              >
                <div className="ScrollingRow_track__pNY6u">
                  {[
                    "Insulin resistance",
                    "Diabetes",
                    "Coronary artery disease",
                    "Gout",
                    "Hashimoto's thyroiditis",
                    "Heart disease",
                    "Atherosclerosis",
                    "Stroke",
                    "Prediabetes",
                    "Type 2 diabetes",
                    "High cholesterol",
                    "Lipid and lipoprotein abnormalities",
                    "Cardiometabolic risk",
                    "Glycemic dysregulation",
                    "Inflammation",
                  ].map((condition, i) => (
                    <div key={i} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                  {[
                    "Insulin resistance",
                    "Diabetes",
                    "Coronary artery disease",
                    "Gout",
                    "Hashimoto's thyroiditis",
                    "Heart disease",
                    "Atherosclerosis",
                    "Stroke",
                    "Prediabetes",
                    "Type 2 diabetes",
                    "High cholesterol",
                    "Lipid and lipoprotein abnormalities",
                    "Cardiometabolic risk",
                    "Glycemic dysregulation",
                    "Inflammation",
                  ].map((condition, i) => (
                    <div key={i + 15} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="ScrollingRow_row__uE3jX ScrollingRow_scrollRight__0cy2B"
                style={{ animation: "scroll-right 30s linear infinite" }}
              >
                <div className="ScrollingRow_track__pNY6u">
                  {[
                    "Hypothyroidism",
                    "Anemia",
                    "Hypogonadism",
                    "PCOS",
                    "Alzheimer's risk",
                    "Chronic inflammation",
                    "Metabolic syndrome",
                    "Thyroid dysfunction",
                    "Hyperthyroidism",
                    "Thyroid hormone imbalance",
                    "Low testosterone",
                    "Estradiol imbalance",
                    "Progesterone imbalance",
                    "Autoimmune activity",
                    "Cognitive decline",
                  ].map((condition, i) => (
                    <div key={i} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                  {[
                    "Hypothyroidism",
                    "Anemia",
                    "Hypogonadism",
                    "PCOS",
                    "Alzheimer's risk",
                    "Chronic inflammation",
                    "Metabolic syndrome",
                    "Thyroid dysfunction",
                    "Hyperthyroidism",
                    "Thyroid hormone imbalance",
                    "Low testosterone",
                    "Estradiol imbalance",
                    "Progesterone imbalance",
                    "Autoimmune activity",
                    "Cognitive decline",
                  ].map((condition, i) => (
                    <div key={i + 15} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="ScrollingRow_row__uE3jX ScrollingRow_scrollLeft__7xbv_"
                style={{ animation: "scroll-left 30s linear infinite" }}
              >
                <div className="ScrollingRow_track__pNY6u">
                  {[
                    "Hormone imbalance",
                    "Kidney function decline",
                    "Vitamin deficiencies",
                    "Iron overload",
                    "Autoimmune patterns",
                    "Prostate health changes",
                    "Liver dysfunction",
                    "Stress hormone imbalance",
                    "Cortisol imbalance",
                    "Nutrient deficiencies",
                    "Kidney function trends",
                    "Vitamin D deficiency",
                    "Vitamin B12 deficiency",
                    "Iron deficiency",
                    "Ferritin imbalance",
                    "Liver enzyme elevation",
                  ].map((condition, i) => (
                    <div key={i} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                  {[
                    "Hormone imbalance",
                    "Kidney function decline",
                    "Vitamin deficiencies",
                    "Iron overload",
                    "Autoimmune patterns",
                    "Prostate health changes",
                    "Liver dysfunction",
                    "Stress hormone imbalance",
                    "Cortisol imbalance",
                    "Nutrient deficiencies",
                    "Kidney function trends",
                    "Vitamin D deficiency",
                    "Vitamin B12 deficiency",
                    "Iron deficiency",
                    "Ferritin imbalance",
                    "Liver enzyme elevation",
                  ].map((condition, i) => (
                    <div key={i + 16} className="ScrollingRow_conditionCard__w8E3d">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PORTAL SHOWCASE SECTION ===== */}
        <div>
          <div className="PortalShowcaseGroup_group__kA_gs">
            <section
              className="PortalHomeShowcase_section__C88PV"
              data-nosnippet="true"
            >
              <div className="PortalHomeShowcase_container__45xES">
                <div className="PortalHomeShowcase_header__KnheP">
                  <h2 className="PortalHomeShowcase_sectionTitle__c4Xc_">
                    Your whole health <strong>in one place.</strong>
                  </h2>
                  <p className="PortalHomeShowcase_sectionSubtitle__UpXR7">
                    Biomarkers, wearables, lab uploads, supplements, insights,
                    actions and more, all in one dashboard.
                  </p>
                </div>
                <div className="PortalHomeShowcase_grid__BfVzT">
                  {/* Hero Card */}
                  <div className="PortalHomeShowcase_card__7ZdSx PortalHomeShowcase_hero__zOsHS">
                    <div className="PortalHomeShowcase_heroCopy__ZLvbX">
                      <h3 className="PortalHomeShowcase_heroHeadline___Qnmj">
                        Good afternoon, John.
                      </h3>
                      <p className="PortalHomeShowcase_heroBody__kFYQC">
                        6 systems improved since your last test, Liver Health
                        the most at 9%. Nutritional is still out of range, so
                        your plan targets it next. Let's keep it going!
                      </p>
                      <div className="PortalHomeShowcase_heroCtas__LMx_M">
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillPrimary__Lc74l"
                          data-msai-text="View Full Report"
                        >
                          View Full Report
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="PortalHomeShowcase_pillIcon__eFH4_"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m9 18 6-6-6-6"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillGhost__QtuL1"
                          data-msai-text="Action plan"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 16"
                            className="PortalHomeShowcase_pillIcon__eFH4_"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.01 2.57H.548v12.887H11.42V2.568h-1.266"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m2.469 7.873.673.67 1.257-1.257M6.188 7.977h3.4M6.188 11.617h3.4"
                            ></path>
                            <circle
                              cx="3.515"
                              cy="11.617"
                              r="1.132"
                              fill="currentColor"
                            ></circle>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.531 3.594h4.906"
                            ></path>
                            <circle
                              cx="5.981"
                              cy="1.884"
                              r="1.34"
                              stroke="currentColor"
                            ></circle>
                          </svg>
                          Action plan
                        </button>
                      </div>
                    </div>
                    <div className="PortalHomeShowcase_heroRing__l10_a">
                      <div className="ScoreRing_ringColumn__UDg0a">
                        <div className="ScoreRing_ringWrapper__7TLN_">
                          <div
                            className="ScoreRing_ring___zTP3 ScoreRing_ringInRange__19bRT"
                            style={{ "--ring-pct": "80" }}
                          >
                            <div className="ScoreRing_ringCenter__vuSWw">
                              <div className="ScoreRing_ringValue__9Ib39">
                                80%
                              </div>
                              <div className="ScoreRing_ringLabel__F5uDY">
                                Liver Health
                              </div>
                            </div>
                          </div>
                          <div className="ScoreRing_trendPill__itzKI">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="ScoreRing_trendIcon__7d7Pu"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m4 16.5 6-6 4 4L20.5 8"
                              ></path>
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.5 8h5v5"
                              ></path>
                            </svg>
                            +9%
                          </div>
                        </div>
                      </div>
                      <div className="PortalHomeShowcase_bioAgeChip__VNPeQ">
                        <span className="PortalHomeShowcase_bioAgeValue__CCEQA">
                          BioAge 41
                        </span>
                        <span className="PortalHomeShowcase_bioAgeDot__hCftg">
                          ·
                        </span>
                        <span>4 yrs under</span>
                        <span className="PortalHomeShowcase_bioAgeDot__hCftg">
                          ·
                        </span>
                        <span className="PortalHomeShowcase_bioAgeValue__CCEQA">
                          Impressive!
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps Card */}
                  <div className="PortalHomeShowcase_card__7ZdSx PortalHomeShowcase_nextSteps__vNdZ8">
                    <div className="PortalHomeShowcase_nextHeader__Q22pQ">
                      <span className="PortalHomeShowcase_eyebrow__DwlBv">
                        Next steps
                      </span>
                      <span className="PortalHomeShowcase_count__yi2X1">
                        4 items
                      </span>
                    </div>
                    <h3 className="PortalHomeShowcase_cardTitle__21Dt5">
                      Keep the loop going.
                    </h3>
                    <div className="PortalHomeShowcase_stepList__qyCqx">
                      <div
                        className="PortalHomeShowcase_stepRow___OZRu"
                        data-divider="true"
                      >
                        <span className="PortalHomeShowcase_iconTile__ZVMAE">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="PortalHomeShowcase_stepIcon__UiRZn"
                          >
                            <circle
                              cx="12"
                              cy="7.5"
                              r="3.6"
                              stroke="currentColor"
                              stroke-width="1.7"
                            ></circle>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="1.7"
                              d="M4.5 20a7.5 7.5 0 0 1 15 0"
                            ></path>
                          </svg>
                        </span>
                        <div className="PortalHomeShowcase_stepText__nOt9A">
                          <div className="PortalHomeShowcase_stepTitle__Jf3Wh">
                            Share results with your doctor
                          </div>
                          <div className="PortalHomeShowcase_stepSub__77hML">
                            They see new reports when you do
                          </div>
                        </div>
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillSmall__nmdsu"
                          data-msai-text="Share"
                        >
                          Share
                        </button>
                      </div>
                      <div
                        className="PortalHomeShowcase_stepRow___OZRu"
                        data-divider="true"
                      >
                        <span className="PortalHomeShowcase_iconTile__ZVMAE">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 19 19"
                            className="PortalHomeShowcase_stepIcon__UiRZn"
                          >
                            <g
                              stroke="currentColor"
                              clip-path="url(#wearable_svg__a)"
                            >
                              <path d="m6.305 3.693.78-2.916h5.259l.8 2.916M6.305 14.749l.78 2.916h5.259l.8-2.916"></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="1.5"
                                d="M4.578 9.385h2.84l.933-3.548.887 3.548h.883l1.031 2.689 1.028-2.69h2.68"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="1.5"
                                d="M14.856 5.75c0-1.135-.92-2.057-2.056-2.057H6.633A2.057 2.057 0 0 0 4.578 5.75v6.944c0 1.134.921 2.056 2.055 2.056H12.8a2.057 2.057 0 0 0 2.056-2.056z"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="wearable_svg__a">
                                <path
                                  fill="transparent"
                                  d="M.719.22h18v18h-18z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <div className="PortalHomeShowcase_stepText__nOt9A">
                          <div className="PortalHomeShowcase_stepTitle__Jf3Wh">
                            Connect your wearables
                          </div>
                          <div className="PortalHomeShowcase_stepSub__77hML">
                            Sleep and activity over your labs
                          </div>
                        </div>
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillSmall__nmdsu"
                          data-msai-text="Connect"
                        >
                          Connect
                        </button>
                      </div>
                      <div
                        className="PortalHomeShowcase_stepRow___OZRu"
                        data-divider="true"
                      >
                        <span className="PortalHomeShowcase_iconTile__ZVMAE">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 51 51"
                            className="PortalHomeShowcase_stepIcon__UiRZn"
                          >
                            <g
                              fill="currentColor"
                              clip-path="url(#phone-call_svg__a)"
                            >
                              <path d="M40.306 31.593c-1.044-1.087-2.303-1.669-3.638-1.669-1.324 0-2.594.571-3.681 1.658l-3.402 3.39c-.28-.15-.56-.29-.829-.43a14 14 0 0 1-1.065-.57c-3.186-2.024-6.082-4.661-8.859-8.073-1.345-1.7-2.25-3.133-2.906-4.586.882-.807 1.7-1.646 2.497-2.454.302-.301.603-.613.904-.915 2.26-2.26 2.26-5.188 0-7.448L16.39 7.557a45 45 0 0 1-1.001-1.022 51 51 0 0 0-2.024-2.003C12.32 3.5 11.071 2.95 9.758 2.95s-2.583.55-3.66 1.582l-.021.022-3.66 3.692C1.04 9.624.254 11.303.081 13.251c-.258 3.143.668 6.071 1.378 7.987 1.744 4.704 4.349 9.063 8.235 13.735 4.714 5.63 10.387 10.075 16.867 13.207 2.475 1.173 5.78 2.562 9.472 2.799.226.01.463.021.678.021 2.486 0 4.575-.893 6.21-2.67.011-.02.033-.032.044-.053.56-.678 1.205-1.292 1.883-1.948.463-.442.937-.904 1.4-1.389 1.065-1.108 1.625-2.4 1.625-3.724 0-1.335-.57-2.616-1.657-3.692zm3.854 11.334c-.011 0-.011.011 0 0-.42.452-.85.861-1.314 1.313-.7.668-1.41 1.367-2.077 2.153-1.087 1.163-2.368 1.712-4.047 1.712-.162 0-.334 0-.495-.011-3.197-.205-6.168-1.453-8.396-2.519-6.093-2.95-11.442-7.136-15.888-12.443-3.67-4.424-6.124-8.514-7.75-12.906-1-2.68-1.367-4.768-1.205-6.738.107-1.26.592-2.303 1.485-3.197l3.67-3.67c.528-.495 1.088-.765 1.637-.765.678 0 1.227.41 1.571.754l.032.032c.657.614 1.281 1.249 1.938 1.927.334.344.678.689 1.023 1.044l2.938 2.939c1.141 1.14 1.141 2.195 0 3.336-.312.313-.613.625-.926.926-.904.926-1.765 1.787-2.701 2.627-.022.021-.043.032-.054.053-.926.926-.754 1.83-.56 2.444l.032.097c.765 1.851 1.841 3.595 3.477 5.672l.01.01c2.972 3.66 6.104 6.513 9.56 8.698.44.28.893.506 1.323.721.388.194.754.377 1.066.57.043.022.086.055.129.076.366.183.71.27 1.066.27.893 0 1.453-.56 1.636-.743l3.681-3.682c.366-.366.947-.807 1.625-.807.668 0 1.217.42 1.55.786l.022.021 5.93 5.931c1.11 1.098 1.11 2.228.012 3.37M27.561 12.132c2.82.473 5.382 1.808 7.427 3.853a13.72 13.72 0 0 1 3.854 7.427c.118.71.732 1.206 1.431 1.206.087 0 .162-.011.248-.022a1.455 1.455 0 0 0 1.195-1.679 16.6 16.6 0 0 0-4.66-8.988 16.6 16.6 0 0 0-8.989-4.66 1.46 1.46 0 0 0-1.679 1.184c-.14.785.377 1.55 1.173 1.679M50.94 22.497c-.958-5.619-3.606-10.731-7.674-14.8-4.07-4.069-9.182-6.717-14.8-7.675-.787-.14-1.53.398-1.67 1.184a1.46 1.46 0 0 0 1.196 1.68c5.016.85 9.59 3.229 13.228 6.856 3.639 3.638 6.007 8.213 6.857 13.229.118.71.732 1.205 1.432 1.205.086 0 .161-.01.247-.021a1.426 1.426 0 0 0 1.184-1.658"></path>
                            </g>
                            <defs>
                              <clipPath id="phone-call_svg__a">
                                <path
                                  fill="currentColor"
                                  d="M0 0h51v51H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <div className="PortalHomeShowcase_stepText__nOt9A">
                          <div className="PortalHomeShowcase_stepTitle__Jf3Wh">
                            1:1 health coaching
                          </div>
                          <div className="PortalHomeShowcase_stepSub__77hML">
                            Talk through your results with a coach
                          </div>
                        </div>
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillSmall__nmdsu"
                          data-msai-text="Learn More"
                        >
                          Learn More
                        </button>
                      </div>
                      <div
                        className="PortalHomeShowcase_stepRow___OZRu"
                        data-divider="false"
                      >
                        <span className="PortalHomeShowcase_iconTile__ZVMAE">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 56 56"
                            className="PortalHomeShowcase_stepIcon__UiRZn"
                          >
                            <path d="M12.695 4.656h30.633c-.14-1.968-1.266-3.023-3.422-3.023H16.117c-2.156 0-3.281 1.055-3.422 3.023m-4.594 6.492h39.844c-.351-2.132-1.383-3.304-3.726-3.304H11.805c-2.344 0-3.352 1.172-3.703 3.304m2.133 43.22H45.79c4.875 0 7.336-2.438 7.336-7.266V22.21c0-4.828-2.46-7.266-7.336-7.266H10.234c-4.898 0-7.36 2.414-7.36 7.266V47.1c0 4.829 2.462 7.266 7.36 7.266m.07-3.774c-2.343 0-3.656-1.266-3.656-3.703V22.398c0-2.437 1.313-3.68 3.657-3.68h35.414c2.32 0 3.632 1.243 3.632 3.68v24.493c0 2.437-1.312 3.703-3.632 3.703Z"></path>
                          </svg>
                        </span>
                        <div className="PortalHomeShowcase_stepText__nOt9A">
                          <div className="PortalHomeShowcase_stepTitle__Jf3Wh">
                            Explore programs
                          </div>
                          <div className="PortalHomeShowcase_stepSub__77hML">
                            Coaching and added panels
                          </div>
                        </div>
                        <button
                          type="button"
                          className="PortalHomeShowcase_pill__cBKzh PortalHomeShowcase_pillSmall__nmdsu"
                          data-msai-text="Browse"
                        >
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Changed Section */}
                  <div className="PortalHomeShowcase_card__7ZdSx PortalHomeShowcase_changed__lGcTN">
                    <div className="PortalHomeShowcase_changedHeader__E1U5H">
                      <div>
                        <span className="PortalHomeShowcase_eyebrow__DwlBv">
                          Latest results · Jun 15, 2026 · vs your previous test
                        </span>
                        <h3 className="PortalHomeShowcase_cardTitle__21Dt5">
                          What changed.
                        </h3>
                      </div>
                      <span className="PortalHomeShowcase_viewReport___WEpL">
                        View report
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="PortalHomeShowcase_viewReportIcon__pIPdf"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m9 18 6-6-6-6"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="PortalHomeShowcase_changedRows__p3kMh">
                      {[
                        { name: "Heart Health", pct: 82, delta: "+7%" },
                        { name: "Metabolic Health", pct: 79, delta: "+6%" },
                        { name: "Kidney Health", pct: 84, delta: "+1%" },
                        { name: "Liver Health", pct: 80, delta: "+9%" },
                        { name: "Thyroid Health", pct: 77, delta: "+3%" },
                        { name: "Nutritional", pct: 58, delta: "+4%", outOfRange: true },
                        { name: "Body", pct: 71, delta: "-2%", down: true },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="PortalHomeShowcase_changedRow__rYLbW"
                          data-divider="true"
                        >
                          <div className="PortalHomeShowcase_changedName__o2Ovp">
                            <span
                              className={`PortalHomeShowcase_dot__cjaxp ${
                                item.outOfRange
                                  ? "PortalHomeShowcase_dotOutOfRange__6sK3r"
                                  : "PortalHomeShowcase_dotInRange__ZYc3x"
                              }`}
                            ></span>
                            <span className="PortalHomeShowcase_categoryName__FJdv1">
                              {item.name}
                            </span>
                            <span
                              className={`PortalHomeShowcase_rangeLabel__nooZG ${
                                item.outOfRange
                                  ? "PortalHomeShowcase_outOfRange__x1Bkl"
                                  : "PortalHomeShowcase_inRange__zFcM5"
                              }`}
                            >
                              {item.outOfRange ? "Out of range" : "In range"}
                            </span>
                          </div>
                          <div className="PortalHomeShowcase_changedData__oaaAV">
                            <div className="PortalHomeShowcase_barTrack__lnshL">
                              <span
                                className={`PortalHomeShowcase_barFill__VWAwI ${
                                  item.outOfRange
                                    ? "PortalHomeShowcase_fillOutOfRange__4IS3F"
                                    : "PortalHomeShowcase_fillInRange__0Eh4l"
                                }`}
                                style={{ "--fill": item.pct }}
                              ></span>
                            </div>
                            <span className="PortalHomeShowcase_pct__MjI94">
                              {item.pct}%
                            </span>
                            <span className="PortalHomeShowcase_deltaCell__BDsQL">
                              <span
                                className={`PortalHomeShowcase_deltaChip__xGbVh ${
                                  item.down
                                    ? "PortalHomeShowcase_deltaDown__0mndf"
                                    : "PortalHomeShowcase_deltaUp__H0_9f"
                                }`}
                              >
                                {item.down ? (
                                  <svg
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    data-icon="fall"
                                    viewBox="64 64 896 896"
                                    className="PortalHomeShowcase_deltaIcon___U7fq"
                                  >
                                    <path d="m925.9 804-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9"></path>
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="PortalHomeShowcase_deltaIcon___U7fq"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m4 16.5 6-6 4 4L20.5 8"
                                    ></path>
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15.5 8h5v5"
                                    ></path>
                                  </svg>
                                )}
                                {item.delta}
                              </span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Section */}
                  <div className="PortalHomeShowcase_card__7ZdSx PortalHomeShowcase_tracking__M0Km7">
                    <div className="PortalHomeShowcase_trackingHeader__I_t42">
                      <div className="PortalHomeShowcase_trackingHeaderText__N_4RT">
                        <span className="PortalHomeShowcase_eyebrow__DwlBv">
                          I'm tracking
                        </span>
                        <span className="PortalHomeShowcase_trackingCount__3lXPJ">
                          5 markers
                        </span>
                      </div>
                      <button
                        type="button"
                        className="PortalHomeShowcase_trackButton__WC871"
                        data-msai-text="Track a marker"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="PortalHomeShowcase_trackButtonIcon__LQQBz"
                        >
                          <path
                            fill="currentColor"
                            d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
                          ></path>
                        </svg>
                        Track a marker
                      </button>
                    </div>
                    <div className="PortalHomeShowcase_trackingRows__OKmeO">
                      {[
                        {
                          name: "25-(OH) Vitamin D",
                          grade: "Pay attention",
                          gradeColor: "#f5222d",
                          spark: "M4.0 26.0 L15.2 21.6 L26.4 23.8 L37.6 12.8 L48.8 17.2 L60.0 15.0 L71.2 21.6 L82.4 19.4 L93.6 17.2 L104.8 10.2 L116.0 4.0",
                          value: "27 ng/mL",
                          delta: "+1.4 vs last",
                          deltaColor: "#52c41a",
                          finalY: 4,
                        },
                        {
                          name: "ApoB:ApoA1 Ratio",
                          grade: "Optimal",
                          gradeColor: "#52c41a",
                          spark: "M4.0 11.3 L15.2 12.6 L26.4 11.3 L37.6 4.0 L48.8 13.8 L60.0 15.0 L71.2 16.2 L82.4 17.4 L93.6 18.7 L104.8 22.3 L116.0 26.0",
                          value: "0.34",
                          delta: "-0.03 vs last",
                          deltaColor: "#52c41a",
                          finalY: 26,
                        },
                        {
                          name: "Triglycerides",
                          grade: "Optimal",
                          gradeColor: "#52c41a",
                          spark: "M4.0 13.4 L15.2 19.7 L26.4 10.3 L37.6 22.9 L48.8 7.1 L60.0 26.0 L71.2 4.0 L82.4 19.7 L93.6 16.6 L104.8 19.7 L116.0 19.7",
                          value: "46 mg/dL",
                          delta: "no change",
                          deltaColor: "#6b6b6b",
                          finalY: 19.7,
                        },
                        {
                          name: "High-Sensitivity CRP",
                          grade: "Optimal",
                          gradeColor: "#52c41a",
                          spark: "M4.0 10.9 L15.2 17.8 L26.4 7.4 L37.6 21.2 L48.8 4.0 L60.0 14.3 L71.2 10.9 L82.4 17.8 L93.6 21.2 L104.8 15.0 L116.0 26.0",
                          value: "0.96 mg/L",
                          delta: "-0.32 vs last",
                          deltaColor: "#52c41a",
                          finalY: 26,
                        },
                        {
                          name: "Testosterone, Total (Males)",
                          grade: "Optimal",
                          gradeColor: "#52c41a",
                          spark: "M4.0 25.1 L15.2 23.3 L26.4 26.0 L37.6 21.6 L48.8 23.8 L60.0 22.9 L71.2 23.2 L82.4 18.0 L93.6 21.6 L104.8 23.1 L116.0 4.0",
                          value: "758.76 ng/dL",
                          delta: "+216.32 vs last",
                          deltaColor: "#52c41a",
                          finalY: 4,
                        },
                      ].map((marker, i) => (
                        <div key={i} className="TrackedMarkerRow_row__fw12l">
                          <div className="TrackedMarkerRow_rowName__cGTis">
                            <span className="TrackedMarkerRow_markerName__yS2F7">
                              {marker.name}
                            </span>
                            <span
                              className="TrackedMarkerRow_gradeChip__T1TvM"
                              style={{ background: marker.gradeColor }}
                            >
                              <span className="TrackedMarkerRow_chipDot__IvWH_"></span>
                              {marker.grade}
                            </span>
                          </div>
                          <div className="TrackedMarkerRow_rowData__tfuFy">
                            <div className="TrackedMarkerRow_sparkCell__T0YXo">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 120 30"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                              >
                                <path
                                  d={marker.spark}
                                  fill="none"
                                  stroke={
                                    marker.delta === "no change"
                                      ? "#6b6b6b"
                                      : marker.delta.includes("-")
                                      ? "#52c41a"
                                      : marker.deltaColor
                                  }
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  vector-effect="non-scaling-stroke"
                                ></path>
                                <circle
                                  cx="116"
                                  cy={marker.finalY}
                                  r="2.5"
                                  fill={
                                    marker.delta === "no change"
                                      ? "#6b6b6b"
                                      : marker.delta.includes("-")
                                      ? "#52c41a"
                                      : marker.deltaColor
                                  }
                                  vector-effect="non-scaling-stroke"
                                ></circle>
                              </svg>
                            </div>
                            <div
                              className="TrackedMarkerRow_deltaCell__SaAXY"
                              style={{ color: marker.deltaColor }}
                            >
                              {marker.delta}
                            </div>
                            <div className="TrackedMarkerRow_valueCell__Bn9fx">
                              {marker.value}
                            </div>
                            <span className="TrackedMarkerRow_removeButton__AnWPE">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                                className="TrackedMarkerRow_removeIcon__PqylB"
                              >
                                <path
                                  fill="currentColor"
                                  d="M15.06 3.06A1.502 1.502 0 0 0 12.936.935L8 5.876 3.06.942A1.502 1.502 0 0 0 .935 3.064L5.876 8 .942 12.94a1.502 1.502 0 0 0 2.123 2.124L8 10.124l4.94 4.935a1.502 1.502 0 0 0 2.124-2.123L10.124 8z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== ACTION PLAN SHOWCASE ===== */}
            <section
              className="ActionPlanShowcase_section__BVS5I"
              data-nosnippet="true"
            >
              <div className="ActionPlanShowcase_container__L9ABL">
                <div className="ActionPlanShowcase_header__oAM5U">
                  <h2 className="ActionPlanShowcase_sectionTitle__E90Xo">
                    Actions that <strong>compound.</strong>
                  </h2>
                  <p className="ActionPlanShowcase_sectionSubtitle__Fs6dW">
                    A routine built from your biomarkers. Take action to hit
                    your outlook by your next test.
                  </p>
                </div>
                <div className="ActionPlanShowcase_selectorGrid__EhlKe">
                  {[
                    { name: "Morning Stack", sub: "Sets the day.", active: 3, icon: "sun" },
                    { name: "The Plate", sub: "How you eat across the day.", active: 4, icon: "plate" },
                    { name: "Activity", sub: "Aerobic + strength.", active: 2, icon: "activity" },
                    { name: "Wind-down", sub: "Sleep is the hardest worker.", active: 2, icon: "moon" },
                  ].map((routine, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`ActionPlanShowcase_selectorCard__2N1yL ${
                        i === 0
                          ? "ActionPlanShowcase_routineMorning__1_D4Y ActionPlanShowcase_selectorActive__kicqG"
                          : ""
                      }`}
                      data-msai-text={routine.name + "\n" + routine.sub + "\n" + routine.active + " active"}
                    >
                      <div className="ActionPlanShowcase_selectorTop__1_GFc">
                        <span className="ActionPlanShowcase_selectorIcon__Urj7o">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.9"
                            className="ActionPlanShowcase_selectorIconSvg__KO4r4"
                          >
                            {routine.icon === "sun" && (
                              <>
                                <path d="M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"></path>
                              </>
                            )}
                            {routine.icon === "plate" && (
                              <>
                                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0 7 7M2.1 21.8l6.4-6.3M19 5l-7 7"></path>
                              </>
                            )}
                            {routine.icon === "activity" && (
                              <>
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </>
                            )}
                            {routine.icon === "moon" && (
                              <>
                                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                              </>
                            )}
                          </svg>
                        </span>
                        <div className="ActionPlanShowcase_selectorCopy__tTdHp">
                          <div className="ActionPlanShowcase_selectorTitle__oJ5hH">
                            {routine.name}
                          </div>
                          <div className="ActionPlanShowcase_selectorSub__4cXNQ">
                            {routine.sub}
                          </div>
                        </div>
                      </div>
                      <div className="ActionPlanShowcase_selectorFooter__SeOxQ">
                        {routine.active} active
                      </div>
                    </button>
                  ))}
                </div>
                <div className="ActionPlanShowcase_careSection__XbmLP ActionPlanShowcase_routineCare___0Sd5">
                  <div className="ActionPlanShowcase_careHeader__TlrUO">
                    <div className="ActionPlanShowcase_careHeaderLeft__W5wXt">
                      <span className="ActionPlanShowcase_careIcon__gEIjv">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.9"
                          className="ActionPlanShowcase_careIconSvg__cqObG"
                        >
                          <path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                          <circle cx="20" cy="10" r="2"></circle>
                        </svg>
                      </span>
                      <h3 className="ActionPlanShowcase_careTitle__uxll0">
                        Care Actions
                      </h3>
                    </div>
                    <span className="ActionPlanShowcase_careCount__dKTeC">
                      2 actions
                    </span>
                  </div>
                  <div className="ActionPlanShowcase_careList__CAAZN">
                    <div className="ActionPlanShowcase_card__kix5r">
                      <div className="ActionPlanShowcase_row__eDcYu">
                        <button
                          type="button"
                          className="ActionPlanShowcase_toggle__K3c3I ActionPlanShowcase_toggleOn__OtO7t"
                          aria-pressed="true"
                          aria-label="Turn off Consult Doctor for Elevated AST; Support Liver Health"
                          data-msai-text=""
                        >
                          <span className="ActionPlanShowcase_toggleKnob__uVovX ActionPlanShowcase_toggleKnobOn__Tcvon"></span>
                        </button>
                        <div className="ActionPlanShowcase_rowBody__tVMUW">
                          <div className="ActionPlanShowcase_titleRow__uvRSN">
                            <h4 className="ActionPlanShowcase_actionTitle__XWoe2">
                              Consult Doctor for Elevated AST; Support Liver
                              Health
                            </h4>
                          </div>
                          <p className="ActionPlanShowcase_blurb__9SOGx">
                            See a doctor to discuss your elevated AST levels
                            and, in the meantime, maintain a healthy lifestyle
                            to support liver function.
                          </p>
                          <div className="ActionPlanShowcase_improvesRow__hIyuY">
                            <span className="ActionPlanShowcase_improvesLabel__lwyhr">
                              Improves
                            </span>
                            <span className="BiomarkerPill_pill__sXKGf BiomarkerPill_payAttention__xCQzE">
                              AST
                            </span>
                            <span className="LevelBadge_badge__1nALS LevelBadge_l1__sMHMu">
                              <span className="LevelBadge_text__0VpKW">L1</span>
                              <span className="LevelBadge_info__ZiieK">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                  className="LevelBadge_infoIcon___L2J2"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0m-2 14a2 2 0 0 1 4 0v10a2 2 0 0 1-4 0zm2-3.968a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 10.032"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ActionPlanShowcase_card__kix5r">
                      <div className="ActionPlanShowcase_row__eDcYu">
                        <button
                          type="button"
                          className="ActionPlanShowcase_toggle__K3c3I ActionPlanShowcase_toggleOn__OtO7t"
                          aria-pressed="true"
                          aria-label="Turn off Address Elevated Triglycerides:HDL for Health Management"
                          data-msai-text=""
                        >
                          <span className="ActionPlanShowcase_toggleKnob__uVovX ActionPlanShowcase_toggleKnobOn__Tcvon"></span>
                        </button>
                        <div className="ActionPlanShowcase_rowBody__tVMUW">
                          <div className="ActionPlanShowcase_titleRow__uvRSN">
                            <h4 className="ActionPlanShowcase_actionTitle__XWoe2">
                              Address Elevated Triglycerides:HDL for Health
                              Management
                            </h4>
                            <span className="ActionPlanShowcase_cadence__6jJ6R">
                              • This week
                            </span>
                          </div>
                          <p className="ActionPlanShowcase_blurb__9SOGx">
                            See a doctor to discuss your elevated Triglycerides:HDL
                            ratio and its implications for insulin resistance and
                            cardiovascular risk; in the meantime, monitor your
                            levels and consider lifestyle changes to manage your
                            health.
                          </p>
                          <div className="ActionPlanShowcase_improvesRow__hIyuY">
                            <span className="ActionPlanShowcase_improvesLabel__lwyhr">
                              Improves
                            </span>
                            <span className="BiomarkerPill_pill__sXKGf BiomarkerPill_fair__gWUBb">
                              Triglycerides:HDL Ratio
                            </span>
                            <span className="LevelBadge_badge__1nALS LevelBadge_l1__sMHMu">
                              <span className="LevelBadge_text__0VpKW">L1</span>
                              <span className="LevelBadge_info__ZiieK">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                  className="LevelBadge_infoIcon___L2J2"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0m-2 14a2 2 0 0 1 4 0v10a2 2 0 0 1-4 0zm2-3.968a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 10.032"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <button
                            type="button"
                            className="ActionPlanShowcase_moreInfoStrip__phsYy"
                            aria-expanded="false"
                            data-msai-text="More info5 examples · 3 tips"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="ActionPlanShowcase_moreInfoIcon__1X6jT"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-width="1.8"
                                d="M9 6h11M9 12h11M9 18h11"
                              ></path>
                              <circle
                                cx="4.5"
                                cy="6"
                                r="1.3"
                                fill="currentColor"
                              ></circle>
                              <circle
                                cx="4.5"
                                cy="12"
                                r="1.3"
                                fill="currentColor"
                              ></circle>
                              <circle
                                cx="4.5"
                                cy="18"
                                r="1.3"
                                fill="currentColor"
                              ></circle>
                            </svg>
                            <span className="ActionPlanShowcase_moreInfoLabel__VN1Tl">
                              More info
                            </span>
                            <span className="ActionPlanShowcase_moreInfoCount__83v1F">
                              5 examples · 3 tips
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="none"
                              className="ActionPlanShowcase_moreInfoChevron__Tm4za"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m5 7.5 5 5 5-5"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ===== MEMBERSHIP FEATURES ===== */}
        <section
          className="MembershipFeatures_membershipFeaturesSection__rhrgF"
          data-nosnippet="true"
        >
          <div className="MembershipFeatures_container__WOIzC">
            <div className="MembershipFeatures_header__qtI9P">
              <h2 className="MembershipFeatures_sectionTitle__Fl0ZE">
                <strong>Included</strong> with your membership
              </h2>
              <p className="MembershipFeatures_sectionSubtitle__BZf1i">
                Everything you need to track, understand, and optimize your
                health.
              </p>
            </div>
            <div className="MembershipFeatures_featuresGrid__j_9g9">
              <div className="MembershipFeatures_featureCard__k8HqI">
                <div className="MembershipFeatures_cardWrapper___DZ_9">
                  <div className="BiomarkerCard_biomarkerCards__Ekcsd ">
                    {[
                      "Testosterone (Total)",
                      "Estradiol (Sensitive)",
                      "FSH",
                      "Testosterone, Free (calc)",
                      "Luteinizing Hormone (LH)",
                      "Progesterone",
                      "Prolactin (PRL)",
                      "LDL Cholesterol",
                      "APOB",
                      "HDL Cholesterol",
                      "Triglycerides",
                      "% Hemoglobin A1C",
                      "Glucose",
                      "High-Sensitivity CRP",
                      "Lipoprotein (a)",
                      "25-(OH) Vitamin D",
                      "Free T3",
                      "Free T4",
                      "TPOAb",
                      "TSH",
                      "ApoB:ApoA1 Ratio",
                      "Triglycerides:HDL",
                      "eGFR",
                      "Creatinine",
                      "ALT",
                      "AST",
                      "Homocysteine (HCY)",
                      "Ferritin",
                      "Morning Cortisol",
                      "DHEA-S",
                      "SHBG",
                      "Albumin",
                      "Bilirubin",
                      "Blood Urea Nitrogen (BUN)",
                      "Cystatin C",
                      "VLDL Cholesterol",
                      "Total Cholesterol:HDL Ratio",
                      "Total Cholesterol",
                      "APOA1",
                    ].map((marker, i) => (
                      <div
                        key={i}
                        className="BiomarkerCard_biomarkerCard__F2GsF undefined"
                      >
                        <div className="BiomarkerCard_biomarkerInfo__JG8UU">
                          <span className="BiomarkerCard_biomarkerName__FmvwZ">
                            {marker}
                          </span>
                          <span className="BiomarkerCard_biomarkerDescription__r4tI3">
                            {marker.includes("Cholesterol") && "Cholesterol"}
                            {marker.includes("Testosterone") && "Hormone"}
                            {marker.includes("Thyroid") && "Thyroid"}
                            {marker.includes("Vitamin") && "Vitamin"}
                            {marker.includes("HDL") && "Cholesterol"}
                            {marker.includes("LDL") && "Cholesterol"}
                            {marker.includes("Triglyceride") &&
                              "Cardiometabolic health indicator"}
                            {marker.includes("A1C") && "Long-term blood sugar check"}
                            {marker.includes("CRP") && "Inflammation indicator"}
                            {marker.includes("eGFR") && "Kidney function indicator"}
                          </span>
                        </div>
                        <div className="BiomarkerCard_valueAndStatus__VrDyt">
                          <span className="BiomarkerCard_biomarkerValue__8Pv8E">
                            {marker.includes("Testosterone") && "550 ng/dL"}
                            {marker.includes("Estradiol") && "144.6 pg/mL"}
                            {marker.includes("FSH") && "17 mIU/mL"}
                            {marker.includes("LDL") && "102 mg/dL"}
                            {marker.includes("HDL") && "60 mg/dL"}
                            {marker.includes("Triglyceride") && "65 mg/dL"}
                            {marker.includes("A1C") && "5.1%"}
                            {marker.includes("Vitamin D") && "45.75 ng/mL"}
                            {marker.includes("CRP") && "1.5 mg/L"}
                            {marker.includes("TSH") && "1.92 uIU/mL"}
                            {marker.includes("T3") && "3.3 pg/mL"}
                            {marker.includes("T4") && "1.2 ng/dL"}
                            {marker.includes("ALT") && "37 U/L"}
                            {marker.includes("AST") && "44 U/L"}
                            {marker.includes("eGFR") && "105 mL/min/1.73 m2"}
                            {marker.includes("Creatinine") && "0.68 mg/dL"}
                            {marker.includes("Ferritin") && "55.3 ng/mL"}
                            {marker.includes("Cortisol") && "5.5 ug/dL"}
                            {marker.includes("DHEA-S") && "285 ug/dL"}
                            {marker.includes("SHBG") && "55 nmol/L"}
                            {marker.includes("Albumin") && "4.76 g/dL"}
                            {marker.includes("Bilirubin") && "0.7 mg/dL"}
                            {marker.includes("BUN") && "17.6 mg/dL"}
                            {marker.includes("Cystatin C") && "1 mg/L"}
                            {marker.includes("VLDL") && "13.06 mg/dL"}
                            {marker.includes("Total Cholesterol") && "175 mg/dL"}
                            {marker.includes("APOA1") && "142 mg/dL"}
                            {marker.includes("ApoB") && "126 mg/dL"}
                            {marker.includes("ApoB:ApoA1") && "0.88"}
                            {marker.includes("Homocysteine") && "11.06 umol/L"}
                            {marker.includes("Progesterone") && "2.1 ng/mL"}
                            {marker.includes("Prolactin") && "12.8 ng/mL"}
                            {marker.includes("LH") && "8.2 mIU/mL"}
                            {marker.includes("Glucose") && "76 mg/dL"}
                            {marker.includes("Lipoprotein") && "<5.44 mg/dL"}
                            {marker.includes("TPOAb") && "20 IU/mL"}
                            {marker.includes("Triglycerides:HDL") && "1.08"}
                            {marker.includes("Total Cholesterol:HDL Ratio") &&
                              "2.91"}
                          </span>
                          <span
                            className="BiomarkerCard_statusDot__jHwvo undefined"
                            style={{
                              backgroundColor:
                                i % 3 === 0
                                  ? "#22c55e"
                                  : i % 3 === 1
                                  ? "#1677ff"
                                  : "#f5222d",
                            }}
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="MembershipFeatures_featureHeading__tc_JG">
                  Comprehensive Biomarker Testing
                </h3>
                <p className="MembershipFeatures_featureTitle__UfLmj">
                  Test your biomarkers with comprehensive panels without leaving
                  home.
                </p>
              </div>

              <div className="MembershipFeatures_featureCard__k8HqI">
                <div className="MembershipFeatures_cardWrapper___DZ_9">
                  <div className="ChatInterfaceCard_chatInterface__q1hJ4 ">
                    <div className="ChatInterfaceCard_chatHeader__5Jujg">
                      <div className="ChatInterfaceCard_chatTitle__hqvZi">
                        Chat with Sai
                      </div>
                    </div>
                    <div
                      className="ChatInterfaceCard_chatMessages__guGqU"
                      data-lenis-prevent="true"
                    >
                      <div className="ChatInterfaceCard_message__bNnN0 ChatInterfaceCard_bot__NnV0E">
                        <div className="ChatInterfaceCard_messageAvatar__qMlZ6">
                          🤖
                        </div>
                        <div className="ChatInterfaceCard_messageBubble__kMvC5">
                          Hi John! I'm Sai, your AI health assistant. How can I
                          help you today?
                        </div>
                      </div>
                      <div className="ChatInterfaceCard_message__bNnN0 ChatInterfaceCard_user__Jd8n_">
                        <div className="ChatInterfaceCard_messageBubble__kMvC5">
                          My liver health improved 9%! What should I do next?
                        </div>
                      </div>
                      <div className="ChatInterfaceCard_message__bNnN0 ChatInterfaceCard_bot__NnV0E">
                        <div className="ChatInterfaceCard_messageAvatar__qMlZ6">
                          🤖
                        </div>
                        <div className="ChatInterfaceCard_messageBubble__kMvC5">
                          That's great progress! Based on your latest results, I
                          recommend focusing on your nutritional markers. Let's
                          look at your Vitamin D levels...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="MembershipFeatures_featureHeading__tc_JG">
                  24/7 Health Assistant
                </h3>
                <p className="MembershipFeatures_featureTitle__UfLmj">
                  Chat with Sai, about your results, health and longevity.
                </p>
              </div>

              <div className="MembershipFeatures_featureCard__k8HqI">
                <div className="MembershipFeatures_cardWrapper___DZ_9">
                  <div className="SupplementManifestoCard_supplementManifestoCard__YX_Ak ">
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollLeft__YU1ap">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "Lion's Mane",
                          "Berberine",
                          "NMN",
                          "Apigenin",
                          "Glycine",
                          "L-Citrulline",
                          "Beta-Alanine",
                          "Beetroot Extract",
                          "Grape Seed Extract",
                          "Phosphatidylserine",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              sup === "Glycine"
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollRight__RhoqQ">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "Iron",
                          "Calcium",
                          "Vitamin K2",
                          "Selenium",
                          "Folate",
                          "Vitamin D3",
                          "NAD+",
                          "Omega-3",
                          "Quercetin",
                          "Green Tea Extract",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              ["Vitamin K2", "Vitamin D3", "Omega-3"].includes(
                                sup
                              )
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollLeft__YU1ap">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "L-Theanine",
                          "Magnesium",
                          "Rhodiola",
                          "Ginseng",
                          "Biotin",
                          "Vitamin B12",
                          "Alpha Lipoic Acid",
                          "Glucosamine",
                          "Chondroitin",
                          "Probiotics",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              ["Magnesium", "Vitamin B12", "Probiotics"].includes(
                                sup
                              )
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollRight__RhoqQ">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "Zinc",
                          "MSM",
                          "Collagen",
                          "L-Glutamine",
                          "Creatine",
                          "BCAA",
                          "Vitamin C",
                          "L-Arginine",
                          "Taurine",
                          "Melatonin",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              ["Zinc", "Vitamin C"].includes(sup)
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollLeft__YU1ap">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "GABA",
                          "St. John's Wort",
                          "Valerian Root",
                          "CoQ10",
                          "Milk Thistle",
                          "Spirulina",
                          "Turmeric",
                          "Chlorella",
                          "Wheatgrass",
                          "Maca Root",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              ["CoQ10", "Turmeric"].includes(sup)
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollRight__RhoqQ">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "Ginkgo Biloba",
                          "Saw Palmetto",
                          "Black Cohosh",
                          "Evening Primrose",
                          "Garlic Extract",
                          "Ashwagandha",
                          "Echinacea",
                          "Vitamin E",
                          "Chromium",
                          "Resveratrol",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              sup === "Garlic Extract"
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="SupplementManifestoCard_supplementRow__4q24t SupplementManifestoCard_scrollLeft__YU1ap">
                      <div className="SupplementManifestoCard_supplementTrack___JvWZ">
                        {[
                          "Inositol",
                          "Bromelain",
                          "Astaxanthin",
                          "PQQ",
                          "Psyllium Husk",
                          "Boswellia",
                          "Bacopa Monnieri",
                          "Hawthorn Berry",
                          "Manganese",
                          "Copper",
                        ].map((sup, i) => (
                          <div
                            key={i}
                            className={`SupplementManifestoCard_supplementCard__ShY51 ${
                              sup === "Psyllium Husk"
                                ? "SupplementManifestoCard_highlighted__iWseH"
                                : ""
                            }`}
                          >
                            {sup}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="MembershipFeatures_featureHeading__tc_JG">
                  Supplement Optimization
                </h3>
                <p className="MembershipFeatures_featureTitle__UfLmj">
                  Maximize your healthspan with science-backed supplements.
                </p>
              </div>

              <div className="MembershipFeatures_featureCard__k8HqI">
                <div className="MembershipFeatures_cardWrapper___DZ_9">
                  <div className="WearableDeviceCard_wearableData__OsIZk ">
                    <div className="WearableDeviceCard_wearableItem__GqG_m">
                      <div className="WearableDeviceCard_deviceIcon__YM1Zw">
                        <img
                          src="/images/trysai/appleWatch.png"
                          alt="Apple Watch"
                        />
                      </div>
                      <div className="WearableDeviceCard_deviceName__V7Orm">
                        Apple Watch
                      </div>
                      <div className="WearableDeviceCard_deviceData__NsluY">
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Sleep:
                          </span>{" "}
                          7.2h
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            HRV:
                          </span>{" "}
                          45ms
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Resting HR:
                          </span>{" "}
                          62 bpm
                        </div>
                      </div>
                    </div>
                    <div className="WearableDeviceCard_wearableItem__GqG_m">
                      <div className="WearableDeviceCard_deviceIcon__YM1Zw">
                        <img
                          src="/images/trysai/ouraRing.png"
                          alt="Oura Ring"
                        />
                      </div>
                      <div className="WearableDeviceCard_deviceName__V7Orm">
                        Oura Ring
                      </div>
                      <div className="WearableDeviceCard_deviceData__NsluY">
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Sleep Score:
                          </span>{" "}
                          87
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Readiness:
                          </span>{" "}
                          92
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Body Temp:
                          </span>{" "}
                          +0.2°C
                        </div>
                      </div>
                    </div>
                    <div className="WearableDeviceCard_wearableItem__GqG_m">
                      <div className="WearableDeviceCard_deviceIcon__YM1Zw">
                        <img src="/images/trysai/fitbit.png" alt="Fitbit" />
                      </div>
                      <div className="WearableDeviceCard_deviceName__V7Orm">
                        Fitbit
                      </div>
                      <div className="WearableDeviceCard_deviceData__NsluY">
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Active Zone:
                          </span>{" "}
                          142 min
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Calories:
                          </span>{" "}
                          2,341
                        </div>
                        <div className="WearableDeviceCard_metric__OATWd">
                          <span className="WearableDeviceCard_metricLabel__FI8cj">
                            Sleep Score:
                          </span>{" "}
                          78
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="MembershipFeatures_featureHeading__tc_JG">
                  Wearable Sync
                </h3>
                <p className="MembershipFeatures_featureTitle__UfLmj">
                  Connect your wearables to track sleep, activity &amp; glucose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS CAROUSEL ===== */}
        <section
          className="ScrollTestimonials_scrollTestimonials__3Ml6a"
          data-nosnippet="true"
        >
          <div className="ScrollTestimonials_header__l_P0Z">
            <h3 className="ScrollTestimonials_title__tNIih">
              <span className="ScrollTestimonials_titleLine__qe6xG">
                Real users.
              </span>{" "}
              <strong className="ScrollTestimonials_titleLine__qe6xG">
                Real experiences.
              </strong>
            </h3>
            <p className="ScrollTestimonials_subtitle___7YrU">
              Join over 50,000 individuals who have taken control of their
              health through data-driven insights and actions.
            </p>
          </div>
          <div className="CustomCarousel_customCarouselWrapper__NUknk ScrollTestimonials_videoCarousel__oJv3Z">
            <div className="CustomCarousel_customCarouselContainer__Luovf">
              <div
                className="CustomCarousel_carouselTrack___aPQU"
                style={{
                  transition: "transform 300ms",
                  transform: "translateX(-3074.5px)",
                }}
              >
                {[
                  {
                    name: "Colin",
                    story: "SiPhox caught what no one saw",
                    image:
                      "https://cdn.sanity.io/images/q2ivj963/production/450ac31aaa927b7ee615220588a32f43a1254909-1080x1920.jpg?w=720&h=1280&fit=crop&auto=format",
                  },
                  {
                    name: "Chanda",
                    story: "A dangerous heart risk came to light",
                    image:
                      "https://cdn.sanity.io/images/q2ivj963/production/3709c5af766751921ed06a5ff3f516a28f969c11-1080x1920.jpg?w=720&h=1280&fit=crop&auto=format",
                  },
                  {
                    name: "Ben",
                    story: "Testing uncovered type 1 diabetes",
                    image:
                      "https://cdn.sanity.io/images/q2ivj963/production/6a91e845703dd137e44fefc45ada54c68c82b33e-1080x1920.jpg?w=720&h=1280&fit=crop&auto=format",
                  },
                  {
                    name: "Jonathan",
                    story: "A shockingly high bioage revealed the truth",
                    image:
                      "https://cdn.sanity.io/images/q2ivj963/production/6d9785e5a83a175f1430ba9eba8cdbb13abd6aaa-1080x1920.jpg?w=720&h=1280&fit=crop&auto=format",
                  },
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="CustomCarousel_carouselItem__J0HJG"
                    style={{ minWidth: "387px", maxWidth: "387px" }}
                  >
                    <article className="ScrollTestimonials_videoCard__Xck4v">
                      <div className="ScrollTestimonials_videoCardShell__xslT_">
                        <div className="ScrollTestimonials_videoMedia__uWDim">
                          <img
                            alt={testimonial.name}
                            loading="lazy"
                            decoding="async"
                            className="ScrollTestimonials_videoPoster__DlS1Q"
                            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            src={testimonial.image}
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                              objectFit: "cover",
                            }}
                          />
                          <div className="ScrollTestimonials_videoShade__C7JpL"></div>
                          <button
                            type="button"
                            className="ScrollTestimonials_videoPlayButton__04n7y"
                            aria-label={`Play ${testimonial.name}'s testimonial video`}
                            data-msai-text=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="ScrollTestimonials_videoPlayIcon__CWV_f"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="11"
                                fill="rgba(0,0,0,0.5)"
                                stroke="#fff"
                                stroke-width="2"
                              ></circle>
                              <path
                                fill="#fff"
                                d="m9 7.5 7.5 4.5L9 16.5z"
                              ></path>
                            </svg>
                          </button>
                          <div className="ScrollTestimonials_videoCopy__Q8Yu_">
                            <p className="ScrollTestimonials_videoHeadline__J1v8u">
                              {testimonial.name}'s Story
                            </p>
                            <p className="ScrollTestimonials_videoSupportingText__8jPOy">
                              {testimonial.story}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <div className="CustomCarousel_navigationDots__iWrkp">
              <button
                className="CustomCarousel_dot__94PZ9 CustomCarousel_activeDot__v9qs1"
                aria-label="Go to slide 1"
                type="button"
                data-msai-text=""
              ></button>
              <button
                className="CustomCarousel_dot__94PZ9"
                aria-label="Go to slide 2"
                type="button"
                data-msai-text=""
              ></button>
              <button
                className="CustomCarousel_dot__94PZ9"
                aria-label="Go to slide 3"
                type="button"
                data-msai-text=""
              ></button>
              <button
                className="CustomCarousel_dot__94PZ9"
                aria-label="Go to slide 4"
                type="button"
                data-msai-text=""
              ></button>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS STEPS ===== */}
        <section
          className="HowItWorksSteps_stepsSection__q__zM"
          data-nosnippet="true"
        >
          <div className="HowItWorksSteps_container__7osjb">
            <div className="HowItWorksSteps_headerSection__6ljQG">
              <h2 className="HowItWorksSteps_sectionTitle__SRMXW">How it works</h2>
              <p className="HowItWorksSteps_sectionSubtitle__wkVhG">
                From sample collection to a personalized action plan, everything
                happens at home.
              </p>
            </div>
            <div className="HowItWorksSteps_timelineWrapper__iABS_">
              <div className="HowItWorksSteps_timelineLine__7ZFYH"></div>
              <div
                data-step-index="0"
                className="HowItWorksSteps_timelineStep__bpzuc HowItWorksSteps_visible__v3hcf HowItWorksSteps_left__WpNXp HowItWorksSteps_firstStep__6d2Hs "
              >
                <div className="HowItWorksSteps_timelineDot__su0_g">
                  <div className="HowItWorksSteps_dayLabel__9sa_w">Today</div>
                </div>
                <div className="HowItWorksSteps_stepVisual__Bt6Gu">
                  <div className="HowItWorksSteps_membershipCardContainer__6nCyw">
                    <div className="MembershipCard3D_cardWrapper__V2JJv ">
                      <div className="MembershipCard3D_card___4aOC">
                        <div className="MembershipCard3D_cardContent__Xa2fN">
                          <div className="MembershipCard3D_textContent__kkeN9">
                            <div className="MembershipCard3D_brandName__BYV6r">
                              SiPho
                              <span className="MembershipCard3D_brandX__cpLl2">
                                <span className="MembershipCard3D_srOnly__ylO83">
                                  X
                                </span>
                                <span className="MembershipCard3D_brandXBar1__ZlUxq"></span>
                                <span className="MembershipCard3D_brandXBar2__zC4nP"></span>
                              </span>
                            </div>
                            <div className="MembershipCard3D_membershipLabel__J_4Ip">
                              membership
                            </div>
                          </div>
                          <div className="MembershipCard3D_xLogo__MpC0W">
                            <div className="MembershipCard3D_xBar1__tjLwN"></div>
                            <div className="MembershipCard3D_xBar2__jT5Z0"></div>
                          </div>
                        </div>
                        <div className="MembershipCard3D_shine__nP0A6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="HowItWorksSteps_stepInfo__6cV_2">
                  <h3 className="HowItWorksSteps_stepTitle__amNdQ">
                    <span className="HowItWorksSteps_stepNumber__JwJBX">1</span>
                    Become a member
                  </h3>
                  <p className="HowItWorksSteps_stepDescription__fDM95">
                    Join SiPhox Health for comprehensive at-home blood testing
                    with personalized insights, expert support, and the
                    flexibility to switch your health focus anytime. Test at
                    your pace - monthly, quarterly, or every 6 months.
                  </p>
                  <ul className="HowItWorksSteps_featuresList__9pNP7">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Unified health tracking
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      HSA/FSA eligible
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Cancel anytime
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-step-index="1"
                className="HowItWorksSteps_timelineStep__bpzuc HowItWorksSteps_visible__v3hcf HowItWorksSteps_left__WpNXp HowItWorksSteps_firstStep__6d2Hs "
              >
                <div className="HowItWorksSteps_timelineDot__su0_g">
                  <div className="HowItWorksSteps_dayLabel__9sa_w">
                    Today - After Join
                  </div>
                </div>
                <div className="HowItWorksSteps_stepVisual__Bt6Gu">
                  <div className="HowItWorksSteps_carouselContainer__RJQoc">
                    <div className="ProgramCarousel_carouselContainer__EW9uf ">
                      <div className="ProgramCarousel_carousel__ckZ6R">
                        <div className="ProgramCarousel_cardsStack__T1slE">
                          <div
                            className="ProgramCarousel_programCard__hRmw1  ProgramCarousel_active__Rr3HI undefined"
                            style={{
                              transform:
                                "translateX(calc(0% + 0px)) scale(1) rotateY(0deg)",
                              zIndex: 6,
                              opacity: 1,
                            }}
                          >
                            <div
                              className="ProgramCarousel_cardContent__D_ikd"
                              data-plan="Core"
                            >
                              <img
                                src="/images/new-landing/longevityEasyDraw.png"
                                alt="Longevity Essentials Kit"
                                className="ProgramCarousel_kitImage__7phei"
                              />
                              <div className="ProgramCarousel_cardHeader__4nfOh">
                                <h3 className="ProgramCarousel_programTitle__Qbtav">
                                  Longevity Essentials
                                </h3>
                                <div className="ProgramCarousel_programDescription__Gy49q">
                                  A balanced set of key biomarkers for optimizing
                                  health and longevity across cardiovascular,
                                  metabolic, hormonal, and nutritional systems.
                                </div>
                              </div>
                              <a
                                className="ProgramCarousel_exploreLink__etDNF ProgramCarousel_exploreLinkActive__E0VDf"
                                href="/pricing/core-program"
                                data-msai-text="Explore Panel"
                              >
                                Explore Panel
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="HowItWorksSteps_stepInfo__6cV_2">
                  <h3 className="HowItWorksSteps_stepTitle__amNdQ">
                    <span className="HowItWorksSteps_stepNumber__JwJBX">2</span>
                    Select your health focus
                  </h3>
                  <p className="HowItWorksSteps_stepDescription__fDM95">
                    From longevity essentials to targeted hormone, thyroid, or
                    heart &amp; metabolic optimization. Focus on what matters
                    most to you. Upgrade to Ultimate 360 to include up to 59
                    biomarkers.
                  </p>
                  <ul className="HowItWorksSteps_featuresList__9pNP7">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Ships within 3 days
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Pick any panel, switch anytime
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Test at your pace
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-step-index="2"
                className="HowItWorksSteps_timelineStep__bpzuc HowItWorksSteps_visible__v3hcf HowItWorksSteps_left__WpNXp  "
              >
                <div className="HowItWorksSteps_timelineDot__su0_g">
                  <div className="HowItWorksSteps_dayLabel__9sa_w">Day 5</div>
                </div>
                <div className="HowItWorksSteps_stepVisual__Bt6Gu">
                  <div
                    className="YoutubeEmbed_videoResponsive__oztoN YoutubeEmbed_noBorder__jbI6N"
                    style={{ aspectRatio: "11 / 7" }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/JQWB5ufVeIo?si=UgwMJqubsxWncbay&amp;modestbranding=1&amp;controls=0&amp;rel=0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Using SiPhox EasyDraw at home"
                      style={{ width: "100%", height: "100%" }}
                    ></iframe>
                  </div>
                </div>
                <div className="HowItWorksSteps_stepInfo__6cV_2">
                  <h3 className="HowItWorksSteps_stepTitle__amNdQ">
                    <span className="HowItWorksSteps_stepNumber__JwJBX">3</span>
                    Test at home, painlessly
                  </h3>
                  <p className="HowItWorksSteps_stepDescription__fDM95">
                    Use our EasyDraw kit to collect a small blood sample from
                    your upper arm. No needles, no pain, no lab visits. The
                    whole process takes 5 minutes. Includes 1:1 live support to
                    guide you through sample collection. Same-day pickup with
                    processing at a Certified CLIA lab.
                  </p>
                  <ul className="HowItWorksSteps_featuresList__9pNP7">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      No vein draws or fingerpricks
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Painless upper arm collection
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      5 minute at-home test
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-step-index="3"
                className="HowItWorksSteps_timelineStep__bpzuc HowItWorksSteps_visible__v3hcf HowItWorksSteps_left__WpNXp  "
              >
                <div className="HowItWorksSteps_timelineDot__su0_g">
                  <div className="HowItWorksSteps_dayLabel__9sa_w">Day 10</div>
                </div>
                <div className="HowItWorksSteps_stepVisual__Bt6Gu">
                  <img
                    src="/images/new-landing/portalDashboard.png"
                    alt="SiPhox Health dashboard with insights"
                    className="HowItWorksSteps_stepImage__trfqB"
                  />
                </div>
                <div className="HowItWorksSteps_stepInfo__6cV_2">
                  <h3 className="HowItWorksSteps_stepTitle__amNdQ">
                    <span className="HowItWorksSteps_stepNumber__JwJBX">4</span>
                    Get insights &amp; optimize
                  </h3>
                  <p className="HowItWorksSteps_stepDescription__fDM95">
                    Results in 7-10 days with detailed analysis, supplement
                    recommendations, and a personalized action plan. Track
                    changes over time and chat with Sai, our AI longevity
                    expert, about your health.
                  </p>
                  <ul className="HowItWorksSteps_featuresList__9pNP7">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Results in 7-10 days
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Personalized supplement &amp; lifestyle recommendations
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="HowItWorksSteps_checkmark__8vuY3"
                      >
                        <path
                          fill="currentColor"
                          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                        ></path>
                      </svg>
                      Chat with Sai AI about your results
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXCLUSIVE MEMBER DEALS ===== */}
        <section
          className="ExclusiveMemberDealsGrid_section___q_uq"
          data-nosnippet="true"
        >
          <div className="ExclusiveMemberDealsGrid_container__D6KLk">
            <div className="ExclusiveMemberDealsGrid_header__fhLdI">
              <h2 className="ExclusiveMemberDealsGrid_sectionTitle___DC2L">
                Enjoy <strong>exclusive</strong> member-only deals
              </h2>
              <p className="ExclusiveMemberDealsGrid_sectionSubtitle__Fherk">
                Get exclusive pricing on Prenuvo Whole Body MRI scans, 1:1
                health coaching sessions, and more — available only to SiPhox
                members.
              </p>
            </div>
            <div className="ExclusiveMemberDealsGrid_grid__vCdPv">
              <article className="ExclusiveMemberDealsGrid_deal__0gYL2">
                <div className="ExclusiveMemberDealsGrid_media__ZhP4n">
                  <img
                    src="https://cdn.sanity.io/images/q2ivj963/production/ec01491ed19a037801bab37d6d54600fb2b91e03-1254x1254.jpg?fit=max&amp;auto=format"
                    alt=""
                    className="ExclusiveMemberDealsGrid_mediaImage__69Gan"
                  />
                </div>
                <div className="ExclusiveMemberDealsGrid_content__UwKE0">
                  <h3 className="ExclusiveMemberDealsGrid_title__35_Un">
                    Prenuvo Whole Body MRI
                  </h3>
                  <p className="ExclusiveMemberDealsGrid_description__CHFKy">
                    See what blood tests alone can't show you. Through our
                    partnership with Prenuvo, get a full-body MRI scan at a
                    discounted price. No radiation, no contrast, under an hour.
                    Pair it with your SiPhox biomarker data for a truly
                    comprehensive view of your health.
                  </p>
                </div>
              </article>
              <article className="ExclusiveMemberDealsGrid_deal__0gYL2">
                <div className="ExclusiveMemberDealsGrid_media__ZhP4n">
                  <img
                    src="https://cdn.sanity.io/images/q2ivj963/production/74bb935a9351d381bd40bd89523704bfec825ad9-1200x1200.jpg?fit=max&amp;auto=format"
                    alt=""
                    className="ExclusiveMemberDealsGrid_mediaImage__69Gan"
                  />
                </div>
                <div className="ExclusiveMemberDealsGrid_content__UwKE0">
                  <h3 className="ExclusiveMemberDealsGrid_title__35_Un">
                    Expert Health Coaching
                  </h3>
                  <p className="ExclusiveMemberDealsGrid_description__CHFKy">
                    Get more from your results. A coaching credit gives you
                    access to expert, personalized guidance on diet,
                    supplements, exercise, and lifestyle. Choose a live 30-minute
                    video call or an expert written plan, whatever fits your
                    schedule.
                  </p>
                </div>
              </article>
              <article className="ExclusiveMemberDealsGrid_deal__0gYL2">
                <div className="ExclusiveMemberDealsGrid_media__ZhP4n">
                  <img
                    src="https://cdn.sanity.io/images/q2ivj963/production/042c6fa18f8ef6bd0d951d9e772b570bbd52d0e4-1350x941.png?fit=max&amp;auto=format"
                    alt=""
                    className="ExclusiveMemberDealsGrid_mediaImage__69Gan"
                  />
                </div>
                <div className="ExclusiveMemberDealsGrid_content__UwKE0">
                  <h3 className="ExclusiveMemberDealsGrid_title__35_Un">
                    Advanced Gut Health Test
                  </h3>
                  <p className="ExclusiveMemberDealsGrid_description__CHFKy">
                    An at-home, mess-free gut microbiome test using deep-shotgun
                    metagenomics for strain-level precision. Tracks bacteria,
                    Candida, parasites, and inflammation markers, then delivers
                    a personalized health report with dietary and lifestyle
                    recommendations.
                  </p>
                </div>
              </article>
              <article className="ExclusiveMemberDealsGrid_deal__0gYL2">
                <div className="ExclusiveMemberDealsGrid_media__ZhP4n">
                  <img
                    src="https://cdn.sanity.io/images/q2ivj963/production/862221d28cef999e02ce5bda9978786ad4afe1de-2036x2036.jpg?fit=max&amp;auto=format"
                    alt=""
                    className="ExclusiveMemberDealsGrid_mediaImage__69Gan"
                  />
                </div>
                <div className="ExclusiveMemberDealsGrid_content__UwKE0">
                  <h3 className="ExclusiveMemberDealsGrid_title__35_Un">
                    295 Food &amp; Environmental Allergy Panel
                  </h3>
                  <p className="ExclusiveMemberDealsGrid_description__CHFKy">
                    Sneezing, bloating, skin flare-ups, or fatigue? It could be
                    something you're eating, breathing, or living with. This
                    panel tests for 295 allergens across food and environmental
                    categories, plus your Total IgE level, to give you a
                    complete picture of what your body is reacting to.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <div
          className="SectionCTA_sectionCta__CmIj3 "
          data-nosnippet="true"
        >
          <a href="/join" data-msai-text="Become a Member">
            Become a Member
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 18 6-6-6-6"
              ></path>
            </svg>
          </a>
        </div>

        {/* ===== FAQ SECTION ===== */}
        <section
          className="FaqSection_faqSection__ZHqZq FaqSection_singleColumn__x5M5_ FaqSection_compact__nNZMy FaqSection_hasSidebar__0zDzD"
          data-nosnippet="true"
        >
          <div id="faq"></div>
          <div className="FaqSection_headerContainer__VZi1u">
            <div className="FaqSection_headerRow__lCE7w">
              <h3 data-speakable="true">Frequently asked questions</h3>
              <a
                className="FaqSection_readMoreLink__94lUS"
                href="/faq"
                data-msai-text="View all"
              >
                View all
              </a>
            </div>
          </div>
          <div className="FaqSection_container__BoHp4">
            <div className="FaqSection_column__clGPS">
              {[
                "What's included in my membership?",
                "How often does my membership renew?",
                "Which biomarkers do you test?",
                "What's the testing process?",
                "Is the SiPhox at-home test kit equivalent to standard labs?",
                "Will shipping affect my blood sample?",
                "When will my results be ready?",
                "Can I pay using HSA/FSA?",
                "Can I modify, pause, or cancel my subscription?",
              ].map((question, index) => (
                <div
                  key={index}
                  id={`faq-${question.toLowerCase().replace(/\s+/g, "-")}`}
                  className="FaqSection_faqCard__mX2W1 FaqSection_faqItem__ytuRY"
                  itemScope=""
                  itemType="https://schema.org/Question"
                >
                  <div className="ant-collapse ant-collapse-icon-position-end FaqCard_card__imIEt FaqCard_compact__neneG">
                    <div className="ant-collapse-item">
                      <div
                        className="ant-collapse-header"
                        aria-expanded={faqOpen === index}
                        aria-disabled="false"
                        role="button"
                        tabIndex="0"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="ant-collapse-expand-icon">
                          <div className="FaqCard_icon__Htyg0 ant-collapse-arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 56 56"
                            >
                              <path
                                fill="url(#siphox-logo-small_svg__a)"
                                d="M52.937 52.88a7.183 7.183 0 0 1-10.157 0L2.16 12.258A7.18 7.18 0 1 1 12.314 2.103l40.622 40.621a7.184 7.184 0 0 1 0 10.156"
                              ></path>
                              <path
                                fill="url(#siphox-logo-small_svg__b)"
                                d="M2.103 53.02a7.18 7.18 0 0 1 0-10.155L42.725 2.243a7.18 7.18 0 0 1 10.155 0 7.18 7.18 0 0 1 0 10.156l-40.622 40.62a7.18 7.18 0 0 1-10.155 0"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="siphox-logo-small_svg__a"
                                  x1="27.6"
                                  x2="27.6"
                                  y1="46.933"
                                  y2="8.156"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#F1D537"></stop>
                                  <stop
                                    offset="1"
                                    stop-color="#F66B37"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="siphox-logo-small_svg__b"
                                  x1="8.874"
                                  x2="33.648"
                                  y1="36.094"
                                  y2="11.32"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0.089" stop-color="#079E8E"></stop>
                                  <stop
                                    offset="0.693"
                                    stop-color="#4AC6C1"
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <span className="ant-collapse-header-text">
                          <h4
                            className="FaqCard_title__pbJEm"
                            itemProp="name"
                            data-speakable="true"
                          >
                            {question}
                          </h4>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRIVACY SECTION ===== */}
        <section
          className="PrivacySection_privacySection__dVV8p"
          id="privacy"
          data-nosnippet="true"
        >
          <div className="PrivacySection_container__Wxa53">
            <div className="PrivacySection_header__Dng2P">
              <h3>Your privacy first. Always.</h3>
            </div>
            <div className="PrivacySection_cards__TwyMs">
              <div className="PrivacySection_card__2bhUe">
                <div>
                  <img
                    alt="Enterprise-grade security"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    src="https://cdn.sanity.io/images/q2ivj963/production/db7f7cc48f241abdacfbf385a38717fb71459e1a-64x76.svg?fit=max&amp;auto=format"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="PrivacySection_content__x4OEC">
                  <h4>Enterprise-grade security</h4>
                  <p>
                    Our servers meet or exceed all applicable data protection
                    and privacy requirements. Your sensitive information is
                    safeguarded by state-of-the-art security measures.
                  </p>
                </div>
              </div>
              <div className="PrivacySection_card__2bhUe">
                <div>
                  <img
                    alt="Zero Personal Data Selling Policy"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    src="https://cdn.sanity.io/images/q2ivj963/production/3d353668b15c6632cdf66aa86f007f322a3f6a9a-68x68.svg?fit=max&amp;auto=format"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="PrivacySection_content__x4OEC">
                  <h4>Zero Personal Data Selling Policy</h4>
                  <p>
                    We have a strict no-sell policy for your personal
                    information. Your data remains yours, period.
                  </p>
                </div>
              </div>
              <div className="PrivacySection_card__2bhUe">
                <div>
                  <img
                    alt="Complete Data Control"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    src="https://cdn.sanity.io/images/q2ivj963/production/0141d356971bb666d7cadf0d3eb87cdf97683e9f-80x81.svg?fit=max&amp;auto=format"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="PrivacySection_content__x4OEC">
                  <h4>Complete Data Control</h4>
                  <p>
                    Delete your personal information from our servers at any
                    time. We respect your right to data ownership and provide
                    easy-to-use tools for data management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BIOMARKER LIST ===== */}
        <section
          className="SimpleBiomarkerList_simpleBiomarkerSection__T0vM2"
          data-nosnippet="true"
        >
          <div className="SimpleBiomarkerList_container__M64lF">
            <div className="SimpleBiomarkerList_header__6Lij1">
              <h3>What we measure</h3>
              <p>Up to 62 biomarkers across 9 health categories.</p>
            </div>
            <div className="SimpleBiomarkerList_content__I3USY">
              <div className="SimpleBiomarkerList_categoriesColumn__5ISlq">
                {[
                  "Heart Health",
                  "Hormonal Health",
                  "Inflammation",
                  "Kidney Health",
                  "Liver Health",
                  "Metabolic Health",
                  "Nutritional",
                  "Prostate Health",
                  "Thyroid Health",
                ].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`SimpleBiomarkerList_categoryItem__b_okI ${
                      category === "Heart Health"
                        ? "SimpleBiomarkerList_selected__ZA2Ru"
                        : ""
                    }`}
                    data-msai-text={category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="SimpleBiomarkerList_biomarkersColumn__XRUEM">
                {[
                  "HDL Cholesterol",
                  "Triglycerides",
                  "Apolipoprotein B (APOB)",
                  "Cholesterol, Total",
                  "VLDL Cholesterol",
                  "Total Cholesterol:HDL Ratio",
                  "Apolipoprotein A1 (APOA1)",
                  "VLDL Cholesterol (Calc)",
                  "LDL-C:HDL-C Ratio",
                  "LDL-C:ApoB Ratio",
                  "ApoB:ApoA1 Ratio",
                  "Calculated LDL-Cholesterol",
                  "Lipoprotein (a)",
                ].map((marker) => (
                  <div
                    key={marker}
                    className="SimpleBiomarkerList_biomarkerItem__0Vw21"
                  >
                    <span className="SimpleBiomarkerList_biomarkerName__ZDuH_">
                      {marker}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .ScrollingRow_scrollLeft__7xbv_ {
          animation: scroll-left 30s linear infinite !important;
        }
        .ScrollingRow_scrollRight__0cy2B {
          animation: scroll-right 30s linear infinite !important;
        }
        .SupplementManifestoCard_scrollLeft__YU1ap .SupplementManifestoCard_supplementTrack___JvWZ {
          animation: scroll-left 20s linear infinite !important;
        }
        .SupplementManifestoCard_scrollRight__RhoqQ .SupplementManifestoCard_supplementTrack___JvWZ {
          animation: scroll-right 20s linear infinite !important;
        }
        .PortalHomeShowcase_barFill__VWAwI {
          --fill: 80;
        }
        .ScoreRing_ring___zTP3 {
          --ring-pct: 80;
        }
        .ScoreRing_ring___zTP3::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(
            #0066FF calc(var(--ring-pct) * 1%),
            rgba(255, 255, 255, 0.1) calc(var(--ring-pct) * 1%)
          );
        }
      `}</style>
    </div>
  );
}