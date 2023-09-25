import {App} from "@/components";
import Hero from "@/components/Hero";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";


export default function Tumour() {
    return (
        <main className="overflow-hidden">
            <Nav />
            <div className="bg-gradient-to-bl from-sky-500/50 from-5% via-blue-500/50 via-30% to-violet-500/50 to-90%">
                <Hero title={["Brain", "Tumour"]} disease={"tumor"} text={"The model achieved high accuracy and AUC on brain stroke classification, indicating strong predictive performance. The low test loss suggests that the method is efficient at training the model to converge. The F1-score of 0.97% is excellent and indicates a good balance between precision and recall."}/>
            </div>
            <Footer />

        </main>
    )
}
