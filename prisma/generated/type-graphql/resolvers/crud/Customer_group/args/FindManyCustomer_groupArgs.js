"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Customer_groupOrderByWithRelationAndSearchRelevanceInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
const Customer_groupScalarFieldEnum_1 = require("../../../../enums/Customer_groupScalarFieldEnum");
let FindManyCustomer_groupArgs = class FindManyCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], FindManyCustomer_groupArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByWithRelationAndSearchRelevanceInput_1.Customer_groupOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCustomer_groupArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], FindManyCustomer_groupArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCustomer_groupArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCustomer_groupArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum_1.Customer_groupScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCustomer_groupArgs.prototype, "distinct", void 0);
FindManyCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCustomer_groupArgs);
exports.FindManyCustomer_groupArgs = FindManyCustomer_groupArgs;
