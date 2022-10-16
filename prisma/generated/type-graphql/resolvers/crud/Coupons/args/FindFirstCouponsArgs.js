"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CouponsOrderByWithRelationAndSearchRelevanceInput");
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
const CouponsScalarFieldEnum_1 = require("../../../../enums/CouponsScalarFieldEnum");
let FindFirstCouponsArgs = class FindFirstCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], FindFirstCouponsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsOrderByWithRelationAndSearchRelevanceInput_1.CouponsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCouponsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], FindFirstCouponsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCouponsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCouponsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsScalarFieldEnum_1.CouponsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCouponsArgs.prototype, "distinct", void 0);
FindFirstCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCouponsArgs);
exports.FindFirstCouponsArgs = FindFirstCouponsArgs;
