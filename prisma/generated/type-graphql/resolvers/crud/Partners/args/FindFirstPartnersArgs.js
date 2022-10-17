"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PartnersOrderByWithRelationAndSearchRelevanceInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
const PartnersScalarFieldEnum_1 = require("../../../../enums/PartnersScalarFieldEnum");
let FindFirstPartnersArgs = class FindFirstPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], FindFirstPartnersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByWithRelationAndSearchRelevanceInput_1.PartnersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPartnersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], FindFirstPartnersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPartnersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPartnersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersScalarFieldEnum_1.PartnersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPartnersArgs.prototype, "distinct", void 0);
FindFirstPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPartnersArgs);
exports.FindFirstPartnersArgs = FindFirstPartnersArgs;
