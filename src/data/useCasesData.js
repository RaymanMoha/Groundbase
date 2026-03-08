export const allUseCases = [
    {
        slug: "site-inspections",
        ind: "Construction",
        title: "Site Inspections & Safety Compliance",
        desc: "Digitize safety checklists, daily progress reports, and quality inspections. AI flags non-compliance patterns and generates safety reports automatically.",
        heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=1400&auto=format&fit=crop",
        challenge: "Paper-based inspections mean critical safety data is often lost, delayed, or simply pencil-whipped without context. It’s impossible to track real-time compliance across multiple sites, leading to increased risk of accidents and costly OSHA fines.",
        solution: "With Groundbase, your field teams complete smart safety checklists right from their mobile devices—even offline. The forms enforce photo logic (e.g., 'Take a photo of the tied-off harness') to ensure genuine compliance. When anomalies are detected, the AI immediately alerts the safety manager and auto-generates the necessary compliance documentation.",
        features: [
            { title: "Smart GPS Verification", desc: "Ensure your inspectors were actually on-site when the form was submitted." },
            { title: "Required Photo Evidence", desc: "Enforce photo logic for critical safety items and instantly capture context." },
            { title: "Automated Corrective Actions", desc: "If an item fails inspection, the system immediately assigns a corrective task." },
            { title: "Real-time Safety Dashboard", desc: "Visualize your safety scorecards across all projects dynamically." }
        ],
        metrics: ["40% fewer safety incidents", "73% faster checklist completion", "100% digital audit trail"]
    },
    {
        slug: "heavy-equipment",
        ind: "Construction",
        title: "Heavy Equipment Tracking & Maintenance",
        desc: "Keep track of heavy machinery, schedule maintenance, and monitor usage across multiple sites. AI predicts part failures before they happen.",
        heroImage: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1400&auto=format&fit=crop",
        challenge: "Heavy equipment is the lifeblood of construction. When machinery breaks down unexpectedly, projects stall indefinitely. Tracking usage hours, fuel consumption, and condition reports via clipboards means maintenance is always reactive, not proactive.",
        solution: "Groundbase digitizes complete equipment workflows. Operators conduct rapid pre-shift and post-shift walkarounds on their phones. Our AI digests these daily reports alongside usage logs to spot deterioration trends and alert your mechanics precisely when preventative service is due.",
        features: [
            { title: "Pre-Shift Walkaround Forms", desc: "Quick daily equipment checks enforced for operators." },
            { title: "Predictive AI Alerts", desc: "Machine learning analyzes report data to predict upcoming part failures." },
            { title: "Defect Photo Logging", desc: "Operators take pictures of wear-and-tear, making it easy for the shop to prep the right parts." },
            { title: "Digital Maintenance Hub", desc: "Track every service record, part replaced, and associated cost." }
        ],
        metrics: ["32% increase in machine uptime", "No more lost paper logs", "Predictable maintenance forecasting"]
    },
    {
        slug: "supply-chain-tracking",
        ind: "Construction",
        title: "Supply Chain & Material Tracking",
        desc: "Optimize construction supply chain flow, procurement, inventory, and stakeholder collaboration for maximum efficiency on-site.",
        heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1400&auto=format&fit=crop",
        challenge: "Material delays are one of the biggest bottlenecks on any project. Without visibility into what materials arrived, their condition, and exactly where they are stored on a chaotic job site, crews spend hours searching for the steel or timber they need.",
        solution: "Use Groundbase to scan barcodes, snap photos of delivery tickets, and log GPS coordinates of material drop points. Everything is updated live to a central dashboard so project managers and foremen always know exactly what inventory they have on hand.",
        features: [
            { title: "Digital Receiving Tickets", desc: "Log deliveries with OCR scanning and immediate photo proof." },
            { title: "GPS Drop-Zone Pinning", desc: "Drop a digital pin on the site map exactly where the materials were unloaded." },
            { title: "Missing Item Triage", desc: "Instantly flag damaged or missing items to procurement via automated alerts." },
            { title: "Supplier Scorecards", desc: "Evaluate vendor reliability using compiled historical delivery data." }
        ],
        metrics: ["Reduced material search time by 60%", "Instant dispute resolution with suppliers", "Zero missing delivery tickets"]
    },
    {
        slug: "farm-monitoring",
        ind: "Agriculture",
        title: "Farm Monitoring & Crop Management",
        desc: "Track crop health, weather conditions, soil data, and farm worker activities across your entire operation. AI predicts issues before they impact yields.",
        heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400&auto=format&fit=crop",
        challenge: "Managing thousands of acres requires immense granular data. Traditional farming often relies on intuition or disconnected ag-tech apps, making it difficult to holistically monitor soil moisture, pest presence, and daily crop growth trends.",
        solution: "Deploy smart digital crop scouting workflows. Agronomists and farmhands input field observations on the Groundbase app, snapping geo-tagged photos of pests or blight. The AI cross-references these reports with historical data to model spread risk and prescribe immediate interventions.",
        features: [
            { title: "Offline Field Scouting", desc: "Gather critical observations without needing a cellular connection in remote fields." },
            { title: "Geo-Tagged Anomalies", desc: "Pinpoint exactly where pest pressure is highest on an interactive farm map." },
            { title: "Historical Yield Correlation", desc: "Identify long-term trends linking field conditions directly to yield outputs." },
            { title: "Automated Chemical Logs", desc: "Ensure EPA compliance with flawless digital logs of pesticide and fertilizer application." }
        ],
        metrics: ["15% higher average crop yield", "Complete audit readiness", "Optimized chemical expenditure"]
    },
    {
        slug: "automated-harvest",
        ind: "Agriculture",
        title: "Automated Harvest Yield Tracking",
        desc: "Streamline harvest logistics from field to processing. Predict yields, track worker productivity, and automate supply chain compliance reports.",
        heroImage: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?q=80&w=1400&auto=format&fit=crop",
        challenge: "Harvest season is frantic. Keeping track of how many bins were picked, by which crew, from what specific grove—and logging all that correctly onto a paper manifest—is prone to massive human error and costly accounting disputes.",
        solution: "Workers use a customized Groundbase form on an iPad or phone to assign QR/barcodes to bins as they are loaded onto trucks. Payment piece-rates are automatically calculated, and the packing house gets immediate visibility into incoming volume and quality.",
        features: [
            { title: "Rapid Barcode Scanning", desc: "Link specific crates to specific crews in a fraction of a second." },
            { title: "Automated Piece-Rate Calculation", desc: "Feed accurate data directly to your payroll software for seasonal workers." },
            { title: "Real-time Transport Manifests", desc: "Know exactly what is on the truck before it arrives at the processing facility." },
            { title: "Yield Heatmaps", desc: "Visualize which sections of the field outperformed expectations." }
        ],
        metrics: ["Eliminated payroll discrepancies", "Real-time packed volume forecasting", "Drastic reduction in spoiled loads"]
    },
    {
        slug: "fleet-management",
        ind: "Logistics",
        title: "Delivery Tracking & Fleet Management",
        desc: "Monitor deliveries, track driver performance, and manage multi-hub inventory in real-time. AI optimizes routes and predicts delivery delays.",
        heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1400&auto=format&fit=crop",
        challenge: "Once a driver leaves the depot, visibility usually vanishes until they return or a customer calls to complain. Without standardized proof-of-delivery or incident reporting, reconciling failed drops or vehicle issues takes days.",
        solution: "Your drivers use the Groundbase app to follow a digital run sheet. They capture e-signatures, photograph dropped packages, and submit instant incident reports if a vehicle breaks down. Our AI correlates drop times automatically against expected SLAs.",
        features: [
            { title: "Impenetrable Proof-of-Delivery", desc: "Capture signatures, photos, and exact GPS coordinates simultaneously." },
            { title: "Driver Vehicle Inspection Reports (DVIR)", desc: "Mandatory digital vehicle checks before keys turn in the ignition." },
            { title: "Instant Incident Reporting", desc: "Drivers can log traffic, delays, or accidents with voice-to-text dictation." },
            { title: "Auto-calculated SLA Metrics", desc: "Dashboard tracks on-time drop percentages automatically without manual entry." }
        ],
        metrics: ["Reduced customer delivery disputes by 80%", "Complete DOT inspection compliance", "Faster turnaround on fleet maintenance"]
    },
    {
        slug: "warehouse-audits",
        ind: "Logistics",
        title: "Warehouse Safety Audits",
        desc: "Digital audits for warehouse condition, loading dock safety, and inventory accuracy. AI spots bottlenecks in your fulfillment operations.",
        heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1400&auto=format&fit=crop",
        challenge: "Warehouses are high-velocity environments with immense safety risks. Forklift collisions, blocked fire exits, and damaged racking are rarely caught before something goes seriously wrong if you rely on monthly paper audits.",
        solution: "Equip floor managers with Groundbase for daily digital walk-throughs. If they spot a damaged rack or a blocked exit, they snap a photo. The system creates a ticket, alerts maintenance, and tracks time-to-resolution, keeping the warehouse OSHA-compliant constantly.",
        features: [
            { title: "Dynamic Checklist Generation", desc: "Forms change based on current operations (e.g., peak season protocols)." },
            { title: "Forklift Safety Checks", desc: "Logged start-of-shift audits for all material handling equipment." },
            { title: "Hazard Escalation Logic", desc: "High-risk items automatically SMS the general manager." },
            { title: "Visual Dashboarding", desc: "See your safety index score across all regional warehouses." }
        ],
        metrics: ["Eliminated multi-day ticket resolution times", "Saved 15 hours per week on compliance reporting", "Maintained 100% OSHA readiness"]
    },
    {
        slug: "tenant-management",
        ind: "Property Management",
        title: "Maintenance & Tenant Management",
        desc: "Digitize property inspections, maintenance workflows, and tenant communications. AI prioritizes requests and predicts maintenance needs.",
        heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop",
        challenge: "Coordinating move-in/move-out inspections, tenant maintenance requests, and vendor dispatches is an administrative nightmare of back-and-forth emails, lost photos, and manual data entry into property software.",
        solution: "Groundbase unifies the property workflow. Inspectors conduct photo-heavy unit walks on a tablet, which immediately generates structured reports comparing previous conditions to current ones. Maintenance crews receive prioritized, geolocated work orders instantly.",
        features: [
            { title: "Side-by-side Photo Comparison", desc: "Easily compare the condition of a room on move-in vs move-out to standardize deposit deductions." },
            { title: "Vendor Dispatch Automation", desc: "Specific issues (e.g. plumbing) automatically forward to the right 3rd-party vendor." },
            { title: "Custom Logic Workflows", desc: "If 'Mold' is selected, immediately require 3 photos and escalate the ticket priority." },
            { title: "Tenant Signature Capture", desc: "Finalize inspections on the spot with digital sign-offs." }
        ],
        metrics: ["Reduced inspection time by 50%", "Eliminated manual vendor follow-ups", "Recovered 30% more legitimate damages"]
    },
    {
        slug: "facilities-tracking",
        ind: "Property Management",
        title: "Janitorial & Facilities Service Tracking",
        desc: "Track cleaning operations, supplies inventory, and staff schedules. Provide photo-verified proof of service for key stakeholder reporting.",
        heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1400&auto=format&fit=crop",
        challenge: "Validating that contract cleaning crews have maintained commercial or residential spaces to the expected standard is difficult. Stakeholders often complain about incomplete services, leading to contractual disputes with facility management.",
        solution: "Crews check into zones via geofence or QR code with Groundbase. Upon completing a zone, they must fill out a rapid verified form, submitting wide-angle photos of the cleaned areas to provide undeniable proof of service.",
        features: [
            { title: "QR Code Check-ins", desc: "Ensure crews are physically present at the required facility zone." },
            { title: "Verified Proof-of-Service", desc: "Mandatory photo captures that automatically share with stakeholders via custom portals." },
            { title: "Supply Depletion Tracking", desc: "Crews log when consumables (soap, paper) are low, automating the reorder process." },
            { title: "Quality Control Audits", desc: "Supervisors use randomized digital scorecards to maintain high vendor standards." }
        ],
        metrics: ["100% indisputable proof of service", "Reduced client service complaints by 65%", "Automated supply chain reordering"]
    },
    {
        slug: "in-home-care",
        ind: "Healthcare",
        title: "In-Home Care Mobile Workforce Tracking",
        desc: "Empower home healthcare workers with digital patient forms, secure offline data collection, and GPS-verified visits for seamless compliance.",
        heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1400&auto=format&fit=crop",
        challenge: "Home health aides work entirely asynchronously, visiting patients in environments with poor connectivity. Securing accurate clinical notes, ensuring visits actually occurred within specific windows, and maintaining HIPAA compliance is a massive logistical challenge.",
        solution: "Groundbase gives aides a resilient, offline-first app. They log vitals, clinical observations, and capture patient signatures without needing a cell signal. When they regain connectivity, the secure data is end-to-end encrypted and pushed immediately to the central CMS.",
        features: [
            { title: "Offline-First Reliability", desc: "Never lose a clinical note, even in rural areas or dead zones." },
            { title: "Electronic Visit Verification (EVV)", desc: "Automatically match GPS coordinates and timestamps to Medicaid compliance regulations." },
            { title: "Logic-Branching Assessments", desc: "Forms adapt dynamically—e.g., if a high temperature is entered, it prompts for secondary symptom checks." },
            { title: "Enterprise-grade Encryption", desc: "Ensure all sensitive patient data remains strictly compliant with healthcare regulations." }
        ],
        metrics: ["100% EVV compliance", "Zero lost clinical records", "Saved 2 hours of admin time per aide per day"]
    },
    {
        slug: "medical-equipment",
        ind: "Healthcare",
        title: "Medical Equipment Maintenance Logs",
        desc: "Digitize the inspection and calibration records for critical medical devices, automatically alerting technicians of upcoming service requirements.",
        heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop",
        challenge: "Hospitals cannot afford equipment downtime—a failing MRI or ventilator puts lives at risk. Managing the rigorous calibration schedules, logging repairs properly for FDA/Joint Commission audits, and tracking the movement of expensive mobile units is incredibly tedious on paper.",
        solution: "Technicians scan asset tags on medical equipment using their phones. Groundbase immediately brings up the entire service history and the exact calibration protocols required for that model. The system flags anything out of tolerance instantly.",
        features: [
            { title: "Barcode Asset Lookups", desc: "Instantly pull up the specific service history of any machine in the hospital." },
            { title: "Rigorous Step-by-Step Calibration", desc: "Ensure technicians follow the exact OEM service manual protocols with forced digital checks." },
            { title: "Automated Compliance Audits", desc: "Generate perfectly formatted maintenance logs when regulators request them." },
            { title: "Downtime Heatmaps", desc: "Analyze which brands or models of equipment represent the highest total cost of ownership." }
        ],
        metrics: ["Passed 100% of Joint Commission mock audits", "Reduced clinical equipment downtime by 24%", "Total asset lifecycle visibility"]
    },
    {
        slug: "quality-control",
        ind: "Manufacturing",
        title: "Quality Control & Defect Tracking",
        desc: "Perform mobile quality checks on the assembly line. Vision AI automatically detects and logs defects, generating actionable shift reports.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop",
        challenge: "In fast-paced manufacturing, defects must be caught locally on the line. But when QA relies on manual tallies and end-of-day spreadsheet entry, management only discovers a manufacturing flaw after hundreds of defective units have already been produced.",
        solution: "Floor inspectors use tablets armed with Groundbase. They log batch checks dynamically. If tolerances fail, the system requires a photo. Our backend AI analyzes these defect photos over time to categorize the exact type of flaw (e.g. scratch vs. dent) without human classification.",
        features: [
            { title: "Rapid Batch Audits", desc: "Minimal-tap interfaces designed for speed on the factory floor." },
            { title: "Real-time Defect Escalation", desc: "If a defect threshold is breached, the line manager receives an instant alert to halt production." },
            { title: "Pareto Analysis Dashboards", desc: "Automatically visualize which specific defects are causing the majority of scrap." },
            { title: "Vision AI Integration", desc: "Auto-tag defect photos for specific root causes, reducing inspector manual entry." }
        ],
        metrics: ["Cut scrap costs by 18%", "Reduced defect reporting delay from hours to seconds", "Significantly improved standard operating procedures"]
    },
    {
        slug: "shift-handovers",
        ind: "Manufacturing",
        title: "Shift Handovers & Incident Reporting",
        desc: "Ensure smooth transitions between shifts with structured digital handovers. Log incidents quickly with voice-to-text and AI summarization.",
        heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
        challenge: "When Shift A hands over to Shift B, critical operational context—like a malfunctioning sensor or a low material stockpile—is often miscommunicated. This leads to dangerous operational blind spots and lost productivity in the first hours of a shift.",
        solution: "Supervisors dictate highly detailed shift turnover notes directly into Groundbase. The AI synthesizes the long voice notes into structured, bulleted action items. Shift B logs in, reads the precise AI-generated summary, acknowledges the handover digitally, and immediately gets to work.",
        features: [
            { title: "AI Voice-to-Text Structuring", desc: "Don't type—just speak your report and let AI categorize the issues." },
            { title: "Digital Handover Sign-offs", desc: "Create an indisputable record that the incoming shift acknowledged the ongoing issues." },
            { title: "Instant Incident Logs", desc: "Capture near-misses or structural issues quickly, assigning immediate preventative actions." },
            { title: "Cross-Shift Trend Analysis", desc: "Discover if certain recurring issues exclusively happen on night shifts." }
        ],
        metrics: ["Saved 45 minutes of mid-shift communication daily", "Substantially lowered accident risk during transitions", "Perfect operational continuity"]
    }
];
