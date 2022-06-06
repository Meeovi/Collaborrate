"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShopsAvgOrderByAggregateInput = class ShopsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsAvgOrderByAggregateInput.prototype, "id", void 0);
ShopsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShopsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ShopsAvgOrderByAggregateInput);
exports.ShopsAvgOrderByAggregateInput = ShopsAvgOrderByAggregateInput;
