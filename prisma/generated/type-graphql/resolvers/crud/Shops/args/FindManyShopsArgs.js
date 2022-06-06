"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsOrderByWithRelationInput_1 = require("../../../inputs/ShopsOrderByWithRelationInput");
const ShopsWhereInput_1 = require("../../../inputs/ShopsWhereInput");
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
const ShopsScalarFieldEnum_1 = require("../../../../enums/ShopsScalarFieldEnum");
let FindManyShopsArgs = class FindManyShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereInput_1.ShopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereInput_1.ShopsWhereInput)
], FindManyShopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsOrderByWithRelationInput_1.ShopsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], FindManyShopsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyShopsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsScalarFieldEnum_1.ShopsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyShopsArgs.prototype, "distinct", void 0);
FindManyShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyShopsArgs);
exports.FindManyShopsArgs = FindManyShopsArgs;
