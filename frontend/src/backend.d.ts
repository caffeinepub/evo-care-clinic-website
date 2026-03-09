import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface RegionalClinicInfo {
    clinics: Array<string>;
    contactInfo: string;
    continent: string;
}
export interface AppointmentRequest {
    id: string;
    service: string;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    addRegionalClinicInfo(continent: string, clinics: Array<string>, contactInfo: string): Promise<void>;
    bookAppointment(name: string, email: string, phone: string, service: string, preferredDate: string, message: string): Promise<string>;
    getAllAppointmentRequests(): Promise<Array<AppointmentRequest>>;
    getAllContactFormSubmissions(): Promise<Array<ContactFormSubmission>>;
    getAllRegionalClinicInfos(): Promise<Array<RegionalClinicInfo>>;
    getAppointmentRequest(id: string): Promise<AppointmentRequest>;
    getContactFormSubmission(id: string): Promise<ContactFormSubmission>;
    getRegionalClinicInfo(continent: string): Promise<RegionalClinicInfo>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<string>;
}
