"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ContractsOrderByWithRelationAndSearchRelevanceInput");
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
const ContractsWhereUniqueInput_1 = require("../../../inputs/ContractsWhereUniqueInput");
const ContractsScalarFieldEnum_1 = require("../../../../enums/ContractsScalarFieldEnum");
let FindFirstContractsArgs = class FindFirstContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], FindFirstContractsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsOrderByWithRelationAndSearchRelevanceInput_1.ContractsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstContractsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereUniqueInput_1.ContractsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereUniqueInput_1.ContractsWhereUniqueInput)
], FindFirstContractsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstContractsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstContractsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsScalarFieldEnum_1.ContractsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstContractsArgs.prototype, "distinct", void 0);
FindFirstContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstContractsArgs);
exports.FindFirstContractsArgs = FindFirstContractsArgs;
