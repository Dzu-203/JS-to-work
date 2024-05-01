document.addEventListener('DOMContentLoaded',() => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const content = document.getElementById('content')
    const submit = document.getElementById('submit')
    submit.addEventListener('click',(e) => {
        const data = {
            name : name.value,
            email : email.value,
            phone : phone.value,
            content : content.value,
        }
        if (data.name && data.email && data.phone){
            PostForm(data)
        }else{
            alert("Thất bại")
        }
    })
})
async function PostForm(data) {
    const urlPost = "https://docs.google.com/forms/d/e/1FAIpQLScXLUMGxk2psRFdZuKhdGdB4EkHjgOABILPUQ0hEJqtsomXsg/formResponse"
    const dataPost = {
        namePost : "entry.456115941",
        emailPost : "entry.191029348",
        phonePost : "entry.736526711",
        contentPost : "entry.669504788"
    }
    const form = new FormData()
    form.append(dataPost.namePost,data.name)
    form.append(dataPost.emailPost,data.email)
    form.append(dataPost.phonePost,data.phone)
    form.append(dataPost.contentPost,data.content)
    try {
        await fetch(urlPost,{
            method : "POST",
            body : form
        })
    } catch (error) {
        //
    }


}