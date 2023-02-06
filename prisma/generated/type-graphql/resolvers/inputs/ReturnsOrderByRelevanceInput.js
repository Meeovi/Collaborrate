"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsOrderByRelevanceFieldEnum_1 = require("../../enums/ReturnsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsOrderByRelevanceInput = class ReturnsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsOrderByRelevanceFieldEnum_1.ReturnsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByRelevanceInput.prototype, "search", void 0);
ReturnsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsOrderByRelevanceInput", {
        isAbstract: true
    })
], ReturnsOrderByRelevanceInput);
exports.ReturnsOrderByRelevanceInput = ReturnsOrderByRelevanceInput;
