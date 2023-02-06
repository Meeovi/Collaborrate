"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PartnersAvgOrderByAggregateInput = class PartnersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersAvgOrderByAggregateInput.prototype, "id", void 0);
PartnersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PartnersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PartnersAvgOrderByAggregateInput);
exports.PartnersAvgOrderByAggregateInput = PartnersAvgOrderByAggregateInput;
