"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Pdf_templatesSumOrderByAggregateInput = class Pdf_templatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesSumOrderByAggregateInput.prototype, "id", void 0);
Pdf_templatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Pdf_templatesSumOrderByAggregateInput);
exports.Pdf_templatesSumOrderByAggregateInput = Pdf_templatesSumOrderByAggregateInput;
