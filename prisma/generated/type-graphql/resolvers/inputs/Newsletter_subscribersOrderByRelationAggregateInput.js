"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersOrderByRelationAggregateInput = class Newsletter_subscribersOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByRelationAggregateInput.prototype, "_count", void 0);
Newsletter_subscribersOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Newsletter_subscribersOrderByRelationAggregateInput);
exports.Newsletter_subscribersOrderByRelationAggregateInput = Newsletter_subscribersOrderByRelationAggregateInput;
