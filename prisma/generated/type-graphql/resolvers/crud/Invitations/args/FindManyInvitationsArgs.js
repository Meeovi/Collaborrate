"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/InvitationsOrderByWithRelationAndSearchRelevanceInput");
const InvitationsWhereInput_1 = require("../../../inputs/InvitationsWhereInput");
const InvitationsWhereUniqueInput_1 = require("../../../inputs/InvitationsWhereUniqueInput");
const InvitationsScalarFieldEnum_1 = require("../../../../enums/InvitationsScalarFieldEnum");
let FindManyInvitationsArgs = class FindManyInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereInput_1.InvitationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsWhereInput_1.InvitationsWhereInput)
], FindManyInvitationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsOrderByWithRelationAndSearchRelevanceInput_1.InvitationsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInvitationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsWhereUniqueInput_1.InvitationsWhereUniqueInput)
], FindManyInvitationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInvitationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInvitationsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsScalarFieldEnum_1.InvitationsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInvitationsArgs.prototype, "distinct", void 0);
FindManyInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyInvitationsArgs);
exports.FindManyInvitationsArgs = FindManyInvitationsArgs;
