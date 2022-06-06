"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByWithRelationInput_1 = require("../../../inputs/OotoOrderByWithRelationInput");
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
const OotoScalarFieldEnum_1 = require("../../../../enums/OotoScalarFieldEnum");
let FindManyOotoArgs = class FindManyOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], FindManyOotoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoOrderByWithRelationInput_1.OotoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOotoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], FindManyOotoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOotoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOotoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoScalarFieldEnum_1.OotoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOotoArgs.prototype, "distinct", void 0);
FindManyOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyOotoArgs);
exports.FindManyOotoArgs = FindManyOotoArgs;
