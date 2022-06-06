"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsOrderByWithRelationInput_1 = require("../../../inputs/ContractsOrderByWithRelationInput");
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
const ContractsScalarFieldEnum_1 = require("../../../../enums/ContractsScalarFieldEnum");
let FindManyContractsArgs = class FindManyContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], FindManyContractsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsOrderByWithRelationInput_1.ContractsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyContractsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], FindManyContractsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyContractsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyContractsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsScalarFieldEnum_1.ContractsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyContractsArgs.prototype, "distinct", void 0);
FindManyContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyContractsArgs);
exports.FindManyContractsArgs = FindManyContractsArgs;
