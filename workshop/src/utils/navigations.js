const getNavigation = (isLogged, user) => {



    if (isLogged === true) {

        return (
            [
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
                    link: `/profile/${user.id}`
                }
            ]
        )
    }else{

        return (
        [
            {
                title: "Publications",
                link: "/"
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
    )
    }

    
}

export default getNavigation;