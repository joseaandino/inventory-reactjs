export const Wrapper = props => {
    return <>
        <header>
            <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
        </header>

            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                        Products <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {props.children}
                    </main>
                </div>
            </div>
        
    </>
}