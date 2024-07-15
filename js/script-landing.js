const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'))
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle('active')
  }
  item.addEventListener('click', onClick)
}

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector('#cs-expanded')
  const csExpanded = csUL.getAttribute('aria-expanded')

  if (csExpanded === 'false') {
    csUL.setAttribute('aria-expanded', 'true')
  } else {
    csUL.setAttribute('aria-expanded', 'false')
  }
}

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        window.open('/thank-you.html', '_blank')
      } else {
        throw new Error('Form submission failed')
      }
    })
    .catch((error) => alert(error))
}

document.querySelector('form').addEventListener('submit', handleSubmit)

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear()
// Go back to previous page
document.addEventListener('DOMContentLoaded', (event) => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('clearForm') === 'true') {
    // Assuming you have a form with an id of 'contactForm'
    document.getElementById('cs-form-1105').reset()
  }
})
