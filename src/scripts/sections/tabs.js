document.addEventListener('DOMContentLoaded', function () {
    const dropdownContainers = document.querySelectorAll('.tabs__dropdown')

    dropdownContainers.forEach(function (container) {
        const dropdownButtons = container.querySelectorAll('[data-toggle="custom-tab"]')
        const dropdownToggle = container.querySelector('.btn.dropdown-toggle')
        const tabContent = container.parentElement.querySelector('.tab-content')

        // Set the initial content of the dropdown button to match the first tab item
        const firstDropdownButton = dropdownButtons[0]
        dropdownToggle.innerText = firstDropdownButton.innerText

        dropdownButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const targetId = button.getAttribute('data-target')
                const selectedOptionText = button.innerText

                // Update the dropdown-toggle button text
                dropdownToggle.innerText = selectedOptionText

                // Show the selected tab pane and hide others
                const tabPanes = tabContent.querySelectorAll('.tab-pane')
                tabPanes.forEach(function (pane) {
                    if (pane.id === targetId.substring(1)) {
                        pane.classList.add('show', 'active')
                    } else {
                        pane.classList.remove('show', 'active')
                    }
                })
            })
        })
    })
})
