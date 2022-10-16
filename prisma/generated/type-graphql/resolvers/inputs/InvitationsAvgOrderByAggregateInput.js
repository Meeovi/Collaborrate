"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InvitationsAvgOrderByAggregateInput = class InvitationsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsAvgOrderByAggregateInput.prototype, "id", void 0);
InvitationsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], InvitationsAvgOrderByAggregateInput);
exports.InvitationsAvgOrderByAggregateInput = InvitationsAvgOrderByAggregateInput;
