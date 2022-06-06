"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationOrderByWithRelationInput_1 = require("../../../inputs/InternalizationOrderByWithRelationInput");
const InternalizationWhereInput_1 = require("../../../inputs/InternalizationWhereInput");
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
const InternalizationScalarFieldEnum_1 = require("../../../../enums/InternalizationScalarFieldEnum");
let FindManyInternalizationArgs = class FindManyInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereInput_1.InternalizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereInput_1.InternalizationWhereInput)
], FindManyInternalizationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationOrderByWithRelationInput_1.InternalizationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInternalizationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], FindManyInternalizationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInternalizationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInternalizationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationScalarFieldEnum_1.InternalizationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInternalizationArgs.prototype, "distinct", void 0);
FindManyInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyInternalizationArgs);
exports.FindManyInternalizationArgs = FindManyInternalizationArgs;
