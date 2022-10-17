"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerOrderByRelevanceInput_1 = require("../inputs/SchedulerOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SchedulerOrderByWithRelationAndSearchRelevanceInput = class SchedulerOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerOrderByRelevanceInput_1.SchedulerOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerOrderByRelevanceInput_1.SchedulerOrderByRelevanceInput)
], SchedulerOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SchedulerOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchedulerOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SchedulerOrderByWithRelationAndSearchRelevanceInput);
exports.SchedulerOrderByWithRelationAndSearchRelevanceInput = SchedulerOrderByWithRelationAndSearchRelevanceInput;
