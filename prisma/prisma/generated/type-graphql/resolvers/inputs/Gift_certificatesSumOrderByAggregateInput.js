"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Gift_certificatesSumOrderByAggregateInput = class Gift_certificatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesSumOrderByAggregateInput.prototype, "id", void 0);
Gift_certificatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Gift_certificatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Gift_certificatesSumOrderByAggregateInput);
exports.Gift_certificatesSumOrderByAggregateInput = Gift_certificatesSumOrderByAggregateInput;
