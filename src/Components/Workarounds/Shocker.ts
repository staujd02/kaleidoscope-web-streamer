class Shocker {
    shocker(shock: boolean, value: any) {
        let property = shock ? 'value' : 'defaultValue'
        return {
            [property]: value
        }
    }
}


export default new Shocker();
