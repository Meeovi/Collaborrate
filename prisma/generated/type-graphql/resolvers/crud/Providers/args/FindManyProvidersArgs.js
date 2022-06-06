"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersOrderByWithRelationInput_1 = require("../../../inputs/ProvidersOrderByWithRelationInput");
const ProvidersWhereInput_1 = require("../../../inputs/ProvidersWhereInput");
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
const ProvidersScalarFieldEnum_1 = require("../../../../enums/ProvidersScalarFieldEnum");
let FindManyProvidersArgs = class FindManyProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], FindManyProvidersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersOrderByWithRelationInput_1.ProvidersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProvidersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], FindManyProvidersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProvidersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProvidersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersScalarFieldEnum_1.ProvidersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProvidersArgs.prototype, "distinct", void 0);
FindManyProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProvidersArgs);
exports.FindManyProvidersArgs = FindManyProvidersArgs;
