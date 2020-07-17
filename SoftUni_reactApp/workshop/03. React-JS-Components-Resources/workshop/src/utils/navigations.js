const getNavigation = (userId) => {

    const links = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Share you Thoughts",
            link: "/share"
        },
        {
            title: "Profile",
            link: "/profile/"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Register",
            link: "/register"
        }
    ]

    return links
}

export default getNavigation;