/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║            SOLO SO AUTO — SITE CONTENT CONFIGURATION            ║
 * ║   Edit every piece of visible text from this single file.       ║
 * ║   Changes here will instantly reflect on the website.           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const SITE_CONFIG = {

    // ================================================================
    // BRAND & IDENTITY
    // ================================================================
    brand: {
        name:           "SOLO-SO AUTO",
        nameShort:      "SOLOSО",
        logoSrc:        "https://i.ibb.co/nNxxKRtz/Solo-So.png",
        tagline:        "ඔබේ සිහින රිය සැබෑවක්", // Your dream car a reality
        established:    "Est. 2010",
        location:       "Marawila",
        yearsActive:    "2016 – 2026",
        anniversary:    "වසර 10ක විශිෂ්ටත්වය", // 10 Years of Excellence
        phone:          "+94 77 530 0000",
        whatsapp:       "94775300000",
        address:        "Colombo-Puttalam Main Road, Marawila, Sri Lanka",
        addressShort:   "Colombo–Puttalam Main Road",
        metaTitle:      "Solo So Auto | The Ultimate Automotive Sanctuary",
        metaDescription:"Experience the pinnacle of automotive excellence. From JDM legends to European masterpieces, Solo So Auto curates the world's finest vehicles for the discerning few. Marawila's premier destination for luxury, performance, and prestige.",
    },

    // ================================================================
    // PRELOADER
    // ================================================================
    preloader: {
        statusLabel:    "System Check",
        states:         ["Initializing...", "Loading Assets...", "Connecting...", "Preparing...", "ආයුබෝවන්."],
    },

    // ================================================================
    // NAVIGATION
    // ================================================================
    nav: {
        home:           "Home",
        cars:           "Cars",
        wedding:        "Wedding Cars",
        weddingIcon:    "♥",
        whatsappLabel:  "",   // WhatsApp button label (icon only by default)
    },

    // ================================================================
    // HERO SECTION
    // ================================================================
    hero: {
        badgeText:      "Since 2010 • මාරවිල",
        heading1:       "PURE",
        heading2:       "MOTION",
        heading3:       "ARTISTRY",
        subheading:     "Where",
        subHighlight1:  "Performance",
        subMid:         "meets",
        subHighlight2:  "Prestige",
        subEnd:         ".",
        ctaWhatsapp:    "WhatsApp",
        ctaInventory:   "වාහන බලන්න", // View Inventory

        // Services strip inside hero (loans / drafts / leasing)
        servicesLabel:  "අපගේ සේවාවන්",
        services: [
            { icon: "💳", text: "LOANS" },
            { icon: "📄", text: "DRAFTS" },
            { icon: "🚗", text: "LEASING" },
        ],

        // BIG PROMO HIGHLIGHT BANNER
        promoBannerEnabled: true,
        promoBadge:         "🔥 ලංකාවේ අඩුම මිල අපෙන්!", // Lowest price in Lanka from us
        promoHeadline:      "සිහින වාහනය ගෙදරටම ගෙනියන්න", // Take the dream vehicle home
        promoPrice:         "රු. ලක්ෂ 22 සිට", // From 2.2 Million
        promoSub:           "ඔබට ගැලපෙනම වාහනය Solo So Auto වෙතින්.",
        promoNote:          "අඩුම මූලික ගෙවීමක් සහ පහසුම වාරික ක්‍රම අපෙන්.", // Lowest down payment and easiest installments from us

        // Down-payment highlight strip
        downPaymentText:    "🏆 ලංකාවේ අඩුම DOWN PAYMENT එක", // Lanka's lowest Down Payment
        monthlyRateText:    "සිතාගන්න බැරි අඩුම වාරික!", // Unimaginably low installments
    },

    // ================================================================
    // STATS / GLOBAL REACH SECTION
    // ================================================================
    stats: {
        sectionLabel:   "Global Reach",
        heading1:       "ලෝකයේ හොඳම වාහන", // World's best vehicles
        heading2:       "ඔබේ දෑතටම.", // To your hands
        body:           "ජපානය, එංගලන්තය ඇතුළු ලොව ප්‍රමුඛතම රටවලින් උසස්ම තත්වයේ වාහන ආනයනය කර ඔබ වෙත ලබා දීම අපගේ වගකීමයි.",

        // Countries we import from — add/remove freely
        countries: [
            { code: "jp", name: "Japan" },
            { code: "gb", name: "UK" },
            { code: "th", name: "Thailand" },
            { code: "de", name: "Germany" },
            { code: "au", name: "Australia" },
            { code: "sg", name: "Singapore" },
            { code: "ae", name: "UAE" },
            { code: "kr", name: "Korea" },
        ],

        card1Units:     "500+",
        card1Label:     "සතුටු පාරිභෝගිකයින්", // Happy customers
        card1Since:     "Since 2010",
        card2Title:     "Service Partners",
        card2Sub:       "Sterling & KOBE Auto",
        card2Badge:     "Warranty & Care",
        card3Title:     "සුපිරිම තත්ත්වය", // Superb condition
        card3Sub:       "පූර්ණ පරීක්ෂාවෙන් පසු වාහන ආනයනය.",
        card3Badge:     "Certified",
    },

    // ================================================================
    // CURATOR / ABOUT SECTION
    // ================================================================
    curator: {
        sideLabel:      "THE CURATOR",
        heading1:       "DEFINING",
        heading2:       "AUTOMOTIVE LUXURY",
        para1:          "Solo So Auto was founded to dismantle the opacity of the traditional car market and replace it with transparency, trust, and obsession with quality.",
        para2:          "Every vehicle is personally hand-selected from premium auctions in Japan and the UK — because excellence is never accidental.",
        quoteText:      "\"අපි වාහන විකුණනවා විතරක් නෙමෙයි, අපි ඔබේ විශ්වාසය රකිනවා.\"", // We don't just sell cars, we keep your trust.
        quoteAttr:      "Founder's Note",
        directorName:   "Indu Saman Wijesena",
        directorTitle:  "Managing Director",
        imageSrc:       "https://i.ibb.co/QF5LV7SW/Person.png",
    },

    // ================================================================
    // FEATURED INVENTORY SECTION
    // ================================================================
    inventory: {
        sectionLabel:   "Current Inventory",
        heading:        "අලුත්ම වාහන.", // Newest vehicles
        swipeHint:      "Swipe to Explore",
        fullLabel:      "Our Collection",
        fullHeading:    "Complete Inventory",
        filterAllStatus:    "All Status",
        filterInStock:      "In Stock",
        filterImportable:   "Importable",
        filterAllCond:      "All Conditions",
        filterUnreg:        "Unregistered",
        filterReg:          "Registered",
        noResults:          "No vehicles found matching your criteria.",
        whatsappCTA:        "මිල ගණන් දැනගන්න", // Know the prices (WhatsApp)
        shareCTA:           "Share",
        flyerTagline:       "🔥 Solo So Auto වෙතින් ඔබට!", // From Solo So Auto to you
        flyerContact:       "📞 +94 77 530 0000",
        flyerFooter:        "solosoauto.com | Colombo-Puttalam Rd, Marawila",
    },

    // ================================================================
    // PROCESS SECTION
    // ================================================================
    process: {
        sectionLabel:   "The Process",
        heading:        "The Solo Standard.",
        subtext:        "වාහනය තෝරාගැනීමේ සිට ඔබේ අතට පත්වන තුරුම අප ඔබ සමගයි.", // We are with you from selection to delivery.
        steps: [
            { num: "01", color: "text-blue-400",   title: "තෝරාගැනීම",  body: "ඔබේ අවශ්‍යතාවයට ගැලපෙනම වාහනය තෝරාගන්න." }, // Selection
            { num: "02", color: "text-purple-400",  title: "ගෙන්වීම",   body: "Japan සහ UK වෙන්දේසි වලින් කෙලින්ම ඔබ වෙනුවෙන්." }, // Sourcing
            { num: "03", color: "text-emerald-400", title: "පරීක්ෂාව",   body: "Detailing, ceramic coating සහ අංග සම්පූර්ණ පරීක්ෂාව." }, // Inspection
            { num: "04", color: "text-amber-400",   title: "භාරදීම",  body: "වගකීම් සහතිකය සමගින් යතුර ඔබේ අතට." }, // Delivery
        ],
    },

    // ================================================================
    // CONCIERGE / ATELIER SECTION
    // ================================================================
    concierge: {
        sectionLabel:   "The Atelier",
        heading1:       "Beyond the",
        heading2:       "Factory Spec.",
        body:           "Our in-house detailing studio and customization workshop allows you to personalize your vehicle before delivery.",
        services: [
            { title: "Ceramic Armor",   body: "9H hardness protection against UV and scratches. Included with every premium sale." },
            { title: "Tech Upgrades",   body: "Apple CarPlay integration, ambient lighting retrofits, and premium audio tuning." },
            { title: "Hybrid Health",   body: "Comprehensive battery analysis and restorative charging for PHEV and EV models." },
        ],
    },

    // ================================================================
    // FINANCIAL PARTNERS SECTION
    // ================================================================
    finance: {
        sectionLabel:   "Finance Made Easy",
        heading:        "ලීසිං සහ ණය පහසුකම්", // Leasing and loan facilities
        partnersCount:  "17+",
        hoverHint:      "Flexible leasing & installment plans available through all partner institutions. Hover to pause.",
    },

    // ================================================================
    // NETWORK / GLOBAL REACH STRIP SECTION
    // ================================================================
    network: {
        label:          "Global Sourcing Network",
    },

    // ================================================================
    // GOOGLE MAPS / LOCATION SECTION
    // ================================================================
    location: {
        sectionLabel:   "Find Us",
        heading:        "අපගේ ප්‍රදර්ශනාගාරය", // Our showroom
        roadHighlight:  "COLOMBO–PUTTALAM MAIN ROAD",
        address:        "Marawila, North Western Province, Sri Lanka",
        directions:     "පාර සොයාගන්න", // Get Directions
        mapEmbedUrl:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8!2d79.8437!3d7.6857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2eda9fb6e3a2f%3A0xa8e3a7bbce1c9a64!2sSolo+So+Auto!5e0!3m2!1sen!2slk!4v1700000000000",
        mapShareLink:   "https://share.google/UTKLqFD5082V1Q4Fp",
        landmarks: [
            "කොළඹ - පුත්තලම ප්‍රධාන පාරේ",
            "මාරවිල හංදිය ඉදිරිපිට",
            "කොළඹ සිට පැය 1.5ක දුරින්",
        ],
    },

    // ================================================================
    // LEGACY / HERITAGE SECTION
    // ================================================================
    legacy: {
        sectionLabel:   "Our Heritage",
        timeline: [
            { year: "2010", title: "ඇරඹුම",       body: "මාරවිල නගරයේ කුඩාවට ඇරඹු පියවර." }, // Inception
            { year: "2016", title: "ව්‍යාප්තිය",     body: "ශ්‍රී ලංකාවේ විශ්වාසවන්තම නාමය බවට පත්වීම." }, // Expansion
            { year: "2020", title: "Atelier Opens", body: "Opened the state-of-the-art Atelier in Marawila." },
            { year: "2023", title: "Global Reach",  body: "Established direct sourcing partners in UK & Japan." },
            { year: "2026", title: "වසර 10යි",      body: "දශකයක අභිමානය සමරමු." }, // 10 Years
        ],
    },

    // ================================================================
    // WEDDING CARS SECTION
    // ================================================================
    wedding: {
        sectionLabel:   "For Your Special Day",
        heading1:       "ඔබේ මංගල", // Your wedding
        heading2:       "දිනය වෙනුවෙන්", // Day for
        body:           "ඔබේ ජීවිතයේ සොඳුරුතම දිනය හැඩකරගන්න, අපෙන් අලුත්ම මාදිලියේ සුඛෝපභෝගී මෝටර් රථ.",
        bookCTA:        "වෙන්කරවා ගන්න", // Book Now
    },

    // ================================================================
    // FOOTER
    // ================================================================
    footer: {
        brandName:      "SOLO-SO AUTO",
        tagline:        "Elevate Your Journey",
        phone:          "+94 77 530 0000",
        location:       "Marawila, Sri Lanka",
        copyright:      "© 2024 Solo So Auto",
        credit:         "Designed & Engineered in Sri Lanka",
        bottomBar:      "Premium Mobility Solutions",
    },

    // ================================================================
    // ANNIVERSARY BADGE (shown in stats & hero)
    // ================================================================
    anniversary: {
        years:          "10",
        label:          "YEARS",
        range:          "2016 – 2026",
        tagline:        "විශිෂ්ටත්වයේ දශකයක්", // A Decade of Excellence
    },

};

// Make globally accessible
window.SITE_CONFIG = SITE_CONFIG;