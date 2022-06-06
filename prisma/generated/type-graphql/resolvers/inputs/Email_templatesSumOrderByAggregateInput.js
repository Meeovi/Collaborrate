"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Email_templatesSumOrderByAggregateInput = class Email_templatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesSumOrderByAggregateInput.prototype, "id", void 0);
Email_templatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Email_templatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Email_templatesSumOrderByAggregateInput);
exports.Email_templatesSumOrderByAggregateInput = Email_templatesSumOrderByAggregateInput;
