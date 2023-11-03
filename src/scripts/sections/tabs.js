document.addEventListener('DOMContentLoaded', function () {
    const tabSelects = document.querySelectorAll('.tabs__select')
    const tabContents = document.querySelectorAll('.tabs__content .tab-pane')

    tabSelects.forEach(function (select) {
        select.addEventListener('change', function () {
            const sectionId = select.getAttribute('data-tabs-section')
            const selectedTabId = 'tab-' + sectionId + '-' + select.value

            tabContents.forEach(function (content) {
                content.classList.remove('show', 'active')
            })

            const tabContent = document.querySelector('#' + selectedTabId)
            tabContent.classList.add('show', 'active')
        })
    })
})
