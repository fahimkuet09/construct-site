import type { LanguageCode } from "@/lib/site";

/**
 * Translation dictionary for the site chrome — navigation, buttons, form
 * labels, section headings and everything else that frames the content.
 *
 * Long-form editorial copy (project overviews, news articles, job specs) is
 * held in `src/data/` and is English-only in this build. Adding Bangla there
 * means adding a parallel field per record, not extending this file.
 */
export type Dict = typeof en;

const en = {
  // --- hero
  "hero.badge": "Since 1974",
  "hero.badgeText": "Civil engineering across Bangladesh",
  "hero.line1": "Engineering the",
  "hero.line2": "ground beneath",
  "hero.line3": "Bangladesh",
  "hero.lead":
    "We build the river crossings, corridors, tunnels and ports the country depends on — taking on the projects where the delta makes the engineering genuinely difficult and failure is not an option.",
  "hero.monitoring": "Live monitoring",
  "hero.settlement": "Settlement — 15 mm limit",
  "hero.availability": "Corridor availability",
  "hero.availabilityNote": "Across live-carriageway schemes",
  "hero.scroll": "Scroll",

  // --- stat labels
  "stat.years": "Years of delivery",
  "stat.yearsNote": "Since 1974",
  "stat.districts": "Districts",
  "stat.districtsNote": "Of 64 nationwide",
  "stat.portfolio": "Portfolio under management",
  "stat.portfolioNote": "Live contract value",
  "stat.people": "People",
  "stat.peopleNote": "Engineers, operatives, specialists",
  "unit.crore": " cr",

  // --- navigation & header
  "nav.services": "Services",
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.careers": "Careers",
  "nav.news": "News",
  "nav.contact": "Contact",
  "nav.startProject": "Start a project",
  "nav.menu": "Menu",
  "nav.openMenu": "Open navigation menu",
  "nav.closeMenu": "Close navigation menu",
  "nav.explore": "Explore",
  "nav.capabilities": "Capabilities",
  "nav.sectors": "Sectors",
  "nav.bySector": "By sector",
  "nav.moreSectors": "More sectors",
  "nav.theCompany": "The company",
  "nav.standards": "Standards",

  // --- search
  "search.open": "Search the site",
  "search.title": "Search Meghna Construct",
  "search.description": "Search projects, capabilities, news and open positions.",
  "search.placeholder": "Search projects, capabilities, news…",
  "search.label": "Search query",
  "search.suggestions": "Try searching for",
  "search.noResults": "No results for",
  "search.noResultsHint": "Try a sector, a district, or a project name.",
  "search.groupProjects": "Projects",
  "search.groupCapabilities": "Capabilities",
  "search.groupNews": "News",
  "search.groupCareers": "Careers",
  "search.groupPages": "Pages",

  // --- language switcher
  "lang.change": "Change language",
  "lang.current": "currently",
  "lang.note": "Switches the site interface. Article and project text stays in English.",

  // --- common actions
  "cta.viewAllProjects": "View all projects",
  "cta.allCapabilities": "All capabilities",
  "cta.allNews": "All news",
  "cta.exploreProjects": "Explore our projects",
  "cta.whoWeAre": "Who we are",
  "cta.readStory": "Read the story",
  "cta.exploreCapability": "Explore capability",
  "cta.talkToTeam": "Talk to our team",
  "cta.moreAbout": "More about Meghna",
  "cta.backToHome": "Back to home",
  "cta.seePositions": "See all positions",
  "cta.applyRole": "Apply for this role",
  "cta.askDirectly": "Ask us directly",
  "cta.clearFilters": "Clear filters",
  "cta.sendEnquiry": "Send enquiry",
  "cta.subscribe": "Subscribe",
  "cta.submitApplication": "Submit application",

  // --- section eyebrows & headings (home)
  "home.clients":
    "Trusted by the authorities and operators who commission critical infrastructure",
  "home.about.eyebrow": "Our Mission",
  "home.services.eyebrow": "What we build",
  "home.services.title": "Six capabilities, one delivery model",
  "home.projects.eyebrow": "Selected work",
  "home.projects.title": "Projects that could not be allowed to fail",
  "home.process.eyebrow": "How we deliver",
  "home.process.title": "Six stages, one accountable team",
  "home.map.eyebrow": "Where we work",
  "home.map.title": "Sixty-one districts, one delivery standard",
  "home.safety.eyebrow": "Safety & quality",
  "home.equipment.eyebrow": "Plant & fleet",
  "home.testimonials.eyebrow": "Client verdict",
  "home.news.eyebrow": "Newsroom",
  "home.careers.eyebrow": "Careers",
  "home.contact.eyebrow": "Start a conversation",

  // --- labels
  "label.value": "Value",
  "label.duration": "Duration",
  "label.year": "Year",
  "label.sector": "Sector",
  "label.status": "Status",
  "label.showing": "Showing",
  "label.of": "of",
  "label.projects": "projects",
  "label.positions": "positions",
  "label.minRead": "min read",
  "label.home": "Home",
  "label.filterPortfolio": "Filter the portfolio",
  "label.openPositions": "Open positions",
  "label.liveRoles": "live roles",
  "label.inFleet": "in fleet",
  "label.postedOn": "Posted",

  // --- forms
  "form.firstName": "First name",
  "form.lastName": "Last name",
  "form.fullName": "Full name",
  "form.email": "Work email",
  "form.phone": "Phone",
  "form.organisation": "Organisation",
  "form.enquiryType": "Type of enquiry",
  "form.message": "How can we help?",
  "form.select": "Select an option…",
  "form.optional": "Optional",
  "form.consent":
    "I am happy for Meghna Construct to use these details to respond to my enquiry, in line with the privacy notice.",
  "form.sending": "Sending…",
  "form.demoNote":
    "Demo build — submissions are simulated and no data leaves the browser.",

  // --- footer
  "footer.briefing": "Quarterly briefing",
  "footer.briefingTitle": "Infrastructure thinking, four times a year",
  "footer.certified": "Independently certified",
  "footer.rights": "All rights reserved.",
  "footer.capabilities": "Capabilities",
  "footer.company": "Company",
  "footer.workWithUs": "Work with us",
  "footer.emailPlaceholder": "you@organisation.com",
} as const;

const bn: Record<keyof Dict, string> = {
  // --- hero
  "hero.badge": "১৯৭৪ সাল থেকে",
  "hero.badgeText": "সারা বাংলাদেশে পুরকৌশল",
  "hero.line1": "বাংলাদেশের ভিত",
  "hero.line2": "গড়ছি প্রকৌশলে,",
  "hero.line3": "প্রজন্মের জন্য",
  "hero.lead":
    "দেশের নদী সেতু, মহাসড়ক, টানেল ও বন্দর আমরা নির্মাণ করি — যেসব প্রকল্পে ব-দ্বীপের মাটি প্রকৌশলকে কঠিন করে তোলে এবং ব্যর্থ হওয়ার কোনো সুযোগ থাকে না।",
  "hero.monitoring": "সরাসরি পর্যবেক্ষণ",
  "hero.settlement": "মাটির অবনমন — সীমা ১৫ মিলিমিটার",
  "hero.availability": "সড়ক চালু ছিল",
  "hero.availabilityNote": "চলমান যান চলাচলের প্রকল্পগুলোতে",
  "hero.scroll": "স্ক্রল",

  // --- stat labels
  "stat.years": "বছরের অভিজ্ঞতা",
  "stat.yearsNote": "১৯৭৪ সাল থেকে",
  "stat.districts": "জেলা",
  "stat.districtsNote": "৬৪টির মধ্যে",
  "stat.portfolio": "চলমান প্রকল্পমূল্য",
  "stat.portfolioNote": "বর্তমান চুক্তিমূল্য",
  "stat.people": "কর্মী",
  "stat.peopleNote": "প্রকৌশলী, কারিগর ও বিশেষজ্ঞ",
  "unit.crore": " কোটি",

  // --- navigation & header
  "nav.services": "সেবাসমূহ",
  "nav.projects": "প্রকল্প",
  "nav.about": "আমাদের সম্পর্কে",
  "nav.careers": "ক্যারিয়ার",
  "nav.news": "সংবাদ",
  "nav.contact": "যোগাযোগ",
  "nav.startProject": "প্রকল্প শুরু করুন",
  "nav.menu": "মেনু",
  "nav.openMenu": "মেনু খুলুন",
  "nav.closeMenu": "মেনু বন্ধ করুন",
  "nav.explore": "দেখুন",
  "nav.capabilities": "সক্ষমতা",
  "nav.sectors": "খাত",
  "nav.bySector": "খাত অনুযায়ী",
  "nav.moreSectors": "আরও খাত",
  "nav.theCompany": "প্রতিষ্ঠান",
  "nav.standards": "মান ও সনদ",

  // --- search
  "search.open": "সাইটে খুঁজুন",
  "search.title": "মেঘনা কনস্ট্রাক্টে খুঁজুন",
  "search.description": "প্রকল্প, সক্ষমতা, সংবাদ ও নিয়োগ বিজ্ঞপ্তি খুঁজুন।",
  "search.placeholder": "প্রকল্প, সক্ষমতা, সংবাদ খুঁজুন…",
  "search.label": "অনুসন্ধান",
  "search.suggestions": "যা খুঁজে দেখতে পারেন",
  "search.noResults": "কোনো ফলাফল নেই",
  "search.noResultsHint": "কোনো খাত, জেলা বা প্রকল্পের নাম লিখে দেখুন।",
  "search.groupProjects": "প্রকল্প",
  "search.groupCapabilities": "সক্ষমতা",
  "search.groupNews": "সংবাদ",
  "search.groupCareers": "ক্যারিয়ার",
  "search.groupPages": "পাতা",

  // --- language switcher
  "lang.change": "ভাষা পরিবর্তন",
  "lang.current": "বর্তমানে",
  "lang.note": "সাইটের ইন্টারফেস পরিবর্তন হবে। প্রকল্প ও সংবাদের বিবরণ ইংরেজিতেই থাকবে।",

  // --- common actions
  "cta.viewAllProjects": "সব প্রকল্প দেখুন",
  "cta.allCapabilities": "সব সক্ষমতা",
  "cta.allNews": "সব সংবাদ",
  "cta.exploreProjects": "আমাদের প্রকল্প দেখুন",
  "cta.whoWeAre": "আমরা কারা",
  "cta.readStory": "বিস্তারিত পড়ুন",
  "cta.exploreCapability": "সক্ষমতা দেখুন",
  "cta.talkToTeam": "আমাদের সাথে কথা বলুন",
  "cta.moreAbout": "মেঘনা সম্পর্কে আরও",
  "cta.backToHome": "হোমে ফিরে যান",
  "cta.seePositions": "সব পদ দেখুন",
  "cta.applyRole": "এই পদে আবেদন করুন",
  "cta.askDirectly": "সরাসরি জিজ্ঞাসা করুন",
  "cta.clearFilters": "ফিল্টার মুছুন",
  "cta.sendEnquiry": "বার্তা পাঠান",
  "cta.subscribe": "সাবস্ক্রাইব",
  "cta.submitApplication": "আবেদন জমা দিন",

  // --- section eyebrows & headings (home)
  "home.clients":
    "দেশের গুরুত্বপূর্ণ অবকাঠামো যাঁরা নির্মাণের দায়িত্ব দেন, তাঁদের আস্থা",
  "home.about.eyebrow": "আমাদের লক্ষ্য",
  "home.services.eyebrow": "আমরা যা নির্মাণ করি",
  "home.services.title": "ছয়টি সক্ষমতা, একটি ডেলিভারি মডেল",
  "home.projects.eyebrow": "নির্বাচিত কাজ",
  "home.projects.title": "যে প্রকল্পগুলো ব্যর্থ হওয়ার সুযোগ ছিল না",
  "home.process.eyebrow": "আমরা যেভাবে কাজ করি",
  "home.process.title": "ছয়টি ধাপ, একটি দায়বদ্ধ দল",
  "home.map.eyebrow": "কোথায় কাজ করি",
  "home.map.title": "একষট্টি জেলা, একটিই মান",
  "home.safety.eyebrow": "নিরাপত্তা ও গুণমান",
  "home.equipment.eyebrow": "যন্ত্রপাতি ও বহর",
  "home.testimonials.eyebrow": "গ্রাহকের মতামত",
  "home.news.eyebrow": "সংবাদকক্ষ",
  "home.careers.eyebrow": "ক্যারিয়ার",
  "home.contact.eyebrow": "কথা শুরু করুন",

  // --- labels
  "label.value": "চুক্তিমূল্য",
  "label.duration": "সময়কাল",
  "label.year": "সাল",
  "label.sector": "খাত",
  "label.status": "অবস্থা",
  "label.showing": "দেখানো হচ্ছে",
  "label.of": "এর মধ্যে",
  "label.projects": "প্রকল্প",
  "label.positions": "পদ",
  "label.minRead": "মিনিটের পাঠ",
  "label.home": "হোম",
  "label.filterPortfolio": "প্রকল্প ফিল্টার করুন",
  "label.openPositions": "উন্মুক্ত পদ",
  "label.liveRoles": "টি পদ খালি",
  "label.inFleet": "টি বহরে",
  "label.postedOn": "প্রকাশিত",

  // --- forms
  "form.firstName": "নাম",
  "form.lastName": "পদবি",
  "form.fullName": "পূর্ণ নাম",
  "form.email": "অফিসিয়াল ইমেইল",
  "form.phone": "ফোন",
  "form.organisation": "প্রতিষ্ঠান",
  "form.enquiryType": "জিজ্ঞাসার ধরন",
  "form.message": "আমরা কীভাবে সাহায্য করতে পারি?",
  "form.select": "একটি অপশন বাছুন…",
  "form.optional": "ঐচ্ছিক",
  "form.consent":
    "আমার জিজ্ঞাসার উত্তর দিতে মেঘনা কনস্ট্রাক্ট এই তথ্য ব্যবহার করতে পারে, গোপনীয়তা নীতি অনুযায়ী।",
  "form.sending": "পাঠানো হচ্ছে…",
  "form.demoNote":
    "ডেমো সংস্করণ — জমা দেওয়া তথ্য সিমুলেটেড, কোনো তথ্য ব্রাউজারের বাইরে যায় না।",

  // --- footer
  "footer.briefing": "ত্রৈমাসিক বুলেটিন",
  "footer.briefingTitle": "বছরে চারবার অবকাঠামো ভাবনা",
  "footer.certified": "স্বাধীনভাবে সনদপ্রাপ্ত",
  "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "footer.capabilities": "সক্ষমতা",
  "footer.company": "প্রতিষ্ঠান",
  "footer.workWithUs": "আমাদের সাথে কাজ",
  "footer.emailPlaceholder": "you@organisation.com",
};

export const dictionaries: Record<LanguageCode, Record<keyof Dict, string>> = {
  en,
  bn,
};

export type TranslationKey = keyof Dict;

/** Bangla digits, used for counters and tabular figures when bn is active. */
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function localiseDigits(value: string, locale: LanguageCode) {
  if (locale !== "bn") return value;
  return value.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}
