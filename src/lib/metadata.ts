import type { Metadata } from "next"
import type { CaseStudy } from "./case-studies"
import { siteConfig } from "./site-config"

interface PageMetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    robots: noIndex ? "noindex,nofollow" : "index,follow",

    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: canonical || siteConfig.url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.creator}`,
    },

    alternates: canonical ? { canonical } : undefined,
  }
}

type StructuredData = Record<string, unknown>

export function generateStructuredData<T extends StructuredData>(
  type: string,
  data: T,
) {
  const baseData: StructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return {
    type: "application/ld+json",
    children: JSON.stringify(baseData),
  }
}

// 组织结构化数据
export function generateOrganizationLD() {
  return generateStructuredData("Organization", {
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "上海",
      addressRegion: "上海市",
      addressCountry: "CN",
      streetAddress: siteConfig.contact.address,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.weibo,
    ],
  })
}

// 软件应用结构化数据
export function generateSoftwareApplicationLD() {
  return generateStructuredData("SoftwareApplication", {
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "19800",
      priceCurrency: "CNY",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.creator,
    },
  })
}

// 案例研究结构化数据
export function generateCaseStudyLD(caseStudy: CaseStudy) {
  return generateStructuredData("Article", {
    headline: caseStudy.title,
    description: caseStudy.challenge,
    author: {
      "@type": "Organization",
      name: siteConfig.creator,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.creator,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    datePublished: caseStudy.publishedAt,
    dateModified: caseStudy.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    },
  })
}
