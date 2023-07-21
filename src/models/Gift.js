export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url || 'https://media.giphy.com/media/6a67zVJ0wMMOzg3YKA/giphy.gif'
    this.opened = data.opened || false
    this.creatorId = data.creatorId
  }
}




