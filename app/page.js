import withRoot from "@/theme/withRoot"
import Hero from "@/components/Hero";
import ProjectsLite from "@/components/ProjectsLite";
import Featured from "@/components/Featured";

function Home() {
    return (
        <>
            <Hero />
            {/* <Featured /> */}
            <ProjectsLite />
        </>
    );
}

export default withRoot(Home)