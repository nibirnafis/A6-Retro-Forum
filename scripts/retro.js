// --------------------On Load-------------------------

const defaultPostsLoad = async () => {
    const responce = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await responce.json();
    const posts = data.posts
    defaultPosts(posts)
}

const defaultPosts = (posts) => {
    const cardsContainer = document.getElementById("cards-container")

    posts.forEach(post => {
        const card = document.createElement('div')
        card.id = post.id
        card.classList.add('flex', 'bg-[#F3F3F5]', 'p-[40px]', 'mb-[24px]', 'rounded-[16px]')
        card.innerHTML = `
            <div class="w-[72px] h-[72px] mr-[24px] relative">
                <div class="w-[18px] h-[18px] bg-green-500 absolute border-2 border-white rounded-[9px] top-[-5px] right-[-5px]"></div>
                <img class="rounded-[16px]" src="${post.image}" alt="">
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex font-inter font-medium text-[14px]">
                    <p class="mr-[20px]"># Music</p>
                    <p>Author : ${post.author}</p>
                </div>
                <p class="font-mulish font-bold text-[20px]">${post.title}</p>
                <p class="font-inter font-normal text-[16px]">${post.description}</p>
                <div class="border-t-2 border-dashed"></div>
                <div class="flex justify-between">
                    <div class="flex">
                        <img src="Assets/msg_icon.png" alt="">
                        <p class="mx-[25px]">560</p>
                        <img src="Assets/eye_icon.png" alt="">
                        <p class="mx-[25px]">1,568</p>
                        <img src="Assets/clock_icon.png" alt="">
                        <p class="mx-[25px]">5 min</p>
                    </div>
                    <div onclick="markedAsRead()">
                        <img src="Assets/marked-read-icon.png" alt="">
                    </div>
                </div>
            </div>   
        `
        cardsContainer.appendChild(card)
    })
}

defaultPostsLoad()



// ---------------------On Typed----------------------

const searchPost = () => {
    const cardsContainer = document.getElementById("cards-container")
    cardsContainer.innerHTML = ''
    const typed = document.getElementById('inputValue').value
    loadSearched(typed)
}

const loadSearched = async (typed) => {
    const responce = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${typed}`)
    const data = await responce.json()
    const searchedPosts = data.posts
    defaultPosts(searchedPosts)
}


// -----------------marked as read-------------------

const markedAsRead = (event) => {
    

    const markedReadContainer = document.getElementById('marked-read-container')

    const card = document.createElement('div')
    card.classList.add('flex', 'justify-between', 'items-center', 'p-[16px]', 'bg-white', 'rounded-[16px]', 'mb-[16px]')
    card.innerHTML = `
        <p class="font-mulish font-semibold text-[16px]">10 Kids Unaware of Their Halloween Costume</p>
        <div class="flex justify-center items-center">
            <img src="Assets/eye_icon.png" alt="">
            <p class="font-inter font-normal text-[16px]">1,568</p>
        </div>
    `
    markedReadContainer.appendChild(card)
}