"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AttributesAvgOrderByAggregateInput = class AttributesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesAvgOrderByAggregateInput.prototype, "prod_id", void 0);
AttributesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttributesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AttributesAvgOrderByAggregateInput);
exports.AttributesAvgOrderByAggregateInput = AttributesAvgOrderByAggregateInput;
