//1.ecma Number Data RegExp Error XMLHttprequest
let num: Number = new Number(1);
let date: Date = new Date();
let reg: RegExp = new RegExp(/\w/);
let err: Error = new Error('get Wrong !');
let xhr: XMLHttpRequest = new XMLHttpRequest();
let div: HTMLDivElement | null = document.querySelector('div');
let divList: NodeList = document.querySelectorAll('div');
let stor: Storage = localStorage;
let local: Location = location;
let cookie: string = document.cookie;
let promise: Promise<number> = new Promise(resolve => {
    resolve(123)
})
