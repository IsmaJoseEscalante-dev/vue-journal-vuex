export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Voluptate in consectetur sint magna.',
            picture: null, // https: //
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Esse consequat exercitation magna cillum.',
            picture: null, // https: //
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Voluptate minim dolor cupidatat id elit sint sint magna qui voluptate deserunt id tempor.',
            picture: null, // https: //
        }
    ]
})