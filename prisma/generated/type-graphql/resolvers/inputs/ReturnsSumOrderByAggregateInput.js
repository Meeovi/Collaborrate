"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsSumOrderByAggregateInput = class ReturnsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsSumOrderByAggregateInput.prototype, "id", void 0);
ReturnsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ReturnsSumOrderByAggregateInput);
exports.ReturnsSumOrderByAggregateInput = ReturnsSumOrderByAggregateInput;
