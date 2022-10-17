"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByRelevanceInput_1 = require("../inputs/AnalyticsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AnalyticsOrderByWithRelationAndSearchRelevanceInput = class AnalyticsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "share_data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "website_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "tracking_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "property_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "default_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "property_hit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "tracking_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "data_collection", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "data_retention", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "search_analytics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsOrderByRelevanceInput_1.AnalyticsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsOrderByRelevanceInput_1.AnalyticsOrderByRelevanceInput)
], AnalyticsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
AnalyticsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AnalyticsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], AnalyticsOrderByWithRelationAndSearchRelevanceInput);
exports.AnalyticsOrderByWithRelationAndSearchRelevanceInput = AnalyticsOrderByWithRelationAndSearchRelevanceInput;
