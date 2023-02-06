"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IntegrationsAvgOrderByAggregateInput = class IntegrationsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsAvgOrderByAggregateInput.prototype, "id", void 0);
IntegrationsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], IntegrationsAvgOrderByAggregateInput);
exports.IntegrationsAvgOrderByAggregateInput = IntegrationsAvgOrderByAggregateInput;
