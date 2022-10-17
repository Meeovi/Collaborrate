"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TargetsOrderByRelevanceFieldEnum_1 = require("../../enums/TargetsOrderByRelevanceFieldEnum");
let TargetsOrderByRelevanceInput = class TargetsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsOrderByRelevanceFieldEnum_1.TargetsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TargetsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TargetsOrderByRelevanceInput.prototype, "search", void 0);
TargetsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TargetsOrderByRelevanceInput", {
        isAbstract: true
    })
], TargetsOrderByRelevanceInput);
exports.TargetsOrderByRelevanceInput = TargetsOrderByRelevanceInput;
