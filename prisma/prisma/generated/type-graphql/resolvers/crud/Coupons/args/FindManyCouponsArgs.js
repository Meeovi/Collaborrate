"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByWithRelationInput_1 = require("../../../inputs/CouponsOrderByWithRelationInput");
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
const CouponsScalarFieldEnum_1 = require("../../../../enums/CouponsScalarFieldEnum");
let FindManyCouponsArgs = class FindManyCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], FindManyCouponsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsOrderByWithRelationInput_1.CouponsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCouponsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], FindManyCouponsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCouponsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCouponsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsScalarFieldEnum_1.CouponsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCouponsArgs.prototype, "distinct", void 0);
FindManyCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCouponsArgs);
exports.FindManyCouponsArgs = FindManyCouponsArgs;
