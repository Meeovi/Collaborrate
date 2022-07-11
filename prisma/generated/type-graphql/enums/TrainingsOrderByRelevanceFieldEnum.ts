import * as TypeGraphQL from "type-graphql";

export enum TrainingsOrderByRelevanceFieldEnum {
  name = "name",
  subject = "subject",
  content = "content",
  media = "media",
  link = "link",
  steps = "steps",
  analytics = "analytics",
  competency = "competency",
  course = "course",
  grade = "grade",
  school = "school",
  address = "address",
  postal = "postal",
  teacher = "teacher",
  student = "student",
  anncouncement = "anncouncement",
  resource = "resource",
  badges = "badges",
  isPublic = "isPublic",
  isCompleted = "isCompleted",
  speakers = "speakers",
  fieldTrips = "fieldTrips",
  assignments = "assignments",
  assignmentsDueDate = "assignmentsDueDate",
  origanlityReport = "origanlityReport",
  faqs = "faqs",
  languages = "languages",
  city = "city",
  meetups = "meetups",
  lab = "lab",
  digiboards = "digiboards"
}
TypeGraphQL.registerEnumType(TrainingsOrderByRelevanceFieldEnum, {
  name: "TrainingsOrderByRelevanceFieldEnum",
  description: undefined,
});
