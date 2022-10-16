"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InvitationsSumOrderByAggregateInput = class InvitationsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsSumOrderByAggregateInput.prototype, "id", void 0);
InvitationsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsSumOrderByAggregateInput", {
        isAbstract: true
    })
], InvitationsSumOrderByAggregateInput);
exports.InvitationsSumOrderByAggregateInput = InvitationsSumOrderByAggregateInput;
