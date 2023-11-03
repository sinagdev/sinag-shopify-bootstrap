document.addEventListener('DOMContentLoaded', function () {
    const tabSelects = document.querySelectorAll('.tabs__select')
    const tabContents = document.querySelectorAll('.tabs__content .tab-pane')
    console.log(tabSelects) // Check if tabSelects is populated

    tabSelects.forEach(function (select) {
        select.addEventListener('change', function () {
            console.log('Select change event triggered')
            const sectionId = select.getAttribute('data-tabs-section')
            const selectedOption = select.options[select.selectedIndex]
            const selectedTabId = 'tab-' + sectionId + '-' + selectedOption.value

            tabContents.forEach(function (content) {
                content.classList.remove('show', 'active')
            })

            const tabContent = document.querySelector('#' + selectedTabId)
            if (tabContent) {
                tabContent.classList.add('show', 'active')
            }
        })
    })
})
