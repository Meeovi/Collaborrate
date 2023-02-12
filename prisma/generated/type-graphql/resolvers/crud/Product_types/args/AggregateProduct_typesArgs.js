"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByWithRelationInput_1 = require("../../../inputs/Product_typesOrderByWithRelationInput");
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
let AggregateProduct_typesArgs = class AggregateProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], AggregateProduct_typesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesOrderByWithRelationInput_1.Product_typesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProduct_typesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], AggregateProduct_typesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_typesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_typesArgs.prototype, "skip", void 0);
AggregateProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProduct_typesArgs);
exports.AggregateProduct_typesArgs = AggregateProduct_typesArgs;
