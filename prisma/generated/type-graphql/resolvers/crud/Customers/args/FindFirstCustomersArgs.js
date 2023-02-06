"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput");
const CustomersWhereInput_1 = require("../../../inputs/CustomersWhereInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
const CustomersScalarFieldEnum_1 = require("../../../../enums/CustomersScalarFieldEnum");
let FindFirstCustomersArgs = class FindFirstCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], FindFirstCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersOrderByWithRelationAndSearchRelevanceInput_1.CustomersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], FindFirstCustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersScalarFieldEnum_1.CustomersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomersArgs.prototype, "distinct", void 0);
FindFirstCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCustomersArgs);
exports.FindFirstCustomersArgs = FindFirstCustomersArgs;
