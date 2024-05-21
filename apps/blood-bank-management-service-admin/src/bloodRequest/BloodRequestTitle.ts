import { BloodRequest as TBloodRequest } from "../api/bloodRequest/BloodRequest";

export const BLOODREQUEST_TITLE_FIELD = "patientName";

export const BloodRequestTitle = (record: TBloodRequest): string => {
  return record.patientName?.toString() || String(record.id);
};
