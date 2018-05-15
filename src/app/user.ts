export class User {
    constructor(
        public authInfo: Object,
        public name: string,
        public email: string = '',
        public colorTheme: string = '',
        public CTAbuttonsOn: boolean = true,
        public dashboardView: string = 'list'
    ) { }
}