let button = document.querySelector('#button')
        let adviceTxt = document.querySelector('#adviceTxt')
        let advideNo = document.querySelector('#advideNo')



        button.addEventListener('click',()=>{
            let url = 'https://api.adviceslip.com/advice'
            fetch(url)
            .then((res)=>{
                 if(res.ok){
                    return res.json()
                 }else{
                      console.log(error)
                 }
            })
            .then((data)=>{
                advideNo.innerHTML = `Advice # ${data.slip.id}`
                adviceTxt.innerHTML = `&#8220${data.slip.advice}&#8221`
                console.log(data.slip.advice)
            })
        })