declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpeg';


declare module 'shop/Router' {
    import { RouteObject } from 'react-router-dom';
    interface IShopService {
        default: RouteObject[];
    }

    const shopService: IShopService;
    export default shopService;
}


declare const __PLATFORM__: 'mobile' | 'desktop';
