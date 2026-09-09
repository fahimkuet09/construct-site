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
  "hero.badge": "Since 2017",
  "hero.badgeText": "Structural steel across Bangladesh",
  "hero.line1": "Concept to",
  "hero.line2": "construction,",
  "hero.line3": "in steel",
  "hero.lead":
    "We design, fabricate and erect pre-engineered steel buildings — industrial, commercial, residential and agro-based — under one accountable team, from the first site visit to handover.",
  "hero.monitoring": "Engineering turnaround",
  "hero.settlement": "Calculation & firm quote",
  "hero.availability": "Projects delivered",
  "hero.availabilityNote": "Ongoing and handed over",
  "hero.scroll": "Scroll",

  // --- stat labels
  "stat.years": "Years of experience",
  "stat.yearsNote": "Since 2017",
  "stat.projects": "Projects delivered",
  "stat.projectsNote": "Ongoing and handed over",
  "stat.clients": "Satisfied clients",
  "stat.clientsNote": "Across Bangladesh",
  "stat.categories": "Building categories",
  "stat.categoriesNote": "Industrial, commercial, residential, agro",
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
  "nav.sectors": "Categories",
  "nav.bySector": "By category",
  "nav.moreSectors": "More categories",
  "nav.theCompany": "The company",
  "nav.standards": "Standards",

  // --- search
  "search.open": "Search the site",
  "search.title": "Search Universal Structural Steel",
  "search.description": "Search projects, services, news and open positions.",
  "search.placeholder": "Search projects, services, news…",
  "search.label": "Search query",
  "search.suggestions": "Try searching for",
  "search.noResults": "No results for",
  "search.noResultsHint": "Try a building category, a client name, or a project.",
  "search.groupProjects": "Projects",
  "search.groupCapabilities": "Services",
  "search.groupNews": "News",
  "search.groupCareers": "Careers",
  "search.groupPages": "Pages",

  // --- language switcher
  "lang.change": "Change language",
  "lang.current": "currently",
  "lang.note": "Switches the site interface. Article and project text stays in English.",

  // --- common actions
  "cta.viewAllProjects": "View all projects",
  "cta.allCapabilities": "All services",
  "cta.allNews": "All news",
  "cta.exploreProjects": "Explore our projects",
  "cta.whoWeAre": "Who we are",
  "cta.readStory": "Read the story",
  "cta.exploreCapability": "Explore this service",
  "cta.talkToTeam": "Talk to our team",
  "cta.moreAbout": "More about us",
  "cta.backToHome": "Back to home",
  "cta.seePositions": "See all positions",
  "cta.applyRole": "Apply for this role",
  "cta.askDirectly": "Ask us directly",
  "cta.clearFilters": "Clear filters",
  "cta.sendEnquiry": "Send enquiry",
  "cta.subscribe": "Subscribe",
  "cta.submitApplication": "Submit application",

  // --- section eyebrows & headings (home)
  "home.clients": "Trusted by manufacturers and developers across Bangladesh",
  "home.about.eyebrow": "Our Mission",
  "home.services.eyebrow": "What we build",
  "home.services.title": "Four categories, one delivery model",
  "home.projects.eyebrow": "Selected work",
  "home.projects.title": "Steel structures we've delivered, and structures underway",
  "home.process.eyebrow": "How we deliver",
  "home.process.title": "Four stages, one accountable team",
  "home.map.eyebrow": "Where we work",
  "home.map.title": "Across Dhaka's industrial belt, and beyond",
  "home.safety.eyebrow": "Quality & engineering",
  "home.equipment.eyebrow": "Fabrication capability",
  "home.testimonials.eyebrow": "Client feedback",
  "home.news.eyebrow": "News",
  "home.careers.eyebrow": "Careers",
  "home.contact.eyebrow": "Start a conversation",

  // --- labels
  "label.value": "Value",
  "label.duration": "Duration",
  "label.year": "Year",
  "label.sector": "Category",
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
  "label.inFleet": "in-house",
  "label.postedOn": "Posted",

  // --- forms
  "form.firstName": "First name",
  "form.lastName": "Last name",
  "form.fullName": "Full name",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.organisation": "Organisation",
  "form.enquiryType": "Type of enquiry",
  "form.message": "How can we help?",
  "form.select": "Select an option…",
  "form.optional": "Optional",
  "form.consent":
    "I am happy for Universal Structural Steel Ltd. to use these details to respond to my enquiry, in line with the privacy notice.",
  "form.sending": "Sending…",
  "form.demoNote":
    "Demo build — submissions are simulated and no data leaves the browser.",

  // --- footer
  "footer.briefing": "Project updates",
  "footer.briefingTitle": "Hear about new projects as they happen",
  "footer.certified": "How we build",
  "footer.rights": "All rights reserved.",
  "footer.capabilities": "Services",
  "footer.company": "Company",
  "footer.workWithUs": "Work with us",
  "footer.emailPlaceholder": "you@organisation.com",
} as const;

const bn: Record<keyof Dict, string> = {
  // --- hero
  "hero.badge": "২০১৭ সাল থেকে",
  "hero.badgeText": "সারা বাংলাদেশে স্ট্রাকচারাল স্টিল",
  "hero.line1": "ধারণা থেকে",
  "hero.line2": "নির্মাণ পর্যন্ত,",
  "hero.line3": "স্টিলে",
  "hero.lead":
    "আমরা প্রি-ইঞ্জিনিয়ার্ড স্টিল বিল্ডিং ডিজাইন, ফ্যাব্রিকেশন ও নির্মাণ করি — শিল্প, বাণিজ্যিক, আবাসিক ও কৃষিভিত্তিক — প্রথম সাইট ভিজিট থেকে হস্তান্তর পর্যন্ত একটি দায়বদ্ধ দলের অধীনে।",
  "hero.monitoring": "ইঞ্জিনিয়ারিং সময়",
  "hero.settlement": "হিসাব ও চূড়ান্ত মূল্য",
  "hero.availability": "সম্পন্ন প্রকল্প",
  "hero.availabilityNote": "চলমান ও হস্তান্তরিত",
  "hero.scroll": "স্ক্রল",

  // --- stat labels
  "stat.years": "বছরের অভিজ্ঞতা",
  "stat.yearsNote": "২০১৭ সাল থেকে",
  "stat.projects": "সম্পন্ন প্রকল্প",
  "stat.projectsNote": "চলমান ও হস্তান্তরিত",
  "stat.clients": "সন্তুষ্ট গ্রাহক",
  "stat.clientsNote": "সারা বাংলাদেশে",
  "stat.categories": "ভবনের ধরন",
  "stat.categoriesNote": "শিল্প, বাণিজ্যিক, আবাসিক, কৃষিভিত্তিক",
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
  "nav.sectors": "ধরন",
  "nav.bySector": "ধরন অনুযায়ী",
  "nav.moreSectors": "আরও ধরন",
  "nav.theCompany": "প্রতিষ্ঠান",
  "nav.standards": "মান ও নীতি",

  // --- search
  "search.open": "সাইটে খুঁজুন",
  "search.title": "ইউনিভার্সাল স্ট্রাকচারাল স্টিলে খুঁজুন",
  "search.description": "প্রকল্প, সেবা, সংবাদ ও নিয়োগ বিজ্ঞপ্তি খুঁজুন।",
  "search.placeholder": "প্রকল্প, সেবা, সংবাদ খুঁজুন…",
  "search.label": "অনুসন্ধান",
  "search.suggestions": "যা খুঁজে দেখতে পারেন",
  "search.noResults": "কোনো ফলাফল নেই",
  "search.noResultsHint": "ভবনের ধরন, গ্রাহকের নাম বা প্রকল্পের নাম লিখে দেখুন।",
  "search.groupProjects": "প্রকল্প",
  "search.groupCapabilities": "সেবা",
  "search.groupNews": "সংবাদ",
  "search.groupCareers": "ক্যারিয়ার",
  "search.groupPages": "পাতা",

  // --- language switcher
  "lang.change": "ভাষা পরিবর্তন",
  "lang.current": "বর্তমানে",
  "lang.note": "সাইটের ইন্টারফেস পরিবর্তন হবে। প্রকল্প ও সংবাদের বিবরণ ইংরেজিতেই থাকবে।",

  // --- common actions
  "cta.viewAllProjects": "সব প্রকল্প দেখুন",
  "cta.allCapabilities": "সব সেবা",
  "cta.allNews": "সব সংবাদ",
  "cta.exploreProjects": "আমাদের প্রকল্প দেখুন",
  "cta.whoWeAre": "আমরা কারা",
  "cta.readStory": "বিস্তারিত পড়ুন",
  "cta.exploreCapability": "সেবাটি দেখুন",
  "cta.talkToTeam": "আমাদের সাথে কথা বলুন",
  "cta.moreAbout": "আরও জানুন",
  "cta.backToHome": "হোমে ফিরে যান",
  "cta.seePositions": "সব পদ দেখুন",
  "cta.applyRole": "এই পদে আবেদন করুন",
  "cta.askDirectly": "সরাসরি জিজ্ঞাসা করুন",
  "cta.clearFilters": "ফিল্টার মুছুন",
  "cta.sendEnquiry": "বার্তা পাঠান",
  "cta.subscribe": "সাবস্ক্রাইব",
  "cta.submitApplication": "আবেদন জমা দিন",

  // --- section eyebrows & headings (home)
  "home.clients": "সারা বাংলাদেশের নির্মাতা ও ডেভেলপারদের আস্থা",
  "home.about.eyebrow": "আমাদের লক্ষ্য",
  "home.services.eyebrow": "আমরা যা নির্মাণ করি",
  "home.services.title": "চারটি ধরন, একটি ডেলিভারি মডেল",
  "home.projects.eyebrow": "নির্বাচিত কাজ",
  "home.projects.title": "সম্পন্ন ও চলমান স্টিল কাঠামো",
  "home.process.eyebrow": "আমরা যেভাবে কাজ করি",
  "home.process.title": "চারটি ধাপ, একটি দায়বদ্ধ দল",
  "home.map.eyebrow": "কোথায় কাজ করি",
  "home.map.title": "ঢাকার শিল্পাঞ্চল জুড়ে, এবং তার বাইরেও",
  "home.safety.eyebrow": "গুণমান ও প্রকৌশল",
  "home.equipment.eyebrow": "ফ্যাব্রিকেশন সক্ষমতা",
  "home.testimonials.eyebrow": "গ্রাহকের মতামত",
  "home.news.eyebrow": "সংবাদ",
  "home.careers.eyebrow": "ক্যারিয়ার",
  "home.contact.eyebrow": "কথা শুরু করুন",

  // --- labels
  "label.value": "মূল্য",
  "label.duration": "সময়কাল",
  "label.year": "সাল",
  "label.sector": "ধরন",
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
  "label.inFleet": "নিজস্ব",
  "label.postedOn": "প্রকাশিত",

  // --- forms
  "form.firstName": "নাম",
  "form.lastName": "পদবি",
  "form.fullName": "পূর্ণ নাম",
  "form.email": "ইমেইল",
  "form.phone": "ফোন",
  "form.organisation": "প্রতিষ্ঠান",
  "form.enquiryType": "জিজ্ঞাসার ধরন",
  "form.message": "আমরা কীভাবে সাহায্য করতে পারি?",
  "form.select": "একটি অপশন বাছুন…",
  "form.optional": "ঐচ্ছিক",
  "form.consent":
    "আমার জিজ্ঞাসার উত্তর দিতে ইউনিভার্সাল স্ট্রাকচারাল স্টিল লিমিটেড এই তথ্য ব্যবহার করতে পারে, গোপনীয়তা নীতি অনুযায়ী।",
  "form.sending": "পাঠানো হচ্ছে…",
  "form.demoNote":
    "ডেমো সংস্করণ — জমা দেওয়া তথ্য সিমুলেটেড, কোনো তথ্য ব্রাউজারের বাইরে যায় না।",

  // --- footer
  "footer.briefing": "প্রকল্প আপডেট",
  "footer.briefingTitle": "নতুন প্রকল্পের খবর সরাসরি পান",
  "footer.certified": "আমরা যেভাবে নির্মাণ করি",
  "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "footer.capabilities": "সেবা",
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
