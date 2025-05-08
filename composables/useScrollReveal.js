export const useScrollReveal = () => {
  const revealElements = ref([])

  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    revealElements.value.forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    observeElements()
  })

  return {
    revealElements
  }
} 