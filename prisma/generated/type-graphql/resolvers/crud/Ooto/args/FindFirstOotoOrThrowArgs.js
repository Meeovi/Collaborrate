"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOotoOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/OotoOrderByWithRelationAndSearchRelevanceInput");
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
const OotoScalarFieldEnum_1 = require("../../../../enums/OotoScalarFieldEnum");
let FindFirstOotoOrThrowArgs = class FindFirstOotoOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], FindFirstOotoOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoOrderByWithRelationAndSearchRelevanceInput_1.OotoOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOotoOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], FindFirstOotoOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOotoOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOotoOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoScalarFieldEnum_1.OotoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOotoOrThrowArgs.prototype, "distinct", void 0);
FindFirstOotoOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstOotoOrThrowArgs);
exports.FindFirstOotoOrThrowArgs = FindFirstOotoOrThrowArgs;
