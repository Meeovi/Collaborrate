"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsOrderByWithRelationInput_1 = require("../../../inputs/BrandsOrderByWithRelationInput");
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
let AggregateBrandsArgs = class AggregateBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], AggregateBrandsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsOrderByWithRelationInput_1.BrandsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBrandsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], AggregateBrandsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandsArgs.prototype, "skip", void 0);
AggregateBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBrandsArgs);
exports.AggregateBrandsArgs = AggregateBrandsArgs;
