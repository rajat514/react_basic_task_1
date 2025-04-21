const initialData = [
    { name: 'Onboarding call', value: {} },
    { name: 'Google Search Console Access', value: {} },
    { name: 'Google Analytics Access', value: {} },
    { name: 'Website Access', value: {} },
    { name: 'Technical Audit', value: {} },
    { name: 'Anchor text and Semantic Access', value: {} },
    { name: 'Compititor Analytics', value: {} },
    { name: 'Anchor Text / URL Mapping', value: {} },
    { name: 'Google Data Studio Report + Local Reporting Suite', value: {} },
    { name: 'Site Level Optimization', value: {} },
    { name: 'On Page Optimization', value: {} },
    { name: 'Content Creation', value: {} },
    { name: 'Content Publishing', value: {} },
    { name: 'Premium Press Release', value: {} },
    { name: 'Authority Niche Placements', value: {} },
    { name: 'Review Management', value: {} },
    { name: 'Index Links', value: {} },
    { name: 'Video Recap', value: {} }
];

const myFunction = () => {
    const [data, setData] = React.useState(initialData)

    function handleInputChange(e, name) {
        const { name: inputName, value } = e.target;

        data.map((item) => {
            if (item.name === name) {
                item.value[inputName] = value
            }
            return item
        })
    }

    return React.createElement("div", { className: "d-flex align-items-center justifi-content-center" },
        React.createElement("table", null,
            React.createElement("tr", null, React.createElement("th", { colSpan: 7, className: "text-center" }, "Month 1")),
            data?.map((item, i) => {
                return React.createElement("tr", { key: i }, React.createElement("th", { className: "text-center" }, item.name),
                    [1, 2, 3, 4, 5, 6].map((_, index) => {
                        return React.createElement("td", null, React.createElement("input", {
                            name: item.name + index,
                            onChange: e => handleInputChange(e, item.name),
                            key: index
                        }))
                    }))
            })
        ),
        React.createElement("button", {
            onClick: () => {
                console.log(data) // data ready to send API
            },
            className: "btn btn-outline-secondary"
        },
            "Post Data")
    )
}


const container = React.createElement(myFunction, {})

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(container)
