import React from "react";
// import news1 from "../newsimg/download.png";
// import news2 from "../newsimg/news18.png";
// import news3 from "../newsimg/haryana.jpeg";
// import news4 from "../newsimg/asianet.png";
// import news5 from "../newsimg/Punjab.jpg";
// import news6 from "../newsimg/best24.jpeg";
// import news7 from "../newsimg/Rewari.jpg";
// import news8 from "../newsimg/gnt.webp";
// import news9 from "../newsimg/zeenews.png";
// import news10 from "../newsimg/dainik tribune.jpg";

import news1 from "../Assest2/newsLogo/DiprHaryana.jpg";
import news2 from "../Assest2/newsLogo/ddNews.jpg";
import news3 from "../Assest2/newsLogo/dristi.jpg";
import news4 from "../Assest2/newsLogo/the-statesman-logo-new.png";
import news5 from "../Assest2/newsLogo/theIndianExpress.png";

import { Link } from "react-router-dom";

const meadia_news = [
  {
    id: 1,
    Name: "रेवाड़ी के इंजीनियर ने बनाई ई-साइकिल:एक बार चार्जिंग में 60 किलो का व्यक्ति 50KM तक चला सकता है; स्पीड 30KM प्रति घंटा",
    to: "https://dainik-b.in/Xpgy5LkX4zb",
    img: news1,
  },
  {
    id: 2,
    Name: "5 रुपए में 50 KM चलेगी ये इलेक्ट्रिक साइकिल, क्रूज़ कंट्रोल के साथ देखिये हैरान करने वाले फीचर",
    to: "https://hindi.news18.com/news/haryana/rewari-50-km-in-5-rupees-this-e-cycle-will-run-with-cruise-control-see-amazing-features-6319887.html",
    img: news2,
  },
  {
    id: 3,
    Name: "रेवाड़ी के इंजीनियर विकास ने बनाई अनोखी ई- साइकिल, पढ़ें गजब की विशेषताएं",
    to: "https://www.haryanaekhabar.com/rewari/engineer-vikas-yadav-from-rewari-made-unique-e-cycle-battery-will-full-in-two-and-half-hours-these-features-given/",
    img: news3,
  },
  {
    id: 4,
    Name: "इनसे सीखें Startup चलाने का फंडा, अच्छी सैलरी की जॉब छोड़ ई-साइकिल और रिक्शा डिजाइन कर रहे हरियाणा के विकास यादव",
    to: "https://hindi.asianetnews.com/state/haryana/innovative-e-cycle-of-vikas-yadav-of-rewari-how-to-succeed-startup-in-auto-mobile-engineering-career-success-story-kpa/articleshow-91zsvpf",
    img: news4,
  },
  {
    id: 5,
    Name: "An engineer from Rewari made E-Cycle, know what is its special feature",
    to: "https://m.haryana.punjabkesari.in/haryana/news/engineer-of-rewari-made-e-cycle-1829703",
    img: news5,
  },
];
function Media() {
  return (
    <div className="mt-6">
      {meadia_news.map((item) => (
        <div className="flex mb-3 shadow-sm">
          <div>
            <img src={item.img} alt="..." className="w-40" />
          </div>
          <Link key={item.id} to={item.to} className="group">
            <div>
              <h3 className="mt-4 text-gray-700 flex font-extrabold text-xl ml-8">
                {item.Name}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Media;
