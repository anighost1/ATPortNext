import withRoot from "@/theme/withRoot"
import Hero from "@/components/Hero";
import ProjectsLite from "@/components/ProjectsLite";

function Home() {
    return (
        <>
            <Hero />
            <ProjectsLite/>
        </>
    );
}

export default withRoot(Home)