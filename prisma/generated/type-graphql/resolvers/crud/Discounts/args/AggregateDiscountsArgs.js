"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsOrderByWithRelationInput_1 = require("../../../inputs/DiscountsOrderByWithRelationInput");
const DiscountsWhereInput_1 = require("../../../inputs/DiscountsWhereInput");
const DiscountsWhereUniqueInput_1 = require("../../../inputs/DiscountsWhereUniqueInput");
let AggregateDiscountsArgs = class AggregateDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereInput_1.DiscountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsWhereInput_1.DiscountsWhereInput)
], AggregateDiscountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DiscountsOrderByWithRelationInput_1.DiscountsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDiscountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsWhereUniqueInput_1.DiscountsWhereUniqueInput)
], AggregateDiscountsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDiscountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDiscountsArgs.prototype, "skip", void 0);
AggregateDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDiscountsArgs);
exports.AggregateDiscountsArgs = AggregateDiscountsArgs;
