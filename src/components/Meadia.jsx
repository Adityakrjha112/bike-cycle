import React from "react";
import news1 from "../Assest2/newsLogo/DiprHaryana.jpg";
import news2 from "../Assest2/newsLogo/ddNews.jpg";
import news3 from "../Assest2/newsLogo/dristi.jpg";
import news4 from "../Assest2/newsLogo/the-statesman-logo-new.png";
import news5 from "../Assest2/newsLogo/theIndianExpress.png";
import news6 from "../newsimg/best24.jpeg";
import news7 from "../newsimg/Rewari.jpg";
import news8 from "../newsimg/gnt.webp";
import news9 from "../newsimg/zeenews.png";
import news10 from "../newsimg/dainik tribune.jpg";
import "./Media.css";
import { Link } from "react-router-dom";

const meadia_news = [
  {
    id: 1,
    Name: "रेवाड़ी के इंजीनियर ने बनाई ई-साइकिल:एक बार चार्जिंग में 60 किलो का व्यक्ति 50KM तक चला सकता है; स्पीड 30KM प्रति घंटा",
    to: "https://x.com/DiprHaryana/status/1727229800581111967?t=Ki3cIhe9ljGIbH-WMBClzg&s=09",
    img: news1,
  },
  {
    id: 2,
    Name: "5 रुपए में 50 KM चलेगी ये इलेक्ट्रिक साइकिल, क्रूज़ कंट्रोल के साथ देखिये हैरान करने वाले फीचर",
    to: "https://x.com/DDNewsHaryana/status/1727616132289540334?t=_XMedqR4erZDcgDgRXvOZg&s=09",
    img: news2,
  },
  {
    id: 3,
    Name: "रेवाड़ी के इंजीनियर विकास ने बनाई अनोखी ई- साइकिल, पढ़ें गजब की विशेषताएं",
    to: "https://www.drishtiias.com/state-pcs-current-affairs/iitf-e-cycle-made-with-modern-technology-seen-in-haryana-pavilion",
    img: news3,
  },
  {
    id: 4,
    Name: "इनसे सीखें Startup चलाने का फंडा, अच्छी सैलरी की जॉब छोड़ ई-साइकिल और रिक्शा डिजाइन कर रहे हरियाणा के विकास यादव",
    to: "https://www.thestatesman.com/india/haryanas-start-up-policy-shows-results-at-iitf-delhi-1503243082.html",
    img: news4,
  },
  {
    id: 5,
    Name: "An engineer from Rewari made E-Cycle, know what is its special feature",
    to: "https://indianexpress.com/article/cities/chandigarh/tesla-job-in-japan-haryana-man-designs-e-cycle-9037835/",
    img: news5,
  },
  {
    id: 6,
    Name: "Rewari के इंजीनियर ने बनाई ऐसी E Cycle, NCR ही नहीं पूरे Haryana की बनी पसंद, जानिए खूबियां",
    to: "https://best24news.com/rewari/rewaris-engineer-made-such-an-e-cycle-not-only-in-ncr/?fbclid=IwAR0LiCGDQjdJM2UvfGHL06WhrHfjNJBKh0NpTOQjIS5uomIIIKpCguI-G0c",
    img: news6,
  },
  {
    id: 7,
    Name: "बड़े ब्रांड को टक्कर देगी रेवाड़ी की ये E-Cycle Cruise Cantrol जैसे फीचर भी मिलेंगे #ecycle #cruisecontrol #RewariEcycle #E-Cycle",
    to: "https://fb.watch/mKu5YoIScc/?mibextid=Nif5oz",
    img: news7,
  },
  {
    id: 8,
    Name: "कोरोना में गई नौकरी तो इस मैकेनिकल इंजीनियर ने बनाया अनोखा ई-रिक्शा, बैटरी के साथ चलेगा पैडल से भी",
    to: "https://www.gnttv.com/technology/story/haryana-young-mechanical-engineer-designed-unique-e-rickshaw-after-loosing-job-corona-367259-2022-04-24?fbclid=IwAR1BKou0UHHROlYl4MNnO43ulg8sSnkJVtNESFKBEWkApqYOu9JTH08acCI",
    img: news8,
  },
  {
    id: 9,
    Name: "कोरोना काल में जॉब जाने के बाद नहीं मानी हार, मजबूत हौसले के दम पर किया ये आविष्कार",
    to: "https://zeenews.india.com/hindi/india/delhi-ncr-haryana/rewari-balawas-ahir-village-haryana-engineer-made-a-e-riksha-plhr/1162328",
    img: news9,
  },
  {
    id: 10,
    Name: "इंजीनियर भाइयों ने घर पर तैयार किया ई-रिक्शा लोडिंग",
    to: "https://www.dainiktribuneonline.com/news/haryana/engineer-brothers-prepared-e-rickshaw-loading-at-home-95832/?fbclid=IwAR2sJOvRX8upxOvARf_Uy8rlrV98XTx3S1iCrBCcprJz90BQQ0p1jCLCKQQ",
    img: news10,
  },
];
function Meadia() {
  return (
    <div className="h-[1000px]">
      <h1 className="text-center mt-4 text-3xl font-extrabold">
        Media Coverage
      </h1>
      <div className="main-container">
        {/* <img src={news} alt="this is news" className="main main-centered-img" /> */}
        {meadia_news.map((item) => (
          <Link to={item.to}>
            <img
              src={item.img}
              alt="this is news"
              className={`main-centered-img main-centered-img${item.id}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Meadia;
