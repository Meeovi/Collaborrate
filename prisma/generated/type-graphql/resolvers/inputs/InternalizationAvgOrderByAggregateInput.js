"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InternalizationAvgOrderByAggregateInput = class InternalizationAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationAvgOrderByAggregateInput.prototype, "id", void 0);
InternalizationAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationAvgOrderByAggregateInput", {
        isAbstract: true
    })
], InternalizationAvgOrderByAggregateInput);
exports.InternalizationAvgOrderByAggregateInput = InternalizationAvgOrderByAggregateInput;
