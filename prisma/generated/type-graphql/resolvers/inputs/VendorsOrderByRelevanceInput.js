"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const VendorsOrderByRelevanceFieldEnum_1 = require("../../enums/VendorsOrderByRelevanceFieldEnum");
let VendorsOrderByRelevanceInput = class VendorsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsOrderByRelevanceFieldEnum_1.VendorsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VendorsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByRelevanceInput.prototype, "search", void 0);
VendorsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VendorsOrderByRelevanceInput", {
        isAbstract: true
    })
], VendorsOrderByRelevanceInput);
exports.VendorsOrderByRelevanceInput = VendorsOrderByRelevanceInput;
