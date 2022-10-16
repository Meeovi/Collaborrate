"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const ZonesOrderByRelevanceFieldEnum_1 = require("../../enums/ZonesOrderByRelevanceFieldEnum");
let ZonesOrderByRelevanceInput = class ZonesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesOrderByRelevanceFieldEnum_1.ZonesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ZonesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByRelevanceInput.prototype, "search", void 0);
ZonesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ZonesOrderByRelevanceInput", {
        isAbstract: true
    })
], ZonesOrderByRelevanceInput);
exports.ZonesOrderByRelevanceInput = ZonesOrderByRelevanceInput;
