"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInternalizationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationOrderByWithRelationInput_1 = require("../../../inputs/InternalizationOrderByWithRelationInput");
const InternalizationWhereInput_1 = require("../../../inputs/InternalizationWhereInput");
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
const InternalizationScalarFieldEnum_1 = require("../../../../enums/InternalizationScalarFieldEnum");
let FindFirstInternalizationOrThrowArgs = class FindFirstInternalizationOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereInput_1.InternalizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereInput_1.InternalizationWhereInput)
], FindFirstInternalizationOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationOrderByWithRelationInput_1.InternalizationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInternalizationOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], FindFirstInternalizationOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInternalizationOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInternalizationOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationScalarFieldEnum_1.InternalizationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInternalizationOrThrowArgs.prototype, "distinct", void 0);
FindFirstInternalizationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstInternalizationOrThrowArgs);
exports.FindFirstInternalizationOrThrowArgs = FindFirstInternalizationOrThrowArgs;
