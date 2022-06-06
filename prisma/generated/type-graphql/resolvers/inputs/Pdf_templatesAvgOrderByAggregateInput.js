"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Pdf_templatesAvgOrderByAggregateInput = class Pdf_templatesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesAvgOrderByAggregateInput.prototype, "id", void 0);
Pdf_templatesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Pdf_templatesAvgOrderByAggregateInput);
exports.Pdf_templatesAvgOrderByAggregateInput = Pdf_templatesAvgOrderByAggregateInput;
