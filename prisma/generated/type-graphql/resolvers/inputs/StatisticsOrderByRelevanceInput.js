"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const StatisticsOrderByRelevanceFieldEnum_1 = require("../../enums/StatisticsOrderByRelevanceFieldEnum");
let StatisticsOrderByRelevanceInput = class StatisticsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsOrderByRelevanceFieldEnum_1.StatisticsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], StatisticsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByRelevanceInput.prototype, "search", void 0);
StatisticsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatisticsOrderByRelevanceInput", {
        isAbstract: true
    })
], StatisticsOrderByRelevanceInput);
exports.StatisticsOrderByRelevanceInput = StatisticsOrderByRelevanceInput;
