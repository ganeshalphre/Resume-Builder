const SectionFive = () => {
    const tools = [
        {
            toolName: "Resume",
            link: "/dummy.pdf",
        },
        {
            toolName: "Cover Letter",
            link: "/dummy.pdf",
        },
        {
            toolName: "Web Resume",
            link: "/dummy.pdf",
        },
        {
            toolName: "Employment LOR",
            link: "/dummy.pdf",
        },
        {
            toolName: "Job Application Mail",
            link: "/dummy.pdf",
        },
        {
            toolName: "Video Resume Script",
            link: "/dummy.pdf",
        },
        {
            toolName: "Resume Card",
            link: "/dummy.pdf",
        },
    ]
    return ( 
        <div className="SectionFive">
            <h3>Samples</h3>
            {tools.map((tool, index) => {
                return (
                    <div className={"tool-pdf"}>
                        <h5>{tool.toolName}</h5>
                        <a href="/dummy.pdf" download="Resume"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i></a>
                    </div>
                )
            })}
        </div>
     );
}
 
export default SectionFive;