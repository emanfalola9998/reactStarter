function PageHeader(): JSX.Element{
    return(
        <>
            <h1>These are my favourite places</h1>
            <p><i>I hope you enjoy them as much as I did making this website</i></p>
            {/* <button type="button" onclick="alert('Updated!')">update</button> */}
            <nav>
                <a href="https://www.britannica.com/topic/flag-of-Ireland">Ireland</a>|
                <a href="https://www.britannica.com/topic/flag-of-Spain">Spain</a>|
                <a href="https://www.britannica.com/topic/flag-of-Malta">Malta</a>
            </nav>
        </>
    );   
}
export default PageHeader;