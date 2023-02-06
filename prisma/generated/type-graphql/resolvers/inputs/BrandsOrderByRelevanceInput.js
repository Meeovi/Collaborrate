"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsOrderByRelevanceFieldEnum_1 = require("../../enums/BrandsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let BrandsOrderByRelevanceInput = class BrandsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsOrderByRelevanceFieldEnum_1.BrandsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BrandsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByRelevanceInput.prototype, "search", void 0);
BrandsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandsOrderByRelevanceInput", {
        isAbstract: true
    })
], BrandsOrderByRelevanceInput);
exports.BrandsOrderByRelevanceInput = BrandsOrderByRelevanceInput;
