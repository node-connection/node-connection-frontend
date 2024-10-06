export type BuildingDescriptionType = {
  displayNumber: string;
  receiptDate: string;
  locationNumber: string;
  buildingDetails: string;
  registrationCause: string;
};

export type LandDescriptionType = {
  displayNumber: string;
  locationNumber: string;
  landType: string;
  area: string;
  registrationCause: string;
};

export type BuildingPartDescriptionType = {
  displayNumber: string;
  receiptDate: string;
  partNumber: string;
  buildingDetails: string;
  registrationCause: string;
};

export type LandRightDescriptionType = {
  displayNumber: string;
  landRightType: string;
  landRightRatio: string;
  registrationCause: string;
};

export type FirstSectionType = {
  rankNumber: string;
  registrationPurpose: string;
  receiptDate: string;
  registrationCause: string;
  holderAndAdditionalInfo: string;
};

export type SecondSectionType = {
  rankNumber: string;
  registrationPurpose: string;
  receiptDate: string;
  registrationCause: string;
  holderAndAdditionalInfo: string;
};
