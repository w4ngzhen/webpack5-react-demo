declare module '*.module.less' {
    const content: {
        [className: string]: any
    }
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.svg?abc' {
    const content: string;
    export default content;
}