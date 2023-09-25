import {App} from "@/components";
import Hero from "@/components/Hero";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";


export default function Stroke() {
    return (
        <main className="overflow-hidden">
            <Nav />
            <div className="bg-gradient-to-bl from-sky-500/50 from-5% via-blue-500/50 via-30% to-violet-500/50 to-90%">
                <Hero title={["Brain", "Stroke"]} disease={"stroke"} text={"The model achieved a commendable accuracy of 90% in detecting brain strokes. AUC of 94% indicates good discrimination between positive and negative cases. The test loss is reasonably low, indicating successful model training and convergence. An F1-score of 92% is solid, suggesting a reliable model for brain tumour detection."}/>
            </div>
            <Footer />

        </main>
    )
}
