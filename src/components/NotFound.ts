


const NotFound = (searchTerm: string) => {
    return `
        <div class="col-md-12">
            <div class="error-template">
                <h1>Oops!</h1>
                <h2>${searchTerm} has 0 matches</h2>
            </div>
        </div>
    `
}

export default NotFound;
