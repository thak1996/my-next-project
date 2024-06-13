// crie o arquivo src/@types/react-slick.d.ts
declare module 'react-slick' {
    import * as React from 'react';

    interface SliderProps {
        className?: string;
        adaptiveHeight?: boolean;
        arrows?: boolean;
        autoplay?: boolean;
        autoplaySpeed?: number;
        centerMode?: boolean;
        centerPadding?: string;
        cssEase?: string;
        dots?: boolean;
        dotsClass?: string;
        draggable?: boolean;
        easing?: string;
        fade?: boolean;
        infinite?: boolean;
        initialSlide?: number;
        lazyLoad?: 'ondemand' | 'progressive';
        pauseOnHover?: boolean;
        responsive?: Array<{ breakpoint: number; settings: SliderProps }>;
        rtl?: boolean;
        slide?: string;
        slidesToShow?: number;
        slidesToScroll?: number;
        speed?: number;
        swipe?: boolean;
        swipeToSlide?: boolean;
        touchMove?: boolean;
        touchThreshold?: number;
        variableWidth?: boolean;
        vertical?: boolean;
        beforeChange?: (currentSlide: number, nextSlide: number) => void;
        afterChange?: (currentSlide: number) => void;
        slickGoTo?: number;
    }

    export default class Slider extends React.Component<SliderProps> {}
}
