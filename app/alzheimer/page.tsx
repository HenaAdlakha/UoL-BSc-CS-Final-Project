import {App} from "@/components";
import Hero from "@/components/Hero";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";


export default function Alzheimer() {
    return (
        <main className="overflow-hidden">
            <Nav />
            <div className="bg-gradient-to-bl from-sky-500/50 from-5% via-blue-500/50 via-30% to-violet-500/50 to-90%">
                <Hero title={["Alzheimer's", "Disease"]} disease={"alzheimer's"} text={"The model achieved a strong accuracy of 88%, AUC of 95%, demonstrating good separation of classes. An F1-score of 94% is impressive, suggesting a reliable balance between precision and recall for Alzheimer's diagnosis."}/>
            </div>
            <Footer />

        </main>
    )
}
