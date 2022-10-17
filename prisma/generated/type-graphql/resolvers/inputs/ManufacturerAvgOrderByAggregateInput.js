"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ManufacturerAvgOrderByAggregateInput = class ManufacturerAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerAvgOrderByAggregateInput.prototype, "product", void 0);
ManufacturerAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ManufacturerAvgOrderByAggregateInput);
exports.ManufacturerAvgOrderByAggregateInput = ManufacturerAvgOrderByAggregateInput;
