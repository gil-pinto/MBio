// Clean input for Footer component
export interface FooterData {
  footer_columns: {
    title: string;
    links: {
      label: string;
      url: string;
    }[];
  }[];
  legal_links: {
    label: string;
    url: string;
  }[];
  social_links: {
    platform: string;
    url: string;
    icon: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  }[];
  company_info: any;
  up_bottom?: {
    upText: string;
    arrowUrl: string;
    url: string;
  } | null;
  subscribe_callout?: {
    title: string;
    description: any;
    buttonText: string;
    buttonUrl: string;
  } | null;
}

export interface RawFooterData {
  footerColumnsCollection?: {
    items: {
      title: string;
      links: {
        label: string;
        url: string;
      }[];
    }[];
  };
  legalLinksCollection?: {
    items: {
      label: string;
      url: string;
    }[];
  };
  socialLinksCollection?: {
    items: {
      platform: string;
      url: string;
      icon?: {
        url?: string;
      };
    }[];
  };
  companyInfo?: any;
  upBottom?: {
    upText: string;
    url: string;
    arrow?: {
      url: string;
    };
  };
  subscribeCallout?: {
    title: string;
    description: any;
    buttonText: string;
    buttonUrl: string;
  };
}
