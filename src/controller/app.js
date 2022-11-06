const testRoute = async (request, response) => {
    return response.json({
        message: 'Docker is easy 🐳'
    })
}


export default {
    testRoute
}