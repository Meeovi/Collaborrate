"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByRelevanceFieldEnum_1 = require("../../enums/AnalyticsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AnalyticsOrderByRelevanceInput = class AnalyticsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsOrderByRelevanceFieldEnum_1.AnalyticsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AnalyticsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsOrderByRelevanceInput.prototype, "search", void 0);
AnalyticsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AnalyticsOrderByRelevanceInput", {
        isAbstract: true
    })
], AnalyticsOrderByRelevanceInput);
exports.AnalyticsOrderByRelevanceInput = AnalyticsOrderByRelevanceInput;
