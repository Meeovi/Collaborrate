"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsOrderByWithRelationInput_1 = require("../../../inputs/FullfillmentsOrderByWithRelationInput");
const FullfillmentsWhereInput_1 = require("../../../inputs/FullfillmentsWhereInput");
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
const FullfillmentsScalarFieldEnum_1 = require("../../../../enums/FullfillmentsScalarFieldEnum");
let FindFirstFullfillmentsArgs = class FindFirstFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereInput_1.FullfillmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereInput_1.FullfillmentsWhereInput)
], FindFirstFullfillmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsOrderByWithRelationInput_1.FullfillmentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFullfillmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], FindFirstFullfillmentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFullfillmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFullfillmentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsScalarFieldEnum_1.FullfillmentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFullfillmentsArgs.prototype, "distinct", void 0);
FindFirstFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstFullfillmentsArgs);
exports.FindFirstFullfillmentsArgs = FindFirstFullfillmentsArgs;
