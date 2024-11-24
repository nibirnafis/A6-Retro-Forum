// --------------------On Load-------------------------


const defaultPostsLoad = async () => {
    const responce = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await responce.json();
    const posts = data.posts
    loadPosts(posts)
}

const loadPosts = (posts) => {
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
                    <p class="mr-[20px]"># ${post.category}</p>
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
                    <button>
                        <img src="Assets/marked-read-icon.png" alt="">
                    </button>
                </div>
            </div>   
        `
        cardsContainer.appendChild(card)
        // markedAsRead(card)
        markedAsRead(card, post)
    })
}

defaultPostsLoad()



// ---------------------On searched----------------------


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
    loadPosts(searchedPosts)
}


// -----------------marked as read-------------------

const markedAsRead = (card, post) => {
    document.getElementById(card.id).addEventListener('click', function(){
        // console.log()
        const markedReadContainer = document.getElementById('marked-read-container')

        const markedReadCard = document.createElement('div')
        markedReadCard.classList.add('flex', 'justify-between', 'items-center', 'p-[16px]', 'bg-white', 'rounded-[16px]', 'mb-[16px]', 'w-[374px]')
        markedReadCard.innerHTML = `
            <p class="font-mulish font-semibold text-[16px]">${post.description}</p>
            <div class="flex justify-center items-center">
                <img src="Assets/eye_icon.png" alt="">
                <p class="font-inter font-normal text-[16px]">1,568</p>
            </div>
        `
        markedReadContainer.appendChild(markedReadCard)

        markReadCounter()
    })
}


const markReadCounter = () =>{
    const counter = document.getElementById('counter')
    const counterText = document.getElementById('counter').innerText
    let count = parseInt(counterText)
    count = count + 1

    counter.innerText = count
    console.log(counter)
}


// --------------------Latest Post---------------------

const latestPosts = async () => {
    const responce = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const posts = await responce.json()
    // console.log(posts)
    displayPosts(posts)
}

const displayPosts = (posts) => {
    const latestPosts = document.getElementById('latest-posts-container')

    posts.forEach(post => {
        const latestPostCard = document.createElement('div')
        latestPostCard.classList.add('w-[350px]', 'p-[24px]', 'border-[1px]', 'rounded-[24px]')
        latestPostCard.innerHTML = `
            <div class="mb-[24px]">
                <img class="w-[326px] h-[190px] rounded-[20px]" src="${post.cover_image}" alt="">
            </div>
            <div class="flex mb-[12px]">
                <div>
                    <img src="Assets/calender_icon.png" alt="">
                </div>
                <p class="font-mulish font-normal text-[16px]">29 January 2024</p>
            </div>
            <p class="font-mulish font-extrabold text-[18px] mb-[12px]">${post.title}</p>
            <p class="font-mulish font-normal text-[16px] mb-[16px]">${post.description}</p>
            <div class="flex">
                <div class="mr-[16px]">
                    <img  class="w-[44px] h-[44px] rounded-[22px]" src="${post.profile_image}" alt="">
                </div>
                <div>
                    <p class="font-mulish font-bold text-[16px]">${post.author.name}</p>
                    <p class="font-mulish font-normal text-[14px]">${post.author.posted_date}</p>
                </div>
            </div>
        `
        latestPosts.appendChild(latestPostCard)
    })
}

latestPosts()