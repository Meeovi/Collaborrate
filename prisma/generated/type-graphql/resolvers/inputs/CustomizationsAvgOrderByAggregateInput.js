"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomizationsAvgOrderByAggregateInput = class CustomizationsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsAvgOrderByAggregateInput.prototype, "id", void 0);
CustomizationsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CustomizationsAvgOrderByAggregateInput);
exports.CustomizationsAvgOrderByAggregateInput = CustomizationsAvgOrderByAggregateInput;
