"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByRelevanceFieldEnum_1 = require("../../enums/RewardsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let RewardsOrderByRelevanceInput = class RewardsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByRelevanceFieldEnum_1.RewardsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RewardsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByRelevanceInput.prototype, "search", void 0);
RewardsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RewardsOrderByRelevanceInput", {
        isAbstract: true
    })
], RewardsOrderByRelevanceInput);
exports.RewardsOrderByRelevanceInput = RewardsOrderByRelevanceInput;
