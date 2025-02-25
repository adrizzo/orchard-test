interface Image {
  src: string;
  alt: string;
}

export interface FirstSectionContent {
  title: string;
  mainContent: string;
  subtitle: string;
  subContent: string;
  images: Image[];
}

export interface ColorInfo {
  name: string;
  description: string;
  imageSrc: string;
}

export interface SecondSectionContent {
  title: string;
  colors: ColorInfo[];
}

export interface ContentData {
  firstSection: FirstSectionContent;
  secondSection: SecondSectionContent;
}
