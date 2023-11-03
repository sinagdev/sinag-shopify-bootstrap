document.addEventListener('DOMContentLoaded', function () {
    const tabSelects = document.querySelectorAll('.tabs__select')
    const tabContents = document.querySelectorAll('.tabs__content')

    tabSelects.forEach(function (select) {
        select.addEventListener('change', function () {
            const selectedTabId = select.value
            const tabContent = document.querySelector(selectedTabId)

            tabContents.forEach(function (content) {
                content.classList.remove('show', 'active')
            })

            tabContent.classList.add('show', 'active')
        })
    })
})
