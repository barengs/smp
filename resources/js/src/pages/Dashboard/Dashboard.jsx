import react from "react";

const Dashboard = () => {
    return (
        <div>
            <div className="main-content app-content">
                <div className="container-fluid">
                    <div className="flex items-center justify-between page-header-breadcrumb flex-wrap gap-2">
                        <div>
                            <nav>
                                <ol className="breadcrumb mb-1">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0);">
                                            Dashboards
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">School</li>
                                </ol>
                            </nav>
                            <h1 className="page-title font-medium text-lg mb-0">School</h1>
                        </div>
                        <div className="ti-btn-list">
                            <button className="ti-btn bg-white dark:bg-bodybg border border-defaultborder dark:border-defaultborder/10 btn-wave !my-0">
                                <i className="ri-filter-3-line align-middle me-1 leading-none"></i> Filter
                            </button>
                            <button className="ti-btn ti-btn-primary text-white-full btn-wave me-0 !border-0">
                                <i className="ri-share-forward-line me-1"></i> Share
                            </button>
                        </div>
                    </div>

                    <div className="grid xxl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-x-6">
                        <div className="col">
                            <div className="box school-card">
                                <div className="box-body flex gap-2 justify-between">
                                    <div className="">
                                        <span className="block mb-1">Students</span>
                                        <h5 className="mb-0 font-semibold">62,784</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z" opacity=".2" /><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box school-card">
                                <div className="box-body flex gap-2 justify-between">
                                    <div className="">
                                        <span className="block mb-1">Teachers</span>
                                        <h5 className="mb-0 font-semibold">3,765</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-primarytint1color">
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24" /><rect fill="none" height="24" width="24" /></g><g><g><path d="M8,15c-2.7,0-5.8,1.29-6,2.01V18h12v-1C13.8,16.29,10.7,15,8,15z" opacity=".2" /><circle cx="8" cy="8" opacity=".2" r="2" /><polygon points="22,9 22,7 20,7 20,9 18,9 18,11 20,11 20,13 22,13 22,11 24,11 24,9" /><path d="M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6z" /><path d="M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M14,18H2v-0.99C2.2,16.29,5.3,15,8,15s5.8,1.29,6,2V18z" /><path d="M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z" /><path d="M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z" /></g></g></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box school-card">
                                <div className="box-body flex gap-2 justify-between">
                                    <div className="">
                                        <span className="block mb-1">Total Staff</span>
                                        <h5 className="mb-0 font-semibold">8,475</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-primarytint2color">
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24" y="0" /></g><g><g><path d="M14,13.5h4V12h-4V13.5z M14,16.5h4V15h-4V16.5z M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20 z M9,15c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5C7.5,14.33,8.17,15,9,15z M11.08,16.18 C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43C12,16.96,11.64,16.42,11.08,16.18z" /><path d="M13,11h-2c-1.1,0-2-0.9-2-2H4v11h16V9h-5C15,10.1,14.1,11,13,11z M9,12c0.83,0,1.5,0.67,1.5,1.5 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5C7.5,12.67,8.17,12,9,12z M12,18H6v-0.43c0-0.6,0.36-1.15,0.92-1.39 C7.56,15.9,8.26,15.75,9,15.75s1.44,0.15,2.08,0.43c0.55,0.24,0.92,0.78,0.92,1.39V18z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4 V13.5z" opacity=".3" /></g></g></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box school-card">
                                <div className="box-body flex gap-2 justify-between">
                                    <div className="">
                                        <span className="block mb-1">Revenue</span>
                                        <h5 className="mb-0 font-semibold">$22,987</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-primarytint3color">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z" opacity=".2" /><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx="16" cy="12" r="1.5" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box school-card">
                                <div className="box-body flex gap-2 justify-between">
                                    <div className="">
                                        <span className="block mb-1">Awards</span>
                                        <h5 className="mb-0 font-semibold">865</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><rect fill="none" height="24" width="24" /><path d="M12,14c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z" opacity=".2" /><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-7 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Attendance Report
                                    </div>
                                    <div className="ti-dropdown hs-dropdown">
                                        <a href="javascript:void(0);" className="ti-btn ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" data-bs-toggle="dropdown" > Sort By <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> </a>
                                        <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">This Week</a></li>
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">This Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex gap-[3rem] mb-3 items-center justify-center flex-wrap flex-xl-nowrap">
                                        <div className="flex items-center gap-2 me-5">
                                            <div className="leading-none">
                                                <span className="avatar avatar-md avatar-rounded bg-primarytint2color">
                                                    <i className="ri-id-card-line text-[1rem]"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[14px]">3,875</div>
                                                <div className="text-textmuted  dark:text-textmuted/50">Staff</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 me-5">
                                            <div className="leading-none">
                                                <span className="avatar avatar-md avatar-rounded bg-secondary">
                                                    <i className="ri-graduation-cap-line text-[1rem]"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[14px]">25,875</div>
                                                <div className="text-textmuted  dark:text-textmuted/50">Students</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 me-4">
                                            <div className="leading-none">
                                                <span className="avatar avatar-md avatar-rounded bg-primary">
                                                    <i className="ri-presentation-line text-[1rem]"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[14px]">1,687</div>
                                                <div className="text-textmuted  dark:text-textmuted/50">Teachers</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="attendance"></div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Teachers List
                                    </div>
                                    <a href="javascript:void(0);" className="ti-btn ti-btn-sm bg-light text-defaulttextcolor"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                </div>
                                <div className="box-body p-0">
                                    <div className="table-responsive">
                                        <table className="ti-custom-table ti-custom-table-head">
                                            <thead>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <th scope="col">Teacher</th>
                                                    <th scope="col">Qualification</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/11.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium">John Smith</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">M.Ed</span></td>
                                                    <td><div className="text-primary font-medium">Mathematics</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/3.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium">Mary Johnson</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">B.A. in English</span></td>
                                                    <td><div className="text-secondary font-medium">English</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/4.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium"> Robert Davis</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">Ph.D. in Science</span></td>
                                                    <td><div className="text-danger font-medium">Physics</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/1.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium"> Sarah Thompson</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">M.A. in History</span></td>
                                                    <td><div className="text-info font-medium">History</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/15.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium">Michael Brown</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">B.Ed</span></td>
                                                    <td><div className="text-success font-medium">Chemistry</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/2.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium">Emily Wilson</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">M.A. in Geography</span></td>
                                                    <td><div className="text-pink font-medium">Geography</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="flex items-center gap-4">
                                                            {/* <img src="../assets/images/faces/5.jpg" alt="" className="avatar avatar-sm"> */}
                                                            <a href="javascript:void(0);" className="font-medium">Sarah Smith</a>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">M.A.</span></td>
                                                    <td><div className="text-warning font-medium">Hindi</div></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i className="ri-arrow-right-s-line"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between !pb-0">
                                    <div className="box-title">
                                        Notice Board
                                    </div>
                                    <a href="javascript:void(0);" className="text-xs text-textmuted  dark:text-textmuted/50 ti-btn ti-btn-sm bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                </div>
                                <div className="box-body p-0">
                                    <div className="table-responsive">
                                        <table className="ti-custom-table ti-custom-table-head">
                                            <tbody>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="!whitespace-normal">
                                                        <div className="flex items-center gap-4">
                                                            <div className="svg-primary">
                                                                <svg className="avatar-md avatar bg-primary/10 svg-primary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"></path></svg>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div>
                                                                    <div className="font-medium block my-1 text-[14px]">Inter-School Sports Day</div>
                                                                    <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Students are gearing up for the annual inter-school.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="badge bg-light text-dark">20 Mar 2024</div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="!whitespace-normal">
                                                        <div className="flex items-center gap-4">
                                                            <div className="svg-primarytint1color">
                                                                <svg className="avatar-md avatar bg-primarytint1color/10 svg-primarytint1color  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div>
                                                                    <div className="font-medium block my-1 text-[14px]">Science Exhibition <span className="text-primarytint2color">"Science Fare"</span></div>
                                                                    <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Explore innovative projects and experiments by our students.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="badge bg-light text-dark">24 Mar 2024</div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="!whitespace-normal">
                                                        <div className="flex items-center gap-4">
                                                            <div className="svg-primarytint2color">
                                                                <svg className="avatar-md avatar bg-primarytint2color/10 svg-primarytint2color  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z"></path></svg>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div>
                                                                    <div className="font-medium block my-1 text-[14px]">Cultural Fest 2024</div>
                                                                    <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Join us for a vibrant celebration of cultural diversity</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="badge bg-light text-dark">09 Apr 2024</div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="!whitespace-normal">
                                                        <div className="flex items-center gap-4">
                                                            <div className="svg-primary3">
                                                                <svg className="avatar-md avatar bg-primarytint3color/10 !fill-primarytint3color p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div>
                                                                    <div className="font-medium block my-1 text-[14px]">Founders' Day Celebration</div>
                                                                    <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Commemorating the vision and values of our school's founders.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="badge bg-light text-dark">09 Apr 2024</div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="!whitespace-normal">
                                                        <div className="flex items-center gap-4">
                                                            <div className="svg-secondary">
                                                                <svg className="avatar-md avatar bg-secondary/10 svg-secondary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div>
                                                                    <div className="font-medium block my-1 text-[14px]">Literary Week</div>
                                                                    <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Engage in a week full of literary activities.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="badge bg-light text-dark">09 Apr 2024</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Students Overview
                                    </div>
                                    <div className="ti-dropdown hs-dropdown">
                                        <a href="javascript:void(0);" className="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> </a>
                                        <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">This Week</a></li>
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                            <li><a className="ti-dropdown-item" href="javascript:void(0);">This Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body pb-1">
                                    <div id="students-applicants"></div>
                                </div>
                                <div className="box-footer p-0">
                                    <div className="grid grid-cols-12 gap-x-6 mt-0">
                                        <div className="col-span-6 border-end border-inline-end-dashed text-center p-4">
                                            <p className="mb-1 font-medium">Boys</p>
                                            <h5 className="text-primary font-medium">12.34K</h5>
                                        </div>
                                        <div className="col-span-6 text-center p-4">
                                            <p className="mb-1 font-medium">Girls</p>
                                            <h5 className="text-secondary font-medium">10.19K</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Activity
                                    </div>
                                    <a href="javascript:void(0);" className="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none school-activity-list">
                                        <li>
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Mr. Thomas Brown<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">02:30PM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Liked a post from <span className="badge bg-secondary/10 text-secondary">Ms. Sarah Parker</span> about the upcoming school event</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Mr. John Doe<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">12:47PM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Updated class schedule</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Ms. Jane Smith<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">10:22AM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 mb-1 font-normal">Posted a <span className="text-primary3 text-[14px] font-medium">new announcement</span></span>
                                                <div className="p-2 rounded-sm bg-light text-[13px]">
                                                    Reminder: Parent-Teacher meeting on Friday at 3 PM &#128197;
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Mrs. Emily Davis<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">11:30AM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Commented on a student's project - <span className="font-medium text-success">"Excellent Work"</span></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Alice Johnson<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">11:45AM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Submitted a report - <span className="font-medium text-success text-[14px]">"Science Project"</span></span>
                                            </div>
                                        </li>
                                        <li className="mb-2">
                                            <div>
                                                <h6 className="mb-0 text-[13px]">Mr. Bob Anderson<span className="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">10:54AM</span></h6>
                                                <span className="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Reviewed a submission from <span className="badge bg-secondary/10 text-secondary">Jane Smith</span></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-8 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Star Students
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-wrap gap-2">
                                            <div>
                                                {/* <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"> */}
                                            </div>
                                            <div className="ti-dropdown hs-dropdown">
                                                <a href="javascript:void(0);" className="ti-btn bg-primary text-white ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle !m-0"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </a>
                                                <ul className="ti-dropdown-menu hs-dropdown-menu hidden" role="menu">
                                                    <li><a className="ti-dropdown-item" href="javascript:void(0);">New</a></li>
                                                    <li><a className="ti-dropdown-item" href="javascript:void(0);">Popular</a></li>
                                                    <li><a className="ti-dropdown-item" href="javascript:void(0);">Relevant</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body p-0 pt-2">
                                    <div className="table-responsive">
                                        <table className="ti-custom-table ti-custom-table-head">
                                            <thead>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">S.No</td>
                                                    <td className="">ID</td>
                                                    <td className="">Student</td>
                                                    <td className="">Class</td>
                                                    <td className="">Section</td>
                                                    <td className="">Marks In %</td>
                                                    <td className="">Marks In GPA</td>
                                                    <td className="">Status</td>
                                                    <td className="">Actions</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">1</td>
                                                    <td className="">#1116</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/2.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Studar Little</a>
                                                        </div>
                                                    </td>
                                                    <td className="">IX</td>
                                                    <td className="">B</td>
                                                    <td className="">75%</td>
                                                    <td className="">7.5</td>
                                                    <td className="">
                                                        <span className="text-success font-medium">Pass</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block" >
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">2</td>
                                                    <td className="">#8547</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/4.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Ion Somer</a>
                                                        </div>
                                                    </td>
                                                    <td className="">X</td>
                                                    <td className="">A</td>
                                                    <td className="">65%</td>
                                                    <td className="">6.5</td>
                                                    <td className="">
                                                        <span className="text-success font-medium">Pass</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block">
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">3</td>
                                                    <td className="">#7564</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/6.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Shakira</a>
                                                        </div>
                                                    </td>
                                                    <td className="">X</td>
                                                    <td className="">B</td>
                                                    <td className="">25%</td>
                                                    <td className="">2.5</td>
                                                    <td className="">
                                                        <span className="text-danger font-medium">Fail</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block">
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">4</td>
                                                    <td className="">#1254</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/8.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Thomas Shelby</a>
                                                        </div>
                                                    </td>
                                                    <td className="">IX</td>
                                                    <td className="">A</td>
                                                    <td className="">95%</td>
                                                    <td className="">9.5</td>
                                                    <td className="">
                                                        <span className="text-success font-medium">Pass</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block">
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">5</td>
                                                    <td className="">#7458</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/10.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Stefan U</a>
                                                        </div>
                                                    </td>
                                                    <td className="">IX</td>
                                                    <td className="">B</td>
                                                    <td className="">62%</td>
                                                    <td className="">6.2</td>
                                                    <td className="">
                                                        <span className="text-success font-medium">Pass</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block">
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td className="">6</td>
                                                    <td className="">#6325</td>
                                                    <td className="">
                                                        <div className="flex items-center">
                                                            <a href="javascript:void(0);" className="avatar avatar-xs avatar-rounded me-2">
                                                                {/* <img src="../assets/images/faces/12.jpg" alt="img"> */}
                                                            </a>
                                                            <a href="javascript:void(0);">Michael Shreff</a>
                                                        </div>
                                                    </td>
                                                    <td className="">X</td>
                                                    <td className="">A</td>
                                                    <td className="">15%</td>
                                                    <td className="">1.5</td>
                                                    <td className="">
                                                        <span className="text-danger font-medium">Fail</span>
                                                    </td>
                                                    <td className="">
                                                        <div className="ti-dropdown hs-dropdown inline-block">
                                                            <a aria-label="anchor" href="javascript:void(0);" className="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i className="bi bi-three-dots"></i></a>
                                                            <ul className="ti-dropdown-menu hs-dropdown-menu hidden">
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Another Action</a></li>
                                                                <li><a href="javascript:void(0);" className="ti-dropdown-item">Something Else Here</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center flex-wrap bg-light p-4 py-2 rounded-md my-1">
                                        <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i> </div>
                                        <div className="ms-auto py-2">
                                            <nav aria-label="" className="">
                                                <ul className="ti-pagination mb-0 !p-0 justify-end float-end">
                                                    <li className="page-item disabled"> <a
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</a>
                                                    </li>
                                                    <li className="page-item"><a
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="javascript:void(0);">1</a></li>
                                                    <li className="page-item " aria-current="page"> <a
                                                        className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="javascript:void(0);">2</a> </li>
                                                    <li className="page-item"> <a
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-0"
                                                        href="javascript:void(0);">Next</a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Exam Results
                                    </div>
                                    <a href="javascript:void(0);" className="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                </div>
                                <div className="box-body p-0">
                                    <div className="table-responsive">
                                        <table className="ti-custom-table ti-custom-table-head">
                                            <thead>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <th>ID</th>
                                                    <th>Student</th>
                                                    <th>Subject</th>
                                                    <th>Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#8547</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/4.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Ion Somer</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">Science</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Science</td>
                                                    <td className="text-success">92%</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#7564</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/6.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Shakira</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">English</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>English</td>
                                                    <td className="text-success">78%</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#1254</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/8.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Thomas Shelby</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">History</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>History</td>
                                                    <td className="text-success">88%</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#7458</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/10.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Stefan U</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">Geography</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Geography</td>
                                                    <td className="text-secondary">65%</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#6325</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/12.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Michael Shreff</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">Physics</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Physics</td>
                                                    <td className="text-success">80%</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>#2321</td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <div>
                                                                <span className="avatar avatar-sm">
                                                                    {/* <img src="../assets/images/faces/4.jpg" alt="img"> */}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="block font-semibold leading-none mb-1">Leo Phllip</span>
                                                                <span className="text-[13px] text-textmuted  dark:text-textmuted/50">Chemistry</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Chemistry</td>
                                                    <td className="text-success">83%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;