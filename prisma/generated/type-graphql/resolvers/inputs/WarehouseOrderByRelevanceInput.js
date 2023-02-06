"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const WarehouseOrderByRelevanceFieldEnum_1 = require("../../enums/WarehouseOrderByRelevanceFieldEnum");
let WarehouseOrderByRelevanceInput = class WarehouseOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseOrderByRelevanceFieldEnum_1.WarehouseOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WarehouseOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseOrderByRelevanceInput.prototype, "search", void 0);
WarehouseOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WarehouseOrderByRelevanceInput", {
        isAbstract: true
    })
], WarehouseOrderByRelevanceInput);
exports.WarehouseOrderByRelevanceInput = WarehouseOrderByRelevanceInput;
