"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DeepdiveAvgOrderByAggregateInput = class DeepdiveAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveAvgOrderByAggregateInput.prototype, "id", void 0);
DeepdiveAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DeepdiveAvgOrderByAggregateInput", {
        isAbstract: true
    })
], DeepdiveAvgOrderByAggregateInput);
exports.DeepdiveAvgOrderByAggregateInput = DeepdiveAvgOrderByAggregateInput;
