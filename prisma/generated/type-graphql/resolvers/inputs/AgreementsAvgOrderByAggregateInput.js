"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AgreementsAvgOrderByAggregateInput = class AgreementsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsAvgOrderByAggregateInput.prototype, "id", void 0);
AgreementsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AgreementsAvgOrderByAggregateInput);
exports.AgreementsAvgOrderByAggregateInput = AgreementsAvgOrderByAggregateInput;
