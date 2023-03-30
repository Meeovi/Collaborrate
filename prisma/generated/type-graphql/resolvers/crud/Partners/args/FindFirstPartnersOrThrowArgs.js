"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPartnersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByWithRelationInput_1 = require("../../../inputs/PartnersOrderByWithRelationInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
const PartnersScalarFieldEnum_1 = require("../../../../enums/PartnersScalarFieldEnum");
let FindFirstPartnersOrThrowArgs = class FindFirstPartnersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], FindFirstPartnersOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByWithRelationInput_1.PartnersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPartnersOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], FindFirstPartnersOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPartnersOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPartnersOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersScalarFieldEnum_1.PartnersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPartnersOrThrowArgs.prototype, "distinct", void 0);
FindFirstPartnersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPartnersOrThrowArgs);
exports.FindFirstPartnersOrThrowArgs = FindFirstPartnersOrThrowArgs;
