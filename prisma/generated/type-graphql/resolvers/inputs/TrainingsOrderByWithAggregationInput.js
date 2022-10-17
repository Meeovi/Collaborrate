"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsAvgOrderByAggregateInput_1 = require("../inputs/TrainingsAvgOrderByAggregateInput");
const TrainingsCountOrderByAggregateInput_1 = require("../inputs/TrainingsCountOrderByAggregateInput");
const TrainingsMaxOrderByAggregateInput_1 = require("../inputs/TrainingsMaxOrderByAggregateInput");
const TrainingsMinOrderByAggregateInput_1 = require("../inputs/TrainingsMinOrderByAggregateInput");
const TrainingsSumOrderByAggregateInput_1 = require("../inputs/TrainingsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TrainingsOrderByWithAggregationInput = class TrainingsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "steps", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "analytics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "competency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "course", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "grade", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "school", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "announcement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "badges", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "isCompleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "speakers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "fieldTrips", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "assignments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "assignmentsDueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "origanalityReport", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "faqs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "languages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "checklists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "meetups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "lab", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "digiboards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "countries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "states", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsCountOrderByAggregateInput_1.TrainingsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsCountOrderByAggregateInput_1.TrainingsCountOrderByAggregateInput)
], TrainingsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsAvgOrderByAggregateInput_1.TrainingsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsAvgOrderByAggregateInput_1.TrainingsAvgOrderByAggregateInput)
], TrainingsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsMaxOrderByAggregateInput_1.TrainingsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsMaxOrderByAggregateInput_1.TrainingsMaxOrderByAggregateInput)
], TrainingsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsMinOrderByAggregateInput_1.TrainingsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsMinOrderByAggregateInput_1.TrainingsMinOrderByAggregateInput)
], TrainingsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsSumOrderByAggregateInput_1.TrainingsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsSumOrderByAggregateInput_1.TrainingsSumOrderByAggregateInput)
], TrainingsOrderByWithAggregationInput.prototype, "_sum", void 0);
TrainingsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TrainingsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TrainingsOrderByWithAggregationInput);
exports.TrainingsOrderByWithAggregationInput = TrainingsOrderByWithAggregationInput;
