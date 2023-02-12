"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByWithRelationInput_1 = require("../../../inputs/PartnersOrderByWithRelationInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
const PartnersScalarFieldEnum_1 = require("../../../../enums/PartnersScalarFieldEnum");
let FindManyPartnersArgs = class FindManyPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], FindManyPartnersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByWithRelationInput_1.PartnersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPartnersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], FindManyPartnersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPartnersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPartnersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersScalarFieldEnum_1.PartnersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPartnersArgs.prototype, "distinct", void 0);
FindManyPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPartnersArgs);
exports.FindManyPartnersArgs = FindManyPartnersArgs;
