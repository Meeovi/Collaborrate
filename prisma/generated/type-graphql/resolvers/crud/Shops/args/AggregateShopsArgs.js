"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsOrderByWithRelationInput_1 = require("../../../inputs/ShopsOrderByWithRelationInput");
const ShopsWhereInput_1 = require("../../../inputs/ShopsWhereInput");
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let AggregateShopsArgs = class AggregateShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereInput_1.ShopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereInput_1.ShopsWhereInput)
], AggregateShopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsOrderByWithRelationInput_1.ShopsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateShopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], AggregateShopsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShopsArgs.prototype, "skip", void 0);
AggregateShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateShopsArgs);
exports.AggregateShopsArgs = AggregateShopsArgs;
