const defaultPostsLoad = async () => {
    const responce = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await responce.json();
    const posts = data.posts
    // console.log(posts)
    defaultPosts(posts)
}

const defaultPosts = (posts) => {
    const cardsContainer = document.getElementById("cards-container")

    posts.forEach(post => { 
        console.log(post)

        const card = document.createElement('div')
        card.id = post.id
        card.innerHTML = `
        
        `
    
        // cardsContainer.appendChild(card)
    })

}

defaultPostsLoad()