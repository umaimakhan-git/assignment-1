
async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    })
    return (
        <div className="min-h-screen bg-slate-500">
            <h1 className="font-bold text-3xl pt-2 pl-1">About Page</h1>
            <p className="mt-4 pl-1 text-justify text-lg font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate voluptatem eaque rem aperiam omnis impedit, vero deserunt enim ipsam consequatur reiciendis quisquam aliquam velit unde ea voluptas in. Quas vel ex explicabo. Nam repellendus tempore quod nostrum culpa voluptates!</p>
        </div>
    );
};

export default About;