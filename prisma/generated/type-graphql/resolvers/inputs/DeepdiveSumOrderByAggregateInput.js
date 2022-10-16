"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DeepdiveSumOrderByAggregateInput = class DeepdiveSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveSumOrderByAggregateInput.prototype, "id", void 0);
DeepdiveSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DeepdiveSumOrderByAggregateInput", {
        isAbstract: true
    })
], DeepdiveSumOrderByAggregateInput);
exports.DeepdiveSumOrderByAggregateInput = DeepdiveSumOrderByAggregateInput;
