document.addEventListener('DOMContentLoaded', function () {
    const dropdownContainers = document.querySelectorAll('.tabs__dropdown')

    dropdownContainers.forEach(function (container) {
        const dropdownButtons = container.querySelectorAll('[data-toggle="custom-tab"]')
        const dropdownToggle = container.querySelector('.btn.dropdown-toggle')
        const tabPanes = container.parentElement.querySelectorAll('.tab-pane')

        // Set the initial content of the dropdown button to match the first tab
        const firstDropdownButton = dropdownButtons[0]
        dropdownToggle.innerText = firstDropdownButton.innerText

        dropdownButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const targetId = button.getAttribute('data-target')
                const selectedOptionText = button.innerText

                // Update the dropdown-toggle button text
                dropdownToggle.innerText = selectedOptionText

                // Hide all tab panes
                tabPanes.forEach(function (pane) {
                    pane.classList.remove('show', 'active')
                })

                // Show the selected tab pane
                const selectedTabContent = document.querySelector(targetId)
                selectedTabContent.classList.add('show', 'active')
            })
        })
    })
})
