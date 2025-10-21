import Contributing from '@/components/contributing/Contributing';
import FeatureCard from '@/components/feature-card/FeatureCard';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Introduction from '@/components/introduction/Introduction';
import Packs from '@/components/packs/Packs';
import { pearAiFeatures } from '@/constants/constants';

export default function Home() {
    return (
        <div>
            <Header />
            <Introduction />

            <div>
                {pearAiFeatures.map(feature => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        header={feature.header}
                        footer={feature.footer}
                        img={feature.img}
                    />
                ))}
            </div>

            <Packs />
            <Contributing />
            <Footer />
        </div>
    );
}
