"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByRelevanceInput_1 = require("../inputs/MeetingOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MeetingOrderByWithRelationAndSearchRelevanceInput = class MeetingOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "related_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "reminders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "invitees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "scheduling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingOrderByRelevanceInput_1.MeetingOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingOrderByRelevanceInput_1.MeetingOrderByRelevanceInput)
], MeetingOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
MeetingOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MeetingOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], MeetingOrderByWithRelationAndSearchRelevanceInput);
exports.MeetingOrderByWithRelationAndSearchRelevanceInput = MeetingOrderByWithRelationAndSearchRelevanceInput;
