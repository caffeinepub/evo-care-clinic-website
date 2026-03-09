import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type ContactFormSubmission = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactFormSubmission {
    public func compare(a : ContactFormSubmission, b : ContactFormSubmission) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  type AppointmentRequest = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    preferredDate : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module AppointmentRequest {
    public func compare(a : AppointmentRequest, b : AppointmentRequest) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  type RegionalClinicInfo = {
    continent : Text;
    clinics : [Text];
    contactInfo : Text;
  };

  module RegionalClinicInfo {
    public func compare(a : RegionalClinicInfo, b : RegionalClinicInfo) : Order.Order {
      Text.compare(a.continent, b.continent);
    };
  };

  let contactFormSubmissionsList = List.empty<ContactFormSubmission>();
  let appointmentRequestsList = List.empty<AppointmentRequest>();
  let regionalClinicInfos = Map.empty<Text, RegionalClinicInfo>();

  // Public functions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async Text {
    let id = name.concat(Time.now().toText());
    let submission : ContactFormSubmission = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactFormSubmissionsList.add(submission);
    id;
  };

  public shared ({ caller }) func bookAppointment(name : Text, email : Text, phone : Text, service : Text, preferredDate : Text, message : Text) : async Text {
    let id = name.concat(Time.now().toText());
    let request : AppointmentRequest = {
      id;
      name;
      email;
      phone;
      service;
      preferredDate;
      message;
      timestamp = Time.now();
    };
    appointmentRequestsList.add(request);
    id;
  };

  public shared ({ caller }) func addRegionalClinicInfo(continent : Text, clinics : [Text], contactInfo : Text) : async () {
    let info : RegionalClinicInfo = {
      continent;
      clinics;
      contactInfo;
    };
    regionalClinicInfos.add(continent, info);
  };

  public query ({ caller }) func getRegionalClinicInfo(continent : Text) : async RegionalClinicInfo {
    switch (regionalClinicInfos.get(continent)) {
      case (?info) { info };
      case (null) { Runtime.trap("Regional clinic info not found") };
    };
  };

  public query ({ caller }) func getAllContactFormSubmissions() : async [ContactFormSubmission] {
    contactFormSubmissionsList.toArray().sort();
  };

  public query ({ caller }) func getAllAppointmentRequests() : async [AppointmentRequest] {
    appointmentRequestsList.toArray().sort();
  };

  public query ({ caller }) func getAllRegionalClinicInfos() : async [RegionalClinicInfo] {
    regionalClinicInfos.values().toArray().sort();
  };

  public query ({ caller }) func getContactFormSubmission(id : Text) : async ContactFormSubmission {
    switch (contactFormSubmissionsList.toArray().find(func(submission) { submission.id == id })) {
      case (?submission) { submission };
      case (null) { Runtime.trap("Contact form submission not found") };
    };
  };

  public query ({ caller }) func getAppointmentRequest(id : Text) : async AppointmentRequest {
    switch (appointmentRequestsList.toArray().find(func(request) { request.id == id })) {
      case (?request) { request };
      case (null) { Runtime.trap("Appointment request not found") };
    };
  };
};
