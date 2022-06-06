"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosOrderByRelationAggregateInput = class Credit_memosOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByRelationAggregateInput.prototype, "_count", void 0);
Credit_memosOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Credit_memosOrderByRelationAggregateInput);
exports.Credit_memosOrderByRelationAggregateInput = Credit_memosOrderByRelationAggregateInput;
