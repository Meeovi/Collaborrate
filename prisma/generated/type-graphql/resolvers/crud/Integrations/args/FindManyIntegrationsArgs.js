"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsOrderByWithRelationInput_1 = require("../../../inputs/IntegrationsOrderByWithRelationInput");
const IntegrationsWhereInput_1 = require("../../../inputs/IntegrationsWhereInput");
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
const IntegrationsScalarFieldEnum_1 = require("../../../../enums/IntegrationsScalarFieldEnum");
let FindManyIntegrationsArgs = class FindManyIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereInput_1.IntegrationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereInput_1.IntegrationsWhereInput)
], FindManyIntegrationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsOrderByWithRelationInput_1.IntegrationsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIntegrationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], FindManyIntegrationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIntegrationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIntegrationsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsScalarFieldEnum_1.IntegrationsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIntegrationsArgs.prototype, "distinct", void 0);
FindManyIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyIntegrationsArgs);
exports.FindManyIntegrationsArgs = FindManyIntegrationsArgs;
