import React from "react";

const Sidebar = () => {
    return (
        <aside className="app-sidebar" id="sidebar">

            {/* <!-- Start::main-sidebar-header --> */}
            <div className="main-sidebar-header">
                <a href="index.html" className="header-logo">
                    <img src="assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                    <img src="assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                    <img src="assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                    <img src="assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                    <img src="assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
                    <img src="assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                </a>
            </div>
            {/* <!-- End::main-sidebar-header --> */}

            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar" id="sidebar-scroll">

                {/* <!-- Start::nav --> */}
                <nav className="main-menu-container nav nav-pills flex-col sub-open">
                    <div className="slide-left" id="slide-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
                    </div>
                    <ul className="main-menu">

                        {/* <!-- Start::slide --> */}
                        <li className="slide">
                            <a href="{{ route('home')}}" className="side-menu__item active">
                                <i className="bi bi-house side-munu_icon w-8"
                                    style={{ fontSize: "20px" }}
                                ></i>
                                <span className="side-menu__label">Home</span>
                            </a>
                        </li>
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        <li className="slide has-sub">
                            <a href="javascript:void(0);" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <span className="side-menu__label">Santri</span>
                                <i className="ri-arrow-down-s-line side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Apps</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Ecommerce
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="add-products.html" className="side-menu__item">Add Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="cart.html" className="side-menu__item">Cart</a>
                                        </li>
                                        <li className="slide">
                                            <a href="checkout.html" className="side-menu__item">Checkout</a>
                                        </li>
                                        <li className="slide">
                                            <a href="edit-products.html" className="side-menu__item">Edit Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="order-details.html" className="side-menu__item">Order Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="orders.html" className="side-menu__item">Orders</a>
                                        </li>
                                        <li className="slide">
                                            <a href="products.html" className="side-menu__item">Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="product-details.html" className="side-menu__item">Product Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="products-list.html" className="side-menu__item">Products List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="wishlist.html" className="side-menu__item">Wishlist</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <a href="full-calendar.html" className="side-menu__item">Full Calendar</a>
                                </li>
                                <li className="slide">
                                    <a href="gallery.html" className="side-menu__item">Gallery</a>
                                </li>
                                <li className="slide">
                                    <a href="sweet-alerts.html" className="side-menu__item">Sweet Alerts</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Projects
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="projects-list.html" className="side-menu__item">Projects List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="projects-overview.html" className="side-menu__item">Project Overview</a>
                                        </li>
                                        <li className="slide">
                                            <a href="projects-create.html" className="side-menu__item">Create Project</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Task
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="task-kanban-board.html" className="side-menu__item">Kanban Board</a>
                                        </li>
                                        <li className="slide">
                                            <a href="task-list-view.html" className="side-menu__item">List View</a>
                                        </li>
                                        <li className="slide">
                                            <a href="task-details.html" className="side-menu__item">Task Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Jobs
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="job-details.html" className="side-menu__item">Job Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-company-search.html" className="side-menu__item">Search Company</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-search.html" className="side-menu__item">Search Jobs</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-post.html" className="side-menu__item">Job Post</a>
                                        </li>
                                        <li className="slide">
                                            <a href="jobs-list.html" className="side-menu__item">Jobs List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-candidate-search.html" className="side-menu__item">Search Candidate</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-candidate-details.html" className="side-menu__item">Candidate Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">NFT
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="nft-marketplace.html" className="side-menu__item">Market Place</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-details.html" className="side-menu__item">NFT Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-create.html" className="side-menu__item">Create NFT</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-wallet-integration.html" className="side-menu__item">Wallet Integration</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-live-auction.html" className="side-menu__item">Live Auction</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">CRM
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="crm-contacts.html" className="side-menu__item">Contacts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-companies.html" className="side-menu__item">Companies</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-deals.html" className="side-menu__item">Deals</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-leads.html" className="side-menu__item">Leads</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Crypto
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="crypto-transactions.html" className="side-menu__item">Transactions</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-currency-exchange.html" className="side-menu__item">Currency Exchange</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-buy-sell.html" className="side-menu__item">Buy & Sell</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-marketcap.html" className="side-menu__item">Marketcap</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-wallet.html" className="side-menu__item">Wallet</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        <li className="slide">
                            <a href="icons.html" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                                <span className="side-menu__label">Icons</span>
                            </a>
                        </li>
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide__category --> */}
                        <li className="slide__category"><span className="category-name">Tables & Charts</span></li>
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        <li className="slide has-sub">
                            <a href="javascript:void(0);" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                <span className="side-menu__label">Charts</span>
                                <i className="ri-arrow-down-s-line side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Charts</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="javascript:void(0);" className="side-menu__item">Apex Charts
                                        <i className="ri-arrow-down-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="apex-line-charts.html" className="side-menu__item">Line Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-area-charts.html" className="side-menu__item">Area Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-column-charts.html" className="side-menu__item">Column Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-bar-charts.html" className="side-menu__item">Bar Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-mixed-charts.html" className="side-menu__item">Mixed Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-rangearea-charts.html" className="side-menu__item">Range Area Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-timeline-charts.html" className="side-menu__item">Timeline Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-funnel-charts.html" className="side-menu__item">Funnel Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-candlestick-charts.html" className="side-menu__item">CandleStick
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-boxplot-charts.html" className="side-menu__item">Boxplot Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-bubble-charts.html" className="side-menu__item">Bubble Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-scatter-charts.html" className="side-menu__item">Scatter Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-heatmap-charts.html" className="side-menu__item">Heatmap Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-treemap-charts.html" className="side-menu__item">Treemap Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-pie-charts.html" className="side-menu__item">Pie Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-radialbar-charts.html" className="side-menu__item">Radialbar Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-radar-charts.html" className="side-menu__item">Radar Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-polararea-charts.html" className="side-menu__item">Polararea Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-slope-charts.html" className="side-menu__item">Slope Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <a href="chartjs-charts.html" className="side-menu__item">Chartjs Charts</a>
                                </li>
                                <li className="slide">
                                    <a href="echarts.html" className="side-menu__item">Echart Charts</a>
                                </li>
                            </ul>
                        </li>
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        <li className="slide has-sub">
                            <a href="javascript:void(0);" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>
                                <span className="side-menu__label">Tables</span>
                                <i className="ri-arrow-down-s-line side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="tables.html" className="side-menu__item">Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="grid-tables.html" className="side-menu__item">Grid JS Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="data-tables.html" className="side-menu__item">Data Tables</a>
                                </li>
                            </ul>
                        </li>
                        {/* <!-- End::slide --> */}

                    </ul>
                    <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                </nav>
                {/* <!-- End::nav --> */}

            </div>
            {/* <!-- End::main-sidebar --> */}
        </aside>
    );
}

export default Sidebar;