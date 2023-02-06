"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesOrderByRelevanceFieldEnum_1 = require("../../enums/AttributesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AttributesOrderByRelevanceInput = class AttributesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesOrderByRelevanceFieldEnum_1.AttributesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AttributesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByRelevanceInput.prototype, "search", void 0);
AttributesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttributesOrderByRelevanceInput", {
        isAbstract: true
    })
], AttributesOrderByRelevanceInput);
exports.AttributesOrderByRelevanceInput = AttributesOrderByRelevanceInput;
