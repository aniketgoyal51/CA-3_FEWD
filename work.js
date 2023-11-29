const slogan=document.getElementsByClassName('slogan')[0]
let slogans=['Planning meals for your wellbeing','Plan your meals anytime and anywhere','The meal planner that rocks','The meal planner that cares','Get your diet organized','The ultimate gift for your health']
slogan.innerText=slogans[parseInt(Math.random(Math.random)*slogans.length)]

const randommeal=document.getElementsByClassName('random-meal')[0]
const ingredetail=document.getElementById("ingre")

function getData(){
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        // console.log(res.data)
        const imagerandom=document.createElement('img')
        imagerandom.setAttribute('src',res.data.meals[0].strMealThumb);
        imagerandom.setAttribute('height','200px')
        randommeal.append(imagerandom)

        
        const namerandom=document.createElement('h2')
        namerandom.innerText=res.data.meals[0].strMeal;
        randommeal.append(namerandom)

        const imgname=document.createElement('div')
        
        const imageingre=document.createElement('img')
        imageingre.setAttribute('src',res.data.meals[0].strMealThumb);
        imageingre.setAttribute('height','200px')
        const nameingre=document.createElement('h2')
        nameingre.innerText=res.data.meals[0].strMeal;
        
        imgname.append(imageingre)
        imgname.append(nameingre)
        
        const ingredientpera=document.createElement('div')

        const i= document.createElement('h3')
        i.append('Ingredients')
        ingredientpera.append(i)

        const ingredients=document.createElement('ul')

        for (let i=0;i<20;i++){
            let ingredient = res.data.meals[0]['strIngredient' + i];
            if (ingredient) {
                let li =document.createElement('li') 
                li.append(ingredient)
                ingredients.append(li);
        }
        ingredetail.append(imgname)
        ingredientpera.append(ingredients)
        imgname.append(ingredientpera)
        } 


})}
getData()

const searchbar=document.getElementsByClassName('search-bar')[0]
const search=document.getElementsByClassName('search')[0]
const headofsearch=document.getElementsByClassName('head-of-search')[0]
const bodyofsearch=document.getElementsByClassName('body-of-search')[0]

search.onclick=click;
function click(){
    headofsearch.innerText=`list of searched category : ${searchbar.value}`;
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchbar.value}`).then((res)=>{
        // console.log(res.data)
        const result=res.data.meals
        bodyofsearch.innerHTML=''
        result.forEach((user)=>{
            const box=document.createElement('div')
            const imagerandom=document.createElement('img')
            imagerandom.setAttribute('src',user.strMealThumb);
            imagerandom.setAttribute('height','200px')
            box.append(imagerandom)

            const namerandom=document.createElement('h2')
            namerandom.innerText=user.strMeal;
            box.append(namerandom)

            bodyofsearch.append(box)
        })
    
        })  
    }