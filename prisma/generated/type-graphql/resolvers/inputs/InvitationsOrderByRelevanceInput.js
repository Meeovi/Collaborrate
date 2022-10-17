"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsOrderByRelevanceFieldEnum_1 = require("../../enums/InvitationsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let InvitationsOrderByRelevanceInput = class InvitationsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsOrderByRelevanceFieldEnum_1.InvitationsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InvitationsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByRelevanceInput.prototype, "search", void 0);
InvitationsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsOrderByRelevanceInput", {
        isAbstract: true
    })
], InvitationsOrderByRelevanceInput);
exports.InvitationsOrderByRelevanceInput = InvitationsOrderByRelevanceInput;
