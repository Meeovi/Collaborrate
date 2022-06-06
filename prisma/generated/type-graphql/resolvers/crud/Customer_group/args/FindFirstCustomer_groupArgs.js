"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByWithRelationInput_1 = require("../../../inputs/Customer_groupOrderByWithRelationInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
const Customer_groupScalarFieldEnum_1 = require("../../../../enums/Customer_groupScalarFieldEnum");
let FindFirstCustomer_groupArgs = class FindFirstCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], FindFirstCustomer_groupArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByWithRelationInput_1.Customer_groupOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomer_groupArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], FindFirstCustomer_groupArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomer_groupArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomer_groupArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum_1.Customer_groupScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomer_groupArgs.prototype, "distinct", void 0);
FindFirstCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCustomer_groupArgs);
exports.FindFirstCustomer_groupArgs = FindFirstCustomer_groupArgs;
