let bars = document.querySelectorAll(".progress_bar")
bars.forEach((bar)=>{
   let percent = bar.dataset.percent

   let tooltip = bar.children[0]
   tooltip.innerText = percent + "%"
   bar.style.width = percent + "%"

})


let counters = document.querySelectorAll(".counter")

let runCounter = ()=>{
    counters.forEach((counter)=>{
        counter.innerText = 0

        let target = +counter.dataset.count
        let step = target/100

        let countIt = ()=>{
            let displayedCount = +counter.innerText

            if(displayedCount <= target){
                counter.innerText = Math.ceil(displayedCount + step)
                // console.log(displayedCount)
                setTimeout(countIt, 1)
            }
            else{
                counter.innerText = target
            }
        }
        countIt()
    })
}

// runCounter()

const counterSection = document.querySelector(".counter_wrapper")

let done = 0

const sectionObserver = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting && done != 1){
        runCounter()
        done = 1
    }
}, {
    rootMargin : "0px 0px -100px 0px"
})

sectionObserver.observe(counterSection)

$(document).ready(()=>{
    $("slider").slick({

    })
})
      