const searchButton = document.querySelector('#search-button')

export default class Controller {

    constructor(model, view) {
        this.model = model 
        this.view = view
        console.log('controller created')
        searchButton.addEventListener('click', () => {this.search()})
    }
    async search() {
        console.log('user clicked search')
        // getUserName
        const username = 'CarolineKj'
        const githubUser = await this.model.getGithubUser(username)
        this.view.showUser(githubUser)
    }
}