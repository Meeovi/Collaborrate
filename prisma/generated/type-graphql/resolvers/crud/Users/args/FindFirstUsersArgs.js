"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersOrderByWithRelationInput_1 = require("../../../inputs/UsersOrderByWithRelationInput");
const UsersWhereInput_1 = require("../../../inputs/UsersWhereInput");
const UsersWhereUniqueInput_1 = require("../../../inputs/UsersWhereUniqueInput");
const UsersScalarFieldEnum_1 = require("../../../../enums/UsersScalarFieldEnum");
let FindFirstUsersArgs = class FindFirstUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], FindFirstUsersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersOrderByWithRelationInput_1.UsersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUsersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereUniqueInput_1.UsersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereUniqueInput_1.UsersWhereUniqueInput)
], FindFirstUsersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUsersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUsersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarFieldEnum_1.UsersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUsersArgs.prototype, "distinct", void 0);
FindFirstUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUsersArgs);
exports.FindFirstUsersArgs = FindFirstUsersArgs;
