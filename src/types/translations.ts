interface FeatureItem {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    stats: {
        number: string;
        label: string;
    };
}

interface BenefitItem {
    title: string;
    description: string;
    stats: string;
}

interface IdealForItem {
    title: string;
    description: string;
    features: string[];
}

interface ServiceItem {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    stats: {
        number: string;
        label: string;
    };
}

export interface Translations {
    nav: {
        schools: string;
        k12Schools: string;
        tailoredExtras: string;
        trainingAcademies: string;
        productGuides: string;
        aboutUs: string;
        contact: string;
        requestDemo: string;
        english: string;
        french: string;
    };
    hero: {
        title: {
            part1: string;
            innovation: string;
            part2: string;
            future: string;
        };
        subtitle: string;
        explorePrograms: string;
        bookDemo: string;
    };
    customerSegments: {
        title: string;
        subtitle: string;
        schools: {
            title: string;
            description: string;
            features: string[];
        };
        training: {
            title: string;
            description: string;
            features: string[];
        };
        userGuides: {
            title: string;
            description: string;
            features: string[];
        };
    };
    footer: {
        description: string;
        quickLinks: string;
        contactInfo: string;
        madeInCanada: string;
        forCanadianInstitutions: string;
        allRightsReserved: string;
    };
    about: {
        title: string;
        subtitle: string;
        whoWeAre: string;
        description1: string;
        description2: string;
        description3: string;
        ourEthics: string;
        ethicsSubtitle: string;
        values: {
            innovation: {
                title: string;
                description: string;
            };
            integrity: {
                title: string;
                description: string;
            };
            customerFirst: {
                title: string;
                description: string;
            };
            excellence: {
                title: string;
                description: string;
            };
        };
        leadershipTeam: string;
        leadershipSubtitle: string;
        team: Array<{
            name: string;
            role: string;
            briefDesc: string;
            detailedDesc: string[];
        }>;
    };
    story: {
        title: string;
        history: {
            title: string;
            content: string;
        };
        mission: {
            title: string;
            content: string;
        };
        values: {
            title: string;
            content: string;
        };
    };
    contact: {
        title: string;
        us: string;
        subtitle: string;
        requestDemo: string;
        demo: string;
        formSubtitle: string;
        getInTouch: string;
        touch: string;
        getInTouchSubtitle: string;
        emailUs: string;
        callUs: string;
        visitUs: string;
        madeInCanada: string;
        forCanadianInstitutions: string;
        form: {
            fullName: string;
            fullNamePlaceholder: string;
            organization: string;
            organizationPlaceholder: string;
            emailAddress: string;
            emailPlaceholder: string;
            phoneNumber: string;
            phonePlaceholder: string;
            serviceOfInterest: string;
            selectService: string;
            message: string;
            messagePlaceholder: string;
            required: string;
            bookWhatsApp: string;
            bookEmail: string;
            sending: string;
            requiredFieldsAlert: string;
            successAlert: string;
            errorAlert: string;
            services: {
                lms: string;
                driving: string;
                aviation: string;
                manufacturing: string;
                multiple: string;
                other: string;
            };
        };
    };
    schools: {
        title: string;
        solutions: string;
        subtitle: string;
        completeEcosystem: string;
        ecosystemSubtitle: string;
        partner: string;
        partnerSubtitle: string;
        trustedPartnership: string;
        visitPartnerWebsite: string;
        schoolNetDescription: string;
        readyToTransform: string;
        readySubtitle: string;
        scheduleDemo: string;
        features: FeatureItem[];
    };
    driving: {
        title: string;
        simulator: string;
        subtitle: string;
        description: string;
        completeTraining: string;
        trainingSubtitle: string;
        lightVehicles: string;
        mediumVehicles: string;
        heavyVehicles: string;
        simulationTechnology: string;
        benefits: string;
        benefitsSubtitle: string;
        idealFor: string;
        idealForSubtitle: string;
        readyToTransform: string;
        readySubtitle: string;
        spotlightFeatures: FeatureItem[];
        features: FeatureItem[];
        benefitsList: BenefitItem[];
        idealForList: IdealForItem[];
    };
    userGuide: {
        title: string;
        documentation: string;
        subtitle: string;
        description: string;
        completeSuite: string;
        suiteSubtitle: string;
        automobile: string;
        aerospace: string;
        medical: string;
        industrial: string;
        readyToElevate: string;
        readySubtitle: string;
        spotlightFeatures: FeatureItem[];
        services: ServiceItem[];
    };
    alternating: {
        title: string;
        subtitle: string;
        trustedExpertise: {
            title: string;
            description: string;
        };
        customTailored: {
            title: string;
            description: string;
        };
        regulatoryCompliance: {
            title: string;
            description: string;
        };
    };
}

export type Language = 'en' | 'fr';
