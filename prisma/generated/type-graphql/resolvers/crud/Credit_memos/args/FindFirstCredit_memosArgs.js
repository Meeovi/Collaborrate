"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByWithRelationInput_1 = require("../../../inputs/Credit_memosOrderByWithRelationInput");
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
const Credit_memosScalarFieldEnum_1 = require("../../../../enums/Credit_memosScalarFieldEnum");
let FindFirstCredit_memosArgs = class FindFirstCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], FindFirstCredit_memosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosOrderByWithRelationInput_1.Credit_memosOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCredit_memosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], FindFirstCredit_memosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCredit_memosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCredit_memosArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosScalarFieldEnum_1.Credit_memosScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCredit_memosArgs.prototype, "distinct", void 0);
FindFirstCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCredit_memosArgs);
exports.FindFirstCredit_memosArgs = FindFirstCredit_memosArgs;
