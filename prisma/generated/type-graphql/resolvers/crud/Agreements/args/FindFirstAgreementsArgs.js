"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsOrderByWithRelationInput_1 = require("../../../inputs/AgreementsOrderByWithRelationInput");
const AgreementsWhereInput_1 = require("../../../inputs/AgreementsWhereInput");
const AgreementsWhereUniqueInput_1 = require("../../../inputs/AgreementsWhereUniqueInput");
const AgreementsScalarFieldEnum_1 = require("../../../../enums/AgreementsScalarFieldEnum");
let FindFirstAgreementsArgs = class FindFirstAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereInput_1.AgreementsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsWhereInput_1.AgreementsWhereInput)
], FindFirstAgreementsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsOrderByWithRelationInput_1.AgreementsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAgreementsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput)
], FindFirstAgreementsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAgreementsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAgreementsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsScalarFieldEnum_1.AgreementsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAgreementsArgs.prototype, "distinct", void 0);
FindFirstAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAgreementsArgs);
exports.FindFirstAgreementsArgs = FindFirstAgreementsArgs;
