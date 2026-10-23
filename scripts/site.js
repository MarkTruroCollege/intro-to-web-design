function clearForm()
{
    document.getElementById("contactForm").reset();
}

function hidePTags() 
{
    let ptags = document.getElementsByTagName("p");
    for (let item of ptags) 
    {
        // removes the element, leaves the space where it was
        // item.style.visibility = "hidden";
        // removes the element AND the space where it was
        item.style.display = "none";
    }
}

$("#jqueryBtn").click(function()
{
    $("p").hide();
});