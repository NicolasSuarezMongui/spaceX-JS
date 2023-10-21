
const aStyles = ['flex-row','justify-center','text-white','cursor-pointer','hover:bg-slate-700','focus:ring-4','focus:outline-none','focus:ring-[#1da1f2]/50','font-medium','rounded-lg','px-5','py-2.5','text-center','inline-flex','items-center','dark:focus:ring-[#1da1f2]/55','mr-2','mb-2','hover:shadow-lg','transition-all','duration-200','ease-in-out','hover:scale-110','scale-90','gap-x-2','opcaity-70','hover:opcaity-100']

const aElements = document.querySelectorAll('a')

aElements.forEach((element)=>{
    element.classList.add(...aStyles)
})